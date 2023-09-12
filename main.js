// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  document.getElementById("dayOfWeek").textContent = dayOfWeek;
}

// Function to update the current UTC time with milliseconds
function updateUTCTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getUTCHours()).padStart(2, "0");
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(3, "0");

  const utcTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  document.getElementById("utcTime").textContent = utcTime;
}

updateDayOfWeek();
updateUTCTime();

setInterval(updateDayOfWeek, 60000);
setInterval(updateUTCTime, 10); // Update every 10 milliseconds
