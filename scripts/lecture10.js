console.log("Comparision, Logical and If else operations");
let a = 2
let b = 3
let c = 5
//I am using string interpolation to insert variables directly into a string template
//more about template literals here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(`${a}+${b}==${c} ?`, a+b == c)
console.log(`${a}+${b}!=${c} ?`, a+b != c)
console.log(`${a}+${b}>${c} ?`, a+b > c)
console.log(`${a}+${b}<${c} ?`, a+b > c)
console.log(`${a}+${b}>=${c} ?`, a+b >= c)
console.log(`${a}+${b}=<${c} ?`, a+b <= c)

//the hardest one seems to be inequality
console.log("2+2 is not equal to 4? ", 2+2 != 4) //this is false because reverse is true 2+2 == 4

const myName = "Valdis"
const myPlumber = "Voldemars"
console.log(myName, myPlumber, myName > myPlumber)
//why is the above statement false?
//two hypothesis

console.log(myName > "Vol") //still false so it is not length
console.log(`"a" < "o"`,"a" < "o") //because of ascii values

//if I want lengths I would have to say so

console.log(`String Lengths of ${myName} < ${myPlumber} `,myName.length < myPlumber.length) //so comparing lengths of strings

console.log(0, "==", "0", 0 == "0") //this turns out to be true by Javascript rules
console.log(typeof(0), typeof("0")) //they are in fact different data types
console.log(0, "===", "0", 0 === "0") //this turns out to be false because these are different things

console.log(40, "!=", "40", 40 != "40") // so here it thinks the values are equal because the inequality is false
console.log(40, "!==", "40", 40 !== "40") //this makes more sense as the data types are inequal

//classical logical or operator
console.log("In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.")
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

console.log(false || 55 || 0) //answer will be true since 1 is truthy and thus returns the first truthy value

let myTemp = 36.6
console.log("Am I sick?", myTemp < 36 || myTemp > 37) // this would be true if I was outside healthy range

console.log("In classical programming, AND returns true if both operands are truthy and false otherwise:")

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// console.log("Am I healthy?", myTemp > 36 || myTemp < 37) //this would be silly since it will be always true...:)
console.log("Am I healthy?", myTemp >= 36 && myTemp <= 37) //this would be silly since it will be always true...:)

//// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
console.log( 1 && 5 && "Valdis"); // "Valdis"" all are truthy and the last one is displayed

//logical negation

console.log( !true ); // false
console.log( !false ); // true

let myToggle = false
console.log("myToggle is now", myToggle)
myToggle = !myToggle //so i overwrite my previous truth value with the reverse
console.log("myToggle is now", myToggle)
myToggle = !myToggle
console.log("myToggle is now", myToggle)
myToggle = !myToggle
console.log("myToggle is now", myToggle)

//conditional branching
let outsideTemp = 8
if (outsideTemp > 25) console.log("A little bit hot outside isn't it?", outsideTemp)
outsideTemp += 20 //same as outsideTemp = outsideTemp + 20
if (outsideTemp > 25) console.log("A little bit hot outside isn't it?", outsideTemp)

outsideTemp += 20 
if (outsideTemp > 35) {
    console.log("It is getting really hot now", outsideTemp)
    console.log("Let's go buy an air conditioner")
}

//we can use truthy / falsy properties of values
if (myName) {
    console.log("Cool you have a truthy name", myName)
}

myTemp = 35.7
if (myTemp >= 36 && myTemp <= 37) {
    console.log("Cool! You are in great shape. Your temperature is", myTemp)
} else { //so if the if is false we do this
    console.log("Hmm your temp is not healthy", myTemp)
}

myTemp = 37.6
if (myTemp > 37) {
    console.log("You have a fever of ", myTemp)
} else if (myTemp < 36) {
    console.log("You are quite cold your temp is", myTemp)
} else { //the healthy branch
    console.log("Great! you are healthy with temperature of", myTemp)
}
//so only one of the above three paths will run

console.log("This will always run")