// Technical Req. #4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
  // A car DOM element that was clicked on.
  // A color name.

// function styling (ph1, ph2) {

// onclick > increase border, change background

// onclick > clear text input, cursor in text field 
// element.focus()

// When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.
}


var cars = document.getElementsByClassName("carCardDivs");
var car=cars[i]
for (i=0;i<=cars.length;i++) {
  car.style.borderColor = inentory[i].color;
}