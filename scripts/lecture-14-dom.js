console.log("Will manipulate DOM elements for food!");

//TODO
//ADD listeners to Generate Elements
//Read element count from input
//Create Elements

//this is where we will display our new elements
const resultParent = document.getElementById("results");

const genButton = document.getElementById("gen-btn");
const elCount = document.getElementById("el-count");
let idCount = 0

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function createNewElement(parent, tag, id="", classes=[], text) {
    const newEl = document.createElement(tag);
      // and give it some content
    const newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newEl.appendChild(newContent);
    newEl.id = "res-el-" + id; //so we add/modify id attribute for this element
    //we could use a global variable if we are worried about overusing the same id
    // newEl.id = "res-el-" + (id+idCount); //so we add/modify id attribute for this element
    // idCount++; //this is a global variable
    //we could have many classes so we are going to go through this array of classes
    //and add them one by one, 
    //default argument is array of 0 elements so this loop will not run
    for (const newClass of classes) {
        newEl.classList.add(newClass);
    }


    //before the next command, the new element exists but is not attached to the DOM tree
    parent.appendChild(newEl);
}

function onGenerateElementsClick(ev) {
    const count = parseInt(elCount.value);
    console.log("Will generate elements. How many? - " + count);

    //we will create a loop to create as many elements as our count indicates
    for (let i=0; i<count; i++) {
        const txt = "Element No." + i;

        classArray = ["strong-el"];
        //now depending on the reminder (odd /even here)
        //we will add another class to our class names array
        if (i % 2 == 0) {
            classArray.push("dark-col");
        } else { //odd reminder is 1
            classArray.push("light-col");
        }
        createNewElement(resultParent, "div", id=i, classes=classArray, text=txt);
    }
    
}

//alternative would be 
//addEventListener('click', onGenerateElementsClick)
genButton.onclick = onGenerateElementsClick //notice no parenthesis!
