document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.createElement("p");
    const sidebar = document.querySelector(".sidebar");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date(); 

    if (!lastVisit) {

        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon!!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now); 
    sidebar.appendChild(visitMessage);
});
