// Technical Req #1. Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.

// Technical Req #2.  The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).


var CarLot = (function() {
  var inventory = [];

  return {
    getInventory: function(callback) {
      return inventory
      
    },
    loadInventory: function(callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function (event)
      {
        inventory = JSON.parse(event.target.responseText).cars
        callback(inventory)
      })
      inventoryLoader.send();
    }
  }

})(CarLot || {});


// console.log(CarLot);








