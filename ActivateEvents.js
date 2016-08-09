var CarLot = (function(activate) {
  activate.activateEvents = function() {
  console.log("activateEvents running")

  }
  return activate
})(CarLot || {});

CarLot.activateEvents();

// Wrapping function in IIFE makes return value available outside of the IIFE.  activate.activateEvents is like an alias for calling activateEvents inside the IIFE.