const creditcard = document.querySelector("#creditcard");
const paypal = document.querySelector("#paypal");
creditcard.addEventListener("click", togglePaymentForm);
paypal.addEventListener("click", togglePaymentForm);
document.querySelector(".breadcrumbs").addEventListener("click", sendPayment);
const form = document.querySelector("form");

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

document.querySelector(".sum-email").textContent =
  localStorage.getItem("email");
document.querySelector(".sum-address").textContent = `${localStorage.getItem(
  "address"
)}, ${localStorage.getItem("city")}, ${localStorage.getItem(
  "postalcode"
)}, ${localStorage.getItem("country")}`;
document.querySelector(".sum-shipping").textContent =
  localStorage.getItem("deliveryoption");

console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("surname"));
console.log(localStorage.getItem("firstname"));
console.log(localStorage.getItem("phonenumber"));
console.log(localStorage.getItem("address"));
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("postalcode"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("billingaddress"));
console.log(localStorage.getItem("deliveryoption"));
