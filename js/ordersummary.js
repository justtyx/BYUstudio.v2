const mobilesummary = document.querySelector(".sumarrow");
mobilesummary.addEventListener("click", toggleSummary);
let val = 1;

function toggleSummary() {
  if (val == 1) {
    document.querySelector(".summaryflex > img").classList.add("rotatearrow");
    document.querySelector(".summaryphone").classList.remove("hidden");
    document.querySelector(".summarytoggletext").textContent = "Close";
    val = val + 1;
    console.log("open");
  } else if (val == 2) {
    document
      .querySelector(".summaryflex > img")
      .classList.remove("rotatearrow");
    document.querySelector(".summaryphone").classList.add("hidden");
    document.querySelector(".summarytoggletext").textContent = "See";
    val = val - 1;
    console.log("close");
  }
}

const contents = localStorage.getItem("basket");
const contentstring = JSON.parse(contents);

contentstring.forEach((element) => {
  console.log(element);

  //DESKTOP
  // grab the template
  const templateD = document.querySelector(".template-desktop").content;
  // clone the template
  const cloneD = templateD.cloneNode(true);
  // change the content
  cloneD.querySelector(".cartproductname").textContent = element.name;
  cloneD.querySelector(
    ".cartproductprice"
  ).textContent = `${element.price} DKK`;
  // cloneD.querySelector(".cartproductdescription").textContent =
  //   element.description;
  // grab the parent
  const parentD = document.querySelector(".templateparent-desktop");
  // apend
  parentD.appendChild(cloneD);
  document.querySelector(".ordersummarydesktop .calctotalprice").textContent =
    "";

  //MOBILE
  const template = document.querySelector(".template-mobile").content;
  // clone the template
  const clone = template.cloneNode(true);
  // change the content
  clone.querySelector(".cartproductname").textContent = element.name;
  clone.querySelector(".cartproductprice").textContent = `${element.price} DKK`;
  // clone.querySelector(".cartproductdescription").textContent =
  //   element.description;
  // grab the parent
  const parentM = document.querySelector(".templateparent-mobile");
  // apend
  parentM.appendChild(clone);

  document.querySelector(".mobilesummarycontent .calctotalprice").textContent =
    "";
});

// console.log(Array.from(document.querySelectorAll(".cartproductprice")));
//adjust total price
// var pricearray = ${`.cartproductprice`};
// var inputs = $(".class1");
// for (var i = 0; i < pricearray.length; i++) {
//   alert($(price[i]).val());
// }
