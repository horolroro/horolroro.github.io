//MOBILE

$(document).ready(function(){
	//온라인실시간 2020.10:메인 개선완료후 삭제 예정
	if($('.onRankingWrap').length){onRanking.init()}
	//온라인실시간
	if($('.main-onRankingWrap').length){mainOnRanking.init()}
	//슬라이더 디폴트
	if($('.mainVisualDefault').length){VisualSlideDefault()}
	noteToggle();
	//메인 팝업 슬라이드
	if($('.popEvtSlider').length){popEvtSlider.init()}
	//메인 핫딜 슬라이드
	homeSlide('hotbannerSlide');
	//메인 MD추천 슬라이드
	homeSlide('mdrecomSlide');

	//MAIN LAZYLOAD
	$('.lazy').Lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		onError: function(element) {
			console.log('error loading ' + element.data('src'));
		}
	});
	//상품상세 페이지 관련
	if($('.prodDetails').length){productView.init()}
})

//실시간 온라인:메인 개선완료후 삭제 예정
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

//메인 온라인 실시간 랭킹
var mainOnRanking = {
	init: function(){
		mainOnRanking.high();
	},
	high : function(){
		var shadow_before = $('.main-onRankingWrap .cateWrap .shadow_before');
		var shadow_after = $('.main-onRankingWrap .cateWrap .shadow_after');

		$('.cateWrap ul').on('scroll', function(){
			var dist;
			var cate_w;
			
			cate_w = ($('.cateWrap ul').get(0).scrollWidth - $(window).width());
			dist = $(this).scrollLeft() / cate_w * 100;

			//console.log(dist, cate_w)

			if(dist>=1){
				shadow_before.css({opacity:'1'});
			}else{
				shadow_before.css({opacity:'0'});
			}
			if(dist<=99){
				shadow_after.css({opacity:'1'});
			}else{
				shadow_after.css({opacity:'0'});
			}
		});

		$('.cateWrap ul li').on('click', function(e){
			e.preventDefault();
		
			$('.cateWrap ul li').removeClass('active');
			$(this).addClass('active');

			var sum = 0; 
			var dist;
			var index = $(this).index();
			$(this).prevAll().each(function(){
				sum += $(this).width();
			})
			
			dist = sum - ($(this).parent().width() - $(this).width()) / 2;
			if(dist<0){dist=0;}
			//console.log(index)

			if(index>=3){
				shadow_before.css({opacity:'1'});
			}

			if(index>7){
				shadow_after.css({opacity:'0'});
			}

			$(this).parent().animate({
				scrollLeft :dist
			},300)
		});
	}
}

/* 메인 슬라이드 */
var VisualSlideList;
var VisualSlideDefault = function() {
	var obj = 'mainVisualDefault';
	var btnAuto = $('.'+obj).find('.btnAuto');
	VisualSlideList = $('.'+obj+' ul').html();

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
		preloadImages: false,
		lazy: {
			loadPrevNext: true,
		},
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

/* 메인 팝업 슬라이드 */
var popEvtSlider = {

	init: function(){
		var dim = $('.dim');
		var mainSlidePop = $('.mainSlidePop');
		
		//dim.show();
		mainSlidePop.css({transform: 'scale(1) translateY(50%)'})
		
		popEvtSlider.slider();
		$('.btnWrap .close').on('click', function(){
			mainSlidePop.css({transform: 'scale(0)'})
			dim.hide();
		})
	},
	slider : function(){
		var obj = 'popEvtSlider';
		var itemLength =  $('.'+ obj).find('.swiper-slide').length;
		var next = $('.mainSlidePop').find('.next');
		var today = $('.mainSlidePop').find('.today');
		var currentSlide;

		if($('.popEvtSlider .slide').find('li').length == 1){
			next.hide();
			today.show();
		}

		var slide = new Swiper('.' + obj + ' .slide', {
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},
			loop: true,
			// speed: 600,
			// autoplay: {delay: 5000},
			//autoHeight: true,
			slidesPerView : 1,
			spaceBetween: 10,
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '">' + '<em>' + (index + 1) + ' / ' + '</em>' + (itemLength) + '</button>';
				},
			},
			on : {
				slideChangeTransitionEnd: function () {
					// var currentSlide = $('.swiper-pagination').find('.swiper-pagination-current').text() * 1;
					currentSlide = $('.swiper-slide-active').attr('data-swiper-slide-index') * 1 + 1
					
					if(currentSlide == itemLength){
						next.hide();
						today.show();
					}else{
						next.show();
						today.hide();
					}
					//console.log(itemLength ,currentSlide)
				},
			}
		});
	
		next.on('click', function(){
			slide.slideNext();
		})
	}
}


//MAIN HOME COMMON SLIDER 
var homeSlide = function(obj) {
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .slide', {
			preloadImages: false,
			lazy: {
				loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
			},
			loop: false,
			//speed: 800,
			//autoplay: {delay: 5000},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '">' + (index + 1) + '</button>';
				},
			}
		});
	}
	slideObj[obj] = slide;
}

// 상품상세 페이지 관련 스크립트
var productView = {
	init: function(){
		productView.prodHeader();
		productView.prodViewTopSlide();
		productView.timeBanner();
		productView.prdoTabControl();

		//유의사항 폴드
		var fold = $('.detailExp .fold > div');
		fold.on('click' , function(){
			$(this).parent().toggleClass('active');
		})

	},
	prdoTabControl : function(){ //상품상세 탭 컨트롤
		var tabContents_top;
		var tab_li =  $('.prodDetailInfo li');
		var floatTab_li = $('.show_2 li');
		var tabCont = $('.prodDetailInfo .tabCont');
		var prd_sameLine = $('.sameLine');
		var prd_sameLine_top = prd_sameLine.offset().top;


		tab_li.on('click', function(e){
			floatTab_li.removeClass('active');
			var idx = $(this).index()

			switch (idx){
				case 0 :
					//console.log(idx)
					floatTab_li.eq(0).addClass('active')
					break;
				case 2 :
					//console.log(idx)
					floatTab_li.eq(1).addClass('active')
					break;
			}
		})	
		
		floatTab_li.on('click', function(e){
			var idx = $(this).index();
			floatTab_li.removeClass('active');
			tab_li.removeClass('active');
			tabCont.removeClass('active');
			
			if($('.prodDetailInfo .tabContents')){
				tabContents_top = $('.prodDetailInfo .tabContents').offset().top; 
			}
			
			alert(tabContents_top)
			$('html, body').animate({scrollTop:tabContents_top}, '200');

			switch (idx){
				case 0 :
					//console.log(idx)
					tab_li.eq(0).addClass('active');
					floatTab_li.eq(0).addClass('active');
					tabCont.eq(0).addClass('active');
					break;
				case 1 :
					console.log(idx)
					tab_li.eq(2).addClass('active');
					floatTab_li.eq(1).addClass('active');
					tabCont.eq(2).addClass('active');
					break;
				case 2 :
					//console.log(idx)
					floatTab_li.eq(2).addClass('active');
					tabCont.eq(0).addClass('active');

					// '이 제품과 같은 라인' 상품들 있으면 이동한다
					if(prd_sameLine){
						$('html, body').animate({scrollTop: prd_sameLine_top - 60}, '200');
					}
					break;
			}
		})	
	},
	prodHeader : function(){//PRODUCT HEADER CHANGE
		var scTop;
		var detailVisual_height;
		var headerWrap;
		var tabWrap_offset;

		if($('.prodDetailInfo')){
			tabWrap_offset = $('.prodDetailInfo').offset().top;
		}
		//console.log( tabWrap_offset)
		$(window).on('scroll', function(){
			headerWrap = $('.headerProdWrap').height() ;
			scTop = $(window).scrollTop() - headerWrap;
			detailVisual_height = $('.detailVisual').outerHeight() ;

			if(scTop >= detailVisual_height * 0.8){
				$('.prodType_2').addClass('active');
			}else{$('.prodType_2').removeClass('active');}

			
			if(scTop >= tabWrap_offset + 15){
				$('.prodType_2 ul').css({transform: 'translateY(-52px)'})
				
			}else{
				$('.prodType_2 ul').css({transform: 'translateY(0)'});
				
			}
			//console.log(tabWrap_offset)
		})
	},
	prodViewTopSlide : function(isRoll){//PRODUCT VIEW TOP SLIDE
		var obj = 'detailVisual';
		var itemLength =  $('.'+ obj).find('.swiper-slide').length;

		if(isRoll == '' || isRoll == null || typeof isRoll === 'undefined') isRoll == "N";
		if($('.' + obj + ' .swiper-slide').length > 1) {
			var slide = new Swiper('.' + obj + ' .prodViewTopSlide', {
				loop: true,
				speed: 800,
				autoplay: {delay: 3000},
				pagination: {
					el: '.' + obj + ' .slidePage',
					clickable: true,
					renderBullet: function (index, className) {
						return '<button type="button" class="' + className + '">' + '<em>' + (index + 1) + ' / ' + '</em>' + (itemLength) + '</button>';
					},
				},
			});
			slideObj[obj] = slide;
		}
		if(isRoll != 'Y') slide.autoplay.stop();
	},
	timeBanner : function(){//PRODUCT VIEW TOP TIME BANNER
		setTimeout(function() {
			$(".prodDetails .userStatebar").fadeOut();
		}, 4000);
		$('.prodDetails .stateClose').on('click', function(){
			$('.userStatebar').fadeOut();
		});
	}
}
