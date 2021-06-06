const fetchUrl = 'https://kea21-7e1e.restdb.io/rest/byu-products?q={"name": "Standard kit"}';
//const mediaurl = 'https://kea2021-8b3d.restdb.io/media/'

fetch(fetchUrl, {
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
console.log(product);
// document.querySelector('.product-image').src = product[0].picture;
document.querySelector('.category-breadcrumb').textContent = product[0].category;
document.querySelector('.product-breadcrumb').textContent = product[0].name;
document.querySelector('.top-details>h1').textContent = product[0].name;
document.querySelector('.top-details>h2>span').textContent = product[0].price;
document.querySelector('.kit-content').textContent = product[0].content;
document.querySelector('.kit-description').innerHTML = product[0].description;
}