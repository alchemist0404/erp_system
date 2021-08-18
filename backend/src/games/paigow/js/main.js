/*
 screenfull
 v5.0.0 - 2019-09-09
 (c) Sindre Sorhus; MIT License
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
!(function () {
  var a =
    "undefined" != typeof window && void 0 !== window.document
      ? window.document
      : {},
    b = "undefined" != typeof module && module.exports,
    c = (function () {
      for (
        var b,
        c = [
          "requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(
            " "
          ),
          "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(
            " "
          ),
          "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(
            " "
          ),
          "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(
            " "
          ),
          "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(
            " "
          ),
        ],
        d = 0,
        e = c.length,
        l = {};
        d < e;
        d++
      )
        if ((b = c[d]) && b[1] in a) {
          for (d = 0; d < b.length; d++) l[c[0][d]] = b[d];
          return l;
        }
      return !1;
    })(),
    d = { change: c.fullscreenchange, error: c.fullscreenerror },
    e = {
      request: function (b) {
        return new Promise(
          function (d, e) {
            var f = function () {
              this.off("change", f);
              d();
            }.bind(this);
            this.on("change", f);
            b = b || a.documentElement;
            Promise.resolve(b[c.requestFullscreen]())["catch"](e);
          }.bind(this)
        );
      },
      exit: function () {
        return new Promise(
          function (b, d) {
            if (this.isFullscreen) {
              var e = function () {
                this.off("change", e);
                b();
              }.bind(this);
              this.on("change", e);
              Promise.resolve(a[c.exitFullscreen]())["catch"](d);
            } else b();
          }.bind(this)
        );
      },
      toggle: function (a) {
        return this.isFullscreen ? this.exit() : this.request(a);
      },
      onchange: function (a) {
        this.on("change", a);
      },
      onerror: function (a) {
        this.on("error", a);
      },
      on: function (b, c) {
        var e = d[b];
        e && a.addEventListener(e, c, !1);
      },
      off: function (b, c) {
        var e = d[b];
        e && a.removeEventListener(e, c, !1);
      },
      raw: c,
    };
  c
    ? (Object.defineProperties(e, {
      isFullscreen: {
        get: function () {
          return !!a[c.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return a[c.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!a[c.fullscreenEnabled];
        },
      },
    }),
      b ? (module.exports = e) : (window.screenfull = e))
    : b
      ? (module.exports = { isEnabled: !1 })
      : (window.screenfull = { isEnabled: !1 });
})();
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function b(a, b) {
    var c = -1,
      e = a ? a.length : 0;
    if ("number" == typeof e && -1 < e && e <= z)
      for (; ++c < e;) b(a[c], c, a);
    else d(a, b);
  }
  function c(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function d(a, b) {
    for (var c in a) D.call(a, c) && b(a[c], c, a);
  }
  function e(b) {
    return null == b ? a(b) : w.call(b).slice(8, -1);
  }
  function f(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(c) &&
      ("object" == c ? !!a[b] : !0)
    );
  }
  function k(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function r(a, c) {
    var d = null;
    b(a, function (b, e) {
      d = c(d, b, e, a);
    });
    return d;
  }
  function t(a) {
    function b(b) {
      return r(b, function (b, d) {
        var e = d.pattern || k(d);
        !b &&
          (b =
            RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((b = String(
            d.label && !RegExp(e, "i").test(d.label) ? d.label : b
          ).split("/"))[1] &&
            !/[\d.]+/.test(b[0]) &&
            (b[0] += " " + b[1]),
            (d = d.label || d),
            (b = c(
              b[0]
                .replace(RegExp(e, "i"), d)
                .replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ")
                .replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")
            )));
        return b;
      });
    }
    function p(b) {
      return r(b, function (b, c) {
        return (
          b ||
          (RegExp(
            c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
            "i"
          ).exec(a) || 0)[1] ||
          null
        );
      });
    }
    var l = h,
      n = a && "object" == typeof a && "String" != e(a);
    n && ((l = a), (a = null));
    var z = l.navigator || {},
      u = z.userAgent || "";
    a || (a = u);
    var D = n
      ? !!z.likeChrome
      : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
      v = n ? "Object" : "ScriptBridgingProxyObject",
      I = n ? "Object" : "Environment",
      H = n && l.java ? "JavaPackage" : e(l.java),
      L = n ? "Object" : "RuntimeObject";
    I = (H = /\bJava/.test(H) && l.java) && e(l.environment) == I;
    var B = H ? "a" : "\u03b1",
      Z = H ? "b" : "\u03b2",
      E = l.document || {},
      M = l.operamini || l.opera,
      Q = x.test((Q = n && M ? M["[[Class]]"] : e(M))) ? Q : (M = null),
      g,
      V = a;
    n = [];
    var W = null,
      T = a == u;
    u = T && M && "function" == typeof M.version && M.version();
    var C = (function (b) {
      return r(b, function (b, c) {
        return (
          b ||
          (RegExp("\\b" + (c.pattern || k(c)) + "\\b", "i").exec(a) &&
            (c.label || c))
        );
      });
    })([
      { label: "EdgeHTML", pattern: "Edge" },
      "Trident",
      { label: "WebKit", pattern: "AppleWebKit" },
      "iCab",
      "Presto",
      "NetFront",
      "Tasman",
      "KHTML",
      "Gecko",
    ]),
      q = (function (b) {
        return r(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || k(c)) + "\\b", "i").exec(a) &&
              (c.label || c))
          );
        });
      })([
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Electron",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        { label: "Microsoft Edge", pattern: "Edge" },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        { label: "Samsung Internet", pattern: "SamsungBrowser" },
        "SeaMonkey",
        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Sleipnir",
        "SlimBrowser",
        { label: "SRWare Iron", pattern: "Iron" },
        "Sunrise",
        "Swiftfox",
        "Waterfox",
        "WebPositive",
        "Opera Mini",
        { label: "Opera Mini", pattern: "OPiOS" },
        "Opera",
        { label: "Opera", pattern: "OPR" },
        "Chrome",
        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
        { label: "Firefox for iOS", pattern: "FxiOS" },
        { label: "IE", pattern: "IEMobile" },
        { label: "IE", pattern: "MSIE" },
        "Safari",
      ]),
      A = b([
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        { label: "Galaxy S5", pattern: "SM-G900" },
        { label: "Galaxy S6", pattern: "SM-G920" },
        { label: "Galaxy S6 Edge", pattern: "SM-G925" },
        { label: "Galaxy S7", pattern: "SM-G930" },
        { label: "Galaxy S7 Edge", pattern: "SM-G935" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation Vita",
        "PlayStation",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom",
      ]),
      N = (function (b) {
        return r(b, function (b, c, d) {
          return (
            b ||
            ((c[A] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] ||
              RegExp("\\b" + k(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
              d)
          );
        });
      })({
        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
        Archos: {},
        Amazon: { Kindle: 1, "Kindle Fire": 1 },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: { "Google TV": 1, Nexus: 1 },
        HP: { TouchPad: 1 },
        HTC: {},
        LG: {},
        Microsoft: { Xbox: 1, "Xbox One": 1 },
        Motorola: { Xoom: 1 },
        Nintendo: { "Wii U": 1, Wii: 1 },
        Nokia: { Lumia: 1 },
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1,
        },
        Sony: { PlayStation: 1, "PlayStation Vita": 1 },
      }),
      m = (function (b) {
        return r(b, function (b, d) {
          var e = d.pattern || k(d);
          if (
            !b &&
            (b = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var U = b,
              f = d.label || d,
              h = {
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
                "4.90": "ME",
              };
            e &&
              f &&
              /^Win/i.test(U) &&
              !/^Windows Phone /i.test(U) &&
              (h = h[/[\d.]+$/.exec(U)]) &&
              (U = "Windows " + h);
            U = String(U);
            e && f && (U = U.replace(RegExp(e, "i"), f));
            b = U = c(
              U.replace(/ ce$/i, " CE")
                .replace(/\bhpw/i, "web")
                .replace(/\bMacintosh\b/, "Mac OS")
                .replace(/_PowerPC\b/i, " OS")
                .replace(/\b(OS X) [^ \d]+/i, "$1")
                .replace(/\bMac (OS X)\b/, "$1")
                .replace(/\/(\d)/, " $1")
                .replace(/_/g, ".")
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                .replace(/\bx86\.64\b/gi, "x86_64")
                .replace(/\b(Windows Phone) OS\b/, "$1")
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                .split(" on ")[0]
            );
          }
          return b;
        });
      })([
        "Windows Phone",
        "Android",
        "CentOS",
        { label: "Chrome OS", pattern: "CrOS" },
        "Debian",
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
        "Kubuntu",
        "Linux Mint",
        "OpenBSD",
        "Red Hat",
        "SuSE",
        "Ubuntu",
        "Xubuntu",
        "Cygwin",
        "Symbian OS",
        "hpwOS",
        "webOS ",
        "webOS",
        "Tablet OS",
        "Tizen",
        "Linux",
        "Mac OS X",
        "Macintosh",
        "Mac",
        "Windows 98;",
        "Windows ",
      ]);
    C && (C = [C]);
    N && !A && (A = b([N]));
    if ((g = /\bGoogle TV\b/.exec(A))) A = g[0];
    /\bSimulator\b/i.test(a) && (A = (A ? A + " " : "") + "Simulator");
    "Opera Mini" == q &&
      /\bOPiOS\b/.test(a) &&
      n.push("running in Turbo/Uncompressed mode");
    "IE" == q && /\blike iPhone OS\b/.test(a)
      ? ((g = t(a.replace(/like iPhone OS/, ""))),
        (N = g.manufacturer),
        (A = g.product))
      : /^iP/.test(A)
        ? (q || (q = "Safari"),
          (m =
            "iOS" +
            ((g = / OS ([\d_]+)/i.exec(a)) ? " " + g[1].replace(/_/g, ".") : "")))
        : "Konqueror" != q || /buntu/i.test(m)
          ? (N &&
            "Google" != N &&
            ((/Chrome/.test(q) && !/\bMobile Safari\b/i.test(a)) ||
              /\bVita\b/.test(A))) ||
            (/\bAndroid\b/.test(m) && /^Chrome/.test(q) && /\bVersion\//i.test(a))
            ? ((q = "Android Browser"), (m = /\bAndroid\b/.test(m) ? m : "Android"))
            : "Silk" == q
              ? (/\bMobi/i.test(a) || ((m = "Android"), n.unshift("desktop mode")),
                /Accelerated *= *true/i.test(a) && n.unshift("accelerated"))
              : "PaleMoon" == q && (g = /\bFirefox\/([\d.]+)\b/.exec(a))
                ? n.push("identifying as Firefox " + g[1])
                : "Firefox" == q && (g = /\b(Mobile|Tablet|TV)\b/i.exec(a))
                  ? (m || (m = "Firefox OS"), A || (A = g[1]))
                  : !q ||
                    (g = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(q))
                    ? (q &&
                      !A &&
                      /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(g + "/") + 8)) &&
                      (q = null),
                      (g = A || N || m) &&
                      (A || N || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(m)) &&
                      (q =
                        /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(m) ? m : g) +
                        " Browser"))
                    : "Electron" == q &&
                    (g = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
                    n.push("Chromium " + g)
          : (m = "Kubuntu");
    u ||
      (u = p([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        k(q),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (g =
        ("iCab" == C && 3 < parseFloat(u) && "WebKit") ||
        (/\bOpera\b/.test(q) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(C) &&
          "WebKit") ||
        (!C && /\bMSIE\b/i.test(a) && ("Mac OS" == m ? "Tasman" : "Trident")) ||
        ("WebKit" == C && /\bPlayStation\b(?! Vita\b)/i.test(q) && "NetFront"))
    )
      C = [g];
    "IE" == q && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((q += " Mobile"),
        (m = "Windows Phone " + (/\+$/.test(g) ? g : g + ".x")),
        n.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
        ? ((q = "IE Mobile"),
          (m = "Windows Phone 8.x"),
          n.unshift("desktop mode"),
          u || (u = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
        : "IE" != q &&
        "Trident" == C &&
        (g = /\brv:([\d.]+)/.exec(a)) &&
        (q && n.push("identifying as " + q + (u ? " " + u : "")),
          (q = "IE"),
          (u = g[1]));
    if (T) {
      if (f(l, "global"))
        if (
          (H &&
            ((g = H.lang.System),
              (V = g.getProperty("os.arch")),
              (m =
                m ||
                g.getProperty("os.name") + " " + g.getProperty("os.version"))),
            I)
        ) {
          try {
            (u = l.require("ringo/engine").version.join(".")), (q = "RingoJS");
          } catch (X) {
            (g = l.system) &&
              g.global.system == l.system &&
              ((q = "Narwhal"), m || (m = g[0].os || null));
          }
          q || (q = "Rhino");
        } else
          "object" == typeof l.process &&
            !l.process.browser &&
            (g = l.process) &&
            ("object" == typeof g.versions &&
              ("string" == typeof g.versions.electron
                ? (n.push("Node " + g.versions.node),
                  (q = "Electron"),
                  (u = g.versions.electron))
                : "string" == typeof g.versions.nw &&
                (n.push("Chromium " + u, "Node " + g.versions.node),
                  (q = "NW.js"),
                  (u = g.versions.nw))),
              q ||
              ((q = "Node.js"),
                (V = g.arch),
                (m = g.platform),
                (u = (u = /[\d.]+/.exec(g.version)) ? u[0] : null)));
      else
        e((g = l.runtime)) == v
          ? ((q = "Adobe AIR"), (m = g.flash.system.Capabilities.os))
          : e((g = l.phantom)) == L
            ? ((q = "PhantomJS"),
              (u =
                (g = g.version || null) &&
                g.major + "." + g.minor + "." + g.patch))
            : "number" == typeof E.documentMode &&
              (g = /\bTrident\/(\d+)/i.exec(a))
              ? ((u = [u, E.documentMode]),
                (g = +g[1] + 4) != u[1] &&
                (n.push("IE " + u[1] + " mode"), C && (C[1] = ""), (u[1] = g)),
                (u = "IE" == q ? String(u[1].toFixed(1)) : u[0]))
              : "number" == typeof E.documentMode &&
              /^(?:Chrome|Firefox)\b/.test(q) &&
              (n.push("masking as " + q + " " + u),
                (q = "IE"),
                (u = "11.0"),
                (C = ["Trident"]),
                (m = "Windows"));
      m = m && c(m);
    }
    u &&
      (g =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(u) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (T && z.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((W = /b/i.test(g) ? "beta" : "alpha"),
        (u =
          u.replace(RegExp(g + "\\+?$"), "") +
          ("beta" == W ? Z : B) +
          (/\d+\+?/.exec(g) || "")));
    if (
      "Fennec" == q ||
      ("Firefox" == q && /\b(?:Android|Firefox OS)\b/.test(m))
    )
      q = "Firefox Mobile";
    else if ("Maxthon" == q && u) u = u.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(A))
      "Xbox 360" == A && (m = null),
        "Xbox 360" == A && /\bIEMobile\b/.test(a) && n.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(q) &&
        (!q || A || /Browser|Mobi/.test(q))) ||
      ("Windows CE" != m && !/Mobi/i.test(a))
    )
      if ("IE" == q && T)
        try {
          null === l.external && n.unshift("platform preview");
        } catch (X) {
          n.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(a)) &&
          (g =
            (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
              0)[1] || u)
          ? ((g = [g, /BB10/.test(a)]),
            (m =
              (g[1] ? ((A = null), (N = "BlackBerry")) : "Device Software") +
              " " +
              g[0]),
            (u = null))
          : this != d &&
          "Wii" != A &&
          ((T && M) ||
            (/Opera/.test(q) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
            ("Firefox" == q && /\bOS X (?:\d+\.){2,}/.test(m)) ||
            ("IE" == q &&
              ((m && !/^Win/.test(m) && 5.5 < u) ||
                (/\bWindows XP\b/.test(m) && 8 < u) ||
                (8 == u && !/\bTrident\b/.test(a))))) &&
          !x.test((g = t.call(d, a.replace(x, "") + ";"))) &&
          g.name &&
          ((g = "ing as " + g.name + ((g = g.version) ? " " + g : "")),
            x.test(q)
              ? (/\bIE\b/.test(g) && "Mac OS" == m && (m = null),
                (g = "identify" + g))
              : ((g = "mask" + g),
                (q = Q ? c(Q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(g) && (m = null),
                T || (u = null)),
            (C = ["Presto"]),
            n.push(g));
    else q += " Mobile";
    if ((g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      g = [parseFloat(g.replace(/\.(\d)$/, ".0$1")), g];
      if ("Safari" == q && "+" == g[1].slice(-1))
        (q = "WebKit Nightly"), (W = "alpha"), (u = g[1].slice(0, -1));
      else if (
        u == g[1] ||
        u == (g[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        u = null;
      g[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == g[0] &&
        537.36 == g[2] &&
        28 <= parseFloat(g[1]) &&
        "WebKit" == C &&
        (C = ["Blink"]);
      T && (D || g[1])
        ? (C && (C[1] = "like Chrome"),
          (g =
            g[1] ||
            ((g = g[0]),
              530 > g
                ? 1
                : 532 > g
                  ? 2
                  : 532.05 > g
                    ? 3
                    : 533 > g
                      ? 4
                      : 534.03 > g
                        ? 5
                        : 534.07 > g
                          ? 6
                          : 534.1 > g
                            ? 7
                            : 534.13 > g
                              ? 8
                              : 534.16 > g
                                ? 9
                                : 534.24 > g
                                  ? 10
                                  : 534.3 > g
                                    ? 11
                                    : 535.01 > g
                                      ? 12
                                      : 535.02 > g
                                        ? "13+"
                                        : 535.07 > g
                                          ? 15
                                          : 535.11 > g
                                            ? 16
                                            : 535.19 > g
                                              ? 17
                                              : 536.05 > g
                                                ? 18
                                                : 536.1 > g
                                                  ? 19
                                                  : 537.01 > g
                                                    ? 20
                                                    : 537.11 > g
                                                      ? "21+"
                                                      : 537.13 > g
                                                        ? 23
                                                        : 537.18 > g
                                                          ? 24
                                                          : 537.24 > g
                                                            ? 25
                                                            : 537.36 > g
                                                              ? 26
                                                              : "Blink" != C
                                                                ? "27"
                                                                : "28")))
        : (C && (C[1] = "like Safari"),
          (g =
            ((g = g[0]),
              400 > g
                ? 1
                : 500 > g
                  ? 2
                  : 526 > g
                    ? 3
                    : 533 > g
                      ? 4
                      : 534 > g
                        ? "4+"
                        : 535 > g
                          ? 5
                          : 537 > g
                            ? 6
                            : 538 > g
                              ? 7
                              : 601 > g
                                ? 8
                                : "8")));
      C &&
        (C[1] +=
          " " + (g += "number" == typeof g ? ".x" : /[.+]/.test(g) ? "" : "+"));
      "Safari" == q && (!u || 45 < parseInt(u)) && (u = g);
    }
    "Opera" == q && (g = /\bzbov|zvav$/.exec(m))
      ? ((q += " "),
        n.unshift("desktop mode"),
        "zvav" == g ? ((q += "Mini"), (u = null)) : (q += "Mobile"),
        (m = m.replace(RegExp(" *" + g + "$"), "")))
      : "Safari" == q &&
      /\bChrome\b/.exec(C && C[1]) &&
      (n.unshift("desktop mode"),
        (q = "Chrome Mobile"),
        (u = null),
        /\bOS X\b/.test(m) ? ((N = "Apple"), (m = "iOS 4.3+")) : (m = null));
    u &&
      0 == u.indexOf((g = /[\d.]+$/.exec(m))) &&
      -1 < a.indexOf("/" + g + "-") &&
      (m = String(m.replace(g, "")).replace(/^ +| +$/g, ""));
    C &&
      !/\b(?:Avant|Nook)\b/.test(q) &&
      (/Browser|Lunascape|Maxthon/.test(q) ||
        ("Safari" != q && /^iOS/.test(m) && /\bSafari\b/.test(C[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          q
        ) &&
          C[1])) &&
      (g = C[C.length - 1]) &&
      n.push(g);
    n.length && (n = ["(" + n.join("; ") + ")"]);
    N && A && 0 > A.indexOf(N) && n.push("on " + N);
    A && n.push((/^on /.test(n[n.length - 1]) ? "" : "on ") + A);
    if (m) {
      var y =
        (g = / ([\d.+]+)$/.exec(m)) &&
        "/" == m.charAt(m.length - g[0].length - 1);
      m = {
        architecture: 32,
        family: g && !y ? m.replace(g[0], "") : m,
        version: g ? g[1] : null,
        toString: function () {
          var a = this.version;
          return (
            this.family +
            (a && !y ? " " + a : "") +
            (64 == this.architecture ? " 64-bit" : "")
          );
        },
      };
    }
    (g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(V)) && !/\bi686\b/i.test(V)
      ? (m &&
        ((m.architecture = 64),
          (m.family = m.family.replace(RegExp(" *" + g), ""))),
        q &&
        (/\bWOW64\b/i.test(a) ||
          (T &&
            /\w(?:86|32)$/.test(z.cpuClass || z.platform) &&
            !/\bWin64; x64\b/i.test(a))) &&
        n.unshift("32-bit"))
      : m &&
      /^OS X/.test(m.family) &&
      "Chrome" == q &&
      39 <= parseFloat(u) &&
      (m.architecture = 64);
    a || (a = null);
    l = {};
    l.description = a;
    l.layout = C && C[0];
    l.manufacturer = N;
    l.name = q;
    l.prerelease = W;
    l.product = A;
    l.ua = a;
    l.version = q && u;
    l.os = m || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    l.parse = t;
    l.toString = function () {
      return this.description || "";
    };
    l.version && n.unshift(u);
    l.name && n.unshift(q);
    m &&
      q &&
      (m != String(m).split(" ")[0] || (m != q.split(" ")[0] && !A)) &&
      n.push(A ? "(" + m + ")" : "on " + m);
    n.length && (l.description = n.join(" "));
    return l;
  }
  var l = { function: !0, object: !0 },
    h = (l[typeof window] && window) || this,
    n = l[typeof exports] && exports;
  l = l[typeof module] && module && !module.nodeType && module;
  var p = n && l && "object" == typeof global && global;
  !p || (p.global !== p && p.window !== p && p.self !== p) || (h = p);
  var z = Math.pow(2, 53) - 1,
    x = /\bOpera/;
  p = Object.prototype;
  var D = p.hasOwnProperty,
    w = p.toString,
    v = t();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((h.platform = v),
      define(function () {
        return v;
      }))
    : n && l
      ? d(v, function (a, b) {
        n[b] = a;
      })
      : (h.platform = v);
}.call(this));
function buildIOSMeta() {
  for (
    var a = [
      {
        name: "viewport",
        content:
          "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
      },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    b = 0;
    b < a.length;
    b++
  ) {
    var c = document.createElement("meta");
    c.name = a[b].name;
    c.content = a[b].content;
    var d = window.document.head.querySelector('meta[name="' + c.name + '"]');
    d && d.parentNode.removeChild(d);
    window.document.head.appendChild(c);
  }
}
function hideIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "none");
  jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
  jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
}
function buildIOSFullscreenPanel() {
  jQuery("body").append(
    '<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>'
  );
}
function showIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "block");
  jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
}
function __iosResize() {
  window.scrollTo(0, 0);
  console.log(window.devicePixelRatio);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  if ("iPhone" === platform.product)
    switch (window.devicePixelRatio) {
      case 2:
        switch (window.innerWidth) {
          case 568:
            320 !== window.innerHeight &&
              jQuery(".xxx-game-iframe-full").addClass(
                "xxx-game-iframe-iphone-se"
              );
            break;
          case 667:
            375 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 808:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          default:
            hideIOSFullscreenPanel();
        }
        break;
      case 3:
        switch (window.innerWidth) {
          case 736:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 724:
            375 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 808:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          default:
            hideIOSFullscreenPanel();
        }
        break;
      default:
        hideIOSFullscreenPanel();
    }
}
function iosResize() {
  __iosResize();
  setTimeout(function () {
    __iosResize();
  }, 500);
}
function iosInIframe() {
  try {
    return window.self !== window.top;
  } catch (a) {
    return !0;
  }
}
function isIOSLessThen13() {
  var a = platform.os,
    b = a.family.toLowerCase();
  a = parseFloat(a.version);
  return "ios" === b && 13 > a ? !0 : !1;
}
$(document).ready(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" === platform.name.toLowerCase() &&
    isIOSLessThen13() &&
    !iosInIframe() &&
    (buildIOSFullscreenPanel(), buildIOSMeta());
});
jQuery(window).resize(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" === platform.name.toLowerCase() &&
    isIOSLessThen13() &&
    !iosInIframe() &&
    iosResize();
});
var s_iOffsetX,
  s_iOffsetY,
  s_iScaleFactor = 1,
  s_bIsIphone = !1;
(function (a) {
  (jQuery.browser = jQuery.browser || {}).mobile =
    /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    );
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
  sizeHandler();
});
function trace(a) {
  console.log(a);
}
function getSize(a) {
  var b = a.toLowerCase(),
    c = window.document,
    d = c.documentElement;
  if (void 0 === window["inner" + a]) a = d["client" + a];
  else if (window["inner" + a] != d["client" + a]) {
    var e = c.createElement("body");
    e.id = "vpw-test-b";
    e.style.cssText = "overflow:scroll";
    var f = c.createElement("div");
    f.id = "vpw-test-d";
    f.style.cssText = "position:absolute;top:-1000px";
    f.innerHTML =
      "<style>@media(" +
      b +
      ":" +
      d["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      b +
      ":7px!important}}</style>";
    e.appendChild(f);
    d.insertBefore(e, c.head);
    a = 7 == f["offset" + a] ? d["client" + a] : window["inner" + a];
    d.removeChild(e);
  } else a = window["inner" + a];
  return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function isIpad() {
  var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
  return !a &&
    navigator.userAgent.match(/Mac/) &&
    navigator.maxTouchPoints &&
    2 < navigator.maxTouchPoints
    ? !0
    : a;
}
function isMobile() {
  return isIpad() ? !0 : jQuery.browser.mobile;
}
function isIOS() {
  var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(
    ";"
  );
  for (
    -1 !== navigator.userAgent.toLowerCase().indexOf("iphone") &&
    (s_bIsIphone = !0);
    a.length;

  )
    if (navigator.platform === a.pop()) return !0;
  return (s_bIsIphone = !1);
}
function isChrome() {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
}
function getIOSWindowHeight() {
  return (
    (document.documentElement.clientWidth / window.innerWidth) *
    window.innerHeight
  );
}
function getHeightOfIOSToolbars() {
  var a =
    (0 === window.orientation ? screen.height : screen.width) -
    getIOSWindowHeight();
  return 1 < a ? a : 0;
}
function sizeHandler() {
  window.scrollTo(0, 1);
  if ($("#canvas")) {
    var a =
      "safari" === platform.name.toLowerCase()
        ? getIOSWindowHeight()
        : getSize("Height");
    var b = getSize("Width");
    _checkOrientation(b, a);
    var c = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
      d = Math.round(CANVAS_WIDTH * c);
    c = Math.round(CANVAS_HEIGHT * c);
    if (c < a) {
      var e = a - c;
      c += e;
      d += (CANVAS_WIDTH / CANVAS_HEIGHT) * e;
    } else
      d < b &&
        ((e = b - d), (d += e), (c += (CANVAS_HEIGHT / CANVAS_WIDTH) * e));
    e = a / 2 - c / 2;
    var f = b / 2 - d / 2,
      k = CANVAS_WIDTH / d;
    if (f * k < -EDGEBOARD_X || e * k < -EDGEBOARD_Y)
      (c = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (d = Math.round(CANVAS_WIDTH * c)),
        (c = Math.round(CANVAS_HEIGHT * c)),
        (e = (a - c) / 2),
        (f = (b - d) / 2),
        (k = CANVAS_WIDTH / d);
    s_iOffsetX = -1 * f * k;
    s_iOffsetY = -1 * e * k;
    0 <= e && (s_iOffsetY = 0);
    0 <= f && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * d),
        (s_oStage.canvas.height = 2 * c),
        (canvas.style.width = d + "px"),
        (canvas.style.height = c + "px"),
        (b = Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT)),
        (s_iScaleFactor = 2 * b),
        (s_oStage.scaleX = s_oStage.scaleY = 2 * b))
      : s_bMobile || isChrome()
        ? ($("#canvas").css("width", d + "px"),
          $("#canvas").css("height", c + "px"))
        : ((s_oStage.canvas.width = d),
          (s_oStage.canvas.height = c),
          (s_iScaleFactor = Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT)),
          (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > e || (e = (a - c) / 2);
    $("#canvas").css("top", e + "px");
    $("#canvas").css("left", f + "px");
    fullscreenHandler();
  }
}
function _checkOrientation(a, b) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > b
      ? "landscape" === $(".orientation-msg-container").attr("data-orientation")
        ? ($(".orientation-msg-container").css("display", "none"),
          s_oMain.startUpdate())
        : ($(".orientation-msg-container").css("display", "block"),
          s_oMain.stopUpdate())
      : "portrait" === $(".orientation-msg-container").attr("data-orientation")
        ? ($(".orientation-msg-container").css("display", "none"),
          s_oMain.startUpdate())
        : ($(".orientation-msg-container").css("display", "block"),
          s_oMain.stopUpdate()));
}
function createBitmap(a, b, c) {
  var d = new createjs.Bitmap(a),
    e = new createjs.Shape();
  b && c
    ? e.graphics.beginFill("#fff").drawRect(0, 0, b, c)
    : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  d.hitArea = e;
  return d;
}
function createSprite(a, b, c, d, e, f) {
  a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
  b = new createjs.Shape();
  b.graphics.beginFill("#000000").drawRect(-c, -d, e, f);
  a.hitArea = b;
  return a;
}
function randomFloatBetween(a, b, c) {
  "undefined" === typeof c && (c = 2);
  return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(c));
}
function shuffle(a) {
  for (var b = a.length, c, d; 0 !== b;)
    (d = Math.floor(Math.random() * b)),
      --b,
      (c = a[b]),
      (a[b] = a[d]),
      (a[d] = c);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var b = Math.floor(a / 60);
  a = parseFloat(a - 60 * b).toFixed(1);
  var c = "";
  c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
  return 10 > a ? c + ("0" + a) : c + a;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var b = Array.prototype.slice.call(arguments);
  return a.sort(function (a, d) {
    for (var c = b.slice(), f = c.shift(); a[f] == d[f] && c.length;)
      f = c.shift();
    return a[f] == d[f] ? 0 : a[f] > d[f] ? 1 : -1;
  });
};
function roundDecimal(a, b) {
  var c = Math.pow(10, b);
  return Math.round(c * a) / c;
}
function tweenVectors(a, b, c, d) {
  d.set(
    a.getX() + c * (b.getX() - a.getX()),
    a.getY() + c * (b.getY() - a.getY())
  );
  return d;
}
function NoClickDelay(a) {
  this.element = a;
  window.Touch && this.element.addEventListener("touchstart", this, !1);
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
        this.onTouchEnd(a);
    }
  },
  onTouchStart: function (a) {
    a.preventDefault();
    this.moved = !1;
    this.element.addEventListener("touchmove", this, !1);
    this.element.addEventListener("touchend", this, !1);
  },
  onTouchMove: function (a) {
    this.moved = !0;
  },
  onTouchEnd: function (a) {
    this.element.removeEventListener("touchmove", this, !1);
    this.element.removeEventListener("touchend", this, !1);
    if (!this.moved) {
      a = document.elementFromPoint(
        a.changedTouches[0].clientX,
        a.changedTouches[0].clientY
      );
      3 === a.nodeType && (a = a.parentNode);
      var b = document.createEvent("MouseEvents");
      b.initEvent("click", !0, !0);
      a.dispatchEvent(b);
    }
  },
};
function playSound(a, b, c) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(b),
      s_aSounds[a].loop(c),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, b) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(b);
}
function setMute(a, b) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(b);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var b = window.location.search.substring(1).split("&"), c = 0;
    c < b.length;
    c++
  ) {
    var d = b[c].split("=");
    if (d[0] == a) return d[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    screenfull.isEnabled &&
    ((s_bFullscreen = screenfull.isFullscreen),
      null !== s_oInterface && s_oInterface.resetFullscreenBut(),
      null !== s_oMenu && s_oMenu.resetFullscreenBut());
}
if (screenfull.isEnabled)
  screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
  });
function CSpriteLibrary() {
  var a = {},
    b,
    c,
    d,
    e,
    f,
    k;
  this.init = function (a, t, l) {
    b = {};
    d = c = 0;
    e = a;
    f = t;
    k = l;
  };
  this.addSprite = function (d, e) {
    if (!a.hasOwnProperty(d)) {
      var f = new Image();
      a[d] = b[d] = { szPath: e, oSprite: f, bLoaded: !1 };
      c++;
    }
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    c = 0;
    f.call(k);
  };
  this._onSpriteLoaded = function () {
    e.call(k);
    ++d === c && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var a in b)
      (b[a].oSprite.oSpriteLibrary = this),
        (b[a].oSprite.szKey = a),
        (b[a].oSprite.onload = function () {
          this.oSpriteLibrary.setLoaded(this.szKey);
          this.oSpriteLibrary._onSpriteLoaded(this.szKey);
        }),
        (b[a].oSprite.onerror = function (a) {
          var c = a.currentTarget;
          setTimeout(function () {
            b[c.szKey].oSprite.src = b[c.szKey].szPath;
          }, 500);
        }),
        (b[a].oSprite.src = b[a].szPath);
  };
  this.setLoaded = function (b) {
    a[b].bLoaded = !0;
  };
  this.isLoaded = function (b) {
    return a[b].bLoaded;
  };
  this.getNumSprites = function () {
    return c;
  };
}
var CANVAS_WIDTH = 1700,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 170,
  EDGEBOARD_Y = 0,
  FPS = 30,
  FPS_TIME = 1e3 / FPS,
  DISABLE_SOUND_MOBILE = !1,
  FONT_GAME_1 = "arialbold",
  FONT_GAME_2 = "Digital-7",
  FONT_GAME_3 = "ariallight",
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  STATE_GAME_WAITING_FOR_BET = 0,
  STATE_GAME_DEALING = 1,
  STATE_GAME_PLAYER_TURN = 2,
  STATE_GAME_SPLIT_HAND = 3,
  STATE_GAME_SHOWDOWN = 4,
  STATE_GAME_DISTRIBUTE_FICHES = 5,
  STATE_GAME_SHOW_WINNER = 6,
  STATE_CARD_DEALING = 0,
  STATE_CARD_WAIT_USER = 1,
  STATE_CARD_SPLITTING = 2,
  STATE_CARD_REMOVING = 3,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  ASSIGN_FICHES = "ASSIGN_FICHES",
  END_HAND = "END_HAND",
  ON_CARD_SHOWN = "ON_CARD_SHOWN",
  ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
  ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
  SPLIT_CARD_END_ANIM = "SPLIT_CARD_END_ANIM",
  NUM_FICHES = 5,
  CARD_WIDTH = 66,
  CARD_HEIGHT = 102,
  MIN_BET,
  MAX_BET,
  TOTAL_MONEY,
  FICHE_WIDTH,
  WIN_OCCURRENCE,
  TIE_OCCURRENCE,
  LOSE_OCCURRENCE,
  COLOR_FICHES = "#000 #000 #000 #000 #000 #000".split(" "),
  CHIP_VALUES,
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 250,
  TIME_CARD_REMOVE = 1e3,
  TIME_CARD_SPLIT = 500,
  TIME_SHOW_FINAL_CARDS = 4e3,
  TIME_END_HAND,
  BET_TIME = 1e4,
  AD_SHOW_COUNTER,
  NUM_DECKS = 4,
  PAYOUT_MULT,
  ROYAL_FLUSH = 0,
  STRAIGHT_FLUSH = 1,
  FOUR_OF_A_KIND = 2,
  FULL_HOUSE = 3,
  FLUSH = 4,
  STRAIGHT = 5,
  THREE_OF_A_KIND = 6,
  TWO_PAIR = 7,
  ONE_PAIR = 8,
  HIGH_CARD = 9,
  NO_HAND = 10,
  CARD_TWO = 2,
  CARD_THREE = 3,
  CARD_FOUR = 4,
  CARD_FIVE = 5,
  CARD_SIX = 6,
  CARD_SEVEN = 7,
  CARD_EIGHT = 8,
  CARD_NINE = 9,
  CARD_TEN = 10,
  CARD_JACK = 11,
  CARD_QUEEN = 12,
  CARD_KING = 13,
  CARD_ACE = 14,
  CARD_JOKER = 15,
  POS_BET,
  MULTIPLIERS = [],
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS,
  TEXT_DEAL = "DEAL",
  TEXT_MIN_BET = "MIN BET",
  TEXT_MAX_BET = "MAX BET",
  TEXT_RECHARGE = "RECHARGE",
  TEXT_EXIT = "EXIT",
  TEXT_MONEY = "MONEY",
  TEXT_CURRENCY = "$",
  TEXT_FOLD = "FOLD",
  TEXT_HIGH_HAND = "HIGH HAND",
  TEXT_LOW_HAND = "LOW HAND",
  TEXT_HOUSE_WAY = "HOUSE WAY",
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET",
  TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!",
  TEXT_DISPLAY_MSG_STANDOFF = "PUSH",
  TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS",
  TEXT_DISPLAY_MSG_USER_TURN =
    "SELECT 5 CARDS FOR HIGH HAND OR USE AUTOMATIC HOUSE WAY!",
  TEXT_DISPLAY_MSG_SHOWDOWN = "SHOWDOWN!",
  TEXT_DISPLAY_MSG_DEALING = "DEALING...",
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
  TEXT_HAND_WON_PLAYER = "HAND WON BY THE PLAYER",
  TEXT_HAND_WON_DEALER = "HAND WON BY THE DEALER",
  TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!",
  TEXT_ERROR_MAX_BET = "YOUR BET IS HIGHER THAN MAXIMUM BET!!",
  TEXT_ERROR_BIGGER_LOW_HAND =
    "ILLEGAL MOVE. YOUR LOW HAND CANNOT BE BETTER THAN YOUR HIGH HAND!!",
  TEXT_EVALUATOR = "ROYAL FLUSH;STRAIGHT FLUSH;FOUR OF A KIND;FULL HOUSE;FLUSH;STRAIGHT;THREE OF A KIND;TWO PAIR;ONE PAIR;HIGH CARD;NO HAND".split(
    ";"
  ),
  TEXT_SHARE_IMAGE = "200x200.jpg",
  TEXT_SHARE_TITLE = "Congratulations!",
  TEXT_SHARE_MSG1 = "You collected <strong>",
  TEXT_SHARE_MSG2 =
    " points</strong>!<br><br>Share your score with your friends!",
  TEXT_SHARE_SHARE1 = "My score is ",
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CPreloader() {
  var a, b, c, d, e, f, k, r, t, l;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    l = new createjs.Container();
    s_oStage.addChild(l);
  };
  this.unload = function () {
    l.removeAllChildren();
    t.unload();
  };
  this._onImagesLoaded = function () { };
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var h = new createjs.Shape();
    h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    l.addChild(h);
    h = s_oSpriteLibrary.getSprite("200x200");
    k = createBitmap(h);
    k.regX = 0.5 * h.width;
    k.regY = 0.5 * h.height;
    k.x = CANVAS_WIDTH / 2;
    k.y = CANVAS_HEIGHT / 2 - 180;
    l.addChild(k);
    r = new createjs.Shape();
    r.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(k.x - 100, k.y - 100, 200, 200, 10);
    l.addChild(r);
    k.mask = r;
    h = s_oSpriteLibrary.getSprite("progress_bar");
    d = createBitmap(h);
    d.x = CANVAS_WIDTH / 2 - h.width / 2;
    d.y = CANVAS_HEIGHT / 2 + 50;
    l.addChild(d);
    a = h.width;
    b = h.height;
    e = new createjs.Shape();
    e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, b);
    l.addChild(e);
    d.mask = e;
    c = new createjs.Text("", "40px " + FONT_GAME_1, "#fff");
    c.x = CANVAS_WIDTH / 2;
    c.y = CANVAS_HEIGHT / 2 + 110;
    c.textBaseline = "alphabetic";
    c.textAlign = "center";
    l.addChild(c);
    h = s_oSpriteLibrary.getSprite("but_start");
    t = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      h,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      "bold 50",
      l
    );
    t.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    t.setVisible(!1);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    l.addChild(f);
    createjs.Tween.get(f)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(f);
        l.removeChild(f);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (f) {
    c.text = f + "%";
    100 === f &&
      (s_oMain._onRemovePreloader(), (c.visible = !1), (d.visible = !1));
    e.graphics.clear();
    f = Math.floor((f * a) / 100);
    e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, f, b);
  };
  this._init();
}
function CMain(a) {
  var b,
    c = 0,
    d = 0,
    e = STATE_LOADING,
    f,
    k;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage);
    s_bMobile = isMobile();
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.setFPS(FPS);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    seekAndDestroy()
      ? (f = new CPreloader())
      : (window.location.href = "http://www.codethislab.com/contact-us.html");
    s_oGameSettings = new CGameSettings();
    b = !0;
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
  };
  this.soundLoaded = function () {
    c++;
    f.refreshLoader(Math.floor((c / d) * 100));
  };
  this._initSounds = function () {
    Howler.mute(!s_bAudioActive);
    s_aSoundsInfo = [];
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "card",
      loop: !1,
      volume: 1,
      ingamename: "card",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "press_but",
      loop: !1,
      volume: 1,
      ingamename: "press_but",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "chip",
      loop: !1,
      volume: 1,
      ingamename: "chip",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "fiche_collect",
      loop: !1,
      volume: 1,
      ingamename: "fiche_collect",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "win",
      loop: !1,
      volume: 1,
      ingamename: "win",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "lose",
      loop: !1,
      volume: 1,
      ingamename: "lose",
    });
    d += s_aSoundsInfo.length;
    s_aSounds = [];
    for (var a = 0; a < s_aSoundsInfo.length; a++)
      this.tryToLoadSound(s_aSoundsInfo[a], !1);
  };
  this.tryToLoadSound = function (a, b) {
    setTimeout(
      function () {
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
                break;
              }
          },
          onplayerror: function (a) {
            for (var b = 0; b < s_aSoundsInfo.length; b++)
              if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                s_aSounds[s_aSoundsInfo[b].ingamename].once(
                  "unlock",
                  function () {
                    s_aSounds[s_aSoundsInfo[b].ingamename].play();
                  }
                );
                break;
              }
          },
        });
      },
      b ? 200 : 0
    );
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
    s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
    s_oSpriteLibrary.addSprite(
      "card_spritesheet",
      "./sprites/card_spritesheet1.png"
    );
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite(
      "fiche_highlight",
      "./sprites/fiche_highlight.png"
    );
    s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
    s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
    s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
    s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
    s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png");
    s_oSpriteLibrary.addSprite("bet_ante", "./sprites/bet_ante.png");
    s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png");
    s_oSpriteLibrary.addSprite("but_split", "./sprites/but_split.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    d += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    c++;
    f.refreshLoader(Math.floor((c / d) * 100));
  };
  this._onAllImagesLoaded = function () { };
  this._onRemovePreloader = function () {
    f.unload();
    this.gotoMenu();
  };
  this.gotoMenu = function () {
    new CMenu();
    e = STATE_MENU;
  };
  this.gotoGame = function () {
    k = new CGame(r);
    e = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    e = STATE_HELP;
  };
  this.stopUpdate = function () {
    b = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    b = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (b) {
      var c = new Date().getTime();
      s_iTimeElaps = c - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = c;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      e === STATE_GAME && k.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var r = a;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
  SHOW_CREDITS = r.show_credits;
  ENABLE_FULLSCREEN = a.fullscreen;
  s_bAudioActive = a.audio_enable_on_startup;
  this.initContainer();
}
var s_bMobile,
  s_bAudioActive = !0,
  s_bFullscreen = !1,
  s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary,
  s_oGameSettings,
  s_aSoundsInfo;
function CTextButton(a, b, c, d, e, f, k, r) {
  var t, l, h, n, p, z, x, D, w, v, I, S;
  this._init = function (a, b, c, d, e, f, k) {
    t = !1;
    l = 1;
    p = [];
    z = [];
    S = createBitmap(c);
    h = c.width;
    n = c.height;
    v = new createjs.Container();
    v.x = a;
    v.y = b;
    v.regX = c.width / 2;
    v.regY = c.height / 2;
    s_bMobile || (v.cursor = "pointer");
    v.addChild(S, I);
    r.addChild(v);
    I = new CTLText(
      v,
      10,
      6,
      c.width - 20,
      c.height - 10,
      k,
      "center",
      f,
      e,
      1,
      0,
      0,
      d,
      !0,
      !0,
      !1,
      !1
    );
    this._initListener();
  };
  this.unload = function () {
    v.off("mousedown", x);
    v.off("pressup", D);
    r.removeChild(v);
  };
  this.setVisible = function (a) {
    v.visible = a;
  };
  this.setAlign = function (a) {
    I.textAlign = a;
  };
  this.setTextX = function (a) {
    I.x = a;
  };
  this.setScale = function (a) {
    l = v.scaleX = v.scaleY = a;
  };
  this.enable = function () {
    t = !1;
    v.filters = [];
    v.cache(0, 0, h, n);
  };
  this.disable = function () {
    t = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    v.filters = [new createjs.ColorMatrixFilter(a)];
    v.cache(0, 0, h, n);
  };
  this._initListener = function () {
    x = v.on("mousedown", this.buttonDown);
    D = v.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    p[a] = b;
    z[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    p[a] = b;
    z[a] = c;
    w = d;
  };
  this.buttonRelease = function () {
    t ||
      (playSound("press_but", 1, !1),
        (v.scaleX = l),
        (v.scaleY = l),
        p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(z[ON_MOUSE_UP], w));
  };
  this.buttonDown = function () {
    t ||
      ((v.scaleX = 0.9 * l),
        (v.scaleY = 0.9 * l),
        p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(z[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    v.x = a;
    v.y = b;
  };
  this.tweenPosition = function (a, b, c, d, e, f, h) {
    createjs.Tween.get(v)
      .wait(d)
      .to({ x: a, y: b }, c, e)
      .call(function () {
        void 0 !== f && f.call(h);
      });
  };
  this.changeText = function (a) {
    I.refreshText(a);
  };
  this.setX = function (a) {
    v.x = a;
  };
  this.setY = function (a) {
    v.y = a;
  };
  this.getButtonImage = function () {
    return v;
  };
  this.getX = function () {
    return v.x;
  };
  this.getY = function () {
    return v.y;
  };
  this.getSprite = function () {
    return v;
  };
  this.getScale = function () {
    return v.scaleX;
  };
  this._init(a, b, c, d, e, f, k);
}
function CGfxButton(a, b, c, d) {
  var e,
    f,
    k,
    r,
    t,
    l = [],
    h,
    n,
    p;
  this._init = function (a, b, c) {
    e = !1;
    r = [];
    t = [];
    f = c.width;
    k = c.height;
    p = createBitmap(c);
    p.x = a;
    p.y = b;
    p.regX = c.width / 2;
    p.regY = c.height / 2;
    p.cursor = "pointer";
    z.addChild(p);
    this._initListener();
  };
  this.unload = function () {
    p.off("mousedown", h);
    p.off("pressup", n);
    z.removeChild(p);
  };
  this.setVisible = function (a) {
    p.visible = a;
  };
  this._initListener = function () {
    h = p.on("mousedown", this.buttonDown);
    n = p.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    r[a] = b;
    t[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    r[a] = b;
    t[a] = c;
    l = d;
  };
  this.buttonRelease = function () {
    e ||
      (playSound("press_but", 1, !1),
        r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(t[ON_MOUSE_UP], l));
  };
  this.buttonDown = function () {
    e || (r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], l));
  };
  this.setPosition = function (a, b) {
    p.x = a;
    p.y = b;
  };
  this.setX = function (a) {
    p.x = a;
  };
  this.setY = function (a) {
    p.y = a;
  };
  this.enable = function () {
    e = !1;
    p.filters = [];
    p.cache(0, 0, f, k);
  };
  this.disable = function () {
    e = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    p.filters = [new createjs.ColorMatrixFilter(a)];
    p.cache(0, 0, f, k);
  };
  this.getButtonImage = function () {
    return p;
  };
  this.getX = function () {
    return p.x;
  };
  this.getY = function () {
    return p.y;
  };
  var z = d;
  this._init(a, b, c);
  return this;
}
function CToggle(a, b, c, d, e) {
  var f,
    k,
    r,
    t,
    l = [],
    h,
    n,
    p;
  this._init = function (a, b, c, d, e) {
    r = [];
    t = [];
    var h = new createjs.SpriteSheet({
      images: [c],
      frames: {
        width: c.width / 2,
        height: c.height,
        regX: c.width / 2 / 2,
        regY: c.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    f = d;
    k = e;
    p = createSprite(
      h,
      "state_" + f,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    p.x = a;
    p.y = b;
    p.cursor = "pointer";
    p.stop();
    s_oStage.addChild(p);
    this._initListener();
  };
  this.unload = function () {
    p.off("mousedown", h);
    p.off("pressup", n);
    s_oStage.removeChild(p);
  };
  this._initListener = function () {
    h = p.on("mousedown", this.buttonDown);
    n = p.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    r[a] = b;
    t[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    r[a] = b;
    t[a] = c;
    l = d;
  };
  this.setActive = function (a) {
    f = a;
    p.gotoAndStop("state_" + f);
  };
  this.buttonRelease = function () {
    p.scaleX = 1;
    p.scaleY = 1;
    playSound("press_but", 1, !1);
    k && ((f = !f), p.gotoAndStop("state_" + f));
    r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(t[ON_MOUSE_UP], l);
  };
  this.buttonDown = function () {
    p.scaleX = 0.9;
    p.scaleY = 0.9;
    r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], l);
  };
  this.setPosition = function (a, b) {
    p.x = a;
    p.y = b;
  };
  this.setVisible = function (a) {
    p.visible = a;
  };
  this.getY = function () {
    return p.y;
  };
  this._init(a, b, c, d, e);
}
function CMenu() {
  var a,
    b,
    c,
    d,
    e,
    f,
    k,
    r,
    t,
    l,
    h,
    n,
    p = null,
    z = null;
  this._init = function () {
    k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(k);
    var x = s_oSpriteLibrary.getSprite("but_menu_bg");
    r = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, x, s_oStage);
    r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (x = s_oSpriteLibrary.getSprite("audio_icon")),
        (e = CANVAS_WIDTH - x.width / 4 - 10),
        (f = x.height / 2 + 10),
        (l = new CToggle(e, f, x, s_bAudioActive, !0)),
        l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    SHOW_CREDITS
      ? ((x = s_oSpriteLibrary.getSprite("but_credits")),
        (a = x.height / 2 + 10),
        (b = x.height / 2 + 10),
        (t = new CGfxButton(a, b, x, s_oStage)),
        t.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this),
        (c = a + x.width + 10),
        (d = b))
      : ((c = x.height / 2 + 10), (d = x.height / 2 + 10));
    x = window.document;
    var D = x.documentElement;
    p =
      D.requestFullscreen ||
      D.mozRequestFullScreen ||
      D.webkitRequestFullScreen ||
      D.msRequestFullscreen;
    z =
      x.exitFullscreen ||
      x.mozCancelFullScreen ||
      x.webkitExitFullscreen ||
      x.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (p = !1);
    p &&
      screenfull.isEnabled &&
      ((x = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (n = new CToggle(c, d, x, s_bFullscreen, !0)),
        n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    h = new createjs.Shape();
    h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(h);
    createjs.Tween.get(h)
      .to({ alpha: 0 }, 400)
      .call(function () {
        h.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (h, k) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      l.setPosition(e - h, k + f);
    p && screenfull.isEnabled && n.setPosition(c + h, d + k);
    SHOW_CREDITS && t.setPosition(a + h, b + k);
  };
  this.unload = function () {
    r.unload();
    r = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), (l = null);
    SHOW_CREDITS && t.unload();
    p && screenfull.isEnabled && n.unload();
    s_oStage.removeAllChildren();
    s_oMenu = null;
  };
  this._onButPlayRelease = function () {
    this.unload();
    s_oMain.gotoGame();
    $(s_oMain).trigger("start_session");
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this._onButCreditsRelease = function () {
    new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    p && screenfull.isEnabled && n.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? z.call(window.document)
      : p.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var b = !1,
    c,
    d,
    e,
    f,
    k,
    r,
    t,
    l,
    h,
    n,
    p,
    z,
    x,
    D,
    w,
    v,
    I,
    S,
    F,
    G,
    J,
    O,
    u,
    K,
    R,
    P,
    H,
    L,
    B,
    Z,
    E,
    M,
    Q,
    g,
    V,
    W,
    T,
    C,
    q,
    A,
    N,
    m,
    y,
    X,
    oldCredit,
    aa;
  this._init = function () {
    e = MAX_BET;
    f = -1;
    k = n = d = 0;
    s_oTweenController = new CTweenController();
    N = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(N);
    m = new CInterface(TOTAL_MONEY);
    C = new createjs.Container();
    s_oStage.addChild(C);
    q = new CHandEvaluator();
    y = new CSeat();
    y.setCredit(TOTAL_MONEY);
    oldCredit = y.getCredit();
    A = new CHelpCursor(
      620,
      390,
      s_oSpriteLibrary.getSprite("help_cursor"),
      s_oStage
    );
    this.reset(!1);
    E = new CVector2();
    E.set(1214, 228);
    M = new CVector2(CANVAS_WIDTH / 2 - 115, 250);
    W = new CVector2(M.getX() - 85, M.getY());
    T = new CVector2(M.getX() + 235, M.getY());
    Q = new CVector2();
    Q.set(418, 820);
    g = new CVector2();
    g.set(0, -CANVAS_HEIGHT);
    V = new CVector2(454, 230);
    aa = new CGameOver();
    y.getCredit() < s_oGameSettings.getFichesValueAt(0)
      ? (this._gameOver(), this.changeState(-1))
      : (b = !0);
    Z = new CVector2(E.getX(), E.getY());
    X = new CMsgBox();
    this.changeState(STATE_GAME_WAITING_FOR_BET);
  };
  this.unload = function () {
    b = !1;
    for (var a = 0; a < K.length; a++) K[a].unload();
    m.unload();
    aa.unload();
    X.unload();
    s_oStage.removeAllChildren();
  };
  this.reset = function (a) {
    h = t = k = d = 0;
    y.reset();
    K = [];
    K.splice(0);
    R = [];
    H = [];
    m.reset();
    m.enableBetFiches(a);
    this.shuffleCard();
  };
  this.shuffleCard = function () {
    P = [];
    P = s_oGameSettings.getShuffledCardDeck();
  };
  this.changeState = function (a) {
    f = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        m.displayMsg(
          TEXT_DISPLAY_MSG_WAITING_BET,
          TEXT_MIN_BET +
          ": " +
          MIN_BET +
          TEXT_CURRENCY +
          "\n" +
          TEXT_MAX_BET +
          ": " +
          MAX_BET +
          TEXT_CURRENCY
        );
        break;
      case STATE_GAME_DEALING:
        m.disableButtons();
        m.displayMsg(TEXT_DISPLAY_MSG_DEALING, " ");
        this._dealing();
        break;
      case STATE_GAME_SHOWDOWN:
        this._showHandEvaluation();
    }
  };
  this.setMoney = function (a) {
    y.setCredit(a);
    oldCredit = y.getCredit();
    m.refreshCredit(y.getCredit());
    aa.hide();
  };
  this.cardFromDealerArrived = function (a, b, c) {
    !1 === b && a.showCard();
    14 > c && s_oGame._dealing();
  };
  this._cardSplitted = function (a, b) {
    12 === b
      ? ((l = 0), R[0].showCard())
      : 13 === b && s_oGame.changeState(STATE_GAME_SHOWDOWN);
  };
  this._showHandEvaluation = function () {
    m.refreshHandValueText(
      TEXT_EVALUATOR[p],
      TEXT_EVALUATOR[x],
      TEXT_EVALUATOR[z],
      TEXT_EVALUATOR[v]
    );
    this._showWin();
  };
  this._showWin = function () {
    var a = 0;
    "player" === I
      ? (playSound("win", 1, !1),
        c
          ? ((a = 2 * y.getBetAnte() - 0.05 * y.getBetAnte()),
            this._playerWin(a))
          : ((a = y.getBetAnte()), this._standOff(a)))
      : "dealer" === I &&
      (playSound("lose", 1, !1),
        c ? ((a = y.getBetAnte()), this._standOff(a)) : this._playerLose());
    this.changeState(STATE_GAME_DISTRIBUTE_FICHES);
    m.refreshCredit(y.getCredit());
    let winAmount = y.getCredit() - oldCredit + y.getBetAnte();
    $(s_oMain).trigger("hand_finished", [winAmount]);
    oldCredit = y.getCredit();
    setTimeout(function () {
      y.resetBet();
      s_oGame.changeState(STATE_GAME_WAITING_FOR_BET);
      // m.enableBetFiches(!0);
      s_oGame._onEndHand();
      u = s_oGame.endedHand;
    }, 3 * TIME_CARD_REMOVE);
  };
  this._playerWin = function (a) {
    y.increaseCredit(a);
    Y -= a;
    m.displayMsg(
      TEXT_DISPLAY_MSG_SHOWDOWN,
      TEXT_DISPLAY_MSG_PLAYER_WIN + " " + a + TEXT_CURRENCY
    );
    y.initMovement(0, Q.getX(), Q.getY());
    y.initMovement(1, Q.getX(), Q.getY());
    m.showResultText(TEXT_HAND_WON_PLAYER);
  };
  this._playerLose = function () {
    m.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_LOSE);
    y.initMovement(0, g.getX(), g.getY());
    y.initMovement(1, g.getX(), g.getY());
    m.showResultText(TEXT_HAND_WON_DEALER);
  };
  this._standOff = function (a) {
    y.increaseCredit(a);
    Y -= a;
    m.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_STANDOFF);
    y.initMovement(0, Q.getX(), Q.getY());
    y.initMovement(1, Q.getX(), Q.getY());
    m.showResultText(TEXT_DISPLAY_MSG_STANDOFF);
  };
  this._dealing = function () {
    if (14 > t) {
      var a = new CCard(E.getX(), E.getY(), C);
      if (1 === t % 2) {
        var b = new CVector2(M.getX() + (CARD_WIDTH / 4 + 15) * t - 90, M.getY());
        var c = B.splice(0, 1),
          d = c[0].fotogram,
          e = c[0].rank;
        c = c[0].suit;
        a.setInfo(Z, b, d, e, c, !0, t);
        a.addEventListener(ON_CARD_SHOWN, this._onCardShown);
        R.push(a);
      } else
        (c = L.splice(0, 1)),
          (d = c[0].fotogram),
          (e = c[0].rank),
          (c = c[0].suit),
          a.setInfo(Z, y.getAttachCardOffset(), d, e, c, !1, t),
          y.newCardDealed(),
          H.push(a);
      K.push(a);
      t++;
      a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
      a.addEventListener(SPLIT_CARD_END_ANIM, this._cardSplitted);
      playSound("card", 1, !1);
    } else
      setTimeout(function () {
        s_oGame.changeState(STATE_GAME_PLAYER_TURN);
        m.displayMsg(TEXT_DISPLAY_MSG_USER_TURN, " ");
        m.disableDeal(!0);
      }, 1e3);
  };
  this._onEndHand = function () {
    for (var a = new CVector2(V.getX(), V.getY()), b = 0; b < K.length; b++)
      K[b].initRemoving(a), K[b].hideCard();
    m.clearCardValueText();
    m.clearHandValueText();
    d = 0;
    s_oGame.changeState(STATE_GAME_SHOW_WINNER);
    playSound("fiche_collect", 1, !1);
    n++;
    n === AD_SHOW_COUNTER &&
      ((n = 0), $(s_oMain).trigger("show_interlevel_ad"));
  };
  this._onCardShown = function () {
    if (7 === l) {
      for (
        var a = W.getX(), b = W.getY(), c = R[0].getChildIndex(), d = 0;
        d < O.length;
        d++
      )
        R[O[d].index].initSplit(a, b, c), (a += CARD_WIDTH / 2 + 15), c++;
      a = T.getX();
      b = T.getY();
      for (d = 0; d < G.length; d++)
        R[G[d].index].initSplit(a, b, c), (a += CARD_WIDTH / 2 + 15), c++;
      s_oGame.changeState(STATE_GAME_SPLIT_HAND);
    } else s_oGame._showNextDealerCard();
  };
  this.endedHand = function () { };
  this.setBet = function (a) {
    m.isResultPanelvisible()
      ? (m.disableBetFiches(),
        y.clearBet(),
        (u = this.setBet),
        this._onEndHand())
      : ((a = CHIP_VALUES[a]),
        (d = 0),
        A.hide(),
        y.getBetAnte() + a > e
          ? X.show(TEXT_ERROR_MAX_BET)
          : a > y.getCredit()
            ? m.displayMsg(TEXT_NO_MONEY, " ")
            : (y.decreaseCredit(a),
              (Y += a),
              y.betAnte(a),
              m.enable(!0, !1, !1),
              m.refreshCredit(y.getCredit())));
  };
  this.cardSelected = function (a) {
    a ? h++ : h--;
    5 === h ? m.enableSplit(!0) : m.enableSplit(!1);
  };
  this._gameOver = function () {
    aa.show();
  };
  this.onRebet = function () {
    this.rebet();
  };
  this.onDeal = function () {
    if (y.getBetAnte() < MIN_BET)
      X.show(TEXT_ERROR_MIN_BET), m.enableBetFiches(!1), m.enable(!1, !1, !1);
    else {
      $(s_oMain).trigger("bet_placed", y.getBetAnte());
      C.removeAllChildren();
      r = 2 * y.getBetAnte();
      const random = new Random();
      let randomNumber = random.integer(1, 100);

      $.ajax({
        url: `${home_url}/api/games/manageNormalGame`,
        type: "POST",
        data: {
          gameId: gameid,
          customerId: customerid,
          betAmount: y.getBetAnte(),
          winAmount: y.getBetAnte() * 0.95,
          tie: true,
          randomNumber: randomNumber,
          player
        }
      }).done((data) => {
        if(data.occurrence_type === 'lose') {
          LOSE_OCCURRENCE = data.occurrence
        }
        if (
          randomNumber >
          100 - LOSE_OCCURRENCE
        ) {
          do this._generateRandomCards();
          while ("dealer" !== I || c);
        } else if (randomNumber > 100 - LOSE_OCCURRENCE - WIN_OCCURRENCE) {
          do this._generateRandomCards();
          while ("player" !== I || !c);
        } else {
          do this._generateRandomCards();
          while (("player" === I && c) || ("dealer" === I && !c));
        }
  
        y.setPrevBet();
  
        playSound("card", 1, !1);
        this.changeState(STATE_GAME_DEALING);
      })

    }
  };
  this._generateRandomCards = function () {
    w = D = -1;
    L = this._generateRandCards();
    S = [];
    this._findHandCombinations(L, 5, 0, []);
    var a = this.getBestHand();
    J = a.hand;
    p = a.res;
    a = this._split7Hand(p, J, L);
    F = a.low_hand;
    J = a.high_hand;
    B = this._generateRandCards();
    S = [];
    this._findHandCombinations(B, 5, 0, []);
    a = this.getBestHand();
    O = a.hand;
    z = a.res;
    a = this._split7Hand(z, O, B);
    G = a.low_hand;
    O = a.high_hand;
    c = this._compareLowHands();
    a = this.getWinnerComparingHands(J, O);
    I = a.res;
    p = a.player_value;
    z = a.dealer_value;
  };
  this.getBestHand = function () {
    for (var a = NO_HAND, b = S[0], c = 0; c < S.length; c++) {
      var d = q.evaluate(S[c]);
      d.ret < a && ((a = d.ret), (b = d.sort_hand));
    }
    return { res: a, hand: b };
  };
  this._findHandCombinations = function (a, b, c, d) {
    if (0 === b) {
      a = [];
      for (b = 0; b < d.length; b++) a[b] = d[b];
      S.push(a);
    } else
      for (; c <= a.length - b; c++)
        (d[Math.abs(b - 5)] = a[c]),
          this._findHandCombinations(a, b - 1, c + 1, d);
  };
  this._compareLowHands = function () {
    F = q.sortCards(F);
    G = q.sortCards(G);
    if (F[0].rank === F[1].rank) {
      x = ONE_PAIR;
      D = F[0].rank;
      if (G[0].rank === G[1].rank)
        return (v = ONE_PAIR), F[0].rank > G[0].rank ? !0 : !1;
      v = HIGH_CARD;
      return !0;
    }
    x = HIGH_CARD;
    if (G[0].rank === G[1].rank) return (v = ONE_PAIR), !1;
    v = HIGH_CARD;
    return F[1].rank === G[1].rank ||
      (F[1].rank === CARD_JOKER && G[1].rank === CARD_ACE) ||
      (F[1].rank === CARD_ACE && G[1].rank === CARD_JOKER)
      ? F[0].rank > G[0].rank
        ? !0
        : !1
      : F[1].rank > G[1].rank
        ? !0
        : !1;
  };
  this._split7Hand = function (a, b, c) {
    var d = [],
      e = [];
    switch (a) {
      case ROYAL_FLUSH:
      case STRAIGHT_FLUSH:
      case STRAIGHT:
      case FLUSH:
        for (a = 0; a < b.length; a++) d.push(b[a]);
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      case FOUR_OF_A_KIND:
        7 > b[1].rank
          ? (b[1].rank === b[0].rank
            ? (d.push(b[0]), d.push(b[1]), d.push(b[2]), d.push(b[3]))
            : (d.push(b[1]), d.push(b[2]), d.push(b[3]), d.push(b[4])),
            (b = this.getRemainingCards(c, d, e)),
            (b = q.sortCards(b)),
            e.push(b[b.length - 1]))
          : (b[1].rank === b[0].rank
            ? (d.push(b[0]), d.push(b[1]), e.push(b[2]), e.push(b[3]))
            : (d.push(b[1]), d.push(b[2]), e.push(b[3]), e.push(b[4])),
            (b = this.getRemainingCards(c, d, e)),
            (b = q.sortCards(b)),
            d.push(b[b.length - 1]));
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      case FULL_HOUSE:
        b[2].rank > b[1].rank
          ? (d.push(b[2]),
            d.push(b[3]),
            d.push(b[4]),
            e.push(b[0]),
            e.push(b[1]))
          : (d.push(b[0]),
            d.push(b[1]),
            d.push(b[2]),
            e.push(b[3]),
            e.push(b[4]));
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      case THREE_OF_A_KIND:
        a = [];
        b[2].rank === b[1].rank && b[0].rank === b[1].rank
          ? (a.push(b[0]), a.push(b[1]), a.push(b[2]))
          : b[2].rank === b[1].rank && b[2].rank === b[3].rank
            ? (a.push(b[1]), a.push(b[2]), a.push(b[3]))
            : (a.push(b[2]), a.push(b[3]), a.push(b[4]));
        d.push(a[0]);
        d.push(a[1]);
        d.push(a[2]);
        b = this.getRemainingCards(c, d, e);
        b = q.sortCards(b);
        e.push(b[b.length - 1]);
        e.push(b[b.length - 2]);
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      case TWO_PAIR:
        a = 0;
        var f = [],
          h = [];
        b[0].rank === b[1].rank
          ? (f.push(b[0]), f.push(b[1]))
          : b[1].rank === b[2].rank && (f.push(b[1]), f.push(b[2]));
        b[2].rank === b[3].rank
          ? ((a = b[2].rank), h.push(b[2]), h.push(b[3]))
          : b[3].rank === b[4].rank &&
          ((a = b[3].rank), h.push(b[3]), h.push(b[4]));
        b = this.getRemainingCards(c, d, e);
        b = q.sortCards(b);
        a > CARD_TEN
          ? (e.push(f[0]), e.push(f[1]), d.push(h[0]), d.push(h[1]))
          : a > CARD_SIX && a < CARD_JACK
            ? b[b.length - 1].rank === CARD_ACE ||
              b[b.length - 1].rank === CARD_JOKER
              ? (d.push(f[0]),
                d.push(f[1]),
                d.push(h[0]),
                d.push(h[1]),
                e.push(b[b.length - 1]))
              : (e.push(f[0]), e.push(f[1]), d.push(h[0]), d.push(h[1]))
            : b[b.length - 1].rank > CARD_QUEEN
              ? (d.push(f[0]),
                d.push(f[1]),
                d.push(h[0]),
                d.push(h[1]),
                e.push(b[b.length - 1]))
              : (e.push(f[0]), e.push(f[1]), d.push(h[0]), d.push(h[1]));
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      case ONE_PAIR:
        f = [];
        if (b[4].rank === CARD_JOKER && b[3].rank === CARD_ACE)
          f.push(b[3]), f.push(b[4]);
        else
          for (a = 0; a < b.length - 1; a++)
            if (b[a].rank === b[a + 1].rank) {
              f.push(b[a]);
              f.push(b[a + 1]);
              break;
            }
        d.push(f[0]);
        d.push(f[1]);
        w = f[0].rank;
        b = this.getRemainingCards(c, d, e);
        b = q.sortCards(b);
        e.push(b[b.length - 1]);
        e.push(b[b.length - 2]);
        e = this._fillHandWithRemaining(c, d, e);
        d = e.high;
        e = e.low;
        break;
      default:
        (c = q.sortCards(c)),
          e.push(c[c.length - 2]),
          e.push(c[c.length - 3]),
          (e = this._fillHandWithRemaining(c, d, e)),
          (d = e.high),
          (e = e.low);
    }
    return { high_hand: d, low_hand: e };
  };
  this.getRemainingCards = function (a, b, c) {
    for (var d = [], e = 0; e < a.length; e++) {
      for (var f = !1, h = a[e], g = 0; g < b.length; g++)
        if (b[g].rank === h.rank && b[g].suit === h.suit) {
          f = !0;
          break;
        }
      for (g = 0; g < c.length; g++)
        if (c[g].rank === h.rank && c[g].suit === h.suit) {
          f = !0;
          break;
        }
      f || d.push(h);
    }
    return d;
  };
  this._fillHandWithRemaining = function (a, b, c) {
    a = this.getRemainingCards(a, b, c);
    for (var d = 0; 5 > b.length;) b.push(a[d]), d++;
    for (; 2 > c.length;) c.push(a[d]), d++;
    return { high: b, low: c };
  };
  this.onHouseWay = function () {
    m.disableButtons();
    for (
      var a = y.getHighHandAttach().getX(),
      b = y.getHighHandAttach().getY(),
      c = H[0].getChildIndex(),
      d = 0;
      d < J.length;
      d++
    )
      H[J[d].index].initSplit(a, b, c), (a += CARD_WIDTH / 2 + 15), c++;
    a = y.getLowHandAttach().getX();
    b = y.getLowHandAttach().getY();
    for (d = 0; d < F.length; d++)
      H[F[d].index].initSplit(a, b, c), (a += CARD_WIDTH / 2 + 15), c++;
    this.changeState(STATE_GAME_SPLIT_HAND);
  };
  this.onSplitHand = function () {
    J = [];
    F = [];
    for (var a = 0; a < H.length; a++)
      H[a].isSelected()
        ? J.push({ rank: H[a].getValue(), suit: H[a].getSuit(), index: a })
        : F.push({ rank: H[a].getValue(), suit: H[a].getSuit(), index: a });
    c = this._compareLowHands();
    J = q.sortCards(J);
    a = this.getWinnerComparingHands(J, O);
    I = a.res;
    p = a.player_value;
    z = a.dealer_value;
    if (this._checkIfHighHandBetterThanLow()) this.onHouseWay();
    else X.show(TEXT_ERROR_BIGGER_LOW_HAND);
  };
  this._checkIfHighHandBetterThanLow = function () {
    return x < p || (p === x && D > w) ? !1 : !0;
  };
  this.getWinnerComparingHands = function (a, b) {
    var c = q.evaluate(a).ret,
      d = q.evaluate(b).ret,
      e = "dealer";
    if (c === d) {
      switch (c) {
        case STRAIGHT_FLUSH:
          a[0].rank <= b[0].rank
            ? (e = "dealer")
            : a[0].rank > b[0].rank && (e = "player");
          break;
        case FOUR_OF_A_KIND:
          a[1].rank > b[1].rank
            ? (e = "player")
            : a[1].rank <= b[1].rank && (e = "dealer");
          break;
        case FULL_HOUSE:
          a[3].rank > b[3].rank
            ? (e = "player")
            : a[3].rank <= b[3].rank && (e = "dealer");
          break;
        case FLUSH:
          if (
            ((e = b.length - 1),
              b[e].rank === a[e].rank ||
              (b[e].rank === CARD_JOKER && a[e].rank === CARD_ACE) ||
              (b[e].rank === CARD_ACE && a[e].rank === CARD_JOKER))
          ) {
            do e--;
            while (b[e].rank === a[e].rank && 0 <= e);
            e = b[e].rank < a[e].rank ? "player" : "dealer";
          } else
            e =
              b[b.length - 1].rank > a[a.length - 1].rank ? "dealer" : "player";
          break;
        case STRAIGHT:
          a[3].rank > b[3].rank
            ? (e = "player")
            : a[3].rank <= b[3].rank && (e = "dealer");
          break;
        case THREE_OF_A_KIND:
          a[2].rank > b[2].rank
            ? (e = "player")
            : a[2].rank <= b[2].rank && (e = "dealer");
          break;
        case TWO_PAIR:
          for (var f = 0, h = a.length - 1; 1 < h; h--)
            if (a[h].rank === a[h - 1].rank) {
              f = a[h].rank;
              break;
            }
          var g = 0;
          for (h = b.length - 1; 1 < h; h--)
            if (b[h].rank === b[h - 1].rank) {
              g = b[h].rank;
              break;
            }
          f > g ? (e = "player") : f <= g && (e = "dealer");
          break;
        case ONE_PAIR:
          for (h = f = 0; h < a.length - 1; h++)
            if (
              a[h].rank === a[h + 1].rank ||
              (a[h].rank === CARD_ACE && a[h + 1].rank === CARD_JOKER)
            ) {
              f = a[h].rank;
              break;
            }
          w = f;
          for (h = g = 0; h < b.length - 1; h++)
            if (
              b[h].rank === b[h + 1].rank ||
              (b[h].rank === CARD_ACE && b[h + 1].rank === CARD_JOKER)
            ) {
              g = b[h].rank;
              break;
            }
          e = f > g ? "player" : "dealer";
          break;
        case HIGH_CARD:
          if (
            ((e = b.length - 1),
              b[e].rank === a[e].rank ||
              (b[e].rank === CARD_JOKER && a[e].rank === CARD_ACE) ||
              (b[e].rank === CARD_ACE && a[e].rank === CARD_JOKER))
          ) {
            do e--;
            while (b[e].rank === a[e].rank && 0 <= e);
            e = b[e].rank < a[e].rank ? "player" : "dealer";
          } else
            e =
              b[b.length - 1].rank > a[a.length - 1].rank ? "dealer" : "player";
      }
      return { res: e, player_value: c, dealer_value: d };
    }
    return {
      res: c > d ? "dealer" : "player",
      player_value: c,
      dealer_value: d,
    };
  };
  this._showNextDealerCard = function () {
    R[l].showCard();
    l++;
  };
  this._generateRandCards = function () {
    for (var a = [], b = 0; 7 > b; b++)
      a.push({
        fotogram: P[k].fotogram,
        rank: P[k].rank,
        suit: P[k].suit,
        index: b,
      }),
        k++,
        this._checkDeckLength();
    return a;
  };
  this._checkDeckLength = function () {
    k >= P.length && ((P = s_oGameSettings.getShuffledCardDeck()), (k = 0));
  };
  this.clearBets = function () {
    if (f === STATE_GAME_WAITING_FOR_BET) {
      m.enable(!1, !1, !1);
      var a = y.getStartingBet();
      0 < a &&
        (y.clearBet(),
          y.increaseCredit(a),
          (Y -= a),
          m.refreshCredit(y.getCredit()),
          (a = y.checkIfRebetIsPossible()),
          m.enableBetFiches(a));
    }
  };
  this.rebet = function () {
    this.clearBets();
    var a = y.rebet();
    Y -= a;
    m.enable(!0, !1, !1);
    m.refreshCredit(y.getCredit());
    d = BET_TIME;
  };
  this.onExit = function () {
    this.unload();
    $(s_oMain).trigger("save_score", [y.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", y.getCredit());
    s_oMain.gotoMenu();
  };
  this.getState = function () {
    return f;
  };
  this._updateCards = function () {
    for (var a = 0; a < K.length; a++) K[a].update();
  };
  this._updateFiches = function () {
    y.updateFichesController();
  };
  this._updateShowWinner = function () {
    for (var a = 0; a < K.length; a++) K[a].update();
    d += s_iTimeElaps;
    d > TIME_END_HAND &&
      ((d = 0),
        (a = y.checkIfRebetIsPossible()),
        this.reset(a),
        m.reset(),
        y.getCredit() < s_oGameSettings.getFichesValueAt(0)
          ? (this._gameOver(), this.changeState(-1))
          : y.getCredit() < s_oGameSettings.getFichesValueAt(0)
            ? (this._gameOver(), this.changeState(-1))
            : (this.changeState(STATE_GAME_WAITING_FOR_BET),
              u.call(this, m.getFicheSelected())));
  };
  this.update = function () {
    if (!1 !== b)
      switch (f) {
        case STATE_GAME_WAITING_FOR_BET:
          d += s_iTimeElaps;
          6e3 < d &&
            ((d = 0), A.isVisible() || 0 !== y.getBetAnte() || A.show(1));
          break;
        case STATE_GAME_DEALING:
          this._updateCards();
          break;
        case STATE_GAME_SPLIT_HAND:
          this._updateCards();
          break;
        case STATE_GAME_DISTRIBUTE_FICHES:
          this._updateFiches();
          break;
        case STATE_GAME_SHOW_WINNER:
          this._updateShowWinner();
      }
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  CHIP_VALUES = a.chip_values;
  BET_TIME = a.bet_time;
  WIN_OCCURRENCE = a.win_occurrence;
  TIE_OCCURRENCE = a.tie_occurrence;
  LOSE_OCCURRENCE = a.lose_occurrence;
  var Y = a.game_cash;
  TIME_END_HAND = a.time_show_hand;
  AD_SHOW_COUNTER = a.ad_show_counter;
  this._init();
}
var s_oGame, s_oTweenController;
function CInterface(a) {
  var b,
    c,
    d,
    e,
    f,
    k,
    r,
    t,
    l,
    h,
    n,
    p,
    z,
    x,
    D,
    w,
    v,
    I,
    S,
    F,
    G,
    J,
    O,
    u,
    K,
    R,
    P = null,
    H = null;
  this._init = function (a) {
    var B = s_oSpriteLibrary.getSprite("but_exit");
    d = CANVAS_WIDTH - B.width / 2 - 10;
    e = B.height / 2 + 10;
    l = new CGfxButton(d, e, B, s_oStage);
    l.addEventListener(ON_MOUSE_UP, this._onExit, this);
    var L = s_oSpriteLibrary.getSprite("but_fullscreen");
    !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
      ? ((f = l.getX() - B.width - 10),
        (k = B.height / 2 + 10),
        (w = new CToggle(
          f,
          k,
          s_oSpriteLibrary.getSprite("audio_icon"),
          s_bAudioActive,
          !0
        )),
        w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        (b = f - L.width / 2 - 10))
      : (b = d - L.width / 2 - 10);
    c = L.height / 2 + 10;
    B = window.document;
    var E = B.documentElement;
    P =
      E.requestFullscreen ||
      E.mozRequestFullScreen ||
      E.webkitRequestFullScreen ||
      E.msRequestFullscreen;
    H =
      B.exitFullscreen ||
      B.mozCancelFullScreen ||
      B.webkitExitFullscreen ||
      B.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (P = !1);
    P &&
      screenfull.isEnabled &&
      ((R = new CToggle(b, c, L, s_bFullscreen, !0)),
        R.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    B = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    B.x = 290;
    B.y = 6;
    s_oStage.addChild(B);
    B = s_oSpriteLibrary.getSprite("gui_bg");
    L = createBitmap(B);
    L.y = CANVAS_HEIGHT - B.height + 10;
    s_oStage.addChild(L);
    B = s_oSpriteLibrary.getSprite("but_clear");
    h = new CGfxButton(1120, CANVAS_HEIGHT - B.height / 2, B, s_oStage);
    h.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
    B = s_oSpriteLibrary.getSprite("but_rebet");
    n = new CGfxButton(1245, CANVAS_HEIGHT - B.height / 2, B, s_oStage);
    n.disable();
    n.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
    B = s_oSpriteLibrary.getSprite("but_generic");
    z = new CTextButton(
      1400,
      CANVAS_HEIGHT - B.height / 2 - 70,
      B,
      TEXT_DEAL,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    z.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    D = new CTextButton(
      1400,
      CANVAS_HEIGHT - B.height / 2,
      B,
      TEXT_HOUSE_WAY,
      FONT_GAME_1,
      "#ffffff",
      27,
      s_oStage
    );
    D.addEventListener(ON_MOUSE_UP, this._onButHouseWayRelease, this);
    x = new CGfxButton(
      1220,
      570,
      s_oSpriteLibrary.getSprite("but_split"),
      s_oStage
    );
    x.setVisible(!1);
    x.addEventListener(ON_MOUSE_UP, this._onButSplitRelease, this);
    POS_BET = { x: CANVAS_WIDTH / 2, y: 415 };
    p = new CGfxButton(
      POS_BET.x,
      POS_BET.y,
      s_oSpriteLibrary.getSprite("bet_ante"),
      s_oStage
    );
    p.addEventListener(ON_MOUSE_UP, this._onButAnteRelease, this);
    new CTLText(
      s_oStage,
      634,
      168,
      200,
      17,
      17,
      "center",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_HIGH_HAND,
      !0,
      !0,
      !1,
      !1
    );
    new CTLText(
      s_oStage,
      868,
      168,
      200,
      17,
      17,
      "center",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_LOW_HAND,
      !0,
      !0,
      !1,
      !1
    );
    new CTLText(
      s_oStage,
      634,
      638,
      200,
      17,
      17,
      "center",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_HIGH_HAND,
      !0,
      !0,
      !1,
      !1
    );
    new CTLText(
      s_oStage,
      868,
      638,
      200,
      17,
      17,
      "center",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_LOW_HAND,
      !0,
      !0,
      !1,
      !1
    );
    F = new createjs.Text("", "17px " + FONT_GAME_1, "#fff");
    F.x = 740;
    F.y = 490;
    F.textAlign = "center";
    s_oStage.addChild(F);
    G = new createjs.Text("", "17px " + FONT_GAME_1, "#fff");
    G.x = 970;
    G.y = 490;
    G.textAlign = "center";
    s_oStage.addChild(G);
    J = new createjs.Text("", "17px " + FONT_GAME_1, "#fff");
    J.x = 740;
    J.y = 310;
    J.textAlign = "center";
    s_oStage.addChild(J);
    O = new createjs.Text("", "17px " + FONT_GAME_1, "#fff");
    O.x = 970;
    O.y = 310;
    O.textAlign = "center";
    s_oStage.addChild(O);
    I = new CTLText(
      s_oStage,
      405,
      18,
      190,
      40,
      24,
      "left",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !0,
      !1
    );
    S = new CTLText(
      s_oStage,
      405,
      60,
      190,
      40,
      18,
      "left",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !0,
      !1
    );
    new CTLText(
      s_oStage,
      300,
      CANVAS_HEIGHT - 310,
      96,
      30,
      30,
      "left",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      TEXT_MONEY + ":",
      !0,
      !0,
      !0,
      !1
    );
    v = new CTLText(
      s_oStage,
      400,
      CANVAS_HEIGHT - 310,
      210,
      30,
      30,
      "right",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      TEXT_CURRENCY + a.toFixed(3),
      !0,
      !0,
      !0,
      !1
    );
    a = [
      { x: 350, y: CANVAS_HEIGHT - 60 },
      { x: 485, y: CANVAS_HEIGHT - 60 },
      { x: 620, y: CANVAS_HEIGHT - 60 },
      { x: 755, y: CANVAS_HEIGHT - 60 },
      { x: 890, y: CANVAS_HEIGHT - 60 },
    ];
    t = [];
    L = CHIP_VALUES;
    for (E = 0; E < NUM_FICHES; E++)
      (t[E] = new CFicheBut(E, a[E].x, a[E].y, 1, s_oStage)),
        t[E].addEventListenerWithParams(
          ON_MOUSE_UP,
          this._onFicheClicked,
          this,
          [L[E], E]
        );
    a = s_oSpriteLibrary.getSprite("fiche_highlight");
    u = createBitmap(a);
    u.regX = a.width / 2;
    u.regY = a.height / 2;
    u.x = t[0].getX();
    u.y = t[0].getY();
    s_oStage.addChild(u);
    r = 0;
    FICHE_WIDTH = B.width;
    K = new CAnimText(CANVAS_WIDTH, CANVAS_HEIGHT, s_oStage);
    this.disableButtons();
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    l.unload();
    l = null;
    !1 === DISABLE_SOUND_MOBILE && (w.unload(), (w = null));
    P && screenfull.isEnabled && R.unload();
    h.unload();
    z.unload();
    n.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, h) {
    l.setPosition(d - a, h + e);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      w.setPosition(f - a, h + k);
    P && screenfull.isEnabled && R.setPosition(b - a, c + h);
  };
  this.reset = function () {
    this.disableButtons();
  };
  this.enableBetFiches = function (a) {
    for (var b = 0; b < NUM_FICHES; b++) t[b].enable();
    h.enable();
    p.enable();
    a && n.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) t[a].disable();
    h.disable();
    n.disable();
    p.disable();
  };
  this.disableButtons = function () {
    z.disable();
    D.disable();
    x.setVisible(!1);
  };
  this.disableDeal = function (a) {
    a ? (z.disable(), D.enable()) : (z.enable(), D.disable());
  };
  this.enable = function (a) {
    a ? z.enable() : z.disable();
  };
  this.enableSplit = function (a) {
    x.setVisible(a);
  };
  this.refreshCredit = function (a) {
    v.refreshText(TEXT_CURRENCY + a.toFixed(3));
  };
  this.refreshHandValueText = function (a, b, c, d) {
    F.text = a;
    G.text = b;
    J.text = c;
    O.text = d;
  };
  this.clearHandValueText = function () {
    F.text = "";
    G.text = "";
    J.text = "";
    O.text = "";
  };
  this.displayMsg = function (a, b) {
    I.refreshText(a);
    S.refreshText(b);
  };
  this.clearCardValueText = function () {
    K.hide();
  };
  this._onFicheClicked = function (a) {
    u.x = t[a[1]].getX();
    u.y = t[a[1]].getY();
    r = a[1];
  };
  this.showResultText = function (a) {
    K.show(
      { x: -200, y: CANVAS_HEIGHT / 2 + 140 },
      { x: CANVAS_WIDTH / 2 - 450, y: CANVAS_HEIGHT / 2 + 140 },
      a
    );
  };
  this._onButClearRelease = function () {
    s_oGame.clearBets();
  };
  this._onButRebetRelease = function () {
    n.disable();
    s_oGame.onRebet();
  };
  this._onButAnteRelease = function () {
    // s_oGame.setBet(r);
  };
  this._onButDealRelease = function () {
    this.disableBetFiches();
    this.disableDeal(!0);
    s_oGame.onDeal();
  };
  this._onButHouseWayRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onHouseWay();
  };
  this._onButSplitRelease = function () {
    s_oGame.onSplitHand();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    P && screenfull.isEnabled && R.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? H.call(window.document)
      : P.call(window.document.documentElement);
    sizeHandler();
  };
  this.getFicheSelected = function () {
    return r;
  };
  this.isResultPanelvisible = function () {
    return K.isVisible();
  };
  s_oInterface = this;
  this._init(a);
  return this;
}
var s_oInterface = null;
function CTweenController() {
  this.tweenValue = function (a, b, c) {
    return a + c * (b - a);
  };
  this.easeLinear = function (a, b, c, d) {
    return (c * a) / d + b;
  };
  this.easeInCubic = function (a, b, c, d) {
    d = (a /= d) * a * a;
    return b + c * d;
  };
  this.easeBackInQuart = function (a, b, c, d) {
    d = (a /= d) * a;
    return b + c * (2 * d * d + 2 * d * a + -3 * d);
  };
  this.easeInBack = function (a, b, c, d) {
    return c * (a /= d) * a * (2.70158 * a - 1.70158) + b;
  };
  this.easeOutCubic = function (a, b, c, d) {
    return c * ((a = a / d - 1) * a * a + 1) + b;
  };
}
function CSeat() {
  var a, b, c, d, e, f, k, r, t, l;
  this._init = function () {
    k = new createjs.Container();
    k.x = CANVAS_WIDTH / 2 - 100;
    k.y = 570;
    s_oStage.addChild(k);
    l = [];
    for (var b = 0; 2 > b; b++) l[b] = new CFichesController();
    a = d = 0;
    this.reset();
    r = new CVector2(k.x - 80, k.y);
    t = new CVector2(k.x + 240, k.y);
    f = new CVector2();
  };
  this.unload = function () {
    s_oStage.removeChild(k);
  };
  this.addEventListener = function (a, b, c) { };
  this.reset = function () {
    for (var a = (c = 0); a < l.length; a++) l[a].reset();
    e = [];
    for (a = 0; 3 > a; a++) e[a] = [];
  };
  this.clearBet = function () {
    a = 0;
    e = [];
    for (var b = 0; b < l.length; b++) l[b].reset(), (e[b] = []);
  };
  this.resetBet = function () {
    a = 0;
  };
  this.setCredit = function (a) {
    d = a;
  };
  this.increaseCredit = function (a) {
    d += a;
  };
  this.betAnte = function (b) {
    a += b;
    l[0].createFichesPile(a, POS_BET.x, POS_BET.y);
  };
  this.setPrevBet = function () {
    b = a;
  };
  this.decreaseCredit = function (a) {
    d -= a;
  };
  this.refreshFiches = function (a, b, c, d, f) {
    e[f].push({ value: a, index: b });
    l[f].refreshFiches(e[f], c, d);
  };
  this.initMovement = function (a, b, c) {
    l[a].initMovement(b, c);
  };
  this.newCardDealed = function () {
    c++;
  };
  this.rebet = function () {
    a = b;
    this.decreaseCredit(b);
    l[0].createFichesPile(b, POS_BET.x, POS_BET.y);
    return b;
  };
  this.checkIfRebetIsPossible = function () {
    for (var a = 0, b = 0; b < l.length; b++) {
      var c = parseFloat(l[b].getPrevBet().toFixed(2));
      a += c;
    }
    return a > d ? !1 : !0;
  };
  this.updateFichesController = function () {
    for (var a = 0; a < l.length; a++) l[a].update();
  };
  this.getAttachCardOffset = function () {
    f.set(k.x + (CARD_WIDTH / 2 + 30) * c - 50, k.y);
    return f;
  };
  this.getHighHandAttach = function () {
    return r;
  };
  this.getLowHandAttach = function () {
    return t;
  };
  this.getBetAnte = function () {
    return a;
  };
  this.getCredit = function () {
    return d;
  };
  this.getPotentialWin = function (a) {
    return (void 0)[a];
  };
  this.getStartingBet = function () {
    for (var a = 0, b = 0; b < l.length; b++) a += l[b].getValue();
    return a;
  };
  this._init();
}
function CFichesController() {
  var a, b, c, d, e, f, k, r, t, l;
  this._init = function () {
    r = new createjs.Container();
    s_oStage.addChild(r);
    e = new CVector2();
    e.set(r.x, r.y);
    t = new createjs.Container();
    s_oStage.addChild(t);
    l = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
    l.textAlign = "center";
    l.shadow = new createjs.Shadow("#000000", 2, 2, 2);
    t.addChild(l);
    c = d = b = 0;
    a = !1;
  };
  this.addEventListener = function (a, b, c) { };
  this.reset = function () {
    a = !1;
    c = 0;
    r.removeAllChildren();
    r.x = e.getX();
    r.y = e.getY();
    l.text = "";
  };
  this.setPrevValue = function (a) {
    d = a;
  };
  this.refreshFiches = function (a, b, d) {
    a = a.sortOn("value", "index");
    for (var e = b, f = d + 10, h = (c = 0), k = 0; k < a.length; k++)
      new CFicheBut(a[k].index, e, f, 1, r).disable(),
        (f -= 5),
        h++,
        9 < h && ((h = 0), (e += FICHE_WIDTH), (f = d)),
        (c += a[k].value);
    playSound("chip", 1, !1);
    l.x = b;
    l.y = d + 40;
    l.text = c.toFixed(2) + TEXT_CURRENCY;
  };
  this.createFichesPile = function (a, b, c) {
    this.reset();
    var d = CHIP_VALUES,
      e = [];
    do {
      for (var f = d[d.length - 1], h = d.length - 1; f > a;) h--, (f = d[h]);
      h = Math.floor(a / f);
      for (var l = 0; l < h; l++)
        e.push({ value: f, index: s_oGameSettings.getIndexForFiches(f) });
      a = f = (a % f).toFixed(1);
    } while (0 < f);
    this.refreshFiches(e, b, c);
  };
  this.initMovement = function (b, e) {
    d = c;
    f = new CVector2(r.x, r.y);
    k = new CVector2(b, e);
    l.text = "";
    a = !0;
  };
  this.getValue = function () {
    return c;
  };
  this.getPrevBet = function () {
    return d;
  };
  this.update = function () {
    if (a)
      if (((b += s_iTimeElaps), b > TIME_FICHES_MOV)) (b = 0), (a = !1);
      else {
        var c = easeInOutCubic(b, 0, 1, TIME_FICHES_MOV),
          d = new CVector2();
        d = tweenVectors(f, k, c, d);
        r.x = d.getX();
        r.y = d.getY();
      }
  };
  this._init();
}
function CVector2(a, b) {
  var c, d;
  this._init = function (a, b) {
    c = a;
    d = b;
  };
  this.add = function (a, b) {
    c += a;
    d += b;
  };
  this.addV = function (a) {
    c += a.getX();
    d += a.getY();
  };
  this.scalarDivision = function (a) {
    c /= a;
    d /= a;
  };
  this.subV = function (a) {
    c -= a.getX();
    d -= a.getY();
  };
  this.scalarProduct = function (a) {
    c *= a;
    d *= a;
  };
  this.invert = function () {
    c *= -1;
    d *= -1;
  };
  this.dotProduct = function (a) {
    return c * a.getX() + d * a.getY();
  };
  this.set = function (a, b) {
    c = a;
    d = b;
  };
  this.setV = function (a) {
    c = a.getX();
    d = a.getY();
  };
  this.length = function () {
    return Math.sqrt(c * c + d * d);
  };
  this.length2 = function () {
    return c * c + d * d;
  };
  this.normalize = function () {
    var a = this.length();
    0 < a && ((c /= a), (d /= a));
  };
  this.getNormalize = function (a) {
    this.length();
    a.set(c, d);
    a.normalize();
  };
  this.rot90CCW = function () {
    var a = c;
    c = -d;
    d = a;
  };
  this.rot90CW = function () {
    var a = c;
    c = d;
    d = -a;
  };
  this.getRotCCW = function (a) {
    a.set(c, d);
    a.rot90CCW();
  };
  this.getRotCW = function (a) {
    a.set(c, d);
    a.rot90CW();
  };
  this.ceil = function () {
    c = Math.ceil(c);
    d = Math.ceil(d);
  };
  this.round = function () {
    c = Math.round(c);
    d = Math.round(d);
  };
  this.toString = function () {
    return "Vector2: " + c + ", " + d;
  };
  this.print = function () {
    trace("Vector2: " + c + ", " + d);
  };
  this.getX = function () {
    return c;
  };
  this.getY = function () {
    return d;
  };
  this._init(a, b);
}
function CGameSettings() {
  var a, b;
  this._init = function () {
    var b = -1;
    a = [];
    for (var d = 0; 52 > d; d++) {
      var e = (d + 1) % 13;
      1 === e ? ((e = 14), b++) : 0 === e && (e = 13);
      a.push({ fotogram: d, rank: e, suit: b });
    }
    a.push({ fotogram: d, rank: 15, suit: 0 });
  };
  this.getFichesValueAt = function (a) {
    return CHIP_VALUES[a];
  };
  this.getIndexForFiches = function (a) {
    for (var b = 0, c = 0; c < CHIP_VALUES.length; c++)
      CHIP_VALUES[c] === a && (b = c);
    return b;
  };
  this.generateFichesPile = function (a) {
    var b = [],
      c = CHIP_VALUES.length - 1,
      f = CHIP_VALUES[c];
    do {
      var k = a % f;
      k = CMath.roundDecimal(k, 1);
      a = Math.floor(a / f);
      for (var r = 0; r < a; r++) b.push(f);
      c--;
      f = CHIP_VALUES[c];
      a = k;
    } while (0 < k && -1 < c);
    return b;
  };
  this.timeToString = function (a) {
    a = Math.round(a / 1e3);
    var b = Math.floor(a / 60);
    a -= 60 * b;
    var c = "";
    c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
    return 10 > a ? c + ("0" + a) : c + a;
  };
  this.getShuffledCardDeck = function () {
    for (var c = [], d = 0; d < a.length; d++) c[d] = a[d];
    for (b = []; 0 < c.length;)
      b.push(c.splice(Math.round(Math.random() * (c.length - 1)), 1)[0]);
    return b;
  };
  this.getCardDeck = function () {
    return a;
  };
  this._init();
}
var TYPE_LINEAR = 0,
  TYPE_OUT_CUBIC = 1,
  TYPE_IN_CUBIC = 2,
  TYPE_OUT_BACK = 3,
  TYPE_IN_BACK = 4;
function ease(a, b, c, d, e, f) {
  switch (a) {
    case TYPE_LINEAR:
      var k = easeLinear(b, c, d, e, f);
      break;
    case TYPE_IN_CUBIC:
      k = easeInCubic(b, c, d, e, f);
      break;
    case TYPE_OUT_CUBIC:
      k = easeOutCubic(b, c, d, e, f);
      break;
    case TYPE_IN_BACK:
      k = easeInBack(b, c, d, e, f);
      break;
    case TYPE_OUT_BACK:
      k = easeInBack(b, c, d, e, f);
  }
  return k;
}
function easeOutBounce(a, b, c, d) {
  return (a /= d) < 1 / 2.75
    ? 7.5625 * c * a * a + b
    : a < 2 / 2.75
      ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b
      : a < 2.5 / 2.75
        ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b
        : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b;
}
function easeInBounce(a, b, c, d) {
  return c - easeOutBounce(d - a, 0, c, d) + b;
}
function easeInOutBounce(a, b, c, d) {
  return a < d / 2
    ? 0.5 * easeInBounce(2 * a, 0, c, d) + b
    : 0.5 * easeOutBounce(2 * a - d, 0, c, d) + 0.5 * c + b;
}
function easeInCirc(a, b, c, d) {
  return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
}
function easeOutCirc(a, b, c, d) {
  return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
}
function easeInOutCirc(a, b, c, d) {
  return 1 > (a /= d / 2)
    ? (-c / 2) * (Math.sqrt(1 - a * a) - 1) + b
    : (c / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
}
function easeInCubic(a, b, c, d, e) {
  return c * (a /= d) * a * a + b;
}
function easeOutCubic(a, b, c, d, e) {
  return c * ((a = a / d - 1) * a * a + 1) + b;
}
function easeInOutCubic(a, b, c, d, e) {
  return 1 > (a /= d / 2)
    ? (c / 2) * a * a * a + b
    : (c / 2) * ((a -= 2) * a * a + 2) + b;
}
function easeInElastic(a, b, c, d, e, f, k) {
  if (0 == a) return b;
  if (1 == (a /= d)) return b + c;
  k || (k = 0.3 * d);
  !f || f < Math.abs(c)
    ? ((f = c), (e = k / 4))
    : (e = (k / (2 * Math.PI)) * Math.asin(c / f));
  return (
    -(f * Math.pow(2, 10 * --a) * Math.sin((2 * (a * d - e) * Math.PI) / k)) + b
  );
}
function easeOutElastic(a, b, c, d, e, f, k) {
  if (0 == a) return b;
  if (1 == (a /= d)) return b + c;
  k || (k = 0.3 * d);
  !f || f < Math.abs(c)
    ? ((f = c), (e = k / 4))
    : (e = (k / (2 * Math.PI)) * Math.asin(c / f));
  return (
    f * Math.pow(2, -10 * a) * Math.sin((2 * (a * d - e) * Math.PI) / k) + c + b
  );
}
function easeInOutElastic(a, b, c, d, e, f, k) {
  if (0 == a) return b;
  if (1 == (a /= d)) return b + c;
  k || (k = 0.3 * d);
  !f || f < Math.abs(c)
    ? ((f = c), (e = k / 4))
    : (e = (k / (2 * Math.PI)) * Math.asin(c / f));
  return 1 > a
    ? -0.5 *
    f *
    Math.pow(2, 10 * --a) *
    Math.sin((2 * (a * d - e) * Math.PI) / k) +
    b
    : f *
    Math.pow(2, -10 * --a) *
    Math.sin((2 * (a * d - e) * Math.PI) / k) *
    0.5 +
    c +
    b;
}
function easeInExpo(a, b, c, d) {
  return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
}
function easeOutExpo(a, b, c, d) {
  return a == d ? b + c : c * (-Math.pow(2, (-10 * a) / d) + 1) + b;
}
function easeInOutExpo(a, b, c, d) {
  return 0 == a
    ? b
    : a == d
      ? b + c
      : 1 > (a /= d / 2)
        ? (c / 2) * Math.pow(2, 10 * (a - 1)) + b
        : (c / 2) * (-Math.pow(2, -10 * --a) + 2) + b;
}
function easeLinear(a, b, c, d) {
  return (c * a) / d + b;
}
function easeInQuad(a, b, c, d) {
  return c * (a /= d) * a + b;
}
function easeOutQuad(a, b, c, d) {
  return -c * (a /= d) * (a - 2) + b;
}
function easeInOutQuad(a, b, c, d) {
  return 1 > (a /= d / 2)
    ? (c / 2) * a * a + b
    : (-c / 2) * (--a * (a - 2) - 1) + b;
}
function easeInQuart(a, b, c, d) {
  return c * (a /= d) * a * a * a + b;
}
function easeOutQuart(a, b, c, d) {
  return -c * ((a = a / d - 1) * a * a * a - 1) + b;
}
function easeInOutQuart(a, b, c, d) {
  return 1 > (a /= d / 2)
    ? (c / 2) * a * a * a * a + b
    : (-c / 2) * ((a -= 2) * a * a * a - 2) + b;
}
function easeInQuint(a, b, c, d) {
  return c * (a /= d) * a * a * a * a + b;
}
function easeOutQuint(a, b, c, d) {
  return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
}
function easeInOutQuint(a, b, c, d) {
  return 1 > (a /= d / 2)
    ? (c / 2) * a * a * a * a * a + b
    : (c / 2) * ((a -= 2) * a * a * a * a + 2) + b;
}
function easeInSine(a, b, c, d) {
  return -c * Math.cos((a / d) * (Math.PI / 2)) + c + b;
}
function easeOutSine(a, b, c, d) {
  return c * Math.sin((a / d) * (Math.PI / 2)) + b;
}
function easeInOutSine(a, b, c, d) {
  return (-c / 2) * (Math.cos((Math.PI * a) / d) - 1) + b;
}
function easeInBack(a, b, c, d) {
  return c * (a /= d) * a * (2.70158 * a - 1.70158) + b;
}
function easeOutBack(a, b, c, d) {
  return c * ((a = a / d - 1) * a * (2.70158 * a + 1.70158) + 1) + b;
}
function CCard(a, b, c) {
  var d,
    e,
    f,
    k = -1,
    r,
    t,
    l,
    h,
    n,
    p,
    z,
    x,
    D,
    w,
    v;
  this._init = function (a, b, c) {
    f = !1;
    v = c;
    c = {
      images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
      frames: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        regX: CARD_WIDTH / 2,
        regY: CARD_HEIGHT / 2,
      },
      animations: {
        card_1_1: [0],
        card_1_2: [1],
        card_1_3: [2],
        card_1_4: [3],
        card_1_5: [4],
        card_1_6: [5],
        card_1_7: [6],
        card_1_8: [7],
        card_1_9: [8],
        card_1_10: [9],
        card_1_J: [10],
        card_1_Q: [11],
        card_1_K: [12],
        card_2_1: [13],
        card_2_2: [14],
        card_2_3: [15],
        card_2_4: [16],
        card_2_5: [17],
        card_2_6: [18],
        card_2_7: [19],
        card_2_8: [20],
        card_2_9: [21],
        card_2_10: [22],
        card_2_J: [23],
        card_2_Q: [24],
        card_2_K: [25],
        card_3_1: [26],
        card_3_2: [27],
        card_3_3: [28],
        card_3_4: [29],
        card_3_5: [30],
        card_3_6: [31],
        card_3_7: [32],
        card_3_8: [33],
        card_3_9: [34],
        card_3_10: [35],
        card_3_J: [36],
        card_3_Q: [37],
        card_3_K: [38],
        card_4_1: [39],
        card_4_2: [40],
        card_4_3: [41],
        card_4_4: [42],
        card_4_5: [43],
        card_4_6: [44],
        card_4_7: [45],
        card_4_8: [46],
        card_4_9: [47],
        card_4_10: [48],
        card_4_J: [49],
        card_4_Q: [50],
        card_4_K: [51],
        joker: [52],
        back: [53],
      },
    };
    c = new createjs.SpriteSheet(c);
    w = createSprite(
      c,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    w.x = a;
    w.y = b;
    w.rotation = 120;
    w.stop();
    v.addChild(w);
    w.on("click", this._onCardRelease);
    x = [];
    D = [];
  };
  this.unload = function () {
    w.off("click", this._onCardRelease);
    z = p = null;
    v.removeChild(w);
  };
  this.addEventListener = function (a, b, c) {
    x[a] = b;
    D[a] = c;
  };
  this.setInfo = function (a, b, c, f, v, x, u) {
    e = !1;
    n = 0;
    r = c;
    t = f;
    l = v;
    p = a;
    z = b;
    h = u;
    d = x;
    d || (w.cursor = "pointer");
    k = STATE_CARD_DEALING;
  };
  this.initRemoving = function (a) {
    p = new CVector2(w.x, w.y);
    z = a;
    n = 0;
    k = STATE_CARD_REMOVING;
  };
  this.initSplit = function (a, b, d) {
    c.setChildIndex(w, d);
    p = new CVector2(w.x, w.y);
    z = new CVector2(a, b);
    n = 0;
    k = STATE_CARD_SPLITTING;
  };
  this.setValue = function () {
    w.gotoAndStop(r);
    var a = this;
    createjs.Tween.get(w)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardShown();
      });
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(w)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(w)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    w.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(w)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    x[ON_CARD_SHOWN] && x[ON_CARD_SHOWN].call(D[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    e = !0;
  };
  this._onCardRelease = function () {
    d ||
      (k === STATE_CARD_WAIT_USER &&
        ((f = !f)
          ? createjs.Tween.get(w).to({ y: w.y - 20 }, 300)
          : createjs.Tween.get(w).to({ y: w.y + 20 }, 300)),
        s_oGame.cardSelected(f));
  };
  this.getValue = function () {
    return t;
  };
  this.getSuit = function () {
    return l;
  };
  this.getChildIndex = function () {
    return v.getChildIndex(w);
  };
  this.getFotogram = function () {
    return r;
  };
  this.isSelected = function () {
    return f;
  };
  this._updateDealing = function () {
    n += s_iTimeElaps;
    if (n > TIME_CARD_DEALING)
      (k = STATE_CARD_WAIT_USER),
        (n = 0),
        (w.x = z.getX()),
        (w.y = z.getY()),
        (w.rotation = 360),
        x[ON_CARD_ANIMATION_ENDING] &&
        x[ON_CARD_ANIMATION_ENDING].call(
          D[ON_CARD_ANIMATION_ENDING],
          this,
          d,
          h
        );
    else {
      this.visible = !0;
      var a = easeInOutCubic(n, 0, 1, TIME_CARD_DEALING),
        b = new CVector2();
      b = tweenVectors(p, z, a, b);
      w.x = b.getX();
      w.y = b.getY();
      w.rotation = 120 + (24e3 * a) / 100;
    }
  };
  this._updateRemoving = function () {
    n += s_iTimeElaps;
    if (n > TIME_CARD_REMOVE) (n = 0), (e = !1), (k = -1), this.unload();
    else {
      var a = easeInOutCubic(n, 0, 1, TIME_CARD_REMOVE),
        b = new CVector2();
      b = tweenVectors(p, z, a, b);
      w.x = b.getX();
      w.y = b.getY();
      w.rotation = (4500 * a) / 100;
    }
  };
  this._updateSplit = function () {
    n += s_iTimeElaps;
    if (n > TIME_CARD_SPLIT)
      (n = 0),
        x[SPLIT_CARD_END_ANIM] &&
        x[SPLIT_CARD_END_ANIM].call(D[SPLIT_CARD_END_ANIM], this, h),
        (k = -1);
    else {
      var a = easeInOutCubic(n, 0, 1, TIME_CARD_SPLIT),
        b = new CVector2();
      b = tweenVectors(p, z, a, b);
      w.x = b.getX();
      w.y = b.getY();
    }
  };
  this.update = function () {
    switch (k) {
      case STATE_CARD_DEALING:
        this._updateDealing();
        break;
      case STATE_CARD_SPLITTING:
        this._updateSplit();
        break;
      case STATE_CARD_REMOVING:
        !0 === e && this._updateRemoving();
    }
  };
  s_oCard = this;
  this._init(a, b, c);
}
var s_oCard;
function CGameOver() {
  var a, b, c, d;
  this._init = function () {
    d = new createjs.Container();
    s_oStage.addChild(d);
    d.on("click", function () { });
    var e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    d.addChild(e);
    a = new CTLText(
      d,
      CANVAS_WIDTH / 2 - 170,
      290,
      340,
      100,
      32,
      "center",
      "#fff",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_NO_MONEY,
      !0,
      !0,
      !0,
      !1
    );
    a.setShadow("#000000", 2, 2, 2);
    // b = new CTextButton(
    //   CANVAS_WIDTH / 2 - 100,
    //   450,
    //   s_oSpriteLibrary.getSprite("but_game_bg"),
    //   TEXT_RECHARGE,
    //   FONT_GAME_1,
    //   "#fff",
    //   14,
    //   d
    // );
    // b.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    c = new CTextButton(
      CANVAS_WIDTH / 2,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT_GAME_1,
      "#fff",
      14,
      d
    );
    c.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    // b.unload();
    c.unload();
    d.off("click", function () { });
  };
  this.show = function () {
    d.visible = !0;
    $(s_oMain).trigger("end_session");
  };
  this.hide = function () {
    d.visible = !1;
  };
  this._onRecharge = function () {
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._init();
}
function CMsgBox() {
  var a, b, c;
  this._init = function () {
    c = new createjs.Container();
    c.alpha = 0;
    c.visible = !1;
    s_oStage.addChild(c);
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    c.addChild(a);
    b = new CTLText(
      c,
      CANVAS_WIDTH / 2 - 190,
      CANVAS_HEIGHT / 2 - 50,
      380,
      100,
      50,
      "center",
      "#fff",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !0,
      !1
    );
    b.setShadow("#000", 2, 2, 2);
  };
  this.unload = function () {
    c.off("mousedown", this._onExit);
  };
  this._initListener = function () {
    c.on("mousedown", this._onExit);
  };
  this.show = function (a) {
    b.refreshText(a);
    c.visible = !0;
    var d = this;
    createjs.Tween.get(c)
      .to({ alpha: 1 }, 500)
      .call(function () {
        d._initListener();
      });
    setTimeout(function () {
      d._onExit();
    }, 3e3);
  };
  this._onExit = function () {
    c.visible && (c.off("mousedown"), (c.visible = !1));
  };
  this._init();
  return this;
}
function CHandEvaluator() {
  var a, b, c;
  this.evaluate = function (d) {
    b = [];
    a = [];
    for (var e = 0; e < d.length; e++)
      (b[e] = { rank: d[e].rank, suit: d[e].suit, index: d[e].index }),
        (a[e] = { rank: d[e].rank, suit: d[e].suit, index: d[e].index });
    b.sort(this.compareRank);
    a.sort(this.compareRank);
    c = [0, 1, 2, 3, 4];
    return { ret: this.rankHand(), sort_hand: a };
  };
  this.rankHand = function () {
    return this._checkForRoyalFlush()
      ? ROYAL_FLUSH
      : this._checkForStraightFlush()
        ? STRAIGHT_FLUSH
        : this._checkForFourOfAKind()
          ? FOUR_OF_A_KIND
          : this._checkForFullHouse()
            ? FULL_HOUSE
            : this._checkForFlush()
              ? FLUSH
              : this._checkForStraight()
                ? STRAIGHT
                : this._checkForThreeOfAKind()
                  ? THREE_OF_A_KIND
                  : this._checkForTwoPair()
                    ? TWO_PAIR
                    : this._checkForOnePair()
                      ? ONE_PAIR
                      : HIGH_CARD;
  };
  this._checkForRoyalFlush = function () {
    return this._isRoyalStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForStraightFlush = function () {
    return this._isStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForFourOfAKind = function () {
    return b[0].rank === b[3].rank
      ? (b.splice(4, 1), c.splice(4, 1), !0)
      : b[1].rank === b[4].rank ||
        (b[1].rank === CARD_ACE && b[4].rank === CARD_JOKER)
        ? (b.splice(0, 1), c.splice(0, 1), !0)
        : !1;
  };
  this._checkForFullHouse = function () {
    if (this.isJokerInHand()) {
      if (
        (b[0].rank === b[1].rank && b[2].rank === b[3].rank) ||
        (b[0].rank === b[2].rank && b[3].rank === CARD_ACE)
      )
        return !0;
    } else
      return (b[0].rank === b[1].rank && b[2].rank === b[4].rank) ||
        (b[0].rank === b[2].rank && b[3].rank === b[4].rank)
        ? !0
        : !1;
  };
  this._checkForFlush = function () {
    return this._isFlush() ? !0 : !1;
  };
  this._checkForStraight = function () {
    return this._isStraight() ? !0 : !1;
  };
  this._checkForThreeOfAKind = function () {
    return b[0].rank === b[1].rank && b[0].rank === b[2].rank
      ? (b.splice(3, 1), b.splice(3, 1), c.splice(3, 1), c.splice(3, 1), !0)
      : b[1].rank === b[2].rank && b[1].rank === b[3].rank
        ? (b.splice(0, 1), b.splice(3, 1), c.splice(0, 1), c.splice(3, 1), !0)
        : (b[2].rank === b[3].rank && b[2].rank === b[4].rank) ||
          (b[4].rank === CARD_JOKER &&
            b[2].rank === CARD_ACE &&
            b[3].rank === CARD_ACE)
          ? (b.splice(0, 1), b.splice(0, 1), c.splice(0, 1), c.splice(0, 1), !0)
          : !1;
  };
  this._checkForTwoPair = function () {
    return b[0].rank === b[1].rank && b[2].rank === b[3].rank
      ? (b.splice(4, 1), c.splice(4, 1), !0)
      : b[1].rank === b[2].rank && b[3].rank === b[4].rank
        ? (b.splice(0, 1), c.splice(0, 1), !0)
        : b[0].rank === b[1].rank && b[3].rank === b[4].rank
          ? (b.splice(2, 1), c.splice(2, 1), !0)
          : !1;
  };
  this._checkForOnePair = function () {
    if (b[4].rank === CARD_JOKER && b[3].rank === CARD_ACE) return !0;
    for (var a = 0; 4 > a; a++)
      if (b[a].rank === b[a + 1].rank) {
        var e = b[a],
          f = b[a + 1];
        b = [];
        b.push(e);
        b.push(f);
        c = [a, a + 1];
        return !0;
      }
    return !1;
  };
  this._isFlush = function () {
    return b[3].suit === b[0].suit &&
      b[3].suit === b[1].suit &&
      b[3].suit === b[2].suit
      ? b[4].rank === CARD_JOKER
        ? !0
        : b[4].suit === b[3].suit
          ? !0
          : !1
      : !1;
  };
  this._isRoyalStraight = function () {
    return (this.isJokerInHand() &&
      this._isStraight() &&
      (b[0].rank === CARD_TEN || b[3].rank === CARD_ACE)) ||
      (b[0].rank === CARD_TEN &&
        b[1].rank === CARD_JACK &&
        b[2].rank === CARD_QUEEN &&
        b[3].rank === CARD_KING &&
        b[4].rank === CARD_ACE)
      ? !0
      : !1;
  };
  this._isStraight = function () {
    for (
      var a = this.isJokerInHand() ? 1 : 0, c = 0, f = 0;
      f < b.length - 1 - a;
      f++
    ) {
      var k = b[f + 1].rank - (b[f].rank + 1);
      if (0 < k) {
        if (((c += k), c > a)) return !1;
      } else if (0 > k) return !1;
    }
    return !0;
  };
  this.isJokerInHand = function () {
    return b[4].rank === CARD_JOKER ? !0 : !1;
  };
  this.compareRank = function (a, b) {
    return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;
  };
  this.sortCards = function (a) {
    for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
    return (b = b.sort(this.compareRank));
  };
}
function CAnimText(a, b, c) {
  var d, e, f;
  this._init = function (a, b) {
    f = new createjs.Container();
    f.visible = !1;
    f.x = a;
    f.y = b;
    k.addChild(f);
    var c = s_oSpriteLibrary.getSprite("win_bg"),
      d = createBitmap(c);
    f.addChild(d);
    e = new CTLText(
      f,
      c.width / 2 - 98,
      5,
      196,
      c.height - 10,
      50,
      "center",
      "#fff",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !0,
      !1
    );
  };
  this.show = function (a, b, c) {
    d = a;
    e.refreshText(c);
    f.x = a.x;
    f.y = a.y;
    f.visible = !0;
    createjs.Tween.get(f).to({ x: b.x, y: b.y }, 1e3, createjs.Ease.elasticOut);
  };
  this.hide = function () {
    f.visible = !1;
    f.x = d.x;
    f.y = d.y;
  };
  this.isVisible = function () {
    return f.visible;
  };
  var k = c;
  this._init(a, b);
}
function CHelpCursor(a, b, c, d) {
  var e, f;
  this._init = function (a, b, c) {
    e = a;
    f = createBitmap(c);
    f.visible = !1;
    f.x = a;
    f.y = b;
    d.addChild(f);
  };
  this.show = function (a) {
    0 > a && (f.scaleX *= -1);
    this._move(a, e + 30 * a, 600);
    f.visible = !0;
  };
  this.hide = function () {
    createjs.Tween.removeTweens(f);
    f.x = e;
    f.visible = !1;
  };
  this._move = function (a, b, c) {
    var d = 0 < a ? createjs.Ease.cubicIn : createjs.Ease.cubicOut;
    createjs.Tween.get(f)
      .to({ x: b }, c, d)
      .call(function () {
        a *= -1;
        k._move(a, b + 15 * a, 400);
      });
  };
  this.isVisible = function () {
    return f.visible;
  };
  var k = this;
  this._init(a, b, c);
}
function CCreditsPanel() {
  var a, d, b, c, g, f, m, n;
  this.makeText = function (text, fontSize, color, fontStyle, posX, posY) {
    let c = new createjs.Text(
      text,
      fontSize + fontStyle,
      color
    );
    c.textAlign = "left";
    c.textBaseline = "alphabetic";
    c.x = posX;
    c.y = posY;
    return c;
  }
  this._init = function () {
    n = new createjs.Container();
    s_oStage.addChild(n);
    a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    n.addChild(a);
    g = new createjs.Shape();
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(CANVAS_WIDTH - 230, p.height / 2 + 10, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    c = this.makeText("Game Rule", "35px ", "#ff0", FONT_GAME_2, 240, 380);
    n.addChild(c);
    text = `This is a casino gambling game based on the Chinese Domino game Pai Gow but played with playing-cards and poker combinations instead of with dominoes. 
A pack of 52 cards plus one joker is used. The joker is a wild card which can be used only as an ace, or to complete a straight, a flush or a straight flush.
Seven cards are dealt to player and dealer. Player than the dealer look at their cards and divide them to form two hands 
    - a two card hand and a five card hand. The relative values of the five card hands are the same as in poker, 
      with one exception: A-2-3-4-5 is the second highest type of straight or straight flush, ranking between A-K-Q-J-10 and K-Q-J-10-9. 
      Five aces is the highest hand, beating a straight flush. For the two card hand, any pair beats any two unmatched cards, 
      but no other combinations are possible.
The player must arrange the cards so that the five card hand is higher than the two card hand 
    (so if the two cards were a pair of aces, the five card hand would have to contain two pairs or better). 
Players are not allowed to discuss their hands at any stage.
The result between the dealer and player is determined by comparing the player's 5 card hand with the dealer's 5 card hand and 
the player's 2 card hand with the dealer's 2 card hand:
    1: If the player wins both hands the dealer pays out the amount staked by the player.
    2: If the dealer wins one hand and the player wins the other no money changes hands. This is called a "push".
    3: If the dealer wins both hands the dealer wins the player's stake.
If either hand is tied, the dealer wins that particular hand. So if the dealer wins one hand while the other is tied, or if both hands are tied, the dealer wins. 
If one hand is tied and the player wins the other it is a push.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 410);
    n.addChild(c);
  };
  this.unload = function () {
    // g.off("click", m);
    b.unload();
    b = null;
    s_oStage.removeChild(n);
  };
  this._onLogoButRelease = function () {
    window.open("http://www.codethislab.com/index.php?&l=en", "_blank");
  };
  this._init();
}
function CFicheBut(a, b, c, d, e) {
  var f,
    k,
    r,
    t = [],
    l,
    h;
  this._init = function (b, c) {
    var n = s_oSpriteLibrary.getSprite("fiche_" + a);
    f = !1;
    h = new createjs.Container();
    h.x = b;
    h.y = c;
    h.regX = n.width / 2;
    h.regY = n.height / 2;
    h.cursor = "pointer";
    h.scaleX = h.scaleY = d;
    e.addChild(h);
    k = [];
    r = [];
    l = createBitmap(n);
    h.addChild(l);
    new CTLText(
      h,
      8,
      28,
      n.width - 21,
      40,
      40,
      "center",
      COLOR_FICHES[a],
      FONT_GAME_1,
      1,
      0,
      0,
      CHIP_VALUES[a],
      !0,
      !0,
      !1,
      !1
    );
    this._initListener();
  };
  this.unload = function () {
    h.off("mousedown", this.buttonDown);
    h.off("pressup", this.buttonRelease);
    e.removeChild(h);
  };
  this.select = function () { };
  this.deselect = function () { };
  this.enable = function () {
    f = !1;
  };
  this.disable = function () {
    f = !0;
  };
  this.setVisible = function (a) {
    h.visible = a;
  };
  this._initListener = function () {
    h.on("mousedown", this.buttonDown);
    h.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    k[a] = b;
    r[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    k[a] = b;
    r[a] = c;
    t = d;
  };
  this.buttonRelease = function () {
    f ||
      (playSound("press_but", 1, !1),
        (h.scaleX = d),
        (h.scaleY = d),
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(r[ON_MOUSE_UP], t),
        s_oGame.setBet(a));
  };
  this.buttonDown = function () {
    f ||
      ((h.scaleX = 0.9 * d),
        (h.scaleY = 0.9 * d),
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], t));
  };
  this.setPosition = function (a, b) {
    h.x = a;
    h.y = b;
  };
  this.setX = function (a) {
    h.x = a;
  };
  this.setY = function (a) {
    h.y = a;
  };
  this.getX = function () {
    return h.x;
  };
  this.getY = function () {
    return h.y;
  };
  this._init(b, c);
}
CTLText.prototype = {
  constructor: CTLText,
  __autofit: function () {
    if (this._bFitText) {
      for (
        var a = this._iFontSize;
        (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV ||
          this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) &&
        !(a--,
          (this._oText.font = a + "px " + this._szFont),
          (this._oText.lineHeight = Math.round(a * this._fLineHeightFactor)),
          this.__updateY(),
          this.__verticalAlign(),
          8 > a);

      );
      this._iFontSize = a;
    }
  },
  __verticalAlign: function () {
    if (this._bVerticalAlign) {
      var a = this._oText.getBounds().height;
      this._oText.y -= (a - this._iHeight) / 2 + this._iPaddingV;
    }
  },
  __updateY: function () {
    this._oText.y = this._y + this._iPaddingV;
    switch (this._oText.textBaseline) {
      case "middle":
        this._oText.y +=
          this._oText.lineHeight / 2 +
          (this._iFontSize * this._fLineHeightFactor - this._iFontSize);
    }
  },
  __createText: function (a) {
    this._bDebug &&
      ((this._oDebugShape = new createjs.Shape()),
        this._oDebugShape.graphics
          .beginFill("rgba(255,0,0,0.5)")
          .drawRect(this._x, this._y, this._iWidth, this._iHeight),
        this._oContainer.addChild(this._oDebugShape));
    this._oText = new createjs.Text(
      a,
      this._iFontSize + "px " + this._szFont,
      this._szColor
    );
    this._oText.textBaseline = "middle";
    this._oText.lineHeight = Math.round(
      this._iFontSize * this._fLineHeightFactor
    );
    this._oText.textAlign = this._szAlign;
    this._oText.lineWidth = this._bMultiline
      ? this._iWidth - 2 * this._iPaddingH
      : null;
    switch (this._szAlign) {
      case "center":
        this._oText.x = this._x + this._iWidth / 2;
        break;
      case "left":
        this._oText.x = this._x + this._iPaddingH;
        break;
      case "right":
        this._oText.x = this._x + this._iWidth - this._iPaddingH;
    }
    this._oContainer.addChild(this._oText);
    this.refreshText(a);
  },
  setVerticalAlign: function (a) {
    this._bVerticalAlign = a;
  },
  setOutline: function (a) {
    null !== this._oText && (this._oText.outline = a);
  },
  setShadow: function (a, b, c, d) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, b, c, d));
  },
  setColor: function (a) {
    this._oText.color = a;
  },
  setAlpha: function (a) {
    this._oText.alpha = a;
  },
  removeTweens: function () {
    createjs.Tween.removeTweens(this._oText);
  },
  setX: function (a) {
    this._oText.x = a;
  },
  getText: function () {
    return this._oText;
  },
  getY: function () {
    return this._y;
  },
  getFontSize: function () {
    return this._iFontSize;
  },
  refreshText: function (a) {
    "" === a && (a = " ");
    null === this._oText && this.__createText(a);
    this._oText.text = a;
    this._oText.font = this._iFontSize + "px " + this._szFont;
    this._oText.lineHeight = Math.round(
      this._iFontSize * this._fLineHeightFactor
    );
    this.__autofit();
    this.__updateY();
    this.__verticalAlign();
  },
};
function CTLText(a, b, c, d, e, f, k, r, t, l, h, n, p, z, x, D, w) {
  this._oContainer = a;
  this._x = b;
  this._y = c;
  this._iWidth = d;
  this._iHeight = e;
  this._bMultiline = D;
  this._iFontSize = f;
  this._szAlign = k;
  this._szColor = r;
  this._szFont = t;
  this._iPaddingH = h;
  this._iPaddingV = n;
  this._bVerticalAlign = x;
  this._bFitText = z;
  this._bDebug = w;
  this._oDebugShape = null;
  this._fLineHeightFactor = l;
  this._oText = null;
  p && this.__createText(p);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var b = a.split("."),
    c = b.length;
  2 < c && (a = b[c - 2] + "." + b[c - 1]);
  return a;
}
var getClosestTop = function () {
  var a = window,
    b = !1;
  try {
    for (; a.parent.document !== a.document;)
      if (a.parent.document) a = a.parent;
      else {
        b = !0;
        break;
      }
  } catch (c) {
    b = !0;
  }
  return { topFrame: a, err: b };
},
  getBestPageUrl = function (a) {
    var b = a.topFrame,
      c = "";
    if (a.err)
      try {
        try {
          c = window.top.location.href;
        } catch (e) {
          var d = window.location.ancestorOrigins;
          c = d[d.length - 1];
        }
      } catch (e) {
        c = b.document.referrer;
      }
    else c = b.location.href;
    return c;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
    b = [
      String.fromCharCode(
        99,
        111,
        100,
        101,
        116,
        104,
        105,
        115,
        108,
        97,
        98,
        46,
        99,
        111,
        109
      ),
      String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109),
      String.fromCharCode(
        99,
        111,
        100,
        101,
        99,
        97,
        110,
        121,
        111,
        110,
        46,
        99,
        111,
        109
      ),
      String.fromCharCode(
        99,
        111,
        100,
        101,
        99,
        97,
        110,
        121,
        111,
        110,
        46,
        110,
        101,
        116
      ),
    ],
    c = 0;
    c < b.length;
    c++
  )
    if (b[c] === a) return !0;
  return !0;
}
