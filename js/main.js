//greyscale to color fade.
$(".header img").hover(

function() {
	$(this).animate($(this).css("-webkit-filter", "grayscale('0'%)"), 300);
});
$('.imgOne').backstretch("i/imgSlider01.jpg");
$('.imgTwo').backstretch("i/imgSlider02.jpg");
$('.imgThree').backstretch("i/imgSlider03.jpg");
$('.imgFour').backstretch("i/imgSlider04.jpg");
// pollen slider	
var $nextBtn = $('.nextBttn'),
	$prevBtn = $('.prevBttn'),
	slideSpeed = 1000,
	$mask = $('.mask'),
	$panels = $('.slider section'),
	maskWidth = $mask.width(),
	$slider = $('.slider'),
	numPanels = $panels.size(),
	lastIndex = numPanels - 1,
	$sliderWidth = maskWidth * numPanels,
	currentIndex = 0;
resizeMe();
$(window).resize(function() {
	resizeMe();
});

function resizeMe() {
	maskWidth = $mask.width();
	maskHeight = $mask.height();
	$sliderWidth = maskWidth * numPanels;
	$slider.width($sliderWidth);
	$panels.width(maskWidth);
	$panels.height(maskHeight);
	var slideDist = currentIndex * -maskWidth;
	$slider.css({
		"margin-left": slideDist
	});
}
$nextBtn.click(function() {
	if (currentIndex < lastIndex) {
		newIndex = currentIndex + 1;
	} else {
		newIndex = 0;
	}
	slideToImage(newIndex);
});
$prevBtn.click(function() {
	if (currentIndex > 0) {
		newIndex = currentIndex - 1;
	} else {
		newIndex = lastIndex;
	}
	slideToImage(newIndex);
});

function slideToImage(newIndex) {
	currentIndex = newIndex;
	var slideDist = currentIndex * -maskWidth;
	$slider.animate({
		"margin-left": slideDist
	}, slideSpeed, "easeOutExpo");
}

function resizeFigcaptions() {
	var $prodImg = $(".featuredGal img"),
		prodWidth = $prodImg.width(),
		prodHeight = $prodImg.height(),
		$prodFigcaption = $(".featuredGal figcaption"),
		prodCaptionWidth = $prodFigcaption.width(prodWidth),
		prodCaptionHeight = $prodFigcaption.height(prodHeight);
	var $singleImg = $(".singleGal img, .singleProd img"),
		singleWidth = $singleImg.width(),
		singleHeight = $singleImg.height(),
		$galFigcaption = $(".singleGal figcaption, .singleProd figcaption"),
		galCaptionWidth = $galFigcaption.width(singleWidth),
		galCaptionHeight = $galFigcaption.height(singleHeight);
}
resizeFigcaptions();
$(window).on('resize', function() {
	resizeFigcaptions();
});
//figcaption hover
var fadespeed = 300,
	textSlide = 500,
	$figures = $('figure');
$figures.find('figcaption').hide();
$figures.hover(function() {
	$(this).find('figcaption').stop(true, true).fadeIn(fadespeed);
	$("figcaption p").stop(true, true).animate({
		'padding-top': 30
	}, textSlide, 'easeOutExpo');
}, function() {
	$(this).find('figcaption').stop(true, true).fadeOut(fadespeed);
	$("figcaption p").stop(true, true).animate({
		'padding-top': 15
	}, textSlide, 'easeOutExpo');
});
//fancybox click function
$('figcaption').click(function() {
	$(this).siblings('a.fancybox-thumb').eq(0).trigger('click');
	return false;
});
$('.hide').hide();
$('.fancybox-thumb').fancybox({
	openEffect: 'elastic',
	openSpeed: 200,
	closeEffect: 'elastic',
	closeSpeed: 200,
	nextEffect: 'fade',
	prevEffect: 'fade',
	closeBtn: true,
	arrows: true,
	title: null,
	helpers: {
		thumbs: {
			width: 75,
			height: 50
		}
	}
});

