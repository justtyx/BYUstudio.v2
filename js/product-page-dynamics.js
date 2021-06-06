/*const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('q');*/

//For particular product ↓
const fetchProduct = 'https://kea21-7e1e.restdb.io/rest/byu-products?q={"name": "Standard kit"}';

fetch(fetchProduct, {
    "method": "GET",
    "headers": {
      "x-apikey": "602f9e445ad3610fb5bb63d5"
    }
  })
  .then((res) => res.json())
  .then(response => {
    showProduct(response);
  })
  .catch(err => {
    console.error(err);
});

function showProduct(product) {
// console.log(product);
// document.querySelector('.product-image').src = product[0].picture;
document.querySelector('img.product-image').src = product[0].picture[1];
document.querySelector('.top-details>h1').textContent = product[0].name;
document.querySelector('.top-details>h2>span').textContent = product[0].price;
document.querySelector('.category-breadcrumb').textContent = product[0].category;
document.querySelector('.product-breadcrumb').textContent = product[0].name;
document.querySelector('.kit-content').textContent = product[0].content;
document.querySelector('.kit-description').innerHTML = product[0].description;
}