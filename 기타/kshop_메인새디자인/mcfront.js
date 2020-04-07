var MCFront = {
	gb: {
		detailHelpBox: !0,
		scTop: 0,
		hash: null
	},
	init: function(e) {
		var n = {
			scroll: null,
			moveEvt: !0,
			tabs: !1
		};
		n = $.extend(!0, n, e), this.scroll(n.scroll), n.moveEvt && this.moveEvt(), n.tabs && this.tabs(), $("#header .btnAllMenu a, .actionBar .btnMenu a").on("click", function() {
			return $("body").addClass("menuOpen"), !1
		}), $("#header .btnMenuClose").on("click", function() {
			return $("body").removeClass("menuOpen"), !1
		}), $("body .dim").on("click", function(e) {
			"dim" == e.target.className && $("body").removeClass("menuOpen")
		}), $("#btnTop").on("click", function() {
			return $(window).scrollTop(0), !1
		}), 0 < $(".rightPanel").length && ($(document).on("click", ".rightPanel .btnClose, .rightPanel .cateDimm", function() {
			return $(".rightPanel").removeClass("on"), $("body").removeClass("scrollHidden"), !1
		}), $(document).on("click", ".recentView, .actionBar .btnRecent", function() {
			return $(".rightPanel").addClass("on"), $("body").addClass("scrollHidden"), !1
		}))
	},
	scroll: function(s) {
		var o = this;
		$(window).scroll(function() {
			var e = $(window).height(),
				n = $(window).scrollTop(),
				t = $(document).height(),
				i = e + n;
			o.scrollIng(n), t - i <= 1 ? (o.scrollBot(), $("body").addClass("scrollEnd")) : $("body").removeClass("scrollEnd"), "function" == typeof s && s(n)
		}), $(window).scroll()
	},
	scrollIng: function(e) {
		0 < e ? $("body").addClass("scrollIng") : $("body").removeClass("scrollIng")
	},
	scrollBot: function() {},
	moveEvt: function() {
		var n = this,
			t = $(window).scrollTop();
		$(window).scroll(function() {
			var e = $(window).scrollTop();
			t + 10 < e && (t = e, n.moveDirectionEvt("down")), e < t - 10 && (t = e, n.moveDirectionEvt("up"))
		})
	},
	moveDirectionEvt: function(e) {
		if (null != e) {
			this.scrollView() && ("up" == e ? $("body").addClass("moveUp").removeClass("moveDown") : $("body").addClass("moveDown").removeClass("moveUp"))
		}
	},
	scrollView: function() {
		return $(window).height() < $(document).height()
	},
	mainSwiper: function(t, i) {
		var s = this,
			r = (i = i || 0, s = this, new Swiper(".menuNav", {
				initialSlide: i,
				slidesPerView: "auto",
				centeredSlides: !0,
				freeMode: !0,
				on: {
					init: function() {
						s.swiperCenter(this)
					},
					resize: function() {
						s.swiperCenter(this)
					}
				}
			}));
		var l = new Swiper(".mainCon", {
			slidesPerView: 1,
			initialSlide: i,
			autoHeight: !0,
			loop: !0,
			on: {
				init: function() {},
				slideChange: function() {
					null == i ? r.slideTo(this.realIndex) : r.slideTo(this.realIndex, 0), $(r.slides).eq(this.realIndex).hasClass("on") || d(this.realIndex)
				},
				touchMoveOpposite: function() {
					c("touchMoveOpposite")
				},
				sliderMove: function() {
					c("sliderMove")
				},
				transitionEnd: function() {
					c("transitionEnd")
				}
			}
		});
		s.gb.conSwiper = l;
		var a = !1;

		function c(e) {
			var n = $(".bcListMapW"),
				t = $(".bcListMap", n),
				i = $(".cloneBcListMap"),
				s = $(".bcListDateW"),
				o = $(".bcListTop", s),
				r = $(".cloneDateNavW");
			if ("sliderMove" == e && "touchMoveOpposite" != e) {
				if (!a) {
					var l = $(window).scrollTop();
					i.css({
						top: 0 == l ? l + 117 : l + 113
					}), i.empty().append(t.clone()), r.css({
						top: 0 == l ? l : l - 4
					}), r.empty().append(o.clone()), a = !0
				}
				n.removeClass("hidden").addClass("hidden"), s.removeClass("hidden").addClass("hidden")
			} else "transitionEnd" != e && "touchMoveOpposite" != e || a && (i.empty(), n.removeClass("hidden"), r.empty(), s.removeClass("hidden"), a = !1)
		}

		function d(e) {
			$(r.slides).eq(e).addClass("on").siblings().removeClass("on"), $(window).scrollTop(s.swiperTop());
			var n = $("a", r.slides).eq(e).attr("href");
			0 == e ? $("#contents").addClass("mainBc") : $("#contents").removeClass("mainBc"), s.gb.hash = n, location.href = n, t(n), i = null
		}
		$("a", r.slides).on("click", function() {
			var e = $(this).parent();
			if (e.hasClass("on")) return !1;
			var n = e.index(),
				t = $(l.slides).eq(l.realIndex + 1),
				i = $(l.slides).eq(n + 1),
				s = i.prev(),
				o = l.width;
			$(l.$wrapperEl).css("transition-duration", "300ms"), l.realIndex < n ? (t.after(i), o = -o) : t.before(i), 0 == n && c("sliderMove"), l.setTranslate(l.getTranslate() + o), r.slideTo(n), d(n), setTimeout(function() {
				s.after(i), l.slideTo(n + 1, 0)
			}, 300)
		}), $(".actionBar .btnHome a").on("click", function() {
			return $(".menuNav li.home a").click(), !1
		})
	},
	swiperCenter: function(e) {
		var n = e.virtualSize - e.width;
		for (var t in e.snapGrid) {
			var i = e.snapGrid[t];
			i < 0 && (e.snapGrid[t] = 0), n < i && (e.snapGrid[t] = n)
		}
	},
	swiperTop: function() {
		return 0
	},
	optAreaEvt: function(e, s, o) {
		var r, l;
		e.on("touchstart", function(e) {
			var n = e.originalEvent;
			r = n.touches[0].screenY, l = s.height(), $("body").addClass("scrollHidden")
		}).on("touchmove", function(e) {
			var n = e.originalEvent,
				t = r - n.touches[0].screenY + l,
				i = $(window).height() - $("#header").height() - 120;
			return i < t && (t = i), s.height(t <= o ? o : t), !1
		}).on("touchend", function(e) {
			$("body").removeClass("scrollHidden")
		});
		var n = $(window).height() - $("#header").height() - 120;
		s.height() > n && s.height(n)
	},
	tabs: function(e, n, t, i) {
		var s = {
			idx: e = e || 0,
			targetList: n = n || ".tabTlt",
			clickId: null
		};
		$("li a", n).off("click").on("click", function() {
			var e = $(this).parent();
			if (e.hasClass("on")) return !1;
			var n = $(this).attr("href");
			return e.addClass("on").siblings().removeClass("on"), $(n).show().siblings().hide(), s.idx = e.index(), s.clickObj = $(this), s.clickId = n, "function" == typeof t && r(), !1
		});
		var o = $("li", n).eq(e).find("a").attr("href");

		function r() {
			t(s)
		}
		$("li", n).eq(e).addClass("on").siblings().removeClass("on"), $(o).show().siblings().hide(), s.clickId = o, "function" == typeof t && i && r()
	},
	popup: {
		zIndex: 1001,
		open: function(e, n, t, i) {
			var s = this,
				o = $(e).data("effect");
			return $(e).css("z-index", s.zIndex++), "fade" == o ? $(e).fadeIn() : $(e).show(), $("body").addClass("scrollHidden"), $(e).hasClass("fullPopW") || s.autoHeight(e), (null == n || n) && $(".popClose", e).off("click").on("click", function() {
				return "function" == typeof i && i(), s.close(e), !1
			}), "function" == typeof t && $(".btnConfirm", e).off("click").on("click", function() {
				t()
			}), !1
		},
		close: function(e) {
			$(e).hide(), $("body").removeClass("scrollHidden")
		},
		autoHeight: function(e) {
			var n = $(window).height() - 80,
				t = $(e).data("height"),
				i = null == t ? $(".inner", e).outerHeight() : t;
			n <= i && (i = n), $(".inner", e).css({
				height: i,
				"margin-top": -i / 2
			})
		}
	},
	select: function(e, n) {
		var t = e.selectmenu();
		null != n && t.each(function() {
			$(this).selectmenu("menuWidget").addClass(n)
		})
	},
	selectErr: function(e, n) {
		var t = "error";
		n ? (e.next().addClass(t), e.selectmenu("menuWidget").addClass(t)) : (e.next().removeClass(t), e.selectmenu("menuWidget").removeClass(t))
	},
	viewType: function(e) {
		var n = $(e).parents(".ctgListW"),
			t = n.attr("class"),
			i = n.hasClass("list") ? t.replace("list", "block") : t.replace("block", "list");
		return n.attr("class", i), !1
	},
	popScroll: function(e) {
		$(e).scroll(function() {
			10 < $(this).scrollTop() ? $(e).addClass("popScroll") : $(e).removeClass("popScroll")
		}), $(".btnTop", e).off("click"), $(".btnTop", e).on("click", function() {
			return $(e).scrollTop(0), !1
		})
	},
	lock: function(e) {
		var n = $(window).scrollTop();
		e ? (this.gb.scTop = n, $("html").addClass("scHidden"), $("body").addClass("scrollHidden").css("margin-top", -n)) : ($("html").removeClass("scHidden"), $("body").removeClass("scrollHidden").css("margin-top", 0), $(window).scrollTop(this.gb.scTop))
	},
	birth: function(e, C, y) {
		function k(e, n) {
			e.selectionStart = n, e.selectionEnd = n
		}

		function T(e) {
			return Math.min(e.selectionStart, e.selectionEnd)
		}
		$(e).on("keydown", function(e) {
			var n = e.which ? e.which : e.keyCode,
				t = e.key;
			229 != n && 0 != n || $(this).blur().focus();
			var i = T(this),
				s = this.value,
				o = this.getAttribute("data-mask");
			if (37 == n || 8 == n) {
				if (0 == i) return !1;
				if (6 == i ? k(this, 4) : 10 == i ? k(this, 8) : 13 == i && k(this, 12), 8 != n) return;
				i = T(this);
				var r = s.substr(0, i - 1),
					l = s.substr(i),
					a = r + o.substr(i - 1, 1) + l;
				return this.value = a, k(this, i - 1), !1
			}
			if (39 != n) {
				if (9 != n && 13 != n && 116 != n) {
					var c, d, u = parseInt(t);
					if (!isNaN(u)) {
						if (4 == i || 8 == i || 12 <= i) return !1;
						r = s.substr(0, i), l = s.substr(i + 1), a = r + String(u) + l;
						var h = (new Date).getFullYear();
						beforeYear = h - C, limitYear = null == y ? h : h - 13;
						var f = Number(a.substr(6, 2));
						if (i <= 3) {
							var v = parseInt(a),
								p = String(v).length,
								m = String(beforeYear).substr(0, p),
								b = String(limitYear).substr(0, p);
							if (v < Number(m) || isNaN(v)) return !1;
							if (v > Number(b) || isNaN(v)) return !1
						} else {
							if (6 == i && 1 < u) return !1;
							if (7 == i && (f < 1 || 12 < f || isNaN(f))) return !1;
							if (10 <= i) {
								var w = (d = parseInt(a), 32 - new Date(d, f - 1, 32).getDate()),
									g = parseInt(a.substr(10, 2));
								if (!w) return !1;
								if (10 == i && g > parseInt(w / 10)) return !1;
								if (11 == i && (w < g || 0 == g || isNaN(g))) return !1
							}
						}
						this.value = a, k(this, 3 == (c = i) ? 6 : 7 == c ? 10 : 11 == c ? 13 : c + 1)
					}
					return !1
				}
			} else 3 == i ? k(this, 5) : 7 == i ? k(this, 9) : 11 == i && k(this, 13)
		}).on("click focus", function() {
			! function(e) {
				var n = 0,
					t = e.getAttribute("data-mask");
				"" == e.value && (e.value = t);
				for (var i = 0; i < t.length; i++)
					if (e.value[i] == t[i]) {
						if (4 == (n = i) || 5 == n || 8 == n || 9 == n || 12 == n) continue;
						return k(e, n)
					}
			}(this)
		})
	}
};