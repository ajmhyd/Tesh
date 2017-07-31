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

/* Close Modal*/
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
