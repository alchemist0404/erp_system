/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
  var b = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
    f = "undefined" !== typeof module && module.exports,
    e = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    a = function () {
      for (var a, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
      "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
      ], g = 0, d = c.length, f = {}; g < d; g++)
        if ((a = c[g]) && a[1] in b) {
          for (g = 0; g < a.length; g++) f[c[0][g]] =
            a[g];
          return f
        } return !1
    }(),
    d = {
      change: a.fullscreenchange,
      error: a.fullscreenerror
    },
    c = {
      request: function (c) {
        var k = a.requestFullscreen;
        c = c || b.documentElement;
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[k]();
        else c[k](e && Element.ALLOW_KEYBOARD_INPUT)
      },
      exit: function () {
        b[a.exitFullscreen]()
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
      on: function (a, c) {
        var k = d[a];
        k && b.addEventListener(k, c, !1)
      },
      off: function (a,
        c) {
        var k = d[a];
        k && b.removeEventListener(k, c, !1)
      },
      raw: a
    };
  a ? (Object.defineProperties(c, {
    isFullscreen: {
      get: function () {
        return !!b[a.fullscreenElement]
      }
    },
    element: {
      enumerable: !0,
      get: function () {
        return b[a.fullscreenElement]
      }
    },
    enabled: {
      enumerable: !0,
      get: function () {
        return !!b[a.fullscreenEnabled]
      }
    }
  }), f ? module.exports = c : window.screenfull = c) : f ? module.exports = !1 : window.screenfull = !1
})();
(function () {
  function b(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  function f(b, c) {
    var r = -1,
      k = b ? b.length : 0;
    if ("number" == typeof k && -1 < k && k <= m)
      for (; ++r < k;) c(b[r], r, b);
    else a(b, c)
  }

  function e(a) {
    a = String(a).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(a) ? a : b(a)
  }

  function a(a, b) {
    for (var c in a) l.call(a, c) && b(a[c], c, a)
  }

  function d(a) {
    return null == a ? b(a) : v.call(a).slice(8, -1)
  }

  function c(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return !/^(?:boolean|number|string|undefined)$/.test(c) &&
      ("object" == c ? !!a[b] : !0)
  }

  function h(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?")
  }

  function k(a, b) {
    var c = null;
    f(a, function (r, k) {
      c = b(c, r, k, a)
    });
    return c
  }

  function g(b) {
    function r(a) {
      return k(a, function (a, c) {
        var r = c.pattern || h(c);
        !a && (a = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(b) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(b) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(b)) && ((a = String(c.label && !RegExp(r, "i").test(c.label) ? c.label : a).split("/"))[1] && !/[\d.]+/.test(a[0]) && (a[0] +=
          " " + a[1]), c = c.label || c, a = e(a[0].replace(RegExp(r, "i"), c).replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ").replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")));
        return a
      })
    }

    function f(a) {
      return k(a, function (a, c) {
        return a || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(b) || 0)[1] || null
      })
    }
    var l = t,
      n = b && "object" == typeof b && "String" != d(b);
    n && (l = b, b = null);
    var q = l.navigator || {},
      m = q.userAgent || "";
    b || (b = m);
    var u = n ? !!q.likeChrome : /\bChrome\b/.test(b) && !/internal|\n/i.test(v.toString()),
      y = n ? "Object" : "ScriptBridgingProxyObject",
      K = n ? "Object" : "Environment",
      E = n && l.java ? "JavaPackage" : d(l.java),
      O = n ? "Object" : "RuntimeObject";
    K = (E = /\bJava/.test(E) && l.java) && d(l.environment) == K;
    var W = E ? "a" : "\u03b1",
      X = E ? "b" : "\u03b2",
      T = l.document || {},
      L = l.operamini || l.opera,
      Q = A.test(Q = n && L ? L["[[Class]]"] : d(L)) ? Q : L = null,
      p, R = b;
    n = [];
    var S = null,
      M = b == m;
    m = M && L && "function" == typeof L.version && L.version();
    var B = function (a) {
      return k(a, function (a, c) {
        return a || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(b) && (c.label ||
          c)
      })
    }([{
      label: "EdgeHTML",
      pattern: "Edge"
    }, "Trident", {
      label: "WebKit",
      pattern: "AppleWebKit"
    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
      w = function (a) {
        return k(a, function (a, c) {
          return a || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(b) && (c.label || c)
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
      C = r([{
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
      G = function (a) {
        return k(a, function (a, c, r) {
          return a || (c[C] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + h(r) + "(?:\\b|\\w*\\d)", "i").exec(b)) && r
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
      x = function (a) {
        return k(a, function (a, c) {
          var r = c.pattern || h(c);
          if (!a && (a = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(b))) {
            var k = a,
              g = c.label || c,
              d = {
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
            r && g && /^Win/i.test(k) && !/^Windows Phone /i.test(k) && (d = d[/[\d.]+$/.exec(k)]) && (k = "Windows " + d);
            k = String(k);
            r && g && (k = k.replace(RegExp(r, "i"), g));
            a = k = e(k.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
              " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
          }
          return a
        })
      }(["Windows Phone", "Android", "CentOS", {
        label: "Chrome OS",
        pattern: "CrOS"
      }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
        "Windows 98;", "Windows "
      ]);
    B && (B = [B]);
    G && !C && (C = r([G]));
    if (p = /\bGoogle TV\b/.exec(C)) C = p[0];
    /\bSimulator\b/i.test(b) && (C = (C ? C + " " : "") + "Simulator");
    "Opera Mini" == w && /\bOPiOS\b/.test(b) && n.push("running in Turbo/Uncompressed mode");
    "IE" == w && /\blike iPhone OS\b/.test(b) ? (p = g(b.replace(/like iPhone OS/, "")), G = p.manufacturer, C = p.product) : /^iP/.test(C) ? (w || (w = "Safari"), x = "iOS" + ((p = / OS ([\d_]+)/i.exec(b)) ? " " + p[1].replace(/_/g, ".") : "")) : "Konqueror" != w || /buntu/i.test(x) ? G && "Google" != G && (/Chrome/.test(w) &&
      !/\bMobile Safari\b/i.test(b) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(x) && /^Chrome/.test(w) && /\bVersion\//i.test(b) ? (w = "Android Browser", x = /\bAndroid\b/.test(x) ? x : "Android") : "Silk" == w ? (/\bMobi/i.test(b) || (x = "Android", n.unshift("desktop mode")), /Accelerated *= *true/i.test(b) && n.unshift("accelerated")) : "PaleMoon" == w && (p = /\bFirefox\/([\d.]+)\b/.exec(b)) ? n.push("identifying as Firefox " + p[1]) : "Firefox" == w && (p = /\b(Mobile|Tablet|TV)\b/i.exec(b)) ? (x || (x = "Firefox OS"), C || (C = p[1])) : !w || (p = !/\bMinefield\b/i.test(b) &&
        /\b(?:Firefox|Safari)\b/.exec(w)) ? (w && !C && /[\/,]|^[^(]+?\)/.test(b.slice(b.indexOf(p + "/") + 8)) && (w = null), (p = C || G || x) && (C || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(x)) && (w = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(x) ? x : p) + " Browser")) : "Electron" == w && (p = (/\bChrome\/([\d.]+)\b/.exec(b) || 0)[1]) && n.push("Chromium " + p) : x = "Kubuntu";
    m || (m = f(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", h(w), "(?:Firefox|Minefield|NetFront)"]));
    if (p = "iCab" == B && 3 < parseFloat(m) && "WebKit" || /\bOpera\b/.test(w) && (/\bOPR\b/.test(b) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(b) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(b) && ("Mac OS" == x ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(w) && "NetFront") B = [p];
    "IE" == w && (p = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(b) || 0)[1]) ? (w += " Mobile", x = "Windows Phone " + (/\+$/.test(p) ? p : p + ".x"), n.unshift("desktop mode")) : /\bWPDesktop\b/i.test(b) ? (w = "IE Mobile", x = "Windows Phone 8.x",
      n.unshift("desktop mode"), m || (m = (/\brv:([\d.]+)/.exec(b) || 0)[1])) : "IE" != w && "Trident" == B && (p = /\brv:([\d.]+)/.exec(b)) && (w && n.push("identifying as " + w + (m ? " " + m : "")), w = "IE", m = p[1]);
    if (M) {
      if (c(l, "global"))
        if (E && (p = E.lang.System, R = p.getProperty("os.arch"), x = x || p.getProperty("os.name") + " " + p.getProperty("os.version")), K) {
          try {
            m = l.require("ringo/engine").version.join("."), w = "RingoJS"
          } catch (V) {
            (p = l.system) && p.global.system == l.system && (w = "Narwhal", x || (x = p[0].os || null))
          }
          w || (w = "Rhino")
        } else "object" == typeof l.process &&
          !l.process.browser && (p = l.process) && ("object" == typeof p.versions && ("string" == typeof p.versions.electron ? (n.push("Node " + p.versions.node), w = "Electron", m = p.versions.electron) : "string" == typeof p.versions.nw && (n.push("Chromium " + m, "Node " + p.versions.node), w = "NW.js", m = p.versions.nw)), w || (w = "Node.js", R = p.arch, x = p.platform, m = (m = /[\d.]+/.exec(p.version)) ? m[0] : null));
      else d(p = l.runtime) == y ? (w = "Adobe AIR", x = p.flash.system.Capabilities.os) : d(p = l.phantom) == O ? (w = "PhantomJS", m = (p = p.version || null) && p.major + "." + p.minor +
        "." + p.patch) : "number" == typeof T.documentMode && (p = /\bTrident\/(\d+)/i.exec(b)) ? (m = [m, T.documentMode], (p = +p[1] + 4) != m[1] && (n.push("IE " + m[1] + " mode"), B && (B[1] = ""), m[1] = p), m = "IE" == w ? String(m[1].toFixed(1)) : m[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(w) && (n.push("masking as " + w + " " + m), w = "IE", m = "11.0", B = ["Trident"], x = "Windows");
      x = x && e(x)
    }
    m && (p = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(m) || /(?:alpha|beta)(?: ?\d)?/i.exec(b + ";" + (M && q.appMinorVersion)) || /\bMinefield\b/i.test(b) &&
      "a") && (S = /b/i.test(p) ? "beta" : "alpha", m = m.replace(RegExp(p + "\\+?$"), "") + ("beta" == S ? X : W) + (/\d+\+?/.exec(p) || ""));
    if ("Fennec" == w || "Firefox" == w && /\b(?:Android|Firefox OS)\b/.test(x)) w = "Firefox Mobile";
    else if ("Maxthon" == w && m) m = m.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(C)) "Xbox 360" == C && (x = null), "Xbox 360" == C && /\bIEMobile\b/.test(b) && n.unshift("mobile mode");
    else if (!/^(?:Chrome|IE|Opera)$/.test(w) && (!w || C || /Browser|Mobi/.test(w)) || "Windows CE" != x && !/Mobi/i.test(b))
      if ("IE" == w && M) try {
        null === l.external &&
          n.unshift("platform preview")
      } catch (V) {
        n.unshift("embedded")
      } else (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(b)) && (p = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(b) || 0)[1] || m) ? (p = [p, /BB10/.test(b)], x = (p[1] ? (C = null, G = "BlackBerry") : "Device Software") + " " + p[0], m = null) : this != a && "Wii" != C && (M && L || /Opera/.test(w) && /\b(?:MSIE|Firefox)\b/i.test(b) || "Firefox" == w && /\bOS X (?:\d+\.){2,}/.test(x) || "IE" == w && (x && !/^Win/.test(x) && 5.5 < m || /\bWindows XP\b/.test(x) && 8 < m || 8 == m && !/\bTrident\b/.test(b))) && !A.test(p =
        g.call(a, b.replace(A, "") + ";")) && p.name && (p = "ing as " + p.name + ((p = p.version) ? " " + p : ""), A.test(w) ? (/\bIE\b/.test(p) && "Mac OS" == x && (x = null), p = "identify" + p) : (p = "mask" + p, w = Q ? e(Q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(p) && (x = null), M || (m = null)), B = ["Presto"], n.push(p));
    else w += " Mobile";
    if (p = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(b) || 0)[1]) {
      p = [parseFloat(p.replace(/\.(\d)$/, ".0$1")), p];
      if ("Safari" == w && "+" == p[1].slice(-1)) w = "WebKit Nightly", S = "alpha", m = p[1].slice(0, -1);
      else if (m == p[1] || m == (p[2] =
        (/\bSafari\/([\d.]+\+?)/i.exec(b) || 0)[1])) m = null;
      p[1] = (/\bChrome\/([\d.]+)/i.exec(b) || 0)[1];
      537.36 == p[0] && 537.36 == p[2] && 28 <= parseFloat(p[1]) && "WebKit" == B && (B = ["Blink"]);
      M && (u || p[1]) ? (B && (B[1] = "like Chrome"), p = p[1] || (p = p[0], 530 > p ? 1 : 532 > p ? 2 : 532.05 > p ? 3 : 533 > p ? 4 : 534.03 > p ? 5 : 534.07 > p ? 6 : 534.1 > p ? 7 : 534.13 > p ? 8 : 534.16 > p ? 9 : 534.24 > p ? 10 : 534.3 > p ? 11 : 535.01 > p ? 12 : 535.02 > p ? "13+" : 535.07 > p ? 15 : 535.11 > p ? 16 : 535.19 > p ? 17 : 536.05 > p ? 18 : 536.1 > p ? 19 : 537.01 > p ? 20 : 537.11 > p ? "21+" : 537.13 > p ? 23 : 537.18 > p ? 24 : 537.24 > p ? 25 : 537.36 > p ? 26 : "Blink" !=
        B ? "27" : "28")) : (B && (B[1] = "like Safari"), p = (p = p[0], 400 > p ? 1 : 500 > p ? 2 : 526 > p ? 3 : 533 > p ? 4 : 534 > p ? "4+" : 535 > p ? 5 : 537 > p ? 6 : 538 > p ? 7 : 601 > p ? 8 : "8"));
      B && (B[1] += " " + (p += "number" == typeof p ? ".x" : /[.+]/.test(p) ? "" : "+"));
      "Safari" == w && (!m || 45 < parseInt(m)) && (m = p)
    }
    "Opera" == w && (p = /\bzbov|zvav$/.exec(x)) ? (w += " ", n.unshift("desktop mode"), "zvav" == p ? (w += "Mini", m = null) : w += "Mobile", x = x.replace(RegExp(" *" + p + "$"), "")) : "Safari" == w && /\bChrome\b/.exec(B && B[1]) && (n.unshift("desktop mode"), w = "Chrome Mobile", m = null, /\bOS X\b/.test(x) ? (G =
      "Apple", x = "iOS 4.3+") : x = null);
    m && 0 == m.indexOf(p = /[\d.]+$/.exec(x)) && -1 < b.indexOf("/" + p + "-") && (x = String(x.replace(p, "")).replace(/^ +| +$/g, ""));
    B && !/\b(?:Avant|Nook)\b/.test(w) && (/Browser|Lunascape|Maxthon/.test(w) || "Safari" != w && /^iOS/.test(x) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(w) && B[1]) && (p = B[B.length - 1]) && n.push(p);
    n.length && (n = ["(" + n.join("; ") + ")"]);
    G && C && 0 > C.indexOf(G) && n.push("on " + G);
    C && n.push((/^on /.test(n[n.length -
      1]) ? "" : "on ") + C);
    if (x) {
      var U = (p = / ([\d.+]+)$/.exec(x)) && "/" == x.charAt(x.length - p[0].length - 1);
      x = {
        architecture: 32,
        family: p && !U ? x.replace(p[0], "") : x,
        version: p ? p[1] : null,
        toString: function () {
          var a = this.version;
          return this.family + (a && !U ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
        }
      }
    } (p = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R) ? (x && (x.architecture = 64, x.family = x.family.replace(RegExp(" *" + p), "")), w && (/\bWOW64\b/i.test(b) || M && /\w(?:86|32)$/.test(q.cpuClass || q.platform) && !/\bWin64; x64\b/i.test(b)) &&
      n.unshift("32-bit")) : x && /^OS X/.test(x.family) && "Chrome" == w && 39 <= parseFloat(m) && (x.architecture = 64);
    b || (b = null);
    l = {};
    l.description = b;
    l.layout = B && B[0];
    l.manufacturer = G;
    l.name = w;
    l.prerelease = S;
    l.product = C;
    l.ua = b;
    l.version = w && m;
    l.os = x || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null"
      }
    };
    l.parse = g;
    l.toString = function () {
      return this.description || ""
    };
    l.version && n.unshift(m);
    l.name && n.unshift(w);
    x && w && (x != String(x).split(" ")[0] || x != w.split(" ")[0] && !C) && n.push(C ? "(" + x + ")" : "on " +
      x);
    n.length && (l.description = n.join(" "));
    return l
  }
  var n = {
    "function": !0,
    object: !0
  },
    t = n[typeof window] && window || this,
    q = n[typeof exports] && exports;
  n = n[typeof module] && module && !module.nodeType && module;
  var u = q && n && "object" == typeof global && global;
  !u || u.global !== u && u.window !== u && u.self !== u || (t = u);
  var m = Math.pow(2, 53) - 1,
    A = /\bOpera/;
  u = Object.prototype;
  var l = u.hasOwnProperty,
    v = u.toString,
    r = g();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (t.platform = r, define(function () {
    return r
  })) : q &&
    n ? a(r, function (a, b) {
      q[b] = a
    }) : t.platform = r
}).call(this);

function buildIOSMeta() {
  for (var b = [{
    name: "viewport",
    content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
  }, {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }, {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black"
  }], f = 0; f < b.length; f++) {
    var e = document.createElement("meta");
    e.name = b[f].name;
    e.content = b[f].content;
    var a = window.document.head.querySelector('meta[name="' + e.name + '"]');
    a && a.parentNode.removeChild(a);
    window.document.head.appendChild(e)
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
  console.log(window.devicePixelRatio);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
    case 2:
      switch (window.innerWidth) {
        case 568:
          320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
          break;
        case 667:
          375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
          break;
        case 808:
          414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
        case 808:
          414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
  } catch (b) {
    return !0
  }
}
$(document).ready(function () {
  platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
  platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && iosResize()
});
var s_iScaleFactor = 1,
  s_bIsIphone = !1;
(function (b) {
  (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(b.substr(0,
    4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
  sizeHandler()
});

function trace(b) {
  console.log(b)
}

function isIOS() {
  var b = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
  for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); b.length;)
    if (navigator.platform === b.pop()) return !0;
  return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function sizeHandler() {
  window.scrollTo(0, 1);
  if ($("#canvas")) {
    var b = CANVAS_WIDTH,
      f = CANVAS_HEIGHT,
      e = window.innerWidth,
      a = window.innerHeight;
    _checkOrientation(e, a);
    multiplier = Math.min(a / f, e / b);
    b = Math.round(CANVAS_WIDTH * multiplier);
    f = Math.round(CANVAS_HEIGHT * multiplier);
    var d = a / 2 - f / 2,
      c = e / 2 - b / 2,
      h = CANVAS_WIDTH / b;
    if (0 > c * h || 0 > d * h) multiplier = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH), b = Math.round(CANVAS_WIDTH * multiplier), f = Math.round(CANVAS_HEIGHT * multiplier), d = (a - f) / 2, c = (e - b) / 2, h = CANVAS_WIDTH / b;
    s_iOffsetX = -1 *
      c * h;
    s_iOffsetY = -1 * d * h;
    0 <= d && (s_iOffsetY = 0);
    s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * f, canvas.style.width = b + "px", canvas.style.height = f + "px", c = Math.min(b / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_iScaleFactor = 2 * c, s_oStage.scaleX = s_oStage.scaleY = 2 * c) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", f + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = f, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, f / CANVAS_HEIGHT),
      s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
    0 > d || (d = (a - f) / 2);
    $("#canvas").css("top", d + "px");
    $("#canvas").css("left", e / 2 - b / 2 + "px");
    fullscreenHandler()
  }
}

function _checkOrientation(b, f) {
  s_bMobile && ENABLE_CHECK_ORIENTATION && (b > f ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()))
}

function createBitmap(b, f, e) {
  var a = new createjs.Bitmap(b),
    d = new createjs.Shape;
  f && e ? d.graphics.beginFill("#fff").drawRect(0, 0, f, e) : d.graphics.beginFill("#ff0").drawRect(0, 0, b.width, b.height);
  a.hitArea = d;
  return a
}

function createSprite(b, f, e, a, d, c) {
  b = null !== f ? new createjs.Sprite(b, f) : new createjs.Sprite(b);
  f = new createjs.Shape;
  f.graphics.beginFill("#000000").drawRect(-e, -a, d, c);
  b.hitArea = f;
  return b
}

function randomFloatBetween(b, f, e) {
  "undefined" === typeof e && (e = 2);
  return parseFloat(Math.min(b + Math.random() * (f - b), f).toFixed(e))
}

function shuffle(b) {
  for (var f = b.length, e, a; 0 !== f;) a = Math.floor(Math.random() * f), --f, e = b[f], b[f] = b[a], b[a] = e;
  return b
}

function roundDecimal(b, f) {
  var e = Math.pow(10, f);
  return Math.round(e * b) / e
}

function tweenVectors(b, f, e, a) {
  a.x = b.x + e * (f.x - b.x);
  a.y = b.y + e * (f.y - b.y);
  return a
}

function easeInOutCubic(b, f, e, a) {
  return 1 > (b /= a / 2) ? e / 2 * b * b * b + f : e / 2 * ((b -= 2) * b * b + 2) + f
}

function formatTime(b) {
  b /= 1E3;
  var f = Math.floor(b / 60);
  b = parseFloat(b - 60 * f).toFixed(1);
  var e = "";
  e = 10 > f ? e + ("0" + f + ":") : e + (f + ":");
  return 10 > b ? e + ("0" + b) : e + b
}

function NoClickDelay(b) {
  this.element = b;
  window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
  handleEvent: function (b) {
    switch (b.type) {
      case "touchstart":
        this.onTouchStart(b);
        break;
      case "touchmove":
        this.onTouchMove(b);
        break;
      case "touchend":
        this.onTouchEnd(b)
    }
  },
  onTouchStart: function (b) {
    b.preventDefault();
    this.moved = !1;
    this.element.addEventListener("touchmove", this, !1);
    this.element.addEventListener("touchend", this, !1)
  },
  onTouchMove: function (b) {
    this.moved = !0
  },
  onTouchEnd: function (b) {
    this.element.removeEventListener("touchmove", this, !1);
    this.element.removeEventListener("touchend",
      this, !1);
    if (!this.moved) {
      b = document.elementFromPoint(b.changedTouches[0].clientX, b.changedTouches[0].clientY);
      3 === b.nodeType && (b = b.parentNode);
      var f = document.createEvent("MouseEvents");
      f.initEvent("click", !0, !0);
      b.dispatchEvent(f)
    }
  }
};

function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(b) {
  for (var f = window.location.search.substring(1).split("&"), e = 0; e < f.length; e++) {
    var a = f[e].split("=");
    if (a[0] == b) return a[1]
  }
}

function playSound(b, f, e) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[b].play(), s_aSounds[b].volume(f), s_aSounds[b].loop(e), s_aSounds[b]) : null
}

function stopSound(b) {
  !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].stop()
}

function setVolume(b, f) {
  !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].volume(f)
}

function setMute(b, f) {
  !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].mute(f)
}

function fullscreenHandler() {
  ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function () {
  s_bFullscreen = screenfull.isFullscreen;
  null !== s_oInterface && s_oInterface.resetFullscreenBut();
  null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
  var b = {},
    f, e, a, d, c, h;
  this.init = function (b, g, n) {
    f = {};
    a = e = 0;
    d = b;
    c = g;
    h = n
  };
  this.addSprite = function (a, c) {
    if (b.hasOwnProperty(a)) return !1;
    var k = new Image;
    b[a] = f[a] = {
      szPath: c,
      oSprite: k,
      bLoaded: !1
    };
    e++;
    return !0
  };
  this.getSprite = function (a) {
    return b.hasOwnProperty(a) ? b[a].oSprite : null
  };
  this._onSpritesLoaded = function () {
    e = 0;
    c.call(h)
  };
  this._onSpriteLoaded = function () {
    d.call(h);
    ++a === e && this._onSpritesLoaded()
  };
  this.loadSprites = function () {
    for (var a in f) f[a].oSprite.oSpriteLibrary = this,
      f[a].oSprite.szKey = a, f[a].oSprite.onload = function () {
        this.oSpriteLibrary.setLoaded(this.szKey);
        this.oSpriteLibrary._onSpriteLoaded(this.szKey)
      }, f[a].oSprite.onerror = function (a) {
        var b = a.currentTarget;
        setTimeout(function () {
          f[b.szKey].oSprite.src = f[b.szKey].szPath
        }, 500)
      }, f[a].oSprite.src = f[a].szPath
  };
  this.setLoaded = function (a) {
    b[a].bLoaded = !0
  };
  this.isLoaded = function (a) {
    return b[a].bLoaded
  };
  this.getNumSprites = function () {
    return e
  }
}
var CANVAS_WIDTH = 750,
  CANVAS_HEIGHT = 600,
  FPS_TIME = 1E3 / 24,
  DISABLE_SOUND_MOBILE = !1,
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  STATE_GAME_WAITING_FOR_BET = 0,
  STATE_GAME_SPINNING = 1,
  STATE_GAME_SHOW_WINNER = 2,
  STATE_DISTRIBUTE_FICHES = 3,
  ON_SHOW_BET_ON_TABLE = 0,
  ON_SHOW_ENLIGHT = 1,
  ON_HIDE_ENLIGHT = 2,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  COLOR_RED = "red",
  COLOR_BLACK = "black",
  COLOR_ZERO = "zero",
  TOTAL_MONEY, NUM_FICHE_VALUES = 5,
  NUMBERS_TO_BET = 37,
  NUM_FICHES = 5,
  MIN_BET, MAX_BET, WIN_OCCURRENCE, TIME_WAITING_BET, TIME_SPINNING = 3500,
  TIME_SHOW_WINNER, TIME_FICHES_MOV = 500,
  NUM_WHEEL_TOP_FRAMES = 200,
  NUM_MASK_BALL_SPIN_FRAMES = 200,
  NUM_BALL_SPIN_FRAMES = 400,
  NUM_HAND_FOR_ADS, COLOR_FICHES = "#d50000 #ff7706 #ffb107 #3c3935 #06a800 #939793".split(" "),
  FONT1 = "arialbold",
  FONT2 = "Digital-7",
  ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;

function CRouletteSettings() {
  var b, f, e, a, d, c;
  this._init = function () {
    this._initAttachFiches();
    b = [1, 5, 10, 25, 100];
    e = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    f = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    a = [1, 77, 169, 12, 180, 99, 148, 34, 115, 55, 104, 126, 23, 137, 66, 191, 88, 158, 45, 185, 72, 174, 50, 110, 93, 164, 7, 142, 28, 39, 120, 61, 196, 83, 153, 17, 131];
    d = [
      []
    ];
    d[0][0] = 32;
    d[0][1] = 107;
    d[0][2] = 1;
    d[0][3] = 42;
    d[0][4] = 10;
    d[0][5] = 129;
    d[0][6] = 177;
    d[0][7] = 63;
    d[0][8] = 145;
    d[0][9] = 86;
    d[0][10] = 134;
    d[0][11] = 156;
    d[0][12] = 53;
    d[0][13] = 167;
    d[0][14] = 97;
    d[0][15] = 21;
    d[0][16] = 118;
    d[0][17] = 188;
    d[0][18] = 75;
    d[0][19] = 15;
    d[0][20] = 102;
    d[0][21] = 4;
    d[0][22] = 80;
    d[0][23] = 140;
    d[0][24] = 124;
    d[0][25] = 192;
    d[0][26] = 36;
    d[0][27] = 172;
    d[0][28] = 58;
    d[0][29] = 69;
    d[0][30] = 151;
    d[0][31] = 91;
    d[0][32] = 26;
    d[0][33] = 113;
    d[0][34] = 183;
    d[0][35] = 47;
    d[0][36] = 161;
    d[1] = [];
    d[1][0] = 172;
    d[1][1] = 47;
    d[1][2] = 140;
    d[1][3] = 181;
    d[1][4] = 151;
    d[1][5] = 69;
    d[1][6] = 118;
    d[1][7] = 4;
    d[1][8] = 86;
    d[1][9] = 26;
    d[1][10] = 75;
    d[1][11] = 97;
    d[1][12] = 192;
    d[1][13] = 107;
    d[1][14] = 36;
    d[1][15] = 161;
    d[1][16] = 58;
    d[1][17] = 129;
    d[1][18] = 15;
    d[1][19] = 156;
    d[1][20] = 42;
    d[1][21] = 144;
    d[1][22] = 20;
    d[1][23] = 80;
    d[1][24] = 63;
    d[1][25] = 134;
    d[1][26] = 177;
    d[1][27] = 113;
    d[1][28] = 0;
    d[1][29] = 9;
    d[1][30] = 91;
    d[1][31] = 31;
    d[1][32] = 167;
    d[1][33] = 53;
    d[1][34] = 124;
    d[1][35] = 188;
    d[1][36] = 102;
    d[2] = [];
    d[2][0] = 86;
    d[2][1] = 161;
    d[2][2] = 53;
    d[2][3] = 97;
    d[2][4] = 63;
    d[2][5] = 183;
    d[2][6] = 31;
    d[2][7] = 118;
    d[2][8] = 0;
    d[2][9] = 140;
    d[2][10] = 188;
    d[2][11] = 9;
    d[2][12] = 107;
    d[2][13] = 20;
    d[2][14] = 149;
    d[2][15] = 75;
    d[2][16] = 172;
    d[2][17] = 42;
    d[2][18] = 129;
    d[2][19] = 69;
    d[2][20] = 156;
    d[2][21] = 58;
    d[2][22] = 134;
    d[2][23] = 194;
    d[2][24] = 177;
    d[2][25] = 47;
    d[2][26] = 91;
    d[2][27] = 26;
    d[2][28] = 113;
    d[2][29] = 124;
    d[2][30] = 4;
    d[2][31] = 144;
    d[2][32] = 80;
    d[2][33] = 167;
    d[2][34] = 36;
    d[2][35] = 102;
    d[2][36] = 15
  };
  this._initAttachFiches = function () {
    c = [];
    c.bet_0 = {
      x: 67,
      y: -54
    };
    c.bet_1 = {
      x: 68,
      y: -10
    };
    c.bet_2 = {
      x: 94,
      y: -36
    };
    c.bet_3 = {
      x: 118,
      y: -59
    };
    c.bet_4 = {
      x: 92,
      y: 7
    };
    c.bet_5 = {
      x: 118,
      y: -17
    };
    c.bet_6 = {
      x: 140,
      y: -42
    };
    c.bet_7 = {
      x: 116,
      y: 25
    };
    c.bet_8 = {
      x: 142,
      y: -2
    };
    c.bet_9 = {
      x: 165,
      y: -25
    };
    c.bet_10 = {
      x: 140,
      y: 40
    };
    c.bet_11 = {
      x: 164,
      y: 15
    };
    c.bet_12 = {
      x: 190,
      y: -8
    };
    c.bet_13 = {
      x: 165,
      y: 59
    };
    c.bet_14 = {
      x: 190,
      y: 34
    };
    c.bet_15 = {
      x: 215,
      y: 11
    };
    c.bet_16 = {
      x: 190,
      y: 80
    };
    c.bet_17 = {
      x: 216,
      y: 53
    };
    c.bet_18 = {
      x: 240,
      y: 28
    };
    c.bet_19 = {
      x: 217,
      y: 98
    };
    c.bet_20 = {
      x: 241,
      y: 72
    };
    c.bet_21 = {
      x: 266,
      y: 46
    };
    c.bet_22 = {
      x: 242,
      y: 118
    };
    c.bet_23 = {
      x: 265,
      y: 92
    };
    c.bet_24 = {
      x: 291,
      y: 64
    };
    c.bet_25 = {
      x: 268,
      y: 137
    };
    c.bet_26 = {
      x: 292,
      y: 110
    };
    c.bet_27 = {
      x: 316,
      y: 84
    };
    c.bet_28 = {
      x: 294,
      y: 156
    };
    c.bet_29 = {
      x: 318,
      y: 129
    };
    c.bet_30 = {
      x: 342,
      y: 102
    };
    c.bet_31 = {
      x: 319,
      y: 175
    };
    c.bet_32 = {
      x: 345,
      y: 149
    };
    c.bet_33 = {
      x: 369,
      y: 121
    };
    c.bet_34 = {
      x: 348,
      y: 197
    };
    c.bet_35 = {
      x: 373,
      y: 169
    };
    c.bet_36 = {
      x: 396,
      y: 141
    };
    c.bet_0_1 = {
      x: 59,
      y: -20
    };
    c.bet_0_2 = {
      x: 84,
      y: -43
    };
    c.bet_0_3 = {
      x: 109,
      y: -66
    };
    c.bet_1_4 = {
      x: 82,
      y: -1
    };
    c.bet_2_5 = {
      x: 106,
      y: -24
    };
    c.bet_3_6 = {
      x: 129,
      y: -49
    };
    c.bet_4_7 = {
      x: 106,
      y: 16
    };
    c.bet_5_8 = {
      x: 130,
      y: -6
    };
    c.bet_6_9 = {
      x: 154,
      y: -33
    };
    c.bet_7_10 = {
      x: 128,
      y: 35
    };
    c.bet_8_11 = {
      x: 155,
      y: 11
    };
    c.bet_9_12 = {
      x: 179,
      y: -16
    };
    c.bet_10_13 = {
      x: 153,
      y: 53
    };
    c.bet_11_14 = {
      x: 179,
      y: 29
    };
    c.bet_12_15 = {
      x: 203,
      y: 4
    };
    c.bet_13_16 = {
      x: 179,
      y: 71
    };
    c.bet_14_17 = {
      x: 201,
      y: 45
    };
    c.bet_15_18 = {
      x: 225,
      y: 21
    };
    c.bet_16_19 = {
      x: 203,
      y: 90
    };
    c.bet_17_20 = {
      x: 228,
      y: 64
    };
    c.bet_18_21 = {
      x: 252,
      y: 40
    };
    c.bet_19_22 = {
      x: 230,
      y: 109
    };
    c.bet_20_23 = {
      x: 252,
      y: 83
    };
    c.bet_21_24 = {
      x: 277,
      y: 57
    };
    c.bet_22_25 = {
      x: 255,
      y: 128
    };
    c.bet_23_26 = {
      x: 278,
      y: 102
    };
    c.bet_24_27 = {
      x: 302,
      y: 76
    };
    c.bet_25_28 = {
      x: 282,
      y: 148
    };
    c.bet_26_29 = {
      x: 306,
      y: 120
    };
    c.bet_27_30 = {
      x: 328,
      y: 94
    };
    c.bet_28_31 = {
      x: 309,
      y: 167
    };
    c.bet_29_32 = {
      x: 332,
      y: 140
    };
    c.bet_30_33 = {
      x: 354,
      y: 112
    };
    c.bet_31_34 = {
      x: 334,
      y: 188
    };
    c.bet_32_35 = {
      x: 358,
      y: 160
    };
    c.bet_33_36 = {
      x: 382,
      y: 132
    };
    c.bet_1_2 = {
      x: 81,
      y: -22
    };
    c.bet_2_3 = {
      x: 107,
      y: -46
    };
    c.bet_4_5 = {
      x: 105,
      y: -4
    };
    c.bet_5_6 = {
      x: 129,
      y: -30
    };
    c.bet_7_8 = {
      x: 127,
      y: 12
    };
    c.bet_8_9 = {
      x: 154,
      y: -12
    };
    c.bet_10_11 = {
      x: 153,
      y: 30
    };
    c.bet_11_12 = {
      x: 178,
      y: 5
    };
    c.bet_13_14 = {
      x: 178,
      y: 47
    };
    c.bet_14_15 = {
      x: 202,
      y: 22
    };
    c.bet_16_17 = {
      x: 203,
      y: 65
    };
    c.bet_17_18 = {
      x: 227,
      y: 40
    };
    c.bet_19_20 = {
      x: 230,
      y: 84
    };
    c.bet_20_21 = {
      x: 252,
      y: 59
    };
    c.bet_22_23 = {
      x: 256,
      y: 103
    };
    c.bet_23_24 = {
      x: 278,
      y: 77
    };
    c.bet_25_26 = {
      x: 281,
      y: 122
    };
    c.bet_26_27 = {
      x: 303,
      y: 96
    };
    c.bet_28_29 = {
      x: 307,
      y: 141
    };
    c.bet_29_30 = {
      x: 330,
      y: 115
    };
    c.bet_31_32 = {
      x: 333,
      y: 161
    };
    c.bet_32_33 = {
      x: 356,
      y: 135
    };
    c.bet_34_35 = {
      x: 359,
      y: 181
    };
    c.bet_35_36 = {
      x: 383,
      y: 154
    };
    c.bet_0_1_2 = {
      x: 69,
      y: -33
    };
    c.bet_0_2_3 = {
      x: 97,
      y: -58
    };
    c.bet_1_2_3 = {
      x: 57,
      y: 1
    };
    c.bet_4_5_6 = {
      x: 79,
      y: 19
    };
    c.bet_7_8_9 = {
      x: 105,
      y: 36
    };
    c.bet_10_11_12 = {
      x: 128,
      y: 55
    };
    c.bet_13_14_15 = {
      x: 153,
      y: 73
    };
    c.bet_16_17_18 = {
      x: 179,
      y: 93
    };
    c.bet_19_20_21 = {
      x: 205,
      y: 110
    };
    c.bet_22_23_24 = {
      x: 230,
      y: 129
    };
    c.bet_25_26_27 = {
      x: 257,
      y: 149
    };
    c.bet_28_29_30 = {
      x: 282,
      y: 169
    };
    c.bet_31_32_33 = {
      x: 307,
      y: 191
    };
    c.bet_34_35_36 = {
      x: 337,
      y: 210
    };
    c.bet_0_1_2_3 = {
      x: 43,
      y: -7
    };
    c.bet_1_2_4_5 = {
      x: 93,
      y: -15
    };
    c.bet_2_3_5_6 = {
      x: 119,
      y: -38
    };
    c.bet_4_5_7_8 = {
      x: 119,
      y: 3
    };
    c.bet_5_6_8_9 = {
      x: 143,
      y: -21
    };
    c.bet_7_8_10_11 = {
      x: 142,
      y: 20
    };
    c.bet_8_9_11_12 = {
      x: 167,
      y: -3
    };
    c.bet_10_11_13_14 = {
      x: 167,
      y: 38
    };
    c.bet_11_12_14_15 = {
      x: 191,
      y: 14
    };
    c.bet_13_14_16_17 = {
      x: 192,
      y: 57
    };
    c.bet_14_15_17_18 = {
      x: 216,
      y: 32
    };
    c.bet_16_17_19_20 = {
      x: 216,
      y: 76
    };
    c.bet_17_18_20_21 = {
      x: 240,
      y: 49
    };
    c.bet_19_20_22_23 = {
      x: 242,
      y: 95
    };
    c.bet_20_21_23_24 = {
      x: 266,
      y: 68
    };
    c.bet_22_23_25_26 = {
      x: 266,
      y: 114
    };
    c.bet_23_24_26_27 = {
      x: 292,
      y: 86
    };
    c.bet_25_26_28_29 = {
      x: 292,
      y: 133
    };
    c.bet_26_27_29_30 = {
      x: 318,
      y: 105
    };
    c.bet_28_29_31_32 = {
      x: 318,
      y: 153
    };
    c.bet_29_30_32_33 = {
      x: 345,
      y: 125
    };
    c.bet_31_32_34_35 = {
      x: 347,
      y: 172
    };
    c.bet_32_33_35_36 = {
      x: 372,
      y: 144
    };
    c.bet_1_2_3_4_5_6 = {
      x: 68,
      y: 8
    };
    c.bet_4_5_6_7_8_9 = {
      x: 93,
      y: 25
    };
    c.bet_7_8_9_10_11_12 = {
      x: 118,
      y: 43
    };
    c.bet_10_11_12_13_14_15 = {
      x: 142,
      y: 63
    };
    c.bet_13_14_15_16_17_18 = {
      x: 166,
      y: 80
    };
    c.bet_16_17_18_19_20_21 = {
      x: 192,
      y: 99
    };
    c.bet_19_20_21_22_23_24 = {
      x: 217,
      y: 118
    };
    c.bet_22_23_24_25_26_27 = {
      x: 244,
      y: 138
    };
    c.bet_25_26_27_28_29_30 = {
      x: 270,
      y: 158
    };
    c.bet_28_29_30_31_32_33 = {
      x: 297,
      y: 179
    };
    c.bet_31_32_33_34_35_36 = {
      x: 324,
      y: 200
    };
    c.col1 = {
      x: 375,
      y: 216
    };
    c.col2 = {
      x: 399,
      y: 187
    };
    c.col3 = {
      x: 423,
      y: 161
    };
    c.first12 = {
      x: 70,
      y: 45
    };
    c.second12 = {
      x: 170,
      y: 123
    };
    c.third12 = {
      x: 280,
      y: 203
    };
    c.first18 = {
      x: 8,
      y: 68
    };
    c.even = {
      x: 55,
      y: 104
    };
    c.black = {
      x: 107,
      y: 142
    };
    c.red = {
      x: 160,
      y: 185
    };
    c.odd = {
      x: 212,
      y: 225
    };
    c.second18 = {
      x: 263,
      y: 267
    };
    c.oDealerWin = {
      x: 105,
      y: -232
    };
    c.oReceiveWin = {
      x: 215,
      y: 428
    }
  };
  this.generateFichesPileByIndex = function (a) {
    var c = [],
      g = b.length - 1,
      d = b[g];
    do {
      var f = a % d;
      f = roundDecimal(f, 1);
      a = Math.floor(a / d);
      for (var h = 0; h < a; h++) c.push(this.getFicheIndexByValue(d));
      g--;
      d = b[g];
      a = f
    } while (0 <
    f && -1 < g);
    return c
  };
  this.getNumbersForButton = function (a) {
    switch (a) {
      case "col1":
        var b = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        break;
      case "col2":
        b = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        break;
      case "col3":
        b = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        break;
      case "first12":
        b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        break;
      case "second12":
        b = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        break;
      case "third12":
        b = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        break;
      case "first18":
        b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        break;
      case "second18":
        b = [19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
        ];
        break;
      case "even":
        b = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
        break;
      case "black":
        b = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        break;
      case "red":
        b = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        break;
      case "odd":
        b = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
        break;
      case "oBetVoisinsZero":
        b = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
        break;
      case "oBetTier":
        b = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
        break;
      case "oBetOrphelins":
        b = [1, 6, 9, 14, 17, 20, 31, 34]
    }
    return b
  };
  this.getBetMultiplierForButton = function (a) {
    switch (a) {
      case "oBetFirstRow":
        var b = 12;
        break;
      case "oBetSecondRow":
        b = 12;
        break;
      case "oBetThirdRow":
        b = 12;
        break;
      case "oBetFirst12":
        b = 12;
        break;
      case "oBetSecond12":
        b = 12;
        break;
      case "oBetThird12":
        b = 12;
        break;
      case "oBetFirst18":
        b = 18;
        break;
      case "oBetSecond18":
        b = 18;
        break;
      case "oBetEven":
        b = 18;
        break;
      case "oBetBlack":
        b = 18;
        break;
      case "oBetRed":
        b = 18;
        break;
      case "oBetOdd":
        b = 18;
        break;
      case "oBetVoisinsZero":
        b = 17;
        break;
      case "oBetTier":
        b = 12;
        break;
      case "oBetOrphelins":
        b = 8;
        break;
      case "oBetFinalsBet":
        b = 4
    }
    return b
  };
  this.getBetWinForButton = function (a) {
    switch (a) {
      case "oBetFirstRow":
        var b = 3;
        break;
      case "oBetSecondRow":
        b = 3;
        break;
      case "oBetThirdRow":
        b = 3;
        break;
      case "oBetFirst12":
        b = 3;
        break;
      case "oBetSecond12":
        b = 3;
        break;
      case "oBetThird12":
        b = 3;
        break;
      case "oBetFirst18":
        b = 2;
        break;
      case "oBetSecond18":
        b = 2;
        break;
      case "oBetEven":
        b = 2;
        break;
      case "oBetBlack":
        b = 2;
        break;
      case "oBetRed":
        b = 2;
        break;
      case "oBetOdd":
        b = 2;
        break;
      case "oBetVoisinsZero":
        b = 2;
        break;
      case "oBetTier":
        b =
          3;
        break;
      case "oBetOrphelins":
        b = 4;
        break;
      case "oBetFinalsBet":
        b = 4
    }
    return b
  };
  this.getNumFichesPerBet = function (a) {
    switch (a) {
      case "oBetVoisinsZero":
        var b = 9;
        break;
      case "oBetTier":
        b = 6;
        break;
      case "oBetOrphelins":
        b = 5
    }
    return b
  };
  this.getFicheValues = function (a) {
    return b[a]
  };
  this.getFicheIndexByValue = function (a) {
    for (var c = 0, g = 0; g < b.length; g++)
      if (a === b[g]) {
        c = g;
        break
      } return c
  };
  this.getColorNumber = function (a) {
    var b;
    for (b = 0; b < e.length; b++)
      if (e[b] === a) return COLOR_BLACK;
    for (b = 0; b < f.length; b++)
      if (f[b] === a) return COLOR_RED;
    return COLOR_ZERO
  };
  this.getFrameForNumber = function (b) {
    return a[b]
  };
  this.getFrameForBallSpin = function (a, b) {
    return d[a][b]
  };
  this.getAttachOffset = function (a) {
    return c[a]
  };
  this._init()
}

function CFichesController(b) {
  var f, e, a, d, c, h;
  this._init = function (a) {
    h = a;
    this.reset()
  };
  this.reset = function () {
    this._removeAllFichesOnTable();
    f = [];
    e = [];
    a = [];
    d = [];
    c = []
  };
  this.setFicheOnTable = function (a, b, c) {
    this.addFicheOnTable(a, b, c);
    d.push({
      tag: "oBetSingle",
      num: 1
    })
  };
  this.addFicheOnTable = function (b, c, d) {
    void 0 === f[c] && (f[c] = 0);
    var g = s_oGameSettings.getFicheValues(b);
    f[c] += g;
    f[c] = roundDecimal(f[c], 1);
    g = s_oGameSettings.generateFichesPileByIndex(f[c]);
    g.sort(function (a, b) {
      return a - b
    });
    this._removeFichesPile(e[c]);
    e[c] = [];
    var k = s_oGameSettings.getAttachOffset(c),
      n = k.x;
    k = k.y;
    for (var m = 0; m < g.length; m++) d.push(this._attachFichesPile(g[m], c, n, k)), k -= 5;
    a.push({
      index: c,
      value: b
    })
  };
  this._attachFichesPile = function (a, b, d, f) {
    a = new CFiche(d, f, a, h);
    e[b].push(a);
    c.push(a);
    return a
  };
  this.createPileForVoisinZero = function (a, b) {
    this.addFicheOnTable(a, "bet_0_2_3", b);
    this.addFicheOnTable(a, "bet_0_2_3", b);
    this.addFicheOnTable(a, "bet_4_7", b);
    this.addFicheOnTable(a, "bet_12_15", b);
    this.addFicheOnTable(a, "bet_18_21", b);
    this.addFicheOnTable(a,
      "bet_19_22", b);
    this.addFicheOnTable(a, "bet_25_26_28_29", b);
    this.addFicheOnTable(a, "bet_25_26_28_29", b);
    this.addFicheOnTable(a, "bet_32_35", b);
    d.push({
      tag: "oBetVoisinsZero",
      num: 9
    })
  };
  this.createPileForTier = function (a, b) {
    this.addFicheOnTable(a, "bet_5_8", b);
    this.addFicheOnTable(a, "bet_10_11", b);
    this.addFicheOnTable(a, "bet_13_16", b);
    this.addFicheOnTable(a, "bet_23_24", b);
    this.addFicheOnTable(a, "bet_27_30", b);
    this.addFicheOnTable(a, "bet_33_36", b);
    d.push({
      tag: "oBetTier",
      num: 6
    })
  };
  this.createPileForOrphelins =
    function (a, b) {
      this.addFicheOnTable(a, "bet_1", b);
      this.addFicheOnTable(a, "bet_6_9", b);
      this.addFicheOnTable(a, "bet_14_17", b);
      this.addFicheOnTable(a, "bet_17_20", b);
      this.addFicheOnTable(a, "bet_31_34", b);
      d.push({
        tag: "oBetOrphelins",
        num: 5
      })
    };
  this.createPileForMultipleNumbers = function (a, b, c) {
    for (var g = 0; g < b.length; g++) this.addFicheOnTable(a, "bet_" + b[g], c);
    d.push({
      tag: "oBetMultiple",
      num: b.length
    })
  };
  this._removeAllFichesOnTable = function () {
    if (c)
      for (var a = 0; a < c.length; a++) h.contains(c[a].getSprite()) && h.removeChild(c[a].getSprite())
  };
  this._removeFichesPile = function (a) {
    for (var b in a) h.removeChild(a[b].getSprite())
  };
  this.clearLastBet = function () {
    if (0 === d.length) return 0;
    for (var b = d.pop().num, c, n = 0; n < b; n++) {
      var h = a.pop();
      c = s_oGameSettings.getFicheValues(h.value);
      f[h.index] -= c;
      f[h.index] = roundDecimal(f[h.index], 1);
      var q = s_oGameSettings.generateFichesPileByIndex(f[h.index]);
      q.sort(function (a, b) {
        return a - b
      });
      this._removeFichesPile(e[h.index]);
      e[h.index] = [];
      var u = s_oGameSettings.getAttachOffset(h.index),
        m = u.x;
      u = u.y;
      for (var A = 0; A < q.length; A++) this._attachFichesPile(q[A],
        h.index, m, u), u -= 5
    }
    return c * b
  };
  this.clearAllBets = function () {
    for (var b = a.length, c = 0; c < b; c++) this.clearLastBet()
  };
  this._init(b)
}
TEXT_GAMEOVER = "GAME OVER";
TEXT_CONGRATS = "CONGRATULATIONS";
TEXT_MONEY = "MONEY";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MAX_BET = "MAX BET";
TEXT_INFO = "INFO";
TEXT_LINES = "LINES";
TEXT_SPIN = "SPIN";
TEXT_EXIT = "EXIT";
TEXT_RECHARGE = "RECHARGE";
TEXT_CLEAR_LAST_BET = "CLEAR LAST BET";
TEXT_CLEAR_ALL_BET = "CLEAR ALL BETS";
TEXT_VOISINS_ZERO = "VOISINS DU ZERO";
TEXT_TIER = "TIER";
TEXT_ORPHELINS = "ORPHELINS";
TEXT_NEIGHBORS = "NEIGHBORS";
TEXT_FINALSBET = "FINALS BET";
TEXT_REBET = "REBET";
TEXT_WIN = "WIN";
var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_PRELOADER_CONTINUE = "START";
  TEXT_ERROR_NO_MONEY_MSG = "NOT ENOUGH MONEY FOR THIS BET!!";
  TEXT_ERROR_MAX_BET_REACHED = "MAX BET REACHED!!";
  TEXT_ERROR_MIN_BET = "YOU BET IS LOWER THAN MINIMUM BET!!";
  TEXT_MIN_BET = "MIN BET";
  TEXT_MAX_BET = "MAX BET";
  TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR\n YOUR BET";
  TEXT_SPINNING = "SPINNING...";
  TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WON ";
  TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES";
  TEXT_IMAGE_FAIL = "CAN'T FIND FILE:";
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
  TEXT_RECHARGE_MSG = "PLEASE CLICK RECHARGE BUTTON TO PLAY AGAIN";
  TEXT_CONGRATULATIONS = "Congratulations!";
  TEXT_SHARE_1 = "You collected <strong>";
  TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
  TEXT_SHARE_3 = "My score is ";
  TEXT_SHARE_4 = " points! Can you do better?";

function CPreloader() {
  var b, f, e, a, d, c, h, k, g, n;
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
    g.unload();
    n.removeAllChildren()
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
    h = createBitmap(t);
    h.regX = .5 * t.width;
    h.regY = .5 * t.height;
    h.x = CANVAS_WIDTH / 2;
    h.y = CANVAS_HEIGHT / 2 - 80;
    n.addChild(h);
    k = new createjs.Shape;
    k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(h.x - 100, h.y - 100, 200, 200, 10);
    n.addChild(k);
    h.mask = k;
    t =
      s_oSpriteLibrary.getSprite("progress_bar");
    a = createBitmap(t);
    a.x = CANVAS_WIDTH / 2 - t.width / 2;
    a.y = CANVAS_HEIGHT / 2 + 70;
    n.addChild(a);
    b = t.width;
    f = t.height;
    d = new createjs.Shape;
    d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(a.x, a.y, 1, f);
    n.addChild(d);
    a.mask = d;
    e = new createjs.Text("", "30px " + FONT1, "#fff");
    e.x = CANVAS_WIDTH / 2;
    e.y = CANVAS_HEIGHT / 2 + 120;
    e.textBaseline = "alphabetic";
    e.textAlign = "center";
    n.addChild(e);
    t = s_oSpriteLibrary.getSprite("but_start");
    g = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100,
      t, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 36, n);
    g.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    g.setVisible(!1);
    c = new createjs.Shape;
    c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    n.addChild(c);
    createjs.Tween.get(c).to({
      alpha: 0
    }, 500).call(function () {
      createjs.Tween.removeTweens(c);
      n.removeChild(c)
    })
  };
  this._onButStartRelease = function () {
    s_oMain._allResourcesLoaded()
  };
  this.refreshLoader = function (c) {
    e.text = c + "%";
    100 === c && (s_oMain._allResourcesLoaded(), e.visible = !1,
      a.visible = !1);
    d.graphics.clear();
    c = Math.floor(c * b / 100);
    d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(a.x, a.y, c, f)
  };
  this._init()
}

function CMain(b) {
  var f, e = 0,
    a = 0,
    d = STATE_LOADING,
    c, h;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage);
    s_bMobile = jQuery.browser.mobile;
    !1 === s_bMobile && s_oStage.enableMouseOver(10);
    s_iPrevTime = (new Date).getTime();
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary;
    c = new CPreloader
  };
  this.soundLoaded = function () {
    e++;
    c.refreshLoader(Math.floor(e / a * 100))
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
      filename: "fiche_collect",
      loop: !1,
      volume: 1,
      ingamename: "fiche_collect"
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "fiche_select",
      loop: !1,
      volume: 1,
      ingamename: "fiche_select"
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "wheel_sound",
      loop: !1,
      volume: 1,
      ingamename: "wheel_sound"
    });
    a += s_aSoundsInfo.length;
    s_aSounds = [];
    for (var b = 0; b < s_aSoundsInfo.length; b++) this.tryToLoadSound(s_aSoundsInfo[b], !1)
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
            if (a ===
              s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
              s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
              break
            }
        },
        onplayerror: function (a) {
          for (var b = 0; b < s_aSoundsInfo.length; b++)
            if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
              s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock", function () {
                s_aSounds[s_aSoundsInfo[b].ingamename].play()
              });
              break
            }
        }
      })
    }, b ? 200 : 0)
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("bg_menu",
      "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("but_bg", "./sprites/but_play_bg.png");
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("block", "./sprites/block.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite("hit_area_bet0",
      "./sprites/hit_area_bet0.png");
    s_oSpriteLibrary.addSprite("hit_area_simple_bet", "./sprites/hit_area_simple_bet.png");
    s_oSpriteLibrary.addSprite("hit_area_couple_bet", "./sprites/hit_area_couple_bet.png");
    s_oSpriteLibrary.addSprite("hit_area_small_circle", "./sprites/hit_area_small_circle.png");
    s_oSpriteLibrary.addSprite("hit_area_triple_bet", "./sprites/hit_area_triple_bet.png");
    s_oSpriteLibrary.addSprite("hit_area_col_bet", "./sprites/hit_area_col_bet.png");
    s_oSpriteLibrary.addSprite("hit_area_twelve_bet",
      "./sprites/hit_area_twelve_bet.png");
    s_oSpriteLibrary.addSprite("hit_area_other_bet", "./sprites/hit_area_other_bet.png");
    s_oSpriteLibrary.addSprite("enlight_bet0", "./sprites/enlight_bet0.png");
    s_oSpriteLibrary.addSprite("enlight_black", "./sprites/enlight_black.png");
    s_oSpriteLibrary.addSprite("enlight_first18", "./sprites/enlight_first18.png");
    s_oSpriteLibrary.addSprite("enlight_first_twelve", "./sprites/enlight_first_twelve.png");
    s_oSpriteLibrary.addSprite("enlight_second_twelve", "./sprites/enlight_second_twelve.png");
    s_oSpriteLibrary.addSprite("enlight_third_twelve", "./sprites/enlight_third_twelve.png");
    s_oSpriteLibrary.addSprite("enlight_second18", "./sprites/enlight_second18.png");
    s_oSpriteLibrary.addSprite("enlight_number1", "./sprites/enlight_number1.png");
    s_oSpriteLibrary.addSprite("enlight_number3", "./sprites/enlight_number3.png");
    s_oSpriteLibrary.addSprite("enlight_number4", "./sprites/enlight_number4.png");
    s_oSpriteLibrary.addSprite("enlight_number12", "./sprites/enlight_number12.png");
    s_oSpriteLibrary.addSprite("enlight_number16",
      "./sprites/enlight_number16.png");
    s_oSpriteLibrary.addSprite("enlight_number25", "./sprites/enlight_number25.png");
    s_oSpriteLibrary.addSprite("enlight_number30", "./sprites/enlight_number30.png");
    s_oSpriteLibrary.addSprite("enlight_odd", "./sprites/enlight_odd.png");
    s_oSpriteLibrary.addSprite("enlight_red", "./sprites/enlight_red.png");
    s_oSpriteLibrary.addSprite("enlight_col", "./sprites/enlight_col.png");
    s_oSpriteLibrary.addSprite("select_fiche", "./sprites/select_fiche.png");
    s_oSpriteLibrary.addSprite("roulette_anim_bg",
      "./sprites/roulette_anim_bg.png");
    s_oSpriteLibrary.addSprite("ball_spin", "./sprites/ball_spin.png");
    s_oSpriteLibrary.addSprite("spin_but", "./sprites/spin_but.png");
    s_oSpriteLibrary.addSprite("placeholder", "./sprites/placeholder.png");
    s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
    s_oSpriteLibrary.addSprite("circle_red", "./sprites/circle_red.png");
    s_oSpriteLibrary.addSprite("circle_green", "./sprites/circle_green.png");
    s_oSpriteLibrary.addSprite("circle_black", "./sprites/circle_black.png");
    s_oSpriteLibrary.addSprite("final_bet_bg", "./sprites/final_bet_bg.png");
    s_oSpriteLibrary.addSprite("neighbor_bg", "./sprites/neighbor_bg.jpg");
    s_oSpriteLibrary.addSprite("neighbor_enlight", "./sprites/neighbor_enlight.png");
    s_oSpriteLibrary.addSprite("hitarea_neighbor", "./sprites/hitarea_neighbor.png");
    s_oSpriteLibrary.addSprite("game_over_bg", "./sprites/game_over_bg.jpg");
    s_oSpriteLibrary.addSprite("but_game_small", "./sprites/but_game_small.png");
    s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    for (var b = 0; b < NUM_FICHES; b++) s_oSpriteLibrary.addSprite("fiche_" + b, "./sprites/fiche_" + b + ".png");
    for (b = 0; b < NUM_MASK_BALL_SPIN_FRAMES; b++) s_oSpriteLibrary.addSprite("mask_ball_spin_" + b, "./sprites/mask_ball_spin/mask_ball_spin_" + b + ".png");
    for (b = 0; b < NUM_MASK_BALL_SPIN_FRAMES; b++) s_oSpriteLibrary.addSprite("wheel_anim_" + b, "./sprites/wheel_anim/wheel_anim_" + b + ".jpg");
    for (b =
      0; b < NUM_WHEEL_TOP_FRAMES; b++) s_oSpriteLibrary.addSprite("wheel_top_" + b, "./sprites/wheel_top/wheel_top_" + b + ".jpg");
    for (b = 0; b < NUM_BALL_SPIN_FRAMES; b++) s_oSpriteLibrary.addSprite("ball_spin1_" + b, "./sprites/ball_spin1/ball_spin1_" + b + ".png"), s_oSpriteLibrary.addSprite("ball_spin2_" + b, "./sprites/ball_spin2/ball_spin2_" + b + ".png"), s_oSpriteLibrary.addSprite("ball_spin3_" + b, "./sprites/ball_spin3/ball_spin3_" + b + ".png");
    a += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites()
  };
  this._onImagesLoaded =
    function () {
      e++;
      c.refreshLoader(Math.floor(e / a * 100))
    };
  this._onAllImagesLoaded = function () { };
  this.onImageLoadError = function (a) { };
  this.preloaderReady = function () {
    this._loadImages();
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
    f = !0
  };
  this._allResourcesLoaded = function () {
    c.unload();
    s_oMain.gotoMenu()
  };
  this.gotoMenu = function () {
    new CMenu;
    d = STATE_MENU
  };
  this.gotoGame = function () {
    h = new CGame(k);
    d = STATE_GAME
  };
  this.gotoHelp = function () {
    new CHelp;
    d = STATE_HELP
  };
  this.stopUpdate = function () {
    f = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
  };
  this.startUpdate = function () {
    s_iPrevTime = (new Date).getTime();
    f = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
  };
  this._update = function (a) {
    if (!1 !== f) {
      var b = (new Date).getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -=
        1E3, s_iCntFps = 0);
      d === STATE_GAME && h.update();
      s_oStage.update(a)
    }
  };
  s_oMain = this;
  var k = b;
  ENABLE_CHECK_ORIENTATION = b.check_orientation;
  ENABLE_FULLSCREEN = b.fullscreen;
  SHOW_CREDITS = b.show_credits;
  s_bAudioActive = b.audio_enable_on_startup;
  this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
  s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_oDrawLayer, s_oStage, s_oMain = null,
  s_oSpriteLibrary, s_bFullscreen = !1,
  s_aSoundsInfo;

function CTextButton(b, f, e, a, d, c, h, k) {
  var g, n, t, q, u, m, A, l, v, r;
  this._init = function (a, b, c, d, f, e, h) {
    g = !1;
    n = 1;
    t = [];
    q = [];
    l = new createjs.Container;
    l.x = a;
    l.y = b;
    l.regX = c.width / 2;
    l.regY = c.height / 2;
    s_bMobile || (l.cursor = "pointer");
    k.addChild(l);
    r = createBitmap(c);
    l.addChild(r);
    v = new CTLText(l, 0, 0, c.width, c.height, h, "center", e, f, 1, 2, 2, d, !0, !0, !1, !1);
    this._initListener()
  };
  this.unload = function () {
    l.off("mousedown", u);
    l.off("pressup", m);
    k.removeChild(l)
  };
  this.setVisible = function (a) {
    l.visible = a
  };
  this.setScale = function (a) {
    n =
      l.scaleX = l.scaleY = a
  };
  this.enable = function () {
    g = !1
  };
  this.disable = function () {
    g = !0
  };
  this._initListener = function () {
    u = l.on("mousedown", this.buttonDown);
    m = l.on("pressup", this.buttonRelease)
  };
  this.addEventListener = function (a, b, c) {
    t[a] = b;
    q[a] = c
  };
  this.addEventListenerWithParams = function (a, b, c, r) {
    t[a] = b;
    q[a] = c;
    A = r
  };
  this.buttonRelease = function () {
    g || (playSound("click", 1, !1), l.scaleX = n, l.scaleY = n, t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(q[ON_MOUSE_UP], A))
  };
  this.buttonDown = function () {
    g || (l.scaleX = .9 * n, l.scaleY = .9 * n,
      t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]))
  };
  this.setPosition = function (a, b) {
    l.x = a;
    l.y = b
  };
  this.tweenPosition = function (a, b, c, r, d, v, g) {
    createjs.Tween.get(l).wait(r).to({
      x: a,
      y: b
    }, c, d).call(function () {
      void 0 !== v && v.call(g)
    })
  };
  this.changeText = function (a) {
    v.refreshText(a)
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
  this.getSprite = function () {
    return l
  };
  this.getScale = function () {
    return l.scaleX
  };
  this._init(b, f, e, a, d, c, h)
}

function CGfxButton(b, f, e, a) {
  var d, c, h, k, g;
  this._init = function (a, b, d, f) {
    c = [];
    h = [];
    g = createBitmap(d);
    g.x = a;
    g.y = b;
    g.regX = d.width / 2;
    g.regY = d.height / 2;
    s_bMobile || (g.cursor = "pointer");
    !1 !== f && s_oStage.addChild(g);
    this._initListener()
  };
  this.unload = function () {
    g.off("mousedown", d[0]);
    g.off("pressup", d[1]);
    !1 === s_bMobile && (g.off("rollover", d[2]), g.off("rollout", d[3]));
    s_oStage.removeChild(g)
  };
  this.setVisible = function (a) {
    g.visible = a
  };
  this._initListener = function () {
    d = [];
    d[0] = g.on("mousedown", this.buttonDown);
    d[1] = g.on("pressup", this.buttonRelease);
    !1 === s_bMobile && (d[2] = g.on("rollover", this.mouseOver), d[3] = g.on("rollout", this.mouseOut))
  };
  this.addEventListener = function (a, b, d) {
    c[a] = b;
    h[a] = d
  };
  this.addEventListenerWithParams = function (a, b, d, g) {
    c[a] = b;
    h[a] = d;
    k = g
  };
  this.buttonRelease = function () {
    playSound("click", 1, !1);
    g.scaleX = 1;
    g.scaleY = 1;
    c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k)
  };
  this.buttonDown = function () {
    g.scaleX = .9;
    g.scaleY = .9;
    c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], k)
  };
  this.mouseOver =
    function () {
      c[ON_MOUSE_OVER] && c[ON_MOUSE_OVER].call(h[ON_MOUSE_OVER], k)
    };
  this.mouseOut = function () {
    c[ON_MOUSE_OUT] && c[ON_MOUSE_OUT].call(h[ON_MOUSE_OUT], k)
  };
  this.setPosition = function (a, b) {
    g.x = a;
    g.y = b
  };
  this.rotate = function (a) {
    g.rotation = a
  };
  this.setX = function (a) {
    g.x = a
  };
  this.setY = function (a) {
    g.y = a
  };
  this.getButtonImage = function () {
    return g
  };
  this.getX = function () {
    return g.x
  };
  this.getY = function () {
    return g.y
  };
  this._init(b, f, e, a);
  return this
}

function CFicheBut(b, f, e, a) {
  var d, c, h, k, g, n, t = [],
    q, u, m;
  this._init = function (a, l, v) {
    c = !1;
    u = new createjs.Container;
    u.x = a;
    u.y = l;
    u.regX = v.width / 2;
    u.regY = v.height / 2;
    s_oStage.addChild(u);
    d = !1;
    g = [];
    n = [];
    q = createBitmap(v);
    q.regX = v.width / 2;
    q.regY = v.height / 2;
    q.cursor = "pointer";
    u.addChild(q);
    a = s_oGameSettings.getFicheValues(b);
    new CTLText(u, -8, -8, 14, 14, 50, "center", COLOR_FICHES[b], FONT1, 1, 0, 0, a, !0, !0, !1, !1);
    h = v.width;
    k = v.height;
    v = s_oSpriteLibrary.getSprite("select_fiche");
    m = createBitmap(v);
    m.regX = v.width / 2;
    m.regY =
      v.height / 2;
    u.addChild(m);
    m.visible = d;
    this._initListener()
  };
  this.unload = function () {
    u.off("mousedown", this.buttonDown);
    u.off("pressup", this.buttonRelease);
    s_oStage.removeChild(u)
  };
  this.select = function () {
    d = !0;
    m.visible = d
  };
  this.deselect = function () {
    d = !1;
    m.visible = d
  };
  this.enable = function () {
    c = !1;
    q.filters = [];
    q.cache(0, 0, h, k)
  };
  this.disable = function () {
    c = !0;
    var a = (new createjs.ColorMatrix).adjustSaturation(-90);
    q.filters = [new createjs.ColorMatrixFilter(a)];
    q.cache(0, 0, h, k)
  };
  this.setVisible = function (a) {
    u.visible =
      a
  };
  this._initListener = function () {
    u.on("mousedown", this.buttonDown);
    u.on("pressup", this.buttonRelease)
  };
  this.addEventListener = function (a, b, c) {
    g[a] = b;
    n[a] = c
  };
  this.addEventListenerWithParams = function (a, b, c, r) {
    g[a] = b;
    n[a] = c;
    t = r
  };
  this.buttonRelease = function () {
    c || (playSound("click", 1, !1), u.scaleX = 1, u.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(n[ON_MOUSE_UP], t), d = !d, m.visible = d)
  };
  this.buttonDown = function () {
    c || (u.scaleX = .9, u.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], t))
  };
  this.setPosition =
    function (a, b) {
      u.x = a;
      u.y = b
    };
  this.setX = function (a) {
    u.x = a
  };
  this.setY = function (a) {
    u.y = a
  };
  this.getButtonImage = function () {
    return q
  };
  this.getX = function () {
    return u.x
  };
  this.getY = function () {
    return u.y
  };
  this._init(f, e, a)
}

function CBetTableButton(b, f, e, a, d, c) {
  var h, k, g, n, t, q, u, m, A;
  this._init = function (a, b, c, d, f, e) {
    h = e;
    u = d;
    k = [];
    g = [];
    A = f;
    n = createBitmap(c);
    n.x = a;
    n.y = b;
    n.regX = c.width / 2;
    n.regY = c.height / 2;
    s_bMobile || (n.cursor = "pointer");
    this._initListener();
    A.addChild(n);
    m = [];
    m = u.split("_");
    1 < m.length ? m.splice(0, 1) : this._assignNumber();
    this._assignBetMultiplier()
  };
  this.unload = function () {
    n.off("mousedown", this.buttonDown);
    n.off("pressup", this.buttonRelease);
    n.off("rollover", this.mouseOver);
    n.off("rollout", this.mouseOut);
    A.removeChild(n)
  };
  this.setVisible = function (a) {
    n.visible = a
  };
  this._assignNumber = function () {
    m = s_oGameSettings.getNumbersForButton(u)
  };
  this._assignBetMultiplier = function () {
    switch (m.length) {
      case 0:
        t = s_oGameSettings.getBetMultiplierForButton(u);
        q = s_oGameSettings.getBetWinForButton(u);
        break;
      default:
        t = m.length, q = Math.floor(36 / m.length)
    }
  };
  this._initListener = function () {
    n.on("mousedown", this.buttonDown);
    n.on("pressup", this.buttonRelease);
    n.on("rollover", this.mouseOver);
    n.on("rollout", this.mouseOut)
  };
  this.addEventListener = function (a,
    b, c) {
    k[a] = b;
    g[a] = c
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    k[a] = b;
    g[a] = c
  };
  this.buttonRelease = function () {
    playSound("click", 1, !1);
    k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(g[ON_MOUSE_UP], {
      numbers: m,
      bet_mult: t,
      bet_win: q,
      name: u,
      num_fiches: 1
    }, !1)
  };
  this.buttonDown = function () {
    k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], {
      button: u,
      numbers: m,
      bet_mult: t,
      bet_win: q,
      num_fiches: 1
    }, !1)
  };
  this.mouseOver = function () {
    k[ON_MOUSE_OVER] && (h ? k[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], {
      numbers: m,
      enlight: u
    }) :
      k[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], {
        numbers: m
      }))
  };
  this.mouseOut = function () {
    k[ON_MOUSE_OUT] && (h ? k[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], {
      numbers: m,
      enlight: u
    }) : k[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], {
      numbers: m
    }))
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
  this.rotate = function (a) {
    n.rotation = a
  };
  this.getButtonImage = function () {
    return n
  };
  this.getX = function () {
    return n.x
  };
  this.getY = function () {
    return n.y
  };
  this._init(b, f, e, a, d, c)
}

function CBetTextButton(b, f, e, a, d, c, h, k) {
  var g, n, t, q, u, m, A, l, v, r, y, z, D;
  this._init = function (a, b, c, d, f, e, k, h) {
    g = !1;
    v = [];
    r = [];
    n = c.width;
    t = c.height;
    y = new createjs.Container;
    y.x = a;
    y.y = b;
    y.regX = c.width / 2;
    y.regY = c.height / 2;
    s_bMobile || (y.cursor = "pointer");
    s_oStage.addChild(y);
    D = createBitmap(c);
    y.addChild(D);
    z = new CTLText(y, 0, 0, c.width, c.height, k, "center", e, f, 1, 2, 2, d, !0, !0, !1, !1);
    this._initListener();
    A = h;
    l = [];
    l = h.split("_");
    1 < l.length ? l.splice(0, 1) : this._assignNumber(h);
    q = s_oGameSettings.getBetMultiplierForButton(h);
    u = s_oGameSettings.getBetWinForButton(h);
    m = s_oGameSettings.getNumFichesPerBet(h)
  };
  this._assignNumber = function (a) {
    l = s_oGameSettings.getNumbersForButton(a)
  };
  this.unload = function () {
    y.off("mousedown");
    y.off("pressup");
    s_oStage.removeChild(y)
  };
  this.setVisible = function (a) {
    y.visible = a
  };
  this.enable = function () {
    g = !1;
    D.filters = [];
    D.cache(0, 0, n, t)
  };
  this.disable = function () {
    g = !0;
    var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
    D.filters = [new createjs.ColorMatrixFilter(a)];
    D.cache(0, 0,
      n, t)
  };
  this._initListener = function () {
    oParent = this;
    y.on("mousedown", this.buttonDown);
    y.on("pressup", this.buttonRelease)
  };
  this.addEventListener = function (a, b, c) {
    v[a] = b;
    r[a] = c
  };
  this.buttonRelease = function () {
    g || (playSound("click", 1, !1), y.scaleX = 1, y.scaleY = 1, v[ON_MOUSE_UP] && v[ON_MOUSE_UP].call(r[ON_MOUSE_UP], {
      name: A,
      numbers: l,
      bet_mult: q,
      bet_win: u,
      num_fiches: m
    }, !1))
  };
  this.buttonDown = function () {
    g || (y.scaleX = .9, y.scaleY = .9, v[ON_MOUSE_DOWN] && v[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]))
  };
  this.setPosition = function (a,
    b) {
    y.x = a;
    y.y = b
  };
  this.changeText = function (a) {
    z.refreshText(a)
  };
  this.setX = function (a) {
    y.x = a
  };
  this.setY = function (a) {
    y.y = a
  };
  this.getButtonImage = function () {
    return y
  };
  this.getX = function () {
    return y.x
  };
  this.getY = function () {
    return y.y
  };
  this._init(b, f, e, a, d, c, h, k);
  return this
}

function CToggle(b, f, e, a, d) {
  var c, h, k, g, n, t, q;
  this._init = function (a, b, d, v) {
    h = [];
    k = [];
    var r = new createjs.SpriteSheet({
      images: [d],
      frames: {
        width: d.width / 2,
        height: d.height,
        regX: d.width / 2 / 2,
        regY: d.height / 2
      },
      animations: {
        state_true: [0],
        state_false: [1]
      }
    });
    c = v;
    g = createSprite(r, "state_" + c, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
    g.x = a;
    g.y = b;
    g.stop();
    u.addChild(g);
    this._initListener()
  };
  this.unload = function () {
    g.off("mousedown", n);
    g.off("pressup", q);
    s_bMobile || g.off("mouseover", t);
    u.removeChild(g)
  };
  this._initListener =
    function () {
      n = g.on("mousedown", this.buttonDown);
      q = g.on("pressup", this.buttonRelease);
      s_bMobile || (t = g.on("mouseover", this.buttonOver))
    };
  this.addEventListener = function (a, b, c) {
    h[a] = b;
    k[a] = c
  };
  this.setActive = function (a) {
    c = a;
    g.gotoAndStop("state_" + c)
  };
  this.buttonRelease = function () {
    g.scaleX = 1;
    g.scaleY = 1;
    playSound("click", 1, !1);
    c = !c;
    g.gotoAndStop("state_" + c);
    h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], c)
  };
  this.buttonDown = function () {
    g.scaleX = .9;
    g.scaleY = .9;
    h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
  };
  this.buttonOver = function (a) {
    s_bMobile || (a.target.cursor = "pointer")
  };
  this.setPosition = function (a, b) {
    g.x = a;
    g.y = b
  };
  this.getX = function () {
    return g.x
  };
  this.getY = function () {
    return g.y
  };
  var u = d;
  this._init(b, f, e, a)
}

function CMenu() {
  var b, f, e, a, d, c, h, k, g = null,
    n = null;
  this._init = function () {
    e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(e);
    var t = s_oSpriteLibrary.getSprite("but_bg");
    a = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 70, t, TEXT_PLAY, FONT1, "#ffffff", 40, s_oStage);
    a.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), d = new CToggle(CANVAS_WIDTH - t.width / 2, t.height / 2 + 14, t, s_bAudioActive, s_oStage),
      d.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    t = s_oSpriteLibrary.getSprite("but_credits");
    SHOW_CREDITS ? (b = 10 + t.width / 2, f = t.height / 2 + 10, c = new CGfxButton(b, f, t, s_oStage), c.addEventListener(ON_MOUSE_UP, this._onCredits, this), _pStartPosFullscreen = {
      x: b + t.width + 10,
      y: f
    }) : _pStartPosFullscreen = {
      x: 10 + t.width / 2,
      y: t.height / 2 + 10
    };
    t = window.document;
    var q = t.documentElement;
    g = q.requestFullscreen || q.mozRequestFullScreen || q.webkitRequestFullScreen || q.msRequestFullscreen;
    n = t.exitFullscreen || t.mozCancelFullScreen ||
      t.webkitExitFullscreen || t.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (g = !1);
    g && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), k = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, t, s_bFullscreen, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    h = new createjs.Shape;
    h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(h);
    createjs.Tween.get(h).to({
      alpha: 0
    }, 400).call(function () {
      h.visible = !1
    })
  };
  this.unload = function () {
    a.unload();
    a = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) d.unload(), d = null;
    g && screenfull.enabled && k.unload();
    SHOW_CREDITS && c.unload();
    s_oStage.removeChild(e);
    e = null;
    s_oStage.removeChild(h);
    s_oMenu = h = null
  };
  this._onButPlayRelease = function () {
    this.unload();
    s_oMain.gotoGame();
    $(s_oMain).trigger("start_session")
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive
  };
  this._onCredits = function () {
    _oCreditsPanel = new CCreditsPanel
  };
  this.resetFullscreenBut = function () {
    g && screenfull.enabled &&
      k.setActive(s_bFullscreen)
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen ? n.call(window.document) : g.call(window.document.documentElement);
    sizeHandler()
  };
  s_oMenu = this;
  this._init()
}
var s_oMenu = null;

function CGame(b) {
  var f = !1,
    e, a, d, c, h, k, g, n, t, q, u, m, A, l, v, r, y, z, D, P, I, H, J, N, F, K, E;
  this._init = function () {
    s_oTweenController = new CTweenController;
    s_oGameSettings = new CRouletteSettings;
    v = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(v);
    this._initEnlights();
    P = new createjs.Container;
    P.x = 261;
    P.y = 264;
    s_oStage.addChild(P);
    D = new CTableController;
    D.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
    D.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
    D.addEventListener(ON_SHOW_BET_ON_TABLE,
      this._onShowBetOnTable);
    g = 0;
    a = -1;
    d = 37;
    n = [];
    t = [];
    q = [];
    l = [];
    r = new CSeat;
    H = new CWheelTopAnim(493, 6);
    J = new CWheelAnim(0, 0);
    z = new CInterface;
    N = new CFinalBetPanel(160, 569);
    F = new CNeighborsPanel(r.getCredit());
    K = new CGameOver;
    I = new CMsgBox;
    var b = (new createjs.Graphics).beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    E = new createjs.Shape(b);
    E.on("click", function () { });
    E.visible = !1;
    s_oStage.addChild(E);
    u = [];
    c = 0;
    this._onSitDown();
    f = !0
  };
  this.unload = function () {
    stopSound("wheel_sound");
    z.unload();
    D.unload();
    I.unload();
    N.unload();
    F.unload();
    K.unload();
    s_oStage.removeAllChildren()
  };
  this._initEnlights = function () {
    m = [];
    var a = new CEnlight(288, 175, s_oSpriteLibrary.getSprite("enlight_bet0"), s_oStage);
    m.oEnlight_0 = a;
    a = new CEnlight(318, 244, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_1 = a;
    a = new CEnlight(342, 220, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_2 = a;
    a = new CEnlight(368, 198, s_oSpriteLibrary.getSprite("enlight_number3"), s_oStage);
    m.oEnlight_3 = a;
    a = new CEnlight(341,
      262, s_oSpriteLibrary.getSprite("enlight_number4"), s_oStage);
    m.oEnlight_4 = a;
    a = new CEnlight(367, 238, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_5 = a;
    a = new CEnlight(392, 214, s_oSpriteLibrary.getSprite("enlight_number3"), s_oStage);
    m.oEnlight_6 = a;
    a = new CEnlight(366, 279, s_oSpriteLibrary.getSprite("enlight_number4"), s_oStage);
    m.oEnlight_7 = a;
    a = new CEnlight(391, 255, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_8 = a;
    a = new CEnlight(416, 231, s_oSpriteLibrary.getSprite("enlight_number3"),
      s_oStage);
    m.oEnlight_9 = a;
    a = new CEnlight(390, 297, s_oSpriteLibrary.getSprite("enlight_number4"), s_oStage);
    m.oEnlight_10 = a;
    a = new CEnlight(415, 273, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_11 = a;
    a = new CEnlight(439, 249, s_oSpriteLibrary.getSprite("enlight_number12"), s_oStage);
    m.oEnlight_12 = a;
    a = new CEnlight(414, 315, s_oSpriteLibrary.getSprite("enlight_number4"), s_oStage);
    m.oEnlight_13 = a;
    a = new CEnlight(439, 291, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_14 = a;
    a = new CEnlight(464, 266, s_oSpriteLibrary.getSprite("enlight_number12"), s_oStage);
    m.oEnlight_15 = a;
    a = new CEnlight(439, 333, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_16 = a;
    a = new CEnlight(464, 308, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_17 = a;
    a = new CEnlight(488, 283, s_oSpriteLibrary.getSprite("enlight_number1"), s_oStage);
    m.oEnlight_18 = a;
    a = new CEnlight(466, 351, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_19 = a;
    a = new CEnlight(489, 326,
      s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_20 = a;
    a = new CEnlight(513, 301, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_21 = a;
    a = new CEnlight(491, 371, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_22 = a;
    a = new CEnlight(515, 344, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_23 = a;
    a = new CEnlight(539, 319, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_24 = a;
    a = new CEnlight(516, 389, s_oSpriteLibrary.getSprite("enlight_number25"),
      s_oStage);
    m.oEnlight_25 = a;
    a = new CEnlight(540, 363, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_26 = a;
    a = new CEnlight(564, 338, s_oSpriteLibrary.getSprite("enlight_number16"), s_oStage);
    m.oEnlight_27 = a;
    a = new CEnlight(542, 408, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_28 = a;
    a = new CEnlight(566, 381, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_29 = a;
    a = new CEnlight(590, 356, s_oSpriteLibrary.getSprite("enlight_number30"), s_oStage);
    m.oEnlight_30 =
      a;
    a = new CEnlight(568, 428, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_31 = a;
    a = new CEnlight(593, 401, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_32 = a;
    a = new CEnlight(617, 376, s_oSpriteLibrary.getSprite("enlight_number30"), s_oStage);
    m.oEnlight_33 = a;
    a = new CEnlight(596, 448, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_34 = a;
    a = new CEnlight(619, 421, s_oSpriteLibrary.getSprite("enlight_number25"), s_oStage);
    m.oEnlight_35 = a;
    a = new CEnlight(644,
      395, s_oSpriteLibrary.getSprite("enlight_number30"), s_oStage);
    m.oEnlight_36 = a;
    a = new CEnlight(624, 470, s_oSpriteLibrary.getSprite("enlight_col"), s_oStage);
    m.oEnlight_col1 = a;
    a = new CEnlight(649, 442, s_oSpriteLibrary.getSprite("enlight_col"), s_oStage);
    m.oEnlight_col2 = a;
    a = new CEnlight(672, 415, s_oSpriteLibrary.getSprite("enlight_col"), s_oStage);
    m.oEnlight_col3 = a;
    a = new CEnlight(280, 268, s_oSpriteLibrary.getSprite("enlight_first_twelve"), s_oStage);
    m.oEnlight_first12 = a;
    a = new CEnlight(377, 340, s_oSpriteLibrary.getSprite("enlight_second_twelve"),
      s_oStage);
    m.oEnlight_second12 = a;
    a = new CEnlight(477, 416, s_oSpriteLibrary.getSprite("enlight_third_twelve"), s_oStage);
    m.oEnlight_third12 = a;
    a = new CEnlight(241, 305, s_oSpriteLibrary.getSprite("enlight_first18"), s_oStage);
    m.oEnlight_first18 = a;
    a = new CEnlight(288, 343, s_oSpriteLibrary.getSprite("enlight_first18"), s_oStage);
    m.oEnlight_even = a;
    a = new CEnlight(338, 380, s_oSpriteLibrary.getSprite("enlight_black"), s_oStage);
    m.oEnlight_black = a;
    a = new CEnlight(389, 419, s_oSpriteLibrary.getSprite("enlight_red"), s_oStage);
    m.oEnlight_red = a;
    a = new CEnlight(439, 456, s_oSpriteLibrary.getSprite("enlight_odd"), s_oStage);
    m.oEnlight_odd = a;
    a = new CEnlight(492, 498, s_oSpriteLibrary.getSprite("enlight_second18"), s_oStage);
    m.oEnlight_second18 = a
  };
  this._setState = function (b) {
    a = b;
    switch (b) {
      case STATE_GAME_WAITING_FOR_BET:
        z.enableBetFiches(), E.visible = !1
    }
  };
  this._resetTable = function () {
    c = 0;
    d = 37;
    n = [];
    t = [];
    q = [];
    null !== y && (s_oStage.removeChild(y), y = null);
    r.reset();
    F.reset();
    .1 > r.getCredit() ? (a = -1, E.visible = !1, K.show()) : (z.enableRebet(), this._setState(STATE_GAME_WAITING_FOR_BET));
    g++;
    g === NUM_HAND_FOR_ADS && (g = 0, $(s_oMain).trigger("show_interlevel_ad"))
  };
  this._startRouletteAnim = function () {
    z.disableBetFiches();
    k = this._generateWinLoss();
    u.push(k);
    c = 0;
    h = s_oGameSettings.getFrameForNumber(k)
  };
  this._startWheelTopAnim = function () {
    H.playToFrame(h)
  };
  this._startBallSpinAnim = function () {
    var a = Math.floor(3 * Math.random());
    J.startSpin(a, s_oGameSettings.getFrameForBallSpin(a, k))
  };
  this._generateWinLoss = function () {
    var a = r.getNumbersBetted(),
      b = r.getNumberSelected(),
      c = a[b[0][0]].win;
    if (O < c) {
      b = 0;
      var v = Math.floor(100 * Math.random())
    } else {
      -1 === WIN_OCCURRENCE ? (b = 37 - d, v = Math.floor(38 * Math.random())) : (b = WIN_OCCURRENCE, v = Math.floor(100 * Math.random()))
    };

    const response = $.ajax({
      url: `${home_url}/api/games/check3DRoulleteGameBank`,
      type: 'POST',
      async: false,
      data: {
        customerId: customerid,
        gameId: gameid,
        bets_arr: JSON.stringify(a),
        cur_bet: r.getCurBet()
      }
    })
    if (typeof response.responseJSON.win_arr == 'string') {
      a = JSON.parse(response.responseJSON.win_arr);
    } else {
      a = response.responseJSON.win_arr;
    }
    b = response.responseJSON.win_occurrence;

    if (e = v >= b ? !1 : !0) {
      //player win
      do v = Math.floor(Math.random() * a.length), c = a[v].win; while (0 === c)
    } else {
      //player lose
      b = [];
      for (v = 0; 37 > v; v++) b.push(v);
      do {
        if (0 === b.length) {
          v = Math.floor(Math.random() * a.length);
          break
        }
        v = Math.floor(Math.random() * b.length);
        c = a[v].win;
        b.splice(v, 1)
      } while (c > r.getCurBet())
    }
    return k = v
  };
  this._rouletteAnimEnded = function () {
    c = 0;
    H.showBall();
    this._setState(STATE_GAME_SHOW_WINNER);
    stopSound("wheel_sound");
    var a = r.getNumbersBetted(),
      b = a[k],
      d = roundDecimal(b.win, 2);
    A = [];
    for (var v = 0; v < a.length; v++) {
      var g = a[v];
      if (0 < g.win)
        for (var f = 0; f < g.mc.length; f++) {
          A.push(g.mc[f]);
          var e = s_oGameSettings.getAttachOffset("oDealerWin");
          g.mc[f].setEndPoint(e.x, e.y)
        }
    }
    if (b.mc) {
      for (a = 0; a < b.mc.length; a++) e = s_oGameSettings.getAttachOffset("oReceiveWin"), b.mc[a].setEndPoint(e.x, e.y);
      z.showWin(d)
    } else z.showLose();
    z.refreshNumExtracted(u);
    y = createBitmap(s_oSpriteLibrary.getSprite("placeholder"));
    0 === k ? (y.x =
      m["oEnlight_" + k].getX() + 27, y.y = m["oEnlight_" + k].getY() + 22) : (y.x = m["oEnlight_" + k].getX(), y.y = m["oEnlight_" + k].getY());
    y.regX = 6;
    y.regY = 20;
    s_oStage.addChild(y);
    r.showWin(d);
    O = 0 < d ? O - d : O + r.getCurBet();

    console.log('win_amount :>> ', d);
    console.log('bet_amount :>> ', r.getCurBet());
    
    $.ajax({
      url: `${home_url}/api/games/updateGameBankWithWinAmount`,
      type: 'POST',
      data: {
        customerId: customerid,
        gameId: gameid,
        win_amount: d,
        bet_amount: r.getCurBet(),
      },
      success: (data) => {
        if(data.gameStatus == false) {
          alert("Sorry, Something went wrong, please try again");
          window.location.reload()
        }
      }
    })

    $(s_oMain).trigger("save_score", [r.getCredit(), d]);
    z.refreshMoney(r.getCredit())
  };
  this.showMsgBox = function (a) {
    I.show(a)
  };
  this.onRecharge = function () {
    r.recharge(TOTAL_MONEY);
    z.refreshMoney(r.getCredit());
    this._setState(STATE_GAME_WAITING_FOR_BET);
    K.hide();
    $(s_oMain).trigger("recharge")
  };
  this.onSpin = function () {
    if (F.isVisible()) F.onExit();
    0 !== r.getCurBet() && (r.getCurBet() < MIN_BET ? (I.show(TEXT_ERROR_MIN_BET), z.enableBetFiches(), z.enableSpin(!0)) : E.visible || (E.visible = !0, H.hideBall(), F.hide(), N.hide(), z.enableSpin(!1), z.displayAction(TEXT_SPINNING, ""), $(s_oMain).trigger("bet_placed", r.getCurBet()), this._startRouletteAnim(), this._startWheelTopAnim(), this._startBallSpinAnim(), this._setState(STATE_GAME_SPINNING), playSound("wheel_sound", 1, !1)))
  };
  this.setMoney = function (a) {
    r.setMoney(a);
    z.refreshMoney(r.getCredit())
  };
  this._onSitDown = function () {
    this._setState(STATE_GAME_WAITING_FOR_BET);
    r.setInfo(TOTAL_MONEY, P);
    z.refreshMoney(TOTAL_MONEY)
  };
  this._onShowBetOnTable = function (a, b) {
    var c = a.button,
      v = a.numbers;
    d -= a.bet_mult;
    n.push(a.bet_mult);
    var g = a.bet_win,
      f = a.num_fiches;
    if (b) var e = a.value;
    else e = z.getCurFicheSelected(), 0 === t.length && (l = [], z.disableRebet()), l.push({
      button: a.button,
      numbers: a.numbers,
      bet_mult: a.bet_mult,
      bet_win: a.bet_win,
      num_fiches: a.num_fiches,
      neighbors: !1,
      value: e
    });
    var h = s_oGameSettings.getFicheValues(e);
    t.push(g);
    q.push(f);
    var k = r.getCurBet();
    if (0 > r.getCredit() - h * f) I.show(TEXT_ERROR_NO_MONEY_MSG),
      F.reset();
    else if (k + h * f > MAX_BET) I.show(TEXT_ERROR_MAX_BET_REACHED), F.reset();
    else {
      switch (c) {
        case "oBetVoisinsZero":
          r.addFicheOnTable(h, e, [0, 2, 3], 12, "bet_0_2_3");
          r.addFicheOnTable(h, e, [0, 2, 3], 12, "bet_0_2_3");
          r.addFicheOnTable(h, e, [4, 7], 18, "bet_4_7");
          r.addFicheOnTable(h, e, [12, 15], 18, "bet_12_15");
          r.addFicheOnTable(h, e, [19, 22], 18, "bet_19_22");
          r.addFicheOnTable(h, e, [25, 26, 28, 29], 9, "bet_25_26_28_29");
          r.addFicheOnTable(h, e, [25, 26, 28, 29], 9, "bet_25_26_28_29");
          r.addFicheOnTable(h, e, [32, 35], 18, "bet_32_35");
          break;
        case "oBetTier":
          r.createPileForTier(h, e, v, g, f);
          break;
        case "oBetOrphelins":
          r.addFicheOnTable(h, e, [1], 36, "bet_1");
          r.addFicheOnTable(h, e, [6, 9], 18, "bet_6_9");
          r.addFicheOnTable(h, e, [14, 17], 18, "bet_14_17");
          r.addFicheOnTable(h, e, [17, 20], 18, "bet_17_20");
          r.addFicheOnTable(h, e, [31, 34], 18, "bet_31_34");
          break;
        case "oBetFinalsBet":
          r.createPileForMultipleNumbers(h, e, v, g, f);
          break;
        default:
          r.addFicheOnTable(h, e, v, g, c)
      }
      z.refreshMoney(r.getCredit());
      z.enableSpin(!0);
      playSound("chip", 1, !1)
    }
  };
  this._onShowBetOnTableFromNeighbors =
    function (a, b) {
      var c = a.numbers;
      d -= a.bet_mult;
      n.push(a.bet_mult);
      var v = a.bet_win,
        e = a.num_fiches;
      b || (0 === t.length && (l = [], z.disableRebet()), l.push({
        button: a.button,
        numbers: a.numbers,
        bet_mult: a.bet_mult,
        bet_win: a.bet_win,
        num_fiches: a.num_fiches,
        value: z.getCurFicheSelected(),
        num_clicked: a.num_clicked,
        neighbors: !0
      }));
      t.push(v);
      q.push(e);
      var f = s_oGameSettings.getFicheValues(a.value);
      f * e > r.getCredit() ? (I.show(TEXT_ERROR_NO_MONEY_MSG), F.reset()) : (r.createPileForMultipleNumbers(f, a.value, c, v, e), z.refreshMoney(r.getCredit()),
        z.enableSpin(!0), playSound("chip", 1, !1))
    };
  this._onShowEnlight = function (a) {
    for (var b = a.numbers, c = 0; c < b.length; c++) m["oEnlight_" + b[c]].show();
    (a = a.enlight) && m["oEnlight_" + a].show()
  };
  this._onHideEnlight = function (a) {
    for (var b = a.numbers, c = 0; c < b.length; c++) m["oEnlight_" + b[c]].hide();
    (a = a.enlight) && m["oEnlight_" + a].hide()
  };
  this.onClearLastBet = function () {
    if (0 < n.length) {
      var a = n.pop();
      d += a
    }
    r.clearLastBet(t.pop(), q.pop());
    z.refreshMoney(r.getCredit());
    F.clearLastBet();
    0 < l.length && l.pop();
    0 === l.length && z.enableSpin(!1)
  };
  this.onClearAllBets = function () {
    r.clearAllBets();
    z.refreshMoney(r.getCredit());
    z.enableSpin(!1);
    F.reset();
    l = [];
    d = 37
  };
  this.onRebet = function () {
    for (var a = 0; a < l.length; a++) !0 === l[a].neighbors ? F.rebet(l[a].num_clicked) : this._onShowBetOnTable(l[a], !0)
  };
  this.onFinalBetShown = function () {
    N.isVisible() ? N.hide() : N.show()
  };
  this.onOpenNeighbors = function () {
    N.hide();
    F.showPanel(z.getCurFicheSelected(), r.getCredit())
  };
  this.onExit = function () {
    this.unload();
    s_oMain.gotoMenu();
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event",
      r.getCredit())
  };
  this._updateWaitingBet = function () {
    F.isVisible() || (0 === TIME_WAITING_BET ? z.displayAction(TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET, TEXT_DISPLAY_MSG_WAITING_BET) : (c += s_iTimeElaps, c > TIME_WAITING_BET ? (c = 0, this.onSpin()) : z.displayAction(TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET, TEXT_DISPLAY_MSG_WAITING_BET + " " + Math.floor((TIME_WAITING_BET - c) / 1E3))))
  };
  this._updateSpinning = function () {
    c += s_iTimeElaps;
    H.getCurrentFrame() === NUM_WHEEL_TOP_FRAMES - 1 ? H.playToFrame(1) :
      H.nextFrame();
    c > TIME_SPINNING && H.getCurrentFrame() === h && this._rouletteAnimEnded()
  };
  this._updateShowWinner = function () {
    c += s_iTimeElaps;
    c > TIME_SHOW_WINNER && (c = 0, this._setState(STATE_DISTRIBUTE_FICHES))
  };
  this._updateDistributeFiches = function () {
    c += s_iTimeElaps;
    if (c > TIME_FICHES_MOV) c = 0, playSound("fiche_collect", 1, !1), this._resetTable();
    else
      for (var a = easeInOutCubic(c, 0, 1, TIME_FICHES_MOV), b = 0; b < A.length; b++) A[b].updatePos(a)
  };
  this.update = function () {
    if (!1 !== f) {
      switch (a) {
        case STATE_GAME_WAITING_FOR_BET:
          this._updateWaitingBet();
          break;
        case STATE_GAME_SPINNING:
          this._updateSpinning();
          break;
        case STATE_GAME_SHOW_WINNER:
          this._updateShowWinner();
          break;
        case STATE_DISTRIBUTE_FICHES:
          this._updateDistributeFiches()
      }
      J.update()
    }
  };
  s_oGame = this;
  TOTAL_MONEY = b.money;
  MIN_BET = b.min_bet;
  MAX_BET = b.max_bet;
  TIME_WAITING_BET = b.time_bet;
  TIME_SHOW_WINNER = b.time_winner;
  WIN_OCCURRENCE = b.win_occurrence;
  NUM_HAND_FOR_ADS = b.num_hand_before_ads;
  var O = b.casino_cash;
  this._init()
}
var s_oGame, s_oTweenController, s_oGameSettings;

function CInterface() {
  var b, f, e, a, d, c, h, k, g, n, t, q, u, m, A, l, v, r, y, z = null,
    D = null;
  this._init = function () {
    c = new CTLText(s_oStage, CANVAS_WIDTH - 112, 556, 108, 40, 20, "center", "#fff", FONT1, 1, 2, 2, " ", !0, !0, !1, !1);
    g = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    g.x = 235;
    g.y = 4;
    s_oStage.addChild(g);
    h = new CTLText(s_oStage, g.x + 105, g.y + 8, 140, 50, 20, "center", "#ffde00", FONT2, 1, 2, 2, " ", !0, !0, !0, !1);
    k = new CTLText(s_oStage, g.x + 105, g.y + 60, 140, 40, 20, "center", "#ffde00", FONT2, 1, 2, 2, " ", !0, !0, !0, !1);
    n = new CGfxButton(575,
      221, s_oSpriteLibrary.getSprite("spin_but"));
    n.setVisible(!1);
    n.addEventListener(ON_MOUSE_UP, this._onSpin, this);
    t = new CTextButton(81, 309, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_CLEAR_LAST_BET, FONT1, "#fff", 14, s_oStage);
    t.addEventListener(ON_MOUSE_UP, this._onClearLastBet, this);
    q = new CTextButton(81, 342, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_CLEAR_ALL_BET, FONT1, "#fff", 14, s_oStage);
    q.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
    v = new CBetTextButton(81, 447, s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_VOISINS_ZERO, FONT1, "#fff", 14, "oBetVoisinsZero");
    v.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
    A = new CBetTextButton(81, 515, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_ORPHELINS, FONT1, "#fff", 14, "oBetOrphelins");
    A.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
    l = new CBetTextButton(81, 481, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_TIER, FONT1, "#fff", 14, "oBetTier");
    l.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
    u = new CTextButton(81, 582, s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_FINALSBET, FONT1, "#fff", 14, s_oStage);
    u.addEventListener(ON_MOUSE_UP, this._onFinalBetShow, this);
    m = new CTextButton(81, 549, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_NEIGHBORS, FONT1, "#fff", 14, s_oStage);
    m.addEventListener(ON_MOUSE_UP, this._onNeighborsPanel, this);
    r = new CTextButton(692, 538, s_oSpriteLibrary.getSprite("but_game_small"), TEXT_REBET, FONT1, "#fff", 14, s_oStage);
    r.disable();
    r.addEventListener(ON_MOUSE_UP, this._onRebet, this);
    this._initFichesBut();
    this.disableBetFiches();
    this._initNumExtracted();
    b = 0;
    f[b].select();
    var e = s_oSpriteLibrary.getSprite("but_exit");
    a = new CGfxButton(e.width / 2 + 5, e.height / 2 + 5, e, !0);
    a.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
      d = new CToggle(a.getX() + e.width + 5, e.height / 2 + 4, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage);
      d.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
      var I = d.getX() + e.width + 5;
      var H = d.getY()
    } else I = a.getX() + e.width + 5, H = e.height / 2 + 4;
    e = window.document;
    var J = e.documentElement;
    z =
      J.requestFullscreen || J.mozRequestFullScreen || J.webkitRequestFullScreen || J.msRequestFullscreen;
    D = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (z = !1);
    z && screenfull.enabled && (e = s_oSpriteLibrary.getSprite("but_fullscreen"), y = new CToggle(I, H, e, s_bFullscreen, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this))
  };
  this.unload = function () {
    a.unload();
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || d.unload();
    n.unload();
    t.unload();
    q.unload();
    u.unload();
    m.unload();
    A.unload();
    l.unload();
    v.unload();
    r.unload();
    z && screenfull.enabled && y.unload()
  };
  this.enableBetFiches = function () {
    for (var a = 0; a < NUM_FICHE_VALUES; a++) f[a].enable();
    t.enable();
    q.enable();
    u.enable();
    m.enable();
    A.enable();
    l.enable();
    v.enable()
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHE_VALUES; a++) f[a].disable();
    t.disable();
    q.disable();
    u.disable();
    m.disable();
    A.disable();
    l.disable();
    v.disable();
    r.disable()
  };
  this.enableRebet = function () {
    r.enable()
  };
  this.disableRebet =
    function () {
      r.disable()
    };
  this._initNumExtracted = function () {
    e = [];
    for (var a = 11, b = 0; 12 > b; b++) {
      var c = new CHistoryRow(672, a);
      e[b] = c;
      a += 22
    }
  };
  this.deselectAllFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) f[a].deselect()
  };
  this.enableSpin = function (a) {
    n.setVisible(a)
  };
  this._initFichesBut = function () {
    var a = [{
      x: 296,
      y: 410
    }, {
      x: 324,
      y: 434
    }, {
      x: 352,
      y: 456
    }, {
      x: 381,
      y: 477
    }, {
      x: 409,
      y: 500
    }, {
      x: 438,
      y: 521
    }];
    f = [];
    for (var b = 0; b < NUM_FICHES; b++) {
      var c = s_oSpriteLibrary.getSprite("fiche_" + b);
      f[b] = new CFicheBut(b, a[b].x, a[b].y, c);
      f[b].addEventListenerWithParams(ON_MOUSE_UP,
        this._onFicheSelected, this, [b])
    }
  };
  this.refreshMoney = function (a) {
    c.refreshText(TEXT_MONEY + "\n" + a + "$")
  };
  this.displayAction = function (a, b) {
    h.refreshText(a);
    k.refreshText(b)
  };
  this.showWin = function (a) {
    this.displayAction(TEXT_DISPLAY_MSG_PLAYER_WIN + "\n" + a + "$", "")
  };
  this.showLose = function () {
    this.displayAction(TEXT_DISPLAY_MSG_PLAYER_LOSE, "")
  };
  this.refreshNumExtracted = function (a) {
    var b = a.length - 1,
      c = -1;
    11 < a.length && (c = b - 12);
    for (var r = 0; b > c; b--) {
      switch (s_oGameSettings.getColorNumber(a[b])) {
        case COLOR_BLACK:
          e[r].showBlack(a[b]);
          break;
        case COLOR_RED:
          e[r].showRed(a[b]);
          break;
        case COLOR_ZERO:
          e[r].showGreen(a[b])
      }
      r++
    }
  };
  this.gameOver = function () { };
  this._onBetRelease = function (a) {
    var b = a.numbers,
      c = a.bet_mult,
      r = a.bet_win;
    null !== b && s_oGame._onShowBetOnTable({
      button: a.name,
      numbers: b,
      bet_mult: c,
      bet_win: r,
      num_fiches: a.num_fiches
    }, !1)
  };
  this._onFicheSelected = function (a) {
    playSound("fiche_select", 1, !1);
    this.deselectAllFiches();
    a = a[0];
    for (var c = 0; c < NUM_FICHE_VALUES; c++) c === a && (b = c)
  };
  this._onSpin = function () {
    this.disableBetFiches();
    this.enableSpin(!1);
    s_oGame.onSpin()
  };
  this._onClearLastBet = function () {
    s_oGame.onClearLastBet()
  };
  this._onClearAllBet = function () {
    s_oGame.onClearAllBets()
  };
  this._onFinalBetShow = function () {
    s_oGame.onFinalBetShown()
  };
  this._onNeighborsPanel = function () {
    s_oGame.onOpenNeighbors()
  };
  this._onRebet = function () {
    r.disable();
    s_oGame.onRebet()
  };
  this._onExit = function () {
    s_oGame.onExit()
  };
  this.getCurFicheSelected = function () {
    return b
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive
  };
  this.resetFullscreenBut =
    function () {
      z && screenfull.enabled && y.setActive(s_bFullscreen)
    };
  this._onFullscreenRelease = function () {
    s_bFullscreen ? D.call(window.document) : z.call(window.document.documentElement);
    sizeHandler()
  };
  s_oInterface = this;
  this._init();
  return this
}
var s_oInterface = null;

function CMsgBox() {
  var b, f, e, a;
  this._init = function () {
    a = new createjs.Container;
    a.alpha = 0;
    a.visible = !1;
    s_oStage.addChild(a);
    b = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    a.addChild(b);
    e = new CTLText(a, CANVAS_WIDTH / 2 - 160, CANVAS_HEIGHT / 2 - 78, 300, 160, 40, "center", "#000", FONT1, 1, 2, 2, " ", !0, !0, !0, !1);
    f = new CTLText(a, CANVAS_WIDTH / 2 - 160, CANVAS_HEIGHT / 2 - 80, 300, 160, 40, "center", "#fff", FONT1, 1, 2, 2, " ", !0, !0, !0, !1)
  };
  this.unload = function () {
    a.off("mousedown", this._onExit)
  };
  this._initListener = function () {
    a.on("mousedown",
      this._onExit)
  };
  this.show = function (b) {
    e.refreshText(b);
    f.refreshText(b);
    a.visible = !0;
    var c = this;
    createjs.Tween.get(a).to({
      alpha: 1
    }, 500).call(function () {
      c._initListener()
    });
    setTimeout(function () {
      c._onExit()
    }, 3E3)
  };
  this._onExit = function () {
    a.visible && (a.off("mousedown"), a.visible = !1)
  };
  this._init();
  return this
}

function CTweenController() {
  this.tweenValue = function (b, f, e) {
    return b + e * (f - b)
  };
  this.easeLinear = function (b, f, e, a) {
    return e * b / a + f
  };
  this.easeInCubic = function (b, f, e, a) {
    a = (b /= a) * b * b;
    return f + e * a
  };
  this.easeBackInQuart = function (b, f, e, a) {
    a = (b /= a) * b;
    return f + e * (2 * a * a + 2 * a * b + -3 * a)
  };
  this.easeInBack = function (b, f, e, a) {
    return e * (b /= a) * b * (2.70158 * b - 1.70158) + f
  };
  this.easeOutCubic = function (b, f, e, a) {
    return e * ((b = b / a - 1) * b * b + 1) + f
  }
}

function CSeat() {
  var b, f, e, a, d, c;
  this._init = function () {
    this.reset()
  };
  this.reset = function () {
    e = [];
    a = [];
    d = [];
    this.resetNumberWins();
    c && c.reset();
    b = 0
  };
  this.setInfo = function (a, d) {
    f = a;
    b = 0;
    c = new CFichesController(d)
  };
  this.setMoney = function (a) {
    f = a
  };
  this.resetNumberWins = function () {
    for (var a = 0; a < NUMBERS_TO_BET; a++) e[a] = {
      win: 0,
      mc: null
    };
    d = []
  };
  this.setFicheBetted = function (c, k, g, n, t) {
    for (var h = [], u = [], m = 0; m < k.length; m++) {
      var A = (parseFloat(e[k[m]].win) + g * c * t).toFixed(1);
      e[k[m]] = {
        win: A,
        mc: n
      };
      h.push(g * c * t);
      u.push(n)
    }
    d.push({
      win: h,
      mc: n
    });
    a.push(k);
    b += c * t;
    f -= c * t;
    f = roundDecimal(f, 1)
  };
  this.createPileForVoisinZero = function (a, b, d, e, f) {
    var g = [];
    c.createPileForVoisinZero(b, g);
    this.setFicheBetted(a, d, e, g, f)
  };
  this.createPileForTier = function (a, b, d, e, f) {
    var g = [];
    c.createPileForTier(b, g);
    this.setFicheBetted(a, d, e, g, f)
  };
  this.createPileForOrphelins = function (h, k, g, n, t) {
    n = [];
    c.createPileForOrphelins(k, n);
    k = [];
    var q = (parseFloat(e[g[0]].win) + 36 * h).toFixed(1);
    e[g[0]] = {
      win: q,
      mc: n
    };
    k.push(36 * h);
    q = (parseFloat(e[g[1]].win) + 18 * h).toFixed(1);
    e[g[1]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    q = (parseFloat(e[g[2]].win) + 18 * h).toFixed(1);
    e[g[2]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    q = (parseFloat(e[g[3]].win) + 18 * h).toFixed(1);
    e[g[3]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    q = (parseFloat(e[g[4]].win) + 36 * h).toFixed(1);
    e[g[4]] = {
      win: q,
      mc: n
    };
    k.push(36 * h);
    q = (parseFloat(e[g[5]].win) + 18 * h).toFixed(1);
    e[g[5]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    q = (parseFloat(e[g[6]].win) + 18 * h).toFixed(1);
    e[g[6]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    q = (parseFloat(e[g[7]].win) + 18 * h).toFixed(1);
    e[g[7]] = {
      win: q,
      mc: n
    };
    k.push(18 * h);
    a.push(g);
    b += h * t;
    f -= h * t;
    f = roundDecimal(f, 1);
    d.push({
      win: k,
      mc: n
    })
  };
  this.createPileForMultipleNumbers = function (a, b, d, e, f) {
    var g = [];
    c.createPileForMultipleNumbers(b, d, g);
    this.setFicheBetted(a, d, e, g, f)
  };
  this.addFicheOnTable = function (a, b, d, e, f) {
    var g = [];
    c.setFicheOnTable(b, f, g);
    this.setFicheBetted(a, d, e, g, 1)
  };
  this.clearLastBet = function () {
    if (0 !== a.length) {
      var h = c.clearLastBet();
      f += h;
      f = roundDecimal(f, 1);
      b -= h;
      h = a.pop();
      for (var k = d.pop().win, g = 0; g < h.length; g++) e[h[g]] = 0 < d.length ? {
        win: e[h[g]].win - k[g],
        mc: d[d.length -
          1].mc
      } : {
        win: e[h[g]].win - k[g],
        mc: null
      }
    }
  };
  this.clearAllBets = function () {
    this.resetNumberWins();
    c.clearAllBets();
    f += b;
    f = roundDecimal(f, 1);
    b = 0
  };
  this.showWin = function (a) {
    f += a;
    f = roundDecimal(f, 1)
  };
  this.recharge = function (a) {
    f = a
  };
  this.getCurBet = function () {
    return b
  };
  this.getCredit = function () {
    return f
  };
  this.getNumbersBetted = function () {
    return e
  };
  this.getNumberSelected = function () {
    return a
  };
  this._init()
}

function CTableController() {
  var b, f, e;
  this._init = function () {
    b = new createjs.Container;
    b.x = 285;
    b.y = 102;
    s_oStage.addChild(b);
    var a = new CBetTableButton(62, 221, s_oSpriteLibrary.getSprite("hit_area_twelve_bet"), "first12", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(161, 296, s_oSpriteLibrary.getSprite("hit_area_twelve_bet"), "second12",
      b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(263, 373, s_oSpriteLibrary.getSprite("hit_area_twelve_bet"), "third12", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(54,
      118, s_oSpriteLibrary.getSprite("hit_area_bet0"), "bet_0", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    for (var d = [{
      x: 56,
      y: 162
    }, {
      x: 81,
      y: 137
    }, {
      x: 104,
      y: 115
    }, {
      x: 78,
      y: 181
    }, {
      x: 104,
      y: 156
    }, {
      x: 129,
      y: 131
    }, {
      x: 103,
      y: 197
    }, {
      x: 128,
      y: 172
    }, {
      x: 152,
      y: 148
    }, {
      x: 128,
      y: 215
    }, {
      x: 153,
      y: 190
    }, {
      x: 176,
      y: 166
    }, {
      x: 153,
      y: 233
    }, {
      x: 176,
      y: 208
    }, {
      x: 201,
      y: 183
    }, {
      x: 177,
      y: 253
    }, {
      x: 201,
      y: 226
    },
    {
      x: 226,
      y: 202
    }, {
      x: 202,
      y: 271
    }, {
      x: 227,
      y: 244
    }, {
      x: 251,
      y: 220
    }, {
      x: 228,
      y: 289
    }, {
      x: 250,
      y: 265
    }, {
      x: 275,
      y: 238
    }, {
      x: 254,
      y: 310
    }, {
      x: 279,
      y: 282
    }, {
      x: 302,
      y: 257
    }, {
      x: 280,
      y: 330
    }, {
      x: 305,
      y: 301
    }, {
      x: 328,
      y: 275
    }, {
      x: 308,
      y: 348
    }, {
      x: 331,
      y: 322
    }, {
      x: 354,
      y: 294
    }, {
      x: 335,
      y: 370
    }, {
      x: 359,
      y: 341
    }, {
      x: 383,
      y: 314
    }
    ], c = s_oSpriteLibrary.getSprite("hit_area_simple_bet"), h = 1; 37 > h; h++) a = new CBetTableButton(d[h - 1].x, d[h - 1].y, c, "bet_" + h, b, !1), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver,
      this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(43, 153, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_0_1", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(68, 129, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_0_2", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(95, 105, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_0_3", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(67, 172, s_oSpriteLibrary.getSprite("hit_area_couple_bet"),
      "bet_1_4", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(93, 145, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_2_5", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(117, 121, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_3_6", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(92, 187, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_4_7", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(116, 163, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_5_8", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(141, 138, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_6_9", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(117, 205, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_7_10", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(140, 181, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_8_11", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(165, 155, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_9_12", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(140, 223, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_10_13", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(165, 198, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_11_14", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(190, 172, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_12_15", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(164, 242, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_13_16", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(189, 216, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_14_17", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(213, 192, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_15_18", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(188, 262, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_16_19", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(213, 236, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_17_20", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(238, 211, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_18_21", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(213, 282, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_19_22", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(239, 254, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_20_23", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(264, 228, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_21_24", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(240, 300, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_22_25", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(267, 272, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_23_26", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(291, 245, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_24_27", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(266, 320, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_25_28", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(290, 293, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_26_29", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(314, 267, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_27_30", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(294, 339, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_28_31", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(318, 311, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_29_32", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(341, 285, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_30_33", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(320, 360, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_31_34", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(346, 329, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_32_35", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(368, 305, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_33_36", b, !1);
    a.rotate(-45);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(70, 150, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_1_2", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(94, 126, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_2_3", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(92, 167, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_4_5", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(116, 143, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_5_6", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(116, 185, s_oSpriteLibrary.getSprite("hit_area_couple_bet"),
      "bet_7_8", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(141, 162, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_8_9", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(140, 202, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_10_11", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(165, 180, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_11_12", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(165, 220, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_13_14", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(189, 197, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_14_15", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(189, 238, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_16_17", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(214, 212, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_17_18", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(215, 258, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_19_20", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(240, 230, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_20_21", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(240, 276, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_22_23", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(266, 250, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_23_24", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(266, 296, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_25_26", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(292, 269, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_26_27", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(292, 316, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_28_29", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(318, 288, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_29_30", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(319, 336, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_31_32", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a =
      new CBetTableButton(346, 308, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_32_33", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(346, 354, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_34_35", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(371, 328, s_oSpriteLibrary.getSprite("hit_area_couple_bet"), "bet_35_36", b, !1);
    a.rotate(38);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(57, 142, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_0_1_2", b, !1);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(82, 118, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_0_2_3", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(44, 173, s_oSpriteLibrary.getSprite("hit_area_triple_bet"),
      "bet_1_2_3", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(67, 191, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_4_5_6", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(91, 208, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_7_8_9", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(116, 228, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_10_11_12", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver,
      this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(140, 247, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_13_14_15", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(165, 265, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_16_17_18", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress,
      this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(188, 283, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_19_20_21", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(214, 302, s_oSpriteLibrary.getSprite("hit_area_triple_bet"),
      "bet_22_23_24", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(241, 322, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_25_26_27", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(268, 342, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_28_29_30", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(296, 362, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_31_32_33", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(323, 382, s_oSpriteLibrary.getSprite("hit_area_triple_bet"), "bet_34_35_36", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(31, 164, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_0_1_2_3", b, !1);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(80, 158, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_1_2_4_5", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(105, 134, s_oSpriteLibrary.getSprite("hit_area_small_circle"),
      "bet_2_3_5_6", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(104, 176, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_4_5_7_8", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(128, 151, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_5_6_8_9", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(128, 193, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_7_8_10_11", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(152, 169, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_8_9_11_12", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(152, 211, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_10_11_13_14", b, !1);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(176, 187, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_11_12_14_15", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(176, 230, s_oSpriteLibrary.getSprite("hit_area_small_circle"),
      "bet_13_14_16_17", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(201, 205, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_14_15_17_18", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(202, 248, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_16_17_19_20", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(227, 222, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_17_18_20_21", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(228, 267, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_19_20_22_23", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(252, 241, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_20_21_23_24", b, !1);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(254, 285, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_22_23_25_26", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(277, 260, s_oSpriteLibrary.getSprite("hit_area_small_circle"),
      "bet_23_24_26_27", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(280, 305, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_25_26_28_29", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(304, 279, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_26_27_29_30", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(306, 324, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_28_29_31_32", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(331, 298, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_29_30_32_33", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(333, 344, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_31_32_34_35", b, !1);
    a.addEventListener(ON_MOUSE_DOWN,
      this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(357, 317, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_32_33_35_36", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(54, 182, s_oSpriteLibrary.getSprite("hit_area_small_circle"),
      "bet_1_2_3_4_5_6", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(78, 200, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_4_5_6_7_8_9", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
      this));
    a = new CBetTableButton(103, 218, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_7_8_9_10_11_12", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(128, 236, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_10_11_12_13_14_15", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(153, 255, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_13_14_15_16_17_18", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(178, 274, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_16_17_18_19_20_21", b,
      !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(204, 293, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_19_20_21_22_23_24", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(230, 312, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_22_23_24_25_26_27", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(255, 332, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_25_26_27_28_29_30", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(282, 352, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_28_29_30_31_32_33", b, !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(309, 372, s_oSpriteLibrary.getSprite("hit_area_small_circle"), "bet_31_32_33_34_35_36", b,
      !1);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(361, 388, s_oSpriteLibrary.getSprite("hit_area_col_bet"), "col1", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(386,
      361, s_oSpriteLibrary.getSprite("hit_area_col_bet"), "col2", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(410, 332, s_oSpriteLibrary.getSprite("hit_area_col_bet"), "col3", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT,
      this._onBetNumberOut, this));
    a = new CBetTableButton(-2, 240, s_oSpriteLibrary.getSprite("hit_area_other_bet"), "first18", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(47, 277, s_oSpriteLibrary.getSprite("hit_area_other_bet"), "even", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
      this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(96, 316, s_oSpriteLibrary.getSprite("hit_area_other_bet"), "black", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(147, 356, s_oSpriteLibrary.getSprite("hit_area_other_bet"), "red", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress,
      this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(197, 395, s_oSpriteLibrary.getSprite("hit_area_other_bet"), "odd", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(253, 438, s_oSpriteLibrary.getSprite("hit_area_other_bet"),
      "second18", b, !0);
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    f = [];
    e = []
  };
  this.unload = function () {
    for (var a = 0; a < b.getNumChildren(); a++) {
      var d = b.getChildAt(a);
      d instanceof CBetTableButton && d.unload()
    }
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
    e[a] = c
  };
  this._onBetPress = function (a) {
    null !== a.numbers && f[ON_SHOW_BET_ON_TABLE] && f[ON_SHOW_BET_ON_TABLE].call(e[ON_SHOW_BET_ON_TABLE],
      a, !1)
  };
  this._onBetNumberOver = function (a) {
    null !== a.numbers && f[ON_SHOW_ENLIGHT] && f[ON_SHOW_ENLIGHT].call(e[ON_SHOW_ENLIGHT], a)
  };
  this._onBetNumberOut = function (a) {
    null !== a.numbers && f[ON_HIDE_ENLIGHT] && f[ON_HIDE_ENLIGHT].call(e[ON_HIDE_ENLIGHT], a)
  };
  this._init()
}

function CEnlight(b, f, e, a) {
  var d;
  this._init = function (a, b, e, f) {
    d = createBitmap(e);
    d.x = a;
    d.y = b;
    d.visible = !1;
    f.addChild(d)
  };
  this.show = function () {
    d.visible = !0
  };
  this.hide = function () {
    d.visible = !1
  };
  this.rotate = function (a) {
    d.rotation = a
  };
  this.getX = function () {
    return d.x
  };
  this.getY = function () {
    return d.y
  };
  this._init(b, f, e, a)
}

function CWheelTopAnim(b, f) {
  var e, a, d, c, h;
  this._init = function (b, f) {
    e = 0;
    h = new createjs.Container;
    h.x = b;
    h.y = f;
    s_oStage.addChild(h);
    a = [];
    for (var g = 0; g < NUM_WHEEL_TOP_FRAMES; g++) {
      var k = createBitmap(s_oSpriteLibrary.getSprite("wheel_top_" + g));
      k.visible = !1;
      h.addChild(k);
      a.push(k)
    }
    c = createBitmap(s_oSpriteLibrary.getSprite("ball_spin"));
    c.visible = !1;
    c.x = 68;
    c.y = 80;
    h.addChild(c);
    d = a[0];
    d.visible = !0
  };
  this.hideBall = function () {
    c.visible = !1
  };
  this.showBall = function () {
    c.visible = !0
  };
  this.playToFrame = function (b) {
    d.visible = !1;
    e = b;
    a[e].visible = !0;
    d = a[e]
  };
  this.stopAnim = function () { };
  this.nextFrame = function () {
    d.visible = !1;
    e++;
    a[e].visible = !0;
    d = a[e]
  };
  this.getCurrentFrame = function () {
    return e
  };
  this._init(b, f)
}

function CFiche(b, f, e, a, d) {
  var c, h, k, g, n;
  this._init = function (b, d, e, f) {
    n = new createjs.Container;
    n.x = b;
    n.y = d;
    a.addChild(n);
    b = s_oSpriteLibrary.getSprite("fiche_" + e);
    g = createBitmap(b);
    f ? (g.scaleX = f, g.scaleY = f) : (g.scaleX = .8, f = g.scaleY = .8);
    c = e;
    n.addChild(g);
    d = s_oGameSettings.getFicheValues(e);
    new CTLText(n, 0, 0, (b.width - 2) * f, (b.height - 2) * f, 50, "center", COLOR_FICHES[e], FONT1, 1, 8 * f, 8 * f, d, !0, !0, !1, !1)
  };
  this.setEndPoint = function (a, b) {
    h = new createjs.Point(n.x, n.y);
    k = new createjs.Point(a, b)
  };
  this.updatePos = function (a) {
    var b =
      new createjs.Point;
    b = tweenVectors(h, k, a, b);
    n.x = b.x;
    n.y = b.y
  };
  this.getSprite = function () {
    return n
  };
  this.getValue = function () {
    return c
  };
  this._init(b, f, e, d)
}

function CHistoryRow(b, f) {
  var e, a, d, c, h, k, g;
  this._init = function (b, f) {
    g = new createjs.Container;
    g.x = b;
    g.y = f;
    s_oStage.addChild(g);
    e = createBitmap(s_oSpriteLibrary.getSprite("circle_red"));
    e.visible = !1;
    g.addChild(e);
    a = createBitmap(s_oSpriteLibrary.getSprite("circle_green"));
    a.visible = !1;
    a.x = 24;
    g.addChild(a);
    d = createBitmap(s_oSpriteLibrary.getSprite("circle_black"));
    d.visible = !1;
    d.x = 48;
    g.addChild(d);
    c = new createjs.Text("a", "12px " + FONT1, "#fff");
    c.x = e.x + 10;
    c.y = e.y + 5;
    c.visible = !1;
    c.textAlign = "center";
    g.addChild(c);
    h = new createjs.Text("a", "12px " + FONT1, "#fff");
    h.x = a.x + 10;
    h.y = a.y + 5;
    h.visible = !1;
    h.textAlign = "center";
    g.addChild(h);
    k = new createjs.Text("a", "12px " + FONT1, "#fff");
    k.x = d.x + 10;
    k.y = d.y + 5;
    k.visible = !1;
    k.textAlign = "center";
    g.addChild(k)
  };
  this.showBlack = function (b) {
    k.text = b;
    e.visible = !1;
    c.visible = !1;
    a.visible = !1;
    h.visible = !1;
    d.visible = !0;
    k.visible = !0
  };
  this.showRed = function (b) {
    c.text = b;
    e.visible = !0;
    c.visible = !0;
    a.visible = !1;
    h.visible = !1;
    d.visible = !1;
    k.visible = !1
  };
  this.showGreen = function (b) {
    h.text = b;
    e.visible = !1;
    c.visible = !1;
    a.visible = !0;
    h.visible = !0;
    d.visible = !1;
    k.visible = !1
  };
  this._init(b, f)
}

function CWheelAnim(b, f) {
  var e, a, d, c, h, k, g, n, t, q = null,
    u;
  this._init = function (a, b) {
    c = 0;
    e = !1;
    u = new createjs.Container;
    u.x = a;
    u.y = b;
    s_oStage.addChild(u);
    h = [];
    for (var d = 0; d < NUM_WHEEL_TOP_FRAMES; d++) {
      var v = createBitmap(s_oSpriteLibrary.getSprite("wheel_anim_" + d));
      v.visible = !1;
      u.addChild(v);
      h.push(v)
    }
    g = [];
    for (d = 0; 3 > d; d++) {
      g[d] = [];
      for (var r = 0; r < NUM_BALL_SPIN_FRAMES; r++) v = createBitmap(s_oSpriteLibrary.getSprite("ball_spin" + (d + 1) + "_" + r)), v.visible = !1, u.addChild(v), g[d].push(v)
    }
    k = [];
    for (d = 0; d < NUM_WHEEL_TOP_FRAMES; d++) v =
      createBitmap(s_oSpriteLibrary.getSprite("mask_ball_spin_" + d)), v.visible = !1, u.addChild(v), k.push(v);
    n = h[0];
    n.visible = !0;
    t = k[0];
    t.visible = !0
  };
  this.startSpin = function (b, c) {
    this.playToFrame(c);
    d = b;
    a = 1;
    e = !0
  };
  this.playToFrame = function (a) {
    n.visible = !1;
    c = a;
    h[c].visible = !0;
    n = h[c];
    t.visible = !1;
    k[c].visible = !0;
    t = k[c]
  };
  this.nextFrame = function () {
    n.visible = !1;
    c++;
    h[c].visible = !0;
    n = h[c];
    t.visible = !1;
    k[c].visible = !0;
    t = k[c]
  };
  this._ballSpin = function () {
    null !== q && (q.visible = !1);
    g[d][a].visible = !0;
    q = g[d][a];
    a++;
    a === NUM_BALL_SPIN_FRAMES -
      1 && (a = 200)
  };
  this.update = function () {
    c === NUM_WHEEL_TOP_FRAMES - 1 ? this.playToFrame(1) : this.nextFrame();
    e && this._ballSpin()
  };
  this._init(b, f)
}

function CFinalBetPanel(b, f) {
  var e, a;
  this._init = function (b, c) {
    e = [
      [0, 10, 20, 30],
      [1, 11, 21, 31],
      [2, 12, 22, 32],
      [3, 13, 23, 33],
      [4, 14, 24, 34],
      [5, 15, 25, 35],
      [6, 16, 26, 36],
      [7, 17, 27],
      [8, 18, 28],
      [9, 19, 29]
    ];
    a = new createjs.Container;
    a.x = b;
    a.y = c;
    s_oStage.addChild(a);
    for (var d = s_oSpriteLibrary.getSprite("final_bet_bg"), f = d.width / 2, g = d.height / 2, n = 0; 10 > n; n++)(new CTextButton(f, g, d, "" + n, FONT1, "#fff", 14, a)).addEventListenerWithParams(ON_MOUSE_UP, this._onFinalBetPressed, this, {
      index: n
    }), f += d.width + 2;
    a.visible = !1
  };
  this.unload =
    function () {
      for (var b = 0; b < a.getNumChildren(); b++)
        if (c instanceof CTextButton) {
          var c = a.getChildAt(b);
          c.unload()
        }
    };
  this.show = function () {
    a.visible = !0
  };
  this.hide = function () {
    a.visible = !1
  };
  this._onFinalBetPressed = function (a) {
    a = a.index;
    s_oGame._onShowBetOnTable({
      button: "oBetFinalsBet",
      numbers: e[a],
      bet_mult: 4 === e[a].length ? 4 : 3,
      bet_win: 4 === e[a].length ? 9 : 12,
      num_fiches: e[a].length
    }, !1);
    this.hide()
  };
  this.isVisible = function () {
    return a.visible
  };
  this._init(b, f)
}

function CNeighborsPanel() {
  var b, f, e, a, d, c, h, k, g, n, t, q, u, m, A, l;
  this._init = function () {
    t = [];
    l = new createjs.Container;
    s_oStage.addChild(l);
    var a = createBitmap(s_oSpriteLibrary.getSprite("neighbor_bg"));
    l.addChild(a);
    A = new createjs.Text(e + "$", "20px " + FONT1, "#fff");
    A.textAlign = "center";
    A.x = CANVAS_WIDTH - 56;
    A.y = CANVAS_HEIGHT - 35;
    l.addChild(A);
    k = [];
    a = new CEnlight(354, 41, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    k.oEnlight_0 = a;
    a = new CEnlight(212, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-136.8);
    k.oEnlight_1 = a;
    a = new CEnlight(586, 145, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(58.1);
    k.oEnlight_2 = a;
    a = new CEnlight(268, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-19.2);
    k.oEnlight_3 = a;
    a = new CEnlight(523, 84, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(39);
    k.oEnlight_4 = a;
    a = new CEnlight(377, 563, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-175);
    k.oEnlight_5 = a;
    a = new CEnlight(637, 311, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(96.2);
    k.oEnlight_6 = a;
    a = new CEnlight(142, 184, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-58.8);
    k.oEnlight_7 = a;
    a = new CEnlight(504, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(156.5);
    k.oEnlight_8 = a;
    a = new CEnlight(121, 357, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-97);
    k.oEnlight_9 = a;
    a = new CEnlight(421, 560, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(175.6);
    k.oEnlight_10 = a;
    a = new CEnlight(574, 473, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(135.8);
    k.oEnlight_11 = a;
    a = new CEnlight(195, 113, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-39.1);
    k.oEnlight_12 = a;
    a = new CEnlight(619, 399, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(117.4);
    k.oEnlight_13 = a;
    a = new CEnlight(155, 440, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-118.2);
    k.oEnlight_14 = a;
    a = new CEnlight(442, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(19.7);
    k.oEnlight_15 = a;
    a = new CEnlight(290, 548, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(-156.8);
    k.oEnlight_16 = a;
    a = new CEnlight(628, 226, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(80.2);
    k.oEnlight_17 = a;
    a = new CEnlight(117, 269, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-79.2);
    k.oEnlight_18 = a;
    a = new CEnlight(484, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(29.6);
    k.oEnlight_19 = a;
    a = new CEnlight(181, 475, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-127.5);
    k.oEnlight_20 = a;
    a = new CEnlight(557, 112, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(49.1);
    k.oEnlight_21 = a;
    a = new CEnlight(115, 314, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-88.9);
    k.oEnlight_22 = a;
    a = new CEnlight(463, 549, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(166.4);
    k.oEnlight_23 = a;
    a = new CEnlight(333, 559, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-166.6);
    k.oEnlight_24 = a;
    a = new CEnlight(610, 183, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(69);
    k.oEnlight_25 = a;
    a = new CEnlight(311, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(-7.9);
    k.oEnlight_26 = a;
    a = new CEnlight(633, 355, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(106.4);
    k.oEnlight_27 = a;
    a = new CEnlight(166, 146, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-48.1);
    k.oEnlight_28 = a;
    a = new CEnlight(126, 225, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-68.3);
    k.oEnlight_29 = a;
    a = new CEnlight(541, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(146);
    k.oEnlight_30 = a;
    a = new CEnlight(134, 400, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(-108.2);
    k.oEnlight_31 = a;
    a = new CEnlight(397, 40, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(8.7);
    k.oEnlight_32 = a;
    a = new CEnlight(249, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-146.3);
    k.oEnlight_33 = a;
    a = new CEnlight(636, 268, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(87.9);
    k.oEnlight_34 = a;
    a = new CEnlight(230, 85, s_oSpriteLibrary.getSprite("neighbor_enlight"), l);
    a.rotate(-29.1);
    k.oEnlight_35 = a;
    a = new CEnlight(600, 439, s_oSpriteLibrary.getSprite("neighbor_enlight"),
      l);
    a.rotate(127.1);
    k.oEnlight_36 = a;
    m = new createjs.Container;
    l.addChild(m);
    a = s_oSpriteLibrary.getSprite("hitarea_neighbor");
    var b = new CGfxButton(376, 72, a, !1);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 0
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 0
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 0
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(415, 76, a, !1);
    b.rotate(9.2);
    b.addEventListenerWithParams(ON_MOUSE_UP,
      this._onNeighborRelease, this, {
      index: 32
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 32
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 32
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(453, 86, a, !1);
    b.rotate(20);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 15
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 15
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 15
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(490, 102, a, !1);
    b.rotate(29.4);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 19
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 19
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 19
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(520, 124, a, !1);
    b.rotate(39.4);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 4
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER,
      this._onNeighborOver, this, {
      index: 4
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 4
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(549, 150, a, !1);
    b.rotate(48.8);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 21
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 21
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 21
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(571, 181, a, !1);
    b.rotate(58.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 2
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 2
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 2
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(588, 216, a, !1);
    b.rotate(68.7);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 25
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 25
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT,
      this._onNeighborOut, this, {
      index: 25
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(599, 253, a, !1);
    b.rotate(78.9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 17
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 17
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 17
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(604, 291, a, !1);
    b.rotate(90.4);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 34
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 34
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 34
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(603, 330, a, !1);
    b.rotate(96.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 6
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 6
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 6
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(596, 368, a, !1);
    b.rotate(107.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 27
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 27
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 27
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(580, 404, a, !1);
    b.rotate(116);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 13
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
      this, {
      index: 13
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 13
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(560, 438, a, !1);
    b.rotate(126.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 36
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 36
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 36
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(534, 466, a, !1);
    b.rotate(135.7);
    b.addEventListenerWithParams(ON_MOUSE_UP,
      this._onNeighborRelease, this, {
      index: 11
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 11
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 11
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(504, 490, a, !1);
    b.rotate(145.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 30
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 30
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut,
      this, {
      index: 30
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(471, 510, a, !1);
    b.rotate(154.9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 8
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 8
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 8
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(434, 522, a, !1);
    b.rotate(165.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 23
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER,
      this._onNeighborOver, this, {
      index: 23
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 23
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(395, 529, a, !1);
    b.rotate(174.9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 10
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 10
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 10
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(357, 529, a, !1);
    b.rotate(-176.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 5
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 5
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 5
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(319, 522, a, !1);
    b.rotate(-166);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 24
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 24
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT,
      this._onNeighborOut, this, {
      index: 24
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(282, 509, a, !1);
    b.rotate(-156);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 16
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 16
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 16
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(247, 491, a, !1);
    b.rotate(-146);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 33
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 33
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 33
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(217, 466, a, !1);
    b.rotate(-137);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 1
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 1
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 1
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(193, 437, a, !1);
    b.rotate(-128);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 20
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 20
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 20
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(172, 404, a, !1);
    b.rotate(-118.4);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 14
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
      this, {
      index: 14
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 14
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(158, 367, a, !1);
    b.rotate(-105.7);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 31
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 31
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 31
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(149, 330, a, !1);
    b.rotate(-95.5);
    b.addEventListenerWithParams(ON_MOUSE_UP,
      this._onNeighborRelease, this, {
      index: 9
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 9
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 9
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(148, 291, a, !1);
    b.rotate(-88.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 22
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 22
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut,
      this, {
      index: 22
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(154, 252, a, !1);
    b.rotate(-78);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 18
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 18
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 18
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(164, 216, a, !1);
    b.rotate(-67.8);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 29
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER,
      this._onNeighborOver, this, {
      index: 29
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 29
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(181, 181, a, !1);
    b.rotate(-57.6);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 7
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 7
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 7
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(205, 150, a, !1);
    b.rotate(-48.8);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 28
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 28
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 28
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(233, 124, a, !1);
    b.rotate(-39.1);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 12
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 12
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT,
      this._onNeighborOut, this, {
      index: 12
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(265, 102, a, !1);
    b.rotate(-29.9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 35
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 35
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 35
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(300, 86, a, !1);
    b.rotate(-19.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 3
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 3
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 3
    });
    l.addChild(b.getButtonImage());
    b = new CGfxButton(338, 76, a, !1);
    b.rotate(-8.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 26
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 26
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 26
    });
    l.addChild(b.getButtonImage());
    this._initNeighbors();
    a = s_oSpriteLibrary.getSprite("but_game_bg");
    u = new CTextButton(CANVAS_WIDTH - a.width / 2 - 10, 30, a, TEXT_EXIT, FONT1, "#fff", 14, l);
    u.addEventListener(ON_MOUSE_UP, this.onExit, this);
    this.reset();
    this.hide()
  };
  this.unload = function () {
    for (var a = 0; a < l.getNumChildren(); a++)
      if (b instanceof CGfxButton) {
        var b = l.getChildAt(a);
        b.unload()
      }
  };
  this.showPanel = function (a, b) {
    f = a;
    e = b;
    n = [];
    A.text = b + "$";
    l.visible = !0
  };
  this.hide = function () {
    l.visible = !1
  };
  this._initNeighbors = function () {
    d = [
      [3, 26, 0, 32, 15],
      [16, 33,
        1, 20, 14
      ],
      [4, 21, 2, 25, 17],
      [12, 35, 3, 26, 0],
      [15, 19, 4, 21, 2],
      [23, 10, 5, 24, 16],
      [17, 34, 6, 27, 13],
      [18, 29, 7, 28, 12],
      [11, 30, 8, 23, 10],
      [14, 31, 9, 22, 18],
      [8, 23, 10, 5, 24],
      [13, 36, 11, 30, 8],
      [7, 28, 12, 35, 3],
      [6, 27, 13, 36, 11],
      [1, 20, 14, 31, 9],
      [0, 32, 15, 19, 4],
      [5, 24, 16, 33, 1],
      [2, 25, 17, 34, 6],
      [9, 22, 18, 29, 7],
      [32, 15, 19, 4, 21],
      [33, 1, 20, 14, 31],
      [19, 4, 21, 2, 25],
      [31, 9, 22, 18, 29],
      [30, 8, 23, 10, 5],
      [10, 5, 24, 16, 33],
      [21, 2, 25, 17, 34],
      [35, 3, 26, 0, 32],
      [34, 6, 27, 13, 36],
      [29, 7, 28, 12, 35],
      [22, 18, 29, 7, 28],
      [36, 11, 30, 8, 23],
      [20, 14, 31, 9, 22],
      [26, 0, 32, 15, 19],
      [24, 16, 33,
        1, 20
      ],
      [25, 17, 34, 6, 27],
      [28, 12, 35, 3, 26],
      [27, 13, 36, 11, 30]
    ];
    q = [];
    q.oAttach_0 = new createjs.Point(363, 59);
    q.oAttach_32 = new createjs.Point(402, 65);
    q.oAttach_15 = new createjs.Point(440, 76);
    q.oAttach_19 = new createjs.Point(473, 91);
    q.oAttach_4 = new createjs.Point(505, 110);
    q.oAttach_21 = new createjs.Point(537, 139);
    q.oAttach_2 = new createjs.Point(556, 168);
    q.oAttach_25 = new createjs.Point(578, 205);
    q.oAttach_17 = new createjs.Point(588, 240);
    q.oAttach_34 = new createjs.Point(592, 283);
    q.oAttach_6 = new createjs.Point(592, 321);
    q.oAttach_27 = new createjs.Point(585, 356);
    q.oAttach_13 = new createjs.Point(570, 392);
    q.oAttach_36 = new createjs.Point(550, 425);
    q.oAttach_11 = new createjs.Point(523, 457);
    q.oAttach_30 = new createjs.Point(491, 479);
    q.oAttach_8 = new createjs.Point(460, 500);
    q.oAttach_23 = new createjs.Point(420, 511);
    q.oAttach_10 = new createjs.Point(383, 521);
    q.oAttach_5 = new createjs.Point(342, 519);
    q.oAttach_24 = new createjs.Point(300, 511);
    q.oAttach_16 = new createjs.Point(267, 498);
    q.oAttach_33 = new createjs.Point(234, 479);
    q.oAttach_1 =
      new createjs.Point(203, 457);
    q.oAttach_20 = new createjs.Point(177, 428);
    q.oAttach_14 = new createjs.Point(158, 392);
    q.oAttach_31 = new createjs.Point(143, 356);
    q.oAttach_9 = new createjs.Point(138, 318);
    q.oAttach_22 = new createjs.Point(133, 279);
    q.oAttach_18 = new createjs.Point(138, 240);
    q.oAttach_29 = new createjs.Point(150, 202);
    q.oAttach_7 = new createjs.Point(167, 170);
    q.oAttach_28 = new createjs.Point(193, 137);
    q.oAttach_12 = new createjs.Point(220, 112);
    q.oAttach_35 = new createjs.Point(254, 88);
    q.oAttach_3 = new createjs.Point(287,
      74);
    q.oAttach_26 = new createjs.Point(324, 65)
  };
  this.reset = function () {
    c = [];
    for (var b = 0; b < NUMBERS_TO_BET; b++) c[b] = 0;
    if (h)
      for (b = 0; b < h.length; b++) m.removeChild(h[b].getSprite());
    h = [];
    g = [];
    a = 0
  };
  this.clearLastBet = function () {
    if (0 !== t.length) {
      var b = t.pop(),
        d = s_oGameSettings.getFicheValues(f);
      c[b] -= d;
      c[b] = roundDecimal(c[b], 1);
      d = g[b];
      0 < d.length ? m.removeChild(d[d.length - 1].getSprite()) : (t = [], c[b] = 0);
      h.pop();
      g[b].pop();
      if (0 === t.length)
        for (h = [], g = [], b = 0; b < NUMBERS_TO_BET; b++) c[b] = 0;
      a = 0
    }
  };
  this.onExit = function () {
    this.hide()
  };
  this.addFicheOnNeighborTable = function () {
    var h = s_oGameSettings.getFicheValues(f);
    if (!(a + 5 * h > e))
      if (a + 5 * h > MAX_BET) s_oGame.showMsgBox(TEXT_ERROR_MAX_BET_REACHED);
      else {
        a += 5 * h;
        a = roundDecimal(a, 1);
        var k = e - a;
        k = roundDecimal(k, 1);
        A.text = k + "$";
        playSound("chip", 1, !1);
        c[b] += h;
        c[b] = roundDecimal(c[b], 1);
        h = s_oGameSettings.generateFichesPileByIndex(c[b]);
        h.sort();
        this._removeFichesPile(g[b]);
        g[b] = [];
        k = q["oAttach_" + b].x;
        for (var l = q["oAttach_" + b].y, m = 0; m < h.length; m++) this._attachFichesPile(h[m], b, k, l), l -= 5;
        n.push(b);
        s_oGame._onShowBetOnTableFromNeighbors({
          button: "oBetNeighbors",
          numbers: d[b],
          bet_mult: 5,
          bet_win: 7.2,
          value: f,
          num_fiches: 5,
          num_clicked: b
        }, !1);
        t.push(b)
      }
  };
  this._attachFichesPile = function (a, b, c, d) {
    a = new CFiche(c, d, a, m, 1.3);
    g[b].push(a);
    h.push(a)
  };
  this._removeFichesPile = function (a) {
    for (var b in a) m.removeChild(a[b].getSprite())
  };
  this.searchForNumClicked = function () {
    for (var a = 0; a < n.length; a++)
      if (n[a] === b) return !0;
    return !1
  };
  this._onNeighborRelease = function (a) {
    b = a.index;
    this.addFicheOnNeighborTable()
  };
  this.rebet =
    function (a) {
      b = a;
      this.addFicheOnNeighborTable()
    };
  this._onNeighborOver = function (a) {
    a = d[a.index];
    for (var b = 0; b < a.length; b++) k["oEnlight_" + a[b]].show()
  };
  this._onNeighborOut = function (a) {
    a = d[a.index];
    for (var b = 0; b < a.length; b++) k["oEnlight_" + a[b]].hide()
  };
  this.isVisible = function () {
    return l.visible
  };
  this._init()
}

function CGameOver() {
  var b, f, e;
  this._init = function () {
    e = new createjs.Container;
    s_oStage.addChild(e);
    var a = createBitmap(s_oSpriteLibrary.getSprite("game_over_bg"));
    e.addChild(a);
    new CTLText(e, CANVAS_WIDTH / 2 - 300, 140, 600, 80, 40, "center", "#fff", FONT1, 1, 2, 2, TEXT_NO_MONEY, !0, !0, !0, !1);
    new CTLText(e, CANVAS_WIDTH / 2 - 300, 260, 600, 40, 40, "center", "#fff", FONT1, 1, 2, 2, TEXT_RECHARGE_MSG, !0, !0, !0, !1);
    b = new CTextButton(CANVAS_WIDTH / 2, 400, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_RECHARGE, FONT1, "#fff", 14, e);
    b.addEventListener(ON_MOUSE_UP,
      this._onRecharge, this);
    f = new CTextButton(CANVAS_WIDTH / 2, 440, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_EXIT, FONT1, "#fff", 14, e);
    f.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide()
  };
  this.unload = function () {
    b.unload();
    f.unload()
  };
  this.show = function () {
    e.visible = !0
  };
  this.hide = function () {
    e.visible = !1
  };
  this._onRecharge = function () {
    s_oGame.onRecharge()
  };
  this._onExit = function () {
    s_oGame.onExit()
  };
  this._init()
}

function CCreditsPanel() {
  var b, f, e, a, d, c;
  this._init = function () {
    c = new createjs.Container;
    s_oStage.addChild(c);
    var h = s_oSpriteLibrary.getSprite("msg_box");
    b = createBitmap(h);
    c.addChild(b);
    a = new createjs.Shape;
    a.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    a.alpha = .01;
    d = a.on("click", this._onLogoButRelease);
    c.addChild(a);
    h = s_oSpriteLibrary.getSprite("but_exit");
    e = new CGfxButton(205, 214, h, c);
    e.addEventListener(ON_MOUSE_UP, this.unload, this);
    new CTLText(c, CANVAS_WIDTH / 2 - 120, CANVAS_HEIGHT /
      2 - 66, 240, 40, 30, "center", "#fff", FONT1, 1, 2, 2, TEXT_CREDITS_DEVELOPED, !0, !0, !1, !1);
    h = s_oSpriteLibrary.getSprite("logo_ctl");
    f = createBitmap(h);
    f.regX = h.width / 2;
    f.regY = h.height / 2;
    f.x = CANVAS_WIDTH / 2;
    f.y = CANVAS_HEIGHT / 2;
    c.addChild(f);
    new CTLText(c, CANVAS_WIDTH / 2 - 120, CANVAS_HEIGHT / 2 + 26, 240, 30, 30, "center", "#fff", FONT1, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1)
  };
  this.unload = function () {
    a.off("click", d);
    e.unload();
    e = null;
    s_oStage.removeChild(c)
  };
  this._onLogoButRelease = function () {
    window.open("http://www.codethislab.com/index.php?&l=en",
      "_blank")
  };
  this._init()
}
CTLText.prototype = {
  constructor: CTLText,
  __autofit: function () {
    if (this._bFitText) {
      for (var b = this._iFontSize;
        (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(b--, this._oText.font = b + "px " + this._szFont, this._oText.lineHeight = Math.round(b * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > b););
      this._iFontSize = b
    }
  },
  __verticalAlign: function () {
    if (this._bVerticalAlign) {
      var b = this._oText.getBounds().height;
      this._oText.y -=
        (b - this._iHeight) / 2 + this._iPaddingV
    }
  },
  __updateY: function () {
    this._oText.y = this._y + this._iPaddingV;
    switch (this._oText.textBaseline) {
      case "middle":
        this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
    }
  },
  __createText: function (b) {
    this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
    this._oText = new createjs.Text(b,
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
    this.refreshText(b)
  },
  setVerticalAlign: function (b) {
    this._bVerticalAlign = b
  },
  setOutline: function (b) {
    null !== this._oText && (this._oText.outline = b)
  },
  setShadow: function (b, f, e, a) {
    null !== this._oText && (this._oText.shadow = new createjs.Shadow(b, f, e, a))
  },
  setColor: function (b) {
    this._oText.color = b
  },
  setAlpha: function (b) {
    this._oText.alpha = b
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
  refreshText: function (b) {
    "" === b && (b = " ");
    null === this._oText && this.__createText(b);
    this._oText.text = b;
    this._oText.font = this._iFontSize + "px " + this._szFont;
    this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
    this.__autofit();
    this.__updateY();
    this.__verticalAlign()
  }
};

function CTLText(b, f, e, a, d, c, h, k, g, n, t, q, u, m, A, l, v) {
  this._oContainer = b;
  this._x = f;
  this._y = e;
  this._iWidth = a;
  this._iHeight = d;
  this._bMultiline = l;
  this._iFontSize = c;
  this._szAlign = h;
  this._szColor = k;
  this._szFont = g;
  this._iPaddingH = t;
  this._iPaddingV = q;
  this._bVerticalAlign = A;
  this._bFitText = m;
  this._bDebug = v;
  this._oDebugShape = null;
  this._fLineHeightFactor = n;
  this._oText = null;
  u && this.__createText(u)
};