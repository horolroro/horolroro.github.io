$(document).ready(function(){
	//온라인실시간
	if($('.onRanking').length){onRanking.init();}
	//확장배너
	//exFloatOnetime()
})

//온라인 실시간랭킹
var onRanking = {
	init: function(){
		let options = {};

		if ( $(".swiper2.swiper-container .swiper-slide").length <= 5 ) {

			options = {
				autoplay: {
					delay: 2500,
				},
				speed : 1000,
				spaceBetween: 10,
				slidesPerView: 6,
				slidesPerGroup : 1,
				direction: 'horizontal',
				loop: false,
				autoHeight: true,
				disableOnInteraction: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on : {
					init : function(){
						var btnAuto = $('#tab-1 .btn_autoplay');
	
						$(".swiper2").on('mouseenter', function(){
							swiper2.autoplay.stop();
						});
	
						$(".swiper2").on('mouseleave', function(){
							if(!btnAuto.hasClass('stop')) {swiper2.autoplay.start();}
						});
						btnAuto.on('click', function(){
							var $this = $(this);
							if($this.hasClass('stop')) {
								$this.removeClass('stop');
								swiper2.autoplay.start();
								btnAuto.text('시작');
							} else {
								$this.addClass('stop');
								swiper2.autoplay.stop();
								btnAuto.text('정지');
							}
						});
					}
				}
				
				

			}
		} else {
			options = {
				autoplay: {
					delay: 2500,
				},
				speed : 1000,
				spaceBetween: 10,
				slidesPerView: 6,
				slidesPerGroup : 1,
				direction: 'horizontal',
				loop: true,
				autoHeight: true,
				disableOnInteraction: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on : {
					init : function(){
						var btnAuto = $('#tab-1 .btn_autoplay');
	
						$(".swiper2").on('mouseenter', function(){
							swiper2.autoplay.stop();
						});
	
						$(".swiper2").on('mouseleave', function(){
							if(!btnAuto.hasClass('stop')) {swiper2.autoplay.start();}
						});
						btnAuto.on('click', function(){
							var $this = $(this);
							if($this.hasClass('stop')) {
								$this.removeClass('stop');
								swiper2.autoplay.start();
								btnAuto.text('시작');
							} else {
								$this.addClass('stop');
								swiper2.autoplay.stop();
								btnAuto.text('정지');
							}
						});
					}
				}
				
				
			}
		}
	
		var swiper2 = new Swiper('.swiper2', options);

		var swiper3 = new Swiper ('.swiper3', {
			autoplay: {
				delay: 2500,
			},
			speed : 1000,
			spaceBetween: 10,
			slidesPerView: 6,
			slidesPerGroup : 1,
			direction: 'horizontal',
			loop: true,
			autoHeight: true,
			disableOnInteraction: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on : {
				init : function(){
					var btnAuto = $('#tab-2 .btn_autoplay');

					$(".swiper3").on('mouseenter', function(){
						swiper3.autoplay.stop();
					});

					$(".swiper3").on('mouseleave', function(){
						if(!btnAuto.hasClass('stop')) {swiper3.autoplay.start();}
					});
					btnAuto.on('click', function(){
						var $this = $(this);
						if($this.hasClass('stop')) {
							$this.removeClass('stop');
							swiper3.autoplay.start();
							btnAuto.text('정지');
						} else {
							$this.addClass('stop');
							swiper3.autoplay.stop();
							btnAuto.text('재생');
						}
					});
				}
			}
		});

		onRanking.high()
	},
	high : function(){
		var activeLeft = $('.cate li.active').position().left;
		var activeW = $('.cate li.active').width();

		$('.high').css({width: activeW,left: activeLeft});

		$('.cate li a').on('click', function(e){
			e.preventDefault();
			const el_higt_w = $(this).parents().width();
			const el_high = $('.high');

			$('.cate li').removeClass('active');
			$(this).parents().addClass('active');
			
			el_high.css({width: el_higt_w,left: $(this).position().left})
		});
	}
}
//확장배너
function exFloatOnetime(){
	const exBanner = $('.exfloatingBanner');

	exBanner.delay(3000).find('.bnr_on').css({transform: 'scale(1)', opacity:'1'})

	setTimeout(function(){
		exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
		exBanner.find('.btnHide').show();
	}, 3000);
	$('.bnr_off').on('mouseenter', function(){
		let bnr_on_width = $('.bnr_on').find('img').attr('width');
		exBanner.find('.bnr_on').css({transform: 'scale(1)', opacity:'1' ,width: bnr_on_width + 'px'})
		//exBanner.find('.btnHide').hide()
	}) 
	$('.exfloatingBanner').on('mouseleave', function(){
		exBanner.find('.bnr_on').css({transform: 'scale(0)', opacity:'0'})
		//exBanner.find('.btnHide').show()
	}) 
}
