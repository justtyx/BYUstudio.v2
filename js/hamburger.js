document.querySelector(".hamcat-shop").addEventListener("click", openShop);
document.querySelector(".hamcat-about").addEventListener("click", openAbout);
document.querySelector(".hamcat-start").addEventListener("click", openStart);
document.querySelector(".hamcat-shop").addEventListener("mouseover", openShop);
document
  .querySelector(".hamcat-about")
  .addEventListener("mouseover", openAbout);
document
  .querySelector(".hamcat-start")
  .addEventListener("mouseover", openStart);
document.querySelector(".close-icon").addEventListener("click", closeHam);
document.querySelector(".open-button").addEventListener("click", openHam);
window.addEventListener("resize", checkWindowsize);
checkWindowsize();

var toggleshop = 1;
var toggleabout = 1;
var togglestart = 1;
var w;

function openShop() {
  // console.log("shop");
  if (w < 750) {
    if (toggleshop == 1) {
      toggleshop++;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".pages-shop").classList.remove("hidden");
      document.querySelector(".pages-about").classList.add("hidden");
      document.querySelector(".pages-getstarted").classList.add("hidden");

      // console.log(
      //   `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
      // );
    } else if (toggleshop == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".pages-shop").classList.add("hidden");
      document.querySelector(".pages-about").classList.add("hidden");
      document.querySelector(".pages-getstarted").classList.add("hidden");

      // console.log(
      //   `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
      // );
    }
  } else if (w >= 750) {
    if (toggleshop == 1) {
      toggleshop++;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".big-pages-shop").classList.remove("hidden");
      document.querySelector(".big-pages-about").classList.add("hidden");
      document.querySelector(".big-pages-getstarted").classList.add("hidden");

      // console.log(
      //   `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
      // );
    } else if (toggleshop == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".big-pages-shop").classList.add("hidden");
      document.querySelector(".big-pages-about").classList.add("hidden");
      document.querySelector(".big-pages-getstarted").classList.add("hidden");

      // console.log(
      //   `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
      // );
    }
  }
}
function openAbout() {
  // console.log("About");
  if (w < 750) {
    if (toggleabout == 1) {
      toggleshop = 1;
      toggleabout++;
      togglestart = 1;
      document.querySelector(".pages-shop").classList.add("hidden");
      document.querySelector(".pages-about").classList.remove("hidden");
      document.querySelector(".pages-getstarted").classList.add("hidden");
    } else if (toggleabout == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".pages-shop").classList.add("hidden");
      document.querySelector(".pages-about").classList.add("hidden");
      document.querySelector(".pages-getstarted").classList.add("hidden");
    }
  } else if (w >= 750) {
    if (toggleabout == 1) {
      toggleshop = 1;
      toggleabout++;
      togglestart = 1;
      document.querySelector(".big-pages-shop").classList.add("hidden");
      document.querySelector(".big-pages-about").classList.remove("hidden");
      document.querySelector(".big-pages-getstarted").classList.add("hidden");
    } else if (toggleabout == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".big-pages-shop").classList.add("hidden");
      document.querySelector(".big-pages-about").classList.add("hidden");
      document.querySelector(".big-pages-getstarted").classList.add("hidden");
    }
  }
}
function openStart() {
  if (w < 750) {
    if (togglestart == 1) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart++;
      document.querySelector(".pages-shop").classList.add("hidden");
      document.querySelector(".pages-about").classList.add("hidden");
      document.querySelector(".pages-getstarted").classList.remove("hidden");
    } else if (togglestart == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".pages-shop").classList.add("hidden");
      document.querySelector(".pages-about").classList.add("hidden");
      document.querySelector(".pages-getstarted").classList.add("hidden");
    }
  } else if (w >= 750) {
    if (togglestart == 1) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart++;
      document.querySelector(".big-pages-shop").classList.add("hidden");
      document.querySelector(".big-pages-about").classList.add("hidden");
      document
        .querySelector(".big-pages-getstarted")
        .classList.remove("hidden");
    } else if (togglestart == 2) {
      toggleshop = 1;
      toggleabout = 1;
      togglestart = 1;
      document.querySelector(".big-pages-shop").classList.add("hidden");
      document.querySelector(".big-pages-about").classList.add("hidden");
      document.querySelector(".big-pages-getstarted").classList.add("hidden");
    }
  }
}
function closeHam() {
  document.querySelector(".sec-hamburger").classList.remove("open");
  // document.querySelector("body").style.overflow = "visible";
  document.querySelector(".big-pages-about").classList.add("hidden");
  document.querySelector(".big-pages-shop").classList.add("hidden");
  document.querySelector(".big-pages-getstarted").classList.add("hidden");
  // console.log("close");
}
function openHam() {
  document.querySelector(".sec-hamburger").classList.add("open");
  // document.querySelector("body").style.overflow = "hidden";
  // console.log("open");
}

function checkWindowsize() {
  w = window.innerWidth;
  // console.log(w);
}
