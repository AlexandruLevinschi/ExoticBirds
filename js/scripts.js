$(function () {
    setTimeout(function () {
        $("body").addClass("loaded");
        $(window).scrollTop(0);
    }, randomIntFromInterval(500, 1500));

    baguetteBox.run(".gallery");

    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {
            $(".navbar").removeClass("bg-transparent").addClass("bg-danger");
        } else {
            $(".navbar").removeClass("bg-danger").addClass("bg-transparent");
        }
    });    
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}