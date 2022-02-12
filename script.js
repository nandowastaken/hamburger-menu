const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Activates the menu through the click
hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// Close the menu after clicking a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));