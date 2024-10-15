/* Image slide show */
const slides = document.querySelectorAll(".slides img");
const darkMode = document.getElementById("darkMode");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);/* will goto the next image every 5 seconds */
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId); /* stops the auto slide timer  */
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); /* restarts the timer */
}

function nextSlide() {
    clearInterval(intervalId); /* stops the auto time slider */
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); /* restarts the time */
}
