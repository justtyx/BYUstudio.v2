const creditcard = document.querySelector("#creditcard");
const paypal = document.querySelector("#paypal");
creditcard.addEventListener("click", togglePaymentForm);
paypal.addEventListener("click", togglePaymentForm);

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
