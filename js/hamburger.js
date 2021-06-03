document.querySelector(".hamcat-shop").addEventListener("click", openShop);
document.querySelector(".hamcat-about").addEventListener("click", openAbout);
document.querySelector(".hamcat-start").addEventListener("click", openStart);
document.querySelector(".close-icon").addEventListener("click", closeHam);
document.querySelector(".open").addEventListener("click", openHam);

var toggleshop = 1;
var toggleabout = 1;
var togglestart = 1;

function openShop() {
  if (toggleshop == 1) {
    toggleshop++;
    toggleabout = 1;
    togglestart = 1;
    document.querySelector(".pages-shop").classList.remove("hidden");
    document.querySelector(".pages-about").classList.add("hidden");
    document.querySelector(".pages-getstarted").classList.add("hidden");

    console.log(
      `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
    );
  } else if (toggleshop == 2) {
    toggleshop = 1;
    toggleabout = 1;
    togglestart = 1;
    document.querySelector(".pages-shop").classList.add("hidden");
    document.querySelector(".pages-about").classList.add("hidden");
    document.querySelector(".pages-getstarted").classList.add("hidden");

    console.log(
      `shop is ${toggleshop}, about is ${toggleabout}, start is ${togglestart}`
    );
  }
}

function openAbout() {
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
}

function openStart() {
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
}

function closeHam() {
  document.querySelector(".sec-hamburger").classList.add("close");
  document.querySelector("body").style.overflow = "visible";
}
function openHam() {
  document.querySelector(".sec-hamburger").classList.remove("close");
  document.querySelector("body").style.overflow = "hidden";
}
