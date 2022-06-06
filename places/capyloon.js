// Utilities to work with Capyloon APIs:
// - UCAN
// - ContentManager

class Capyloon {
  constructor() {
    this.ready = this.init();
  }

  log(msg) {
    console.log("Capyloon UCAN:", msg);
  }

  error(msg) {
    console.error("Capyloon UCAN:", msg);
  }

  async init() {
    // Load the api-daemon library, either from port 80 or 8081
    let daemonModule;
    let port = 80;
    try {
      daemonModule = await import(`http://shared.localhost/js/api_daemon.js`);
    } catch (e) {}
    if (!daemonModule) {
      try {
        daemonModule = await import(
          `http://shared.localhost:8081/js/api_daemon.js`
        );
        port = 8081;
      } catch (e) {}
    }

    if (!daemonModule) {
      this.error("Failed to load api-daemon module!");
      return;
    }

    this.apiDaemon = new daemonModule.ApiDaemon({ port }, window);
  }
}
