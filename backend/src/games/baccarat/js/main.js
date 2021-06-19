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
    d = "undefined" != typeof module && module.exports,
    c = (function () {
      for (
        var c,
        b = [
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
        e = b.length,
        n = {};
        d < e;
        d++
      )
        if ((c = b[d]) && c[1] in a) {
          for (d = 0; d < c.length; d++) n[b[0][d]] = c[d];
          return n;
        }
      return !1;
    })(),
    b = { change: c.fullscreenchange, error: c.fullscreenerror },
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
      on: function (c, d) {
        var e = b[c];
        e && a.addEventListener(e, d, !1);
      },
      off: function (c, d) {
        var e = b[c];
        e && a.removeEventListener(e, d, !1);
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
      d ? (module.exports = e) : (window.screenfull = e))
    : d
      ? (module.exports = { isEnabled: !1 })
      : (window.screenfull = { isEnabled: !1 });
})();
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function d(a, c) {
    var d = -1,
      e = a ? a.length : 0;
    if ("number" == typeof e && -1 < e && e <= g)
      for (; ++d < e;) c(a[d], d, a);
    else b(a, c);
  }
  function c(c) {
    c = String(c).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(c) ? c : a(c);
  }
  function b(a, c) {
    for (var b in a) r.call(a, b) && c(a[b], b, a);
  }
  function e(c) {
    return null == c ? a(c) : D.call(c).slice(8, -1);
  }
  function f(a, c) {
    var b = null != a ? typeof a[c] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(b) &&
      ("object" == b ? !!a[c] : !0)
    );
  }
  function l(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function q(a, c) {
    var b = null;
    d(a, function (d, e) {
      b = c(b, d, e, a);
    });
    return b;
  }
  function p(a) {
    function d(b) {
      return q(b, function (b, d) {
        var e = d.pattern || l(d);
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
    function m(c) {
      return q(c, function (c, b) {
        return (
          c ||
          (RegExp(
            b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
            "i"
          ).exec(a) || 0)[1] ||
          null
        );
      });
    }
    var h = t,
      r = a && "object" == typeof a && "String" != e(a);
    r && ((h = a), (a = null));
    var n = h.navigator || {},
      g = n.userAgent || "";
    a || (a = g);
    var C = r
      ? !!n.likeChrome
      : /\bChrome\b/.test(a) && !/internal|\n/i.test(D.toString()),
      K = r ? "Object" : "ScriptBridgingProxyObject",
      G = r ? "Object" : "Environment",
      E = r && h.java ? "JavaPackage" : e(h.java),
      R = r ? "Object" : "RuntimeObject";
    G = (E = /\bJava/.test(E) && h.java) && e(h.environment) == G;
    var F = E ? "a" : "\u03b1",
      z = E ? "b" : "\u03b2",
      V = h.document || {},
      N = h.operamini || h.opera,
      S = v.test((S = r && N ? N["[[Class]]"] : e(N))) ? S : (N = null),
      k,
      T = a;
    r = [];
    var U = null,
      O = a == g;
    g = O && N && "function" == typeof N.version && N.version();
    var A = (function (c) {
      return q(c, function (c, b) {
        return (
          c ||
          (RegExp("\\b" + (b.pattern || l(b)) + "\\b", "i").exec(a) &&
            (b.label || b))
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
      u = (function (c) {
        return q(c, function (c, b) {
          return (
            c ||
            (RegExp("\\b" + (b.pattern || l(b)) + "\\b", "i").exec(a) &&
              (b.label || b))
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
      B = d([
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
      J = (function (c) {
        return q(c, function (c, b, d) {
          return (
            c ||
            ((b[B] ||
              b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] ||
              RegExp("\\b" + l(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      w = (function (b) {
        return q(b, function (b, d) {
          var e = d.pattern || l(d);
          if (
            !b &&
            (b = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var h = b,
              r = d.label || d,
              m = {
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
              r &&
              /^Win/i.test(h) &&
              !/^Windows Phone /i.test(h) &&
              (m = m[/[\d.]+$/.exec(h)]) &&
              (h = "Windows " + m);
            h = String(h);
            e && r && (h = h.replace(RegExp(e, "i"), r));
            b = h = c(
              h
                .replace(/ ce$/i, " CE")
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
    A && (A = [A]);
    J && !B && (B = d([J]));
    if ((k = /\bGoogle TV\b/.exec(B))) B = k[0];
    /\bSimulator\b/i.test(a) && (B = (B ? B + " " : "") + "Simulator");
    "Opera Mini" == u &&
      /\bOPiOS\b/.test(a) &&
      r.push("running in Turbo/Uncompressed mode");
    "IE" == u && /\blike iPhone OS\b/.test(a)
      ? ((k = p(a.replace(/like iPhone OS/, ""))),
        (J = k.manufacturer),
        (B = k.product))
      : /^iP/.test(B)
        ? (u || (u = "Safari"),
          (w =
            "iOS" +
            ((k = / OS ([\d_]+)/i.exec(a)) ? " " + k[1].replace(/_/g, ".") : "")))
        : "Konqueror" != u || /buntu/i.test(w)
          ? (J &&
            "Google" != J &&
            ((/Chrome/.test(u) && !/\bMobile Safari\b/i.test(a)) ||
              /\bVita\b/.test(B))) ||
            (/\bAndroid\b/.test(w) && /^Chrome/.test(u) && /\bVersion\//i.test(a))
            ? ((u = "Android Browser"), (w = /\bAndroid\b/.test(w) ? w : "Android"))
            : "Silk" == u
              ? (/\bMobi/i.test(a) || ((w = "Android"), r.unshift("desktop mode")),
                /Accelerated *= *true/i.test(a) && r.unshift("accelerated"))
              : "PaleMoon" == u && (k = /\bFirefox\/([\d.]+)\b/.exec(a))
                ? r.push("identifying as Firefox " + k[1])
                : "Firefox" == u && (k = /\b(Mobile|Tablet|TV)\b/i.exec(a))
                  ? (w || (w = "Firefox OS"), B || (B = k[1]))
                  : !u ||
                    (k = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(u))
                    ? (u &&
                      !B &&
                      /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(k + "/") + 8)) &&
                      (u = null),
                      (k = B || J || w) &&
                      (B || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) &&
                      (u =
                        /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : k) +
                        " Browser"))
                    : "Electron" == u &&
                    (k = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
                    r.push("Chromium " + k)
          : (w = "Kubuntu");
    g ||
      (g = m([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        l(u),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (k =
        ("iCab" == A && 3 < parseFloat(g) && "WebKit") ||
        (/\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(A) &&
          "WebKit") ||
        (!A && /\bMSIE\b/i.test(a) && ("Mac OS" == w ? "Tasman" : "Trident")) ||
        ("WebKit" == A && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront"))
    )
      A = [k];
    "IE" == u && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((u += " Mobile"),
        (w = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x")),
        r.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
        ? ((u = "IE Mobile"),
          (w = "Windows Phone 8.x"),
          r.unshift("desktop mode"),
          g || (g = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
        : "IE" != u &&
        "Trident" == A &&
        (k = /\brv:([\d.]+)/.exec(a)) &&
        (u && r.push("identifying as " + u + (g ? " " + g : "")),
          (u = "IE"),
          (g = k[1]));
    if (O) {
      if (f(h, "global"))
        if (
          (E &&
            ((k = E.lang.System),
              (T = k.getProperty("os.arch")),
              (w =
                w ||
                k.getProperty("os.name") + " " + k.getProperty("os.version"))),
            G)
        ) {
          try {
            (g = h.require("ringo/engine").version.join(".")), (u = "RingoJS");
          } catch (X) {
            (k = h.system) &&
              k.global.system == h.system &&
              ((u = "Narwhal"), w || (w = k[0].os || null));
          }
          u || (u = "Rhino");
        } else
          "object" == typeof h.process &&
            !h.process.browser &&
            (k = h.process) &&
            ("object" == typeof k.versions &&
              ("string" == typeof k.versions.electron
                ? (r.push("Node " + k.versions.node),
                  (u = "Electron"),
                  (g = k.versions.electron))
                : "string" == typeof k.versions.nw &&
                (r.push("Chromium " + g, "Node " + k.versions.node),
                  (u = "NW.js"),
                  (g = k.versions.nw))),
              u ||
              ((u = "Node.js"),
                (T = k.arch),
                (w = k.platform),
                (g = (g = /[\d.]+/.exec(k.version)) ? g[0] : null)));
      else
        e((k = h.runtime)) == K
          ? ((u = "Adobe AIR"), (w = k.flash.system.Capabilities.os))
          : e((k = h.phantom)) == R
            ? ((u = "PhantomJS"),
              (g =
                (k = k.version || null) &&
                k.major + "." + k.minor + "." + k.patch))
            : "number" == typeof V.documentMode &&
              (k = /\bTrident\/(\d+)/i.exec(a))
              ? ((g = [g, V.documentMode]),
                (k = +k[1] + 4) != g[1] &&
                (r.push("IE " + g[1] + " mode"), A && (A[1] = ""), (g[1] = k)),
                (g = "IE" == u ? String(g[1].toFixed(1)) : g[0]))
              : "number" == typeof V.documentMode &&
              /^(?:Chrome|Firefox)\b/.test(u) &&
              (r.push("masking as " + u + " " + g),
                (u = "IE"),
                (g = "11.0"),
                (A = ["Trident"]),
                (w = "Windows"));
      w = w && c(w);
    }
    g &&
      (k =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(g) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (O && n.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((U = /b/i.test(k) ? "beta" : "alpha"),
        (g =
          g.replace(RegExp(k + "\\+?$"), "") +
          ("beta" == U ? z : F) +
          (/\d+\+?/.exec(k) || "")));
    if (
      "Fennec" == u ||
      ("Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(w))
    )
      u = "Firefox Mobile";
    else if ("Maxthon" == u && g) g = g.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(B))
      "Xbox 360" == B && (w = null),
        "Xbox 360" == B && /\bIEMobile\b/.test(a) && r.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(u) &&
        (!u || B || /Browser|Mobi/.test(u))) ||
      ("Windows CE" != w && !/Mobi/i.test(a))
    )
      if ("IE" == u && O)
        try {
          null === h.external && r.unshift("platform preview");
        } catch (X) {
          r.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(a)) &&
          (k =
            (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
              0)[1] || g)
          ? ((k = [k, /BB10/.test(a)]),
            (w =
              (k[1] ? ((B = null), (J = "BlackBerry")) : "Device Software") +
              " " +
              k[0]),
            (g = null))
          : this != b &&
          "Wii" != B &&
          ((O && N) ||
            (/Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
            ("Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(w)) ||
            ("IE" == u &&
              ((w && !/^Win/.test(w) && 5.5 < g) ||
                (/\bWindows XP\b/.test(w) && 8 < g) ||
                (8 == g && !/\bTrident\b/.test(a))))) &&
          !v.test((k = p.call(b, a.replace(v, "") + ";"))) &&
          k.name &&
          ((k = "ing as " + k.name + ((k = k.version) ? " " + k : "")),
            v.test(u)
              ? (/\bIE\b/.test(k) && "Mac OS" == w && (w = null),
                (k = "identify" + k))
              : ((k = "mask" + k),
                (u = S ? c(S.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(k) && (w = null),
                O || (g = null)),
            (A = ["Presto"]),
            r.push(k));
    else u += " Mobile";
    if ((k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k];
      if ("Safari" == u && "+" == k[1].slice(-1))
        (u = "WebKit Nightly"), (U = "alpha"), (g = k[1].slice(0, -1));
      else if (
        g == k[1] ||
        g == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        g = null;
      k[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == k[0] &&
        537.36 == k[2] &&
        28 <= parseFloat(k[1]) &&
        "WebKit" == A &&
        (A = ["Blink"]);
      O && (C || k[1])
        ? (A && (A[1] = "like Chrome"),
          (k =
            k[1] ||
            ((k = k[0]),
              530 > k
                ? 1
                : 532 > k
                  ? 2
                  : 532.05 > k
                    ? 3
                    : 533 > k
                      ? 4
                      : 534.03 > k
                        ? 5
                        : 534.07 > k
                          ? 6
                          : 534.1 > k
                            ? 7
                            : 534.13 > k
                              ? 8
                              : 534.16 > k
                                ? 9
                                : 534.24 > k
                                  ? 10
                                  : 534.3 > k
                                    ? 11
                                    : 535.01 > k
                                      ? 12
                                      : 535.02 > k
                                        ? "13+"
                                        : 535.07 > k
                                          ? 15
                                          : 535.11 > k
                                            ? 16
                                            : 535.19 > k
                                              ? 17
                                              : 536.05 > k
                                                ? 18
                                                : 536.1 > k
                                                  ? 19
                                                  : 537.01 > k
                                                    ? 20
                                                    : 537.11 > k
                                                      ? "21+"
                                                      : 537.13 > k
                                                        ? 23
                                                        : 537.18 > k
                                                          ? 24
                                                          : 537.24 > k
                                                            ? 25
                                                            : 537.36 > k
                                                              ? 26
                                                              : "Blink" != A
                                                                ? "27"
                                                                : "28")))
        : (A && (A[1] = "like Safari"),
          (k =
            ((k = k[0]),
              400 > k
                ? 1
                : 500 > k
                  ? 2
                  : 526 > k
                    ? 3
                    : 533 > k
                      ? 4
                      : 534 > k
                        ? "4+"
                        : 535 > k
                          ? 5
                          : 537 > k
                            ? 6
                            : 538 > k
                              ? 7
                              : 601 > k
                                ? 8
                                : "8")));
      A &&
        (A[1] +=
          " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+"));
      "Safari" == u && (!g || 45 < parseInt(g)) && (g = k);
    }
    "Opera" == u && (k = /\bzbov|zvav$/.exec(w))
      ? ((u += " "),
        r.unshift("desktop mode"),
        "zvav" == k ? ((u += "Mini"), (g = null)) : (u += "Mobile"),
        (w = w.replace(RegExp(" *" + k + "$"), "")))
      : "Safari" == u &&
      /\bChrome\b/.exec(A && A[1]) &&
      (r.unshift("desktop mode"),
        (u = "Chrome Mobile"),
        (g = null),
        /\bOS X\b/.test(w) ? ((J = "Apple"), (w = "iOS 4.3+")) : (w = null));
    g &&
      0 == g.indexOf((k = /[\d.]+$/.exec(w))) &&
      -1 < a.indexOf("/" + k + "-") &&
      (w = String(w.replace(k, "")).replace(/^ +| +$/g, ""));
    A &&
      !/\b(?:Avant|Nook)\b/.test(u) &&
      (/Browser|Lunascape|Maxthon/.test(u) ||
        ("Safari" != u && /^iOS/.test(w) && /\bSafari\b/.test(A[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          u
        ) &&
          A[1])) &&
      (k = A[A.length - 1]) &&
      r.push(k);
    r.length && (r = ["(" + r.join("; ") + ")"]);
    J && B && 0 > B.indexOf(J) && r.push("on " + J);
    B && r.push((/^on /.test(r[r.length - 1]) ? "" : "on ") + B);
    if (w) {
      var W =
        (k = / ([\d.+]+)$/.exec(w)) &&
        "/" == w.charAt(w.length - k[0].length - 1);
      w = {
        architecture: 32,
        family: k && !W ? w.replace(k[0], "") : w,
        version: k ? k[1] : null,
        toString: function () {
          var a = this.version;
          return (
            this.family +
            (a && !W ? " " + a : "") +
            (64 == this.architecture ? " 64-bit" : "")
          );
        },
      };
    }
    (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(T)) && !/\bi686\b/i.test(T)
      ? (w &&
        ((w.architecture = 64),
          (w.family = w.family.replace(RegExp(" *" + k), ""))),
        u &&
        (/\bWOW64\b/i.test(a) ||
          (O &&
            /\w(?:86|32)$/.test(n.cpuClass || n.platform) &&
            !/\bWin64; x64\b/i.test(a))) &&
        r.unshift("32-bit"))
      : w &&
      /^OS X/.test(w.family) &&
      "Chrome" == u &&
      39 <= parseFloat(g) &&
      (w.architecture = 64);
    a || (a = null);
    h = {};
    h.description = a;
    h.layout = A && A[0];
    h.manufacturer = J;
    h.name = u;
    h.prerelease = U;
    h.product = B;
    h.ua = a;
    h.version = u && g;
    h.os = w || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    h.parse = p;
    h.toString = function () {
      return this.description || "";
    };
    h.version && r.unshift(g);
    h.name && r.unshift(u);
    w &&
      u &&
      (w != String(w).split(" ")[0] || (w != u.split(" ")[0] && !B)) &&
      r.push(B ? "(" + w + ")" : "on " + w);
    r.length && (h.description = r.join(" "));
    return h;
  }
  var n = { function: !0, object: !0 },
    t = (n[typeof window] && window) || this,
    h = n[typeof exports] && exports;
  n = n[typeof module] && module && !module.nodeType && module;
  var m = h && n && "object" == typeof global && global;
  !m || (m.global !== m && m.window !== m && m.self !== m) || (t = m);
  var g = Math.pow(2, 53) - 1,
    v = /\bOpera/;
  m = Object.prototype;
  var r = m.hasOwnProperty,
    D = m.toString,
    C = p();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((t.platform = C),
      define(function () {
        return C;
      }))
    : h && n
      ? b(C, function (a, b) {
        h[b] = a;
      })
      : (t.platform = C);
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
    d = 0;
    d < a.length;
    d++
  ) {
    var c = document.createElement("meta");
    c.name = a[d].name;
    c.content = a[d].content;
    var b = window.document.head.querySelector('meta[name="' + c.name + '"]');
    b && b.parentNode.removeChild(b);
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
$(document).ready(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" !== platform.name.toLowerCase() &&
    (buildIOSFullscreenPanel(), buildIOSMeta());
});
jQuery(window).resize(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" !== platform.name.toLowerCase() &&
    iosResize();
});
var s_iScaleFactor = 1,
  s_bIsIphone = !1,
  s_iOffsetX,
  s_iOffsetY;
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
  // console.log(a);
}
function getSize(a) {
  var d = a.toLowerCase(),
    c = window.document,
    b = c.documentElement;
  if (void 0 === window["inner" + a]) a = b["client" + a];
  else if (window["inner" + a] != b["client" + a]) {
    var e = c.createElement("body");
    e.id = "vpw-test-b";
    e.style.cssText = "overflow:scroll";
    var f = c.createElement("div");
    f.id = "vpw-test-d";
    f.style.cssText = "position:absolute;top:-1000px";
    f.innerHTML =
      "<style>@media(" +
      d +
      ":" +
      b["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      d +
      ":7px!important}}</style>";
    e.appendChild(f);
    b.insertBefore(e, c.head);
    a = 7 == f["offset" + a] ? b["client" + a] : window["inner" + a];
    b.removeChild(e);
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
function isChrome() {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
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
    var d = getSize("Width");
    _checkOrientation(d, a);
    var c = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
      b = Math.round(CANVAS_WIDTH * c);
    c = Math.round(CANVAS_HEIGHT * c);
    if (c < a) {
      var e = a - c;
      c += e;
      b += (CANVAS_WIDTH / CANVAS_HEIGHT) * e;
    } else
      b < d &&
        ((e = d - b), (b += e), (c += (CANVAS_HEIGHT / CANVAS_WIDTH) * e));
    e = a / 2 - c / 2;
    var f = d / 2 - b / 2,
      l = CANVAS_WIDTH / b;
    if (f * l < -EDGEBOARD_X || e * l < -EDGEBOARD_Y)
      (c = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (b = Math.round(CANVAS_WIDTH * c)),
        (c = Math.round(CANVAS_HEIGHT * c)),
        (e = (a - c) / 2),
        (f = (d - b) / 2),
        (l = CANVAS_WIDTH / b);
    s_iOffsetX = -1 * f * l;
    s_iOffsetY = -1 * e * l;
    0 <= e && (s_iOffsetY = 0);
    0 <= f && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_iScaleFactor = Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * b),
        (s_oStage.canvas.height = 2 * c),
        (canvas.style.width = b + "px"),
        (canvas.style.height = c + "px"),
        (s_iScaleFactor = 2 * Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor))
      : s_bMobile || isChrome()
        ? ($("#canvas").css("width", b + "px"),
          $("#canvas").css("height", c + "px"))
        : ((s_oStage.canvas.width = b),
          (s_oStage.canvas.height = c),
          (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > e || (e = (a - c) / 2);
    $("#canvas").css("top", e + "px");
    $("#canvas").css("left", f + "px");
    fullscreenHandler();
  }
}
function _checkOrientation(a, d) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > d
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
function createBitmap(a, d, c) {
  var b = new createjs.Bitmap(a),
    e = new createjs.Shape();
  d && c
    ? e.graphics.beginFill("#fff").drawRect(0, 0, d, c)
    : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  b.hitArea = e;
  return b;
}
function createSprite(a, d, c, b, e, f) {
  a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
  d = new createjs.Shape();
  d.graphics.beginFill("#000000").drawRect(-c, -b, e, f);
  a.hitArea = d;
  return a;
}
function randomFloatBetween(a, d, c) {
  "undefined" === typeof c && (c = 2);
  return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(c));
}
function shuffle(a) {
  for (var d = a.length, c, b; 0 !== d;)
    (b = Math.floor(Math.random() * d)),
      --d,
      (c = a[d]),
      (a[d] = a[b]),
      (a[b] = c);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var d = Math.floor(a / 60);
  a = parseFloat(a - 60 * d).toFixed(1);
  var c = "";
  c = 10 > d ? c + ("0" + d + ":") : c + (d + ":");
  return 10 > a ? c + ("0" + a) : c + a;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var d = Array.prototype.slice.call(arguments);
  return a.sort(function (a, b) {
    for (var c = d.slice(), f = c.shift(); a[f] == b[f] && c.length;)
      f = c.shift();
    return a[f] == b[f] ? 0 : a[f] > b[f] ? 1 : -1;
  });
};
function roundDecimal(a, d) {
  var c = Math.pow(10, d);
  return Math.round(c * a) / c;
}
function tweenVectors(a, d, c, b) {
  b.set(
    a.getX() + c * (d.getX() - a.getX()),
    a.getY() + c * (d.getY() - a.getY())
  );
  return b;
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
      var d = document.createEvent("MouseEvents");
      d.initEvent("click", !0, !0);
      a.dispatchEvent(d);
    }
  },
};
function playSound(a, d, c) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(d),
      s_aSounds[a].loop(c),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, d) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(d);
}
function setMute(a, d) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(d);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var d = window.location.search.substring(1).split("&"), c = 0;
    c < d.length;
    c++
  ) {
    var b = d[c].split("=");
    if (b[0] == a) return b[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    !1 !== screenfull.isEnabled &&
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
    d,
    c,
    b,
    e,
    f,
    l;
  this.init = function (a, p, n) {
    d = {};
    b = c = 0;
    e = a;
    f = p;
    l = n;
  };
  this.addSprite = function (b, e) {
    if (a.hasOwnProperty(b)) return !1;
    var f = new Image();
    a[b] = d[b] = { szPath: e, oSprite: f, bLoaded: !1 };
    c++;
    return !0;
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    c = 0;
    f.call(l);
  };
  this._onSpriteLoaded = function () {
    e.call(l);
    ++b === c && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var a in d)
      (d[a].oSprite.oSpriteLibrary = this),
        (d[a].oSprite.szKey = a),
        (d[a].oSprite.onload = function () {
          this.oSpriteLibrary.setLoaded(this.szKey);
          this.oSpriteLibrary._onSpriteLoaded(this.szKey);
        }),
        (d[a].oSprite.onerror = function (a) {
          var b = a.currentTarget;
          setTimeout(function () {
            d[b.szKey].oSprite.src = d[b.szKey].szPath;
          }, 500);
        }),
        (d[a].oSprite.src = d[a].szPath);
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
  CURRENT_BET = "PLAYER",
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 170,
  EDGEBOARD_Y = 0,
  FPS_TIME = 1e3 / 24,
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
  STATE_GAME_SHOW_WINNER = 2,
  STATE_CARD_DEALING = 0,
  STATE_CARD_REMOVING = 1,
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
  NUM_FICHES = 5,
  CARD_WIDTH = 66,
  CARD_HEIGHT = 102,
  MIN_BET,
  MAX_BET,
  TOTAL_MONEY,
  FICHE_WIDTH,
  WIN_OCCURRENCE,
  BET_OCCURRENCE,
  FICHES_VALUE,
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 350,
  TIME_CARD_REMOVE = 1e3,
  TIME_SHOW_FINAL_CARDS = 4e3,
  TIME_END_HAND,
  BET_TIME = 1e4,
  AD_SHOW_COUNTER,
  NUM_DECKS = 4,
  COLOR_FICHE_PER_VALUE = "#000 #000 #000 #000 #000 #000".split(" "),
  BET_TIE = 0,
  BET_BANKER = 1,
  BET_PLAYER = 2,
  WIN_TIE = 0,
  WIN_DEALER = 1,
  WIN_PLAYER = 2,
  POS_BET = [],
  MULTIPLIERS = [],
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS,
  TEXT_BET = ["TIE", "BANKER", "PLAYER"],
  TEXT_WIN = "WIN",
  TEXT_SHOW_WIN = ["TIE - PAYS 8 TO 1", TEXT_BET[1], TEXT_BET[2]],
  TEXT_NO_WIN = "NO WIN",
  TEXT_PLAY = "PLAY",
  TEXT_CLEAR = "CLEAR",
  TEXT_REBET = "REBET",
  TEXT_DEAL = "DEAL",
  TEXT_MIN_BET = "MIN BET",
  TEXT_MAX_BET = "MAX BET",
  TEXT_NO = "NO",
  TEXT_YES = "YES",
  TEXT_RECHARGE = "RECHARGE",
  TEXT_EXIT = "EXIT",
  TEXT_MONEY = "MONEY",
  TEXT_CURRENCY = "$",
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_OUTCOME = "OUTCOME: ",
  TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET",
  TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!",
  TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS",
  TEXT_DISPLAY_TIE = "THIS HAND IS A TIE!",
  TEXT_DISPLAY_MSG_DEALING = "DEALING...",
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
  TEXT_HAND_WON = "HAND WON BY",
  TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!",
  TEXT_SHARE_IMAGE = "200x200.jpg",
  TEXT_SHARE_TITLE = "Congratulations!",
  TEXT_SHARE_MSG1 = "You collected <strong>",
  TEXT_SHARE_MSG2 =
    " points</strong>!<br><br>Share your score with your friends!",
  TEXT_SHARE_SHARE1 = "My score is ",
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CPreloader() {
  var a, d, c, b, e, f, l, q, p;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.loadSprites();
    p = new createjs.Container();
    s_oStage.addChild(p);
  };
  this.unload = function () {
    p.removeAllChildren();
  };
  this._onImagesLoaded = function () { };
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var n = new createjs.Shape();
    n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p.addChild(n);
    n = s_oSpriteLibrary.getSprite("200x200");
    l = createBitmap(n);
    l.regX = 0.5 * n.width;
    l.regY = 0.5 * n.height;
    l.x = CANVAS_WIDTH / 2;
    l.y = CANVAS_HEIGHT / 2 - 180;
    p.addChild(l);
    q = new createjs.Shape();
    q.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(l.x - 100, l.y - 100, 200, 200, 10);
    p.addChild(q);
    l.mask = q;
    n = s_oSpriteLibrary.getSprite("progress_bar");
    b = createBitmap(n);
    b.x = CANVAS_WIDTH / 2 - n.width / 2;
    b.y = CANVAS_HEIGHT / 2 + 50;
    p.addChild(b);
    a = n.width;
    d = n.height;
    e = new createjs.Shape();
    e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, d);
    p.addChild(e);
    b.mask = e;
    c = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
    c.x = CANVAS_WIDTH / 2;
    c.y = CANVAS_HEIGHT / 2 + 100;
    c.textBaseline = "alphabetic";
    c.textAlign = "center";
    p.addChild(c);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p.addChild(f);
    createjs.Tween.get(f)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(f);
        p.removeChild(f);
      });
  };
  this.refreshLoader = function (f) {
    c.text = f + "%";
    100 === f &&
      (s_oMain._onRemovePreloader(), (c.visible = !1), (b.visible = !1));
    e.graphics.clear();
    f = Math.floor((f * a) / 100);
    e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, f, d);
  };
  this._init();
}
function CMain(a) {
  var d,
    c = 0,
    b = 0,
    e = STATE_LOADING,
    f,
    l;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage, !0);
    s_bMobile = isMobile();
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    seekAndDestroy()
      ? (f = new CPreloader())
      : (window.location.href = "http://www.codethislab.com/contact-us.html");
    s_oGameSettings = new CGameSettings();
    d = !0;
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
  };
  this.soundLoaded = function () {
    c++;
    f.refreshLoader(Math.floor((c / b) * 100));
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
      filename: "press_but",
      loop: !1,
      volume: 1,
      ingamename: "press_but",
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
    b += s_aSoundsInfo.length;
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
      "./sprites/card_spritesheet.png"
    );
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite(
      "fiche_highlight",
      "./sprites/fiche_highlight.png"
    );
    s_oSpriteLibrary.addSprite("bet_banker", "./sprites/bet_banker.png");
    s_oSpriteLibrary.addSprite("bet_tie", "./sprites/bet_tie.png");
    s_oSpriteLibrary.addSprite("bet_player", "./sprites/bet_player.png");
    s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
    s_oSpriteLibrary.addSprite("history_cell", "./sprites/history_cell.png");
    s_oSpriteLibrary.addSprite(
      "history_highlight",
      "./sprites/history_highlight.png"
    );
    s_oSpriteLibrary.addSprite(
      "paytable_ante_bg",
      "./sprites/paytable_ante_bg.png"
    );
    s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png");
    s_oSpriteLibrary.addSprite("history_bg", "./sprites/history_bg.png");
    s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
    s_oSpriteLibrary.addSprite("but_deal", "./sprites/but_deal.png");
    s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
    s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg1.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    b += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    c++;
    f.refreshLoader(Math.floor((c / b) * 100));
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
    l = new CGame(q);
    e = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    e = STATE_HELP;
  };
  this.stopUpdate = function () {
    d = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    d = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (d) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      e === STATE_GAME && l.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var q = a;
  ENABLE_CHECK_ORIENTATION = q.check_orientation;
  ENABLE_FULLSCREEN = q.fullscreen;
  SHOW_CREDITS = a.show_credits;
  s_bAudioActive = a.audio_enable_on_startup;
  this.initContainer();
}
var s_bMobile,
  s_bAudioActive = !0,
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
  s_bFullscreen = !1;
function CTextButton(a, d, c, b, e, f, l, q) {
  var p, n, t, h, m, g, v, r, D, C;
  this._init = function (a, b, c, d, e, g, m) {
    p = !1;
    n = 1;
    t = [];
    h = [];
    C = createBitmap(c);
    r = new createjs.Container();
    r.x = a;
    r.y = b;
    r.regX = c.width / 2;
    r.regY = c.height / 2;
    s_bMobile || (r.cursor = "pointer");
    r.addChild(C, D);
    q.addChild(r);
    D = new CTLText(
      r,
      10,
      5,
      c.width - 20,
      c.height - 10,
      m,
      "center",
      g,
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
    r.off("mousedown", m);
    r.off("pressup", g);
    q.removeChild(r);
  };
  this.setVisible = function (a) {
    r.visible = a;
  };
  this.setAlign = function (a) {
    D.textAlign = a;
  };
  this.setTextX = function (a) {
    D.x = a;
  };
  this.setScale = function (a) {
    n = r.scaleX = r.scaleY = a;
  };
  this.enable = function () {
    p = !1;
  };
  this.disable = function () {
    p = !0;
  };
  this._initListener = function () {
    m = r.on("mousedown", this.buttonDown);
    g = r.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    t[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    t[a] = b;
    h[a] = c;
    v = d;
  };
  this.buttonRelease = function () {
    p ||
      (playSound("press_but", 1, !1),
        (r.scaleX = n),
        (r.scaleY = n),
        t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(h[ON_MOUSE_UP], v));
  };
  this.buttonDown = function () {
    p ||
      ((r.scaleX = 0.9 * n),
        (r.scaleY = 0.9 * n),
        t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    r.x = a;
    r.y = b;
  };
  this.tweenPosition = function (a, b, c, d, e, h, g) {
    createjs.Tween.get(r)
      .wait(d)
      .to({ x: a, y: b }, c, e)
      .call(function () {
        void 0 !== h && h.call(g);
      });
  };
  this.changeText = function (a) {
    D.refreshText(a);
  };
  this.setX = function (a) {
    r.x = a;
  };
  this.setY = function (a) {
    r.y = a;
  };
  this.getButtonImage = function () {
    return r;
  };
  this.getX = function () {
    return r.x;
  };
  this.getY = function () {
    return r.y;
  };
  this.getSprite = function () {
    return r;
  };
  this.getScale = function () {
    return r.scaleX;
  };
  this._init(a, d, c, b, e, f, l);
}
function CGfxButton(a, d, c, b) {
  var e,
    f,
    l,
    q,
    p,
    n = [],
    t,
    h,
    m;
  this._init = function (a, b, c) {
    e = !1;
    q = [];
    p = [];
    f = c.width;
    l = c.height;
    m = createBitmap(c);
    m.x = a;
    m.y = b;
    m.regX = c.width / 2;
    m.regY = c.height / 2;
    m.cursor = "pointer";
    g.addChild(m);
    this._initListener();
  };
  this.unload = function () {
    m.off("mousedown", t);
    m.off("pressup", h);
    g.removeChild(m);
  };
  this.setVisible = function (a) {
    m.visible = a;
  };
  this._initListener = function () {
    t = m.on("mousedown", this.buttonDown);
    h = m.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    p[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    q[a] = b;
    p[a] = c;
    n = d;
  };
  this.buttonRelease = function (a) {
    a.stopPropagation();
    a.preventDefault();
    e ||
      (playSound("press_but", 1, !1),
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(p[ON_MOUSE_UP], n));
  };
  this.buttonDown = function () {
    e || (q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], n));
  };
  this.setPosition = function (a, b) {
    m.x = a;
    m.y = b;
  };
  this.setX = function (a) {
    m.x = a;
  };
  this.setY = function (a) {
    m.y = a;
  };
  this.enable = function () {
    e = !1;
    m.filters = [];
    m.cache(0, 0, f, l);
  };
  this.disable = function () {
    e = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    m.filters = [new createjs.ColorMatrixFilter(a)];
    m.cache(0, 0, f, l);
  };
  this.getButtonImage = function () {
    return m;
  };
  this.getX = function () {
    return m.x;
  };
  this.getY = function () {
    return m.y;
  };
  var g = b;
  this._init(a, d, c);
  return this;
}
function CGuiButton(a, d, c, b, e, f, l, q) {
  var p, n, t, h, m, g, v;
  this._init = function (a, b, c, d, e, f, l, q) {
    p = !1;
    n = [];
    t = [];
    v = q;
    h = new createjs.Container();
    h.x = a;
    h.y = b;
    h.regX = c.width / 2;
    h.regY = c.height / 2;
    v.addChild(h);
    m = createBitmap(c);
    h.addChild(m);
    g = new CTLText(
      h,
      10,
      c.height - l - 3,
      c.width / 2,
      l,
      l,
      "left",
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
    h.off("mousedown");
    h.off("pressup");
    v.removeChild(h);
  };
  this.setVisible = function (a) {
    h.visible = a;
  };
  this.enable = function () {
    p = !1;
    g.setColor("#fff");
  };
  this.disable = function () {
    p = !0;
    g.setColor("#a39b9d");
  };
  this._initListener = function () {
    h.on("mousedown", this.buttonDown);
    h.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    n[a] = b;
    t[a] = c;
  };
  this.buttonRelease = function () {
    p ||
      (playSound("press_but", 1, !1),
        (h.scaleX = 1),
        (h.scaleY = 1),
        n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(t[ON_MOUSE_UP]));
  };
  this.buttonDown = function () {
    p ||
      ((h.scaleX = 0.9),
        (h.scaleY = 0.9),
        n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    h.x = a;
    h.y = b;
  };
  this.changeText = function (a) {
    g.refreshText(a);
  };
  this.setX = function (a) {
    h.x = a;
  };
  this.setY = function (a) {
    h.y = a;
  };
  this.getButtonImage = function () {
    return h;
  };
  this.getX = function () {
    return h.x;
  };
  this.getY = function () {
    return h.y;
  };
  this._init(a, d, c, b, e, f, l, q);
  return this;
}
function CToggle(a, d, c, b, e) {
  var f,
    l,
    q,
    p,
    n = [],
    t,
    h,
    m;
  this._init = function (a, b, c, d, e) {
    q = [];
    p = [];
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
    l = e;
    m = createSprite(
      h,
      "state_" + f,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    m.x = a;
    m.y = b;
    m.cursor = "pointer";
    m.stop();
    s_oStage.addChild(m);
    this._initListener();
  };
  this.unload = function () {
    m.off("mousedown", t);
    m.off("pressup", h);
    s_oStage.removeChild(m);
  };
  this._initListener = function () {
    t = m.on("mousedown", this.buttonDown);
    h = m.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    p[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    q[a] = b;
    p[a] = c;
    n = d;
  };
  this.setActive = function (a) {
    f = a;
    m.gotoAndStop("state_" + f);
  };
  this.buttonRelease = function () {
    m.scaleX = 1;
    m.scaleY = 1;
    playSound("press_but", 1, !1);
    l && ((f = !f), m.gotoAndStop("state_" + f));
    q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(p[ON_MOUSE_UP], n);
  };
  this.buttonDown = function () {
    m.scaleX = 0.9;
    m.scaleY = 0.9;
    q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], n);
  };
  this.setPosition = function (a, b) {
    m.x = a;
    m.y = b;
  };
  this.setVisible = function (a) {
    m.visible = a;
  };
  this.getY = function () {
    return m.y;
  };
  this._init(a, d, c, b, e);
}
function CMenu() {
  var a,
    d,
    c,
    b,
    e,
    f,
    l,
    q = null,
    p = null,
    n,
    t,
    h,
    m,
    g;
  this._init = function () {
    t = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(t);
    var v = s_oSpriteLibrary.getSprite("but_menu_bg");
    h = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, v, s_oStage);
    h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (v = s_oSpriteLibrary.getSprite("audio_icon")),
        (e = CANVAS_WIDTH - v.width / 4 - 10),
        (f = v.height / 2 + 10),
        (m = new CToggle(e, f, v, s_bAudioActive, !0)),
        m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    SHOW_CREDITS
      ? ((v = s_oSpriteLibrary.getSprite("but_credits")),
        (a = 10 + v.width / 2),
        (d = v.height / 2 + 10),
        (n = new CGfxButton(a, d, v, s_oStage)),
        n.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (c = a + v.width + 10),
        (b = d))
      : ((v = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (c = 10 + v.width / 4),
        (b = v.height / 2 + 10));
    v = window.document;
    var r = v.documentElement;
    q =
      r.requestFullscreen ||
      r.mozRequestFullScreen ||
      r.webkitRequestFullScreen ||
      r.msRequestFullscreen;
    p =
      v.exitFullscreen ||
      v.mozCancelFullScreen ||
      v.webkitExitFullscreen ||
      v.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (q = !1);
    q &&
      screenfull.isEnabled &&
      ((v = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (l = new CToggle(c, b, v, s_bFullscreen, s_oStage)),
        l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    g = new createjs.Shape();
    g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(g);
    createjs.Tween.get(g)
      .to({ alpha: 0 }, 400)
      .call(function () {
        g.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (h, g) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      m.setPosition(e - h, g + f);
    q && screenfull.isEnabled && l.setPosition(c + h, b + g);
    SHOW_CREDITS && n.setPosition(a + h, d + g);
  };
  this.unload = function () {
    h.unload();
    h = null;
    SHOW_CREDITS && n.unload();
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), (m = null);
    q && screenfull.isEnabled && l.unload();
    s_oStage.removeAllChildren();
    s_oMenu = null;
  };
  this._onButPlayRelease = function () {
    this.unload();
    s_oMain.gotoGame();
    $(s_oMain).trigger("start_session");
  };
  this._onCredits = function () {
    new CCreditsPanel();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    q && screenfull.isEnabled && l.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? p.call(window.document)
      : q.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var d = !1,
    c,
    b,
    e,
    f,
    l,
    q,
    p,
    n,
    t,
    h,
    m,
    g,
    v,
    r,
    D,
    C,
    K,
    H,
    I,
    Q,
    M,
    L,
    y,
    x,
    P,
    G;
  this._init = function () {
    e = MAX_BET;
    f = -1;
    n = b = 0;
    r = [];
    for (var a = 0; a < BET_OCCURRENCE.length; a++)
      for (var c = 0; c < BET_OCCURRENCE[a]; c++) r.push(a);
    s_oTweenController = new CTweenController();
    L = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(L);
    a = s_oSpriteLibrary.getSprite("gui_bg");
    c = createBitmap(a);
    c.y = CANVAS_HEIGHT - a.height;
    s_oStage.addChild(c);
    M = new createjs.Container();
    s_oStage.addChild(M);
    y = new CInterface(TOTAL_MONEY);
    y.displayMsg(
      TEXT_DISPLAY_MSG_WAITING_BET,
      TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET
    );
    x = new CSeat();
    x.setCredit(TOTAL_MONEY);
    cursorHelper = new CHelpCursor(
      480,
      550,
      s_oSpriteLibrary.getSprite("help_cursor"),
      s_oStage
    );
    cursorHelper.show(1);
    this.reset(!1);
    C = new CVector2();
    C.set(1214, 228);
    K = new CVector2();
    K.set(CANVAS_WIDTH / 2 + 100, 230);
    H = new CVector2();
    H.set(418, 820);
    I = new CVector2();
    I.set(0, -CANVAS_HEIGHT);
    Q = new CVector2(454, 230);
    v = [x.getCardOffset(), K];
    G = new CGameOver();
    x.getCredit() < FICHES_VALUE[0]
      ? (this._gameOver(), this.changeState(-1))
      : (d = !0);
    D = new CVector2(C.getX(), C.getY());
    P = new CMsgBox();
    this.changeState(STATE_GAME_WAITING_FOR_BET);
  };
  this.unload = function () {
    d = !1;
    for (var a = 0; a < t.length; a++) t[a].unload();
    y.unload();
    G.unload();
    P.unload();
    s_oStage.removeAllChildren();
  };
  this.reset = function (a) {
    c = !1;
    q = p = l = b = 0;
    x.reset();
    t = [];
    t.splice(0);
    y.reset();
    this.shuffleCard();
    cursorHelper.show(1);
    y.enableBetFiches(a);
  };
  this.setMoney = function (a) {
    x.setCredit(a);
    y.refreshCredit(a);
    G.hide();
  };
  this.shuffleCard = function () {
    m = [];
    m = s_oGameSettings.getShuffledCardDeck();
  };
  this.changeState = async function (a) {
    f = a;
    if (f === STATE_GAME_DEALING) {
      y.disableBetFiches();
      const random = new Random();
      let randomNumber = random.integer(1, 100);
      a = x.getBetArray();
      let betedPlace = 0;
      let compareNumber = WIN_OCCURRENCE;
      for (var c = 0, d = 0; d < a.length; d++) 0 < a[d] && (c++, betedPlace = d);
      if (c === 1 && betedPlace === 0) compareNumber /= 8;

      const data = await $.ajax({
        url: 'http://localhost:6140/api/games/manageGamebaccarat',
        type: 'POST',
        data: {
          customerId: customerid,
          gameId: gameid,
          bets: a,
          randomNumber,
          betNumber: c
        }
      })
      console.log('data :>> ', data);
      if(data.gameStatus == false) {
        alert("Sorry, Something went wrong, please login again");
        window.location.reload()
      }
      compareNumber = data.win_percent
      c = 1;
      a = data.re_bets
      if (randomNumber < compareNumber) {
        if (1 === c) {
          for (d = 0; d < a.length; d++) {
            var e = 0;
            if (0 !== a[d]) {
              e = d;
              break;
            }
          }
          d = e;
        } else {
          do d = r[Math.floor(Math.random() * r.length)];
          while (0 === a[d]);
        }
        do
          6 > m.length && this.shuffleCard(),
            (a = []),
            a.push(m.splice(0, 1)),
            a.push(m.splice(0, 1)),
            (b = []),
            b.push(m.splice(0, 1)),
            b.push(m.splice(0, 1)),
            (e = this._simulateHand(a, b));
        while (d !== e);
      } else {
        if (3 === c)
          (b = Math.random()), (d = 0.5 < b ? BET_BANKER : BET_PLAYER);
        else {
          d = [];
          for (b = 0; b < a.length; b++) 0 === a[b] && d.push(b);
          b = Math.floor(Math.random() * d.length);
          d = d[b];
        }
        do
          6 > m.length && this.shuffleCard(),
            (a = []),
            a.push(m.splice(0, 1)),
            a.push(m.splice(0, 1)),
            (b = []),
            b.push(m.splice(0, 1)),
            b.push(m.splice(0, 1)),
            (e = this._simulateHand(a, b));
        while (d !== e);
      }
      g = [];
      for (d = 0; d < a.length; d++) g[d] = a[d];
      h = [];
      for (d = 0; d < b.length; d++) h[d] = b[d];

      console.log('======', d, '=======', a, "==========", c)
      y.disableButtons();
      y.disableBetFiches();
      y.displayMsg(TEXT_DISPLAY_MSG_DEALING, "");
      this._dealing();
    }
  };
  this._simulateHand = function (a, b) {
    for (var c = 0, d = 0, e = 0; e < a.length; e++)
      (c += s_oGameSettings.getCardValue(a[e])),
        (d += s_oGameSettings.getCardValue(b[e]));
    c %= 10;
    d %= 10;
    if (7 < d) return (c = d > c ? WIN_DEALER : d === c ? WIN_TIE : WIN_PLAYER);
    e = !1;
    if (7 < c) return WIN_PLAYER;
    if (6 > c) {
      var h = m.splice(0, 1),
        g = s_oGameSettings.getCardValue(h);
      a.push(h);
      c = (c + g) % 10;
      3 > d
        ? (e = !0)
        : 3 === d && 8 !== g
          ? (e = !0)
          : 4 === d && 1 < g && 8 > g
            ? (e = !0)
            : 5 === d && 3 < g && 8 > g
              ? (e = !0)
              : 6 !== d || (6 !== g && 7 !== g) || (e = !1);
      e &&
        ((h = m.splice(0, 1)),
          b.push(h),
          (d += s_oGameSettings.getCardValue(h)),
          (d %= 10));
    } else
      6 > d &&
        ((h = m.splice(0, 1)),
          b.push(h),
          (d += s_oGameSettings.getCardValue(h)),
          (d %= 10));
    return d === c ? WIN_TIE : d > c ? WIN_DEALER : WIN_PLAYER;
  };
  this.cardFromDealerArrived = function (a, b, c) {
    !1 === b ? (q += a.getValue()) : (p += a.getValue());
    3 > c
      ? s_oGame._dealing()
      : ((q %= 10),
        (p %= 10),
        y.refreshCardValue(p, q),
        1 === g.length
          ? ((a = g.splice(0, 1)[0]),
            (b = new CCard(C.getX(), C.getY(), M)),
            b.setInfo(
              D,
              x.getAttachCardOffset(),
              a,
              s_oGameSettings.getCardValue(a),
              !1,
              l
            ),
            b.addEventListener(
              ON_CARD_ANIMATION_ENDING,
              s_oGame.cardFromDealerArrived
            ),
            x.newCardDealed(),
            l++,
            t.push(b))
          : 1 === h.length
            ? (l++,
              (c = new CVector2(K.getX() + (CARD_WIDTH * 4 / 5) * 2, K.getY())),
              (a = h.splice(0, 1)),
              (b = new CCard(C.getX(), C.getY(), M)),
              b.setInfo(D, c, a, s_oGameSettings.getCardValue(a), !0, l),
              b.addEventListener(
                ON_CARD_ANIMATION_ENDING,
                s_oGame.cardFromDealerArrived
              ),
              t.push(b))
            : s_oGame._showWin());
  };
  this._showWin = function () {
    var a = p === q ? BET_TIE : p > q ? BET_BANKER : BET_PLAYER;
    var b = x.getBetArray(),
      c = !1;
    if (a === BET_TIE && 0 < b[BET_TIE]) {
      var d = x.getPotentialWin(BET_TIE);
      this._playerWin(d, a, !0);
      this._playerWin(b[BET_BANKER], BET_BANKER, !1);
      this._playerWin(b[BET_PLAYER], BET_PLAYER, !1);
      c = !0;
      y.showWin(BET_TIE, d);
      y.showWin(BET_BANKER, 0);
      y.showWin(BET_PLAYER, 0);
    } else
      for (var e = 0; e < b.length; e++)
        0 < b[e] &&
          ((d = 0),
            a === e
              ? (this._playerWin(x.getPotentialWin(e), a, !0),
                (d = x.getPotentialWin(e)),
                (c = !0))
              : this._playerLose(e, !1),
            y.showWin(e, d));
    c
      ? playSound("win", 1, !1)
      : (playSound("lose", 1, !1), this._playerLose(a, !0));
    setTimeout(function () {
      s_oGame._onEndHand(a);
      y.hideAllWins();
    }, TIME_END_HAND);
  };
  this._playerWin = function (a, b, c) {
    x.increaseCredit(a);
    E -= a;
    c &&
      y.displayMsg(
        TEXT_DISPLAY_MSG_PLAYER_WIN,
        TEXT_BET[b] === BET_TIE
          ? TEXT_DISPLAY_TIE
          : TEXT_OUTCOME + " " + TEXT_BET[b]
      );
    x.initMovement(b, H.getX(), H.getY());
  };
  this._playerLose = function (a, b) {
    b
      ? y.displayMsg(
        TEXT_DISPLAY_MSG_PLAYER_LOSE,
        TEXT_BET[a] === BET_TIE
          ? TEXT_DISPLAY_TIE
          : TEXT_OUTCOME + " " + TEXT_BET[a]
      )
      : x.initMovement(a, I.getX(), I.getY());
  };
  this._dealing = function () {
    if (l < 2 * v.length) {
      var a = new CCard(C.getX(), C.getY(), M);
      if (1 === l % v.length) {
        var b = new CVector2(
          K.getX() + (CARD_WIDTH * 4 / 5) * (1 < l ? 1 : 0),
          K.getY()
        );
        var c = h.splice(0, 1)[0];
        a.setInfo(D, b, c, s_oGameSettings.getCardValue(c), !0, l);
      } else
        (c = g.splice(0, 1)[0]),
          a.setInfo(
            D,
            x.getAttachCardOffset(),
            c,
            s_oGameSettings.getCardValue(c),
            !1,
            l
          ),
          x.newCardDealed();
      t.push(a);
      l++;
      a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
      a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
      playSound("card", 1, !1);
    }
  };
  this._onEndHand = function (a) {
    y.addHistoryRow(q, p, a);
    a = new CVector2(Q.getX(), Q.getY());
    for (var c = 0; c < t.length; c++) t[c].initRemoving(a), t[c].hideCard();
    y.clearCardValueText();
    b = 0;
    s_oGame.changeState(STATE_GAME_SHOW_WINNER);
    playSound("fiche_collect", 1, !1);
    n++;
    n === AD_SHOW_COUNTER &&
      ((n = 0), $(s_oMain).trigger("show_interlevel_ad"));
    $(s_oMain).trigger("save_score", [x.getCredit()]);
  };
  this.setBet = function (a, b, d) {
    // c && ((c = !1), this.clearBets());
    var h = x.getTotBet();
    h + a <= e &&
      a <= x.getCredit() &&
      ((h + a).toFixed(2),
        x.decreaseCredit(a),
        (E += a),
        x.bet(a, d, b),
        y.enable(!0, !1, !1, !1, !1),
        y.refreshCredit(x.getCredit()));
  };
  this._gameOver = function () {
    G.show();
  };
  this.onDeal = function () {
    x.getTotBet() < MIN_BET
      ? (P.show(TEXT_ERROR_MIN_BET), y.enableBetFiches(!1), y.enable(!0))
      : ($(s_oMain).trigger("bet_placed", x.getTotBet()),
        x.calculatePotentialWins(),
        this.changeState(STATE_GAME_DEALING));
    cursorHelper.hide();
  };
  this.clearBets = function () {
    var a = x.getStartingBet();
    if (0 < a) {
      x.clearBet();
      x.increaseCredit(a);
      E -= a;
      y.refreshCredit(x.getCredit());
      var b = x.checkIfRebetIsPossible();
      y.enableBetFiches(b);
      $(s_oMain).trigger("clear_bet", a);
    }
  };
  this.rebet = function () {
    this.clearBets();
    var a = x.rebet();
    E -= a;
    y.enable(!0, !1, !1, !1, !1);
    y.refreshCredit(x.getCredit());
    b = BET_TIME;
    c = !0;
  };
  this._onRemoveCard = function (a) {
    a.unload();
    y.displayMsg(
      TEXT_DISPLAY_MSG_WAITING_BET,
      TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET
    );
  };
  this.onExit = function () {
    this.unload();
    $(s_oMain).trigger("save_score", [x.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", x.getCredit());
    s_oMain.gotoMenu();
  };
  this.getState = function () {
    return f;
  };
  this._updateDealing = function () {
    for (var a = 0; a < t.length; a++) t[a].update();
  };
  this._updateShowWinner = function () {
    x.updateFichesController(s_iTimeElaps);
    for (var a = 0; a < t.length; a++) t[a].update();
    b += s_iTimeElaps;
    b > 1400 &&
      ((b = 0),
        (a = x.checkIfRebetIsPossible()),
        this.reset(a),
        y.reset(),
        x.getCredit() < FICHES_VALUE[0]
          ? (this._gameOver(), this.changeState(-1))
          : this.changeState(STATE_GAME_WAITING_FOR_BET),
        y.refreshCredit(x.getCredit()));
  };
  this.update = function () {
    if (!1 !== d)
      switch (f) {
        case STATE_GAME_DEALING:
          this._updateDealing();
          break;
        case STATE_GAME_SHOW_WINNER:
          this._updateShowWinner();
      }
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  MULTIPLIERS = a.multiplier;
  BET_TIME = a.bet_time;
  BLACKJACK_PAYOUT = a.blackjack_payout;
  WIN_OCCURRENCE = a.win_occurrence;
  BET_OCCURRENCE = a.bet_occurrence;
  var E = a.game_cash;
  TIME_END_HAND = a.time_show_hand;
  AD_SHOW_COUNTER = a.ad_show_counter;
  this._init();
}
var s_oGame, s_oTweenController;
function CInterface(a) {
  var d,
    c,
    b,
    e,
    f,
    l,
    q,
    p,
    n,
    t,
    h,
    m,
    g,
    v,
    r,
    D,
    C = null,
    K,
    H,
    I,
    Q,
    M,
    L,
    y,
    x,
    P,
    payTable,
    G,
    E = null,
    R = null;
  this._init = function (a) {
    var z = s_oSpriteLibrary.getSprite("but_exit");
    f = CANVAS_WIDTH - z.width / 2 - 10;
    l = z.height / 2 + 10;
    g = new CGfxButton(f, l, z, s_oStage);
    g.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (q = g.getX() - z.width - 10),
        (p = z.height / 2 + 10),
        (C = new CToggle(
          q,
          p,
          s_oSpriteLibrary.getSprite("audio_icon"),
          s_bAudioActive,
          !0
        )),
        C.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    z = window.document;
    var F = z.documentElement;
    E =
      F.requestFullscreen ||
      F.mozRequestFullScreen ||
      F.webkitRequestFullScreen ||
      F.msRequestFullscreen;
    R =
      z.exitFullscreen ||
      z.mozCancelFullScreen ||
      z.webkitExitFullscreen ||
      z.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (E = !1);
    E &&
      screenfull.isEnabled &&
      ((z = s_oSpriteLibrary.getSprite("but_fullscreen")),
        null === C
          ? ((d = g.getX() - z.width / 2 - 10), (c = z.height / 2 + 10))
          : ((d = q - z.width / 2 - 10), (c = z.height / 2 + 10)),
        (G = new CToggle(d, c, z, s_bFullscreen, !0)),
        G.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    z = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    z.x = 290;
    z.y = 6;
    s_oStage.addChild(z);
    x = new CGfxButton(
      CANVAS_WIDTH / 2,
      590,
      s_oSpriteLibrary.getSprite("bet_player"),
      s_oStage
    );
    x.addEventListener(ON_MOUSE_UP, this._onButPlayerRelease, this);
    y = new CGfxButton(
      CANVAS_WIDTH / 2,
      482,
      s_oSpriteLibrary.getSprite("bet_banker"),
      s_oStage
    );
    y.addEventListener(ON_MOUSE_UP, this._onButBankerRelease, this);
    L = new CGfxButton(
      CANVAS_WIDTH / 2,
      400,
      s_oSpriteLibrary.getSprite("bet_tie"),
      s_oStage
    );
    L.addEventListener(ON_MOUSE_UP, this._onButTieRelease, this);
    z = s_oSpriteLibrary.getSprite("but_clear");
    v = new CGuiButton(
      1362,
      CANVAS_HEIGHT - 180,
      z,
      " ",
      FONT_GAME_1,
      "#ffffff",
      17,
      s_oStage
    );
    v.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
    z = s_oSpriteLibrary.getSprite("but_rebet");
    r = new CGuiButton(
      1212,
      CANVAS_HEIGHT - z.height / 2,
      z,
      TEXT_REBET,
      FONT_GAME_1,
      "#ffffff",
      17,
      s_oStage
    );
    r.disable();
    r.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
    Q = new CTLText(
      s_oStage,
      412,
      12,
      190,
      50,
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
    M = new CTLText(
      s_oStage,
      412,
      64,
      190,
      40,
      19,
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
    H = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
    H.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    H.x = 910;
    H.y = 180;
    H.textAlign = "right";
    s_oStage.addChild(H);
    I = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
    I.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    I.x = 658;
    I.y = 180;
    I.textAlign = "right";
    s_oStage.addChild(I);
    new CTLText(
      s_oStage,
      350,
      CANVAS_HEIGHT - 150,
      110,
      40,
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
      !1,
      !1
    );
    K = new CTLText(
      s_oStage,
      470,
      CANVAS_HEIGHT - 150,
      190,
      40,
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
      !1,
      !1
    );
    z = s_oSpriteLibrary.getSprite("but_deal");
    D = new CGuiButton(
      1362,
      CANVAS_HEIGHT - z.height / 2,
      z,
      TEXT_DEAL,
      FONT_GAME_1,
      "#ffffff",
      26,
      s_oStage
    );
    D.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    m = [];
    m[BET_TIE] = new CWinDisplay(CANVAS_WIDTH + 100, 360, s_oStage);
    m[BET_BANKER] = new CWinDisplay(CANVAS_WIDTH + 100, 470, s_oStage);
    m[BET_PLAYER] = new CWinDisplay(CANVAS_WIDTH + 100, 580, s_oStage);
    POS_BET[BET_TIE] = { x: L.getX(), y: L.getY() + 15 };
    POS_BET[BET_BANKER] = { x: y.getX(), y: y.getY() + 35 };
    POS_BET[BET_PLAYER] = { x: x.getX(), y: x.getY() + 35 };
    a = [
      { x: 271, y: CANVAS_HEIGHT - 45 },
      { x: 392 + 20, y: CANVAS_HEIGHT - 45 },
      { x: 513 + 40, y: CANVAS_HEIGHT - 45 },
      { x: 634 + 60, y: CANVAS_HEIGHT - 45 },
      { x: 755 + 80, y: CANVAS_HEIGHT - 45 },
    ];
    h = [];
    for (F = 0; F < NUM_FICHES; F++)
      (h[F] = new CFiche(a[F].x, a[F].y, F, FICHES_VALUE[F], 1, !0, s_oStage)),
        h[F].addEventListenerWithParams(
          ON_MOUSE_UP,
          this._onFicheClicked,
          this,
          [FICHES_VALUE[F], F]
        );
    n = FICHES_VALUE[0];
    t = 0;
    FICHE_WIDTH = z.width;
    b = 10;
    e = 250;
    P = new CHistory(b, e, s_oStage);
    payTable = CPayTablePanel(CANVAS_WIDTH - 480, 350, s_oStage);
    this.disableButtons();
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    g.unload();
    g = null;
    !1 === DISABLE_SOUND_MOBILE && (C.unload(), (C = null));
    E && screenfull.isEnabled && G.unload();
    v.unload();
    y.unload();
    x.unload();
    L.unload();
    D.unload();
    r.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, h) {
    g.setPosition(f - a, h + l);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      C.setPosition(q - a, h + p);
    E && screenfull.isEnabled && G.setPosition(d - a, c + h);
    P.setPosition(b + a, e);
  };
  this.reset = function () {
    this.disableButtons();
  };
  this.enableBetFiches = function (a) {
    for (var b = 0; b < NUM_FICHES; b++) h[b].enable();
    v.enable();
    a && r.enable();
    L.enable();
    y.enable();
    x.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) h[a].disable();
    v.disable();
    r.disable();
    L.disable();
    y.disable();
    x.disable();
  };
  this.disableButtons = function () {
    D.disable();
  };
  this.enable = function (a) {
    a ? D.enable() : D.disable();
  };
  this.refreshCredit = function (a) {
    K.refreshText(TEXT_CURRENCY + a.toFixed(3));
  };
  this.refreshCardValue = function (a, b) {
    H.text = "" + a;
    I.text = "" + b;
  };
  this.displayMsg = function (a, b) {
    Q.refreshText(a);
    M.refreshText(b);
  };
  this.clearCardValueText = function () {
    H.text = "";
    I.text = "";
  };
  this._onFicheClicked = function (a) {
    for (var b = 0; b < h.length; b++) h[b].select(!1);
    h[a[1]].select(!0);
    n = a[0];
    t = a[1];
  };
  this.showWin = function (a, b) {
    m[a].show(TEXT_SHOW_WIN[a], b);
  };
  this.hideAllWins = function () {
    for (var a = 0; a < m.length; a++) m[a].hide();
  };
  this.addHistoryRow = function (a, b, c) {
    P.addHistoryRow(a, b, c);
  };
  this._onButTieRelease = function () {
    this.hideAllWins();
    // s_oGame.setBet(n, t, BET_TIE);
    CURRENT_BET = "TIE";
    cursorHelper._removeChild();
    cursorHelper._init(550, 370, s_oSpriteLibrary.getSprite("help_cursor"));
    cursorHelper.show(1);
  };
  this._onButBankerRelease = function () {
    this.hideAllWins();
    // s_oGame.setBet(n, t, BET_BANKER);
    CURRENT_BET = "BANKER";
    cursorHelper._removeChild();
    cursorHelper._init(500, 456, s_oSpriteLibrary.getSprite("help_cursor"));
    cursorHelper.show(1);
  };
  this._onButPlayerRelease = function () {
    this.hideAllWins();
    // s_oGame.setBet(n, t, BET_PLAYER);
    CURRENT_BET = "PLAYER";
    cursorHelper._removeChild();
    cursorHelper._init(480, 550, s_oSpriteLibrary.getSprite("help_cursor"));
    cursorHelper.show(1);
  };
  this._onButClearRelease = function () {
    s_oGame.clearBets();
  };
  this._onButRebetRelease = function () {
    this.hideAllWins();
    r.disable();
    s_oGame.rebet();
  };
  this._onButDealRelease = function () {
    // this.disableBetFiches();
    this.disableButtons();
    s_oGame.onDeal();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    E && screenfull.isEnabled && G.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? R.call(window.document)
      : E.call(window.document.documentElement);
    sizeHandler();
  };
  s_oInterface = this;
  this._init(a);
  return this;
}
var s_oInterface = null;
function CTweenController() {
  this.tweenValue = function (a, d, c) {
    return a + c * (d - a);
  };
  this.easeLinear = function (a, d, c, b) {
    return (c * a) / b + d;
  };
  this.easeInCubic = function (a, d, c, b) {
    b = (a /= b) * a * a;
    return d + c * b;
  };
  this.easeBackInQuart = function (a, d, c, b) {
    b = (a /= b) * a;
    return d + c * (2 * b * b + 2 * b * a + -3 * b);
  };
  this.easeInBack = function (a, d, c, b) {
    return c * (a /= b) * a * (2.70158 * a - 1.70158) + d;
  };
  this.easeOutCubic = function (a, d, c, b) {
    return c * ((a = a / b - 1) * a * a + 1) + d;
  };
}
function CSeat() {
  var a, d, c, b, e, f, l, q, p, n, t;
  this._init = function () {
    p = new createjs.Container();
    p.x = CANVAS_WIDTH / 2 - 150;
    p.y = 230;
    s_oStage.addChild(p);
    t = [];
    for (var a = 0; 3 > a; a++) t[a] = new CFichesController();
    e = 0;
    this.reset();
    n = new CVector2();
    n.set(0, 0);
    q = new CVector2(n.getX(), n.getY());
  };
  this.unload = function () {
    s_oStage.removeChild(p);
  };
  this.addEventListener = function (a, b, c) { };
  this.reset = function () {
    for (var e = (b = c = d = a = 0); e < t.length; e++) t[e].reset();
    f = [];
    for (e = 0; 3 > e; e++) f[e] = [];
  };
  this.clearBet = function () {
    c = d = a = 0;
    f = [];
    for (var b = 0; 3 > b; b++) t[b].reset(), (f[b] = []);
  };
  this.setCredit = function (a) {
    e = a;
  };
  this.increaseCredit = function (a) {
    e += a;
  };
  this.bet = function (b, e, g) {
    g = 0;
    switch (e) {
      case BET_TIE:
        g = a += b;
        break;
      case BET_BANKER:
        g = d += b;
        break;
      case BET_PLAYER:
        g = c += b;
    }
    t[e].createFichesPile(g.toFixed(1), POS_BET[e].x, POS_BET[e].y);
  };
  this.calculatePotentialWins = function () {
    l = [];
    l[BET_TIE] = a * MULTIPLIERS[BET_TIE];
    l[BET_BANKER] = d * MULTIPLIERS[BET_BANKER];
    l[BET_PLAYER] = c * MULTIPLIERS[BET_PLAYER];
    t[0].setPrevValue(a);
    t[1].setPrevValue(d);
    t[2].setPrevValue(c);
  };
  this.decreaseCredit = function (a) {
    e -= a;
  };
  this.refreshFiches = function (a, b, c, d, e) {
    f[e].push({ value: a, index: b });
    t[e].refreshFiches(f[e], c, d);
  };
  this.initMovement = function (a, b, c) {
    t[a].initMovement(b, c);
  };
  this.newCardDealed = function () {
    b++;
  };
  this.rebet = function () {
    for (var b = 0, e = 0; e < t.length; e++) {
      var g = parseFloat(t[e].getPrevBet().toFixed(2));
      if (0 < g) {
        b += g;
        this.decreaseCredit(g);
        switch (e) {
          case BET_TIE:
            a += g;
            break;
          case BET_BANKER:
            d += g;
            break;
          case BET_PLAYER:
            c += g;
        }
        t[e].createFichesPile(g, POS_BET[e].x, POS_BET[e].y);
      }
    }
    return b;
  };
  this.checkIfRebetIsPossible = function () {
    for (var a = 0, b = 0; b < t.length; b++) {
      var c = parseFloat(t[b].getPrevBet().toFixed(2));
      a += c;
    }
    return a > e ? !1 : !0;
  };
  this.updateFichesController = function (a) {
    for (var b = 0; b < t.length; b++) t[b].update(a);
  };
  this.getAttachCardOffset = function () {
    q.set(p.x + n.getX() + (CARD_WIDTH * 4 / 5) * b, p.y + n.getY());
    return q;
  };
  this.getTotBet = function () {
    return a + d + c;
  };
  this.getBetArray = function () {
    return [a, d, c];
  };
  this.getCredit = function () {
    return e;
  };
  this.getCardOffset = function () {
    return n;
  };
  this.getPotentialWin = function (a) {
    return l[a];
  };
  this.getStartingBet = function () {
    for (var a = 0, b = 0; b < t.length; b++) a += t[b].getValue();
    return a;
  };
  this._init();
}
function CFichesController() {
  var a, d, c, b, e, f, l, q, p, n, t;
  this._init = function () {
    q = new createjs.Container();
    s_oStage.addChild(q);
    e = new CVector2();
    e.set(q.x, q.y);
    p = new createjs.Container();
    s_oStage.addChild(p);
    t = new CTLText(
      p,
      0,
      0,
      150,
      28,
      28,
      "center",
      "#000",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
    n = new CTLText(
      p,
      0,
      0,
      150,
      28,
      28,
      "center",
      "#fff",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
    c = b = d = 0;
    a = !1;
  };
  this.addEventListener = function (a, b, c) { };
  this.reset = function () {
    a = !1;
    c = 0;
    q.removeAllChildren();
    q.x = e.getX();
    q.y = e.getY();
    t.refreshText("");
    n.refreshText("");
  };
  this.setPrevValue = function (a) {
    b = a;
  };
  this.refreshFiches = function (a, b, d) {
    a = a.sortOn("value", "index");
    for (var e = b, h = d, f = (c = 0), g = 0; g < a.length; g++)
      new CFiche(e, h, a[g].index, FICHES_VALUE[a[g].index], 0.85, !1, q),
        (h -= 5),
        f++,
        9 < f && ((f = 0), (e += FICHE_WIDTH), (h = d)),
        (c += a[g].value);
    playSound("chip", 1, !1);
    n.setX(b);
    n.setY(d + 20);
    n.refreshText(c.toFixed(2) + TEXT_CURRENCY);
    t.setX(b + 2);
    t.setY(d + 22);
    t.refreshText(c.toFixed(2) + TEXT_CURRENCY);
  };
  this.createFichesPile = function (a, b, c) {
    this.reset();
    var d = [];
    do {
      for (
        var e = FICHES_VALUE[FICHES_VALUE.length - 1],
        h = FICHES_VALUE.length - 1;
        e > a;

      )
        h--, (e = FICHES_VALUE[h]);
      h = Math.floor(a / e);
      for (var f = 0; f < h; f++)
        d.push({ value: e, index: s_oGameSettings.getIndexForFiches(e) });
      e = Math.floor(a / e) === a / e ? 0 : a % e;
      a = e.toFixed(2);
    } while (0 < e);
    this.refreshFiches(d, b, c);
  };
  this.initMovement = function (d, e) {
    b = c;
    f = new CVector2(q.x, q.y);
    l = new CVector2(d, e);
    n.refreshText("");
    t.refreshText("");
    a = !0;
  };
  this.getValue = function () {
    return c;
  };
  this.getPrevBet = function () {
    return b;
  };
  this.update = function (b) {
    if (a)
      if (((d += b), d > TIME_FICHES_MOV)) (d = 0), (a = !1);
      else {
        b = easeInOutCubic(d, 0, 1, TIME_FICHES_MOV);
        var c = new CVector2();
        c = tweenVectors(f, l, b, c);
        q.x = c.getX();
        q.y = c.getY();
      }
  };
  this._init();
}
function CVector2(a, d) {
  var c, b;
  this._init = function (a, d) {
    c = a;
    b = d;
  };
  this.add = function (a, d) {
    c += a;
    b += d;
  };
  this.addV = function (a) {
    c += a.getX();
    b += a.getY();
  };
  this.scalarDivision = function (a) {
    c /= a;
    b /= a;
  };
  this.subV = function (a) {
    c -= a.getX();
    b -= a.getY();
  };
  this.scalarProduct = function (a) {
    c *= a;
    b *= a;
  };
  this.invert = function () {
    c *= -1;
    b *= -1;
  };
  this.dotProduct = function (a) {
    return c * a.getX() + b * a.getY();
  };
  this.set = function (a, d) {
    c = a;
    b = d;
  };
  this.setV = function (a) {
    c = a.getX();
    b = a.getY();
  };
  this.length = function () {
    return Math.sqrt(c * c + b * b);
  };
  this.length2 = function () {
    return c * c + b * b;
  };
  this.normalize = function () {
    var a = this.length();
    0 < a && ((c /= a), (b /= a));
  };
  this.getNormalize = function (a) {
    this.length();
    a.set(c, b);
    a.normalize();
  };
  this.rot90CCW = function () {
    var a = c;
    c = -b;
    b = a;
  };
  this.rot90CW = function () {
    var a = c;
    c = b;
    b = -a;
  };
  this.getRotCCW = function (a) {
    a.set(c, b);
    a.rot90CCW();
  };
  this.getRotCW = function (a) {
    a.set(c, b);
    a.rot90CW();
  };
  this.ceil = function () {
    c = Math.ceil(c);
    b = Math.ceil(b);
  };
  this.round = function () {
    c = Math.round(c);
    b = Math.round(b);
  };
  this.toString = function () {
    return "Vector2: " + c + ", " + b;
  };
  this.print = function () {
    trace("Vector2: " + c + ", " + b);
  };
  this.getX = function () {
    return c;
  };
  this.getY = function () {
    return b;
  };
  this._init(a, d);
}
function CGameSettings() {
  var a, d, c;
  this._init = function () {
    c = [];
    a = [];
    for (var b = 0; b < NUM_DECKS; b++)
      for (var d = 0; 52 > d; d++) {
        a.push(d);
        var f = (d + 1) % 13;
        if (10 < f || 0 === f) f = 10;
        c.push(f);
      }
    FICHES_VALUE = [1, 5, 10, 25, 100];
  };
  this.getIndexForFiches = function (a) {
    for (var b = 0, c = 0; c < FICHES_VALUE.length; c++)
      FICHES_VALUE[c] === a && (b = c);
    return b;
  };
  this.generateFichesPile = function (a) {
    var b = [],
      c = FICHES_VALUE.length - 1,
      d = FICHES_VALUE[c];
    do {
      var q = a % d;
      q = CMath.roundDecimal(q, 1);
      a = Math.floor(a / d);
      for (var p = 0; p < a; p++) b.push(d);
      c--;
      d = FICHES_VALUE[c];
      a = q;
    } while (0 < q && -1 < c);
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
    for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
    for (d = []; 0 < b.length;)
      d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
    return d;
  };
  this.getCardValue = function (a) {
    return c[a];
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
function ease(a, d, c, b, e, f) {
  switch (a) {
    case TYPE_LINEAR:
      var l = easeLinear(d, c, b, e, f);
      break;
    case TYPE_IN_CUBIC:
      l = easeInCubic(d, c, b, e, f);
      break;
    case TYPE_OUT_CUBIC:
      l = easeOutCubic(d, c, b, e, f);
      break;
    case TYPE_IN_BACK:
      l = easeInBack(d, c, b, e, f);
      break;
    case TYPE_OUT_BACK:
      l = easeInBack(d, c, b, e, f);
  }
  return l;
}
function easeOutBounce(a, d, c, b) {
  return (a /= b) < 1 / 2.75
    ? 7.5625 * c * a * a + d
    : a < 2 / 2.75
      ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + d
      : a < 2.5 / 2.75
        ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + d
        : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + d;
}
function easeInBounce(a, d, c, b) {
  return c - easeOutBounce(b - a, 0, c, b) + d;
}
function easeInOutBounce(a, d, c, b) {
  return a < b / 2
    ? 0.5 * easeInBounce(2 * a, 0, c, b) + d
    : 0.5 * easeOutBounce(2 * a - b, 0, c, b) + 0.5 * c + d;
}
function easeInCirc(a, d, c, b) {
  return -c * (Math.sqrt(1 - (a /= b) * a) - 1) + d;
}
function easeOutCirc(a, d, c, b) {
  return c * Math.sqrt(1 - (a = a / b - 1) * a) + d;
}
function easeInOutCirc(a, d, c, b) {
  return 1 > (a /= b / 2)
    ? (-c / 2) * (Math.sqrt(1 - a * a) - 1) + d
    : (c / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + d;
}
function easeInCubic(a, d, c, b, e) {
  return c * (a /= b) * a * a + d;
}
function easeOutCubic(a, d, c, b, e) {
  return c * ((a = a / b - 1) * a * a + 1) + d;
}
function easeInOutCubic(a, d, c, b, e) {
  return 1 > (a /= b / 2)
    ? (c / 2) * a * a * a + d
    : (c / 2) * ((a -= 2) * a * a + 2) + d;
}
function easeInElastic(a, d, c, b, e, f, l) {
  if (0 == a) return d;
  if (1 == (a /= b)) return d + c;
  l || (l = 0.3 * b);
  !f || f < Math.abs(c)
    ? ((f = c), (e = l / 4))
    : (e = (l / (2 * Math.PI)) * Math.asin(c / f));
  return (
    -(f * Math.pow(2, 10 * --a) * Math.sin((2 * (a * b - e) * Math.PI) / l)) + d
  );
}
function easeOutElastic(a, d, c, b, e, f, l) {
  if (0 == a) return d;
  if (1 == (a /= b)) return d + c;
  l || (l = 0.3 * b);
  !f || f < Math.abs(c)
    ? ((f = c), (e = l / 4))
    : (e = (l / (2 * Math.PI)) * Math.asin(c / f));
  return (
    f * Math.pow(2, -10 * a) * Math.sin((2 * (a * b - e) * Math.PI) / l) + c + d
  );
}
function easeInOutElastic(a, d, c, b, e, f, l) {
  if (0 == a) return d;
  if (1 == (a /= b)) return d + c;
  l || (l = 0.3 * b);
  !f || f < Math.abs(c)
    ? ((f = c), (e = l / 4))
    : (e = (l / (2 * Math.PI)) * Math.asin(c / f));
  return 1 > a
    ? -0.5 *
    f *
    Math.pow(2, 10 * --a) *
    Math.sin((2 * (a * b - e) * Math.PI) / l) +
    d
    : f *
    Math.pow(2, -10 * --a) *
    Math.sin((2 * (a * b - e) * Math.PI) / l) *
    0.5 +
    c +
    d;
}
function easeInExpo(a, d, c, b) {
  return 0 == a ? d : c * Math.pow(2, 10 * (a / b - 1)) + d;
}
function easeOutExpo(a, d, c, b) {
  return a == b ? d + c : c * (-Math.pow(2, (-10 * a) / b) + 1) + d;
}
function easeInOutExpo(a, d, c, b) {
  return 0 == a
    ? d
    : a == b
      ? d + c
      : 1 > (a /= b / 2)
        ? (c / 2) * Math.pow(2, 10 * (a - 1)) + d
        : (c / 2) * (-Math.pow(2, -10 * --a) + 2) + d;
}
function easeLinear(a, d, c, b) {
  return (c * a) / b + d;
}
function easeInQuad(a, d, c, b) {
  return c * (a /= b) * a + d;
}
function easeOutQuad(a, d, c, b) {
  return -c * (a /= b) * (a - 2) + d;
}
function easeInOutQuad(a, d, c, b) {
  return 1 > (a /= b / 2)
    ? (c / 2) * a * a + d
    : (-c / 2) * (--a * (a - 2) - 1) + d;
}
function easeInQuart(a, d, c, b) {
  return c * (a /= b) * a * a * a + d;
}
function easeOutQuart(a, d, c, b) {
  return -c * ((a = a / b - 1) * a * a * a - 1) + d;
}
function easeInOutQuart(a, d, c, b) {
  return 1 > (a /= b / 2)
    ? (c / 2) * a * a * a * a + d
    : (-c / 2) * ((a -= 2) * a * a * a - 2) + d;
}
function easeInQuint(a, d, c, b) {
  return c * (a /= b) * a * a * a * a + d;
}
function easeOutQuint(a, d, c, b) {
  return c * ((a = a / b - 1) * a * a * a * a + 1) + d;
}
function easeInOutQuint(a, d, c, b) {
  return 1 > (a /= b / 2)
    ? (c / 2) * a * a * a * a * a + d
    : (c / 2) * ((a -= 2) * a * a * a * a + 2) + d;
}
function easeInSine(a, d, c, b) {
  return -c * Math.cos((a / b) * (Math.PI / 2)) + c + d;
}
function easeOutSine(a, d, c, b) {
  return c * Math.sin((a / b) * (Math.PI / 2)) + d;
}
function easeInOutSine(a, d, c, b) {
  return (-c / 2) * (Math.cos((Math.PI * a) / b) - 1) + d;
}
function easeInBack(a, d, c, b) {
  return c * (a /= b) * a * (2.70158 * a - 1.70158) + d;
}
function easeOutBack(a, d, c, b) {
  return c * ((a = a / b - 1) * a * (2.70158 * a + 1.70158) + 1) + d;
}
function CCard(a, d, c) {
  var b,
    e,
    f = -1,
    l,
    q,
    p,
    n,
    t,
    h,
    m,
    g,
    v,
    r;
  this._init = function (a, b, c) {
    r = c;
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
        back: [52],
      },
    };
    c = new createjs.SpriteSheet(c);
    v = createSprite(
      c,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    v.x = a;
    v.y = b;
    v.rotation = 120;
    v.stop();
    r.addChild(v);
    m = [];
    g = [];
  };
  this.unload = function () {
    h = t = null;
    r.removeChild(v);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    g[a] = c;
  };
  this.setInfo = function (a, c, d, g, r, m) {
    e = !1;
    n = 0;
    l = parseInt(d);
    q = g;
    t = a;
    h = c;
    p = m;
    b = r;
    f = STATE_CARD_DEALING;
  };
  this.removeFromTable = function () {
    m[ON_CARD_TO_REMOVE] &&
      m[ON_CARD_TO_REMOVE].call(g[ON_CARD_TO_REMOVE], this);
  };
  this.initRemoving = function (a) {
    t = new CVector2(v.x, v.y);
    h = a;
    n = 0;
    f = STATE_CARD_REMOVING;
  };
  this.setValue = function () {
    v.gotoAndStop(l);
    var a = this;
    createjs.Tween.get(v)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardShown();
      });
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(v)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(v)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    v.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(v)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    m[ON_CARD_SHOWN] && m[ON_CARD_SHOWN].call(g[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    e = !0;
  };
  this.getValue = function () {
    return q;
  };
  this.getFotogram = function () {
    return l;
  };
  this._updateDealing = function () {
    n += s_iTimeElaps;
    if (n > TIME_CARD_DEALING)
      (f = -1),
        (n = 0),
        (v.x = h.getX()),
        (v.y = h.getY()),
        (v.rotation = 360),
        m[ON_CARD_ANIMATION_ENDING] &&
        m[ON_CARD_ANIMATION_ENDING].call(
          g[ON_CARD_ANIMATION_ENDING],
          this,
          b,
          p
        ),
        this.showCard();
    else {
      this.visible = !0;
      var a = easeInOutCubic(n, 0, 1, TIME_CARD_DEALING),
        c = new CVector2();
      c = tweenVectors(t, h, a, c);
      v.x = c.getX();
      v.y = c.getY();
      v.rotation = 120 + (24e3 * a) / 100;
    }
  };
  this._updateRemoving = function () {
    n += s_iTimeElaps;
    if (n > TIME_CARD_REMOVE)
      (n = 0),
        (e = v.visible = !1),
        (f = -1),
        m[ON_CARD_TO_REMOVE] &&
        m[ON_CARD_TO_REMOVE].call(g[ON_CARD_TO_REMOVE], this);
    else {
      var a = easeInOutCubic(n, 0, 1, TIME_CARD_REMOVE),
        b = new CVector2();
      b = tweenVectors(t, h, a, b);
      v.x = b.getX();
      v.y = b.getY();
      v.rotation = (4500 * a) / 100;
    }
  };
  this.update = function () {
    switch (f) {
      case STATE_CARD_DEALING:
        this._updateDealing();
        break;
      case STATE_CARD_REMOVING:
        !0 === e && this._updateRemoving();
    }
  };
  s_oCard = this;
  this._init(a, d, c);
}
var s_oCard;
function CGameOver() {
  var a, d, c, b;
  this._init = function () {
    b = new createjs.Container();
    s_oStage.addChild(b);
    b.on("click", function () { });
    var e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(e);
    a = new CTLText(
      b,
      CANVAS_WIDTH / 2 - 170,
      280,
      340,
      130,
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
    // d = new CTextButton(
    //   CANVAS_WIDTH / 2 - 100,
    //   450,
    //   s_oSpriteLibrary.getSprite("but_game_bg"),
    //   TEXT_RECHARGE,
    //   FONT_GAME_1,
    //   "#fff",
    //   14,
    //   b
    // );
    // d.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    c = new CTextButton(
      CANVAS_WIDTH / 2,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT_GAME_1,
      "#fff",
      14,
      b
    );
    c.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    // d.unload();
    c.unload();
    b.off("click", function () { });
  };
  this.show = function () {
    b.visible = !0;
  };
  this.hide = function () {
    b.visible = !1;
  };
  this._onRecharge = function () {
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._init();
}
function CWinDisplay(a, d, c) {
  var b, e, f, l;
  this._init = function (a, c) {
    b = a;
    l = new createjs.Container();
    l.visible = !1;
    l.x = a;
    l.y = c;
    q.addChild(l);
    var d = s_oSpriteLibrary.getSprite("win_bg"),
      h = createBitmap(d);
    l.addChild(h);
    e = new CTLText(
      l,
      d.width / 2 - 90,
      d.height / 2 - 38,
      180,
      33,
      23,
      "center",
      "#ffffff",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
    f = new CTLText(
      l,
      d.width / 2 - 90,
      d.height / 2 + 6,
      180,
      33,
      29,
      "center",
      "#ffffff",
      FONT_GAME_1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
  };
  this.show = function (a, b) {
    e.refreshText(a);
    0 < b
      ? (f.setColor("#07a74f"), f.refreshText(TEXT_WIN + " " + b.toFixed(2)))
      : (f.setColor("#ce0909"), f.refreshText(TEXT_NO_WIN));
    l.visible = !0;
    createjs.Tween.get(l).to(
      { x: CANVAS_WIDTH / 2 + 100 },
      400,
      createjs.Ease.cubicOut
    );
  };
  this.hide = function () {
    createjs.Tween.get(l)
      .to({ x: b }, 400, createjs.Ease.cubicOut)
      .call(function () {
        l.visible = !1;
      });
  };
  var q = c;
  this._init(a, d);
}
function CHistory(a, d, c) {
  var b, e, f, l, q, p, n, t, h, m, g;
  this._init = function (a, b) {
    t = s_oSpriteLibrary.getSprite("history_cell");
    m = new createjs.Container();
    m.x = a;
    m.y = b;
    v.addChild(m);
    p = createBitmap(s_oSpriteLibrary.getSprite("history_bg"));
    p.alpha = 0;
    m.addChild(p);
    g = new createjs.Container();
    g.x = 5;
    g.y = 5;
    m.addChild(g);
    l = 7 * t.height;
    h = new createjs.Shape();
    h.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(g.x, g.y, t.width, l);
    m.addChild(h);
    g.mask = h;
    n = createBitmap(s_oSpriteLibrary.getSprite("history_highlight"));
    n.alpha = 0;
    n.x = 5;
    n.y = 5;
    m.addChild(n);
    q = [];
  };
  this.addHistoryRow = function (a, c, d) {
    b = a;
    e = c;
    f = d;
    if (0 < q.length) for (a = 0; a < q.length; a++) q[a].moveDown(this);
    else
      createjs.Tween.get(p).to({ alpha: 1 }, 400, createjs.Ease.cubicOut),
        createjs.Tween.get(n).to({ alpha: 1 }, 400, createjs.Ease.cubicOut),
        (a = new CHistoryRow(0, 0, b, e, f, t, g)),
        q.push(a);
  };
  this._showNextRow = function (a) {
    a === q[0] &&
      (0 < q.length && q[0].getY() >= l && (q[0].unload(), q.splice(0, 1)),
        (a = new CHistoryRow(0, 0, b, e, f, t, g)),
        q.push(a));
  };
  this.setPosition = function (a, b) {
    m.x = a;
    m.y = b;
  };
  var v = c;
  this._init(a, d);
}
function CHistoryRow(a, d, c, b, e, f, l) {
  var q, p;
  this._init = function (a, b, c, d, f) {
    q = f.height;
    p = new createjs.Container();
    p.alpha = 0;
    p.x = a;
    p.y = b;
    t.addChild(p);
    b = new createjs.SpriteSheet({
      images: [f],
      frames: { width: f.width / 2, height: f.height },
      animations: { state_lose: [0], state_win: [1] },
    });
    a = [];
    a[0] = createSprite(b, "state_lose", 0, 0, f.width / 2, f.height);
    p.addChild(a[0]);
    a[1] = createSprite(b, "state_lose", 0, 0, f.width / 2, f.height);
    a[1].x = f.width / 2;
    p.addChild(a[1]);
    0 < e && a[e - 1].gotoAndStop("state_win");
    c = new createjs.Text(c, "24px " + FONT_GAME_1, "#fff");
    c.x = a[0].x + f.width / 4;
    c.y = a[0].y + f.height / 2;
    c.textAlign = "center";
    c.textBaseline = "middle";
    p.addChild(c);
    d = new createjs.Text(d, "24px " + FONT_GAME_1, "#fff");
    d.x = a[1].x + f.width / 4;
    d.y = a[1].y + f.height / 2;
    d.textAlign = "center";
    d.textBaseline = "middle";
    p.addChild(d);
    createjs.Tween.get(p).to({ alpha: 1 }, 400, createjs.Ease.cubicOut);
  };
  this.unload = function () {
    t.removeChild(p);
  };
  this.moveDown = function (a) {
    var b = p.y + q;
    createjs.Tween.get(p)
      .to({ y: b }, 400, createjs.Ease.cubicOut)
      .call(function () {
        a._showNextRow(n);
      });
  };
  this.getY = function () {
    return p.y;
  };
  var n = this;
  var t = l;
  this._init(a, d, c, b, f);
}
function CMsgBox() {
  var a, d, c, b;
  this._init = function () {
    b = new createjs.Container();
    b.alpha = 0;
    b.visible = !1;
    s_oStage.addChild(b);
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(a);
    c = new CTLText(
      b,
      CANVAS_WIDTH / 2 - 208,
      CANVAS_HEIGHT / 2 - 90,
      400,
      180,
      34,
      "center",
      "#000",
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
    d = new CTLText(
      b,
      CANVAS_WIDTH / 2 - 210,
      CANVAS_HEIGHT / 2 - 92,
      400,
      180,
      34,
      "center",
      "#ffffff",
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
  };
  this.unload = function () {
    b.off("mousedown", this._onExit);
  };
  this._initListener = function () {
    b.on("mousedown", this._onExit);
  };
  this.show = function (a) {
    c.refreshText(a);
    d.refreshText(a);
    b.visible = !0;
    var e = this;
    createjs.Tween.get(b)
      .to({ alpha: 1 }, 500)
      .call(function () {
        e._initListener();
      });
    setTimeout(function () {
      e._onExit();
    }, 1000);
  };
  this._onExit = function () {
    b.visible && (b.off("mousedown"), (b.visible = !1));
  };
  this._init();
  return this;
}
function CPayTablePanel(a, d, b) {
  var c, g, f;
  this._init = function (a, b) {
    c = a;
    g = b;
    f = new createjs.Container();
    f.x = c;
    f.y = g;
    m.addChild(f);
    var d = s_oSpriteLibrary.getSprite("paytable_ante_bg"),
      n = createBitmap(d);
    f.addChild(n);
    n = new CTLText( // Ante bonus title text.
      f,
      10,
      6,
      d.width - 20,
      24,
      24,
      "left",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      "PAYOUTS",
      !0,
      !0,
      !1,
      !1
    );
    for (var l = "", p = "", k = 0; k < TEXT_BET.length; k++)
      (l += TEXT_BET[k] + "\n"), (p += MULTIPLIERS[k] + ":1\n");
    l = l.substring(0, l.length - 1);
    p = p.substring(0, p.length - 1);
    new CTLText(
      f,
      10,
      n.getY() + 35,
      d.width - 65,
      60,
      20,
      "left",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      l,
      !0,
      !0,
      !0,
      !1
    );
    new CTLText(
      f,
      50,
      n.getY() + 35,
      d.width - 65,
      60,
      20,
      "right",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      p,
      !0,
      !0,
      !0,
      !1
    );
  };
  this.refreshButtonPos = function (a, b) {
    f.x = c - a;
  };
  var m = b;
  this._init(a, d);
}
function CHelpCursor(a, d, b, c) {
  var g, f;
  this._init = function (a, b, d) {
    g = a;
    f = createBitmap(d);
    f.visible = !1;
    f.x = a;
    f.y = b;
    c.addChild(f);
  };
  this._removeChild = function () {
    c.removeChild(f);
  }
  this.show = function (a) {
    0 > a && (f.scaleX *= -1);
    // this._move(a, g + 30 * a, 600);
    f.visible = !0;
  };
  this.hide = function () {
    createjs.Tween.removeTweens(f);
    f.x = g;
    f.visible = !1;
  };
  // this._move = function (a, b, c) {
  //   var d = 0 < a ? createjs.Ease.cubicIn : createjs.Ease.cubicOut;
  //   createjs.Tween.get(f)
  //     .to({ x: b }, c, d)
  //     .call(function () {
  //       a *= -1;
  //       m._move(a, b + 15 * a, 400);
  //     });
  // };
  this.isVisible = function () {
    return f.visible;
  };
  var m = this;
  this._init(a, d, b);
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
    c = this.makeText("Rule", "35px ", "#ff0", FONT_GAME_2, 200, 260);
    n.addChild(c);
    text = `Baccarat is a card game that is dealt from a shoe that holds 6 or 8 decks of cards. 
Two hands are dealt by the house dealer, the "banker" hand and the "player" hand. 
Before the hands are dealt, bets may be placed on the banker hand, on the player hand, or on a tie.
Winning bets on banker or player are paid 1:1, but a commission of 5% is charged on bank bets making the net odds on such bets 0.95 to 1.
Tie bets are paid 8:1. If there is a tie, bets on the banker or player are returned. 
Once a bet has been placed, there are no opportunities for further decisions -- 
  both the banker hand and the player hand are dealt according to fixed rules, resulting in final hands of either two or three cards for each.
The value of a hand is determined by adding the values of its individual cards. 
Tens and face cards are counted as zero, while all other cards are counted by the number of "pips" on the card face. 
Only the last digit of the total is used, so all baccarat hands have values in the range 0 to 9 inclusive. 
The hand with the higher value wins; if the hands have the same value, the result is a tie.
Rules for the player hand: 
  If the player's first two cards total 6 or more, then the player must stand without drawing a card. 
  If the player's first two cards total 5 or less, the player must draw one additional card.
Rules for the banker hand: 
  If the banker's first two cards total 7 or more, then the banker must stand without drawing a card. 
  If the banker's first two cards total 0, 1, or 2, then the banker must draw one card. 
  If the banker's first two cards total 3, 4, 5, or 6, then whether the banker draws is determined by the whether the player drew, 
  and if so the value of the player's draw card`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 290);
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
CTLText.prototype = {
  constructor: CTLText,
  __autofit: function () {
    if (this._bFitText) {
      for (
        var a = this._iStartingFontSize;
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
  setX: function (a) {
    this._x = this._oText.x = a;
  },
  setY: function (a) {
    this._y = this._oText.y = a;
  },
  setVerticalAlign: function (a) {
    this._bVerticalAlign = a;
  },
  setOutline: function (a) {
    null !== this._oText && (this._oText.outline = a);
  },
  setShadow: function (a, d, c, b) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, d, c, b));
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
  getText: function () {
    return this._oText;
  },
  getY: function () {
    return this._y;
  },
  getFontSize: function () {
    return this._iFontSize;
  },
  getBounds: function () {
    return this._oText.getBounds();
  },
  refreshText: function (a) {
    "" === a && (a = " ");
    null === this._oText && this.__createText(a);
    this._oText.text = a;
    this._oText.font = this._iStartingFontSize + "px " + this._szFont;
    this._oText.lineHeight = Math.round(
      this._iStartingFontSize * this._fLineHeightFactor
    );
    this.__autofit();
    this.__updateY();
    this.__verticalAlign();
  },
};
function CTLText(a, d, c, b, e, f, l, q, p, n, t, h, m, g, v, r, D) {
  this._oContainer = a;
  this._x = d;
  this._y = c;
  this._iWidth = b;
  this._iHeight = e;
  this._bMultiline = r;
  this._iFontSize = this._iStartingFontSize = f;
  this._szAlign = l;
  this._szColor = q;
  this._szFont = p;
  this._iPaddingH = t;
  this._iPaddingV = h;
  this._bVerticalAlign = v;
  this._bFitText = g;
  this._bDebug = D;
  this._oDebugShape = null;
  this._fLineHeightFactor = n;
  this._oText = null;
  m && this.__createText(m);
}
function CFiche(a, d, c, b, e, f, l) {
  var q, p, n, t, h, m, g;
  this._init = function (a, b, c, d, f) {
    g = new createjs.Container();
    g.x = a;
    g.y = b;
    g.scaleX = g.scaleY = e;
    l.addChild(g);
    a = s_oSpriteLibrary.getSprite("fiche_highlight");
    h = createBitmap(a);
    h.x = -9;
    h.y = -9;
    h.visible = !1;
    g.addChild(h);
    a = s_oSpriteLibrary.getSprite("fiche_" + c);
    m = createBitmap(a);
    g.addChild(m);
    new CTLText(
      g,
      8,
      28,
      a.width - 21,
      40,
      40,
      "center",
      COLOR_FICHE_PER_VALUE[c],
      FONT_GAME_1,
      1,
      0,
      0,
      d,
      !0,
      !0,
      !1,
      !1
    );
    f &&
      ((q = !1),
        (p = []),
        (n = []),
        g.on("mousedown", this.buttonDown),
        g.on("pressup", this.buttonRelease));
    g.regX = a.width / 2;
    g.regY = a.height / 2;
  };
  this.addEventListener = function (a, b, c) {
    p[a] = b;
    n[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    p[a] = b;
    n[a] = c;
    t = d;
  };
  this.select = function (a) {
    h.visible = a;
  };
  this.enable = function () {
    q = !1;
  };
  this.disable = function () {
    q = !0;
  };
  this.buttonRelease = function () {
    q ||
      ((g.scaleX = e),
        (g.scaleY = e),
        p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(n[ON_MOUSE_UP], t),
        CURRENT_BET === "PLAYER" ? s_oGame.setBet(b, t, BET_PLAYER) : CURRENT_BET === "BANKER" ? s_oGame.setBet(b, t, BET_BANKER) : s_oGame.setBet(b, t, BET_TIE));
  };
  this.buttonDown = function () {
    q ||
      ((g.scaleX = 0.9 * e),
        (g.scaleY = 0.9 * e),
        p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], t));
  };
  this.getX = function () {
    return g.x;
  };
  this.getY = function () {
    return g.x;
  };
  this._init(a, d, c, b, f);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var d = a.split("."),
    c = d.length;
  2 < c && (a = d[c - 2] + "." + d[c - 1]);
  return a;
}
var getClosestTop = function () {
  var a = window,
    d = !1;
  try {
    for (; a.parent.document !== a.document;)
      if (a.parent.document) a = a.parent;
      else {
        d = !0;
        break;
      }
  } catch (c) {
    d = !0;
  }
  return { topFrame: a, err: d };
},
  getBestPageUrl = function (a) {
    var d = a.topFrame,
      c = "";
    if (a.err)
      try {
        try {
          c = window.top.location.href;
        } catch (e) {
          var b = window.location.ancestorOrigins;
          c = b[b.length - 1];
        }
      } catch (e) {
        c = d.document.referrer;
      }
    else c = d.location.href;
    return c;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
    d = [
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
    c < d.length;
    c++
  )
    if (d[c] === a) return !0;
  return !0;
}
