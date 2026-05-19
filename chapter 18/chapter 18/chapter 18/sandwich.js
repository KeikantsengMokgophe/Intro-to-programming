//LISTING 18.1
// var i = 0;
// while (i < 500) {
//   console.log(i + ": Hello, Javascript!");
//   i++;
// }

//LISTING 18.2
// var count = 10;
// while (count > 0) {
//   alert(count);
//   count--;
// }
// alert("Blast oFF!");

//LISTING 18.3
// var people = ["Deborah", "Caria", "Mary", "Suzan"];
// var i = 0;
// while (people[i]) {
//   alert(people[i]);
//   i++;
// }








// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
  resetForm();
  var day = 0;

  while (money > 0) {
    var priceToday = getSandwichPrice();
    var numberOfsandwiches = document.getElementById("numSandwiches").value;

    var totalPrice = priceToday * numberOfsandwiches;

    if (money >= totalPrice) {
      money = money - totalPrice;

      lunches++;
      day++

      document.getElementById("receipt").innerHTML += "<p>On day " +
        day + ", sandwiches are: R" + priceToday + ". Youhave R" + money.toFixed(2) + " left.</p > ";

    } else {
      document.getElementById("receipt").innerHTML += "<p>Today,sandwiches are: R" + priceToday + ". You don't haveenough money. Maybe your sister will give you someof her sandwich.</p>";

      money = 0;

    }
  }
  document.getElementById("reciept").innerHTML += "<p>You bought " +
    lunches + " lunches this week.</p>";
}


function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
