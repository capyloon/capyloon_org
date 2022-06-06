document.addEventListener("DOMContentLoaded", async () => {
  console.log(`Loaded!`);

  let capyloon = new Capyloon();

  await capyloon.ready;

  console.log(`Capyloon APIs are ready`);

  document.getElementById("request-access").onclick = async (event) => {
    console.log(`Requesting access...`);
    let dweb = await capyloon.apiDaemon.getDwebService();

    let ucan = window.localStorage.getItem("ucan");
    if (!ucan) {
      // TODO: get a real DID generator.
      ucan = await dweb.requestCapabilities(
        "did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL",
        [{ scope: "vfs:///places/", action: "vfs/READ" }]
      );
      window.localStorage.setItem("ucan", ucan);
      capyloon.log(`UCAN saved to local storage`);
    }
    capyloon.log(`UCAN Token is ${ucan}`);

    // Get the content manager service and present our fresh UCAN.
    let contentManager = await capyloon.apiDaemon.getContentManager();
    try {
      await contentManager.withUcan(ucan);
    } catch(e) {
      capyloon.log(`Failed to use UCAN: ${JSON.stringify(e)}`);
      window.localStorage.removeItem("ucan");
      return;
    }

    let root = await contentManager.getRoot();
    let places = await contentManager.childByName(root.id, "places");

    event.target.remove();

    // Get all the children of /places.
    let cursor = await contentManager.childrenOf(places.id);
    let done = false;
    let list = document.getElementById("list");
    while (!done) {
      try {
        let children = await cursor.next();
        for (let child of children) {
          let place = await contentManager.getVariantJson(child.id, "default");
          // capyloon.log(JSON.stringify(place));

          let item = document.createElement("div");
          item.classList.add("place");
          item.innerHTML = `<a href="${place.url}" target="_blank"><img src="${place.icon}"/><span>${place.title}</span></a>`;

          list.append(item);
        }
      } catch (e) {
        // cursor.next() rejects when no more items are available, so it's not
        // a fatal error.
        done = true;
      }
    }
  };
});
