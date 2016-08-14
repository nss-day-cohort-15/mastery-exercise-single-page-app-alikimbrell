var CarLot = (function() {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.addEventListener('load', function (event) {
      inventory = JSON.parse(event.target.responseText).cars;
      callback(inventory);
      });
      inventoryLoader.send();  
    },
    activateEvents: function () {
      console.log("Activate events is running.");
      
    }
  }  
})(CarLot || {});

function populatePage(inventory) {
  // Loop over the inventory and populate the page
  var output = "";
  var carCardsGrid = document.getElementById("allCardsDiv");
    inventory.forEach(function (currentCar, count) {
      if (count % 3 === 0) {
        output += `</div>`;
        output += '<div class="row">';
      }
      output += `<div class="col-sm-4 carCards" id="currentCar-${count}" style="border: 4px solid ${currentCar.color}">`;
      output += `<h2>${currentCar.year+" "+currentCar.make+" "+currentCar.model+", "+currentCar.color}</h2>`;
      output += `<h3>${currentCar.price}</h3>`;
      output += `<p>${currentCar.description}</p>`;
      if(currentCar.purchased === false) {
        output += `<h4>FOR SALE!</h4>`;
      } else {
        output += `<h4>(Out-of-stock)</h4>`;
      }
      output += `<h5 class="clickDone" style="text-decoration: underline">Done</h5>`;
      output += `</div>`;
      return output; 
    });
  carCardsGrid.innerHTML = output;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(populatePage);
}
  
// Load the inventory and send a callback function to be invoked after the process is complete

CarLot.loadInventory(populatePage);
  console.log("CarLot.loadinventory(populatePage) is running.");


