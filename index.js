function display(value) {
     const input = document.getElementById("entry");
     const currentValue = input.value;
     const lettersOnlyRegex = /^[A-Za-z]+$/;
  
     if (!lettersOnlyRegex.test(value)) {
          input.value = currentValue + value;
     }
     // var letters = /^[A-Za-z]+$/;
     // if (!value.match(letters)) {
     //      document.getElementById("entry").value += value;
     // }
}

var letters = /^[A-Za-z]+$/;

// document.addEventListener("click", calculate);

function calculate() {
     if (document.getElementById("entry").value.match(letters)) {
          alert("NO NO!! STOP THIS IS A CALCULATOR enter nos. only");
          clrscr();
          return false;
     } else {
          var entryVal = document.getElementById("entry").value;
          var answer = eval(entryVal);
          document.getElementById("entry").value = answer;

          return true;
     }
}
function clrscr() {
     document.getElementById("entry").value = "";
}

var forbiddenRegEx = new RegExp('\\d|\\.|\\*|\\-|\\+|\\/');


enter = document.getElementById("entry");
enter.addEventListener("keypress", function (event) {
     if (event.key === "Enter") {
          // event.preventDefault();
          document.getElementById("enterBtn").click();
     }

     if(event.ctrlKey // (A)
    || event.altKey // (A)
    || typeof event.key !== 'string' // (B)
    || event.key.length !== 1) { // (C)
        return;
    }
    if(!forbiddenRegEx.test(event.key)) {
          console.log(1);
          event.preventDefault();
     }
});

// function keypresshandler(event)
// {
//      var charCode = event.keyCode;
//     //Non-numeric character range
//     if (charCode > 31 && (charCode < 48 || charCode > 57))
//     return false;
// }

// enter.addEventListener('keydown', function(event) {
//      if(event.ctrlKey // (A)
//     || event.altKey // (A)
//     || typeof event.key !== 'string' // (B)
//     || event.key.length !== 1) { // (C)
//         return;
//     }
    
//     if(!forbiddenRegEx.test(event.key)) {
//         console.log(1);
//         event.preventDefault();
//     }
// }, false);

// enter.addEventListener('input', function(event) {
//      var splitValue = enter.value.split('');
//      var charactersToFilter = 0;
//      var filteredSplitValue = splitValue.map(function(character) {
//              if(!forbiddenRegEx.test(character)) {
//                  charactersToFilter++;
//                  return '';
//              }
         
//              return character;
//          });
     
//      if(!charactersToFilter) {
//          return;
//      }
     
//      enter.value = filteredSplitValue.join('');
//      var charactersBeforeSelectionStart = filteredSplitValue.slice(0, enter.selectionStart);
//      var filteredCharactersBeforeSelectionStart = charactersBeforeSelectionStart.filter(function(character) {
//                return !character;
//           });
//      var totalFilteredCharactersBeforeSelectionStart = filteredCharactersBeforeSelectionStart.length;
//      var newSelectionStart = input2.selectionStart - totalFilteredCharactersBeforeSelectionStart;
     
//      enter.selectionStart = newSelectionStart;
//      enter.selectionEnd = input2.selectionStart;
// }, false);