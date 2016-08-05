
function populatePage(inventory) {
  
  // Loop over the inventory and populate the page.

  var carList = getElementById("allCardsDiv");
  // ^ getting the div from the DOM that will eventually receive the output
  
  var output = "";
  // ^ setting up an empty object to feed the info from the global variable CarLot i.e. take inventory out of function because inventory is undefined outside of the function.

  inventory.forEach(function(currentCar) {
    // ^ everything between the brackets is the function currentCar().
    if(idx$3===0) {
      output += '<div class="row">';
    }
    output += `<h2>cars.year+" "+cars.make+" "+cars.model+", "+cars.color</h2>`;
    output += `<h3>cars.price</h3>`;
    output += `<p>cars.description</p>`;

    if(cars.purchased===false){
      output += `<h4>FOR SALE!</h4>`
    } else {
      output += `<h4>Out-of-stock</h4>`
    }

  })  
}
carList.innerHTML = output;



// Now that the DOM is loaded, establish all the event listeners needed

// CarLot.activateEvents();

// Load the inventory and send a callback function to be invoked after the process is complete

// CarLot.loadInventory();




