const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // h2 for the prophet's full name
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.firstName || 'Unknown'} ${prophet.lastName || 'Unknown'}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl || 'https://via.placeholder.com/340x440?text=No+Image');
        portrait.setAttribute('alt', `Portrait of ${prophet.firstName} ${prophet.lastName}`);
        // Use lazy loading to improve performance by deferring the loading of the image until it is visible in the viewport
        // Use CSS for styling or dynamically adjust dimensions if needed
        portrait.style.width = '100%';
        portrait.style.height = 'auto';
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}; // end of displayProphets function
const getProphetData = async (prophetsApiUrl) => {
    try {
        const response = await fetch(prophetsApiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Uncomment the line below to log the prophets data in a tabular format for debugging purposes
        // console.table(data.prophets);
        displayProphets(data.prophets); // Pass the prophets array to displayProphets
    } catch (error) {
        console.error('Failed to fetch prophet data:', error);
    }
};
getProphetData(url);