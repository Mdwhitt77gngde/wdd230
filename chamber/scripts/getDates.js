document.getElementById("year").textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").textContent = 
    "Last Modified: " + lastModifiedDate.toLocaleDateString();

