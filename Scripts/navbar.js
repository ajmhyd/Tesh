//Navigation
/*global $ */
$(document).on('click', '.navi', function (event) {
    "use strict";
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
});

//Fixed collapsing navbar
$(".navbar-nav li a").click(function (event) {
    "use strict";
    if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
});