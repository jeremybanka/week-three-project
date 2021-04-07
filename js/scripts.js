// Business Logic


const fullString = ["0", "Beep!", "Boop!", "Wont you be my neighbor?", "4", "5", "6", "7", "8", "9"]

function RoboRogers(robotTalk) {
  if (fullString.includes(robotTalk)) {
    return true;
  } else {
    return false;
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