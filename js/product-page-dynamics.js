const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('q');

//For particular product ↓
const fetchProduct = `https://kea21-7e1e.restdb.io/rest/byu-products?q={"name": "${title}"}`;

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
document.querySelector('img.product-image').src = product[0].picture[1];
document.querySelector('img.product-image').alt = `${product[0].name} box image `;
document.querySelector('img.another-product-image').src = product[0].picture[0];
document.querySelector('img.another-product-image').alt = `${product[0].name} in use`;
document.querySelector('title').textContent = `${product[0].name} | BYU studio`;
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

//using a cart
const form = document.querySelector('form');
form.addEventListener('submit', userSubmitted);

function userSubmitted(e) {
  e.preventDefault();
};
/*
const cart = {
  KEY: 'basket',
  contents: [],
  init() {
    //_contents is a temporary string
    let _contents = localStorage.getItem(cart.KEY);
    if(_contents) {
    //if there is anything turn it into JS objects that we can access with the dot . notation
    cart.contents = JSON.parse(_contents);
  }

  this.updateDom();


  },

  updateDom() {
  
    const cartContent = document.querySelector('.cart-items-place');
    cartContent.innerHTML = "";
  
    if(cart.contents === 0) {
      cartContent.innerHTML = "<h2>The cart is empty</h2>";
    } else {

// cloning items in the cart
cart.contents.forEach((item) => {
  console.log(item);
  const cartTemplate = document.querySelector('.cart-card-template').content;
  const itemclone = cartTemplate.cloneNode(true);

  const id = item._id;
  const labelEl = itemclone.querySelector('label');
  labelEl.textContent = item.name;
  labelEl.setAttribute('for', 'fid-' + id);

  const minusBtn = itemclone.querySelector('.cart-minus')
  minusBtn.addEventListener('click', () => {
    cart.minusOne(id);
  });

  const plusBtn = itemclone.querySelector('.cart-plus')
  plusBtn.addEventListener('click', () => {
    cart.plusOne(id);
  })

  const inputEl = itemclone.querySelector('input');
  inputEl.id += id;
  inputEl.name += id;
  inputEl.value = item.qty;

  inputEl.addEventListener('change', () => {
    const itemQty = inputEl.valueAsNumber;
    item.qty = itemQty;
    console.log('element');
    console.log(item.qty);
    cart.update(item);
    cart.update(item);
  });

  inputEl.addEventListener('focus', (e) => {
    e.target.select();
  })

  const priceEl = itemclone.querySelector('.price-price-baby');
  priceEl.textContent = item.price;

  
  cartContent.appendChild(itemclone);
});
}
}, 
add(obj) {
  const index = cart.contents.findIndex((item) => item._id == obj._id);

  if (index == -1) {
    obj.qty = 1;
    cart.contents.push(obj);
  } else {
    cart.contents[index].qty += 1;
  }
  this.sync();
},
update(obj) {
  const index = cart.contents.findIndex((item) => item._id == obj._id);
  const inputEl = document.querySelector('.fid-' + obj._id);
    cart.contents[index].qty = inputEl.valueAsNumber;
  if (obj.qty === 0) {
    cart.contents.splice(index, 1);
  } else {
    cart.contents[index].qty = obj.qty;
  
  }
    cart.sync();
  },
  
  minusOne(id) {
    const indexObj = cart.contents.find((item)=> item._id == id);
    indexObj.qty--;
    cart.update(indexObj);
  },
  plusOne(id) {
    const indexObj = cart.contents.find((item)=> item._id == id);
    indexObj.qty++;
    cart.update(indexObj);
  },
  };
  
  cart.init();*/