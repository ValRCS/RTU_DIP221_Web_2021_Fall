console.log("Javascript Functions ahoy!")

//I define a function BUT I do not run it!
function printGreetings() {
    //set of statement of what we want done
    console.log("Hello there!")
    console.log("This is called from a function")
    //we can keep going here
    // the guideline is to keep a single function in a single screen page t
    //but that is just a suggestion
}

//now I actually use it - call the function to do something
printGreetings()
//i can use it as many times as I want
// printGreetings()
// //I could even put my function in a loop
// for (let i=0;i<5;i++) {
//     console.log("Going to run my function while index i is", i)
//     printGreetings()
// }

function customGreet(name) {
    console.log("Hello there", name)
}

customGreet("Valdis")
const friend = "Pēteris" //let or var would work as well
customGreet(friend)
for (let i=0;i<3;i++) customGreet("Mrs."+i) //Javascript lets us add strings and numbers unlike most languages

add(5,100) // turns out I can already call the function, in many languages this is not possible

//so we can have as many parameters as we need
function add(a, b) {
    let total = a+b //this total is only alive while this function is alive
    console.log(`${a}+${b}=${total}`) //newer way of inserting variables in text string
    console.log(a+"+"+b+"="+total) //older way of inserting variables in a text
}

add(2,3)
add(9000,100)
add("Valdis", "RTU")
//console.log(total) //so total from function add is not available in global scope
//also a and b are not available globally

//these a and b parameter
function multiply(a, b) {
    const result = a*b
    console.log(a, "*", b, "=", result)
    return result //so we return whatever we want, could be called result, total, a, b, any type of data
}

let m10_24 = multiply(10,24) //now I gain ability to save the result from the function
console.log(m10_24)
//if we can return values we gain ability for the function to be nested and used by other functions

//so the inner functions will be called first then the result will be given to outer function
let bigResult = multiply(multiply(2,3), multiply(10,20))
console.log(bigResult)

function substract(a, b) {
    return a-b //kind of silly since we do nothing here
    //still we could have added some logggin some checking for bad values etc
}
let subResult = substract(multiply(5,20), substract(40,25))
console.log("subResult is", subResult)

//i can add default values to my parameters
//default value is the value we assign to our parameter if it is not defined when we call it
function lazyPower(n, exp=2, verbose=false) {
    const result = Math.pow(n, exp)
    //so I have added conditional logging to my little function
    if (verbose) {
        console.log(n, "to the power of ", exp, "is", result)
    }
    return result
}

let cube = lazyPower(2, 3)
console.log("2 cubed is", cube)

let square = lazyPower(5) //no need to enter exp
console.log("5 squared is", square)

let quadratic = lazyPower(10, 4, verbose=true) // generally boolean parameters should be named
console.log("10 to the power of 4 is", quadratic)

let anotherCube = lazyPower(5, n=3, verbose=true) //so I can mix up the order of paramters if I want
//generally we want to keep the order
console.log(anotherCube)

//some guidelines on naming functions
//https://javascript.info/function-basics#function-naming
//Naming a function
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

//One function – one action
// A function should do exactly what is suggested by its name, no more.

// Two independent actions usually deserve two functions, 
// even if they are usually called together (in that case we can make a 3rd function that calls those two).