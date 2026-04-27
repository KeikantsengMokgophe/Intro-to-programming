// CHAINING IF ..ELSE STATEMENTS
var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
  console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
  console.log("I'm having the beef");
} else if (sweetAndSourPork) {
  console.log("ok, I'll have the pork");
} else {
  console.log("Well, I guess I'll just have rice then...");
}

var sheepcounted = 0;
while ( sheepcounted < 10) {
    console.log("I have counted " + sheepcounted +"sheep!")
    sheepcounted++;
}
console.log("Zzzzzzzzzzzz");
//FOR LOOPS ;

for ( var sheepcounted = 0; sheepcounted++ < 10; sheepcounted++) {
    console.log(" I have counted" + sheepcounted + "sheep") ;
}
console.log("Zzzzzzzzzzzz");
var timesToSayhello = 3;
for (var i = 0;i < timesToSayhello; i++) {
    console.log("hello!");
}
var animals = ["lion","flamingo","Polar bear", "Boa constrictor"]
for (var i = 0; i < animals.length; i++) {console.log("this zoo contains " + animals[i] +".");

}
var name = "orlin";

for(var i = 0; i < name.length; i++) {console.log("my name contains the letter " + name[i]+ ".");

}