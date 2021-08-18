/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
	function a(a) {
		a = String(a);
		return a.charAt(0).toUpperCase() + a.slice(1)
	}

	function c(a, b) {
		var c = -1,
			e = a ? a.length : 0;
		if ("number" == typeof e && -1 < e && e <= h)
			for (; ++c < e;) b(a[c], c, a);
		else d(a, b)
	}

	function b(b) {
		b = String(b).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
	}

	function d(a, b) {
		for (var c in a) A.call(a, c) && b(a[c], c, a)
	}

	function f(b) {
		return null == b ? a(b) : B.call(b).slice(8, -1)
	}

	function e(a, b) {
		var c = null != a ? typeof a[b] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(c) &&
			("object" == c ? !!a[b] : !0)
	}

	function m(a) {
		return String(a).replace(/([ -])(?!$)/g, "$1?")
	}

	function k(a, b) {
		var d = null;
		c(a, function (c, e) {
			d = b(d, c, e, a)
		});
		return d
	}

	function p(a) {
		function c(c) {
			return k(c, function (c, d) {
				var e = d.pattern || m(d);
				!c && (c = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
					" " + c[1]), d = d.label || d, c = b(c[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return c
			})
		}

		function n(b) {
			return k(b, function (b, c) {
				return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
			})
		}
		var w = t,
			l = a && "object" == typeof a && "String" != f(a);
		l && (w = a, a = null);
		var u = w.navigator || {},
			h = u.userAgent || "";
		a || (a = h);
		var A = l ? !!u.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(B.toString()),
			C = l ? "Object" : "ScriptBridgingProxyObject",
			D = l ? "Object" : "Environment",
			H = l && w.java ? "JavaPackage" : f(w.java),
			P = l ? "Object" : "RuntimeObject";
		D = (H = /\bJava/.test(H) && w.java) && f(w.environment) == D;
		var Q = H ? "a" : "\u03b1",
			R = H ? "b" : "\u03b2",
			M = w.document || {},
			F = w.operamini || w.opera,
			J = v.test(J = l && F ? F["[[Class]]"] : f(F)) ? J : F = null,
			g, K = a;
		l = [];
		var L = null,
			G = a == h;
		h = G && F && "function" == typeof F.version && F.version();
		var y = function (b) {
			return k(b, function (b, c) {
				return b || RegExp("\\b" + (c.pattern || m(c)) + "\\b", "i").exec(a) && (c.label ||
					c)
			})
		}([{
			label: "EdgeHTML",
			pattern: "Edge"
		}, "Trident", {
			label: "WebKit",
			pattern: "AppleWebKit"
		}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			q = function (b) {
				return k(b, function (b, c) {
					return b || RegExp("\\b" + (c.pattern || m(c)) + "\\b", "i").exec(a) && (c.label || c)
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
			z = c([{
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
			E = function (b) {
				return k(b, function (b, c, d) {
					return b || (c[z] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)] || RegExp("\\b" + m(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
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
			r = function (c) {
				return k(c, function (c, d) {
					var e = d.pattern || m(d);
					if (!c && (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
						var l = c,
							n = d.label || d,
							f = {
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
						e && n && /^Win/i.test(l) && !/^Windows Phone /i.test(l) && (f = f[/[\d.]+$/.exec(l)]) && (l = "Windows " + f);
						l = String(l);
						e && n && (l = l.replace(RegExp(e, "i"), n));
						c = l = b(l.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
							" $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return c
				})
			}(["Windows Phone", "Android", "CentOS", {
				label: "Chrome OS",
				pattern: "CrOS"
			}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
				"Windows 98;", "Windows "
			]);
		y && (y = [y]);
		E && !z && (z = c([E]));
		if (g = /\bGoogle TV\b/.exec(z)) z = g[0];
		/\bSimulator\b/i.test(a) && (z = (z ? z + " " : "") + "Simulator");
		"Opera Mini" == q && /\bOPiOS\b/.test(a) && l.push("running in Turbo/Uncompressed mode");
		"IE" == q && /\blike iPhone OS\b/.test(a) ? (g = p(a.replace(/like iPhone OS/, "")), E = g.manufacturer, z = g.product) : /^iP/.test(z) ? (q || (q = "Safari"), r = "iOS" + ((g = / OS ([\d_]+)/i.exec(a)) ? " " + g[1].replace(/_/g, ".") : "")) : "Konqueror" != q || /buntu/i.test(r) ? E && "Google" != E && (/Chrome/.test(q) &&
			!/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(z)) || /\bAndroid\b/.test(r) && /^Chrome/.test(q) && /\bVersion\//i.test(a) ? (q = "Android Browser", r = /\bAndroid\b/.test(r) ? r : "Android") : "Silk" == q ? (/\bMobi/i.test(a) || (r = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && l.unshift("accelerated")) : "PaleMoon" == q && (g = /\bFirefox\/([\d.]+)\b/.exec(a)) ? l.push("identifying as Firefox " + g[1]) : "Firefox" == q && (g = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (r || (r = "Firefox OS"), z || (z = g[1])) : !q || (g = !/\bMinefield\b/i.test(a) &&
				/\b(?:Firefox|Safari)\b/.exec(q)) ? (q && !z && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(g + "/") + 8)) && (q = null), (g = z || E || r) && (z || E || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r)) && (q = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r) ? r : g) + " Browser")) : "Electron" == q && (g = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && l.push("Chromium " + g) : r = "Kubuntu";
		h || (h = n(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", m(q), "(?:Firefox|Minefield|NetFront)"]));
		if (g = "iCab" == y && 3 < parseFloat(h) && "WebKit" || /\bOpera\b/.test(q) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(y) && "WebKit" || !y && /\bMSIE\b/i.test(a) && ("Mac OS" == r ? "Tasman" : "Trident") || "WebKit" == y && /\bPlayStation\b(?! Vita\b)/i.test(q) && "NetFront") y = [g];
		"IE" == q && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (q += " Mobile", r = "Windows Phone " + (/\+$/.test(g) ? g : g + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (q = "IE Mobile", r = "Windows Phone 8.x",
			l.unshift("desktop mode"), h || (h = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != q && "Trident" == y && (g = /\brv:([\d.]+)/.exec(a)) && (q && l.push("identifying as " + q + (h ? " " + h : "")), q = "IE", h = g[1]);
		if (G) {
			if (e(w, "global"))
				if (H && (g = H.lang.System, K = g.getProperty("os.arch"), r = r || g.getProperty("os.name") + " " + g.getProperty("os.version")), D) {
					try {
						h = w.require("ringo/engine").version.join("."), q = "RingoJS"
					} catch (O) {
						(g = w.system) && g.global.system == w.system && (q = "Narwhal", r || (r = g[0].os || null))
					}
					q || (q = "Rhino")
				} else "object" == typeof w.process &&
					!w.process.browser && (g = w.process) && ("object" == typeof g.versions && ("string" == typeof g.versions.electron ? (l.push("Node " + g.versions.node), q = "Electron", h = g.versions.electron) : "string" == typeof g.versions.nw && (l.push("Chromium " + h, "Node " + g.versions.node), q = "NW.js", h = g.versions.nw)), q || (q = "Node.js", K = g.arch, r = g.platform, h = (h = /[\d.]+/.exec(g.version)) ? h[0] : null));
			else f(g = w.runtime) == C ? (q = "Adobe AIR", r = g.flash.system.Capabilities.os) : f(g = w.phantom) == P ? (q = "PhantomJS", h = (g = g.version || null) && g.major + "." + g.minor +
				"." + g.patch) : "number" == typeof M.documentMode && (g = /\bTrident\/(\d+)/i.exec(a)) ? (h = [h, M.documentMode], (g = +g[1] + 4) != h[1] && (l.push("IE " + h[1] + " mode"), y && (y[1] = ""), h[1] = g), h = "IE" == q ? String(h[1].toFixed(1)) : h[0]) : "number" == typeof M.documentMode && /^(?:Chrome|Firefox)\b/.test(q) && (l.push("masking as " + q + " " + h), q = "IE", h = "11.0", y = ["Trident"], r = "Windows");
			r = r && b(r)
		}
		h && (g = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(h) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (G && u.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
			"a") && (L = /b/i.test(g) ? "beta" : "alpha", h = h.replace(RegExp(g + "\\+?$"), "") + ("beta" == L ? R : Q) + (/\d+\+?/.exec(g) || ""));
		if ("Fennec" == q || "Firefox" == q && /\b(?:Android|Firefox OS)\b/.test(r)) q = "Firefox Mobile";
		else if ("Maxthon" == q && h) h = h.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(z)) "Xbox 360" == z && (r = null), "Xbox 360" == z && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(q) && (!q || z || /Browser|Mobi/.test(q)) || "Windows CE" != r && !/Mobi/i.test(a))
			if ("IE" == q && G) try {
				null === w.external &&
					l.unshift("platform preview")
			} catch (O) {
				l.unshift("embedded")
			} else (/\bBlackBerry\b/.test(z) || /\bBB10\b/.test(a)) && (g = (RegExp(z.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || h) ? (g = [g, /BB10/.test(a)], r = (g[1] ? (z = null, E = "BlackBerry") : "Device Software") + " " + g[0], h = null) : this != d && "Wii" != z && (G && F || /Opera/.test(q) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == q && /\bOS X (?:\d+\.){2,}/.test(r) || "IE" == q && (r && !/^Win/.test(r) && 5.5 < h || /\bWindows XP\b/.test(r) && 8 < h || 8 == h && !/\bTrident\b/.test(a))) && !v.test(g =
				p.call(d, a.replace(v, "") + ";")) && g.name && (g = "ing as " + g.name + ((g = g.version) ? " " + g : ""), v.test(q) ? (/\bIE\b/.test(g) && "Mac OS" == r && (r = null), g = "identify" + g) : (g = "mask" + g, q = J ? b(J.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(g) && (r = null), G || (h = null)), y = ["Presto"], l.push(g));
		else q += " Mobile";
		if (g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
			g = [parseFloat(g.replace(/\.(\d)$/, ".0$1")), g];
			if ("Safari" == q && "+" == g[1].slice(-1)) q = "WebKit Nightly", L = "alpha", h = g[1].slice(0, -1);
			else if (h == g[1] || h == (g[2] =
				(/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) h = null;
			g[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
			537.36 == g[0] && 537.36 == g[2] && 28 <= parseFloat(g[1]) && "WebKit" == y && (y = ["Blink"]);
			G && (A || g[1]) ? (y && (y[1] = "like Chrome"), g = g[1] || (g = g[0], 530 > g ? 1 : 532 > g ? 2 : 532.05 > g ? 3 : 533 > g ? 4 : 534.03 > g ? 5 : 534.07 > g ? 6 : 534.1 > g ? 7 : 534.13 > g ? 8 : 534.16 > g ? 9 : 534.24 > g ? 10 : 534.3 > g ? 11 : 535.01 > g ? 12 : 535.02 > g ? "13+" : 535.07 > g ? 15 : 535.11 > g ? 16 : 535.19 > g ? 17 : 536.05 > g ? 18 : 536.1 > g ? 19 : 537.01 > g ? 20 : 537.11 > g ? "21+" : 537.13 > g ? 23 : 537.18 > g ? 24 : 537.24 > g ? 25 : 537.36 > g ? 26 : "Blink" !=
				y ? "27" : "28")) : (y && (y[1] = "like Safari"), g = (g = g[0], 400 > g ? 1 : 500 > g ? 2 : 526 > g ? 3 : 533 > g ? 4 : 534 > g ? "4+" : 535 > g ? 5 : 537 > g ? 6 : 538 > g ? 7 : 601 > g ? 8 : "8"));
			y && (y[1] += " " + (g += "number" == typeof g ? ".x" : /[.+]/.test(g) ? "" : "+"));
			"Safari" == q && (!h || 45 < parseInt(h)) && (h = g)
		}
		"Opera" == q && (g = /\bzbov|zvav$/.exec(r)) ? (q += " ", l.unshift("desktop mode"), "zvav" == g ? (q += "Mini", h = null) : q += "Mobile", r = r.replace(RegExp(" *" + g + "$"), "")) : "Safari" == q && /\bChrome\b/.exec(y && y[1]) && (l.unshift("desktop mode"), q = "Chrome Mobile", h = null, /\bOS X\b/.test(r) ? (E =
			"Apple", r = "iOS 4.3+") : r = null);
		h && 0 == h.indexOf(g = /[\d.]+$/.exec(r)) && -1 < a.indexOf("/" + g + "-") && (r = String(r.replace(g, "")).replace(/^ +| +$/g, ""));
		y && !/\b(?:Avant|Nook)\b/.test(q) && (/Browser|Lunascape|Maxthon/.test(q) || "Safari" != q && /^iOS/.test(r) && /\bSafari\b/.test(y[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(q) && y[1]) && (g = y[y.length - 1]) && l.push(g);
		l.length && (l = ["(" + l.join("; ") + ")"]);
		E && z && 0 > z.indexOf(E) && l.push("on " + E);
		z && l.push((/^on /.test(l[l.length -
			1]) ? "" : "on ") + z);
		if (r) {
			var N = (g = / ([\d.+]+)$/.exec(r)) && "/" == r.charAt(r.length - g[0].length - 1);
			r = {
				architecture: 32,
				family: g && !N ? r.replace(g[0], "") : r,
				version: g ? g[1] : null,
				toString: function () {
					var a = this.version;
					return this.family + (a && !N ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		} (g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(K)) && !/\bi686\b/i.test(K) ? (r && (r.architecture = 64, r.family = r.family.replace(RegExp(" *" + g), "")), q && (/\bWOW64\b/i.test(a) || G && /\w(?:86|32)$/.test(u.cpuClass || u.platform) && !/\bWin64; x64\b/i.test(a)) &&
			l.unshift("32-bit")) : r && /^OS X/.test(r.family) && "Chrome" == q && 39 <= parseFloat(h) && (r.architecture = 64);
		a || (a = null);
		w = {};
		w.description = a;
		w.layout = y && y[0];
		w.manufacturer = E;
		w.name = q;
		w.prerelease = L;
		w.product = z;
		w.ua = a;
		w.version = q && h;
		w.os = r || {
			architecture: null,
			family: null,
			version: null,
			toString: function () {
				return "null"
			}
		};
		w.parse = p;
		w.toString = function () {
			return this.description || ""
		};
		w.version && l.unshift(h);
		w.name && l.unshift(q);
		r && q && (r != String(r).split(" ")[0] || r != q.split(" ")[0] && !z) && l.push(z ? "(" + r + ")" : "on " +
			r);
		l.length && (w.description = l.join(" "));
		return w
	}
	var n = {
		"function": !0,
		object: !0
	},
		t = n[typeof window] && window || this,
		l = n[typeof exports] && exports;
	n = n[typeof module] && module && !module.nodeType && module;
	var u = l && n && "object" == typeof global && global;
	!u || u.global !== u && u.window !== u && u.self !== u || (t = u);
	var h = Math.pow(2, 53) - 1,
		v = /\bOpera/;
	u = Object.prototype;
	var A = u.hasOwnProperty,
		B = u.toString,
		C = p();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (t.platform = C, define(function () {
		return C
	})) : l &&
		n ? d(C, function (a, b) {
			l[b] = a
		}) : t.platform = C
}).call(this);

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
	}], c = 0; c < a.length; c++) {
		var b = document.createElement("meta");
		b.name = a[c].name;
		b.content = a[c].content;
		var d = window.document.head.querySelector('meta[name="' + b.name + '"]');
		d && d.parentNode.removeChild(d);
		window.document.head.appendChild(b)
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
$(document).ready(function () {
	platform && "iPhone" === platform.product && "Safari" === platform.name && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
	platform && "iPhone" === platform.product && "Safari" === platform.name && iosResize()
});
(function () {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		c = "undefined" !== typeof module && module.exports,
		b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		d = function () {
			for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
			"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
			], d = 0, e = c.length, f = {}; d < e; d++)
				if ((b = c[d]) && b[1] in a) {
					for (d = 0; d < b.length; d++) f[c[0][d]] =
						b[d];
					return f
				} return !1
		}(),
		f = {
			change: d.fullscreenchange,
			error: d.fullscreenerror
		},
		e = {
			request: function (c) {
				var e = d.requestFullscreen;
				c = c || a.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[e]();
				else c[e](b && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function () {
				a[d.exitFullscreen]()
			},
			toggle: function (a) {
				this.isFullscreen ? this.exit() : this.request(a)
			},
			onchange: function (a) {
				this.on("change", a)
			},
			onerror: function (a) {
				this.on("error", a)
			},
			on: function (b, c) {
				var d = f[b];
				d && a.addEventListener(d, c, !1)
			},
			off: function (b,
				c) {
				var d = f[b];
				d && a.removeEventListener(d, c, !1)
			},
			raw: d
		};
	d ? (Object.defineProperties(e, {
		isFullscreen: {
			get: function () {
				return !!a[d.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function () {
				return a[d.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function () {
				return !!a[d.fullscreenEnabled]
			}
		}
	}), c ? module.exports = e : window.screenfull = e) : c ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
	s_iOffsetX, s_iOffsetY, s_bIsIphone = !1;
(function (a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
		4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
	sizeHandler()
});

function trace(a) {
	console.log(a)
}

function getSize(a) {
	var c = a.toLowerCase(),
		b = window.document,
		d = b.documentElement;
	if (void 0 === window["inner" + a]) a = d["client" + a];
	else if (window["inner" + a] != d["client" + a]) {
		var f = b.createElement("body");
		f.id = "vpw-test-b";
		f.style.cssText = "overflow:scroll";
		var e = b.createElement("div");
		e.id = "vpw-test-d";
		e.style.cssText = "position:absolute;top:-1000px";
		e.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
		f.appendChild(e);
		d.insertBefore(f, b.head);
		a = 7 == e["offset" + a] ? d["client" + a] : window["inner" + a];
		d.removeChild(f)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
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
		var c = getSize("Width");
		_checkOrientation(c, a);
		var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
			d = CANVAS_WIDTH * b;
		b *= CANVAS_HEIGHT;
		if (b < a) {
			var f = a - b;
			b += f;
			d += CANVAS_WIDTH / CANVAS_HEIGHT * f
		} else d < c && (f = c - d, d += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
		f = a / 2 - b / 2;
		var e = c / 2 - d / 2,
			m = CANVAS_WIDTH / d;
		if (e * m < -EDGEBOARD_X || f * m < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
			c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, f = (a - b) / 2, e = (c - d) / 2, m = CANVAS_WIDTH / d;
		s_iOffsetX = -1 * e * m;
		s_iOffsetY = -1 * f * m;
		0 <= f && (s_iOffsetY = 0);
		0 <= e && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_iScaleFactor = 2 * Math.min(d /
			CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > f || (f = (a - b) / 2);
		$("#canvas").css("top", f + "px");
		$("#canvas").css("left", e + "px");
		fullscreenHandler()
	}
}

function _checkOrientation(a, c) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function playSound(a, c, b) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}

function createBitmap(a, c, b) {
	var d = new createjs.Bitmap(a),
		f = new createjs.Shape;
	c && b ? f.graphics.beginFill("#fff").drawRect(0, 0, c, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	d.hitArea = f;
	return d
}

function createSprite(a, c, b, d, f, e) {
	a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
	c = new createjs.Shape;
	c.graphics.beginFill("#000000").drawRect(-b, -d, f, e);
	a.hitArea = c;
	return a
}

function pad(a, c, b) {
	a += "";
	return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a
}

function randomFloatBetween(a, c, b) {
	"undefined" === typeof b && (b = 2);
	return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
	var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
		d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
	c.set(b, d)
}

function tweenVectorsOnX(a, c, b) {
	return a + b * (c - a)
}

function shuffle(a) {
	for (var c = a.length, b, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[d], a[d] = b;
	return a
}

function bubbleSort(a) {
	do {
		var c = !1;
		for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
	} while (c)
}

function compare(a, c) {
	return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, d) {
	return b * a / d + c
}

function easeInQuad(a, c, b, d) {
	return b * (a /= d) * a + c
}

function easeInSine(a, c, b, d) {
	return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, d) {
	return b * (a /= d) * a * a + c
}

function getTrajectoryPoint(a, c) {
	var b = new createjs.Point,
		d = (1 - a) * (1 - a),
		f = a * a;
	b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + f * c.end.x;
	b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + f * c.end.y;
	return b
}

function formatTime(a) {
	a /= 1E3;
	var c = Math.floor(a / 60);
	a = parseFloat(a - 60 * c).toFixed(1);
	var b = "";
	b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
	return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
	return a * Math.PI / 180
}

function checkRectCollision(a, c) {
	var b = getBounds(a, .9);
	var d = getBounds(c, .98);
	return calculateIntersection(b, d)
}

function calculateIntersection(a, c) {
	var b, d, f, e;
	var m = a.x + (b = a.width / 2);
	var k = a.y + (d = a.height / 2);
	var p = c.x + (f = c.width / 2);
	var n = c.y + (e = c.height / 2);
	m = Math.abs(m - p) - (b + f);
	k = Math.abs(k - n) - (d + e);
	return 0 > m && 0 > k ? (m = Math.min(Math.min(a.width, c.width), -m), k = Math.min(Math.min(a.height, c.height), -k), {
		x: Math.max(a.x, c.x),
		y: Math.max(a.y, c.y),
		width: m,
		height: k,
		rect1: a,
		rect2: c
	}) : null
}

function getBounds(a, c) {
	var b = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Container) {
		b.x2 = -Infinity;
		b.y2 = -Infinity;
		var d = a.children,
			f = d.length,
			e;
		for (e = 0; e < f; e++) {
			var m = getBounds(d[e], 1);
			m.x < b.x && (b.x = m.x);
			m.y < b.y && (b.y = m.y);
			m.x + m.width > b.x2 && (b.x2 = m.x + m.width);
			m.y + m.height > b.y2 && (b.y2 = m.y + m.height)
		}
		Infinity == b.x && (b.x = 0);
		Infinity == b.y && (b.y = 0);
		Infinity == b.x2 && (b.x2 = 0);
		Infinity == b.y2 && (b.y2 = 0);
		b.width = b.x2 - b.x;
		b.height = b.y2 - b.y;
		delete b.x2;
		delete b.y2
	} else {
		if (a instanceof createjs.Bitmap) {
			f =
				a.sourceRect || a.image;
			e = f.width * c;
			var k = f.height * c
		} else if (a instanceof createjs.Sprite)
			if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
				f = a.spriteSheet.getFrame(a.currentFrame);
				e = f.rect.width;
				k = f.rect.height;
				d = f.regX;
				var p = f.regY
			} else b.x = a.x || 0, b.y = a.y || 0;
		else b.x = a.x || 0, b.y = a.y || 0;
		d = d || 0;
		e = e || 0;
		p = p || 0;
		k = k || 0;
		b.regX = d;
		b.regY = p;
		f = a.localToGlobal(0 - d, 0 - p);
		m = a.localToGlobal(e - d, k - p);
		e = a.localToGlobal(e - d, 0 - p);
		d = a.localToGlobal(0 - d, k - p);
		b.x =
			Math.min(Math.min(Math.min(f.x, m.x), e.x), d.x);
		b.y = Math.min(Math.min(Math.min(f.y, m.y), e.y), d.y);
		b.width = Math.max(Math.max(Math.max(f.x, m.x), e.x), d.x) - b.x;
		b.height = Math.max(Math.max(Math.max(f.y, m.y), e.y), d.y) - b.y
	}
	return b
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
	for (var c = a.length, b, d; 0 < c;) d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b;
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
			var c = document.createEvent("MouseEvents");
			c.initEvent("click", !0, !0);
			a.dispatchEvent(c)
		}
	}
};
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
		a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var c = "hidden";
	c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
		document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
		var d = c[b].split("=");
		if (d[0] == a) return d[1]
	}
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function () {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
	var a = {},
		c, b, d, f, e, m;
	this.init = function (a, p, n) {
		c = {};
		d = b = 0;
		f = a;
		e = p;
		m = n
	};
	this.addSprite = function (d, e) {
		if (a.hasOwnProperty(d)) return !1;
		var f = new Image;
		a[d] = c[d] = {
			szPath: e,
			oSprite: f,
			bLoaded: !1
		};
		b++;
		return !0
	};
	this.getSprite = function (b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function () {
		b = 0;
		e.call(m)
	};
	this._onSpriteLoaded = function () {
		f.call(m);
		++d === b && this._onSpritesLoaded()
	};
	this.loadSprites = function () {
		for (var a in c) c[a].oSprite.oSpriteLibrary = this,
			c[a].oSprite.szKey = a, c[a].oSprite.onload = function () {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, c[a].oSprite.onerror = function (a) {
				var b = a.currentTarget;
				setTimeout(function () {
					c[b.szKey].oSprite.src = c[b.szKey].szPath
				}, 500)
			}, c[a].oSprite.src = c[a].szPath
	};
	this.setLoaded = function (b) {
		a[b].bLoaded = !0
	};
	this.isLoaded = function (b) {
		return a[b].bLoaded
	};
	this.getNumSprites = function () {
		return b
	}
}
var CANVAS_WIDTH = 1920,
	CANVAS_HEIGHT = 1080,
	EDGEBOARD_X = 250,
	EDGEBOARD_Y = 80,
	FPS_TIME = 1E3 / 24,
	DISABLE_SOUND_MOBILE = !1,
	PRIMARY_FONT = "Lora",
	SECONDARY_FONT = "Arial",
	PRIMARY_FONT_COLOUR = "#FFFFFF",
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	NUM_DIFFERENT_BALLS = 5,
	ANIMATION_SPEED, WIN_OCCURRENCE = [],
	PAYOUTS = [],
	BANK, START_PLAYER_MONEY, BET = [];
BET = [.25, .5, 1, 2.5, 5, 7.5, 10];
var SOUNDTRACK_VOLUME_IN_GAME = 1,
	ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;
TEXT_PRELOADER_CONTINUE = "START";
TEXT_GAMEOVER = "YOU LOST YOUR CREDITS";
TEXT_CURRENCY = "$";
TEXT_MIN = "-";
TEXT_PLUS = "+";
TEXT_PLAY1 = "PLAY ONE";
TEXT_PLAY5 = "PLAY FIVE";
TEXT_UNDO = "UNDO";
TEXT_CLEAR = "CLEAR";
TEXT_PAYOUTS = "PAYOUTS";
TEXT_HITS = "HITS";
TEXT_PAYS = "PAYS";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_SHARE_1 = "You collected <strong>";
TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_3 = "My score is ";
TEXT_SHARE_4 = " points! Can you do better?";

function CPreloader() {
	var a, c, b, d, f, e, m, k, p, n;
	this._init = function () {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
		s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
		s_oSpriteLibrary.loadSprites();
		n = new createjs.Container;
		s_oStage.addChild(n)
	};
	this.unload = function () {
		n.removeAllChildren();
		p.unload()
	};
	this._onImagesLoaded = function () { };
	this._onAllImagesLoaded = function () {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function () {
		var t = new createjs.Shape;
		t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		n.addChild(t);
		t = s_oSpriteLibrary.getSprite("200x200");
		m = createBitmap(t);
		m.regX = .5 * t.width;
		m.regY = .5 * t.height;
		m.x = CANVAS_WIDTH / 2;
		m.y = CANVAS_HEIGHT / 2 - 180;
		n.addChild(m);
		k = new createjs.Shape;
		k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(m.x - 100, m.y - 100, 200, 200, 10);
		n.addChild(k);
		m.mask = k;
		t = s_oSpriteLibrary.getSprite("progress_bar");
		d = createBitmap(t);
		d.x = CANVAS_WIDTH / 2 - t.width / 2;
		d.y = CANVAS_HEIGHT / 2 + 50;
		n.addChild(d);
		a = t.width;
		c = t.height;
		f = new createjs.Shape;
		f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
		n.addChild(f);
		d.mask = f;
		b = new createjs.Text("", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT / 2 + 100;
		b.textBaseline = "alphabetic";
		b.textAlign = "center";
		n.addChild(b);
		t = s_oSpriteLibrary.getSprite("but_start");
		p = new CTextButton(CANVAS_WIDTH /
			2, CANVAS_HEIGHT / 2, t, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", n);
		p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
		p.setVisible(!1);
		e = new createjs.Shape;
		e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		n.addChild(e);
		createjs.Tween.get(e).to({
			alpha: 0
		}, 500).call(function () {
			createjs.Tween.removeTweens(e);
			n.removeChild(e)
		})
	};
	this._onButStartRelease = function () {
		s_oMain._onRemovePreloader()
	};
	this.refreshLoader = function (e) {
		b.text = e + "%";
		100 === e && (s_oMain._onRemovePreloader(),
			b.visible = !1, d.visible = !1);
		f.graphics.clear();
		e = Math.floor(e * a / 100);
		f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, e, c)
	};
	this._init()
}

function CMain(a) {
	var c, b = 0,
		d = 0,
		f = STATE_LOADING,
		e, m;
	this.initContainer = function () {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function (a) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.framerate = 30;
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		e = new CPreloader
	};
	this.preloaderReady = function () {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		this._loadImages();
		c = !0
	};
	this.soundLoaded = function () {
		b++;
		e.refreshLoader(Math.floor(b / d * 100))
	};
	this._onRemovePreloader = function () {
		e.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this._initSounds = function () {
		Howler.mute(!s_bAudioActive);
		s_aSoundsInfo = [];
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "launch_ball",
			loop: !1,
			volume: 1,
			ingamename: "launch_ball"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "win",
			loop: !1,
			volume: 1,
			ingamename: "win"
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
			filename: "game_over",
			loop: !1,
			volume: 1,
			ingamename: "game_over"
		});
		s_aSoundsInfo.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		d += s_aSoundsInfo.length;
		s_aSounds = [];
		for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a],
			!1)
	};
	this.tryToLoadSound = function (a, b) {
		setTimeout(function () {
			s_aSounds[a.ingamename] = new Howl({
				src: [a.path + a.filename + ".mp3"],
				autoplay: !1,
				preload: !0,
				loop: a.loop,
				volume: a.volume,
				onload: s_oMain.soundLoaded,
				onloaderror: function (a, b) {
					for (var c = 0; c < s_aSoundsInfo.length; c++)
						if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
							s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
							break
						}
				},
				onplayerror: function (a) {
					for (var b = 0; b < s_aSoundsInfo.length; b++)
						if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
							s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock",
								function () {
									s_aSounds[s_aSoundsInfo[b].ingamename].play();
									"soundtrack" === s_aSoundsInfo[b].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
								});
							break
						}
				}
			})
		}, b ? 200 : 0)
	};
	this._loadImages = function () {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game",
			"./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_plus", "./sprites/but_plus.png");
		s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
		s_oSpriteLibrary.addSprite("plus_display", "./sprites/plus_display.png");
		s_oSpriteLibrary.addSprite("num_button", "./sprites/num_button.png");
		s_oSpriteLibrary.addSprite("money_panel", "./sprites/money_panel.png");
		s_oSpriteLibrary.addSprite("payouts", "./sprites/payouts.png");
		s_oSpriteLibrary.addSprite("win_panel", "./sprites/win_panel.png");
		s_oSpriteLibrary.addSprite("hole", "./sprites/hole.png");
		s_oSpriteLibrary.addSprite("tube", "./sprites/tube.png");
		s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
		s_oSpriteLibrary.addSprite("number", "./sprites/number.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
		s_oSpriteLibrary.addSprite("ctl_logo",
			"./sprites/ctl_logo.png");
		d += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function () {
		b++;
		e.refreshLoader(Math.floor(b / d * 100))
	};
	this._onAllImagesLoaded = function () { };
	this.gotoMenu = function () {
		new CMenu;
		f = STATE_MENU
	};
	this.gotoGame = function () {
		m = new CGame(k);
		f = STATE_GAME;
		$(s_oMain).trigger("game_start")
	};
	this.gotoHelp = function () {
		new CHelp;
		f = STATE_HELP
	};
	this.stopUpdate = function () {
		c = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE &&
			!1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function () {
		s_iPrevTime = (new Date).getTime();
		c = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function (a) {
		if (!1 !== c) {
			var b = (new Date).getTime();
			s_iTimeElaps = b - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = b;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			f === STATE_GAME && m.update();
			s_oStage.update(a)
		}
	};
	s_oMain =
		this;
	var k = a;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	ENABLE_FULLSCREEN = a.fullscreen;
	SHOW_CREDITS = a.show_credits;
	s_bAudioActive = a.audio_enable_on_startup;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_bFullscreen = !1;

function CTextButton(a, c, b, d, f, e, m, k) {
	var p, n, t, l, u;
	this._init = function (a, b, c, d, e, f, k) {
		p = [];
		n = [];
		t = [];
		var w = createBitmap(c);
		u = new createjs.Text(d, k + "px " + e, f);
		u.textAlign = "center";
		u.textBaseline = "middle";
		u.getBounds();
		u.x = c.width / 2;
		u.y = Math.floor(c.height / 2);
		l = new createjs.Container;
		l.x = a;
		l.y = b;
		l.regX = c.width / 2;
		l.regY = c.height / 2;
		l.addChild(w, u);
		h.addChild(l);
		s_bMobile || (l.cursor = "pointer");
		this._initListener()
	};
	this.unload = function () {
		l.off("mousedown");
		l.off("pressup");
		h.removeChild(l)
	};
	this.setVisible =
		function (a) {
			l.visible = a
		};
	this._initListener = function () {
		oParent = this;
		l.on("mousedown", this.buttonDown);
		l.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (a, b, c) {
		n[a] = b;
		t[a] = c
	};
	this.buttonRelease = function () {
		l.scaleX = 1;
		l.scaleY = 1;
		playSound("click", 1, !1);
		n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(t[ON_MOUSE_UP], p[ON_MOUSE_UP])
	};
	this.buttonDown = function () {
		l.scaleX = .9;
		l.scaleY = .9;
		n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], p[ON_MOUSE_DOWN])
	};
	this.addEventListenerWithParams = function (a,
		b, c, d) {
		n[a] = b;
		t[a] = c;
		p[a] = d
	};
	this.setTextPosition = function (a) {
		u.y = a
	};
	this.setPosition = function (a, b) {
		l.x = a;
		l.y = b
	};
	this.setX = function (a) {
		l.x = a
	};
	this.setY = function (a) {
		l.y = a
	};
	this.getButtonImage = function () {
		return l
	};
	this.getX = function () {
		return l.x
	};
	this.getY = function () {
		return l.y
	};
	var h = k;
	this._init(a, c, b, d, f, e, m);
	return this
}

function CTextToggle(a, c, b, d, f, e, m, k) {
	var p = 1,
		n, t = !1,
		l, u, h, v, A, B, C, D;
	this._init = function (a, b, c, d, e, f, k, t) {
		n = !1;
		l = [];
		u = [];
		h = new createjs.Container;
		h.x = a;
		h.y = b;
		h.cursor = "pointer";
		t.addChild(h);
		a = new createjs.SpriteSheet({
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
		B = createSprite(a, "state_false", c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		h.addChild(B);
		a = c.width / 2;
		A = new CTLText(h, -a / 2 + 2, -c.height / 2 + 2, a, c.height, k, "center",
			"#000000", e, 1, 0, 0, d, !0, !0, !1, !1);
		v = new CTLText(h, -a / 2, -c.height / 2, a, c.height, k, "center", f, e, 1, 0, 0, d, !0, !0, !1, !1);
		this._initListener()
	};
	this.unload = function () {
		h.off("mousedown", C);
		h.off("pressup", D);
		k.removeChild(h)
	};
	this.setVisible = function (a) {
		h.visible = a
	};
	this._initListener = function () {
		oParent = this;
		C = h.on("mousedown", this.buttonDown);
		D = h.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (a, b, c) {
		l[a] = b;
		u[a] = c
	};
	this.buttonRelease = function () {
		n || t || (h.scaleX = 1 * p, h.scaleY = 1 * p, l[ON_MOUSE_UP] &&
			l[ON_MOUSE_UP].call(u[ON_MOUSE_UP]))
	};
	this.buttonDown = function () {
		n || t || (h.scaleX = .9 * p, h.scaleY = .9 * p, l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN]))
	};
	this.enable = function () {
		n = !1;
		B.gotoAndStop("state_true")
	};
	this.disable = function () {
		n = !0;
		B.gotoAndStop("state_false")
	};
	this.setTextPosition = function (a, b) {
		var c = Math.ceil(m / 20);
		A.x = a + c;
		A.y = b + c;
		v.x = a;
		v.y = b
	};
	this.setText = function (a) {
		v.text = a;
		A.text = a
	};
	this.setPosition = function (a, b) {
		h.x = a;
		h.y = b
	};
	this.setX = function (a) {
		h.x = a
	};
	this.setY = function (a) {
		h.y =
			a
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
	this.block = function (a) {
		t = a
	};
	this.setScale = function (a) {
		p = a;
		h.scaleX = a;
		h.scaleY = a
	};
	this.setScaleX = function (a) {
		B.scaleX = a
	};
	this._init(a, c, b, d, f, e, m, k);
	return this
}

function CToggle(a, c, b, d) {
	var f, e, m, k, p, n;
	this._init = function (a, b, c, d) {
		e = [];
		m = [];
		var l = new createjs.SpriteSheet({
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
		f = d;
		k = createSprite(l, "state_" + f, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		k.x = a;
		k.y = b;
		k.stop();
		k.cursor = "pointer";
		s_oStage.addChild(k);
		this._initListener()
	};
	this.unload = function () {
		k.off("mousedown", p);
		k.off("pressup", n);
		s_oStage.removeChild(k)
	};
	this._initListener =
		function () {
			p = k.on("mousedown", this.buttonDown);
			n = k.on("pressup", this.buttonRelease)
		};
	this.addEventListener = function (a, b, c) {
		e[a] = b;
		m[a] = c
	};
	this.setActive = function (a) {
		f = a;
		k.gotoAndStop("state_" + f)
	};
	this.buttonRelease = function () {
		k.scaleX = 1;
		k.scaleY = 1;
		playSound("click", 1, !1);
		f = !f;
		k.gotoAndStop("state_" + f);
		e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(m[ON_MOUSE_UP], f)
	};
	this.buttonDown = function () {
		k.scaleX = .9;
		k.scaleY = .9;
		e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
	};
	this.setPosition = function (a, b) {
		k.x =
			a;
		k.y = b
	};
	this._init(a, c, b, d)
}

function CNumToggle(a, c, b, d) {
	var f, e, m, k, p, n, t, l, u, h = [];
	this._init = function (a, b, c, d) {
		e = !1;
		m = [];
		k = [];
		p = new createjs.Container;
		p.x = a;
		p.y = b;
		p.cursor = "pointer";
		d.addChild(p);
		a = s_oSpriteLibrary.getSprite("num_button");
		b = {
			images: [a],
			framerate: 5,
			frames: {
				width: a.width / 2,
				height: a.height,
				regX: a.width / 2 / 2,
				regY: a.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		};
		b = new createjs.SpriteSheet(b);
		f = !1;
		n = createSprite(b, "state_" + f, a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
		n.stop();
		a = s_oSpriteLibrary.getSprite("ball");
		b = {
			images: [a],
			frames: {
				width: a.width / NUM_DIFFERENT_BALLS,
				height: a.height,
				regX: a.width / NUM_DIFFERENT_BALLS / 2,
				regY: a.height / 2
			},
			animations: {
				red: [0],
				green: [1],
				cyan: [0],
				violet: [1],
				blue: [1]
			}
		};
		b = new createjs.SpriteSheet(b);
		t = createSprite(b, "red", a.width / NUM_DIFFERENT_BALLS / 2, a.height / 2, a.width / NUM_DIFFERENT_BALLS, a.height);
		t.gotoAndStop(0);
		t.visible = !1;
		p.addChild(n, t);
		this._initListener()
	};
	this.unload = function () {
		p.off("mousedown", l);
		p.off("pressup", u);
		d.removeChild(p)
	};
	this._initListener = function () {
		l = p.on("mousedown",
			this.buttonDown);
		u = p.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (a, b, c) {
		m[a] = b;
		k[a] = c
	};
	this.addEventListenerWithParams = function (a, b, c, d) {
		m[a] = b;
		k[a] = c;
		h = d
	};
	this.setActive = function (a) {
		f = a;
		n.gotoAndStop("state_" + f)
	};
	this.buttonRelease = function () {
		e || (playSound("click", 1, !1), f = !f, n.gotoAndStop("state_" + f), m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(k[ON_MOUSE_UP], h))
	};
	this.buttonDown = function () {
		e || m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], h)
	};
	this.setPosition = function (a, b) {
		p.x =
			a;
		p.y = b
	};
	this.getGlobalPosition = function () {
		return {
			x: p.localToGlobal(0, 0).x / s_iScaleFactor,
			y: p.localToGlobal(0, 0).y / s_iScaleFactor
		}
	};
	this.block = function (a) {
		e = a
	};
	this.setExtracted = function (a, b) {
		t.visible = a;
		t.gotoAndStop(b)
	};
	this.highlight = function () {
		n.gotoAndPlay(0)
	};
	this.stopHighlight = function () {
		n.gotoAndStop(1)
	};
	this._init(a, c, b, d)
}

function CGfxButton(a, c, b) {
	var d, f, e, m, k;
	this._init = function (a, b, c) {
		d = [];
		f = [];
		e = createBitmap(c);
		e.x = a;
		e.y = b;
		e.regX = c.width / 2;
		e.regY = c.height / 2;
		e.cursor = "pointer";
		s_oStage.addChild(e);
		this._initListener()
	};
	this.unload = function () {
		e.off("mousedown", m);
		e.off("pressup", k);
		s_oStage.removeChild(e)
	};
	this.setVisible = function (a) {
		e.visible = a
	};
	this._initListener = function () {
		m = e.on("mousedown", this.buttonDown);
		k = e.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function (a, b, c) {
		d[a] = b;
		f[a] = c
	};
	this.buttonRelease =
		function () {
			e.scaleX = 1;
			e.scaleY = 1;
			playSound("click", 1, !1);
			d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
		};
	this.buttonDown = function () {
		e.scaleX = .9;
		e.scaleY = .9;
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
	};
	this.setPosition = function (a, b) {
		e.x = a;
		e.y = b
	};
	this.setX = function (a) {
		e.x = a
	};
	this.setY = function (a) {
		e.y = a
	};
	this.getButtonImage = function () {
		return e
	};
	this.getX = function () {
		return e.x
	};
	this.getY = function () {
		return e.y
	};
	this._init(a, c, b);
	return this
}

function CMenu() {
	var a, c, b, d, f, e, m, k, p, n, t, l, u = null,
		h = null;
	this._init = function () {
		m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(m);
		var v = s_oSpriteLibrary.getSprite("but_play");
		k = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 200, v);
		k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - v.height / 2 - 10, e = v.height / 2 + 10, n = new CToggle(f, e, v, s_bAudioActive), n.addEventListener(ON_MOUSE_UP,
			this._onAudioToggle, this);
		v = s_oSpriteLibrary.getSprite("but_info");
		SHOW_CREDITS ? (a = 10 + v.width / 2, c = v.height / 2 + 10, t = new CGfxButton(a, c, v, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onCredits, this), b = a + v.width + 10, d = c) : (b = 10 + v.width / 2, d = v.height / 2 + 10);
		v = window.document;
		var A = v.documentElement;
		u = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
		h = v.exitFullscreen || v.mozCancelFullScreen || v.webkitExitFullscreen || v.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (u = !1);
		u && screenfull.enabled && (v = s_oSpriteLibrary.getSprite("but_fullscreen"), l = new CToggle(b, d, v, s_bFullscreen, !0), l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		p = new createjs.Shape;
		p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(p);
		createjs.Tween.get(p).to({
			alpha: 0
		}, 1E3).call(function () {
			p.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function () {
		k.unload();
		k = null;
		p.visible = !1;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(),
			n = null;
		u && screenfull.enabled && l.unload();
		SHOW_CREDITS && t.unload();
		s_oStage.removeChild(m);
		s_oMenu = m = null
	};
	this.refreshButtonPos = function (h, k) {
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(f - h, k + e);
		SHOW_CREDITS && t.setPosition(a + h, c + k);
		u && screenfull.enabled && l.setPosition(b + h, d + k)
	};
	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onButPlayRelease = function () {
		this.unload();
		$(s_oMain).trigger("start_session");
		s_oMain.gotoGame()
	};
	this.resetFullscreenBut =
		function () {
			u && screenfull.enabled && l.setActive(s_bFullscreen)
		};
	this._onFullscreenRelease = function () {
		s_bFullscreen ? h.call(window.document) : u.call(window.document.documentElement);
		sizeHandler()
	};
	this._onCredits = function () {
		_oCreditsPanel = new CCreditsPanel
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a) {
	var c, b, d, f, e, m, k, p, n, t, l, u, h, v = null,
		A, B, C, D;
	this._init = function () {
		b = BANK;
		f = START_PLAYER_MONEY;
		d = BET[3];
		e = 0;
		k = 1;
		p = 0;
		l = [];
		var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStage.addChild(a);
		h = new CInterface;
		h.refreshBet(d);
		A = new createjs.Container;
		A.x = CANVAS_WIDTH / 2;
		A.y = CANVAS_HEIGHT / 2;
		s_oStage.addChild(A);
		this._initCells();
		B = new CPayouts(1360, 203);
		a = s_oSpriteLibrary.getSprite("hole");
		var c = createBitmap(a);
		c.regX = a.width / 2;
		c.regY = a.height / 2;
		c.x = 365;
		c.y = 750;
		s_oStage.addChild(c);
		C = new CAnimBalls(365, 260);
		a = s_oSpriteLibrary.getSprite("tube");
		a = createBitmap(a);
		a.x = 315;
		a.y = 205;
		s_oStage.addChild(a);
		a = (new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(0, 200, CANVAS_WIDTH, CANVAS_HEIGHT - 200);
		D = new createjs.Shape(a);
		D.on("click", function () { });
		D.visible = !1;
		s_oStage.addChild(D);
		if (d > f)
			for (a = 0; 80 > a; a++) n[a].block(!0)
	};
	this._initCells = function () {
		var a = s_oSpriteLibrary.getSprite("num_button"),
			b = a.width / 2 - 5;
		a = a.height - 5;
		var c = -(10 * b) / 2 + b / 2 - 40,
			d = -(8 * a) / 2 + a / 2 + 10;
		n = [];
		t = [];
		for (var e = 0, f = 0; 80 > f; f++) n[f] = new CNumToggle(c + f % 10 * b, d + a * e, f + 1, A), n[f].addEventListenerWithParams(ON_MOUSE_UP, this._onButNumRelease, this, f), 9 === f % 10 && e++, t[f] = !1;
		a = s_oSpriteLibrary.getSprite("number");
		b = createBitmap(a);
		b.regX = a.width / 2;
		b.regY = a.height / 2;
		b.x = CANVAS_WIDTH / 2 - 35;
		b.y = CANVAS_HEIGHT / 2 + 10;
		s_oStage.addChild(b)
	};
	this._onButNumRelease = function (a) {
		this._clearAllSelected();
		if (t[a]) {
			e--;
			t[a] = !1;
			for (var b = 0; b < l.length; b++) l[b] === a && l.splice(b, 1)
		} else e++, t[a] = !0, l.push(a);
		for (b = 0; b < l.length; b++) n[l[b]].setActive(!0);
		this._checkActiveButton();
		B.updatePayouts(e - 1);
		if (9 < e)
			for (b = 0; b < t.length; b++) t[b] || n[b].block(!0);
		else
			for (b = 0; b < t.length; b++) n[b].block(!1)
	};
	this._checkActiveButton = function () {
		2 > e ? (h.enablePlay1(!1), h.enablePlay5(!1)) : (h.enablePlay1(!0), 5 * d > f ? h.enablePlay5(!1) : h.enablePlay5(!0))
	};
	this.clearSelection = function () {
		l = [];
		this._clearAllExtracted();
		e = 0;
		B.updatePayouts(e - 1);
		for (var a = 0; a < t.length; a++) t[a] = !1, n[a].block(!1), n[a].setActive(!1);
		this._checkActiveButton()
	};
	this.undoSelection = function () {
		this._clearAllExtracted();
		if (0 !== e) {
			var a = l.pop();
			e--;
			t[a] = !1;
			n[a].setActive(!1);
			for (a = 0; a < t.length; a++) n[a].block(!1);
			this._checkActiveButton();
			B.updatePayouts(e - 1)
		}
	};
	this.selectBet = function (a) {
		this._clearAllExtracted();
		for (var b, c = 0; c < BET.length; c++) BET[c] === d && (b = c);
		"add" === a ? b !== BET.length - 1 && BET[b + 1] <= f && b++ : 0 !== b && b--;
		d = BET[b];
		h.refreshBet(d);
		this._checkActiveButton()
	};
	this.play5 = function () {
		k = 5;
		this.play()
	};
	this.tryShowAd = function () {
		p++;
		p === AD_SHOW_COUNTER && (p = 0, $(s_oMain).trigger("show_interlevel_ad"))
	};
	this.play = function () {
		this._clearAllExtracted();
		if (!(2 > e)) {
			$.ajax({
				url: `${home_url}/api/games/getAvailableGameBank`,
				type: "POST",
				data: {
					gameId: gameid,
					customerId: customerid,
					bet_amount: d
				}
			}).done((data) => {
				b = data.game_bank;

				this.smartBlockGUI(!1);
				f -= d;
				b += d;
				f = parseFloat(f.toFixed(1));
				h.refreshMoney(f);
				for (var a = null, c = 0; c < PAYOUTS[e - 1].pays.length; c++)
					if (PAYOUTS[e - 1].pays[c] * d <= b) {
						a = c;
						break
					} null === a ? this._extractLosingCombination() : this._checkWin(a);
				$(s_oMain).trigger("bet_placed", {
					tot_bet: d,
					money: f,
					num_selected: e
				})
			})
		}
	};
	this._checkWin = function (a) {
		const randomNum = 100 * Math.random()
		randomNum < WIN_OCCURRENCE[e - 1] ? this._extractWinCombination(a) : this._extractLosingCombination()
	};
	this._extractWinCombination = function (a) {
		c = !0;
		for (var b = [], d = PAYOUTS[e - 1].pays.length - 1; d >= a; d--)
			for (var f = 0; f < PAYOUTS[e - 1].occurrence[d]; f++) b.push(PAYOUTS[e - 1].hits[d]);
		a = Math.floor(Math.random() * b.length);
		f = [];
		for (d = 0; d < l.length; d++) f[d] = l[d] + 1;
		shuffle(f);
		var n = [];
		for (d = 0; d < t.length; d++) t[d] || n.push(d + 1);
		shuffle(n);
		u = [];
		for (d = 0; 20 > d; d++) d < b[a] ? u.push(f[d]) : u.push(n[d]);
		shuffle(u);
		for (d = 0; 20 > d; d++);
		m = b[a];
		this._animExtraction()
	};
	this._extractLosingCombination = function () {
		c = !1;
		for (var a = Math.round(Math.random() * (PAYOUTS[e - 1].hits[PAYOUTS[e - 1].hits.length - 1] - 1)), b = [],
			d = 0; d < l.length; d++) b[d] = l[d] + 1;
		shuffle(b);
		var f = [];
		for (d = 0; d < t.length; d++) t[d] || f.push(d + 1);
		shuffle(f);
		u = [];
		for (d = 0; 20 > d; d++) d < a ? u.push(b[d]) : u.push(f[d]);
		shuffle(u);
		m = 0;
		this._animExtraction()
	};
	this._animExtraction = function () {
		for (var a = [], b = 0; 20 > b; b++) a.push(n[u[b] - 1].getGlobalPosition());
		C.startAnimation(a)
	};
	this._checkContinueGame = function () {
		for (var a = 0; a < PAYOUTS[e - 1].hits.length; a++)
			if (PAYOUTS[e - 1].hits[a] === m) {
				a = d * PAYOUTS[e - 1].pays[a];
				a = parseFloat(a.toFixed(1));
				f += a;
				b -= a;
				B.showWin(a);
				B.highlightWin(m);
				break
			} h.refreshMoney(f);
		c && playSound("win", 1, !1);
		C.resetBalls();
		this.highlightCell();

		var win_amount = 0;
		if (m > 0) {
			win_amount = a;
		}
		$.ajax({
			url: `${home_url}/api/games/updateGameBankWithWinAmount`,
			type: 'POST',
			data: {
				customerId: customerid,
				gameId: gameid,
				win_amount,
				bet_amount: d,
				player
			},
			success: (data) => {
				if (data.gameStatus == false) {
					alert("Sorry, Something went wrong, please try again");
					window.location.reload()
				}
			}
		})
		$(s_oMain).trigger("save_score", f);
		if (d > f) {
			var l = null;
			for (a = 0; a < BET.length; a++) BET[a] <= f && (l = a);
			if (null !== l) d = BET[l], h.refreshBet(d);
			else {
				this.gameOver();
				return
			}
		}
		1 === k ? this.smartBlockGUI(!0) : (k--, setTimeout(function () {
			x.play()
		}, 2E3))
	};
	this.showExtracted = function (a, b) {
		n[u[a] - 1].setExtracted(!0, b)
	};
	this._clearAllExtracted = function () {
		B.showWin(0);
		B.stopHighlight();
		for (var a = 0; a < t.length; a++) n[a].setExtracted(!1, 0);
		for (a =
			0; a < l.length; a++) n[l[a]].setActive(!0)
	};
	this._clearAllSelected = function () {
		B.showWin(0);
		B.stopHighlight();
		for (var a = 0; a < t.length; a++) n[a].setExtracted(!1, 0)
	};
	this.smartBlockGUI = function (a) {
		this.tryShowAd();
		a ? (D.visible = !1, h.enableAllButton(!0), 5 * d <= f ? h.enablePlay5(!0) : h.enablePlay5(!1)) : (D.visible = !0, h.enableAllButton(!1))
	};
	this.getCurMoney = function () {
		return f
	};
	this.unload = function () {
		h.unload();
		null !== v && v.unload();
		createjs.Tween.removeAllTweens();
		s_oStage.removeAllChildren()
	};
	this.onExit = function () {
		this.unload();
		s_oMain.gotoMenu()
	};
	this._onExitHelp = function () {
		_bStartGame = !0
	};
	this.gameOver = function () {
		v = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
		v.show()
	};
	this.highlightCell = function () {
		for (var a = 0; a < u.length; a++)
			for (var b = 0; b < l.length; b++) u[a] === l[b] + 1 && n[l[b]].highlight()
	};
	this.update = function () { };
	s_oGame = this;
	WIN_OCCURRENCE = a.win_occurrence;
	PAYOUTS = a.payouts;
	BANK = a.bank_money;
	START_PLAYER_MONEY = a.start_player_money;
	ANIMATION_SPEED = a.animation_speed;
	AD_SHOW_COUNTER = a.ad_show_counter;
	var x = this;
	this._init()
}
var s_oGame;

function CInterface() {
	var a, c, b, d, f, e, m, k, p, n, t, l, u, h, v, A, B, C = null,
		D = null;
	this._init = function () {
		var x = s_oSpriteLibrary.getSprite("but_exit");
		f = CANVAS_WIDTH - x.height / 2 - 20;
		e = x.height / 2 + 10;
		k = new CGfxButton(f, e, x, !0);
		// k.addEventListener(ON_MOUSE_UP, this._onExit, this);
		k.setVisible(false)
		b = CANVAS_WIDTH - x.width / 2 - 100 - 15 + 102;
		d = x.height / 2 + 10;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x = s_oSpriteLibrary.getSprite("audio_icon"), m = new CToggle(b, d, x, s_bAudioActive), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		x = window.document;
		var I = x.documentElement;
		C = I.requestFullscreen || I.mozRequestFullScreen || I.webkitRequestFullScreen || I.msRequestFullscreen;
		D = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (C = !1);
		C && screenfull.enabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), a = x.width / 4 + 10, c = x.height / 2 + 10, B = new CToggle(a, c, x, s_bFullscreen, !0), B.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		x = s_oSpriteLibrary.getSprite("money_panel");
		t = new CDisplayPanel(370,
			CANVAS_HEIGHT - 225, x, TEXT_CURRENCY + START_PLAYER_MONEY, PRIMARY_FONT, "#ffffff", 40);
		x = s_oSpriteLibrary.getSprite("plus_display");
		l = new CDisplayPanel(480, CANVAS_HEIGHT - 130, x, "$1", PRIMARY_FONT, "#ffffff", 40, !1, s_oStage);
		x = s_oSpriteLibrary.getSprite("but_plus");
		n = new CTextToggle(638, CANVAS_HEIGHT - 130, x, TEXT_PLUS, PRIMARY_FONT, "#ffffff", 70, s_oStage);
		n.enable();
		n.setTextPosition(0, 20);
		n.addEventListener(ON_MOUSE_UP, this._onButPlusRelease, this);
		x = s_oSpriteLibrary.getSprite("but_plus");
		p = new CTextToggle(320, CANVAS_HEIGHT -
			130, x, TEXT_MIN, PRIMARY_FONT, "#ffffff", 70, s_oStage);
		p.enable();
		p.setTextPosition(0, 20);
		p.setScaleX(-1);
		p.addEventListener(ON_MOUSE_UP, this._onButMinRelease, this);
		x = s_oSpriteLibrary.getSprite("but_generic");
		u = new CTextToggle(820, CANVAS_HEIGHT - 130, x, TEXT_PLAY1, PRIMARY_FONT, "#ffffff", 30, s_oStage);
		u.disable();
		u.setTextPosition(0, 10);
		u.addEventListener(ON_MOUSE_UP, this._onPlay1, this);
		x = s_oSpriteLibrary.getSprite("but_generic");
		h = new CTextToggle(1060, CANVAS_HEIGHT - 130, x, TEXT_PLAY5, PRIMARY_FONT, "#ffffff",
			30, s_oStage);
		h.disable();
		h.setTextPosition(0, 10);
		h.addEventListener(ON_MOUSE_UP, this._onPlay5, this);
		x = s_oSpriteLibrary.getSprite("but_generic");
		v = new CTextToggle(1300, CANVAS_HEIGHT - 130, x, TEXT_UNDO, PRIMARY_FONT, "#ffffff", 30, s_oStage);
		v.enable();
		v.setTextPosition(0, 10);
		v.addEventListener(ON_MOUSE_UP, this._onUndo, this);
		x = s_oSpriteLibrary.getSprite("but_generic");
		A = new CTextToggle(1540, CANVAS_HEIGHT - 130, x, TEXT_CLEAR, PRIMARY_FONT, "#ffffff", 30, s_oStage);
		A.enable();
		A.setTextPosition(0, 10);
		A.addEventListener(ON_MOUSE_UP,
			this._onClear, this);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function () {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
		k.unload();
		t.unload();
		l.unload();
		p.unload();
		n.unload();
		u.unload();
		h.unload();
		v.unload();
		A.unload();
		C && screenfull.enabled && B.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function (l, n) {
		k.setPosition(f - l, n + e);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || m.setPosition(b - l, n + d);
		C && screenfull.enabled && B.setPosition(a + l, c + n)
	};
	this.refreshBet = function (a) {
		l.setText(TEXT_CURRENCY +
			a)
	};
	this.refreshMoney = function (a) {
		t.setText(TEXT_CURRENCY + a)
	};
	this.enablePlus = function (a) {
		a ? n.enable() : n.disable()
	};
	this.enableMin = function (a) {
		a ? p.enable() : p.disable()
	};
	this.enablePlay1 = function (a) {
		a ? u.enable() : u.disable()
	};
	this.enablePlay5 = function (a) {
		a ? h.enable() : h.disable()
	};
	this.enableUndo = function (a) {
		a ? v.enable() : v.disable()
	};
	this.enableClear = function (a) {
		a ? A.enable() : A.disable()
	};
	this.enableAllButton = function (a) {
		this.enablePlus(a);
		this.enableMin(a);
		this.enablePlay1(a);
		this.enablePlay5(a);
		this.enableUndo(a);
		this.enableClear(a)
	};
	this._onClear = function () {
		s_oGame.clearSelection()
	};
	this._onUndo = function () {
		s_oGame.undoSelection()
	};
	this._onButPlusRelease = function () {
		s_oGame.selectBet("add")
	};
	this._onButMinRelease = function () {
		s_oGame.selectBet("remove")
	};
	this._onPlay1 = function () {
		s_oGame.play()
	};
	this._onPlay5 = function () {
		s_oGame.play5()
	};
	this._onAudioToggle = function () {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function () {
		C && screenfull.enabled && B.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function () {
		s_bFullscreen ? D.call(window.document) : C.call(window.document.documentElement);
		sizeHandler()
	};
	this._onExit = function () {
		$(s_oMain).trigger("end_session");
		var a = s_oGame.getCurMoney();
		$(s_oMain).trigger("share_event", a);
		s_oGame.onExit()
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CEndPanel(a) {
	var c, b, d, f, e;
	this._init = function (a) {
		b = new createjs.Container;
		b.alpha = 0;
		b.visible = !1;
		s_oStage.addChild(b);
		c = createBitmap(a);
		b.addChild(c);
		d = new CTLText(b, CANVAS_WIDTH / 2 - 248, CANVAS_HEIGHT / 2 - 148, 500, 300, 60, "center", "#000", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
		f = new CTLText(b, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 - 150, 500, 300, 60, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1)
	};
	this.unload = function () {
		b.off("mousedown", e)
	};
	this._initListener = function () {
		e = b.on("mousedown", this._onExit)
	};
	this.show = function () {
		playSound("game_over", 1, !1);
		d.refreshText(TEXT_GAMEOVER);
		f.refreshText(TEXT_GAMEOVER);
		b.visible = !0;
		var a = this;
		createjs.Tween.get(b).to({
			alpha: 1
		}, 500).call(function () {
			a._initListener()
		})
	};
	this._onExit = function () {
		b.off("mousedown", e);
		s_oStage.removeChild(b);
		$(s_oMain).trigger("end_session");
		s_oGame.onExit()
	};
	this._init(a);
	return this
}

function CPayouts(a, c) {
	var b = 0,
		d, f, e, m, k, p;
	this._init = function (a, b) {
		f = new createjs.Container;
		f.x = a;
		f.y = b;
		s_oStage.addChild(f);
		var c = createBitmap(s_oSpriteLibrary.getSprite("payouts"));
		f.addChild(c);
		c = createBitmap(s_oSpriteLibrary.getSprite("win_panel"));
		c.x = -6;
		c.y = 577;
		f.addChild(c);
		new CTLText(f, 20, 20, 250, 40, 50, "center", "#ffffff", PRIMARY_FONT, 1, 0, 0, TEXT_PAYOUTS, !0, !0, !1, !1);
		new CTLText(f, 20, 110, 120, 30, 30, "center", "#ffffff", PRIMARY_FONT, 1, 0, 0, TEXT_HITS, !0, !0, !1, !1);
		new CTLText(f, 150, 110, 120, 30, 30,
			"center", "#ffffff", PRIMARY_FONT, 1, 0, 0, TEXT_PAYS, !0, !0, !1, !1);
		m = [];
		k = [];
		p = [];
		for (c = 0; 6 > c; c++) m[c] = 190 + 50 * c, k[c] = new createjs.Text("-", "36px " + PRIMARY_FONT, "#ffffff"), k[c].x = 80, k[c].y = m[c], k[c].textAlign = "center", k[c].textBaseline = "middle", f.addChild(k[c]), p[c] = new createjs.Text("-", "36px " + PRIMARY_FONT, "#ffffff"), p[c].x = 210, p[c].y = m[c], p[c].textAlign = "center", p[c].textBaseline = "middle", f.addChild(p[c]);
		e = new CTLText(f, 20, 620, 250, 60, 40, "center", "#ffffff", PRIMARY_FONT, 1, 0, 0, TEXT_CURRENCY + "0", !0, !0, !1,
			!1)
	};
	this.unload = function () {
		s_oStage.removeChild(f)
	};
	this.updatePayouts = function (a) {
		if (0 > a) var b = 0;
		else {
			for (b = 0; b < PAYOUTS[a].hits.length; b++) k[b].text = PAYOUTS[a].hits[b], p[b].text = PAYOUTS[a].pays[b];
			b = PAYOUTS[a].hits.length
		}
		for (; 6 > b; b++) k[b].text = "-", p[b].text = "-"
	};
	this.showWin = function (a) {
		e.refreshText(TEXT_CURRENCY + a)
	};
	this.highlightWin = function (a) {
		for (var b = 0; 6 > b; b++)
			if (k[b].text === a) {
				d = b;
				this._flicker(b);
				break
			}
	};
	this._flicker = function (a) {
		b = 1 === b ? 0 : 1;
		createjs.Tween.get(k[a]).to({
			alpha: b
		}, 250, createjs.Ease.cubicOut);
		createjs.Tween.get(p[a]).to({
			alpha: b
		}, 250, createjs.Ease.cubicOut).call(function () {
			n._flicker(a)
		})
	};
	this.stopHighlight = function () {
		k[d] && (createjs.Tween.removeTweens(k[d]), createjs.Tween.removeTweens(p[d]), k[d].alpha = 1, p[d].alpha = 1)
	};
	var n = this;
	this._init(a, c)
}

function CAnimBalls(a, c) {
	var b, d, f, e, m, k;
	this._init = function (a, c) {
		b = ANIMATION_SPEED;
		f = 7;
		var n = s_oSpriteLibrary.getSprite("ball"),
			m = new createjs.SpriteSheet({
				images: [n],
				frames: {
					width: n.width / NUM_DIFFERENT_BALLS,
					height: n.height,
					regX: n.width / NUM_DIFFERENT_BALLS / 2,
					regY: n.height / 2
				},
				animations: {
					red: [0],
					green: [1],
					cyan: [0],
					violet: [1],
					blue: [1]
				}
			});
		e = [];
		k = [];
		d = n.height;
		for (var h = 0; 28 > h; h++) {
			var p = Math.floor(Math.random() * NUM_DIFFERENT_BALLS);
			e[h] = createSprite(m, p, n.width / NUM_DIFFERENT_BALLS / 2, n.height / 2, n.width /
				NUM_DIFFERENT_BALLS, n.height);
			e[h].gotoAndStop(p);
			e[h].x = a;
			h > f ? (e[h].alpha = 0, e[h].scaleX = e[h].scaleY = 0, e[h].y = c + f * d) : (e[h].y = c + h * d, k[h] = c + h * d)
		}
		for (h = 0; 28 > h; h++) s_oStage.addChild(e[28 - h - 1])
	};
	this.unload = function () {
		for (var a = 0; 26 > a; a++) s_oStage.removeChild(e[a])
	};
	this.startAnimation = function (a) {
		m = [];
		for (var b = 0; 20 > b; b++) m[b] = a[b];
		this._animBalls(0)
	};
	this._animBalls = function (a) {
		playSound("launch_ball", 1, !1);
		createjs.Tween.get(e[a]).to({
			y: -200
		}, 2 * b, createjs.Ease.quartOut).to({
			y: m[a].y
		}, 3 * b, createjs.Ease.bounceOut).call(function () {
			s_oGame.showExtracted(a,
				e[a].currentFrame);
			e[a].visible = !1;
			19 > a || s_oGame._checkContinueGame()
		});
		createjs.Tween.get(e[a]).to({
			x: m[a].x
		}, 5 * b);
		for (var c = 0, d = a + 1; d < a + f + 1; d++) createjs.Tween.get(e[d]).to({
			y: k[c]
		}, b), c++;
		createjs.Tween.get(e[a + f + 1]).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, b, createjs.Ease.cubicIn).call(function () {
			19 > a && p._animBalls(a + 1)
		})
	};
	this.resetBalls = function () {
		for (var b = 0; 28 > b; b++) {
			e[b].visible = !0;
			e[b].x = a;
			if (b <= f) e[b].y = c + b * d, e[b].gotoAndStop(e[20 + b].currentFrame);
			else if (b > f) {
				var k = Math.floor(Math.random() * NUM_DIFFERENT_BALLS);
				e[b].gotoAndStop(k);
				e[b].alpha = 0;
				e[b].scaleX = e[b].scaleY = 0;
				e[b].y = c + f * d
			} else k = Math.floor(Math.random() * NUM_DIFFERENT_BALLS), e[b].gotoAndStop(k), e[b].y = c + b * d;
			createjs.Tween.removeTweens(e[b])
		}
	};
	var p = this;
	this._init(a, c)
}

function CCreditsPanel() {
	var a, c, b, d, f, e, m, k;
	this._init = function () {
		k = new createjs.Container;
		s_oStage.addChild(k);
		a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
		k.addChild(a);
		f = new createjs.Shape;
		f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		f.alpha = .01;
		m = f.on("click", this._onLogoButRelease);
		k.addChild(f);
		var p = s_oSpriteLibrary.getSprite("but_exit");
		b = new CGfxButton(1230, 340, p, k);
		b.addEventListener(ON_MOUSE_UP, this.unload, this);
		d = new createjs.Text(TEXT_CREDITS_DEVELOPED,
			"40px " + SECONDARY_FONT, "#fff");
		d.textAlign = "center";
		d.textBaseline = "alphabetic";
		d.x = CANVAS_WIDTH / 2;
		d.y = CANVAS_HEIGHT / 2 - 54;
		k.addChild(d);
		p = s_oSpriteLibrary.getSprite("ctl_logo");
		c = createBitmap(p);
		c.regX = p.width / 2;
		c.regY = p.height / 2;
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2;
		k.addChild(c);
		e = new createjs.Text("www.codethislab.com", "36px " + SECONDARY_FONT, "#fff");
		e.textAlign = "center";
		e.textBaseline = "alphabetic";
		e.x = CANVAS_WIDTH / 2;
		e.y = CANVAS_HEIGHT / 2 + 70;
		k.addChild(e)
	};
	this.unload = function () {
		f.off("click", m);
		b.unload();
		b = null;
		s_oStage.removeChild(k)
	};
	this._onLogoButRelease = function () {
		window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
	};
	this._init()
}

function CDisplayPanel(a, c, b, d, f, e, m) {
	var k, p;
	this._init = function (a, b, c, d, e, f, m) {
		k = new createjs.Container;
		k.x = a;
		k.y = b;
		k.regX = c.width / 2;
		k.regY = c.height / 2;
		s_oStage.addChild(k);
		a = createBitmap(c);
		k.addChild(a);
		p = new CTLText(k, 0, 0, c.width, c.height, m, "center", f, e, 1, 0, 0, d, !0, !0, !1, !1)
	};
	this.unload = function () {
		s_oStage.removeChild(k)
	};
	this.setVisible = function (a) {
		k.visible = a
	};
	this.setText = function (a) {
		p.refreshText(a)
	};
	this.setPosition = function (a, b) {
		k.x = a;
		k.y = b
	};
	this.setX = function (a) {
		k.x = a
	};
	this.setY = function (a) {
		k.y =
			a
	};
	this.getButtonImage = function () {
		return k
	};
	this.getX = function () {
		return k.x
	};
	this.getY = function () {
		return k.y
	};
	this.setScale = function (a) {
		k.scaleX = a;
		k.scaleY = a
	};
	this._init(a, c, b, d, f, e, m);
	return this
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
	setShadow: function (a, c, b, d) {
		null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, c, b, d))
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

function CTLText(a, c, b, d, f, e, m, k, p, n, t, l, u, h, v, A, B) {
	this._oContainer = a;
	this._x = c;
	this._y = b;
	this._iWidth = d;
	this._iHeight = f;
	this._bMultiline = A;
	this._iFontSize = e;
	this._szAlign = m;
	this._szColor = k;
	this._szFont = p;
	this._iPaddingH = t;
	this._iPaddingV = l;
	this._bVerticalAlign = v;
	this._bFitText = h;
	this._bDebug = B;
	this._oDebugShape = null;
	this._fLineHeightFactor = n;
	this._oText = null;
	u && this.__createText(u)
};