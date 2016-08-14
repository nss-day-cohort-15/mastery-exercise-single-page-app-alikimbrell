var CarLot = (function() {
  var privateInventory = [];

  return {
    getInventory: function () {
      return privateInventory;
    },
    loadInventory: function (callbackFunction) {
      //Create an XHR to load cars
      var inventoryLoader = new XMLHttpRequest();
      
      //Listen for when the load event is broadcast
      //and execute an anonymous callback
      inventoryLoader.addEventListener('load', function (event) {
        //Set the value of the private array
        privateInventory = JSON.parse(event.target.responseText).cars;
        callbackFunction(privateInventory);
      });
      inventoryLoader.open('get', 'inventory.json');
      inventoryLoader.send();  
    },
    activateEvents: function () {
      console.log("Activate events is running.");
    },
    styling: function (carDOMelementClicked, colorName) {
      console.log("Styling is running.");

      // Change the width of the border to a higher value, and change the background color to any other color of your choosing.
      
      // Clear the value of the text input in the navbar, and put the cursor in the text input.

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

////////////////////////////////////

  var cards = document.getElementsByClassName("carCards");
  var done = document.getElementsByClassName("clickDone");

  function test (MouseEvent) {
    console.log(event);
    console.log("Clicked card.");
  }
  function test2 (MouseEvent) {
    console.log(event);
    console.log("Clicked Done.");
  }

  //Adding event handlers.
  for (var i=0; i<cards.length; i++) {
    cards.item(i).addEventListener("click", CarLot.activateEvents);
    done.item(i).addEventListener("click", CarLot.activateEvents);
  }

////////////////////////////////////

  // Now that the DOM is loaded, establish all the event listeners needed
  // ??? argument = populatePage?
  CarLot.activateEvents(populatePage); 
}

//"Load the inventory and when you're done execute populatePage."
CarLot.loadInventory(populatePage);

//At line 17, callbackFunction(privateInventory) is a pointer to the populatePage function.
  console.log("CarLot.loadinventory(populatePage) is running.");


