const mensaje=document.getElementById('mensaje');
mensaje.textContent="Actualizado desde js";
mensaje.style.color="blue";

const link=document.getElementById('link');
link.setAttribute('href', 'https://google.com');
link.classList.add('boton');
link.textContent="Ir a GOOGLE"