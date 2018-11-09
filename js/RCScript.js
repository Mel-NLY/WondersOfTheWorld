// JavaScript source code
//Main
var $animation_elements = $('.animation-element'); //Get all elements to be animated
var $window = $(window);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
var slideIndex = 0;
showSlides();
$(function () {
    var table = $('.hidden')
    table.hide();
    $('#hide').hide()
    $('.arrow').hide()
    $('.activate').click(function () {
        $('.arrow').show()
        if (table.is(':hidden')) {
            table.slideDown('smooth');
            $(table).promise().done(function () {
                // will be called when all the animations on the queue finish
                window.scrollBy({ top: 700, left: 0, behavior: 'smooth' });
                $('.arrow').text("▲");
            });
        } else {
            table.slideUp();
            $('.arrow').text("▼");
            $('.arrow').hide();
        }
    })
    $(window).on('resize', function () {
        var vWidth = $(window).width()
        if (vWidth < '1500') {
            $('#carousel').hide();
            $('#hide').show();
        }
        if (vWidth > '1500') {
            $('#carousel').show();
            $('#hide').hide();
        }
})
});

//Function
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change im age every 2 seconds
} 
// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function check_if_in_view() {
    var window_height = $window.height(); //Get current height of window
    var window_top_position = $window.scrollTop(); //Get top position
    var window_bottom_position = (window_top_position + window_height); //Get bottom position

    $.each($animation_elements, function () { //'.each($animation_elements' is meant to perform the function on all elements with the animation-element class, like an iteration
        var $element = $(this); //Equate a varaible for the current element.
        var element_height = $element.outerHeight(); //Height of the selected element
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
//Quote animation
$(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();

    //if user clicked on prev button

    $('#buttons a').click(function (e) {
        //slide the item

        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }

        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }

        //cancel the link behavior            
        return false;

    });

    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });


    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }

});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}
