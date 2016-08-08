function populatePage(inventory) {

  var output = "";

  inventory.forEach(function (currentCar) {
// console.log(currentCar);

    output += `<h2>${currentCar.year+" "+currentCar.make+" "+currentCar.model+", "+currentCar.color}</h2>`;
    output += `<h3>${currentCar.price}</h3>`;
    output += `<p>${currentCar.description}</p>`;
    if(currentCar.purchased === false) {
      output += `<h4>FOR SALE!</h4>`
    } else {
      output += `<h4>Out-of-stock</h4>`
    }
    for(var i=0; i<=currentCar.length; i++){
      if (i % 3 === 0) {
        output += '<div class="row">';
      }

    }
  // console.log(output)
  return output; 
});

  var carList = document.getElementById("allCardsDiv");
  carList.innerHTML = output;

  CarLot.activateEvents();
}

CarLot.loadInventory(populatePage);



// TO GET INTO INDIVIDUAL CARDS?
// var newCard = document.createElement('li');
// var newText = document.createTextNode(currentCar.make.model);
// newCard.appendChild(newText);
// var position = document.getElementsByTagName('ul')[i];
// position.appendChild(newCard)





