"use strict";
/* Open Modal */
function openModal() {
    document.getElementById('myModal').style.display = "block";
    
}
/* Close modal */
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
/* Start at slide 1 */
var slideIndex = 1;
showSlides(slideIndex);

/* Move forward a slide */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Show slides */
function showSlides(n) {
    var i, slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

/* Arrow keys functionality */
$('body').on('keyup', function (e) {
    switch (e.which) {
        /* Left arrow key */
    case 37:
        $('.prev')[0].click();
        break;
        /* Right arrow key */
    case 39:
        $('.next')[0].click();
        break;
        /* Esc key */
    case 27:
        closeModal();
        break;
    }
});

