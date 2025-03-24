// Fetch and display weather (Dummy data for now)
const weatherElement = document.getElementById("weather");
if (weatherElement) {
    weatherElement.textContent = "76°F - Sunshine";
} else {
    console.warn("Element with ID 'weather' not found.");
}

// Visit Count
let visitCount = 1;
try {
    visitCount = localStorage.getItem("visitCount") ? parseInt(localStorage.getItem("visitCount")) + 1 : 1;
    localStorage.setItem("visitCount", visitCount);
} catch (e) {
    console.warn("LocalStorage is not available. Visit count will not persist.");
}
document.getElementById("visitCount").textContent = visitCount;
