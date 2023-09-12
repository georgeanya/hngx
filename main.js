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


function updateUTCTime() {
  const currentDate = new Date();
  const utcMilliseconds = currentDate.getTime();
  document.getElementById("utcTime").textContent = utcMilliseconds;
}



updateDayOfWeek();
updateUTCTime();

setInterval(updateDayOfWeek, 60000);
setInterval(updateUTCTime, 1000); // Update every 10 milliseconds
