// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  document.getElementById("dayOfWeek").textContent = dayOfWeek;
}

// Function to update the current UTC time with milliseconds
function updateUTCTime() {
  const currentDate = new Date();
  const utcMilliseconds = currentDate.getTime(); // This gets the milliseconds since the Unix epoch
  document.getElementById("utcTime").textContent = utcMilliseconds + " ms";
}

updateDayOfWeek();
updateUTCTime();

setInterval(updateDayOfWeek, 60000);
setInterval(updateUTCTime, 10); // Update every 10 milliseconds
