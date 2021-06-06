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
  // console.log(element);

  //DESKTOP
  // grab the template
  const templateD = document.querySelector(".template-desktop").content;
  // clone the template
  const cloneD = templateD.cloneNode(true);
  // change the content
  cloneD.querySelector(".cartproductname").textContent = element.name;
  cloneD.querySelector(".cartproductprice").textContent = `${element.price}`;
  cloneD.querySelector(".cartproductimage").src = `"${element.picture}"`;
  // grab the parent
  const parentD = document.querySelector(".templateparent-desktop");
  // apend
  parentD.appendChild(cloneD);
  // document.querySelector(".ordersummarydesktop .calctotalprice").textContent =
  //   "";

  //MOBILE
  const template = document.querySelector(".template-mobile").content;
  // clone the template
  const clone = template.cloneNode(true);
  // change the content
  clone.querySelector(".cartproductname").textContent = element.name;
  // const imagelink = JSON.parse(element.picture[1]);
  // console.log(element.picture);
  clone.querySelector(".cartproductimage").src = `"${element.picture}"`;
  clone.querySelector(".cartproductprice").textContent = `${element.price}`;
  // grab the parent
  const parentM = document.querySelector(".templateparent-mobile");
  // apend
  parentM.appendChild(clone);

  // document.querySelector(".mobilesummarycontent .calctotalprice").textContent =
  //   "";
});

// this is just hardcoding the amount of strings
// let stringlenght = contentstring.length;
// let total =
//   contentstring[stringlenght - 1].price +
//   contentstring[stringlenght - 2].price +
//   contentstring[stringlenght - 3].price;
// document.querySelector(".ordersummarydesktop .calctotalprice").textContent =
//   total;
// document.querySelector(".ordersummarymobile .calctotalprice").textContent =
//   total;

//---------TRYING A BUNCH OF THINGS AND FAILING ---------

// document.querySelectorAll(".cartproductprice")

// let test = Array.from(document.querySelectorAll(".cartproductprice").innerHTML);
// console.log(document.querySelector(".cartproductprice").innerHTML);
// let priceplace = document.querySelectorAll(".cartproductprice").innerHTML;

//adjust total price
// var pricearray = ${`.cartproductprice`};
// var inputs = $(".class1");
// for (var i = 0; i < pricearray.length; i++) {
//   alert($(price[i]).val());
// }

// const totalPrice = {
//   KEY: "pricekey",
//   contentsprice: [],
//   init() {
//     //_contentsprice is a temporary string
//     let _contentsprice = localStorage.getItem(basket.price);
//     console.log(localStorage.getItem(basket.price));
//     if (_contentsprice) {
//       //if there is anything turn it into JS objects that we can access with the dot . notation
//       pricekey.contentsprice = JSON.parse(_contentsprice);
//     }
//   },
// };
// console.log(totalPrice);
