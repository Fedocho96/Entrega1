
//selecciono todos los elementos con la clase slides img y un contador para el indice en 0
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//iniciamos el slider en cuanto cargue el cotenido del dom
document.addEventListener("DOMContentLoaded", initializeSlider);


//se le asigan la clase "displayslide a la imagen con el indice activo"
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}


//creamos cindicionales para los limites del contador y luego la funcion que remueve y agrega la clase displayslide
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}


//funciones para sumar o restar el indice de las imagenes
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}



//dark mode boton


//obtenemos el elemento con el Id indicado
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

//ambas funciones para agregar o quitar el estilo "darkmode" al elemento
const enableDarkmode=()=>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode=()=>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

//funcion que "escucha" el evento al hacer click en el boton, la cual almacena el estilo para mantenerlo activo en caso de refrescar la pagina y cambia el estilo
// en base a un condicional
themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
