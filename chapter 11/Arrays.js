//creating and Accessing Arrays
var favouriteFoods = [];
favouriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"];

var myArray = [5, "Hi there", true];

console.log(myArray[0]);

//Using Variables Inside Arrays
var firstname = "Neil";
var middleName = "deGrasse"
var lastName = "Tyson";
var scientist = [firstname, middleName, lastName];
console.log(scientist);

//Changing Array Element Values
var people = ["Keikantseng", "Kantse","Mokgophe"];
console.log(people);

people[3] = "georgie";
console.log(people);

//Working With Arrays
var people = ["Mary", "Bobby", "judie", "Eddie", "Herbie", "Bobby"];

var otherpeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

document.getElementById("peopleIKnow").innerHTML = people.toString();

document.getElementById("peopleIKnow").innerHTML = people.valueOf();

//CONCAT()
people = people.concat(otherpeople);
console.log(people);

//INDEXOF()
console.log(people.indexOf("Bobby"));

//JOIN()
// people = people.join(" # ");
document.getElementById("peopleIKnow").
innerHTML = people;


//LASTINDEXOF()
console.log(people.lastIndexOf("Bobby"));

//POP()
var person = people.pop();
console.log(person);

//PUSH
people.push("Teddy");
console.log(people);

//REVERSE
people.reverse();

//SHIFT AND UNSHIFT
console.log(people.shift());
console.log(people);

people.unshift("Kantse");
console.log(people);

//SLICE()
people = people.slice(0,3);
console.log(people);

//SORT
console.log(people.sort());

//SPLICE
people.splice(1,0,"Teagan");
console.log(people);