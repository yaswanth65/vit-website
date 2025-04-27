document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const floatingPages = document.querySelectorAll(".floating-page");

    // Load the navbar
    fetch('navbar.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.statusText}`);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch((error) => console.error("Error loading navbar:", error));
});