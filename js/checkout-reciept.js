document.querySelector(".sum-email").textContent =
  localStorage.getItem("email");
document.querySelector(".sum-address").textContent = `${localStorage.getItem(
  "address"
)}, ${localStorage.getItem("city")}, ${localStorage.getItem(
  "postalcode"
)}, ${localStorage.getItem("country")}`;
document.querySelector(".sum-shipping").textContent =
  localStorage.getItem("deliveryoption");

document.querySelector(".breadcrumbs").addEventListener("click", sendData);

function sendData(e) {
  e.preventDefault();

  const payload = {
    firstname: localStorage.getItem("firstname"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    phonenumber: localStorage.getItem("phonenumber"),
    address: localStorage.getItem("address"),
    city: localStorage.getItem("city"),
    postalcode: localStorage.getItem("postalcode"),
    country: localStorage.getItem("country"),
    billingaddress: localStorage.getItem("billingaddress"),
    deliveryoption: localStorage.getItem("deliveryoption"),
    paymentoption: localStorage.getItem("paymentoption"),
  };

  fetch("https://kea21-7e1e.restdb.io/rest/purchase", {
    method: "POST",
    headers: {
      "x-apikey": "602f9e445ad3610fb5bb63d5",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
