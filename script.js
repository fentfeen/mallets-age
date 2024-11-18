// Melbourne timezone offset (AEDT is UTC+11)
const melbourneOffset = 11 * 60 * 60 * 1000;
const eventDate = new Date(Date.UTC(2024, 9, 19, 8, 24, 0) - melbourneOffset);

// Function to calculate the time difference
function updateTime() {
    const now = new Date();
    const diff = now - eventDate;

    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000)) % 12;
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) % 4;
    const days = Math.floor(diff / (24 * 60 * 60 * 1000)) % 7;
    const hours = Math.floor(diff / (60 * 60 * 1000)) % 24;
    const minutes = Math.floor(diff / (60 * 1000)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById('time').textContent = 
        `${years} years, ${months} months, ${weeks} weeks, ` +
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Function to continuously update the timer
function startTimer() {
    updateTime();
    setInterval(updateTime, 1000);
}

window.onload = startTimer;
