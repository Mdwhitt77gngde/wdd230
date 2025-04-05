// Select HTML elements in the document
const weatherElement = document.querySelector('#weather');

// Declare the API URL with the required parameters
const apiKey = 'fa23f4ffa11329cb930813ed68afbe8d';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.1134&lon=-95.2162&units=imperial&appid=${apiKey}`; // Fixed string interpolation

// Define the asynchronous function to fetch data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Debugging: Log response data
            displayResults(data); // Update UI
        } else {
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Define the displayResults function to update the HTML
function displayResults(data) {
    if (!data || !data.main || !data.weather) {
        console.error("Invalid data format:", data);
        return;
    }

    const temp = `${Math.round(data.main.temp)}°F`;
    const desc = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // Clear previous content
    weatherElement.innerHTML = '';

    // Create and append the weather icon
    let iconImg = document.createElement('img');
    iconImg.setAttribute('src', iconSrc);
    iconImg.setAttribute('alt', desc);
    iconImg.style.width = "40px";
    iconImg.style.verticalAlign = "middle";

    // Create text element
    let textNode = document.createTextNode(` ${temp} - ${desc.charAt(0).toUpperCase() + desc.slice(1)}`);

    // Append elements
    weatherElement.appendChild(iconImg);
    weatherElement.appendChild(textNode);
}

// Invoke the API fetch function
apiFetch();
