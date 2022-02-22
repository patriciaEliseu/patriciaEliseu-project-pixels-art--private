/* let corPalette = document.getElementsByClassName('color');

let penColour = "black";

function setPenColour(pen) {
    penColour = pen;
} */

let colours = document.getElementsByClassName('color')
for (let index = 0; index < colours.length; index += 1) {
    /* console.log(colours[index]); */
    colours[index].addEventListener('click', function(event) {
        /* console.log(event.target); */
        let selected = document.getElementsByClassName('selected')[0];
        /* console.log(selected); */
        selected.classList.remove('selected');
        event.target.classList.add('selected');
    })
}

let pixelsColor = document.getElementsByClassName('pixel')
for (let index = 0; index < pixelsColor.length; index += 1) {
    /*  console.log(pixelsColor[index]); */
    pixelsColor[index].addEventListener('pixel', function(event) {
        let selected = document.getElementsByClassName('selected')[0];
        event.target.style.backgroundColor = selectedcolor;
    })
}



/* console.log(colours); */
/* let button = document.getElementById('clear-board'); */
/* console.log(button); */
/* utton.addEventListener('click', function(event) {
    event
}) */

/* console.log('teste'); */
/* let quadro = document.getElemensByClassName('linha');
console.log(quadro); */