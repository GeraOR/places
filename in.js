// Función para calcular y mostrar los días transcurridos automáticamente
function actualizarContador() {
    // Obtener la fecha seleccionada por el usuario
    const fechaSeleccionada = new Date(document.getElementById('fechaInput').value);
    
    // Obtener la fecha actual
    const fechaActual = new Date();
    
    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferencia = fechaActual.getTime() - fechaSeleccionada.getTime();
    
    // Convertir la diferencia de milisegundos a días
    const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = `${diasTranscurridos} días de novios.`;
}  
// Llamar a la función automáticamente cada segundo
setInterval(actualizarContador, 1000);  
// Llamar a la función una vez al cargar la página para mostrar el resultado inicial
actualizarContador();

function back(){
    window.location.href = "https://geraor.github.io/My-Girl/"
}