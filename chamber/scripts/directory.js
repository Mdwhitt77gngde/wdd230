document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    const display = document.getElementById("scroll-container");
    let cachedMembers = null;

    // Set year and last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Fetch members
    fetch('../data/members.json')
    .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(members => {
            cachedMembers = members;
            displayMembers(members, "grid");
        })
        .catch(error => {
            console.error("Error fetching members:", error);
            display.innerHTML = `<p class="error">Unable to load members. Please try again later.</p>`;
        });

    // View toggle buttons
    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
        if (cachedMembers) displayMembers(cachedMembers, "grid");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
        if (cachedMembers) displayMembers(cachedMembers, "list");
    });

    // Validate URL
    function validateURL(url) {
        const pattern = /^(https?:\/\/)/i;
        return pattern.test(url) ? url : "#";
    }

    // Display members
    function displayMembers(members, view) {
        display.innerHTML = "";
        members.forEach(member => {
            const memberElement = document.createElement("li");
            memberElement.classList.add("member", view);
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <a href="${validateURL(member.website)}" target="_blank">Visit Website</a>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            `;
            display.appendChild(memberElement);
        });
    }
});
