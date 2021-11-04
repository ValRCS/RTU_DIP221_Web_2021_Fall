//so these are instructions that will run linearly when we include this script file
console.log("Hello lecture 9!"); //this is a command to write to console on your browser
// i am creating a constant (a variable that can not be changed) reference to a particular element
const myName = prompt("What is your name friend?");
const myApp = document.getElementById('app'); //now I have access to this element
// myApp will be undefined if the element with id app is not ready when this code is run
//remember id has to be unique
//so we concatanate textContent together from old textContent and some new text
myApp.textContent = myApp.textContent + " " + myName; //so we tack contents of myName at the end
myApp.style.backgroundColor = "aqua";
const celsius = prompt("What is your current temperature in celsius?")
//we will have a problem with data types here
const farenheit = (celsius * 9/5) + 32 // multiplication is *
const tempElement = document.getElementById('temp-display');
tempElement.textContent = tempElement.textContent + " " + farenheit;

