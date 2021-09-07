const hamburgerTransEffect = document.querySelector("#toggle-hamburger");
const navLinks = document.querySelector(".dropdown-menu")

hamburgerTransEffect.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    console.log(".active ++")
});


// let hamburgerTransEffect = document.querySelector(".hamburger-menu");

// hamburgerTransEffect.addEventListener('click', () => {
//     document.querySelector(".container").classList.toggle("change");
//     console.log(".change added")
// });