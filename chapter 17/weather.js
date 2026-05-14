//INTRO FOR THE LOOP
// for (var counter = 0; counter < 500; counter++) {
//     console.log(counter + ": Hello, Javascript!");
// }

// for (var i = 10; i > 0; i--) {
//     alert (i);
// }
// alert ("Blast off!");

// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (var i = 0; i < myFriends.length; i++) {
//     alert(myFriends[i] + " is my friend.");
// }

// USING MATH.random()
// alert(Math.random());

// alert(Math.floor(Math.random() * 11));

// alert(Math.floor(Math.random() * (100 - 10) + 10));

//=============================================
//WEATHER FORECAST APP
//=============================================

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var weather = ["Sunny", "Partly Sunny", "Partly Cloudy",
    "Cloudy", "Raining", "Snowing", "Thunderstorm",
    "Foggy"];

var minTemp = 0;
var maxTemp = 100;

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        document.getElementById("5DayWeather").innerHTML += "<div id='" + 
        days[i] + "' class='" + weatherToday +
            "'><b>Forecast for " + days[i] + ":</b><br><br>" +
            weatherToday + " and " + tempToday + " degrees.</div>";

    }
}
generateWeather();