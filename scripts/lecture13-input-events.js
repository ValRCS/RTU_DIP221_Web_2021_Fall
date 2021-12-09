console.log("Lecture 13 - input events")

const inputEl = document.querySelector('input'); // I get the first input tag
const logEl = document.getElementById('values'); //I get an element with particular id

//so call updateValue function whenever there is an input event on inputEl element
inputEl.addEventListener('input', updateValue) 


function updateValue(event) {
    console.log("input was changed");
    console.log("input element is equal to event target", inputEl === event.target);
    logEl.textContent = event.target.value;
  }

