var myName = prompt("What is your name?");

var heightInches = prompt("How tall are you in inches?")

var weightPounds = prompt("And how much do you weigh?");

var heightCentimeters = heightInches * 2.54;

var weightKilos = weightPounds * 0.453;

console.log(myName + " is " + heightCentimeters + " cm tall and weighs " + weightKilos + " kg.")

// var deepThoughts = prompt("What is the meaning of life, the universe,a nd everything?");
//
// alert(deepThoughts + '!!!');

function greeting(name){
  alert("Thanks, " + name + "! Check the console for your converted height and weight.");
}

greeting(myName);
