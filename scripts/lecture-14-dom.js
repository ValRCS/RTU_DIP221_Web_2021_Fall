console.log("Will manipulate DOM elements for food!");

//TODO
//ADD listeners to Generate Elements
//Read element count from input
//Create Elements

//this is where we will display our new elements
const resultParent = document.getElementById("results");

const genButton = document.getElementById("gen-btn");
const elCount = document.getElementById("el-count");

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function createNewElement(parent, tag, id="", classes="", text) {
    const newEl = document.createElement(tag);
      // and give it some content
    const newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newEl.appendChild(newContent);

    parent.appendChild(newEl);
}

function onGenerateElementsClick(ev) {
    const count = parseInt(elCount.value);
    console.log("Will generate elements. How many? - " + count);

    createNewElement(resultParent, "div", id=3, classes="", text="Hello there!");
}

//alternative would be 
//addEventListener('click', onGenerateElementsClick)
genButton.onclick = onGenerateElementsClick //notice no parenthesis!
