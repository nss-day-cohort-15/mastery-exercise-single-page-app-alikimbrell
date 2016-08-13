var CarLot = (function() {
  var inventory = [];

  return {
    getInventory: function (callback) {
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
    }
  };
})(CarLot || {});

function changeFunction () {
  alert("changeFunction works");
}

function resetFunction () {
  alert("resetFunction works");
}

function activateEvents() {
  var cards = getElementsByClassName("carCards");
  cards.addEventListener("click", changeFunction);
  cards.addEventListener("click", resetFunction);
}

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
  CarLot.activateEvents();
}

  //   console.log("Activate events is running.");
  
  //   return
  //     change: function () {
  //      console.log("CarLot.activateEvents(change) is running.")
  //      
  //      
  //     }

  //     reset: function () {
  //      console.log("CarLot.activateEvents(reset) is running.")
  //      target.addEventListener("click", functionToExecute)
  //     }

  // }
  



// Load the inventory and send a callback function to be invoked after the process is complete
CarLot.loadInventory(populatePage);
  console.log("CarLot.loadinventory(populatePage) is running.");


// When you click on one of the car elements, 
  // change the width of the border to a higher value, 
  // change the background color to any other color of your choosing.
  // clear the value of the text input in the navbar
  // put the cursor in the text input.


// When you start typing into the navbar's text input, 
  // the description of the currently selected car should be bound to what you are typing in and match it exactly.



// var CarLot = (function(activate) {
//   activate.activateEvents = function() {
//   console.log("activateEvents running")

//   var cardsToClick = document.getElementsByClassName("carCards")
//   console.log(cardsToClick)
  
//   cardsToClick.addEventListener('click', function (changeBorderAndBackgroundClearTextInputValuePutCursorInTextInput)

//   // cardsToClick.addEventListener('mouseout', function (resetBorderAndBackground))

  
//   return activate

// })(CarLot || {});



// When call CarLot.loadInventory(populatePage), it becomes the callback on CarLot.js.8 and passes the populatePage() as its argument.

// var CarLot = (function(DOM) {

//     DOM.resetBorderAndBackground = function () {
//       console.log("DOM.reset running")
//     }
//     DOM.changeBorderAndBackgroundClearTextInputValuePutCursorInTextInput = function (e) {
//       console.log("DOM.change running")
//       var userInput = document.getElementsByClassName("form-control")     
//       var target = e.target;
//       var userText = document.getElementById("userTextInput")
//       target.addClass(carCardsOn);
//       userInput.focus();
//       userText.value="";


//   }
//   return DOM
// })(CarLot || {});