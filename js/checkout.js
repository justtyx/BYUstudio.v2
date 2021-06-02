const mobilesummary = document.querySelector(".ordersummarymobile");
mobilesummary.addEventListener("click", toggleSummary);
const creditcard = document.querySelector("#creditcard");
const paypal = document.querySelector("#paypal");
creditcard.addEventListener("click", togglePaymentForm);
paypal.addEventListener("click", togglePaymentForm);

let val = 1;

function toggleSummary() {
  if (val == 1) {
    document.querySelector(".summaryflex > img").classList.add("rotatearrow");
    document.querySelector(".summaryphone").classList.remove("hidden");
    val = val + 1;
    console.log("open");
  } else if (val == 2) {
    document
      .querySelector(".summaryflex > img")
      .classList.remove("rotatearrow");
    document.querySelector(".summaryphone").classList.add("hidden");
    val = val - 1;
    console.log("close");
  }
}

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
