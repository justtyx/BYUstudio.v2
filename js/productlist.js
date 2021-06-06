// restdb.io endpoint: https://kea21-7e1e.restdb.io/rest/byu-products
// apikey: 602f9e445ad3610fb5bb63d5

const urlParams = new URLSearchParams(window.location.search);
const kits = urlParams.get("kits");
const refill = urlParams.get("refills");
const casting = urlParams.get("casting");

//all products;
let urlKits = `https://kea21-7e1e.restdb.io/rest/byu-products?q={"category":"Kits"}`;
let urlRefills = `https://kea21-7e1e.restdb.io/rest/byu-products?q={"category":"Refill"}`;
let urlCasting = `https://kea21-7e1e.restdb.io/rest/byu-products?q={"category":"Casting"}`;

if (kits) {
  console.log("get kits");
  document.querySelector("#castinglist").remove();
  document.querySelector("#kits-button").style.backgroundColor = "var(--beige)";
  document.querySelector("#kits-button").style.color = "white";
  fetch(urlKits, {
    method: "GET",
    headers: {
      "x-apikey": "602f9e445ad3610fb5bb63d5",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showKits(response);
    })
    .catch((err) => {
      console.error(err);
    });

  function showKits(products) {
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
      document.querySelector("#productlist").appendChild(copy);
    });
  }
}

if (refill) {
  console.log("get refills");
  document.querySelector("#castinglist").remove();
  document.querySelector("#refills-button").style.backgroundColor =
    "var(--beige)";
  document.querySelector("#refills-button").style.color = "white";
  fetch(urlRefills, {
    method: "GET",
    headers: {
      "x-apikey": "602f9e445ad3610fb5bb63d5",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showRefills(response);
    })
    .catch((err) => {
      console.error(err);
    });

  function showRefills(products) {
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
      document.querySelector("#productlist").appendChild(copy);
    });
  }
}

//TO DO:
if (casting) {
  console.log("get casting");
  document.querySelector("#productlist").remove();
  document.querySelector("#casting-button").style.backgroundColor =
    "var(--beige)";
  document.querySelector("#casting-button").style.color = "white";
  //   fetch(urlCasting, {
  //     method: "GET",
  //     headers: {
  //       "x-apikey": "602f9e445ad3610fb5bb63d5",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       showCasting(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   function showCasting(products) {
  //     console.log(products);
  //     //grab template
  //     const template = document.querySelector(".castingTemplate").content;
  //     //clone
  //     products.forEach((product) => {
  //       console.log(product);
  //       const copy = template.cloneNode(true);
  //       //adjust stuff
  //       //   copy.querySelector(".img01").src = product.picture[0];
  //       copy.querySelector(".product-title").textContent = product.name;
  //       copy.querySelector(".price span").textContent = product.price;

  //       //append
  //       document.querySelector("#productlist").appendChild(copy);
  //     });
  //   }
}

//OLD CODE:
// if (refill) {
//   console.log("get=refills");
//   urlAll = urlAll + urlRefills;
//   document.querySelector("#castinglist").remove();
// }

// if (casting) {
//   console.log("get=casting");
//   urlAll = urlAll + urlCasting;
//   document.querySelector("#productlist").remove();
// }

// fetch(urlAll, {
//   method: "GET",
//   headers: {
//     "x-apikey": "602f9e445ad3610fb5bb63d5",
//   },
// })
//   .then((res) => res.json())
//   .then((response) => {
//     showProducts(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function showProducts(products) {
//   console.log(products);
//   //grab template
//   const template = document.querySelector(".productTemplate").content;
//   //clone
//   products.forEach((product) => {
//     console.log(product);
//     const copy = template.cloneNode(true);
//     //adjust stuff
//     copy.querySelector(
//       ".product a"
//     ).href = `productpage.html?id=${product._id}`;
//     copy.querySelector(".img01").src = product.picture[0];
//     copy.querySelector(".product-title").textContent = product.name;
//     copy.querySelector(".price span").textContent = product.price;

//     //append
//     document.querySelector("#productlist").appendChild(copy);
//   });
// }
