/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy.js'

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
    imagen.dataset.src = `https://randomfox.ca/images/${randomFox()}.jpg`; //To do

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);
    //paso 2
    /* container.appendChild(imagen); */

    appendedImages++;
    printLog();

    return container;
}

//paso 3
const mountNode = document.getElementById("images");


const addButton = document.querySelector("#add");
const cleanButton = document.querySelector("#clean");

//4 agregamos una imagen y la observamos
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}

const cleanImages = () => {
    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    })
}


addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
