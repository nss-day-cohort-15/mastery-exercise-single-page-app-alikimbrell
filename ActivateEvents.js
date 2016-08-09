var CarLot = function(activate) {
  activate.activateEvents = function() {
  console.log("activateEvents running")
  }
  return activate
}(CarLot || {});

activate();