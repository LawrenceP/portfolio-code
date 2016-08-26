$(".arrow-down-intro").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 50
    }, 1000);
});

$(".arrow-down-work").click(function() {
    $('html, body').animate({
        scrollTop:  $(document).height()-$(window).height()
    }, 1000);
});

$(".arrow-up-work").click(function() {
    $('html, body').animate({
        scrollTop:  0
    }, 1000);
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
    	$('.navbar').addClass('navbar-scrolled');
    } else {
    	$('.navbar').removeClass('navbar-scrolled');
    }

    if(scroll < $("#work").offset().top - 200) {
    	$("a").removeClass("focus-a");
    }

    if (scroll >= $("#work").offset().top - 200) {
    	$("a").removeClass("focus-a");
    	$("a[href='#work']").addClass("focus-a");
    }

    if (scroll >= $("#contact").offset().top - $(window).height() - 10) {
    	$("a").removeClass("focus-a");
    	$("a[href='#contact']").addClass("focus-a");
    }
});

$("a[href='#work']").click(function(e){
	e.preventDefault();
	$('html, body').animate({
        scrollTop: $("#work").offset().top - 50
    }, 500);
});

$("a[href='#contact']").click(function(e){
	e.preventDefault();
	$('html, body').animate({
        scrollTop:  $(document).height()-$(window).height()
    }, 500);
});

$("a[href='#home']").click(function(e){
	e.preventDefault();
	$('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});

if ($(window).height() <= 670) {
	$(".intro").css({
		'min-height': '670px'
	});
	$(".home-img").css({
		'min-height': '670px'
	});
}

$(".portfolio-outer").hover3d({
    selector: ".portfolio-inner",
    shine: true
});

$( ".portfolio-outer" )
    .mouseover(function() {
        width = $(this).width();
        height = $(this).height();
        $( this ).find( ".portfolio-overlay" ).css({
            'opacity': 1,
            'height': height,
            'width': width,
            'padding-top': height / 6
        });
    })
    .mouseout(function() {
        $( this ).find( ".portfolio-overlay" ).css({
        'opacity': 0
    });
});