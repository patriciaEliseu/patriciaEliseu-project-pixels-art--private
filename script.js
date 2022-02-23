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
        console.log(event.target);
        let selected = document.getElementsByClassName('selected')[0];
        event.target.style.backgroundColor = selected;
        color;
    })
}

/* let carregarJanela=window.getComputedStyle(selected, null); */
function mudarPintarCor() {
    let paintPixel = document.getElementsByClassName('pixel')
    for (let index = 0; index < paintPixel.length; index += 1) {
        /*  console.log(paintPixel[index]); */
        paintPixel[index].addEventListener('click', function(event) {
            let selected = document.querySelector('.selected');
            /* console.log(selected.style.backgroundColor); */
            let cor = getComputedStyle(selected).backgroundColor;
            console.log(cor);
            event.target.style.backgroundColor = cor;
        })
    }
}
mudarPintarCor();
/* let pintarPixel = document.getElementsByClassName('pixel') */
/* console.log(pintarPixel); */
/* function pintarPixels(pintarPixel) { */
/* let pintarPixel = document.getElementsByClassName('pixel') */
/* pintarPixels.style.backgroundColor = ('black');
    console.log(pintarPixels);
} */