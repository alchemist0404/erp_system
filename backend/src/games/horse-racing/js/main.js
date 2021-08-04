/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		e = "undefined" !== typeof module && module.exports,
		d = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		b = function () {
			for (var b, k = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
			"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
			], c = 0, h = k.length, d = {}; c < h; c++)
				if ((b = k[c]) && b[1] in a) {
					for (c = 0; c < b.length; c++) d[k[0][c]] =
						b[c];
					return d
				} return !1
		}(),
		c = {
			change: b.fullscreenchange,
			error: b.fullscreenerror
		},
		l = {
			request: function (c) {
				var k = b.requestFullscreen;
				c = c || a.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[k]();
				else c[k](d && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function () {
				a[b.exitFullscreen]()
			},
			toggle: function (b) {
				this.isFullscreen ? this.exit() : this.request(b)
			},
			onchange: function (b) {
				this.on("change", b)
			},
			onerror: function (b) {
				this.on("error", b)
			},
			on: function (b, k) {
				var d = c[b];
				d && a.addEventListener(d, k, !1)
			},
			off: function (b,
				k) {
				var d = c[b];
				d && a.removeEventListener(d, k, !1)
			},
			raw: b
		};
	b ? (Object.defineProperties(l, {
		isFullscreen: {
			get: function () {
				return !!a[b.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function () {
				return a[b.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function () {
				return !!a[b.fullscreenEnabled]
			}
		}
	}), e ? module.exports = l : window.screenfull = l) : e ? module.exports = !1 : window.screenfull = !1
})();

function buildIOSMeta() {
	for (var a = [{
		name: "viewport",
		content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
	}, {
		name: "apple-mobile-web-app-capable",
		content: "yes"
	}, {
		name: "apple-mobile-web-app-status-bar-style",
		content: "black"
	}], e = 0; e < a.length; e++) {
		var d = document.createElement("meta");
		d.name = a[e].name;
		d.content = a[e].content;
		var b = window.document.head.querySelector('meta[name="' + d.name + '"]');
		b && b.parentNode.removeChild(b);
		window.document.head.appendChild(d)
	}
}

function hideIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "none");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
	jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
	jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "block");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
	window.scrollTo(0, 0);
	if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
		case 2:
			switch (window.innerWidth) {
				case 568:
					320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
					break;
				case 667:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		case 3:
			switch (window.innerWidth) {
				case 736:
					414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				case 724:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		default:
			hideIOSFullscreenPanel()
	}
}

function iosResize() {
	__iosResize();
	setTimeout(function () {
		__iosResize()
	}, 500)
}

function iosInIframe() {
	try {
		return window.self !== window.top
	} catch (a) {
		return !0
	}
}
$(document).ready(function () {
	platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
	platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
(function () {
	function a(b) {
		b = String(b);
		return b.charAt(0).toUpperCase() + b.slice(1)
	}

	function e(a, c) {
		var k = -1,
			d = a ? a.length : 0;
		if ("number" == typeof d && -1 < d && d <= x)
			for (; ++k < d;) c(a[k], k, a);
		else b(a, c)
	}

	function d(b) {
		b = String(b).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
	}

	function b(b, a) {
		for (var c in b) m.call(b, c) && a(b[c], c, b)
	}

	function c(b) {
		return null == b ? a(b) : y.call(b).slice(8, -1)
	}

	function l(b, a) {
		var c = null != b ? typeof b[a] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(c) &&
			("object" == c ? !!b[a] : !0)
	}

	function f(b) {
		return String(b).replace(/([ -])(?!$)/g, "$1?")
	}

	function k(b, a) {
		var c = null;
		e(b, function (k, d) {
			c = a(c, k, d, b)
		});
		return c
	}

	function g(a) {
		function h(b) {
			return k(b, function (b, c) {
				var k = c.pattern || f(c);
				!b && (b = RegExp("\\b" + k + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + k + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + k + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((b = String(c.label && !RegExp(k, "i").test(c.label) ? c.label : b).split("/"))[1] && !/[\d.]+/.test(b[0]) && (b[0] +=
					" " + b[1]), c = c.label || c, b = d(b[0].replace(RegExp(k, "i"), c).replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ").replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return b
			})
		}

		function e(b) {
			return k(b, function (b, c) {
				return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
			})
		}
		var r = n,
			q = a && "object" == typeof a && "String" != c(a);
		q && (r = a, a = null);
		var x = r.navigator || {},
			m = x.userAgent || "";
		a || (a = m);
		var w = q ? !!x.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(y.toString()),
			C = q ? "Object" : "ScriptBridgingProxyObject",
			P = q ? "Object" : "Environment",
			L = q && r.java ? "JavaPackage" : c(r.java),
			T = q ? "Object" : "RuntimeObject";
		P = (L = /\bJava/.test(L) && r.java) && c(r.environment) == P;
		var U = L ? "a" : "\u03b1",
			V = L ? "b" : "\u03b2",
			Q = r.document || {},
			J = r.operamini || r.opera,
			M = u.test(M = q && J ? J["[[Class]]"] : c(J)) ? M : J = null,
			p, N = a;
		q = [];
		var O = null,
			K = a == m;
		m = K && J && "function" == typeof J.version && J.version();
		var z = function (b) {
			return k(b, function (b, c) {
				return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label ||
					c)
			})
		}([{
			label: "EdgeHTML",
			pattern: "Edge"
		}, "Trident", {
			label: "WebKit",
			pattern: "AppleWebKit"
		}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			t = function (b) {
				return k(b, function (b, c) {
					return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label || c)
				})
			}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
				label: "Microsoft Edge",
				pattern: "Edge"
			}, "Midori", "Nook Browser",
				"PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
					label: "Samsung Internet",
					pattern: "SamsungBrowser"
				}, "SeaMonkey", {
					label: "Silk",
					pattern: "(?:Cloud9|Silk-Accelerated)"
				}, "Sleipnir", "SlimBrowser", {
					label: "SRWare Iron",
					pattern: "Iron"
				}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
					label: "Opera Mini",
					pattern: "OPiOS"
				}, "Opera", {
					label: "Opera",
					pattern: "OPR"
				}, "Chrome", {
					label: "Chrome Mobile",
					pattern: "(?:CriOS|CrMo)"
				}, {
					label: "Firefox",
					pattern: "(?:Firefox|Minefield)"
				}, {
					label: "Firefox for iOS",
					pattern: "FxiOS"
				},
				{
					label: "IE",
					pattern: "IEMobile"
				}, {
					label: "IE",
					pattern: "MSIE"
				}, "Safari"
			]),
			A = h([{
				label: "BlackBerry",
				pattern: "BB10"
			}, "BlackBerry", {
				label: "Galaxy S",
				pattern: "GT-I9000"
			}, {
				label: "Galaxy S2",
				pattern: "GT-I9100"
			}, {
				label: "Galaxy S3",
				pattern: "GT-I9300"
			}, {
				label: "Galaxy S4",
				pattern: "GT-I9500"
			}, {
				label: "Galaxy S5",
				pattern: "SM-G900"
			}, {
				label: "Galaxy S6",
				pattern: "SM-G920"
			}, {
				label: "Galaxy S6 Edge",
				pattern: "SM-G925"
			}, {
				label: "Galaxy S7",
				pattern: "SM-G930"
			}, {
				label: "Galaxy S7 Edge",
				pattern: "SM-G935"
			}, "Google TV", "Lumia", "iPad",
				"iPod", "iPhone", "Kindle", {
				label: "Kindle Fire",
				pattern: "(?:Cloud9|Silk-Accelerated)"
			}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
				label: "Wii U",
				pattern: "WiiU"
			}, "Wii", "Xbox One", {
				label: "Xbox 360",
				pattern: "Xbox"
			}, "Xoom"
			]),
			F = function (b) {
				return k(b, function (b, c, k) {
					return b || (c[A] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + f(k) + "(?:\\b|\\w*\\d)", "i").exec(a)) && k
				})
			}({
				Apple: {
					iPad: 1,
					iPhone: 1,
					iPod: 1
				},
				Archos: {},
				Amazon: {
					Kindle: 1,
					"Kindle Fire": 1
				},
				Asus: {
					Transformer: 1
				},
				"Barnes & Noble": {
					Nook: 1
				},
				BlackBerry: {
					PlayBook: 1
				},
				Google: {
					"Google TV": 1,
					Nexus: 1
				},
				HP: {
					TouchPad: 1
				},
				HTC: {},
				LG: {},
				Microsoft: {
					Xbox: 1,
					"Xbox One": 1
				},
				Motorola: {
					Xoom: 1
				},
				Nintendo: {
					"Wii U": 1,
					Wii: 1
				},
				Nokia: {
					Lumia: 1
				},
				Samsung: {
					"Galaxy S": 1,
					"Galaxy S2": 1,
					"Galaxy S3": 1,
					"Galaxy S4": 1
				},
				Sony: {
					PlayStation: 1,
					"PlayStation Vita": 1
				}
			}),
			v = function (b) {
				return k(b, function (b, c) {
					var k = c.pattern || f(c);
					if (!b && (b = RegExp("\\b" + k + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
						var h = b,
							n = c.label || c,
							r = {
								"10.0": "10",
								"6.4": "10 Technical Preview",
								"6.3": "8.1",
								"6.2": "8",
								"6.1": "Server 2008 R2 / 7",
								"6.0": "Server 2008 / Vista",
								"5.2": "Server 2003 / XP 64-bit",
								"5.1": "XP",
								"5.01": "2000 SP1",
								"5.0": "2000",
								"4.0": "NT",
								"4.90": "ME"
							};
						k && n && /^Win/i.test(h) && !/^Windows Phone /i.test(h) && (r = r[/[\d.]+$/.exec(h)]) && (h = "Windows " + r);
						h = String(h);
						k && n && (h = h.replace(RegExp(k, "i"), n));
						b = h = d(h.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
							" $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return b
				})
			}(["Windows Phone", "Android", "CentOS", {
				label: "Chrome OS",
				pattern: "CrOS"
			}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
				"Windows 98;", "Windows "
			]);
		z && (z = [z]);
		F && !A && (A = h([F]));
		if (p = /\bGoogle TV\b/.exec(A)) A = p[0];
		/\bSimulator\b/i.test(a) && (A = (A ? A + " " : "") + "Simulator");
		"Opera Mini" == t && /\bOPiOS\b/.test(a) && q.push("running in Turbo/Uncompressed mode");
		"IE" == t && /\blike iPhone OS\b/.test(a) ? (p = g(a.replace(/like iPhone OS/, "")), F = p.manufacturer, A = p.product) : /^iP/.test(A) ? (t || (t = "Safari"), v = "iOS" + ((p = / OS ([\d_]+)/i.exec(a)) ? " " + p[1].replace(/_/g, ".") : "")) : "Konqueror" != t || /buntu/i.test(v) ? F && "Google" != F && (/Chrome/.test(t) &&
			!/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(v) && /^Chrome/.test(t) && /\bVersion\//i.test(a) ? (t = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == t ? (/\bMobi/i.test(a) || (v = "Android", q.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && q.unshift("accelerated")) : "PaleMoon" == t && (p = /\bFirefox\/([\d.]+)\b/.exec(a)) ? q.push("identifying as Firefox " + p[1]) : "Firefox" == t && (p = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), A || (A = p[1])) : !t || (p = !/\bMinefield\b/i.test(a) &&
				/\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !A && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(p + "/") + 8)) && (t = null), (p = A || F || v) && (A || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : p) + " Browser")) : "Electron" == t && (p = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && q.push("Chromium " + p) : v = "Kubuntu";
		m || (m = e(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(t), "(?:Firefox|Minefield|NetFront)"]));
		if (p = "iCab" == z && 3 < parseFloat(m) && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(z) && "WebKit" || !z && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == z && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") z = [p];
		"IE" == t && (p = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (t += " Mobile", v = "Windows Phone " + (/\+$/.test(p) ? p : p + ".x"), q.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (t = "IE Mobile", v = "Windows Phone 8.x",
			q.unshift("desktop mode"), m || (m = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != t && "Trident" == z && (p = /\brv:([\d.]+)/.exec(a)) && (t && q.push("identifying as " + t + (m ? " " + m : "")), t = "IE", m = p[1]);
		if (K) {
			if (l(r, "global"))
				if (L && (p = L.lang.System, N = p.getProperty("os.arch"), v = v || p.getProperty("os.name") + " " + p.getProperty("os.version")), P) {
					try {
						m = r.require("ringo/engine").version.join("."), t = "RingoJS"
					} catch (S) {
						(p = r.system) && p.global.system == r.system && (t = "Narwhal", v || (v = p[0].os || null))
					}
					t || (t = "Rhino")
				} else "object" == typeof r.process &&
					!r.process.browser && (p = r.process) && ("object" == typeof p.versions && ("string" == typeof p.versions.electron ? (q.push("Node " + p.versions.node), t = "Electron", m = p.versions.electron) : "string" == typeof p.versions.nw && (q.push("Chromium " + m, "Node " + p.versions.node), t = "NW.js", m = p.versions.nw)), t || (t = "Node.js", N = p.arch, v = p.platform, m = (m = /[\d.]+/.exec(p.version)) ? m[0] : null));
			else c(p = r.runtime) == C ? (t = "Adobe AIR", v = p.flash.system.Capabilities.os) : c(p = r.phantom) == T ? (t = "PhantomJS", m = (p = p.version || null) && p.major + "." + p.minor +
				"." + p.patch) : "number" == typeof Q.documentMode && (p = /\bTrident\/(\d+)/i.exec(a)) ? (m = [m, Q.documentMode], (p = +p[1] + 4) != m[1] && (q.push("IE " + m[1] + " mode"), z && (z[1] = ""), m[1] = p), m = "IE" == t ? String(m[1].toFixed(1)) : m[0]) : "number" == typeof Q.documentMode && /^(?:Chrome|Firefox)\b/.test(t) && (q.push("masking as " + t + " " + m), t = "IE", m = "11.0", z = ["Trident"], v = "Windows");
			v = v && d(v)
		}
		m && (p = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(m) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (K && x.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
			"a") && (O = /b/i.test(p) ? "beta" : "alpha", m = m.replace(RegExp(p + "\\+?$"), "") + ("beta" == O ? V : U) + (/\d+\+?/.exec(p) || ""));
		if ("Fennec" == t || "Firefox" == t && /\b(?:Android|Firefox OS)\b/.test(v)) t = "Firefox Mobile";
		else if ("Maxthon" == t && m) m = m.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(A)) "Xbox 360" == A && (v = null), "Xbox 360" == A && /\bIEMobile\b/.test(a) && q.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(t) && (!t || A || /Browser|Mobi/.test(t)) || "Windows CE" != v && !/Mobi/i.test(a))
			if ("IE" == t && K) try {
				null === r.external &&
					q.unshift("platform preview")
			} catch (S) {
				q.unshift("embedded")
			} else (/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(a)) && (p = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || m) ? (p = [p, /BB10/.test(a)], v = (p[1] ? (A = null, F = "BlackBerry") : "Device Software") + " " + p[0], m = null) : this != b && "Wii" != A && (K && J || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == t && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == t && (v && !/^Win/.test(v) && 5.5 < m || /\bWindows XP\b/.test(v) && 8 < m || 8 == m && !/\bTrident\b/.test(a))) && !u.test(p =
				g.call(b, a.replace(u, "") + ";")) && p.name && (p = "ing as " + p.name + ((p = p.version) ? " " + p : ""), u.test(t) ? (/\bIE\b/.test(p) && "Mac OS" == v && (v = null), p = "identify" + p) : (p = "mask" + p, t = M ? d(M.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(p) && (v = null), K || (m = null)), z = ["Presto"], q.push(p));
		else t += " Mobile";
		if (p = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
			p = [parseFloat(p.replace(/\.(\d)$/, ".0$1")), p];
			if ("Safari" == t && "+" == p[1].slice(-1)) t = "WebKit Nightly", O = "alpha", m = p[1].slice(0, -1);
			else if (m == p[1] || m == (p[2] =
				(/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) m = null;
			p[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
			537.36 == p[0] && 537.36 == p[2] && 28 <= parseFloat(p[1]) && "WebKit" == z && (z = ["Blink"]);
			K && (w || p[1]) ? (z && (z[1] = "like Chrome"), p = p[1] || (p = p[0], 530 > p ? 1 : 532 > p ? 2 : 532.05 > p ? 3 : 533 > p ? 4 : 534.03 > p ? 5 : 534.07 > p ? 6 : 534.1 > p ? 7 : 534.13 > p ? 8 : 534.16 > p ? 9 : 534.24 > p ? 10 : 534.3 > p ? 11 : 535.01 > p ? 12 : 535.02 > p ? "13+" : 535.07 > p ? 15 : 535.11 > p ? 16 : 535.19 > p ? 17 : 536.05 > p ? 18 : 536.1 > p ? 19 : 537.01 > p ? 20 : 537.11 > p ? "21+" : 537.13 > p ? 23 : 537.18 > p ? 24 : 537.24 > p ? 25 : 537.36 > p ? 26 : "Blink" !=
				z ? "27" : "28")) : (z && (z[1] = "like Safari"), p = (p = p[0], 400 > p ? 1 : 500 > p ? 2 : 526 > p ? 3 : 533 > p ? 4 : 534 > p ? "4+" : 535 > p ? 5 : 537 > p ? 6 : 538 > p ? 7 : 601 > p ? 8 : "8"));
			z && (z[1] += " " + (p += "number" == typeof p ? ".x" : /[.+]/.test(p) ? "" : "+"));
			"Safari" == t && (!m || 45 < parseInt(m)) && (m = p)
		}
		"Opera" == t && (p = /\bzbov|zvav$/.exec(v)) ? (t += " ", q.unshift("desktop mode"), "zvav" == p ? (t += "Mini", m = null) : t += "Mobile", v = v.replace(RegExp(" *" + p + "$"), "")) : "Safari" == t && /\bChrome\b/.exec(z && z[1]) && (q.unshift("desktop mode"), t = "Chrome Mobile", m = null, /\bOS X\b/.test(v) ? (F =
			"Apple", v = "iOS 4.3+") : v = null);
		m && 0 == m.indexOf(p = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + p + "-") && (v = String(v.replace(p, "")).replace(/^ +| +$/g, ""));
		z && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || "Safari" != t && /^iOS/.test(v) && /\bSafari\b/.test(z[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(t) && z[1]) && (p = z[z.length - 1]) && q.push(p);
		q.length && (q = ["(" + q.join("; ") + ")"]);
		F && A && 0 > A.indexOf(F) && q.push("on " + F);
		A && q.push((/^on /.test(q[q.length -
			1]) ? "" : "on ") + A);
		if (v) {
			var R = (p = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - p[0].length - 1);
			v = {
				architecture: 32,
				family: p && !R ? v.replace(p[0], "") : v,
				version: p ? p[1] : null,
				toString: function () {
					var b = this.version;
					return this.family + (b && !R ? " " + b : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		} (p = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + p), "")), t && (/\bWOW64\b/i.test(a) || K && /\w(?:86|32)$/.test(x.cpuClass || x.platform) && !/\bWin64; x64\b/i.test(a)) &&
			q.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == t && 39 <= parseFloat(m) && (v.architecture = 64);
		a || (a = null);
		r = {};
		r.description = a;
		r.layout = z && z[0];
		r.manufacturer = F;
		r.name = t;
		r.prerelease = O;
		r.product = A;
		r.ua = a;
		r.version = t && m;
		r.os = v || {
			architecture: null,
			family: null,
			version: null,
			toString: function () {
				return "null"
			}
		};
		r.parse = g;
		r.toString = function () {
			return this.description || ""
		};
		r.version && q.unshift(m);
		r.name && q.unshift(t);
		v && t && (v != String(v).split(" ")[0] || v != t.split(" ")[0] && !A) && q.push(A ? "(" + v + ")" : "on " +
			v);
		q.length && (r.description = q.join(" "));
		return r
	}
	var h = {
		"function": !0,
		object: !0
	},
		n = h[typeof window] && window || this,
		r = h[typeof exports] && exports;
	h = h[typeof module] && module && !module.nodeType && module;
	var q = r && h && "object" == typeof global && global;
	!q || q.global !== q && q.window !== q && q.self !== q || (n = q);
	var x = Math.pow(2, 53) - 1,
		u = /\bOpera/;
	q = Object.prototype;
	var m = q.hasOwnProperty,
		y = q.toString,
		w = g();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = w, define(function () {
		return w
	})) : r &&
		h ? b(w, function (b, a) {
			r[a] = b
		}) : n.platform = w
}).call(this);
var s_iScaleFactor = 1,
	s_oCanvasLeft, s_oCanvasTop, s_iOffsetX = 0,
	s_iOffsetY = 0,
	s_bIsIphone = !1;
(function (a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
	navigator.vendor || window.opera);
$(window).resize(function () {
	sizeHandler()
});

function trace(a) {
	console.log(a)
}

function isChrome() {
	return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
	var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
	for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
		if (navigator.platform === a.pop()) return !0;
	return s_bIsIphone = !1
}

function getSize(a) {
	var e = a.toLowerCase(),
		d = window.document,
		b = d.documentElement;
	if (void 0 === window["inner" + a]) a = b["client" + a];
	else if (window["inner" + a] != b["client" + a]) {
		var c = d.createElement("body");
		c.id = "vpw-test-b";
		c.style.cssText = "overflow:scroll";
		var l = d.createElement("div");
		l.id = "vpw-test-d";
		l.style.cssText = "position:absolute;top:-1000px";
		l.innerHTML = "<style>@media(" + e + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
		c.appendChild(l);
		b.insertBefore(c, d.head);
		a = 7 == l["offset" + a] ? b["client" + a] : window["inner" + a];
		b.removeChild(c)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
	var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < a ? a : 0
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
		var e = getSize("Width");
		_checkOrientation(e, a);
		var d = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH),
			b = CANVAS_WIDTH * d;
		d *= CANVAS_HEIGHT;
		if (d < a) {
			var c = a - d;
			d += c;
			b += CANVAS_WIDTH / CANVAS_HEIGHT * c
		} else b < e && (c = e - b, b += c, d += CANVAS_HEIGHT / CANVAS_WIDTH * c);
		c = a / 2 - d / 2;
		var l = e / 2 - b / 2,
			f = CANVAS_WIDTH / b;
		if (l * f < -EDGEBOARD_X || c * f < -EDGEBOARD_Y) d = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
			e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * d, d *= CANVAS_HEIGHT, c = (a - d) / 2, l = (e - b) / 2, f = CANVAS_WIDTH / b;
		s_iOffsetX = -1 * l * f;
		s_iOffsetY = -1 * c * f;
		0 <= c && (s_iOffsetY = 0);
		0 <= l && (s_iOffsetX = 0);
		null !== s_oGame && s_oGame.refreshButtonPos();
		null !== s_oMenu && s_oMenu.refreshButtonPos();
		null !== s_oBetPanel && s_oBetPanel.refreshButtonPos();
		s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * d, canvas.style.width = b + "px", canvas.style.height = d + "px", s_iScaleFactor = 2 * Math.min(b /
			CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > c || (c = (a - d) / 2);
		$("#canvas").css("top", c + "px");
		$("#canvas").css("left", l + "px");
		fullscreenHandler()
	}
}

function _checkOrientation(a, e) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function createBitmap(a, e, d) {
	var b = new createjs.Bitmap(a),
		c = new createjs.Shape;
	e && d ? c.graphics.beginFill("#fff").drawRect(0, 0, e, d) : c.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	b.hitArea = c;
	return b
}

function createSprite(a, e, d, b, c, l) {
	a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
	e = new createjs.Shape;
	e.graphics.beginFill("#000000").drawRect(-d, -b, c, l);
	a.hitArea = e;
	return a
}

function randomFloatBetween(a, e, d) {
	"undefined" === typeof d && (d = 2);
	return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(d))
}

function formatTime(a) {
	a /= 1E3;
	var e = Math.floor(a / 60);
	a = Math.floor(a - 60 * e);
	var d = "";
	d = 10 > e ? d + ("0" + e + ":") : d + (e + ":");
	return 10 > a ? d + ("0" + a) : d + a
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
	for (var e = a.length, d, b; 0 < e;) b = Math.floor(Math.random() * e), e--, d = a[e], a[e] = a[b], a[b] = d;
	return a
}
NoClickDelay.prototype = {
	handleEvent: function (a) {
		switch (a.type) {
			case "touchstart":
				this.onTouchStart(a);
				break;
			case "touchmove":
				this.onTouchMove(a);
				break;
			case "touchend":
				this.onTouchEnd(a)
		}
	},
	onTouchStart: function (a) {
		a.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function (a) {
		this.moved = !0
	},
	onTouchEnd: function (a) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend",
			this, !1);
		if (!this.moved) {
			a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
			3 == a.nodeType && (a = a.parentNode);
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", !0, !0);
			a.dispatchEvent(e)
		}
	}
};

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var e = window.location.search.substring(1).split("&"), d = 0; d < e.length; d++) {
		var b = e[d].split("=");
		if (b[0] == a) return b[1]
	}
}
Array.prototype.sortOn = function () {
	var a = this.slice();
	if (!arguments.length) return a.sort();
	var e = Array.prototype.slice.call(arguments);
	return a.sort(function (a, b) {
		for (var c = e.slice(), d = c.shift(); a[d] == b[d] && c.length;) d = c.shift();
		return a[d] == b[d] ? 0 : a[d] > b[d] ? 1 : -1
	})
};

function playSound(a, e, d) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(e), s_aSounds[a].loop(d), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(e)
}

function setMute(a, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(e)
}

function pauseSound(a) {
	s_aSounds[a].pause()
}

function easeLinear(a, e, d, b) {
	return d * a / b + e
}

function collisionWithCircle(a, e, d) {
	var b = a.getX() - e.getX(),
		c = a.getY() - e.getY();
	return Math.sqrt(b * b + c * c) < a.getCollision() * d + e.getCollision() * d ? !0 : !1
}
(function () {
	function a(a) {
		var b = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in b ? document.body.className = b[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var e = "hidden";
	e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in
		document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function fullscreenHandler() {
	ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oBetPanel && s_oBetPanel.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function () {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oBetPanel && s_oBetPanel.resetFullscreenBut()
});

function CSpriteLibrary() {
	var a = {},
		e, d, b, c, l, f;
	this.init = function (a, g, h) {
		e = {};
		b = d = 0;
		c = a;
		l = g;
		f = h
	};
	this.addSprite = function (b, c) {
		if (!a.hasOwnProperty(b)) {
			var k = new Image;
			a[b] = e[b] = {
				szPath: c,
				oSprite: k,
				bLoaded: !1
			};
			d++
		}
	};
	this.getSprite = function (b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function () {
		d = 0;
		l.call(f)
	};
	this._onSpriteLoaded = function () {
		c.call(f);
		++b === d && this._onSpritesLoaded()
	};
	this.loadSprites = function () {
		for (var b in e) e[b].oSprite.oSpriteLibrary = this, e[b].oSprite.szKey =
			b, e[b].oSprite.onload = function () {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, e[b].oSprite.onerror = function (b) {
				var a = b.currentTarget;
				setTimeout(function () {
					e[a.szKey].oSprite.src = e[a.szKey].szPath
				}, 500)
			}, e[b].oSprite.src = e[b].szPath
	};
	this.setLoaded = function (b) {
		a[b].bLoaded = !0
	};
	this.isLoaded = function (b) {
		return a[b].bLoaded
	};
	this.getNumSprites = function () {
		return d
	}
}
var CANVAS_WIDTH = 1216,
	CANVAS_HEIGHT = 832,
	EDGEBOARD_X = 40,
	EDGEBOARD_Y = 172,
	FPS = 30,
	FPS_TIME = 1E3 / FPS,
	DISABLE_SOUND_MOBILE = !1,
	PRIMARY_FONT = "impactregular",
	SECONDARY_FONT = "ds-digitalbold",
	TERTIARY_FONT = "motorwerkregular",
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_BET_PANEL = 2,
	STATE_GAME = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	FICHE_WIDTH = 44,
	COLOR_FICHES = "#ff7706 #ffb600 #000 #06a800 #d50000 #444444".split(" "),
	CHIP_VALUES, BET_PANEL_X = 40,
	BET_PANEL_Y = 165,
	BET_PANEL_WIDTH,
	BET_PANEL_HEIGHT, HORSE_WIDTH = 326,
	HORSE_HEIGHT = 212,
	NUM_CHIPS, NUM_HORSES, MIN_BET, MAX_BET, WIN_OCCURRENCE, NUM_TRACK_BG = 397,
	ARRIVAL_X = 477,
	TIME_CHECK_RANK = 2E3,
	HORSE_DATA = {
		horse_names: "engineer;pin;doughnut;mayhem;last things;chatterbox;hypno;croquette".split(";"),
		odd_win_bet: [3.7, 5.5, 2.2, 11.75, 17.25, 8.75, 7.15, 6.15],
		odd_place_bet: [1.95, 2.55, 1.25, 5.5, 7.75, 3.05, 2.5, 2.05],
		odd_show_bet: [1.25, 1.7, 1.09, 2.55, 4, 1.75, 1.55, 1.35],
		forecast: [{
			first: 1,
			second: 2,
			odd: 20
		}, {
			first: 1,
			second: 3,
			odd: 6.25
		}, {
			first: 1,
			second: 4,
			odd: 60
		},
		{
			first: 1,
			second: 5,
			odd: 80
		}, {
			first: 1,
			second: 6,
			odd: 23
		}, {
			first: 1,
			second: 7,
			odd: 20
		}, {
			first: 1,
			second: 8,
			odd: 15
		}, {
			first: 2,
			second: 1,
			odd: 28
		}, {
			first: 2,
			second: 3,
			odd: 10.25
		}, {
			first: 2,
			second: 4,
			odd: 65
		}, {
			first: 2,
			second: 5,
			odd: 68
		}, {
			first: 2,
			second: 6,
			odd: 58
		}, {
			first: 2,
			second: 7,
			odd: 42
		}, {
			first: 2,
			second: 8,
			odd: 32
		}, {
			first: 3,
			second: 1,
			odd: 5.75
		}, {
			first: 3,
			second: 2,
			odd: 8.75
		}, {
			first: 3,
			second: 4,
			odd: 26
		}, {
			first: 3,
			second: 5,
			odd: 31
		}, {
			first: 3,
			second: 6,
			odd: 19
		}, {
			first: 3,
			second: 7,
			odd: 15
		}, {
			first: 3,
			second: 8,
			odd: 10
		}, {
			first: 4,
			second: 1,
			odd: 84
		},
		{
			first: 4,
			second: 2,
			odd: 56
		}, {
			first: 4,
			second: 3,
			odd: 23
		}, {
			first: 4,
			second: 5,
			odd: 80
		}, {
			first: 4,
			second: 6,
			odd: 65
		}, {
			first: 4,
			second: 7,
			odd: 55
		}, {
			first: 4,
			second: 8,
			odd: 40
		}, {
			first: 5,
			second: 1,
			odd: 70
		}, {
			first: 5,
			second: 2,
			odd: 70
		}, {
			first: 5,
			second: 3,
			odd: 68
		}, {
			first: 5,
			second: 4,
			odd: 84
		}, {
			first: 5,
			second: 6,
			odd: 80
		}, {
			first: 5,
			second: 7,
			odd: 70
		}, {
			first: 5,
			second: 8,
			odd: 50
		}, {
			first: 6,
			second: 1,
			odd: 48
		}, {
			first: 6,
			second: 2,
			odd: 58
		}, {
			first: 6,
			second: 3,
			odd: 13
		}, {
			first: 6,
			second: 4,
			odd: 70
		}, {
			first: 6,
			second: 5,
			odd: 80
		}, {
			first: 6,
			second: 7,
			odd: 55
		}, {
			first: 6,
			second: 8,
			odd: 40
		}, {
			first: 7,
			second: 1,
			odd: 40
		}, {
			first: 7,
			second: 2,
			odd: 50
		}, {
			first: 7,
			second: 3,
			odd: 10
		}, {
			first: 7,
			second: 4,
			odd: 50
		}, {
			first: 7,
			second: 5,
			odd: 55
		}, {
			first: 7,
			second: 6,
			odd: 40
		}, {
			first: 7,
			second: 8,
			odd: 35
		}, {
			first: 8,
			second: 1,
			odd: 38
		}, {
			first: 8,
			second: 2,
			odd: 48
		}, {
			first: 8,
			second: 3,
			odd: 8
		}, {
			first: 8,
			second: 4,
			odd: 50
		}, {
			first: 8,
			second: 5,
			odd: 40
		}, {
			first: 8,
			second: 6,
			odd: 35
		}, {
			first: 8,
			second: 7,
			odd: 30
		}
		]
	},
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, SOUNDTRACK_VOLUME_IN_GAME = 1;

function CGameSettings(a) {
	var e, d, b, c, l, f, k, g, h;
	this._init = function (b) {
		h = b;
		b = h.horse_names;
		NUM_HORSES = b.length;
		e = [];
		for (var a = 0; a < NUM_HORSES; a++) e[a] = b[a];
		this._initSimpleOdd();
		this._initForecastOdd();
		this._initPaths();
		this._initHorseInfo();
		f = CHIP_VALUES
	};
	this._initSimpleOdd = function () {
		var a = h.odd_win_bet,
			k = h.odd_place_bet,
			f = h.odd_show_bet;
		d = [];
		b = [];
		c = [];
		for (var e = 0; e < a.length; e++) d[e] = a[e], b[e] = k[e], c[e] = f[e]
	};
	this._initForecastOdd = function () {
		var b = h.forecast;
		l = [];
		for (var a = 0; a < NUM_HORSES; a++) l[a] = [];
		for (a = 0; a < b.length; a++) l[b[a].first - 1][b[a].second - 1] = b[a].odd
	};
	this._initPaths = function () {
		k = [];
		var b = [{
			x: 230,
			frame: 30
		}, {
			x: 500,
			frame: 160
		}, {
			x: 600,
			frame: 190
		}, {
			x: 400,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}],
			a = [{
				x: 250,
				frame: 30
			}, {
				x: 600,
				frame: 180
			}, {
				x: 650,
				frame: 190
			}, {
				x: 450,
				frame: 180
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
				frame: 210
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 35
			}],
			c = [{
				x: 170,
				frame: 30
			}, {
				x: 400,
				frame: 130
			}, {
				x: 450,
				frame: 220
			}, {
				x: 400,
				frame: 140
			}, {
				x: 300,
				frame: 130
			},
			{
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 250,
				frame: 140
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 40
			}
			],
			d = [{
				x: 190,
				frame: 30
			}, {
				x: 340,
				frame: 130
			}, {
				x: 360,
				frame: 310
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 390,
				frame: 320
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 45
			}],
			h = [{
				x: 220,
				frame: 30
			}, {
				x: 350,
				frame: 260
			}, {
				x: 480,
				frame: 200
			}, {
				x: 320,
				frame: 100
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 450,
				frame: 200
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 50
			}],
			f = [{
				x: 210,
				frame: 30
			}, {
				x: 260,
				frame: 270
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 600,
				frame: 490
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 55
			}],
			e = [{
				x: 220,
				frame: 30
			}, {
				x: 290,
				frame: 270
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 800,
				frame: 490
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 60
			}],
			g = [{
				x: 190,
				frame: 30
			}, {
				x: 200,
				frame: 270
			}, {
				x: ARRIVAL_X - HORSE_WIDTH / 2 - 1E3,
				frame: 490
			}, {
				x: CANVAS_WIDTH + HORSE_WIDTH,
				frame: 65
			}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 30
		}, {
			x: 450,
			frame: 180
		}, {
			x: 500,
			frame: 170
		}, {
			x: 400,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 30
		}, {
			x: 600,
			frame: 200
		},
		{
			x: 550,
			frame: 180
		}, {
			x: 350,
			frame: 170
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 200,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}
		];
		c = [{
			x: 170,
			frame: 30
		}, {
			x: 250,
			frame: 150
		}, {
			x: 350,
			frame: 210
		}, {
			x: 450,
			frame: 140
		}, {
			x: 350,
			frame: 120
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 350,
			frame: 140
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 30
		}, {
			x: 300,
			frame: 150
		}, {
			x: 360,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 490,
			frame: 310
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 30
		}, {
			x: 350,
			frame: 280
		}, {
			x: 400,
			frame: 180
		}, {
			x: 320,
			frame: 100
		},
		{
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}
		];
		f = [{
			x: 210,
			frame: 30
		}, {
			x: 160,
			frame: 280
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 700,
			frame: 480
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 220,
			frame: 30
		}, {
			x: 200,
			frame: 270
		}, {
			x: -70,
			frame: 190
		}, {
			x: 20,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 850,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 210,
			frame: 30
		}, {
			x: 0,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 900,
			frame: 470
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 30
		}, {
			x: 500,
			frame: 180
		}, {
			x: 600,
			frame: 180
		}, {
			x: 600,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 30
		}, {
			x: 600,
			frame: 200
		}, {
			x: 650,
			frame: 180
		}, {
			x: 500,
			frame: 180
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 170,
			frame: 30
		}, {
			x: 400,
			frame: 150
		}, {
			x: 450,
			frame: 210
		}, {
			x: 300,
			frame: 140
		}, {
			x: 350,
			frame: 130
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 300,
			frame: 130
		}, {
			x: CANVAS_WIDTH +
				HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 30
		}, {
			x: 340,
			frame: 150
		}, {
			x: 360,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 460,
			frame: 310
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 30
		}, {
			x: 350,
			frame: 280
		}, {
			x: 480,
			frame: 180
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 550,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 30
		}, {
			x: 200,
			frame: 280
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 560,
			frame: 480
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 200,
			frame: 30
		}, {
			x: 100,
			frame: 270
		}, {
			x: 80,
			frame: 190
		}, {
			x: 20,
			frame: 100
		},
		{
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 850,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}
		];
		g = [{
			x: 210,
			frame: 30
		}, {
			x: 20,
			frame: 280
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 1E3,
			frame: 480
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 330,
			frame: 30
		}, {
			x: 450,
			frame: 180
		}, {
			x: 550,
			frame: 170
		}, {
			x: 650,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 30
		}, {
			x: 350,
			frame: 200
		}, {
			x: 450,
			frame: 180
		}, {
			x: 600,
			frame: 170
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 30
		}, {
			x: 400,
			frame: 150
		}, {
			x: 450,
			frame: 200
		}, {
			x: 600,
			frame: 140
		}, {
			x: 500,
			frame: 130
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 350,
			frame: 140
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 290,
			frame: 30
		}, {
			x: 340,
			frame: 150
		}, {
			x: 360,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 510,
			frame: 310
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 30
		}, {
			x: 150,
			frame: 280
		}, {
			x: 400,
			frame: 180
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH /
				2 - 550,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 30
		}, {
			x: 60,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 470
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 220,
			frame: 30
		}, {
			x: 90,
			frame: 280
		}, {
			x: 420,
			frame: 180
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 850,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 210,
			frame: 30
		}, {
			x: 120,
			frame: 280
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 900,
			frame: 480
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 30
		}, {
			x: 350,
			frame: 180
		}, {
			x: 400,
			frame: 170
		}, {
			x: 600,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 30
		}, {
			x: 350,
			frame: 200
		}, {
			x: 450,
			frame: 170
		}, {
			x: 500,
			frame: 180
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
			frame: 210
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 30
		}, {
			x: 400,
			frame: 150
		}, {
			x: 450,
			frame: 200
		}, {
			x: 600,
			frame: 140
		}, {
			x: 500,
			frame: 130
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 250,
			frame: 140
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 30
		}, {
			x: 340,
			frame: 140
		}, {
			x: 360,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 390,
			frame: 320
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 30
		}, {
			x: 350,
			frame: 270
		}, {
			x: 400,
			frame: 190
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 550,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 30
		}, {
			x: 260,
			frame: 280
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 480
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 240,
			frame: 30
		}, {
			x: 350,
			frame: 270
		}, {
			x: 400,
			frame: 190
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH /
				2 - 750,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 180,
			frame: 30
		}, {
			x: 260,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 1050,
			frame: 470
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 50
		}, {
			x: 350,
			frame: 200
		}, {
			x: 400,
			frame: 100
		}, {
			x: 500,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 240
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 100
		}, {
			x: 350,
			frame: 150
		}, {
			x: 450,
			frame: 140
		}, {
			x: 500,
			frame: 200
		}, {
			x: ARRIVAL_X -
				HORSE_WIDTH / 2 - 150,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 50
		}, {
			x: 400,
			frame: 140
		}, {
			x: 450,
			frame: 200
		}, {
			x: 400,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 250,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 30
		}, {
			x: 340,
			frame: 160
		}, {
			x: 360,
			frame: 300
		}, {
			x: 380,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 390,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 100
		}, {
			x: 350,
			frame: 200
		}, {
			x: 400,
			frame: 190
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 550,
			frame: 200
		}, {
			x: CANVAS_WIDTH +
				HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 50
		}, {
			x: 260,
			frame: 300
		}, {
			x: 300,
			frame: 190
		}, {
			x: 220,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 150
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 200,
			frame: 100
		}, {
			x: 300,
			frame: 200
		}, {
			x: 400,
			frame: 190
		}, {
			x: 300,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 750,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 230,
			frame: 50
		}, {
			x: 280,
			frame: 290
		}, {
			x: 300,
			frame: 200
		}, {
			x: 240,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 780,
			frame: 150
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 50
		}, {
			x: 430,
			frame: 320
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 420
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 100
		}, {
			x: 350,
			frame: 150
		}, {
			x: 450,
			frame: 140
		}, {
			x: 500,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 250,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 50
		}, {
			x: 200,
			frame: 140
		}, {
			x: 450,
			frame: 400
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 350,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 30
		}, {
			x: 240,
			frame: 160
		}, {
			x: 360,
			frame: 300
		}, {
			x: 380,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 490,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 100
		}, {
			x: 350,
			frame: 200
		}, {
			x: 400,
			frame: 190
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 50
		}, {
			x: 260,
			frame: 300
		}, {
			x: 300,
			frame: 210
		}, {
			x: 220,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 750,
			frame: 130
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 260,
			frame: 100
		}, {
			x: 350,
			frame: 200
		}, {
			x: 300,
			frame: 190
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 850,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 10,
			frame: 50
		}, {
			x: 260,
			frame: 270
		}, {
			x: 300,
			frame: 200
		}, {
			x: 200,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 950,
			frame: 170
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 230,
			frame: 50
		}, {
			x: 250,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 250,
			frame: 50
		}, {
			x: 430,
			frame: 300
		}, {
			x: ARRIVAL_X -
				HORSE_WIDTH / 2 - 250,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 50
		}, {
			x: 330,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 450,
			frame: 450
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 190,
			frame: 50
		}, {
			x: 230,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 590,
			frame: 450
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 50
		}, {
			x: 300,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 450
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 210,
			frame: 50
		}, {
			x: 130,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 750,
			frame: 450
		},
		{
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}
		];
		e = [{
			x: 180,
			frame: 50
		}, {
			x: 280,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 800,
			frame: 450
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 190,
			frame: 50
		}, {
			x: 150,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 950,
			frame: 450
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 210,
			frame: 50
		}, {
			x: 130,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}];
		a = [{
			x: 220,
			frame: 50
		},
		{
			x: 300,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}
		];
		c = [{
			x: 270,
			frame: 50
		}, {
			x: 330,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 250,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 250,
			frame: 50
		}, {
			x: 430,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 390,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 190,
			frame: 50
		}, {
			x: 190,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 550,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}];
		f = [{
			x: 230,
			frame: 50
		}, {
			x: 250,
			frame: 300
		}, {
			x: ARRIVAL_X -
				HORSE_WIDTH / 2 - 650,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 190,
			frame: 50
		}, {
			x: 220,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 950,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 200,
			frame: 50
		}, {
			x: 250,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 1E3,
			frame: 440
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		});
		b = [{
			x: 330,
			frame: 30
		}, {
			x: 450,
			frame: 180
		}, {
			x: 550,
			frame: 180
		}, {
			x: 650,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2,
			frame: 200
		},
		{
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 30
		}
		];
		a = [{
			x: 250,
			frame: 90
		}, {
			x: 450,
			frame: 300
		}, {
			x: 600,
			frame: 200
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 150,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 35
		}];
		c = [{
			x: 270,
			frame: 30
		}, {
			x: 400,
			frame: 150
		}, {
			x: 450,
			frame: 200
		}, {
			x: 600,
			frame: 140
		}, {
			x: 500,
			frame: 130
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 300,
			frame: 140
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 40
		}];
		d = [{
			x: 290,
			frame: 30
		}, {
			x: 340,
			frame: 150
		}, {
			x: 360,
			frame: 300
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 510,
			frame: 310
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 45
		}];
		h = [{
			x: 220,
			frame: 30
		},
		{
			x: 350,
			frame: 280
		}, {
			x: 400,
			frame: 180
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 650,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 50
		}
		];
		f = [{
			x: 310,
			frame: 30
		}, {
			x: 400,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 750,
			frame: 470
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 55
		}];
		e = [{
			x: 240,
			frame: 30
		}, {
			x: 300,
			frame: 280
		}, {
			x: 350,
			frame: 180
		}, {
			x: 320,
			frame: 100
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 800,
			frame: 200
		}, {
			x: CANVAS_WIDTH + HORSE_WIDTH,
			frame: 60
		}];
		g = [{
			x: 210,
			frame: 30
		}, {
			x: 300,
			frame: 290
		}, {
			x: ARRIVAL_X - HORSE_WIDTH / 2 - 850,
			frame: 470
		}, {
			x: CANVAS_WIDTH +
				HORSE_WIDTH,
			frame: 65
		}];
		k.push({
			place_1: b,
			place_2: a,
			place_3: c,
			place_4: d,
			place_5: h,
			place_6: f,
			place_7: e,
			place_8: g
		})
	};
	this._initHorseInfo = function () {
		g = [];
		g[0] = {
			start: new createjs.Point(193, 350),
			scale: .53
		};
		g[1] = {
			start: new createjs.Point(170, 360),
			scale: .59
		};
		g[2] = {
			start: new createjs.Point(144, 372),
			scale: .65
		};
		g[3] = {
			start: new createjs.Point(114, 385),
			scale: .71
		};
		g[4] = {
			start: new createjs.Point(76, 400),
			scale: .78
		};
		g[5] = {
			start: new createjs.Point(30, 415),
			scale: .85
		};
		g[6] = {
			start: new createjs.Point(-10, 432),
			scale: .92
		};
		g[7] = {
			start: new createjs.Point(-66, 452),
			scale: 1
		}
	};
	this.getIndexForFiches = function (b) {
		for (var a = 0, c = 0; c < f.length; c++) f[c] === b && (a = c);
		return a
	};
	this.getHorsePercentageArray = function () {
		for (var b = [], a = 0; a < d.length; a++)
			for (var c = Math.floor(d[a]), h = 0; h < c; h++) b.push(a);
		return b = shuffle(b)
	};
	this.getHorseName = function (b) {
		return e[b]
	};
	this.getAllHorseNames = function () {
		return e
	};
	this.getOddWin = function (b) {
		return d[b]
	};
	this.getOddPlace = function (a) {
		return b[a]
	};
	this.getOddShow = function (b) {
		return c[b]
	};
	this.getForecastOdd =
		function (b, a) {
			return l[b][a]
		};
	this.getRandomPath = function () {
		return k[Math.floor(Math.random() * k.length)]
	};
	this.getHorseInfo = function (b) {
		return g[b]
	};
	s_oGameSettings = this;
	this._init(a)
}
var s_oGameSettings = null,
	TEXT_CURRENCY = "$",
	TEXT_START_RACE = "START RACE",
	TEXT_CLEAR_BET = "CLEAR BET",
	TEXT_MONEY = "MONEY",
	TEXT_BET = "BET",
	TEXT_MIN_BET = "MIN BET",
	TEXT_MAX_BET = "MAX BET",
	TEXT_TRAP = "TRAP",
	TEXT_ODDS = "ODDS",
	TEXT_WINS = "WINS",
	TEXT_PLACE = "PLACE",
	TEXT_SHOW = "SHOW",
	TEXT_WIN = "WIN",
	TEXT_NO_WIN = "NO WIN",
	TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
	TEXT_NO_MONEY = "NOT ENOUGH MONEY!!",
	TEXT_ERR_MAX_BET = "YOUR BET IS HIGHER THAN THE MAXIMUM ONE!!",
	TEXT_ERR_MIN_BET = "YOUR BET IS LOWER THAN THE MINIMUM ONE!!",
	TEXT_ARE_YOU_SURE =
		"ALL YOUR BETS WILL BE LOST!!\nARE YOU SURE?",
	TEXT_PRELOADER_CONTINUE = "START",
	TEXT_RECHARGE = "RECHARGE";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
	var a, e, d, b, c, l, f, k, g, h;
	this._init = function () {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
		s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
		s_oSpriteLibrary.loadSprites();
		h = new createjs.Container;
		s_oStage.addChild(h)
	};
	this.unload = function () {
		h.removeAllChildren();
		g.unload()
	};
	this._onImagesLoaded = function () { };
	this._onAllImagesLoaded = function () {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function () {
		var n = new createjs.Shape;
		n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.addChild(n);
		n = s_oSpriteLibrary.getSprite("200x200");
		f = createBitmap(n);
		f.regX = .5 * n.width;
		f.regY = .5 * n.height;
		f.x = CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT / 2 - 140;
		h.addChild(f);
		k = new createjs.Shape;
		k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
		h.addChild(k);
		f.mask = k;
		n = s_oSpriteLibrary.getSprite("progress_bar");
		b = createBitmap(n);
		b.x = CANVAS_WIDTH / 2 - n.width / 2;
		b.y = CANVAS_HEIGHT / 2 + 90;
		h.addChild(b);
		a = n.width;
		e = n.height;
		c = new createjs.Shape;
		c.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, e);
		h.addChild(c);
		b.mask = c;
		d = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
		d.x = CANVAS_WIDTH / 2;
		d.y = CANVAS_HEIGHT / 2 + 140;
		d.textBaseline = "alphabetic";
		d.textAlign = "center";
		h.addChild(d);
		n = s_oSpriteLibrary.getSprite("but_start");
		g = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
			2 + 40, n, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 50, h);
		g.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
		g.setVisible(!1);
		l = new createjs.Shape;
		l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.addChild(l);
		createjs.Tween.get(l).to({
			alpha: 0
		}, 500).call(function () {
			createjs.Tween.removeTweens(l);
			h.removeChild(l)
		})
	};
	this._onButStartRelease = function () {
		s_oMain._onRemovePreloader()
	};
	this.refreshLoader = function (h) {
		d.text = h + "%";
		100 === h && (s_oMain._onRemovePreloader(), d.visible = !1, b.visible = !1);
		c.graphics.clear();
		h = Math.floor(h * a / 100);
		c.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, h, e)
	};
	this._init()
}

function CMain(a) {
	var e, d = 0,
		b = 0,
		c = STATE_LOADING,
		l, f;
	this.initContainer = function () {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = !1;
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(10), $("body").on("contextmenu", "#canvas", function (b) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.setFPS(FPS);
		navigator.userAgent.match(/Windows Phone/i) &&
			(DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		l = new CPreloader
	};
	this.preloaderReady = function () {
		s_oGameSettings = new CGameSettings(HORSE_DATA);
		s_oBetList = new CBetList;
		s_oMain._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds();
		e = !0
	};
	this.soundLoaded = function () {
		d++;
		l.refreshLoader(Math.floor(d / b * 100))
	};
	this._initSounds = function () {
		Howler.mute(!s_bAudioActive);
		s_aSoundsInfo = [];
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "chip",
			loop: !1,
			volume: 1,
			ingamename: "chip"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "click",
			loop: !1,
			volume: 1,
			ingamename: "click"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "start_race",
			loop: !1,
			volume: 1,
			ingamename: "start_race"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "photo",
			loop: !1,
			volume: 1,
			ingamename: "photo"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		b += s_aSoundsInfo.length;
		s_aSounds = [];
		for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a],
			!1)
	};
	this.tryToLoadSound = function (b, a) {
		setTimeout(function () {
			s_aSounds[b.ingamename] = new Howl({
				src: [b.path + b.filename + ".mp3"],
				autoplay: !1,
				preload: !0,
				loop: b.loop,
				volume: b.volume,
				onload: s_oMain.soundLoaded,
				onloaderror: function (b, a) {
					for (var c = 0; c < s_aSoundsInfo.length; c++)
						if (b === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
							s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
							break
						}
				},
				onplayerror: function (b) {
					for (var a = 0; a < s_aSoundsInfo.length; a++)
						if (b === s_aSounds[s_aSoundsInfo[a].ingamename]._sounds[0]._id) {
							s_aSounds[s_aSoundsInfo[a].ingamename].once("unlock",
								function () {
									s_aSounds[s_aSoundsInfo[a].ingamename].play();
									"soundtrack" === s_aSoundsInfo[a].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
								});
							break
						}
				}
			})
		}, a ? 200 : 0)
	};
	this._loadImages = function () {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_play",
			"./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("but_yes",
			"./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
		s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
		s_oSpriteLibrary.addSprite("fiche_0", "./sprites/fiche_0.png");
		s_oSpriteLibrary.addSprite("fiche_1", "./sprites/fiche_1.png");
		s_oSpriteLibrary.addSprite("fiche_2", "./sprites/fiche_2.png");
		s_oSpriteLibrary.addSprite("fiche_3", "./sprites/fiche_3.png");
		s_oSpriteLibrary.addSprite("fiche_4", "./sprites/fiche_4.png");
		s_oSpriteLibrary.addSprite("fiche_5",
			"./sprites/fiche_5.png");
		s_oSpriteLibrary.addSprite("bg_bet_panel", "./sprites/bg_bet_panel.jpg");
		s_oSpriteLibrary.addSprite("money_panel", "./sprites/money_panel.png");
		s_oSpriteLibrary.addSprite("simple_bet_panel", "./sprites/simple_bet_panel.png");
		s_oSpriteLibrary.addSprite("forecast_panel", "./sprites/forecast_panel.png");
		s_oSpriteLibrary.addSprite("bet_place", "./sprites/bet_place.png");
		s_oSpriteLibrary.addSprite("fiche_highlight", "./sprites/fiche_highlight.png");
		s_oSpriteLibrary.addSprite("odd_bg",
			"./sprites/odd_bg.png");
		s_oSpriteLibrary.addSprite("rank_panel", "./sprites/rank_panel.png");
		s_oSpriteLibrary.addSprite("panel_arrival", "./sprites/panel_arrival.png");
		s_oSpriteLibrary.addSprite("bibs", "./sprites/bibs.png");
		s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
		s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
		s_oSpriteLibrary.addSprite("but_start_race", "./sprites/but_start_race.png");
		s_oSpriteLibrary.addSprite("but_clear_bet", "./sprites/but_clear_bet.png");
		s_oSpriteLibrary.addSprite("fiche_panel", "./sprites/fiche_panel.png");
		s_oSpriteLibrary.addSprite("fill_bar", "./sprites/fill_bar.png");
		s_oSpriteLibrary.addSprite("win_panel", "./sprites/win_panel.png");
		s_oSpriteLibrary.addSprite("lose_panel", "./sprites/lose_panel.png");
		for (var a = 0; a < NUM_HORSES; a++) s_oSpriteLibrary.addSprite("bib_gui_" + a, "./sprites/bib_gui_" + a + ".png"), s_oSpriteLibrary.addSprite("horse_" + (a + 1) + "_a", "./sprites/horse_" + (a + 1) + "_a.png"), s_oSpriteLibrary.addSprite("horse_" + (a + 1) + "_b", "./sprites/horse_" +
			(a + 1) + "_b.png"), s_oSpriteLibrary.addSprite("cage_" + a, "./sprites/cage_" + a + ".png"), s_oSpriteLibrary.addSprite("gate_" + a, "./sprites/cage_gates/gate_" + a + ".png");
		s_oSpriteLibrary.addSprite("cage_" + NUM_HORSES, "./sprites/cage_" + NUM_HORSES + ".png");
		s_oSpriteLibrary.addSprite("gate_" + NUM_HORSES, "./sprites/cage_gates/gate_" + NUM_HORSES + ".png");
		for (a = 0; a < NUM_TRACK_BG; a++) s_oSpriteLibrary.addSprite("bg_track_" + a, "./sprites/bg_track/bg_track_" + a + ".jpg");
		b += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function () {
		d++;
		l.refreshLoader(Math.floor(d / b * 100))
	};
	this._onAllImagesLoaded = function () { };
	this.onAllPreloaderImagesLoaded = function () {
		this._loadImages()
	};
	this._onRemovePreloader = function () {
		try {
			saveItem("ls_available", "ok")
		} catch (k) {
			s_bStorageAvailable = !1
		}
		l.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this.setMoney = function (b) { };
	this.gotoMenu = function () {
		new CMenu;
		c = STATE_MENU
	};
	this.gotoBetPanel = function () {
		new CBetPanel;
		c = STATE_BET_PANEL;
		$(s_oMain).trigger("start_session")
	};
	this.gotoGame = function (b) {
		f = new CGame(b);
		c = STATE_GAME
	};
	this.stopUpdate = function () {
		e = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function () {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function (b) {
		if (!1 !== e) {
			var a = (new Date).getTime();
			s_iTimeElaps = a - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = a;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			c === STATE_GAME && f.update();
			s_oStage.update(b)
		}
	};
	s_oMain = this;
	s_iCurMoney = a.money;
	s_iGameCash = a.game_cash;
	CHIP_VALUES = a.chip_values;
	MIN_BET = a.min_bet;
	MAX_BET = a.max_bet;
	WIN_OCCURRENCE = a.win_occurrence;
	AD_SHOW_COUNTER = a.num_levels_for_ads;
	SHOW_CREDITS = a.show_credits;
	ENABLE_FULLSCREEN = a.fullscreen;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	NUM_CHIPS = CHIP_VALUES.length;
	s_bAudioActive =
		a.audio_enable_on_startup;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_bFullscreen = !1,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_bStorageAvailable = !0,
	s_iCurMoney, s_iGameCash, s_iAdCounter = 0,
	s_aSounds;

function CTextButton(a, e, d, b, c, l, f, k) {
	var g, h, n, r, q, x, u, m, y, w;
	this._init = function (b, a, c, d, f, e, q) {
		g = !1;
		h = 1;
		n = [];
		r = [];
		w = createBitmap(c);
		m = new createjs.Container;
		m.x = b;
		m.y = a;
		m.regX = c.width / 2;
		m.regY = c.height / 2;
		s_bMobile || (m.cursor = "pointer");
		m.addChild(w, y);
		k.addChild(m);
		y = new CTLText(m, 10, 5, c.width - 20, c.height - 10, q, "center", e, f, 1, 0, 0, d, !0, !0, !1, !1);
		this._initListener()
	};
	this.unload = function () {
		m.off("mousedown", q);
		m.off("pressup", x);
		k.removeChild(m)
	};
	this.setVisible = function (b) {
		m.visible = b
	};
	this.setAlign =
		function (b) {
			y.textAlign = b
		};
	this.setTextX = function (b) {
		y.x = b
	};
	this.setScale = function (b) {
		h = m.scaleX = m.scaleY = b
	};
	this.enable = function () {
		g = !1
	};
	this.disable = function () {
		g = !0
	};
	this._initListener = function () {
		q = m.on("mousedown", this.buttonDown);
		x = m.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (b, a, c) {
		n[b] = a;
		r[b] = c
	};
	this.addEventListenerWithParams = function (b, a, c, d) {
		n[b] = a;
		r[b] = c;
		u = d
	};
	this.buttonRelease = function () {
		g || (playSound("click", 1, !1), m.scaleX = h, m.scaleY = h, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(r[ON_MOUSE_UP],
			u))
	};
	this.buttonDown = function () {
		g || (m.scaleX = .9 * h, m.scaleY = .9 * h, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]))
	};
	this.setPosition = function (b, a) {
		m.x = b;
		m.y = a
	};
	this.tweenPosition = function (b, a, c, d, h, f, e) {
		createjs.Tween.get(m).wait(d).to({
			x: b,
			y: a
		}, c, h).call(function () {
			void 0 !== f && f.call(e)
		})
	};
	this.changeText = function (b) {
		y.refreshText(b)
	};
	this.setX = function (b) {
		m.x = b
	};
	this.setY = function (b) {
		m.y = b
	};
	this.getButtonImage = function () {
		return m
	};
	this.getX = function () {
		return m.x
	};
	this.getY = function () {
		return m.y
	};
	this.getSprite = function () {
		return m
	};
	this.getScale = function () {
		return m.scaleX
	};
	this._init(a, e, d, b, c, l, f)
}

function CToggle(a, e, d, b, c) {
	var l, f, k, g, h, n, r;
	this._init = function (b, a, c, d, h) {
		r = void 0 !== h ? h : s_oStage;
		f = [];
		k = [];
		h = new createjs.SpriteSheet({
			images: [c],
			frames: {
				width: c.width / 2,
				height: c.height,
				regX: c.width / 2 / 2,
				regY: c.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		l = d;
		g = createSprite(h, "state_" + l, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		g.x = b;
		g.y = a;
		g.stop();
		s_bMobile || (g.cursor = "pointer");
		r.addChild(g);
		this._initListener()
	};
	this.unload = function () {
		g.off("mousedown", h);
		g.off("pressup", n);
		r.removeChild(g)
	};
	this._initListener = function () {
		h = g.on("mousedown", this.buttonDown);
		n = g.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (b, a, c) {
		f[b] = a;
		k[b] = c
	};
	this.setCursorType = function (b) {
		g.cursor = b
	};
	this.setActive = function (b) {
		l = b;
		g.gotoAndStop("state_" + l)
	};
	this.buttonRelease = function () {
		g.scaleX = 1;
		g.scaleY = 1;
		playSound("click", 1, 0);
		l = !l;
		g.gotoAndStop("state_" + l);
		f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP], l)
	};
	this.buttonDown = function () {
		g.scaleX = .9;
		g.scaleY = .9;
		f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
	};
	this.setPosition = function (b, a) {
		g.x = b;
		g.y = a
	};
	this._init(a, e, d, b, c)
}

function CGfxButton(a, e, d, b) {
	var c, l, f, k, g, h, n, r, q = !1;
	this._init = function (b, a, d) {
		c = [];
		l = [];
		k = [];
		f = createBitmap(d);
		f.x = b;
		f.y = a;
		h = g = 1;
		f.regX = d.width / 2;
		f.regY = d.height / 2;
		s_bMobile || (f.cursor = "pointer");
		x.addChild(f);
		this._initListener()
	};
	this.unload = function () {
		f.off("mousedown", n);
		f.off("pressup", r);
		x.removeChild(f)
	};
	this.setVisible = function (b) {
		f.visible = b
	};
	this.setCursorType = function (b) {
		f.cursor = b
	};
	this._initListener = function () {
		n = f.on("mousedown", this.buttonDown);
		r = f.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (b, a, d) {
		c[b] = a;
		l[b] = d
	};
	this.addEventListenerWithParams = function (b, a, d, h) {
		c[b] = a;
		l[b] = d;
		k[b] = h
	};
	this.buttonRelease = function () {
		q || (f.scaleX = 0 < g ? g : -g, f.scaleY = h, playSound("click", 1, 0), c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(l[ON_MOUSE_UP], k[ON_MOUSE_UP]))
	};
	this.buttonDown = function () {
		q || (f.scaleX = 0 < g ? .9 * g : .9 * -g, f.scaleY = .9 * h, c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], k[ON_MOUSE_DOWN]))
	};
	this.rotation = function (b) {
		f.rotation = b
	};
	this.getButton = function () {
		return f
	};
	this.setPosition = function (b, a) {
		f.x = b;
		f.y = a
	};
	this.setX = function (b) {
		f.x = b
	};
	this.setY = function (b) {
		f.y = b
	};
	this.getButtonImage = function () {
		return f
	};
	this.block = function (b) {
		q = b;
		f.scaleX = g;
		f.scaleY = h
	};
	this.setScaleX = function (b) {
		g = f.scaleX = b
	};
	this.setScale = function (b) {
		h = g = b;
		f.scaleX = f.scaleY = b
	};
	this.getX = function () {
		return f.x
	};
	this.getY = function () {
		return f.y
	};
	this.pulseAnimation = function () {
		createjs.Tween.get(f).to({
			scaleX: .9 * g,
			scaleY: .9 * h
		}, 850, createjs.Ease.quadOut).to({
			scaleX: g,
			scaleY: h
		}, 650, createjs.Ease.quadIn).call(function () {
			u.pulseAnimation()
		})
	};
	this.trebleAnimation = function () {
		createjs.Tween.get(f).to({
			rotation: 5
		}, 75, createjs.Ease.quadOut).to({
			rotation: -5
		}, 140, createjs.Ease.quadIn).to({
			rotation: 0
		}, 75, createjs.Ease.quadIn).wait(750).call(function () {
			u.trebleAnimation()
		})
	};
	this.removeAllTweens = function () {
		createjs.Tween.removeTweens(f)
	};
	var x = void 0 !== b ? b : s_oStage;
	this._init(a, e, d);
	var u = this;
	return this
}

function CMenu() {
	var a, e, d, b, c, l, f, k, g, h, n, r, q, x, u, m = null,
		y, w = null,
		C = null,
		B;
	this._init = function () {
		n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(n);
		var m = s_oSpriteLibrary.getSprite("but_play");
		g = CANVAS_WIDTH / 2;
		h = CANVAS_HEIGHT - m.height / 2 - 10;
		r = new CGfxButton(g, h, m);
		r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		m = s_oSpriteLibrary.getSprite("but_credits");
		SHOW_CREDITS ? (c = 10 + m.width / 2, l = m.height / 2 + 10, u = new CGfxButton(c, l, m), u.addEventListener(ON_MOUSE_UP, this._onCredits,
			this), d = c + m.width + 10, b = l) : (d = 10 + m.width / 2, b = m.height / 2 + 10);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - m.width / 4 - 10, k = m.height / 2 + 10, x = new CToggle(f, k, m, s_bAudioActive, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		m = window.document;
		var E = m.documentElement;
		w = E.requestFullscreen || E.mozRequestFullScreen || E.webkitRequestFullScreen || E.msRequestFullscreen;
		C = m.exitFullscreen || m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (w = !1);
		w && screenfull.enabled && (m = s_oSpriteLibrary.getSprite("but_fullscreen"), y = new CToggle(d, b, m, s_bFullscreen, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		m = s_oSpriteLibrary.getSprite("logo_menu");
		a = CANVAS_WIDTH / 2;
		e = 10;
		B = createBitmap(m);
		B.regX = m.width / 2;
		B.x = a;
		B.y = e;
		s_oStage.addChild(B);
		q = new createjs.Shape;
		q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(q);
		createjs.Tween.get(q).to({
			alpha: 0
		}, 1E3).call(function () {
			s_oStage.removeChild(q)
		});
		this.refreshButtonPos()
	};
	this.unload = function () {
		r.unload();
		r = null;
		SHOW_CREDITS && u.unload();
		s_oStage.removeChild(n);
		n = null;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x.unload(), x = null;
		w && screenfull.enabled && y.unload();
		s_oMenu = null
	};
	this.refreshButtonPos = function () {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || x.setPosition(f - s_iOffsetX, k + s_iOffsetY);
		w && screenfull.enabled && y.setPosition(d + s_iOffsetX, b + s_iOffsetY);
		r.setPosition(g, h - s_iOffsetY);
		SHOW_CREDITS && u.setPosition(c + s_iOffsetX, l + s_iOffsetY);
		null !==
			m && m.refreshButtonPos();
		B.y = e + s_iOffsetY
	};
	this.exitFromCredits = function () {
		m = null
	};
	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onCredits = function () {
		m = new CCreditsPanel
	};
	this._onButPlayRelease = function () {
		this.unload();
		s_oMain.gotoBetPanel()
	};
	this.resetFullscreenBut = function () {
		w && screenfull.enabled && y.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function () {
		s_bFullscreen ? C.call(window.document) : w.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	var e, d, b, c, l, f, k, g, h, n, r, q, x, u, m, y, w, C, B, G;
	this._init = function () {
		c = b = e = !1;
		k = f = 0;
		x = s_oGameSettings.getAllHorseNames();
		setVolume("soundtrack", 0);
		s_oTweenController = new CTweenController;
		u = new createjs.Container;
		s_oStage.addChild(u);
		y = new CTrackBg(u);
		C = new CRankingGui(x, s_oStage);
		B = new CArrivalPanel(CANVAS_WIDTH, 246, s_oStage);
		w = new CInterface;
		this.generateFinalRank();
		this._prepareHorses();
		m = new createjs.Shape;
		m.graphics.beginFill("white").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		m.alpha =
			0;
		s_oStage.addChild(m);
		$(s_oMain).trigger("start_level", 1);
		G = new createjs.Text("", "40px " + PRIMARY_FONT, "#000");
		G.textAlign = "center";
		G.textBaseline = "alphabetic";
		G.x = CANVAS_WIDTH / 2;
		G.y = 220;
		setTimeout(function () {
			s_oGame.startRace()
		}, 1E3);
		playSound("start_race", 1, 0);
		this.refreshButtonPos()
	};
	this.unload = function () {
		stopSound("start_race");
		w.unload();
		createjs.Tween.removeAllTweens();
		s_oStage.removeAllChildren();
		s_oGame = null
	};
	this.refreshButtonPos = function () {
		w.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		C.refreshButtonPos(s_iOffsetX,
			s_iOffsetY);
		B.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.pause = function () {
		e = !1;
		pauseSound("start_race");
		for (var b = 0; b < NUM_HORSES; b++) n[b].pauseAnim()
	};
	this.unpause = function () {
		e = !0;
		playSound("start_race");
		for (var b = 0; b < NUM_HORSES; b++) n[b].unpauseAnim()
	};
	this.onExit = function () {
		setVolume("soundtrack", 1);
		s_oGame.unload();
		s_oMain.gotoMenu();
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("share_event", [s_iCurMoney])
	};
	this.gotoBetPanel = function () {
		setVolume("soundtrack",
			1);
		s_oGame.unload();
		s_oMain.gotoBetPanel()
	};
	this.startRace = function () {
		for (var b = 0; b < q.length; b++) q[b].playAnim();
		w.blockExit(!1);
		e = !0;
		y.startTrack();
		setTimeout(function () {
			s_oGame.startHorses()
		}, 100)
	};
	this.generateFinalRank = function () {
		const response = $.ajax({
			url: `${home_url}/api/games/getAvailableGameBank`,
			type: "POST",
			async: false,
			data: {
				gameId: gameid,
				customerId: customerid,
				bet_amount: s_oBetList.getTotBet()
			}
		})
		s_iGameCash = response.responseJSON.game_bank;
		s_oBetList.getMinWin() > s_iGameCash ? this._generateLosingResult() : 100 * Math.random() < WIN_OCCURRENCE ? this._generateWinResult() : this._generateLosingResult();
		l = parseFloat(l.toFixed(2))
	};
	this._generateWinResult = function () {
		d = !0;
		do {
			g = this._generateRandomRank();
			var b = s_oBetList.getTotWinWithCurRank(g);
			l = b.tot_win
		} while (l <= a);
		h = b.win_list
	};
	this._generateLosingResult = function () {
		d = !1;
		do {
			g = this._generateRandomRank();
			var b = s_oBetList.getTotWinWithCurRank(g);
			l = b.tot_win
		} while (l > a);
		h = b.win_list
	};
	this._generateRandomRank = function () {
		for (var b = [], a = s_oGameSettings.getHorsePercentageArray(); b.length < NUM_HORSES;) {
			var c = a[Math.floor(Math.random() * a.length)];
			b.unshift(c);
			for (var d = a.length - 1; 0 <= d;) a[d] === c && a.splice(d, 1), d--
		}
		return b
	};
	this._prepareHorses = function () {
		r = [];
		q = [];
		n = [];
		for (var b = s_oGameSettings.getRandomPath(),
			a = [{
				x: 266,
				y: 233
			}, {
				x: 248,
				y: 234
			}, {
				x: 229,
				y: 235
			}, {
				x: 208,
				y: 237
			}, {
				x: 183,
				y: 239
			}, {
				x: 154,
				y: 241
			}, {
				x: 120,
				y: 244
			}, {
				x: 83,
				y: 246
			}, {
				x: 62,
				y: 249
			}], c = 0; c < NUM_HORSES; c++) {
			var d = createBitmap(s_oSpriteLibrary.getSprite("cage_" + c));
			u.addChild(d);
			r.push(d);
			d = s_oGameSettings.getHorseInfo(c);
			var h = g.indexOf(c);
			n[c] = new CHorse(d.start, c + 1, x[c], d.scale, b["place_" + (h + 1)], u);
			d = new CGate(a[c].x, a[c].y, c, u);
			q.push(d)
		}
		d = createBitmap(s_oSpriteLibrary.getSprite("cage_" + NUM_HORSES));
		u.addChild(d);
		r.push(d);
		d = new CGate(a[NUM_HORSES].x,
			a[NUM_HORSES].y, NUM_HORSES, u);
		q.push(d)
	};
	this.startHorses = function () {
		for (var b = 0; b < NUM_HORSES; b++) n[b].startRace()
	};
	this.horsePhotofinish = function (b, a) {
		w.blockExit(!0);
		B.refreshRank(b, a);
		f++;
		4 > f ? (e = !1, k = TIME_CHECK_RANK, this._playFlashAnim()) 
		: 6 === f && (d || 0 < l ? (s_iCurMoney += l, s_iGameCash -= l, s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2)), s_iGameCash = parseFloat(s_iGameCash.toFixed(2)), w.showWinPanel(l, h, g))
		: w.showLosePanel(g), 
		  stopSound("start_race"), 
		  setVolume("soundtrack", 1),
			$.ajax({
				url: `${home_url}/api/games/updateGameBankWithWinAmount`,
				type: 'POST',
				data: {
					customerId: customerid,
					gameId: gameid,
					win_amount: l,
					bet_amount: s_oBetList.getTotBet(),
				},
				success: (data) => {
					if (data.gameStatus == false) {
						alert("Sorry, Something went wrong, please try again");
						window.location.reload()
					}
				}
			}),
		  $(s_oMain).trigger("save_score",
			s_iCurMoney))

	};
	this.checkHorseArrival = function () {
		b = !0;
		this._refreshRank()
	};
	this._playFlashAnim = function () {
		for (var b = 0; b < NUM_HORSES; b++) n[b].pauseAnim();
		playSound("photo", 1, 0);
		createjs.Tween.get(m).to({
			alpha: .8
		}, 200).call(function () {
			var b = (new createjs.ColorMatrix).adjustSaturation(-100);
			u.filters = [new createjs.ColorMatrixFilter(b)];
			u.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			c = !0;
			createjs.Tween.get(m).to({
				alpha: 0
			}, 400).call(function () {
				s_oGame.restoreRaceAfterFlash()
			})
		})
	};
	this.restoreRaceAfterFlash = function () {
		setTimeout(function () {
			for (var b =
				0; b < NUM_HORSES; b++) n[b].unpauseAnim();
			u.filters = [];
			u.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			e = !0
		}, 1E3)
	};
	this.moveCages = function (b) {
		if (4 === b) {
			for (var a = 0; a < r.length; a++) u.removeChild(r[a]);
			for (a = 0; a < q.length; a++) q[a].unload()
		} else {
			var c = [123, 255, 370];
			for (a = 0; a < r.length; a++) r[a].x -= c[b - 1];
			for (a = 0; a < q.length; a++) q[a].decreaseX(c[b - 1])
		}
	};
	this._refreshRank = function () {
		for (var b = [], a = 0; a < NUM_HORSES; a++) {
			var c = n[a].getX();
			b[a] = {
				index: a,
				x: c
			}
		}
		b.sort(this.compareXPos);
		C.refreshRank(b)
	};
	this.compareXPos = function (b,
		a) {
		return b.x > a.x ? -1 : b.x < a.x ? 1 : 0
	};
	this.returnInBetPanel = function () {
		s_iAdCounter++;
		s_iAdCounter === AD_SHOW_COUNTER && (s_iAdCounter = 0, $(s_oMain).trigger("show_interlevel_ad"));
		s_oGame.gotoBetPanel()
	};
	this.update = function () {
		if (e) {
			var a = y.update();
			C.refreshRadar(a);
			for (a = 0; a < NUM_HORSES; a++) n[a].update(b);
			c && u.updateCache();
			k += s_iTimeElaps;
			k > TIME_CHECK_RANK && !b && (k = 0, this._refreshRank())
		}
	};
	s_oGame = this;
	this._init()
}
var s_oGame = null,
	s_oTweenController;

function CInterface() {
	var a, e, d, b, c, l, f, k, g = null,
		h = null,
		n, r, q, x;
	this._init = function () {
		var u = s_oSpriteLibrary.getSprite("but_exit");
		a = CANVAS_WIDTH - u.width / 2 - 10;
		e = u.height / 2 + 10;
		n = new CGfxButton(a, e, u);
		n.block(!0);
		n.addEventListener(ON_MOUSE_UP, this._onExit, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (u = s_oSpriteLibrary.getSprite("audio_icon"), c = a - u.width / 2 - 10, l = e, f = new CToggle(c, l, u, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), d = c - u.width / 2 - 10, b = l) : (d = a - u.width -
			10, b = e);
		u = window.document;
		var m = u.documentElement;
		g = m.requestFullscreen || m.mozRequestFullScreen || m.webkitRequestFullScreen || m.msRequestFullscreen;
		h = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (g = !1);
		g && screenfull.enabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), k = new CToggle(d, b, u, s_bFullscreen, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		q = new CLosePanel(s_oStage);
		r = new CWinPanel(s_oStage);
		x = new CAreYouSurePanel(s_oStage)
	};
	this.refreshButtonPos = function () {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || f.setPosition(c - s_iOffsetX, l + s_iOffsetY);
		g && screenfull.enabled && k.setPosition(d - s_iOffsetX, b + s_iOffsetY);
		n.setPosition(a - s_iOffsetX, e + s_iOffsetY)
	};
	this.showWinPanel = function (b, a, c) {
		r.show(b, a, c)
	};
	this.showLosePanel = function (b) {
		q.show(b)
	};
	this.unload = function () {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
		g && screenfull.enabled && k.unload();
		r.unload();
		q.unload();
		x.unload();
		s_oInterface = null
	};
	this.blockExit =
		function (b) {
			n.block(b)
		};
	this._onExit = function () {
		s_oGame.pause();
		x.show()
	};
	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function () {
		g && screenfull.enabled && k.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function () {
		s_bFullscreen ? h.call(window.document) : g.call(window.document.documentElement);
		sizeHandler()
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CCreditsPanel() {
	var a, e, d, b, c, l, f, k;
	this._init = function () {
		k = new createjs.Container;
		s_oStage.addChild(k);
		a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		k.addChild(a);
		c = new createjs.Shape;
		c.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = .01;
		f = c.on("click", this._onLogoButRelease);
		k.addChild(c);
		var g = s_oSpriteLibrary.getSprite("but_exit");
		d = new CGfxButton(815, 284, g, k);
		d.addEventListener(ON_MOUSE_UP, this.unload, this);
		b = new createjs.Text(TEXT_CREDITS_DEVELOPED,
			"40px " + PRIMARY_FONT, "#fff");
		b.textAlign = "center";
		b.textBaseline = "alphabetic";
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT / 2 - 54;
		k.addChild(b);
		g = s_oSpriteLibrary.getSprite("logo_ctl");
		e = createBitmap(g);
		e.regX = g.width / 2;
		e.regY = g.height / 2;
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2;
		k.addChild(e);
		l = new createjs.Text("www.codethislab.com", "36px " + PRIMARY_FONT, "#fff");
		l.textAlign = "center";
		l.textBaseline = "alphabetic";
		l.x = CANVAS_WIDTH / 2;
		l.y = CANVAS_HEIGHT / 2 + 80;
		k.addChild(l)
	};
	this.unload = function () {
		c.off("click", f);
		d.unload();
		d = null;
		s_oStage.removeChild(k);
		s_oMenu.exitFromCredits()
	};
	this._onLogoButRelease = function () {
		window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
	};
	this._init()
}

function CBetPanel() {
	var a, e, d, b, c, l, f, k, g, h, n, r, q = null,
		x = null,
		u, m, y, w, C, B, G, E, I;
	this._init = function () {
		g = f = 0;
		n = [];
		I = new createjs.Container;
		s_oStage.addChild(I);
		var D = createBitmap(s_oSpriteLibrary.getSprite("bg_bet_panel"));
		I.addChild(D);
		D = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - D.width / 2 - 10;
		l = D.height / 2 + 10;
		B = new CGfxButton(c, l, D, I);
		B.addEventListener(ON_MOUSE_UP, this.onExit, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
			var H = s_oSpriteLibrary.getSprite("audio_icon");
			d = c - D.width -
				10;
			b = H.height / 2 + 10;
			G = new CToggle(d, b, H, s_bAudioActive, s_oStage);
			G.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
			a = d - H.width / 2 - 10;
			e = b
		} else a = c - D.width - 10, e = l;
		D = window.document;
		H = D.documentElement;
		q = H.requestFullscreen || H.mozRequestFullScreen || H.webkitRequestFullScreen || H.msRequestFullscreen;
		x = D.exitFullscreen || D.mozCancelFullScreen || D.webkitExitFullscreen || D.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (q = !1);
		q && screenfull.enabled && (H = s_oSpriteLibrary.getSprite("but_fullscreen"), r = new CToggle(a,
			e, H, s_bFullscreen, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		D = s_oSpriteLibrary.getSprite("simple_bet_panel");
		BET_PANEL_WIDTH = D.width;
		BET_PANEL_HEIGHT = D.height;
		E = new createjs.Container;
		E.x = BET_PANEL_X;
		E.y = BET_PANEL_Y;
		I.addChild(E);
		h = [];
		h[0] = new CSimpleBetPanel(0, 0, E);
		h[1] = new CForecastPanel(BET_PANEL_WIDTH, 0, E);
		w = new CChipPanel(1010, 326, I);
		u = new createjs.Shape;
		u.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(BET_PANEL_X + 6, BET_PANEL_Y, BET_PANEL_WIDTH - 12, BET_PANEL_HEIGHT);
		I.addChild(u);
		E.mask = u;
		k = 0;
		m = new CGfxButton(BET_PANEL_X + 8, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("arrow_left"), I);
		m.addEventListener(ON_MOUSE_UP, this._onArrowLeft, this);
		y = new CGfxButton(BET_PANEL_X + D.width - 10, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("arrow_right"), I);
		y.addEventListener(ON_MOUSE_UP, this._onArrowRight, this);
		C = new CMsgBox;
		s_oBetList.reset();
		this.refreshButtonPos()
	};
	this.unload = function () {
		m.unload();
		y.unload();
		B.unload();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || G.unload();
		q &&
			screenfull.enabled && r.unload();
		C.unload();
		w.unload();
		for (var b = 0; b < h.length; b++) h[b].unload();
		s_oStage.removeAllChildren()
	};
	this.refreshButtonPos = function () {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || G.setPosition(d - s_iOffsetX, b + s_iOffsetY);
		q && screenfull.enabled && r.setPosition(a - s_iOffsetX, e + s_iOffsetY);
		B.setPosition(c - s_iOffsetX, l + s_iOffsetY)
	};
	this.setChipSelected = function (b) {
		g = b
	};
	this.setMoney = function (b) {
		s_iCurMoney = b;
		w.refreshMoney()
	};
	this.setSimpleBet = function (b, a, c, d) {
		if (c > s_iCurMoney) return C.show(TEXT_NO_MONEY,
			!0), !1;
		if (f + c > MAX_BET) return C.show(TEXT_ERR_MAX_BET, !1), !1;
		s_oBetList.addSimpleBet(b, a, c);
		f += c;
		f = Number(f.toFixed(2));
		s_iCurMoney -= c;
		s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2));
		s_iGameCash += c;
		s_iGameCash = parseFloat(s_iGameCash.toFixed(2));
		w.refreshMoney();
		w.refreshBet(f);
		n.push(d);
		return !0
	};
	this.setForecastBet = function (b, a, c, d) {
		if (c > s_iCurMoney) return C.show(TEXT_NO_MONEY, !0), !1;
		if (f + c > MAX_BET) return C.show(TEXT_ERR_MAX_BET, !1), !1;
		s_oBetList.addForecastBet(b, a, c);
		f += c;
		f = Number(f.toFixed(2));
		s_iCurMoney -=
			c;
		s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2));
		s_iGameCash += c;
		s_iGameCash = parseFloat(s_iGameCash.toFixed(2));
		w.refreshMoney();
		w.refreshBet(f);
		n.push(d);
		return !0
	};
	this.refreshPagePos = function (b, a) {
		E.x = BET_PANEL_X;
		h[k].setX(0);
		h[b].setX(a)
	};
	this.clearBet = function () {
		for (var b = 0; b < n.length; b++) n[b].clearBet();
		s_iCurMoney += f;
		s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2));
		s_iGameCash -= f;
		s_iGameCash = parseFloat(s_iGameCash.toFixed());
		f = 0;
		h[0].clearBet();
		s_oBetList.reset();
		w.refreshBet(0);
		w.refreshMoney()
	};
	this._onArrowLeft = function () {
		var b = k;
		k++;
		k === h.length && (k = 0, b = h.length - 1);
		h[k].setX(BET_PANEL_WIDTH);
		createjs.Tween.get(E).to({
			x: -BET_PANEL_WIDTH + BET_PANEL_X
		}, 500, createjs.Ease.cubicOut).call(function () {
			s_oBetPanel.refreshPagePos(b, BET_PANEL_WIDTH)
		})
	};
	this._onArrowRight = function () {
		var b = k;
		k--;
		0 > k && (k = h.length - 1);
		h[k].setX(-BET_PANEL_WIDTH);
		createjs.Tween.get(E).to({
			x: BET_PANEL_X + BET_PANEL_WIDTH
		}, 500, createjs.Ease.cubicOut).call(function () {
			s_oBetPanel.refreshPagePos(b, -BET_PANEL_WIDTH)
		})
	};
	this.onStartExit =
		function () {
			f < MIN_BET ? C.show(TEXT_ERR_MIN_BET, !1) : (this.unload(), s_oMain.gotoGame(f), $(s_oMain).trigger("bet_placed", f))
		};
	this.onExit = function () {
		$(s_oMain).trigger("end_session");
		this.unload();
		s_oMain.gotoMenu()
	};
	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function () {
		q && screenfull.enabled && r.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function () {
		s_bFullscreen ? x.call(window.document) : q.call(window.document.documentElement);
		sizeHandler()
	};
	this.getChipSelected = function () {
		return g
	};
	s_oBetPanel = this;
	this._init()
}
var s_oBetPanel = null;

function CChipPanel(a, e, d) {
	var b, c, l, f, k, g, h;
	this._init = function (b, a) {
		h = new createjs.Container;
		h.x = b;
		h.y = a;
		n.addChild(h);
		g = new CTextButton(73, 2, s_oSpriteLibrary.getSprite("but_clear_bet"), TEXT_CLEAR_BET, PRIMARY_FONT, "#fff", 24, h);
		g.addEventListener(ON_MOUSE_UP, this._onClearBet, this);
		var c = s_oSpriteLibrary.getSprite("money_panel"),
			d = createBitmap(s_oSpriteLibrary.getSprite("money_panel"));
		d.regX = c.width / 2;
		d.x = 73;
		d.y = 22;
		h.addChild(d);
		new CTLText(h, 18, 32, 110, 14, 14, "center", "#ffde00", SECONDARY_FONT, 1, 0,
			0, TEXT_MIN_BET + ": " + MIN_BET + TEXT_CURRENCY, !0, !0, !1, !1);
		new CTLText(h, 18, 44, 110, 14, 14, "center", "#ffde00", SECONDARY_FONT, 1, 0, 0, TEXT_MAX_BET + ": " + MAX_BET + TEXT_CURRENCY, !0, !0, !1, !1);
		d = createBitmap(s_oSpriteLibrary.getSprite("money_panel"));
		d.regX = c.width / 2;
		d.x = 73;
		d.y = 72;
		h.addChild(d);
		new CTLText(h, 5, 74, 40, 12, 12, "left", "#fff", TERTIARY_FONT, 1, 0, 0, TEXT_BET, !0, !0, !1, !1);
		f = new CTLText(h, 18, 82, 110, 26, 26, "center", "#ffde00", SECONDARY_FONT, 1, 0, 0, "0" + TEXT_CURRENCY, !0, !0, !1, !1);
		d = createBitmap(c);
		d.regX = c.width /
			2;
		d.x = 73;
		d.y = 122;
		h.addChild(d);
		new CTLText(h, 5, 124, 40, 12, 12, "left", "#fff", TERTIARY_FONT, 1, 0, 0, TEXT_MONEY, !0, !0, !1, !1);
		l = new CTLText(h, 18, 132, 110, 26, 26, "center", "#ffde00", SECONDARY_FONT, 1, 0, 0, s_iCurMoney + TEXT_CURRENCY, !0, !0, !1, !1);
		this._initChips();
		k = new CButStartRace(73, 304, s_oSpriteLibrary.getSprite("but_start_race"), TEXT_START_RACE, "#fff", 24, h);
		k.addEventListener(ON_MOUSE_UP, this._onStartRace, this)
	};
	this.unload = function () {
		for (var a = 0; a < b; a++) b[a].unload();
		k.unload()
	};
	this._initChips = function () {
		var a =
			createBitmap(s_oSpriteLibrary.getSprite("fiche_panel"));
		a.x = 0;
		a.y = 170;
		h.addChild(a);
		a = [{
			x: 46,
			y: 220
		}, {
			x: 97,
			y: 220
		}, {
			x: 145,
			y: 220
		}, {
			x: 46,
			y: 264
		}, {
			x: 97,
			y: 264
		}, {
			x: 145,
			y: 264
		}];
		b = [];
		for (var d = 0; d < NUM_CHIPS; d++) b[d] = new CFicheBut(d, a[d].x, a[d].y, 1, h), b[d].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, d);
		a = s_oSpriteLibrary.getSprite("fiche_highlight");
		c = createBitmap(a);
		c.regX = a.width / 2;
		c.regY = a.height / 2;
		c.x = b[0].getX() - 22;
		c.y = b[0].getY() - 23;
		h.addChild(c)
	};
	this.refreshMoney = function () {
		l.refreshText(s_iCurMoney +
			TEXT_CURRENCY)
	};
	this.refreshBet = function (b) {
		f.refreshText(b + TEXT_CURRENCY)
	};
	this._onStartRace = function () {
		s_oBetPanel.onStartExit()
	};
	this._onClearBet = function () {
		s_oBetPanel.clearBet()
	};
	this._onFicheClicked = function (a) {
		c.x = b[a].getX() - 22;
		c.y = b[a].getY() - 23;
		s_oBetPanel.setChipSelected(a)
	};
	var n = d;
	this._init(a, e)
}

function CSimpleBetPanel(a, e, d) {
	var b, c, l, f, k;
	this._init = function (b, a) {
		k = new createjs.Container;
		k.x = b;
		k.y = a;
		g.addChild(k);
		var c = createBitmap(s_oSpriteLibrary.getSprite("simple_bet_panel"));
		k.addChild(c);
		new CTLText(k, 25, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TRAP, !0, !0, !1, !1);
		new CTLText(k, 140, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_WINS, !0, !0, !1, !1);
		new CTLText(k, 250, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_PLACE, !0, !0, !1, !1);
		new CTLText(k, 360, 10, 100, 20, 20,
			"center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SHOW, !0, !0, !1, !1);
		new CTLText(k, 475, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TRAP, !0, !0, !1, !1);
		new CTLText(k, 585, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_WINS, !0, !0, !1, !1);
		new CTLText(k, 695, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_PLACE, !0, !0, !1, !1);
		new CTLText(k, 805, 10, 100, 20, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SHOW, !0, !0, !1, !1);
		c = s_oSpriteLibrary.getSprite("bibs");
		for (var d = new createjs.SpriteSheet({
			images: [c],
			frames: {
				width: c.width /
					4,
				height: c.height / 2
			},
			animations: {
				bib_0: [0],
				bib_1: [1],
				bib_2: [2],
				bib_3: [3],
				bib_4: [4],
				bib_5: [5],
				bib_6: [6],
				bib_7: [7]
			}
		}), h = 35, f = 23, e = 0; e < NUM_HORSES; e++) {
			var n = createSprite(d, "bib_" + e, 0, 0, c.width / 3, c.height / 2);
			n.x = f;
			n.y = h;
			n.scaleX = n.scaleY = .5;
			k.addChild(n);
			e === NUM_HORSES / 2 - 1 ? (f = 470, h = 35) : h += c.height / 2 + 45
		}
		this._initHorseInfos();
		this._initBetPlaces()
	};
	this._initHorseInfos = function () {
		var a = s_oGameSettings.getAllHorseNames();
		b = [];
		for (var c = 18, d = 55, f = 0; f < NUM_HORSES; f++) {
			var e = s_oSpriteLibrary.getSprite("horse_" +
				(f + 1) + "_a"),
				g = s_oSpriteLibrary.getSprite("horse_" + (f + 1) + "_b");
			e = new createjs.SpriteSheet({
				images: [e, g],
				frames: [
					[1, 1, 249, 191, 0, -56, -19],
					[252, 1, 307, 193, 0, -8, -19],
					[561, 1, 308, 196, 0, -4, -16],
					[1, 199, 307, 198, 0, -2, -14],
					[310, 199, 306, 201, 0, -1, -11],
					[618, 199, 307, 205, 0, 0, -7],
					[1, 406, 305, 209, 0, -1, -3],
					[308, 406, 304, 211, 0, -3, -1],
					[614, 406, 301, 209, 0, -8, 0],
					[1, 619, 295, 207, 0, -17, -2],
					[298, 619, 295, 204, 0, -19, -5],
					[595, 619, 301, 203, 0, -21, -8],
					[1, 1, 284, 200, 1, -35, -11],
					[287, 1, 293, 198, 1, -31, -14],
					[582, 1, 306, 196, 1, -20, -16]
				],
				animations: {
					idle: [1,
						1
					],
					anim: [1, 14],
					start: [15],
					anim_1: [1, 14, "anim"],
					anim_2: [6, 14, "anim"],
					anim_3: [11, 14, "anim"]
				}
			});
			e = createSprite(e, "idle", HORSE_WIDTH / 2, HORSE_HEIGHT, HORSE_WIDTH, HORSE_HEIGHT);
			e.x = c;
			e.y = d;
			e.scaleX = e.scaleY = .36;
			k.addChild(e);
			b.push(e);
			new CTLText(k, c + 4, d + 80, 100, 14, 14, "left", "#fff", TERTIARY_FONT, 1, 0, 0, a[f].toUpperCase(), !0, !0, !1, !1);
			f === NUM_HORSES / 2 - 1 ? (c = 468, d = 55) : d += 115
		}
	};
	this._initBetPlaces = function () {
		l = [];
		f = [];
		c = [];
		for (var b = 150, a = 75, d = s_oSpriteLibrary.getSprite("bet_place"), e = 0; e < NUM_HORSES; e++) {
			var g =
				new createjs.Text(s_oGameSettings.getOddWin(e), "20px " + PRIMARY_FONT, "#fff");
			g.textAlign = "center";
			g.textBaseline = "middle";
			g.x = b + 38;
			g.y = a + 54;
			k.addChild(g);
			g = new CButBet(g.x + 2, a, d, .7, k);
			g.addEventListenerWithParams(ON_MOUSE_UP, this._onWinClicked, this, e);
			c.push(g);
			g = new createjs.Text(s_oGameSettings.getOddPlace(e), "20px " + PRIMARY_FONT, "#fff");
			g.textAlign = "center";
			g.textBaseline = "middle";
			g.x = b + 150;
			g.y = a + 54;
			k.addChild(g);
			g = new CButBet(g.x + 2, a, d, .7, k);
			g.addEventListenerWithParams(ON_MOUSE_UP, this._onPlaceClicked,
				this, e);
			l.push(g);
			g = new createjs.Text(s_oGameSettings.getOddShow(e), "20px " + PRIMARY_FONT, "#fff");
			g.textAlign = "center";
			g.textBaseline = "middle";
			g.x = b + 260;
			g.y = a + 54;
			k.addChild(g);
			g = new CButBet(g.x + 2, a, d, .7, k);
			g.addEventListenerWithParams(ON_MOUSE_UP, this._onShowClicked, this, e);
			f.push(g);
			e === NUM_HORSES / 2 - 1 ? (b = 596, a = 75) : a += 116
		}
	};
	this.unload = function () {
		for (var b = 0; b < l.length; b++) c[b].unload(), f[b].unload(), l[b].unload()
	};
	this.setX = function (b) {
		k.x = b
	};
	this.clearBet = function () {
		for (var a = 0; a < b.length; a++) b[a].gotoAndStop("idle")
	};
	this._onWinClicked = function (a) {
		var d = CHIP_VALUES[s_oBetPanel.getChipSelected()];
		s_oBetPanel.setSimpleBet(a, 1, d, c[a]) && ("anim" !== b[a].currentAnimation && b[a].gotoAndPlay("anim"), c[a].increaseBet(d))
	};
	this._onPlaceClicked = function (a) {
		var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
		s_oBetPanel.setSimpleBet(a, 2, c, l[a]) && ("anim" !== b[a].currentAnimation && b[a].gotoAndPlay("anim"), l[a].increaseBet(c))
	};
	this._onShowClicked = function (a) {
		var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
		s_oBetPanel.setSimpleBet(a,
			3, c, f[a]) && ("anim" !== b[a].currentAnimation && b[a].gotoAndPlay("anim"), f[a].increaseBet(c))
	};
	this.getContainer = function () {
		return k
	};
	var g = d;
	this._init(a, e)
}

function CForecastPanel(a, e, d) {
	var b, c;
	this._init = function () {
		c = new createjs.Container;
		c.x = a;
		c.y = e;
		l.addChild(c);
		var b = createBitmap(s_oSpriteLibrary.getSprite("forecast_panel"));
		c.addChild(b);
		this._initForecastBets()
	};
	this.unload = function () {
		for (var a in b) - 1 < a.indexOf("forecast_") && b[a].unload()
	};
	this._initForecastBets = function () {
		b = [];
		for (var a = [{
			x: 26,
			y: 5
		}, {
			x: 250,
			y: 5
		}, {
			x: 474,
			y: 5
		}, {
			x: 698,
			y: 5
		}, {
			x: 26,
			y: 252
		}, {
			x: 250,
			y: 252
		}, {
			x: 474,
			y: 252
		}, {
			x: 698,
			y: 252
		}], c = 0; c < NUM_HORSES; c++) this._placeForecastBetForHorse(c,
			a[c].x, a[c].y)
	};
	this._placeForecastBetForHorse = function (a, d, e) {
		var f = s_oSpriteLibrary.getSprite("odd_bg"),
			k = s_oSpriteLibrary.getSprite("bet_place"),
			g = s_oSpriteLibrary.getSprite("bibs"),
			l = g.width / 4,
			x = g.height / 2;
		g = new createjs.SpriteSheet({
			images: [g],
			frames: {
				width: l,
				height: x
			},
			animations: {
				bib_0: [0],
				bib_1: [1],
				bib_2: [2],
				bib_3: [3],
				bib_4: [4],
				bib_5: [5],
				bib_6: [6],
				bib_7: [7]
			}
		});
		for (var u = 0; u < NUM_HORSES; u++)
			if (u !== a) {
				var m = createSprite(g, "bib_" + a, 0, 0, l, x);
				m.x = d;
				m.y = e;
				m.scaleX = m.scaleY = .55;
				c.addChild(m);
				var y =
					new createjs.Text("X", "12px " + PRIMARY_FONT, "#fff");
				y.textAlign = "center";
				y.textBaseline = "middle";
				y.x = d + .55 * l + 10;
				y.y = e + .55 * x / 2;
				c.addChild(y);
				var w = createSprite(g, "bib_" + u, 0, 0, l / 3, x / 2);
				w.x = y.x + 10;
				w.y = m.y;
				w.scaleX = w.scaleY = .55;
				c.addChild(w);
				y = createBitmap(f);
				y.x = w.x + .55 * l + 10;
				y.y = m.y + 2;
				c.addChild(y);
				m = new createjs.Text(s_oGameSettings.getForecastOdd(a, u), "18px " + PRIMARY_FONT, "#fff");
				m.textAlign = "center";
				m.textBaseline = "alphabetic";
				m.x = y.x + f.width / 2;
				m.y = y.y + f.height / 2 + 8;
				c.addChild(m);
				m = new CButBet(y.x +
					f.width + .72 * k.width / 2 + 5, y.y + .72 * k.height / 2 - 2, k, .45, c);
				m.setScale(.6);
				m.addEventListenerWithParams(ON_MOUSE_UP, this._onForecastClicked, this, {
					first: a,
					second: u
				});
				b["forecast_" + a + "_" + u] = m;
				e += .55 * (x - 14) + 3
			}
	};
	this.setX = function (b) {
		c.x = b
	};
	this._onForecastClicked = function (a) {
		var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
		s_oBetPanel.setForecastBet(a.first, a.second, c, b["forecast_" + a.first + "_" + a.second]) && b["forecast_" + a.first + "_" + a.second].increaseBet(c)
	};
	var l = d;
	this._init(a, e)
}

function CBetList() {
	var a, e, d;
	this._init = function () {
		this.reset()
	};
	this.reset = function () {
		a = [];
		for (var b = 0; b < NUM_HORSES; b++) a[b] = [], a[b].place_1 = 0, a[b].place_2 = 0, a[b].place_3 = 0;
		e = [];
		for (b = 0; b < NUM_HORSES; b++) {
			e[b] = [];
			for (var c = 0; c < NUM_HORSES; c++) e[b][c] = 0
		}
		d = []
	};
	this.addSimpleBet = function (b, c, e) {
		a[b]["place_" + c] += e;
		var f = 0;
		switch (c) {
			case 1:
				f = e * s_oGameSettings.getOddWin(b);
				break;
			case 2:
				f = e * s_oGameSettings.getOddPlace(b);
				break;
			case 3:
				f = e * s_oGameSettings.getOddShow(b)
		}
		d.push({
			type_bet: "simple",
			horses: [{
				index: b,
				place: c
			}],
			bet: e,
			win: f
		})
	};
	this.addForecastBet = function (b, a, l) {
		e[b][a] += l;
		d.push({
			type_bet: "forecast",
			horses: [{
				index: b,
				place: 1
			}, {
				index: a,
				place: 2
			}],
			bet: l,
			win: l * s_oGameSettings.getForecastOdd(b, a)
		})
	};
	this.getMinWin = function () {
		if (0 < d.length) {
			for (var b = d[0].win, a = 1; a < d.length; a++) b > d[a].win && (b = d[a].win);
			return b
		}
		return 0
	};
	this.getTotBet = function () {
		if (0 < d.length) {
			var tot_win = 0
			for (var i = 0; i < d.length; i++) {
				tot_win += d[i].bet
			}
			return tot_win
		}
		return 0;
	}
	this.getTotWinWithCurRank = function (b) {
		var c = 0,
			d = [];
		if (0 < a[b[0]].place_1) {
			var f = a[b[0]].place_1 * s_oGameSettings.getOddWin(b[0]);
			f = parseFloat(f.toFixed(2));
			c += f;
			d.push({
				win: f,
				horses: b[0],
				bet: a[b[0]].place_1,
				type: "win"
			})
		}
		0 < a[b[0]].place_2 && (f = a[b[0]].place_2 * s_oGameSettings.getOddPlace(b[0]), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: b[0],
			bet: a[b[0]].place_2,
			type: "place"
		}));
		0 < a[b[1]].place_2 && (f = a[b[1]].place_2 * s_oGameSettings.getOddPlace(b[1]), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: b[1],
			bet: a[b[1]].place_2,
			type: "place"
		}));
		0 < a[b[0]].place_3 && (f = a[b[0]].place_3 * parseFloat(s_oGameSettings.getOddShow(b[0])), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: b[0],
			bet: a[b[0]].place_3,
			type: "show"
		}));
		0 < a[b[1]].place_3 && (f = a[b[1]].place_3 * s_oGameSettings.getOddShow(b[1]), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: b[1],
			bet: a[b[1]].place_3,
			type: "show"
		}));
		0 < a[b[2]].place_3 && (f = a[b[2]].place_3 * s_oGameSettings.getOddShow(b[2]), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: b[2],
			bet: a[b[2]].place_3,
			type: "show"
		}));
		0 < e[b[0]][b[1]] && (f = e[b[0]][b[1]] * s_oGameSettings.getForecastOdd(b[0], b[1]), f = parseFloat(f.toFixed(2)), c += f, d.push({
			win: f,
			horses: [b[0], b[1]],
			bet: e[b[0]][b[1]],
			type: "forecast"
		}));
		return {
			tot_win: c,
			win_list: d
		}
	};
	s_oBetList = this;
	this._init()
}
var s_oBetList = null;

function CFichesController(a, e) {
	var d, b, c, l, f, k, g, h, n, r, q, x;
	this._init = function (a) {
		l = a;
		n = new createjs.Container;
		u.addChild(n);
		k = new CVector2;
		k.set(n.x, n.y);
		r = new createjs.Container;
		u.addChild(r);
		a *= 18;
		x = new createjs.Text("", a + "px " + PRIMARY_FONT, "#000");
		x.textAlign = "center";
		r.addChild(x);
		q = new createjs.Text("", a + "px " + PRIMARY_FONT, "#fff");
		q.textAlign = "center";
		r.addChild(q);
		c = f = b = 0;
		d = !1
	};
	this.addEventListener = function (b, a, c) { };
	this.reset = function () {
		d = !1;
		c = 0;
		n.removeAllChildren();
		n.x = k.getX();
		n.y = k.getY();
		x.text = "";
		q.text = ""
	};
	this.setPrevValue = function (b) {
		f = b
	};
	this.refreshFiches = function (b, d, e) {
		b = b.sortOn("value", "index");
		for (var f = d + FICHE_WIDTH * a / 2, h = e + FICHE_WIDTH * a / 2, g = c = 0, k = 0; k < b.length; k++)(new CFicheBut(b[k].index, f, h, a, n)).disable(), h -= 5, g++, 9 < g && (g = 0, f += FICHE_WIDTH, h = e), c += b[k].value;
		playSound("chip", 1, 0);
		q.x = d;
		q.y = e + 25 * l;
		q.text = c.toFixed(2) + TEXT_CURRENCY;
		x.x = d + 2;
		x.y = e + 27 * l;
		x.text = c.toFixed(2) + TEXT_CURRENCY
	};
	this.createFichesPile = function (b, a, c) {
		this.reset();
		var d = CHIP_VALUES,
			e = [];
		do {
			for (var f =
				d[d.length - 1], h = d.length - 1; f > b;) h--, f = d[h];
			h = Math.floor(b / f);
			for (var g = 0; g < h; g++) e.push({
				value: f,
				index: s_oGameSettings.getIndexForFiches(f)
			});
			f = Math.floor(b / f) === b / f ? 0 : b % f;
			b = f.toFixed(2)
		} while (0 < f);
		this.refreshFiches(e, a, c * l)
	};
	this.initMovement = function (b, a) {
		f = c;
		g = new CVector2(n.x, n.y);
		h = new CVector2(b, a);
		q.text = "";
		x.text = "";
		d = !0
	};
	this.getValue = function () {
		return c
	};
	this.getPrevBet = function () {
		return f
	};
	this.update = function (a) {
		if (d)
			if (b += a, b > TIME_FICHES_MOV) b = 0, d = !1;
			else {
				a = easeInOutCubic(b, 0, 1, TIME_FICHES_MOV);
				var c = new CVector2;
				c = tweenVectors(g, h, a, c);
				n.x = c.getX();
				n.y = c.getY()
			}
	};
	var u = e;
	this._init(a)
}

function CButBet(a, e, d, b, c) {
	var l, f, k, g, h, n, r, q, x, u = !1,
		m, y;
	this._init = function (b, a, c, d) {
		l = 0;
		f = [];
		k = [];
		h = [];
		y = new createjs.Container;
		y.x = b;
		y.y = a;
		w.addChild(y);
		g = createBitmap(c);
		r = n = 1;
		g.regX = c.width / 2;
		g.regY = c.height / 2;
		s_bMobile || (g.cursor = "pointer");
		y.addChild(g);
		this._initListener();
		m = new CFichesController(d, y)
	};
	this.unload = function () {
		g.off("mousedown", q);
		g.off("pressup", x);
		w.removeChild(y)
	};
	this.setVisible = function (b) {
		g.visible = b
	};
	this.setCursorType = function (b) {
		g.cursor = b
	};
	this._initListener = function () {
		q =
			g.on("mousedown", this.buttonDown);
		x = g.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (b, a, c) {
		f[b] = a;
		k[b] = c
	};
	this.addEventListenerWithParams = function (b, a, c, d) {
		f[b] = a;
		k[b] = c;
		h[b] = d
	};
	this.buttonRelease = function () {
		u || (g.scaleX = 0 < n ? n : -n, g.scaleY = r, playSound("chip", 1, 0), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP], h[ON_MOUSE_UP]))
	};
	this.buttonDown = function () {
		u || (g.scaleX = 0 < n ? .9 * n : .9 * -n, g.scaleY = .9 * r, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], h[ON_MOUSE_DOWN]))
	};
	this.rotation =
		function (b) {
			g.rotation = b
		};
	this.getButton = function () {
		return g
	};
	this.setPosition = function (b, a) {
		g.x = b;
		g.y = a
	};
	this.setX = function (b) {
		g.x = b
	};
	this.setY = function (b) {
		g.y = b
	};
	this.getButtonImage = function () {
		return g
	};
	this.block = function (b) {
		u = b;
		g.scaleX = n;
		g.scaleY = r
	};
	this.setScaleX = function (b) {
		n = g.scaleX = b
	};
	this.setScale = function (b) {
		r = n = b;
		g.scaleX = g.scaleY = b
	};
	this.increaseBet = function (b) {
		l += b;
		m.createFichesPile(l.toFixed(2), 0, -4)
	};
	this.clearBet = function () {
		l = 0;
		m.reset()
	};
	this.getX = function () {
		return g.x
	};
	this.getY =
		function () {
			return g.y
		};
	this.pulseAnimation = function () {
		createjs.Tween.get(g).to({
			scaleX: .9 * n,
			scaleY: .9 * r
		}, 850, createjs.Ease.quadOut).to({
			scaleX: n,
			scaleY: r
		}, 650, createjs.Ease.quadIn).call(function () {
			C.pulseAnimation()
		})
	};
	this.trebleAnimation = function () {
		createjs.Tween.get(g).to({
			rotation: 5
		}, 75, createjs.Ease.quadOut).to({
			rotation: -5
		}, 140, createjs.Ease.quadIn).to({
			rotation: 0
		}, 75, createjs.Ease.quadIn).wait(750).call(function () {
			C.trebleAnimation()
		})
	};
	this.removeAllTweens = function () {
		createjs.Tween.removeTweens(g)
	};
	this.getTotBet = function () {
		return l
	};
	var w = void 0 !== c ? c : s_oStage;
	this._init(a, e, d, b);
	var C = this;
	return this
}

function CVector2(a, e) {
	var d, b;
	this._init = function (a, e) {
		d = a;
		b = e
	};
	this.add = function (a, e) {
		d += a;
		b += e
	};
	this.addV = function (a) {
		d += a.getX();
		b += a.getY()
	};
	this.scalarDivision = function (a) {
		d /= a;
		b /= a
	};
	this.subV = function (a) {
		d -= a.getX();
		b -= a.getY()
	};
	this.scalarProduct = function (a) {
		d *= a;
		b *= a
	};
	this.invert = function () {
		d *= -1;
		b *= -1
	};
	this.dotProduct = function (a) {
		return d * a.getX() + b * a.getY()
	};
	this.set = function (a, e) {
		d = a;
		b = e
	};
	this.setV = function (a) {
		d = a.getX();
		b = a.getY()
	};
	this.length = function () {
		return Math.sqrt(d * d + b * b)
	};
	this.length2 =
		function () {
			return d * d + b * b
		};
	this.normalize = function () {
		var a = this.length();
		0 < a && (d /= a, b /= a)
	};
	this.getNormalize = function (a) {
		this.length();
		a.set(d, b);
		a.normalize()
	};
	this.rot90CCW = function () {
		var a = d;
		d = -b;
		b = a
	};
	this.rot90CW = function () {
		var a = d;
		d = b;
		b = -a
	};
	this.getRotCCW = function (a) {
		a.set(d, b);
		a.rot90CCW()
	};
	this.getRotCW = function (a) {
		a.set(d, b);
		a.rot90CW()
	};
	this.ceil = function () {
		d = Math.ceil(d);
		b = Math.ceil(b)
	};
	this.round = function () {
		d = Math.round(d);
		b = Math.round(b)
	};
	this.toString = function () {
		return "Vector2: " + d + ", " +
			b
	};
	this.print = function () {
		trace("Vector2: " + d + ", " + b)
	};
	this.getX = function () {
		return d
	};
	this.getY = function () {
		return b
	};
	this._init(a, e)
}

function CMsgBox() {
	var a, e, d, b, c;
	this._init = function () {
		d = new createjs.Container;
		d.alpha = 0;
		d.visible = !1;
		s_oStage.addChild(d);
		a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		d.addChild(a);
		e = new CTLText(d, CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 - 100, 400, 130, 34, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
		b = new CTextButton(CANVAS_WIDTH / 2, 500, s_oSpriteLibrary.getSprite("fiche_panel"), TEXT_RECHARGE, PRIMARY_FONT, "#fff", 30, d);
		b.setVisible(!1);
		b.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
		c =
			new CGfxButton(CANVAS_WIDTH / 2 + 205, CANVAS_HEIGHT / 2 - 130, s_oSpriteLibrary.getSprite("but_exit"), d);
		c.addEventListener(ON_MOUSE_UP, this._onExit, this)
	};
	this.unload = function () {
		b.unload();
		c.unload()
	};
	this.show = function (a, c) {
		e.refreshText(a);
		d.visible = !0;
		createjs.Tween.get(d).to({
			alpha: 1
		}, 500);
		c ? b.setVisible(!0) : b.setVisible(!1)
	};
	this._onExit = function () {
		d.visible = !1
	};
	this._onRecharge = function () {
		$(s_oMain).trigger("recharge");
		d.visible = !1
	};
	this._init();
	return this
}

function CTrackBg(a) {
	var e, d, b, c, l, f;
	this._init = function () {
		f = new createjs.Container;
		k.addChild(f);
		d = 0;
		b = 3;
		c = 0;
		l = [];
		for (var a = 0; a < NUM_TRACK_BG; a++) {
			var h = createBitmap(s_oSpriteLibrary.getSprite("bg_track_" + a));
			h.scaleX = h.scaleY = 1.25;
			0 < a && (h.visible = !1);
			f.addChild(h);
			l[a] = h
		}
		e = !1
	};
	this.startTrack = function () {
		e = !0
	};
	this.update = function () {
		if (!e) return d;
		c++;
		c === b && (c = 0, d++, l[d].visible = !0, l[d - 1].visible = !1, d === l.length - 1 ? (e = !1, s_oGame.checkHorseArrival()) : 5 > d ? s_oGame.moveCages(d) : b = 2);
		return d
	};
	var k = a;
	this._init()
}

function CHorse(a, e, d, b, c, l) {
	var f, k, g, h, n, r, q, x, u, m, y, w;
	this._init = function (a, b, c, d, e) {
		k = !1;
		g = b;
		q = 0;
		x = ARRIVAL_X - HORSE_WIDTH / 2 * d + 70;
		u = c;
		m = e;
		w = new createjs.Container;
		w.x = a.x;
		w.y = a.y;
		w.scaleX = w.scaleY = 1.25 * d;
		w.regX = HORSE_WIDTH / 2;
		w.regY = HORSE_HEIGHT;
		C.addChild(w);
		a = s_oSpriteLibrary.getSprite("horse_" + b + "_a");
		b = s_oSpriteLibrary.getSprite("horse_" + b + "_b");
		b = new createjs.SpriteSheet({
			framerate: 30,
			images: [a, b],
			frames: [
				[1, 1, 249, 191, 0, -56, -19],
				[252, 1, 307, 193, 0, -8, -19],
				[561, 1, 308, 196, 0, -4, -16],
				[1, 199, 307, 198,
					0, -2, -14
				],
				[310, 199, 306, 201, 0, -1, -11],
				[618, 199, 307, 205, 0, 0, -7],
				[1, 406, 305, 209, 0, -1, -3],
				[308, 406, 304, 211, 0, -3, -1],
				[614, 406, 301, 209, 0, -8, 0],
				[1, 619, 295, 207, 0, -17, -2],
				[298, 619, 295, 204, 0, -19, -5],
				[595, 619, 301, 203, 0, -21, -8],
				[1, 1, 284, 200, 1, -35, -11],
				[287, 1, 293, 198, 1, -31, -14],
				[582, 1, 306, 196, 1, -20, -16]
			],
			animations: {
				idle: [0, 0],
				anim: [1, 14],
				start: [15],
				anim_1: [1, 14, "anim"],
				anim_2: [6, 14, "anim"],
				anim_3: [11, 14, "anim"]
			}
		});
		y = createSprite(b, "idle", HORSE_WIDTH / 2, HORSE_HEIGHT, HORSE_WIDTH, HORSE_HEIGHT);
		w.addChild(y)
	};
	this.startRace =
		function () {
			y.gotoAndPlay("anim_" + (Math.floor(3 * Math.random()) + 1));
			r = w.x;
			h = 0;
			n = m[q].frame;
			f = !0
		};
	this.pauseAnim = function () {
		y.paused = !0
	};
	this.unpauseAnim = function () {
		y.paused = !1
	};
	this.getX = function () {
		return w.x
	};
	this.update = function (a) {
		if (f) {
			h++;
			if (h >= n) q++, q < m.length ? (h = 0, n = m[q].frame, r = w.x) : f = !1;
			else {
				var b = s_oTweenController.easeLinear(h, 0, 1, n);
				b = s_oTweenController.tweenValue(r, m[q].x, b);
				w.x = b
			}
			a && !k && w.x >= x && (k = !0, s_oGame.horsePhotofinish(g - 1, u))
		}
	};
	var C = l;
	this._init(a, e, d, b, c)
}

function CTweenController() {
	this.tweenValue = function (a, e, d) {
		return a + d * (e - a)
	};
	this.easeLinear = function (a, e, d, b) {
		return d * a / b + e
	};
	this.easeInCubic = function (a, e, d, b) {
		b = (a /= b) * a * a;
		return e + d * b
	};
	this.easeBackInQuart = function (a, e, d, b) {
		b = (a /= b) * a;
		return e + d * (2 * b * b + 2 * b * a + -3 * b)
	};
	this.easeInBack = function (a, e, d, b) {
		return d * (a /= b) * a * (2.70158 * a - 1.70158) + e
	};
	this.easeOutCubic = function (a, e, d, b) {
		return d * ((a = a / b - 1) * a * a + 1) + e
	};
	this.getTrajectoryPoint = function (a, e) {
		var d = new createjs.Point,
			b = (1 - a) * (1 - a),
			c = a * a;
		d.x = b *
			e.start.x + 2 * (1 - a) * a * e.traj.x + c * e.end.x;
		d.y = b * e.start.y + 2 * (1 - a) * a * e.traj.y + c * e.end.y;
		return d
	}
}

function CRankingGui(a, e) {
	var d, b, c, l, f, k, g, h;
	this._init = function (a) {
		var e = s_oSpriteLibrary.getSprite("rank_panel");
		d = CANVAS_HEIGHT - e.height + 4;
		h = new createjs.Container;
		h.x = 0;
		h.y = d;
		n.addChild(h);
		e = createBitmap(e);
		h.addChild(e);
		f = [];
		f[0] = new createjs.Point(938, 44);
		f[1] = new createjs.Point(818, 44);
		f[2] = new createjs.Point(695, 44);
		f[3] = new createjs.Point(570, 44);
		f[4] = new createjs.Point(450, 44);
		f[5] = new createjs.Point(320, 44);
		f[6] = new createjs.Point(201, 44);
		f[7] = new createjs.Point(86, 44);
		this._initBibs(a);
		a = s_oSpriteLibrary.getSprite("fill_bar");
		k = createBitmap(a);
		k.x = 130;
		k.y = 114;
		h.addChild(k);
		b = a.width;
		c = b / NUM_TRACK_BG;
		g = new createjs.Shape;
		g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(k.x, k.y - 2, .01, 10);
		h.addChild(g);
		k.mask = g;
		this.refreshButtonPos()
	};
	this.refreshButtonPos = function () {
		h.y = d - s_iOffsetY
	};
	this._initBibs = function (a) {
		l = [];
		for (var b = 0; b < NUM_HORSES; b++) {
			var c = new createjs.Container;
			c.x = f[b].x;
			c.y = f[b].y;
			h.addChild(c);
			var d = createBitmap(s_oSpriteLibrary.getSprite("bib_gui_" + b));
			c.addChild(d);
			new CTLText(c, -5, 2, 60, 12, 12, "right", "#fff", TERTIARY_FONT, 1, 0, 0, a[b].toUpperCase(), !0, !0, !1, !1);
			l.push(c)
		}
	};
	this.refreshRank = function (a) {
		for (var b = 0; b < a.length; b++) createjs.Tween.get(l[a[b].index]).to({
			x: f[b].x
		}, 1E3, createjs.Ease.cubicOut)
	};
	this.refreshRadar = function (b) {
		g.graphics.clear();
		g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(k.x, k.y - 2, c * b, 10)
	};
	var n = e;
	this._init(a)
}

function CArrivalPanel(a, e, d) {
	var b, c, l, f, k, g, h, n;
	this._init = function (a, d) {
		f = !1;
		k = 0;
		c = a;
		l = d;
		n = new createjs.Container;
		n.x = c;
		n.y = l;
		r.addChild(n);
		var e = s_oSpriteLibrary.getSprite("panel_arrival"),
			m = createBitmap(e);
		n.addChild(m);
		b = CANVAS_WIDTH - e.width - s_iOffsetX;
		e = s_oSpriteLibrary.getSprite("bibs");
		m = e.width / 4;
		var q = e.height / 2;
		e = new createjs.SpriteSheet({
			images: [e],
			frames: {
				width: m,
				height: q
			},
			animations: {
				bib_0: [0],
				bib_1: [1],
				bib_2: [2],
				bib_3: [3],
				bib_4: [4],
				bib_5: [5],
				bib_6: [6],
				bib_7: [7]
			}
		});
		g = [];
		h = [];
		for (var x =
			4, C = 0; C < NUM_HORSES; C++) {
			var B = createSprite(e, "bib_0", 0, 0, m, q);
			B.x = 10;
			B.y = x;
			B.visible = !1;
			B.scaleX = B.scaleY = .45;
			n.addChild(B);
			h.push(B);
			B = new CTLText(n, B.x + .45 * m + 5, B.y + 5, 120, 20, 16, "left", "#fff", TERTIARY_FONT, 1, 0, 0, " ", !0, !0, !1, !1);
			g.push(B);
			x += .45 * q + 1
		}
	};
	this.refreshButtonPos = function () {
		n.x = f ? b - s_iOffsetX : c - s_iOffsetX
	};
	this.show = function () {
		f = !0;
		createjs.Tween.get(n).to({
			x: b
		}, 500, createjs.Ease.cubicOut)
	};
	this.hide = function () {
		f = !1;
		createjs.Tween.get(n).to({
			x: c
		}, 500, createjs.Ease.cubicOut)
	};
	this.refreshRank =
		function (b, a) {
			g[k].refreshText(a);
			h[k].gotoAndStop("bib_" + b);
			h[k].visible = !0;
			0 === k && this.show();
			k++
		};
	var r = d;
	this._init(a, e)
}

function CWinPanel(a) {
	var e, d, b, c, l, f, k;
	this._init = function () {
		k = new createjs.Container;
		c = k.on("click", function () { });
		k.visible = !1;
		g.addChild(k);
		var a = createBitmap(s_oSpriteLibrary.getSprite("win_panel"));
		k.addChild(a);
		a = s_oSpriteLibrary.getSprite("bibs");
		e = a.width / 4;
		d = a.height / 2;
		b = new createjs.SpriteSheet({
			images: [a],
			frames: {
				width: e,
				height: d
			},
			animations: {
				bib_0: [0],
				bib_1: [1],
				bib_2: [2],
				bib_3: [3],
				bib_4: [4],
				bib_5: [5],
				bib_6: [6],
				bib_7: [7]
			}
		});
		f = new CTLText(k, CANVAS_WIDTH / 2 + 16, 470, 120, 80, 30, "center", "#ffde00",
			SECONDARY_FONT, 1, 0, 0, TEXT_WIN, !0, !0, !0, !1);
		l = new CGfxButton(800, 510, s_oSpriteLibrary.getSprite("but_skip"), k);
		l.addEventListener(ON_MOUSE_UP, this.onSkip, this)
	};
	this.unload = function () {
		k.off("click", c);
		l.unload()
	};
	this.show = function (a, c, g) {
		f.refreshText(TEXT_WIN + "\n" + a + TEXT_CURRENCY);
		a = 240;
		for (var h = 0; 3 > h; h++) {
			var l = s_oSpriteLibrary.getSprite("horse_" + (g[h] + 1) + "_a"),
				n = s_oSpriteLibrary.getSprite("horse_" + (g[h] + 1) + "_b");
			l = new createjs.SpriteSheet({
				images: [l, n],
				frames: [
					[1, 1, 249, 191, 0, -56, -19],
					[252, 1, 307,
						193, 0, -8, -19
					],
					[561, 1, 308, 196, 0, -4, -16],
					[1, 199, 307, 198, 0, -2, -14],
					[310, 199, 306, 201, 0, -1, -11],
					[618, 199, 307, 205, 0, 0, -7],
					[1, 406, 305, 209, 0, -1, -3],
					[308, 406, 304, 211, 0, -3, -1],
					[614, 406, 301, 209, 0, -8, 0],
					[1, 619, 295, 207, 0, -17, -2],
					[298, 619, 295, 204, 0, -19, -5],
					[595, 619, 301, 203, 0, -21, -8],
					[1, 1, 284, 200, 1, -35, -11],
					[287, 1, 293, 198, 1, -31, -14],
					[582, 1, 306, 196, 1, -20, -16]
				],
				animations: {
					idle: [1, 1],
					anim: [1, 14],
					start: [15],
					anim_1: [1, 14, "anim"],
					anim_2: [6, 14, "anim"],
					anim_3: [11, 14, "anim"]
				}
			});
			l = createSprite(l, "idle", HORSE_WIDTH / 2, HORSE_HEIGHT,
				HORSE_WIDTH, HORSE_HEIGHT);
			l.scaleX = l.scaleY = .35;
			l.x = CANVAS_WIDTH / 2 + 90;
			l.y = a;
			k.addChild(l);
			a += 68
		}
		a = CANVAS_HEIGHT / 2 - 150;
		for (g = 0; g < c.length; g++) "forecast" === c[g].type ? (l = c[g].horses, n = createSprite(b, "bib_" + l[0], 0, 0, e, d), n.x = 380, n.y = a, n.scaleX = n.scaleY = .5, k.addChild(n), h = new createjs.Text("X", "20px " + PRIMARY_FONT, "#fff"), h.textAlign = "center", h.textBaseline = "middle", h.x = n.x + .5 * e + 10, h.y = a + 18, k.addChild(h), l = createSprite(b, "bib_" + l[1], 0, 0, e, d), l.x = h.x + 10, l.y = a, l.scaleX = l.scaleY = .5, k.addChild(l), h = l.x + 35) :
			(n = createSprite(b, "bib_" + c[g].horses, 0, 0, e, d), n.x = 380, n.y = a, n.scaleX = n.scaleY = .5, k.addChild(n), h = n.x + 35), new CTLText(k, h, a + 8, 80, 20, 20, "left", "#ffb400", PRIMARY_FONT, 1, 0, 0, c[g].type.toUpperCase(), !0, !0, !1, !1), new CTLText(k, h + 84, a + 8, 80, 20, 20, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_WIN + ": " + c[g].win + TEXT_CURRENCY, !0, !0, !1, !1), a += 35;
		k.visible = !0;
		k.alpha = 0;
		createjs.Tween.get(k).wait(1E3).to({
			alpha: 1
		}, 500, createjs.Ease.cubicOut)
	};
	this.onSkip = function () {
		s_oGame.returnInBetPanel()
	};
	var g = a;
	this._init()
}

function CLosePanel(a) {
	var e, d, b, c, l, f, k;
	this._init = function () {
		k = new createjs.Container;
		k.visible = !1;
		l = k.on("click", function () { });
		g.addChild(k);
		var a = createBitmap(s_oSpriteLibrary.getSprite("lose_panel"));
		k.addChild(a);
		new CTLText(k, CANVAS_WIDTH / 2 - 200, 260, 400, 50, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_NO_WIN, !0, !0, !1, !1);
		a = s_oSpriteLibrary.getSprite("bibs");
		e = a.width / 4;
		d = a.height / 2;
		c = new createjs.SpriteSheet({
			images: [a],
			frames: {
				width: e,
				height: d
			},
			animations: {
				bib_0: [0],
				bib_1: [1],
				bib_2: [2],
				bib_3: [3],
				bib_4: [4],
				bib_5: [5],
				bib_6: [6],
				bib_7: [7]
			}
		});
		b = [];
		a = createSprite(c, "bib_0", 0, 0, e, d);
		a.x = CANVAS_WIDTH / 2 - 100 - e / 2;
		a.y = 360;
		k.addChild(a);
		b.push(a);
		a = createSprite(c, "bib_0", 0, 0, e, d);
		a.x = CANVAS_WIDTH / 2 - e / 2;
		a.y = 360;
		k.addChild(a);
		b.push(a);
		a = createSprite(c, "bib_0", 0, 0, e, d);
		a.x = CANVAS_WIDTH / 2 + 100 - e / 2;
		a.y = 360;
		k.addChild(a);
		b.push(a);
		new CTLText(k, CANVAS_WIDTH / 2 - 120, 450, 240, 30, 30, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_WIN + ": 0.00 " + TEXT_CURRENCY, !0, !0, !1, !1);
		f = new CGfxButton(800, 510, s_oSpriteLibrary.getSprite("but_skip"),
			k);
		f.addEventListener(ON_MOUSE_UP, this.onSkip, this)
	};
	this.unload = function () {
		k.off("click", l);
		f.unload()
	};
	this.show = function (a) {
		for (var c = 0; 3 > c; c++) b[c].gotoAndStop("bib_" + a[c]);
		k.visible = !0;
		k.alpha = 0;
		createjs.Tween.get(k).wait(1E3).to({
			alpha: 1
		}, 500, createjs.Ease.cubicOut)
	};
	this.onSkip = function () {
		s_oGame.returnInBetPanel()
	};
	var g = a;
	this._init()
}

function CButStartRace(a, e, d, b, c, l, f) {
	var k, g, h, n, r;
	this._init = function (a, b, c, d, e, f) {
		k = [];
		g = [];
		d = createBitmap(c);
		h = new createjs.Container;
		h.x = a;
		h.y = b;
		h.regX = c.width / 2;
		h.regY = c.height / 2;
		h.addChild(d);
		q.addChild(h);
		s_bMobile || (h.cursor = "pointer");
		this._initListener()
	};
	this.unload = function () {
		h.off("mousedown", n);
		h.off("pressup", r);
		q.removeChild(h)
	};
	this.setVisible = function (a) {
		h.visible = a
	};
	this._initListener = function () {
		n = h.on("mousedown", this.buttonDown);
		r = h.on("pressup", this.buttonRelease)
	};
	this.addEventListener =
		function (a, b, c) {
			k[a] = b;
			g[a] = c
		};
	this.buttonRelease = function () {
		h.scaleX = 1;
		h.scaleY = 1;
		playSound("click", 1, 0);
		k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(g[ON_MOUSE_UP])
	};
	this.buttonDown = function () {
		h.scaleX = .9;
		h.scaleY = .9;
		k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
	};
	this.setPosition = function (a, b) {
		h.x = a;
		h.y = b
	};
	this.setX = function (a) {
		h.x = a
	};
	this.setY = function (a) {
		h.y = a
	};
	this.getButtonImage = function () {
		return h
	};
	this.getX = function () {
		return h.x
	};
	this.getY = function () {
		return h.y
	};
	var q = f;
	this._init(a, e,
		d, b, c, l);
	return this
}

function CAreYouSurePanel(a) {
	var e, d, b, c;
	this._init = function () {
		c = new createjs.Container;
		e = c.on("click", function () { });
		c.visible = !1;
		l.addChild(c);
		var a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		c.addChild(a);
		new CTLText(c, CANVAS_WIDTH / 2 - 200, 290, 400, 100, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_YOU_SURE, !0, !0, !0, !1);
		d = new CGfxButton(CANVAS_WIDTH / 2 + 180, 500, s_oSpriteLibrary.getSprite("but_yes"), c);
		d.addEventListener(ON_MOUSE_UP, this._onReleaseYes, this);
		b = new CGfxButton(CANVAS_WIDTH / 2 - 180,
			500, s_oSpriteLibrary.getSprite("but_no"), c);
		b.addEventListener(ON_MOUSE_UP, this._onReleaseNo, this)
	};
	this.unload = function () {
		c.off("click", e);
		b.unload();
		d.unload()
	};
	this.show = function () {
		c.visible = !0;
		c.alpha = 0;
		createjs.Tween.get(c).to({
			alpha: 1
		}, 500, createjs.Ease.cubicOut)
	};
	this._onReleaseYes = function () {
		s_oGame.onExit()
	};
	this._onReleaseNo = function () {
		c.visible = !1;
		s_oGame.unpause()
	};
	var l = a;
	this._init(a)
}

function CGate(a, e, d, b) {
	var c;
	this._init = function (a, b, d) {
		d = s_oSpriteLibrary.getSprite("gate_" + d);
		var e = new createjs.SpriteSheet({
			images: [d],
			frames: {
				width: d.width / 5,
				height: d.height
			},
			animations: {
				idle: [0, 0],
				anim: [0, 4, "stop_anim"],
				stop_anim: [4, 4]
			}
		});
		c = createSprite(e, "idle", 0, 0, d.width / 5, d.height);
		c.x = a;
		c.y = b;
		l.addChild(c)
	};
	this.unload = function () {
		l.removeChild(c)
	};
	this.playAnim = function () {
		c.gotoAndPlay("anim")
	};
	this.decreaseX = function (a) {
		c.x -= a
	};
	var l = b;
	this._init(a, e, d)
}
CTLText.prototype = {
	constructor: CTLText,
	__autofit: function () {
		if (this._bFitText) {
			for (var a = this._iFontSize;
				(this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
			this._iFontSize = a
		}
	},
	__verticalAlign: function () {
		if (this._bVerticalAlign) {
			var a = this._oText.getBounds().height;
			this._oText.y -=
				(a - this._iHeight) / 2 + this._iPaddingV
		}
	},
	__updateY: function () {
		this._oText.y = this._y + this._iPaddingV;
		switch (this._oText.textBaseline) {
			case "middle":
				this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
		}
	},
	__createText: function (a) {
		this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
		this._oText = new createjs.Text(a,
			this._iFontSize + "px " + this._szFont, this._szColor);
		this._oText.textBaseline = "middle";
		this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
		this._oText.textAlign = this._szAlign;
		this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
		switch (this._szAlign) {
			case "center":
				this._oText.x = this._x + this._iWidth / 2;
				break;
			case "left":
				this._oText.x = this._x + this._iPaddingH;
				break;
			case "right":
				this._oText.x = this._x + this._iWidth - this._iPaddingH
		}
		this._oContainer.addChild(this._oText);
		this.refreshText(a)
	},
	setVerticalAlign: function (a) {
		this._bVerticalAlign = a
	},
	setOutline: function (a) {
		null !== this._oText && (this._oText.outline = a)
	},
	setShadow: function (a, e, d, b) {
		null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, e, d, b))
	},
	setColor: function (a) {
		this._oText.color = a
	},
	setAlpha: function (a) {
		this._oText.alpha = a
	},
	removeTweens: function () {
		createjs.Tween.removeTweens(this._oText)
	},
	getText: function () {
		return this._oText
	},
	getY: function () {
		return this._y
	},
	getFontSize: function () {
		return this._iFontSize
	},
	refreshText: function (a) {
		"" === a && (a = " ");
		null === this._oText && this.__createText(a);
		this._oText.text = a;
		this._oText.font = this._iFontSize + "px " + this._szFont;
		this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
		this.__autofit();
		this.__updateY();
		this.__verticalAlign()
	}
};

function CTLText(a, e, d, b, c, l, f, k, g, h, n, r, q, x, u, m, y) {
	this._oContainer = a;
	this._x = e;
	this._y = d;
	this._iWidth = b;
	this._iHeight = c;
	this._bMultiline = m;
	this._iFontSize = l;
	this._szAlign = f;
	this._szColor = k;
	this._szFont = g;
	this._iPaddingH = n;
	this._iPaddingV = r;
	this._bVerticalAlign = u;
	this._bFitText = x;
	this._bDebug = y;
	this._oDebugShape = null;
	this._fLineHeightFactor = h;
	this._oText = null;
	q && this.__createText(q)
}

function CFicheBut(a, e, d, b, c) {
	var l, f, k, g = [],
		h, n;
	this._init = function (d, e) {
		var g = s_oSpriteLibrary.getSprite("fiche_" + a);
		l = !1;
		n = new createjs.Container;
		n.x = d;
		n.y = e;
		n.regX = g.width / 2;
		n.regY = g.height / 2;
		c.addChild(n);
		f = [];
		k = [];
		h = createBitmap(g);
		h.regX = g.width / 2;
		h.regY = g.height / 2;
		h.cursor = "pointer";
		n.addChild(h);
		n.scaleX = n.scaleY = b;
		new CTLText(n, -10, -10, 18, 18, 20, "center", COLOR_FICHES[a], PRIMARY_FONT, 1.1, 0, 0, CHIP_VALUES[a], !0, !0, !1, !1);
		this._initListener()
	};
	this.unload = function () {
		n.off("mousedown", this.buttonDown);
		n.off("pressup", this.buttonRelease);
		c.removeChild(n)
	};
	this.select = function () { };
	this.deselect = function () { };
	this.enable = function () {
		l = !1
	};
	this.disable = function () {
		l = !0
	};
	this.setVisible = function (a) {
		n.visible = a
	};
	this._initListener = function () {
		n.on("mousedown", this.buttonDown);
		n.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (a, b, c) {
		f[a] = b;
		k[a] = c
	};
	this.addEventListenerWithParams = function (a, b, c, d) {
		f[a] = b;
		k[a] = c;
		g = d
	};
	this.buttonRelease = function () {
		l || (playSound("click", 1, !1), n.scaleX = b, n.scaleY =
			b, f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP], g))
	};
	this.buttonDown = function () {
		l || (n.scaleX = .9 * b, n.scaleY = .9 * b, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], g))
	};
	this.setPosition = function (a, b) {
		n.x = a;
		n.y = b
	};
	this.setX = function (a) {
		n.x = a
	};
	this.setY = function (a) {
		n.y = a
	};
	this.getX = function () {
		return n.x
	};
	this.getY = function () {
		return n.y
	};
	this._init(e, d)
};