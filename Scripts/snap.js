"use strict";
// Get the modal
var modal = document.getElementById('sModal');

// Get the image and insert it inside the modal
var img = document.getElementById('myImg');
var modalImg = document.getElementById("snap");
// Display image
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Close the modal
span.onclick = function () { 
    modal.style.display = "none";
};