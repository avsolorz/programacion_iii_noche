const areatouch = document.getElementById('areatouch');
areatouch.addEventListener('touchstart', () => {
    areatouch.style.background = 'despskblue';
});
areatouch.addEventListener('touchend', () => {
    areatouch.style.backgroundColor = 'skyblue';
    alert("¡Touch Finalizado")
});
