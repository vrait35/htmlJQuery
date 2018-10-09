$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
		navText:["<i class='fas fa-arrow-alt-circle-left'></i>","<i class='fas fa-arrow-alt-circle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
