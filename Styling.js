var CarLot = (function(DOM) {

    DOM.resetBorderAndBackground = function () {
      console.log("DOM.reset running")
    }
    DOM.changeBorderAndBackgroundClearTextInputValuePutCursorInTextInput = function (e) {
      console.log("DOM.change running")
      var userInput = document.getElementsByClassName("form-control")     
      var target = e.target;
      var userText = document.getElementById("userTextInput")
      target.addClass(carCardsOn);
      userInput.focus();
      userText.value="";


  }
  return DOM
})(CarLot || {});




















