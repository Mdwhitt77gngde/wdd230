const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});