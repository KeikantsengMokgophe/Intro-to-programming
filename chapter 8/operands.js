console.log(typeof 8);
var dotheMath = 7 + 8 + 36 + 18 + 12;
console.log(typeof dotheMath);
var dreamCar = {
    make: "Oldmobile",
    model: "98",
    color: "brown",
    year: "1983",
    bodystyle: "luxury car",
    price: 4500
    

}

// alert("the type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.
color;
document.getElementById("body").innerHTML = dreamCar.make + " " +
dreamCar.model;