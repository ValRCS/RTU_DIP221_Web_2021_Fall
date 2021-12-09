console.log("Lecture 13 - input events")

const inputEl = document.querySelector('input'); // I get the first input tag
//it would be preferably to use a semantic - meaningful variable name
//such as inputName or inputAge or inputColor something like that
//what to do if we have multiple elements that we would like to handle 
//and we do not want to save them in individual constants
//we can get a list of HTML elements matching this query (here our query is "input")
const allInputs = document.querySelectorAll('input'); // This gets me all the input tags
console.log("inputEl is same as first element in allInputs", inputEl === allInputs[0]);


const logEl = document.getElementById('values'); //I get an element with particular id
const capitalsElement = document.getElementById('values-2'); //preferably you can come up with better variable names

//another option of getting elements is to use class name
const adders = document.getElementsByClassName("add-input");
const resultElement = document.getElementById("result-val");
let additionResult = 0; //not required but useful to save the result

//so call updateValue function whenever there is an input event on inputEl element
// inputEl.addEventListener('input', updateValue) ;
//I can replace the above with a call by index to the first element(starts at 0 not 1 )
// allInputs[0].addEventListener('input', updateValue);

// allInputs[1].addEventListener('change', updateValue);

//well with 2 or 3 elements we can do it by hand, but what if we have multiple similar elements
//then loop would be more convenient
//so we loop through and just call addEventListener on each input element
for (const inputElement of allInputs) {
  console.log("We have an element will add handler")
  inputElement.addEventListener('input',updateValue);
}
//so we will loop through all elements in our allInputs list and will add a listener to each one

//alternative to abovefor of loops is to use old style index loops
for (let i = 0; i < allInputs.length; i++) {
  console.log("We have an element No.", i, " will add handler")
  allInputs[i].addEventListener('change',updateValueCapitalize);
  // allInputs[i].addEventListener('focus', whenInFocus);
  
  allInputs[i].onfocus = whenInFocus; //this only lets me have a single function for this particular event
  //so above onfocus would overwrite older handlers for this onfocus event
}

//so we will use the same updateAdditionResults function 
//for both addition inputs
for (let i = 0; i < adders.length; i++) {
  console.log("Adding change listener to adder No. ", i);
  adders[i].addEventListener('input', updateAdditionResults)
}

function updateValue(event) {
    console.log("input was changed");
    console.log("input element is equal to event target", inputEl === event.target);
    logEl.textContent = event.target.value;
    // logEl.textContent += event.target.value; //this would add to the end of text of logElement
  }

  function updateValueCapitalize(event) {
    console.log("Will update log with capitals")
    capitalsElement.textContent = event.target.value.toUpperCase();

  }

  function updateAdditionResults(event) {
    console.log("updating results element")
    //FIXME below will need some fixing
    additionResult = parseInt(adders[0].value) + parseInt(adders[1].value)
    console.log("New additionResult is", additionResult)
    resultElement.value = additionResult;
  }

  //in this example from MDN
  //we do not declare a function ahead of time
  //but we make up a function on the spot (so called anonymous function)
  //why because we do not need it elsewhere that is an alternative approach
  document.querySelector("#id-checkbox").addEventListener("click", function(event) {
    document.getElementById("output-box").innerHTML += "Sorry! <strong><code>preventDefault()</code></strong> won't let you check this!<br>";
    event.preventDefault();
}, false);

function whenInFocus(event) {
  console.log("Element with value", event.target.value, "is in focus!");
  console.log("Element has innerHTML of", event.target.innerHTML)
  console.log("Element has id of", event.target.id)
}