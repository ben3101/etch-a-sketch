//element variables
let mainDiv = document.getElementById('mainDiv');
let cols = 16;
let sqSize = 50/cols;
let pixelsBtn = document.getElementById('change-pixels');
let clearBtn = document.getElementById('clear-pixels');
let bgBtn = document.getElementById('change-bg')
let colorPicker = document.getElementById('pick-colour');
let backgroundPicker = document.getElementById('bg-colour');
backgroundPicker.value = "#808080";
let drawColour = "black";
let backgroundColour = "#808080";

//event listeners
pixelsBtn.addEventListener('click', gridSize);
clearBtn.addEventListener('click', clear);
bgBtn.addEventListener('click', changeBackground);
document.addEventListener('change', changeColour);

//change colour using colour picker
function changeColour(){
    //change colour
    drawColour = colorPicker.value;
    
    //console.log(drawColour);
    //console.log(backgroundColour);
}

function changeBackground(){
    //for all elements with 'background' class, update the colour
    let backgroundElements = document.querySelectorAll('.background');
    backgroundColour = backgroundPicker.value;
    for(let i=0; i<backgroundElements.length; i++){
        backgroundElements[i].style.backgroundColor=`${backgroundColour}`;
        console.log("selected"+backgroundElements[i]);
    }
}

//initial call to make grid
createGrid(cols);

function hoverFunction(){
    this.style.backgroundColor=`${drawColour}`;
    //divs that have been drawn on are no longer considered background pixels
    this.classList.remove('background');
}

function clear(){
    //create a new grid with pixels set back to default colour
    deleteGrid();
    createGrid(cols);
}


function gridSize(){
    //update number of divs per row/column
    //then update sqSize variable used when placing divs in each row
    //keep record of old value
    let prevCol = cols;
    cols = prompt(`Enter a new number of pixels per row (up to 100)
Current size is ${cols}x${cols}`);
    if(cols===null){
        cols = prevCol;
        return;
    }
    else if(cols===null || cols === '' || !cols){
        //if user cancels or sets to null, keep it the same size as before
        cols = prevCol;
    }//limit to 100x100 for performance reasons.
    else if(cols > 100){
        cols = 100;
    }
    sqSize = 50/cols;
    createGrid(cols);
}



//function to delete the previous grid
//(used before resizing)
function deleteGrid(){
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.innerHTML = '';
}

//function used to create each grid
function createGrid(cols){
    //clear old one first
    deleteGrid();
    //create a grid of square divs
    for(let i=1; i<=cols*cols; i++){
        //create divs, give them an id and class
        console.log('making divs');
        div = document.createElement('div');
        div.setAttribute('id', 'div'+i);
        div.classList.add('grid-item');
        //initially all divs are part of the 'background'
        div.classList.add('background');

        //style
        div.setAttribute('style', `width:${sqSize}vw;height:${sqSize}vw;background-color:gray;`);

        //add eventListener for hovering
        div.addEventListener('mouseover', hoverFunction);

        //add them to the main div
        mainDiv.appendChild(div);
    }
}




