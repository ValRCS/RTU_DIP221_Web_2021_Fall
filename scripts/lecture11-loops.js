console.log("Showing different looping constructions")

console.log("Hello RTU!")
// console.log("Hello RTU!")
// console.log("Hello RTU!")
// console.log("Hello RTU!")
//how about 100 times ? :)

let i = 10;
console.log("BEFORE LOOP", i);
while (i < 4) {
    console.log("I is now", i);
    //could add more lines of work here
    i++; //increase i by 1 same as i = i + 1;
    //now we will return tothe top (line 10 to check if the loop statement is still true)
}
console.log("After Loop ends I is now", i);

let result = 0;
i = 0; //resetting i since we already declared it earlier
while (i < 10) {
    result += i; //same as result = result + i
    i++;
    console.log("Result is", result);
    console.log("i is ", i)
}
console.log("After 2nd Loop ends I is now", i);
console.log("Result is ", result)

//I can even add elements using a while loop
i = 0;
const app = document.getElementById("app")
while (i < 4) {
    const newDiv = document.createElement("div"); //we create a new generic div element

    // and give it some content
    //using backticks to insert variable directly into a string
    const newContent = document.createTextNode(`Hi there and greetings No. ${i}`);
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    app.appendChild(newDiv);
    i++;
}

//rarer is a do while loop
//do while does something at least once and only then checks the condition
//sort of shoot first and ask questions later loop
// i = 100
i = 1
do {
    console.log("Doing this in any case", i);
    i++;
} while (i < 5)
console.log("I is now", i);