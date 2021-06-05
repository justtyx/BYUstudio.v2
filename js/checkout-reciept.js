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

const stringbasket = JSON.parse(localStorage.getItem("basket"));
console.log(stringbasket);

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
    basket: stringbasket,
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

const contents = localStorage.getItem("basket");
const contentstring = JSON.parse(contents);

contentstring.forEach((element) => {
  console.log(element);

  //DESKTOP
  // grab the template
  const templateD = document.querySelector(".template-desktop").content;
  // clone the template
  const cloneD = templateD.cloneNode(true);
  // change the content
  cloneD.querySelector(".cartproductname").textContent = element.name;
  cloneD.querySelector(
    ".cartproductprice"
  ).textContent = `${element.price} DKK`;
  // cloneD.querySelector(".cartproductdescription").textContent =
  //   element.description;
  // grab the parent
  const parentD = document.querySelector(".templateparent-desktop");
  // apend
  parentD.appendChild(cloneD);
  // document.querySelector(".ordersummarydesktop .calctotalprice").textContent =
  //   "";
});
