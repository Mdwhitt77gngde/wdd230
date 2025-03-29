document.querySelector("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("password-error");
    
    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.textContent = "Passwords do not match. Please try again.";
        document.getElementById("password").value = "";
        document.getElementById("confirm-password").value = "";
        document.getElementById("password").focus();
    } else {
        errorMessage.textContent = "";
    }
});