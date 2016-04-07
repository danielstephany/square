$('#products-cta').click(function(){
	$('#product-box').removeClass('drawer-left');
	$('#product-box').removeClass('drawer-right');
	$('#resources-box').removeClass('drawer-left');
	$('#business-box').removeClass('drawer-left');
	$('#business-cta').removeClass("selected");
	$('#resources-cta').removeClass("selected");
	$('#banner-nav').removeClass("open-business");
	$('#banner-nav').removeClass("open-resources");
	$('#banner-nav').toggleClass("open-product");
	$('').toggleClass('selected');
	$('#products-cta').toggleClass('selected');
	if($('#banner-nav').hasClass("open-product")) {
		$('#nav-bar').addClass("open-nav");
	} else {
		$('#nav-bar').removeClass("open-nav");
	}
	if($('#banner-nav').hasClass("open-business") || $('#banner-nav').hasClass("open-product") || $('#banner-nav').hasClass("open-resources")){
		$('#resources-box').toggleClass('drawer-right');
		$('#business-box').toggleClass('drawer-right');
	} else if (!$('#banner-nav').hasClass("open-product")) {
		$('#resources-box').removeClass('drawer-right');
		$('#business-box').removeClass('drawer-right');
	}
});

$('#business-cta').click(function(){
	$('#business-box').removeClass('drawer-right');
	$('#business-box').removeClass('drawer-left');
	$('#product-box').removeClass('drawer-left');
	$('#resources-box').removeClass('drawer-right');
	$('#products-cta').removeClass("selected");
	$('#resources-cta').removeClass("selected");
	$('#banner-nav').removeClass("open-resources");
	$('#banner-nav').removeClass("open-product");
	$('#banner-nav').toggleClass("open-business");
	$('#business-cta').toggleClass('selected');
	if($('#banner-nav').hasClass("open-business")) {
		$('#nav-bar').addClass("open-nav");
	} else {
		$('#nav-bar').removeClass("open-nav");
	}
	if($('#banner-nav').hasClass("open-business") || $('#banner-nav').hasClass("open-product") || $('#banner-nav').hasClass("open-resources")){
		$('#resources-box').toggleClass('drawer-right');
		$('#product-box').toggleClass('drawer-left');
	} else if (!$('#banner-nav').hasClass("open-business")) {
		$('#resources-box').removeClass('drawer-right');
		$('#product-box').removeClass('drawer-left');
	}
});

$('#resources-cta').click(function(){
	$('#resources-box').removeClass('drawer-right');
	$('#resources-box').removeClass('drawer-left');
	$('#business-box').removeClass('drawer-right');
	$('#product-box').removeClass('drawer-right');
	$('#products-cta').removeClass("selected");
	$('#business-cta').removeClass("selected");
	$('#nav-bar').removeClass("open-nav");
	$('#banner-nav').removeClass("open-business");
	$('#banner-nav').removeClass("open-product");
	$('#banner-nav').toggleClass("open-resources");
	$('#resources-cta').toggleClass('selected');
	if($('#banner-nav').hasClass("open-resources")) {
		$('#nav-bar').addClass("open-nav");	
	} else {
		$('#nav-bar').removeClass("open-nav");
	}
	if($('#banner-nav').hasClass("open-business") || $('#banner-nav').hasClass("open-product") || $('#banner-nav').hasClass("open-resources")){
		$('#business-box').toggleClass('drawer-left');
		$('#product-box').toggleClass('drawer-left');
	} else if (!$('#banner-nav').hasClass("open-resources")) {
		$('#business-box').removeClass('drawer-left');
		$('#product-box').removeClass('drawer-left');
	}
});


