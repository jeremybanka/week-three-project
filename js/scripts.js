// Business Logic

const inputNumbers = []
let robotOutput = []

let userInput = parseInt($("#userInput").val())

// inputNumbers.forEach(function(number) {

function robotTalk(number) {
    if (number.includes("1")) {
    inputNumbers.push("Beep!")
  } if (number.includes("2")) {
    inputNumbers.push("Boop!")
  } if (number.includes("3")) {
    inputNumbers.push("Wont you be my neighbor?")
  }
}



// UI Logic
// $(document).ready(function() {
  
//   $("#numberForm").submit(function(event) {
//     event.preventDefault();

//     const numberInput = $("#number").val();
//     $("#numberResult").text(numberInput);
//     $("#output").show(`${#numberResult}`)


//   });
// });