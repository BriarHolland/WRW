
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


//figcaption size

var $singleImg = $(".singleGal img"),
	singleWidth = $singleImg.width(),
	singleHeight = $singleImg.height(),
	$galFigcaption = $(".singleGal figcaption"),
	galCaptionWidth = $galFigcaption.width(singleWidth),
	galCaptionHeight = $galFigcaption.height(singleHeight),

	$prodImg = $(".singleProd img"),
	prodWidth = $prodImg.width(),
	prodHeight = $prodImg.height(),
	$prodFigcaption = $(".singleProd figcaption"),
	prodCaptionWidth = $prodFigcaption.width(prodWidth),
	prodCaptionHeight = $prodFigcaption.height(prodHeight),

//figcaption hover

	fadespeed = 500,
	$figures = $('figure');

	$figures.find('figcaption').hide();

	$figures.hover(function(){
		$(this).find('figcaption').stop(true,true).fadeIn(fadespeed);
	},function(){
		$(this).find('figcaption').stop(true,true).fadeOut(fadespeed);
	});

//fancybox click function


	$('figcaption').click(function(){
		$(this).siblings('a.fancybox-thumb').eq(0).trigger('click'); 
		return false;
 	});

 		 	$('.hide').hide();
 		 	 			
 			$('.fancybox-thumb').fancybox({
					prevEffect : 'none',
					nextEffect : 'none',
					closeBtn  : true,
					arrows    : true,
					nextClick : true,

					helpers : {
						thumbs : {
							width  : 50,
							height : 50
						}
					}
				});		