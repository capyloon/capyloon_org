// Password based key derivation for encryption & decryption.

class PasswordBasedSecret {
  constructor(password) {
    this.password = password;
  }

  async getKeyMaterial() {
    let enc = new TextEncoder();
    return await window.crypto.subtle.importKey(
      "raw",
      enc.encode(this.password),
      "PBKDF2",
      false,
      ["deriveBits", "deriveKey"]
    );
  }

  async getSymKey() {
    let keyMaterial = await this.getKeyMaterial(this.password);
    let enc = new TextEncoder();
    return await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: enc.encode("capyloon-salt"),
        iterations: 400000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }

  async encrypt(plaintext) {
    return await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: new Uint8Array(1),
      },
      await this.getSymKey(this.password),
      plaintext
    );
  }

  async decrypt(ciphertext) {
    return await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: new Uint8Array(1),
      },
      await this.getSymKey(this.password),
      ciphertext
    );
  }

  async encryptText(plaintext) {
    return await this.encrypt(new TextEncoder().encode(plaintext));
  }

  async decryptText(ciphertext) {
    return new TextDecoder().decode(await this.decrypt(ciphertext));
  }
}

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    document
      .getElementById("password-form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log(`Will decrypt with password ${window.password.value}`);

        let secrets = new PasswordBasedSecret(window.password.value);
        let ipfsUrl = `https://${cid}.ipfs.cloudflare-ipfs.com`;
        try {
          let response = await fetch(ipfsUrl);
          let buffer = await response.arrayBuffer();
          let result = await secrets.decrypt(buffer);
          let blob = new Blob([result]);
          document.getElementById("result-frame").src =
            URL.createObjectURL(blob);
        } catch (e) {
          console.error(`Error: ${e}`);
          alert(`Error: ${e}`);
        }
      });

    let params = new URLSearchParams(location.search);
    let cid = params.get("cid");
    window.cid.textContent = cid;
  },
  { once: true }
);
