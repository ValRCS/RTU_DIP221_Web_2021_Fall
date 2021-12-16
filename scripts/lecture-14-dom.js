console.log("Will manipulate DOM elements for food!");

//TODO
//ADD listeners to Generate Elements
//Read element count from input
//Create Elements

//this is where we will display our new elements
const resultParent = document.getElementById("results");

const genButton = document.getElementById("gen-btn");
const clearButton = document.getElementById("clear-all-btn");


const elCount = document.getElementById("el-count");
const colorPicker = document.getElementById("color-inp");


let idCount = 0

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function createNewElement(parent, tag, id="", classes=[], text="", color="") {
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

    //if there is any color passed we will change background color
    if (color) {
        newEl.style.backgroundColor = color;
    }


    //before the next command, the new element exists but is not attached to the DOM tree
    parent.appendChild(newEl);
}

function onGenerateElementsClick(ev) {
    //we will first clear the old elements if we have any
    onClearAllElements();

    const count = parseInt(elCount.value);
    console.log("Will generate elements. How many? - " + count);

    //we will create a loop to create as many elements as our count indicates
    for (let i=0; i<count; i++) {
        const txt = "Element No." + i;

        let bgColor = "";
        let classArray = ["strong-el"];

        //now depending on the reminder (odd /even here)
        //we will add another class to our class names array
        if (i % 2 == 0) {
            classArray.push("dark-col");
            
            //so for even index numbers we grab the color value from our color picker
            bgColor = colorPicker.value; 
        } else { //odd reminder is 1
            classArray.push("light-col");
        }
        createNewElement(resultParent, "div", id=i, classes=classArray, text=txt, color=bgColor);
    }
    
}



function onClearAllElements() {
    console.log("Will clear all elements");
    //TODO actually clear ALL of them!
    //we could remove from both ends one by one - you could have a button for this!
    // resultParent.removeChild(resultParent.firstChild); //so this removes just the first child
    // resultParent.removeChild(resultParent.lastChild); //so this removes just the last child
    //for all removing ALl elements we will use a while loop
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    while (resultParent.firstChild) {
        resultParent.removeChild(resultParent.firstChild);
      }
    
}




function onPageLoaded() {
    console.log("This runs when the page is ready");
    //we could put everything here 
    //if we did not have defer (which activates slightly faster)
    //we could add all the code here
    //alternative would be 
    //addEventListener('click', onGenerateElementsClick)
    genButton.onclick = onGenerateElementsClick //notice no parenthesis!

    clearButton.onclick = onClearAllElements;
}

//good practice to add listeners actually once the page is loaded
//we have defer that suffices actually
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
//load event fires slightly after defer
window.onload = onPageLoaded //so onPageLoaded will only run when onload event is fired