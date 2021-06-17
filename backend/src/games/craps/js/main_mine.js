/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
  var a =
      "undefined" !== typeof window && "undefined" !== typeof window.document
        ? window.document
        : {},
    f = "undefined" !== typeof module && module.exports,
    e = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    d = (function () {
      for (
        var b,
          e = [
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
          c = 0,
          h = e.length,
          f = {};
        c < h;
        c++
      )
        if ((b = e[c]) && b[1] in a) {
          for (c = 0; c < b.length; c++) f[e[0][c]] = b[c];
          return f;
        }
      return !1;
    })(),
    h = { change: d.fullscreenchange, error: d.fullscreenerror },
    b = {
      request: function (b) {
        var g = d.requestFullscreen;
        b = b || a.documentElement;
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[g]();
        else b[g](e && Element.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        a[d.exitFullscreen]();
      },
      toggle: function (b) {
        this.isFullscreen ? this.exit() : this.request(b);
      },
      onchange: function (b) {
        this.on("change", b);
      },
      onerror: function (b) {
        this.on("error", b);
      },
      on: function (b, e) {
        var c = h[b];
        c && a.addEventListener(c, e, !1);
      },
      off: function (b, e) {
        var c = h[b];
        c && a.removeEventListener(c, e, !1);
      },
      raw: d,
    };
  d
    ? (Object.defineProperties(b, {
        isFullscreen: {
          get: function () {
            return !!a[d.fullscreenElement];
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return a[d.fullscreenElement];
          },
        },
        enabled: {
          enumerable: !0,
          get: function () {
            return !!a[d.fullscreenEnabled];
          },
        },
      }),
      f ? (module.exports = b) : (window.screenfull = b))
    : f
    ? (module.exports = !1)
    : (window.screenfull = !1);
})();
(function () {
  function a(b) {
    b = String(b);
    return b.charAt(0).toUpperCase() + b.slice(1);
  }
  function f(b, c) {
    var a = -1,
      e = b ? b.length : 0;
    if ("number" == typeof e && -1 < e && e <= z)
      for (; ++a < e; ) c(b[a], a, b);
    else d(b, c);
  }
  function e(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function d(b, c) {
    for (var a in b) A.call(b, a) && c(b[a], a, b);
  }
  function h(b) {
    return null == b ? a(b) : t.call(b).slice(8, -1);
  }
  function b(b, c) {
    var a = null != b ? typeof b[c] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(a) &&
      ("object" == a ? !!b[c] : !0)
    );
  }
  function g(b) {
    return String(b).replace(/([ -])(?!$)/g, "$1?");
  }
  function l(b, c) {
    var a = null;
    f(b, function (e, g) {
      a = c(a, e, g, b);
    });
    return a;
  }
  function c(a) {
    function f(b) {
      return l(b, function (b, c) {
        var h = c.pattern || g(c);
        !b &&
          (b =
            RegExp("\\b" + h + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + h + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + h + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((b = String(
            c.label && !RegExp(h, "i").test(c.label) ? c.label : b
          ).split("/"))[1] &&
            !/[\d.]+/.test(b[0]) &&
            (b[0] += " " + b[1]),
          (c = c.label || c),
          (b = e(
            b[0]
              .replace(RegExp(h, "i"), c)
              .replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ")
              .replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")
          )));
        return b;
      });
    }
    function p(b) {
      return l(b, function (b, c) {
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
    var m = r,
      q = a && "object" == typeof a && "String" != h(a);
    q && ((m = a), (a = null));
    var I = m.navigator || {},
      y = I.userAgent || "";
    a || (a = y);
    var v = q
        ? !!I.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(t.toString()),
      x = q ? "Object" : "ScriptBridgingProxyObject",
      z = q ? "Object" : "Environment",
      B = q && m.java ? "JavaPackage" : h(m.java),
      A = q ? "Object" : "RuntimeObject";
    z = (B = /\bJava/.test(B) && m.java) && h(m.environment) == z;
    var R = B ? "a" : "\u03b1",
      S = B ? "b" : "\u03b2",
      O = m.document || {},
      J = m.operamini || m.opera,
      L = n.test((L = q && J ? J["[[Class]]"] : h(J))) ? L : (J = null),
      k,
      M = a;
    q = [];
    var N = null,
      K = a == y;
    y = K && J && "function" == typeof J.version && J.version();
    var C = (function (b) {
        return l(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) &&
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
      u = (function (b) {
        return l(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || g(c)) + "\\b", "i").exec(a) &&
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
      D = f([
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
      G = (function (b) {
        return l(b, function (b, c, e) {
          return (
            b ||
            ((c[D] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(D)] ||
              RegExp("\\b" + g(e) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
              e)
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
        return l(b, function (b, c) {
          var h = c.pattern || g(c);
          if (
            !b &&
            (b = RegExp("\\b" + h + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var f = b,
              d = c.label || c,
              l = {
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
            h &&
              d &&
              /^Win/i.test(f) &&
              !/^Windows Phone /i.test(f) &&
              (l = l[/[\d.]+$/.exec(f)]) &&
              (f = "Windows " + l);
            f = String(f);
            h && d && (f = f.replace(RegExp(h, "i"), d));
            b = f = e(
              f
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
    C && (C = [C]);
    G && !D && (D = f([G]));
    if ((k = /\bGoogle TV\b/.exec(D))) D = k[0];
    /\bSimulator\b/i.test(a) && (D = (D ? D + " " : "") + "Simulator");
    "Opera Mini" == u &&
      /\bOPiOS\b/.test(a) &&
      q.push("running in Turbo/Uncompressed mode");
    "IE" == u && /\blike iPhone OS\b/.test(a)
      ? ((k = c(a.replace(/like iPhone OS/, ""))),
        (G = k.manufacturer),
        (D = k.product))
      : /^iP/.test(D)
      ? (u || (u = "Safari"),
        (w =
          "iOS" +
          ((k = / OS ([\d_]+)/i.exec(a)) ? " " + k[1].replace(/_/g, ".") : "")))
      : "Konqueror" != u || /buntu/i.test(w)
      ? (G &&
          "Google" != G &&
          ((/Chrome/.test(u) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(D))) ||
        (/\bAndroid\b/.test(w) && /^Chrome/.test(u) && /\bVersion\//i.test(a))
        ? ((u = "Android Browser"), (w = /\bAndroid\b/.test(w) ? w : "Android"))
        : "Silk" == u
        ? (/\bMobi/i.test(a) || ((w = "Android"), q.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && q.unshift("accelerated"))
        : "PaleMoon" == u && (k = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? q.push("identifying as Firefox " + k[1])
        : "Firefox" == u && (k = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (w || (w = "Firefox OS"), D || (D = k[1]))
        : !u ||
          (k = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(u))
        ? (u &&
            !D &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(k + "/") + 8)) &&
            (u = null),
          (k = D || G || w) &&
            (D || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) &&
            (u =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : k) +
              " Browser"))
        : "Electron" == u &&
          (k = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          q.push("Chromium " + k)
      : (w = "Kubuntu");
    y ||
      (y = p([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        g(u),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (k =
        ("iCab" == C && 3 < parseFloat(y) && "WebKit") ||
        (/\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(C) &&
          "WebKit") ||
        (!C && /\bMSIE\b/i.test(a) && ("Mac OS" == w ? "Tasman" : "Trident")) ||
        ("WebKit" == C && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront"))
    )
      C = [k];
    "IE" == u && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((u += " Mobile"),
        (w = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x")),
        q.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((u = "IE Mobile"),
        (w = "Windows Phone 8.x"),
        q.unshift("desktop mode"),
        y || (y = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != u &&
        "Trident" == C &&
        (k = /\brv:([\d.]+)/.exec(a)) &&
        (u && q.push("identifying as " + u + (y ? " " + y : "")),
        (u = "IE"),
        (y = k[1]));
    if (K) {
      if (b(m, "global"))
        if (
          (B &&
            ((k = B.lang.System),
            (M = k.getProperty("os.arch")),
            (w =
              w ||
              k.getProperty("os.name") + " " + k.getProperty("os.version"))),
          z)
        ) {
          try {
            (y = m.require("ringo/engine").version.join(".")), (u = "RingoJS");
          } catch (Q) {
            (k = m.system) &&
              k.global.system == m.system &&
              ((u = "Narwhal"), w || (w = k[0].os || null));
          }
          u || (u = "Rhino");
        } else
          "object" == typeof m.process &&
            !m.process.browser &&
            (k = m.process) &&
            ("object" == typeof k.versions &&
              ("string" == typeof k.versions.electron
                ? (q.push("Node " + k.versions.node),
                  (u = "Electron"),
                  (y = k.versions.electron))
                : "string" == typeof k.versions.nw &&
                  (q.push("Chromium " + y, "Node " + k.versions.node),
                  (u = "NW.js"),
                  (y = k.versions.nw))),
            u ||
              ((u = "Node.js"),
              (M = k.arch),
              (w = k.platform),
              (y = (y = /[\d.]+/.exec(k.version)) ? y[0] : null)));
      else
        h((k = m.runtime)) == x
          ? ((u = "Adobe AIR"), (w = k.flash.system.Capabilities.os))
          : h((k = m.phantom)) == A
          ? ((u = "PhantomJS"),
            (y =
              (k = k.version || null) &&
              k.major + "." + k.minor + "." + k.patch))
          : "number" == typeof O.documentMode &&
            (k = /\bTrident\/(\d+)/i.exec(a))
          ? ((y = [y, O.documentMode]),
            (k = +k[1] + 4) != y[1] &&
              (q.push("IE " + y[1] + " mode"), C && (C[1] = ""), (y[1] = k)),
            (y = "IE" == u ? String(y[1].toFixed(1)) : y[0]))
          : "number" == typeof O.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(u) &&
            (q.push("masking as " + u + " " + y),
            (u = "IE"),
            (y = "11.0"),
            (C = ["Trident"]),
            (w = "Windows"));
      w = w && e(w);
    }
    y &&
      (k =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(y) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (K && I.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((N = /b/i.test(k) ? "beta" : "alpha"),
      (y =
        y.replace(RegExp(k + "\\+?$"), "") +
        ("beta" == N ? S : R) +
        (/\d+\+?/.exec(k) || "")));
    if (
      "Fennec" == u ||
      ("Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(w))
    )
      u = "Firefox Mobile";
    else if ("Maxthon" == u && y) y = y.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(D))
      "Xbox 360" == D && (w = null),
        "Xbox 360" == D && /\bIEMobile\b/.test(a) && q.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(u) &&
        (!u || D || /Browser|Mobi/.test(u))) ||
      ("Windows CE" != w && !/Mobi/i.test(a))
    )
      if ("IE" == u && K)
        try {
          null === m.external && q.unshift("platform preview");
        } catch (Q) {
          q.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(D) || /\bBB10\b/.test(a)) &&
        (k =
          (RegExp(D.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || y)
          ? ((k = [k, /BB10/.test(a)]),
            (w =
              (k[1] ? ((D = null), (G = "BlackBerry")) : "Device Software") +
              " " +
              k[0]),
            (y = null))
          : this != d &&
            "Wii" != D &&
            ((K && J) ||
              (/Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(w)) ||
              ("IE" == u &&
                ((w && !/^Win/.test(w) && 5.5 < y) ||
                  (/\bWindows XP\b/.test(w) && 8 < y) ||
                  (8 == y && !/\bTrident\b/.test(a))))) &&
            !n.test((k = c.call(d, a.replace(n, "") + ";"))) &&
            k.name &&
            ((k = "ing as " + k.name + ((k = k.version) ? " " + k : "")),
            n.test(u)
              ? (/\bIE\b/.test(k) && "Mac OS" == w && (w = null),
                (k = "identify" + k))
              : ((k = "mask" + k),
                (u = L ? e(L.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(k) && (w = null),
                K || (y = null)),
            (C = ["Presto"]),
            q.push(k));
    else u += " Mobile";
    if ((k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k];
      if ("Safari" == u && "+" == k[1].slice(-1))
        (u = "WebKit Nightly"), (N = "alpha"), (y = k[1].slice(0, -1));
      else if (
        y == k[1] ||
        y == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        y = null;
      k[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == k[0] &&
        537.36 == k[2] &&
        28 <= parseFloat(k[1]) &&
        "WebKit" == C &&
        (C = ["Blink"]);
      K && (v || k[1])
        ? (C && (C[1] = "like Chrome"),
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
              : "Blink" != C
              ? "27"
              : "28")))
        : (C && (C[1] = "like Safari"),
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
      C &&
        (C[1] +=
          " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+"));
      "Safari" == u && (!y || 45 < parseInt(y)) && (y = k);
    }
    "Opera" == u && (k = /\bzbov|zvav$/.exec(w))
      ? ((u += " "),
        q.unshift("desktop mode"),
        "zvav" == k ? ((u += "Mini"), (y = null)) : (u += "Mobile"),
        (w = w.replace(RegExp(" *" + k + "$"), "")))
      : "Safari" == u &&
        /\bChrome\b/.exec(C && C[1]) &&
        (q.unshift("desktop mode"),
        (u = "Chrome Mobile"),
        (y = null),
        /\bOS X\b/.test(w) ? ((G = "Apple"), (w = "iOS 4.3+")) : (w = null));
    y &&
      0 == y.indexOf((k = /[\d.]+$/.exec(w))) &&
      -1 < a.indexOf("/" + k + "-") &&
      (w = String(w.replace(k, "")).replace(/^ +| +$/g, ""));
    C &&
      !/\b(?:Avant|Nook)\b/.test(u) &&
      (/Browser|Lunascape|Maxthon/.test(u) ||
        ("Safari" != u && /^iOS/.test(w) && /\bSafari\b/.test(C[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          u
        ) &&
          C[1])) &&
      (k = C[C.length - 1]) &&
      q.push(k);
    q.length && (q = ["(" + q.join("; ") + ")"]);
    G && D && 0 > D.indexOf(G) && q.push("on " + G);
    D && q.push((/^on /.test(q[q.length - 1]) ? "" : "on ") + D);
    if (w) {
      var P =
        (k = / ([\d.+]+)$/.exec(w)) &&
        "/" == w.charAt(w.length - k[0].length - 1);
      w = {
        architecture: 32,
        family: k && !P ? w.replace(k[0], "") : w,
        version: k ? k[1] : null,
        toString: function () {
          var b = this.version;
          return (
            this.family +
            (b && !P ? " " + b : "") +
            (64 == this.architecture ? " 64-bit" : "")
          );
        },
      };
    }
    (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(M)) && !/\bi686\b/i.test(M)
      ? (w &&
          ((w.architecture = 64),
          (w.family = w.family.replace(RegExp(" *" + k), ""))),
        u &&
          (/\bWOW64\b/i.test(a) ||
            (K &&
              /\w(?:86|32)$/.test(I.cpuClass || I.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          q.unshift("32-bit"))
      : w &&
        /^OS X/.test(w.family) &&
        "Chrome" == u &&
        39 <= parseFloat(y) &&
        (w.architecture = 64);
    a || (a = null);
    m = {};
    m.description = a;
    m.layout = C && C[0];
    m.manufacturer = G;
    m.name = u;
    m.prerelease = N;
    m.product = D;
    m.ua = a;
    m.version = u && y;
    m.os = w || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    m.parse = c;
    m.toString = function () {
      return this.description || "";
    };
    m.version && q.unshift(y);
    m.name && q.unshift(u);
    w &&
      u &&
      (w != String(w).split(" ")[0] || (w != u.split(" ")[0] && !D)) &&
      q.push(D ? "(" + w + ")" : "on " + w);
    q.length && (m.description = q.join(" "));
    return m;
  }
  var p = { function: !0, object: !0 },
    r = (p[typeof window] && window) || this,
    x = p[typeof exports] && exports;
  p = p[typeof module] && module && !module.nodeType && module;
  var m = x && p && "object" == typeof global && global;
  !m || (m.global !== m && m.window !== m && m.self !== m) || (r = m);
  var z = Math.pow(2, 53) - 1,
    n = /\bOpera/;
  m = Object.prototype;
  var A = m.hasOwnProperty,
    t = m.toString,
    v = c();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((r.platform = v),
      define(function () {
        return v;
      }))
    : x && p
    ? d(v, function (b, c) {
        x[c] = b;
      })
    : (r.platform = v);
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
      f = 0;
    f < a.length;
    f++
  ) {
    var e = document.createElement("meta");
    e.name = a[f].name;
    e.content = a[f].content;
    var d = window.document.head.querySelector('meta[name="' + e.name + '"]');
    d && d.parentNode.removeChild(d);
    window.document.head.appendChild(e);
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
    !iosInIframe() &&
    (buildIOSFullscreenPanel(), buildIOSMeta());
});
jQuery(window).resize(function () {
  platform && "iPhone" === platform.product && !iosInIframe() && iosResize();
});
var s_iOffsetX = 0,
  s_iOffsetY = 0,
  s_fInverseScaling = 0,
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
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function getSize(a) {
  var f = a.toLowerCase(),
    e = window.document,
    d = e.documentElement;
  if (void 0 === window["inner" + a]) a = d["client" + a];
  else if (window["inner" + a] != d["client" + a]) {
    var h = e.createElement("body");
    h.id = "vpw-test-b";
    h.style.cssText = "overflow:scroll";
    var b = e.createElement("div");
    b.id = "vpw-test-d";
    b.style.cssText = "position:absolute;top:-1000px";
    b.innerHTML =
      "<style>@media(" +
      f +
      ":" +
      d["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      f +
      ":7px!important}}</style>";
    h.appendChild(b);
    d.insertBefore(h, e.head);
    a = 7 == b["offset" + a] ? d["client" + a] : window["inner" + a];
    d.removeChild(h);
  } else a = window["inner" + a];
  return a;
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
    var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
      ? getIOSWindowHeight()
      : getSize("Height");
    var f = getSize("Width");
    _checkOrientation(f, a);
    s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, f / CANVAS_WIDTH);
    var e = CANVAS_WIDTH * s_iScaleFactor,
      d = CANVAS_HEIGHT * s_iScaleFactor;
    if (d < a) {
      var h = a - d;
      d += h;
      e += (CANVAS_WIDTH / CANVAS_HEIGHT) * h;
    } else
      e < f &&
        ((h = f - e), (e += h), (d += (CANVAS_HEIGHT / CANVAS_WIDTH) * h));
    h = a / 2 - d / 2;
    var b = f / 2 - e / 2,
      g = CANVAS_WIDTH / e;
    if (b * g < -EDGEBOARD_X || h * g < -EDGEBOARD_Y)
      (s_iScaleFactor = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        f / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (e = CANVAS_WIDTH * s_iScaleFactor),
        (d = CANVAS_HEIGHT * s_iScaleFactor),
        (h = (a - d) / 2),
        (b = (f - e) / 2),
        (g = CANVAS_WIDTH / e);
    s_fInverseScaling = g;
    s_iOffsetX = -1 * b * g;
    s_iOffsetY = -1 * h * g;
    0 <= h && (s_iOffsetY = 0);
    0 <= b && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * e),
        (s_oStage.canvas.height = 2 * d),
        (canvas.style.width = e + "px"),
        (canvas.style.height = d + "px"),
        (s_iScaleFactor = 2 * Math.min(e / CANVAS_WIDTH, d / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor))
      : s_bMobile || isChrome()
      ? ($("#canvas").css("width", e + "px"),
        $("#canvas").css("height", d + "px"),
        (s_iScaleFactor = 1))
      : ((s_oStage.canvas.width = e),
        (s_oStage.canvas.height = d),
        (s_iScaleFactor = Math.min(e / CANVAS_WIDTH, d / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > h || (h = (a - d) / 2);
    $("#canvas").css("top", h + "px");
    $("#canvas").css("left", b + "px");
    s_iCanvasResizeWidth = e;
    s_iCanvasResizeHeight = d;
    s_iCanvasOffsetWidth = b;
    fullscreenHandler();
  }
}
function _checkOrientation(a, f) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > f
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
function createBitmap(a, f, e) {
  var d = new createjs.Bitmap(a),
    h = new createjs.Shape();
  f && e
    ? h.graphics.beginFill("#fff").drawRect(-f / 2, -e / 2, f, e)
    : h.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  d.hitArea = h;
  return d;
}
function createSprite(a, f, e, d, h, b) {
  a = null !== f ? new createjs.Sprite(a, f) : new createjs.Sprite(a);
  f = new createjs.Shape();
  f.graphics.beginFill("#000000").drawRect(-e, -d, h, b);
  a.hitArea = f;
  return a;
}
function roundDecimal(a, f) {
  var e = Math.pow(10, f);
  return Math.round(e * a) / e;
}
function randomFloatBetween(a, f, e) {
  "undefined" === typeof e && (e = 2);
  return parseFloat(Math.min(a + Math.random() * (f - a), f).toFixed(e));
}
function shuffle(a) {
  for (var f = a.length, e, d; 0 !== f; )
    (d = Math.floor(Math.random() * f)),
      --f,
      (e = a[f]),
      (a[f] = a[d]),
      (a[d] = e);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var f = Math.floor(a / 60);
  a = parseFloat(a - 60 * f).toFixed(1);
  var e = "";
  e = 10 > f ? e + ("0" + f + ":") : e + (f + ":");
  return 10 > a ? e + ("0" + a) : e + a;
}
function degreesToRadians(a) {
  return (a * Math.PI) / 180;
}
function checkRectCollision(a, f) {
  var e = getBounds(a, 0.9);
  var d = getBounds(f, 0.98);
  return calculateIntersection(e, d);
}
function calculateIntersection(a, f) {
  var e, d, h, b;
  var g = a.x + (e = a.width / 2);
  var l = a.y + (d = a.height / 2);
  var c = f.x + (h = f.width / 2);
  var p = f.y + (b = f.height / 2);
  g = Math.abs(g - c) - (e + h);
  l = Math.abs(l - p) - (d + b);
  return 0 > g && 0 > l
    ? ((g = Math.min(Math.min(a.width, f.width), -g)),
      (l = Math.min(Math.min(a.height, f.height), -l)),
      {
        x: Math.max(a.x, f.x),
        y: Math.max(a.y, f.y),
        width: g,
        height: l,
        rect1: a,
        rect2: f,
      })
    : null;
}
function getBounds(a, f) {
  var e = { x: Infinity, y: Infinity, width: 0, height: 0 };
  if (a instanceof createjs.Container) {
    e.x2 = -Infinity;
    e.y2 = -Infinity;
    var d = a.children,
      h = d.length,
      b;
    for (b = 0; b < h; b++) {
      var g = getBounds(d[b], 1);
      g.x < e.x && (e.x = g.x);
      g.y < e.y && (e.y = g.y);
      g.x + g.width > e.x2 && (e.x2 = g.x + g.width);
      g.y + g.height > e.y2 && (e.y2 = g.y + g.height);
    }
    Infinity == e.x && (e.x = 0);
    Infinity == e.y && (e.y = 0);
    Infinity == e.x2 && (e.x2 = 0);
    Infinity == e.y2 && (e.y2 = 0);
    e.width = e.x2 - e.x;
    e.height = e.y2 - e.y;
    delete e.x2;
    delete e.y2;
  } else {
    if (a instanceof createjs.Bitmap) {
      h = a.sourceRect || a.image;
      b = h.width * f;
      var l = h.height * f;
    } else if (a instanceof createjs.Sprite)
      if (
        a.spriteSheet._frames &&
        a.spriteSheet._frames[a.currentFrame] &&
        a.spriteSheet._frames[a.currentFrame].image
      ) {
        h = a.spriteSheet.getFrame(a.currentFrame);
        b = h.rect.width;
        l = h.rect.height;
        d = h.regX;
        var c = h.regY;
      } else (e.x = a.x || 0), (e.y = a.y || 0);
    else (e.x = a.x || 0), (e.y = a.y || 0);
    d = d || 0;
    b = b || 0;
    c = c || 0;
    l = l || 0;
    e.regX = d;
    e.regY = c;
    h = a.localToGlobal(0 - d, 0 - c);
    g = a.localToGlobal(b - d, l - c);
    b = a.localToGlobal(b - d, 0 - c);
    d = a.localToGlobal(0 - d, l - c);
    e.x = Math.min(Math.min(Math.min(h.x, g.x), b.x), d.x);
    e.y = Math.min(Math.min(Math.min(h.y, g.y), b.y), d.y);
    e.width = Math.max(Math.max(Math.max(h.x, g.x), b.x), d.x) - e.x;
    e.height = Math.max(Math.max(Math.max(h.y, g.y), b.y), d.y) - e.y;
  }
  return e;
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
      3 == a.nodeType && (a = a.parentNode);
      var f = document.createEvent("MouseEvents");
      f.initEvent("click", !0, !0);
      a.dispatchEvent(f);
    }
  },
};
(function () {
  function a(a) {
    var e = {
      focus: "visible",
      focusin: "visible",
      pageshow: "visible",
      blur: "hidden",
      focusout: "hidden",
      pagehide: "hidden",
    };
    a = a || window.event;
    a.type in e
      ? (document.body.className = e[a.type])
      : ((document.body.className = this[f] ? "hidden" : "visible"),
        "hidden" === document.body.className
          ? s_oMain.stopUpdate()
          : s_oMain.startUpdate());
  }
  var f = "hidden";
  f in document
    ? document.addEventListener("visibilitychange", a)
    : (f = "mozHidden") in document
    ? document.addEventListener("mozvisibilitychange", a)
    : (f = "webkitHidden") in document
    ? document.addEventListener("webkitvisibilitychange", a)
    : (f = "msHidden") in document
    ? document.addEventListener("msvisibilitychange", a)
    : "onfocusin" in document
    ? (document.onfocusin = document.onfocusout = a)
    : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a);
})();
function playSound(a, f, e) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(f),
      s_aSounds[a].loop(e),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, f) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(f);
}
function setMute(a, f) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(f);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var f = window.location.search.substring(1).split("&"), e = 0;
    e < f.length;
    e++
  ) {
    var d = f[e].split("=");
    if (d[0] == a) return d[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    screenfull.enabled &&
    ((s_bFullscreen =
      screen.height < window.innerHeight + 3 &&
      screen.height > window.innerHeight - 3
        ? !0
        : !1),
    null !== s_oInterface && s_oInterface.resetFullscreenBut(),
    null !== s_oMenu && s_oMenu.resetFullscreenBut());
}
if (screenfull.enabled)
  screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
  });
function CSpriteLibrary() {
  var a, f, e, d, h, b;
  this.init = function (g, l, c) {
    e = f = 0;
    d = g;
    h = l;
    b = c;
    a = {};
  };
  this.addSprite = function (b, e) {
    a.hasOwnProperty(b) || ((a[b] = { szPath: e, oSprite: new Image() }), f++);
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    h.call(b);
  };
  this._onSpriteLoaded = function () {
    d.call(b);
    ++e === f && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var b in a)
      (a[b].oSprite.oSpriteLibrary = this),
        (a[b].oSprite.onload = function () {
          this.oSpriteLibrary._onSpriteLoaded();
        }),
        (a[b].oSprite.onerror = function () {
          s_oMain.onImageLoadError($(this).attr("src"));
        }),
        (a[b].oSprite.src = a[b].szPath);
  };
  this.getNumSprites = function () {
    return f;
  };
}
var CANVAS_WIDTH = 1280,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 30,
  EDGEBOARD_Y = 70,
  FPS = 30,
  FPS_TIME = 1e3 / FPS,
  DISABLE_SOUND_MOBILE = !1,
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  STATE_GAME_WAITING_FOR_BET = 0,
  STATE_GAME_COME_OUT = 1,
  STATE_GAME_COME_POINT = 2,
  ON_SHOW_BET_ON_TABLE = 0,
  ON_SHOW_ENLIGHT = 1,
  ON_HIDE_ENLIGHT = 2,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  ON_CONTROLLER_END = 6,
  ON_CONTROLLER_REMOVE = 7,
  ON_CONTROLLER_ROLL = 8,
  TOTAL_MONEY,
  NUM_FICHES = 6,
  MIN_BET,
  MAX_BET,
  WIN_OCCURRENCE,
  TIME_FICHES_MOV = 1500,
  TIME_SHOW_DICES_RESULT,
  NUM_DICE_ROLLING_FRAMES = 34,
  NUM_BALL_SPIN_FRAMES = 200,
  NUM_HAND_FOR_ADS,
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS,
  FONT1 = "arialbold",
  FONT2 = "Digital-7",
  FONT_GAME_2 = "Digital-7",
  FONT_GAME_3 = "ariallight";
function CGameSettings() {
  var a, f, e, d;
  this._init = function () {
    this._initAttachFiches();
    this._initBetMultiplier();
    this._setPuckPos();
    a = [1, 5, 10, 25, 50, 100];
    NUM_FICHES = a.length;
  };
  this._initAttachFiches = function () {
    d = [];
    d.pass_line = { x: 360, y: 555 };
    d.dont_pass1 = { x: 730, y: 503 };
    d.dont_pass2 = { x: 254, y: 320 };
    d.dont_come = { x: 322, y: 238 };
    d.come = { x: 740, y: 330 };
    d.field = { x: 570, y: 420 };
    d.big_6 = { x: 260, y: 440 };
    d.big_8 = { x: 316, y: 490 };
    for (
      var a = [
          { value: 4, x: 408, y: 142 },
          { value: 5, x: 494, y: 142 },
          { value: 6, x: 580, y: 142 },
          { value: 8, x: 666, y: 142 },
          { value: 9, x: 752, y: 142 },
          { value: 10, x: 838, y: 142 },
        ],
        b = 0;
      b < a.length;
      b++
    )
      (d["lay_bet" + a[b].value] = { x: a[b].x, y: a[b].y }),
        (d["lose_bet" + a[b].value] = { x: a[b].x - 20, y: a[b].y + 20 }),
        (d["number" + a[b].value] = { x: a[b].x, y: a[b].y + 69 }),
        (d["win_bet" + a[b].value] = { x: a[b].x, y: a[b].y + 116 });
    d.any11_7 = { x: 1032, y: 582 };
    d.any_craps_7 = { x: 1032, y: 631 };
    d.seven_bet = { x: 1032, y: 356 };
    d.hardway6 = { x: 955, y: 400 };
    d.hardway10 = { x: 1112, y: 400 };
    d.hardway8 = { x: 955, y: 460 };
    d.hardway4 = { x: 1112, y: 460 };
    d.horn3 = { x: 930, y: 520 };
    d.horn2 = { x: 1032, y: 520 };
    d.horn12 = { x: 1134, y: 520 };
    d.oDealerWin = { x: CANVAS_WIDTH / 2, y: -232 };
    d.oReceiveWin = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT + 100 };
  };
  this._initBetMultiplier = function () {
    f = [];
    f.pass_line = 1;
    f.dont_pass1 = 1;
    f.dont_pass2 = 1;
    f.dont_come = 1;
    f.come = 1;
    f.field = 1;
    f.big_6 = 1;
    f.big_8 = 1;
    for (
      var a = [4, 5, 6, 8, 9, 10],
        b = [0.5, 0.66, 0.83, 0.83, 0.66, 0.5],
        e = [0.45, 0.62, 0.8, 0.8, 0.62, 0.45],
        d = [2, 1.5, 1.2, 1.2, 1.5, 2],
        c = [1.8, 1.4, 1.17, 1.17, 1.4, 1.8],
        p = 0;
      p < a.length;
      p++
    )
      (f["lay_bet" + a[p]] = b[p]),
        (f["lose_bet" + a[p]] = e[p]),
        (f["number" + a[p]] = d[p]),
        (f["win_bet" + a[p]] = c[p]);
    f.any11_7 = 15;
    f.any_craps_7 = 7;
    f.seven_bet = 4;
    f.hardway6 = 9;
    f.hardway10 = 7;
    f.hardway8 = 9;
    f.hardway4 = 7;
    f.horn3 = 15;
    f.horn2 = 30;
    f.horn12 = 30;
  };
  this.generateFichesPileByIndex = function (e) {
    var b = [],
      g = a.length - 1,
      h = a[g];
    do {
      var c = e % h;
      c = roundDecimal(c, 1);
      e = roundDecimal(e / h, 1);
      e = Math.floor(e);
      for (var f = 0; f < e; f++) b.push(this.getFicheIndexByValue(h));
      g--;
      h = a[g];
      e = c;
    } while (0 < c && -1 < g);
    return b;
  };
  this._setPuckPos = function () {
    e = [];
    e[4] = 410;
    e[5] = 495;
    e[6] = 580;
    e[8] = 666;
    e[9] = 752;
    e[10] = 836;
  };
  this.getBetWinLoss = function (a, b, e) {
    var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    switch (e) {
      case "pass_line":
        a === STATE_GAME_COME_OUT
          ? ((g[6] = 1), (g[10] = 1), (c[1] = 1), (c[2] = 1), (c[11] = 1))
          : ((g[b - 1] = 1), (c[6] = 1));
        break;
      case "come":
        g[6] = 1;
        g[10] = 1;
        c[1] = 1;
        c[2] = 1;
        c[11] = 1;
        break;
      case "dont_pass1":
      case "dont_pass2":
        a === STATE_GAME_COME_OUT
          ? ((g[1] = 1), (g[2] = 1), (g[11] = 1), (c[6] = 1), (c[10] = 1))
          : ((g[6] = 1), (c[b - 1] = 1));
        break;
      case "dont_come":
        g[1] = 1;
        g[2] = 1;
        g[11] = 1;
        c[6] = 1;
        c[10] = 1;
        break;
      case "field":
        g[1] = 1;
        g[2] = 1;
        g[3] = 1;
        g[8] = 1;
        g[9] = 1;
        g[10] = 1;
        g[11] = 1;
        c[0] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        break;
      case "big_6":
        g[5] = 1;
        break;
      case "big_8":
        g[7] = 1;
        break;
      case "lay_bet4":
      case "lose_bet4":
        g[6] = 1;
        c[3] = 1;
        break;
      case "lay_bet5":
      case "lose_bet5":
        g[6] = 1;
        c[4] = 1;
        break;
      case "lay_bet6":
      case "lose_bet6":
        g[6] = 1;
        c[5] = 1;
        break;
      case "lay_bet8":
      case "lose_bet8":
        g[6] = 1;
        c[7] = 1;
        break;
      case "lay_bet9":
      case "lose_bet9":
        g[6] = 1;
        c[8] = 1;
        break;
      case "lay_bet10":
      case "lose_bet10":
        g[6] = 1;
        c[9] = 1;
        break;
      case "number4":
      case "win_bet4":
        g[3] = 1;
        c[6] = 1;
        break;
      case "number5":
      case "win_bet5":
        g[4] = 1;
        c[6] = 1;
        break;
      case "number6":
      case "win_bet6":
        g[5] = 1;
        c[6] = 1;
        break;
      case "number8":
      case "win_bet8":
        g[7] = 1;
        c[6] = 1;
        break;
      case "number9":
      case "win_bet9":
        g[8] = 1;
        c[6] = 1;
        break;
      case "number10":
      case "win_bet10":
        g[9] = 1;
        c[6] = 1;
        break;
      case "any11":
        g[10] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[11] = 1;
        break;
      case "any_craps":
        g[1] = 1;
        g[2] = 1;
        g[11] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        break;
      case "seven_bet":
        g[6] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "hardway6":
        g[5] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "hardway10":
        g[9] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "hardway8":
        g[7] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "hardway4":
        g[3] = 1;
        c[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "horn3":
        g[2] = 1;
        c[1] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "horn2":
        g[1] = 1;
        c[2] = 1;
        c[3] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        c[8] = 1;
        c[9] = 1;
        c[10] = 1;
        c[11] = 1;
        break;
      case "horn12":
        (g[11] = 1),
          (c[1] = 1),
          (c[2] = 1),
          (c[3] = 1),
          (c[4] = 1),
          (c[5] = 1),
          (c[6] = 1),
          (c[7] = 1),
          (c[8] = 1),
          (c[9] = 1),
          (c[10] = 1);
    }
    return { win: g, lose: c };
  };
  this.checkBetWin = function (a, b, g, e, c, f) {
    var d = -1;
    switch (c) {
      case "pass_line":
        if (b === STATE_GAME_COME_OUT)
          if (2 === a || 3 === a || 12 === a) d = 0;
          else {
            if (7 === a || 11 === a)
              d = g * s_oGameSettings.getBetMultiplier(c);
          }
        else
          7 === a
            ? (d = 0)
            : a === e && (d = g * s_oGameSettings.getBetMultiplier(c));
        break;
      case "come":
        7 === a || 11 === a
          ? (d = g * s_oGameSettings.getBetMultiplier(c))
          : 2 === a || 3 === a || 12 === a
          ? (d = 0)
          : s_oGame.assignBetFromCome(a, c);
        break;
      case "dont_pass1":
      case "dont_pass2":
        b === STATE_GAME_COME_OUT
          ? 2 === a || 3 === a
            ? (d = g * s_oGameSettings.getBetMultiplier(c))
            : 7 === a || 11 === a
            ? (d = 0)
            : 12 === a && (d = g)
          : 7 === a
          ? (d = g * s_oGameSettings.getBetMultiplier(c))
          : a === e && (d = 0);
        break;
      case "dont_come":
        2 === a || 7 === a
          ? (d = g * s_oGameSettings.getBetMultiplier(c))
          : 7 === a || 11 === a
          ? (d = 0)
          : s_oGame.assignBetFromDontCome(a, c);
        break;
      case "field":
        if (5 === a || 6 === a || 7 === a || 8 === a) d = 0;
        else if (
          ((d = g * s_oGameSettings.getBetMultiplier(c)), 2 === a || 12 === a)
        )
          d *= 2;
        break;
      case "big_6":
        6 === a
          ? (d = g * s_oGameSettings.getBetMultiplier(c))
          : 7 === a && (d = 0);
        break;
      case "big_8":
        8 === a
          ? (d = g * s_oGameSettings.getBetMultiplier(c))
          : 7 === a && (d = 0);
        break;
      case "lay_bet4":
      case "lose_bet4":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet4" === c && (d = roundDecimal(0.05 * d, 2)))
          : 4 === a && (d = 0);
        break;
      case "lay_bet5":
      case "lose_bet5":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet5" === c && (d = roundDecimal(0.05 * d, 2)))
          : 5 === a && (d = 0);
        break;
      case "lay_bet6":
      case "lose_bet6":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet6" === c && (d = roundDecimal(0.05 * d, 2)))
          : 6 === a && (d = 0);
        break;
      case "lay_bet8":
      case "lose_bet8":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet8" === c && (d = roundDecimal(0.05 * d, 2)))
          : 8 === a && (d = 0);
        break;
      case "lay_bet9":
      case "lose_bet9":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet9" === c && (d = roundDecimal(0.05 * d, 2)))
          : 9 === a && (d = 0);
        break;
      case "lay_bet10":
      case "lose_bet10":
        7 === a
          ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet10" === c && (d = roundDecimal(0.05 * d, 2)))
          : 10 === a && (d = 0);
        break;
      case "number4":
      case "win_bet4":
        b === STATE_GAME_COME_POINT &&
          (4 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number4" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "number5":
      case "win_bet5":
        b === STATE_GAME_COME_POINT &&
          (5 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number5" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "number6":
      case "win_bet6":
        b === STATE_GAME_COME_POINT &&
          (6 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number6" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "number8":
      case "win_bet8":
        b === STATE_GAME_COME_POINT &&
          (8 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number8" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "number9":
      case "win_bet9":
        b === STATE_GAME_COME_POINT &&
          (9 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number9" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "number10":
      case "win_bet10":
        b === STATE_GAME_COME_POINT &&
          (10 === a
            ? ((d = g * s_oGameSettings.getBetMultiplier(c)),
              "number10" === c && (d = roundDecimal(0.05 * g, 2)))
            : 7 === a && (d = 0));
        break;
      case "any11_7":
        d = 11 === a ? g * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "any_craps_7":
        d =
          2 === a || 3 === a || 12 === a
            ? g * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "seven_bet":
        d = 7 === a ? g * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "hardway6":
        d =
          3 === f[0] && 3 === f[1]
            ? g * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway10":
        d =
          5 === f[0] && 5 === f[1]
            ? g * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway8":
        d =
          4 === f[0] && 4 === f[1]
            ? g * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway4":
        d =
          2 === f[0] && 2 === f[1]
            ? g * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "horn3":
        d = 3 === a ? g * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "horn2":
        d = 2 === a ? g * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "horn12":
        d = 12 === a ? g * s_oGameSettings.getBetMultiplier(c) : 0;
    }
    return d;
  };
  this.getFicheValues = function (d) {
    return a[d];
  };
  this.getFicheIndexByValue = function (d) {
    for (var b = 0, g = 0; g < a.length; g++)
      if (d === a[g]) {
        b = g;
        break;
      }
    return b;
  };
  this.getBetMultiplier = function (a) {
    return f[a];
  };
  this.getAttachOffset = function (a) {
    return d[a];
  };
  this.getHelpMsgByBet = function (a) {
    return (void 0)[a];
  };
  this.getPuckXByNumber = function (a) {
    return e[a];
  };
  this._init();
}
function CFichesController(a) {
  var f, e, d, h;
  this._init = function (b) {
    h = b;
    this.reset();
  };
  this.reset = function () {
    this._removeAllFichesOnTable();
    f = [];
    e = [];
    d = [];
  };
  this.setFicheOnTable = function (b, a, d) {
    -1 !== a.indexOf("any_craps_")
      ? (a = "any_craps_7")
      : -1 !== a.indexOf("any11_") && (a = "any11_7");
    this.addFicheOnTable(b, a, d);
  };
  this.addFicheOnTable = function (b, a, d) {
    void 0 === f[a] && (f[a] = 0);
    b = s_oGameSettings.getFicheValues(b);
    f[a] += b;
    f[a] = roundDecimal(f[a], 1);
    b = s_oGameSettings.generateFichesPileByIndex(f[a]);
    b.sort(function (b, a) {
      return b - a;
    });
    this._removeFichesPile(e[a]);
    e[a] = [];
    var c = s_oGameSettings.getAttachOffset(a),
      g = c.x;
    c = c.y;
    for (var h = 0; h < b.length; h++)
      d.push(this._attachFichesPile(b[h], a, g, c)), (c -= 5);
  };
  this._attachFichesPile = function (b, a, f, c) {
    b = new CFiche(f, c, b, h);
    e[a].push(b);
    d.push(b);
    return b;
  };
  this._removeAllFichesOnTable = function () {
    if (d)
      for (var b = 0; b < d.length; b++)
        h.contains(d[b].getSprite()) && h.removeChild(d[b].getSprite());
  };
  this._removeFichesPile = function (b) {
    for (var a in b) h.removeChild(b[a].getSprite());
  };
  this.removeBet = function (a) {
    e[a] = [];
    f[a] = 0;
  };
  this.swapBet = function (a, d) {
    e[d] = e[a];
    f[d] = f[a];
    this.removeBet(a);
  };
  this.clearAllBets = function () {
    this._removeAllFichesOnTable();
    f = [];
    e = [];
    d = [];
  };
  this.clearAllBetsInComePoint = function () {
    if (e) {
      var a = 0,
        g;
      for (g in e)
        if ("pass_line" !== g && "dont_pass1" !== g && "dont_pass2" !== g) {
          a += f[g];
          for (var l = 0; l < e[g].length; l++)
            h.removeChild(e[g][l].getSprite());
          delete f[g];
          delete e[g];
          delete d[g];
        }
    }
    return a;
  };
  this.getFicheMc = function (a) {
    return e[a];
  };
  this.getBetAmountInPos = function (a) {
    return f[a];
  };
  this._init(a);
}
var TEXT_MONEY = "MONEY",
  TEXT_CUR_BET = "CUR BET",
  TEXT_MIN_BET = "MIN BET",
  TEXT_MAX_BET = "MAX BET",
  TEXT_ROLL = "ROLL",
  TEXT_EXIT = "EXIT",
  TEXT_RECHARGE = "RECHARGE",
  TEXT_YOU_WIN = "GREAT!! YOU WIN",
  TEXT_CURRENCY = "$",
  TEXT_ARE_SURE = "ARE YOU SURE?",
  TEXT_COME_OUT = "COME OUT",
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_ERROR_NO_MONEY_MSG = "NOT ENOUGH MONEY FOR THIS BET!!",
  TEXT_ERROR_MAX_BET_REACHED = "MAX BET REACHED!!",
  TEXT_ERROR_MIN_BET = "YOU BET IS LOWER THAN MINIMUM BET!!",
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
  TEXT_RECHARGE_MSG = "PLEASE CLICK RECHARGE BUTTON TO PLAY AGAIN",
  TEXT_WAITING_BET = "WAITING FOR YOUR BET...",
  TEXT_READY_TO_ROLL = "ROLL WHEN YOU'RE READY!",
  TEXT_HELP_MSG = [];
TEXT_HELP_MSG.pass_line = "PLACE YOUR BET ON PASS LINE";
TEXT_HELP_MSG.dont_pass1 = "PLACE YOUR BET ON DON'T PASS";
TEXT_HELP_MSG.dont_pass2 = "PLACE YOUR BET ON DON'T PASS";
TEXT_HELP_MSG.dont_come = "PLACE YOUR BET ON DON'T COME";
TEXT_HELP_MSG.come = "PLACE YOUR BET ON COME";
TEXT_HELP_MSG.field = "PLACE YOUR BET ON FIELD";
TEXT_HELP_MSG.big_6 = "PLACE YOUR BET ON BIG 6";
TEXT_HELP_MSG.big_8 = "PLACE YOUR BET ON BIG 8";
for (
  var aValues = [4, 5, 6, 8, 9, 10],
    aInfosLay = "1:2 ON 7 BEFORE POINT LESS 5% OF WIN;2:3 ON 7 BEFORE POINT LESS 5% OF WIN;5:6 ON 7 BEFORE POINT LESS 5% OF WIN;5:6 ON 7 BEFORE POINT LESS 5% OF WIN;2:3 ON 7 BEFORE POINT LESS 5% OF WIN;1:2 ON 7 BEFORE POINT LESS 5% OF WIN".split(
      ";"
    ),
    aInfosLose = "5:11 ON 7 BEFORE POINT;5:8 ON 7 BEFORE POINT;4:5 ON 7 BEFORE POINT;4:5 ON 7 BEFORE POINT;5:8 ON 7 BEFORE POINT;5:11 ON 7 BEFORE POINT".split(
      ";"
    ),
    aInfosBuy = "2:1 ON MAKING POINT LESS 5% OF BET;3:2 ON MAKING POINT LESS 5% OF BET;6:5 ON MAKING POINT LESS 5% OF BET;6:5 ON MAKING POINT LESS 5% OF BET;3:2 ON MAKING POINT LESS 5% OF BET;2:1 ON MAKING POINT LESS 5% OF BET".split(
      ";"
    ),
    aInfosWin = "9:5 ON MAKING POINT;7:5 ON MAKING POINT;7:6 ON MAKING POINT;7:6 ON MAKING POINT;7:5 ON MAKING POINT;9:5 ON MAKING POINT".split(
      ";"
    ),
    i = 0;
  i < aValues.length;
  i++
)
  (TEXT_HELP_MSG["lay_bet" + aValues[i]] =
    "PLACE YOUR BET ON LAY " + aValues[i] + " - " + aInfosLay[i]),
    (TEXT_HELP_MSG["lose_bet" + aValues[i]] =
      "PLACE YOUR BET ON LOSE " + aValues[i] + " - " + aInfosLose[i]),
    (TEXT_HELP_MSG["number" + aValues[i]] =
      "PLACE YOUR BET ON BUY " + aValues[i] + " - " + aInfosBuy[i]),
    (TEXT_HELP_MSG["win_bet" + aValues[i]] =
      "PLACE YOUR BET ON WIN " + aValues[i] + " - " + aInfosWin[i]);
for (var j = 0; 8 > j; j++)
  (TEXT_HELP_MSG["any11_" + j] = "PLACE YOUR BET ON HORN 11"),
    (TEXT_HELP_MSG["any_craps_" + j] = "PLACE YOUR BET ON ANY CRAPS");
TEXT_HELP_MSG.seven_bet = "PLACE YOUR BET ON ANY 7";
TEXT_HELP_MSG.hardway6 = "PLACE YOUR BET ON HARDWAY 6";
TEXT_HELP_MSG.hardway10 = "PLACE YOUR BET ON HARDWAY 10";
TEXT_HELP_MSG.hardway8 = "PLACE YOUR BET ON HARDWAY 8";
TEXT_HELP_MSG.hardway4 = "PLACE YOUR BET ON HARDWAY 4";
TEXT_HELP_MSG.horn3 = "PLACE YOUR BET ON HORN 3";
TEXT_HELP_MSG.horn2 = "PLACE YOUR BET ON HORN 2";
TEXT_HELP_MSG.horn12 = "PLACE YOUR BET ON HORN 12";
var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_LINK = "WWW.CODETHISLAB.COM",
  TEXT_CONGRATULATIONS = "Congratulations!",
  TEXT_SHARE_1 = "You collected <strong>",
  TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!",
  TEXT_SHARE_3 = "My score is ",
  TEXT_SHARE_4 = " points! Can you do better?";
function CPreloader() {
  var a, f, e, d, h, b, g, l, c, p;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    p = new createjs.Container();
    s_oStage.addChild(p);
  };
  this.unload = function () {
    c.unload();
    p.removeAllChildren();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var r = new createjs.Shape();
    r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p.addChild(r);
    r = s_oSpriteLibrary.getSprite("200x200");
    g = createBitmap(r);
    g.regX = 0.5 * r.width;
    g.regY = 0.5 * r.height;
    g.x = CANVAS_WIDTH / 2;
    g.y = CANVAS_HEIGHT / 2 - 80;
    p.addChild(g);
    l = new createjs.Shape();
    l.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
    p.addChild(l);
    g.mask = l;
    r = s_oSpriteLibrary.getSprite("progress_bar");
    d = createBitmap(r);
    d.x = CANVAS_WIDTH / 2 - r.width / 2;
    d.y = CANVAS_HEIGHT / 2 + 70;
    p.addChild(d);
    a = r.width;
    f = r.height;
    h = new createjs.Shape();
    h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, f);
    p.addChild(h);
    d.mask = h;
    e = new createjs.Text("", "30px " + FONT1, "#fff");
    e.x = CANVAS_WIDTH / 2;
    e.y = CANVAS_HEIGHT / 2 + 120;
    e.textBaseline = "alphabetic";
    e.textAlign = "center";
    p.addChild(e);
    r = s_oSpriteLibrary.getSprite("but_start");
    c = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2 + 100,
      r,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      36,
      p
    );
    c.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    c.setVisible(!1);
    b = new createjs.Shape();
    b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p.addChild(b);
    createjs.Tween.get(b)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(b);
        p.removeChild(b);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (b) {
    e.text = b + "%";
    100 === b && (c.setVisible(!0), (e.visible = !1), (d.visible = !1));
    h.graphics.clear();
    b = Math.floor((b * a) / 100);
    h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, b, f);
  };
  this._init();
}
function CMain(a) {
  var f,
    e = 0,
    d = 0,
    h = STATE_LOADING,
    b,
    g;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage);
    s_bMobile = jQuery.browser.mobile;
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.setFPS(FPS);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    b = new CPreloader();
  };
  this.soundLoaded = function () {
    e++;
    b.refreshLoader(Math.floor((e / d) * 100));
  };
  this._initSounds = function () {
    var a = [];
    a.push({
      path: "./sounds/",
      filename: "chip",
      loop: !1,
      volume: 1,
      ingamename: "chip",
    });
    a.push({
      path: "./sounds/",
      filename: "click",
      loop: !1,
      volume: 1,
      ingamename: "click",
    });
    a.push({
      path: "./sounds/",
      filename: "fiche_collect",
      loop: !1,
      volume: 1,
      ingamename: "fiche_collect",
    });
    a.push({
      path: "./sounds/",
      filename: "fiche_select",
      loop: !1,
      volume: 1,
      ingamename: "fiche_select",
    });
    a.push({
      path: "./sounds/",
      filename: "dice_rolling",
      loop: !1,
      volume: 1,
      ingamename: "dice_rolling",
    });
    a.push({
      path: "./sounds/",
      filename: "win",
      loop: !1,
      volume: 1,
      ingamename: "win",
    });
    a.push({
      path: "./sounds/",
      filename: "lose",
      loop: !1,
      volume: 1,
      ingamename: "lose",
    });
    d += a.length;
    s_aSounds = [];
    for (var b = 0; b < a.length; b++)
      s_aSounds[a[b].ingamename] = new Howl({
        src: [
          a[b].path + a[b].filename + ".mp3",
          a[b].path + a[b].filename + ".ogg",
        ],
        autoplay: !1,
        preload: !0,
        loop: a[b].loop,
        volume: a[b].volume,
        onload: s_oMain.soundLoaded(),
      });
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("chip_box", "./sprites/chip_box.png");
    s_oSpriteLibrary.addSprite("but_bets", "./sprites/but_bets.png");
    s_oSpriteLibrary.addSprite("but_bg", "./sprites/but_bg.png");
    s_oSpriteLibrary.addSprite("but_clear_all", "./sprites/but_clear_all.png");
    s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
    s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
    s_oSpriteLibrary.addSprite(
      "enlight_any_craps",
      "./sprites/enlight_any_craps.png"
    );
    s_oSpriteLibrary.addSprite("enlight_big_6", "./sprites/enlight_big_6.png");
    s_oSpriteLibrary.addSprite("enlight_big_8", "./sprites/enlight_big_8.png");
    s_oSpriteLibrary.addSprite(
      "enlight_circle",
      "./sprites/enlight_circle.png"
    );
    s_oSpriteLibrary.addSprite("enlight_come", "./sprites/enlight_come.png");
    s_oSpriteLibrary.addSprite(
      "enlight_dont_come",
      "./sprites/enlight_dont_come.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_dont_pass1",
      "./sprites/enlight_dont_pass1.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_dont_pass2",
      "./sprites/enlight_dont_pass2.png"
    );
    s_oSpriteLibrary.addSprite("enlight_field", "./sprites/enlight_field.png");
    s_oSpriteLibrary.addSprite(
      "enlight_lay_bet",
      "./sprites/enlight_lay_bet.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_lose_bet",
      "./sprites/enlight_lose_bet.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_number",
      "./sprites/enlight_number.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_pass_line",
      "./sprites/enlight_pass_line.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_proposition1",
      "./sprites/enlight_proposition1.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_proposition2",
      "./sprites/enlight_proposition2.png"
    );
    s_oSpriteLibrary.addSprite("enlight_seven", "./sprites/enlight_seven.png");
    s_oSpriteLibrary.addSprite("enlight_any11", "./sprites/enlight_any11.png");
    s_oSpriteLibrary.addSprite(
      "hit_area_any_craps",
      "./sprites/hit_area_any_craps.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_big_8",
      "./sprites/hit_area_big_8.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_big_6",
      "./sprites/hit_area_big_6.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_circle",
      "./sprites/hit_area_circle.png"
    );
    s_oSpriteLibrary.addSprite("hit_area_come", "./sprites/hit_area_come.png");
    s_oSpriteLibrary.addSprite(
      "hit_area_dont_come",
      "./sprites/hit_area_dont_come.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_dont_pass1",
      "./sprites/hit_area_dont_pass1.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_dont_pass2",
      "./sprites/hit_area_dont_pass2.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_field",
      "./sprites/hit_area_field.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_lay_bet",
      "./sprites/hit_area_lay_bet.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_lose_bet",
      "./sprites/hit_area_lose_bet.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_number",
      "./sprites/hit_area_number.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_pass_line",
      "./sprites/hit_area_pass_line.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_proposition1",
      "./sprites/hit_area_proposition1.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_proposition2",
      "./sprites/hit_area_proposition2.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_seven",
      "./sprites/hit_area_seven.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_any11",
      "./sprites/hit_area_any11.png"
    );
    s_oSpriteLibrary.addSprite("select_fiche", "./sprites/select_fiche.png");
    s_oSpriteLibrary.addSprite("roll_but", "./sprites/roll_but.png");
    s_oSpriteLibrary.addSprite(
      "dices_screen_bg",
      "./sprites/dices_screen_bg.jpg"
    );
    s_oSpriteLibrary.addSprite("logo_game_0", "./sprites/logo_game_0.png");
    s_oSpriteLibrary.addSprite("board_table", "./sprites/board_table.jpg");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite("puck", "./sprites/puck.png");
    s_oSpriteLibrary.addSprite("dice_topdown1", "./sprites/dice_topdown1.png");
    s_oSpriteLibrary.addSprite("dice_topdown2", "./sprites/dice_topdown2.png");
    s_oSpriteLibrary.addSprite("but_not", "./sprites/but_not.png");
    s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
    s_oSpriteLibrary.addSprite("dice_a", "./sprites/dice_a.png");
    s_oSpriteLibrary.addSprite("dice_b", "./sprites/dice_b.png");
    s_oSpriteLibrary.addSprite("dices_box", "./sprites/dices_box.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    for (a = 0; a < NUM_DICE_ROLLING_FRAMES; a++)
      s_oSpriteLibrary.addSprite(
        "launch_dices_" + a,
        "./sprites/launch_dice_anim/launch_dices_" + a + ".png"
      );
    d += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    e++;
    b.refreshLoader(Math.floor((e / d) * 100));
  };
  this._onAllImagesLoaded = function () {};
  this.onImageLoadError = function (a) {};
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    f = !0;
  };
  this._onRemovePreloader = function () {
    b.unload();
    s_oMain.gotoMenu();
  };
  this.gotoMenu = function () {
    new CMenu();
    h = STATE_MENU;
  };
  this.gotoGame = function () {
    g = new CGame(l);
    h = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    h = STATE_HELP;
  };
  this.stopUpdate = function () {
    f = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    f = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (!1 !== f) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      h === STATE_GAME && g.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var l = a;
  SHOW_CREDITS = a.show_credits;
  ENABLE_FULLSCREEN = a.fullscreen;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
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
  s_oMain = null,
  s_oSpriteLibrary,
  s_aSounds;
function CTextButton(a, f, e, d, h, b, g, l) {
  var c, p, r, x, m, z, n, A, t, v, B, E;
  this._init = function (a, b, d, e, g, f, h, l) {
    c = !1;
    x = [];
    m = [];
    E = createBitmap(d);
    p = d.width;
    r = d.height;
    v = new createjs.Text(e, h + "px " + g, "#000000");
    var q = v.getBounds();
    v.textAlign = "center";
    v.textBaseline = "alphabetic";
    v.x = d.width / 2 + 1;
    v.y = Math.floor(d.height / 2) + q.height / 3 + 1;
    B = new createjs.Text(e, h + "px " + g, f);
    B.textAlign = "center";
    B.textBaseline = "alphabetic";
    B.x = d.width / 2;
    B.y = Math.floor(d.height / 2) + q.height / 3;
    t = new createjs.Container();
    t.x = a;
    t.y = b;
    t.regX = d.width / 2;
    t.regY = d.height / 2;
    s_bMobile || (t.cursor = "pointer");
    t.addChild(E, v, B);
    !1 !== l && s_oStage.addChild(t);
    this._initListener();
  };
  this.unload = function () {
    t.off("mousedown", n);
    t.off("pressup", A);
    s_oStage.removeChild(t);
  };
  this.setVisible = function (a) {
    t.visible = a;
  };
  this.setAlign = function (a) {
    B.textAlign = a;
    v.textAlign = a;
  };
  this.enable = function () {
    c = !1;
    E.filters = [];
    E.cache(0, 0, p, r);
  };
  this.disable = function () {
    c = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(0);
    E.filters = [new createjs.ColorMatrixFilter(a)];
    E.cache(0, 0, p, r);
  };
  this._initListener = function () {
    n = t.on("mousedown", this.buttonDown);
    A = t.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    x[a] = b;
    m[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    x[a] = b;
    m[a] = c;
    z = d;
  };
  this.buttonRelease = function () {
    c ||
      (playSound("click", 1, !1),
      (t.scaleX = 1),
      (t.scaleY = 1),
      x[ON_MOUSE_UP] && x[ON_MOUSE_UP].call(m[ON_MOUSE_UP], z));
  };
  this.buttonDown = function () {
    c ||
      ((t.scaleX = 0.9),
      (t.scaleY = 0.9),
      x[ON_MOUSE_DOWN] && x[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    t.x = a;
    t.y = b;
  };
  this.changeText = function (a) {
    B.text = a;
    v.text = a;
  };
  this.setX = function (a) {
    t.x = a;
  };
  this.setY = function (a) {
    t.y = a;
  };
  this.getX = function () {
    return t.x;
  };
  this.getY = function () {
    return t.y;
  };
  this.getSprite = function () {
    return t;
  };
  this._init(a, f, e, d, h, b, g, l);
  return this;
}
function CGfxButton(a, f, e, d) {
  var h, b, g, l, c, p, r, x, m, z, n;
  this._init = function (a, d, e) {
    h = !1;
    l = [];
    c = [];
    n = createBitmap(e);
    b = e.width;
    g = e.height;
    n.x = a;
    n.y = d;
    n.regX = e.width / 2;
    n.regY = e.height / 2;
    s_bMobile || (n.cursor = "pointer");
    A.addChild(n);
    this._initListener();
  };
  this.unload = function () {
    n.off("mousedown", r);
    n.off("pressup", x);
    !1 === s_bMobile && (n.off("rollover", m), n.off("rollout", z));
    A.removeChild(n);
  };
  this.setVisible = function (a) {
    n.visible = a;
  };
  this.enable = function () {
    h = !1;
    n.filters = [];
    n.cache(0, 0, b, g);
  };
  this.disable = function () {
    h = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    n.filters = [new createjs.ColorMatrixFilter(a)];
    n.cache(0, 0, b, g);
  };
  this._initListener = function () {
    r = n.on("mousedown", this.buttonDown);
    x = n.on("pressup", this.buttonRelease);
    !1 === s_bMobile &&
      ((m = n.on("rollover", this.mouseOver)),
      (z = n.on("rollout", this.mouseOut)));
  };
  this.addEventListener = function (a, b, d) {
    l[a] = b;
    c[a] = d;
  };
  this.addEventListenerWithParams = function (a, b, d, e) {
    l[a] = b;
    c[a] = d;
    p = e;
  };
  this.buttonRelease = function () {
    h ||
      (playSound("click", 1, !1),
      (n.scaleX = 1),
      (n.scaleY = 1),
      l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(c[ON_MOUSE_UP], p));
  };
  this.buttonDown = function () {
    h ||
      ((n.scaleX = 0.9),
      (n.scaleY = 0.9),
      l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(c[ON_MOUSE_DOWN], p));
  };
  this.mouseOver = function () {
    l[ON_MOUSE_OVER] && l[ON_MOUSE_OVER].call(c[ON_MOUSE_OVER], p);
  };
  this.mouseOut = function () {
    l[ON_MOUSE_OUT] && l[ON_MOUSE_OUT].call(c[ON_MOUSE_OUT], p);
  };
  this.setPosition = function (a, b) {
    n.x = a;
    n.y = b;
  };
  this.setX = function (a) {
    n.x = a;
  };
  this.setY = function (a) {
    n.y = a;
  };
  this.getX = function () {
    return n.x;
  };
  this.getY = function () {
    return n.y;
  };
  var A = d;
  this._init(a, f, e);
  return this;
}
function CFicheBut(a, f, e) {
  var d,
    h,
    b,
    g,
    l,
    c,
    p = [],
    r,
    x,
    m;
  this._init = function (a, e, f) {
    h = !1;
    x = new createjs.Container();
    s_oStage.addChild(x);
    d = !1;
    l = [];
    c = [];
    r = createBitmap(f);
    r.x = a;
    r.y = e;
    r.regX = f.width / 2;
    r.regY = f.height / 2;
    s_bMobile || (r.cursor = "pointer");
    x.addChild(r);
    b = f.width;
    g = f.height;
    f = s_oSpriteLibrary.getSprite("select_fiche");
    m = createBitmap(f);
    m.x = a - 2;
    m.y = e - 2;
    m.regX = f.width / 2;
    m.regY = f.height / 2;
    x.addChild(m);
    m.visible = d;
    this._initListener();
  };
  this.unload = function () {
    r.off("mousedown", this.buttonDown);
    r.off("pressup", this.buttonRelease);
    s_oStage.removeChild(x);
  };
  this.select = function () {
    d = !0;
    m.visible = d;
  };
  this.deselect = function () {
    d = !1;
    m.visible = d;
  };
  this.enable = function () {
    h = !1;
    r.filters = [];
    r.cache(0, 0, b, g);
  };
  this.disable = function () {
    h = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-90);
    r.filters = [new createjs.ColorMatrixFilter(a)];
    r.cache(0, 0, b, g);
  };
  this.setVisible = function (a) {
    r.visible = a;
  };
  this._initListener = function () {
    r.on("mousedown", this.buttonDown);
    r.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, d) {
    l[a] = b;
    c[a] = d;
  };
  this.addEventListenerWithParams = function (a, b, d, e) {
    l[a] = b;
    c[a] = d;
    p = e;
  };
  this.buttonRelease = function () {
    h ||
      (playSound("click", 1, !1),
      (r.scaleX = 1),
      (r.scaleY = 1),
      l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(c[ON_MOUSE_UP], p),
      (d = !d),
      (m.visible = d));
  };
  this.buttonDown = function () {
    h ||
      ((r.scaleX = 0.9),
      (r.scaleY = 0.9),
      l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(c[ON_MOUSE_DOWN], p));
  };
  this.setPosition = function (a, b) {
    r.x = a;
    r.y = b;
  };
  this.setX = function (a) {
    r.x = a;
  };
  this.setY = function (a) {
    r.y = a;
  };
  this.getX = function () {
    return r.x;
  };
  this.getY = function () {
    return r.y;
  };
  this._init(a, f, e);
}
function CBetTableButton(a, f, e, d, h) {
  var b, g, l, c, p;
  this._init = function (a, d, e, f, h) {
    c = f;
    b = [];
    g = [];
    p = h;
    l = createBitmap(e);
    l.x = a;
    l.y = d;
    l.regX = e.width / 2;
    l.regY = e.height / 2;
    s_bMobile || (l.cursor = "pointer");
    this._initListener();
    p.addChild(l);
  };
  this.unload = function () {
    l.off("mousedown", this.buttonDown);
    l.off("pressup", this.buttonRelease);
    l.off("rollover", this.mouseOver);
    l.off("rollout", this.mouseOut);
    p.removeChild(l);
  };
  this.setVisible = function (a) {
    l.visible = a;
  };
  this._initListener = function () {
    l.on("mousedown", this.buttonDown);
    l.on("pressup", this.buttonRelease);
    l.on("rollover", this.mouseOver);
    l.on("rollout", this.mouseOut);
  };
  this.addEventListener = function (a, c, d) {
    b[a] = c;
    g[a] = d;
  };
  this.buttonRelease = function () {
    playSound("click", 1, !1);
    b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(g[ON_MOUSE_UP], { button: c }, !1);
  };
  this.buttonDown = function () {
    b[ON_MOUSE_DOWN] &&
      b[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], { button: c }, !1);
  };
  this.mouseOver = function () {
    b[ON_MOUSE_OVER] && b[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], { enlight: c });
  };
  this.mouseOut = function () {
    b[ON_MOUSE_OUT] && b[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], { enlight: c });
  };
  this.setPosition = function (a, b) {
    l.x = a;
    l.y = b;
  };
  this.setX = function (a) {
    l.x = a;
  };
  this.setY = function (a) {
    l.y = a;
  };
  this.getX = function () {
    return l.x;
  };
  this.getY = function () {
    return l.y;
  };
  this._init(a, f, e, d, h);
}
function CToggle(a, f, e, d, h) {
  var b, g, l, c, p, r, x;
  this._init = function (a, d, e, f, h) {
    x = void 0 !== h ? h : s_oStage;
    g = [];
    l = [];
    h = new createjs.SpriteSheet({
      images: [e],
      frames: {
        width: e.width / 2,
        height: e.height,
        regX: e.width / 2 / 2,
        regY: e.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    b = f;
    c = createSprite(
      h,
      "state_" + b,
      e.width / 2 / 2,
      e.height / 2,
      e.width / 2,
      e.height
    );
    c.x = a;
    c.y = d;
    c.stop();
    s_bMobile || (c.cursor = "pointer");
    x.addChild(c);
    this._initListener();
  };
  this.unload = function () {
    c.off("mousedown", p);
    c.off("pressup", r);
    x.removeChild(c);
  };
  this._initListener = function () {
    p = c.on("mousedown", this.buttonDown);
    r = c.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    g[a] = b;
    l[a] = c;
  };
  this.setCursorType = function (a) {
    c.cursor = a;
  };
  this.setActive = function (a) {
    b = a;
    c.gotoAndStop("state_" + b);
  };
  this.buttonRelease = function () {
    c.scaleX = 1;
    c.scaleY = 1;
    playSound("click", 1, !1);
    b = !b;
    c.gotoAndStop("state_" + b);
    g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(l[ON_MOUSE_UP], b);
  };
  this.buttonDown = function () {
    c.scaleX = 0.9;
    c.scaleY = 0.9;
    g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    c.x = a;
    c.y = b;
  };
  this._init(a, f, e, d, h);
}
function CMenu() {
  var a,
    f,
    e,
    d,
    h,
    b,
    g,
    l,
    c,
    p,
    r,
    x,
    m,
    z = null,
    n = null,
    A;
  this._init = function () {
    c = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(c);
    var t = s_oSpriteLibrary.getSprite("but_play");
    h = CANVAS_WIDTH / 2;
    b = CANVAS_HEIGHT - 110;
    p = new CGfxButton(h, b, t, s_oStage);
    p.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    t = s_oSpriteLibrary.getSprite("but_credits");
    SHOW_CREDITS
      ? ((a = CANVAS_WIDTH - t.height / 2 - 10),
        (f = t.height / 2 + 10),
        (r = new CGfxButton(a, f, t, s_oStage)),
        r.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (t = s_oSpriteLibrary.getSprite("audio_icon")),
        (g = a - t.width / 2 - 10))
      : ((t = s_oSpriteLibrary.getSprite("audio_icon")),
        (g = CANVAS_WIDTH - t.height / 2 - 10));
    l = t.height / 2 + 10;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (x = new CToggle(g, l, t, s_bAudioActive, s_oStage)),
        x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    t = window.document;
    var v = t.documentElement;
    z =
      v.requestFullscreen ||
      v.mozRequestFullScreen ||
      v.webkitRequestFullScreen ||
      v.msRequestFullscreen;
    n =
      t.exitFullscreen ||
      t.mozCancelFullScreen ||
      t.webkitExitFullscreen ||
      t.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (z = !1);
    z &&
      screenfull.enabled &&
      ((t = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (e = 10 + t.width / 4),
      (d = t.height / 2 + 10),
      (m = new CToggle(e, d, t, s_bFullscreen, s_oStage)),
      m.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    A = new createjs.Shape();
    A.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(A);
    createjs.Tween.get(A)
      .to({ alpha: 0 }, 400)
      .call(function () {
        A.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (c, n) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      x.setPosition(g - c, n + l);
    z && screenfull.enabled && m.setPosition(e + c, d + n);
    SHOW_CREDITS && r.setPosition(a - c, n + f);
    p.setPosition(h, b - n);
  };
  this.unload = function () {
    p.unload();
    p = null;
    SHOW_CREDITS && (r.unload(), (r = null));
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x.unload(), (x = null);
    z && screenfull.enabled && m.unload();
    s_oStage.removeChild(c);
    c = null;
    s_oStage.removeChild(A);
    s_oMenu = A = null;
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
  this.resetFullscreenBut = function () {
    z && screenfull.enabled && m.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? n.call(window.document)
      : z.call(window.document.documentElement);
    sizeHandler();
  };
  this._onCredits = function () {
    new CCreditsPanel();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var f = !1,
    e,
    d,
    h,
    b,
    g,
    l,
    c,
    p,
    r,
    x,
    m,
    z,
    n,
    A,
    t,
    v,
    B,
    E,
    F,
    H;
  this._init = function () {
    s_oTweenController = new CTweenController();
    s_oGameSettings = new CGameSettings();
    B = new CTableController();
    B.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
    B.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
    B.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
    e = !1;
    c = 0;
    b = d = -1;
    m = {};
    n = new CSeat();
    t = new CPuck(325, 108, s_oStage);
    v = new CInterface();
    A = new CDicesAnim(240, 159);
    H = new CAreYouSurePanel(s_oStage);
    F = new CGameOver();
    E = new CMsgBox();
    p = [];
    h = 0;
    this._onSitDown();
    f = !0;
  };
  this.unload = function () {
    v.unload();
    B.unload();
    E.unload();
    F.unload();
    A.unload();
    s_oStage.removeAllChildren();
  };
  this._setState = function (a) {
    d = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        if (n.getCredit() < s_oGameSettings.getFicheValues(0)) {
          d = -1;
          setTimeout(function () {
            v.hideBlock();
            F.show();
          }, 2e3);
          return;
        }
        b = -1;
        g = 0;
        l = Math.floor(3 * Math.random() + 3);
        v.enableClearButton();
        0 === n.getCurBet() && v.enableRoll(!1);
        c++;
        c > NUM_HAND_FOR_ADS &&
          ((c = 0), $(s_oMain).trigger("show_interlevel_ad"));
        v.hideBlock();
    }
    B.setState(a);
  };
  this._prepareForRolling = function () {
    v.disableBetFiches();
    v.disableClearButton();
    g++;
    r = [];
    this._generateWinLoss();
    p.push(r);
    h = 0;
  };
  this._generateWinLoss = function () {
    const random = new Random();
    randomNumber = random.integer(1, 39);
    var c;
    for (c in m) {
      -1 !== c.indexOf("any11_")
        ? (c = "any11")
        : -1 !== c.indexOf("any_craps") && (c = "any_craps");
      var e = s_oGameSettings.getBetWinLoss(d, b, c);
      var f = e.lose;
      e = e.win;
    }
    if (randomNumber >= WIN_OCCURRENCE / 7)
      if (g > l) {
        do (a = this._generateRandomDices()), (c = a[0] + a[1]);
        while (0 === f[c - 1]);
      } else {
        do
          (a = this._generateRandomDices()),
            (c = a[0] + a[1]),
            (c = 0 === e[c - 1] ? !0 : !1);
        while (!c);
      }
    else if (g > l)
      if (-1 !== c.indexOf("hardway")) a = this._checkHardwayWin(c);
      else {
        do (a = this._generateRandomDices()), (c = a[0] + a[1]);
        while (0 === e[c - 1]);
      }
    else if (-1 !== c.indexOf("hardway")) a = this._checkHardwayWin(c);
    else {
      do
        (a = this._generateRandomDices()),
          (c = a[0] + a[1]),
          (c = 0 === f[c - 1] ? !1 : !0);
      while (c);
    }
    r[0] = a[0];
    r[1] = a[1];
  };
  this._generateRandomDices = function () {
    var a = [],
      b = Math.floor(6 * Math.random()) + 1;
    a.push(b);
    b = Math.floor(6 * Math.random()) + 1;
    a.push(b);
    return a;
  };
  this._checkHardwayWin = function (a) {
    var b = 6,
      c = 6;
    switch (a) {
      case "hardway6":
        c = b = 3;
        break;
      case "hardway10":
        c = b = 5;
        break;
      case "hardway8":
        c = b = 4;
        break;
      case "hardway4":
        c = b = 2;
    }
    do a = this._generateRandomDices();
    while (a[0] !== b || a[1] !== c);
    return a;
  };
  this._startRollingAnim = function () {
    A.startRolling(r);
  };
  this.dicesAnimEnded = function () {
    var a = r[0] + r[1];
    if (d === STATE_GAME_COME_OUT) {
      2 !== a &&
        3 !== a &&
        12 !== a &&
        7 !== a &&
        11 !== a &&
        this._assignNumber(a);
      this._checkWinForBet();
      if (0 < x.length) {
        e = !0;
        for (var c = 0; c < z.length; c++) n.removeBet(z[c]), delete m[z[c]];
        v.setCurBet(n.getCurBet());
      }
      -1 !== b && this._setState(STATE_GAME_COME_POINT);
    } else {
      this._checkWinForBet();
      if (0 < x.length) {
        e = !0;
        for (c = 0; c < z.length; c++) n.removeBet(z[c]), delete m[z[c]];
        v.setCurBet(n.getCurBet());
      }
      b === a
        ? (t.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET))
        : 7 === a &&
          (t.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET));
    }
    v.setMoney(n.getCredit());
    0 < Object.keys(m).length && (v.enableRoll(!0), v.enableClearButton());
    v.hideBlock();
    v.enableBetFiches();
    $(s_oMain).trigger("save_score", [n.getCredit()]);
  };
  this._assignNumber = function (a) {
    b = a;
    a = s_oGameSettings.getPuckXByNumber(b);
    t.switchOn(a);
    v.hideBlock();
  };
  this._checkWinForBet = function () {
    var a = r[0] + r[1],
      c = 0;
    x = [];
    z = [];
    for (var e in m) {
      var g = e;
      -1 !== e.indexOf("any11_")
        ? (e = "any11_7")
        : -1 !== e.indexOf("any_craps") && (e = "any_craps_7");
      var f = n.getBetAmountInPos(g);
      f = s_oGameSettings.checkBetWin(a, d, f, b, e, r);
      if (-1 !== f) {
        c += f;
        var h = n.getFicheMc(e);
        z.push(g);
        for (var l = 0; l < h.length; l++) {
          x.push(h[l]);
          if (0 < f) {
            var p = s_oGameSettings.getAttachOffset("oReceiveWin");
            playSound("win", 0.2, !1);
          } else
            (p = s_oGameSettings.getAttachOffset("oDealerWin")),
              playSound("lose", 0.2, !1);
          h[l].setEndPoint(p.x, p.y);
          n.decreaseBet(s_oGameSettings.getFicheValues(x[l].getValue()));
        }
        0 < f &&
          (n.showWin(n.getBetAmountInPos(g) + f),
          (q -= f),
          (g = h[0].getStartingPos()),
          new CScoreText(f + TEXT_CURRENCY, g.x, g.y));
      }
    }
    0 < c &&
      (v.refreshMsgHelp(TEXT_YOU_WIN + ": " + c),
      setTimeout(function () {
        v.clearMsgHelp();
      }, 3e3));
  };
  this.assignBetFromCome = function (a, b) {
    for (var c = n.getFicheMc(b), d = 0; d < c.length; d++) {
      x.push(c[d]);
      var e = s_oGameSettings.getAttachOffset("number" + a);
      c[d].setEndPoint(e.x, e.y);
    }
    m["number" + a] = m[b];
    delete m[b];
    n.swapBet(b, "number" + a);
  };
  this.assignBetFromDontCome = function (a, b) {
    for (var c = n.getFicheMc(b), d = 0; d < c.length; d++) {
      x.push(c[d]);
      var e = s_oGameSettings.getAttachOffset("lay_bet" + a);
      c[d].setEndPoint(e.x, e.y);
    }
    m["lay_bet" + a] = m[b];
    delete m[b];
    n.swapBet(b, "lay_bet" + a);
  };
  this.onRecharge = function () {
    n.recharge(TOTAL_MONEY);
    v.setMoney(n.getCredit());
    this._setState(STATE_GAME_WAITING_FOR_BET);
    F.hide();
    $(s_oMain).trigger("recharge");
  };
  this.onRoll = function () {
    0 !== n.getCurBet() &&
      (n.getCurBet() < MIN_BET
        ? (E.show(TEXT_ERROR_MIN_BET), v.enableBetFiches(), v.enableRoll(!0))
        : v.isBlockVisible() ||
          (v.showBlock(),
          d === STATE_GAME_WAITING_FOR_BET &&
            this._setState(STATE_GAME_COME_OUT),
          $(s_oMain).trigger("bet_placed", n.getCurBet()),
          this._prepareForRolling(),
          this._startRollingAnim()));
  };
  this._onSitDown = function () {
    this._setState(STATE_GAME_WAITING_FOR_BET);
    n.setInfo(TOTAL_MONEY, B.getContainer());
    v.setMoney(TOTAL_MONEY);
    v.setCurBet(0);
  };
  this._onShowBetOnTable = function (a) {
    if (!e) {
      var b = a.button,
        c = v.getCurFicheSelected(),
        d = s_oGameSettings.getFicheValues(c),
        g = n.getCurBet();
      0 > n.getCredit() - d
        ? E.show(TEXT_ERROR_NO_MONEY_MSG)
        : g + d > MAX_BET
        ? E.show(TEXT_ERROR_MAX_BET_REACHED)
        : ((m[a.button] = void 0 === m[a.button] ? d : m[a.button] + d),
          n.addFicheOnTable(d, c, b),
          v.setMoney(n.getCredit()),
          v.setCurBet(n.getCurBet()),
          v.enableRoll(!0),
          v.enableClearButton(),
          v.refreshMsgHelp(TEXT_READY_TO_ROLL, !0),
          playSound("chip", 1, !1));
    }
  };
  this._onShowEnlight = function (a) {
    if ((a = a.enlight)) B.enlight(a), v.refreshMsgHelp(TEXT_HELP_MSG[a], !1);
  };
  this._onHideEnlight = function (a) {
    if ((a = a.enlight)) B.enlightOff(a), v.clearMsgHelp();
  };
  this.onClearAllBets = function () {
    $(s_oMain).trigger("clear_bet", n.getCurBet());
    if (d === STATE_GAME_COME_POINT) {
      n.clearAllBetsInComePoint();
      for (var a in m)
        "pass_line" !== a &&
          "dont_pass1" !== a &&
          "dont_pass2" !== a &&
          delete m[a];
    } else n.clearAllBets(), (m = {}), v.enableRoll(!1);
    v.setMoney(n.getCredit());
    v.setCurBet(n.getCurBet());
    v.enableRoll(!1);
    v.disableClearButton();
  };
  this.onExit = function (a) {
    a ? (this.unload(), s_oMain.gotoMenu()) : H.show();
  };
  this.onConfirmExit = function () {
    this.unload();
    s_oMain.gotoMenu();
    $(s_oMain).trigger("save_score", [n.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", n.getCredit());
  };
  this._updateDistributeFiches = function () {
    h += s_iTimeElaps;
    if (h > TIME_FICHES_MOV)
      (h = 0), (e = !1), playSound("fiche_collect", 1, !1);
    else
      for (
        var a = s_oTweenController.easeInOutCubic(h, 0, 1, TIME_FICHES_MOV),
          b = 0;
        b < x.length;
        b++
      )
        x[b].updatePos(a);
  };
  this.update = function () {
    !1 !== f &&
      (e && this._updateDistributeFiches(), A.isVisible() && A.update());
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  WIN_OCCURRENCE = a.win_occurrence;
  TIME_SHOW_DICES_RESULT = a.time_show_dice_result;
  NUM_HAND_FOR_ADS = a.num_hand_before_ads;
  var q = a.casino_cash;
  this._init();
}
var s_oGame, s_oTweenController, s_oGameSettings;
function CInterface() {
  var a,
    f,
    e,
    d,
    h,
    b,
    g,
    l,
    c,
    p,
    r,
    x,
    m,
    z,
    n,
    A,
    t,
    v,
    B,
    E = null,
    F = null,
    H;
  this._init = function () {
    var q = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    q.x = 251;
    q.y = 603;
    s_oStage.addChild(q);
    q = new createjs.Text(TEXT_MONEY, "16px " + FONT1, "#fff");
    q.textAlign = "center";
    q.textBaseline = "alphabetic";
    q.x = 332;
    q.y = 629;
    s_oStage.addChild(q);
    x = new createjs.Text("", "16px " + FONT1, "#fff");
    x.textAlign = "center";
    x.textBaseline = "alphabetic";
    x.x = 332;
    x.y = 649;
    s_oStage.addChild(x);
    q = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    q.x = 410;
    q.y = 603;
    s_oStage.addChild(q);
    q = new createjs.Text(TEXT_CUR_BET, "16px " + FONT1, "#fff");
    q.textAlign = "center";
    q.textBaseline = "alphabetic";
    q.x = 492;
    q.y = 629;
    s_oStage.addChild(q);
    m = new createjs.Text("", "16px " + FONT1, "#fff");
    m.textAlign = "center";
    m.textBaseline = "alphabetic";
    m.x = 492;
    m.y = 649;
    s_oStage.addChild(m);
    A = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
    A.x = 575;
    A.y = 610;
    s_oStage.addChild(A);
    z = new createjs.Text(
      TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET,
      "16px " + FONT1,
      "#fff"
    );
    z.textAlign = "center";
    z.textBaseline = "alphabetic";
    z.lineHeight = 21;
    z.x = A.x + 75;
    z.y = A.y + 19;
    s_oStage.addChild(z);
    q = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    q.x = 880;
    q.y = 210;
    s_oStage.addChild(q);
    n = new createjs.Text(TEXT_WAITING_BET, "20px " + FONT2, "#ffde00");
    n.textAlign = "center";
    n.lineWidth = 140;
    n.lineHeight = 20;
    n.x = q.x + 175;
    n.y = q.y + 13;
    s_oStage.addChild(n);
    l = TEXT_WAITING_BET;
    t = new CTextButton(
      1030,
      162,
      s_oSpriteLibrary.getSprite("roll_but"),
      "  " + TEXT_ROLL,
      FONT1,
      "#fff",
      22,
      s_oStage
    );
    t.disable();
    t.setAlign("left");
    t.addEventListener(ON_MOUSE_UP, this._onRoll, this);
    v = new CGfxButton(
      764,
      636,
      s_oSpriteLibrary.getSprite("but_clear_all"),
      s_oStage
    );
    v.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
    this._initFichesBut();
    g = 0;
    c[g].select();
    q = new createjs.Graphics()
      .beginFill("rgba(0,0,0,0.01)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    H = new createjs.Shape(q);
    H.on("click", function () {});
    H.visible = !1;
    s_oStage.addChild(H);
    q = s_oSpriteLibrary.getSprite("but_exit");
    a = CANVAS_WIDTH - q.width / 2 - 10;
    f = q.height / 2 + 10;
    p = new CGfxButton(a, f, q, s_oStage);
    p.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (q = s_oSpriteLibrary.getSprite("audio_icon")),
        (h = a - q.width / 2 - 10),
        (b = q.height / 2 + 10),
        (r = new CToggle(h, b, q, s_bAudioActive, s_oStage)),
        r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    q = window.document;
    var I = q.documentElement;
    E =
      I.requestFullscreen ||
      I.mozRequestFullScreen ||
      I.webkitRequestFullScreen ||
      I.msRequestFullscreen;
    F =
      q.exitFullscreen ||
      q.mozCancelFullScreen ||
      q.webkitExitFullscreen ||
      q.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (E = !1);
    E &&
      screenfull.enabled &&
      ((q = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (e = 10 + q.width / 4),
      (d = q.height / 2 + 10),
      (B = new CToggle(e, d, q, s_bFullscreen, s_oStage)),
      B.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    p.unload();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || r.unload();
    E && screenfull.enabled && B.unload();
    t.unload();
    v.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (c, g) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      r.setPosition(h - c, b + g);
    E && screenfull.enabled && B.setPosition(e + c, d + g);
    p.setPosition(a - c, f + g);
  };
  this.hideBlock = function () {
    H.visible = !1;
  };
  this.showBlock = function () {
    H.visible = !0;
  };
  this.enableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].enable();
  };
  this.enableClearButton = function () {
    v.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].disable();
  };
  this.disableClearButton = function () {
    v.disable();
  };
  this.deselectAllFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].deselect();
  };
  this.enableRoll = function (a) {
    a ? t.enable() : t.disable();
  };
  this._initFichesBut = function () {
    var a = createBitmap(s_oSpriteLibrary.getSprite("chip_box"));
    a.x = 82;
    a.y = 94;
    s_oStage.addChild(a);
    a = 144;
    c = [];
    for (var b = 0; b < NUM_FICHES; b++) {
      var d = s_oSpriteLibrary.getSprite("fiche_" + b);
      c[b] = new CFicheBut(124, a, d);
      c[b].addEventListenerWithParams(
        ON_MOUSE_UP,
        this._onFicheSelected,
        this,
        [b]
      );
      a += d.height + 25;
    }
  };
  this.setMoney = function (a) {
    x.text = a.toFixed(2) + TEXT_CURRENCY;
  };
  this.refreshMoney = function (a, b) {
    new CRollingTextController(
      x,
      null,
      a,
      parseFloat(b),
      4e3,
      EASE_LINEAR,
      TEXT_CURRENCY
    );
  };
  this.setCurBet = function (a) {
    m.text = a.toFixed(2) + TEXT_CURRENCY;
  };
  this.refreshMsgHelp = function (a, b) {
    n.text = a;
    b && (l = a);
  };
  this.clearMsgHelp = function () {
    n.text = l;
  };
  this._onBetRelease = function (a) {
    null !== a.numbers && s_oGame._onShowBetOnTable({ button: a.name }, !1);
  };
  this._onFicheSelected = function (a) {
    playSound("fiche_collect", 1, !1);
    this.deselectAllFiches();
    a = a[0];
    for (var b = 0; b < NUM_FICHES; b++) b === a && (g = b);
  };
  this._onRoll = function () {
    this.disableBetFiches();
    this.enableRoll(!1);
    s_oGame.onRoll();
  };
  this._onClearAllBet = function () {
    s_oGame.onClearAllBets();
  };
  this._onExit = function () {
    s_oGame.onExit(!1);
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    E && screenfull.enabled && B.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? F.call(window.document)
      : E.call(window.document.documentElement);
    sizeHandler();
  };
  this.getCurFicheSelected = function () {
    return g;
  };
  this.isBlockVisible = function () {
    return H.visible;
  };
  s_oInterface = this;
  this._init();
  return this;
}
var s_oInterface = null;
function CMsgBox() {
  var a, f, e, d;
  this._init = function () {
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    a.on("click", function () {});
    e = new createjs.Text("", "24px " + FONT1, "#000");
    e.x = CANVAS_WIDTH / 2 + 2;
    e.y = CANVAS_HEIGHT / 2 - 28;
    e.textAlign = "center";
    e.lineWidth = 300;
    f = new createjs.Text("", "24px " + FONT1, "#ffffff");
    f.x = CANVAS_WIDTH / 2;
    f.y = CANVAS_HEIGHT / 2 - 30;
    f.textAlign = "center";
    f.lineWidth = 300;
    d = new createjs.Container();
    d.alpha = 0;
    d.visible = !1;
    d.addChild(a, e, f);
    s_oStage.addChild(d);
  };
  this.unload = function () {
    a.off("click", function () {});
  };
  this.show = function (a) {
    e.text = a;
    f.text = a;
    d.alpha = 0;
    d.visible = !0;
    var b = this;
    createjs.Tween.get(d).to({ alpha: 1 }, 500);
    setTimeout(function () {
      b._onExit();
    }, 2e3);
  };
  this._onExit = function () {
    d.visible && (d.visible = !1);
  };
  this._init();
  return this;
}
function CTweenController() {
  this.tweenValue = function (a, f, e) {
    return a + e * (f - a);
  };
  this.easeLinear = function (a, f, e, d) {
    return (e * a) / d + f;
  };
  this.easeInCubic = function (a, f, e, d) {
    d = (a /= d) * a * a;
    return f + e * d;
  };
  this.easeBackInQuart = function (a, f, e, d) {
    d = (a /= d) * a;
    return f + e * (2 * d * d + 2 * d * a + -3 * d);
  };
  this.easeInBack = function (a, f, e, d) {
    return e * (a /= d) * a * (2.70158 * a - 1.70158) + f;
  };
  this.easeOutCubic = function (a, f, e, d) {
    return e * ((a = a / d - 1) * a * a + 1) + f;
  };
  this.easeInOutCubic = function (a, f, e, d) {
    return 1 > (a /= d / 2)
      ? (e / 2) * a * a * a + f
      : (e / 2) * ((a -= 2) * a * a + 2) + f;
  };
  this.tweenVectors = function (a, f, e, d) {
    d.x = a.x + e * (f.x - a.x);
    d.y = a.y + e * (f.y - a.y);
    return d;
  };
}
function CSeat() {
  var a, f, e, d;
  this._init = function () {
    this.reset();
  };
  this.reset = function () {
    e = [];
    d && d.reset();
    a = 0;
  };
  this.setInfo = function (e, b) {
    f = e;
    a = 0;
    d = new CFichesController(b);
  };
  this.setFicheBetted = function (d, b, e) {
    a += d * e;
    f -= d * e;
    f = roundDecimal(f, 1);
  };
  this.addFicheOnTable = function (a, b, e) {
    var g = [];
    d.setFicheOnTable(b, e, g);
    this.setFicheBetted(a, g, 1);
  };
  this.decreaseBet = function (d) {
    a -= d;
  };
  this.removeBet = function (a) {
    d.removeBet(a);
  };
  this.swapBet = function (a, b) {
    d.swapBet(a, b);
  };
  this.clearAllBets = function () {
    d.clearAllBets();
    f += a;
    f = roundDecimal(f, 1);
    a = 0;
  };
  this.clearAllBetsInComePoint = function () {
    var e = d.clearAllBetsInComePoint();
    a -= e;
    f += e;
    f = roundDecimal(f, 1);
  };
  this.showWin = function (a) {
    f += a;
    f = roundDecimal(f, 1);
  };
  this.recharge = function (a) {
    f = a;
  };
  this.getCurBet = function () {
    return a;
  };
  this.getCredit = function () {
    return f;
  };
  this.getNumberSelected = function () {
    return e;
  };
  this.getFicheMc = function (a) {
    return d.getFicheMc(a);
  };
  this.getBetAmountInPos = function (a) {
    return d.getBetAmountInPos(a);
  };
  this._init();
}
function CTableController() {
  var a, f, e, d, h;
  this._init = function () {
    e = new createjs.Container();
    s_oStage.addChild(e);
    var a = createBitmap(s_oSpriteLibrary.getSprite("board_table"));
    e.addChild(a);
    this._initEnlights();
    this._initButtonBets();
    this.setState(STATE_GAME_WAITING_FOR_BET);
    d = [];
    h = [];
  };
  this._initEnlights = function () {
    f = [];
    var a = new CEnlight(
      175,
      162,
      s_oSpriteLibrary.getSprite("enlight_pass_line"),
      e
    );
    f.pass_line = a;
    a = new CEnlight(
      365,
      476,
      s_oSpriteLibrary.getSprite("enlight_dont_pass1"),
      e
    );
    f.dont_pass1 = a;
    a = new CEnlight(
      227,
      127,
      s_oSpriteLibrary.getSprite("enlight_dont_pass2"),
      e
    );
    f.dont_pass2 = a;
    a = new CEnlight(
      279,
      127,
      s_oSpriteLibrary.getSprite("enlight_dont_come"),
      e
    );
    f.dont_come = a;
    a = new CEnlight(279, 264, s_oSpriteLibrary.getSprite("enlight_come"), e);
    f.come = a;
    for (
      var d = [
          { value: 4, x: 365, y: 127 },
          { value: 5, x: 451, y: 127 },
          { value: 6, x: 537, y: 127 },
          { value: 8, x: 623, y: 127 },
          { value: 9, x: 709, y: 127 },
          { value: 10, x: 795, y: 127 },
        ],
        h = 0;
      6 > h;
      h++
    )
      (a = new CEnlight(
        d[h].x,
        d[h].y,
        s_oSpriteLibrary.getSprite("enlight_lay_bet"),
        e
      )),
        (f["lay_bet" + d[h].value] = a),
        (a = new CEnlight(
          d[h].x,
          d[h].y + 30,
          s_oSpriteLibrary.getSprite("enlight_lose_bet"),
          e
        )),
        (f["lose_bet" + d[h].value] = a),
        (a = new CEnlight(
          d[h].x,
          d[h].y + 41,
          s_oSpriteLibrary.getSprite("enlight_number"),
          e
        )),
        (f["number" + d[h].value] = a),
        (a = new CEnlight(
          d[h].x,
          d[h].y + 125,
          s_oSpriteLibrary.getSprite("enlight_lose_bet"),
          e
        )),
        (f["win_bet" + d[h].value] = a);
    a = new CEnlight(226, 391, s_oSpriteLibrary.getSprite("enlight_big_6"), e);
    f.big_6 = a;
    a = new CEnlight(240, 434, s_oSpriteLibrary.getSprite("enlight_big_8"), e);
    f.big_8 = a;
    a = new CEnlight(281, 391, s_oSpriteLibrary.getSprite("enlight_field"), e);
    f.field = a;
    d = 401;
    var c = 409;
    for (h = 0; 7 > h; h++)
      (a = new CEnlight(
        806,
        d,
        s_oSpriteLibrary.getSprite("enlight_circle"),
        e
      )),
        (f["any11_" + h] = a),
        (a = new CEnlight(
          840,
          c,
          s_oSpriteLibrary.getSprite("enlight_circle"),
          e
        )),
        (f["any_craps_" + h] = a),
        (d += 37),
        (c += 34);
    a = new CEnlight(877, 551, s_oSpriteLibrary.getSprite("enlight_any11"), e);
    f["any11_" + h] = a;
    a = new CEnlight(
      877,
      612,
      s_oSpriteLibrary.getSprite("enlight_any_craps"),
      e
    );
    f["any_craps_" + h] = a;
    a = new CEnlight(
      877,
      371,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      e
    );
    f.hardway6 = a;
    a = new CEnlight(
      1032,
      371,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      e
    );
    f.hardway10 = a;
    a = new CEnlight(
      877,
      431,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      e
    );
    f.hardway8 = a;
    a = new CEnlight(
      1032,
      431,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      e
    );
    f.hardway4 = a;
    a = new CEnlight(
      877,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      e
    );
    f.horn3 = a;
    a = new CEnlight(
      980,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      e
    );
    f.horn2 = a;
    a = new CEnlight(
      1083,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      e
    );
    f.horn12 = a;
    a = new CEnlight(877, 338, s_oSpriteLibrary.getSprite("enlight_seven"), e);
    f.seven_bet = a;
  };
  this._initButtonBets = function () {
    a = [];
    var b = new CBetTableButton(
      485,
      371,
      s_oSpriteLibrary.getSprite("hit_area_pass_line"),
      "pass_line",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.pass_line = b;
    b = new CBetTableButton(
      580,
      501,
      s_oSpriteLibrary.getSprite("hit_area_dont_pass1"),
      "dont_pass1",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.dont_pass1 = b;
    b = new CBetTableButton(
      252,
      259,
      s_oSpriteLibrary.getSprite("hit_area_dont_pass2"),
      "dont_pass2",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.dont_pass2 = b;
    b = new CBetTableButton(
      321,
      195,
      s_oSpriteLibrary.getSprite("hit_area_dont_come"),
      "dont_come",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.dont_come = b;
    b = new CBetTableButton(
      536,
      327,
      s_oSpriteLibrary.getSprite("hit_area_come"),
      "come",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.come = b;
    b = new CBetTableButton(
      536,
      433,
      s_oSpriteLibrary.getSprite("hit_area_field"),
      "field",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.field = b;
    b = new CBetTableButton(
      304,
      480,
      s_oSpriteLibrary.getSprite("hit_area_big_8"),
      "big_8",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.big_8 = b;
    b = new CBetTableButton(
      274,
      455,
      s_oSpriteLibrary.getSprite("hit_area_big_6"),
      "big_6",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.big_6 = b;
    for (
      var d = [
          { value: 4, x: 408, y: 142 },
          { value: 5, x: 494, y: 142 },
          { value: 6, x: 580, y: 142 },
          { value: 8, x: 666, y: 142 },
          { value: 9, x: 752, y: 142 },
          { value: 10, x: 838, y: 142 },
        ],
        f = 0;
      6 > f;
      f++
    )
      (b = new CBetTableButton(
        d[f].x,
        d[f].y,
        s_oSpriteLibrary.getSprite("hit_area_lay_bet"),
        "lay_bet" + d[f].value,
        e
      )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["lay_bet" + d[f].value] = b),
        (b = new CBetTableButton(
          d[f].x,
          d[f].y + 20,
          s_oSpriteLibrary.getSprite("hit_area_lose_bet"),
          "lose_bet" + d[f].value,
          e
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["lose_bet" + d[f].value] = b),
        (b = new CBetTableButton(
          d[f].x,
          d[f].y + 69,
          s_oSpriteLibrary.getSprite("hit_area_number"),
          "number" + d[f].value,
          e
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["number" + d[f].value] = b),
        (b = new CBetTableButton(
          d[f].x,
          d[f].y + 116,
          s_oSpriteLibrary.getSprite("hit_area_lose_bet"),
          "win_bet" + d[f].value,
          e
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["win_bet" + d[f].value] = b);
    d = [
      { x: 820, y: 299 },
      { x: 820, y: 337 },
      { x: 820, y: 374 },
      { x: 820, y: 410 },
      { x: 820, y: 447 },
      { x: 820, y: 484 },
      { x: 820, y: 521 },
    ];
    f = [
      { x: 855, y: 308 },
      { x: 855, y: 342 },
      { x: 855, y: 376 },
      { x: 855, y: 410 },
      { x: 855, y: 445 },
      { x: 855, y: 479 },
      { x: 855, y: 514 },
    ];
    for (var c = 0; 7 > c; c++)
      (b = new CBetTableButton(
        d[c].x,
        d[c].y + 116,
        s_oSpriteLibrary.getSprite("hit_area_circle"),
        "any11_7",
        e
      )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["any11_" + c] = b),
        (b = new CBetTableButton(
          f[c].x,
          f[c].y + 116,
          s_oSpriteLibrary.getSprite("hit_area_circle"),
          "any_craps_7",
          e
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["any_craps_" + c] = b);
    b = new CBetTableButton(
      1031,
      355,
      s_oSpriteLibrary.getSprite("hit_area_seven"),
      "seven_bet",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.seven_bet = b;
    b = new CBetTableButton(
      954,
      401,
      s_oSpriteLibrary.getSprite("hit_area_proposition1"),
      "hardway6",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.hardway6 = b;
    b = new CBetTableButton(
      1109,
      401,
      s_oSpriteLibrary.getSprite("hit_area_proposition1"),
      "hardway10",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.hardway10 = b;
    b = new CBetTableButton(
      954,
      460,
      s_oSpriteLibrary.getSprite("hit_area_proposition1"),
      "hardway8",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.hardway8 = b;
    b = new CBetTableButton(
      1109,
      460,
      s_oSpriteLibrary.getSprite("hit_area_proposition1"),
      "hardway4",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.hardway4 = b;
    b = new CBetTableButton(
      928,
      521,
      s_oSpriteLibrary.getSprite("hit_area_proposition2"),
      "horn3",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.horn3 = b;
    b = new CBetTableButton(
      1032,
      521,
      s_oSpriteLibrary.getSprite("hit_area_proposition2"),
      "horn2",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.horn2 = b;
    b = new CBetTableButton(
      1136,
      521,
      s_oSpriteLibrary.getSprite("hit_area_proposition2"),
      "horn12",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.horn12 = b;
    b = new CBetTableButton(
      1032,
      581,
      s_oSpriteLibrary.getSprite("hit_area_any11"),
      "any11_7",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.any11_7 = b;
    b = new CBetTableButton(
      1032,
      628,
      s_oSpriteLibrary.getSprite("hit_area_any_craps"),
      "any_craps_7",
      e
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.any_craps_7 = b;
  };
  this.setState = function (b) {
    switch (b) {
      case STATE_GAME_WAITING_FOR_BET:
        for (var d in a)
          "come" === d || "dont_come" === d
            ? a[d].setVisible(!1)
            : a[d].setVisible(!0);
        break;
      case STATE_GAME_COME_POINT:
        for (d in a)
          "pass_line" === d || "dont_pass1" === d || "dont_pass2" === d
            ? a[d].setVisible(!1)
            : a[d].setVisible(!0);
    }
  };
  this.unload = function () {
    for (var a = 0; a < e.getNumChildren(); a++) {
      var d = e.getChildAt(a);
      d instanceof CBetTableButton && d.unload();
    }
  };
  this.addEventListener = function (a, e, f) {
    d[a] = e;
    h[a] = f;
  };
  this._onBetPress = function (a) {
    null !== a.numbers &&
      d[ON_SHOW_BET_ON_TABLE] &&
      d[ON_SHOW_BET_ON_TABLE].call(h[ON_SHOW_BET_ON_TABLE], a, !1);
  };
  this._onBetNumberOver = function (a) {
    null !== a.numbers &&
      d[ON_SHOW_ENLIGHT] &&
      d[ON_SHOW_ENLIGHT].call(h[ON_SHOW_ENLIGHT], a);
  };
  this._onBetNumberOut = function (a) {
    null !== a.numbers &&
      d[ON_HIDE_ENLIGHT] &&
      d[ON_HIDE_ENLIGHT].call(h[ON_HIDE_ENLIGHT], a);
  };
  this.enlight = function (a) {
    if (-1 !== a.indexOf("any11_"))
      for (a = 0; 8 > a; a++) f["any11_" + a].show();
    else if (-1 !== a.indexOf("any_craps_"))
      for (a = 0; 8 > a; a++) f["any_craps_" + a].show();
    else f[a].show();
  };
  this.enlightOff = function (a) {
    if (-1 !== a.indexOf("any11_"))
      for (a = 0; 8 > a; a++) f["any11_" + a].hide();
    else if (-1 !== a.indexOf("any_craps_"))
      for (a = 0; 8 > a; a++) f["any_craps_" + a].hide();
    else f[a].hide();
  };
  this.getEnlightX = function (a) {
    return f["oEnlight_" + a].getX();
  };
  this.getEnlightY = function (a) {
    return f["oEnlight_" + a].getY();
  };
  this.getContainer = function () {
    return e;
  };
  this.getX = function () {
    return e.x;
  };
  this.getY = function () {
    return e.x;
  };
  this._init();
}
function CEnlight(a, f, e, d) {
  var h;
  this._init = function (a, d, e, c) {
    h = createBitmap(e);
    h.x = a;
    h.y = d;
    h.visible = !1;
    c.addChild(h);
  };
  this.show = function () {
    h.visible = !0;
  };
  this.hide = function () {
    h.visible = !1;
  };
  this.getX = function () {
    return h.x;
  };
  this.getY = function () {
    return h.y;
  };
  this._init(a, f, e, d);
}
function CFiche(a, f, e, d, h) {
  var b, g, l, c, p;
  this._init = function (a, d, e, f, g) {
    p = f;
    f = s_oSpriteLibrary.getSprite("fiche_" + e);
    c = createBitmap(f);
    c.x = a;
    c.y = d;
    c.regX = f.width / 2;
    c.regY = f.height / 2;
    g ? ((c.scaleX = g), (c.scaleY = g)) : ((c.scaleX = 0.6), (c.scaleY = 0.6));
    b = e;
    p.addChild(c);
  };
  this.setEndPoint = function (a, b) {
    g = new createjs.Point(c.x, c.y);
    l = new createjs.Point(a, b);
  };
  this.updatePos = function (a) {
    var b = new createjs.Point();
    b = s_oTweenController.tweenVectors(g, l, a, b);
    c.x = b.x;
    c.y = b.y;
  };
  this.getSprite = function () {
    return c;
  };
  this.getValue = function () {
    return b;
  };
  this.getStartingPos = function () {
    return g;
  };
  this._init(a, f, e, d, h);
}
function CDicesAnim(a, f) {
  var e, d, h, b, g, l, c, p, r, x, m, z, n;
  this._init = function (a, b) {
    h = d = 0;
    m = new createjs.Container();
    m.visible = !1;
    m.x = a;
    m.y = b;
    s_oStage.addChild(m);
    var e = new createjs.Graphics()
      .beginFill("rgba(0,0,0,0.6)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    n = new createjs.Shape(e);
    n.x = -a;
    n.y = -b;
    m.addChild(n);
    l = n.on("click", function () {});
    z = createBitmap(s_oSpriteLibrary.getSprite("dices_screen_bg"));
    m.addChild(z);
    g = [];
    for (e = 0; e < NUM_DICE_ROLLING_FRAMES; e++) {
      var f = createBitmap(s_oSpriteLibrary.getSprite("launch_dices_" + e));
      f.x = 162;
      f.y = 150;
      f.visible = !1;
      m.addChild(f);
      g.push(f);
    }
    r = g[0];
    r.visible = !0;
    e = {
      images: [s_oSpriteLibrary.getSprite("dice_a")],
      frames: { width: 80, height: 34 },
      animations: {
        anim_1: [0, 9, "stop_anim_1"],
        anim_2: [10, 19, "stop_anim_2"],
        anim_3: [20, 29, "stop_anim_3"],
        anim_4: [30, 39, "stop_anim_4"],
        anim_5: [40, 49, "stop_anim_5"],
        anim_6: [50, 59, "stop_anim_6"],
        stop_anim_1: 9,
        stop_anim_2: 19,
        stop_anim_3: 29,
        stop_anim_4: 39,
        stop_anim_5: 49,
        stop_anim_6: 59,
      },
    };
    e = new createjs.SpriteSheet(e);
    c = createSprite(e, "anim_1", 80, 34);
    c.stop();
    c.visible = !1;
    c.x = 332;
    c.y = 206;
    m.addChild(c);
    e = {
      images: [s_oSpriteLibrary.getSprite("dice_b")],
      frames: { width: 102, height: 65 },
      animations: {
        anim_1: [0, 14, "stop_anim_1"],
        anim_2: [15, 29, "stop_anim_2"],
        anim_3: [30, 44, "stop_anim_3"],
        anim_4: [45, 59, "stop_anim_4"],
        anim_5: [60, 74, "stop_anim_5"],
        anim_6: [75, 89, "stop_anim_6"],
        stop_anim_1: 14,
        stop_anim_2: 29,
        stop_anim_3: 44,
        stop_anim_4: 59,
        stop_anim_5: 74,
        stop_anim_6: 89,
      },
    };
    e = new createjs.SpriteSheet(e);
    p = createSprite(e, "anim_1", 102, 65);
    p.stop();
    p.visible = !1;
    p.x = 239;
    p.y = 240;
    m.addChild(p);
    p.addEventListener("animationend", A._onDiceBAnimEnded);
    x = new CDicesTopDownView(584, 20, m);
  };
  this.unload = function () {
    n.off("click", l);
  };
  this.hide = function () {
    x.hide();
    m.visible = !1;
    c.visible = !1;
    p.visible = !1;
    for (var a = 0; a < g.length; a++) g[a].visible = !1;
    s_oGame.dicesAnimEnded();
  };
  this.startRolling = function (a) {
    b = a;
    this.playToFrame(0);
    e = m.visible = !0;
    m.visible = !0;
    playSound("dice_rolling", 1, !1);
  };
  this.setShowNumberInfo = function () {
    x.setDiceResult(b[0], b[1]);
  };
  this.playToFrame = function (a) {
    r.visible = !1;
    d = a;
    g[d].visible = !0;
    r = g[d];
  };
  this.nextFrame = function () {
    r.visible = !1;
    d++;
    g[d].visible = !0;
    r = g[d];
  };
  this._setAnimForDiceResult = function () {
    g[d].visible = !1;
    c.visible = !0;
    p.visible = !0;
    c.gotoAndPlay("anim_" + b[0]);
    p.gotoAndPlay("anim_" + b[1]);
  };
  this._onDiceBAnimEnded = function (a) {
    -1 !== a.currentTarget.currentAnimation.indexOf("stop_anim") &&
      (A.setShowNumberInfo(),
      setTimeout(function () {
        A.hide();
      }, TIME_SHOW_DICES_RESULT));
  };
  this.isVisible = function () {
    return m.visible;
  };
  this.update = function () {
    !1 !== e &&
      (h++,
      1 === h &&
        ((h = 0),
        d === NUM_DICE_ROLLING_FRAMES - 1
          ? ((e = !1), this._setAnimForDiceResult())
          : this.nextFrame()));
  };
  var A = this;
  this._init(a, f);
}
function CGameOver() {
  var a, f, e, d, h;
  this._init = function () {
    h = new createjs.Container();
    s_oStage.addChild(h);
    var b = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    h.addChild(b);
    a = new createjs.Text(TEXT_NO_MONEY, "36px " + FONT1, "#fff");
    a.textAlign = "center";
    a.lineWidth = 500;
    a.x = CANVAS_WIDTH / 2;
    a.y = 240;
    h.addChild(a);
    f = new createjs.Text(TEXT_RECHARGE_MSG, "20px " + FONT1, "#fff");
    f.textAlign = "center";
    f.lineWidth = 500;
    f.x = CANVAS_WIDTH / 2;
    f.y = 400;
    h.addChild(f);
    e = new CTextButton(
      CANVAS_WIDTH / 2 + 170,
      510,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_RECHARGE,
      FONT1,
      "#fff",
      18,
      !1
    );
    e.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    h.addChild(e.getSprite());
    d = new CTextButton(
      CANVAS_WIDTH / 2 - 170,
      510,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_EXIT,
      FONT1,
      "#fff",
      18,
      !1
    );
    d.addEventListener(ON_MOUSE_UP, this._onExit, this);
    h.addChild(d.getSprite());
    this.hide();
  };
  this.unload = function () {
    e.unload();
    d.unload();
  };
  this.show = function () {
    h.visible = !0;
  };
  this.hide = function () {
    h.visible = !1;
  };
  this._onRecharge = function () {
    s_oGame.onRecharge();
  };
  this._onExit = function () {
    s_oGame.onExit(!0);
  };
  this._init();
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
    b = new CGfxButton(CANVAS_WIDTH - p.height / 2 - 40, p.height / 2 + 80, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    // c = this.makeText("Game Rule", "35px ", "#ff0", FONT_GAME_2, 240, 260);
    n.addChild(c);
    text = `Player bets the amount determined by the table.
A game consists of a series of rolls.
A roll of 2, 3, or 12 is called "craps".
The first roll by the shooter during a game is called the "come-out roll".
If the come-out roll is 7 or 11, the game is over: 
  Bets on the "Pass line" win 1:1. Bets on the "Don't Pass line" lose. 
If the come-out roll is craps, the game is over: 
  Bets on the "Pass line" lose. 
Bets on the "Don't Pass line" win unless: 
  The "Don't Pass" line says "Bar " and the roll is the indicated value, in which case the bet pushes.
Otherwise, the come-out roll becomes the "point", and a large white marker is placed on the number 
representing the point (4, 5, 6, 8, 9, or 10).
For each roll in a game subsequent to the come-out roll: 
  If the roll is the point, the game is over: 
    Bets on the "Pass line" win 1:1. Bets on the "Don't Pass line" lose. 
  If the roll is 7, the game is over: 
    Bets on the "Pass line" and lose. Bets on the "Don't Pass line" win 1:1. The turn of the "shooter" is over. 
  Otherwise, the game continues and the shooter rolls again.
During a game, Bets on the Pass line and Bets on the Don't Pass line cannot be removed, increased. 
When a game is over: 
  If the game was over on the come-out roll, or because the point was rolled again.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 260);
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
var EASE_LINEAR = 0,
  EASE_CUBIC_IN = 1,
  EASE_QUART_BACKIN = 2,
  EASE_BACKIN = 3,
  EASE_SIN_IN = 4,
  EASE_QUAD_IN = 5,
  EASE_CUBIC_OUT = 6,
  EASE_ELASTIC_OUT = 7,
  EASE_BACKOUT = 8,
  EASE_QUINT_OUT = 9,
  EASE_CUBIC_INOUT = 10;
function CRollingTextController(a, f, e, d, h, b, g) {
  var l,
    c,
    p,
    r,
    x,
    m,
    z,
    n,
    A,
    t,
    v,
    B = [],
    E,
    F;
  this._init = function (a, b, c, d, e, f, g) {
    t = [];
    v = [];
    x = e;
    this.setUpdateInfo(c, d);
    n = f;
    A = g;
    E = a;
    F = b;
  };
  this.unload = function () {
    clearInterval(z);
  };
  this.setUpdateInfo = function (a, b) {
    p = parseFloat(a);
    r = p + b;
    l = 0;
    c = Math.round(x / FPS);
    m = 0;
    var d = this;
    z = setInterval(function () {
      d.update();
    }, FPS_TIME);
  };
  this.addEventListener = function (a, b, c) {
    t[a] = b;
    v[a] = c;
  };
  this.addRollingListener = function (a, b, c) {
    t[ON_CONTROLLER_ROLL] = a;
    v[ON_CONTROLLER_ROLL] = b;
    B = [];
    for (a = 0; a < c.length; a++) B[a] = { step: c[a], flag: !1 };
  };
  this.increaseValue = function (a) {
    m = a;
  };
  this.getTarget = function () {
    return E;
  };
  this.update = function () {
    l++;
    if (l > c)
      (l = 0),
        (E.text = r.toFixed(2) + A),
        null !== F && (F.text = r.toFixed(2) + A),
        clearInterval(z),
        null !== t[ON_CONTROLLER_END] &&
          void 0 !== t[ON_CONTROLLER_END] &&
          t[ON_CONTROLLER_END].call(v[ON_CONTROLLER_END], this),
        0 < m
          ? this.setUpdateInfo(m)
          : null !== t[ON_CONTROLLER_REMOVE] &&
            void 0 !== t[ON_CONTROLLER_REMOVE] &&
            t[ON_CONTROLLER_REMOVE].call(v[ON_CONTROLLER_REMOVE], this);
    else {
      switch (n) {
        case EASE_BACKIN:
          var a = s_oTweenController.easeInBack(l, 0, 1, c);
          break;
        case EASE_BACKOUT:
          a = s_oTweenController.easeOutBack(l, 0, 1, c);
          break;
        case EASE_CUBIC_IN:
          a = s_oTweenController.easeInCubic(l, 0, 1, c);
          break;
        case EASE_CUBIC_OUT:
          a = s_oTweenController.easeOutCubic(l, 0, 1, c);
          break;
        case EASE_ELASTIC_OUT:
          a = s_oTweenController.easeOutElastic(l, 0, 1, c);
          break;
        case EASE_LINEAR:
          a = s_oTweenController.easeLinear(l, 0, 1, c);
          break;
        case EASE_QUART_BACKIN:
          a = s_oTweenController.easeBackInQuart(l, 0, 1, c);
          break;
        default:
          a = s_oTweenController.easeLinear(l, 0, 1, c);
      }
      a = s_oTweenController.tweenValue(p, r, a);
      for (var b = 0; b < B.length; b++)
        a > B[b].step &&
          !B[b].flag &&
          ((B[b].flag = !0),
          null !== t[ON_CONTROLLER_ROLL] &&
            t[ON_CONTROLLER_ROLL].call(v[ON_CONTROLLER_ROLL], b));
      E.text = a.toFixed(2) + A;
      null !== F && (F.text = a.toFixed(2) + A);
    }
  };
  this._init(a, f, e, d, h, b, g);
}
function CPuck(a, f, e) {
  var d, h;
  this._init = function () {
    d = a;
    var e = s_oSpriteLibrary.getSprite("puck"),
      l = new createjs.SpriteSheet({
        images: [e],
        frames: {
          width: e.width / 2,
          height: e.height,
          regX: e.width / 2 / 2,
          regY: e.height / 2,
        },
        animations: { on: [0], off: [1] },
      });
    h = createSprite(
      l,
      "off",
      e.width / 2 / 2,
      e.height / 2,
      e.width / 2,
      e.height
    );
    h.x = a;
    h.y = f;
    b.addChild(h);
  };
  this.switchOn = function (a) {
    createjs.Tween.get(h)
      .to({ x: a }, 1e3, createjs.Ease.cubicOut)
      .call(function () {
        h.gotoAndStop("on");
      });
  };
  this.switchOff = function () {
    createjs.Tween.get(h)
      .to({ x: d }, 1e3, createjs.Ease.cubicOut)
      .call(function () {
        h.gotoAndStop("off");
      });
  };
  var b = e;
  this._init(a, f);
}
function CDicesTopDownView(a, f, e) {
  var d, h, b, g;
  this._init = function (a, e) {
    g = new createjs.Container();
    g.x = a;
    g.y = e;
    g.visible = !1;
    l.addChild(g);
    var c = createBitmap(s_oSpriteLibrary.getSprite("dices_box"));
    g.addChild(c);
    c = s_oSpriteLibrary.getSprite("dice_topdown1");
    var f = {
      images: [c],
      frames: {
        width: c.width / 6,
        height: c.height,
        regX: c.width / 6 / 2,
        regY: c.height / 2,
      },
      animations: {
        dice_1: [0],
        dice_2: [1],
        dice_3: [2],
        dice_4: [3],
        dice_5: [4],
        dice_6: [5],
      },
    };
    f = new createjs.SpriteSheet(f);
    h = createSprite(
      f,
      "dice_1",
      c.width / 6 / 2,
      c.height / 2,
      c.width / 6,
      c.height
    );
    h.x = c.width / 6 / 2 + 10;
    h.y = c.height / 2;
    g.addChild(h);
    c = s_oSpriteLibrary.getSprite("dice_topdown2");
    f = {
      images: [c],
      frames: {
        width: c.width / 6,
        height: c.height,
        regX: c.width / 6 / 2,
        regY: c.height / 2,
      },
      animations: {
        dice_1: [0],
        dice_2: [1],
        dice_3: [2],
        dice_4: [3],
        dice_5: [4],
        dice_6: [5],
      },
    };
    f = new createjs.SpriteSheet(f);
    b = createSprite(
      f,
      "dice_1",
      c.width / 6 / 2,
      c.height / 2,
      c.width / 6,
      c.height
    );
    b.x = c.width / 6 / 2 + c.width / 6 + 20;
    b.y = c.height / 2;
    g.addChild(b);
    d = new createjs.Text(TEXT_COME_OUT + " ", "20px " + FONT1, "#fff");
    d.textAlign = "center";
    d.x = c.width / 6 + 15;
    d.y = c.height + 8;
    g.addChild(d);
  };
  this.setDiceResult = function (a, e) {
    h.gotoAndStop("dice_" + a);
    b.gotoAndStop("dice_" + e);
    d.text = TEXT_COME_OUT + " " + (a + e);
    g.alpha = 0;
    g.visible = !0;
    createjs.Tween.get(g).to({ alpha: 1 }, 400);
  };
  this.hide = function () {
    g.visible = !1;
  };
  var l = e;
  this._init(a, f);
}
function CAreYouSurePanel(a) {
  var f, e, d, h, b, g;
  this._init = function () {
    g = new createjs.Container();
    g.visible = !1;
    l.addChild(g);
    var a = s_oSpriteLibrary.getSprite("msg_box");
    b = createBitmap(a);
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2;
    b.regX = 0.5 * a.width;
    b.regY = 0.5 * a.height;
    g.addChild(b);
    f = b.on("click", function () {});
    e = new createjs.Text(TEXT_ARE_SURE, "60px " + FONT1, "#fff");
    e.x = CANVAS_WIDTH / 2;
    e.y = 0.5 * CANVAS_HEIGHT - 40;
    e.textAlign = "center";
    e.textBaseline = "middle";
    g.addChild(e);
    d = new CGfxButton(
      CANVAS_WIDTH / 2 + 186,
      e.y + 140,
      s_oSpriteLibrary.getSprite("but_yes"),
      g
    );
    d.addEventListener(ON_MOUSE_UP, this._onButYes, this);
    h = new CGfxButton(
      CANVAS_WIDTH / 2 - 186,
      e.y + 140,
      s_oSpriteLibrary.getSprite("but_not"),
      g
    );
    h.addEventListener(ON_MOUSE_UP, this._onButNo, this);
  };
  this.show = function () {
    g.visible = !0;
  };
  this.unload = function () {
    h.unload();
    d.unload();
    b.off("click", f);
  };
  this._onButYes = function () {
    this.unload();
    playSound("click", 1, !1);
    s_oGame.onConfirmExit();
  };
  this._onButNo = function () {
    playSound("click", 1, !1);
    g.visible = !1;
  };
  var l = a;
  this._init();
}
function CScoreText(a, f, e) {
  var d;
  this._init = function (a, b, e) {
    d = new createjs.Text("+" + a, " 30px " + FONT1, "#ffffff");
    d.textAlign = "center";
    d.x = b;
    d.y = e - 10;
    d.alpha = 0;
    d.shadow = new createjs.Shadow("#000000", 2, 2, 2);
    s_oStage.addChild(d);
    createjs.Tween.get(d)
      .to({ alpha: 1 }, 500, createjs.Ease.quadIn)
      .call(function () {
        createjs.Tween.get(d).wait(1e3).to({ alpha: 0 }, 500);
      });
    this.moveUp();
  };
  this.moveUp = function () {
    var a = d.y - 40,
      b = this;
    createjs.Tween.get(d)
      .to({ y: a }, 2e3, createjs.Ease.sineIn)
      .call(function () {
        b.unload();
      });
  };
  this.unload = function () {
    s_oStage.removeChild(d);
  };
  this._init(a, f, e);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var f = a.split("."),
    e = f.length;
  2 < e && (a = f[e - 2] + "." + f[e - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      f = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          f = !0;
          break;
        }
    } catch (e) {
      f = !0;
    }
    return { topFrame: a, err: f };
  },
  getBestPageUrl = function (a) {
    var f = a.topFrame,
      e = "";
    if (a.err)
      try {
        try {
          e = window.top.location.href;
        } catch (h) {
          var d = window.location.ancestorOrigins;
          e = d[d.length - 1];
        }
      } catch (h) {
        e = f.document.referrer;
      }
    else e = f.location.href;
    return e;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
      f = [
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
      e = 0;
    e < f.length;
    e++
  )
    if (f[e] === a) return !0;
  return !1;
}
