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

/* <article class="product">
          <img
            src="assets/standard-kit_people.jpg"
            alt="standard-kit_people"
            class="img01"
          />
          <img src="" alt="" class="img02" />
          <div class="product-info">
            <h3 class="product-title">*Product title*</h3>
            <div class="price-and-arrow">
              <p class="price"><span>*1000* </span>DKK</p>
              <img src="assets/arrow-thin.png" alt="arrow-thin" class="arrow" />
            </div>
          </div>
        </article> */

function showProducts(products) {
  console.log(products);
  //grab template
  const template = document.querySelector(".productTemplate").content;
  //clone
  products.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    //adjust stuff
    copy.querySelector(
      ".product a"
    ).href = `productpage.html?id=${product._id}`;
    copy.querySelector(".img01").src = product.picture[0];
    copy.querySelector(".product-title").textContent = product.name;
    copy.querySelector(".price span").textContent = product.price;

    //append
    document.querySelector(".productlist").appendChild(copy);
  });
}
