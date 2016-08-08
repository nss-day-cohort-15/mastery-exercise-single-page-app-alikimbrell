 // CARLOT.JS IIFE

var CarLot = (function() {
  var inventory = [];

  return {
    getInventory: function(callback) {
      return inventory;
    },
    loadInventory: function(callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('get', 'inventory.json')
      inventoryLoader.addEventListener('load', function(event) {
        inventory = JSON.parse(event.target.responseText).cars
        callback(inventory);
      });
      inventoryLoader.send();
    }
  }
})(CarLot || {});

function populatePage(inventory) {
  // Loop over the inventory and populate the page
  var carList = document.getElementById("allCardsDiv").innerHTML;
  // function currentCar();
  inventory.forEach(function(currentCar) {
    var output = "";
    // if (idx % 3 === 0) {
    //   output += '<div class="row">';
    // } else {
      output += `<h2>cars.year+" "+cars.make+" "+cars.model+", "+cars.color</h2>`;
      output += `<h3>cars.price</h3>`;
      output += `<p>cars.description</p>`;
      if(cars.purchased === false) {
        output += `<h4>FOR SALE!</h4>`
      } else {
        output += `<h4>Out-of-stock</h4>`
      };
    return output; 
  })(currentCar || {})
  document.getElementById("allCardsDiv").innerHTML=carList;

  CarLot.activateEvents();
}
  
// Load the inventory and send a callback function to be invoked after the process is complete
CarLot.loadInventory();











