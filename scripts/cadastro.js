//Botão de hamburger
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })

const darkBtn = document.getElementById("darkBtn");
const contrastBtn = document.getElementById("contrastBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Don't allow both modes simultaneously
    document.body.classList.remove("high-contrast");
});

contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    document.body.classList.remove("dark-mode");
});

