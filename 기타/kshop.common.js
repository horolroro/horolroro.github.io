/* common.js */
var MCFront = {
	gb: {
		detailHelpBox: true,
		scTop: 0,
		hash: null,
		lock: true,
		lockCnt: 0,
		appClass: 'app',
		appAdd: 0,
		hash: null,
		swiper: {
			index: null,
			slide: null
		}
	},
	init: function(options) {
		var opt = {
			scroll: null,
			moveEvt: true,
			tabs: false
		}
		opt = $.extend(true, opt, options);

		this.scroll(opt.scroll);
		if (opt.moveEvt) this.moveEvt();
		if (opt.tabs) this.tabs();

		function fn_open() {
			MCFront.lock(true);
		}

		function fn_close() {
			MCFront.lock();
		}

		$('#header .btnAllMenu a, .actionBar .btnMenu a').on('click', function() {
			$('body').addClass('menuOpen');
			fn_open();
			return false;
		});

		$('#header .btnMenuClose').on('click', function() {
			$('body').removeClass('menuOpen');
			fn_close();
			return false;
		});

		$('#allMenu .btnSetting').on('click', function() {
			$('body').addClass('settingOpen');
			return false;
		});

		$('#pop_setting .popSetClose').on('click', function() {
			$('body').removeClass('menuOpen settingOpen');
			fn_close();
		});

		/*$('#header .allMenu').on('click', function(e) {
			if (e.target.className == 'allMenu') {
				$('body').removeClass('menuOpen');
				fn_close();
			}
		});*/

		$('#btnTop').on('click', function() {
			$(window).scrollTop(0);
			return false;
		});

		if ($('.rightPanel').length > 0) { // 理쒓렐 蹂� �곹뭹
			$(document).on("click", ".rightPanel .btnClose, .rightPanel .cateDimm", function() {
		        $(".rightPanel").removeClass("on");
		        fn_close();
		        return false;
		    });

		    $(document).on("click", ".recentView, .actionBar .btnRecent", function() {
		        $(".rightPanel").addClass("on");
				fn_open();
		        return false;
		    });
		}
	},
	scroll: function(cbfunc) {
		var _this = this;
		$(window).scroll(function(e) {
			var winH = $(window).height(),
				scrollT = $(window).scrollTop(),
				scrollH = $(document).height(),
				scrollPo = winH + scrollT;

			_this.scrollIng(scrollT);
			// if (winH >= scrollH) $('body').addClass('scrollNone');
			// else $('body').removeClass('scrollNone');

			if ((scrollH - scrollPo) <= 1 && scrollH != scrollPo) {
				_this.scrollBot();
				$('body').addClass('scrollEnd');
			} else {
				$('body').removeClass('scrollEnd');
			}

			if (typeof(cbfunc) == 'function') {
				if (MCFront.gb.lockCnt > 0) return;

				cbfunc(scrollT);
			} else {

			}
		});
		$(window).scroll();
	},
	scrollIng: function(scrollTop) {
		scrollTop > 0 ? $('body').addClass('scrollIng') : $('body').removeClass('scrollIng');
	},
	scrollBot: function() {

	},
	moveEvt: function() {
		var _this = this,
			scrollTop = $(window).scrollTop(),
			range = 10;

		/*$(window).on('mousewheel DOMMouseScroll', function(e) {
			var	eventObject = e.originalEvent,
				wheelDelta = eventObject.wheelDelta / 120,
				direction;

			if (eventObject.detail) wheelDelta = eventObject.detail / -3;
			direction = (wheelDelta < 0) ? 'down' : 'up';
			_this.moveDirectionEvt(direction);
		});*/

		$(window).scroll(function() {
			var scrollT = $(window).scrollTop();
			if (scrollT > scrollTop + range) {
				scrollTop = scrollT;
				_this.moveDirectionEvt('down');
			}
			if (scrollT < scrollTop - range) {
				scrollTop = scrollT;
				_this.moveDirectionEvt('up');
			}
		});

		/*$(window).on('touchmove', function(e) {
			console.log(e);
			$('#pop_bcAlarmReg h1').text(e.target.className.indexOf('popWrap'));
			if (e.target.className.indexOf('popWrap') == 0) {
				$('#pop_bcAlarmReg h1').text('2');
				return false;
			}
		});*/

		/*var touchY,
			touchDirection;
		$(window).on('touchstart', function(e) {
			var event = e.originalEvent;
			//touchX = event.touches[0].screenX;
			touchY = event.touches[0].screenY;
			//$('.menuNav li').eq(1).html(touchY);
		}).on('touchmove', function(e) {
			var event = e.originalEvent;
			if (touchY > event.touches[0].screenY) {touchDirection = 'down';}
			if (touchY < event.touches[0].screenY) {touchDirection = 'up';}
			//$('.menuNav li').eq(0).html(touchDirection);
		}).on('touchend', function(e) {
			//console.log('touchEnd : ' + touchDirection);
			//$('h1').html(touchDirection);
			_this.moveDirectionEvt(touchDirection);
		});*/
	},
	moveDirectionEvt: function(direction) {
		if (direction == undefined) return;

		var _this = this;
		//console.log('direction : ' + direction);
		//console.log('scrollView : ' + _this.scrollView());
		if (_this.scrollView()) {
			if (direction == 'up') {$('body').addClass('moveUp').removeClass('moveDown');}
			else {$('body').addClass('moveDown').removeClass('moveUp');}
		}
	},
	scrollView: function() {
		return $(window).height() < $(document).height() ? true : false
	},
	mainSwiper: function(cbfunc, stIdx) {
		var _this = this;
		var stIdx = stIdx || 0, // 泥섏쓬 蹂댁뿬以� �붾㈃
			durationSpeed = 300, // �대룞�띾룄
			menuTarget = '.menuNav',
			conTarget = '.mainCon',
			_this = this;

		var menuSwiper = new Swiper(menuTarget, {
			initialSlide: stIdx,
			slidesPerView: 'auto',
			centeredSlides: true,
			freeMode: true,
			on: {
				init: function() {
					//setMenuEvt(this);
					_this.swiperCenter(this);
				},
				resize: function() {
					//setMenuEvt(this);
					_this.swiperCenter(this);
				}
			}
		});

		function setMenuEvt(obj) {
			var max = obj.virtualSize - obj.width;
			for (var i in obj.snapGrid) {
				var n = obj.snapGrid[i];
				if (n < 0) obj.snapGrid[i] = 0;
				if (n > max) obj.snapGrid[i] = max;
			}
		}

		// https://swipe.js.org/
		var conSwiper = Swipe($(conTarget)[0],{
	        startSlide: stIdx,
			//auto: 3000,
			//draggable: false,
			//autoRestart: false,
			//continuous: true,
			//disableScroll: true,
			//stopPropagation: true,
			move: function(event) { // swipe.js瑜� Customizing �� �듭뀡.
				// console.log('move');
				bcListMapW('move');
			},
			transitionEnd: function(index, element) {
				//console.log('transitionEnd');
				bcListMapW('transitionEnd');
				_this.gb.swiper.index = index;
				conSwiper.update();
			},
			callback: function(index, element) {
				//console.log('callback');
				menuSwiper.slideTo(index, 0);
				setMenuClass(index);
			},
	    });

	    conSwiper.update = function () {
	    	var idx = (_this.gb.swiper.index == null) ? stIdx : _this.gb.swiper.index, // 20190926 �섏젙
	    		conWrapper = $('> .swiper-wrapper', conTarget),
	    		conSlide = $('> .swiper-slide', conWrapper);

	    	conWrapper.height('auto');
	    	var h = conSlide.eq(idx).height();
	    	conWrapper.height(h);
	    }

	    conSwiper.update();
	    menuSwiper.slideTo(stIdx, 0);
	    setMenuClass(stIdx);

		_this.gb.conSwiper = conSwiper;

		var moveTrue = false;
		// �몄꽦�� �대깽��
		function bcListMapW(type) {
			var $bcListMapW = $('.bcListMapW'),
				$bcListMap = $('.bcListMap', $bcListMapW),
				$cloneBcListMap = $('.cloneBcListMap'),

				$bcListDateW = $('.bcListDateW'),
				$bcListTop = $('.bcListTop', $bcListDateW),
				$cloneBcListDateW = $('.cloneDateNavW');

			var app = $('html').hasClass(_this.gb.appClass) ? true : false;
			var map01 = 114,
				//map02 = app ? 74 : 110,
				map02 = app ? 114 : 110,
				date01 = 0,
				//date02 = app ? -40 : -4;
				date02 = app ? 0 : -4;

			if (type == 'move') {
				if (!moveTrue) {
					var winT = $(window).scrollTop();

					$cloneBcListMap.css({'top' : (winT == 0) ? winT + map01 : winT + map02});
					$cloneBcListMap.empty().append($bcListMap.clone());

					$cloneBcListDateW.css({'top' : (winT == 0) ? winT + date01 : winT + date02});
					$cloneBcListDateW.empty().append($bcListTop.clone());
					moveTrue = true;
				}
				$bcListMapW.removeClass('hidden').addClass('hidden');
				$bcListDateW.removeClass('hidden').addClass('hidden');
			} else if (type == 'transitionEnd') {
				if (moveTrue) {
					$cloneBcListMap.empty();
					$bcListMapW.removeClass('hidden');

					$cloneBcListDateW.empty();
					$bcListDateW.removeClass('hidden');
					moveTrue = false;
				}
			} else {
			}
		}

		$('a', menuSwiper.slides).on('click', function() {
			var $selectMenu = $(this).parent();

			if ($selectMenu.hasClass('on')) return false;

			var idx = $selectMenu.index();

			bcListMapW('move');
			conSwiper.slide(idx, durationSpeed);
			menuSwiper.slideTo(idx);
		});

		$('.actionBar .btnHome a').on('click', function() {
			$('.menuNav li.home a').click();
			return false;
		});

		function setMenuClass(idx) {
			$(menuSwiper.slides).eq(idx).addClass('on').siblings().removeClass('on');
			$(window).scrollTop(_this.swiperTop());
			var hash = $('a', menuSwiper.slides).eq(idx).attr('href');

			if (_this.gb.hash != hash) {
				_this.gb.hash = hash;
				location.href = hash;
				cbfunc(hash);
			}
			//stIdx = null;
		}
	},
	swiperCenter: function(obj) {
		//console.log('swiperCenter : ' + obj);
		var max = obj.virtualSize - obj.width;
		for (var i in obj.snapGrid) {
			var n = obj.snapGrid[i];
			if (n < 0) obj.snapGrid[i] = 0;
			if (n > max) obj.snapGrid[i] = max;
		}
	},
	swiperTop: function() {
		return 0;
	},
	tabSwiper: function(cbfunc, stIdx) {
		var stIdx = stIdx || 0, // 泥섏쓬 蹂댁뿬以� �붾㈃
			durationSpeed = 300, // �대룞�띾룄
			tabMenu = '.tabMenu li',
			tabTarget = '.tabCon',
			_this = this;

		var tabSwiper = new Swiper(tabTarget, {
			slidesPerView: 1,
			initialSlide: stIdx,
			autoHeight: true,
			loop: true,
			on: {
				init: function() {
				},
				slideChange: function() {
					if(!$(tabMenu).eq(this.realIndex).hasClass('on')) setMenuClass(this.realIndex);
				}
			}
		});
		_this.gb.tabSwiper = tabSwiper;

		$('a', tabMenu).on('click', function() {
			var $selectMenu = $(this).parent();

			if ($selectMenu.hasClass('on')) return false;

			var idx = $selectMenu.index(),
				$cu = $(tabSwiper.slides).eq(tabSwiper.realIndex + 1),
				$target = $(tabSwiper.slides).eq(idx + 1),
				$targetPrev = $target.prev(),
				width = tabSwiper.width;

			$(tabSwiper.$wrapperEl).css('transition-duration', durationSpeed + 'ms');

			if (tabSwiper.realIndex < idx) {
				$cu.after($target);
				width = -width;
			} else {
				$cu.before($target);
			}

			tabSwiper.setTranslate(tabSwiper.getTranslate() + width);

			setMenuClass(idx);
			setTimeout(function() {
				$targetPrev.after($target);
				tabSwiper.slideTo(idx + 1, 0);
			}, durationSpeed);

			return false;
		});

		function setMenuClass(idx) {
			$(tabMenu).eq(idx).addClass('on').siblings().removeClass('on');
			$(window).scrollTop(_this.swiperTop());
			var hash = $('a', tabMenu).eq(idx).attr('href');

			//_this.gb.hash = hash;
			//location.href = hash;
			cbfunc(hash);
			stIdx = null;
		}
	},
	optAreaEvt: function($obj, $wrap, minH) {
		var touchY, wrapH;

		$obj.on('touchstart',function(e) {
		    var event = e.originalEvent;

		    touchY = event.touches[0].screenY;
		    wrapH = $wrap.height();
		    //$('body').addClass('scrollHidden');

		}).on('touchmove',function(e) {
		    var event = e.originalEvent;

		    var addH = touchY - event.touches[0].screenY + wrapH,
		    	maxH = $(window).height() - $('#header').height() - 0;

		    if (addH > maxH) addH = maxH
		    $wrap.height((addH <= minH) ? minH : addH);
		    return false;
		}).on('touchend',function(e) {
		    //$('body').removeClass('scrollHidden');
		});

		$obj.on('click', function() {
	        $('.detailActionBar').removeClass('open');
			MCFront.lock();
	    });

		var maxH = $(window).height() - $('#header').height() - 0;
		if ($wrap.height() > maxH)  $wrap.height(maxH);
	},
	optAreaEvt2: function($obj, $wrap, minH) {
		var touchY, wrapH;

		$obj.on('touchstart',function(e) {
		    var event = e.originalEvent;

		    touchY = event.touches[0].screenY;
		    wrapH = $wrap.height();
		    //$('body').addClass('scrollHidden');

		}).on('touchmove',function(e) {
		    var event = e.originalEvent;

		    var addH = touchY - event.touches[0].screenY + wrapH,
		    	maxH = $(window).height() - $('#header').height() - 170;

		    if (addH > maxH) addH = maxH
		    $wrap.height((addH <= minH) ? minH : addH);
		    return false;
		}).on('touchend',function(e) {
		    //$('body').removeClass('scrollHidden');
		});

		$obj.on('click', function() {
	        $('.detailActionBar').removeClass('open');
			MCFront.lock();
	    });

		var maxH = $(window).height() - $('#header').height() - 170;
		if ($wrap.height() > maxH)  $wrap.height(maxH);
	},
	tabs: function(idx, targetList, cbfunc, cbFuncRun) {
		void 0;

		var idx = idx || 0,
			targetList = targetList || '.tabTlt';

		var returnObj = {
			'idx' : idx,
			'targetList' : targetList,
			'clickId' : null
		}

		$('li a', targetList).off('click').on('click', function() {
			var $parent = $(this).parent();
			if ($parent.hasClass('on')) return false;

			var id = $(this).attr('href');
			$parent.addClass('on').siblings().removeClass('on');
			$(id).show().siblings().hide();

			returnObj.idx = $parent.index();
			returnObj.clickObj = $(this);
			returnObj.clickId = id;

			if (typeof(cbfunc) == 'function') callback();

			return false;
		});

		var idxId = $('li', targetList).eq(idx).find('a').attr('href');
		$('li', targetList).eq(idx).addClass('on').siblings().removeClass('on');
		$(idxId).show().siblings().hide();

		returnObj.clickId = idxId;
		if (typeof(cbfunc) == 'function' && cbFuncRun) callback();

		function callback() {
			cbfunc(returnObj);
		}
	},
	popup: {
		zIndex: 1001,
		open: function(target, close, cbfunc, closeFunc) {
			void 0;

			var _this = this,
				effect = $(target).data('effect');

			$(target).css('z-index', _this.zIndex++);

			if (effect == 'fade') {$(target).fadeIn();}
			else {$(target).show();}

			MCFront.lock(true);

			if (!$(target).hasClass('fullPopW')) _this.autoHeight(target);

			if (close == undefined || close) {
				$('.popClose', target).off('click').on('click', function() {
					if (typeof(closeFunc) == 'function') closeFunc();
					_this.close(target);
					return false;
				});
			}
			if (typeof(cbfunc) == 'function') {
				$('.btnConfirm', target).off('click').on('click', function() {
					cbfunc();
				});
			}
			return false;
		},
		close: function(target) {
			void 0;
			$(target).hide();
			$('.inner', target).removeAttr('style');
			MCFront.lock();
		},
		autoHeight: function(target) {
			var maxH = $(window).height() - 80,
				height = $(target).data('height'),
				targetH = (height == undefined) ? $('.inner', target).outerHeight() : height;

			if (targetH >= maxH) targetH = maxH;
			$('.inner', target).css({
				'height' : targetH,
				'margin-top' : -(targetH / 2)
			});
		}
	},
	lock: function(lock) {
		if (MCFront.gb.lock) {
			var _this = this,
				winTop = $(window).scrollTop();

			if (lock) {
				MCFront.gb.lockCnt++;
				if (MCFront.gb.lockCnt > 1) return;

				_this.gb.scTop = winTop;
				$('html').addClass(winTop > 0 ? 'scIngHidden' : 'scHidden');
				$('body').addClass('scrollHidden');
				$('#contents, #footer').css('top', -winTop);
			} else {
				MCFront.gb.lockCnt--;
				if (MCFront.gb.lockCnt > 0) return;

				$('html').removeClass('scHidden scIngHidden');
				$('body').removeClass('scrollHidden');
				$('#contents, #footer').css('top', 0);
				$(window).scrollTop(_this.gb.scTop);
			}
		} else {
			if (lock) $('body').addClass('scrollHidden');
			else $('body').removeClass('scrollHidden');
		}
	},
	hidden: function() {
		MCFront.lock(true);
	},
	select: function($target, addClass) {
		var $sel = $target.selectmenu();
		if (addClass != undefined) {
			$sel.each(function() {
				$(this).selectmenu('menuWidget').addClass(addClass);
			});
		}
	},
	selectErr: function($target, err) {
		var errClass = 'error';
		if (err) {
			$target.next().addClass(errClass);
			$target.selectmenu('menuWidget').addClass(errClass);
		} else {
			$target.next().removeClass(errClass);
			$target.selectmenu('menuWidget').removeClass(errClass);
		}

	},
	viewType: function(obj, type) {
		if (type == 'plan') { //湲고쉷��
			var $section = $(obj).parents('.itemListW, .planDetailList'),
				_class = $section.attr('class'),
				reClass;

			/*if ($section.hasClass('unitM')) reClass = _class.replace('unitM', 'unitLI');
			else if ($section.hasClass('unitLI')) reClass = _class.replace('unitLI', 'unitM');
			else if ($section.hasClass('listL')) reClass = _class.replace('listL', 'block');
			else if ($section.hasClass('block')) reClass = _class.replace('block', 'list');
			else reClass = _class.replace('list', 'listL');*/

			if ($section.hasClass('unitM')) reClass = _class.replace('unitM', 'unitLI');
			else if ($section.hasClass('unitLI')) reClass = _class.replace('unitLI', 'unitM');
			else reClass = _class.replace('unitM', 'unitLI');

			$section.attr('class', reClass);
		} else { // 移댄뀒怨좊━
			var $section = $(obj).parents('.ctgListW, .ctgUnitW'),
				_class = $section.attr('class'),
				reClass = '';

			if ($section.hasClass('ctgListW')) {
				reClass = $section.hasClass('list') ? _class.replace('list', 'block') : _class.replace('block', 'list');
			} else {
				reClass = $section.hasClass('unitLI') ? _class.replace('unitLI', 'unitM') : _class.replace('unitM', 'unitLI');
			}

			$section.attr('class', reClass);
		}
		return false;
	},
	popScroll: function(target) {
		$(target).scroll(function() {
			if ($(this).scrollTop() > 10) $(target).addClass('popScroll');
			else  $(target).removeClass('popScroll');
		});

		$('.btnTop', target).off('click');
		$('.btnTop', target).on('click', function() {
			void 0;
			$(target).scrollTop(0);
			return false;
		});
	},
	birth: function(input, beforeStartYear, endLimitYear) {
		$(input).on('keydown', function(e) {
			var keyCode = e.which ? e.which : e.keyCode,
				key = e.key;

			//$('h1').text(keyCode +', '+ key); // TODO
			if (keyCode == 229 || keyCode == 0) $(this).blur().focus(); // �쒓� keyCode

			var selectionNum = fn_getSelection(this),
				val = this.value,
				txtMask = this.getAttribute('data-mask');

			if (keyCode == 37 || keyCode == 8) { // 諛⑺뼢�� 醫뚯륫, 諛깆뒪�섏씠��
				if (selectionNum == 0) return false;
				else if (selectionNum == 6) fn_setSelection(this, 4);
				else if (selectionNum == 10) fn_setSelection(this, 8);
				else if (selectionNum == 13) fn_setSelection(this, 12);

				if (keyCode == 8) { // 諛깆뒪�섏씠��
					selectionNum = fn_getSelection(this);
					var preStr = val.substr(0, selectionNum - 1),
						nextStr = val.substr(selectionNum),
						delMaskStr = txtMask.substr(selectionNum - 1, 1);

					var inStr = preStr + delMaskStr + nextStr;

					this.value = inStr;
					fn_setSelection(this, selectionNum - 1);
					return false;
				}
				return;
			}

			if (keyCode == 39) { // 諛⑺뼢�� �곗륫
				if (selectionNum == 3) fn_setSelection(this, 5);
				else if (selectionNum == 7) fn_setSelection(this, 9);
				else if (selectionNum == 11) fn_setSelection(this, 13);
				return;
			}

			if (keyCode == 9 || keyCode == 13 || keyCode == 116) return; // Tab, Enter, F5

			var n = parseInt(key);
			if (!isNaN(n)) {
				if (selectionNum == 4 || selectionNum == 8 || selectionNum >= 12) return false;

				var preStr = val.substr(0, selectionNum),
					nextStr = val.substr(selectionNum + 1),
					inStr = preStr + String(n) + nextStr;

				var cuDate = new Date(),
					cuYear = cuDate.getFullYear();
					beforeYear = cuYear - beforeStartYear, // 異쒖깮�꾨룄 �쒖옉
					limitYear = (endLimitYear == undefined) ? cuYear : cuYear - 13; // 異쒖깮�꾨룄 �쒗븳

				var inMonth = Number(inStr.substr(6, 2));

				if (selectionNum <= 3) { // �낅젰 �꾨룄 �쒗븳
					var inYear = parseInt(inStr),
						inYearLen = String(inYear).length,
						beforeYearStr = String(beforeYear).substr(0, inYearLen),
						limitYearStr = String(limitYear).substr(0, inYearLen);
						//cuYearStr = String(cuYear).substr(0, inYearLen);

					if (inYear < Number(beforeYearStr) || isNaN(inYear)) return false; // 異쒖깮�꾨룄 �쒖옉蹂대떎 �묒쓣 寃쎌슦
					if (inYear > Number(limitYearStr) || isNaN(inYear)) return false; // �쒗븳�꾨룄蹂대떎  �� 寃쎌슦
					//if (inYear > Number(cuYearStr) || isNaN(inYear)) return false; // �꾩옱�꾨룄蹂대떎 �� 寃쎌슦

				} else if (selectionNum == 6 && n > 1) { // �낅젰 ��
					return false;
				} else if (selectionNum == 7 && ((inMonth < 1 || inMonth > 12) || isNaN(inMonth))) { // �낅젰 ��
					return false;
				} else if (selectionNum >= 10) {
					var day = fn_getDayOfMonth(parseInt(inStr), inMonth),
						inDay = parseInt(inStr.substr(10, 2));

					if (!day) return false;

					if (selectionNum == 10 && inDay > parseInt(day / 10)) return false;
					if (selectionNum == 11 && ((inDay > day) || inDay == 0 || isNaN(inDay))) return false;
				}

				this.value = inStr;
				fn_setNext(this, selectionNum);

			}
			return false;
		}).on('click focus', function() {
			fn_setStr(this);
		});

		function fn_getDayOfMonth(year, month) {
		    return 32 - new Date(year, month - 1, 32).getDate();
		}

		function fn_setNext(obj, selectionNum) {
			if (selectionNum == 3) {fn_setSelection(obj, 6);}
			else if (selectionNum == 7) {fn_setSelection(obj, 10);}
			else if (selectionNum == 11) {fn_setSelection(obj, 13);}
			else {fn_setSelection(obj, selectionNum + 1);}

			return false;
		}

		function fn_setStr(obj) {
			var n = 0,
				txtMask = obj.getAttribute('data-mask');

			if (obj.value == "") obj.value = txtMask;

			for (var i = 0; i < txtMask.length; i++) {
				if (obj.value[i] == txtMask[i]) {
					n = i;
					if (n == 4 || n == 5 || n == 8 || n == 9 || n == 12) continue;
					fn_setSelection(obj, n);
					return;
				}
			}
		}

		function fn_setSelection(obj, n) {
			obj.selectionStart = n;
			obj.selectionEnd = n;
		}

		function fn_getSelection(obj) {
			return Math.min(obj.selectionStart, obj.selectionEnd);
		}
	},
	birth2: function(input, beforeStartYear, endLimitYear) {
		$(input).on('keydown textInput', function(e) {
			var keyCode = e.which ? e.which : e.keyCode,
				key = e.key;

			if (e.type == 'textInput') {

				keyCode = e.originalEvent.data.charCodeAt(0);
				if (keyCode < 48 || keyCode > 57 || keyCode == undefined) $(this).blur().focus();

				switch(keyCode) {
					case 48 : key = 0; break;
					case 49 : key = 1; break;
					case 50 : key = 2; break;
					case 51 : key = 3; break;
					case 52 : key = 4; break;
					case 53 : key = 5; break;
					case 54 : key = 6; break;
					case 55 : key = 7; break;
					case 56 : key = 8; break;
					case 57 : key = 9; break;
					default : break;
				}
			}

			//$('h1').text(keyCode +', '+ key); // TODO
			if (keyCode == 229 || keyCode == 0) $(this).blur().focus(); // �쒓� keyCode

			var selectionNum = fn_getSelection(this),
				val = this.value,
				txtMask = this.getAttribute('data-mask');

			if (keyCode == 37 || keyCode == 8) { // 諛⑺뼢�� 醫뚯륫, 諛깆뒪�섏씠��
				if (selectionNum == 0) return false;
				else if (selectionNum == 6) fn_setSelection(this, 4);
				else if (selectionNum == 10) fn_setSelection(this, 8);
				else if (selectionNum == 13) fn_setSelection(this, 12);

				if (keyCode == 8) { // 諛깆뒪�섏씠��
					selectionNum = fn_getSelection(this);
					var preStr = val.substr(0, selectionNum - 1),
						nextStr = val.substr(selectionNum),
						delMaskStr = txtMask.substr(selectionNum - 1, 1);

					var inStr = preStr + delMaskStr + nextStr;

					this.value = inStr;
					fn_setSelection(this, selectionNum - 1);
					return false;
				}
				return;
			}

			if (keyCode == 39) { // 諛⑺뼢�� �곗륫
				if (selectionNum == 3) fn_setSelection(this, 5);
				else if (selectionNum == 7) fn_setSelection(this, 9);
				else if (selectionNum == 11) fn_setSelection(this, 13);
				return;
			}

			if (keyCode == 9 || keyCode == 13 || keyCode == 116) return; // Tab, Enter, F5

			var n = parseInt(key);
			if (!isNaN(n)) {
				if (selectionNum == 4 || selectionNum == 8 || selectionNum >= 12) return false;

				var preStr = val.substr(0, selectionNum),
					nextStr = val.substr(selectionNum + 1),
					inStr = preStr + String(n) + nextStr;

				var cuDate = new Date(),
					cuYear = cuDate.getFullYear();
					beforeYear = cuYear - beforeStartYear, // 異쒖깮�꾨룄 �쒖옉
					limitYear = (endLimitYear == undefined) ? cuYear : cuYear - 13; // 異쒖깮�꾨룄 �쒗븳

				var inMonth = Number(inStr.substr(6, 2));

				if (selectionNum <= 3) { // �낅젰 �꾨룄 �쒗븳
					var inYear = parseInt(inStr),
						inYearLen = String(inYear).length,
						beforeYearStr = String(beforeYear).substr(0, inYearLen),
						limitYearStr = String(limitYear).substr(0, inYearLen);
						//cuYearStr = String(cuYear).substr(0, inYearLen);

					if (inYear < Number(beforeYearStr) || isNaN(inYear)) return false; // 異쒖깮�꾨룄 �쒖옉蹂대떎 �묒쓣 寃쎌슦
					if (inYear > Number(limitYearStr) || isNaN(inYear)) return false; // �쒗븳�꾨룄蹂대떎  �� 寃쎌슦
					//if (inYear > Number(cuYearStr) || isNaN(inYear)) return false; // �꾩옱�꾨룄蹂대떎 �� 寃쎌슦

				} else if (selectionNum == 6 && n > 1) { // �낅젰 ��
					return false;
				} else if (selectionNum == 7 && ((inMonth < 1 || inMonth > 12) || isNaN(inMonth))) { // �낅젰 ��
					return false;
				} else if (selectionNum >= 10) {
					var day = fn_getDayOfMonth(parseInt(inStr), inMonth),
						inDay = parseInt(inStr.substr(10, 2));

					if (!day) return false;

					if (selectionNum == 10 && inDay > parseInt(day / 10)) return false;
					if (selectionNum == 11 && ((inDay > day) || inDay == 0 || isNaN(inDay))) return false;
				}

				this.value = inStr;
				fn_setNext(this, selectionNum);

			}
			return false;
		}).on('click focus', function() {
			fn_setStr(this);
		});

		function fn_getDayOfMonth(year, month) {
		    return 32 - new Date(year, month - 1, 32).getDate();
		}

		function fn_setNext(obj, selectionNum) {
			if (selectionNum == 3) {fn_setSelection(obj, 6);}
			else if (selectionNum == 7) {fn_setSelection(obj, 10);}
			else if (selectionNum == 11) {fn_setSelection(obj, 13);}
			else {fn_setSelection(obj, selectionNum + 1);}

			return false;
		}

		function fn_setStr(obj) {
			var n = 0,
				txtMask = obj.getAttribute('data-mask');

			if (obj.value == "") obj.value = txtMask;

			for (var i = 0; i < txtMask.length; i++) {
				if (obj.value[i] == txtMask[i]) {
					n = i;
					if (n == 4 || n == 5 || n == 8 || n == 9 || n == 12) continue;
					fn_setSelection(obj, n);
					return;
				}
			}
		}

		function fn_setSelection(obj, n) {
			obj.selectionStart = n;
			obj.selectionEnd = n;
		}

		function fn_getSelection(obj) {
			return Math.min(obj.selectionStart, obj.selectionEnd);
		}
	},
	setScore: function($obj) {
		var wrapW = $obj.width(), wrapL = ($(window).width() - wrapW) / 2;

		if ($obj.prevObject[0].ontouchstart == undefined) {
			$obj.on('click',function(e) {
		        var event = e.originalEvent;
		        var clickX = event.clientX;
		        fn_setScroe(clickX);
		    });
		}

	    $obj.on('touchstart',function(e) {
	        var event = e.originalEvent;
	        var touchX = event.touches[0].clientX;
	        fn_setScroe(touchX);

	    }).on('touchmove',function(e) {
	        var event = e.originalEvent;
	        var moveX = event.touches[0].clientX;
	        fn_setScroe(moveX);
	    }).on('touchend',function(e) {
	    });

	    function fn_setScroe(scoreX) {
	        var w = (scoreX - wrapL) / wrapW,
	        	n = Math.ceil(w * 10);

	        if (n > 10) n = 10;
	        if (n < 0) n = 0;
	        var setClass = 'star' + n;
	        $('span', $obj).attr('class', setClass).attr('data-score', n * 10);
	    }
	},
	bgTop: function() {
		$('.ordItems .ordDetailW > li').each(function() {
	        var bg = $('<span class="bgTop">'),
	            h = $('.prodInfo', this).eq(0).height();

	        var add = ($('.groupPrd', this).length > 0) ? 50 : 30;

	        bg.height(h + add);
	        $(this).prepend(bg);
	    });
	}
}
// ���됲듃諛뺤뒪
//MCFront.select($('.selectUI .cntSel'), 'cntSel'); // target, ���됲듃硫붾돱 由ъ뒪�몄뿉 class 異붽�


// �대�吏� ���됲듃諛뺤뒪 而ㅼ뒪��
$.widget('custom.imgSelectmenu', $.ui.selectmenu, {
    _renderItem: function(ul, item) {
        var li = $("<li>"),
            wrapper = $("<div>");

        if (item.disabled) {li.addClass("ui-state-disabled");}

        if (item.element.attr('data-default')) { // �꾩껜 �좏깮
            wrapper.addClass('defaultTxt');
            var $default = $('<p>', {
                text : item.label
            }).appendTo(wrapper);

        } else {
            var $img = $('<div>', {class: 'img'});
            $('<img>', {
                src: item.element.attr('data-img')
            }).appendTo($img);

            if (item.element.attr('data-soldout')){ // 留ㅼ쭊�� 寃쎌슦 �띿뒪�� 異붽�
                $('<span>',{
                    text: '留ㅼ쭊',
                    class: 'end'
                }).appendTo($img);
            }

            var $dl = $('<dl>');
            var $dt = $('<dt>', {
                html: '<strong>' + item.element.attr('data-numTxt') + '</strong> ' + item.label
            }).appendTo($dl);


            if (item.element.attr('data-price') != undefined) {
                $('<dd>', {
                    html: '<strong>' + item.element.attr('data-price') + '</strong>��'
                }).appendTo($dl);
            }

             /*   star10 : 90 ~ 100
                star9 : 80 ~ 89
                star8 : 70 ~ 79
                star7 : 60 ~ 69
                star6 : 50 ~ 59
                star5 : 40 ~ 49
                star4 : 30 ~ 39
                star3 : 20 ~ 29
                star2 : 10 ~ 19`
                star1 : 1 ~ 9*/
            //<div class="score"><p class="starScore"><span class="star7">�됱젏 98��</span></p> <strong>1,022</strong></div>

            if (item.element.attr('data-score') != undefined) {
                var score = parseInt(item.element.attr('data-score'));

                if (score == 0) score = 0;
                else if (score == 100) score = 10;
                else score = parseInt(score / 10) + 1;

                $('<dd>', {
                    html: '<div class="score"><p class="starScore"><span class="star' + score + '">�됱젏 ' + item.element.attr('data-score') + '��</span></p> <strong>' + item.element.attr('data-review') + '</strong></div>'
                }).appendTo($dl);
            }

            $img.appendTo(wrapper);
            $dl.appendTo(wrapper);

            item.label = item.element.attr('data-numTxt') + ' ' + item.label;
        }

        return li.append(wrapper).appendTo(ul);
    }
});

MCFront.gb.selectOpen = false;

// �대�吏� ���됲듃 open �대깽��
function fn_purchaseList(obj, type) {
    var $purchaseSelect = $(obj).parents('.purchaseSelect'),
        $imgSelect = $('.imgSelect', $purchaseSelect);

    $purchaseSelect.toggleClass('on');

    if ($purchaseSelect.hasClass('on') && !MCFront.gb.selectOpen) {
        $('body').addClass('scrollHidden');
        $imgSelect.imgSelectmenu('open');

        var $tabWrap = $(obj).parents('.tabWrap');
        if ($tabWrap.length > 0) {
            tabTop = $tabWrap.offset().top - $('#header').height();
            $(window).scrollTop(tabTop);
        }

        $(window).scroll(function() {
            if (MCFront.gb.selectOpen) {
                $imgSelect.imgSelectmenu('close');
                MCFront.gb.selectOpen = false;
            }
        });
        //MCFront.gb.selectOpen = true;
        setTimeout(function() {MCFront.gb.selectOpen = true;}, 1);
    } else {
        $('body').removeClass('scrollHidden');
        $purchaseSelect.removeClass('on');
        MCFront.gb.selectOpen = false;
    }
    return false;
}

// ���됲듃諛뺤뒪 泥댁씤吏� �대깽��
function fn_purchaseChange(event, ui) {
	fn_purchaseDraw($(event.target), event.currentTarget.innerHTML);

    /*var $purchaseSelect = $(event.target).parents('.purchaseSelect');
    $('a', $purchaseSelect).html(event.currentTarget.innerHTML);
    $('.ui-menu-item-wrapper', $purchaseSelect).removeAttr('id').removeClass('ui-state-active');*/
}

// ���됲듃 諛뺤뒪 close �대깽��
function fn_purchaseClose() {
    $('body').removeClass('scrollHidden');
    $('.purchaseItem').parent().removeClass('on');
    setTimeout(function() {MCFront.gb.selectOpen = false;}, 1);
}

// ���됲듃 諛뺤뒪 refresh �대깽��
function fn_purchaseSet($imgSelect, value, refresh) {
    var menuWidget = $imgSelect.imgSelectmenu("menuWidget"),
        childNodes = menuWidget[0].childNodes,
        idx = 0;

    if (childNodes.length == 0 || refresh) {
    	if (refresh) $imgSelect.imgSelectmenu('refresh');
        $imgSelect.imgSelectmenu('open').imgSelectmenu('close');
    }

    if (value != null) {
        $imgSelect.val(value).prop('selected', true);
        idx = $('option:selected', $imgSelect).index();
        $imgSelect.imgSelectmenu('refresh');
    }

    fn_purchaseDraw($imgSelect, childNodes[idx].innerHTML);
}

// ���됲듃諛뺤뒪 html draw
function fn_purchaseDraw($imgSelect, html) {
	var $purchaseSelect = $imgSelect.parents('.purchaseSelect');
    $('a', $purchaseSelect).html(html);
    $('.ui-menu-item-wrapper', $purchaseSelect).removeAttr('id').removeClass('ui-state-active');
}

// URL �뚮씪誘명꽣 媛��몄삤湲�
function fn_getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (results == null)
        return "";
    else
        return results[2];
}

function fn_cpnDownload(cpnId, intgEventId, appUseYn) {
	if (cpnId == '' || intgEventId == '') {
		return;
	}
	
	var isApp = (typeof appSchemExe !== "undefined") ? true : false;
	if(appUseYn == "Y") {
		if(!isApp) {
			
			if(confirm('K�쇳븨 App�� �듯빐 李몄뿬媛� 媛��ν빀�덈떎. �뺤씤�� �꾨Ⅴ�쒕㈃ App�쇰줈 �대룞�⑸땲��.')) {
				goAppMarket(location.href);
			}
			
			return;
		}
	}
	
	if (!Boolean(window.cst.CSTID)) {
		if(!isApp) {
			location.href = loginUrl + '?redirectUrl=' + encodeURIComponent(location.href);
		} else {
			var url = location.href;
			if(url.indexOf("isMain=false") > -1){
				location.href = loginUrl + '?redirectUrl=' + encodeURIComponent(url);
			} else {
				appSchemExe.moveDepth('sub1', loginUrl);
			}
		}
		return;
	}
	
	var data = {
		cpnId: cpnId,
		intgEventId: intgEventId
	};
	
	$.ajax({
		method: 'post',
		url: '/display/api/promotion/provideCoupon',
		data: JSON.stringify(data),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		// headers: {"Authorization": cookieUtil.getToken()},
		success: function(resp){
			if(resp.resultCode == 200) {
				alert('荑좏룿�� �ㅼ슫濡쒕뱶 �섏뿀�듬땲��.');				
			}else {
				alert(resp.resultMessage);
				return;
			}
		},
		error: function(resp) {
			if (resp.resultMessage) {
				alert(resp.resultMessage);
				return;
			}
		}
	});
}

// get cookie
function getItem(sKey) {
	if (!sKey) { 
		return null; 
	}
	return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"
			+ encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}


//delete cookie
function deleteCookie(name){
	var expireDate = new Date();
	expireDate.setDate( expireDate.getDate() - 1 );
	document.cookie = name + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

$(document).ready(function() {
	
	// is APP?
	var isApp = (typeof appSchemExe !== "undefined") ? true : false;
	console.log('isApp = ' + isApp);
	
	if(isApp){
		
		// cookie�� tokenRefreshFlag瑜� 泥댄겕
		var tokenRefreshFlag = getItem('tokenRefreshFlag');
		console.log('tokenRefreshFlag = ' + tokenRefreshFlag);
		
		// RT refresh �� 寃쎌슦留� �몄텧
		if(tokenRefreshFlag != null && tokenRefreshFlag == 'Y'){
			console.log('call appSchemExe.updateToken()');
			appSchemExe.updateToken();
			deleteCookie('tokenRefreshFlag');
			console.log('call deleteCookie()');
		}
		
	}
	
});
