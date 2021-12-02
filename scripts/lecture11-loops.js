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

//notice let here, this creates a new i jsut for this loop
let str = '';
let num = 0;
for (let i = 20; i < 24; i++) {
    str += i; //this is Javascript we are adding string and number, most languages would throw an error
    num += i; //this is just number added to number
    console.log("I is now", i);
    console.log("Working on str", str)
    console.log("Working on num", num)
    //after this i++ will be performed and check on i < 24 be done
}

console.log("I is outside", i);
console.log("String is", str);
console.log("Number is ", num)

//so I create some shortcuts with const to get the element I want
const textDivs = document.getElementsByClassName("some-text")
const firstTextDiv = textDivs[0]; //this could fail if I do not have any some-text class elements
//we add some text to Text of the first some-text class element
firstTextDiv.innerText += " " + str; 
firstTextDiv.innerText += " Number is " + num; 

for (let i=0;i<10;i+=2) { //i+=2 same as i = i + 2
    console.log("I is now", i);
}

for (let i=100;i>=80;i-=5) { //i-=5 is same as i = i - 5
    console.log("I is now", i);
}
//again inner i discarded here
console.log("I is outside", i);

//we have a method of exiting a loop early
for (let i = 0; i < 20;i++) {
    console.log(i)
    if (i%2 === 0) { // % is reminder
        console.log("Cool i is even", i)
    } else {
        console.log("Cool i is odd", i)
    }
    if (i > 15) {
        console.log("Oh I want to quit already since i is", i);
        break; //this break breaks out of the loop and we are left outside the loop
    }
}
console.log("Back to non loopin business")

//I also have continue which lets us go to the next loop cycle without finishing current
for (let i = 0; i < 10;i++) {
    if (i > 5) {
        console.log("i is over 5", i);
        continue //I do not run the remaining loop instructions
    } // we could have put else here and achieved the same result as continue
    console.log("I is ", i);
}

const food = "kartupelis"
//how to go through each letter?
for (let i=0;i< food.length;i++) {
    console.log(`Letter No. ${i} of ${food} is ${food[i]}`)
    console.log(i, food[i]);
}


//switch works like multiple if else chain but more efficient and readable
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//no need to writh if (a === 6) {} if else (a === 7)
let a = 77;
switch (a) {
    case 5:
        console.log("a is 5!");
        break; //break is important otherwise you will fall through to the next instruction
    case 6:
        console.log("a is 6!");
        break;
    case 7:
        console.log("Do it when a is 7", a);
        //you should comment when you skip a break in switch case
    case 77: //so i can handle 7 and 77 with fall through
        console.log("a is 7 or 77!");
        break;
    default:
        console.log("Default case a is", a)
        break;
}

//we saw how we can go through characters one by one in a word.
//turns out we can have a general container/collection for words, numbers whatever you want
//it is called array in Javascript
//arrays are 0 indexed just like strings

const arr = ["Valdis","RTU","University","kefir"];
for (let i = 0;i<arr.length;i++) {
    console.log("Element", i, "is", arr[i]);
}
//I can add elements to the end of the array even though I declared it constant
arr.push("Latvia");
arr.push("Lithuania");
arr.push("Estonia");
let first = arr.shift(); //removes Valdis from arr and saves into first
let last = arr.pop(); //removes Estonia from arr and saves into last
for (let i = 0;i<arr.length;i++) {
    console.log("Element", i, "is", arr[i]);
}

//this is a new way of going through array, no need for index!!
//introduced a few years ago
for (const word of arr) {
    console.log("current word is", word)
}