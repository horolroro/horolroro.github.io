! function(t) {
	function e(r) {
		if (i[r]) return i[r].exports;
		var n = i[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
	}
	var i = {};
	e.m = t, e.c = i, e.d = function(t, i, r) {
		e.o(t, i) || Object.defineProperty(t, i, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, e.n = function(t) {
		var i = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(i, "a", i), i
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 29)
}([function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = i(9),
		o = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(n),
		s = function t() {
			r(this, t)
		};
	e.default = s, s.touch = "ontouchstart" in window || navigator.maxTouchPoints, s.touchOnly = "touchOnly" === o.default.deviceType, s.dpr = void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
	var a = function() {
		var t = navigator.userAgent,
			e = void 0,
			i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], {
			name: "IE",
			version: e[1] || ""
		}) : "Chrome" === i[1] && null != (e = t.match(/\bOPR|Edge\/(\d+)/)) ? {
			name: "Opera",
			version: e[1]
		} : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), {
			name: i[0],
			version: i[1]
		})
	}();
	s.isSafari = "Safari" === a.name, s.isIe11 = "IE" === a.name && "11" === a.version, s.resize = function() {
		s.width = window.innerWidth, s.height = document.body.clientHeight, s.mobile = s.width < 740, s.tablet = s.width < 1024
	}
}, function(t, e, i) {
	"use strict";

	function r() {
		for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
		return 1 === e.length ? n.apply(void 0, e) : o.apply(void 0, e)
	}

	function n(t) {
		var e = void 0;
		return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? e = Reflect.ownKeys(t.prototype) : (e = Object.getOwnPropertyNames(t.prototype), "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(t.prototype)))), e.forEach(function(e) {
			if ("constructor" !== e) {
				var i = Object.getOwnPropertyDescriptor(t.prototype, e);
				"function" == typeof i.value && Object.defineProperty(t.prototype, e, o(t, e, i))
			}
		}), t
	}

	function o(t, e, i) {
		var r = i.value;
		if ("function" != typeof r) throw new Error("@autobind decorator can only be applied to methods not: " + typeof r);
		var n = !1;
		return {
			configurable: !0,
			get: function() {
				if (n || this === t.prototype || this.hasOwnProperty(e)) return r;
				var i = r.bind(this);
				return n = !0, Object.defineProperty(this, e, {
					value: i,
					configurable: !0,
					writable: !0
				}), n = !1, i
			}
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = r, t.exports = e.default
}, function(t, e, i) {
	var r;
	! function(n) {
		function o(t, e, i, r, n) {
			this._listener = e, this._isOnce = i, this.context = r, this._signal = t, this._priority = n || 0
		}

		function s(t, e) {
			if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
		}

		function a() {
			this._bindings = [], this._prevParams = null;
			var t = this;
			this.dispatch = function() {
				a.prototype.dispatch.apply(t, arguments)
			}
		}
		o.prototype = {
			active: !0,
			params: null,
			execute: function(t) {
				var e, i;
				return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
			},
			detach: function() {
				return this.isBound() ? this._signal.remove(this._listener, this.context) : null
			},
			isBound: function() {
				return !!this._signal && !!this._listener
			},
			isOnce: function() {
				return this._isOnce
			},
			getListener: function() {
				return this._listener
			},
			getSignal: function() {
				return this._signal
			},
			_destroy: function() {
				delete this._signal, delete this._listener, delete this.context
			},
			toString: function() {
				return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
			}
		}, a.prototype = {
			VERSION: "1.0.0",
			memorize: !1,
			_shouldPropagate: !0,
			active: !0,
			_registerListener: function(t, e, i, r) {
				var n, s = this._indexOfListener(t, i);
				if (-1 !== s) {
					if (n = this._bindings[s], n.isOnce() !== e) throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.")
				} else n = new o(this, t, e, i, r), this._addBinding(n);
				return this.memorize && this._prevParams && n.execute(this._prevParams), n
			},
			_addBinding: function(t) {
				var e = this._bindings.length;
				do {
					--e
				} while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
				this._bindings.splice(e + 1, 0, t)
			},
			_indexOfListener: function(t, e) {
				for (var i, r = this._bindings.length; r--;)
					if (i = this._bindings[r], i._listener === t && i.context === e) return r;
				return -1
			},
			has: function(t, e) {
				return -1 !== this._indexOfListener(t, e)
			},
			add: function(t, e, i) {
				return s(t, "add"), this._registerListener(t, !1, e, i)
			},
			addOnce: function(t, e, i) {
				return s(t, "addOnce"), this._registerListener(t, !0, e, i)
			},
			remove: function(t, e) {
				s(t, "remove");
				var i = this._indexOfListener(t, e);
				return -1 !== i && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t
			},
			removeAll: function() {
				for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
				this._bindings.length = 0
			},
			getNumListeners: function() {
				return this._bindings.length
			},
			halt: function() {
				this._shouldPropagate = !1
			},
			dispatch: function(t) {
				if (this.active) {
					var e, i = Array.prototype.slice.call(arguments),
						r = this._bindings.length;
					if (this.memorize && (this._prevParams = i), r) {
						e = this._bindings.slice(), this._shouldPropagate = !0;
						do {
							r--
						} while (e[r] && this._shouldPropagate && !1 !== e[r].execute(i))
					}
				}
			},
			forget: function() {
				this._prevParams = null
			},
			dispose: function() {
				this.removeAll(), delete this._bindings, delete this._prevParams
			},
			toString: function() {
				return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
			}
		};
		var l = a;
		l.Signal = a, void 0 !== (r = function() {
			return l
		}.call(e, i, e, t)) && (t.exports = r)
	}()
}, function(t, e, i) {
	"use strict";
	var r = t.exports = function() {};
	r.vendors = {
		Webkit: "webkit",
		Moz: "moz",
		O: "o"
	}, r.prefix = "", r.init = function() {
		r.setPrefix()
	}, r.setPrefix = function() {
		var t = document.createElement("div");
		if (void 0 !== t.style.transitionProperty) r.prefix = "";
		else
			for (var e in r.vendors)
				if (void 0 !== t.style[e + "TransitionProperty"]) return r.prefix = "-" + e.toLowerCase() + "-", !1;
		t = null
	}, r.transform = function(t, e) {
		t && (t.style.transform || (t.style.transform = t.style.webkitTransform || t.style.mozTransform), t.style.transform = e)
	}, r.transformOrigin = function(t, e) {
		t && (t.style.transformOrigin || (t.style.transformOrigin = t.style.webkitTransformOrigin || t.style.mozTransformOrigin), t.style.transformOrigin = e)
	}, r.transition = function(t, e) {
		t && (t.style.transition || (t.style.transition = t.style.webkitTransition || t.style.mozTransition), t.style.transition = e)
	}, r.getMatrix = function(t) {
		var e = window.getComputedStyle(t, null),
			i = e.getPropertyValue("transform") || e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform"),
			r = /^\w*\((((\d+)|(\d*\.\d+)),\s*)*((\d+)|(\d*\.\d+))\)/i,
			n = [];
		if (r.test(i)) {
			n = i.replace(/^\w*\(/, "").replace(")", "").split(/\s*,\s*/)
		}
		return n
	}
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, l = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			u = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			h = i(45),
			c = r(h),
			d = i(0),
			f = r(d),
			p = i(50),
			_ = r(p),
			y = i(51),
			v = r(y),
			g = (a = function(t) {
				function e(t, i) {
					n(this, e);
					var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
					return e.header || (e.header = new _.default), e.footer || (e.footer = new v.default), r
				}
				return s(e, t), l(e, [{
					key: "init",
					value: function() {
						e.header.updateActive(this.id), e.header.container = this.dom, u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._overlay = $(".main-overlay", this.dom)[0], this._arrow = $(".arrow-down", this._header)[0], this._arrow && this._arrow.addEventListener("click", this._onClickArrow)
					}
				}, {
					key: "resize",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), e.header.resize(this.scrollable ? this.scrollable.y : 0)
					}
				}, {
					key: "update",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), (this.isHidden || this.isShown) && e.header.update(this.scrollable ? this.scrollable.y : 0)
					}
				}, {
					key: "_onClickArrow",
					value: function(t) {
						TweenLite.to(this.scrollable, 1, {
							ease: Quart.easeInOut,
							y: f.default.height,
							_y: f.default.height
						})
					}
				}, {
					key: "_show",
					value: function() {
						e.header.show(), this._previousPage || (this.dom.classList.add("shown"), TweenLite.fromTo(this._overlay, 1, {
							x: "100%",
							overwrite: "all"
						}, {
							x: "200%",
							ease: Expo.easeOut,
							delay: .2,
							onComplete: this._shown.bind(this)
						}))
					}
				}, {
					key: "_shown",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_shown", this).call(this), e.header.isLocked = !1
					}
				}, {
					key: "_hide",
					value: function(t) {
						var i = this;
						e.header.isLocked = !0, e.header.mode = "white", TweenLite.fromTo(this._overlay, .6, {
							x: "0%"
						}, {
							x: "100%",
							ease: Quart.easeIn,
							onComplete: function() {
								i._hidden(), i.isDestroyed || i.destroy()
							}
						})
					}
				}, {
					key: "_onPreviousPageHidden",
					value: function(t) {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_onPreviousPageHidden", this).call(this, t), this.isShown || this.isShowing || this._show()
					}
				}, {
					key: "header",
					get: function() {
						if (e.header) return e.header
					}
				}, {
					key: "footer",
					get: function() {
						if (e.footer) return e.footer
					}
				}]), e
			}(c.default), function(t, e, i, r, n) {
				var o = {};
				return Object.keys(r).forEach(function(t) {
					o[t] = r[t]
				}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
					return r(t, e, i) || i
				}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
			}(a.prototype, "_onClickArrow", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onClickArrow"), a.prototype), a);
		e.default = g
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = {
		update: function() {
			if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
				var t = !1,
					e = Object.defineProperty({}, "passive", {
						get: function() {
							t = !0
						}
					}),
					i = function() {};
				window.addEventListener("testPassiveEventSupport", i, e), window.removeEventListener("testPassiveEventSupport", i, e), r.hasSupport = t
			}
		}
	};
	r.update(), e.default = r
}, function(t, e) {
	var i;
	i = function() {
		return this
	}();
	try {
		i = i || Function("return this")() || (0, eval)("this")
	} catch (t) {
		"object" == typeof window && (i = window)
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";
	var r = t.exports = function() {};
	r.DOWN = "mousedown", r.UP = "mouseup", r.CLICK = "click", r.MOVE = "mousemove", r.ENTER = "mouseenter", r.LEAVE = "mouseleave", r.OVER = "mouseover", r.OUT = "mouseout", r.WHEEL = "mousewheel", r.SCROLL = "scroll"
}, function(t, e) {
	function i(t, e, i) {
		this.shortMessage = e || "", this.longMessage = i || "", this.rawError = t || "", this.message = "gl-shader: " + (e || t || "") + (i ? "\n" + i : ""), this.stack = (new Error).stack
	}
	i.prototype = new Error, i.prototype.name = "GLError", i.prototype.constructor = i, t.exports = i
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e, i, r) {
		return t && (e || i) ? "hybrid" : t && Object.keys(r.detectHover).filter(function(t) {
			return "update" !== t
		}).every(function(t) {
			return !1 === r.detectHover[t]
		}) && Object.keys(r.detectPointer).filter(function(t) {
			return "update" !== t
		}).every(function(t) {
			return !1 === r.detectPointer[t]
		}) ? window.navigator && /android/.test(window.navigator.userAgent.toLowerCase()) ? "touchOnly" : "hybrid" : t ? "touchOnly" : "mouseOnly"
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(35),
		s = r(o),
		a = i(36),
		l = r(a),
		u = i(37),
		h = r(u),
		c = i(5),
		d = r(c),
		f = {
			state: {
				detectHover: s.default,
				detectPointer: l.default,
				detectTouchEvents: h.default,
				detectPassiveEvents: d.default
			},
			update: function() {
				f.state.detectHover.update(), f.state.detectPointer.update(), f.state.detectTouchEvents.update(), f.state.detectPassiveEvents.update(), f.updateOnlyOwnProperties()
			},
			updateOnlyOwnProperties: function() {
				if ("undefined" != typeof window) {
					f.passiveEvents = f.state.detectPassiveEvents.hasSupport || !1, f.hasTouch = f.state.detectTouchEvents.hasSupport || !1, f.deviceType = n(f.hasTouch, f.state.detectHover.anyHover, f.state.detectPointer.anyFine, f.state), f.hasMouse = "touchOnly" !== f.deviceType, f.primaryInput = "mouseOnly" === f.deviceType && "mouse" || "touchOnly" === f.deviceType && "touch" || f.state.detectHover.hover && "mouse" || f.state.detectHover.none && "touch" || "mouse";
					/windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10) >= 59 && f.hasTouch && (f.deviceType = "hybrid", f.hasMouse = !0, f.primaryInput = "mouse")
				}
			}
		};
	f.updateOnlyOwnProperties(), e.default = f
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(0),
			u = r(l),
			h = i(3),
			c = r(h),
			d = i(2),
			f = r(d),
			p = i(5),
			_ = r(p),
			y = i(54),
			v = r(y),
			g = i(13),
			m = (r(g), i(55)),
			b = (r(m), s = function() {
				function t(e) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					n(this, t), this.dom = e, this.className = "slideshow", this.snapping = !0, this.loop = !1, this.nav = !1, this.isLocked = !1, this.mousewheelNavigation = !1, this.clickNavigation = !1, this.dragNavigation = !0, this.dragEase = u.default.touchOnly ? 1 : .4, this.switchVmin = i.mobile ? 3 : 10, this.releaseEase = .08, this.dragEaseConstrains = .5, this.frictionsConstrains = .9, this.maxDeltaX = 200;
					for (var r in i) void 0 !== this[r] && (this[r] = i[r]);
					this.x = 0, this._ox = 0, this._initx = 0, this.vx = 0, this._initmx = 0, this._mx = 0, this._mvx = 0, this._destx = 0, this._index = 0, this.changed = new f.default, this.released = new f.default, this.mousewheeled = new f.default, this.init()
				}
				return a(t, [{
					key: "init",
					value: function() {
						this._initDom(), this._initErrors(), this.resize(), this._bind(), this._setGrabCursor(), this._updateDom(), this._updateNav()
					}
				}, {
					key: "_initDom",
					value: function() {
						if (this.list = $("." + this.className + "__list", this.dom)[0], this.items = $("." + this.className + "__item", this.dom), this.grabContainer = this.dom, this.loop) {
							for (var t = 0, e = this.items.length; t < e; ++t) {
								var i = this.items[t].cloneNode(!0);
								this.list.appendChild(i)
							}
							this.items = $("." + this.className + "__item", this.dom)
						}
					}
				}, {
					key: "_initErrors",
					value: function() {
						if (0 === this.items.length) throw new Error("Slideshow must have at leat 1 entry");
						if (this.items.length < 2 && this.loop) throw new Error("Slideshow must have at leat 2 entries to loop");
						this.nav && (this.prevBtn = $(".btn--prev", this.dom)[0], this.nextBtn = $(".btn--next", this.dom)[0])
					}
				}, {
					key: "_bind",
					value: function() {
						var t = !!_.default.hasSupport && {
							passive: !0
						};
						if (this.dragNavigation && (this.grabContainer.addEventListener("touchstart", this._onTouchStart, t), this.grabContainer.addEventListener("mousedown", this._onMouseDown, !1)), this.clickNavigation)
							for (var e = 0, i = this.items.length; e < i; e++) {
								var r = this.items[e];
								r.addEventListener("click", this._onClickItem)
							}
						this.grabContainer.addEventListener("dragstart", this._onDragStart), this.mousewheelNavigation && (this.lethargy = new v.default, this.grabContainer.addEventListener("wheel", this._onMousewheel, !1)), this.nav && (this.prevBtn.addEventListener("click", this.prev), this.nextBtn.addEventListener("click", this.next))
					}
				}, {
					key: "destroy",
					value: function() {
						this.changed.dispose(), this.released.dispose(), this.nav && (this.prevBtn.removeEventListener("click", this.prev), this.nextBtn.removeEventListener("click", this.next)), this.grabContainer.removeEventListener("touchstart", this._onTouchStart), this.grabContainer.removeEventListener("mousedown", this._onMouseDown), this.grabContainer.removeEventListener("dragstart", this._onDragStart), this.grabContainer.removeEventListener("mousewheel", this._onMousewheel), this.grabContainer.removeEventListener("wheel", this._onMousewheel), this.grabContainer.removeEventListener("touchend", this._onDragEnd), this.grabContainer.removeEventListener("touchmove", this._onDragMove), window.removeEventListener("mouseup", this._onDragEnd), window.removeEventListener("mousemove", this._onDragMove)
					}
				}, {
					key: "resize",
					value: function() {
						this.scrolling = !1, this._itemsWidth = [], this._itemsPosition = [], this.width = 0, this.length = this.items.length;
						for (var t = 0, e = 0; e < this.length; ++e) {
							var i = this.items[e],
								r = window.getComputedStyle(i),
								n = parseFloat(r.marginLeft) + parseFloat(r.marginRight);
							this._itemsWidth[e] = i.getBoundingClientRect().width + n, this.width += this._itemsWidth[e], this._itemsPosition[e] = t, t = this.width
						}
						this._containerWidth = this.dom.getBoundingClientRect().width, this._constrainsEdges = [0, this.snapping ? this._itemsPosition[this.length - 1] : Math.max(0, this.width - this._containerWidth)], this._setGrabCursor();
						for (var o = 0, s = this.list.length; o < s; ++o) {
							this.list[o].style.width = 100 * this.length + "%"
						}
						this.snapping && (this._destx = this._itemsPosition[this._index]), this.maxDeltaX = u.default.width / 10
					}
				}, {
					key: "update",
					value: function(t) {
						if (this.width <= this._containerWidth) return !1;
						this.dragging ? this.x += (this._initx - this._mx - this.x) * this.dragEase : this.snapping || this.scrolling ? this.x += (this._destx - this.x) * (t ? 1 : this.releaseEase) : (this.x += this.vx, this.vx *= this.frictionsConstrains);
						var e = 1;
						if (this.loop) {
							var i = 0;
							this.x > this._itemsPosition[this.length - 2] + this._containerWidth / 2 ? i = -this.width / 2 : this.x < this._itemsPosition[1] - this._containerWidth / 2 && (i = this.width / 2), i && (this.x = this._ox = this.x + i, this._initx += i, this._destx += i, this.needsUpdate = !0)
						} else {
							var r = t ? 1 : this.dragging ? this.dragEaseConstrains : this.dragEaseConstrains / 5;
							this.x < this._constrainsEdges[0] ? (this.x += (this._constrainsEdges[0] - this.x) * r, e = this.frictionsConstrains) : this.x > this._constrainsEdges[1] && (this.x += (this._constrainsEdges[1] - this.x) * r, e = this.frictionsConstrains)
						}
						this.dragging && (this.vx = this.x - this._ox, this.vx *= e), this.x = (1e3 * this.x | 0) / 1e3;
						var n = this.x - this._destx;
						n < 0 && (n *= -1), n < .01 && (this.x = this._destx), this._ox != this.x && (this.needsUpdate = !0), this.needsUpdate && this._updateDom(), this._ox = this.x
					}
				}, {
					key: "_updateDom",
					value: function() {
						c.default.transform(this.list, "translate3d(" + -this.x + "px, 0, 0)"), this.needsUpdate = !1
					}
				}, {
					key: "prev",
					value: function(t) {
						if (!this.isLocked) {
							var e = this._index;
							this._index--, this._constrainIndex(), e !== this._index && (this._updateNav(), this._destx = this._itemsPosition[this._index], this.changed.dispatch(this, this._index, e, "prev"), !0 !== t && this.released.dispatch(this._index))
						}
					}
				}, {
					key: "next",
					value: function(t) {
						if (!this.isLocked) {
							var e = this._index;
							this._index++, this._constrainIndex(), e !== this._index && (this._updateNav(), this._destx = this._itemsPosition[this._index], this.changed.dispatch(this, this._index, e, "next"), !0 !== t && this.released.dispatch(this._index))
						}
					}
				}, {
					key: "_onClickItem",
					value: function(t) {
						var e = t.currentTarget,
							i = e.index();
						this.direction || this.index === i || (this.index = i)
					}
				}, {
					key: "_onDragStart",
					value: function(t) {
						t.preventDefault()
					}
				}, {
					key: "_onMousewheel",
					value: function(t) {
						var e = this;
						if (t.preventDefault(), !this.isLocked) {
							if (this.scrolling = !0, this.snapping) {
								var i = this.lethargy.check(t);
								if (!1 !== i) {
									var r = this._index - i;
									r >= 0 && r <= this.length - 1 && (this._wheelLocked || (this.index = r), this._wheelLocked = !0, this._wheelTimeout && clearTimeout(this._wheelTimeout), this._wheelTimeout = setTimeout(function() {
										e._wheelLocked = !1
									}, 200))
								}
							} else {
								var n = t.deltaY * Math.sign(t.deltaY) > t.deltaX * Math.sign(t.deltaX) ? t.deltaY : t.deltaX;
								this._destx += 1 === t.deltaMode ? 20 * n : n, this._destx < 0 ? this._destx = 0 : this._destx > this.width - this._containerWidth && (this._destx = this.width - this._containerWidth)
							}
							this.mousewheeled.dispatch()
						}
					}
				}, {
					key: "_onTouchStart",
					value: function(t) {
						this._mode = "touch", this._startDrag(t)
					}
				}, {
					key: "_onMouseDown",
					value: function(t) {
						t.preventDefault(), this._mode = "mouse", this._startDrag(t)
					}
				}, {
					key: "_startDrag",
					value: function(t) {
						if ((void 0 === t.button || 0 === t.button) && !this.isLocked) {
							var e = void 0,
								i = !!_.default.hasSupport && {
									passive: !0
								};
							if (this.direction = 0, "touch" == this._mode) {
								this.grabContainer.addEventListener("touchend", this._onDragEnd, i), this.grabContainer.addEventListener("touchmove", this._onDragMove, i), t.originalEvent && (t = t.originalEvent);
								e = (t.touches[0] || t.changedTouches[0]).pageX
							} else this._setGrabbingCursor(), window.addEventListener("mouseup", this._onDragEnd, i), window.addEventListener("mousemove", this._onDragMove, i), e = t.pageX;
							this._mx = e, this._omx = this._mx, this._initmx = this._mx, this._initx = this._initmx + this.x, this.vx = 0, this._mvx = 0, this.dragging = !0, this.scrolling = !1
						}
					}
				}, {
					key: "_onDragMove",
					value: function(t) {
						if (this._stopPropagation && t.stopPropagation(), !this.isLocked) {
							if ("touch" === this._mode) {
								t.originalEvent && (t = t.originalEvent);
								var e = t.touches[0] || t.changedTouches[0];
								this._mx = e.pageX
							} else this._mx = t.pageX;
							if (this._mvx = this._mx - this._omx, this._mvx) {
								var i = Math.sign(this._mvx);
								this.direction !== i && (this._initmx = this._mx), this.direction = i, this._mvx * i > 10 && (this._stopPropagation = !0)
							}
							this._omx = this._mx
						}
					}
				}, {
					key: "_onDragEnd",
					value: function(t) {
						if (this._stopPropagation = !1, !this.isLocked) {
							var e = void 0;
							if ("touch" === this._mode) {
								this.grabContainer.removeEventListener("touchend", this._onDragEnd), this.grabContainer.removeEventListener("touchmove", this._onDragMove), t.originalEvent && (t = t.originalEvent);
								e = (t.touches[0] || t.changedTouches[0]).pageX
							} else this._setGrabCursor(), window.removeEventListener("mouseup", this._onDragEnd), window.removeEventListener("mousemove", this._onDragMove), e = t.pageX;
							var i = this._index,
								r = e - this._initmx,
								n = this._mvx > this.switchVmin || r > this.maxDeltaX,
								o = this._mvx < -this.switchVmin || r < -this.maxDeltaX;
							n ? this._index = this.x * this.length / this.width | 0 : o && (this._index = this.x * this.length / this.width + 1 | 0), this._index != i && (this._constrainIndex(), this._destx = this._itemsPosition[this._index], this.changed.dispatch(this, this.index, i, o ? "next" : "prev")), this.released.dispatch(this._itemsPosition[this.index]), this.dragging = !1
						}
					}
				}, {
					key: "_constrainIndex",
					value: function() {
						this._index >= this.length - 1 ? this._index = this.length - 1 : this._index <= 0 && (this._index = 0)
					}
				}, {
					key: "_updateNav",
					value: function() {
						this.nav && (this.loop ? this.length <= 2 ? (this.isLocked = !0, this.prevBtn.classList.add("hidden"), this.nextBtn.classList.add("hidden")) : (this.prevBtn.classList.remove("hidden"), this.nextBtn.classList.remove("hidden")) : 1 == this.length ? (this.prevBtn.classList.add("hidden"), this.nextBtn.classList.add("hidden")) : this._index >= this.length - 1 ? (this.nextBtn.classList.add("hidden"), this.nextBtn.style.width = null, this.prevBtn.classList.remove("hidden"), this.prevBtn.style.width = "calc(100% + 88px)") : this._index <= 0 ? (this.prevBtn.classList.add("hidden"), this.prevBtn.style.width = null, this.nextBtn.classList.remove("hidden"), this.nextBtn.style.width = "calc(100% + 88px)") : (this.prevBtn.classList.remove("hidden"), this.prevBtn.style.width = null, this.nextBtn.classList.remove("hidden"), this.nextBtn.style.width = null))
					}
				}, {
					key: "_setGrabCursor",
					value: function() {
						!this.isLocked && this.dragNavigation && this.width > this._containerWidth ? (this.grabContainer.style.cursor = "move", this.grabContainer.style.cursor = "-webkit-grab", this.grabContainer.style.cursor = "-moz-grab", this.grabContainer.style.cursor = "grab") : this.grabContainer.style.cursor = null
					}
				}, {
					key: "_setGrabbingCursor",
					value: function() {
						!this.isLocked && this.dragNavigation ? (this.grabContainer.style.cursor = "ew-resize", this.grabContainer.style.cursor = "-webkit-grabbing", this.grabContainer.style.cursor = "-moz-grabbin", this.grabContainer.style.cursor = "grabbing") : this.grabContainer.style.cursor = null
					}
				}, {
					key: "index",
					get: function() {
						return this._index % (this.loop ? this.length / 2 : this.length)
					},
					set: function(t) {
						this._index != t && this.changed.dispatch(this, t, this._index), this._index = t, this._constrainIndex(), this._updateNav(), this._destx = this._itemsPosition[this._index]
					}
				}]), t
			}(), o(s.prototype, "prev", [t], Object.getOwnPropertyDescriptor(s.prototype, "prev"), s.prototype), o(s.prototype, "next", [t], Object.getOwnPropertyDescriptor(s.prototype, "next"), s.prototype), o(s.prototype, "_onClickItem", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onClickItem"), s.prototype), o(s.prototype, "_onDragStart", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDragStart"), s.prototype), o(s.prototype, "_onMousewheel", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMousewheel"), s.prototype), o(s.prototype, "_onTouchStart", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onTouchStart"), s.prototype), o(s.prototype, "_onMouseDown", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseDown"), s.prototype), o(s.prototype, "_startDrag", [t], Object.getOwnPropertyDescriptor(s.prototype, "_startDrag"), s.prototype), o(s.prototype, "_onDragMove", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDragMove"), s.prototype), o(s.prototype, "_onDragEnd", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDragEnd"), s.prototype), s);
		e.default = b
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	(function(r) {
		var n, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		! function(r, a) {
			var l = {},
				u = r.document,
				h = r.GreenSockGlobals = r.GreenSockGlobals || r;
			if (!h.TweenLite) {
				var c, d, f, p, _, y = function(t) {
						var e, i = t.split("."),
							r = h;
						for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
						return r
					},
					v = y("com.greensock"),
					g = function(t) {
						var e, i = [],
							r = t.length;
						for (e = 0; e !== r; i.push(t[e++]));
						return i
					},
					m = function() {},
					b = function() {
						var t = Object.prototype.toString,
							e = t.call([]);
						return function(i) {
							return null != i && (i instanceof Array || "object" === (void 0 === i ? "undefined" : s(i)) && !!i.push && t.call(i) === e)
						}
					}(),
					w = {},
					E = function r(s, a, u, c) {
						this.sc = w[s] ? w[s].sc : [], w[s] = this, this.gsClass = null, this.func = u;
						var d = [];
						this.check = function(f) {
							for (var p, _, v, g, m, b = a.length, E = b; --b > -1;)(p = w[a[b]] || new r(a[b], [])).gsClass ? (d[b] = p.gsClass, E--) : f && p.sc.push(this);
							if (0 === E && u) {
								if (_ = ("com.greensock." + s).split("."), v = _.pop(), g = y(_.join("."))[v] = this.gsClass = u.apply(u, d), c)
									if (h[v] = l[v] = g, !(m = void 0 !== t && t.exports) && i(108)) n = [], void 0 !== (o = function() {
										return g
									}.apply(e, n)) && (t.exports = o);
									else if (m)
									if ("TweenLite" === s) {
										t.exports = l.TweenLite = g;
										for (b in l) g[b] = l[b]
									} else l.TweenLite && (l.TweenLite[v] = g);
								for (b = 0; b < this.sc.length; b++) this.sc[b].check()
							}
						}, this.check(!0)
					},
					T = r._gsDefine = function(t, e, i, r) {
						return new E(t, e, i, r)
					},
					x = v._class = function(t, e, i) {
						return e = e || function() {}, T(t, [], function() {
							return e
						}, i), e
					};
				T.globals = h;
				var O = [0, 0, 1, 1],
					P = [],
					A = x("easing.Ease", function(t, e, i, r) {
						this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? O.concat(e) : O
					}, !0),
					k = A.map = {},
					C = A.register = function(t, e, i, r) {
						for (var n, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
							for (o = l[u], n = r ? x("easing." + o, null, !0) : v.easing[o] || {}, s = h.length; --s > -1;) a = h[s], k[o + "." + a] = k[a + o] = n[a] = t.getRatio ? t : t[a] || new t
					};
				for (f = A.prototype, f._calcEnd = !1, f.getRatio = function(t) {
						if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
						var e = this._type,
							i = this._power,
							r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
						return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
					}, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], d = c.length; --d > -1;) f = c[d] + ",Power" + d, C(new A(null, null, 1, d), f, "easeOut", !0), C(new A(null, null, 2, d), f, "easeIn" + (0 === d ? ",easeNone" : "")), C(new A(null, null, 3, d), f, "easeInOut");
				k.linear = v.easing.Linear.easeIn, k.swing = v.easing.Quad.easeInOut;
				var S = x("events.EventDispatcher", function(t) {
					this._listeners = {}, this._eventTarget = t || this
				});
				f = S.prototype, f.addEventListener = function(t, e, i, r, n) {
					n = n || 0;
					var o, s, a = this._listeners[t],
						l = 0;
					for (this !== p || _ || p.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < n && (l = s + 1);
					a.splice(l, 0, {
						c: e,
						s: i,
						up: r,
						pr: n
					})
				}, f.removeEventListener = function(t, e) {
					var i, r = this._listeners[t];
					if (r)
						for (i = r.length; --i > -1;)
							if (r[i].c === e) return void r.splice(i, 1)
				}, f.dispatchEvent = function(t) {
					var e, i, r, n = this._listeners[t];
					if (n)
						for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(r = n[e]) && (r.up ? r.c.call(r.s || i, {
							type: t,
							target: i
						}) : r.c.call(r.s || i))
				};
				var R = r.requestAnimationFrame,
					L = r.cancelAnimationFrame,
					M = Date.now || function() {
						return (new Date).getTime()
					},
					j = M();
				for (c = ["ms", "moz", "webkit", "o"], d = c.length; --d > -1 && !R;) R = r[c[d] + "RequestAnimationFrame"], L = r[c[d] + "CancelAnimationFrame"] || r[c[d] + "CancelRequestAnimationFrame"];
				x("Ticker", function(t, e) {
					var i, r, n, o, s, a = this,
						l = M(),
						h = !(!1 === e || !R) && "auto",
						c = 500,
						d = 33,
						f = function t(e) {
							var u, h, f = M() - j;
							f > c && (l += f - d), j += f, a.time = (j - l) / 1e3, u = a.time - s, (!i || u > 0 || !0 === e) && (a.frame++, s += u + (u >= o ? .004 : o - u), h = !0), !0 !== e && (n = r(t)), h && a.dispatchEvent("tick")
						};
					S.call(a), a.time = a.frame = 0, a.tick = function() {
						f(!0)
					}, a.lagSmoothing = function(t, e) {
						c = t || 1e10, d = Math.min(e, c, 0)
					}, a.sleep = function() {
						null != n && (h && L ? L(n) : clearTimeout(n), r = m, n = null, a === p && (_ = !1))
					}, a.wake = function(t) {
						null !== n ? a.sleep() : t ? l += -j + (j = M()) : a.frame > 10 && (j = M() - c + 5), r = 0 === i ? m : h && R ? R : function(t) {
							return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
						}, a === p && (_ = !0), f(2)
					}, a.fps = function(t) {
						if (!arguments.length) return i;
						i = t, o = 1 / (i || 60), s = this.time + o, a.wake()
					}, a.useRAF = function(t) {
						if (!arguments.length) return h;
						a.sleep(), h = t, a.fps(i)
					}, a.fps(t), setTimeout(function() {
						"auto" === h && a.frame < 5 && "hidden" !== u.visibilityState && a.useRAF(!1)
					}, 1500)
				}), f = v.Ticker.prototype = new v.events.EventDispatcher, f.constructor = v.Ticker;
				var D = x("core.Animation", function(t, e) {
					if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, J) {
						_ || p.wake();
						var i = this.vars.useFrames ? Q : J;
						i.add(this, i._time), this.vars.paused && this.paused(!0)
					}
				});
				p = D.ticker = new v.Ticker, f = D.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
				! function t() {
					_ && M() - j > 2e3 && p.wake(), setTimeout(t, 2e3)
				}(), f.play = function(t, e) {
					return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
				}, f.pause = function(t, e) {
					return null != t && this.seek(t, e), this.paused(!0)
				}, f.resume = function(t, e) {
					return null != t && this.seek(t, e), this.paused(!1)
				}, f.seek = function(t, e) {
					return this.totalTime(Number(t), !1 !== e)
				}, f.restart = function(t, e) {
					return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
				}, f.reverse = function(t, e) {
					return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
				}, f.render = function(t, e, i) {}, f.invalidate = function() {
					return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
				}, f.isActive = function() {
					var t, e = this._timeline,
						i = this._startTime;
					return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
				}, f._enabled = function(t, e) {
					return _ || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
				}, f._kill = function(t, e) {
					return this._enabled(!1, !1)
				}, f.kill = function(t, e) {
					return this._kill(t, e), this
				}, f._uncache = function(t) {
					for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
					return this
				}, f._swapSelfInParams = function(t) {
					for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
					return i
				}, f._callback = function(t) {
					var e = this.vars,
						i = e[t],
						r = e[t + "Params"],
						n = e[t + "Scope"] || e.callbackScope || this;
					switch (r ? r.length : 0) {
						case 0:
							i.call(n);
							break;
						case 1:
							i.call(n, r[0]);
							break;
						case 2:
							i.call(n, r[0], r[1]);
							break;
						default:
							i.apply(n, r)
					}
				}, f.eventCallback = function(t, e, i, r) {
					if ("on" === (t || "").substr(0, 2)) {
						var n = this.vars;
						if (1 === arguments.length) return n[t];
						null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = b(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
					}
					return this
				}, f.delay = function(t) {
					return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
				}, f.duration = function(t) {
					return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
				}, f.totalDuration = function(t) {
					return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
				}, f.time = function(t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
				}, f.totalTime = function(t, e, i) {
					if (_ || p.wake(), !arguments.length) return this._totalTime;
					if (this._timeline) {
						if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
							this._dirty && this.totalDuration();
							var r = this._totalDuration,
								n = this._timeline;
							if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
								for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
						}
						this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (V.length && et(), this.render(t, e, !1), V.length && et())
					}
					return this
				}, f.progress = f.totalProgress = function(t, e) {
					var i = this.duration();
					return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
				}, f.startTime = function(t) {
					return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
				}, f.endTime = function(t) {
					return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
				}, f.timeScale = function(t) {
					if (!arguments.length) return this._timeScale;
					if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
						var e = this._pauseTime,
							i = e || 0 === e ? e : this._timeline.totalTime();
						this._startTime = i - (i - this._startTime) * this._timeScale / t
					}
					return this._timeScale = t, this._uncache(!1)
				}, f.reversed = function(t) {
					return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
				}, f.paused = function(t) {
					if (!arguments.length) return this._paused;
					var e, i, r = this._timeline;
					return t != this._paused && r && (_ || t || p.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
				};
				var I = x("core.SimpleTimeline", function(t) {
					D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
				});
				f = I.prototype = new D, f.constructor = I, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, r) {
					var n, o;
					if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
						for (o = t._startTime; n && n._startTime > o;) n = n._prev;
					return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
				}, f._remove = function(t, e) {
					return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
				}, f.render = function(t, e, i) {
					var r, n = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
				}, f.rawTime = function() {
					return _ || p.wake(), this._totalTime
				};
				var N = x("TweenLite", function(t, e, i) {
						if (D.call(this, e, i), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
						this.target = t = "string" != typeof t ? t : N.selector(t) || t;
						var n, o, s, a = t.jquery || t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType),
							l = this.vars.overwrite;
						if (this._overwrite = l = null == l ? K[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (a || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
							for (this._targets = s = g(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++) o = s[n], o ? "string" != typeof o ? o.length && o !== r && o[0] && (o[0] === r || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(g(o))) : (this._siblings[n] = it(o, this, !1), 1 === l && this._siblings[n].length > 1 && nt(o, this, null, 1, this._siblings[n])) : "string" == typeof(o = s[n--] = N.selector(o)) && s.splice(n + 1, 1) : s.splice(n--, 1);
						else this._propLookup = {}, this._siblings = it(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
						(this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
					}, !0),
					B = function(t) {
						return t && t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType)
					},
					F = function(t, e) {
						var i, r = {};
						for (i in t) Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (r[i] = t[i], delete t[i]);
						t.css = r
					};
				f = N.prototype = new D, f.constructor = N, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, N.version = "1.19.1", N.defaultEase = f._ease = new A(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = p, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
					p.lagSmoothing(t, e)
				}, N.selector = r.$ || r.jQuery || function(t) {
					var e = r.$ || r.jQuery;
					return e ? (N.selector = e, e(t)) : void 0 === u ? t : u.querySelectorAll ? u.querySelectorAll(t) : u.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
				};
				var V = [],
					U = {},
					z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
					X = function(t) {
						for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
					},
					H = function(t, e, i, r) {
						var n, o, s, a, l, u, h, c = [],
							d = 0,
							f = "",
							p = 0;
						for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, n = t.match(z) || [], o = e.match(z) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), l = o.length, a = 0; a < l; a++) h = o[a], u = e.substr(d, e.indexOf(h, d) - d), f += u || !a ? u : ",", d += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), h === n[a] || n.length <= a ? f += h : (f && (c.push(f), f = ""), s = parseFloat(n[a]), c.push(s), c._firstPT = {
							_next: c._firstPT,
							t: c,
							p: c.length - 1,
							s: s,
							c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - s) || 0,
							f: 0,
							m: p && p < 4 ? Math.round : 0
						}), d += h.length;
						return f += e.substr(d), f && c.push(f), c.setRatio = X, c
					},
					Y = function(t, e, i, r, n, o, a, l, u) {
						"function" == typeof r && (r = r(u || 0, t));
						var h, c = s(t[e]),
							d = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
							f = "get" !== i ? i : d ? a ? t[d](a) : t[d]() : t[e],
							p = "string" == typeof r && "=" === r.charAt(1),
							_ = {
								t: t,
								p: e,
								s: f,
								f: "function" === c,
								pg: 0,
								n: n || e,
								m: o ? "function" == typeof o ? o : Math.round : 0,
								pr: 0,
								c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0
							};
						if (("number" != typeof f || "number" != typeof r && !p) && (a || isNaN(f) || !p && isNaN(r) || "boolean" == typeof f || "boolean" == typeof r ? (_.fp = a, h = H(f, p ? _.s + _.c : r, l || N.defaultStringFilter, _), _ = {
								t: h,
								p: "setRatio",
								s: 0,
								c: 1,
								f: 2,
								pg: 0,
								n: n || e,
								pr: 0,
								m: 0
							}) : (_.s = parseFloat(f), p || (_.c = parseFloat(r) - _.s || 0))), _.c) return (_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _
					},
					G = N._internals = {
						isArray: b,
						isSelector: B,
						lazyTweens: V,
						blobDif: H
					},
					W = N._plugins = {},
					$ = G.tweenLookup = {},
					q = 0,
					Z = G.reservedProps = {
						ease: 1,
						delay: 1,
						overwrite: 1,
						onComplete: 1,
						onCompleteParams: 1,
						onCompleteScope: 1,
						useFrames: 1,
						runBackwards: 1,
						startAt: 1,
						onUpdate: 1,
						onUpdateParams: 1,
						onUpdateScope: 1,
						onStart: 1,
						onStartParams: 1,
						onStartScope: 1,
						onReverseComplete: 1,
						onReverseCompleteParams: 1,
						onReverseCompleteScope: 1,
						onRepeat: 1,
						onRepeatParams: 1,
						onRepeatScope: 1,
						easeParams: 1,
						yoyo: 1,
						immediateRender: 1,
						repeat: 1,
						repeatDelay: 1,
						data: 1,
						paused: 1,
						reversed: 1,
						autoCSS: 1,
						lazy: 1,
						onOverwrite: 1,
						callbackScope: 1,
						stringFilter: 1,
						id: 1
					},
					K = {
						none: 0,
						all: 1,
						auto: 2,
						concurrent: 3,
						allOnStart: 4,
						preexisting: 5,
						true: 1,
						false: 0
					},
					Q = D._rootFramesTimeline = new I,
					J = D._rootTimeline = new I,
					tt = 30,
					et = G.lazyRender = function() {
						var t, e = V.length;
						for (U = {}; --e > -1;)(t = V[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
						V.length = 0
					};
				J._startTime = p.time, Q._startTime = p.frame, J._active = Q._active = !0, setTimeout(et, 1), D._updateRoot = N.render = function() {
					var t, e, i;
					if (V.length && et(), J.render((p.time - J._startTime) * J._timeScale, !1, !1), Q.render((p.frame - Q._startTime) * Q._timeScale, !1, !1), V.length && et(), p.frame >= tt) {
						tt = p.frame + (parseInt(N.autoSleep, 10) || 120);
						for (i in $) {
							for (e = $[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
							0 === e.length && delete $[i]
						}
						if ((!(i = J._first) || i._paused) && N.autoSleep && !Q._first && 1 === p._listeners.tick.length) {
							for (; i && i._paused;) i = i._next;
							i || p.sleep()
						}
					}
				}, p.addEventListener("tick", D._updateRoot);
				var it = function(t, e, i) {
						var r, n, o = t._gsTweenID;
						if ($[o || (t._gsTweenID = o = "t" + q++)] || ($[o] = {
								target: t,
								tweens: []
							}), e && (r = $[o].tweens, r[n = r.length] = e, i))
							for (; --n > -1;) r[n] === e && r.splice(n, 1);
						return $[o].tweens
					},
					rt = function(t, e, i, r) {
						var n, o, s = t.vars.onOverwrite;
						return s && (n = s(t, e, i, r)), s = N.onOverwrite, s && (o = s(t, e, i, r)), !1 !== n && !1 !== o
					},
					nt = function(t, e, i, r, n) {
						var o, s, a, l;
						if (1 === r || r >= 4) {
							for (l = n.length, o = 0; o < l; o++)
								if ((a = n[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
								else if (5 === r) break;
							return s
						}
						var u, h = e._startTime + 1e-10,
							c = [],
							d = 0,
							f = 0 === e._duration;
						for (o = n.length; --o > -1;)(a = n[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || ot(e, 0, f), 0 === ot(a, u, f) && (c[d++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (c[d++] = a)));
						for (o = d; --o > -1;)
							if (a = c[o], 2 === r && a._kill(i, t, e) && (s = !0), 2 !== r || !a._firstPT && a._initted) {
								if (2 !== r && !rt(a, e)) continue;
								a._enabled(!1, !1) && (s = !0)
							}
						return s
					},
					ot = function(t, e, i) {
						for (var r = t._timeline, n = r._timeScale, o = t._startTime; r._timeline;) {
							if (o += r._startTime, n *= r._timeScale, r._paused) return -100;
							r = r._timeline
						}
						return o /= n, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : o - e - 1e-10
					};
				f._init = function() {
					var t, e, i, r, n, o, s = this.vars,
						a = this._overwrittenProps,
						l = this._duration,
						u = !!s.immediateRender,
						h = s.ease;
					if (s.startAt) {
						this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
						for (r in s.startAt) n[r] = s.startAt[r];
						if (n.overwrite = !1, n.immediateRender = !0, n.lazy = u && !1 !== s.lazy, n.startAt = n.delay = null, this._startAt = N.to(this.target, 0, n), u)
							if (this._time > 0) this._startAt = null;
							else if (0 !== l) return
					} else if (s.runBackwards && 0 !== l)
						if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
						else {
							0 !== this._time && (u = !1), i = {};
							for (r in s) Z[r] && "autoCSS" !== r || (i[r] = s[r]);
							if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== s.lazy, i.immediateRender = u, this._startAt = N.to(this.target, 0, i), u) {
								if (0 === this._time) return
							} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
						}
					if (this._ease = h = h ? h instanceof A ? h : "function" == typeof h ? new A(h, s.easeParams) : k[h] || N.defaultEase : N.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
						for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
					else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
					if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
						for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
					this._onUpdate = s.onUpdate, this._initted = !0
				}, f._initProps = function(t, e, i, n, o) {
					var s, a, l, u, h, c;
					if (null == t) return !1;
					U[t._gsTweenID] && et(), this.vars.css || t.style && t !== r && t.nodeType && W.css && !1 !== this.vars.autoCSS && F(this.vars, t);
					for (s in this.vars)
						if (c = this.vars[s], Z[s]) c && (c instanceof Array || c.push && b(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
						else if (W[s] && (u = new W[s])._onInitTween(t, this.vars[s], this, o)) {
						for (this._firstPT = h = {
								_next: this._firstPT,
								t: u,
								p: "setRatio",
								s: 0,
								c: 1,
								f: 1,
								n: s,
								pg: 1,
								pr: u._priority,
								m: 0
							}, a = u._overwriteProps.length; --a > -1;) e[u._overwriteProps[a]] = this._firstPT;
						(u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
					} else e[s] = Y.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, o);
					return n && this._kill(n, t) ? this._initProps(t, e, i, n, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && nt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (U[t._gsTweenID] = !0), l)
				}, f.render = function(t, e, i) {
					var r, n, o, s, a = this._time,
						l = this._duration,
						u = this._rawPrevTime;
					if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-7 || 1e-10 === u && "isPause" !== this.data) && u !== t && (i = !0, u > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10);
					else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (n = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10)), this._initted || (i = !0);
					else if (this._totalTime = this._time = t, this._easeType) {
						var h = t / l,
							c = this._easeType,
							d = this._easePower;
						(1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : t / l < .5 ? h / 2 : 1 - h / 2
					} else this.ratio = this._ease.getRatio(t / l);
					if (this._time !== a || i) {
						if (!this._initted) {
							if (this._init(), !this._initted || this._gc) return;
							if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, V.push(this), void(this._lazy = [t, e]);
							this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
						}
						for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
						this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || r || i) && this._callback("onUpdate")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
					}
				}, f._kill = function(t, e, i) {
					if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
					e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
					var r, n, o, a, l, u, h, c, d, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
					if ((b(e) || B(e)) && "number" != typeof e[0])
						for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (u = !0);
					else {
						if (this._targets) {
							for (r = this._targets.length; --r > -1;)
								if (e === this._targets[r]) {
									l = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
									break
								}
						} else {
							if (e !== this.target) return !1;
							l = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
						}
						if (l) {
							if (h = t || l, c = t !== n && "all" !== n && t !== l && ("object" !== (void 0 === t ? "undefined" : s(t)) || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
								for (o in h) l[o] && (d || (d = []), d.push(o));
								if ((d || !t) && !rt(this, i, e, d)) return !1
							}
							for (o in h)(a = l[o]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, u = !0), a.pg && a.t._kill(h) && (u = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete l[o]), c && (n[o] = 1);
							!this._firstPT && this._initted && this._enabled(!1, !1)
						}
					}
					return u
				}, f.invalidate = function() {
					return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
				}, f._enabled = function(t, e) {
					if (_ || p.wake(), t && this._gc) {
						var i, r = this._targets;
						if (r)
							for (i = r.length; --i > -1;) this._siblings[i] = it(r[i], this, !0);
						else this._siblings = it(this.target, this, !0)
					}
					return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
				}, N.to = function(t, e, i) {
					return new N(t, e, i)
				}, N.from = function(t, e, i) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
				}, N.fromTo = function(t, e, i, r) {
					return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new N(t, e, r)
				}, N.staggerTo = N.allTo = function(t, e, i, r, n, o, s) {
					r = r || 0;
					var a, l, u, h, c = 0,
						d = [],
						f = function() {
							i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), n.apply(s || i.callbackScope || this, o || P)
						},
						p = i.cycle,
						_ = i.startAt && i.startAt.cycle;
					for (b(t) || ("string" == typeof t && (t = N.selector(t) || t), B(t) && (t = g(t))), t = t || [], r < 0 && (t = g(t), t.reverse(), r *= -1), a = t.length - 1, u = 0; u <= a; u++) {
						l = {};
						for (h in i) l[h] = i[h];
						if (p && (_applyCycle(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), _) {
							_ = l.startAt = {};
							for (h in i.startAt) _[h] = i.startAt[h];
							_applyCycle(l.startAt, t, u)
						}
						l.delay = c + (l.delay || 0), u === a && n && (l.onComplete = f), d[u] = new N(t[u], e, l), c += r
					}
					return d
				}, N.staggerFrom = N.allFrom = function(t, e, i, r, n, o, s) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, N.staggerTo(t, e, i, r, n, o, s)
				}, N.staggerFromTo = N.allFromTo = function(t, e, i, r, n, o, s, a) {
					return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, N.staggerTo(t, e, r, n, o, s, a)
				}, N.delayedCall = function(t, e, i, r, n) {
					return new N(e, 0, {
						delay: t,
						onComplete: e,
						onCompleteParams: i,
						callbackScope: r,
						onReverseComplete: e,
						onReverseCompleteParams: i,
						immediateRender: !1,
						lazy: !1,
						useFrames: n,
						overwrite: 0
					})
				}, N.set = function(t, e) {
					return new N(t, 0, e)
				}, N.getTweensOf = function(t, e) {
					if (null == t) return [];
					t = "string" != typeof t ? t : N.selector(t) || t;
					var i, r, n, o;
					if ((b(t) || B(t)) && "number" != typeof t[0]) {
						for (i = t.length, r = []; --i > -1;) r = r.concat(N.getTweensOf(t[i], e));
						for (i = r.length; --i > -1;)
							for (o = r[i], n = i; --n > -1;) o === r[n] && r.splice(i, 1)
					} else
						for (r = it(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
					return r
				}, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
					"object" === (void 0 === e ? "undefined" : s(e)) && (i = e, e = !1);
					for (var r = N.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t)
				};
				var st = x("plugins.TweenPlugin", function(t, e) {
					this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype
				}, !0);
				if (f = st.prototype, st.version = "1.19.0", st.API = 2, f._firstPT = null, f._addTween = Y, f.setRatio = X, f._kill = function(t) {
						var e, i = this._overwriteProps,
							r = this._firstPT;
						if (null != t[this._propName]) this._overwriteProps = [];
						else
							for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
						for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
						return !1
					}, f._mod = f._roundProps = function(t) {
						for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
					}, N._onPluginEvent = function(t, e) {
						var i, r, n, o, s, a = e._firstPT;
						if ("_onInitAllProps" === t) {
							for (; a;) {
								for (s = a._next, r = n; r && r.pr > a.pr;) r = r._next;
								(a._prev = r ? r._prev : o) ? a._prev._next = a: n = a, (a._next = r) ? r._prev = a : o = a, a = s
							}
							a = e._firstPT = n
						}
						for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
						return i
					}, st.activate = function(t) {
						for (var e = t.length; --e > -1;) t[e].API === st.API && (W[(new t[e])._propName] = t[e]);
						return !0
					}, T.plugin = function(t) {
						if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
						var e, i = t.propName,
							r = t.priority || 0,
							n = t.overwriteProps,
							o = {
								init: "_onInitTween",
								set: "setRatio",
								kill: "_kill",
								round: "_mod",
								mod: "_mod",
								initAll: "_onInitAllProps"
							},
							s = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
								st.call(this, i, r), this._overwriteProps = n || []
							}, !0 === t.global),
							a = s.prototype = new st(i);
						a.constructor = s, s.API = t.API;
						for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
						return s.version = t.version, st.activate([s]), s
					}, c = r._gsQueue) {
					for (d = 0; d < c.length; d++) c[d]();
					for (f in w) w[f].func || r.console.log("GSAP encountered missing dependency: " + f)
				}
				_ = !1
			}
		}(void 0 !== t && t.exports && void 0 !== r ? r : window)
	}).call(e, i(6))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(3),
		a = r(s),
		l = i(0),
		u = r(l),
		h = function() {
			function t(e) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
					dist: 0,
					simpleParallax: !1,
					animVelocity: !1,
					needShow: !1
				};
				n(this, t), this.elem = e, this.dist = i.dist || !1, this.needShow = i.needShow || !1, this.animVelocity = i.animVelocity || !1, this.simpleParallax = i.simpleParallax || !1, this.isFixed = !1, this.isShown = !1
			}
			return o(t, [{
				key: "shown",
				value: function() {
					this.elem.classList.add("shown"), this.isShown = !0
				}
			}, {
				key: "update",
				value: function(t, e) {
					this.y = t, this.vy = e, this.needShow && !this.isShown && this.isInViewport && this.ratio > this.needShow && this.shown(), this.isInViewport && this.dist ? a.default.transform(this.elem, "translate3d(0," + this.ratio * this.dist + "px, 0)") : this.isInViewport && this.animVelocity ? a.default.transform(this.elem, "translate3d(0," + this.vy + "px, 0)") : this.simpleParallax && a.default.transform(this.elem, "translate3d(0," + -this.y * this.simpleParallax + "px, 0)"), this.isFixed && (this.elem.style.top = this.y - this.top + "px")
				}
			}, {
				key: "resize",
				value: function() {
					var t = this.elem.getBoundingClientRect();
					this.top = t.top + (this.y || 0), this.height = t.height
				}
			}, {
				key: "isInViewport",
				get: function() {
					return this.y + u.default.height > this.top && this.y < this.top + this.height + this.dist
				}
			}, {
				key: "ratio",
				get: function() {
					return (this.y + u.default.height - this.top) / (u.default.height + this.height + this.dist)
				}
			}, {
				key: "fixed",
				get: function() {
					return this.isFixed
				},
				set: function(t) {
					this.isFixed = t
				}
			}]), t
		}();
	e.default = h
}, function(t, e, i) {
	"use strict";
	HTMLElement.prototype.index = function() {
		for (var t = this, e = t.parentNode, i = 0; t.previousElementSibling;) i++, t = t.previousElementSibling;
		return this === e.children[i] ? i : -1
	}
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = i(0),
		o = (function(t) {
			t && t.__esModule
		}(n), function t() {
			r(this, t)
		});
	e.default = o, o.DEBUG = "8888" === window.location.port || "3000" === window.location.port || /\.dev$/.test(window.location.host), o.TITLE = "Wordpress bootstrap"
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(0),
		a = r(s),
		l = i(48),
		u = r(l),
		h = i(17),
		c = r(h),
		d = function() {
			function t(e) {
				var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				n(this, t), this.container = e, this.dom = document.createElement("span"), this.dom.className = "scrollbar", this.thumb = new c.default(this.dom), this.container.parentNode.appendChild(this.dom), this.scrollable = new u.default(this.container, this.thumb, i), this._enabled = !0
			}
			return o(t, [{
				key: "resize",
				value: function(t) {
					this.scrollable.resize(t), this.thumb.resize(this.scrollable.height), this.height = this.scrollable.height, this._enabled && t && t >= this.height ? this.enabled = !1 : !this._enabled && t && t < this.height && (this.enabled = !0)
				}
			}, {
				key: "update",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.thumb.update(t), this.scrollable.update(t)
				}
			}, {
				key: "destroy",
				value: function() {
					this.scrollable.destroy(), this.thumb.destroy(), this.container = null
				}
			}, {
				key: "y",
				set: function(t) {
					this.scrollable.y = this.scrollable._y = t, this.thumb.percent = t / (this.scrollable.height - a.default.height)
				},
				get: function() {
					return this.scrollable.y
				}
			}, {
				key: "vy",
				get: function() {
					return this.scrollable.vy
				}
			}, {
				key: "percent",
				set: function(t) {
					this.thumb.percent = t
				},
				get: function() {
					return this.thumb.percent
				}
			}, {
				key: "enabled",
				set: function(t) {
					this._enabled = t, this.scrollable.enabled = t, this.thumb.enabled = t
				}
			}, {
				key: "locked",
				set: function(t) {
					this.scrollable.isLocked = t
				}
			}]), t
		}();
	e.default = d
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		o = i(2),
		s = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(o),
		a = function() {
			function t(e) {
				r(this, t), this.dom = e, this.scrolled = new s.default
			}
			return n(t, [{
				key: "destroy",
				value: function() {}
			}, {
				key: "enabled",
				set: function(t) {
					this.isLocked = !t
				},
				get: function() {
					return !this.isLocked
				}
			}]), t
		}();
	e.default = a
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(3),
			u = r(l),
			h = i(2),
			c = r(h),
			d = i(5),
			f = r(d),
			p = (s = function() {
				function t(e) {
					var i = this,
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					n(this, t), this.orientation = r.orientation || "vertical", this.minSize = r.minSize || 50, this.autoHide = void 0 === r.autoHide || r.autoHide, this.autoHideTime = r.autoHideTime || 2, this.dom = document.createElement("i"), this.dom.className = r.className || "scrollbar__thumb", this.dom.addEventListener("mousedown", this._onMouseDown), this.dom.addEventListener("touchstart", this._onDragStart, !!f.default.hasSupport && {
						passive: !0
					}), this._percent = 0, this.position = 0, this.scrolled = new c.default, this.scrolledUp = new c.default, e.appendChild(this.dom), setTimeout(function() {
						i.show()
					}, 700)
				}
				return a(t, [{
					key: "resize",
					value: function(t) {
						if (void 0 === t) throw new Error("scrollableSize param must defined");
						this._constraintsRect = this.dom.parentNode.getBoundingClientRect(), this.size = "vertical" === this.orientation ? this._constraintsRect.height * this._constraintsRect.height / t : this._constraintsRect.width * this._constraintsRect.width / t, this.size < this.minSize && (this.size = this.minSize), "vertical" === this.orientation ? this.dom.style.height = this.size + "px" : this.dom.style.width = this.size + "px"
					}
				}, {
					key: "update",
					value: function() {
						this._position !== this.position && (this._updateDom(), this._percent = this.position / (("vertical" === this.orientation ? this._constraintsRect.height : this._constraintsRect.width) - this.size), this.scrolling && this.scrolled.dispatch(this._percent)), this._position = this.position
					}
				}, {
					key: "destroy",
					value: function() {
						this.scrolled.dispose(), this.scrolledUp.dispose(), this.dom.removeEventListener("mousedown", this._onDragStart), this.dom.removeEventListener("touchstart", this._onDragStart)
					}
				}, {
					key: "show",
					value: function() {
						this.isHidden = !1, this.dom.style.opacity = .7
					}
				}, {
					key: "hide",
					value: function() {
						this.isHidden = !0, this.dom.style.opacity = 0
					}
				}, {
					key: "_updateDom",
					value: function() {
						var t = this;
						this.autoHide && (this.isHidden && this.show(), this._autoHideTimeout && clearTimeout(this._autoHideTimeout), this._autoHideTimeout = setTimeout(function() {
							t.hide()
						}, 1e3 * this.autoHideTime)), "vertical" === this.orientation ? u.default.transform(this.dom, "translate3d(0," + this.position + "px,0)") : u.default.transform(this.dom, "translate3d(" + this.position + "px,0,0)")
					}
				}, {
					key: "_onMouseDown",
					value: function(t) {
						t.preventDefault(), this._onDragStart(t)
					}
				}, {
					key: "_onDragStart",
					value: function(t) {
						t = t.touches ? t.touches[0] : t, this.scrolling = !0, this.initPosition = "vertical" === this.orientation ? t.clientY - this._constraintsRect.top - this.position : t.clientX - this._constraintsRect.left - this.position;
						var e = !!f.default.hasSupport && {
							passive: !0
						};
						window.addEventListener("mouseup", this._onDragEnd, e), window.addEventListener("touchend", this._onDragEnd, e), window.addEventListener("mousemove", this._onDrag, e), window.addEventListener("touchmove", this._onDrag, e), this._onDrag(t)
					}
				}, {
					key: "_onDrag",
					value: function(t) {
						t = t.touches ? t.touches[0] : t;
						var e = void 0,
							i = void 0;
						"vertical" === this.orientation ? (e = t.clientY - this._constraintsRect.top - this.initPosition, i = this._constraintsRect.height - this.size) : (e = t.clientX - this._constraintsRect.left - this.initPosition, i = this._constraintsRect.width - this.size), e < 0 ? e = 0 : e > i && (e = i), this.position = e
					}
				}, {
					key: "_onDragEnd",
					value: function(t) {
						this.scrolling = !1, this.scrolledUp.dispatch(), window.removeEventListener("mouseup", this._onDragEnd), window.removeEventListener("touchend", this._onDragEnd), window.removeEventListener("mousemove", this._onDrag), window.removeEventListener("touchmove", this._onDrag)
					}
				}, {
					key: "percent",
					set: function(t) {
						this._percent = t, this._constraintsRect && (this.position = this._percent * (("vertical" === this.orientation ? this._constraintsRect.height : this._constraintsRect.width) - this.size))
					},
					get: function() {
						return this._percent
					}
				}, {
					key: "enabled",
					set: function(t) {
						this._enabled = t, this._enabled ? this.dom.classList.remove("hidden") : this.dom.classList.add("hidden")
					}
				}]), t
			}(), o(s.prototype, "_onMouseDown", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseDown"), s.prototype), o(s.prototype, "_onDragStart", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDragStart"), s.prototype), o(s.prototype, "_onDrag", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDrag"), s.prototype), o(s.prototype, "_onDragEnd", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onDragEnd"), s.prototype), s);
		e.default = p
	}).call(e, i(1))
}, function(t, e, i) {
	function r(t, e) {
		return t[0] - e[0]
	}

	function n() {
		var t, e = this.stride,
			i = new Array(e.length);
		for (t = 0; t < i.length; ++t) i[t] = [Math.abs(e[t]), t];
		i.sort(r);
		var n = new Array(i.length);
		for (t = 0; t < n.length; ++t) n[t] = i[t][1];
		return n
	}

	function o(t, e) {
		var i = ["View", e, "d", t].join("");
		e < 0 && (i = "View_Nil" + t);
		var r = "generic" === t;
		if (-1 === e) {
			var o = "function " + i + "(a){this.data=a;};var proto=" + i + ".prototype;proto.dtype='" + t + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + i + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + i + "(a){return new " + i + "(a);}",
				s = new Function(o);
			return s()
		}
		if (0 === e) {
			var o = "function " + i + "(a,d) {this.data = a;this.offset = d};var proto=" + i + ".prototype;proto.dtype='" + t + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + i + "_copy() {return new " + i + "(this.data,this.offset)};proto.pick=function " + i + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + i + "_get(){return " + (r ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + i + "_set(v){return " + (r ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + i + "(a,b,c,d){return new " + i + "(a,d)}",
				s = new Function("TrivialArray", o);
			return s(c[t][0])
		}
		var o = ["'use strict'"],
			a = l(e),
			u = a.map(function(t) {
				return "i" + t
			}),
			h = "this.offset+" + a.map(function(t) {
				return "this.stride[" + t + "]*i" + t
			}).join("+"),
			d = a.map(function(t) {
				return "b" + t
			}).join(","),
			f = a.map(function(t) {
				return "c" + t
			}).join(",");
		o.push("function " + i + "(a," + d + "," + f + ",d){this.data=a", "this.shape=[" + d + "]", "this.stride=[" + f + "]", "this.offset=d|0}", "var proto=" + i + ".prototype", "proto.dtype='" + t + "'", "proto.dimension=" + e), o.push("Object.defineProperty(proto,'size',{get:function " + i + "_size(){return " + a.map(function(t) {
			return "this.shape[" + t + "]"
		}).join("*"), "}})"), 1 === e ? o.push("proto.order=[0]") : (o.push("Object.defineProperty(proto,'order',{get:"), e < 4 ? (o.push("function " + i + "_order(){"), 2 === e ? o.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === e && o.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : o.push("ORDER})")), o.push("proto.set=function " + i + "_set(" + u.join(",") + ",v){"), r ? o.push("return this.data.set(" + h + ",v)}") : o.push("return this.data[" + h + "]=v}"), o.push("proto.get=function " + i + "_get(" + u.join(",") + "){"), r ? o.push("return this.data.get(" + h + ")}") : o.push("return this.data[" + h + "]}"), o.push("proto.index=function " + i + "_index(", u.join(), "){return " + h + "}"), o.push("proto.hi=function " + i + "_hi(" + u.join(",") + "){return new " + i + "(this.data," + a.map(function(t) {
			return ["(typeof i", t, "!=='number'||i", t, "<0)?this.shape[", t, "]:i", t, "|0"].join("")
		}).join(",") + "," + a.map(function(t) {
			return "this.stride[" + t + "]"
		}).join(",") + ",this.offset)}");
		var p = a.map(function(t) {
				return "a" + t + "=this.shape[" + t + "]"
			}),
			_ = a.map(function(t) {
				return "c" + t + "=this.stride[" + t + "]"
			});
		o.push("proto.lo=function " + i + "_lo(" + u.join(",") + "){var b=this.offset,d=0," + p.join(",") + "," + _.join(","));
		for (var y = 0; y < e; ++y) o.push("if(typeof i" + y + "==='number'&&i" + y + ">=0){d=i" + y + "|0;b+=c" + y + "*d;a" + y + "-=d}");
		o.push("return new " + i + "(this.data," + a.map(function(t) {
			return "a" + t
		}).join(",") + "," + a.map(function(t) {
			return "c" + t
		}).join(",") + ",b)}"), o.push("proto.step=function " + i + "_step(" + u.join(",") + "){var " + a.map(function(t) {
			return "a" + t + "=this.shape[" + t + "]"
		}).join(",") + "," + a.map(function(t) {
			return "b" + t + "=this.stride[" + t + "]"
		}).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
		for (var y = 0; y < e; ++y) o.push("if(typeof i" + y + "==='number'){d=i" + y + "|0;if(d<0){c+=b" + y + "*(a" + y + "-1);a" + y + "=ceil(-a" + y + "/d)}else{a" + y + "=ceil(a" + y + "/d)}b" + y + "*=d}");
		o.push("return new " + i + "(this.data," + a.map(function(t) {
			return "a" + t
		}).join(",") + "," + a.map(function(t) {
			return "b" + t
		}).join(",") + ",c)}");
		for (var v = new Array(e), g = new Array(e), y = 0; y < e; ++y) v[y] = "a[i" + y + "]", g[y] = "b[i" + y + "]";
		o.push("proto.transpose=function " + i + "_transpose(" + u + "){" + u.map(function(t, e) {
			return t + "=(" + t + "===undefined?" + e + ":" + t + "|0)"
		}).join(";"), "var a=this.shape,b=this.stride;return new " + i + "(this.data," + v.join(",") + "," + g.join(",") + ",this.offset)}"), o.push("proto.pick=function " + i + "_pick(" + u + "){var a=[],b=[],c=this.offset");
		for (var y = 0; y < e; ++y) o.push("if(typeof i" + y + "==='number'&&i" + y + ">=0){c=(c+this.stride[" + y + "]*i" + y + ")|0}else{a.push(this.shape[" + y + "]);b.push(this.stride[" + y + "])}");
		o.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), o.push("return function construct_" + i + "(data,shape,stride,offset){return new " + i + "(data," + a.map(function(t) {
			return "shape[" + t + "]"
		}).join(",") + "," + a.map(function(t) {
			return "stride[" + t + "]"
		}).join(",") + ",offset)}");
		var s = new Function("CTOR_LIST", "ORDER", o.join("\n"));
		return s(c[t], n)
	}

	function s(t) {
		if (u(t)) return "buffer";
		if (h) switch (Object.prototype.toString.call(t)) {
			case "[object Float64Array]":
				return "float64";
			case "[object Float32Array]":
				return "float32";
			case "[object Int8Array]":
				return "int8";
			case "[object Int16Array]":
				return "int16";
			case "[object Int32Array]":
				return "int32";
			case "[object Uint8Array]":
				return "uint8";
			case "[object Uint16Array]":
				return "uint16";
			case "[object Uint32Array]":
				return "uint32";
			case "[object Uint8ClampedArray]":
				return "uint8_clamped"
		}
		return Array.isArray(t) ? "array" : "generic"
	}

	function a(t, e, i, r) {
		if (void 0 === t) {
			var n = c.array[0];
			return n([])
		}
		"number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
		var a = e.length;
		if (void 0 === i) {
			i = new Array(a);
			for (var l = a - 1, u = 1; l >= 0; --l) i[l] = u, u *= e[l]
		}
		if (void 0 === r) {
			r = 0;
			for (var l = 0; l < a; ++l) i[l] < 0 && (r -= (e[l] - 1) * i[l])
		}
		for (var h = s(t), d = c[h]; d.length <= a + 1;) d.push(o(h, d.length - 1));
		var n = d[a + 1];
		return n(t, e, i, r)
	}
	var l = i(58),
		u = i(59),
		h = "undefined" != typeof Float64Array,
		c = {
			float32: [],
			float64: [],
			int8: [],
			int16: [],
			int32: [],
			uint8: [],
			uint16: [],
			uint32: [],
			array: [],
			uint8_clamped: [],
			buffer: [],
			generic: []
		};
	t.exports = a
}, function(t, e, i) {
	"use strict";

	function r(t) {
		if (!t) return a;
		for (var e = 0; e < t.args.length; ++e) {
			var i = t.args[e];
			t.args[e] = 0 === e ? {
				name: i,
				lvalue: !0,
				rvalue: !!t.rvalue,
				count: t.count || 1
			} : {
				name: i,
				lvalue: !1,
				rvalue: !0,
				count: 1
			}
		}
		return t.thisVars || (t.thisVars = []), t.localVars || (t.localVars = []), t
	}

	function n(t) {
		return s({
			args: t.args,
			pre: r(t.pre),
			body: r(t.body),
			post: r(t.proc),
			funcName: t.funcName
		})
	}

	function o(t) {
		for (var e = [], i = 0; i < t.args.length; ++i) e.push("a" + i);
		return new Function("P", ["return function ", t.funcName, "_ndarrayops(", e.join(","), ") {P(", e.join(","), ");return a0}"].join(""))(n(t))
	}
	var s = i(60),
		a = {
			body: "",
			args: [],
			thisVars: [],
			localVars: []
		},
		l = {
			add: "+",
			sub: "-",
			mul: "*",
			div: "/",
			mod: "%",
			band: "&",
			bor: "|",
			bxor: "^",
			lshift: "<<",
			rshift: ">>",
			rrshift: ">>>"
		};
	! function() {
		for (var t in l) {
			var i = l[t];
			e[t] = o({
				args: ["array", "array", "array"],
				body: {
					args: ["a", "b", "c"],
					body: "a=b" + i + "c"
				},
				funcName: t
			}), e[t + "eq"] = o({
				args: ["array", "array"],
				body: {
					args: ["a", "b"],
					body: "a" + i + "=b"
				},
				rvalue: !0,
				funcName: t + "eq"
			}), e[t + "s"] = o({
				args: ["array", "array", "scalar"],
				body: {
					args: ["a", "b", "s"],
					body: "a=b" + i + "s"
				},
				funcName: t + "s"
			}), e[t + "seq"] = o({
				args: ["array", "scalar"],
				body: {
					args: ["a", "s"],
					body: "a" + i + "=s"
				},
				rvalue: !0,
				funcName: t + "seq"
			})
		}
	}();
	var u = {
		not: "!",
		bnot: "~",
		neg: "-",
		recip: "1.0/"
	};
	! function() {
		for (var t in u) {
			var i = u[t];
			e[t] = o({
				args: ["array", "array"],
				body: {
					args: ["a", "b"],
					body: "a=" + i + "b"
				},
				funcName: t
			}), e[t + "eq"] = o({
				args: ["array"],
				body: {
					args: ["a"],
					body: "a=" + i + "a"
				},
				rvalue: !0,
				count: 2,
				funcName: t + "eq"
			})
		}
	}();
	var h = {
		and: "&&",
		or: "||",
		eq: "===",
		neq: "!==",
		lt: "<",
		gt: ">",
		leq: "<=",
		geq: ">="
	};
	! function() {
		for (var t in h) {
			var i = h[t];
			e[t] = o({
				args: ["array", "array", "array"],
				body: {
					args: ["a", "b", "c"],
					body: "a=b" + i + "c"
				},
				funcName: t
			}), e[t + "s"] = o({
				args: ["array", "array", "scalar"],
				body: {
					args: ["a", "b", "s"],
					body: "a=b" + i + "s"
				},
				funcName: t + "s"
			}), e[t + "eq"] = o({
				args: ["array", "array"],
				body: {
					args: ["a", "b"],
					body: "a=a" + i + "b"
				},
				rvalue: !0,
				count: 2,
				funcName: t + "eq"
			}), e[t + "seq"] = o({
				args: ["array", "scalar"],
				body: {
					args: ["a", "s"],
					body: "a=a" + i + "s"
				},
				rvalue: !0,
				count: 2,
				funcName: t + "seq"
			})
		}
	}();
	var c = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
	! function() {
		for (var t = 0; t < c.length; ++t) {
			var i = c[t];
			e[i] = o({
				args: ["array", "array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b"],
					body: "a=this_f(b)",
					thisVars: ["this_f"]
				},
				funcName: i
			}), e[i + "eq"] = o({
				args: ["array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a"],
					body: "a=this_f(a)",
					thisVars: ["this_f"]
				},
				rvalue: !0,
				count: 2,
				funcName: i + "eq"
			})
		}
	}();
	var d = ["max", "min", "atan2", "pow"];
	! function() {
		for (var t = 0; t < d.length; ++t) {
			var i = d[t];
			e[i] = o({
				args: ["array", "array", "array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b", "c"],
					body: "a=this_f(b,c)",
					thisVars: ["this_f"]
				},
				funcName: i
			}), e[i + "s"] = o({
				args: ["array", "array", "scalar"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b", "c"],
					body: "a=this_f(b,c)",
					thisVars: ["this_f"]
				},
				funcName: i + "s"
			}), e[i + "eq"] = o({
				args: ["array", "array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b"],
					body: "a=this_f(a,b)",
					thisVars: ["this_f"]
				},
				rvalue: !0,
				count: 2,
				funcName: i + "eq"
			}), e[i + "seq"] = o({
				args: ["array", "scalar"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b"],
					body: "a=this_f(a,b)",
					thisVars: ["this_f"]
				},
				rvalue: !0,
				count: 2,
				funcName: i + "seq"
			})
		}
	}();
	var f = ["atan2", "pow"];
	! function() {
		for (var t = 0; t < f.length; ++t) {
			var i = f[t];
			e[i + "op"] = o({
				args: ["array", "array", "array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b", "c"],
					body: "a=this_f(c,b)",
					thisVars: ["this_f"]
				},
				funcName: i + "op"
			}), e[i + "ops"] = o({
				args: ["array", "array", "scalar"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b", "c"],
					body: "a=this_f(c,b)",
					thisVars: ["this_f"]
				},
				funcName: i + "ops"
			}), e[i + "opeq"] = o({
				args: ["array", "array"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b"],
					body: "a=this_f(b,a)",
					thisVars: ["this_f"]
				},
				rvalue: !0,
				count: 2,
				funcName: i + "opeq"
			}), e[i + "opseq"] = o({
				args: ["array", "scalar"],
				pre: {
					args: [],
					body: "this_f=Math." + i,
					thisVars: ["this_f"]
				},
				body: {
					args: ["a", "b"],
					body: "a=this_f(b,a)",
					thisVars: ["this_f"]
				},
				rvalue: !0,
				count: 2,
				funcName: i + "opseq"
			})
		}
	}(), e.any = s({
		args: ["array"],
		pre: a,
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			body: "if(a){return true}",
			localVars: [],
			thisVars: []
		},
		post: {
			args: [],
			localVars: [],
			thisVars: [],
			body: "return false"
		},
		funcName: "any"
	}), e.all = s({
		args: ["array"],
		pre: a,
		body: {
			args: [{
				name: "x",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			body: "if(!x){return false}",
			localVars: [],
			thisVars: []
		},
		post: {
			args: [],
			localVars: [],
			thisVars: [],
			body: "return true"
		},
		funcName: "all"
	}), e.sum = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=0"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			body: "this_s+=a",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return this_s"
		},
		funcName: "sum"
	}), e.prod = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=1"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			body: "this_s*=a",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return this_s"
		},
		funcName: "prod"
	}), e.norm2squared = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=0"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			body: "this_s+=a*a",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return this_s"
		},
		funcName: "norm2squared"
	}), e.norm2 = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=0"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			body: "this_s+=a*a",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return Math.sqrt(this_s)"
		},
		funcName: "norm2"
	}), e.norminf = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=0"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 4
			}],
			body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return this_s"
		},
		funcName: "norminf"
	}), e.norm1 = s({
		args: ["array"],
		pre: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "this_s=0"
		},
		body: {
			args: [{
				name: "a",
				lvalue: !1,
				rvalue: !0,
				count: 3
			}],
			body: "this_s+=a<0?-a:a",
			localVars: [],
			thisVars: ["this_s"]
		},
		post: {
			args: [],
			localVars: [],
			thisVars: ["this_s"],
			body: "return this_s"
		},
		funcName: "norm1"
	}), e.sup = s({
		args: ["array"],
		pre: {
			body: "this_h=-Infinity",
			args: [],
			thisVars: ["this_h"],
			localVars: []
		},
		body: {
			body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
			args: [{
				name: "_inline_1_arg0_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			thisVars: ["this_h"],
			localVars: []
		},
		post: {
			body: "return this_h",
			args: [],
			thisVars: ["this_h"],
			localVars: []
		}
	}), e.inf = s({
		args: ["array"],
		pre: {
			body: "this_h=Infinity",
			args: [],
			thisVars: ["this_h"],
			localVars: []
		},
		body: {
			body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
			args: [{
				name: "_inline_1_arg0_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			thisVars: ["this_h"],
			localVars: []
		},
		post: {
			body: "return this_h",
			args: [],
			thisVars: ["this_h"],
			localVars: []
		}
	}), e.argmin = s({
		args: ["index", "array", "shape"],
		pre: {
			body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
			args: [{
				name: "_inline_0_arg0_",
				lvalue: !1,
				rvalue: !1,
				count: 0
			}, {
				name: "_inline_0_arg1_",
				lvalue: !1,
				rvalue: !1,
				count: 0
			}, {
				name: "_inline_0_arg2_",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			thisVars: ["this_i", "this_v"],
			localVars: []
		},
		body: {
			body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
			args: [{
				name: "_inline_1_arg0_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}, {
				name: "_inline_1_arg1_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			thisVars: ["this_i", "this_v"],
			localVars: ["_inline_1_k"]
		},
		post: {
			body: "{return this_i}",
			args: [],
			thisVars: ["this_i"],
			localVars: []
		}
	}), e.argmax = s({
		args: ["index", "array", "shape"],
		pre: {
			body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
			args: [{
				name: "_inline_0_arg0_",
				lvalue: !1,
				rvalue: !1,
				count: 0
			}, {
				name: "_inline_0_arg1_",
				lvalue: !1,
				rvalue: !1,
				count: 0
			}, {
				name: "_inline_0_arg2_",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			thisVars: ["this_i", "this_v"],
			localVars: []
		},
		body: {
			body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
			args: [{
				name: "_inline_1_arg0_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}, {
				name: "_inline_1_arg1_",
				lvalue: !1,
				rvalue: !0,
				count: 2
			}],
			thisVars: ["this_i", "this_v"],
			localVars: ["_inline_1_k"]
		},
		post: {
			body: "{return this_i}",
			args: [],
			thisVars: ["this_i"],
			localVars: []
		}
	}), e.random = o({
		args: ["array"],
		pre: {
			args: [],
			body: "this_f=Math.random",
			thisVars: ["this_f"]
		},
		body: {
			args: ["a"],
			body: "a=this_f()",
			thisVars: ["this_f"]
		},
		funcName: "random"
	}), e.assign = o({
		args: ["array", "array"],
		body: {
			args: ["a", "b"],
			body: "a=b"
		},
		funcName: "assign"
	}), e.assigns = o({
		args: ["array", "scalar"],
		body: {
			args: ["a", "b"],
			body: "a=b"
		},
		funcName: "assigns"
	}), e.equals = s({
		args: ["array", "array"],
		pre: a,
		body: {
			args: [{
				name: "x",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}, {
				name: "y",
				lvalue: !1,
				rvalue: !0,
				count: 1
			}],
			body: "if(x!==y){return false}",
			localVars: [],
			thisVars: []
		},
		post: {
			args: [],
			localVars: [],
			thisVars: [],
			body: "return true"
		},
		funcName: "equals"
	})
}, function(t, e, i) {
	"use strict";
	(function(t, r) {
		function n(t) {
			if (t) {
				var e = t.length || t.byteLength,
					i = g.log2(e);
				E[i].push(t)
			}
		}

		function o(t) {
			n(t.buffer)
		}

		function s(t) {
			var t = g.nextPow2(t),
				e = g.log2(t),
				i = E[e];
			return i.length > 0 ? i.pop() : new ArrayBuffer(t)
		}

		function a(t) {
			return new Uint8Array(s(t), 0, t)
		}

		function l(t) {
			return new Uint16Array(s(2 * t), 0, t)
		}

		function u(t) {
			return new Uint32Array(s(4 * t), 0, t)
		}

		function h(t) {
			return new Int8Array(s(t), 0, t)
		}

		function c(t) {
			return new Int16Array(s(2 * t), 0, t)
		}

		function d(t) {
			return new Int32Array(s(4 * t), 0, t)
		}

		function f(t) {
			return new Float32Array(s(4 * t), 0, t)
		}

		function p(t) {
			return new Float64Array(s(8 * t), 0, t)
		}

		function _(t) {
			return b ? new Uint8ClampedArray(s(t), 0, t) : a(t)
		}

		function y(t) {
			return new DataView(s(t), 0, t)
		}

		function v(t) {
			t = g.nextPow2(t);
			var e = g.log2(t),
				i = T[e];
			return i.length > 0 ? i.pop() : new r(t)
		}
		var g = i(68),
			m = i(69);
		t.__TYPEDARRAY_POOL || (t.__TYPEDARRAY_POOL = {
			UINT8: m([32, 0]),
			UINT16: m([32, 0]),
			UINT32: m([32, 0]),
			INT8: m([32, 0]),
			INT16: m([32, 0]),
			INT32: m([32, 0]),
			FLOAT: m([32, 0]),
			DOUBLE: m([32, 0]),
			DATA: m([32, 0]),
			UINT8C: m([32, 0]),
			BUFFER: m([32, 0])
		});
		var b = "undefined" != typeof Uint8ClampedArray,
			w = t.__TYPEDARRAY_POOL;
		w.UINT8C || (w.UINT8C = m([32, 0])), w.BUFFER || (w.BUFFER = m([32, 0]));
		var E = w.DATA,
			T = w.BUFFER;
		e.free = function(t) {
			if (r.isBuffer(t)) T[g.log2(t.length)].push(t);
			else {
				if ("[object ArrayBuffer]" !== Object.prototype.toString.call(t) && (t = t.buffer), !t) return;
				var e = t.length || t.byteLength,
					i = 0 | g.log2(e);
				E[i].push(t)
			}
		}, e.freeUint8 = e.freeUint16 = e.freeUint32 = e.freeInt8 = e.freeInt16 = e.freeInt32 = e.freeFloat32 = e.freeFloat = e.freeFloat64 = e.freeDouble = e.freeUint8Clamped = e.freeDataView = o, e.freeArrayBuffer = n, e.freeBuffer = function(t) {
			T[g.log2(t.length)].push(t)
		}, e.malloc = function(t, e) {
			if (void 0 === e || "arraybuffer" === e) return s(t);
			switch (e) {
				case "uint8":
					return a(t);
				case "uint16":
					return l(t);
				case "uint32":
					return u(t);
				case "int8":
					return h(t);
				case "int16":
					return c(t);
				case "int32":
					return d(t);
				case "float":
				case "float32":
					return f(t);
				case "double":
				case "float64":
					return p(t);
				case "uint8_clamped":
					return _(t);
				case "buffer":
					return v(t);
				case "data":
				case "dataview":
					return y(t);
				default:
					return null
			}
			return null
		}, e.mallocArrayBuffer = s, e.mallocUint8 = a, e.mallocUint16 = l, e.mallocUint32 = u, e.mallocInt8 = h, e.mallocInt16 = c, e.mallocInt32 = d, e.mallocFloat32 = e.mallocFloat = f, e.mallocFloat64 = e.mallocDouble = p, e.mallocUint8Clamped = _, e.mallocDataView = y, e.mallocBuffer = v, e.clearCache = function() {
			for (var t = 0; t < 32; ++t) w.UINT8[t].length = 0, w.UINT16[t].length = 0, w.UINT32[t].length = 0, w.INT8[t].length = 0, w.INT16[t].length = 0, w.INT32[t].length = 0, w.FLOAT[t].length = 0, w.DOUBLE[t].length = 0, w.UINT8C[t].length = 0, E[t].length = 0, T[t].length = 0
		}
	}).call(e, i(6), i(64).Buffer)
}, function(t, e) {
	! function() {
		"use strict";

		function e(t) {
			t.permitHostObjects___ && t.permitHostObjects___(e)
		}

		function i(t) {
			return !(t.substr(0, f.length) == f && "___" === t.substr(t.length - 3))
		}

		function r(t) {
			if (t !== Object(t)) throw new TypeError("Not an object: " + t);
			var e = t[p];
			if (e && e.key === t) return e;
			if (d(t)) {
				e = {
					key: t
				};
				try {
					return c(t, p, {
						value: e,
						writable: !1,
						enumerable: !1,
						configurable: !1
					}), e
				} catch (t) {
					return
				}
			}
		}

		function n(t) {
			return t.prototype = null, Object.freeze(t)
		}

		function o() {
			g || "undefined" == typeof console || (g = !0, console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))
		}
		if ("undefined" == typeof ses || !ses.ok || ses.ok()) {
			"undefined" != typeof ses && (ses.weakMapPermitHostObjects = e);
			var s = !1;
			if ("function" == typeof WeakMap) {
				var a = WeakMap;
				if ("undefined" != typeof navigator && /Firefox/.test(navigator.userAgent));
				else {
					var l = new a,
						u = Object.freeze({});
					if (l.set(u, 1), 1 === l.get(u)) return void(t.exports = WeakMap);
					s = !0
				}
			}
			var h = (Object.prototype.hasOwnProperty, Object.getOwnPropertyNames),
				c = Object.defineProperty,
				d = Object.isExtensible,
				f = "weakmap:",
				p = f + "ident:" + Math.random() + "___";
			if ("undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof ArrayBuffer && "function" == typeof Uint8Array) {
				var _ = new ArrayBuffer(25),
					y = new Uint8Array(_);
				crypto.getRandomValues(y), p = f + "rand:" + Array.prototype.map.call(y, function(t) {
					return (t % 36).toString(36)
				}).join("") + "___"
			}
			if (c(Object, "getOwnPropertyNames", {
					value: function(t) {
						return h(t).filter(i)
					}
				}), "getPropertyNames" in Object) {
				var v = Object.getPropertyNames;
				c(Object, "getPropertyNames", {
					value: function(t) {
						return v(t).filter(i)
					}
				})
			}! function() {
				var t = Object.freeze;
				c(Object, "freeze", {
					value: function(e) {
						return r(e), t(e)
					}
				});
				var e = Object.seal;
				c(Object, "seal", {
					value: function(t) {
						return r(t), e(t)
					}
				});
				var i = Object.preventExtensions;
				c(Object, "preventExtensions", {
					value: function(t) {
						return r(t), i(t)
					}
				})
			}();
			var g = !1,
				m = 0,
				b = function() {
					function t(t, e) {
						var i, n = r(t);
						return n ? u in n ? n[u] : e : (i = a.indexOf(t), i >= 0 ? l[i] : e)
					}

					function e(t) {
						var e = r(t);
						return e ? u in e : a.indexOf(t) >= 0
					}

					function i(t, e) {
						var i, n = r(t);
						return n ? n[u] = e : (i = a.indexOf(t), i >= 0 ? l[i] = e : (i = a.length, l[i] = e, a[i] = t)), this
					}

					function s(t) {
						var e, i, n = r(t);
						return n ? u in n && delete n[u] : !((e = a.indexOf(t)) < 0) && (i = a.length - 1, a[e] = void 0, l[e] = l[i], a[e] = a[i], a.length = i, l.length = i, !0)
					}
					this instanceof b || o();
					var a = [],
						l = [],
						u = m++;
					return Object.create(b.prototype, {
						get___: {
							value: n(t)
						},
						has___: {
							value: n(e)
						},
						set___: {
							value: n(i)
						},
						delete___: {
							value: n(s)
						}
					})
				};
			b.prototype = Object.create(Object.prototype, {
				get: {
					value: function(t, e) {
						return this.get___(t, e)
					},
					writable: !0,
					configurable: !0
				},
				has: {
					value: function(t) {
						return this.has___(t)
					},
					writable: !0,
					configurable: !0
				},
				set: {
					value: function(t, e) {
						return this.set___(t, e)
					},
					writable: !0,
					configurable: !0
				},
				delete: {
					value: function(t) {
						return this.delete___(t)
					},
					writable: !0,
					configurable: !0
				}
			}), "function" == typeof a ? function() {
				function i() {
					function t(t, e) {
						return h ? u.has(t) ? u.get(t) : h.get___(t, e) : u.get(t, e)
					}

					function i(t) {
						return u.has(t) || !!h && h.has___(t)
					}

					function r(t) {
						var e = !!u.delete(t);
						return h ? h.delete___(t) || e : e
					}
					this instanceof b || o();
					var l, u = new a,
						h = void 0,
						c = !1;
					return l = s ? function(t, e) {
						return u.set(t, e), u.has(t) || (h || (h = new b), h.set(t, e)), this
					} : function(t, e) {
						if (c) try {
							u.set(t, e)
						} catch (i) {
							h || (h = new b), h.set___(t, e)
						} else u.set(t, e);
						return this
					}, Object.create(b.prototype, {
						get___: {
							value: n(t)
						},
						has___: {
							value: n(i)
						},
						set___: {
							value: n(l)
						},
						delete___: {
							value: n(r)
						},
						permitHostObjects___: {
							value: n(function(t) {
								if (t !== e) throw new Error("bogus call to permitHostObjects___");
								c = !0
							})
						}
					})
				}
				s && "undefined" != typeof Proxy && (Proxy = void 0), i.prototype = b.prototype, t.exports = i, Object.defineProperty(WeakMap.prototype, "constructor", {
					value: WeakMap,
					enumerable: !1,
					configurable: !0,
					writable: !0
				})
			}() : ("undefined" != typeof Proxy && (Proxy = void 0), t.exports = b)
		}
	}()
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		e ? e.bind() : t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
		var r = 0 | t.getParameter(t.MAX_VERTEX_ATTRIBS);
		if (i) {
			if (i.length > r) throw new Error("gl-vao: Too many vertex attributes");
			for (var n = 0; n < i.length; ++n) {
				var o = i[n];
				if (o.buffer) {
					var s = o.buffer,
						a = o.size || 4,
						l = o.type || t.FLOAT,
						u = !!o.normalized,
						h = o.stride || 0,
						c = o.offset || 0;
					s.bind(), t.enableVertexAttribArray(n), t.vertexAttribPointer(n, a, l, u, h, c)
				} else {
					if ("number" == typeof o) t.vertexAttrib1f(n, o);
					else if (1 === o.length) t.vertexAttrib1f(n, o[0]);
					else if (2 === o.length) t.vertexAttrib2f(n, o[0], o[1]);
					else if (3 === o.length) t.vertexAttrib3f(n, o[0], o[1], o[2]);
					else {
						if (4 !== o.length) throw new Error("gl-vao: Invalid vertex attribute");
						t.vertexAttrib4f(n, o[0], o[1], o[2], o[3])
					}
					t.disableVertexAttribArray(n)
				}
			}
			for (; n < r; ++n) t.disableVertexAttribArray(n)
		} else {
			t.bindBuffer(t.ARRAY_BUFFER, null);
			for (var n = 0; n < r; ++n) t.disableVertexAttribArray(n)
		}
	}
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		for (var i = {}, r = 0; r < t.length; ++r)
			for (var n = t[r].name, o = n.split("."), s = i, a = 0; a < o.length; ++a) {
				var l = o[a].split("[");
				if (l.length > 1) {
					l[0] in s || (s[l[0]] = []), s = s[l[0]];
					for (var u = 1; u < l.length; ++u) {
						var h = parseInt(l[u]);
						u < l.length - 1 || a < o.length - 1 ? (h in s || (u < l.length - 1 ? s[h] = [] : s[h] = {}), s = s[h]) : s[h] = e ? r : t[r].type
					}
				} else a < o.length - 1 ? (l[0] in s || (s[l[0]] = {}), s = s[l[0]]) : s[l[0]] = e ? r : t[r].type
			}
		return i
	}
	t.exports = r
}, function(t, e) {
	t.exports = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]
}, function(t, e) {
	t.exports = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			c = i(112),
			d = r(c),
			f = i(115),
			p = r(f),
			_ = i(117),
			y = r(_),
			v = i(118),
			g = r(v),
			m = i(7),
			b = r(m),
			w = i(0),
			E = r(w),
			T = i(3),
			x = r(T),
			O = (l = function(t) {
				function e() {
					n(this, e);
					var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
					return t._appendTemplate(), t
				}
				return s(e, t), u(e, [{
					key: "_appendTemplate",
					value: function() {
						this._type = "html", h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_appendTemplate", this).call(this)
					}
				}, {
					key: "_init",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_init", this).call(this), this._initControls(), this._initOverlay(), this._initEvents()
					}
				}, {
					key: "_initVideo",
					value: function() {
						this._video = new p.default(this.dom.getElementsByTagName("video")[0])
					}
				}, {
					key: "_initOverlay",
					value: function() {
						this._overlayDom = this._container.getElementsByClassName("videoplayer-overlay")[0], this._videoOverlay = new y.default(this._overlayDom, this.overlay, this.clickToPlay), this.overlay || this._videoOverlay.hide()
					}
				}, {
					key: "_initControls",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_initControls", this).call(this);
						var t = !this.directPlay;
						this.controls && !this.isIphone && (this._videoControls = new g.default(this.dom, this.overlay, this.showControls, t, this.allowSpacebarBinding))
					}
				}, {
					key: "_initEvents",
					value: function() {
						var t = this;
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_initEvents", this).call(this), this._video.loadedMetadata.add(this._onVideoReady), this._video.errored.add(this._onVideoError), this._video.ended.add(this._onVideoEnd), this.isMuted && (this.mute(), this.controls && !this.isIphone && this._videoControls.toggleMuteBtn && this._videoControls.setIconMute()), E.default.touch && this.clickToPlay && this._video.dom.addEventListener(b.default.CLICK, function() {
							t.togglePlay()
						})
					}
				}, {
					key: "setMedia",
					value: function(t) {
						for (var e = ["video/webm", "video/mp4"], i = 0, r = this._videoPath.length; i < r; i++)
							for (var n = 0, o = e.length; n < o; n++) {
								var s = e[n].split("/")[1];
								if (this._videoPath[i].indexOf(s) > -1) {
									var a = document.createElement("source");
									a.setAttribute("src", this._videoPath[i]), a.setAttribute("type", e[n]), this._video.dom.appendChild(a)
								}
							}
					}
				}, {
					key: "play",
					value: function() {
						!this.isFullscreen && this.isPhone && this.toggleFullscreen(), h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "play", this).call(this)
					}
				}, {
					key: "pause",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "pause", this).call(this), this.isPhone && this._videoOverlay && !this._videoOverlay.isDisplayed && this._videoOverlay.show()
					}
				}, {
					key: "mute",
					value: function() {
						this._video.dom.volume = 0, h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mute", this).call(this)
					}
				}, {
					key: "toggleMute",
					value: function() {
						this.isMuted ? (this._video.volume = 1, this._onVideoUnmuted()) : (this._video.volume = 0, this._onVideoMuted()), h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "toggleMute", this).call(this)
					}
				}, {
					key: "seek",
					value: function(t) {
						this._video.seek(t), this._updateProgress(!0)
					}
				}, {
					key: "stop",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "stop", this).call(this), this._updateProgress(!0)
					}
				}, {
					key: "_onBrowserFullscreenChange",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_onBrowserFullscreenChange", this).call(this), this.isPhone && !this.isFullscreen && this.pause()
					}
				}, {
					key: "update",
					value: function() {
						(this.isReady || this.isLoaded) && 4 === this._video.dom.readyState && this.controls && !this.isIphone && (this._updateBuffer(), this.isPaused || this._updateProgress())
					}
				}, {
					key: "_updateProgress",
					value: function(t) {
						var e = this._video.currentTime / this._video.duration;
						t ? this._progress = e : this._progress += .2 * (e - this._progress), this._videoControls && this._videoControls.progressBar && x.default.transform(this._videoControls.progressBar, "translateZ(0) scaleX(" + this._progress + ")")
					}
				}, {
					key: "_updateBuffer",
					value: function() {
						var t = this._video.buffered;
						this._videoControls && t.length > 0 && this._videoControls.updateBufferRange(t.end(t.length - 1), this.duration)
					}
				}, {
					key: "destroy",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
					}
				}, {
					key: "_onVideoReady",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_onVideoReady", this).call(this), this.clickToPlay && (this._videoOverlay.isTouchable = !0)
					}
				}]), e
			}(d.default), a(l.prototype, "play", [t], Object.getOwnPropertyDescriptor(l.prototype, "play"), l.prototype), a(l.prototype, "pause", [t], Object.getOwnPropertyDescriptor(l.prototype, "pause"), l.prototype), a(l.prototype, "mute", [t], Object.getOwnPropertyDescriptor(l.prototype, "mute"), l.prototype), a(l.prototype, "toggleMute", [t], Object.getOwnPropertyDescriptor(l.prototype, "toggleMute"), l.prototype), a(l.prototype, "seek", [t], Object.getOwnPropertyDescriptor(l.prototype, "seek"), l.prototype), a(l.prototype, "stop", [t], Object.getOwnPropertyDescriptor(l.prototype, "stop"), l.prototype), a(l.prototype, "_onBrowserFullscreenChange", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onBrowserFullscreenChange"), l.prototype), a(l.prototype, "_onVideoReady", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onVideoReady"), l.prototype), l);
		e.default = O
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o, s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		a = i(7),
		l = r(a),
		u = i(1),
		h = r(u),
		c = i(2),
		d = r(c),
		f = (o = function() {
			function t(e, i, r) {
				n(this, t), this._path = i, this._dom = e, this.clickToPlay = r
			}
			return s(t, [{
				key: "_init",
				value: function() {
					this.isDisplayed = !0, this._isTouchable = !0, this._dom.parentNode.classList.add("has-overlay"), this._path && (this._dom.style.background = "url(" + this._path + ") no-repeat center center / cover"), this._button = this._dom.getElementsByTagName("button")[0], this.clicked = new d.default, this.toggledPlay = new d.default
				}
			}, {
				key: "_initEvents",
				value: function() {
					this._dom.addEventListener(l.default.CLICK, this.onOverlayClick)
				}
			}, {
				key: "show",
				value: function() {
					this.isDisplayed = !0, this._dom.style.opacity = 1, this._dom.parentNode && this._dom.parentNode.classList.add("has-overlay")
				}
			}, {
				key: "hide",
				value: function() {
					this.isDisplayed = !1, this._dom.style.opacity = 0, this._dom.parentNode && this._dom.parentNode.classList.remove("has-overlay")
				}
			}, {
				key: "destroy",
				value: function() {
					this._dom.removeEventListener(l.default.CLICK, this.onOverlayClick), this.clicked.dispose(), this.toggledPlay.dispose(), this.isDisplayed = !1, this._button && this._dom.removeChild(this._button), this._imgPoster && this._dom.removeChild(this._imgPoster)
				}
			}, {
				key: "onOverlayClick",
				value: function() {
					this.isDisplayed ? this.clicked.dispatch() : (this.clickToPlay && this._isTouchable && this._path || this.clickToPlay && !this._path) && this.toggledPlay.dispatch()
				}
			}, {
				key: "poster",
				get: function() {
					return this._path
				},
				set: function(t) {
					this._path = t, this._imgPoster && this._imgPoster.setAttribute("src", this._path)
				}
			}, {
				key: "isTouchable",
				get: function() {
					return this._isTouchable
				},
				set: function(t) {
					this._isTouchable = t, this._dom.style.pointerEvents = t ? "auto" : "none"
				}
			}]), t
		}(), function(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}(o.prototype, "onOverlayClick", [h.default], Object.getOwnPropertyDescriptor(o.prototype, "onOverlayClick"), o.prototype), o);
	e.default = f
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		o = i(0),
		s = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(o),
		a = function() {
			function t() {
				r(this, t)
			}
			return n(t, null, [{
				key: "openShare",
				value: function(t) {
					t.preventDefault(), t.stopPropagation();
					var e = (s.default.width - 600) / 2,
						i = (s.default.height - 300) / 2;
					window.open(t.currentTarget.href, "", "left=" + e + ",top=" + i + ",width=600,height=300")
				}
			}, {
				key: "setAsCover",
				value: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
					if ("objectFit" in document.documentElement.style == !1) {
						t.style.transform = "";
						var i = t.offsetWidth,
							r = t.offsetHeight,
							n = e.innerWidth || e.offsetWidth,
							o = e.innerHeight || e.offsetHeight,
							s = n / i,
							a = o / r,
							l = s > a ? s : a;
						t.style.top = "50%", t.style.left = "50%", t.style.width = "auto", t.style.height = "auto", t.style.transform = "translate(-50%, -50%) scale(" + l + ")"
					} else t.style.top = 0, t.style.left = 0, t.style.transform = "", t.style.width = "100%", t.style.height = "100%", t.style.objectFit = "cover"
				}
			}]), t
		}();
	e.default = a
}, function(t, e, i) {
	"use strict";
	var r = i(30),
		n = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(r),
		o = function t() {
			document.removeEventListener("DOMContentLoaded", t);
			var e = new n.default;
			! function t() {
				e.update(), window.requestAnimationFrame(t)
			}()
		};
	document.addEventListener("DOMContentLoaded", o)
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(31),
		a = (r(s), i(32)),
		l = (r(a), i(33)),
		u = (r(l), i(13)),
		h = (r(u), i(34)),
		c = (r(h), i(0)),
		d = r(c),
		f = i(14),
		p = (r(f), i(38)),
		_ = r(p),
		y = i(128),
		v = r(y),
		g = i(130),
		m = r(g),
		b = i(131),
		w = (r(b), function() {
			function t() {
				n(this, t), m.default.defaultForce3D = !0, d.default.resize(), this._init(), window.addEventListener("resize", this._onResize.bind(this))
			}
			return o(t, [{
				key: "_init",
				value: function() {
					new v.default;
					this._pageManager = new _.default
				}
			}, {
				key: "update",
				value: function() {
					this._pageManager && this._pageManager.update()
				}
			}, {
				key: "_onResize",
				value: function() {
					d.default.resize(), this._pageManager && this._pageManager.resize()
				}
			}]), t
		}());
	e.default = w
}, function(t, e, i) {
	"use strict";

	function r(t) {
		if (Array.isArray(t)) {
			for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
			return i
		}
		return Array.from(t)
	}
	var n = function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
		if ("string" != typeof t) throw console.log("Queryselector error for", t), new Error("Required argument selector is not a String or undefined: ");
		var i = e.querySelectorAll(t);
		return 0 !== i.length && "#" === [].concat(r(t.split(" "))).pop().charAt(0) ? i[0] : i
	};
	Node.prototype.$ || (window.$ = Node.prototype.$ = NodeList.prototype.$ = function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
		return n(t, e)
	})
}, function(t, e, i) {
	"use strict";
	t.exports = function() {
		window.requestAnimationFrame = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
				window.setTimeout(t, 1e3 / 60)
			}
		}()
	}()
}, function(t, e, i) {
	"use strict";
	t.exports = function() {
		window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""))
	}()
}, function(t, e, i) {
	"use strict";
	"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
		value: function(t, e) {
			if (null == t) throw new TypeError("Cannot convert undefined or null to object");
			for (var i = Object(t), r = 1; r < arguments.length; r++) {
				var n = arguments[r];
				if (null != n)
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (i[o] = n[o])
			}
			return i
		},
		writable: !0,
		configurable: !0
	})
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = {
		update: function() {
			"undefined" != typeof window && "function" == typeof window.matchMedia && (r.hover = window.matchMedia("(hover: hover)").matches, r.none = window.matchMedia("(hover: none)").matches || window.matchMedia("(hover: on-demand)").matches, r.anyHover = window.matchMedia("(any-hover: hover)").matches, r.anyNone = window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: on-demand)").matches)
		}
	};
	r.update(), e.default = r
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = {
		update: function() {
			"undefined" != typeof window && "function" == typeof window.matchMedia && (r.fine = window.matchMedia("(pointer: fine)").matches, r.coarse = window.matchMedia("(pointer: coarse)").matches, r.none = window.matchMedia("(pointer: none)").matches, r.anyFine = window.matchMedia("(any-pointer: fine)").matches, r.anyCoarse = window.matchMedia("(any-pointer: coarse)").matches, r.anyNone = window.matchMedia("(any-pointer: none)").matches)
		}
	};
	r.update(), e.default = r
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = {
		update: function() {
			"undefined" != typeof window && (r.hasSupport = "ontouchstart" in window, r.browserSupportsApi = Boolean(window.TouchEvent))
		}
	};
	r.update(), e.default = r
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(39),
			u = r(l),
			h = i(44),
			c = i(127),
			d = r(c),
			f = i(9),
			p = r(f),
			_ = (s = function() {
				function t() {
					n(this, t), this._router = new u.default, this.init()
				}
				return a(t, [{
					key: "init",
					value: function() {
						this._content = document.getElementById("container");
						var e = this._content.children,
							i = e[e.length - 1];
						t.currentId = i.getAttribute("id"), this._router.changed.add(this._onStateChange.bind(this)), this._ajaxify(i)
					}
				}, {
					key: "update",
					value: function() {
						this._popin && this._popin.update(), this._page && this._page.update(), this._previousPage && this._previousPage.update()
					}
				}, {
					key: "resize",
					value: function() {
						this._popin && this._popin.resize(), this._page && this._page.resize(), this._previousPage && this._previousPage.resize()
					}
				}, {
					key: "_ajaxify",
					value: function(e, i) {
						var r;
						r = h.sitemap.pages[t.currentId] ? h.sitemap.pages[t.currentId].class : h.sitemap.pages.default.class, i || (this._previousPage = this._page);
						var n = new r.default(e, this._page);
						n.init(), n.shown.add(this._onPageShown), i ? (this._popin = n, this._popin.hidden.add(this._onPopinHidden)) : (this._page = n, this._previousPage && (this._previousPage.hidden.add(this._onPageHidden), this._previousPage.hide(this._page))), n.show()
					}
				}, {
					key: "_setContent",
					value: function(e, i) {
						for (var r = new DOMParser, n = r.parseFromString(e, "text/html"), o = $("#container", n), s = o.children[o.children.length - 1], a = $("video", s), l = 0, h = a.length; l < h; l++) {
							var c = a[l],
								d = document.createElement("video");
							d.preload = c.preload, d.autoplay = c.autoplay, d.loop = c.loop, d.muted = c.muted, d.playsinline = c.playsinline, d.poster = c.poster, d.className = c.className;
							for (var f = $("source", c), _ = 0, y = f.length; _ < y; _++) {
								var v = f[_];
								d.appendChild(v)
							}
							c.parentNode.insertBefore(d, c), c.parentNode.removeChild(c)
						}
						if ("touchOnly" !== p.default.deviceType)
							for (var g = $("img", s), m = 0, b = g.length; m < b; m++) {
								var w = g[m];
								w.classList.contains("mobile") && w.parentNode.removeChild(w)
							}
						this._content.appendChild(s);
						var E = $("title", n)[0];
						t.currentId = s.getAttribute("id"), u.default.setTitle(E.innerText), this._ajaxify(s, i)
					}
				}, {
					key: "_onStateChange",
					value: function(t) {
						var e = this;
						this._page && this._page.scrollable && (this._page.scrollable.isLocked = !0), this._xhr && this._xhr.abort();
						var i = function(i, r) {
								e._setContent(i, t && t.popin)
							},
							r = function(t, i) {
								document.body.classList.remove("loading"), e._router.locked = !0, e._xhr = null
							};
						document.body.classList.add("loading"), this._xhr = (0, d.default)().get(this._router.url), this._xhr.then(i), this._xhr.always(r)
					}
				}, {
					key: "_onPageHidden",
					value: function() {
						window.scrollTo(0, 0), this._page.isShown && (this._previousPage.isDestroyed || this._previousPage.destroy(), this._previousPage = null, this._router.locked = !1)
					}
				}, {
					key: "_onPopinHidden",
					value: function() {
						this._popin.destroy(), this._popin = null
					}
				}, {
					key: "_onPageShown",
					value: function() {
						this._previousPage && this._previousPage.isHidden && (this._previousPage.isDestroyed || this._previousPage.destroy(), this._previousPage = null, this._router.locked = !1)
					}
				}]), t
			}(), o(s.prototype, "_onPageHidden", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onPageHidden"), s.prototype), o(s.prototype, "_onPopinHidden", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onPopinHidden"), s.prototype), o(s.prototype, "_onPageShown", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onPageShown"), s.prototype), s);
		e.default = _
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o, s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		a = i(14),
		l = r(a),
		u = i(0),
		h = (r(u), i(7)),
		c = (r(h), i(40)),
		d = (r(c), i(2)),
		f = r(d),
		p = i(41),
		_ = r(p),
		y = i(1),
		v = r(y),
		g = i(43),
		m = (r(g), o = function() {
			function t() {
				n(this, t), this.changed = new f.default,
					function(t) {
						var e = t.pushState;
						t.pushState = function(i, r, n) {
							i.url = n;
							var o = new CustomEvent("popstate", {
									detail: i
								}),
								s = e.apply(t, arguments);
							return window.dispatchEvent(o), s
						}
					}(window.history), (0, _.default)(document.body, "a:not([target])", "click", this._onClickLink.bind(this)), window.addEventListener("popstate", this._onPopState), window.addEventListener("pushstate", this._onPopState), this.parser = document.createElement("a"), this.url = window.location.href, "" !== window.location.hash && (this.url = this.url.replace("/" + window.location.hash, "").replace(window.location.hash, "")), this.origin = window.location.origin, history.replaceState(null, document.title, this.url)
			}
			return s(t, [{
				key: "_onClickLink",
				value: function(t) {
					if (1 !== t.button) {
						t.preventDefault();
						var e = t.delegateTarget;
						this.parser.href = e.getAttribute("href");
						var i = "";
						"/" !== this.parser.pathname[0] && (i = "/");
						var r = this.origin + i + this.parser.pathname + this.parser.search + this.parser.hash,
							n = "true" === e.getAttribute("data-prevent"),
							o = "true" === e.getAttribute("data-popin");
						history.pushState({
							prevented: n,
							popin: o
						}, l.default.TITLE, r)
					}
				}
			}, {
				key: "_onPopState",
				value: function(t) {
					var e = t.detail,
						i = window.location.href;
					"" !== window.location.hash && i.replace("/" + window.location.hash, "").replace(window.location.hash, ""), this.url !== i && (this.url = i, window.ga && ga("send", "pageview"), e && e.prevented || this.changed.dispatch(e))
				}
			}], [{
				key: "setTitle",
				value: function(t) {
					document.title = t
				}
			}, {
				key: "setCurrentId",
				value: function(e) {
					t.currentId = e
				}
			}]), t
		}(), function(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}(o.prototype, "_onPopState", [v.default], Object.getOwnPropertyDescriptor(o.prototype, "_onPopState"), o.prototype), o);
	e.default = m
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function t() {
		r(this, t)
	};
	e.default = n, n.CHANGE = "routerchange"
}, function(t, e, i) {
	"use strict";

	function r(t, e, i, r, o) {
		var s = n.apply(this, arguments);
		return t.addEventListener(i, s, o), {
			destroy: function() {
				t.removeEventListener(i, s, o)
			}
		}
	}

	function n(t, e, i, r) {
		return function(i) {
			i.delegateTarget = (0, s.default)(i.target, e), i.delegateTarget && r.call(t, i)
		}
	}
	var o = i(42),
		s = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(o);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		for (; t && t.nodeType !== n;) {
			if (t.matches(e)) return t;
			t = t.parentNode
		}
	}
	var n = 9;
	if ("undefined" != typeof Element && !Element.prototype.matches) {
		var o = Element.prototype;
		o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
	}
	t.exports = r
}, function(t, e, i) {
	"use strict";
	! function() {
		function t(t, e) {
			e = e || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var i = document.createEvent("CustomEvent");
			return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
		}
		if ("function" == typeof window.CustomEvent) return !1;
		t.prototype = window.Event.prototype, window.CustomEvent = t
	}()
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	e.sitemap = {
		pages: {
			default: {
				class: i(4)
			},
			home: {
				class: i(52)
			},
			cases: {
				class: i(109)
			},
			case: {
				class: i(110)
			},
			career: {
				class: i(122)
			},
			contact: {
				class: i(123)
			},
			cool: {
				class: i(125)
			},
			cools: {
				class: i(126)
			}
		}
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function o(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var a = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		l = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		u = i(46),
		h = r(u),
		c = i(15),
		d = r(c),
		f = i(49),
		p = r(f),
		_ = i(0),
		y = r(_),
		v = function(t) {
			function e(t, i) {
				return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return s(e, t), a(e, [{
				key: "init",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._initScrolling()
				}
			}, {
				key: "_initScrolling",
				value: function() {
					var t = $(".scrollable", this.dom)[0];
					t && !y.default.touchOnly ? (document.body.style.overflow = null, this.scrollable = new d.default(t)) : (document.body.style.overflow = "inherit", this.scrollable = new p.default(t))
				}
			}, {
				key: "resize",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this.scrollable && this.scrollable.resize && (this.scrollable.resize(y.default.height), this.height = this.scrollable.height)
				}
			}, {
				key: "update",
				value: function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), this.scrollable && this.scrollable.update && this.scrollable.update()
				}
			}, {
				key: "destroy",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), this.scrollable && this.scrollable.destroy()
				}
			}, {
				key: "hide",
				value: function(t) {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this, t), this.scrollable && (this.scrollable.isLocked = !0)
				}
			}]), e
		}(h.default);
	e.default = v
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(47),
		a = (r(s), i(2)),
		l = r(a),
		u = function() {
			function t(e, i) {
				n(this, t), this.dom = e, this.id = e.getAttribute("id"), this.uid = this.id + "-" + (1e5 * Math.random() | 0), this.startHide = new l.default, this.hidden = new l.default, this.startShow = new l.default, this.shown = new l.default, i && !i.isHidden && (this._previousPage = i, this._previousPage.hidden.add(this._onPreviousPageHidden.bind(this)))
			}
			return o(t, [{
				key: "init",
				value: function() {}
			}, {
				key: "resize",
				value: function() {}
			}, {
				key: "update",
				value: function() {}
			}, {
				key: "destroy",
				value: function() {
					this.startShow.dispose(), this.shown.dispose(), this.startHide.dispose(), this.hidden.dispose(), this.dom.parentNode.removeChild(this.dom), this.isDestroyed = !0
				}
			}, {
				key: "_onPreviousPageHidden",
				value: function(t) {
					this._previousPage = null
				}
			}, {
				key: "show",
				value: function() {
					this.resize(), this.isHidden = !1, this.startShow.dispatch(), this._show()
				}
			}, {
				key: "_show",
				value: function() {
					this.isShowing = !0
				}
			}, {
				key: "_shown",
				value: function() {
					this.isShown = !0, this.isShowing = !1, this.shown.dispatch(this)
				}
			}, {
				key: "hide",
				value: function(t) {
					this.isShown = !1, this.isHidding = !0, this.startHide.dispatch(), this._hide(t)
				}
			}, {
				key: "_hide",
				value: function(t) {}
			}, {
				key: "_hidden",
				value: function() {
					this.isHidden = !0, this.isHidding = !1, this.hidden.dispatch(this)
				}
			}]), t
		}();
	e.default = u
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function t() {
		r(this, t)
	};
	e.default = n, n.SHOW = "pageshow", n.SHOWN = "pageshown", n.HIDE = "pagehide", n.HIDDEN = "pagehidden"
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = i(0),
			c = r(h),
			d = i(3),
			f = r(d),
			p = i(5),
			_ = r(p),
			y = i(16),
			v = r(y),
			g = (l = function(t) {
				function e(t) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					n(this, e);
					var s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
					return s.thumb = i, s.prevent = r, s.vy = 0, s.percent = 0, s.x = 0, s.y = s._y = 0, s._easing = .5, s._friction = .2, s._frictionTouchRelease = .95, s.isLocked = !1, s._firstScroll = (window.scrollY || window.pageYOffset) > 0, s._mode = "mouse", s._scrollify(), s
				}
				return s(e, t), u(e, [{
					key: "resize",
					value: function(t) {
						this.height = this.dom.getBoundingClientRect().height, this.boundingHeight = t || c.default.height, this._dummy && c.default.mobile ? this._dummy.style.display = "none" : this._dummy && (this._dummy.style.display = null), this._applyConstrains(), this.update(!0)
					}
				}, {
					key: "update",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						if (!this.isLocked)
							if (void 0 !== this._y) {
								if (this.deltaY = this._y - this.y, t) this.vy = 0, this.y = this._y;
								else if ("mouse" === this._mode) this.vy += this.deltaY * this._easing, this.y += this.vy *= this._friction;
								else if ("touch" === this._mode) {
									this.dragging ? (this.y += this.deltaY, this.vy = this.y - this._oy) : (this.y += this.vy, this._y = this.y, this.vy *= this._frictionTouchRelease);
									this.y < 0 ? (this.vy = 0, this.y += (0 - this.y) * (this.dragging ? .5 : .125)) : this.y > this.height - this.boundingHeight && (this.vy = 0, this.y += (this.height - this.boundingHeight - this.y) * (this.dragging ? .5 : .125)), this.thumb && this._updateThumbPosition()
								}
							} else this.y = this._y;
						this.y = (1e3 * this.y | 0) / 1e3, this.preventDomUpdate || this._ox === this.x && this._oy === this.y && !t || this._updateDom(e), this.percent = this.y / (this.height - this.boundingHeight), this._ox = this.x, this._oy = this.y
					}
				}, {
					key: "destroy",
					value: function() {
						this._dummy && this._dummy.parentNode.removeChild(this._dummy), this.dom.removeEventListener("mousedown", this._onMouseDown), this.dom.removeEventListener("touchstart", this._onTouchStart), this.dom.removeEventListener("touchmove", this._onTouchMove), this.dom.removeEventListener("touchend", this._onTouchEnd), this.dom.removeEventListener(this._wheelEvent, this._onMouseScroll)
					}
				}, {
					key: "reset",
					value: function() {
						this.y = this._y = this._oy = this.percent = 0
					}
				}, {
					key: "_updateDom",
					value: function(t) {
						var e = "translate3d(" + this.x + "px," + -this.y + "px,0)";
						t && (e += " " + t), f.default.transform(this.dom, e)
					}
				}, {
					key: "_scrollify",
					value: function() {
						this.dom.style.position = "fixed", this.dom.style.willChange = "transform", this.thumb ? this.thumb.scrolled.add(this._onScroll) : (this._dummy = document.createElement("div"), this._dummy.style.position = "absolute", this._dummy.style.top = 0, this._dummy.style.left = 0, this._dummy.style.width = "1px", this._dummy.style.visibility = "hidden", this.dom.parentNode.appendChild(this._dummy)), this._wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
						var t = !!_.default.hasSupport && {
							passive: !0
						};
						this.dom.addEventListener("mousedown", this._onMouseDown, t), this.dom.addEventListener("touchstart", this._onTouchStart, t), this.dom.addEventListener("touchmove", this._onTouchMove, !this.prevent && t), this.dom.addEventListener("touchend", this._onTouchEnd, t), this.dom.addEventListener(this._wheelEvent, this._onMouseScroll, !1)
					}
				}, {
					key: "_applyConstrains",
					value: function() {
						var t = this.height - this.boundingHeight;
						this._y < 0 ? this._y = 0 : this._y > t && (this._y = t)
					}
				}, {
					key: "_updateThumbPosition",
					value: function() {
						this.height > this.boundingHeight && (this.thumb.percent = this._y / (this.height - this.boundingHeight))
					}
				}, {
					key: "_onMouseDown",
					value: function(t) {
						this._mode = "mouse"
					}
				}, {
					key: "_onMouseScroll",
					value: function(t) {
						this._mode = "mouse", t.stopPropagation(), this.thumb && (t && (t.deltaY ? this._y += 1 === t.deltaMode ? 20 * t.deltaY : t.deltaY : t.wheelDelta && (this._y += -t.wheelDelta / 5)), this._applyConstrains(), this._updateThumbPosition())
					}
				}, {
					key: "_onTouchStart",
					value: function(t) {
						this._mode = "touch", t.stopPropagation(), this.dragging = !0;
						var e = t.touches[0] || t.changedTouches[0];
						this._touchy = e.pageY
					}
				}, {
					key: "_onTouchMove",
					value: function(t) {
						if (!this.isLocked) {
							t.stopPropagation(), this.prevent && t.preventDefault();
							var e = t.touches[0] || t.changedTouches[0],
								i = this._touchy || 0;
							this._touchy = e.pageY, this._y += i - this._touchy
						}
					}
				}, {
					key: "_onTouchEnd",
					value: function(t) {
						this.dragging = !1
					}
				}, {
					key: "_onScroll",
					value: function(t) {
						if (!this.isLocked) {
							this._y = this.thumb ? this.thumb.percent * (this.height - this.boundingHeight) : window.scrollY || window.pageYOffset;
							var e = this._firstScroll;
							this._firstScroll ? (this.y = this._oy = this._y, this._firstScroll = !1, this.update(!0)) : this._y || (this._firstScroll = !1), this.scrolled.dispatch(e)
						}
					}
				}, {
					key: "enabled",
					set: function(t) {
						t ? (this.dom.style.willChange = "transform", this._dummy && (this._dummy.style.display = null), this.thumb || window.scrollTo(0, this.y)) : (this._dummy && (this._dummy.style.display = "none"), this.dom.style.willChange = null), this.isLocked = !t
					},
					get: function() {
						return !this.isLocked
					}
				}, {
					key: "height",
					set: function(t) {
						this._height = t, this._dummy && (this._dummy.style.height = this._height + "px")
					},
					get: function() {
						return this._height
					}
				}]), e
			}(v.default), a(l.prototype, "_onMouseDown", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onMouseDown"), l.prototype), a(l.prototype, "_onMouseScroll", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onMouseScroll"), l.prototype), a(l.prototype, "_onTouchStart", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTouchStart"), l.prototype), a(l.prototype, "_onTouchMove", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTouchMove"), l.prototype), a(l.prototype, "_onTouchEnd", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTouchEnd"), l.prototype), a(l.prototype, "_onScroll", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onScroll"), l.prototype), l);
		e.default = g
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function n(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function o(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		a = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		l = i(16),
		u = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(l),
		h = function(t) {
			function e(t) {
				r(this, e);
				var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
				return i.dom = window, i
			}
			return o(e, t), s(e, [{
				key: "destroy",
				value: function() {
					a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
				}
			}, {
				key: "y",
				set: function(t) {
					window.scrollTo(0, t)
				},
				get: function() {
					return window.scrollY
				}
			}]), e
		}(u.default);
	e.default = h
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		o = i(0),
		s = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(o),
		a = function() {
			function t() {
				r(this, t), this._nav = $(".header .nav")[0], this._navElements = $("a", this._nav);
				for (var e = 0, i = this._navElements.length; e < i; ++e) {
					this._navElements[e].addEventListener("click", this._onClickLink.bind(this))
				}
				this._mode = "white", this._navList = $(".nav__list", this.dom)[0], this._navItems = $(".nav__item:not(.mobile)", this._navList), this._footer = $(".footer", this.dom)[0], this._logo = $(".nav__logo", this.dom)[0], this._burger = $(".burger", this.dom)[0], this._burger.addEventListener("click", this._toggleNav.bind(this)), this._close = $(".close", this.dom)[0], this._close.addEventListener("click", this._closeNav.bind(this)), this._shown = !0
			}
			return n(t, [{
				key: "_onClickLink",
				value: function(t) {
					var e = $(".active", this._nav)[0];
					e && e.classList.remove("active"), t.currentTarget.classList.add("active"), this._closeNav()
				}
			}, {
				key: "_toggleNav",
				value: function(t) {
					this._navList.classList.contains("active") ? this._closeNav() : this._openNav()
				}
			}, {
				key: "_openNav",
				value: function() {
					this._navList.classList.add("active");
					var t = s.default.mobile ? $(".nav__item:not(.desktop) .link", this._navList) : $(".nav__item:not(.mobile) .link", this._navList);
					TweenLite.staggerFromTo(t, 2, {
						x: 100
					}, {
						x: 0,
						ease: Expo.easeOut,
						delay: .1
					}, -.03), TweenLite.fromTo(this._footer, 2, {
						opacity: 0
					}, {
						opacity: 1,
						ease: Quart.easeOut,
						delay: .1
					}), TweenLite.fromTo(this._footer, 2, {
						x: 100,
						opacity: 0
					}, {
						x: 0,
						ease: Expo.easeOut
					})
				}
			}, {
				key: "_closeNav",
				value: function() {
					this._navList.classList.remove("active")
				}
			}, {
				key: "updateActive",
				value: function(t) {
					for (var e = 0, i = this._navElements.length; e < i; ++e) {
						var r = this._navElements[e];
						r.classList.contains("nav__" + t) ? r.classList.add("active") : r.classList.remove("active")
					}
				}
			}, {
				key: "resize",
				value: function(t) {
					this._elements = [], this._whiteElements = $(".nav-black", this.container);
					for (var e = 0, i = this._whiteElements.length; e < i; ++e) {
						var r = this._whiteElements[e];
						r.y = r.getBoundingClientRect().top + t, r.mode = "black", this._elements.push(r)
					}
					this._blackElements = $(".nav-white", this.container);
					for (var n = 0, o = this._blackElements.length; n < o; ++n) {
						var s = this._blackElements[n];
						s.y = s.getBoundingClientRect().top + t, s.mode = "white", this._elements.push(s)
					}
					this._elements.sort(function(t, e) {
						return t.y < e.y ? -1 : 1
					})
				}
			}, {
				key: "update",
				value: function(t) {
					this.isLocked || (t > this._y && this._shown ? (this._deltaY = 0, this.hide()) : t < this._y && !this._shown && (this._deltaY += this._y - t, this._deltaY > 50 && this.show())), this._y = t;
					for (var e = this._elements.length - 1; e >= 0; --e) {
						var i = this._elements[e];
						if (i.y - 50 < t) {
							this.mode = i.mode;
							break
						}
					}
				}
			}, {
				key: "show",
				value: function() {
					this._shown = !0, TweenLite.to(this._logo, 1.4, {
						autoAlpha: 1,
						ease: Expo.easeOut,
						y: 0
					}), TweenLite.staggerTo(this._navItems, 1.4, {
						autoAlpha: 1,
						ease: Expo.easeOut,
						y: 0,
						delay: .02
					}, .02)
				}
			}, {
				key: "hide",
				value: function() {
					this._shown = !1, TweenLite.to(this._logo, .6, {
						autoAlpha: 0,
						ease: Quart.easeInOut,
						y: -10
					}), TweenLite.to(this._navItems, .6, {
						autoAlpha: 0,
						ease: Expo.easeInOut,
						y: -10
					})
				}
			}, {
				key: "mode",
				set: function(t) {
					t != this._mode && ("white" == t ? (this._nav.classList.remove("nav--black"), this._nav.classList.add("nav--white")) : (this._nav.classList.remove("nav--white"), this._nav.classList.add("nav--black"))), this._mode = t
				}
			}]), t
		}();
	e.default = a
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function t(e) {
		r(this, t), this.dom = e
	};
	e.default = n
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function o(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var a = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		l = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		u = i(4),
		h = r(u),
		c = i(0),
		d = r(c),
		f = i(53),
		p = r(f),
		_ = i(106),
		y = r(_),
		v = function(t) {
			function e(t, i) {
				return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return s(e, t), a(e, [{
				key: "init",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._container = $(".home__main", this.dom)[0], this._slideShow = new p.default($(".slideshow", this.dom)[0], {
						mousewheelNavigation: !0
					}), this._slideShow.completed.add(this._onSlideshowCompleted.bind(this));
					for (var t = $(".link", this.dom), i = 0, r = t.length; i < r; ++i) t[i].addEventListener("click", this._onClickLink.bind(this));
					y.default.instanced || this._previousPage || (this._intro = new y.default, this._intro.completed.add(this._onIntroCompleted.bind(this)))
				}
			}, {
				key: "destroy",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), this._intro && this._intro.destroy(), this._slideShow.destroy()
				}
			}, {
				key: "resize",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this._container.style.height = d.default.height + "px", this._slideShow.resize()
				}
			}, {
				key: "update",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), this._intro && !this._intro.isCompleted || this._slideShow.update()
				}
			}, {
				key: "_onClickLink",
				value: function(t) {
					this._link = t.currentTarget, this._link.classList.add("active")
				}
			}, {
				key: "_onSlideshowCompleted",
				value: function() {
					this._intro ? (this._intro.locked = !1, this._intro.shown && this._intro.hide()) : (this._onIntroCompleted(), TweenLite.to(this._overlay, 1, {
						x: "200%",
						delay: .2,
						ease: Expo.easeInOut
					}))
				}
			}, {
				key: "_onIntroCompleted",
				value: function() {
					TweenLite.fromTo(this._slideShow, 1.2, {
						x: d.default.width / 2
					}, {
						x: 0,
						ease: this._intro ? Power4.easeInOut : Quart.easeInOut
					}), TweenLite.staggerFromTo($(".tx", this._slideShow.items[0].titleDom), 1.5, {
						x: "-130%"
					}, {
						x: "0%",
						ease: Expo.easeOut,
						delay: .4
					}, .15)
				}
			}, {
				key: "_show",
				value: function() {
					h.default.header.show(), this._previousPage ? ($(".home__intro")[0].style.visibility = "hidden", TweenLite.set(this._overlay, {
						x: "100%"
					})) : (this.dom.classList.add("shown"), this._intro && this._intro.show(), this._shown())
				}
			}, {
				key: "_hide",
				value: function(t) {
					var i = this;
					if (this._slideShow.isLocked = !0, "cases" === t.id) {
						t.slideShow.index = this._slideShow.index, t.slideShow.scrolling = !0, t.slideShow.update(!0), t.slideShow.scrolling = !1, TweenLite.staggerTo($(".tx", this._slideShow.items[this._slideShow.index].titleDom), 1, {
							x: "-120%",
							ease: Expo.easeInOut
						}, .1), TweenLite.to(this._slideShow.items[this._slideShow.index].btnDom, .5, {
							x: "-50%",
							opacity: 0,
							ease: Expo.easeInOut
						}), this._slideShow.index < this._slideShow.items.length - 1 && TweenLite.to(this._slideShow.items[this._slideShow.index + 1], 1, {
							x: "+=100",
							ease: Expo.easeInOut,
							delay: .1
						}), this._slideShow.index > 0 && TweenLite.to(this._slideShow.items[this._slideShow.index - 1], 1, {
							x: "-=100",
							ease: Expo.easeInOut,
							delay: .1
						});
						var r = $(".home__overlay", this.dom)[0];
						r.style.visibility = "visible", TweenLite.staggerTo($("i", r), .8, {
							scaleX: 1,
							ease: Expo.easeInOut,
							delay: .2
						}, .06, this._hidden.bind(this))
					} else "case" === t.id ? (this._slideShow.index < this._slideShow.items.length - 1 && TweenLite.to(this._slideShow.items[this._slideShow.index + 1], 1, {
						x: "+=100",
						ease: Expo.easeInOut
					}), this._slideShow.index > 0 && TweenLite.to(this._slideShow.items[this._slideShow.index - 1], 1, {
						x: "-=100",
						ease: Expo.easeInOut
					}), TweenLite.to(this._slideShow.items[this._slideShow.index].btnDom, .5, {
						opacity: 0,
						ease: Quart.easeInOut,
						delay: .5,
						onComplete: function() {
							var t = i._slideShow.textures[i._slideShow.index];
							"video" === t.type && (i.currentVideo = t.video), i._hidden()
						}
					})) : l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_hide", this).call(this)
				}
			}]), e
		}(h.default);
	e.default = v
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			c = i(0),
			d = r(c),
			f = i(3),
			p = r(f),
			_ = i(10),
			y = r(_),
			v = i(56),
			g = r(v),
			m = i(2),
			b = r(m),
			w = i(70),
			E = r(w),
			T = i(72),
			x = r(T),
			O = i(73),
			P = r(O),
			A = i(78),
			k = r(A),
			C = i(100),
			S = r(C),
			R = i(101),
			L = r(R),
			M = i(102),
			j = r(M),
			D = i(103),
			I = r(D),
			N = (l = function(t) {
				function e(t, i) {
					n(this, e);
					var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
					return r.dragEase = .2, r
				}
				return s(e, t), u(e, [{
					key: "init",
					value: function() {
						this._clock = new x.default, this.gl = new E.default({
							element: this.dom,
							glOptions: {
								antialias: !1,
								depth: !1,
								alpha: !1
							}
						}), this.gl.errored.add(function(t) {
							throw new Error("WebGL not supported :(")
						}), this.shader = (0, k.default)(this.gl.ctx, i(104), i(105), [{
							name: "uTexture1",
							type: "sampler2D"
						}, {
							name: "uTexture1x",
							type: "float"
						}, {
							name: "uTexture1Alpha",
							type: "float"
						}, {
							name: "uTexture2",
							type: "sampler2D"
						}, {
							name: "uTexture2x",
							type: "float"
						}, {
							name: "uTexture2Alpha",
							type: "float"
						}, {
							name: "uResolution",
							type: "vec2"
						}, {
							name: "uScreenVideoRatio",
							type: "float"
						}, {
							name: "uModel",
							type: "mat3"
						}], [{
							name: "position",
							type: "vec2"
						}]), this._modelMatrix = (0, S.default)(), this._time = 0, this.textures = [], h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
						for (var t = 0, r = this.length; t < r; ++t) {
							var n = this.items[t];
							this.textures[t] = new g.default(n, this.gl.ctx), this.textures[t].id = t, n.titleDom = $(".h1", n)[0], n.titleDom.addEventListener("click", this._onClickTitle), n.btnDom = $(".link", n)[0]
						}
						this.completed = new b.default, this._onChange(this, 0), this.changed.add(this._onChange)
					}
				}, {
					key: "destroy",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
					}
				}, {
					key: "resize",
					value: function() {
						this.maxDeltaX = d.default.width / 12, h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this);
						for (var t = 0, i = this.length; t < i; ++t) {
							var r = this.items[t];
							r.wrapper = $(".tx", r)[0];
							for (var n = $(".word", r.wrapper), o = 0, s = 0, a = n.length; s < a; ++s) {
								var l = n[s],
									u = l.getBoundingClientRect().right;
								u > o && (o = u)
							}
							var c = $(".h1", r.wrapper)[0].getBoundingClientRect();
							r.wrapper.rect = {
								left: c.left,
								right: o,
								width: o - c.left
							}, r.wrapper.width = r.wrapper.rect.width
						}
						this.gl.resize();
						var f = this.gl.ctx.drawingBufferWidth,
							p = this.gl.ctx.drawingBufferHeight,
							_ = void 0,
							y = void 0,
							v = void 0,
							g = void 0,
							m = void 0;
						f / p > 16 / 9 ? (_ = f, y = 9 * f / 16, v = p / y, g = 1, m = g * v) : (_ = 16 * p / 9, v = f / _, m = 1, g = m * v), (0, I.default)(this._modelMatrix), (0, j.default)(this._modelMatrix, this._modelMatrix, [.5, .5]), (0, L.default)(this._modelMatrix, this._modelMatrix, [.5, -.5]), (0, L.default)(this._modelMatrix, this._modelMatrix, [g, m]), this._resolution = [f, p], this._ratio = f / _
					}
				}, {
					key: "update",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), this.drawVideo = !0;
						for (var t = void 0, i = void 0, r = 0, n = this._itemsPosition.length; r < n; ++r) {
							var o = (this._itemsPosition[r], (this.x - r * d.default.width) / d.default.width);
							if (!this.isLocked && o > -1.5 && o < 1.5) {
								var s = this.items[r],
									a = void 0,
									l = void 0;
								a = d.default.mobile ? 44 + (d.default.width - 88 - s.wrapper.width >> 1) : .127 * (d.default.width - 88) + 44 | 0, l = d.default.width - (a + s.wrapper.width);
								var u = o <= 0 ? a : l,
									c = o * (u + 44);
								c = (1e3 * c | 0) / 1e3;
								var f = o * d.default.width / 22;
								s.wrapper && p.default.transform(s.wrapper, "translate3d(" + c + "px,0,0)"), s.btnDom && p.default.transform(s.btnDom, "translate3d(" + -2 * f + "px,0,0)")
							}
							var _ = this.textures[r];
							_.isLoaded && (_.x += .6 * (o - _.x), o > -.99 && o < .99 ? (t ? i = _ : t = _, _.paused && (_.play(), this.needsTextureUpdate = !0)) : _.paused || (_.pause(), this.needsTextureUpdate = !0))
						}
						this.drawVideo && (t || i) && (this.gl.render(), this.shader.bind(), this.shader.uniforms.uModel = this._modelMatrix, this.shader.uniforms.uResolution = this._resolution, this.shader.uniforms.uScreenVideoRatio = this._ratio, t && t.isLoaded ? ((this.needsTextureUpdate || this.drawVideo && "video" === t.type) && (t.needsUpdate = !0), t.draw(1), this.shader.uniforms.uTexture1 = 1, this.shader.uniforms.uTexture1x = t.x, this.shader.uniforms.uTexture1Alpha = t.alpha) : this.shader.uniforms.uTexture1x = 1, i && i.isLoaded ? ((this.needsTextureUpdate || this.drawVideo && "video" === i.type) && (i.needsUpdate = !0), i.draw(0), this.shader.uniforms.uTexture2 = 0, this.shader.uniforms.uTexture2x = i.x, this.shader.uniforms.uTexture2Alpha = i.alpha) : this.shader.uniforms.uTexture2x = 1, (0, P.default)(this.gl.ctx), this.needsTextureUpdate = !1)
					}
				}, {
					key: "loadTexture",
					value: function(t) {
						var e = this.textures[t];
						!e || e.isLoading || e.isLoaded || (e.loaded.add(this._onTextureLoaded), e.load(t))
					}
				}, {
					key: "unloadTexture",
					value: function(t) {
						var e = this.textures[t];
						e && e.unload(t)
					}
				}, {
					key: "_onClickTitle",
					value: function(t) {
						var e = t.currentTarget,
							i = e.parentNode.parentNode.parentNode.index();
						if (this.index !== i) this.index = i;
						else if (!this.direction) {
							var r = $("a", e.parentNode.parentNode)[0].getAttribute("href");
							window.history.pushState({}, null, r)
						}
					}
				}, {
					key: "_onChange",
					value: function(t, e, i) {
						var r = $(".active", this.list)[0];
						r && r.classList.remove("active"), this.items[e].classList.add("active"), this.loadTexture(e - 1), this.loadTexture(e), this.loadTexture(e + 1), this.unloadTexture(e + 2), this.unloadTexture(e - 2)
					}
				}, {
					key: "_onTextureLoaded",
					value: function() {
						this.needsTextureUpdate = !0, !this._ready && this.textures[0].isLoaded && (this._ready = !0, this.completed.dispatch())
					}
				}]), e
			}(y.default), a(l.prototype, "_onClickTitle", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onClickTitle"), l.prototype), a(l.prototype, "_onChange", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onChange"), l.prototype), a(l.prototype, "_onTextureLoaded", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTextureLoaded"), l.prototype), l);
		e.default = N
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		o = function() {
			function t(e, i, n, o) {
				r(this, t), this.stability = null != e ? Math.abs(e) : 8, this.sensitivity = null != i ? 1 + Math.abs(i) : 100, this.tolerance = null != n ? 1 + Math.abs(n) : 1.1, this.delay = null != o ? o : 150, this.lastUpDeltas = function() {
					var t, e, i;
					for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
					return i
				}.call(this), this.lastDownDeltas = function() {
					var t, e, i;
					for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
					return i
				}.call(this), this.deltasTimestamp = function() {
					var t, e, i;
					for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
					return i
				}.call(this)
			}
			return n(t, [{
				key: "check",
				value: function(t) {
					var e;
					return t = t.originalEvent || t, null != t.wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
				}
			}, {
				key: "isInertia",
				value: function(t) {
					var e, i, r, n, o, s, a;
					return e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas, null === e[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (r = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), a = r.reduce(function(t, e) {
						return t + e
					}), o = i.reduce(function(t, e) {
						return t + e
					}), s = a / r.length, n = o / i.length, Math.abs(s) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
				}
			}, {
				key: "showLastUpDeltas",
				value: function() {
					return this.lastUpDeltas
				}
			}, {
				key: "showLastDownDeltas",
				value: function() {
					return this.lastDownDeltas
				}
			}]), t
		}();
	e.default = o
}, function(t, e, i) {
	"use strict";
	Math.sign || (Math.sign = function(t) {
		return (t > 0) - (t < 0) || +t
	})
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(57),
			u = r(l),
			h = i(2),
			c = r(h),
			d = i(0),
			f = r(d),
			p = (s = function() {
				function t(e, i) {
					n(this, t), this.dom = e, this._ctx = i, f.default.touchOnly || f.default.isIe11 ? this._prepareImage() : this._prepareVideo(), this.x = 0, this.alpha = 0, this.loaded = new c.default
				}
				return a(t, [{
					key: "load",
					value: function(t) {
						this.isLoaded || (this.isLoaded = !1, this.isLoading = !0, this.video ? (this.video.addEventListener("canplay", this._onVideoCanPlay), "maybe" === this.video.canPlayType("video/webm") ? this.video.src = this.dom.getAttribute("data-webm") : this.video.src = this.dom.getAttribute("data-mp4"), this.video.load()) : this.image && (this.image.addEventListener("load", this._onImageLoad), this.image.src = this.dom.getAttribute("data-poster-mobile") || this.dom.getAttribute("data-poster")))
					}
				}, {
					key: "unload",
					value: function(t) {
						this.isLoading && this.video && (this.isLoaded = !1, this.isLoading = !1, this.alpha = 0, this.video && (this.video.removeEventListener("canplay", this._onVideoCanPlay), this.video.src = ""), this.image && this.image.removeEventListener("load", this._onImageLoad), this._texture && (this._texture.dispose(), this._texture = null))
					}
				}, {
					key: "play",
					value: function() {
						this._paused = !1, "video" === this.type && this.video.play()
					}
				}, {
					key: "pause",
					value: function() {
						this._paused = !0, "video" === this.type && this.video.pause()
					}
				}, {
					key: "draw",
					value: function(t) {
						if (!this.needsUpdate || !this.isLoaded) return !1;
						this.video && 0 !== this.video.currentTime ? this._texture.setPixels(this.video, 0, 0, 0, t) : this.image && this._texture.bind(t), this.needsUpdate = !1
					}
				}, {
					key: "_prepareVideo",
					value: function() {
						this.unload(), this.type = "video", this.video = document.createElement("video"), this.video.muted = "muted", this.video.loop = "loop"
					}
				}, {
					key: "_prepareImage",
					value: function() {
						this.unload(), this.type = "image", this.image = document.createElement("img")
					}
				}, {
					key: "_onVideoCanPlay",
					value: function(t) {
						this.video.removeEventListener("canplay", this._onVideoCanPlay), this.video.pause(), this._loaded(this.video)
					}
				}, {
					key: "_onImageLoad",
					value: function(t) {
						this._loaded(this.image)
					}
				}, {
					key: "_loaded",
					value: function(t) {
						this.isLoading = !1, this.isLoaded = !0, TweenLite.to(this, 1, {
							alpha: 1,
							ease: Expo.easeOut
						}), this._texture && this._texture.dispose(), this._texture = (0, u.default)(this._ctx, t, this._ctx.RGB, this._ctx.UNSIGNED_BYTE), this._texture.minFilter = this._ctx.LINEAR, this._texture.magFilter = this._ctx.LINEAR, this._texture.wrapS = this._ctx.CLAMP_TO_EDGE, this._texture.wrapT = this._ctx.CLAMP_TO_EDGE, this._paused = !0, this.loaded.dispatch()
					}
				}, {
					key: "texture",
					get: function() {
						return this._texture
					}
				}, {
					key: "paused",
					get: function() {
						return this._paused
					}
				}]), t
			}(), o(s.prototype, "_onVideoCanPlay", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoCanPlay"), s.prototype), o(s.prototype, "_onImageLoad", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onImageLoad"), s.prototype), s);
		e.default = p
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		g = [t.LINEAR, t.NEAREST_MIPMAP_LINEAR, t.LINEAR_MIPMAP_NEAREST, t.LINEAR_MIPMAP_NEAREST], m = [t.NEAREST, t.LINEAR, t.NEAREST_MIPMAP_NEAREST, t.NEAREST_MIPMAP_LINEAR, t.LINEAR_MIPMAP_NEAREST, t.LINEAR_MIPMAP_LINEAR], b = [t.REPEAT, t.CLAMP_TO_EDGE, t.MIRRORED_REPEAT]
	}

	function n(t) {
		return "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement || "undefined" != typeof ImageData && t instanceof ImageData
	}

	function o(t, e, i) {
		var r = t.gl,
			n = r.getParameter(r.MAX_TEXTURE_SIZE);
		if (e < 0 || e > n || i < 0 || i > n) throw new Error("gl-texture2d: Invalid texture size");
		return t._shape = [e, i], t.bind(), r.texImage2D(r.TEXTURE_2D, 0, t.format, e, i, 0, t.format, t.type, null), t._mipLevels = [0], t
	}

	function s(t, e, i, r, n, o) {
		this.gl = t, this.handle = e, this.format = n, this.type = o, this._shape = [i, r], this._mipLevels = [0], this._magFilter = t.NEAREST, this._minFilter = t.NEAREST, this._wrapS = t.CLAMP_TO_EDGE, this._wrapT = t.CLAMP_TO_EDGE, this._anisoSamples = 1;
		var s = this,
			a = [this._wrapS, this._wrapT];
		Object.defineProperties(a, [{
			get: function() {
				return s._wrapS
			},
			set: function(t) {
				return s.wrapS = t
			}
		}, {
			get: function() {
				return s._wrapT
			},
			set: function(t) {
				return s.wrapT = t
			}
		}]), this._wrapVector = a;
		var l = [this._shape[0], this._shape[1]];
		Object.defineProperties(l, [{
			get: function() {
				return s._shape[0]
			},
			set: function(t) {
				return s.width = t
			}
		}, {
			get: function() {
				return s._shape[1]
			},
			set: function(t) {
				return s.height = t
			}
		}]), this._shapeVector = l
	}

	function a(t, e) {
		return 3 === t.length ? 1 === e[2] && e[1] === t[0] * t[2] && e[0] === t[2] : 1 === e[0] && e[1] === t[0]
	}

	function l(t, e, i, r, n, o, s, l) {
		var u = l.dtype,
			h = l.shape.slice();
		if (h.length < 2 || h.length > 3) throw new Error("gl-texture2d: Invalid ndarray, must be 2d or 3d");
		var c = 0,
			d = 0,
			f = a(h, l.stride.slice());
		"float32" === u ? c = t.FLOAT : "float64" === u ? (c = t.FLOAT, f = !1, u = "float32") : "uint8" === u ? c = t.UNSIGNED_BYTE : (c = t.UNSIGNED_BYTE, f = !1, u = "uint8");
		if (2 === h.length) d = t.LUMINANCE, h = [h[0], h[1], 1], l = _(l.data, h, [l.stride[0], l.stride[1], 1], l.offset);
		else {
			if (3 !== h.length) throw new Error("gl-texture2d: Invalid shape for texture");
			if (1 === h[2]) d = t.ALPHA;
			else if (2 === h[2]) d = t.LUMINANCE_ALPHA;
			else if (3 === h[2]) d = t.RGB;
			else {
				if (4 !== h[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
				d = t.RGBA
			}
			h[2]
		}
		if (d !== t.LUMINANCE && d !== t.ALPHA || n !== t.LUMINANCE && n !== t.ALPHA || (d = n), d !== n) throw new Error("gl-texture2d: Incompatible texture format for setPixels");
		var p = l.size,
			g = s.indexOf(r) < 0;
		if (g && s.push(r), c === o && f) 0 === l.offset && l.data.length === p ? g ? t.texImage2D(t.TEXTURE_2D, r, n, h[0], h[1], 0, n, o, l.data) : t.texSubImage2D(t.TEXTURE_2D, r, e, i, h[0], h[1], n, o, l.data) : g ? t.texImage2D(t.TEXTURE_2D, r, n, h[0], h[1], 0, n, o, l.data.subarray(l.offset, l.offset + p)) : t.texSubImage2D(t.TEXTURE_2D, r, e, i, h[0], h[1], n, o, l.data.subarray(l.offset, l.offset + p));
		else {
			var m;
			m = o === t.FLOAT ? v.mallocFloat32(p) : v.mallocUint8(p);
			var b = _(m, h, [h[2], h[2] * h[0], 1]);
			c === t.FLOAT && o === t.UNSIGNED_BYTE ? w(b, l) : y.assign(b, l), g ? t.texImage2D(t.TEXTURE_2D, r, n, h[0], h[1], 0, n, o, m.subarray(0, p)) : t.texSubImage2D(t.TEXTURE_2D, r, e, i, h[0], h[1], n, o, m.subarray(0, p)), o === t.FLOAT ? v.freeFloat32(m) : v.freeUint8(m)
		}
	}

	function u(t) {
		var e = t.createTexture();
		return t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e
	}

	function h(t, e, i, r, n) {
		var o = t.getParameter(t.MAX_TEXTURE_SIZE);
		if (e < 0 || e > o || i < 0 || i > o) throw new Error("gl-texture2d: Invalid texture shape");
		if (n === t.FLOAT && !t.getExtension("OES_texture_float")) throw new Error("gl-texture2d: Floating point textures not supported on this platform");
		var a = u(t);
		return t.texImage2D(t.TEXTURE_2D, 0, r, e, i, 0, r, n, null), new s(t, a, e, i, r, n)
	}

	function c(t, e, i, r, n, o) {
		var a = u(t);
		return t.texImage2D(t.TEXTURE_2D, 0, n, n, o, e), new s(t, a, i, r, n, o)
	}

	function d(t, e) {
		var i = e.dtype,
			r = e.shape.slice(),
			n = t.getParameter(t.MAX_TEXTURE_SIZE);
		if (r[0] < 0 || r[0] > n || r[1] < 0 || r[1] > n) throw new Error("gl-texture2d: Invalid texture size");
		var o = a(r, e.stride.slice()),
			l = 0;
		"float32" === i ? l = t.FLOAT : "float64" === i ? (l = t.FLOAT, o = !1, i = "float32") : "uint8" === i ? l = t.UNSIGNED_BYTE : (l = t.UNSIGNED_BYTE, o = !1, i = "uint8");
		var h = 0;
		if (2 === r.length) h = t.LUMINANCE, r = [r[0], r[1], 1], e = _(e.data, r, [e.stride[0], e.stride[1], 1], e.offset);
		else {
			if (3 !== r.length) throw new Error("gl-texture2d: Invalid shape for texture");
			if (1 === r[2]) h = t.ALPHA;
			else if (2 === r[2]) h = t.LUMINANCE_ALPHA;
			else if (3 === r[2]) h = t.RGB;
			else {
				if (4 !== r[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
				h = t.RGBA
			}
		}
		l !== t.FLOAT || t.getExtension("OES_texture_float") || (l = t.UNSIGNED_BYTE, o = !1);
		var c, d, f = e.size;
		if (o) c = 0 === e.offset && e.data.length === f ? e.data : e.data.subarray(e.offset, e.offset + f);
		else {
			var p = [r[2], r[2] * r[0], 1];
			d = v.malloc(f, i);
			var g = _(d, r, p, 0);
			"float32" !== i && "float64" !== i || l !== t.UNSIGNED_BYTE ? y.assign(g, e) : w(g, e), c = d.subarray(0, f)
		}
		var m = u(t);
		return t.texImage2D(t.TEXTURE_2D, 0, h, r[0], r[1], 0, h, l, c), o || v.free(d), new s(t, m, r[0], r[1], h, l)
	}

	function f(t) {
		if (arguments.length <= 1) throw new Error("gl-texture2d: Missing arguments for texture2d constructor");
		if (g || r(t), "number" == typeof arguments[1]) return h(t, arguments[1], arguments[2], arguments[3] || t.RGBA, arguments[4] || t.UNSIGNED_BYTE);
		if (Array.isArray(arguments[1])) return h(t, 0 | arguments[1][0], 0 | arguments[1][1], arguments[2] || t.RGBA, arguments[3] || t.UNSIGNED_BYTE);
		if ("object" === p(arguments[1])) {
			var e = arguments[1],
				i = n(e) ? e : e.raw;
			if (i) return c(t, i, 0 | e.width, 0 | e.height, arguments[2] || t.RGBA, arguments[3] || t.UNSIGNED_BYTE);
			if (e.shape && e.data && e.stride) return d(t, e)
		}
		throw new Error("gl-texture2d: Invalid arguments for texture2d constructor")
	}
	var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		_ = i(18),
		y = i(19),
		v = i(20);
	t.exports = f;
	var g = null,
		m = null,
		b = null,
		w = function(t, e) {
			y.muls(t, e, 255)
		},
		E = s.prototype;
	Object.defineProperties(E, {
		minFilter: {
			get: function() {
				return this._minFilter
			},
			set: function(t) {
				this.bind();
				var e = this.gl;
				if (this.type === e.FLOAT && g.indexOf(t) >= 0 && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), m.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
				return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t), this._minFilter = t
			}
		},
		magFilter: {
			get: function() {
				return this._magFilter
			},
			set: function(t) {
				this.bind();
				var e = this.gl;
				if (this.type === e.FLOAT && g.indexOf(t) >= 0 && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), m.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
				return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t), this._magFilter = t
			}
		},
		mipSamples: {
			get: function() {
				return this._anisoSamples
			},
			set: function(t) {
				var e = this._anisoSamples;
				if (this._anisoSamples = 0 | Math.max(t, 1), e !== this._anisoSamples) {
					var i = this.gl.getExtension("EXT_texture_filter_anisotropic");
					i && this.gl.texParameterf(this.gl.TEXTURE_2D, i.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
				}
				return this._anisoSamples
			}
		},
		wrapS: {
			get: function() {
				return this._wrapS
			},
			set: function(t) {
				if (this.bind(), b.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
				return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, t), this._wrapS = t
			}
		},
		wrapT: {
			get: function() {
				return this._wrapT
			},
			set: function(t) {
				if (this.bind(), b.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
				return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, t), this._wrapT = t
			}
		},
		wrap: {
			get: function() {
				return this._wrapVector
			},
			set: function(t) {
				if (Array.isArray(t) || (t = [t, t]), 2 !== t.length) throw new Error("gl-texture2d: Must specify wrap mode for rows and columns");
				for (var e = 0; e < 2; ++e)
					if (b.indexOf(t[e]) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
				this._wrapS = t[0], this._wrapT = t[1];
				var i = this.gl;
				return this.bind(), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, this._wrapS), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, this._wrapT), t
			}
		},
		shape: {
			get: function() {
				return this._shapeVector
			},
			set: function(t) {
				if (Array.isArray(t)) {
					if (2 !== t.length) throw new Error("gl-texture2d: Invalid texture shape")
				} else t = [0 | t, 0 | t];
				return o(this, 0 | t[0], 0 | t[1]), [0 | t[0], 0 | t[1]]
			}
		},
		width: {
			get: function() {
				return this._shape[0]
			},
			set: function(t) {
				return t |= 0, o(this, t, this._shape[1]), t
			}
		},
		height: {
			get: function() {
				return this._shape[1]
			},
			set: function(t) {
				return t |= 0, o(this, this._shape[0], t), t
			}
		}
	}), E.bind = function(t) {
		var e = this.gl;
		return void 0 !== t && e.activeTexture(e.TEXTURE0 + (0 | t)), e.bindTexture(e.TEXTURE_2D, this.handle), void 0 !== t ? 0 | t : e.getParameter(e.ACTIVE_TEXTURE) - e.TEXTURE0
	}, E.dispose = function() {
		this.gl.deleteTexture(this.handle)
	}, E.generateMipmap = function() {
		this.bind(), this.gl.generateMipmap(this.gl.TEXTURE_2D);
		for (var t = Math.min(this._shape[0], this._shape[1]), e = 0; t > 0; ++e, t >>>= 1) this._mipLevels.indexOf(e) < 0 && this._mipLevels.push(e)
	}, E.setPixels = function(t, e, i, r, o) {
		var s = this.gl;
		this.bind(o);
		var a = n(t) ? t : t.raw;
		if (a) s.texImage2D(s.TEXTURE_2D, 0, this.format, this.format, this.type, a);
		else {
			if (!(t.shape && t.stride && t.data)) throw new Error("gl-texture2d: Unsupported data type");
			if (t.shape.length < 2 || e + t.shape[1] > this._shape[1] >>> r || i + t.shape[0] > this._shape[0] >>> r || e < 0 || i < 0) throw new Error("gl-texture2d: Texture dimensions are out of bounds");
			l(s, e, i, r, this.format, this.type, this._mipLevels, t)
		}
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		for (var e = new Array(t), i = 0; i < t; ++i) e[i] = i;
		return e
	}
	t.exports = r
}, function(t, e) {
	function i(t) {
		return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
	}

	function r(t) {
		return "function" == typeof t.readFloatLE && "function" == typeof t.slice && i(t.slice(0, 0))
	}
	t.exports = function(t) {
		return null != t && (i(t) || r(t) || !!t._isBuffer)
	}
}, function(t, e, i) {
	"use strict";

	function r() {
		this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = !1
	}

	function n(t) {
		var e = new r;
		e.pre = t.pre, e.body = t.body, e.post = t.post;
		var i = t.args.slice(0);
		e.argTypes = i;
		for (var n = 0; n < i.length; ++n) {
			var s = i[n];
			if ("array" === s || "object" == typeof s && s.blockIndices) {
				if (e.argTypes[n] = "array", e.arrayArgs.push(n), e.arrayBlockIndices.push(s.blockIndices ? s.blockIndices : 0), e.shimArgs.push("array" + n), n < e.pre.args.length && e.pre.args[n].count > 0) throw new Error("cwise: pre() block may not reference array args");
				if (n < e.post.args.length && e.post.args[n].count > 0) throw new Error("cwise: post() block may not reference array args")
			} else if ("scalar" === s) e.scalarArgs.push(n), e.shimArgs.push("scalar" + n);
			else if ("index" === s) {
				if (e.indexArgs.push(n), n < e.pre.args.length && e.pre.args[n].count > 0) throw new Error("cwise: pre() block may not reference array index");
				if (n < e.body.args.length && e.body.args[n].lvalue) throw new Error("cwise: body() block may not write to array index");
				if (n < e.post.args.length && e.post.args[n].count > 0) throw new Error("cwise: post() block may not reference array index")
			} else if ("shape" === s) {
				if (e.shapeArgs.push(n), n < e.pre.args.length && e.pre.args[n].lvalue) throw new Error("cwise: pre() block may not write to array shape");
				if (n < e.body.args.length && e.body.args[n].lvalue) throw new Error("cwise: body() block may not write to array shape");
				if (n < e.post.args.length && e.post.args[n].lvalue) throw new Error("cwise: post() block may not write to array shape")
			} else {
				if ("object" != typeof s || !s.offset) throw new Error("cwise: Unknown argument type " + i[n]);
				e.argTypes[n] = "offset", e.offsetArgs.push({
					array: s.array,
					offset: s.offset
				}), e.offsetArgIndex.push(n)
			}
		}
		if (e.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
		if (e.pre.args.length > i.length) throw new Error("cwise: Too many arguments in pre() block");
		if (e.body.args.length > i.length) throw new Error("cwise: Too many arguments in body() block");
		if (e.post.args.length > i.length) throw new Error("cwise: Too many arguments in post() block");
		return e.debug = !!t.printCode || !!t.debug, e.funcName = t.funcName || "cwise", e.blockSize = t.blockSize || 64, o(e)
	}
	var o = i(61);
	t.exports = n
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = ["'use strict'", "var CACHED={}"],
			i = [],
			r = t.funcName + "_cwise_thunk";
		e.push(["return function ", r, "(", t.shimArgs.join(","), "){"].join(""));
		for (var o = [], s = [], a = [
				["array", t.arrayArgs[0], ".shape.slice(", Math.max(0, t.arrayBlockIndices[0]), t.arrayBlockIndices[0] < 0 ? "," + t.arrayBlockIndices[0] + ")" : ")"].join("")
			], l = [], u = [], h = 0; h < t.arrayArgs.length; ++h) {
			var c = t.arrayArgs[h];
			i.push(["t", c, "=array", c, ".dtype,", "r", c, "=array", c, ".order"].join("")), o.push("t" + c), o.push("r" + c), s.push("t" + c), s.push("r" + c + ".join()"), a.push("array" + c + ".data"), a.push("array" + c + ".stride"), a.push("array" + c + ".offset|0"), h > 0 && (l.push("array" + t.arrayArgs[0] + ".shape.length===array" + c + ".shape.length+" + (Math.abs(t.arrayBlockIndices[0]) - Math.abs(t.arrayBlockIndices[h]))), u.push("array" + t.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[0]) + "]===array" + c + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[h]) + "]"))
		}
		t.arrayArgs.length > 1 && (e.push("if (!(" + l.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), e.push("for(var shapeIndex=array" + t.arrayArgs[0] + ".shape.length-" + Math.abs(t.arrayBlockIndices[0]) + "; shapeIndex--\x3e0;) {"), e.push("if (!(" + u.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), e.push("}"));
		for (var h = 0; h < t.scalarArgs.length; ++h) a.push("scalar" + t.scalarArgs[h]);
		return i.push(["type=[", s.join(","), "].join()"].join("")), i.push("proc=CACHED[type]"), e.push("var " + i.join(",")), e.push(["if(!proc){", "CACHED[type]=proc=compile([", o.join(","), "])}", "return proc(", a.join(","), ")}"].join("")), t.debug && console.log("-----Generated thunk:\n" + e.join("\n") + "\n----------"), new Function("compile", e.join("\n"))(n.bind(void 0, t))
	}
	var n = i(62);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		var r, n, o = t.length,
			s = e.arrayArgs.length,
			a = e.indexArgs.length > 0,
			l = [],
			u = [],
			h = 0,
			c = 0;
		for (r = 0; r < o; ++r) u.push(["i", r, "=0"].join(""));
		for (n = 0; n < s; ++n)
			for (r = 0; r < o; ++r) c = h, h = t[r], 0 === r ? u.push(["d", n, "s", r, "=t", n, "p", h].join("")) : u.push(["d", n, "s", r, "=(t", n, "p", h, "-s", c, "*t", n, "p", c, ")"].join(""));
		for (u.length > 0 && l.push("var " + u.join(",")), r = o - 1; r >= 0; --r) h = t[r], l.push(["for(i", r, "=0;i", r, "<s", h, ";++i", r, "){"].join(""));
		for (l.push(i), r = 0; r < o; ++r) {
			for (c = h, h = t[r], n = 0; n < s; ++n) l.push(["p", n, "+=d", n, "s", r].join(""));
			a && (r > 0 && l.push(["index[", c, "]-=s", c].join("")), l.push(["++index[", h, "]"].join(""))), l.push("}")
		}
		return l.join("\n")
	}

	function n(t, e, i, n) {
		for (var o = e.length, s = i.arrayArgs.length, a = i.blockSize, l = i.indexArgs.length > 0, u = [], h = 0; h < s; ++h) u.push(["var offset", h, "=p", h].join(""));
		for (var h = t; h < o; ++h) u.push(["for(var j" + h + "=SS[", e[h], "]|0;j", h, ">0;){"].join("")), u.push(["if(j", h, "<", a, "){"].join("")), u.push(["s", e[h], "=j", h].join("")), u.push(["j", h, "=0"].join("")), u.push(["}else{s", e[h], "=", a].join("")), u.push(["j", h, "-=", a, "}"].join("")), l && u.push(["index[", e[h], "]=j", h].join(""));
		for (var h = 0; h < s; ++h) {
			for (var c = ["offset" + h], d = t; d < o; ++d) c.push(["j", d, "*t", h, "p", e[d]].join(""));
			u.push(["p", h, "=(", c.join("+"), ")"].join(""))
		}
		u.push(r(e, i, n));
		for (var h = t; h < o; ++h) u.push("}");
		return u.join("\n")
	}

	function o(t) {
		for (var e = 0, i = t[0].length; e < i;) {
			for (var r = 1; r < t.length; ++r)
				if (t[r][e] !== t[0][e]) return e;
			++e
		}
		return e
	}

	function s(t, e, i) {
		for (var r = t.body, n = [], o = [], s = 0; s < t.args.length; ++s) {
			var a = t.args[s];
			if (!(a.count <= 0)) {
				var l = new RegExp(a.name, "g"),
					u = "",
					h = e.arrayArgs.indexOf(s);
				switch (e.argTypes[s]) {
					case "offset":
						var c = e.offsetArgIndex.indexOf(s);
						h = e.offsetArgs[c].array, u = "+q" + c;
					case "array":
						u = "p" + h + u;
						var d = "l" + s,
							f = "a" + h;
						if (0 === e.arrayBlockIndices[h]) 1 === a.count ? "generic" === i[h] ? a.lvalue ? (n.push(["var ", d, "=", f, ".get(", u, ")"].join("")), r = r.replace(l, d), o.push([f, ".set(", u, ",", d, ")"].join(""))) : r = r.replace(l, [f, ".get(", u, ")"].join("")) : r = r.replace(l, [f, "[", u, "]"].join("")) : "generic" === i[h] ? (n.push(["var ", d, "=", f, ".get(", u, ")"].join("")), r = r.replace(l, d), a.lvalue && o.push([f, ".set(", u, ",", d, ")"].join(""))) : (n.push(["var ", d, "=", f, "[", u, "]"].join("")), r = r.replace(l, d), a.lvalue && o.push([f, "[", u, "]=", d].join("")));
						else {
							for (var p = [a.name], _ = [u], y = 0; y < Math.abs(e.arrayBlockIndices[h]); y++) p.push("\\s*\\[([^\\]]+)\\]"), _.push("$" + (y + 1) + "*t" + h + "b" + y);
							if (l = new RegExp(p.join(""), "g"), u = _.join("+"), "generic" === i[h]) throw new Error("cwise: Generic arrays not supported in combination with blocks!");
							r = r.replace(l, [f, "[", u, "]"].join(""))
						}
						break;
					case "scalar":
						r = r.replace(l, "Y" + e.scalarArgs.indexOf(s));
						break;
					case "index":
						r = r.replace(l, "index");
						break;
					case "shape":
						r = r.replace(l, "shape")
				}
			}
		}
		return [n.join("\n"), r, o.join("\n")].join("\n").trim()
	}

	function a(t) {
		for (var e = new Array(t.length), i = !0, r = 0; r < t.length; ++r) {
			var n = t[r],
				o = n.match(/\d+/);
			o = o ? o[0] : "", 0 === n.charAt(0) ? e[r] = "u" + n.charAt(1) + o : e[r] = n.charAt(0) + o, r > 0 && (i = i && e[r] === e[r - 1])
		}
		return i ? e[0] : e.join("")
	}

	function l(t, e) {
		for (var i = e[1].length - Math.abs(t.arrayBlockIndices[0]) | 0, l = new Array(t.arrayArgs.length), h = new Array(t.arrayArgs.length), c = 0; c < t.arrayArgs.length; ++c) h[c] = e[2 * c], l[c] = e[2 * c + 1];
		for (var d = [], f = [], p = [], _ = [], y = [], c = 0; c < t.arrayArgs.length; ++c) {
			t.arrayBlockIndices[c] < 0 ? (p.push(0), _.push(i), d.push(i), f.push(i + t.arrayBlockIndices[c])) : (p.push(t.arrayBlockIndices[c]), _.push(t.arrayBlockIndices[c] + i), d.push(0), f.push(t.arrayBlockIndices[c]));
			for (var v = [], g = 0; g < l[c].length; g++) p[c] <= l[c][g] && l[c][g] < _[c] && v.push(l[c][g] - p[c]);
			y.push(v)
		}
		for (var m = ["SS"], b = ["'use strict'"], w = [], g = 0; g < i; ++g) w.push(["s", g, "=SS[", g, "]"].join(""));
		for (var c = 0; c < t.arrayArgs.length; ++c) {
			m.push("a" + c), m.push("t" + c), m.push("p" + c);
			for (var g = 0; g < i; ++g) w.push(["t", c, "p", g, "=t", c, "[", p[c] + g, "]"].join(""));
			for (var g = 0; g < Math.abs(t.arrayBlockIndices[c]); ++g) w.push(["t", c, "b", g, "=t", c, "[", d[c] + g, "]"].join(""))
		}
		for (var c = 0; c < t.scalarArgs.length; ++c) m.push("Y" + c);
		if (t.shapeArgs.length > 0 && w.push("shape=SS.slice(0)"), t.indexArgs.length > 0) {
			for (var E = new Array(i), c = 0; c < i; ++c) E[c] = "0";
			w.push(["index=[", E.join(","), "]"].join(""))
		}
		for (var c = 0; c < t.offsetArgs.length; ++c) {
			for (var T = t.offsetArgs[c], x = [], g = 0; g < T.offset.length; ++g) 0 !== T.offset[g] && (1 === T.offset[g] ? x.push(["t", T.array, "p", g].join("")) : x.push([T.offset[g], "*t", T.array, "p", g].join("")));
			0 === x.length ? w.push("q" + c + "=0") : w.push(["q", c, "=", x.join("+")].join(""))
		}
		var O = u([].concat(t.pre.thisVars).concat(t.body.thisVars).concat(t.post.thisVars));
		w = w.concat(O), w.length > 0 && b.push("var " + w.join(","));
		for (var c = 0; c < t.arrayArgs.length; ++c) b.push("p" + c + "|=0");
		t.pre.body.length > 3 && b.push(s(t.pre, t, h));
		var P = s(t.body, t, h),
			A = o(y);
		A < i ? b.push(n(A, y[0], t, P)) : b.push(r(y[0], t, P)), t.post.body.length > 3 && b.push(s(t.post, t, h)), t.debug && console.log("-----Generated cwise routine for ", e, ":\n" + b.join("\n") + "\n----------");
		var k = [t.funcName || "unnamed", "_cwise_loop_", l[0].join("s"), "m", A, a(h)].join("");
		return new Function(["function ", k, "(", m.join(","), "){", b.join("\n"), "} return ", k].join(""))()
	}
	var u = i(63);
	t.exports = l
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		for (var i = 1, r = t.length, n = t[0], o = t[0], s = 1; s < r; ++s)
			if (o = n, n = t[s], e(n, o)) {
				if (s === i) {
					i++;
					continue
				}
				t[i++] = n
			}
		return t.length = i, t
	}

	function n(t) {
		for (var e = 1, i = t.length, r = t[0], n = t[0], o = 1; o < i; ++o, n = r)
			if (n = r, (r = t[o]) !== n) {
				if (o === e) {
					e++;
					continue
				}
				t[e++] = r
			}
		return t.length = e, t
	}

	function o(t, e, i) {
		return 0 === t.length ? t : e ? (i || t.sort(e), r(t, e)) : (i || t.sort(), n(t))
	}
	t.exports = o
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r() {
			return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
		}

		function n(t, e) {
			if (r() < e) throw new RangeError("Invalid typed array length");
			return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
		}

		function o(t, e, i) {
			if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, i);
			if ("number" == typeof t) {
				if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
				return u(this, t)
			}
			return s(this, t, e, i)
		}

		function s(t, e, i, r) {
			if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
			return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, i, r) : "string" == typeof e ? h(t, e, i) : f(t, e)
		}

		function a(t) {
			if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
			if (t < 0) throw new RangeError('"size" argument must not be negative')
		}

		function l(t, e, i, r) {
			return a(e), e <= 0 ? n(t, e) : void 0 !== i ? "string" == typeof r ? n(t, e).fill(i, r) : n(t, e).fill(i) : n(t, e)
		}

		function u(t, e) {
			if (a(e), t = n(t, e < 0 ? 0 : 0 | p(e)), !o.TYPED_ARRAY_SUPPORT)
				for (var i = 0; i < e; ++i) t[i] = 0;
			return t
		}

		function h(t, e, i) {
			if ("string" == typeof i && "" !== i || (i = "utf8"), !o.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
			var r = 0 | y(e, i);
			t = n(t, r);
			var s = t.write(e, i);
			return s !== r && (t = t.slice(0, s)), t
		}

		function c(t, e) {
			var i = e.length < 0 ? 0 : 0 | p(e.length);
			t = n(t, i);
			for (var r = 0; r < i; r += 1) t[r] = 255 & e[r];
			return t
		}

		function d(t, e, i, r) {
			if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
			if (e.byteLength < i + (r || 0)) throw new RangeError("'length' is out of bounds");
			return e = void 0 === i && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, i) : new Uint8Array(e, i, r), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = c(t, e), t
		}

		function f(t, e) {
			if (o.isBuffer(e)) {
				var i = 0 | p(e.length);
				return t = n(t, i), 0 === t.length ? t : (e.copy(t, 0, 0, i), t)
			}
			if (e) {
				if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || q(e.length) ? n(t, 0) : c(t, e);
				if ("Buffer" === e.type && Q(e.data)) return c(t, e.data)
			}
			throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
		}

		function p(t) {
			if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
			return 0 | t
		}

		function _(t) {
			return +t != t && (t = 0), o.alloc(+t)
		}

		function y(t, e) {
			if (o.isBuffer(t)) return t.length;
			if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
			"string" != typeof t && (t = "" + t);
			var i = t.length;
			if (0 === i) return 0;
			for (var r = !1;;) switch (e) {
				case "ascii":
				case "latin1":
				case "binary":
					return i;
				case "utf8":
				case "utf-8":
				case void 0:
					return H(t).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * i;
				case "hex":
					return i >>> 1;
				case "base64":
					return W(t).length;
				default:
					if (r) return H(t).length;
					e = ("" + e).toLowerCase(), r = !0
			}
		}

		function v(t, e, i) {
			var r = !1;
			if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
			if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
			if (i >>>= 0, e >>>= 0, i <= e) return "";
			for (t || (t = "utf8");;) switch (t) {
				case "hex":
					return L(this, e, i);
				case "utf8":
				case "utf-8":
					return k(this, e, i);
				case "ascii":
					return S(this, e, i);
				case "latin1":
				case "binary":
					return R(this, e, i);
				case "base64":
					return A(this, e, i);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return M(this, e, i);
				default:
					if (r) throw new TypeError("Unknown encoding: " + t);
					t = (t + "").toLowerCase(), r = !0
			}
		}

		function g(t, e, i) {
			var r = t[e];
			t[e] = t[i], t[i] = r
		}

		function m(t, e, i, r, n) {
			if (0 === t.length) return -1;
			if ("string" == typeof i ? (r = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = n ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
				if (n) return -1;
				i = t.length - 1
			} else if (i < 0) {
				if (!n) return -1;
				i = 0
			}
			if ("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, i, r, n);
			if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : b(t, [e], i, r, n);
			throw new TypeError("val must be string, number or Buffer")
		}

		function b(t, e, i, r, n) {
			function o(t, e) {
				return 1 === s ? t[e] : t.readUInt16BE(e * s)
			}
			var s = 1,
				a = t.length,
				l = e.length;
			if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
				if (t.length < 2 || e.length < 2) return -1;
				s = 2, a /= 2, l /= 2, i /= 2
			}
			var u;
			if (n) {
				var h = -1;
				for (u = i; u < a; u++)
					if (o(t, u) === o(e, -1 === h ? 0 : u - h)) {
						if (-1 === h && (h = u), u - h + 1 === l) return h * s
					} else -1 !== h && (u -= u - h), h = -1
			} else
				for (i + l > a && (i = a - l), u = i; u >= 0; u--) {
					for (var c = !0, d = 0; d < l; d++)
						if (o(t, u + d) !== o(e, d)) {
							c = !1;
							break
						}
					if (c) return u
				}
			return -1
		}

		function w(t, e, i, r) {
			i = Number(i) || 0;
			var n = t.length - i;
			r ? (r = Number(r)) > n && (r = n) : r = n;
			var o = e.length;
			if (o % 2 != 0) throw new TypeError("Invalid hex string");
			r > o / 2 && (r = o / 2);
			for (var s = 0; s < r; ++s) {
				var a = parseInt(e.substr(2 * s, 2), 16);
				if (isNaN(a)) return s;
				t[i + s] = a
			}
			return s
		}

		function E(t, e, i, r) {
			return $(H(e, t.length - i), t, i, r)
		}

		function T(t, e, i, r) {
			return $(Y(e), t, i, r)
		}

		function x(t, e, i, r) {
			return T(t, e, i, r)
		}

		function O(t, e, i, r) {
			return $(W(e), t, i, r)
		}

		function P(t, e, i, r) {
			return $(G(e, t.length - i), t, i, r)
		}

		function A(t, e, i) {
			return 0 === e && i === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, i))
		}

		function k(t, e, i) {
			i = Math.min(t.length, i);
			for (var r = [], n = e; n < i;) {
				var o = t[n],
					s = null,
					a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
				if (n + a <= i) {
					var l, u, h, c;
					switch (a) {
						case 1:
							o < 128 && (s = o);
							break;
						case 2:
							l = t[n + 1], 128 == (192 & l) && (c = (31 & o) << 6 | 63 & l) > 127 && (s = c);
							break;
						case 3:
							l = t[n + 1], u = t[n + 2], 128 == (192 & l) && 128 == (192 & u) && (c = (15 & o) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (s = c);
							break;
						case 4:
							l = t[n + 1], u = t[n + 2], h = t[n + 3], 128 == (192 & l) && 128 == (192 & u) && 128 == (192 & h) && (c = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & h) > 65535 && c < 1114112 && (s = c)
					}
				}
				null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), n += a
			}
			return C(r)
		}

		function C(t) {
			var e = t.length;
			if (e <= J) return String.fromCharCode.apply(String, t);
			for (var i = "", r = 0; r < e;) i += String.fromCharCode.apply(String, t.slice(r, r += J));
			return i
		}

		function S(t, e, i) {
			var r = "";
			i = Math.min(t.length, i);
			for (var n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
			return r
		}

		function R(t, e, i) {
			var r = "";
			i = Math.min(t.length, i);
			for (var n = e; n < i; ++n) r += String.fromCharCode(t[n]);
			return r
		}

		function L(t, e, i) {
			var r = t.length;
			(!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);
			for (var n = "", o = e; o < i; ++o) n += X(t[o]);
			return n
		}

		function M(t, e, i) {
			for (var r = t.slice(e, i), n = "", o = 0; o < r.length; o += 2) n += String.fromCharCode(r[o] + 256 * r[o + 1]);
			return n
		}

		function j(t, e, i) {
			if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
			if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
		}

		function D(t, e, i, r, n, s) {
			if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if (e > n || e < s) throw new RangeError('"value" argument is out of bounds');
			if (i + r > t.length) throw new RangeError("Index out of range")
		}

		function I(t, e, i, r) {
			e < 0 && (e = 65535 + e + 1);
			for (var n = 0, o = Math.min(t.length - i, 2); n < o; ++n) t[i + n] = (e & 255 << 8 * (r ? n : 1 - n)) >>> 8 * (r ? n : 1 - n)
		}

		function N(t, e, i, r) {
			e < 0 && (e = 4294967295 + e + 1);
			for (var n = 0, o = Math.min(t.length - i, 4); n < o; ++n) t[i + n] = e >>> 8 * (r ? n : 3 - n) & 255
		}

		function B(t, e, i, r, n, o) {
			if (i + r > t.length) throw new RangeError("Index out of range");
			if (i < 0) throw new RangeError("Index out of range")
		}

		function F(t, e, i, r, n) {
			return n || B(t, e, i, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(t, e, i, r, 23, 4), i + 4
		}

		function V(t, e, i, r, n) {
			return n || B(t, e, i, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(t, e, i, r, 52, 8), i + 8
		}

		function U(t) {
			if (t = z(t).replace(tt, ""), t.length < 2) return "";
			for (; t.length % 4 != 0;) t += "=";
			return t
		}

		function z(t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		}

		function X(t) {
			return t < 16 ? "0" + t.toString(16) : t.toString(16)
		}

		function H(t, e) {
			e = e || 1 / 0;
			for (var i, r = t.length, n = null, o = [], s = 0; s < r; ++s) {
				if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
					if (!n) {
						if (i > 56319) {
							(e -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						if (s + 1 === r) {
							(e -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						n = i;
						continue
					}
					if (i < 56320) {
						(e -= 3) > -1 && o.push(239, 191, 189), n = i;
						continue
					}
					i = 65536 + (n - 55296 << 10 | i - 56320)
				} else n && (e -= 3) > -1 && o.push(239, 191, 189);
				if (n = null, i < 128) {
					if ((e -= 1) < 0) break;
					o.push(i)
				} else if (i < 2048) {
					if ((e -= 2) < 0) break;
					o.push(i >> 6 | 192, 63 & i | 128)
				} else if (i < 65536) {
					if ((e -= 3) < 0) break;
					o.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
				} else {
					if (!(i < 1114112)) throw new Error("Invalid code point");
					if ((e -= 4) < 0) break;
					o.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
				}
			}
			return o
		}

		function Y(t) {
			for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
			return e
		}

		function G(t, e) {
			for (var i, r, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = t.charCodeAt(s), r = i >> 8, n = i % 256, o.push(n), o.push(r);
			return o
		}

		function W(t) {
			return Z.toByteArray(U(t))
		}

		function $(t, e, i, r) {
			for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n) e[n + i] = t[n];
			return n
		}

		function q(t) {
			return t !== t
		}
		var Z = i(65),
			K = i(66),
			Q = i(67);
		e.Buffer = o, e.SlowBuffer = _, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
			try {
				var t = new Uint8Array(1);
				return t.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42
					}
				}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
			} catch (t) {
				return !1
			}
		}(), e.kMaxLength = r(), o.poolSize = 8192, o._augment = function(t) {
			return t.__proto__ = o.prototype, t
		}, o.from = function(t, e, i) {
			return s(null, t, e, i)
		}, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
			value: null,
			configurable: !0
		})), o.alloc = function(t, e, i) {
			return l(null, t, e, i)
		}, o.allocUnsafe = function(t) {
			return u(null, t)
		}, o.allocUnsafeSlow = function(t) {
			return u(null, t)
		}, o.isBuffer = function(t) {
			return !(null == t || !t._isBuffer)
		}, o.compare = function(t, e) {
			if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
			if (t === e) return 0;
			for (var i = t.length, r = e.length, n = 0, s = Math.min(i, r); n < s; ++n)
				if (t[n] !== e[n]) {
					i = t[n], r = e[n];
					break
				}
			return i < r ? -1 : r < i ? 1 : 0
		}, o.isEncoding = function(t) {
			switch (String(t).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;
				default:
					return !1
			}
		}, o.concat = function(t, e) {
			if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
			if (0 === t.length) return o.alloc(0);
			var i;
			if (void 0 === e)
				for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
			var r = o.allocUnsafe(e),
				n = 0;
			for (i = 0; i < t.length; ++i) {
				var s = t[i];
				if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
				s.copy(r, n), n += s.length
			}
			return r
		}, o.byteLength = y, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
			var t = this.length;
			if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (var e = 0; e < t; e += 2) g(this, e, e + 1);
			return this
		}, o.prototype.swap32 = function() {
			var t = this.length;
			if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
			return this
		}, o.prototype.swap64 = function() {
			var t = this.length;
			if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
			return this
		}, o.prototype.toString = function() {
			var t = 0 | this.length;
			return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : v.apply(this, arguments)
		}, o.prototype.equals = function(t) {
			if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			return this === t || 0 === o.compare(this, t)
		}, o.prototype.inspect = function() {
			var t = "",
				i = e.INSPECT_MAX_BYTES;
			return this.length > 0 && (t = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (t += " ... ")), "<Buffer " + t + ">"
		}, o.prototype.compare = function(t, e, i, r, n) {
			if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === n && (n = this.length), e < 0 || i > t.length || r < 0 || n > this.length) throw new RangeError("out of range index");
			if (r >= n && e >= i) return 0;
			if (r >= n) return -1;
			if (e >= i) return 1;
			if (e >>>= 0, i >>>= 0, r >>>= 0, n >>>= 0, this === t) return 0;
			for (var s = n - r, a = i - e, l = Math.min(s, a), u = this.slice(r, n), h = t.slice(e, i), c = 0; c < l; ++c)
				if (u[c] !== h[c]) {
					s = u[c], a = h[c];
					break
				}
			return s < a ? -1 : a < s ? 1 : 0
		}, o.prototype.includes = function(t, e, i) {
			return -1 !== this.indexOf(t, e, i)
		}, o.prototype.indexOf = function(t, e, i) {
			return m(this, t, e, i, !0)
		}, o.prototype.lastIndexOf = function(t, e, i) {
			return m(this, t, e, i, !1)
		}, o.prototype.write = function(t, e, i, r) {
			if (void 0 === e) r = "utf8", i = this.length, e = 0;
			else if (void 0 === i && "string" == typeof e) r = e, i = this.length, e = 0;
			else {
				if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
				e |= 0, isFinite(i) ? (i |= 0, void 0 === r && (r = "utf8")) : (r = i, i = void 0)
			}
			var n = this.length - e;
			if ((void 0 === i || i > n) && (i = n), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			r || (r = "utf8");
			for (var o = !1;;) switch (r) {
				case "hex":
					return w(this, t, e, i);
				case "utf8":
				case "utf-8":
					return E(this, t, e, i);
				case "ascii":
					return T(this, t, e, i);
				case "latin1":
				case "binary":
					return x(this, t, e, i);
				case "base64":
					return O(this, t, e, i);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return P(this, t, e, i);
				default:
					if (o) throw new TypeError("Unknown encoding: " + r);
					r = ("" + r).toLowerCase(), o = !0
			}
		}, o.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};
		var J = 4096;
		o.prototype.slice = function(t, e) {
			var i = this.length;
			t = ~~t, e = void 0 === e ? i : ~~e, t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t);
			var r;
			if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = o.prototype;
			else {
				var n = e - t;
				r = new o(n, void 0);
				for (var s = 0; s < n; ++s) r[s] = this[s + t]
			}
			return r
		}, o.prototype.readUIntLE = function(t, e, i) {
			t |= 0, e |= 0, i || j(t, e, this.length);
			for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256);) r += this[t + o] * n;
			return r
		}, o.prototype.readUIntBE = function(t, e, i) {
			t |= 0, e |= 0, i || j(t, e, this.length);
			for (var r = this[t + --e], n = 1; e > 0 && (n *= 256);) r += this[t + --e] * n;
			return r
		}, o.prototype.readUInt8 = function(t, e) {
			return e || j(t, 1, this.length), this[t]
		}, o.prototype.readUInt16LE = function(t, e) {
			return e || j(t, 2, this.length), this[t] | this[t + 1] << 8
		}, o.prototype.readUInt16BE = function(t, e) {
			return e || j(t, 2, this.length), this[t] << 8 | this[t + 1]
		}, o.prototype.readUInt32LE = function(t, e) {
			return e || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
		}, o.prototype.readUInt32BE = function(t, e) {
			return e || j(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
		}, o.prototype.readIntLE = function(t, e, i) {
			t |= 0, e |= 0, i || j(t, e, this.length);
			for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256);) r += this[t + o] * n;
			return n *= 128, r >= n && (r -= Math.pow(2, 8 * e)), r
		}, o.prototype.readIntBE = function(t, e, i) {
			t |= 0, e |= 0, i || j(t, e, this.length);
			for (var r = e, n = 1, o = this[t + --r]; r > 0 && (n *= 256);) o += this[t + --r] * n;
			return n *= 128, o >= n && (o -= Math.pow(2, 8 * e)), o
		}, o.prototype.readInt8 = function(t, e) {
			return e || j(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
		}, o.prototype.readInt16LE = function(t, e) {
			e || j(t, 2, this.length);
			var i = this[t] | this[t + 1] << 8;
			return 32768 & i ? 4294901760 | i : i
		}, o.prototype.readInt16BE = function(t, e) {
			e || j(t, 2, this.length);
			var i = this[t + 1] | this[t] << 8;
			return 32768 & i ? 4294901760 | i : i
		}, o.prototype.readInt32LE = function(t, e) {
			return e || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
		}, o.prototype.readInt32BE = function(t, e) {
			return e || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
		}, o.prototype.readFloatLE = function(t, e) {
			return e || j(t, 4, this.length), K.read(this, t, !0, 23, 4)
		}, o.prototype.readFloatBE = function(t, e) {
			return e || j(t, 4, this.length), K.read(this, t, !1, 23, 4)
		}, o.prototype.readDoubleLE = function(t, e) {
			return e || j(t, 8, this.length), K.read(this, t, !0, 52, 8)
		}, o.prototype.readDoubleBE = function(t, e) {
			return e || j(t, 8, this.length), K.read(this, t, !1, 52, 8)
		}, o.prototype.writeUIntLE = function(t, e, i, r) {
			if (t = +t, e |= 0, i |= 0, !r) {
				D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0)
			}
			var n = 1,
				o = 0;
			for (this[e] = 255 & t; ++o < i && (n *= 256);) this[e + o] = t / n & 255;
			return e + i
		}, o.prototype.writeUIntBE = function(t, e, i, r) {
			if (t = +t, e |= 0, i |= 0, !r) {
				D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0)
			}
			var n = i - 1,
				o = 1;
			for (this[e + n] = 255 & t; --n >= 0 && (o *= 256);) this[e + n] = t / o & 255;
			return e + i
		}, o.prototype.writeUInt8 = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
		}, o.prototype.writeUInt16LE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : I(this, t, e, !0), e + 2
		}, o.prototype.writeUInt16BE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : I(this, t, e, !1), e + 2
		}, o.prototype.writeUInt32LE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : N(this, t, e, !0), e + 4
		}, o.prototype.writeUInt32BE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4
		}, o.prototype.writeIntLE = function(t, e, i, r) {
			if (t = +t, e |= 0, !r) {
				var n = Math.pow(2, 8 * i - 1);
				D(this, t, e, i, n - 1, -n)
			}
			var o = 0,
				s = 1,
				a = 0;
			for (this[e] = 255 & t; ++o < i && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
			return e + i
		}, o.prototype.writeIntBE = function(t, e, i, r) {
			if (t = +t, e |= 0, !r) {
				var n = Math.pow(2, 8 * i - 1);
				D(this, t, e, i, n - 1, -n)
			}
			var o = i - 1,
				s = 1,
				a = 0;
			for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
			return e + i
		}, o.prototype.writeInt8 = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
		}, o.prototype.writeInt16LE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : I(this, t, e, !0), e + 2
		}, o.prototype.writeInt16BE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : I(this, t, e, !1), e + 2
		}, o.prototype.writeInt32LE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : N(this, t, e, !0), e + 4
		}, o.prototype.writeInt32BE = function(t, e, i) {
			return t = +t, e |= 0, i || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4
		}, o.prototype.writeFloatLE = function(t, e, i) {
			return F(this, t, e, !0, i)
		}, o.prototype.writeFloatBE = function(t, e, i) {
			return F(this, t, e, !1, i)
		}, o.prototype.writeDoubleLE = function(t, e, i) {
			return V(this, t, e, !0, i)
		}, o.prototype.writeDoubleBE = function(t, e, i) {
			return V(this, t, e, !1, i)
		}, o.prototype.copy = function(t, e, i, r) {
			if (i || (i = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < i && (r = i), r === i) return 0;
			if (0 === t.length || 0 === this.length) return 0;
			if (e < 0) throw new RangeError("targetStart out of bounds");
			if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
			if (r < 0) throw new RangeError("sourceEnd out of bounds");
			r > this.length && (r = this.length), t.length - e < r - i && (r = t.length - e + i);
			var n, s = r - i;
			if (this === t && i < e && e < r)
				for (n = s - 1; n >= 0; --n) t[n + e] = this[n + i];
			else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
				for (n = 0; n < s; ++n) t[n + e] = this[n + i];
			else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
			return s
		}, o.prototype.fill = function(t, e, i, r) {
			if ("string" == typeof t) {
				if ("string" == typeof e ? (r = e, e = 0, i = this.length) : "string" == typeof i && (r = i, i = this.length), 1 === t.length) {
					var n = t.charCodeAt(0);
					n < 256 && (t = n)
				}
				if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
				if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
			} else "number" == typeof t && (t &= 255);
			if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
			if (i <= e) return this;
			e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0);
			var s;
			if ("number" == typeof t)
				for (s = e; s < i; ++s) this[s] = t;
			else {
				var a = o.isBuffer(t) ? t : H(new o(t, r).toString()),
					l = a.length;
				for (s = 0; s < i - e; ++s) this[s + e] = a[s % l]
			}
			return this
		};
		var tt = /[^+\/0-9A-Za-z-_]/g
	}).call(e, i(6))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = t.length;
		if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
	}

	function n(t) {
		return 3 * t.length / 4 - r(t)
	}

	function o(t) {
		var e, i, n, o, s, a = t.length;
		o = r(t), s = new c(3 * a / 4 - o), i = o > 0 ? a - 4 : a;
		var l = 0;
		for (e = 0; e < i; e += 4) n = h[t.charCodeAt(e)] << 18 | h[t.charCodeAt(e + 1)] << 12 | h[t.charCodeAt(e + 2)] << 6 | h[t.charCodeAt(e + 3)], s[l++] = n >> 16 & 255, s[l++] = n >> 8 & 255, s[l++] = 255 & n;
		return 2 === o ? (n = h[t.charCodeAt(e)] << 2 | h[t.charCodeAt(e + 1)] >> 4, s[l++] = 255 & n) : 1 === o && (n = h[t.charCodeAt(e)] << 10 | h[t.charCodeAt(e + 1)] << 4 | h[t.charCodeAt(e + 2)] >> 2, s[l++] = n >> 8 & 255, s[l++] = 255 & n), s
	}

	function s(t) {
		return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
	}

	function a(t, e, i) {
		for (var r, n = [], o = e; o < i; o += 3) r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], n.push(s(r));
		return n.join("")
	}

	function l(t) {
		for (var e, i = t.length, r = i % 3, n = "", o = [], s = 0, l = i - r; s < l; s += 16383) o.push(a(t, s, s + 16383 > l ? l : s + 16383));
		return 1 === r ? (e = t[i - 1], n += u[e >> 2], n += u[e << 4 & 63], n += "==") : 2 === r && (e = (t[i - 2] << 8) + t[i - 1], n += u[e >> 10], n += u[e >> 4 & 63], n += u[e << 2 & 63], n += "="), o.push(n), o.join("")
	}
	e.byteLength = n, e.toByteArray = o, e.fromByteArray = l;
	for (var u = [], h = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, p = d.length; f < p; ++f) u[f] = d[f], h[d.charCodeAt(f)] = f;
	h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63
}, function(t, e) {
	e.read = function(t, e, i, r, n) {
		var o, s, a = 8 * n - r - 1,
			l = (1 << a) - 1,
			u = l >> 1,
			h = -7,
			c = i ? n - 1 : 0,
			d = i ? -1 : 1,
			f = t[e + c];
		for (c += d, o = f & (1 << -h) - 1, f >>= -h, h += a; h > 0; o = 256 * o + t[e + c], c += d, h -= 8);
		for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + t[e + c], c += d, h -= 8);
		if (0 === o) o = 1 - u;
		else {
			if (o === l) return s ? NaN : 1 / 0 * (f ? -1 : 1);
			s += Math.pow(2, r), o -= u
		}
		return (f ? -1 : 1) * s * Math.pow(2, o - r)
	}, e.write = function(t, e, i, r, n, o) {
		var s, a, l, u = 8 * o - n - 1,
			h = (1 << u) - 1,
			c = h >> 1,
			d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			f = r ? 0 : o - 1,
			p = r ? 1 : -1,
			_ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
		for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), e += s + c >= 1 ? d / l : d * Math.pow(2, 1 - c), e * l >= 2 && (s++, l /= 2), s + c >= h ? (a = 0, s = h) : s + c >= 1 ? (a = (e * l - 1) * Math.pow(2, n), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, n), s = 0)); n >= 8; t[i + f] = 255 & a, f += p, a /= 256, n -= 8);
		for (s = s << n | a, u += n; u > 0; t[i + f] = 255 & s, f += p, s /= 256, u -= 8);
		t[i + f - p] |= 128 * _
	}
}, function(t, e) {
	t.exports = Array.isArray || function(t) {
		return "[object Array]" == Object.prototype.toString.call(t)
	}
}, function(t, e, i) {
	"use strict";
	"use restrict";

	function r(t) {
		var e = 32;
		return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
	}
	e.INT_BITS = 32, e.INT_MAX = 2147483647, e.INT_MIN = -1 << 31, e.sign = function(t) {
		return (t > 0) - (t < 0)
	}, e.abs = function(t) {
		var e = t >> 31;
		return (t ^ e) - e
	}, e.min = function(t, e) {
		return e ^ (t ^ e) & -(t < e)
	}, e.max = function(t, e) {
		return t ^ (t ^ e) & -(t < e)
	}, e.isPow2 = function(t) {
		return !(t & t - 1 || !t)
	}, e.log2 = function(t) {
		var e, i;
		return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, (e |= i) | t >> 1
	}, e.log10 = function(t) {
		return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
	}, e.popCount = function(t) {
		return t -= t >>> 1 & 1431655765, 16843009 * ((t = (858993459 & t) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
	}, e.countTrailingZeros = r, e.nextPow2 = function(t) {
		return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
	}, e.prevPow2 = function(t) {
		return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1)
	}, e.parity = function(t) {
		return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1
	};
	var n = new Array(256);
	! function(t) {
		for (var e = 0; e < 256; ++e) {
			var i = e,
				r = e,
				n = 7;
			for (i >>>= 1; i; i >>>= 1) r <<= 1, r |= 1 & i, --n;
			t[e] = r << n & 255
		}
	}(n), e.reverse = function(t) {
		return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255]
	}, e.interleave2 = function(t, e) {
		return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
	}, e.deinterleave2 = function(t, e) {
		return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), (t = 65535 & (t | t >>> 16)) << 16 >> 16
	}, e.interleave3 = function(t, e, i) {
		return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, i &= 1023, i = 4278190335 & (i | i << 16), i = 251719695 & (i | i << 8), i = 3272356035 & (i | i << 4), i = 1227133513 & (i | i << 2), t | i << 2
	}, e.deinterleave3 = function(t, e) {
		return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), (t = 1023 & (t | t >>> 16)) << 22 >> 22
	}, e.nextCombination = function(t) {
		var e = t | t - 1;
		return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
	}
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		var n = 0 | t[i];
		if (n <= 0) return [];
		var o, s = new Array(n);
		if (i === t.length - 1)
			for (o = 0; o < n; ++o) s[o] = e;
		else
			for (o = 0; o < n; ++o) s[o] = r(t, e, i + 1);
		return s
	}

	function n(t, e) {
		var i, r;
		for (i = new Array(t), r = 0; r < t; ++r) i[r] = e;
		return i
	}

	function o(t, e) {
		switch (void 0 === e && (e = 0), typeof t) {
			case "number":
				if (t > 0) return n(0 | t, e);
				break;
			case "object":
				if ("number" == typeof t.length) return r(t, e, 0)
		}
		return []
	}
	t.exports = o
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(71),
		a = r(s),
		l = i(2),
		u = r(l),
		h = function() {
			function t(e) {
				n(this, t), this.options = e || {}, this.extensions = this.options.extensions || [], this.element = this.options.element || this._makeDefaultContainer(), this.contextOptions = this.options.glOptions, this.errored = new u.default, this.init(), this.scale = 1
			}
			return o(t, [{
				key: "init",
				value: function() {
					if (this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("webgl", this.contextOptions) || this.canvas.getContext("experimental-webgl", this.contextOptions), !this.ctx) return void this.errored.dispatch(new Error("Unable to initialize WebGL"));
					for (var t = (0, a.default)(this.ctx), e = 0; e < this.extensions.length; ++e)
						if (!(this.extensions[e] in t)) return void this.errored.dispatch(new Error("Missing extension: " + this.extensions[e]));
					this.canvas.style.position = "absolute", this.canvas.style.left = "0px", this.canvas.style.top = "0px", this.element.appendChild(this.canvas), this.resize(), this.clearFlags = void 0 === this.options.clearFlags ? this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT : this.options.clearFlags, this.clearColor = this.options.clearColor || [0, 0, 0, 0], this.clearDepth = this.options.clearDepth || 1, this.clearStencil = this.options.clearStencil || 0
				}
			}, {
				key: "render",
				value: function() {
					this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, null), this.ctx.viewport(0, 0, this._width / this.scale | 0, this._height / this.scale | 0), this.clearFlags & this.ctx.STENCIL_BUFFER_BIT && this.ctx.clearStencil(this.clearStencil), this.clearFlags & this.ctx.COLOR_BUFFER_BIT && this.ctx.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), this.clearFlags & this.ctx.DEPTH_BUFFER_BIT && this.ctx.clearDepth(this.clearDepth), this.clearFlags && this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT | this.ctx.STENCIL_BUFFER_BIT)
				}
			}, {
				key: "resize",
				value: function() {
					this._width = 0 | this.element.clientWidth, this._height = 0 | this.element.clientHeight;
					var t = this._width / this.scale | 0,
						e = this._height / this.scale | 0;
					this.canvas.width = t, this.canvas.height = e, this.canvas.style.width = this._width + "px", this.canvas.style.height = this._height + "px"
				}
			}, {
				key: "_makeDefaultContainer",
				value: function() {
					var t = document.createElement("div");
					return t.tabindex = 1, t.style.position = "absolute", t.style.left = "0px", t.style.right = "0px", t.style.top = "0px", t.style.bottom = "0px", t.style.height = "100%", t.style.overflow = "hidden", document.body.appendChild(t), document.body.style.overflow = "hidden", document.body.style.height = "100%", t
				}
			}, {
				key: "scale",
				get: function() {
					return this._scale
				},
				set: function(t) {
					(t = +t) <= 0 || isNaN(t) || this._scale === t || (this._scale = t, this.resize())
				}
			}, {
				key: "width",
				get: function() {
					return this._width / this.scale | 0
				}
			}, {
				key: "height",
				get: function() {
					return this._height / this.scale | 0
				}
			}]), t
		}();
	e.default = h
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t.replace(/^[A-Z]+_/, "")
	}

	function n(t) {
		var e = s.get(t);
		if (e) return e;
		for (var i = {}, n = t.getSupportedExtensions(), o = 0; o < n.length; ++o) {
			var a = n[o];
			if (0 !== a.indexOf("MOZ_")) {
				var l = t.getExtension(n[o]);
				if (l)
					for (;;) {
						i[a] = l;
						var u = r(a);
						if (u === a) break;
						a = u
					}
			}
		}
		return s.set(t, i), i
	}
	var o = "undefined" == typeof WeakMap ? i(21) : WeakMap,
		s = new o;
	t.exports = n
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		o = function() {
			function t(e) {
				r(this, t), this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1, this._mode = "undefined" == typeof performance ? "performance" : "date"
			}
			return n(t, [{
				key: "start",
				value: function() {
					this.startTime = ("date" === this._mode ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
				}
			}, {
				key: "stop",
				value: function() {
					this.getElapsedTime(), this.running = !1, this.autoStart = !1
				}
			}, {
				key: "getElapsedTime",
				value: function() {
					return this.getDelta(), this.elapsedTime
				}
			}, {
				key: "getDelta",
				value: function() {
					var t = 0;
					if (this.autoStart && !this.running) return this.start(), 0;
					if (this.running) {
						var e = ("date" === this._mode ? Date : performance).now();
						t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
					}
					return t
				}
			}]), t
		}();
	e.default = o
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = a.get(t);
		if (!e || !e._triangleBuffer.handle && !e._triangleBuffer.buffer) {
			var i = o(t, new Float32Array([-1, -1, -1, 4, 4, -1]));
			e = s(t, [{
				buffer: i,
				type: t.FLOAT,
				size: 2
			}]), e._triangleBuffer = i, a.set(t, e)
		}
		e.bind(), t.drawArrays(t.TRIANGLES, 0, 3), e.unbind()
	}
	var n = "undefined" == typeof WeakMap ? i(21) : WeakMap,
		o = i(74),
		s = i(75),
		a = new n;
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e, i, r, n) {
		this.gl = t, this.type = e, this.handle = i, this.length = r, this.usage = n
	}

	function n(t, e, i, r, n, o) {
		var s = n.length * n.BYTES_PER_ELEMENT;
		if (o < 0) return t.bufferData(e, n, r), s;
		if (s + o > i) throw new Error("gl-buffer: If resizing buffer, must not specify offset");
		return t.bufferSubData(e, o, n), i
	}

	function o(t, e) {
		for (var i = l.malloc(t.length, e), r = t.length, n = 0; n < r; ++n) i[n] = t[n];
		return i
	}

	function s(t, e) {
		for (var i = 1, r = e.length - 1; r >= 0; --r) {
			if (e[r] !== i) return !1;
			i *= t[r]
		}
		return !0
	}

	function a(t, e, i, n) {
		if (i = i || t.ARRAY_BUFFER, n = n || t.DYNAMIC_DRAW, i !== t.ARRAY_BUFFER && i !== t.ELEMENT_ARRAY_BUFFER) throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER");
		if (n !== t.DYNAMIC_DRAW && n !== t.STATIC_DRAW && n !== t.STREAM_DRAW) throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW");
		var o = t.createBuffer(),
			s = new r(t, i, o, 0, n);
		return s.update(e), s
	}
	var l = i(20),
		u = i(19),
		h = i(18),
		c = ["uint8", "uint8_clamped", "uint16", "uint32", "int8", "int16", "int32", "float32"],
		d = r.prototype;
	d.bind = function() {
		this.gl.bindBuffer(this.type, this.handle)
	}, d.unbind = function() {
		this.gl.bindBuffer(this.type, null)
	}, d.dispose = function() {
		this.gl.deleteBuffer(this.handle)
	}, d.update = function(t, e) {
		if ("number" != typeof e && (e = -1), this.bind(), "object" == typeof t && void 0 !== t.shape) {
			var i = t.dtype;
			if (c.indexOf(i) < 0 && (i = "float32"), this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
				i = gl.getExtension("OES_element_index_uint") && "uint16" !== i ? "uint32" : "uint16"
			}
			if (i === t.dtype && s(t.shape, t.stride)) 0 === t.offset && t.data.length === t.shape[0] ? this.length = n(this.gl, this.type, this.length, this.usage, t.data, e) : this.length = n(this.gl, this.type, this.length, this.usage, t.data.subarray(t.offset, t.shape[0]), e);
			else {
				var r = l.malloc(t.size, i),
					a = h(r, t.shape);
				u.assign(a, t), this.length = e < 0 ? n(this.gl, this.type, this.length, this.usage, r, e) : n(this.gl, this.type, this.length, this.usage, r.subarray(0, t.size), e), l.free(r)
			}
		} else if (Array.isArray(t)) {
			var d;
			d = this.type === this.gl.ELEMENT_ARRAY_BUFFER ? o(t, "uint16") : o(t, "float32"), this.length = e < 0 ? n(this.gl, this.type, this.length, this.usage, d, e) : n(this.gl, this.type, this.length, this.usage, d.subarray(0, t.length), e), l.free(d)
		} else if ("object" == typeof t && "number" == typeof t.length) this.length = n(this.gl, this.type, this.length, this.usage, t, e);
		else {
			if ("number" != typeof t && void 0 !== t) throw new Error("gl-buffer: Invalid data type");
			if (e >= 0) throw new Error("gl-buffer: Cannot specify offset when resizing buffer");
			t |= 0, t <= 0 && (t = 1), this.gl.bufferData(this.type, 0 | t, this.usage), this.length = t
		}
	}, t.exports = a
}, function(t, e, i) {
	"use strict";

	function r(t) {
		this.bindVertexArrayOES = t.bindVertexArray.bind(t), this.createVertexArrayOES = t.createVertexArray.bind(t), this.deleteVertexArrayOES = t.deleteVertexArray.bind(t)
	}

	function n(t, e, i, n) {
		var a, l = t.createVertexArray ? new r(t) : t.getExtension("OES_vertex_array_object");
		return a = l ? o(t, l) : s(t), a.update(e, i, n), a
	}
	var o = i(76),
		s = i(77);
	t.exports = n
}, function(t, e, i) {
	"use strict";

	function r(t, e, i, r, n, o) {
		this.location = t, this.dimension = e, this.a = i, this.b = r, this.c = n, this.d = o
	}

	function n(t, e, i) {
		this.gl = t, this._ext = e, this.handle = i, this._attribs = [], this._useElements = !1, this._elementsType = t.UNSIGNED_SHORT
	}

	function o(t, e) {
		return new n(t, e, e.createVertexArrayOES())
	}
	var s = i(22);
	r.prototype.bind = function(t) {
		switch (this.dimension) {
			case 1:
				t.vertexAttrib1f(this.location, this.a);
				break;
			case 2:
				t.vertexAttrib2f(this.location, this.a, this.b);
				break;
			case 3:
				t.vertexAttrib3f(this.location, this.a, this.b, this.c);
				break;
			case 4:
				t.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
		}
	}, n.prototype.bind = function() {
		this._ext.bindVertexArrayOES(this.handle);
		for (var t = 0; t < this._attribs.length; ++t) this._attribs[t].bind(this.gl)
	}, n.prototype.unbind = function() {
		this._ext.bindVertexArrayOES(null)
	}, n.prototype.dispose = function() {
		this._ext.deleteVertexArrayOES(this.handle)
	}, n.prototype.update = function(t, e, i) {
		if (this.bind(), s(this.gl, e, t), this.unbind(), this._attribs.length = 0, t)
			for (var n = 0; n < t.length; ++n) {
				var o = t[n];
				"number" == typeof o ? this._attribs.push(new r(n, 1, o)) : Array.isArray(o) && this._attribs.push(new r(n, o.length, o[0], o[1], o[2], o[3]))
			}
		this._useElements = !!e, this._elementsType = i || this.gl.UNSIGNED_SHORT
	}, n.prototype.draw = function(t, e, i) {
		i = i || 0;
		var r = this.gl;
		this._useElements ? r.drawElements(t, e, this._elementsType, i) : r.drawArrays(t, i, e)
	}, t.exports = o
}, function(t, e, i) {
	"use strict";

	function r(t) {
		this.gl = t, this._elements = null, this._attributes = null, this._elementsType = t.UNSIGNED_SHORT
	}

	function n(t) {
		return new r(t)
	}
	var o = i(22);
	r.prototype.bind = function() {
		o(this.gl, this._elements, this._attributes)
	}, r.prototype.update = function(t, e, i) {
		this._elements = e, this._attributes = t, this._elementsType = i || this.gl.UNSIGNED_SHORT
	}, r.prototype.dispose = function() {}, r.prototype.unbind = function() {}, r.prototype.draw = function(t, e, i) {
		i = i || 0;
		var r = this.gl;
		this._elements ? r.drawElements(t, e, this._elementsType, i) : r.drawArrays(t, i, e)
	}, t.exports = n
}, function(t, e, i) {
	"use strict";

	function r(t) {
		this.gl = t, this.gl.lastAttribCount = 0, this._vref = this._fref = this._relink = this.vertShader = this.fragShader = this.program = this.attributes = this.uniforms = this.types = null
	}

	function n(t, e) {
		return t.name < e.name ? -1 : 1
	}

	function o(t, e, i, n, o) {
		var s = new r(t);
		return s.update(e, i, n, o), s
	}
	var s = i(79),
		a = i(80),
		l = i(23),
		u = i(81),
		h = i(99),
		c = i(8),
		d = r.prototype;
	d.bind = function() {
		this.program || this._relink();
		var t, e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES),
			i = this.gl.lastAttribCount;
		if (e > i)
			for (t = i; t < e; t++) this.gl.enableVertexAttribArray(t);
		else if (i > e)
			for (t = e; t < i; t++) this.gl.disableVertexAttribArray(t);
		this.gl.lastAttribCount = e, this.gl.useProgram(this.program)
	}, d.dispose = function() {
		for (var t = this.gl.lastAttribCount, e = 0; e < t; e++) this.gl.disableVertexAttribArray(e);
		this.gl.lastAttribCount = 0, this._fref && this._fref.dispose(), this._vref && this._vref.dispose(), this.attributes = this.types = this.vertShader = this.fragShader = this.program = this._relink = this._fref = this._vref = null
	}, d.update = function(t, e, i, r) {
		function o() {
			f.program = u.program(p, f._vref, f._fref, w, E);
			for (var t = 0; t < i.length; ++t) k[t] = p.getUniformLocation(f.program, i[t].name)
		}
		if (!e || 1 === arguments.length) {
			var d = t;
			t = d.vertex, e = d.fragment, i = d.uniforms, r = d.attributes
		}
		var f = this,
			p = f.gl,
			_ = f._vref;
		f._vref = u.shader(p, p.VERTEX_SHADER, t), _ && _.dispose(), f.vertShader = f._vref.shader;
		var y = this._fref;
		if (f._fref = u.shader(p, p.FRAGMENT_SHADER, e), y && y.dispose(), f.fragShader = f._fref.shader, !i || !r) {
			var v = p.createProgram();
			if (p.attachShader(v, f.fragShader), p.attachShader(v, f.vertShader), p.linkProgram(v), !p.getProgramParameter(v, p.LINK_STATUS)) {
				var g = p.getProgramInfoLog(v);
				throw new c(g, "Error linking program:" + g)
			}
			i = i || h.uniforms(p, v), r = r || h.attributes(p, v), p.deleteProgram(v)
		}
		r = r.slice(), r.sort(n);
		var m, b = [],
			w = [],
			E = [];
		for (m = 0; m < r.length; ++m) {
			var T = r[m];
			if (T.type.indexOf("mat") >= 0) {
				for (var x = 0 | T.type.charAt(T.type.length - 1), O = new Array(x), P = 0; P < x; ++P) O[P] = E.length, w.push(T.name + "[" + P + "]"), "number" == typeof T.location ? E.push(T.location + P) : Array.isArray(T.location) && T.location.length === x && "number" == typeof T.location[P] ? E.push(0 | T.location[P]) : E.push(-1);
				b.push({
					name: T.name,
					type: T.type,
					locations: O
				})
			} else b.push({
				name: T.name,
				type: T.type,
				locations: [E.length]
			}), w.push(T.name), "number" == typeof T.location ? E.push(0 | T.location) : E.push(-1)
		}
		var A = 0;
		for (m = 0; m < E.length; ++m)
			if (E[m] < 0) {
				for (; E.indexOf(A) >= 0;) A += 1;
				E[m] = A
			}
		var k = new Array(i.length);
		o(), f._relink = o, f.types = {
			uniforms: l(i),
			attributes: l(r)
		}, f.attributes = a(p, f, b, E), Object.defineProperty(f, "uniforms", s(p, f, i, k))
	}, t.exports = o
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return new Function("y", "return function(){return y}")(t)
	}

	function n(t, e) {
		for (var i = new Array(t), r = 0; r < t; ++r) i[r] = e;
		return i
	}

	function o(t, e, i, o) {
		function l(i) {
			return new Function("gl", "wrapper", "locations", "return function(){return gl.getUniform(wrapper.program,locations[" + i + "])}")(t, e, o)
		}

		function u(t, e, i) {
			switch (i) {
				case "bool":
				case "int":
				case "sampler2D":
				case "samplerCube":
					return "gl.uniform1i(locations[" + e + "],obj" + t + ")";
				case "float":
					return "gl.uniform1f(locations[" + e + "],obj" + t + ")";
				default:
					var r = i.indexOf("vec");
					if (!(0 <= r && r <= 1 && i.length === 4 + r)) {
						if (0 === i.indexOf("mat") && 4 === i.length) {
							var n = i.charCodeAt(i.length - 1) - 48;
							if (n < 2 || n > 4) throw new a("", "Invalid uniform dimension type for matrix " + name + ": " + i);
							return "gl.uniformMatrix" + n + "fv(locations[" + e + "],false,obj" + t + ")"
						}
						throw new a("", "Unknown uniform data type for " + name + ": " + i)
					}
					var n = i.charCodeAt(i.length - 1) - 48;
					if (n < 2 || n > 4) throw new a("", "Invalid data type");
					switch (i.charAt(0)) {
						case "b":
						case "i":
							return "gl.uniform" + n + "iv(locations[" + e + "],obj" + t + ")";
						case "v":
							return "gl.uniform" + n + "fv(locations[" + e + "],obj" + t + ")";
						default:
							throw new a("", "Unrecognized data type for vector " + name + ": " + i)
					}
			}
		}

		function h(t, e) {
			if ("object" != typeof e) return [
				[t, e]
			];
			var i = [];
			for (var r in e) {
				var n = e[r],
					o = t;
				parseInt(r) + "" === r ? o += "[" + r + "]" : o += "." + r, "object" == typeof n ? i.push.apply(i, h(o, n)) : i.push([o, n])
			}
			return i
		}

		function c(e) {
			for (var r = ["return function updateProperty(obj){"], n = h("", e), s = 0; s < n.length; ++s) {
				var a = n[s],
					l = a[0],
					c = a[1];
				o[c] && r.push(u(l, c, i[c].type))
			}
			return r.push("return obj}"), new Function("gl", "locations", r.join("\n"))(t, o)
		}

		function d(t) {
			switch (t) {
				case "bool":
					return !1;
				case "int":
				case "sampler2D":
				case "samplerCube":
				case "float":
					return 0;
				default:
					var e = t.indexOf("vec");
					if (0 <= e && e <= 1 && t.length === 4 + e) {
						var i = t.charCodeAt(t.length - 1) - 48;
						if (i < 2 || i > 4) throw new a("", "Invalid data type");
						return "b" === t.charAt(0) ? n(i, !1) : n(i, 0)
					}
					if (0 === t.indexOf("mat") && 4 === t.length) {
						var i = t.charCodeAt(t.length - 1) - 48;
						if (i < 2 || i > 4) throw new a("", "Invalid uniform dimension type for matrix " + name + ": " + t);
						return n(i * i, 0)
					}
					throw new a("", "Unknown uniform data type for " + name + ": " + t)
			}
		}

		function f(t, e, n) {
			if ("object" == typeof n) {
				var s = p(n);
				Object.defineProperty(t, e, {
					get: r(s),
					set: c(n),
					enumerable: !0,
					configurable: !1
				})
			} else o[n] ? Object.defineProperty(t, e, {
				get: l(n),
				set: c(n),
				enumerable: !0,
				configurable: !1
			}) : t[e] = d(i[n].type)
		}

		function p(t) {
			var e;
			if (Array.isArray(t)) {
				e = new Array(t.length);
				for (var i = 0; i < t.length; ++i) f(e, i, t[i])
			} else {
				e = {};
				for (var r in t) f(e, r, t[r])
			}
			return e
		}
		var _ = s(i, !0);
		return {
			get: r(p(_)),
			set: c(_),
			enumerable: !0,
			configurable: !0
		}
	}
	var s = i(23),
		a = i(8);
	t.exports = o
}, function(t, e, i) {
	"use strict";

	function r(t, e, i, r, n, o) {
		this._gl = t, this._wrapper = e, this._index = i, this._locations = r, this._dimension = n, this._constFunc = o
	}

	function n(t, e, i, n, o, s, a) {
		for (var l = ["gl", "v"], u = [], h = 0; h < o; ++h) l.push("x" + h), u.push("x" + h);
		l.push("if(x0.length===void 0){return gl.vertexAttrib" + o + "f(v," + u.join() + ")}else{return gl.vertexAttrib" + o + "fv(v,x0)}");
		var c = Function.apply(null, l),
			d = new r(t, e, i, n, o, c);
		Object.defineProperty(s, a, {
			set: function(e) {
				return t.disableVertexAttribArray(n[i]), c(t, n[i], e), e
			},
			get: function() {
				return d
			},
			enumerable: !0
		})
	}

	function o(t, e, i, r, o, s, a) {
		for (var l = new Array(o), u = new Array(o), h = 0; h < o; ++h) n(t, e, i[h], r, o, l, h), u[h] = l[h];
		Object.defineProperty(l, "location", {
			set: function(t) {
				if (Array.isArray(t))
					for (var e = 0; e < o; ++e) u[e].location = t[e];
				else
					for (var e = 0; e < o; ++e) u[e].location = t + e;
				return t
			},
			get: function() {
				for (var t = new Array(o), e = 0; e < o; ++e) t[e] = r[i[e]];
				return t
			},
			enumerable: !0
		}), l.pointer = function(e, n, s, a) {
			e = e || t.FLOAT, n = !!n, s = s || o * o, a = a || 0;
			for (var l = 0; l < o; ++l) {
				var u = r[i[l]];
				t.vertexAttribPointer(u, o, e, n, s, a + l * o), t.enableVertexAttribArray(u)
			}
		};
		var c = new Array(o),
			d = t["vertexAttrib" + o + "fv"];
		Object.defineProperty(s, a, {
			set: function(e) {
				for (var n = 0; n < o; ++n) {
					var s = r[i[n]];
					if (t.disableVertexAttribArray(s), Array.isArray(e[0])) d.call(t, s, e[n]);
					else {
						for (var a = 0; a < o; ++a) c[a] = e[o * n + a];
						d.call(t, s, c)
					}
				}
				return e
			},
			get: function() {
				return l
			},
			enumerable: !0
		})
	}

	function s(t, e, i, r) {
		for (var s = {}, l = 0, u = i.length; l < u; ++l) {
			var h = i[l],
				c = h.name,
				d = h.type,
				f = h.locations;
			switch (d) {
				case "bool":
				case "int":
				case "float":
					n(t, e, f[0], r, 1, s, c);
					break;
				default:
					if (d.indexOf("vec") >= 0) {
						var p = d.charCodeAt(d.length - 1) - 48;
						if (p < 2 || p > 4) throw new a("", "Invalid data type for attribute " + c + ": " + d);
						n(t, e, f[0], r, p, s, c)
					} else {
						if (!(d.indexOf("mat") >= 0)) throw new a("", "Unknown data type for attribute " + c + ": " + d);
						var p = d.charCodeAt(d.length - 1) - 48;
						if (p < 2 || p > 4) throw new a("", "Invalid data type for attribute " + c + ": " + d);
						o(t, e, f, r, p, s, c)
					}
			}
		}
		return s
	}
	t.exports = s;
	var a = i(8),
		l = r.prototype;
	l.pointer = function(t, e, i, r) {
		var n = this,
			o = n._gl,
			s = n._locations[n._index];
		o.vertexAttribPointer(s, n._dimension, t || o.FLOAT, !!e, i || 0, r || 0), o.enableVertexAttribArray(s)
	}, l.set = function(t, e, i, r) {
		return this._constFunc(this._locations[this._index], t, e, i, r)
	}, Object.defineProperty(l, "location", {
		get: function() {
			return this._locations[this._index]
		},
		set: function(t) {
			return t !== this._locations[this._index] && (this._locations[this._index] = 0 | t, this._wrapper.program = null), 0 | t
		}
	})
}, function(t, e, i) {
	"use strict";

	function r(t, e, i, r, n, o, s) {
		this.id = t, this.src = e, this.type = i, this.shader = r, this.count = o, this.programs = [], this.cache = s
	}

	function n(t) {
		this.gl = t, this.shaders = [{}, {}], this.programs = {}
	}

	function o(t, e, i) {
		var r = t.createShader(e);
		if (t.shaderSource(r, i), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
			var n = t.getShaderInfoLog(r);
			try {
				var o = c(n, i, e)
			} catch (t) {
				throw console.warn("Failed to format compiler error: " + t), new h(n, "Error compiling shader:\n" + n)
			}
			throw new h(n, o.short, o.long)
		}
		return r
	}

	function s(t, e, i, r, n) {
		var o = t.createProgram();
		t.attachShader(o, e), t.attachShader(o, i);
		for (var s = 0; s < r.length; ++s) t.bindAttribLocation(o, n[s], r[s]);
		if (t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) {
			var a = t.getProgramInfoLog(o);
			throw new h(a, "Error linking program: " + a)
		}
		return o
	}

	function a(t) {
		var e = f.get(t);
		return e || (e = new n(t), f.set(t, e)), e
	}

	function l(t, e, i) {
		return a(t).getShaderReference(e, i)
	}

	function u(t, e, i, r, n) {
		return a(t).getProgram(e, i, r, n)
	}
	e.shader = l, e.program = u;
	var h = i(8),
		c = i(82),
		d = "undefined" == typeof WeakMap ? i(96) : WeakMap,
		f = new d,
		p = 0;
	r.prototype.dispose = function() {
		if (0 == --this.count) {
			for (var t = this.cache, e = t.gl, i = this.programs, r = 0, n = i.length; r < n; ++r) {
				var o = t.programs[i[r]];
				o && (delete t.programs[r], e.deleteProgram(o))
			}
			e.deleteShader(this.shader), delete t.shaders[this.type === e.FRAGMENT_SHADER | 0][this.src]
		}
	};
	var _ = n.prototype;
	_.getShaderReference = function(t, e) {
		var i = this.gl,
			n = this.shaders[t === i.FRAGMENT_SHADER | 0],
			s = n[e];
		if (s && i.isShader(s.shader)) s.count += 1;
		else {
			var a = o(i, t, e);
			s = n[e] = new r(p++, e, t, a, [], 1, this)
		}
		return s
	}, _.getProgram = function(t, e, i, r) {
		var n = [t.id, e.id, i.join(":"), r.join(":")].join("@"),
			o = this.programs[n];
		return o && this.gl.isProgram(o) || (this.programs[n] = o = s(this.gl, t.shader, e.shader, i, r), t.programs.push(n), e.programs.push(n)), o
	}
}, function(t, e, i) {
	function r(t, e, i) {
		"use strict";
		var r = s(e) || "of unknown name (see npm glsl-shader-name)",
			l = "unknown type";
		void 0 !== i && (l = i === o.FRAGMENT_SHADER ? "fragment" : "vertex");
		for (var u = n("Error compiling %s shader %s:\n", l, r), h = n("%s%s", u, t), c = t.split("\n"), d = {}, f = 0; f < c.length; f++) {
			var p = c[f];
			if ("" !== p) {
				var _ = parseInt(p.split(":")[2]);
				if (isNaN(_)) throw new Error(n("Could not parse error: %s", p));
				d[_] = p
			}
		}
		for (var y = a(e).split("\n"), f = 0; f < y.length; f++)
			if (d[f + 3] || d[f + 2] || d[f + 1]) {
				var v = y[f];
				if (u += v + "\n", d[f + 1]) {
					var g = d[f + 1];
					g = g.substr(g.split(":", 3).join(":").length + 1).trim(), u += n("^^^ %s\n\n", g)
				}
			}
		return {
			long: u.trim(),
			short: h.trim()
		}
	}
	var n = i(83).sprintf,
		o = i(84),
		s = i(86),
		a = i(93);
	t.exports = r
}, function(t, e, i) {
	! function(t) {
		function i() {
			var t = arguments[0],
				e = i.cache;
			return e[t] && e.hasOwnProperty(t) || (e[t] = i.parse(t)), i.format.call(null, e[t], arguments)
		}

		function r(t) {
			return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
		}

		function n(t, e) {
			return Array(e + 1).join(t)
		}
		var o = {
			not_string: /[^s]/,
			number: /[diefg]/,
			json: /[j]/,
			not_json: /[^j]/,
			text: /^[^\x25]+/,
			modulo: /^\x25{2}/,
			placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
			key: /^([a-z_][a-z_\d]*)/i,
			key_access: /^\.([a-z_][a-z_\d]*)/i,
			index_access: /^\[(\d+)\]/,
			sign: /^[\+\-]/
		};
		i.format = function(t, e) {
			var s, a, l, u, h, c, d, f = 1,
				p = t.length,
				_ = "",
				y = [],
				v = !0,
				g = "";
			for (a = 0; a < p; a++)
				if ("string" === (_ = r(t[a]))) y[y.length] = t[a];
				else if ("array" === _) {
				if (u = t[a], u[2])
					for (s = e[f], l = 0; l < u[2].length; l++) {
						if (!s.hasOwnProperty(u[2][l])) throw new Error(i("[sprintf] property '%s' does not exist", u[2][l]));
						s = s[u[2][l]]
					} else s = u[1] ? e[u[1]] : e[f++];
				if ("function" == r(s) && (s = s()), o.not_string.test(u[8]) && o.not_json.test(u[8]) && "number" != r(s) && isNaN(s)) throw new TypeError(i("[sprintf] expecting number but found %s", r(s)));
				switch (o.number.test(u[8]) && (v = s >= 0), u[8]) {
					case "b":
						s = s.toString(2);
						break;
					case "c":
						s = String.fromCharCode(s);
						break;
					case "d":
					case "i":
						s = parseInt(s, 10);
						break;
					case "j":
						s = JSON.stringify(s, null, u[6] ? parseInt(u[6]) : 0);
						break;
					case "e":
						s = u[7] ? s.toExponential(u[7]) : s.toExponential();
						break;
					case "f":
						s = u[7] ? parseFloat(s).toFixed(u[7]) : parseFloat(s);
						break;
					case "g":
						s = u[7] ? parseFloat(s).toPrecision(u[7]) : parseFloat(s);
						break;
					case "o":
						s = s.toString(8);
						break;
					case "s":
						s = (s = String(s)) && u[7] ? s.substring(0, u[7]) : s;
						break;
					case "u":
						s >>>= 0;
						break;
					case "x":
						s = s.toString(16);
						break;
					case "X":
						s = s.toString(16).toUpperCase()
				}
				o.json.test(u[8]) ? y[y.length] = s : (!o.number.test(u[8]) || v && !u[3] ? g = "" : (g = v ? "+" : "-", s = s.toString().replace(o.sign, "")), c = u[4] ? "0" === u[4] ? "0" : u[4].charAt(1) : " ", d = u[6] - (g + s).length, h = u[6] && d > 0 ? n(c, d) : "", y[y.length] = u[5] ? g + s + h : "0" === c ? g + h + s : h + g + s)
			}
			return y.join("")
		}, i.cache = {}, i.parse = function(t) {
			for (var e = t, i = [], r = [], n = 0; e;) {
				if (null !== (i = o.text.exec(e))) r[r.length] = i[0];
				else if (null !== (i = o.modulo.exec(e))) r[r.length] = "%";
				else {
					if (null === (i = o.placeholder.exec(e))) throw new SyntaxError("[sprintf] unexpected placeholder");
					if (i[2]) {
						n |= 1;
						var s = [],
							a = i[2],
							l = [];
						if (null === (l = o.key.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
						for (s[s.length] = l[1];
							"" !== (a = a.substring(l[0].length));)
							if (null !== (l = o.key_access.exec(a))) s[s.length] = l[1];
							else {
								if (null === (l = o.index_access.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
								s[s.length] = l[1]
							}
						i[2] = s
					} else n |= 2;
					if (3 === n) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
					r[r.length] = i
				}
				e = e.substring(i[0].length)
			}
			return r
		};
		var s = function(t, e, r) {
			return r = (e || []).slice(0), r.splice(0, 0, t), i.apply(null, r)
		};
		e.sprintf = i, e.vsprintf = s
	}("undefined" == typeof window || window)
}, function(t, e, i) {
	var r = i(85);
	t.exports = function(t) {
		return r[t]
	}
}, function(t, e) {
	t.exports = {
		0: "NONE",
		1: "ONE",
		2: "LINE_LOOP",
		3: "LINE_STRIP",
		4: "TRIANGLES",
		5: "TRIANGLE_STRIP",
		6: "TRIANGLE_FAN",
		256: "DEPTH_BUFFER_BIT",
		512: "NEVER",
		513: "LESS",
		514: "EQUAL",
		515: "LEQUAL",
		516: "GREATER",
		517: "NOTEQUAL",
		518: "GEQUAL",
		519: "ALWAYS",
		768: "SRC_COLOR",
		769: "ONE_MINUS_SRC_COLOR",
		770: "SRC_ALPHA",
		771: "ONE_MINUS_SRC_ALPHA",
		772: "DST_ALPHA",
		773: "ONE_MINUS_DST_ALPHA",
		774: "DST_COLOR",
		775: "ONE_MINUS_DST_COLOR",
		776: "SRC_ALPHA_SATURATE",
		1024: "STENCIL_BUFFER_BIT",
		1028: "FRONT",
		1029: "BACK",
		1032: "FRONT_AND_BACK",
		1280: "INVALID_ENUM",
		1281: "INVALID_VALUE",
		1282: "INVALID_OPERATION",
		1285: "OUT_OF_MEMORY",
		1286: "INVALID_FRAMEBUFFER_OPERATION",
		2304: "CW",
		2305: "CCW",
		2849: "LINE_WIDTH",
		2884: "CULL_FACE",
		2885: "CULL_FACE_MODE",
		2886: "FRONT_FACE",
		2928: "DEPTH_RANGE",
		2929: "DEPTH_TEST",
		2930: "DEPTH_WRITEMASK",
		2931: "DEPTH_CLEAR_VALUE",
		2932: "DEPTH_FUNC",
		2960: "STENCIL_TEST",
		2961: "STENCIL_CLEAR_VALUE",
		2962: "STENCIL_FUNC",
		2963: "STENCIL_VALUE_MASK",
		2964: "STENCIL_FAIL",
		2965: "STENCIL_PASS_DEPTH_FAIL",
		2966: "STENCIL_PASS_DEPTH_PASS",
		2967: "STENCIL_REF",
		2968: "STENCIL_WRITEMASK",
		2978: "VIEWPORT",
		3024: "DITHER",
		3042: "BLEND",
		3088: "SCISSOR_BOX",
		3089: "SCISSOR_TEST",
		3106: "COLOR_CLEAR_VALUE",
		3107: "COLOR_WRITEMASK",
		3317: "UNPACK_ALIGNMENT",
		3333: "PACK_ALIGNMENT",
		3379: "MAX_TEXTURE_SIZE",
		3386: "MAX_VIEWPORT_DIMS",
		3408: "SUBPIXEL_BITS",
		3410: "RED_BITS",
		3411: "GREEN_BITS",
		3412: "BLUE_BITS",
		3413: "ALPHA_BITS",
		3414: "DEPTH_BITS",
		3415: "STENCIL_BITS",
		3553: "TEXTURE_2D",
		4352: "DONT_CARE",
		4353: "FASTEST",
		4354: "NICEST",
		5120: "BYTE",
		5121: "UNSIGNED_BYTE",
		5122: "SHORT",
		5123: "UNSIGNED_SHORT",
		5124: "INT",
		5125: "UNSIGNED_INT",
		5126: "FLOAT",
		5386: "INVERT",
		5890: "TEXTURE",
		6401: "STENCIL_INDEX",
		6402: "DEPTH_COMPONENT",
		6406: "ALPHA",
		6407: "RGB",
		6408: "RGBA",
		6409: "LUMINANCE",
		6410: "LUMINANCE_ALPHA",
		7680: "KEEP",
		7681: "REPLACE",
		7682: "INCR",
		7683: "DECR",
		7936: "VENDOR",
		7937: "RENDERER",
		7938: "VERSION",
		9728: "NEAREST",
		9729: "LINEAR",
		9984: "NEAREST_MIPMAP_NEAREST",
		9985: "LINEAR_MIPMAP_NEAREST",
		9986: "NEAREST_MIPMAP_LINEAR",
		9987: "LINEAR_MIPMAP_LINEAR",
		10240: "TEXTURE_MAG_FILTER",
		10241: "TEXTURE_MIN_FILTER",
		10242: "TEXTURE_WRAP_S",
		10243: "TEXTURE_WRAP_T",
		10497: "REPEAT",
		10752: "POLYGON_OFFSET_UNITS",
		16384: "COLOR_BUFFER_BIT",
		32769: "CONSTANT_COLOR",
		32770: "ONE_MINUS_CONSTANT_COLOR",
		32771: "CONSTANT_ALPHA",
		32772: "ONE_MINUS_CONSTANT_ALPHA",
		32773: "BLEND_COLOR",
		32774: "FUNC_ADD",
		32777: "BLEND_EQUATION_RGB",
		32778: "FUNC_SUBTRACT",
		32779: "FUNC_REVERSE_SUBTRACT",
		32819: "UNSIGNED_SHORT_4_4_4_4",
		32820: "UNSIGNED_SHORT_5_5_5_1",
		32823: "POLYGON_OFFSET_FILL",
		32824: "POLYGON_OFFSET_FACTOR",
		32854: "RGBA4",
		32855: "RGB5_A1",
		32873: "TEXTURE_BINDING_2D",
		32926: "SAMPLE_ALPHA_TO_COVERAGE",
		32928: "SAMPLE_COVERAGE",
		32936: "SAMPLE_BUFFERS",
		32937: "SAMPLES",
		32938: "SAMPLE_COVERAGE_VALUE",
		32939: "SAMPLE_COVERAGE_INVERT",
		32968: "BLEND_DST_RGB",
		32969: "BLEND_SRC_RGB",
		32970: "BLEND_DST_ALPHA",
		32971: "BLEND_SRC_ALPHA",
		33071: "CLAMP_TO_EDGE",
		33170: "GENERATE_MIPMAP_HINT",
		33189: "DEPTH_COMPONENT16",
		33306: "DEPTH_STENCIL_ATTACHMENT",
		33635: "UNSIGNED_SHORT_5_6_5",
		33648: "MIRRORED_REPEAT",
		33901: "ALIASED_POINT_SIZE_RANGE",
		33902: "ALIASED_LINE_WIDTH_RANGE",
		33984: "TEXTURE0",
		33985: "TEXTURE1",
		33986: "TEXTURE2",
		33987: "TEXTURE3",
		33988: "TEXTURE4",
		33989: "TEXTURE5",
		33990: "TEXTURE6",
		33991: "TEXTURE7",
		33992: "TEXTURE8",
		33993: "TEXTURE9",
		33994: "TEXTURE10",
		33995: "TEXTURE11",
		33996: "TEXTURE12",
		33997: "TEXTURE13",
		33998: "TEXTURE14",
		33999: "TEXTURE15",
		34e3: "TEXTURE16",
		34001: "TEXTURE17",
		34002: "TEXTURE18",
		34003: "TEXTURE19",
		34004: "TEXTURE20",
		34005: "TEXTURE21",
		34006: "TEXTURE22",
		34007: "TEXTURE23",
		34008: "TEXTURE24",
		34009: "TEXTURE25",
		34010: "TEXTURE26",
		34011: "TEXTURE27",
		34012: "TEXTURE28",
		34013: "TEXTURE29",
		34014: "TEXTURE30",
		34015: "TEXTURE31",
		34016: "ACTIVE_TEXTURE",
		34024: "MAX_RENDERBUFFER_SIZE",
		34041: "DEPTH_STENCIL",
		34055: "INCR_WRAP",
		34056: "DECR_WRAP",
		34067: "TEXTURE_CUBE_MAP",
		34068: "TEXTURE_BINDING_CUBE_MAP",
		34069: "TEXTURE_CUBE_MAP_POSITIVE_X",
		34070: "TEXTURE_CUBE_MAP_NEGATIVE_X",
		34071: "TEXTURE_CUBE_MAP_POSITIVE_Y",
		34072: "TEXTURE_CUBE_MAP_NEGATIVE_Y",
		34073: "TEXTURE_CUBE_MAP_POSITIVE_Z",
		34074: "TEXTURE_CUBE_MAP_NEGATIVE_Z",
		34076: "MAX_CUBE_MAP_TEXTURE_SIZE",
		34338: "VERTEX_ATTRIB_ARRAY_ENABLED",
		34339: "VERTEX_ATTRIB_ARRAY_SIZE",
		34340: "VERTEX_ATTRIB_ARRAY_STRIDE",
		34341: "VERTEX_ATTRIB_ARRAY_TYPE",
		34342: "CURRENT_VERTEX_ATTRIB",
		34373: "VERTEX_ATTRIB_ARRAY_POINTER",
		34466: "NUM_COMPRESSED_TEXTURE_FORMATS",
		34467: "COMPRESSED_TEXTURE_FORMATS",
		34660: "BUFFER_SIZE",
		34661: "BUFFER_USAGE",
		34816: "STENCIL_BACK_FUNC",
		34817: "STENCIL_BACK_FAIL",
		34818: "STENCIL_BACK_PASS_DEPTH_FAIL",
		34819: "STENCIL_BACK_PASS_DEPTH_PASS",
		34877: "BLEND_EQUATION_ALPHA",
		34921: "MAX_VERTEX_ATTRIBS",
		34922: "VERTEX_ATTRIB_ARRAY_NORMALIZED",
		34930: "MAX_TEXTURE_IMAGE_UNITS",
		34962: "ARRAY_BUFFER",
		34963: "ELEMENT_ARRAY_BUFFER",
		34964: "ARRAY_BUFFER_BINDING",
		34965: "ELEMENT_ARRAY_BUFFER_BINDING",
		34975: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
		35040: "STREAM_DRAW",
		35044: "STATIC_DRAW",
		35048: "DYNAMIC_DRAW",
		35632: "FRAGMENT_SHADER",
		35633: "VERTEX_SHADER",
		35660: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
		35661: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
		35663: "SHADER_TYPE",
		35664: "FLOAT_VEC2",
		35665: "FLOAT_VEC3",
		35666: "FLOAT_VEC4",
		35667: "INT_VEC2",
		35668: "INT_VEC3",
		35669: "INT_VEC4",
		35670: "BOOL",
		35671: "BOOL_VEC2",
		35672: "BOOL_VEC3",
		35673: "BOOL_VEC4",
		35674: "FLOAT_MAT2",
		35675: "FLOAT_MAT3",
		35676: "FLOAT_MAT4",
		35678: "SAMPLER_2D",
		35680: "SAMPLER_CUBE",
		35712: "DELETE_STATUS",
		35713: "COMPILE_STATUS",
		35714: "LINK_STATUS",
		35715: "VALIDATE_STATUS",
		35716: "INFO_LOG_LENGTH",
		35717: "ATTACHED_SHADERS",
		35718: "ACTIVE_UNIFORMS",
		35719: "ACTIVE_UNIFORM_MAX_LENGTH",
		35720: "SHADER_SOURCE_LENGTH",
		35721: "ACTIVE_ATTRIBUTES",
		35722: "ACTIVE_ATTRIBUTE_MAX_LENGTH",
		35724: "SHADING_LANGUAGE_VERSION",
		35725: "CURRENT_PROGRAM",
		36003: "STENCIL_BACK_REF",
		36004: "STENCIL_BACK_VALUE_MASK",
		36005: "STENCIL_BACK_WRITEMASK",
		36006: "FRAMEBUFFER_BINDING",
		36007: "RENDERBUFFER_BINDING",
		36048: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
		36049: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
		36050: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
		36051: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
		36053: "FRAMEBUFFER_COMPLETE",
		36054: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
		36055: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
		36057: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
		36061: "FRAMEBUFFER_UNSUPPORTED",
		36064: "COLOR_ATTACHMENT0",
		36096: "DEPTH_ATTACHMENT",
		36128: "STENCIL_ATTACHMENT",
		36160: "FRAMEBUFFER",
		36161: "RENDERBUFFER",
		36162: "RENDERBUFFER_WIDTH",
		36163: "RENDERBUFFER_HEIGHT",
		36164: "RENDERBUFFER_INTERNAL_FORMAT",
		36168: "STENCIL_INDEX8",
		36176: "RENDERBUFFER_RED_SIZE",
		36177: "RENDERBUFFER_GREEN_SIZE",
		36178: "RENDERBUFFER_BLUE_SIZE",
		36179: "RENDERBUFFER_ALPHA_SIZE",
		36180: "RENDERBUFFER_DEPTH_SIZE",
		36181: "RENDERBUFFER_STENCIL_SIZE",
		36194: "RGB565",
		36336: "LOW_FLOAT",
		36337: "MEDIUM_FLOAT",
		36338: "HIGH_FLOAT",
		36339: "LOW_INT",
		36340: "MEDIUM_INT",
		36341: "HIGH_INT",
		36346: "SHADER_COMPILER",
		36347: "MAX_VERTEX_UNIFORM_VECTORS",
		36348: "MAX_VARYING_VECTORS",
		36349: "MAX_FRAGMENT_UNIFORM_VECTORS",
		37440: "UNPACK_FLIP_Y_WEBGL",
		37441: "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
		37442: "CONTEXT_LOST_WEBGL",
		37443: "UNPACK_COLORSPACE_CONVERSION_WEBGL",
		37444: "BROWSER_DEFAULT_WEBGL"
	}
}, function(t, e, i) {
	function r(t) {
		for (var e = Array.isArray(t) ? t : n(t), i = 0; i < e.length; i++) {
			var r = e[i];
			if ("preprocessor" === r.type) {
				var s = r.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);
				if (s && s[2]) {
					var a = s[1],
						l = s[2];
					return (a ? o(l) : l).trim()
				}
			}
		}
	}
	var n = i(87),
		o = i(92);
	t.exports = r
}, function(t, e, i) {
	function r(t, e) {
		var i = n(e),
			r = [];
		return r = r.concat(i(t)), r = r.concat(i(null))
	}
	var n = i(88);
	t.exports = r
}, function(t, e, i) {
	function r(t) {
		function e(t) {
			t.length && z.push({
				type: T[V],
				data: t,
				position: Y,
				line: X,
				column: H
			})
		}

		function i(t) {
			B = 0, $ += t, N = $.length;
			for (var e; D = $[B], B < N;) {
				switch (e = B, V) {
					case c:
						B = k();
						break;
					case d:
						B = A();
						break;
					case f:
						B = P();
						break;
					case p:
						B = C();
						break;
					case _:
						B = L();
						break;
					case E:
						B = R();
						break;
					case y:
						B = M();
						break;
					case h:
						B = j();
						break;
					case b:
						B = O();
						break;
					case u:
						B = x()
				}
				if (e !== B) switch ($[e]) {
					case "\n":
						H = 0, ++X;
						break;
					default:
						++H
				}
			}
			return F += B, $ = $.slice(B), z
		}

		function r(t) {
			return U.length && e(U.join("")), V = w, e("(eof)"), z
		}

		function x() {
			return U = U.length ? [] : U, "/" === I && "*" === D ? (Y = F + B - 1, V = c, I = D, B + 1) : "/" === I && "/" === D ? (Y = F + B - 1, V = d, I = D, B + 1) : "#" === D ? (V = f, Y = F + B, B) : /\s/.test(D) ? (V = b, Y = F + B, B) : (G = /\d/.test(D), W = /[^\w_]/.test(D), Y = F + B, V = G ? _ : W ? p : h, B)
		}

		function O() {
			return /[^\s]/g.test(D) ? (e(U.join("")), V = u, B) : (U.push(D), I = D, B + 1)
		}

		function P() {
			return "\r" !== D && "\n" !== D || "\\" === I ? (U.push(D), I = D, B + 1) : (e(U.join("")), V = u, B)
		}

		function A() {
			return P()
		}

		function k() {
			return "/" === D && "*" === I ? (U.push(D), e(U.join("")), V = u, B + 1) : (U.push(D), I = D, B + 1)
		}

		function C() {
			if ("." === I && /\d/.test(D)) return V = y, B;
			if ("/" === I && "*" === D) return V = c, B;
			if ("/" === I && "/" === D) return V = d, B;
			if ("." === D && U.length) {
				for (; S(U););
				return V = y, B
			}
			if (";" === D || ")" === D || "(" === D) {
				if (U.length)
					for (; S(U););
				return e(D), V = u, B + 1
			}
			var t = 2 === U.length && "=" !== D;
			if (/[\w_\d\s]/.test(D) || t) {
				for (; S(U););
				return V = u, B
			}
			return U.push(D), I = D, B + 1
		}

		function S(t) {
			for (var i, r, n = 0;;) {
				if (i = o.indexOf(t.slice(0, t.length + n).join("")), r = o[i], -1 === i) {
					if (n-- + t.length > 0) continue;
					r = t.slice(0, 1).join("")
				}
				return e(r), Y += r.length, U = U.slice(r.length), U.length
			}
		}

		function R() {
			return /[^a-fA-F0-9]/.test(D) ? (e(U.join("")), V = u, B) : (U.push(D), I = D, B + 1)
		}

		function L() {
			return "." === D ? (U.push(D), V = y, I = D, B + 1) : /[eE]/.test(D) ? (U.push(D), V = y, I = D, B + 1) : "x" === D && 1 === U.length && "0" === U[0] ? (V = E, U.push(D), I = D, B + 1) : /[^\d]/.test(D) ? (e(U.join("")), V = u, B) : (U.push(D), I = D, B + 1)
		}

		function M() {
			return "f" === D && (U.push(D), I = D, B += 1), /[eE]/.test(D) ? (U.push(D), I = D, B + 1) : "-" === D && /[eE]/.test(I) ? (U.push(D), I = D, B + 1) : /[^\d]/.test(D) ? (e(U.join("")), V = u, B) : (U.push(D), I = D, B + 1)
		}

		function j() {
			if (/[^\d\w_]/.test(D)) {
				var t = U.join("");
				return V = Z.indexOf(t) > -1 ? m : q.indexOf(t) > -1 ? g : v, e(U.join("")), V = u, B
			}
			return U.push(D), I = D, B + 1
		}
		var D, I, N, B = 0,
			F = 0,
			V = u,
			U = [],
			z = [],
			X = 1,
			H = 0,
			Y = 0,
			G = !1,
			W = !1,
			$ = "";
		t = t || {};
		var q = s,
			Z = n;
		return "300 es" === t.version && (q = l, Z = a),
			function(t) {
				return z = [], null !== t ? i(t.replace ? t.replace(/\r\n/g, "\n") : t) : r()
			}
	}
	t.exports = r;
	var n = i(24),
		o = i(89),
		s = i(25),
		a = i(90),
		l = i(91),
		u = 999,
		h = 9999,
		c = 0,
		d = 1,
		f = 2,
		p = 3,
		_ = 4,
		y = 5,
		v = 6,
		g = 7,
		m = 8,
		b = 9,
		w = 10,
		E = 11,
		T = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"]
}, function(t, e) {
	t.exports = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]
}, function(t, e, i) {
	var r = i(24);
	t.exports = r.slice().concat(["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray"])
}, function(t, e, i) {
	var r = i(25);
	r = r.slice().filter(function(t) {
		return !/^(gl\_|texture)/.test(t)
	}), t.exports = r.concat(["gl_VertexID", "gl_InstanceID", "gl_Position", "gl_PointSize", "gl_FragCoord", "gl_FrontFacing", "gl_FragDepth", "gl_PointCoord", "gl_MaxVertexAttribs", "gl_MaxVertexUniformVectors", "gl_MaxVertexOutputVectors", "gl_MaxFragmentInputVectors", "gl_MaxVertexTextureImageUnits", "gl_MaxCombinedTextureImageUnits", "gl_MaxTextureImageUnits", "gl_MaxFragmentUniformVectors", "gl_MaxDrawBuffers", "gl_MinProgramTexelOffset", "gl_MaxProgramTexelOffset", "gl_DepthRangeParameters", "gl_DepthRange", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"])
}, function(t, e) {
	t.exports = function(t) {
		return atob(t)
	}
}, function(t, e, i) {
	function r(t, e, i) {
		e = "number" == typeof e ? e : 1, i = i || ": ";
		var r = t.split(/\r?\n/),
			o = String(r.length + e - 1).length;
		return r.map(function(t, r) {
			var s = r + e,
				a = String(s).length;
			return n(s, o - a) + i + t
		}).join("\n")
	}
	var n = i(94);
	t.exports = r
}, function(t, e, i) {
	"use strict";
	var r = i(95);
	t.exports = function(t, e, i) {
		return i = void 0 !== i ? i + "" : " ", r(i, e) + t
	}
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if ("string" != typeof t) throw new TypeError("expected a string");
		if (1 === e) return t;
		if (2 === e) return t + t;
		var i = t.length * e;
		if (n !== t || void 0 === n) n = t, o = "";
		else if (o.length >= i) return o.substr(0, i);
		for (; i > o.length && e > 1;) 1 & e && (o += t), e >>= 1, t += t;
		return o += t, o = o.substr(0, i)
	}
	var n, o = "";
	t.exports = r
}, function(t, e, i) {
	function r() {
		var t = n();
		return {
			get: function(e, i) {
				var r = t(e);
				return r.hasOwnProperty("value") ? r.value : i
			},
			set: function(e, i) {
				return t(e).value = i, this
			},
			has: function(e) {
				return "value" in t(e)
			},
			delete: function(e) {
				return delete t(e).value
			}
		}
	}
	var n = i(97);
	t.exports = r
}, function(t, e, i) {
	function r() {
		var t = {};
		return function(e) {
			if (("object" != typeof e || null === e) && "function" != typeof e) throw new Error("Weakmap-shim: Key must be object");
			var i = e.valueOf(t);
			return i && i.identity === t ? i : n(e, t)
		}
	}
	var n = i(98);
	t.exports = r
}, function(t, e) {
	function i(t, e) {
		var i = {
				identity: e
			},
			r = t.valueOf;
		return Object.defineProperty(t, "valueOf", {
			value: function(t) {
				return t !== e ? r.apply(this, arguments) : i
			},
			writable: !0
		}), i
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!a) {
			var i = Object.keys(s);
			a = {};
			for (var r = 0; r < i.length; ++r) {
				var n = i[r];
				a[t[n]] = s[n]
			}
		}
		return a[e]
	}

	function n(t, e) {
		for (var i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), n = [], o = 0; o < i; ++o) {
			var s = t.getActiveUniform(e, o);
			if (s) {
				var a = r(t, s.type);
				if (s.size > 1)
					for (var l = 0; l < s.size; ++l) n.push({
						name: s.name.replace("[0]", "[" + l + "]"),
						type: a
					});
				else n.push({
					name: s.name,
					type: a
				})
			}
		}
		return n
	}

	function o(t, e) {
		for (var i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), n = [], o = 0; o < i; ++o) {
			var s = t.getActiveAttrib(e, o);
			s && n.push({
				name: s.name,
				type: r(t, s.type)
			})
		}
		return n
	}
	e.uniforms = n, e.attributes = o;
	var s = {
			FLOAT: "float",
			FLOAT_VEC2: "vec2",
			FLOAT_VEC3: "vec3",
			FLOAT_VEC4: "vec4",
			INT: "int",
			INT_VEC2: "ivec2",
			INT_VEC3: "ivec3",
			INT_VEC4: "ivec4",
			BOOL: "bool",
			BOOL_VEC2: "bvec2",
			BOOL_VEC3: "bvec3",
			BOOL_VEC4: "bvec4",
			FLOAT_MAT2: "mat2",
			FLOAT_MAT3: "mat3",
			FLOAT_MAT4: "mat4",
			SAMPLER_2D: "sampler2D",
			SAMPLER_CUBE: "samplerCube"
		},
		a = null
}, function(t, e) {
	function i() {
		var t = new Float32Array(9);
		return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
	}
	t.exports = i
}, function(t, e) {
	function i(t, e, i) {
		var r = i[0],
			n = i[1];
		return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = n * e[3], t[4] = n * e[4], t[5] = n * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
	}
	t.exports = i
}, function(t, e) {
	function i(t, e, i) {
		var r = e[0],
			n = e[1],
			o = e[2],
			s = e[3],
			a = e[4],
			l = e[5],
			u = e[6],
			h = e[7],
			c = e[8],
			d = i[0],
			f = i[1];
		return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = l, t[6] = d * r + f * s + u, t[7] = d * n + f * a + h, t[8] = d * o + f * l + c, t
	}
	t.exports = i
}, function(t, e) {
	function i(t) {
		return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
	}
	t.exports = i
}, function(t, e) {
	t.exports = "precision lowp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform mat3 uModel;\n\nvarying vec2 vUv;\n\nvoid main() {\n\t// vUv = (uModel * vec3(vec2(0.0, 1.0) + vec2(0.5, -0.5) * (position + 1.0), 1.)).xy;\n\tvUv = (uModel * vec3(position, 1.)).xy;\n\n\tgl_Position = vec4(position, 0., 1.);\n}"
}, function(t, e) {
	t.exports = "precision lowp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform vec2 uResolution;\nuniform float uScreenVideoRatio;\n\nuniform sampler2D uTexture1;\nuniform float uTexture1x;\nuniform float uTexture1Alpha;\n\nuniform sampler2D uTexture2;\nuniform float uTexture2x;\nuniform float uTexture2Alpha;\n\nvoid main() \n{\n\tvec4 color = vec4(0., 0., 1., 1.);\n\n\tvec2 normPosition = gl_FragCoord.xy / uResolution;\n\tvec2 position = (step(0., uTexture1x) * normPosition + step(0., -uTexture1x) * (1. - normPosition));\n\n\tfloat ratio = 0.30;\n\n\t// texture A\n\tfloat dx1 = uTexture1x * .8 * uScreenVideoRatio;\n\tfloat tStripe1 = abs(uTexture1x * 0.6);\n\tdx1 -= step(0.2 - tStripe1, position.x) * uTexture1x * ratio;\n\tdx1 -= step(0.4 - tStripe1, position.x) * uTexture1x * ratio;\n\tdx1 += step(0.6 - tStripe1, position.x) * uTexture1x * ratio;\n\tdx1 += step(0.8 - tStripe1, position.x) * uTexture1x * ratio;\n\n\tvec4 texA = texture2D(uTexture1, vec2(vUv.x + dx1, vUv.y)) * uTexture1Alpha;\n\t\n\tvec4 fcolor = step(0., 1. - (normPosition.x + uTexture1x)) * step(0., normPosition.x + uTexture1x) * texA;\n\n\t// texture B\n\tfloat dxB = uTexture2x * .8 * uScreenVideoRatio;\n\tfloat tStripe2 = abs(uTexture2x * 0.6);\n\tdxB -= step(0.2 + tStripe2, position.x) * uTexture2x * ratio;\n\tdxB -= step(0.4 + tStripe2, position.x) * uTexture2x * ratio;\n\tdxB += step(0.6 + tStripe2, position.x) * uTexture2x * ratio;\n\tdxB += step(0.8 + tStripe2, position.x) * uTexture2x * ratio;\n\t\n\tvec4 texB = texture2D(uTexture2, vec2(vUv.x + dxB, vUv.y)) * uTexture2Alpha;\n\n\tfcolor += step(0., 1. - (normPosition.x + uTexture2x)) * step(0., normPosition.x + uTexture2x) * texB;\n\n\tgl_FragColor = fcolor;\n}"
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var o = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		s = i(107),
		a = r(s),
		l = i(2),
		u = r(l),
		h = function() {
			function t() {
				n(this, t), t.instanced = !0, this.dom = $(".home__intro")[0], this._background = $(".background", this.dom)[0], this._overlay = $(".overlay", this.dom)[0], this._logo = $(".logo-large", this.dom)[0], this.locked = !0, this.completed = new u.default
			}
			return o(t, [{
				key: "destroy",
				value: function() {
					this.tl.kill()
				}
			}, {
				key: "show",
				value: function() {
					var t = this;
					this.shown = !1, TweenLite.fromTo(this._logo, .8, {
						scale: .95,
						alpha: 0
					}, {
						ease: Expo.easeOut,
						scale: 1,
						alpha: 1,
						delay: .1,
						onComplete: function() {
							t.shown = !0, t.hide()
						}
					}), this.tl = new a.default({
						paused: !0,
						delay: .1
					}), this.tl.to(this._overlay, 1, {
						ease: Power4.easeInOut,
						x: "0%",
						onComplete: function() {
							t._logo.style.visibility = "hidden"
						}
					}, "-=0.4"), this.tl.to(this._overlay, .8, {
						ease: Power4.easeInOut,
						x: "100%"
					}), this.tl.to(this._background, 1.1, {
						ease: Power4.easeInOut,
						x: "100%",
						onStart: function() {
							t.isCompleted = !0, t.completed.dispatch()
						},
						onComplete: function() {
							t.dom.style.display = "none"
						}
					}, "-=0.7")
				}
			}, {
				key: "hide",
				value: function() {
					this.locked || this.tl.play()
				}
			}]), t
		}();
	e.default = h
}, function(t, e, i) {
	"use strict";
	(function(e) {
		var r = void 0 !== t && t.exports && void 0 !== e ? e : window;
		(r._gsQueue || (r._gsQueue = [])).push(function() {
				r._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
					var n = function(t) {
							e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
							var i, r, n = this.vars;
							for (r in n) i = n[r], l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
							l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
						},
						o = i._internals,
						s = n._internals = {},
						a = o.isSelector,
						l = o.isArray,
						u = o.lazyTweens,
						h = o.lazyRender,
						c = r._gsDefine.globals,
						d = function(t) {
							var e, i = {};
							for (e in t) i[e] = t[e];
							return i
						},
						f = function(t, e, i) {
							var r, n, o = t.cycle;
							for (r in o) n = o[r], t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
							delete t.cycle
						},
						p = s.pauseCallback = function() {},
						_ = function(t) {
							var e, i = [],
								r = t.length;
							for (e = 0; e !== r; i.push(t[e++]));
							return i
						},
						y = n.prototype = new e;
					return n.version = "1.19.1", y.constructor = n, y.kill()._gc = y._forcingPlayhead = y._hasPause = !1, y.to = function(t, e, r, n) {
						var o = r.repeat && c.TweenMax || i;
						return e ? this.add(new o(t, e, r), n) : this.set(t, r, n)
					}, y.from = function(t, e, r, n) {
						return this.add((r.repeat && c.TweenMax || i).from(t, e, r), n)
					}, y.fromTo = function(t, e, r, n, o) {
						var s = n.repeat && c.TweenMax || i;
						return e ? this.add(s.fromTo(t, e, r, n), o) : this.set(t, n, o)
					}, y.staggerTo = function(t, e, r, o, s, l, u, h) {
						var c, p, y = new n({
								onComplete: l,
								onCompleteParams: u,
								callbackScope: h,
								smoothChildTiming: this.smoothChildTiming
							}),
							v = r.cycle;
						for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = _(t)), o = o || 0, o < 0 && (t = _(t), t.reverse(), o *= -1), p = 0; p < t.length; p++) c = d(r), c.startAt && (c.startAt = d(c.startAt), c.startAt.cycle && f(c.startAt, t, p)), v && (f(c, t, p), null != c.duration && (e = c.duration, delete c.duration)), y.to(t[p], e, c, p * o);
						return this.add(y, s)
					}, y.staggerFrom = function(t, e, i, r, n, o, s, a) {
						return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, n, o, s, a)
					}, y.staggerFromTo = function(t, e, i, r, n, o, s, a, l) {
						return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, n, o, s, a, l)
					}, y.call = function(t, e, r, n) {
						return this.add(i.delayedCall(0, t, e, r), n)
					}, y.set = function(t, e, r) {
						return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r)
					}, n.exportRoot = function(t, e) {
						t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
						var r, o, s = new n(t),
							a = s._timeline;
						for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
						return a.add(s, 0), s
					}, y.add = function(r, o, s, a) {
						var u, h, c, d, f, p;
						if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
							if (r instanceof Array || r && r.push && l(r)) {
								for (s = s || "normal", a = a || 0, u = o, h = r.length, c = 0; c < h; c++) l(d = r[c]) && (d = new n({
									tweens: d
								})), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === s ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === s && (d._startTime -= d.delay())), u += a;
								return this._uncache(!0)
							}
							if ("string" == typeof r) return this.addLabel(r, o);
							if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
							r = i.delayedCall(0, r)
						}
						if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
							for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
						return this
					}, y.remove = function(e) {
						if (e instanceof t) {
							this._remove(e, !1);
							var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
							return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
						}
						if (e instanceof Array || e && e.push && l(e)) {
							for (var r = e.length; --r > -1;) this.remove(e[r]);
							return this
						}
						return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
					}, y._remove = function(t, i) {
						return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
					}, y.append = function(t, e) {
						return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
					}, y.insert = y.insertMultiple = function(t, e, i, r) {
						return this.add(t, e || 0, i, r)
					}, y.appendMultiple = function(t, e, i, r) {
						return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
					}, y.addLabel = function(t, e) {
						return this._labels[t] = this._parseTimeOrLabel(e), this
					}, y.addPause = function(t, e, r, n) {
						var o = i.delayedCall(0, p, r, n || this);
						return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
					}, y.removeLabel = function(t) {
						return delete this._labels[t], this
					}, y.getLabelTime = function(t) {
						return null != this._labels[t] ? this._labels[t] : -1
					}, y._parseTimeOrLabel = function(e, i, r, n) {
						var o;
						if (n instanceof t && n.timeline === this) this.remove(n);
						else if (n && (n instanceof Array || n.push && l(n)))
							for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
						if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
						if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
						else {
							if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
							i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, r) : this.duration()
						}
						return Number(e) + i
					}, y.seek = function(t, e) {
						return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
					}, y.stop = function() {
						return this.paused(!0)
					}, y.gotoAndPlay = function(t, e) {
						return this.play(t, e)
					}, y.gotoAndStop = function(t, e) {
						return this.pause(t, e)
					}, y.render = function(t, e, i) {
						this._gc && this._enabled(!0, !1);
						var r, n, o, s, a, l, c, d = this._dirty ? this.totalDuration() : this._totalDuration,
							f = this._time,
							p = this._startTime,
							_ = this._timeScale,
							y = this._paused;
						if (t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (n = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = d + 1e-4;
						else if (t < 1e-7)
							if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = n = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
							else {
								if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n)
									for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
								t = 0, this._initted || (a = !0)
							}
						else {
							if (this._hasPause && !this._forcingPlayhead && !e) {
								if (t >= f)
									for (r = this._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r), r = r._next;
								else
									for (r = this._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (l = r), r = r._prev;
								l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
							}
							this._totalTime = this._time = this._rawPrevTime = t
						}
						if (this._time !== f && this._first || i || a || l) {
							if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= f)
								for (r = this._first; r && (o = r._next, c === this._time && (!this._paused || y));)(r._active || r._startTime <= c && !r._paused && !r._gc) && (l === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = o;
							else
								for (r = this._last; r && (o = r._prev, c === this._time && (!this._paused || y));) {
									if (r._active || r._startTime <= f && !r._paused && !r._gc) {
										if (l === r) {
											for (l = r._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
											l = null, this.pause()
										}
										r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
									}
									r = o
								}
							this._onUpdate && (e || (u.length && h(), this._callback("onUpdate"))), s && (this._gc || p !== this._startTime && _ === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (n && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
						}
					}, y._hasPausedChild = function() {
						for (var t = this._first; t;) {
							if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
							t = t._next
						}
						return !1
					}, y.getChildren = function(t, e, r, n) {
						n = n || -9999999999;
						for (var o = [], s = this._first, a = 0; s;) s._startTime < n || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== r && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, r)), a = o.length))), s = s._next;
						return o
					}, y.getTweensOf = function(t, e) {
						var r, n, o = this._gc,
							s = [],
							a = 0;
						for (o && this._enabled(!0, !0), r = i.getTweensOf(t), n = r.length; --n > -1;)(r[n].timeline === this || e && this._contains(r[n])) && (s[a++] = r[n]);
						return o && this._enabled(!1, !0), s
					}, y.recent = function() {
						return this._recent
					}, y._contains = function(t) {
						for (var e = t.timeline; e;) {
							if (e === this) return !0;
							e = e.timeline
						}
						return !1
					}, y.shiftChildren = function(t, e, i) {
						i = i || 0;
						for (var r, n = this._first, o = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
						if (e)
							for (r in o) o[r] >= i && (o[r] += t);
						return this._uncache(!0)
					}, y._kill = function(t, e) {
						if (!t && !e) return this._enabled(!1, !1);
						for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(t, e) && (n = !0);
						return n
					}, y.clear = function(t) {
						var e = this.getChildren(!1, !0, !0),
							i = e.length;
						for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
						return !1 !== t && (this._labels = {}), this._uncache(!0)
					}, y.invalidate = function() {
						for (var e = this._first; e;) e.invalidate(), e = e._next;
						return t.prototype.invalidate.call(this)
					}, y._enabled = function(t, i) {
						if (t === this._gc)
							for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
						return e.prototype._enabled.call(this, t, i)
					}, y.totalTime = function(e, i, r) {
						this._forcingPlayhead = !0;
						var n = t.prototype.totalTime.apply(this, arguments);
						return this._forcingPlayhead = !1, n
					}, y.duration = function(t) {
						return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
					}, y.totalDuration = function(t) {
						if (!arguments.length) {
							if (this._dirty) {
								for (var e, i, r = 0, n = this._last, o = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = e;
								this._duration = this._totalDuration = r, this._dirty = !1
							}
							return this._totalDuration
						}
						return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
					}, y.paused = function(e) {
						if (!e)
							for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
						return t.prototype.paused.apply(this, arguments)
					}, y.usesFrames = function() {
						for (var e = this._timeline; e._timeline;) e = e._timeline;
						return e === t._rootFramesTimeline
					}, y.rawTime = function(t) {
						return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
					}, n
				}, !0)
			}), r._gsDefine && r._gsQueue.pop()(),
			function(e) {
				i(11), t.exports = function() {
					return (r.GreenSockGlobals || r).TimelineLite
				}()
			}()
	}).call(e, i(6))
}, function(t, e) {
	(function(e) {
		t.exports = e
	}).call(e, {})
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			c = i(4),
			d = r(c),
			f = i(0),
			p = r(f),
			_ = i(10),
			y = r(_),
			v = i(17),
			g = r(v),
			m = (l = function(t) {
				function e(t, i) {
					return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return s(e, t), u(e, [{
					key: "init",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.slideShow = new y.default($(".slideshow", this.dom)[0], {
							snapping: !1,
							mousewheelNavigation: !0
						}), this.slideShow.mousewheeled.add(this._onSlideshowMousewheeled), this._nav = $(".cases__nav")[0], this._thumb = new g.default(this._nav, {
							orientation: "hozitonal",
							className: "cases__nav__thumb",
							minSize: 50,
							autoHide: !1
						}), this._thumb.scrolled.add(this._onScrollThumb);
						for (var t = 0, i = this.slideShow.items.length; t < i; ++t) {
							var r = this.slideShow.items[t];
							p.default.touchOnly || (r.addEventListener("mouseenter", this._onEnterItem), r.addEventListener("mouseleave", this._onLeaveItem)), r.video = $("video", r)[0], r.video.addEventListener("click", this._onClickItem), r.video.addEventListener("canplaythrough", this._onVideoCanPlayThrough), $("a", r)[0].addEventListener("click", this._onClickItem)
						}
					}
				}, {
					key: "destroy",
					value: function() {
						this._thumb.destroy();
						for (var t = 0, i = this.slideShow.items.length; t < i; ++t) {
							var r = this.slideShow.items[t];
							r.removeEventListener("mouseenter", this._onEnterItem), r.removeEventListener("mouseleave", this._onLeaveItem), r.video !== this.currentVideo && (r.video.src = "")
						}
						this.slideShow.destroy(), h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
					}
				}, {
					key: "resize",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), p.default.tablet ? this.slideShow.list.style.transform = null : this.slideShow.resize(), this._thumb.resize(this.slideShow.width), this._nav.style.bottom = (p.default.height - this.slideShow.list.clientHeight >> 2) - 5 + "px"
					}
				}, {
					key: "update",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), this._thumb.update(), this.slideShow.dragging && (this._scrolling = !1), this._scrolling ? (this.slideShow.x += .15 * (this.slideshowX - this.slideShow.x), this.slideShow._destx = this.slideShow.x) : this._thumb.percent = this.slideShow.x / (this.slideShow.width - this.slideShow._containerWidth), p.default.tablet || this.slideShow.update()
					}
				}, {
					key: "_onScrollThumb",
					value: function(t) {
						this._scrolling = !0, this.slideshowX = (this.slideShow.width - this.slideShow._containerWidth) * t, console.log("Cases.js --", t, this.slideshowX)
					}
				}, {
					key: "_onSlideshowMousewheeled",
					value: function(t) {
						this.slideshowX = this.slideShow._destx, this._scrolling = !1, console.log("Cases.js ---")
					}
				}, {
					key: "_onClickItem",
					value: function(t) {
						if (t.preventDefault(), !this.slideShow.direction) {
							this.slideShow.isLocked = !0;
							for (var e = t.currentTarget.parentNode;
								"LI" !== e.tagName;) e = e.parentNode;
							p.default.touchOnly || (this.currentVideo = e.video), history.pushState({}, null, e.getAttribute("data-href"))
						}
					}
				}, {
					key: "_onEnterItem",
					value: function(t) {
						var e = this;
						if (!this.currentVideo) {
							var i = t.currentTarget;
							this._enterTimeout = setTimeout(function() {
								e._enterItem(i)
							}, 10)
						}
					}
				}, {
					key: "_enterItem",
					value: function(t) {
						var e = t.video;
						e && (e.hovered = !0, e.removeEventListener("playing", this._onVideoPlay), e.addEventListener("playing", this._onVideoPlay), e.play())
					}
				}, {
					key: "_onLeaveItem",
					value: function(t) {
						this.currentVideo || (this._enterTimeout && (clearTimeout(this._enterTimeout), this._enterTimeout = null), this._leaveItem(t.currentTarget))
					}
				}, {
					key: "_leaveItem",
					value: function(t) {
						var e = t.video;
						e && (e.hovered = !1, e.readyState > 1 ? (e.pause(), e.currentTime = 0) : (e.removeEventListener("playing", this._onVideoPlay), e.addEventListener("playing", this._onVideoPlay)))
					}
				}, {
					key: "_onVideoPlay",
					value: function(t) {
						var e = t.currentTarget;
						e.hovered || (e.pause(), e.currentTime = 0), e.removeEventListener("playing", this._onVideoPlay)
					}
				}, {
					key: "_onVideoCanPlayThrough",
					value: function(t) {
						var e = t.currentTarget;
						e.canplaythrough = !0, e.removeEventListener("canplaythrough", this._onVideoCanPlayThrough)
					}
				}, {
					key: "_show",
					value: function() {
						var t = this;
						d.default.header.show(), this.currentVideo = null, this.dom.classList.add("shown");
						var i = this._previousPage ? 700 : 100;
						this._previousPage && "home" === this._previousPage.id && (i = 1100), this._previousPage && "case" === this._previousPage.id && e.savedScroll ? (this.slideshowX = e.savedScroll, this.slideShow.x = this.slideshowX) : this.slideShow.x = 0, this.slideShow._destx = this.slideShow.x;
						for (var r = 0, n = this.slideShow.items.length; r < n; ++r) ! function(e, r) {
							var n = t.slideShow.items[e];
							setTimeout(function() {
								n.classList.add("shown")
							}, 150 * e + i)
						}(r);
						setTimeout(function() {
							t._nav.classList.add("shown")
						}, i), this._shown()
					}
				}, {
					key: "_hide",
					value: function(t) {
						e.savedScroll = this.slideShow.x, "case" === t.id && this.currentVideo ? t.shown.add(this._hidden.bind(this)) : h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_hide", this).call(this, t)
					}
				}]), e
			}(d.default), a(l.prototype, "_onScrollThumb", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onScrollThumb"), l.prototype), a(l.prototype, "_onSlideshowMousewheeled", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onSlideshowMousewheeled"), l.prototype), a(l.prototype, "_onClickItem", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onClickItem"), l.prototype), a(l.prototype, "_onEnterItem", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onEnterItem"), l.prototype), a(l.prototype, "_enterItem", [t], Object.getOwnPropertyDescriptor(l.prototype, "_enterItem"), l.prototype), a(l.prototype, "_onLeaveItem", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onLeaveItem"), l.prototype), a(l.prototype, "_leaveItem", [t], Object.getOwnPropertyDescriptor(l.prototype, "_leaveItem"), l.prototype), a(l.prototype, "_onVideoPlay", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onVideoPlay"), l.prototype), a(l.prototype, "_onVideoCanPlayThrough", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onVideoCanPlayThrough"), l.prototype), l);
		e.default = m
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, l = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			u = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			h = i(4),
			c = r(h),
			d = i(0),
			f = r(d),
			p = i(111),
			_ = r(p),
			y = i(10),
			v = r(y),
			g = i(121),
			m = r(g),
			b = i(3),
			w = r(b),
			E = i(12),
			T = r(E),
			x = (a = function(t) {
				function e(t, i) {
					return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return s(e, t), l(e, [{
					key: "init",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._header = $(".case__header", this.dom)[0], this._headerContent = $(".video-wrapper", this._header)[0], this._headerVideo = $("video", this._headerContent)[0], this._titleWords = $(".h1 .tx", this._header), this._backgroundHead = new T.default($(".ty", this._headerContent)[0], {
							simpleParallax: -.15
						}), this._title = $(".h1-wrapper", this._header)[0];
						var t = $(".videoplayer--solo", this.dom);
						this._videoPlayers = [];
						for (var i = 0, r = t.length; i < r; ++i) this._getPlayer(t[i]);
						this._videoLoops = $(".media>video", this.dom), this._slideshows = [];
						for (var n = $(".slideshow", this.dom), o = 0, s = n.length; o < s; ++o) {
							var a = n[o],
								l = a.classList.contains("slideshow--video-fullscreen"),
								h = new v.default(a, {
									dragNavigation: !l,
									nav: !l
								});
							if (this._slideshows[o] = h, l) {
								h.videoplayers = [];
								for (var c = $(".videoplayer", a), d = 0, f = c.length; d < f; ++d) h.videoplayers[d] = this._getPlayer(c[d]);
								h.navigation = new m.default($(".slideshow__nav__list", a.parentNode)[0], h)
							} else h.changed.add(this._onSlideshowChanged)
						}
						this._slideshowPhotos = $(".slideshow--fullwidth", this.dom)
					}
				}, {
					key: "_getPlayer",
					value: function(t) {
						var e = 0 | t.getAttribute("data-autoplay"),
							i = new _.default([t.getAttribute("data-webm"), t.getAttribute("data-mp4")], t, {
								overlay: t.getAttribute("data-poster"),
								controls: !e,
								showControls: !e,
								loop: !e
							});
						return i.autoplay = !f.default.isSafari && e, i.autoplay || i.played.add(this._onVideoPlayed.bind(this)), $(".h1", i.dom)[0].textContent = t.getAttribute("data-title"), t.getAttribute("data-baseline") ? $(".p", i.dom)[0].textContent = t.getAttribute("data-baseline") : $(".p", i.dom)[0].parentNode.removeChild($(".p", i.dom)[0]), this._videoPlayers.push(i), i
					}
				}, {
					key: "_onVideoPlayed",
					value: function(t) {
						var e = t.dom.getBoundingClientRect(),
							i = this.scrollable.y + e.top - (f.default.height - e.height >> 1);
						TweenLite.to(this.scrollable, .7, {
							y: i,
							_y: i,
							ease: Quart.easeInOut
						})
					}
				}, {
					key: "destroy",
					value: function() {
						for (var t = 0, i = this._videoPlayers.length; t < i; ++t) this._videoPlayers[t].destroy();
						for (var r = 0, n = this._slideshows.length; r < n; ++r) {
							var o = this._slideshows[r];
							o.destroy(), o.navigation && o.navigation.destroy()
						}
						this._headerVideo.src = "", u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
					}
				}, {
					key: "resize",
					value: function() {
						this._initY = this.scrollable.y;
						var t = f.default.width / f.default.height,
							i = void 0;
						t < 16 / 9 ? (this._headerw = f.default.height * (16 / 9), i = f.default.height) : (this._headerw = f.default.width, i = f.default.width / (16 / 9)), this._headerScale = this._headerw / f.default.width, this._headerx = f.default.width - this._headerw >> 1, this._headery = f.default.height - i >> 1, TweenLite.set(this._headerContent, {
							scale: this._headerScale,
							x: this._headerx,
							y: this._headery
						}), this._backgroundHead.resize();
						for (var r = 0, n = this._slideshows.length; r < n; ++r) {
							var o = this._slideshows[r];
							o.maxDeltaX = f.default.width / 10, o.resize(), o.navigation && o.navigation.resize()
						}
						for (var s = 0, a = this._videoPlayers.length; s < a; ++s) {
							var l = this._videoPlayers[s];
							l.rect = l.dom.getBoundingClientRect(), l.resize()
						}
						for (var h = 0, c = this._videoLoops.length; h < c; h++) {
							var d = this._videoLoops[h];
							d.rect = d.getBoundingClientRect()
						}
						for (var p = 0, _ = this._slideshowPhotos.length; p < _; p++)
							for (var y = this._slideshowPhotos[p], v = $("img", y), g = 0, m = v.length; g < m; g++) {
								var b = v[g];
								b.hasAttribute("data-m") && (f.default.width <= 415 ? b.src = b.getAttribute("data-m") : b.src = b.getAttribute("data-d"))
							}
						this._title.rect = this._title.getBoundingClientRect(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this)
					}
				}, {
					key: "update",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), f.default.isSafari || this._backgroundHead.update(this.scrollable.y), this.draw = !this.draw, this._ctx && this.draw && !this._headerVideo.paused && this._ctx.drawImage(this._headerVideo, 0, 0, this._canvas.width, this._canvas.height);
						var t = this.scrollable.y ? this.scrollable.y / f.default.height : 0;
						if (t <= 1 && this._title.rect) {
							var i = (f.default.height - this._title.rect.height) / 2;
							w.default.transform(this._title, "translate3d(0," + t * i + "px,0)")
						}
						if (this.isHidding || this.isHidden || !this.isShown) return !1;
						f.default.touchOnly || (this.scrollable.y < f.default.height && this._headerVideo.paused ? this._headerVideo.play() : this.scrollable.y > f.default.height && !this._headerVideo.paused && this._headerVideo.pause());
						for (var r = 0, n = this._videoPlayers.length; r < n; ++r) {
							var o = this._videoPlayers[r];
							if (!f.default.touchOnly) {
								var s = o.rect.top + this._initY - this.scrollable.y;
								o.autoplay && !o.autoplayed && o.isPaused && s < 2 * f.default.height / 3 ? (o.autoplayed = !0, o.play()) : !o.isPaused && (s < -o.rect.height || s > o.rect.height) && o.pause()
							}
							o.update()
						}
						if (!f.default.touchOnly)
							for (var a = 0, l = this._videoLoops.length; a < l; a++) {
								var h = this._videoLoops[a],
									c = h.rect.top + this._initY - this.scrollable.y;
								h.paused && c < f.default.height && c > -h.rect.height ? h.play() : !h.paused && (c < -h.rect.height || c >= f.default.height) && h.pause()
							}
						for (var d = 0, p = this._slideshows.length; d < p; ++d) {
							var _ = this._slideshows[d];
							_.update(), _.navigation && _.navigation.update()
						}
					}
				}, {
					key: "_show",
					value: function() {
						this._previousPage && "cases" === this._previousPage.id && this._previousPage.currentVideo ? (this.dom.style.zIndex = 3, this.dom.classList.add("shown"), this._replaceHeaderVideo(!0)) : this._previousPage && "home" === this._previousPage.id || this._previousPage && "cases" === this._previousPage.id || this._previousPage && "case" === this._previousPage.id || (u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_show", this).call(this), f.default.touchOnly || (this._headerVideo.load(), this._headerVideo.play()), this._animateTitle())
					}
				}, {
					key: "_replaceHeaderVideo",
					value: function(t) {
						var e = this._previousPage.currentVideo.getBoundingClientRect(),
							i = this._headerVideo.parentNode;
						if (i.removeChild(this._headerVideo), f.default.isSafari) {
							this._headerVideo = this._previousPage.currentVideo;
							var r = document.createElement("canvas");
							r.width = 1280, r.height = 720, this._canvas = r, this._ctx = r.getContext("2d"), i.append(r)
						} else i.appendChild(this._previousPage.currentVideo), this._headerVideo = $("video", this._headerContent)[0], this._headerVideo.removeAttribute("preload"), this._headerVideo.play();
						t && (this._animateHeader(e), this._animateTitle())
					}
				}, {
					key: "_animateHeader",
					value: function(t) {
						var e = this;
						this.scrollable.isLocked = !0;
						var i = t.width / f.default.width;
						TweenLite.fromTo(this._headerContent, 1.3, {
							x: t.left,
							y: t.top,
							scale: i
						}, {
							x: this._headerx,
							y: this._headery,
							scale: this._headerScale,
							ease: Expo.easeInOut,
							onComplete: function() {
								e._shown(), e.scrollable.isLocked = !1
							}
						})
					}
				}, {
					key: "_animateTitle",
					value: function() {
						TweenLite.staggerFromTo(this._titleWords, 1.1, {
							x: "-130%"
						}, {
							x: "0%",
							ease: Expo.easeOut,
							delay: .5
						}, .1);
						var t = $(".arrow-down", this.dom);
						TweenLite.fromTo(t, .2, {
							opacity: 0
						}, {
							opacity: 1,
							ease: Quart.easeOut,
							delay: .7
						}), TweenLite.fromTo(t, 1.4, {
							y: -f.default.height / 3
						}, {
							y: 0,
							ease: Expo.easeOut,
							delay: .7
						})
					}
				}, {
					key: "_onSlideshowChanged",
					value: function(t) {
						var e = $(".videoplayer-overlay", t.dom)[0];
						e.style.opacity = 0, e.style.visibility = "hidden", t.changed.remove(this._onSlideshowChanged)
					}
				}, {
					key: "_onPreviousPageHidden",
					value: function(t) {
						var i = this;
						if ("cases" === t.id && this._previousPage.currentVideo) this._previousPage = null;
						else if ("home" === t.id) {
							if (f.default.touchOnly || f.default.isIe11) this.dom.classList.add("shown"), this._shown();
							else if (this._previousPage.currentVideo) {
								var r = this._headerVideo.parentNode;
								if (r.removeChild(this._headerVideo), f.default.isSafari) {
									this._headerVideo = this._previousPage.currentVideo;
									var n = document.createElement("canvas");
									n.width = 1280, n.height = 720, this._canvas = n, this._ctx = n.getContext("2d"), r.append(n), this.update()
								} else r.appendChild(this._previousPage.currentVideo), this._headerVideo = $("video", this._headerContent)[0];
								this._headerVideo.play(), this.dom.classList.add("shown"), this._shown()
							} else this._headerVideo.play();
							this.scrollable.isLocked = !0, TweenLite.to(this.scrollable, 1.4, {
								y: f.default.height / 3,
								_y: f.default.height / 3,
								ease: Quart.easeInOut,
								onComplete: function() {
									i.scrollable.isLocked = !1
								}
							});
							var o = $(".arrow-down", this.dom);
							TweenLite.fromTo(o, .5, {
								opacity: 0
							}, {
								opacity: 1,
								ease: Quart.easeInOut,
								delay: .5
							}), TweenLite.fromTo(o, 1, {
								y: -f.default.height / 3
							}, {
								y: 0,
								ease: Quart.easeOut,
								delay: .5
							})
						} else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_onPreviousPageHidden", this).call(this, t)
					}
				}, {
					key: "_hide",
					value: function(t) {
						this.dom.style.transition = null, u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_hide", this).call(this, t)
					}
				}]), e
			}(c.default), function(t, e, i, r, n) {
				var o = {};
				return Object.keys(r).forEach(function(t) {
					o[t] = r[t]
				}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
					return r(t, e, i) || i
				}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
			}(a.prototype, "_onSlideshowChanged", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onSlideshowChanged"), a.prototype), a);
		e.default = x
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function n(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function o(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var s = i(26),
		a = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(s),
		l = function(t) {
			function e() {
				return r(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return o(e, t), e
		}(a.default);
	e.default = l
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(0),
			u = r(l),
			h = i(7),
			c = r(h),
			d = i(27),
			f = r(d),
			p = i(113),
			_ = i(2),
			y = r(_),
			v = i(9),
			g = r(v),
			m = (s = function() {
				function t(e, i, r) {
					n(this, t), r = Object.assign({
						play: !1,
						mute: !1,
						loop: !1,
						controls: !0,
						showControls: !1,
						clickToPlay: !0,
						allowSpacebarBinding: !1,
						overlay: !1,
						showOverlayAtEnd: !1,
						template: void 0
					}, r), this._videoPath = e, this._container = i, this._buffer = 0, this._progress = 0, this.isReady = !0, this.isEnded = !1, this.hasError = !1, this.isFullscreen = !1, this.isPaused = !0, this.playbackInstantied = !1, this.directPlay = r.play || !1, this.hasLoop = r.loop || !1, this.isMuted = r.mute || !1, this.controls = !!r.controls, this.showControls = r.showControls || !1, this.clickToPlay = r.clickToPlay || !1, this.allowSpacebarBinding = r.allowSpacebarBinding || !1, this.overlay = r.overlay || !1, this.showOverlayAtEnd = r.showOverlayAtEnd || !1, this.template = r.template || !1, !this.overlay && this.showOverlayAtEnd && console.warn("VideoPlayer : Player can't show overlay at the end of the video because there is no 'overlay' path provided"), this.overlay && this.showOverlayAtEnd && this.hasLoop && console.warn("VideoPlayer : Player can't show overlay at the end of the video because video is looping"), u.default.touch && (this.directPlay = !1, this.isMuted = !1), this.isPhone = u.default.mobile, this.canPlay = new y.default, this.played = new y.default, this.paused = new y.default, this.ended = new y.default, this.muted = new y.default, this.unmuted = new y.default
				}
				return a(t, [{
					key: "_appendTemplate",
					value: function() {
						this._type ? (this.template || (this.template = (0, p.getTemplate)(this._type)), this._container.innerHTML = this.template.toString(), this._init()) : console.error("this._type must be declared to generate DOM")
					}
				}, {
					key: "_init",
					value: function() {
						this.dom = this._container.getElementsByClassName("videoplayer")[0], this._initVideo(), "youtube" !== this._type && this.setMedia(this._videoPath)
					}
				}, {
					key: "_initVideo",
					value: function() {}
				}, {
					key: "_initControls",
					value: function() {
						this._controlsDom = this._container.getElementsByClassName("videoplayer-controls")[0], !this.controls && this._controlsDom && this._controlsDom.parentNode.removeChild(this._controlsDom), this.controls && this.showControls && this.dom.classList.add("has-controls-always-shown"), !this.controls && this.showControls && console.warn("VideoPlayer : Player can't show controls because 'controls' option value is not set to 'true' !")
					}
				}, {
					key: "_initOverlay",
					value: function() {
						this._overlayDom = this._container.getElementsByClassName("videoplayer-overlay")[0], this._videoOverlay = new f.default(this._overlayDom, this.overlay, this.clickToPlay), this.overlay || this._videoOverlay.hide()
					}
				}, {
					key: "_initEvents",
					value: function() {
						if (this._video.played.add(this._onVideoPlayed), this._video.paused.add(this._onVideoPaused), this.controls && (this._videoControls.toggledPlay.add(this.togglePlay), this._videoControls.toggledMute.add(this.toggleMute), this._videoControls.progressDragged.add(this._onProgressBarDrag), this._videoControls.progressClicked.add(this.seekTimeWithPosition), this._videoControls.toggledFullscreen.add(this.toggleFullscreen)), window.addEventListener(c.default.MOVE, this._onMouseMove), this._videoOverlay.clicked.add(this._onOverlayClickedEvent), this._videoOverlay.toggledPlay.add(this.togglePlay), document.addEventListener("webkitfullscreenchange", this._onBrowserFullscreenChange), document.addEventListener("mozfullscreenchange", this._onBrowserFullscreenChange), document.addEventListener("fullscreenchange", this._onBrowserFullscreenChange), document.addEventListener("MSFullscreenChange", this._onBrowserFullscreenChange), this._video.dom.addEventListener("webkitbeginfullscreen", this._onBrowserFullscreenChange), this._video.dom.addEventListener("webkitendfullscreen", this._onBrowserFullscreenChange), !this.directPlay || u.default.touch || this.overlay) this.directPlay && !u.default.touch && this.overlay && console.warn("VideoPlayer : Player can't auto play video because 'overlay' option value is set to 'true' !");
						else if (this.play(), this.isPaused = !1, this.controls && this._videoControls.togglePlayBtn) {
							this._videoControls.togglePlayBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#pause");
							var t = this._videoControls.togglePlayBtn.firstElementChild;
							t.className = "icon-pause"
						}
					}
				}, {
					key: "setMedia",
					value: function(t) {}
				}, {
					key: "play",
					value: function() {
						this._video.play(), this.dom.classList.add("playing")
					}
				}, {
					key: "pause",
					value: function() {
						this._video.pause(), this.dom.classList.remove("playing"), this._videoControls && this._videoControls.setIconPlay()
					}
				}, {
					key: "stop",
					value: function() {
						this._video.stop(), this.dom.classList.remove("playing"), this._videoOverlay && !this._videoOverlay.isDisplayed && this._videoOverlay.show()
					}
				}, {
					key: "seekTimeWithPosition",
					value: function(t) {
						var e = t * this.duration;
						this.seek(e)
					}
				}, {
					key: "togglePlay",
					value: function() {
						this.isPaused ? this.play() : this.pause(), this.controls && this._videoControls.togglePlayIcon()
					}
				}, {
					key: "toggleMute",
					value: function() {
						if (this.controls && this._videoControls.toggleMuteBtn) {
							var t = this._videoControls.toggleMuteBtn.firstElementChild;
							t.classList.contains("icon-volume-on") ? t.className = "icon-volume-off" : t.className = "icon-volume-on"
						}
					}
				}, {
					key: "mute",
					value: function() {
						if (this.muted.dispatch(this), this.controls && this._videoControls.toggleMuteBtn) {
							this._videoControls.toggleMuteBtn.firstElementChild.className = "icon-volume-off"
						}
					}
				}, {
					key: "onOverlayClicked",
					value: function() {
						this._videoOverlay.onOverlayClick()
					}
				}, {
					key: "toggleFullscreen",
					value: function() {
						if (this.isFullscreen ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : this._video.dom.parentNode.msRequestFullscreen && document.msExitFullscreen() : this._video.dom.parentNode.requestFullScreen ? this._video.dom.parentNode.requestFullScreen() : this._video.dom.parentNode.mozRequestFullScreen ? this._video.dom.parentNode.mozRequestFullScreen() : this._video.dom.parentNode.webkitRequestFullScreen ? this._video.dom.parentNode.webkitRequestFullScreen() : this._video.dom.parentNode.msRequestFullscreen ? this._video.dom.parentNode.msRequestFullscreen() : this._video.dom.webkitEnterFullScreen && u.default.touch && this._video.dom.webkitEnterFullScreen(), this.controls && this._videoControls.toggleFullscreenBtn) {
							var t = this._videoControls.toggleFullscreenBtn.firstElementChild;
							t.classList.contains("icon-expand") ? t.className = "icon-compress" : t.className = "icon-expand"
						}
					}
				}, {
					key: "_timeTotext",
					value: function(t) {
						var e = t / 60 | 0,
							i = t % 60 | 0;
						return i < 10 && (i = "0" + i), e + "”" + i
					}
				}, {
					key: "resize",
					value: function() {
						this.controls && this._videoControls.resize()
					}
				}, {
					key: "destroy",
					value: function() {
						this.canPlay.dispose(), this.played.dispose(), this.ended.dispose(), this.muted.dispose(), this.unmuted.dispose(), this._video.destroy(), this._video.dom.removeEventListener("webkitbeginfullscreen", this._onBrowserFullscreenChange), this._video.dom.removeEventListener("webkitendfullscreen", this._onBrowserFullscreenChange), this._videoControls && this._videoControls.destroy(), this._videoOverlay && this._videoOverlay.destroy(), window.removeEventListener(c.default.MOVE, this._onMouseMove), document.removeEventListener("webkitfullscreenchange", this._onBrowserFullscreenChange), document.removeEventListener("mozfullscreenchange", this._onBrowserFullscreenChange), document.removeEventListener("fullscreenchange", this._onBrowserFullscreenChange), document.removeEventListener("MSFullscreenChange", this._onBrowserFullscreenChange)
					}
				}, {
					key: "_onVideoReady",
					value: function() {
						this.canPlay.dispatch(this), this.isReady = !0
					}
				}, {
					key: "_onVideoPlayed",
					value: function() {
						this.isEnded = !1, this.isPaused = !1, this.controls && !this.showControls && (this._videoControls.videoPaused = !1), this.controls && this._videoControls.setIconPause(), this.played.dispatch(this), "touchOnly" != g.default.deviceType || this.playbackInstantied || (this._videoOverlay.isTouchable = !0, this.playbackInstantied = !0), this._videoOverlay.isDisplayed && this._videoOverlay.hide()
					}
				}, {
					key: "_onVideoPaused",
					value: function() {
						this.isPaused = !0, this.controls && !this.showControls && (this._videoControls.videoPaused = !0), this.controls && this._videoControls.setIconPlay(), this.paused.dispatch(this)
					}
				}, {
					key: "_onVideoUnmuted",
					value: function() {
						this.isMuted = !1, this.controls && this._videoControls.setIconUnmute(), this.unmuted.dispatch(this)
					}
				}, {
					key: "_onVideoMuted",
					value: function() {
						this.isMuted = !0, this.controls && this._videoControls.setIconMute(), this.muted.dispatch(this)
					}
				}, {
					key: "_onVideoError",
					value: function(t) {
						this.hasError = !0, console.log("video error")
					}
				}, {
					key: "_onVideoEnd",
					value: function() {
						this.ended.dispatch(this), this.hasLoop ? this.play() : (this.isPaused = !0, this.isEnded = !0, this.isFullscreen && this.toggleFullscreen(), this.stop(), this.showOverlayAtEnd && this.overlay && this._videoOverlay.show())
					}
				}, {
					key: "_onBrowserFullscreenChange",
					value: function() {
						this.isFullscreen = !this.isFullscreen, this.controls && this._videoControls.toggleFullscreenIcon()
					}
				}, {
					key: "_onProgressBarDrag",
					value: function(t) {
						this._isProgressBarDragged = t, !1 === t && !0 === this._videoWasPlaying && (this.play(), this._videoWasPlaying = void 0)
					}
				}, {
					key: "_onMouseMove",
					value: function(t) {
						if (t.stopPropagation(), t.preventDefault(), this._isProgressBarDragged && this.controls) {
							this.isPaused || (this.pause(), this._videoWasPlaying = !0);
							var e = this._videoControls.progressBarContainerRect.left;
							if (u.default.touch) var i = t.targetTouches[0].clientX - e;
							else var i = t.pageX - e;
							i < 0 ? i = 0 : i > this._videoControls.progressBarContainer.offsetWidth && (i = this._videoControls.progressBarContainer.offsetWidth);
							var r = i / this._videoControls.progressBarContainer.offsetWidth;
							this.seekTimeWithPosition(r)
						}
					}
				}, {
					key: "_onOverlayClickedEvent",
					value: function() {
						"desktop" !== u.default.device && this._videoControls && this._videoControls.togglePlayIcon(), this.isReady && (this.isPaused = !1, this._videoOverlay.isTouchable = !0, this._videoOverlay.hide(), this.play())
					}
				}, {
					key: "currentTime",
					get: function() {
						return this._video.currentTime
					},
					set: function(t) {
						this._video.seek(t)
					}
				}, {
					key: "duration",
					get: function() {
						return this._video.duration
					}
				}, {
					key: "timer",
					get: function() {
						return '<i class="current">' + this._timeTotext(this.currentTime) + '</i> / <i class="duration">' + this._timeTotext(this.duration) + "</i>"
					}
				}]), t
			}(), o(s.prototype, "play", [t], Object.getOwnPropertyDescriptor(s.prototype, "play"), s.prototype), o(s.prototype, "pause", [t], Object.getOwnPropertyDescriptor(s.prototype, "pause"), s.prototype), o(s.prototype, "stop", [t], Object.getOwnPropertyDescriptor(s.prototype, "stop"), s.prototype), o(s.prototype, "seekTimeWithPosition", [t], Object.getOwnPropertyDescriptor(s.prototype, "seekTimeWithPosition"), s.prototype), o(s.prototype, "togglePlay", [t], Object.getOwnPropertyDescriptor(s.prototype, "togglePlay"), s.prototype), o(s.prototype, "toggleMute", [t], Object.getOwnPropertyDescriptor(s.prototype, "toggleMute"), s.prototype), o(s.prototype, "mute", [t], Object.getOwnPropertyDescriptor(s.prototype, "mute"), s.prototype), o(s.prototype, "onOverlayClicked", [t], Object.getOwnPropertyDescriptor(s.prototype, "onOverlayClicked"), s.prototype), o(s.prototype, "toggleFullscreen", [t], Object.getOwnPropertyDescriptor(s.prototype, "toggleFullscreen"), s.prototype), o(s.prototype, "_onVideoReady", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoReady"), s.prototype), o(s.prototype, "_onVideoPlayed", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoPlayed"), s.prototype), o(s.prototype, "_onVideoPaused", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoPaused"), s.prototype), o(s.prototype, "_onVideoUnmuted", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoUnmuted"), s.prototype), o(s.prototype, "_onVideoMuted", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoMuted"), s.prototype), o(s.prototype, "_onVideoError", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoError"), s.prototype), o(s.prototype, "_onVideoEnd", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onVideoEnd"), s.prototype), o(s.prototype, "_onBrowserFullscreenChange", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onBrowserFullscreenChange"), s.prototype), o(s.prototype, "_onProgressBarDrag", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onProgressBarDrag"), s.prototype), o(s.prototype, "_onMouseMove", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseMove"), s.prototype), o(s.prototype, "_onOverlayClickedEvent", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onOverlayClickedEvent"), s.prototype), s);
		e.default = m
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e;
		switch (t) {
			case "html":
				e = i(114);
				break;
			default:
				e = "<p>Unable to find requested template</p>"
		}
		return e
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.getTemplate = r
}, function(t, e) {
	t.exports = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n\t<style type="text/css">\n\t\t.st0{fill:#FFFFFF;}\n\t\t.st1{fill:none;}\n\t\t.cls-1 {\n\t\t\tstroke: #fff;\n\t\t\tstroke-width: 1px;\n\t\t\tfill: none;\n\t\t}\n\t</style>\n\n\t<symbol id="play" viewBox="0 0 7 13">\n\t\t<path class="st0" d="M172.988,2349.5l-6.974,6.49V2343Z" transform="translate(-166 -2343)"/>\n\t</symbol>\n\n\t<symbol id="prev" viewBox="0 0 14 13">\n\t\t<path class="st0" d="M58.014,678L51.055,671.5l6.959-6.493V678Zm-7.047,0L44.008,671.5l6.958-6.493V678Z" transform="translate(-44 -665)"/>\n\t</symbol>\n\n\t<symbol id="next" viewBox="0 0 14 13">\n\t\t<path class="st0" d="M109.986,678l6.959-6.493-6.959-6.493V678Zm7.048,0,6.958-6.493-6.958-6.493V678Z" transform="translate(-110 -665)"/>\n\t</symbol>\n\n\t<symbol id="pause" viewBox="0 0 10 13">\n\t\t<path class="st0" d="M163,2344h3v13h-3v-13Zm7,0h3v13h-3v-13Z" transform="translate(-163 -2344)"/>\n\t</symbol>\n\n\t<symbol id="expand" viewBox="0 0 24 24">\n\t\t<path class="st0" d="M7,14H5v5h5v-2H7V14z M5,10h2V7h3V5H5V10z M17,17h-3v2h5v-5h-2V17z M14,5v2h3v3h2V5H14z"/>\n\t\t<path class="st1" d="M0,0h24v24H0V0z"/>\n\t</symbol>\n\n\t<symbol id="compress" viewBox="0 0 24 24">\n\t\t<path class="st0" d="M5,16h3v3h2v-5H5V16z M8,8H5v2h5V5H8V8z M14,19h2v-3h3v-2h-5V19z M16,8V5h-2v5h5V8H16z"/>\n\t\t<path class="st1" d="M0,0h24v24H0V0z"/>\n\t</symbol>\n\n\t<symbol id="volume_off" viewBox="0 0 24 24">\n\t\t<path class="st0" d="M16.5,12c0-1.8-1-3.3-2.5-4v2.2l2.5,2.4C16.5,12.4,16.5,12.2,16.5,12z M19,12c0,0.9-0.2,1.8-0.5,2.6l1.5,1.5\n\t\t\tc0.7-1.2,1-2.6,1-4.1c0-4.3-3-7.9-7-8.8v2.1C16.9,6.1,19,8.8,19,12z M4.3,3L3,4.3L7.7,9H3v6h4l5,5v-6.7l4.2,4.2\n\t\t\tc-0.7,0.5-1.4,0.9-2.2,1.2v2.1c1.4-0.3,2.6-1,3.7-1.8l2,2l1.3-1.3l-9-9L4.3,3z M12,4L9.9,6.1L12,8.2V4z"/>\n\t\t<path class="st1" d="M0,0h24v24H0V0z"/>\n\t</symbol>\n\n\t<symbol id="volume_on" viewBox="0 0 24 24">\n\t\t<path class="st0" d="M3,9v6h4l5,5V4L7,9H3z M16.5,12c0-1.8-1-3.3-2.5-4V16C15.5,15.3,16.5,13.8,16.5,12z M14,3.2v2.1\n\t\t\tc2.9,0.9,5,3.5,5,6.7s-2.1,5.9-5,6.7v2.1c4-0.9,7-4.5,7-8.8S18,4.1,14,3.2z"/>\n\t\t<path class="st1" d="M0,0h24v24H0V0z"/>\n\t</symbol>\n</svg>\n\n<div class="videoplayer native-videoplayer">\n\t<div class="videoplayer-overlay native-videoplayer__overlay f">\n\t\t<div class="content-wrapper">\n\t\t\t<div class="content">\n\t\t\t\t<h2 class="h1">{{video.title}}</h2>\n\t\t\t\t<h3 class="p">{{video.baseline}}</h3>\n\t\t\t</div>\n\t\t\t<img src="/wp-content/themes/antoni/library/img/cursor-play.svg" alt="" class="btn-play tablet">\n\t\t\t<img src="/wp-content/themes/antoni/library/img/cursor-more.svg" alt="" class="btn-more mobile">\n\t\t</div>\n\t</div>\n\n\t<div class="video-wrapper r r--16-9">\n\t\t<video class="native-videoplayer__video" preload="none" playsinline></video>\n\n\t\t<nav class="videoplayer-controls native-videoplayer__controls">\n\t\t\t\n\t\t\t<div class="container">\n\t\t\t\t<div class="btns">\n\t\t\t\t\t<div class="controls__prev">\n\t\t\t\t\t\t<button class="icon-prev">\n\t\t\t\t\t\t\t<svg class="controls-icon">\n\t\t\t\t\t\t\t  <use xlink:href="#prev" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="controls__toggle-play">\n\t\t\t\t\t\t<button class="icon-play">\n\t\t\t\t\t\t\t<svg class="controls-icon">\n\t\t\t\t\t\t\t  <use xlink:href="#play" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="controls__next">\n\t\t\t\t\t\t<button class="icon-next">\n\t\t\t\t\t\t\t<svg class="controls-icon">\n\t\t\t\t\t\t\t  <use xlink:href="#next" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="controls__progress-bar">\n\t\t\t\t\t<div class="progress-bar"></div>\n\t\t\t\t\t<div class="buffer-bar"></div>\n\t\t\t\t\t<div class="background"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="btns">\n\t\t\t\t\t<div class="controls__mute">\n\t\t\t\t\t\t<button class="icon-volume-on">\n\t\t\t\t\t\t\t<svg class="controls-icon">\n\t\t\t\t\t\t\t  <use xlink:href="#volume_on" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="controls__toggle-fullscreen">\n\t\t\t\t\t\t<button class="icon-expand">\n\t\t\t\t\t\t\t<svg class="controls-icon">\n\t\t\t\t\t\t\t  <use xlink:href="#expand" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</nav>\n\t</div>\n\n</div>\n'
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			c = i(116),
			d = r(c),
			f = i(2),
			p = r(f),
			_ = (l = function(t) {
				function e(t) {
					n(this, e);
					var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return i.dom = i._dom, i.loadedMetadata = new p.default, i._initEvents(), i
				}
				return s(e, t), u(e, [{
					key: "_initEvents",
					value: function() {
						this.dom.addEventListener("play", this._onVideoPlayed), this.dom.addEventListener("pause", this._onVideoPaused), this.dom.addEventListener("loadedmetadata", this._onMetaData), this.dom.addEventListener("error", this._onVideoError), this.dom.addEventListener("ended", this._onVideoEnd)
					}
				}, {
					key: "destroy",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), this.loadedMetadata.dispose(), this.dom.removeEventListener("play", this._onVideoPlayed), this.dom.removeEventListener("pause", this._onVideoPaused), this.dom.removeEventListener("loadedmetadata", this._onMetaData), this.dom.removeEventListener("error", this._onVideoError), this.dom.removeEventListener("ended", this._onVideoEnd), this.dom.src = ""
					}
				}, {
					key: "_volume",
					value: function(t) {
						var t = t;
						t > 1 ? t = 1 : t < 0 && (t = 0), this.dom.volume = t
					}
				}, {
					key: "_onMetaData",
					value: function() {
						this._duration = this.dom.duration, this.loadedMetadata.dispatch()
					}
				}, {
					key: "_onVideoError",
					value: function(t) {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_onVideoError", this).call(this, t)
					}
				}, {
					key: "volume",
					get: function() {
						return this.dom.volume
					},
					set: function(t) {
						this._volume(t)
					}
				}]), e
			}(d.default), a(l.prototype, "_onMetaData", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onMetaData"), l.prototype), a(l.prototype, "_onVideoError", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onVideoError"), l.prototype), l);
		e.default = _
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function n(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var o, s = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			a = i(2),
			l = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(a),
			u = (o = function() {
				function t(e) {
					r(this, t), this._dom = e, this.played = new l.default, this.paused = new l.default, this.ended = new l.default, this.errored = new l.default
				}
				return s(t, [{
					key: "destroy",
					value: function() {
						this.played.dispose(), this.paused.dispose(), this.ended.dispose(), this.errored.dispose()
					}
				}, {
					key: "play",
					value: function() {
						this.dom.play()
					}
				}, {
					key: "pause",
					value: function() {
						this.dom.pause()
					}
				}, {
					key: "stop",
					value: function() {
						this.dom.paused || this.pause(), this.dom.currentTime = 0
					}
				}, {
					key: "seek",
					value: function(t) {
						this.dom.currentTime = t
					}
				}, {
					key: "_onVideoPlayed",
					value: function() {
						this.played.dispatch()
					}
				}, {
					key: "_onVideoPaused",
					value: function() {
						this.paused.dispatch()
					}
				}, {
					key: "_onVideoError",
					value: function(t) {
						this.errored.dispatch()
					}
				}, {
					key: "_onVideoEnd",
					value: function() {
						this.ended.dispatch()
					}
				}, {
					key: "currentTime",
					get: function() {
						return this.dom.currentTime
					}
				}, {
					key: "duration",
					get: function() {
						return this.dom.duration
					}
				}, {
					key: "isPaused",
					get: function() {
						return this.dom.paused
					}
				}, {
					key: "buffered",
					get: function() {
						return this.dom.buffered
					}
				}]), t
			}(), n(o.prototype, "_onVideoPlayed", [t], Object.getOwnPropertyDescriptor(o.prototype, "_onVideoPlayed"), o.prototype), n(o.prototype, "_onVideoPaused", [t], Object.getOwnPropertyDescriptor(o.prototype, "_onVideoPaused"), o.prototype), n(o.prototype, "_onVideoError", [t], Object.getOwnPropertyDescriptor(o.prototype, "_onVideoError"), o.prototype), n(o.prototype, "_onVideoEnd", [t], Object.getOwnPropertyDescriptor(o.prototype, "_onVideoEnd"), o.prototype), o);
		e.default = u
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function n(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function o(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var s = i(27),
		a = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(s),
		l = function(t) {
			function e(t, i, o) {
				r(this, e);
				var s = n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
				return s._init(), s._initEvents(), s
			}
			return o(e, t), e
		}(a.default);
	e.default = l
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function n(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function o(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		a = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		l = i(119),
		u = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(l),
		h = function(t) {
			function e() {
				return r(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return o(e, t), s(e, [{
				key: "_setSelectors",
				value: function() {
					a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_setSelectors", this).call(this), this._dom.getElementsByClassName("buffer-bar")[0] && (this._bufferRange = this._dom.getElementsByClassName("buffer-bar")[0])
				}
			}, {
				key: "updateBufferRange",
				value: function(t, e) {
					if (this._bufferRange) {
						var i = (100 * (t / e + .005) | 0) / 100;
						this._bufferRange.style.transform = "translateZ(0) scaleX(" + i + ")"
					}
				}
			}]), e
		}(u.default);
	e.default = h
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var s, a = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			l = i(0),
			u = r(l),
			h = i(7),
			c = r(h),
			d = i(120),
			f = (r(d), i(2)),
			p = r(f),
			_ = i(5),
			y = r(_),
			v = (s = function() {
				function t(e, i, r, o, s) {
					n(this, t), this._dom = e, s && (this._allowSpacebarBinding = s), this.alwaysShown = r, this._controlsHovered = !1, this._videoPaused = o, this._setSelectors(), this._init(), this._initEvents(), this.toggledPlay = new p.default, this.toggledMute = new p.default, this.progressDragged = new p.default, this.progressClicked = new p.default, this.toggledFullscreen = new p.default, (r || this._videoPaused) && this.show()
				}
				return a(t, [{
					key: "_init",
					value: function() {
						u.default.touch && (this.toggleMuteBtn && this.toggleMuteBtn.remove(), this._dom.getElementsByClassName("videoplayer-controls")[0].classList.add("touch-device"))
					}
				}, {
					key: "destroy",
					value: function() {
						this.toggledPlay.dispose(), this.toggledMute.dispose(), this.progressDragged.dispose(), this.progressClicked.dispose(), this.toggledFullscreen.dispose()
					}
				}, {
					key: "show",
					value: function() {
						TweenLite.to(this._controlsWrapper, .25, {
							opacity: 1,
							ease: Quad.easeOut
						})
					}
				}, {
					key: "hide",
					value: function() {
						TweenLite.to(this._controlsWrapper, .25, {
							opacity: 0,
							ease: Quad.easeOut
						})
					}
				}, {
					key: "setIconPlay",
					value: function() {
						if (this.togglePlayBtn) {
							this.togglePlayBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#play");
							this.togglePlayBtn.firstElementChild.className = "icon-play"
						}
					}
				}, {
					key: "setIconPause",
					value: function() {
						if (this.togglePlayBtn) {
							this.togglePlayBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#pause");
							this.togglePlayBtn.firstElementChild.className = "icon-pause"
						}
					}
				}, {
					key: "togglePlayIcon",
					value: function() {
						if (this.togglePlayBtn) {
							var t = this.togglePlayBtn.getElementsByTagName("use")[0],
								e = this.togglePlayBtn.firstElementChild;
							"#play" === t.getAttribute("xlink:href") ? (t.setAttribute("xlink:href", "#pause"), e.className = "icon-pause") : "#pause" === t.getAttribute("xlink:href") && (t.setAttribute("xlink:href", "#play"), e.className = "icon-play")
						}
					}
				}, {
					key: "setIconMute",
					value: function() {
						if (this.toggleMuteBtn) {
							this.toggleMuteBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#volume_off");
							this.toggleMuteBtn.firstElementChild.className = "icon-volume-off"
						}
					}
				}, {
					key: "setIconUnmute",
					value: function() {
						if (this.toggleMuteBtn) {
							this.toggleMuteBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#volume_on");
							this.toggleMuteBtn.firstElementChild.className = "icon-volume-on"
						}
					}
				}, {
					key: "toggleMuteIcon",
					value: function() {
						if (this.toggleMuteBtn) {
							var t = this.toggleMuteBtn.getElementsByTagName("use")[0],
								e = this.toggleMuteBtn.firstElementChild;
							"#volume_off" === t.getAttribute("xlink:href") ? (t.setAttribute("xlink:href", "#volume_on"), e.className = "icon-volume-on") : "#volume_on" === t.getAttribute("xlink:href") && (t.setAttribute("xlink:href", "#volume_off"), e.className = "icon-volume-off")
						}
					}
				}, {
					key: "setIconExpand",
					value: function() {
						if (this.toggleFullscreenBtn) {
							this.toggleFullscreenBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#expand");
							this.toggleFullscreenBtn.firstElementChild.className = "icon-expand"
						}
					}
				}, {
					key: "setIconCompress",
					value: function() {
						if (this.toggleFullscreenBtn) {
							this.toggleFullscreenBtn.getElementsByTagName("use")[0].setAttribute("xlink:href", "#compress");
							this.toggleFullscreenBtn.firstElementChild.className = "icon-compress"
						}
					}
				}, {
					key: "toggleFullscreenIcon",
					value: function() {
						if (this.toggleFullscreenBtn) {
							var t = this.toggleFullscreenBtn.getElementsByTagName("use")[0],
								e = this.toggleFullscreenBtn.firstElementChild;
							"#compress" === t.getAttribute("xlink:href") ? (t.setAttribute("xlink:href", "#expand"), e.className = "icon-expand") : "#expand" === t.getAttribute("xlink:href") && (t.setAttribute("xlink:href", "#compress"), e.className = "icon-compress")
						}
					}
				}, {
					key: "resize",
					value: function() {
						var t = this;
						setTimeout(function() {
							t.progressBarContainerRect = t.progressBarContainer.getBoundingClientRect()
						}, 0)
					}
				}, {
					key: "_setSelectors",
					value: function() {
						this._overlayDom = $(".videoplayer-overlay", this._dom)[0], this._controlsWrapper = $(".videoplayer-controls", this._dom)[0], this._dom.getElementsByClassName("controls__toggle-play")[0] && (this.togglePlayBtn = this._dom.getElementsByClassName("controls__toggle-play")[0]), this._dom.getElementsByClassName("controls__progress-bar")[0] && (this.progressBarContainer = this._dom.getElementsByClassName("controls__progress-bar")[0]), this._dom.getElementsByClassName("progress-bar")[0] && (this.progressBar = this._dom.getElementsByClassName("progress-bar")[0]), this._dom.getElementsByClassName("controls__mute")[0] && (this.toggleMuteBtn = this._dom.getElementsByClassName("controls__mute")[0]), this._dom.getElementsByClassName("controls__toggle-fullscreen")[0] && (this.toggleFullscreenBtn = this._dom.getElementsByClassName("controls__toggle-fullscreen")[0]), this.progressBarContainer && (this.progressBarContainerRect = this.progressBarContainer.getBoundingClientRect())
					}
				}, {
					key: "_initEvents",
					value: function() {
						if (this._allowSpacebarBinding && window.addEventListener("keypress", this._onKeyPress), this.togglePlayBtn && this.togglePlayBtn.addEventListener(c.default.CLICK, this._onClickPlayButton), this.toggleMuteBtn && this.toggleMuteBtn.addEventListener(c.default.CLICK, this._onClickMuteButton), this.toggleFullscreenBtn && this.toggleFullscreenBtn.addEventListener(c.default.CLICK, this._onClickFullScreenButton), this.alwaysShown || (this._overlayDom.addEventListener(c.default.MOVE, this._onOverlayMouseMove), this._overlayDom.addEventListener(c.default.ENTER, this._onMouseEnterOverlay), this._overlayDom.addEventListener(c.default.LEAVE, this._onMouseLeaveOverlay), this._controlsWrapper.addEventListener(c.default.ENTER, this._onControlsMouseEnter), this._controlsWrapper.addEventListener(c.default.LEAVE, this._onControlsMouseLeave)), this.progressBarContainer) {
							var t = !!y.default.hasSupport && {
								passive: !0
							};
							this.progressBarContainer.addEventListener(c.default.DOWN, this._onMouseDownProgressBarContainer), this.progressBarContainer.addEventListener("touchstart", this._onMouseDownProgressBarContainer, t), this.progressBarContainer.addEventListener(c.default.LEAVE, this._onMouseLeaveProgressBarContainer), this.progressBarContainer.addEventListener("touchend", this._onMouseLeaveProgressBarContainer, t), this.progressBarContainer.addEventListener(c.default.CLICK, this._onClickProgressBarContainer), window.addEventListener(c.default.UP, this._onMouseUpWindow)
						}
					}
				}, {
					key: "destroy",
					value: function() {
						this._allowSpacebarBinding && window.removeEventListener("keypress", this._onKeyPress), this.togglePlayBtn && this.togglePlayBtn.removeEventListener(c.default.CLICK, this._onClickPlayButton), this.toggleMuteBtn && this.toggleMuteBtn.removeEventListener(c.default.CLICK, this._onClickMuteButton), this.toggleFullscreenBtn && this.toggleFullscreenBtn.removeEventListener(c.default.CLICK, this._onClickFullScreenButton), this.alwaysShown || (this._overlayDom.removeEventListener(c.default.MOVE, this._onOverlayMouseMove), this._overlayDom.removeEventListener(c.default.ENTER, this._onMouseEnterOverlay), this._overlayDom.removeEventListener(c.default.LEAVE, this._onMouseLeaveOverlay), this._controlsWrapper.removeEventListener(c.default.ENTER, this._onControlsMouseEnter), this._controlsWrapper.removeEventListener(c.default.LEAVE, this._onControlsMouseLeave)), this.progressBarContainer && (this.progressBarContainer.removeEventListener(c.default.DOWN, this._onMouseDownProgressBarContainer), this.progressBarContainer.removeEventListener("touchstart", this._onMouseDownProgressBarContainer), this.progressBarContainer.removeEventListener(c.default.LEAVE, this._onMouseLeaveProgressBarContainer), this.progressBarContainer.removeEventListener("touchend", this._onMouseLeaveProgressBarContainer), this.progressBarContainer.removeEventListener(c.default.CLICK, this._onClickProgressBarContainer), window.removeEventListener(c.default.UP, this._onMouseUpWindow))
					}
				}, {
					key: "_onKeyPress",
					value: function(t) {
						32 === t.keyCode && this.toggledPlay.dispatch()
					}
				}, {
					key: "_onClickPlayButton",
					value: function() {
						this.toggledPlay.dispatch()
					}
				}, {
					key: "_onClickMuteButton",
					value: function() {
						this.toggledMute.dispatch()
					}
				}, {
					key: "_onClickFullScreenButton",
					value: function() {
						this.toggledFullscreen.dispatch()
					}
				}, {
					key: "_onMouseDownProgressBarContainer",
					value: function(t) {
						this.progressBarContainer.classList.add("grabbing"), this._isDragging = !0, this.progressDragged.dispatch(!0)
					}
				}, {
					key: "_onMouseUpWindow",
					value: function(t) {
						this._isDragging && (this.progressBarContainer.classList.remove("grabbing"), this._isDragging = !1, this.progressDragged.dispatch(!1))
					}
				}, {
					key: "_onControlsMouseEnter",
					value: function() {
						this.show(), this._controlsHovered = !0
					}
				}, {
					key: "_onControlsMouseLeave",
					value: function() {
						this._controlsHovered = !1
					}
				}, {
					key: "_onOverlayMouseMove",
					value: function(t) {
						var e = this;
						this.show(), this._videoPaused || (this._hideTimeout && clearTimeout(this._hideTimeout), this._hideTimeout = setTimeout(function() {
							e._controlsHovered ? e.show() : e.hide()
						}, 2e3))
					}
				}, {
					key: "_onMouseEnterOverlay",
					value: function() {
						this._hideTimeout && clearTimeout(this._hideTimeout), this.show()
					}
				}, {
					key: "_onMouseLeaveOverlay",
					value: function() {
						this._videoPaused || (this._hideTimeout && clearTimeout(this._hideTimeout), this.hide())
					}
				}, {
					key: "_onMouseLeaveProgressBarContainer",
					value: function() {
						this.progressBarContainer.className = "controls__progress-bar"
					}
				}, {
					key: "_onClickProgressBarContainer",
					value: function(t) {
						var e = t.offsetX / this.progressBarContainer.offsetWidth;
						this.progressClicked.dispatch(e)
					}
				}, {
					key: "videoPaused",
					set: function(t) {
						this._videoPaused = t
					}
				}]), t
			}(), o(s.prototype, "_onKeyPress", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onKeyPress"), s.prototype), o(s.prototype, "_onClickPlayButton", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onClickPlayButton"), s.prototype), o(s.prototype, "_onClickMuteButton", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onClickMuteButton"), s.prototype), o(s.prototype, "_onClickFullScreenButton", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onClickFullScreenButton"), s.prototype), o(s.prototype, "_onMouseDownProgressBarContainer", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseDownProgressBarContainer"), s.prototype), o(s.prototype, "_onMouseUpWindow", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseUpWindow"), s.prototype), o(s.prototype, "_onControlsMouseEnter", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onControlsMouseEnter"), s.prototype), o(s.prototype, "_onControlsMouseLeave", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onControlsMouseLeave"), s.prototype), o(s.prototype, "_onOverlayMouseMove", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onOverlayMouseMove"), s.prototype), o(s.prototype, "_onMouseEnterOverlay", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseEnterOverlay"), s.prototype), o(s.prototype, "_onMouseLeaveOverlay", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseLeaveOverlay"), s.prototype), o(s.prototype, "_onMouseLeaveProgressBarContainer", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onMouseLeaveProgressBarContainer"), s.prototype), o(s.prototype, "_onClickProgressBarContainer", [t], Object.getOwnPropertyDescriptor(s.prototype, "_onClickProgressBarContainer"), s.prototype), s);
		e.default = v
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), "remove" in Element.prototype || (Element.prototype.remove = function() {
		this.parentNode && this.parentNode.removeChild(this)
	}), e.default = Element
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function n(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function o(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function s(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, l = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			u = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			h = i(15),
			c = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(h),
			d = (a = function(t) {
				function e(t, i) {
					r(this, e);
					var o = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, !0));
					o.slideshow = i, o.slideshow.changed.add(o._onSlideshowVideoChange);
					for (var s = 0, a = o.slideshow.videoplayers.length; s < a; ++s) {
						var l = o.slideshow.videoplayers[s];
						$(".controls__prev", l.dom)[0].addEventListener("click", o._onClickPrev);
						$(".controls__next", l.dom)[0].addEventListener("click", o._onClickNext)
					}
					o.nav = $(".slideshow__nav", o.slideshow.dom)[0], o._btns = $(".link--nav, .btn-more", o.slideshow.dom);
					for (var u = 0, h = o._btns.length; u < h; u++) {
						o._btns[u].addEventListener("click", o.show.bind(o))
					}
					o._background = $(".slideshow__nav .background", o.slideshow.dom)[0], o._background.addEventListener("click", o.hide.bind(o)), o.items = $(".slideshow__nav__item", o.container);
					for (var c = 0, d = o.items.length; c < d; ++c) {
						o.items[c].addEventListener("click", o._onClickItem)
					}
					return o
				}
				return o(e, t), l(e, [{
					key: "resize",
					value: function() {
						var t = this.slideshow.dom.getBoundingClientRect().height + 1 | 0;
						this.dom.style.top = "44px", this.dom.style.height = t - 88 + "px", u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this, t), this._rect = this.container.getBoundingClientRect(), this.shown || TweenLite.set(this.scrollable, {
							x: this._rect.width
						})
					}
				}, {
					key: "show",
					value: function(t) {
						if (t && (t.preventDefault(), t.stopPropagation()), !this.shown) {
							this.nav.classList.add("active"), TweenLite.to(this.scrollable, 1, {
								ease: Expo.easeOut,
								x: 0
							});
							for (var e = 0, i = this.slideshow.videoplayers.length; e < i; ++e) {
								var r = this.slideshow.videoplayers[e];
								r.isPaused || r.pause()
							}
						}
						this.shown = !0
					}
				}, {
					key: "hide",
					value: function() {
						this.shown && (this.nav.classList.remove("active"), TweenLite.to(this.scrollable, .8, {
							ease: Quart.easeInOut,
							x: this._rect.width
						})), this.shown = !1
					}
				}, {
					key: "_onClickItem",
					value: function(t) {
						var e = t.currentTarget,
							i = $(".active", this.container)[0];
						i && i.classList.remove("active"), e.classList.add("active"), this.slideshow.index = e.index(), this.hide()
					}
				}, {
					key: "_onClickPrev",
					value: function(t) {
						this.slideshow.prev()
					}
				}, {
					key: "_onClickNext",
					value: function(t) {
						this.slideshow.next()
					}
				}, {
					key: "_onSlideshowVideoChange",
					value: function(t, e, i) {
						t.videoplayers[i].stop(), this._slideshowTimeout && (clearTimeout(this._slideshowTimeout), this._slideshowTimeout = null), this._slideshowTimeout = setTimeout(function() {
							t.videoplayers[e].play()
						}, 1e3)
					}
				}]), e
			}(c.default), s(a.prototype, "_onClickItem", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onClickItem"), a.prototype), s(a.prototype, "_onClickPrev", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onClickPrev"), a.prototype), s(a.prototype, "_onClickNext", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onClickNext"), a.prototype), s(a.prototype, "_onSlideshowVideoChange", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onSlideshowVideoChange"), a.prototype), a);
		e.default = d
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, l = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			u = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			h = i(4),
			c = r(h),
			d = i(0),
			f = r(d),
			p = i(3),
			_ = r(p),
			y = i(28),
			v = r(y),
			g = i(12),
			m = r(g),
			b = (a = function(t) {
				function e(t, i) {
					return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return s(e, t), l(e, [{
					key: "init",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._video = $(".head .background video", this.dom)[0], f.default.touchOnly || (this._video.load(), this._video.play()), this._job = $(".job", this.dom)[0], this._openTab = $(".open-tab", this.dom), this.bind()
					}
				}, {
					key: "bind",
					value: function() {
						for (var t = this._openTab.length - 1; t >= 0; t--) this._openTab[t].addEventListener("click", this._onClickOpenTab);
						this._backgroundHead = new m.default($(".head .background", this.dom)[0], {
							simpleParallax: -.15
						}), this.resize()
					}
				}, {
					key: "destroy",
					value: function() {
						this._video.src = "", this._video = null;
						for (var t = this._openTab.length - 1; t >= 0; t--) this._openTab[t].removeEventListener("click", this._onClickOpenTab);
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
					}
				}, {
					key: "resize",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this._backgroundHead.resize(), this._video && v.default.setAsCover(this._video), this._jobMarginBottom || (this._jobMarginBottom = parseInt(window.getComputedStyle(this._job).marginBottom))
					}
				}, {
					key: "update",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this);
						var t = void 0;
						t = this.scrollable.scrollable ? this.scrollable.scrollable.y : window.pageYOffset, this._backgroundHead.update(t)
					}
				}, {
					key: "_onClickOpenTab",
					value: function(t) {
						if ("A" !== t.target.nodeName) {
							var e = t.currentTarget,
								i = $(".description-col", e)[0];
							if (void 0 === i) window.open(e.dataset.href, "_self");
							else {
								var r = e.index() - 1,
									n = i.offsetHeight;
								e.classList.toggle("open"), e.tabOpen = !e.tabOpen, e.tabOpen ? this._job.style.marginBottom = this._jobMarginBottom + n + "px" : this._job.style.marginBottom = "";
								for (var o = this._openTab.length - 1; o >= 0; o--) this._openTab[o] !== e && (this._openTab[o].classList.remove("open"), this._openTab[o].tabOpen = !1), _.default.transform(this._openTab[o], "translate3d(0, 0, 0)"), o > r && e.tabOpen && _.default.transform(this._openTab[o], "translate3d(0, " + n + "px, 0)");
								setTimeout(this.resize.bind(this), 800)
							}
						}
					}
				}, {
					key: "_show",
					value: function() {
						u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_show", this).call(this), this.resize()
					}
				}]), e
			}(c.default), function(t, e, i, r, n) {
				var o = {};
				return Object.keys(r).forEach(function(t) {
					o[t] = r[t]
				}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
					return r(t, e, i) || i
				}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
			}(a.prototype, "_onClickOpenTab", [t], Object.getOwnPropertyDescriptor(a.prototype, "_onClickOpenTab"), a.prototype), a);
		e.default = b
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function o(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var a = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		l = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		u = i(4),
		h = r(u),
		c = i(0),
		d = r(c),
		f = i(28),
		p = r(f),
		_ = i(124),
		y = r(_),
		v = i(12),
		g = r(v),
		m = function(t) {
			function e(t, i) {
				return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return s(e, t), a(e, [{
				key: "init",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.img = [], this._video = $(".head .background video", this.dom)[0], d.default.touchOnly || (this._video.load(), this._video.play()), this._slideShow = new y.default($(".location ul", this.dom)[0]), this._backgroundHead = new g.default($(".head .background", this.dom)[0], {
						simpleParallax: -.15
					}), this._img = $(".img-wrapper", this.dom);
					for (var t = this._img.length - 1; t >= 0; t--) this.img[t] = new g.default(this._img[t], {
						needShow: .1
					});
					this.resize()
				}
			}, {
				key: "destroy",
				value: function() {
					this._video.src = "", l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
				}
			}, {
				key: "resize",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this._slideShow.resize(), this._backgroundHead.resize();
					for (var t = this.img.length - 1; t >= 0; t--) this.img[t].resize();
					this._video && p.default.setAsCover(this._video)
				}
			}, {
				key: "update",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this);
					var t = void 0;
					t = this.scrollable.scrollable ? this.scrollable.scrollable.y : window.pageYOffset, this._backgroundHead.update(t);
					for (var i = this.img.length - 1; i >= 0; i--) this.img[i].update(t)
				}
			}, {
				key: "_show",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_show", this).call(this), this.resize()
				}
			}]), e
		}(h.default);
	e.default = m
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var o, s = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			a = i(3),
			l = r(a),
			u = i(0),
			h = r(u),
			c = (o = function() {
				function t(e) {
					n(this, t), this.index = 0, this.dom = e, this.init()
				}
				return s(t, [{
					key: "init",
					value: function() {
						this.setSelectors(), this.bind()
					}
				}, {
					key: "setSelectors",
					value: function() {
						this.slides = $(".location-item", this.dom), this.left = $(".left", this.dom), this.right = $(".right", this.dom)
					}
				}, {
					key: "bind",
					value: function() {
						for (var t = this.slides.length - 1; t >= 0; t--) this.slides[t].addEventListener("click", this._onSlidesClick)
					}
				}, {
					key: "resize",
					value: function() {
						var t = window.getComputedStyle(this.right[0]);
						this.leftWidth = this.left[0].offsetWidth, this.rightWidth = parseFloat(t.marginLeft) + parseFloat(t.width)
					}
				}, {
					key: "_onSlidesClick",
					value: function(t) {
						var e = this.getNodeindex(t.currentTarget);
						if (this.index !== e) {
							this.index = e;
							for (var i = this.slides.length - 1; i >= 0; i--) this.slides[i].classList.remove("active");
							this.slides[this.index].classList.add("active");
							var r = this.index * -(this.leftWidth + this.leftWidth - this.rightWidth);
							h.default.width < 740 && (r = this.index * (-.8 * h.default.width)), l.default.transform(this.dom, "translate3d(" + r + "px,0,0)")
						}
					}
				}, {
					key: "getNodeindex",
					value: function(t) {
						for (var e = t.parentNode.children, i = 0; i < e.length; i++)
							if (e[i] == t) return i
					}
				}]), t
			}(), function(t, e, i, r, n) {
				var o = {};
				return Object.keys(r).forEach(function(t) {
					o[t] = r[t]
				}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
					return r(t, e, i) || i
				}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
			}(o.prototype, "_onSlidesClick", [t], Object.getOwnPropertyDescriptor(o.prototype, "_onSlidesClick"), o.prototype), o);
		e.default = c
	}).call(e, i(1))
}, function(t, e, i) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function o(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var a = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var r = e[i];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, i, r) {
				return i && t(e.prototype, i), r && t(e, r), e
			}
		}(),
		l = function t(e, i, r) {
			null === e && (e = Function.prototype);
			var n = Object.getOwnPropertyDescriptor(e, i);
			if (void 0 === n) {
				var o = Object.getPrototypeOf(e);
				return null === o ? void 0 : t(o, i, r)
			}
			if ("value" in n) return n.value;
			var s = n.get;
			if (void 0 !== s) return s.call(r)
		},
		u = i(4),
		h = r(u),
		c = i(26),
		d = r(c),
		f = function(t) {
			function e(t, i) {
				return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return s(e, t), a(e, [{
				key: "init",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
					var t = $(".video", this.dom)[0];
					t && (this._videoPlayer = new d.default([t.getAttribute("data-webm"), t.getAttribute("data-mp4")], t, {
						overlay: t.getAttribute("data-poster"),
						showControls: !0
					}))
				}
			}, {
				key: "destroy",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), this._videoPlayer && this._videoPlayer.destroy()
				}
			}, {
				key: "resize",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this._videoPlayer && this._videoPlayer.resize()
				}
			}, {
				key: "update",
				value: function() {
					l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), this._videoPlayer && this._videoPlayer.update()
				}
			}]), e
		}(h.default);
	e.default = f
}, function(t, e, i) {
	"use strict";
	(function(t) {
		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function s(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function a(t, e, i, r, n) {
			var o = {};
			return Object.keys(r).forEach(function(t) {
				o[t] = r[t]
			}), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
				return r(t, e, i) || i
			}, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), o = null), o
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var l, u = function() {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, i, r) {
					return i && t(e.prototype, i), r && t(e, r), e
				}
			}(),
			h = function t(e, i, r) {
				null === e && (e = Function.prototype);
				var n = Object.getOwnPropertyDescriptor(e, i);
				if (void 0 === n) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, i, r)
				}
				if ("value" in n) return n.value;
				var s = n.get;
				if (void 0 !== s) return s.call(r)
			},
			c = i(4),
			d = r(c),
			f = i(5),
			p = r(f),
			_ = i(0),
			y = r(_),
			v = (l = function(t) {
				function e(t, i) {
					return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return s(e, t), u(e, [{
					key: "init",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this._scrollable = this.scrollable.scrollable || this.scrollable, this._delta = 0, this._scrollable.thumb ? this._bind() : this._scrolled = !0, this._videos = $("video", this.dom)
					}
				}, {
					key: "resize",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this._initY = this._scrollable.y;
						for (var t = 0, i = this._videos.length; t < i; t++) {
							var r = this._videos[t];
							r.rect = r.getBoundingClientRect()
						}
					}
				}, {
					key: "update",
					value: function() {
						if (this._scrollable.thumb && (this._scrollable.y + y.default.height >= this._scrollable.height && (this._scrolled = !0), this._scrolled || (this.scrollable.scrollable ? this.scrollable.y += this._delta : (this._scrollable.y += this._delta, this._scrollable._y = this.scrollable.y)), !y.default.touchOnly))
							for (var t = 0, i = this._videos.length; t < i; t++) {
								var r = this._videos[t],
									n = r.rect.top + this._initY - this._scrollable.y;
								r.paused && n < y.default.height && n > -r.rect.height ? r.play() : !r.paused && (n < -r.rect.height || n >= y.default.height) && r.pause()
							}
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this)
					}
				}, {
					key: "_bind",
					value: function() {
						if (this._scrolled = !1, this._scrollable.thumb) {
							var t = !!p.default.hasSupport && {
								passive: !0
							};
							this._scrollable.dom.addEventListener("touchstart", this._onTouchStart, t), this._scrollable.dom.addEventListener("touchend", this._onTouchEnd, t), this._scrollable.dom.addEventListener("scroll", this._onScroll, t), this._scrollable.dom.addEventListener("wheel", this._onScroll, t), this._scrollable.dom.addEventListener("mousewheel", this._onScroll, t), this._scrollable.thumb.scrolled.add(this._onScroll)
						}
						TweenLite.to(this, 2, {
							_delta: .5,
							ease: Quad.easeIn
						})
					}
				}, {
					key: "_unbind",
					value: function() {
						TweenLite.set(this, {
							_delta: 0,
							overwrite: !0
						}), this._scrollable.dom.removeEventListener("touchstart", this._onScroll), this._scrollable.dom.removeEventListener("scroll", this._onScroll), this._scrollable.dom.removeEventListener("wheel", this._onScroll), this._scrollable.dom.removeEventListener("mousewheel", this._onScroll), this._scrollable.thumb && this._scrollable.thumb.scrolled.remove(this._onScroll), this._timeout && clearTimeout(this._timeout), this._lockScroll || (this._timeout = setTimeout(this._bind.bind(this), 3e3))
					}
				}, {
					key: "_show",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_show", this).call(this), d.default.header.isLocked = !0
					}
				}, {
					key: "_shown",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_shown", this).call(this), d.default.header.isLocked = !0
					}
				}, {
					key: "_hide",
					value: function() {
						h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_hide", this).call(this), this._scrolled = !0, d.default.header.isLocked = !1
					}
				}, {
					key: "_onTouchStart",
					value: function() {
						this._lockScroll = !0, this._onScroll()
					}
				}, {
					key: "_onTouchEnd",
					value: function() {
						this._lockScroll = !1, this._timeout = setTimeout(this._bind.bind(this), 3e3)
					}
				}, {
					key: "_onScroll",
					value: function() {
						this._unbind(), this._scrolled = !0
					}
				}]), e
			}(d.default), a(l.prototype, "_onTouchStart", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTouchStart"), l.prototype), a(l.prototype, "_onTouchEnd", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onTouchEnd"), l.prototype), a(l.prototype, "_onScroll", [t], Object.getOwnPropertyDescriptor(l.prototype, "_onScroll"), l.prototype), l);
		e.default = v
	}).call(e, i(1))
}, function(t, e, i) {
	var r, n;
	! function(o, s) {
		"use strict";
		r = s, void 0 !== (n = "function" == typeof r ? r.call(e, i, e, t) : r) && (t.exports = n)
	}(0, function() {
		"use strict";

		function t(t) {
			var r = ["get", "post", "put", "delete"];
			return t = t || {}, t.baseUrl = t.baseUrl || "", t.method && t.url ? i(t.method, t.baseUrl + t.url, e(t.data), t) : r.reduce(function(r, n) {
				return r[n] = function(r, o) {
					return i(n, t.baseUrl + r, e(o), t)
				}, r
			}, {})
		}

		function e(t) {
			return t || null
		}

		function i(t, e, i, o) {
			var a = ["then", "catch", "always"],
				u = a.reduce(function(t, e) {
					return t[e] = function(i) {
						return t[e] = i, t
					}, t
				}, {}),
				h = new XMLHttpRequest,
				c = r(e, i, t);
			return h.open(t, c, !0), h.withCredentials = o.hasOwnProperty("withCredentials"), n(h, o.headers), h.addEventListener("readystatechange", s(u, h), !1), h.send(l(i)), u.abort = function() {
				return h.abort()
			}, u
		}

		function r(t, e, i) {
			if ("get" !== i.toLowerCase() || !e) return t;
			var r = l(e);
			return t + (t.indexOf("?") > -1 ? "&" : "?") + r
		}

		function n(t, e) {
			e = e || {}, o(e) || (e["Content-Type"] = "application/x-www-form-urlencoded"), Object.keys(e).forEach(function(i) {
				e[i] && t.setRequestHeader(i, e[i])
			})
		}

		function o(t) {
			return Object.keys(t).some(function(t) {
				return "content-type" === t.toLowerCase()
			})
		}

		function s(t, e) {
			return function i() {
				e.readyState === e.DONE && (e.removeEventListener("readystatechange", i, !1), t.always.apply(t, a(e)), e.status >= 200 && e.status < 300 ? t.then.apply(t, a(e)) : t.catch.apply(t, a(e)))
			}
		}

		function a(t) {
			var e;
			try {
				e = JSON.parse(t.responseText)
			} catch (i) {
				e = t.responseText
			}
			return [e, t]
		}

		function l(t) {
			return u(t) ? h(t) : t
		}

		function u(t) {
			return "[object Object]" === Object.prototype.toString.call(t)
		}

		function h(t) {
			return Object.keys(t).reduce(function(e, i) {
				return (e ? e + "&" : "") + c(i) + "=" + c(t[i])
			}, "")
		}

		function c(t) {
			return encodeURIComponent(t)
		}
		return t
	})
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0;
	var n = i(129),
		o = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(n),
		s = function t() {
			r(this, t);
			var e = o.default.file,
				i = o.default.revision;
			if (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) return !0;
			var n, s, a = "localStorage" in window && null !== window.localStorage,
				l = function() {
					document.body.insertAdjacentHTML("afterbegin", s)
				},
				u = function() {
					document.body ? l() : document.addEventListener("DOMContentLoaded", l)
				};
			if (a && localStorage.getItem("spritesSVGrev") == i && (s = localStorage.getItem("spritesSVGdata"))) return u(), !0;
			try {
				n = new XMLHttpRequest, n.open("GET", e, !0), n.onload = function() {
					n.status >= 200 && n.status < 400 && (s = n.responseText, u(), a && (localStorage.setItem("spritesSVGdata", s), localStorage.setItem("spritesSVGrev", i)))
				}, n.send()
			} catch (t) {}
		};
	e.default = s
}, function(t, e) {
	t.exports = {
		file: "/wp-content/themes/antoni/library/svg/sprite.svg",
		revision: "85166708"
	}
}, function(t, e, i) {
	"use strict";
	(function(e) {
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			n = void 0 !== t && t.exports && void 0 !== e ? e : window;
		(n._gsQueue || (n._gsQueue = [])).push(function() {
				n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
					var i, o, s, a, l = function e() {
							t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio
						},
						u = n._gsDefine.globals,
						h = {},
						c = l.prototype = new t("css");
					c.constructor = l, l.version = "1.19.1", l.API = 2, l.defaultTransformPerspective = 0, l.defaultSkewType = "compensated", l.defaultSmoothOrigin = !0, c = "px", l.suffixMap = {
						top: c,
						right: c,
						bottom: c,
						left: c,
						width: c,
						height: c,
						fontSize: c,
						padding: c,
						margin: c,
						perspective: c,
						lineHeight: ""
					};
					var d, f, p, _, y, v, g, m, b = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
						w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
						E = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
						T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
						x = /(?:\d|\-|\+|=|#|\.)*/g,
						O = /opacity *= *([^)]*)/i,
						P = /opacity:([^;]*)/i,
						A = /alpha\(opacity *=.+?\)/i,
						k = /^(rgb|hsl)/,
						C = /([A-Z])/g,
						S = /-([a-z])/gi,
						R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
						L = function(t, e) {
							return e.toUpperCase()
						},
						M = /(?:Left|Right|Width)/i,
						j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
						D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
						I = /,(?=[^\)]*(?:\(|$))/gi,
						N = /[\s,\(]/i,
						B = Math.PI / 180,
						F = 180 / Math.PI,
						V = {},
						U = {
							style: {}
						},
						z = n.document || {
							createElement: function() {
								return U
							}
						},
						X = function(t, e) {
							return z.createElementNS ? z.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : z.createElement(t)
						},
						H = X("div"),
						Y = X("img"),
						G = l._internals = {
							_specialProps: h
						},
						W = (n.navigator || {}).userAgent || "",
						$ = function() {
							var t = W.indexOf("Android"),
								e = X("a");
							return p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), y = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, _ = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
						}(),
						q = function(t) {
							return O.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
						},
						Z = function(t) {
							n.console && console.log(t)
						},
						K = "",
						Q = "",
						J = function(t, e) {
							e = e || H;
							var i, r, n = e.style;
							if (void 0 !== n[t]) return t;
							for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t];);
							return r >= 0 ? (Q = 3 === r ? "ms" : i[r], K = "-" + Q.toLowerCase() + "-", Q + t) : null
						},
						tt = z.defaultView ? z.defaultView.getComputedStyle : function() {},
						et = l.getStyle = function(t, e, i, r, n) {
							var o;
							return $ || "opacity" !== e ? (!r && t.style[e] ? o = t.style[e] : (i = i || tt(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : q(t)
						},
						it = G.convertToPixels = function(t, i, r, n, o) {
							if ("px" === n || !n) return r;
							if ("auto" === n || !r) return 0;
							var s, a, u, h = M.test(i),
								c = t,
								d = H.style,
								f = r < 0,
								p = 1 === r;
							if (f && (r = -r), p && (r *= 100), "%" === n && -1 !== i.indexOf("border")) s = r / 100 * (h ? t.clientWidth : t.clientHeight);
							else {
								if (d.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) d[h ? "borderLeftWidth" : "borderTopWidth"] = r + n;
								else {
									if (c = t.parentNode || z.body, a = c._gsCache, u = e.ticker.frame, a && h && a.time === u) return a.width * r / 100;
									d[h ? "width" : "height"] = r + n
								}
								c.appendChild(H), s = parseFloat(H[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(H), h && "%" === n && !1 !== l.cacheWidths && (a = c._gsCache = c._gsCache || {}, a.time = u, a.width = s / r * 100), 0 !== s || o || (s = it(t, i, r, n, !0))
							}
							return p && (s /= 100), f ? -s : s
						},
						rt = G.calculateOffset = function(t, e, i) {
							if ("absolute" !== et(t, "position", i)) return 0;
							var r = "left" === e ? "Left" : "Top",
								n = et(t, "margin" + r, i);
							return t["offset" + r] - (it(t, e, parseFloat(n), n.replace(x, "")) || 0)
						},
						nt = function(t, e) {
							var i, r, n, o = {};
							if (e = e || tt(t, null))
								if (i = e.length)
									for (; --i > -1;) n = e[i], -1 !== n.indexOf("-transform") && Rt !== n || (o[n.replace(S, L)] = e.getPropertyValue(n));
								else
									for (i in e) - 1 !== i.indexOf("Transform") && St !== i || (o[i] = e[i]);
							else if (e = t.currentStyle || t.style)
								for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(S, L)] = e[i]);
							return $ || (o.opacity = q(t)), r = Yt(t, e, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, Mt && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
						},
						ot = function(t, e, i, r, n) {
							var o, s, a, l = {},
								u = t.style;
							for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || n && n[s]) && -1 === s.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(T, "") ? o : 0 : rt(t, s), void 0 !== u[s] && (a = new bt(u, s, u[s], a))));
							if (r)
								for (s in r) "className" !== s && (l[s] = r[s]);
							return {
								difs: l,
								firstMPT: a
							}
						},
						st = {
							width: ["Left", "Right"],
							height: ["Top", "Bottom"]
						},
						at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
						lt = function(t, e, i) {
							if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
							if (t.getCTM && zt(t)) return t.getBBox()[e] || 0;
							var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
								n = st[e],
								o = n.length;
							for (i = i || tt(t, null); --o > -1;) r -= parseFloat(et(t, "padding" + n[o], i, !0)) || 0, r -= parseFloat(et(t, "border" + n[o] + "Width", i, !0)) || 0;
							return r
						},
						ut = function t(e, i) {
							if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
							null != e && "" !== e || (e = "0 0");
							var r, n = e.split(" "),
								o = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
								s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
							if (n.length > 3 && !i) {
								for (n = e.split(", ").join(",").split(","), e = [], r = 0; r < n.length; r++) e.push(t(n[r]));
								return e.join(",")
							}
							return null == s ? s = "center" === o ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === o || isNaN(parseFloat(o)) && -1 === (o + "").indexOf("=")) && (o = "50%"), e = o + " " + s + (n.length > 2 ? " " + n[2] : ""), i && (i.oxp = -1 !== o.indexOf("%"), i.oyp = -1 !== s.indexOf("%"), i.oxr = "=" === o.charAt(1), i.oyr = "=" === s.charAt(1), i.ox = parseFloat(o.replace(T, "")), i.oy = parseFloat(s.replace(T, "")), i.v = e), i || e
						},
						ht = function(t, e) {
							return "function" == typeof t && (t = t(m, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
						},
						ct = function(t, e) {
							return "function" == typeof t && (t = t(m, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
						},
						dt = function(t, e, i, r) {
							var n, o, s, a, l;
							return "function" == typeof t && (t = t(m, g)), null == t ? a = e : "number" == typeof t ? a = t : (n = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), o.length && (r && (r[i] = e + s), -1 !== t.indexOf("short") && (s %= n) !== s % (n / 2) && (s = s < 0 ? s + n : s - n), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * n) % n - (s / n | 0) * n : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * n) % n - (s / n | 0) * n)), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a
						},
						ft = {
							aqua: [0, 255, 255],
							lime: [0, 255, 0],
							silver: [192, 192, 192],
							black: [0, 0, 0],
							maroon: [128, 0, 0],
							teal: [0, 128, 128],
							blue: [0, 0, 255],
							navy: [0, 0, 128],
							white: [255, 255, 255],
							fuchsia: [255, 0, 255],
							olive: [128, 128, 0],
							yellow: [255, 255, 0],
							orange: [255, 165, 0],
							gray: [128, 128, 128],
							purple: [128, 0, 128],
							green: [0, 128, 0],
							red: [255, 0, 0],
							pink: [255, 192, 203],
							cyan: [0, 255, 255],
							transparent: [255, 255, 255, 0]
						},
						pt = function(t, e, i) {
							return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
						},
						_t = l.parseColor = function(t, e) {
							var i, r, n, o, s, a, l, u, h, c, d;
							if (t)
								if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
								else {
									if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
									else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + r + r + n + n + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
									else if ("hsl" === t.substr(0, 3))
										if (i = d = t.match(b), e) {
											if (-1 !== t.indexOf("=")) return t.match(w)
										} else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, n = l <= .5 ? l * (a + 1) : l + a - l * a, r = 2 * l - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = pt(s + 1 / 3, r, n), i[1] = pt(s, r, n), i[2] = pt(s - 1 / 3, r, n);
									else i = t.match(b) || ft.transparent;
									i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
								}
							else i = ft.black;
							return e && !d && (r = i[0] / 255, n = i[1] / 255, o = i[2] / 255, u = Math.max(r, n, o), h = Math.min(r, n, o), l = (u + h) / 2, u === h ? s = a = 0 : (c = u - h, a = l > .5 ? c / (2 - u - h) : c / (u + h), s = u === r ? (n - o) / c + (n < o ? 6 : 0) : u === n ? (o - r) / c + 2 : (r - n) / c + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
						},
						yt = function(t, e) {
							var i, r, n, o = t.match(vt) || [],
								s = 0,
								a = o.length ? "" : t;
							for (i = 0; i < o.length; i++) r = o[i], n = t.substr(s, t.indexOf(r, s) - s), s += n.length + r.length, r = _t(r, e), 3 === r.length && r.push(1), a += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
							return a + t.substr(s)
						},
						vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
					for (c in ft) vt += "|" + c + "\\b";
					vt = new RegExp(vt + ")", "gi"), l.colorStringFilter = function(t) {
						var e, i = t[0] + t[1];
						vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = yt(t[0], e), t[1] = yt(t[1], e)), vt.lastIndex = 0
					}, e.defaultStringFilter || (e.defaultStringFilter = l.colorStringFilter);
					var gt = function(t, e, i, r) {
							if (null == t) return function(t) {
								return t
							};
							var n, o = e ? (t.match(vt) || [""])[0] : "",
								s = t.split(o).join("").match(E) || [],
								a = t.substr(0, t.indexOf(s[0])),
								l = ")" === t.charAt(t.length - 1) ? ")" : "",
								u = -1 !== t.indexOf(" ") ? " " : ",",
								h = s.length,
								c = h > 0 ? s[0].replace(b, "") : "";
							return h ? n = e ? function(t) {
								var e, d, f, p;
								if ("number" == typeof t) t += c;
								else if (r && I.test(t)) {
									for (p = t.replace(I, "|").split("|"), f = 0; f < p.length; f++) p[f] = n(p[f]);
									return p.join(",")
								}
								if (e = (t.match(vt) || [o])[0], d = t.split(e).join("").match(E) || [], f = d.length, h > f--)
									for (; ++f < h;) d[f] = i ? d[(f - 1) / 2 | 0] : s[f];
								return a + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
							} : function(t) {
								var e, o, d;
								if ("number" == typeof t) t += c;
								else if (r && I.test(t)) {
									for (o = t.replace(I, "|").split("|"), d = 0; d < o.length; d++) o[d] = n(o[d]);
									return o.join(",")
								}
								if (e = t.match(E) || [], d = e.length, h > d--)
									for (; ++d < h;) e[d] = i ? e[(d - 1) / 2 | 0] : s[d];
								return a + e.join(u) + l
							} : function(t) {
								return t
							}
						},
						mt = function(t) {
							return t = t.split(","),
								function(e, i, r, n, o, s, a) {
									var l, u = (i + "").split(" ");
									for (a = {}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
									return n.parse(e, a, o, s)
								}
						},
						bt = (G._setPluginRatio = function(t) {
							this.plugin.setRatio(t);
							for (var e, i, r, n, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
							if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
								for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
									if (i = l.t, i.type) {
										if (1 === i.type) {
											for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
											i[o] = n
										}
									} else i[o] = i.s + i.xs0;
									l = l._next
								}
						}, function(t, e, i, r, n) {
							this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
						}),
						wt = (G._parseToProxy = function(t, e, i, r, n, o) {
							var s, a, l, u, h, c = r,
								d = {},
								f = {},
								p = i._transform,
								_ = V;
							for (i._transform = null, V = e, r = h = i.parse(t, e, r, n), V = _, o && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
								if (r.type <= 1 && (a = r.p, f[a] = r.s + r.c, d[a] = r.s, o || (u = new bt(r, "s", a, u, r.r), r.c = 0), 1 === r.type))
									for (s = r.l; --s > 0;) l = "xn" + s, a = r.p + "_" + l, f[a] = r.data[l], d[a] = r[l], o || (u = new bt(r, l, a, u, r.rxp[l]));
								r = r._next
							}
							return {
								proxy: d,
								end: f,
								firstMPT: u,
								pt: h
							}
						}, G.CSSPropTween = function(t, e, r, n, o, s, l, u, h, c, d) {
							this.t = t, this.p = e, this.s = r, this.c = n, this.n = l || e, t instanceof wt || a.push(this.n), this.r = u, this.type = s || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? r : c, this.e = void 0 === d ? r + n : d, o && (this._next = o, o._prev = this)
						}),
						Et = function(t, e, i, r, n, o) {
							var s = new wt(t, e, i, r - i, n, -1, o);
							return s.b = i, s.e = s.xs0 = r, s
						},
						Tt = l.parseComplex = function(t, e, i, r, n, o, s, a, u, h) {
							i = i || o || "", "function" == typeof r && (r = r(m, g)), s = new wt(t, e, 0, 0, s, h ? 2 : 1, null, !1, a, i, r), r += "", n && vt.test(r + i) && (r = [i, r], l.colorStringFilter(r), i = r[0], r = r[1]);
							var c, f, p, _, y, v, E, T, x, O, P, A, k, C = i.split(", ").join(",").split(" "),
								S = r.split(", ").join(",").split(" "),
								R = C.length,
								L = !1 !== d;
							for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (C = C.join(" ").replace(I, ", ").split(" "), S = S.join(" ").replace(I, ", ").split(" "), R = C.length), R !== S.length && (C = (o || "").split(" "), R = C.length), s.plugin = u, s.setRatio = h, vt.lastIndex = 0, c = 0; c < R; c++)
								if (_ = C[c], y = S[c], (T = parseFloat(_)) || 0 === T) s.appendXtra("", T, ht(y, T), y.replace(w, ""), L && -1 !== y.indexOf("px"), !0);
								else if (n && vt.test(_)) A = y.indexOf(")") + 1, A = ")" + (A ? y.substr(A) : ""), k = -1 !== y.indexOf("hsl") && $, _ = _t(_, k), y = _t(y, k), x = _.length + y.length > 6, x && !$ && 0 === y[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(S[c]).join("transparent")) : ($ || (x = !1), k ? s.appendXtra(x ? "hsla(" : "hsl(", _[0], ht(y[0], _[0]), ",", !1, !0).appendXtra("", _[1], ht(y[1], _[1]), "%,", !1).appendXtra("", _[2], ht(y[2], _[2]), x ? "%," : "%" + A, !1) : s.appendXtra(x ? "rgba(" : "rgb(", _[0], y[0] - _[0], ",", !0, !0).appendXtra("", _[1], y[1] - _[1], ",", !0).appendXtra("", _[2], y[2] - _[2], x ? "," : A, !0), x && (_ = _.length < 4 ? 1 : _[3], s.appendXtra("", _, (y.length < 4 ? 1 : y[3]) - _, A, !1))), vt.lastIndex = 0;
							else if (v = _.match(b)) {
								if (!(E = y.match(w)) || E.length !== v.length) return s;
								for (p = 0, f = 0; f < v.length; f++) P = v[f], O = _.indexOf(P, p), s.appendXtra(_.substr(p, O - p), Number(P), ht(E[f], P), "", L && "px" === _.substr(O + P.length, 2), 0 === f), p = O + P.length;
								s["xs" + s.l] += _.substr(p)
							} else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + y : y;
							if (-1 !== r.indexOf("=") && s.data) {
								for (A = s.xs0 + s.data.s, c = 1; c < s.l; c++) A += s["xs" + c] + s.data["xn" + c];
								s.e = A + s["xs" + c]
							}
							return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
						},
						xt = 9;
					for (c = wt.prototype, c.l = c.pr = 0; --xt > 0;) c["xn" + xt] = 0, c["xs" + xt] = "";
					c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, r, n, o) {
						var s = this,
							a = s.l;
						return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = r || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = n, s["xn" + a] = e, s.plugin || (s.xfirst = new wt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
							s: e + i
						}, s.rxp = {}, s.s = e, s.c = i, s.r = n, s)) : (s["xs" + a] += e + (r || ""), s)
					};
					var Ot = function(t, e) {
							e = e || {}, this.p = e.prefix ? J(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
						},
						Pt = G._registerComplexSpecialProp = function(t, e, i) {
							"object" !== (void 0 === e ? "undefined" : r(e)) && (e = {
								parser: i
							});
							var n, o = t.split(","),
								s = e.defaultValue;
							for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Ot(o[n], e)
						},
						At = G._registerPluginProp = function(t) {
							if (!h[t]) {
								var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
								Pt(t, {
									parser: function(t, i, r, n, o, s, a) {
										var l = u.com.greensock.plugins[e];
										return l ? (l._cssRegister(), h[r].parse(t, i, r, n, o, s, a)) : (Z("Error: " + e + " js file not loaded."), o)
									}
								})
							}
						};
					c = Ot.prototype, c.parseComplex = function(t, e, i, r, n, o) {
						var s, a, l, u, h, c, d = this.keyword;
						if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : d && (a = [e], l = [i])), l) {
							for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && (h = e.indexOf(d), c = i.indexOf(d), h !== c && (-1 === c ? a[s] = a[s].split(d).join("") : -1 === h && (a[s] += " " + d)));
							e = a.join(", "), i = l.join(", ")
						}
						return Tt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, o)
					}, c.parse = function(t, e, i, r, n, o, a) {
						return this.parseComplex(t.style, this.format(et(t, this.p, s, !1, this.dflt)), this.format(e), n, o)
					}, l.registerSpecialProp = function(t, e, i) {
						Pt(t, {
							parser: function(t, r, n, o, s, a, l) {
								var u = new wt(t, n, 0, 0, s, 2, n, !1, i);
								return u.plugin = a, u.setRatio = e(t, r, o._tween, n), u
							},
							priority: i
						})
					}, l.useSVGTransformAttr = !0;
					var kt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
						St = J("transform"),
						Rt = K + "transform",
						Lt = J("transformOrigin"),
						Mt = null !== J("perspective"),
						jt = G.Transform = function() {
							this.perspective = parseFloat(l.defaultTransformPerspective) || 0, this.force3D = !(!1 === l.defaultForce3D || !Mt) && (l.defaultForce3D || "auto")
						},
						Dt = n.SVGElement,
						It = function(t, e, i) {
							var r, n = z.createElementNS("http://www.w3.org/2000/svg", t),
								o = /([a-z])([A-Z])/g;
							for (r in i) n.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), i[r]);
							return e.appendChild(n), n
						},
						Nt = z.documentElement || {},
						Bt = function() {
							var t, e, i, r = v || /Android/i.test(W) && !n.chrome;
							return z.createElementNS && !r && (t = It("svg", Nt), e = It("rect", t, {
								width: 100,
								height: 50,
								x: 100
							}), i = e.getBoundingClientRect().width, e.style[Lt] = "50% 50%", e.style[St] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(_ && Mt), Nt.removeChild(t)), r
						}(),
						Ft = function(t, e, i, r, n, o) {
							var s, a, u, h, c, d, f, p, _, y, v, g, m, b, w = t._gsTransform,
								E = Ht(t, !0);
							w && (m = w.xOrigin, b = w.yOrigin), (!r || (s = r.split(" ")).length < 2) && (f = t.getBBox(), 0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = {
								x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
								y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
								width: 0,
								height: 0
							}), e = ut(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = h = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), r && E !== Xt && (d = E[0], f = E[1], p = E[2], _ = E[3], y = E[4], v = E[5], (g = d * _ - f * p) && (a = h * (_ / g) + c * (-p / g) + (p * v - _ * y) / g, u = h * (-f / g) + c * (d / g) - (d * v - f * y) / g, h = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = u)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), n || !1 !== n && !1 !== l.defaultSmoothOrigin ? (a = h - m, u = c - b, w.xOffset += a * E[0] + u * E[2] - a, w.yOffset += a * E[1] + u * E[3] - u) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
						},
						Vt = function t(e) {
							var i, r = X("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
								n = this.parentNode,
								o = this.nextSibling,
								s = this.style.cssText;
							if (Nt.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
								i = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = t
							} catch (t) {} else this._originalGetBBox && (i = this._originalGetBBox());
							return o ? n.insertBefore(this, o) : n.appendChild(this), Nt.removeChild(r), this.style.cssText = s, i
						},
						Ut = function(t) {
							try {
								return t.getBBox()
							} catch (e) {
								return Vt.call(t, !0)
							}
						},
						zt = function(t) {
							return !(!(Dt && t.getCTM && Ut(t)) || t.parentNode && !t.ownerSVGElement)
						},
						Xt = [1, 0, 0, 1, 0, 0],
						Ht = function(t, e) {
							var i, r, n, o, s, a, l = t._gsTransform || new jt,
								u = t.style;
							if (St ? r = et(t, Rt, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(j), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, i && St && ((a = "none" === tt(t).display) || !t.parentNode) && (a && (o = u.display, u.display = "block"), t.parentNode || (s = 1, Nt.appendChild(t)), r = et(t, Rt, null, !0), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, o ? u.display = o : a && qt(u, "display"), s && Nt.removeChild(t)), (l.svg || t.getCTM && zt(t)) && (i && -1 !== (u[St] + "").indexOf("matrix") && (r = u[St], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (r = n, i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xt;
							for (n = (r || "").match(b) || [], xt = n.length; --xt > -1;) o = Number(n[xt]), n[xt] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
							return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
						},
						Yt = G.getTransform = function(t, i, r, n) {
							if (t._gsTransform && r && !n) return t._gsTransform;
							var o, s, a, u, h, c, d = r ? t._gsTransform || new jt : new jt,
								f = d.scaleX < 0,
								p = Mt ? parseFloat(et(t, Lt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
								_ = parseFloat(l.defaultTransformPerspective) || 0;
							if (d.svg = !(!t.getCTM || !zt(t)), d.svg && (Ft(t, et(t, Lt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), kt = l.useSVGTransformAttr || Bt), (o = Ht(t)) !== Xt) {
								if (16 === o.length) {
									var y, v, g, m, b, w = o[0],
										E = o[1],
										T = o[2],
										x = o[3],
										O = o[4],
										P = o[5],
										A = o[6],
										k = o[7],
										C = o[8],
										S = o[9],
										R = o[10],
										L = o[12],
										M = o[13],
										j = o[14],
										D = o[11],
										I = Math.atan2(A, R);
									d.zOrigin && (j = -d.zOrigin, L = C * j - o[12], M = S * j - o[13], j = R * j + d.zOrigin - o[14]), d.rotationX = I * F, I && (m = Math.cos(-I), b = Math.sin(-I), y = O * m + C * b, v = P * m + S * b, g = A * m + R * b, C = O * -b + C * m, S = P * -b + S * m, R = A * -b + R * m, D = k * -b + D * m, O = y, P = v, A = g), I = Math.atan2(-T, R), d.rotationY = I * F, I && (m = Math.cos(-I), b = Math.sin(-I), y = w * m - C * b, v = E * m - S * b, g = T * m - R * b, S = E * b + S * m, R = T * b + R * m, D = x * b + D * m, w = y, E = v, T = g), I = Math.atan2(E, w), d.rotation = I * F, I && (m = Math.cos(-I), b = Math.sin(-I), w = w * m + O * b, v = E * m + P * b, P = E * -b + P * m, A = T * -b + A * m, E = v), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (1e5 * Math.sqrt(w * w + E * E) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(P * P + S * S) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(A * A + R * R) + .5 | 0) / 1e5, d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = O || P ? Math.atan2(O, P) * F + d.rotation : d.skewX || 0, Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180))), d.perspective = D ? 1 / (D < 0 ? -D : D) : 0, d.x = L, d.y = M, d.z = j, d.svg && (d.x -= d.xOrigin - (d.xOrigin * w - d.yOrigin * O), d.y -= d.yOrigin - (d.yOrigin * E - d.xOrigin * P))
								} else if (!Mt || n || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
									var N = o.length >= 6,
										B = N ? o[0] : 1,
										V = o[1] || 0,
										U = o[2] || 0,
										z = N ? o[3] : 1;
									d.x = o[4] || 0, d.y = o[5] || 0, a = Math.sqrt(B * B + V * V), u = Math.sqrt(z * z + U * U), h = B || V ? Math.atan2(V, B) * F : d.rotation || 0, c = U || z ? Math.atan2(U, z) * F + h : d.skewX || 0, Math.abs(c) > 90 && Math.abs(c) < 270 && (f ? (a *= -1, c += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (u *= -1, c += c <= 0 ? 180 : -180)), d.scaleX = a, d.scaleY = u, d.rotation = h, d.skewX = c, Mt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = _, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * B + d.yOrigin * U), d.y -= d.yOrigin - (d.xOrigin * V + d.yOrigin * z))
								}
								d.zOrigin = p;
								for (s in d) d[s] < 2e-5 && d[s] > -2e-5 && (d[s] = 0)
							}
							return r && (t._gsTransform = d, d.svg && (kt && t.style[St] ? e.delayedCall(.001, function() {
								qt(t.style, St)
							}) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
								t.removeAttribute("transform")
							}))), d
						},
						Gt = function(t) {
							var e, i, r = this.data,
								n = -r.rotation * B,
								o = n + r.skewX * B,
								s = (Math.cos(n) * r.scaleX * 1e5 | 0) / 1e5,
								a = (Math.sin(n) * r.scaleX * 1e5 | 0) / 1e5,
								l = (Math.sin(o) * -r.scaleY * 1e5 | 0) / 1e5,
								u = (Math.cos(o) * r.scaleY * 1e5 | 0) / 1e5,
								h = this.t.style,
								c = this.t.currentStyle;
							if (c) {
								i = a, a = -l, l = -i, e = c.filter, h.filter = "";
								var d, f, p = this.t.offsetWidth,
									_ = this.t.offsetHeight,
									y = "absolute" !== c.position,
									g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + l + ", M22=" + u,
									m = r.x + p * r.xPercent / 100,
									b = r.y + _ * r.yPercent / 100;
								if (null != r.ox && (d = (r.oxp ? p * r.ox * .01 : r.ox) - p / 2, f = (r.oyp ? _ * r.oy * .01 : r.oy) - _ / 2, m += d - (d * s + f * a), b += f - (d * l + f * u)), y ? (d = p / 2, f = _ / 2, g += ", Dx=" + (d - (d * s + f * a) + m) + ", Dy=" + (f - (d * l + f * u) + b) + ")") : g += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(D, g) : h.filter = g + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === l && 1 === u && (y && -1 === g.indexOf("Dx=0, Dy=0") || O.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
									var w, E, T, P = v < 8 ? 1 : -1;
									for (d = r.ieOffsetX || 0, f = r.ieOffsetY || 0, r.ieOffsetX = Math.round((p - ((s < 0 ? -s : s) * p + (a < 0 ? -a : a) * _)) / 2 + m), r.ieOffsetY = Math.round((_ - ((u < 0 ? -u : u) * _ + (l < 0 ? -l : l) * p)) / 2 + b), xt = 0; xt < 4; xt++) E = at[xt], w = c[E], i = -1 !== w.indexOf("px") ? parseFloat(w) : it(this.t, E, parseFloat(w), w.replace(x, "")) || 0, T = i !== r[E] ? xt < 2 ? -r.ieOffsetX : -r.ieOffsetY : xt < 2 ? d - r.ieOffsetX : f - r.ieOffsetY, h[E] = (r[E] = Math.round(i - T * (0 === xt || 2 === xt ? 1 : P))) + "px"
								}
							}
						},
						Wt = G.set3DTransformRatio = G.setTransformRatio = function(t) {
							var e, i, r, n, o, s, a, l, u, h, c, d, f, p, y, v, g, m, b, w, E, T, x, O = this.data,
								P = this.t.style,
								A = O.rotation,
								k = O.rotationX,
								C = O.rotationY,
								S = O.scaleX,
								R = O.scaleY,
								L = O.scaleZ,
								M = O.x,
								j = O.y,
								D = O.z,
								I = O.svg,
								N = O.perspective,
								F = O.force3D,
								V = O.skewY,
								U = O.skewX;
							if (V && (U += V, A += V), ((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !D && !N && !C && !k && 1 === L || kt && I || !Mt) return void(A || U || I ? (A *= B, T = U * B, x = 1e5, i = Math.cos(A) * S, o = Math.sin(A) * S, r = Math.sin(A - T) * -R, s = Math.cos(A - T) * R, T && "simple" === O.skewType && (e = Math.tan(T - V * B), e = Math.sqrt(1 + e * e), r *= e, s *= e, V && (e = Math.tan(V * B), e = Math.sqrt(1 + e * e), i *= e, o *= e)), I && (M += O.xOrigin - (O.xOrigin * i + O.yOrigin * r) + O.xOffset, j += O.yOrigin - (O.xOrigin * o + O.yOrigin * s) + O.yOffset, kt && (O.xPercent || O.yPercent) && (y = this.t.getBBox(), M += .01 * O.xPercent * y.width, j += .01 * O.yPercent * y.height), y = 1e-6, M < y && M > -y && (M = 0), j < y && j > -y && (j = 0)), b = (i * x | 0) / x + "," + (o * x | 0) / x + "," + (r * x | 0) / x + "," + (s * x | 0) / x + "," + M + "," + j + ")", I && kt ? this.t.setAttribute("transform", "matrix(" + b) : P[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + b) : P[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + R + "," + M + "," + j + ")");
							if (_ && (y = 1e-4, S < y && S > -y && (S = L = 2e-5), R < y && R > -y && (R = L = 2e-5), !N || O.z || O.rotationX || O.rotationY || (N = 0)), A || U) A *= B, v = i = Math.cos(A), g = o = Math.sin(A), U && (A -= U * B, v = Math.cos(A), g = Math.sin(A), "simple" === O.skewType && (e = Math.tan((U - V) * B), e = Math.sqrt(1 + e * e), v *= e, g *= e, O.skewY && (e = Math.tan(V * B), e = Math.sqrt(1 + e * e), i *= e, o *= e))), r = -g, s = v;
							else {
								if (!(C || k || 1 !== L || N || I)) return void(P[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + j + "px," + D + "px)" + (1 !== S || 1 !== R ? " scale(" + S + "," + R + ")" : ""));
								i = s = 1, r = o = 0
							}
							h = 1, n = a = l = u = c = d = 0, f = N ? -1 / N : 0, p = O.zOrigin, y = 1e-6, w = ",", E = "0", A = C * B, A && (v = Math.cos(A), g = Math.sin(A), l = -g, c = f * -g, n = i * g, a = o * g, h = v, f *= v, i *= v, o *= v), A = k * B, A && (v = Math.cos(A), g = Math.sin(A), e = r * v + n * g, m = s * v + a * g, u = h * g, d = f * g, n = r * -g + n * v, a = s * -g + a * v, h *= v, f *= v, r = e, s = m), 1 !== L && (n *= L, a *= L, h *= L, f *= L), 1 !== R && (r *= R, s *= R, u *= R, d *= R), 1 !== S && (i *= S, o *= S, l *= S, c *= S), (p || I) && (p && (M += n * -p, j += a * -p, D += h * -p + p), I && (M += O.xOrigin - (O.xOrigin * i + O.yOrigin * r) + O.xOffset, j += O.yOrigin - (O.xOrigin * o + O.yOrigin * s) + O.yOffset), M < y && M > -y && (M = E), j < y && j > -y && (j = E), D < y && D > -y && (D = 0)), b = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < y && i > -y ? E : i) + w + (o < y && o > -y ? E : o) + w + (l < y && l > -y ? E : l), b += w + (c < y && c > -y ? E : c) + w + (r < y && r > -y ? E : r) + w + (s < y && s > -y ? E : s), k || C || 1 !== L ? (b += w + (u < y && u > -y ? E : u) + w + (d < y && d > -y ? E : d) + w + (n < y && n > -y ? E : n), b += w + (a < y && a > -y ? E : a) + w + (h < y && h > -y ? E : h) + w + (f < y && f > -y ? E : f) + w) : b += ",0,0,0,0,1,0,", b += M + w + j + w + D + w + (N ? 1 + -D / N : 1) + ")", P[St] = b
						};
					c = jt.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
						parser: function(t, e, i, n, o, a, u) {
							if (n._lastParsedTransform === u) return o;
							n._lastParsedTransform = u;
							var h, c = u.scale && "function" == typeof u.scale ? u.scale : 0;
							"function" == typeof u[i] && (h = u[i], u[i] = e), c && (u.scale = c(m, t));
							var d, f, p, _, y, v, b, w, E, T = t._gsTransform,
								x = t.style,
								O = Ct.length,
								P = u,
								A = {},
								k = Yt(t, s, !0, P.parseTransform),
								C = P.transform && ("function" == typeof P.transform ? P.transform(m, g) : P.transform);
							if (n._transform = k, C && "string" == typeof C && St) f = H.style, f[St] = C, f.display = "block", f.position = "absolute", z.body.appendChild(H), d = Yt(H, null, !1), k.svg && (v = k.xOrigin, b = k.yOrigin, d.x -= k.xOffset, d.y -= k.yOffset, (P.transformOrigin || P.svgOrigin) && (C = {}, Ft(t, ut(P.transformOrigin), C, P.svgOrigin, P.smoothOrigin, !0), v = C.xOrigin, b = C.yOrigin, d.x -= C.xOffset - k.xOffset, d.y -= C.yOffset - k.yOffset), (v || b) && (w = Ht(H, !0), d.x -= v - (v * w[0] + b * w[2]), d.y -= b - (v * w[1] + b * w[3]))), z.body.removeChild(H), d.perspective || (d.perspective = k.perspective), null != P.xPercent && (d.xPercent = ct(P.xPercent, k.xPercent)), null != P.yPercent && (d.yPercent = ct(P.yPercent, k.yPercent));
							else if ("object" === (void 0 === P ? "undefined" : r(P))) {
								if (d = {
										scaleX: ct(null != P.scaleX ? P.scaleX : P.scale, k.scaleX),
										scaleY: ct(null != P.scaleY ? P.scaleY : P.scale, k.scaleY),
										scaleZ: ct(P.scaleZ, k.scaleZ),
										x: ct(P.x, k.x),
										y: ct(P.y, k.y),
										z: ct(P.z, k.z),
										xPercent: ct(P.xPercent, k.xPercent),
										yPercent: ct(P.yPercent, k.yPercent),
										perspective: ct(P.transformPerspective, k.perspective)
									}, null != (y = P.directionalRotation))
									if ("object" === (void 0 === y ? "undefined" : r(y)))
										for (f in y) P[f] = y[f];
									else P.rotation = y;
								"string" == typeof P.x && -1 !== P.x.indexOf("%") && (d.x = 0, d.xPercent = ct(P.x, k.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (d.y = 0, d.yPercent = ct(P.y, k.yPercent)), d.rotation = dt("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : k.rotation, k.rotation, "rotation", A), Mt && (d.rotationX = dt("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", A), d.rotationY = dt("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", A)), d.skewX = dt(P.skewX, k.skewX), d.skewY = dt(P.skewY, k.skewY)
							}
							for (Mt && null != P.force3D && (k.force3D = P.force3D, _ = !0), k.skewType = P.skewType || k.skewType || l.defaultSkewType, p = k.force3D || k.z || k.rotationX || k.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == P.scale || (d.scaleZ = 1); --O > -1;) E = Ct[O], ((C = d[E] - k[E]) > 1e-6 || C < -1e-6 || null != P[E] || null != V[E]) && (_ = !0, o = new wt(k, E, k[E], C, o), E in A && (o.e = A[E]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
							return C = P.transformOrigin, k.svg && (C || P.svgOrigin) && (v = k.xOffset, b = k.yOffset, Ft(t, ut(C), d, P.svgOrigin, P.smoothOrigin), o = Et(k, "xOrigin", (T ? k : d).xOrigin, d.xOrigin, o, "transformOrigin"), o = Et(k, "yOrigin", (T ? k : d).yOrigin, d.yOrigin, o, "transformOrigin"), v === k.xOffset && b === k.yOffset || (o = Et(k, "xOffset", T ? v : k.xOffset, k.xOffset, o, "transformOrigin"), o = Et(k, "yOffset", T ? b : k.yOffset, k.yOffset, o, "transformOrigin")), C = "0px 0px"), (C || Mt && p && k.zOrigin) && (St ? (_ = !0, E = Lt, C = (C || et(t, E, s, !1, "50% 50%")) + "", o = new wt(x, E, 0, 0, o, -1, "transformOrigin"), o.b = x[E], o.plugin = a, Mt ? (f = k.zOrigin, C = C.split(" "), k.zOrigin = (C.length > 2 && (0 === f || "0px" !== C[2]) ? parseFloat(C[2]) : f) || 0, o.xs0 = o.e = C[0] + " " + (C[1] || "50%") + " 0px", o = new wt(k, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = k.zOrigin) : o.xs0 = o.e = C) : ut(C + "", k)), _ && (n._transformType = k.svg && kt || !p && 3 !== this._transformType ? 2 : 3), h && (u[i] = h), c && (u.scale = c), o
						},
						prefix: !0
					}), Pt("boxShadow", {
						defaultValue: "0px 0px 0px 0px #999",
						prefix: !0,
						color: !0,
						multi: !0,
						keyword: "inset"
					}), Pt("borderRadius", {
						defaultValue: "0px",
						parser: function(t, e, i, r, n, a) {
							e = this.format(e);
							var l, u, h, c, d, f, p, _, y, v, g, m, b, w, E, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
								O = t.style;
							for (y = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < x.length; u++) this.p.indexOf("border") && (x[u] = J(x[u])), d = c = et(t, x[u], s, !1, "0px"), -1 !== d.indexOf(" ") && (c = d.split(" "), d = c[0], c = c[1]), f = h = l[u], p = parseFloat(d), m = d.substr((p + "").length), b = "=" === f.charAt(1), b ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), g = f.substr((_ + "").length - (_ < 0 ? 1 : 0)) || "") : (_ = parseFloat(f), g = f.substr((_ + "").length)), "" === g && (g = o[i] || m), g !== m && (w = it(t, "borderLeft", p, m), E = it(t, "borderTop", p, m), "%" === g ? (d = w / y * 100 + "%", c = E / v * 100 + "%") : "em" === g ? (T = it(t, "borderLeft", 1, "em"), d = w / T + "em", c = E / T + "em") : (d = w + "px", c = E + "px"), b && (f = parseFloat(d) + _ + g, h = parseFloat(c) + _ + g)), n = Tt(O, x[u], d + " " + c, f + " " + h, !1, "0px", n);
							return n
						},
						prefix: !0,
						formatter: gt("0px 0px 0px 0px", !1, !0)
					}), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
						defaultValue: "0px",
						parser: function(t, e, i, r, n, o) {
							return Tt(t.style, i, this.format(et(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", n)
						},
						prefix: !0,
						formatter: gt("0px 0px", !1, !0)
					}), Pt("backgroundPosition", {
						defaultValue: "0 0",
						parser: function(t, e, i, r, n, o) {
							var a, l, u, h, c, d, f = "background-position",
								p = s || tt(t, null),
								_ = this.format((p ? v ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
								y = this.format(e);
							if (-1 !== _.indexOf("%") != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && (d = et(t, "backgroundImage").replace(R, "")) && "none" !== d) {
								for (a = _.split(" "), l = y.split(" "), Y.setAttribute("src", d), u = 2; --u > -1;) _ = a[u], (h = -1 !== _.indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[u] = h ? parseFloat(_) / 100 * c + "px" : parseFloat(_) / c * 100 + "%");
								_ = a.join(" ")
							}
							return this.parseComplex(t.style, _, y, n, o)
						},
						formatter: ut
					}), Pt("backgroundSize", {
						defaultValue: "0 0",
						formatter: function(t) {
							return t += "", ut(-1 === t.indexOf(" ") ? t + " " + t : t)
						}
					}), Pt("perspective", {
						defaultValue: "0px",
						prefix: !0
					}), Pt("perspectiveOrigin", {
						defaultValue: "50% 50%",
						prefix: !0
					}), Pt("transformStyle", {
						prefix: !0
					}), Pt("backfaceVisibility", {
						prefix: !0
					}), Pt("userSelect", {
						prefix: !0
					}), Pt("margin", {
						parser: mt("marginTop,marginRight,marginBottom,marginLeft")
					}), Pt("padding", {
						parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
					}), Pt("clip", {
						defaultValue: "rect(0px,0px,0px,0px)",
						parser: function(t, e, i, r, n, o) {
							var a, l, u;
							return v < 9 ? (l = t.currentStyle, u = v < 8 ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(et(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, n, o)
						}
					}), Pt("textShadow", {
						defaultValue: "0px 0px 0px #999",
						color: !0,
						multi: !0
					}), Pt("autoRound,strictUnits", {
						parser: function(t, e, i, r, n) {
							return n
						}
					}), Pt("border", {
						defaultValue: "0px solid #000",
						parser: function(t, e, i, r, n, o) {
							var a = et(t, "borderTopWidth", s, !1, "0px"),
								l = this.format(e).split(" "),
								u = l[0].replace(x, "");
							return "px" !== u && (a = parseFloat(a) / it(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", s, !1, "solid") + " " + et(t, "borderTopColor", s, !1, "#000")), l.join(" "), n, o)
						},
						color: !0,
						formatter: function(t) {
							var e = t.split(" ");
							return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
						}
					}), Pt("borderWidth", {
						parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
					}), Pt("float,cssFloat,styleFloat", {
						parser: function(t, e, i, r, n, o) {
							var s = t.style,
								a = "cssFloat" in s ? "cssFloat" : "styleFloat";
							return new wt(s, a, 0, 0, n, -1, i, !1, 0, s[a], e)
						}
					});
					var $t = function(t) {
						var e, i = this.t,
							r = i.filter || et(this.data, "filter") || "",
							n = this.s + this.c * t | 0;
						100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = r.replace(A, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(O, "opacity=" + n))
					};
					Pt("opacity,alpha,autoAlpha", {
						defaultValue: "1",
						parser: function(t, e, i, r, n, o) {
							var a = parseFloat(et(t, "opacity", s, !1, "1")),
								l = t.style,
								u = "autoAlpha" === i;
							return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === et(t, "visibility", s) && 0 !== e && (a = 0), $ ? n = new wt(l, "opacity", a, e - a, n) : (n = new wt(l, "opacity", 100 * a, 100 * (e - a), n), n.xn1 = u ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = o, n.setRatio = $t), u && (n = new wt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
						}
					});
					var qt = function(t, e) {
							e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
						},
						Zt = function(t) {
							if (this.t._gsClassPT = this, 1 === t || 0 === t) {
								this.t.setAttribute("class", 0 === t ? this.b : this.e);
								for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
								1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
							} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
						};
					Pt("className", {
						parser: function(t, e, r, n, o, a, l) {
							var u, h, c, d, f, p = t.getAttribute("class") || "",
								_ = t.style.cssText;
							if (o = n._classNamePT = new wt(t, r, 0, 0, o, 2), o.setRatio = Zt, o.pr = -11, i = !0, o.b = p, h = nt(t, s), c = t._gsClassPT) {
								for (d = {}, f = c.data; f;) d[f.p] = 1, f = f._next;
								c.setRatio(1)
							}
							return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = ot(t, h, nt(t), l, d), t.setAttribute("class", p), o.data = u.firstMPT, t.style.cssText = _, o = o.xfirst = n.parse(t, u.difs, o, a)
						}
					});
					var Kt = function(t) {
						if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
							var e, i, r, n, o, s = this.t.style,
								a = h.transform.parse;
							if ("all" === this.e) s.cssText = "", n = !0;
							else
								for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], h[i] && (h[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Lt : h[i].p), qt(s, i);
							n && (qt(s, St), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
						}
					};
					for (Pt("clearProps", {
							parser: function(t, e, r, n, o) {
								return o = new wt(t, r, 0, 0, o, 2), o.setRatio = Kt, o.e = e, o.pr = -10, o.data = n._tween, i = !0, o
							}
						}), c = "bezier,throwProps,physicsProps,physics2D".split(","), xt = c.length; xt--;) At(c[xt]);
					c = l.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, r, n) {
						if (!t.nodeType) return !1;
						this._target = g = t, this._tween = r, this._vars = e, m = n, d = e.autoRound, i = !1, o = e.suffixMap || l.suffixMap, s = tt(t, ""), a = this._overwriteProps;
						var u, c, _, v, b, w, E, T, x, O = t.style;
						if (f && "" === O.zIndex && ("auto" !== (u = et(t, "zIndex", s)) && "" !== u || this._addLazySet(O, "zIndex", 0)), "string" == typeof e && (v = O.cssText, u = nt(t, s), O.cssText = v + ";" + e, u = ot(t, u, nt(t)).difs, !$ && P.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, O.cssText = v), e.className ? this._firstPT = c = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = c = this.parse(t, e, null), this._transformType) {
							for (x = 3 === this._transformType, St ? p && (f = !0, "" === O.zIndex && ("auto" !== (E = et(t, "zIndex", s)) && "" !== E || this._addLazySet(O, "zIndex", 0)), y && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : O.zoom = 1, _ = c; _ && _._next;) _ = _._next;
							T = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, _), T.setRatio = St ? Wt : Gt, T.data = this._transform || Yt(t, s, !0), T.tween = r, T.pr = -1, a.pop()
						}
						if (i) {
							for (; c;) {
								for (w = c._next, _ = v; _ && _.pr > c.pr;) _ = _._next;
								(c._prev = _ ? _._prev : b) ? c._prev._next = c: v = c, (c._next = _) ? _._prev = c : b = c, c = w
							}
							this._firstPT = v
						}
						return !0
					}, c.parse = function(t, e, i, r) {
						var n, a, l, u, c, f, p, _, y, v, b = t.style;
						for (n in e) f = e[n], "function" == typeof f && (f = f(m, g)), a = h[n], a ? i = a.parse(t, f, n, this, i, r, e) : (c = et(t, n, s) + "", y = "string" == typeof f, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || y && k.test(f) ? (y || (f = _t(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = Tt(b, n, c, f, !0, "transparent", i, 0, r)) : y && N.test(f) ? i = Tt(b, n, c, f, !0, null, i, 0, r) : (l = parseFloat(c), p = l || 0 === l ? c.substr((l + "").length) : "", "" !== c && "auto" !== c || ("width" === n || "height" === n ? (l = lt(t, n, s), p = "px") : "left" === n || "top" === n ? (l = rt(t, n, s), p = "px") : (l = "opacity" !== n ? 0 : 1, p = "")), v = y && "=" === f.charAt(1), v ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), _ = f.replace(x, "")) : (u = parseFloat(f), _ = y ? f.replace(x, "") : ""), "" === _ && (_ = n in o ? o[n] : p), f = u || 0 === u ? (v ? u + l : u) + _ : e[n], p !== _ && "" !== _ && (u || 0 === u) && l && (l = it(t, n, l, p), "%" === _ ? (l /= it(t, n, 100, "%") / 100, !0 !== e.strictUnits && (c = l + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? l /= it(t, n, 1, _) : "px" !== _ && (u = it(t, n, u, _), _ = "px"), v && (u || 0 === u) && (f = u + l + _)), v && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== b[n] && (f || f + "" != "NaN" && null != f) ? (i = new wt(b, n, u || l || 0, 0, i, -1, n, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== n && -1 === n.indexOf("Style") ? f : c) : Z("invalid " + n + " tween value: " + e[n]) : (i = new wt(b, n, l, u - l, i, 0, n, !1 !== d && ("px" === _ || "zIndex" === n), 0, c, f), i.xs0 = _))), r && i && !i.plugin && (i.plugin = r);
						return i
					}, c.setRatio = function(t) {
						var e, i, r, n = this._firstPT;
						if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
							if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
								for (; n;) {
									if (e = n.c * t + n.s, n.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), n.type)
										if (1 === n.type)
											if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
											else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
									else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
									else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
									else {
										for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
										n.t[n.p] = i
									} else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
									else n.t[n.p] = e + n.xs0;
									n = n._next
								} else
									for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
							else
								for (; n;) {
									if (2 !== n.type)
										if (n.r && -1 !== n.type)
											if (e = Math.round(n.s + n.c), n.type) {
												if (1 === n.type) {
													for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
													n.t[n.p] = i
												}
											} else n.t[n.p] = e + n.xs0;
									else n.t[n.p] = n.e;
									else n.setRatio(t);
									n = n._next
								}
					}, c._enableTransforms = function(t) {
						this._transform = this._transform || Yt(this._target, s, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
					};
					var Qt = function(t) {
						this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
					};
					c._addLazySet = function(t, e, i) {
						var r = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
						r.e = i, r.setRatio = Qt, r.data = this
					}, c._linkCSSP = function(t, e, i, r) {
						return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
					}, c._mod = function(t) {
						for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
					}, c._kill = function(e) {
						var i, r, n, o = e;
						if (e.autoAlpha || e.alpha) {
							o = {};
							for (r in e) o[r] = e[r];
							o.opacity = 1, o.autoAlpha && (o.visibility = 1)
						}
						for (e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
						return t.prototype._kill.call(this, o)
					};
					var Jt = function t(e, i, r) {
						var n, o, s, a;
						if (e.slice)
							for (o = e.length; --o > -1;) t(e[o], i, r);
						else
							for (n = e.childNodes, o = n.length; --o > -1;) s = n[o], a = s.type, s.style && (i.push(nt(s)), r && r.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || t(s, i, r)
					};
					return l.cascadeTo = function(t, i, r) {
						var n, o, s, a, l = e.to(t, i, r),
							u = [l],
							h = [],
							c = [],
							d = [],
							f = e._internals.reservedProps;
						for (t = l._targets || l.target, Jt(t, h, d), l.render(i, !0, !0), Jt(t, c), l.render(0, !0, !0), l._enabled(!0), n = d.length; --n > -1;)
							if (o = ot(d[n], h[n], c[n]), o.firstMPT) {
								o = o.difs;
								for (s in r) f[s] && (o[s] = r[s]);
								a = {};
								for (s in o) a[s] = h[n][s];
								u.push(e.fromTo(d[n], i, a, o))
							}
						return u
					}, t.activate([l]), l
				}, !0)
			}), n._gsDefine && n._gsQueue.pop()(),
			function(e) {
				i(11), t.exports = function() {
					return (n.GreenSockGlobals || n).CSSPlugin
				}()
			}()
	}).call(e, i(6))
}, function(t, e, i) {
	"use strict";
	(function(e) {
		var r = void 0 !== t && t.exports && void 0 !== e ? e : window;
		(r._gsQueue || (r._gsQueue = [])).push(function() {
				r._gsDefine("easing.Back", ["easing.Ease"], function(t) {
					var e = r.GreenSockGlobals || r,
						i = e.com.greensock,
						n = (Math.PI, Math.PI / 2),
						o = i._class,
						s = function(e, i) {
							var r = o("easing." + e, function() {}, !0),
								n = r.prototype = new t;
							return n.constructor = r, n.getRatio = i, r
						},
						a = t.register || function() {},
						l = function(t, e, i, r, n) {
							var s = o("easing." + t, {
								easeOut: new e,
								easeIn: new i,
								easeInOut: new r
							}, !0);
							return a(s, t), s
						},
						u = function(e, i) {
							var r = o("easing." + e, function(t) {
									this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
								}, !0),
								n = r.prototype = new t;
							return n.constructor = r, n.getRatio = i, n.config = function(t) {
								return new r(t)
							}, r
						},
						h = l("Back", u("BackOut", function(t) {
							return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
						}), u("BackIn", function(t) {
							return t * t * ((this._p1 + 1) * t - this._p1)
						}), u("BackInOut", function(t) {
							return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
						}));
					return l("Expo", s("ExpoOut", function(t) {
						return 1 - Math.pow(2, -10 * t)
					}), s("ExpoIn", function(t) {
						return Math.pow(2, 10 * (t - 1)) - .001
					}), s("ExpoInOut", function(t) {
						return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
					})), l("Sine", s("SineOut", function(t) {
						return Math.sin(t * n)
					}), s("SineIn", function(t) {
						return 1 - Math.cos(t * n)
					}), s("SineInOut", function(t) {
						return -.5 * (Math.cos(Math.PI * t) - 1)
					})), o("easing.EaseLookup", {
						find: function(e) {
							return t.map[e]
						}
					}, !0), h
				}, !0)
			}), r._gsDefine && r._gsQueue.pop()(),
			function() {
				i(11), t.exports = function() {
					return r.GreenSockGlobals || r
				}()
			}()
	}).call(e, i(6))
}]);