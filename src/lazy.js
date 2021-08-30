//Lazy loading
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target // div container
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    //load image
    imagen.src = url;


    //des registra la imagen no la escuches mas
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
    //IntersectionObserver => Observ(imagen)
    observer.observe(imagen);
};
