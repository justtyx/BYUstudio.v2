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
        labelWax.textContent = option.name;
        labelWax.setAttribute("for", `${option.labels}`);        
        cloneWax.querySelector('.wax-price').textContent = option.price;

        //append
        document.querySelector('.wax-container-to-append').appendChild(cloneWax);
    } else if (option.category[0] == "Casting") {
        const cloneCasting = castingTemplate.cloneNode(true);

        //populate with data
        const labelCasting = cloneCasting.querySelector('label.casting-selection');
        labelCasting.textContent = option.name;
        labelCasting.setAttribute("for", `${option.labels}`);        
        cloneCasting.querySelector('.casting-price').textContent = option.price;

        //append
        document.querySelector('.casting-container-to-append').appendChild(cloneCasting);
    }
});

}