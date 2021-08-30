//Lazy loading
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const accion = (entry) => {
    const nodo = entry.target
    console.log('holisss');

    //des registra la imagen no la escuches mas
    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    //IntersectionObserver => Observ(imagen)
    observer.observe(imagen);
};
