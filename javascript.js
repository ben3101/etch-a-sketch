let mainDiv = document.getElementById('mainDiv');

//create a 16x16 grid of square divs
for(let i=1; i<=16*16; i++){
    //create divs, give them an id and class
    console.log('making divs');
    div = document.createElement('div');
    div.setAttribute('id', 'div'+i);
    div.classList.add('grid-item');

    
    //add eventListener for hovering
    


    //add them to the main div
    mainDiv.appendChild(div);
}
