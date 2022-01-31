import Plausible from "./plausible/index.js";

function start() {
  let carousel = document.getElementById("desktop-carousel");
  let desktopImages = [
    "Homescreen",
    "Quick Settings",
    "Latest Activity",
    "Installed Apps",
    "Terminal App",
    "Carousel View",
    "Image Processing Plugins",
    "uBlockOrigin Panel",
    "Page Information",
    "Split Screen Mode",
  ];

  desktopImages.forEach((desc, index) => {
    let item = document.createElement("div");
    item.innerHTML = `<img src="screenshots/desktop-${
      index + 1
    }.webp" alt="${desc}" title="${desc}"/><div>${desc}</div>`;
    carousel.append(item);
  });

  carousel = document.getElementById("mobile-carousel");
  let mobileImages = [
    "Lockscreen",
    "Homescreen",
    "Quick Settings",
    "Latest Activity",
    "Installed Apps",
    "Carousel View",
    "uBlockOrigin Panel",
    "Page Information",
  ];

  mobileImages.forEach((desc, index) => {
    let item = document.createElement("div");
    item.innerHTML = `<img src="screenshots/mobile-${
      index + 1
    }.webp" alt="${desc}" title="${desc}"/><div>${desc}</div>`;
    carousel.append(item);
  });

  let privacyLink = document.getElementById("privacy-link");
  let privacyPolicy = document.getElementById("privacy-policy");

  privacyLink.onclick = () => {
    console.log(`Display privacy policy`);
    privacyPolicy.classList.add("open");
  };

  privacyPolicy.onclick = () => {
    console.log(`Hide privacy policy`);
    privacyPolicy.classList.remove("open");
  };

  const plausible = Plausible({
    domain: "capyloon.org",
  });
  plausible.trackPageview();
}

document.addEventListener("DOMContentLoaded", start, { once: true });
