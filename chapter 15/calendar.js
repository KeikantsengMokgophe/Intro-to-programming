// var Weekday = prompt("Enter your favourite day of the week!");

// var theResponse;
// switch (Weekday) {
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "Wednesday":
//         theResponse = "Halfway there!";
//     case "Thursday":
//         theResponse = "It's the new friday!";
//         break;
//     case "Friday":
//         theResponse = "TGIF! yeah!";
//         break;
//     case "saturday":
//         theResponse = "What a day!";
//         break;
//     case "sunday":
//         theResponse = "sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven't heard of that one!";
// }
// alert(theResponse);

//===================================================================
//                     ACTIVITY CALENDAR
//====================================================================

// var myDate = new Date();
// console.log(myDate);
// // GETTER METHODS

// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getTime());

// // SETTER METHODS
// var myNewDate = new Date();
// console.log(myNewDate.setMonth(7));

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();
// call the displayDate() function
displayDate();
function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();

}

function displayActivity() {
    // todo: find out the day of the week
    /* todo: set a variable, called youShould, with a
   different string based on what day of the
   week it is. */
    // todo: output the value of youShould into thethingToDo div
    var dayOfWeek = d.getDay();
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it!";
            break;

        case 1:
            youShould = "Get up and study";
            break;

        case 2:
            youShould = "Do the garden";
            break;

        case 3:
            youShould = "Walk the dog";
            break;

        case 4:
            youShould = "Go to the gym";
            break;

        case 5:
            youShould = "Start coding";
            break;

        case 6:
            youShould = "Take a day off";
            break;

    }
  document.getElementById("thingToDo").innerHTML = youShould;

}
