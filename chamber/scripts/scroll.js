// URL for the members JSON file
const membersURL = "https://Mdwhitt77gngde.github.io/wdd230/data/members.json";

// Fetch and display members data
async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        console.log(data); // Log the data for debugging purposes
        displayMembers(data, "grid"); // Display in grid view by default
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Display members in the desired view (grid or list)
function displayMembers(members, view) {
    const display = document.querySelector("#members-container");  // Ensure this is the right container
    display.innerHTML = "";  // Clear any previous content

    members.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add("member", view);

        memberElement.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;

        display.appendChild(memberElement);
    });
}

// Toggle between grid and list views
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article.directory");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    updateView("grid");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
    updateView("list");
});

// Update the view after toggling between grid and list
function updateView(view) {
    fetch(membersURL)
        .then(response => response.json())
        .then(members => {
            displayMembers(members, view);
        })
        .catch(error => console.error("Error updating view:", error));
}

// Call getMembers to load the data when the page loads
getMembers();
