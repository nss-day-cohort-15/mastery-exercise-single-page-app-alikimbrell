function populatePage(inventory) {

  var output = "";

    inventory.forEach(function (currentCar, count) {

      if (count % 3 === 0) {
        output += '<div class="row">';
      }
      output += `<div class="col-sm-4 carCards">`
      output += `<h2>${currentCar.year+" "+currentCar.make+" "+currentCar.model+", "+currentCar.color}</h2>`;
      output += `<h3>${currentCar.price}</h3>`;
      output += `<p>${currentCar.description}</p>`;
      if(currentCar.purchased === false) {
        output += `<h4>FOR SALE!</h4>`
      } else {
        output += `<h4>(Out-of-stock)</h4>`
      }
      // output ++ ``
      output += `</div>`

      return output; 
});

    var carCardsGrid = document.getElementById("allCardsDiv");
    carCardsGrid.innerHTML = output;

  CarLot.activateEvents();
}

CarLot.loadInventory(populatePage);








