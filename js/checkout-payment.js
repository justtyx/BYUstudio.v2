const creditcard = document.querySelector("#creditcard");
const paypal = document.querySelector("#paypal");
creditcard.addEventListener("click", togglePaymentForm);
paypal.addEventListener("click", togglePaymentForm);
document.querySelector("button").addEventListener("click", sendPayment);
const form = document.querySelector("form");

// GETTING PRICEINFO

// PAYMENT OPTION
function togglePaymentForm() {
  if (creditcard.checked == true) {
    console.log("card");
    document.querySelector(".cardwrap").classList.add("paymentoptionselected");
    document
      .querySelector(".paypalwrap")
      .classList.remove("paymentoptionselected");
    document.querySelector(".creditcardform").classList.remove("hidden");
  } else if (paypal.checked == true) {
    console.log("paypal");
    document
      .querySelector(".cardwrap")
      .classList.remove("paymentoptionselected");
    document
      .querySelector(".paypalwrap")
      .classList.add("paymentoptionselected");
    document.querySelector(".creditcardform").classList.add("hidden");
  }
}

function sendPayment() {
  console.log(form.elements.paymentoption.value);
  const paymentoption = form.elements.paymentoption.value;
  localStorage.setItem("paymentoption", paymentoption);
}

//Info summary
document.querySelector(".sum-email").textContent =
  localStorage.getItem("email");
document.querySelector(".sum-address").textContent = `${localStorage.getItem(
  "address"
)}, ${localStorage.getItem("city")}, ${localStorage.getItem(
  "postalcode"
)}, ${localStorage.getItem("country")}`;
document.querySelector(".sum-shipping").textContent =
  localStorage.getItem("deliveryoption");

//Set price of shipping
if (localStorage.getItem("deliveryoption") == "Pick up spot - DKK 19.00") {
  document.querySelector(
    ".ordersummarydesktop .calcshippingprice span"
  ).textContent = "19.00";
  document.querySelector(".calcshippingprice span").textContent = "19.00";
} else if (localStorage.getItem("deliveryoption") == "PostNord - DKK 39.00") {
  document.querySelector(".calcshippingprice span").textContent = "39.00";
  document.querySelector(
    ".ordersummarydesktop .calcshippingprice span"
  ).textContent = "39.00";
} else if (
  localStorage.getItem("deliveryoption") == "Personal pick up - Free"
) {
  document.querySelector(".calcshippingprice span").textContent = "0";
  document.querySelector(
    ".ordersummarydesktop .calcshippingprice span"
  ).textContent = "0";
} else {
  console.log("no delivery option chosen");
}

//ordersummarydesktop

function updatecarttotal() {
  var cartItemContainer = document.querySelector(".templateparent-desktop");
  var cartRows = cartItemContainer.getElementsByClassName("cartitem");
  console.log(cartRows);
  var total = 0;
  for (var i = 0; i < 2; i++) {
    console.log("hello");
    var cartRow = cartRows[i];
    console.log(cartRow);
    var priceElement = cartRow.querySelector(".cartproductprice span");
    var price = parseFloat(priceElement.innerText);
    var quantityElement = cartRow.getElementsByClassName(".quantity")[0];
    var quantity = quantityElement.value;
    let total = total + price * quantity;
  }
  document.querySelector(
    ".ordersummarydesktopcontent .calcsubtotal span"
  ).innerText = total;
  addshipping();
}
updatecarttotal();

// adding together the prices and sending to local storage
function addshipping() {
  var shippingprice = document.querySelector(
    ".calcshippingprice span"
  ).textContent;
  var shippingpriceparse = parseFloat(shippingprice);
  var subtotalprice = document.querySelector(".calcsubtotal span").textContent;
  var subtotalpriceparse = parseFloat(subtotalprice);
  const totalpricecalc = shippingpriceparse + subtotalpriceparse;
  document.querySelector(".calctotalprice span").textContent = totalpricecalc;
  document.querySelector(
    ".ordersummarydesktopcontent .calctotalprice span"
  ).textContent = totalpricecalc;
  console.log(totalpricecalc);

  localStorage.setItem("subtotal", subtotalpriceparse);
  localStorage.setItem("pricetotal", totalpricecalc);
  localStorage.setItem("priceshipping", shippingpriceparse);
}

// console.log(totalpricecalc);
// console.log(localStorage.getItem("surname"));
// console.log(localStorage.getItem("firstname"));
// console.log(localStorage.getItem("phonenumber"));
// console.log(localStorage.getItem("address"));
// console.log(localStorage.getItem("city"));
// console.log(localStorage.getItem("postalcode"));
// console.log(localStorage.getItem("country"));
// console.log(localStorage.getItem("billingaddress"));
// console.log(localStorage.getItem("deliveryoption"));
