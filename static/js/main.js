import Plausible from "./plausible/index.js";

function start() {
  const plausible = Plausible({
    domain: "capyloon.org",
  });
  plausible.trackPageview();
}

document.addEventListener("DOMContentLoaded", start, { once: true });
