const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

const hamburgerButton = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        hamburgerButton.textContent = "≡";
    } else {
        navMenu.style.display = "block";
        hamburgerButton.textContent = "X";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = "block";
        hamburgerButton.style.display = "none";
    } else {
        navMenu.style.display = "none";
        hamburgerButton.style.display = "block";
        hamburgerButton.textContent = "≡";
    }
});

// Initial check to set the correct display based on window size
if (window.innerWidth > 768) {
    navMenu.style.display = "block";
    hamburgerButton.style.display = "none";
} else {
    navMenu.style.display = "none";
    hamburgerButton.style.display = "block";
    hamburgerButton.textContent = "≡";
}