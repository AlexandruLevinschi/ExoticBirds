$(function () {
    setTimeout(function () {
        $(".preloader").css("transition", "ease-in-out .5s");
        $("body").addClass("loaded");
        $(window).scrollTop(0);
    }, randomIntFromInterval(500, 1500));

    AOS.init();

    baguetteBox.run(".gallery");

    $(window).scroll(function () {
        if ($(document).scrollTop() > 200) {
            $(".navbar").removeClass("bg-transparent").addClass("bg-danger");
        } else {
            $(".navbar").removeClass("bg-danger").addClass("bg-transparent");
        }
    });

    $(".nav-link").click(function () {
        var target = $(`${$(this).data("target")}`);
        $('html, body').animate({
            scrollTop: target.offset().top - 65
        }, 1000);

        $(this).parents(".collapse").collapse("hide");
    });

    $('#main-navbar')
        .on('show.bs.collapse', function () {
            var navbar = $(this).parents(".navbar");
            navbar.addClass("navbar-opened");
        })
        .on('hide.bs.collapse', function () {
            var navbar = $(this).parents(".navbar");
            navbar.removeClass("navbar-opened");
        });
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}