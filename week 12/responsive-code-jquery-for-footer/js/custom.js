$(document).ready(function () {
    function adjustSubLinksVisibility() {
        if ($(window).width() <= 767) {
            $('.footer-links-wrapper ul').hide();
            $('.footer-links-wrapper h3 .toggle').text('+');
        } else {
            $('.footer-links-wrapper ul').show(); 
        }
    }

    $('.footer-links-wrapper').on('click', 'h3', function () {
        if ($(window).width() <= 767) {
            var $toggle = $(this).find('.toggle');
            var $subLinks = $(this).next('ul');
            $subLinks.slideToggle(function () {
            $toggle.text($subLinks.is(':visible') ? 'x' : '+');
            });
        }
    });
    
    $(window).resize(function () {
        adjustSubLinksVisibility();
    });
});
