// cart sliding in and out with a little help from https://youtu.be/TzB_KUn-30w

const cartBtn = document.querySelector('.toggle-btn');
const closeCartBtn = document.querySelector('.close-cart');
const addToCart = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart-outer-box');

cartBtn.addEventListener('click', () => {
    document.querySelector('.cart-outer-box').classList.add('cart-is-open');
});

closeCartBtn.addEventListener('click', () => {
    document.querySelector('.cart-outer-box').classList.remove('cart-is-open');
});

addToCart.addEventListener('click', () => {
  document.querySelector('.cart-outer-box').classList.add('cart-is-open');
});
/*
//cart dynamics code
const cart = {
    KEY: "basket",
  contents : [],
  init(){
    //_contents is a temporary string
  let _contents = localStorage.getItem(cart.KEY);
  if(_contents) {
    //if there is anything turn it into JS objects that we can access with the dot . notation
    cart.contents = JSON.parse(_contents);
  } else {
  
  }
  // update the 
  //this.updateDom(); //use this when it is not hard coded
  cart.sync();
  },
  sync(){
    //turn cart contents array of objects into a string that we can write in localStorage
    let _cart = JSON.stringify(cart.contents);
    localStorage.setItem(cart.KEY, _cart);
    cart.updateDom();
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
      const cartTemplate = document.querySelector('.cart-template').content;
      const itemclone = cartTemplate.cloneNode(true);
  
      const id = item._id;
      const labelEl = itemclone.querySelector('label');
      labelEl.textContent = item.name;
      labelEl.setAttribute('for', 'fid-' + id);
  
      const minusBtn = itemclone.querySelector('.minus') //change labels later
      minusBtn.addEventListener('click', () => {
        cart.minusOne(id);
      });
  
      const plusBtn = itemclone.querySelector('.plus') //change labels later
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
    /*const inputEl = document.querySelector('.fid-' + obj._id);
    cart.contents[index].qty = inputEl.valueAsNumber;*/ //add a closing comment here
  /*if (obj.qty === 0) {
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
