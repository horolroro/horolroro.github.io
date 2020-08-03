
var Gnb = {
	init : function(){
		// console.log('init');
		Gnb.gnbListActive($(".gnbList h3"));
		Gnb.gnbClose($(".btnMenuClose"));
		Gnb.gnbOpen();
		Gnb.gnbSlider();
	},
	gnbOpen : function(){
		$(".btn_side").on('click', function() {
			$('.dim').show();
			$(this).addClass("active");
			// $('body').css({overflowY:'hidden'});
			$('.aside').attr({class:'aside active'})
		});
	},
	gnbListActive : function(elm){
		elm.on('click', function(e){
			//console.log('gnbOpen');
			$('.gnbList ul li').removeClass('active')
			$(this).parents('li').addClass('active');
			
			if($('.gnbList ul li.active')){
				$('.aside').css({alignItems:'baseline',paddingTop:'100px'})
			}
		})
	},
	gnbClose : function(elm){
		elm.on('click', function(e){
			//console.log('gnbClose');
			$('.dim').hide();
			// $('body').css({overflowY:'auto'});
			$(".btn_side").removeClass('active');
			$('.aside').attr({class:'aside deActive'});
			$('.aside').css({alignItems:'center',paddingTop:'0px'})
			$('.gnbList ul li').removeClass('active');
		});
	},
	gnbSlider : function(){
		var SliderOption = {
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 50,
				slideShadows: false,
			},
			freeMode: false,
			spaceBetween: 0,
			centeredSlides: true,
			// slidesPerView: 'auto',
			slidesPerView:1.5,
			loop: false,
			slideToClickedSlide : true,
			watchSlidesVisibility: true,
			watchSlidesProgress: false,
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			}
		}
		var SliderOption_2 = {
			spaceBetween: 0,
			slidesPerView:1.3,
			loop: false,
			slideToClickedSlide : true,
		}
		var sliderGnb_01= new Swiper('.sliderGnb_01',SliderOption);
		var sliderGnb_02= new Swiper('.sliderGnb_02',SliderOption);
		var sliderGnb_03= new Swiper('.sliderGnb_03',SliderOption);
		var sliderGnb_04= new Swiper('.sliderGnb_04',SliderOption);
		var sliderGnb_05= new Swiper('.sliderGnb_05',SliderOption);
		var sliderGnb_06= new Swiper('.sliderGnb_06',SliderOption);
		var sliderGnb_07= new Swiper('.sliderGnb_07',SliderOption);
	}
}

var GnbTop = {
	init : function(){
		GnbTop.gnbTopListActive($(".gnbTop h3"));
		GnbTop.scrollActive();
	},
	gnbTopListActive : function(elm){
		elm.on('click', function(e){
			
			$(this).addClass('active');
			
			if(!$(this).next().is(':visible')){
				$(this).next().slideDown();
			}else{
				$('.gnbTop .list').removeClass('active');
				$(this).next().slideUp();
			}
		})
	},
	scrollActive : function(){
		var didScroll,
		lastScrollTop = 0,
		minimumScrollSize = 300,
		header = $('.gnbTop');

		$(document).on("scroll", function(){
			didScroll = true;
		});
		
		setInterval(function(){
			if(didScroll){
				hasScroll();
				didScroll = false;
			}
		},200)

		function hasScroll(){
			var scrollPos = $(window).scrollTop();
			
			if(scrollPos <= minimumScrollSize) return;
			if(lastScrollTop >= scrollPos){
				header.attr('class','gnbTop')
			}else{
				header.attr('class','gnbTop active')
			}
			lastScrollTop = scrollPos;
		}
	}
}


$(function() {
	if($('.aside').length){Gnb.init();}
	if($('.gnbTop').length){GnbTop.init();}
});