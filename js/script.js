// Hora y fecha en tiempo real
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}

// Función para obtener la hora de forma mística
function mysticalTime() {
    const datetimeElement = document.getElementById("datetime");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Aquí podemos usar caracteres místicos, por ejemplo usando círculos o símbolos
    const mysticSymbols = ['⧫', '✷', '✪', '❂', '❀', '✺', '✧', '☀', '✸'];

    // Convertir los números de la hora en símbolos místicos
    const mysticHour = mysticSymbols[hours % mysticSymbols.length];
    const mysticMinute = mysticSymbols[minutes % mysticSymbols.length];
    const mysticSecond = mysticSymbols[seconds % mysticSymbols.length];

    const timeString = `${mysticHour}${mysticMinute}${mysticSecond}`;
    datetimeElement.textContent = timeString;
}

// Actualizar cada segundo
function smoothMysticalTimeMovement() {
    mysticalTime();
    setInterval(mysticalTime, 1000);
}

smoothMysticalTimeMovement();
