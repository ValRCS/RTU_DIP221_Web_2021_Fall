//I could keep a separate file of commonly used functionality
//in effect I would be creating my own personal library 
//I can use this library by including it in source above the .js file that calls these functions
function divide(a, b) {
    return a / b //TODO check for 0
}

function random(number) {
    //we convert a random number between 0 and 1 into a random number
    //between 1 and number
    return Math.floor(Math.random() * (number+1));
  }