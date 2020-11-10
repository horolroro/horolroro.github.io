var osObj = {
	'agent' : navigator.userAgent.toLocaleLowerCase(),
	'html' : document.getElementsByTagName('html')[0],
	'htmlCls' : document.getElementsByTagName('html')[0].getAttribute('class'),
	'osVer' : null,
	'deviceVer' : null
}
if(osObj.agent.indexOf('iphone') > -1 || osObj.agent.indexOf('ipad') > -1) {
	var device = osObj.agent.substring(osObj.agent.indexOf('os') + 3);
	var deviceVer = device.substring(0, device.indexOf('like mac os x'));
	osObj.osVer = 'ios' + deviceVer;
} else if(osObj.agent.indexOf('android') > -1) {
	var device = osObj.agent.substring(osObj.agent.indexOf('android') + 8);
	var deviceVer = device.substring(0, device.indexOf(';'));
	andVer = deviceVer.replace(/[.]/gi,'_');
	osObj.osVer = 'android' + andVer;

	if(osObj.agent.indexOf('samsung') > -1) osObj.osVer += ' samsung';
}

if(osObj.agent.indexOf('innimemapp') > -1) osObj.osVer += ' webview';
if(osObj.agent.indexOf('naver') > -1) osObj.osVer += ' naver';
(osObj.htmlCls !== null) ? osObj.html.setAttribute('class', osObj.htmlCls + ' ' + osObj.osVer) : osObj.html.setAttribute('class', osObj.osVer);

var defaultObj = {
	'win': $(window),
	'doc': $('html'),
	'currentBtn' : ''
}

function categoryMenu(){
	var socialSeller;
	$('.categoryMenuOpen').on('click', function(e){
		e.preventDefault();
		$('#sideMenu').fadeIn(100, function () {
			$('.sideBox').addClass('open');
			$('.dim').hide();
		});
		$('body').addClass('overHeight');
	});
	$('.sideClose').on('click', function(){
		if (socialSeller){
			$('.sideBox').removeClass('open');
			$('#sideMenu').fadeOut(100);
		} else {
			$('.quickMenu li').removeClass('active');
			$('.sideBox').removeClass('open').on('transitionend', function () {
				if (!$('.sideBox').hasClass('open')) {
					$('#sideMenu').fadeOut(100);
				}
			});
		}
		$('body').removeClass('overHeight');
	});
};
function allMenu() {
	$('.IbannerClose').on('click', function(){
		$('.banner').slideUp();
	});
	$('.TbannerClose').on('click', function(){
		$('.txtBanner').slideUp();
	});
	$('.btnAll').on('click', function(){
		$(this).stop().toggleClass('on');
		$('.allMenu').stop().slideToggle();
	});
	$('.slideAll').on('click', function(){
		$('.allvisual').addClass('open').scrollTop(0);
		$('body').addClass('overHeight');
	});
	$('.allClose a').on('click', function(){
		$('.allvisual').removeClass('open');
		$('body').removeClass('overHeight');
		return false;
	});

	$('.quickMenu > li > a').on('click', function(){
		if (!$(this).parent().hasClass("active")){
			$(this).parent().closest('li').addClass('active');
			$(this).parent().siblings().closest('li').removeClass('active');
			$('body').addClass('overHeight');
			$('.dim').show();
		}else {
			$(this).parent().closest('li').removeClass('active');
			$('body').removeClass('overHeight');
			$('.dim').hide();
		}
	});
	$('.dim').on('click',function(e){
		$('.quickMenu > li').removeClass('active');
		$('body').removeClass('overHeight');
		$('.dim').hide();
	});
	$('.orderCloseBtn').on('click',function(){
		var wrap = $('.pdtViewCount');
		if (!wrap.hasClass('open')) {
			wrap.addClass('open');
			$('body').addClass('overHeight');
		} else {
			wrap.removeClass('open');
			$('body').removeClass('overHeight');
		}
	});
	$('.btnFold').on('click',function(){
		if(!$(this).hasClass('open')){
			var wHeight = $('.weekWrap').height(),
				autowHeight = $('.weekWrap').css('height', 'auto').height();
				$('.weekWrap').height(wHeight);
				$('.weekWrap').stop().animate({ height: autowHeight }, 500);
				$(this).addClass('open');
		}else{
			$('.weekWrap').stop().animate({height: '10rem'},500);
			$(this).removeClass('open');
		}
	});
	//$('.btnPointInq').on('click',function(){
	//	$('.btnPointWrap').hide();
	//	$('.okcashbagPoint').show();
	//});
	$('#msSelect').on('change',function(){
		var selectState = $(this).val();
		if(selectState == 'directly'){
			$('.radioTabCont').show();
		}else{
			$('.radioTabCont').hide();
		}
	});
	$('#select').on('change',function(){
		var value = '#' + $(this).val();
		$('.radioTabCont').show().not(value).hide();
	});
	$('#etcList input').on('change',function(){
		var value = '#' + $(this).val();
		$('.radioTabCont').show().not(value).hide();
	});
	$('#showProv').on('click',function(){
		$('.provSection').toggle();
	});
	$('.iTop button').on('click',function(){
		var $this = $(this);
		var conts = $this.closest('td'); 
		
		conts.toggleClass('short');
	});
	$('#proMore').on('click',function(){
		var proST = $(window).scrollTop();
		if ($(this).hasClass('open')) {
			$('.pdtViewMobile').removeClass('grad');
			$(this).removeClass('open');
		} else {
			$('.pdtViewMobile').addClass('grad');
			$(this).addClass('open');
			window.scrollTo(0,proST);
		}
	});
	$('.qMypage, .home').on('click',function(){
		$('.dim').hide();
	});
	$('.emailDisa').on('click',function(){
		$(this).toggleClass('open');
		$('.emailTxt').toggleClass('open');
	});
};
function tabUi(){
	var uiTabWrap = $('.uiTabWrap'),
		uiTab = uiTabWrap.find('.uiTab'),
		uiTabBtn = uiTab.find('.uiTabBtn'),
		uiTabList = $('.tabCon');

	uiTabList.first().addClass("on");

	uiTabBtn.off().on('click', function(e){

		e.preventDefault();

		if( $(this).hasClass('on') ) return;

		$(this).closest(uiTabWrap).find(uiTabBtn).removeClass('on');
		$(this).addClass('on');

		$("#" + $(this).attr("aria-controls"))
			.addClass("on")
			.siblings(uiTabList)
			.removeClass("on");

	});
};
function smenuUi(){
	var shopmenu = $('.shopMenu'),
		smenuBtn = $('.sBtn'),
		smenu = $('.smenu');
	smenuBtn.on('click', function(e){
		e.preventDefault();
		if( $(this).hasClass('on') ) return;

		$(this).closest(shopmenu).find(smenuBtn).removeClass('on');
		$(this).addClass('on');

		$("#" + $(this).attr("aria-controls"))
			.addClass("on")
			.siblings(smenu)
			.removeClass("on");
	})
};
function listTypeUi(){
	var typeChage = $('.listType button');
	typeChage.on('click',function(e){
		e.preventDefault();
		if ($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$('.productTypeThumb')
				.not('.productTypeListScroll')
				.removeClass('productTypeList');
		} else {
			$(this).addClass('is-active');
			$('.productTypeThumb')
				.not('.productTypeListScroll')
				.addClass('productTypeList');
		}
	})
};
function topFixedUi(){
	var header = $('.headerWrap');
	var headerInner = $('.headerWrap .headerInner');
	var scr = $(window).scrollTop();
	var proInfo = $('.productDetailInfor');
	var proTab = $('.productDetailInfor .tabType');
	if(header.length){
		var navHeight = header.offset().top;
		if (scr >= navHeight) {
			headerInner.addClass('fixed');
		}else {
			headerInner.removeClass('fixed');
		}
	}
	if(proInfo.length){
		var objTop = proInfo.offset().top;
		if ($(window).scrollTop() >= objTop) {
			if(!proTab.hasClass('fixed')) proTab.addClass('fixed');
		}else {
			if(proTab.hasClass('fixed')) proTab.removeClass('fixed');
		}
	}
}
topFixedUi();
$(window).on('scroll', function() {
	topFixedUi();
});
function topMenuUi(){
	var previousScroll = 0;
	var quickWrap = $('.quickWrap');
	var $body = $('body');

	window.addEventListener('scroll', function(){
		var currentScroll = $(this).scrollTop();
		if (currentScroll > previousScroll && currentScroll > 0){
			if(!$body.hasClass('is-hidden')) {
				$body.addClass("is-hidden");
			}
			previousScroll = currentScroll;
		} else if(currentScroll < previousScroll) {
			if($body.hasClass('is-hidden')) {
				setTimeout(function(){$body.removeClass("is-hidden")},200);
			}
			previousScroll = currentScroll;
		}
	});
	if(!quickWrap.length) $body.addClass('noQuick');
};
function scrTopBtn() {
	var topBtn = $('.topBtn');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			topBtn.addClass('show');
		} else {
			topBtn.removeClass('show');
		}
	});

	topBtn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
};
function radioTab(){
	$(".radioTabWrap").find("input").click(function() {
		var target = event.currentTarget || event.srcElement;
		var $this = $(target);
		var id = $this.val();
		if($('#'+id).length) {
			$this.closest('.radioTabWrap').find('#'+id).addClass('active').siblings().removeClass('active');
		} else {
			$this.closest('.radioTabWrap').find('.radioTabContent').removeClass('active');
		}
	});
};
function accUi(){
	$('.cont').hide()

	$("[role='button']").click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next('.cont').stop().slideUp('fast');
			$(this).closest("li").removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).next('.cont').stop().slideDown('fast');
			$(this).closest("li").addClass('active');
		}
	});
};
function scrollBtm() {
	var $fixed = $('.totalSticky');
	$(window).on("scroll", function() {
		if($fixed.length) {
			var win = $(this);
			var winH = win.height();
			var scrT = win.scrollTop();
			var elTop = $fixed.parent().offset().top;
			if(winH + scrT >= elTop){
				if(!$fixed.parent().hasClass('active')){
					$fixed.addClass('fixed');
					$fixed.parent().addClass('active').find('.cont').show();
				}
			} else {
				$fixed.removeClass('fixed');
				$fixed.parent().removeClass('active').find('.cont').hide();
			}
		}
	});
};
function iptSltRst() {
	$('.yes').click(function(){
		$(this).parent().next().show();
	});
	$('.no').click(function(){
		$(this).parent().next().hide();
		$(this).parent().next().find('input').val('');
		$(this).parent().next().find('option').prop('selected', function() {
        	return this.defaultSelected;
		});
	});
};
function timeBanner(){
	setTimeout(function() {
		$(".userState").fadeTo(500, 0).slideUp(500, function(){
			$(this).slideUp();
		});
	}, 5000);
	$('.stateClose').on('click', function(){
		$('.userState').slideUp();
	});
};
$(document).ready(function(){
	categoryMenu();
	allMenu();
	tabUi();
	smenuUi();
	listTypeUi();
	topFixedUi();
	topMenuUi();
	scrTopBtn();
	radioTab();
	accUi();
	scrollBtm();
	iptSltRst();
	timeBanner();
});
var slideObj = {}

/* 메인 슬라이드 */
var VisualSlide = function() {
    var obj = 'mainVisual';
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
    var itemLength =  $('.'+obj).find('.swiper-slide').length;

    var slide = new Swiper('.' + obj + ' .slide', {
        loop: true,
        speed: 800,
        autoplay: {delay: 5000},
        pagination: {
            el: '.' + obj + ' .slidePage',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '">' + '<em>' + (index + 1) + ' / ' + '</em>' + itemLength + '</button>';
            },
        }
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
    $('.' + obj).on({
        'mouseenter' : function(){slide.autoplay.stop();},
        'mouseleave' : function(){slide.autoplay.start();}
    });
    slideObj[obj] = slide;
    $('.allvisual ul').append(list);
    $('.allvisual ul li').removeAttr('class');
}
/* //메인 슬라이드 */

/* 리얼후기 */
var realReview = function() {
	var obj = 'realReview';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .realSlide', {
			//loop: true,
			speed: 800,
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '">' + (index + 1) + '</button>';
				},
			},
			scrollbar: {
				el: '.swiper-scrollbar',
			}
		});
	}
	slideObj[obj] = slide;
}

var creamSlide = function() {
	var obj = 'inniSlide';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 800,
			autoplay: {delay: 3000},
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
var detailVisualSlide = function(isRoll) {
	if(isRoll == '' || isRoll == null || typeof isRoll === 'undefined') isRoll == "N";
	var obj = 'detailVisual';
	if($('.' + obj + ' .swiper-slide').length > 1) {
		var slide = new Swiper('.' + obj + ' .detailSlide', {
			loop: true,
			speed: 800,
			autoplay: {delay: 3000},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<button type="button" class="' + className + '">' + (index + 1) + '</button>';
				},
			}
		});
		slideObj[obj] = slide;
	}
	if(isRoll != 'Y') slide.autoplay.stop();
}

var pwReview = function() {
	var obj = 'pwReview';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .pwReviewSlide', {
			loop: true,
			speed: 800,
			slidesPerView: 'auto',
			spaceBetween:10,
		});
		slideObj[obj] = slide;
	}
}
var pwReview2 = function() {
	var obj = 'myReview';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .pwReviewSlide', {
			loop: true,
			speed: 800,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween:10,
		});
	}
	slideObj[obj] = slide;
}
var myWriteReview = function() {
	var obj = 'myWriteReview';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .pwReviewSlide', {
			speed: 800,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween:10,
		});
	}
	slideObj[obj] = slide;
}

var viewSlideWrap = function() {
	var obj = 'viewWrap';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .viewSlide', {
			slidesPerView: 1.2,
			spaceBetween:10,
		});
	}
	slideObj[obj] = slide;
}

/* 이벤트 */
var eventVisual = function() {
	var obj = 'eventVisual';
	if($('.' + obj + ' .swiper-slide').length > 1){
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 800,
			autoplay: {delay: 5000},
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
/* 메인 랭킹 */
var ranking = function(obj) {
	var rankingWrap = $(obj);
	var rankingTab = rankingWrap.find('.rankingTab');
	var tabBtn = rankingTab.find('button');
	var tabCont = rankingWrap.find('.rankingList');
	var timer;
	$('.rolling',rankingWrap).each(function(i,content){
		$('li:lt('+($('li',content).length-2)+')',content).appendTo(content);
	});
	function ranking(){
		$('.rankingList.active ul li').removeClass('current').eq(2).addClass('current');
		if($('.rankingList.active .rolling',rankingWrap).length>0){
			timer = setInterval(function(){
				var slideHeight = $('.rankingList.active ul li',rankingWrap).height();
				$('.rankingList.active ul',rankingWrap).animate({
					top: - slideHeight
				}, function () {
					$('.rankingList.active ul li').removeClass('current').eq(3).addClass('current');
					$('.rankingList.active ul li:first-child',rankingWrap).appendTo('.realRanking .active ul');
					$('.rankingList.active ul',rankingWrap).css('top', '');
				});
			},3000);
		}
	}
	ranking();
	tabBtn.off().on('touchstart click', function(){
		var $this = $(this);
		var idx = $this.parent().index();
		$this.parent().addClass('active').siblings().removeClass('active');
		tabCont.eq(idx).addClass('active').siblings().removeClass('active');
		clearInterval(timer);
		ranking();
	})
}
/* 튜토리얼 */
var tutorial = function() {
	var obj = 'tutorial';
	var slide = new Swiper('.' + obj + ' .slide', {
		loop: true,
		speed: 800,
		pagination: {
			el: '.' + obj + ' .slidePage',
			clickable: true,
			renderBullet: function (index, className) {
				return '<button type="button" class="' + className + '">' + (index + 1) + '</button>';
			},
		},
		navigation: {
			prevEl: '.' + obj + ' .btnPrev',
			nextEl: '.' + obj + ' .btnNext',
		}
	});
	slideObj[obj] = slide;
}


/* share green */
var sharegreenSlide = function() {
	var obj = 'sharegreenSlide';
	var slide = new Swiper('.' + obj + ' .slide', {
		loop: true,
		speed: 800,
		navigation: {
			prevEl: '.' + obj + ' .btnPrev',
			nextEl: '.' + obj + ' .btnNext',
		}
	});
	slideObj[obj] = slide;
}

var mainPopClose = function(state, seq) {
	var popupWrap = $('.mainPopup');
	var dim = $('.dim');
	
	if(state == 'hide') {$.jutil.setCookie("mainPopup_"+seq, state, 1);}
	//popupWrap.hide();
	
	popupWrap.css({transform: 'scale(0)'})
	dim.hide();
}

defaultObj.win.on({
	
	'ready' : function() {
		var popupId = $('.mainPopup').data('target');
		var dim = $('.dim');
		
		if($.jutil.getCookie("mainPopup_"+popupId) != 'hide') {
			//$('.mainPopup').fadeIn(200);
			dim.show();
		}
	},
	'scroll': function() {
		var scrollTop = defaultObj.doc.scrollTop();
		//fixedFunc(scrollTop);
	}
});

/* 롤링 */
var rollingSlide = function(obj, dir) {
	var wrap = $(obj);
	var relWrap = wrap.find('> ul');
	var item = relWrap.find('> li');
	var itemW = item.width();
	var resetNum = item.length * itemW;
	var cloneHtml = relWrap.html();
	var pos = 0;
	var timer;
	var style = {};

	relWrap.prepend(cloneHtml + cloneHtml).append(cloneHtml + cloneHtml);
	relWrap.css('margin-left', '-' + resetNum + 'px');

	wrap.active = function(){
		timer = setInterval(function(){
			pos--;
			if('-' + resetNum == pos) {
				style[dir] = 0;
				pos = 0;
			} else {
				style[dir] = pos + 'px';
			}
			relWrap.css(style);
		},45);
	}
	wrap.active();

	relWrap.on({
		'mouseenter': function(){
			clearInterval(timer);
		},
		'mouseleave': function(){
			wrap.active();
		}
	});
}

/* 헤더 키워드 롤링 */
var keywordRolling = function() {
	var wrap = $('.keywordRolling ul');
	var list = wrap.find('li');
	var link = list.find('a');
	var listH = list.height();
	var limit = listH * list.length;
	var top = 0;

	if(list.length == 0) wrap.parent().remove();
	list.eq(0).clone().appendTo(wrap);
	setInterval(function(){
		top += listH;
		wrap.animate({'margin-top': '-'+top+'px'},500, function(){
			if(top == limit) {
				top = 0;
				wrap.css('margin-top', top);
			}
		});
	}, 3000);

	list.off().on('click', function(){
		wrap.parent().hide();
		$('#querytop').focus();
	});
	link.on('click', function(){
		event.stopPropagation();
	});
}


/* 찜하기 레이어 */
var wishSel = function(myshop_yn, myShopRegFl) {
	if (myshop_yn == 'Y' && myShopRegFl != 'Y') {
		//마이샵전용상품일 경우 찜 불가
		return;
	}else{
		var body = $('body');
		var target = event.currentTarget || event.srcElement;
		var $this = $(target);
		var tostCreat = function(txt, cls) {
			var markup = '<div class="layerWish'+cls+'"><p>'+txt+'</p></div>'
			body.append(markup);
			var wishTost = $('[class*="layerWish"]');
			wishTost.fadeIn(500, function(){
				setTimeout(function(){
					wishTost.fadeOut(500, function(){
						wishTost.remove();
					})
				},1000);
			});
		}
		if($this.hasClass('on')) {
			$this.removeClass('on');
			tostCreat('찜 목록에서 삭제되었습니다.', 'Off');
		} else {
			$this.addClass('on');
			tostCreat('찜 목록에 추가되었습니다.', 'On');
		}
	}
}

var tostPop = function(txt, type) {
	var body = $('body');
	var target = event.currentTarget || event.srcElement;
	var $this = $(target);
	var posY = $this.offset().top + $this.outerHeight() + 0;
	var posX = $this.offset().left + $this.outerWidth() / 3;
	var reTxt = txt.replace(/(\n|\r\n)/g, '<br>');
	var tostLayer = '';
	if(type == 'layer') {
		posY = posY - window.scrollY;
		tostLayer = '<div class="tostPop tostTypeLayer"><p class="txt">'+reTxt+'</p></div>';
	} else {
		tostLayer = '<div class="tostPop"><p class="txt">'+reTxt+'</p></div>';
	}

	body.append(tostLayer);
	var tostPop = $('.tostPop');
	posX = posX - tostPop.outerWidth() / 2;
	tostPop.css({'top': posY + 'px', 'left' : posX + 'px'}).fadeIn(300);
	setTimeout(function(){
		tostPop.fadeOut(300, function(){
			tostPop.remove();
		});
	},2000);

}
/* 아코디언 */
var acdActive = function(type) {
	var target = event.currentTarget || event.srcElement;
	var $this = $(target);
	if(type == 'clsType') {
		if(!$this.parent().hasClass('active')) {
			$this.parent().addClass('active').siblings().removeClass('active');
		} else {
			$this.parent().removeClass('active');
		}
	} else if(type == 'tblType') {
		if($this.closest('tr').next().hasClass('answer')) {
			$this.closest('tr').next('.answer').toggleClass('active');
		}
	} else if(type == 'li') {
		var li = $this.closest('li');
		if(li.hasClass('active')) {
			li.removeClass('active').find('.cont').slideUp(200);
		} else {
			li.siblings().removeClass('active').find('.cont').slideUp(200);
			li.addClass('active').find('.cont').slideDown(200);
		}
	} else if($this.parent().hasClass('active')) {
		$this.parent().removeClass('active').find('.cont').slideUp(200);
	} else {
		$this.next('.cont').slideDown(200)
		.parent().addClass('active')
		.siblings().removeClass('active')
		.find('.cont').slideUp(200);
	}
}
/* 스크롤 */
var qnaScroll = function(id){
	if($('#'+id).length) {
		var top = $('#'+id).offset().top - 100;
		defaultObj.doc.animate({scrollTop : top}, 300);
		$('#'+id).addClass('active').find('.cont').slideDown(300);
	}
}

/* select */
var defaultTxt = [];
var stepOptReset = function(){
	var selBox = $('#pdtOptBox');
	var selBtn = selBox.find('.selTit');
	var allInput = selBox.find('input[type="radio"]');
	selBtn.each(function(idx){
		var $this = $(this);
		$this.html(defaultTxt[idx]);
		if(!selBtn.parent().hasClass('addBox')) $this.prop('disabled', true);
	});

	allInput.prop('checked', false);
	pdtOptFunc();
}
var pdtOptFunc = function(type) {
	var selBox = $('#pdtOptBox');
	var firSel = selBox.find('.selectArea').eq(0).find('.selTit');
	var selBtn = selBox.find('.selTit');
	var input = selBox.find('input[type="radio"]');
	var option = selBox.find('li label');
	var valChange = false;
	var selChk = function(_this) {
		var thisSel = _this.closest('.selectArea');
		var thisSelBtn = thisSel.find('.selTit');
		var txt = _this.parent().find('.optTxt').text();

		thisSelBtn.removeClass('open').next('.selList').slideUp(200);

		thisSelBtn.html(txt);
		if(firSel.data('type') == 'step') { //타입이 스탭일 경우 다음 옵션 박스 오픈
			if(!thisSel.next('.selectArea').hasClass('addBox')) {
				thisSel.next('.selectArea').find('.selTit').prop('disabled', false).addClass('open').next('.selList').slideDown(200);
			}
		}
	}

	//옵션 리셋시 전체 닫힘
	selBtn.removeClass('open').next('.selList').slideUp(200);

	//추가 구성품이 아닐 경우 첫번째 옵션 열린 상태
	//if(!firSel.parent().hasClass('addBox')) {firSel.prop('disabled', false).addClass('open').next('.selList').show();}

	defaultTxt = [];
	selBtn.each(function(){ //옵션 리셋 세팅
		var $this = $(this);
		defaultTxt.push($this.html());
	})

	selBtn.off().on('click', function(){
		event.stopPropagation();
		var $this = $(this);
		if($this.hasClass('open')) {
			selBtn.removeClass('open').next('.selList').slideUp(200);
		} else {
			selBtn.removeClass('open').next('.selList').slideUp(200);
			$this.addClass('open');
			$this.next('.selList').slideDown(200).find('li:first-child input').focus();
		}
	});

	selBox.on('click', 'label', function(){
		event.stopPropagation();
		if(!$(this).parent().find('input').is(":disabled")) {
			var $this = $(this);
			selChk($this);
		}
	});
	selBox.on('keydown', 'input[type="radio"]', function() {
		if(event.keyCode == 13) {
			var $this = $(this);
			selChk($this);
		}
	});

	if(valChange == true) {
		if(firSel.data('type') == 'step') {
			var nextSel = $this.parent().next('.selectArea').find('.selTit');
			nextSel.prop('disabled', false);
			selActive(nextSel);
		}
	}
}

var selActive = function() {
	var target = event.currentTarget || event.srcElement;
	var $this = $(target);
	var selWrap = $this.closest('.selectArea');
	var selList = $this.next('.selList');
	var input = selList.find('input[type="radio"]');
	var option = selList.find('li label');

	var selChk = function(txt){
		$this.removeClass('open').html(txt);
		selList.slideUp(200);
	}

	$this.addClass('open');
	selList.slideDown(200).find('li:first-child input').focus();

	input.on('keydown', function(){
		if(event.keyCode == 13) {
			var txt = $(this).next('label').html();
			selChk(txt);
		}
	})
	option.off().on('click', function(){
		if(!$(this).parent().find('input').is(":disabled")) {
			var txt = $(this).html();
			selChk(txt);
		}
	});

	selWrap.off().on('mouseleave', function(){
		selChk();
	});

}

/* 탭 */
var tabActive = function(id, idx) {
	if(id) {
		var $this = $('#'+ id);
		var tab = $this.find(' > ul > li');
		tab.eq(idx).addClass('active').siblings().removeClass('active');
	} else {
		var target = event.currentTarget || event.srcElement;
		var $this = $(target);
		var idx = $this.parent().index();
		$this.parent().addClass('active').siblings().removeClass('active');
	}
	var tabWrap = $this.closest('.tabWrap');
	var tabCont = tabWrap.find('.tabContents .tabCont');
	tabCont.eq(idx).addClass('active').siblings().removeClass('active');
}

/* 전체동의 */
var allChk = function(id, _this) {
	if(!_this) {
		var target = event.currentTarget || event.srcElement;
		var allChk = $(target);
	} else {
		var allChk = _this;
	}
	var checkbox = $('#'+id).find('input[type="checkbox"]').not(':disabled');
	var chkLeng = checkbox.length;
	var chkState = 0;

	(allChk.is(':checked') == true) ? checkbox.prop('checked', true) : checkbox.prop('checked', false);

	checkbox.off().on('change', function(){
		if(this.checked == false) allChk.prop('checked', false);
		checkbox.each(function(){
			if(this.checked) chkState++;
			if(chkLeng == chkState) allChk.prop('checked', true);
		});
		chkState = 0;
	});
}

/* layer */
var layerOpen = function(id) {
	// layerClose();
	var layerWrap = $('#'+id);
	if(layerWrap.hasClass('resize') || layerWrap.hasClass('size560')) {
		$('body').addClass('overHeight');
	}
	if(id == "barcodePop") {
		layerWrap.find('.popBarcode').on('click', function(){
			event.stopPropagation();
		});
	}

	layerWrap.show();
}
var layerClose = function(id) {
	$('body').removeClass('overHeight');
	if(id) {
		$('#'+id+'.layPop').hide();
		if(id == "inquiry"){
			$("#ttl").val('');
			$("#cnt").val('');
			$("input:checkbox[id='check']").prop("checked", false);
		}
		if (id == "layCertiPhoneFail") {
			location.reload();
		}
	} else {
		var target = event.currentTarget || event.srcElement;
		var $this = $(target);
		$this.closest(".layPop").hide();
	}
}
$(document).on("click",".layPop .mvClose",function(e){
	var $this = $(this);
	$this.closest(".layPop").hide();
});

/* 유튜브 API */
var ytState = false;
var ytObj = {};
var ytSet = function(ytId, tagId) {
	$('#'+tagId).addClass('load');
	if(ytState == false) {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		ytState = true;
	}
	createPlayer(ytId, tagId);
}
function createPlayer(ytId, tagId) {
	setTimeout(function(){
		ytObj[ytId] = new YT.Player(tagId, {
			width: '100%',
			height: '100%',
			videoId: ytId,
			playerVars : {
				'controls' : 0,
				'showinfo' : 0,
				'rel' : 0,
				'playsinline' : 1
			},
			events: {
				'onReady': function(){
					$('#'+tagId).removeClass('load');
				},
				'onStateChange': function(event){
					if(event.data === 0) {
						ytObj[ytId+'btn'].fadeIn(300);
					}
				}
			}
		});
	},5000);
}
var ytPlay = function(ytId) {
	var target = event.currentTarget || event.srcElement;
	var $this = $(target);
	if(ytObj[ytId]) {
		$this.fadeOut(1500);
		ytObj[ytId+'btn'] = $this;
		ytObj[ytId].playVideo();
	}
}


/* 제품 수량 */
var qtyCalc = function(state) {
    var target = event.currentTarget || event.srcElement;
    var $this = $(target);
    var pdtQty = $this.parent().find('input.pdtQty');
    var qty = pdtQty.val();
    if(state == 'plus') {
        qty++;
    } else if(state == 'minus' && qty > 1) {
        qty--;
    }
    pdtQty.val(qty).trigger('change');
}

var pdtQtyFunc = function(obj, max) {
    var $this = $(obj);
    if(parseInt($this.val()) > parseInt(max)) {
    	alert('이 제품의 1회 최대 구매 가능한 수량은 '+max+'개 입니다.');
        $this.val(max);
    }
}

/* 달력 */
function initDatepicker(selector, config) {
	var $container = $(selector);

	if ($container.length === 0) return;

	if (!("datepicker" in jQuery.fn)) {
		console.error("No library found named `$.fn.datepicker`.")
		return;
	}

	var defaults = {
		// 현지화
		dateFormat: "yy-mm-dd",
		monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		dayNames: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
		dayNamesShort: ["일","월","화","수","목","금","토"],
		dayNamesMin: ["일","월","화","수","목","금","토"],
		nextText: "다음",
		prevText: "이전",
		currentText: "오늘",
		closeText: "닫기",
		firstDay: 0,
		showMonthAfterYear: true,
		yearSuffix: "년",
		// 그 외 위젯 옵션
		selectOtherMonths: true,
		showButtonPanel: false,
		showOtherMonths: true
	};

	$container.datepicker($.extend(defaults, config));
}

$(function() {
	initDatepicker(".datepicker");
});

/* 메인 */
var headerNav = { // 좌우 스크롤 메뉴 포지션.
	init:function(){
		var _this = this ;
		_this.using();
		$(document).on("click",".headerNav>.list>li>a",function(e){
			_this.using(this);
		});
	},
	using:function(els){

		if($('.headerNav').find('.active').length > 0) {
			if (!els) {
				els = ".headerNav>.list>li.active>a";
			}
			$(els).closest("li").addClass("active").siblings("li").removeClass("active");
			var myli = $(els).closest("li");
			var myWd = myli.outerWidth();
			var posL = myli.position().left - ($(".headerNav").outerWidth() * 0.5) + (myWd * 0.5) - ($('.headerWrap .btnAll').width() / 2);
			$(".headerNav").animate({ scrollLeft: posL }, 300);
		}
	}
};
$(document).ready(function(){
	headerNav.init();
});

/* 서브 공통 */
var navSlideAct = { // 좌우 스크롤 메뉴 포지션.
	init:function(){
		var _this = this ;
		_this.using();
		$(document).on("click",".navSlide>.list>li>a:not(.lk)",function(e){
			_this.using(this);
		});
	},
	using:function(els){
		var speed  = 300;

		if(!$('.faqSch').length){
			if ( !$(".navSlide>.list>li.active").length) {
				$(".navSlide>.list>li:first-child").addClass("active");
			}
		}

		if (!els) {
			if(!$('.faqSch').length){
				els = ".navSlide>.list>li.active>a";
			} else {
				els = ".navSlide>.list>li>a";
			}
			speed = 0;
		}

		$(els).closest("li").addClass("active").siblings("li").removeClass("active");
		var myli = $(els).closest("li");
		var myWd = myli.outerWidth();
		var posL = myli.position().left - $(".navSlide").outerWidth()*0.5  + myWd *0.5 ;
		$(".navSlide").animate({ scrollLeft: posL }, speed);
	}
};

$(window).on("load",function(){
	$(".navSlide").length && navSlideAct.init();

	/* 인풋체크 전체 */
	if($('.inputChk').length) {
		$('.inputChk input').each(function(){
			var $this = $(this);
			if($this.attr('onclick') || $this.attr('onchange')) {
				var idString = $this.attr('onclick') || $this.attr('onchange');
				if(idString.indexOf('allChk') == 0) {
					var start = idString.indexOf("'");
					var end = idString.lastIndexOf("'");
					allChk(idString.substring(start + 1, end), $this);
				}
			}
		});
	}

})



//  html_mo/customer/store/store_fav.jsp  지도열기 닫기
$(document).on("click",".cc.store .storeList .bt.loc",function(e){
	var $myLi = $(this).closest("li");
	if ($myLi.hasClass("open")) {
		$myLi.removeClass("open");
	}else{
		$myLi.addClass("open");
	}
});

$(document).on("click",".cc.store .distance .list>li>a",function(e){
	$(this).closest("li").addClass("active").siblings("li").removeClass("active");
});


var myTabAct = {
	act:function(n){
        if (n) {
			$(".my .navSlide>.list>li:nth-child("+n+")").addClass("active");
		}
	}
}


var myOdTabAct = {
	act:function(n){
        if (n) {
			$(".my .odrTab>.menu>li:nth-child("+n+")").addClass("active");
		}
	}
}


// 주문정보 토글
var vListTog = {
	init:function(){
		$(window).on("load", this.using);
		this.set();
	},
	set:function(){
		$("ul.vList>li>.cBox").hide();
		$("ul.vList>li.open>.cBox").show();
	},
	using:function(){
		$(document).on("click", "ul.vList>li>.hBox .btTog", function() {
			var $pnt = $(this).closest("li");
			if ($pnt.children(".cBox").is(":visible")) {
				$pnt.children(".cBox").slideUp(400);
				$pnt.removeClass("open");
			} else {
				$pnt.addClass("open").children(".cBox").slideDown(400);
			}
		});
	}
}
$(document).ready(function(){ 	vListTog.init();  });


// /html_mo/mypage/order/my_order_list.jsp 주문리스트 상태탭
$(document).on("click",".my.od .odrList .tabs>li>a",function(e){
	$(this).closest("li").addClass("active").siblings("li").removeClass("active");
});

// /html_mo/mypage/order/my_order_list.jsp 주문리스트 날짜탭
$(document).on("click",".dateRng .tabs>li a",function(e){
	$(this).closest("li").addClass("active").siblings("li").removeClass("active");
});

// /html_mo/mypage/counsel/counsel_list.jsp
var qaPicSlide={
	els: ".qaList .picSlide.swiper-container:not(.swiper-container-horizontal)",
	opt: {
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		watchOverflow:true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		loop: true
	},
	slide:[],
	using: function() {
		var _this = this;
		$(this.els).each(function(i){
			var $this = $(this);
			var sld = $this.find(".swiper-slide").length
			var idx = $this.closest("li").index();
			if( sld == 1 ) _this.opt.loop = false ;
			if( sld >= 2 ) {
				_this.slide[idx] = new Swiper( $this , _this.opt );
				// console.log(_this.slide[i]);
			}
		});
	}
}
$(document).ready(function(){
	$(qaPicSlide.els +" ul.pics>li" ).length && qaPicSlide.using();
});

var termsOpen = function(tit,cont,scr) {
	if($('#termsLayer').length) {$('#termsLayer').remove();}
	var body = $('body');
	var html = '';
	html += '<div id="termsLayer" class="layPop resize">';
	html += '<div class="wrapModal">';
	html += '<div class="inner">';
	//(scr == 'none') ? html += '<div class="inner">' : html += '<section class="layerWrap scrollLayer" style="width: 960px;">';
	html += '<div class="resizeHead"><h3>'+tit+'</h3></div>';
	html += '<div class="resizeBody mbVs">';
	html += '</div>';
	html += '<button type="button" class="mvClose" onclick="layerClose();">닫기</button>'
	html += '</setion>';
	html += '</div>';
	html += '</div>';
	body.append(html);

	var termsWrap = $('#termsLayer');

	$.ajax({
		type: 'get',
		url: '/kr/ko/DirectPageTerms.do?pageName='+cont,
		success: function(data) {
			termsWrap.find('.resizeBody').html(data);
			termsWrap.show();
			$('body').addClass('overHeight');
		}
	});
}

function searchProVisionStoreList(pageNo) {
	if(pageNo == null){pageNo = "1";}
	var body = $('body');
	var html = '';
	html += '<div id="storeList" class="layPop resize">';
	html += '<div class="wrapModal">';
	html += '<div class="inner">';
	html += '<div class="resizeHead"><h3>이니스프리 MY SHOP 가맹점 리스트</h3></div>';
	html += '<div id="proVisionStoreList" class="resizeBody">';
	html += '</div>';
	html += '<button type="button" class="mvClose" onclick="$(\'#storeList\').remove();layerOpen(\'termsLayer\')">닫기</button>'
	html += '</div>';
	html += '</div>';
	html += '</div>';
	body.append(html);
	layerOpen('storeList');

	$.ajax({
		type:'post',
		data:{
			 pageNo : pageNo,
			 listScale : "10",
			 gubun : "myshop"
		},
		url:'/kr/ko/MemberProVision2StoreList.do',
		success:function(data) {
			$('#proVisionStoreList').html(data);
			layerOpen('storeList');
		}
	});
}

function searchProVisionStoreList2(pageNo) {
	if(pageNo == null){pageNo = "1";}
	var body = $('body');
	var html = '';
	html += '<div id="storeList" class="layPop resize">';
	html += '<div class="wrapModal">';
	html += '<div class="inner">';
	html += '<div class="resizeHead"><h3>이니스프리 가맹사업자 리스트</h3></div>';
	html += '<div id="proVisionStoreList2" class="resizeBody">';
	html += '</div>';
	html += '<button type="button" class="mvClose" onclick="$(\'#storeList\').remove();layerOpen(\'termsLayer\')">닫기</button>'
	html += '</div>';
	html += '</div>';
	html += '</div>';
	body.append(html);
	layerOpen('storeList');

	$.ajax({
		type:'post',
		data:{
			 pageNo : pageNo,
			 listScale : "10",
			 gubun : "store"
		},
		url:'/kr/ko/MemberProVision2StoreList.do',
		success:function(data) {
			$('#proVisionStoreList2').html(data);
			layerOpen('storeList');
		}
	});
}

var layerAlert = function(txt) {
	var body = $('body');
	var reTxt = txt.replace(/(\n|\r\n)/g, '<br>');
	var alertLayer = '<div class="layerAlert"><div class="inner"><p class="txt">'+reTxt+'</p><button type="button" class="btnBk size32">확인</button></div></div>';

	if($('.layerAlert').length > 0) $('.layerAlert').remove();
	body.append(alertLayer);
	var alertWrap = $('.layerAlert');
	var btnClose = alertWrap.find('.btnBk');
	btnClose.focus().off().on('click', function(){alertWrap.remove()});
}
var lconfirm = function(txt, trueBack, falseBack) {
	var body = $('body');
	var reTxt = txt.replace(/(\n|\r\n)/g, '<br>');
	var alertLayer = '<div class="layerAlert confirmType"><div class="inner"><p class="txt">'+reTxt+'</p><span class="btns"><button type="button" class="btnWt">취소</button><button type="button" class="btnBk">확인</button></span></div></div>';
	if($('.layerAlert').length > 0) $('.layerAlert').remove();
	body.append(alertLayer);

	var alertWrap = $('.layerAlert');
	
	$('.layerAlert .btnBk').on('click', function(){
		if(typeof trueBack != 'undefined' && trueBack){
			if(typeof trueBack == 'function'){
				trueBack();
			} else {
				if(trueBack) { eval( trueBack ); }
			}
		}
		alertWrap.remove();
	});
	$('.layerAlert .btnWt').on('click', function(){
		if(typeof falseBack != 'undefined' && falseBack){
			if(typeof falseBack == 'function'){
				falseBack();
			} else {
				if(falseBack) { eval( falseBack ); }
			}
		}
		alertWrap.remove();
	});
}


// 토글
var uiToggle = {
	init:function(){
		$(window).on("load", this.using);
		this.set();
	},
	set:function(){
		$(".uiToggle .cBox").hide();
		$(".uiToggle.open .cBox").show();
	},
	using:function(){
		$(document).on("click", ".uiToggle .hBox .btTog", function() {
			var $pnt = $(this).closest(".uiToggle");
			if ($pnt.children(".cBox").is(":visible")) {
				$pnt.children(".cBox").slideUp(400);
				$pnt.removeClass("open");
			} else {
				$pnt.addClass("open").children(".cBox").slideDown(400);
			}
		});
	}
}

/* 메인 동영상 플레이 */
var vodPlay = function() {
	var target = event.currentTarget || event.srcElement;
	btnPlay = $(target);
	btnPlay.fadeOut(1000);
	if($('#youtubePlayer').length) {
		youtubePlayer.playVideo();
	} else {
		var vod = document.querySelector('#videoPlayer');
		vod.play();
		vod.addEventListener('ended', function(){
			btnPlay.fadeIn(1000);
		});
	}
}

$(document).ready(function(){ 	uiToggle.init();  });
/* 리뷰 포인트 선택 */
var pointAct = function(obj) {
	var $this = $(obj);
	var idx = $this.parent().index() + 1;
	var pointWrap = $this.closest('.pointSel').find('div');
	pointWrap.attr('class','').addClass('pointSel'+idx);
}

/* 앱다운로드 */
// 2019.11.11 as-is에 있던 함수 그대로 사용
// url 수정 필요
function appDownLoad() {
	var url
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
	{
		url = "https://itunes.apple.com/kr/app/id575465818?mt=8";
	}
	else if( userAgent.match( /Android/i ) )
	{
		url = "market://details?id=com.appsphere.innisfreeapp";
	}

	/*if (/android/i.test(userAgent)) {
        url = "market://details?id=com.appsphere.innisfreeapp";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        url = "https://itunes.apple.com/kr/app/id575465818?mt=8";
    }*/

	location.href = url;
}

/* appLink */
var appLink = function(link){
	if (navigator.userAgent.indexOf("inniMemAppAnd") > -1 || navigator.userAgent.indexOf("inniMemAppIOS") > -1 ) {//앱유저만
		location.href = "Innimemapp://"+link;
	}
}

/* 네임별 셀렉트박스 동기화 */
var selChange = function(nameOut, valIn) {
	$('input[name="'+nameOut+'"]').each(function(){
		var $this = $(this);
		$this.prop('checked', false);
		if($this.val() == valIn) {
			outTxt = $this.next('label').text();
			$this.next('label').trigger('click').closest('.selectArea').find('.selTit').text(outTxt);
		}
	});
}


$(document).on('click','.pdtQty', function(){
	keyChk(this);
});
function keyChk(_this) {
	_this.addEventListener('keyup', function(){
		var ke = ['@','&','(',')','$'];
		if(ke.indexOf(event.key) < 0 && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
			return;
		} else {
			_this.value = _this.value.replace(/[^0-9]/g,'');
		}
	});
}

/* 파라미터 체크 */
function getUrlParams() {
	var params = {}
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value });
	return params;
}

//스크롤 이동
var scrollMov = function(id) {
	var objTop = $(id).offset().top;
	$(window).scrollTop(objTop - $('.headerInner').height());
}

//디바이스체크 Pc = 0, Tablet = 1, Mobile = 2
_Device={};_Device.smartphone=false;_Device.tablet=false;_Device.type=0;_Device.os=0;function checkDevice(){if(navigator.userAgent.match(/Android/)!=null){if(navigator.userAgent.match(/mobile|Mobile/)!=null){_Device.type=2}else{_Device.type=1}_Device.os=0}else{var minSiteWidth=480;var maxSiteWidth=1024;var w=($(window).width()<window.screen.width)?$(window).width():window.screen.width;if(navigator.userAgent.match(/iPhone|iPad|iPod/)!=null){_Device.os=1}else{_Device.os=2}if(navigator.userAgent.match(/webOS|iPhone|iPad|iPod|BlackBerry/)!=null){if(w<=minSiteWidth||(navigator.userAgent.match(/iPhone|iPod|BlackBerry/)!=null&&navigator.platform.match(/iPad/)==null)){_Device.type=2}else{_Device.type=1}}else{_Device.type=0}}if(_Device.type==2){_Device.tablet=false;_Device.smartphone=true}else if(_Device.type==1){_Device.tablet=true;_Device.smartphone=false}else{_Device.smartphone=_Device.tablet=false}}_Browser={};function browserDetect(){_Browser.ie6=false;_Browser.ie7=false;_Browser.ie8=false;_Browser.ie9=false;_Browser.ie10=false;_Browser.ie11_over=false;_Browser.msie=false;_Browser.mozilla=false;_Browser.safari=false;_Browser.chrome=false;_Browser.version=0;_Browser.name="etc";var objappVersion=navigator.appVersion;var objAgent=navigator.userAgent;var objbrowserName=navigator.appName;var objfullVersion=''+parseFloat(navigator.appVersion);var objBrMajorVersion=parseInt(navigator.appVersion,10);var objOffsetName,objOffsetVersion,ix;var iev=0;var ieold=(/MSIE (\d+\.\d+);/.test(navigator.userAgent));var trident=!!navigator.userAgent.match(/Trident\/7.0/);var rv=navigator.userAgent.indexOf("rv:11.0");if(ieold)iev=new Number(RegExp.$1);if(navigator.appVersion.indexOf("MSIE 10")!=-1)iev=10;if(trident&&rv!=-1)iev=11;if(iev!=0||(objOffsetVersion=objAgent.indexOf("MSIE"))!=-1){_Browser.name="Microsoft Internet Explorer";_Browser.msie=true;_Browser.version=iev;if(_Browser.version<7){_Browser.ie6=true}else if(_Browser.version<8){_Browser.ie7=true}else if(_Browser.version<9){_Browser.ie8=true}else if(_Browser.version<10){_Browser.ie9=true}else if(_Browser.version<11){_Browser.ie10=true}else{_Browser.ie11_over=true}}else{if((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1){_Browser.chrome=true;objbrowserName="Chrome";objfullVersion=objAgent.substring(objOffsetVersion+7)}else if((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1){_Browser.mozilla=true;objbrowserName="Firefox"}else if((objOffsetVersion=objAgent.indexOf("Safari"))!=-1){_Browser.safari=true;objbrowserName="Safari";objfullVersion=objAgent.substring(objOffsetVersion+7);if((objOffsetVersion=objAgent.indexOf("Version"))!=-1)objfullVersion=objAgent.substring(objOffsetVersion+8)}else if((objOffsetName=objAgent.lastIndexOf(' ')+1)<(objOffsetVersion=objAgent.lastIndexOf('/'))){objbrowserName=objAgent.substring(objOffsetName,objOffsetVersion);objfullVersion=objAgent.substring(objOffsetVersion+1);if(objbrowserName.toLowerCase()==objbrowserName.toUpperCase()){objbrowserName=navigator.appName}}if((ix=objfullVersion.indexOf(";"))!=-1)objfullVersion=objfullVersion.substring(0,ix);if((ix=objfullVersion.indexOf(" "))!=-1)objfullVersion=objfullVersion.substring(0,ix);objBrMajorVersion=parseInt(''+objfullVersion,10);if(isNaN(objBrMajorVersion)){objfullVersion=''+parseFloat(navigator.appVersion);objBrMajorVersion=parseInt(navigator.appVersion,10)}_Browser.name=objbrowserName;_Browser.version=objBrMajorVersion}}checkDevice();browserDetect();

/* 제품상세 - 세로정렬 ; 20200106추가 */
$(function(){
	//$('.pdtViewMobile').imagesLoaded( function() {
		vCenter();
	//});
});

$(window).resize(function(){
	vCenter();
});

function vCenter(){
	$('.vCenter').each(function(){
		$(this).css({marginTop : -$(this).height()/2, top : '50%'});
	});
}