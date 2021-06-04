// cart sliding in and out with a little help from https://youtu.be/TzB_KUn-30w

const cartBtn = document.querySelector('.toggle-btn');
const closeCartBtn = document.querySelector('.close-cart');

cartBtn.addEventListener('click', () => {
    document.querySelector('.cart-outer-box').classList.add('cart-is-open');
});

closeCartBtn.addEventListener('click', () => {
    document.querySelector('.cart-outer-box').classList.remove('cart-is-open');
})