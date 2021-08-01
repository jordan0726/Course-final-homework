$(document).ready(function () {
    $(".navbar_mb-option img").on('click',(function (e) { 
        e.preventDefault();
        $('.navbar_mb-menu').toggleClass('menu-show');
    }));
});