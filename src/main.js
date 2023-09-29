// Funcion para el contador
function actualizarContador() {
    const fechaFinal = new Date('2023-10-30T00:00:00');
    const ahora = new Date();

    const diferencia = fechaFinal - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);



// Botones y video
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const video = document.getElementById('video');

// URL de videos
const videoURLs = [
    'https://www.youtube.com/embed/gVUs4oFKJmY',
    'https://www.youtube.com/embed/yAYSPq3C_vY',
    'https://www.youtube.com/embed/An84VACW0Hw',
    'https://www.youtube.com/embed/WMeqLdvCYog'
];

// Cambiar video
function cambiarVideo(url) {
    video.src = url;
    actualizarBotonActivo(url);
}

// Actualizar el botón activo
function actualizarBotonActivo(urlVideo) {
    const botones = [btn1, btn2, btn3, btn4];
    botones.forEach((boton) => {
        boton.classList.remove('boton-activo');
        if (videoURLs[botones.indexOf(boton)] === urlVideo) {
            boton.classList.add('boton-activo');
        }
    });
}

// Eeventos de cada botones
btn1.addEventListener('click', () => {
    cambiarVideo(videoURLs[0]);
});

btn2.addEventListener('click', () => {
    cambiarVideo(videoURLs[1]);
});

btn3.addEventListener('click', () => {
    cambiarVideo(videoURLs[2]);
});

btn4.addEventListener('click', () => {
    cambiarVideo(videoURLs[3]);
});

// Primer video por defecto
cambiarVideo(videoURLs[0]);
