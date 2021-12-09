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
}

function updateValue(event) {
    console.log("input was changed");
    console.log("input element is equal to event target", inputEl === event.target);
    logEl.textContent = event.target.value;
  }

  function updateValueCapitalize(event) {
    console.log("Will update log with capitals")
    capitalsElement.textContent = event.target.value.toUpperCase();

  }
