var CarLot = (function(activate) {
  activate.activateEvents = function(event) {
    console.log("activate is running")
    var cards = document.getElementsByClassName(".carCards")
    console.log(cards)
    
    console.log("current target: "+event.currentTarget)
  }
})(CarLot || {})



