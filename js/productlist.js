// restdb.io endpoint: https://kea21-7e1e.restdb.io/rest/byu-products
// apikey: 602f9e445ad3610fb5bb63d5

const urlParams = new URLSearchParams(window.location.search);
const kits = urlParams.get("kits");
const refill = urlParams.get("refills");

//all products
let urlAll = "https://kea21-7e1e.restdb.io/rest/byu-products";
let urlKits = `?q={"category":"Kits"}`;
let urlRefills = `?q={"category":"Refill"}`;
let urlCasting = `?q={"category":"Casting`;

if (kits) {
  console.log("get kits");
  urlAll = urlAll + urlKits;
}

if (refill) {
  console.log("get=refills");
  urlAll = urlAll + urlRefills;
}

fetch(urlAll, {
  method: "GET",
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(products) {
  console.log(products);
  //grab template

  //clone
  //adjust stuff
  //append
}
