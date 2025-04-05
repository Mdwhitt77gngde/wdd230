const baseURL = "https://Mdwhitt77gngde.github.io/wdd230/";
const linksURL = "https://Mdwhitt77gngde.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const container = document.querySelector("#links-container");
    weeks.forEach(week => {
        const weekSection = document.createElement("section");
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = `Week ${week.week}`;
        weekSection.appendChild(weekTitle);

        const linksList = document.createElement("ul");
        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekSection.appendChild(linksList);
        container.appendChild(weekSection);
    });
}

getLinks();