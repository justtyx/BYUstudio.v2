const form = document.querySelector("form");
document.querySelector("form").addEventListener("submit", userSubmit);

function userSubmit() {
  console.log("submit");
  localStorage.setItem("email", form.elements.email.value);
  localStorage.setItem("firstname", form.elements.firstname.value);
  localStorage.setItem("surname", form.elements.surname.value);
  localStorage.setItem("phonenumber", form.elements.phonenumber.value);
  localStorage.setItem("address", form.elements.address.value);
  localStorage.setItem("city", form.elements.city.value);
  localStorage.setItem("postalcode", form.elements.postalcode.value);
  localStorage.setItem("country", form.elements.country.value);
  localStorage.setItem(
    "billingaddress.checked",
    form.elements.billingaddress.value
  );
  localStorage.setItem(
    "deliveryoption.checked",
    form.elements.deliveryoption.value
  );
}

//   console.log(form.elements.firstname.value);
//   console.log(form.elements.surname.value);
//   console.log(form.elements.phonenumber.value);
//   console.log(form.elements.address.value);
//   console.log(form.elements.city.value);
//   console.log(form.elements.postalcode.value);
//   console.log(form.elements.country.value);

//   const payload = {
//     email: form.elements.email.value,
//     firstname: form.elements.firstname.value,
//     lastname: form.elements.surname.value,
//     phonenumber: form.elements.phonenumber.value,
//     address: form.elements.address.value,
//     city: form.elements.city.value,
//     zip: form.elements.postalcode.value,
//     country: form.elements.country.value,
//   };
//   console.log(JSON.stringify(payload));

console.log(localStorage.getItem("surname"));
console.log(localStorage.getItem("firstname"));
console.log(localStorage.getItem("phonenumber"));
console.log(localStorage.getItem("address"));
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("postalcode"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("billingaddress"));
console.log(localStorage.getItem("deliveryoption"));
