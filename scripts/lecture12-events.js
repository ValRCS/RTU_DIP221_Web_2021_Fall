console.log("Now moving onto events")
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

// const btn = document.querySelector('button'); //this would get me first button on page
//if possible be more precise
//ids have to be uniq so that would be preferably if your element has it

const headBtn = document.getElementById("headline-color-btn")
const btn = document.getElementById("color-btn")


//here I am defining a so called anonymous function (no name function)
//and assigning it to btn.onclick event
btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log("Changing color to", rndCol)
    document.body.style.backgroundColor = rndCol;
  }


  //I can make a function ahead of time and then I can pass it later
function adjustHeadlineColor() {
    // const headlines = document.getElementsByTagName("h1") //remember html should generally have one h1
    //above line would get me multiple headlines (which is not very likely here)
    const headline = document.querySelector("h1") //instead I grab the first match
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log("Changing headline color to", rndCol)
    headline.style.backgroundColor = rndCol;
}

//headBtn.onclick = adjustHeadlineColor //NOTICE no (), I am simpl passing function
//to onclick, binding it, I am NOT calling adjustHeadlineColor just yet
//the calling will happen when someone clicks on headBtn

//there are other ways of making an event listener for some element
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
headBtn.addEventListener("click", adjustHeadlineColor) //
//difference is that addEventListeners can be many for the same action on the same element
//onclik is basically just one

//third way is to add listenere on the HTML part but that is not recommended these days
