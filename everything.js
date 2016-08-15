var CarLot = (function() {
  var privateInventory = [];

  return {
    getInventory: function () {
      return privateInventory;
    },
    loadInventory: function (callbackFunction) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener('load', function (event) {
        privateInventory = JSON.parse(event.target.responseText).cars;
        callbackFunction(privateInventory);
      });
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.send();  
    },
    createEventHandlers: function () {
      console.log("createEventHandlers is running.");
      var loopthis = document.getElementsByClassName("carCards");
      for (var i=0;i<loopthis.length;i++) {
        loopthis.item(i).addEventListener("click", onCarClick);
      }
    }
  }
})(CarLot || {});

function onCarClick () {
  console.log("onCarClick is running.");
  console.log("event: ", event);
  console.log("event.currentTarget: ", event.currentTarget);
}

function populatePage(inventory) {

  var output = "";
  var carCardsGrid = document.getElementById("allCardsDiv");
    
    inventory.forEach(function (currentCar, count) {

      output += `<div class="col-sm-4 carCards" id="currentCar-${count}" style="border: 4px solid ${currentCar.color}">`;
      output += `<h2>${currentCar.year+" "+currentCar.make+" "+currentCar.model+", "+currentCar.color}</h2>`;
      output += `<h3>${currentCar.price}</h3>`;
      output += `<p>${currentCar.description}</p>`;
      if(currentCar.purchased === false) {
        output += `<h4>FOR SALE!</h4>`;
      } else {
        output += `<h4>(Out-of-stock)</h4>`;
      }
      output += `</div>`;
      return output; 
    });

    carCardsGrid.innerHTML = output;

  CarLot.createEventHandlers();
}

CarLot.loadInventory(populatePage);

  // Change the width of the border to a higher value, and change the background color to any other color of your choosing.

  // Clear the value of the text input in the navbar, and put the cursor in the text input.

