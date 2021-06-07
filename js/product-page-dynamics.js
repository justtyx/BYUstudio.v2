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
document.querySelector('title').textContent = `${product[0].name} | BYÙ studio`;
document.querySelector('.top-details>h1').textContent = product[0].name;
document.querySelector('.top-details>h2>span').textContent = product[0].price;
document.querySelector('.category-breadcrumb').textContent = product[0].category;
document.querySelector('.product-breadcrumb').textContent = product[0].name;
document.querySelector('.kit-content').textContent = product[0].content;
document.querySelector('.kit-description').innerHTML = product[0].description;
}

//Fetching wax and casting options ↓
fetch('https://kea21-7e1e.restdb.io/rest/byu-products?q={"$or": [{"category": "Wax"}, {"category": "Casting"}]}', {
    "method": "GET",
    "headers": {
      "x-apikey": "602f9e445ad3610fb5bb63d5"
    }
  })
  .then((res) => res.json())
  .then(response => {
    showOptions(response);
  })
  .catch(err => {
    console.error(err);
});

function showOptions(options) {
console.log(options);
const waxTemplate = document.querySelector('#wax-template').content;
const castingTemplate = document.querySelector('#casting-template').content;

options.forEach(option => {
    if(option.category[1] == "Wax") {
        const cloneWax = waxTemplate.cloneNode(true);

        //populate with data
        const labelWax = cloneWax.querySelector('label.waxxx');
        labelWax.textContent = `${option.name}, ${option.grams}`;
        labelWax.setAttribute("for", `${option.labels}`);        
        cloneWax.querySelector('.wax-price').textContent = option.price;
        cloneWax.querySelector('.wax-input').setAttribute("id", `${option.labels}`);
        cloneWax.querySelector('.wax-input').setAttribute("value", `${option.labels}`);

        //append
        document.querySelector('.wax-container-to-append').appendChild(cloneWax);
    } else if (option.category[0] == "Casting") {
        const cloneCasting = castingTemplate.cloneNode(true);

        //populate with data
        const labelCasting = cloneCasting.querySelector('label.casting-selection');
        labelCasting.textContent = option.name;
        labelCasting.setAttribute("for", `${option.labels}`);        
        cloneCasting.querySelector('.casting-price').textContent = option.price;
        cloneCasting.querySelector('.casting-input').setAttribute("id", `${option.labels}`);
        cloneCasting.querySelector('.casting-input').setAttribute("value", `${option.labels}`);

        //append
        document.querySelector('.casting-container-to-append').appendChild(cloneCasting);
    }
});

}