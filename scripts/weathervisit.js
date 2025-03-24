// Fetch and display weather (Dummy data for now)
document.getElementById("weather").textContent = "76°F - Sunshine";

// Visit Count
let visitCount = localStorage.getItem("visitCount") ? parseInt(localStorage.getItem("visitCount")) + 1 : 1;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visitCount").textContent = visitCount;
