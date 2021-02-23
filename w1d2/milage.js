const prompt = require("prompt-sync")();
let input1 = prompt("Please enter the begining odometer reading in miles: ");
let input2 = prompt("Please enter the ending odometer reading in miles: ");
let gasUsed = prompt("Please enter the number of gallons of gas used: ");
input1 = parseFloat(input1);
input2 = parseFloat(input2);
gasUsed = parseFloat(gasUsed);

let milage = (input2 - input1) / gasUsed;

console.log("The milage of your car is " + milage + " miles/gallon");
