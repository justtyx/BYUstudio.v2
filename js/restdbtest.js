fetch("https://kea21-7e1e.restdb.io/rest/byu-products", {
  method: "GET",
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
})
  .then((res) => res.json())
  .then((response) => {
    // console.log(response);
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(data) {
  // console.log(data);
  data.forEach((product) => {
    showProduct(product);
  });
}

function showProduct(product) {
  // console.log(product);
  // grab the template
  const template = document.querySelector(".product-template").content;
  // clone the template
  const clone = template.cloneNode(true);
  // change the content
  clone.querySelector(".productname span").textContent = product.name;
  clone.querySelector(".price span").textContent = product.price;
  clone.querySelector("button").addEventListener("click", () => {
    // console.log(product);
    cart.add(product);
  });
  // grab the parent
  const parent = document.querySelector(".product-section");
  // apend
  parent.appendChild(clone);
}

const contents = [];

contents.forEach((element) => {
  // console.log(element);
  // grab the template
  const template = document.querySelector(".cart-template").content;
  // clone the template
  const clone = template.cloneNode(true);
  // change the content
  clone.querySelector("label").textContent = element.name;
  clone.querySelector("label").setAttribute("for", element.name);
  clone.querySelector("input").id += element.id;
  clone.querySelector("input").name = element.name;
  clone.querySelector("input").value = element.qty;
  clone.querySelector(".price span").textContent = element.price;
  // grab the parent
  const parent = document.querySelector(".cart-section");
  // apend
  parent.appendChild(clone);
});

const cart = {
  key: "basket",
  contents: [],
  init() {
    let _contents = localStorage.getItem(cart.key);
    if (_contents) {
      cart.contents = JSON.parse(_contents);
    }
    cart.sync();
  },
  sync() {
    let _cart = JSON.stringify(cart.contents);
    localStorage.setItem(cart.key, _cart);
    cart.updateDOM();
  },
  updateDOM() {
    cart.contents.forEach((element) => {
      // console.log(element);
      const template = document.querySelector(".cart-template").content;
      // clone the template
      const clone = template.cloneNode(true);
      // change the content
      clone.querySelector("label").textContent = element.name;
      clone.querySelector("label").setAttribute("for", element.name);
      clone.querySelector("input").id += element.id;
      clone.querySelector("input").name = element.name;
      clone.querySelector("input").value = element.qty;
      clone.querySelector(".price span").textContent = element.price;
      // grab the parent
      const parent = document.querySelector(".cart-section");
      // apend
      parent.appendChild(clone);
    });
  },
  add(obj) {
    console.log(obj._id);
    cart.contents.push(obj);
    const index = cart.contents.findIndex((element) => element._id == obj._id);
    console.log(index);

    if (index == -1) {
      obj.qty = 1;
      cart.contents.push(obj);
    } else {
      console.log(cart.contents[index].qty);
      cart.contents[index].qty += 1;
    }

    console.log(cart.contents);
    this.sync();
  },
};
