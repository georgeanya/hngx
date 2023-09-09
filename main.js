// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    document.getElementById('dayOfWeek').textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateUTCTime() {
    const currentDate = new Date();
    let hours = currentDate.getUTCHours();
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    let ampm = 'AM';

    // Convert hours to 12-hour format and determine AM/PM
    if (hours >= 12) {
        ampm = 'PM';
        if (hours > 12) {
            hours -= 12;
        }
    }

    // Handle midnight (12:00 AM) case
    if (hours === 0) {
        hours = 12;
    }

    const utcTime = `${hours}:${minutes} ${ampm}`;
    document.getElementById('utcTime').textContent = utcTime;
}



updateDayOfWeek();
updateUTCTime();

setInterval(updateDayOfWeek, 60000); // Update every minute
setInterval(updateUTCTime, 60000); // Update every minute
