const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); // Show the first slide
        intervalId = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); // Hide all slides
    });

    slides[slideIndex].classList.add("displaySlide"); // Show the current slide
}

function prevSlide() {
    clearInterval(intervalId); // Stop the auto-slide
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
}

function nextSlide() {
    clearInterval(intervalId); // Stop the auto-slide
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
}
