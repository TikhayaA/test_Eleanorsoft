$(document).ready(function(){
    let item;
    if ($(window).width() <= '768') {
        item = 3;
    } 
    if ($(window).width() <= '360') {
        item = 1;
    }
    else {
		item = 4;
	}
    $(".owl-carousel").owlCarousel({
        items: item
    });
});