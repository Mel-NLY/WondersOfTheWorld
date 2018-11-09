// JavaScript source code

$(document).ready(function () {
    $(".back").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.back').fadeIn();
            } else {
                $('.back').fadeOut();
            }
        });
        $(".scroll").on('click', function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: ($(target).offset().top)
            }, 1000);
            return false;
        });
    });

});

$(".TajMahalFunfacts > div:gt(0)").hide();

var slides = document.querySelectorAll('#slides .slide'); /*Get slides from #slides*/
var currentSlide = 0; /*Variable to keep track of current slide*/
var slideInterval = setInterval(nextSlide, 2000); /*Creating an interval to show the next slide every two seconds, 2000ms*/

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length; /*Use operator % to go back to zero if the end of slide show is reached. %, divides two numberes and gives the remainder. Since there are 5 slides, 1%5=1 and so on.*/
    slides[currentSlide].className = 'slide showing'; /* change clides's class so the new slide is showing, opacity is handling the fade effect automatically.*/
}

var myIndex = 0;
carousel();
function carousel() {
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block ";  
    setTimeout(carousel, 2000);
}