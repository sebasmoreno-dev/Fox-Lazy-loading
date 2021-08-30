/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy'

    //paso 1
const minium = 1;
const maxium = 122;

const randomFox = () => Math.floor(Math.random() *(maxium - minium)) + minium;

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${randomFox()}.jpg`; //To do


    //paso 2
    container.appendChild(imagen);
    return container;
}

//paso 3
const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");


const addButton = document.querySelector("button");

//4 agregamos una imagen y la observamos
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}



addButton.addEventListener("click", addImage);
