$(document).ready(function(){
	//온라인실시간
	if($('.onRankingWrap').length){onRanking.init()}
	//슬라이더 디폴트
	if($('.mainVisualDefault').length){VisualSlideDefault()}
	noteToggle()
})

var onRanking = {
	init: function(){
		var option_1 = {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: false,
			autoHeight: true,
		};
		var option_2 = {
			spaceBetween: 0,
			slidesPerView: 1.2,
			loop: true,
			speed: 600,
			autoplay: {
				delay: 4000,
			 	disableOnInteraction: false
			},
			autoHeight: true,
		};

		var idx = Math.round($(".swiper2 .swiper-slide").length) 
		var idx2 = Math.round($(".swiper3 .swiper-slide").length) 

		// init swiper2
		if(idx < 2){
			var swiper2 = new Swiper ('.swiper2', option_1);
		}else{
			var swiper2 = new Swiper ('.swiper2', option_2);

		}

		// init swiper3
		if(idx2 < 2){
			var swiper3 = new Swiper ('.swiper3', option_1);
		}else{
			var swiper3 = new Swiper ('.swiper3', option_2);

		}

		//onRanking.tab($('.rankingTab'));
		//페이지링크방식으로 탭 사용안함
		onRanking.high();
		
	},
	tab : function(el){
		var timer;
		var tabCont = $('.rankingWrap').find('.rankingList');

		el.find('button').off().on('touchstart click', function(){
			var $this = $(this);
			var idx = $this.parent().index();
			$this.parent().addClass('active').siblings().removeClass('active');
			tabCont.eq(idx).addClass('active').siblings().removeClass('active');

			clearInterval(timer);
			$('.swiper2 .swiper-slide-active ul li').removeClass('current');
			$('.swiper2 .swiper-slide-active ul li').eq(0).addClass('current');
			rolling();
		})

		var rolling = function() {
			function addcls() {
				var current = $('.swiper-slide-active ul li.current').removeClass('current'),
				next = current.next().length ? current.next() : current.siblings().filter(':first');
				next.addClass('current');
				//console.log(current.next())
			};
		
			timer = setInterval(function () {
				addcls();
			}, 1000);
		}
		rolling();
	},

	high : function(){
		$('.cateWrap ul li').on('click', function(e){
			e.preventDefault();
		
			$('.cateWrap ul li').removeClass('active');
			$(this).addClass('active');

			var sum = 0; 
			var dist;
			$(this).prevAll().each(function(e){
				sum += $(this).width();
			})
			
			dist = sum - ($(this).parent().width() - $(this).width()) / 2;
			if(dist<0){dist=0;}

			$(this).parent().animate({
				scrollLeft :dist
			},300)
		});
	}
}

/* 메인 슬라이드 */
var VisualSlideDefault = function() {
	var obj = 'mainVisualDefault';
	var btnAuto = $('.'+obj).find('.btnAuto');
	var list = $('.'+obj+' ul').html();

	btnAuto.on('click', function(){
		var $this = $(this);
		if($this.hasClass('stop')) {
			$this.removeClass('stop');
			slide.autoplay.start();
		} else {
			$this.addClass('stop');
			slide.autoplay.stop();
		}
	});
	var itemLength =  $('.'+ obj).find('.swiper-slide').length;

	var afterSlide = function(){
		var img_h = $('.mainVisualDefault .swiper-wrapper').height();
		$('.mainVisualDefault .slideControl').css({'top':img_h - 50 + 'px'});
	}

	var slide = new Swiper('.' + obj + ' .slide', {
		loop: true,
		speed: 600,
		autoplay: {delay: 5000},
		//autoHeight: true,
		pagination: {
			el: '.' + obj + ' .slidePage',
			clickable: true,
			renderBullet: function (index, className) {
				return '<button type="button" class="' + className + '">' + '<em>' + (index + 1) + ' / ' + '</em>' + itemLength + '</button>';
			},
		},
		// on : {
		// 	init : function(){
		// 		afterSlide();
				
		// 	},
		// 	resize: function(){
		// 		afterSlide();
		// 	},
		// 	slideChangeTransitionEnd: function(){
		// 		afterSlide();
		// 	}
		// },
	});

	slide.on('sliderMove', function(){
		if(navigator.userAgent.indexOf("inniMemAppAnd") > -1 ) {
			appLink('keyvisualstart');
		}
	});
	slide.on('transitionEnd', function(){
		if(navigator.userAgent.indexOf("inniMemAppAnd") > -1 ) {
			appLink('keyvisualend');
		}
	});
	slideObj[obj] = slide;
	$('.allvisual ul').append(list);
	$('.allvisual ul li').removeAttr('class');
}

/* 특가샵 알림 */
function noteToggle(){
	var bxNote = $('.mallHead .bx .note');
	$('.noteToggle').on('click', function(){
		if(bxNote.is(":visible")){
			bxNote.fadeOut();
		}else{
			bxNote.fadeIn();
		}
	})
}

