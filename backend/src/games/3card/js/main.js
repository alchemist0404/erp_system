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
    d = "undefined" !== typeof module && module.exports,
    b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
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
          g = c.length,
          f = {};
        d < g;
        d++
      )
        if ((b = c[d]) && b[1] in a) {
          for (d = 0; d < b.length; d++) f[c[0][d]] = b[d];
          return f;
        }
      return !1;
    })(),
    g = { change: c.fullscreenchange, error: c.fullscreenerror },
    f = {
      request: function (d) {
        var g = c.requestFullscreen;
        d = d || a.documentElement;
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[g]();
        else d[g](b && Element.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        a[c.exitFullscreen]();
      },
      toggle: function (a) {
        this.isFullscreen ? this.exit() : this.request(a);
      },
      onchange: function (a) {
        this.on("change", a);
      },
      onerror: function (a) {
        this.on("error", a);
      },
      on: function (b, c) {
        var d = g[b];
        d && a.addEventListener(d, c, !1);
      },
      off: function (b, c) {
        var d = g[b];
        d && a.removeEventListener(d, c, !1);
      },
      raw: c,
    };
  c
    ? (Object.defineProperties(f, {
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
        enabled: {
          enumerable: !0,
          get: function () {
            return !!a[c.fullscreenEnabled];
          },
        },
      }),
      d ? (module.exports = f) : (window.screenfull = f))
    : d
    ? (module.exports = !1)
    : (window.screenfull = !1); // fullscreen controll
})();
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function d(a, b) {
    var d = -1,
      g = a ? a.length : 0;
    if ("number" == typeof g && -1 < g && g <= k)
      for (; ++d < g; ) b(a[d], d, a);
    else c(a, b);
  }
  function b(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function c(a, b) {
    for (var c in a) w.call(a, c) && b(a[c], c, a);
  }
  function g(b) {
    return null == b ? a(b) : D.call(b).slice(8, -1);
  }
  function f(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(c) &&
      ("object" == c ? !!a[b] : !0)
    );
  }
  function m(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function n(a, b) {
    var c = null;
    d(a, function (d, g) {
      c = b(c, d, g, a);
    });
    return c;
  }
  function p(a) {
    function d(c) {
      return n(c, function (c, d) {
        var g = d.pattern || m(d);
        !c &&
          (c =
            RegExp("\\b" + g + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + g + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + g + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((c = String(
            d.label && !RegExp(g, "i").test(d.label) ? d.label : c
          ).split("/"))[1] &&
            !/[\d.]+/.test(c[0]) &&
            (c[0] += " " + c[1]),
          (d = d.label || d),
          (c = b(
            c[0]
              .replace(RegExp(g, "i"), d)
              .replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ")
              .replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")
          )));
        return c;
      });
    }
    function q(b) {
      return n(b, function (b, c) {
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
    var h = t,
      l = a && "object" == typeof a && "String" != g(a);
    l && ((h = a), (a = null));
    var w = h.navigator || {},
      k = w.userAgent || "";
    a || (a = k);
    var C = l
        ? !!w.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(D.toString()),
      Q = l ? "Object" : "ScriptBridgingProxyObject",
      E = l ? "Object" : "Environment",
      z = l && h.java ? "JavaPackage" : g(h.java),
      x = l ? "Object" : "RuntimeObject";
    E = (z = /\bJava/.test(z) && h.java) && g(h.environment) == E;
    var U = z ? "a" : "\u03b1",
      H = z ? "b" : "\u03b2",
      O = h.document || {},
      M = h.operamini || h.opera,
      y = u.test((y = l && M ? M["[[Class]]"] : g(M))) ? y : (M = null),
      e,
      P = a;
    l = [];
    var S = null,
      F = a == k;
    k = F && M && "function" == typeof M.version && M.version();
    var A = (function (b) {
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || m(c)) + "\\b", "i").exec(a) &&
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
      r = (function (b) {
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || m(c)) + "\\b", "i").exec(a) &&
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
      J = (function (b) {
        return n(b, function (b, c, d) {
          return (
            b ||
            ((c[B] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] ||
              RegExp("\\b" + m(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      v = (function (c) {
        return n(c, function (c, d) {
          var g = d.pattern || m(d);
          if (
            !c &&
            (c = RegExp("\\b" + g + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var e = c,
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
            g &&
              f &&
              /^Win/i.test(e) &&
              !/^Windows Phone /i.test(e) &&
              (h = h[/[\d.]+$/.exec(e)]) &&
              (e = "Windows " + h);
            e = String(e);
            g && f && (e = e.replace(RegExp(g, "i"), f));
            c = e = b(
              e
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
          return c;
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
    if ((e = /\bGoogle TV\b/.exec(B))) B = e[0];
    /\bSimulator\b/i.test(a) && (B = (B ? B + " " : "") + "Simulator");
    "Opera Mini" == r &&
      /\bOPiOS\b/.test(a) &&
      l.push("running in Turbo/Uncompressed mode");
    "IE" == r && /\blike iPhone OS\b/.test(a)
      ? ((e = p(a.replace(/like iPhone OS/, ""))),
        (J = e.manufacturer),
        (B = e.product))
      : /^iP/.test(B)
      ? (r || (r = "Safari"),
        (v =
          "iOS" +
          ((e = / OS ([\d_]+)/i.exec(a)) ? " " + e[1].replace(/_/g, ".") : "")))
      : "Konqueror" != r || /buntu/i.test(v)
      ? (J &&
          "Google" != J &&
          ((/Chrome/.test(r) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(B))) ||
        (/\bAndroid\b/.test(v) && /^Chrome/.test(r) && /\bVersion\//i.test(a))
        ? ((r = "Android Browser"), (v = /\bAndroid\b/.test(v) ? v : "Android"))
        : "Silk" == r
        ? (/\bMobi/i.test(a) || ((v = "Android"), l.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && l.unshift("accelerated"))
        : "PaleMoon" == r && (e = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? l.push("identifying as Firefox " + e[1])
        : "Firefox" == r && (e = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (v || (v = "Firefox OS"), B || (B = e[1]))
        : !r ||
          (e = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(r))
        ? (r &&
            !B &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e + "/") + 8)) &&
            (r = null),
          (e = B || J || v) &&
            (B || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) &&
            (r =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : e) +
              " Browser"))
        : "Electron" == r &&
          (e = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          l.push("Chromium " + e)
      : (v = "Kubuntu");
    k ||
      (k = q([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        m(r),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (e =
        ("iCab" == A && 3 < parseFloat(k) && "WebKit") ||
        (/\bOpera\b/.test(r) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(A) &&
          "WebKit") ||
        (!A && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident")) ||
        ("WebKit" == A && /\bPlayStation\b(?! Vita\b)/i.test(r) && "NetFront"))
    )
      A = [e];
    "IE" == r && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((r += " Mobile"),
        (v = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x")),
        l.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((r = "IE Mobile"),
        (v = "Windows Phone 8.x"),
        l.unshift("desktop mode"),
        k || (k = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != r &&
        "Trident" == A &&
        (e = /\brv:([\d.]+)/.exec(a)) &&
        (r && l.push("identifying as " + r + (k ? " " + k : "")),
        (r = "IE"),
        (k = e[1]));
    if (F) {
      if (f(h, "global"))
        if (
          (z &&
            ((e = z.lang.System),
            (P = e.getProperty("os.arch")),
            (v =
              v ||
              e.getProperty("os.name") + " " + e.getProperty("os.version"))),
          E)
        ) {
          try {
            (k = h.require("ringo/engine").version.join(".")), (r = "RingoJS");
          } catch (X) {
            (e = h.system) &&
              e.global.system == h.system &&
              ((r = "Narwhal"), v || (v = e[0].os || null));
          }
          r || (r = "Rhino");
        } else
          "object" == typeof h.process &&
            !h.process.browser &&
            (e = h.process) &&
            ("object" == typeof e.versions &&
              ("string" == typeof e.versions.electron
                ? (l.push("Node " + e.versions.node),
                  (r = "Electron"),
                  (k = e.versions.electron))
                : "string" == typeof e.versions.nw &&
                  (l.push("Chromium " + k, "Node " + e.versions.node),
                  (r = "NW.js"),
                  (k = e.versions.nw))),
            r ||
              ((r = "Node.js"),
              (P = e.arch),
              (v = e.platform),
              (k = (k = /[\d.]+/.exec(e.version)) ? k[0] : null)));
      else
        g((e = h.runtime)) == Q
          ? ((r = "Adobe AIR"), (v = e.flash.system.Capabilities.os))
          : g((e = h.phantom)) == x
          ? ((r = "PhantomJS"),
            (k =
              (e = e.version || null) &&
              e.major + "." + e.minor + "." + e.patch))
          : "number" == typeof O.documentMode &&
            (e = /\bTrident\/(\d+)/i.exec(a))
          ? ((k = [k, O.documentMode]),
            (e = +e[1] + 4) != k[1] &&
              (l.push("IE " + k[1] + " mode"), A && (A[1] = ""), (k[1] = e)),
            (k = "IE" == r ? String(k[1].toFixed(1)) : k[0]))
          : "number" == typeof O.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(r) &&
            (l.push("masking as " + r + " " + k),
            (r = "IE"),
            (k = "11.0"),
            (A = ["Trident"]),
            (v = "Windows"));
      v = v && b(v);
    }
    k &&
      (e =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (F && w.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((S = /b/i.test(e) ? "beta" : "alpha"),
      (k =
        k.replace(RegExp(e + "\\+?$"), "") +
        ("beta" == S ? H : U) +
        (/\d+\+?/.exec(e) || "")));
    if (
      "Fennec" == r ||
      ("Firefox" == r && /\b(?:Android|Firefox OS)\b/.test(v))
    )
      r = "Firefox Mobile";
    else if ("Maxthon" == r && k) k = k.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(B))
      "Xbox 360" == B && (v = null),
        "Xbox 360" == B && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(r) &&
        (!r || B || /Browser|Mobi/.test(r))) ||
      ("Windows CE" != v && !/Mobi/i.test(a))
    )
      if ("IE" == r && F)
        try {
          null === h.external && l.unshift("platform preview");
        } catch (X) {
          l.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(a)) &&
        (e =
          (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || k)
          ? ((e = [e, /BB10/.test(a)]),
            (v =
              (e[1] ? ((B = null), (J = "BlackBerry")) : "Device Software") +
              " " +
              e[0]),
            (k = null))
          : this != c &&
            "Wii" != B &&
            ((F && M) ||
              (/Opera/.test(r) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == r && /\bOS X (?:\d+\.){2,}/.test(v)) ||
              ("IE" == r &&
                ((v && !/^Win/.test(v) && 5.5 < k) ||
                  (/\bWindows XP\b/.test(v) && 8 < k) ||
                  (8 == k && !/\bTrident\b/.test(a))))) &&
            !u.test((e = p.call(c, a.replace(u, "") + ";"))) &&
            e.name &&
            ((e = "ing as " + e.name + ((e = e.version) ? " " + e : "")),
            u.test(r)
              ? (/\bIE\b/.test(e) && "Mac OS" == v && (v = null),
                (e = "identify" + e))
              : ((e = "mask" + e),
                (r = y ? b(y.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(e) && (v = null),
                F || (k = null)),
            (A = ["Presto"]),
            l.push(e));
    else r += " Mobile";
    if ((e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e];
      if ("Safari" == r && "+" == e[1].slice(-1))
        (r = "WebKit Nightly"), (S = "alpha"), (k = e[1].slice(0, -1));
      else if (
        k == e[1] ||
        k == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        k = null;
      e[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == e[0] &&
        537.36 == e[2] &&
        28 <= parseFloat(e[1]) &&
        "WebKit" == A &&
        (A = ["Blink"]);
      F && (C || e[1])
        ? (A && (A[1] = "like Chrome"),
          (e =
            e[1] ||
            ((e = e[0]),
            530 > e
              ? 1
              : 532 > e
              ? 2
              : 532.05 > e
              ? 3
              : 533 > e
              ? 4
              : 534.03 > e
              ? 5
              : 534.07 > e
              ? 6
              : 534.1 > e
              ? 7
              : 534.13 > e
              ? 8
              : 534.16 > e
              ? 9
              : 534.24 > e
              ? 10
              : 534.3 > e
              ? 11
              : 535.01 > e
              ? 12
              : 535.02 > e
              ? "13+"
              : 535.07 > e
              ? 15
              : 535.11 > e
              ? 16
              : 535.19 > e
              ? 17
              : 536.05 > e
              ? 18
              : 536.1 > e
              ? 19
              : 537.01 > e
              ? 20
              : 537.11 > e
              ? "21+"
              : 537.13 > e
              ? 23
              : 537.18 > e
              ? 24
              : 537.24 > e
              ? 25
              : 537.36 > e
              ? 26
              : "Blink" != A
              ? "27"
              : "28")))
        : (A && (A[1] = "like Safari"),
          (e =
            ((e = e[0]),
            400 > e
              ? 1
              : 500 > e
              ? 2
              : 526 > e
              ? 3
              : 533 > e
              ? 4
              : 534 > e
              ? "4+"
              : 535 > e
              ? 5
              : 537 > e
              ? 6
              : 538 > e
              ? 7
              : 601 > e
              ? 8
              : "8")));
      A &&
        (A[1] +=
          " " + (e += "number" == typeof e ? ".x" : /[.+]/.test(e) ? "" : "+"));
      "Safari" == r && (!k || 45 < parseInt(k)) && (k = e);
    }
    "Opera" == r && (e = /\bzbov|zvav$/.exec(v))
      ? ((r += " "),
        l.unshift("desktop mode"),
        "zvav" == e ? ((r += "Mini"), (k = null)) : (r += "Mobile"),
        (v = v.replace(RegExp(" *" + e + "$"), "")))
      : "Safari" == r &&
        /\bChrome\b/.exec(A && A[1]) &&
        (l.unshift("desktop mode"),
        (r = "Chrome Mobile"),
        (k = null),
        /\bOS X\b/.test(v) ? ((J = "Apple"), (v = "iOS 4.3+")) : (v = null));
    k &&
      0 == k.indexOf((e = /[\d.]+$/.exec(v))) &&
      -1 < a.indexOf("/" + e + "-") &&
      (v = String(v.replace(e, "")).replace(/^ +| +$/g, ""));
    A &&
      !/\b(?:Avant|Nook)\b/.test(r) &&
      (/Browser|Lunascape|Maxthon/.test(r) ||
        ("Safari" != r && /^iOS/.test(v) && /\bSafari\b/.test(A[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          r
        ) &&
          A[1])) &&
      (e = A[A.length - 1]) &&
      l.push(e);
    l.length && (l = ["(" + l.join("; ") + ")"]);
    J && B && 0 > B.indexOf(J) && l.push("on " + J);
    B && l.push((/^on /.test(l[l.length - 1]) ? "" : "on ") + B);
    if (v) {
      var W =
        (e = / ([\d.+]+)$/.exec(v)) &&
        "/" == v.charAt(v.length - e[0].length - 1);
      v = {
        architecture: 32,
        family: e && !W ? v.replace(e[0], "") : v,
        version: e ? e[1] : null,
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
    (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P)
      ? (v &&
          ((v.architecture = 64),
          (v.family = v.family.replace(RegExp(" *" + e), ""))),
        r &&
          (/\bWOW64\b/i.test(a) ||
            (F &&
              /\w(?:86|32)$/.test(w.cpuClass || w.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          l.unshift("32-bit"))
      : v &&
        /^OS X/.test(v.family) &&
        "Chrome" == r &&
        39 <= parseFloat(k) &&
        (v.architecture = 64);
    a || (a = null);
    h = {};
    h.description = a;
    h.layout = A && A[0];
    h.manufacturer = J;
    h.name = r;
    h.prerelease = S;
    h.product = B;
    h.ua = a;
    h.version = r && k;
    h.os = v || {
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
    h.version && l.unshift(k);
    h.name && l.unshift(r);
    v &&
      r &&
      (v != String(v).split(" ")[0] || (v != r.split(" ")[0] && !B)) &&
      l.push(B ? "(" + v + ")" : "on " + v);
    l.length && (h.description = l.join(" "));
    return h;
  }
  var h = { function: !0, object: !0 },
    t = (h[typeof window] && window) || this,
    l = h[typeof exports] && exports;
  h = h[typeof module] && module && !module.nodeType && module;
  var q = l && h && "object" == typeof global && global;
  !q || (q.global !== q && q.window !== q && q.self !== q) || (t = q);
  var k = Math.pow(2, 53) - 1,
    u = /\bOpera/;
  q = Object.prototype;
  var w = q.hasOwnProperty,
    D = q.toString,
    C = p();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((t.platform = C),
      define(function () {
        return C;
      }))
    : l && h
    ? c(C, function (a, b) {
        l[b] = a;
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
    var b = document.createElement("meta");
    b.name = a[d].name;
    b.content = a[d].content;
    var c = window.document.head.querySelector('meta[name="' + b.name + '"]');
    c && c.parentNode.removeChild(c);
    window.document.head.appendChild(b);
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
  window.scrollTo(0, 1);
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
var s_iOffsetX,
  s_iOffsetY,
  s_iScaleFactor = 1,
  s_bIsIphone = !1;
var cursorHelper;
var clearTrue = !0;
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
    b = window.document,
    c = b.documentElement;
  if (void 0 === window["inner" + a]) a = c["client" + a];
  else if (window["inner" + a] != c["client" + a]) {
    var g = b.createElement("body");
    g.id = "vpw-test-b";
    g.style.cssText = "overflow:scroll";
    var f = b.createElement("div");
    f.id = "vpw-test-d";
    f.style.cssText = "position:absolute;top:-1000px";
    f.innerHTML =
      "<style>@media(" +
      d +
      ":" +
      c["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      d +
      ":7px!important}}</style>";
    g.appendChild(f);
    c.insertBefore(g, b.head);
    a = 7 == f["offset" + a] ? c["client" + a] : window["inner" + a];
    c.removeChild(g);
  } else a = window["inner" + a];
  return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
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
    var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
      c = CANVAS_WIDTH * b;
    b *= CANVAS_HEIGHT;
    if (b < a) {
      var g = a - b;
      b += g;
      c += (CANVAS_WIDTH / CANVAS_HEIGHT) * g;
    } else
      c < d &&
        ((g = d - c), (c += g), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * g));
    g = a / 2 - b / 2;
    var f = d / 2 - c / 2,
      m = CANVAS_WIDTH / c;
    if (f * m < -EDGEBOARD_X || g * m < -EDGEBOARD_Y)
      (b = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (c = CANVAS_WIDTH * b),
        (b *= CANVAS_HEIGHT),
        (g = (a - b) / 2),
        (f = (d - c) / 2),
        (m = CANVAS_WIDTH / c);
    s_iOffsetX = -1 * f * m;
    s_iOffsetY = -1 * g * m;
    0 <= g && (s_iOffsetY = 0);
    0 <= f && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * c),
        (s_oStage.canvas.height = 2 * b),
        (canvas.style.width = c + "px"),
        (canvas.style.height = b + "px"),
        (d = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_iScaleFactor = 2 * d),
        (s_oStage.scaleX = s_oStage.scaleY = 2 * d))
      : s_bMobile && !1 === isIOS()
      ? ($("#canvas").css("width", c + "px"),
        $("#canvas").css("height", b + "px"))
      : ((s_oStage.canvas.width = c),
        (s_oStage.canvas.height = b),
        (s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > g || (g = (a - b) / 2);
    $("#canvas").css("top", g + "px");
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
function createBitmap(a, d, b) {
  var c = new createjs.Bitmap(a),
    g = new createjs.Shape();
  d && b
    ? g.graphics.beginFill("#fff").drawRect(0, 0, d, b)
    : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  c.hitArea = g;
  return c;
}
function createSprite(a, d, b, c, g, f) {
  a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
  d = new createjs.Shape();
  d.graphics.beginFill("#000000").drawRect(-b, -c, g, f);
  a.hitArea = d;
  return a;
}
function randomFloatBetween(a, d, b) {
  "undefined" === typeof b && (b = 2);
  return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b));
}
function shuffle(a) {
  for (var d = a.length, b, c; 0 !== d; )
    (c = Math.floor(Math.random() * d)),
      --d,
      (b = a[d]),
      (a[d] = a[c]),
      (a[c] = b);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var d = Math.floor(a / 60);
  a = parseFloat(a - 60 * d).toFixed(1);
  var b = "";
  b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
  return 10 > a ? b + ("0" + a) : b + a;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var d = Array.prototype.slice.call(arguments);
  return a.sort(function (a, c) {
    for (var b = d.slice(), f = b.shift(); a[f] == c[f] && b.length; )
      f = b.shift();
    return a[f] == c[f] ? 0 : a[f] > c[f] ? 1 : -1;
  });
};
function roundDecimal(a, d) {
  var b = Math.pow(10, d);
  return Math.round(b * a) / b;
}
function tweenVectors(a, d, b, c) {
  c.set(
    a.getX() + b * (d.getX() - a.getX()),
    a.getY() + b * (d.getY() - a.getY())
  );
  return c;
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
function playSound(a, d, b) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(d),
      s_aSounds[a].loop(b),
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
    var d = window.location.search.substring(1).split("&"), b = 0;
    b < d.length;
    b++
  ) {
    var c = d[b].split("=");
    if (c[0] == a) return c[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    !1 !== screenfull.enabled &&
    ((s_bFullscreen = screenfull.isFullscreen),
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
  var a = {},
    d,
    b,
    c,
    g,
    f,
    m;
  this.init = function (a, p, h) {
    d = {};
    c = b = 0;
    g = a;
    f = p;
    m = h;
  };
  this.addSprite = function (c, g) {
    if (!a.hasOwnProperty(c)) {
      var f = new Image();
      a[c] = d[c] = { szPath: g, oSprite: f, bLoaded: !1 };
      b++;
    }
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    b = 0;
    f.call(m);
  };
  this._onSpriteLoaded = function () {
    g.call(m);
    ++c === b && this._onSpritesLoaded();
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
    return b;
  };
}
// const {Random} = require("random.min.js");

var CANVAS_WIDTH = 1700,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 180,
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
  STATE_GAME_PLAYER_TURN = 2,
  STATE_GAME_SHOWDOWN = 3,
  STATE_GAME_DISTRIBUTE_FICHES = 4,
  STATE_GAME_SHOW_WINNER = 5,
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
  STANDOFF_OCCURRENCE,
  NO_HAND_OCCURRENCE,
  FICHES_VALUE,
  COLOR_FICHE_PER_VALUE = "#000 #000 #000 #000 #000 #000".split(" "),
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 250,
  TIME_CARD_REMOVE = 1e3,
  TIME_SHOW_FINAL_CARDS = 4e3,
  TIME_END_HAND,
  BET_TIME = 1e4,
  AD_SHOW_COUNTER,
  CARD_TO_DEAL = 3,
  PAYOUT_ANTE,
  PAYOUT_PLUS,
  maxLimit,
  STRAIGHT_FLUSH = 0,
  THREE_OF_A_KIND = 1,
  STRAIGHT = 2,
  FLUSH = 3,
  ONE_PAIR = 4,
  HIGH_CARD = 5,
  NO_HAND = 6,
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
  BET_ANTE = 0,
  BET_PLAY = 1,
  CURRENT_BET = BET_ANTE,
  BET_PLUS = 2,
  POS_BET = [],
  MULTIPLIERS = [],
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS,
  PAYOUT_MULT = {
    0 : [5, 40],
    1 : [4, 30],
    2 : [1, 6],
    3 : [1, 4],
    4 : [1, 1]
  },
  TEXT_DEAL = "DEAL",
  TEXT_MIN_BET = "MIN BET",
  TEXT_MAX_BET = "MAX BET",
  TEXT_RECHARGE = "RECHARGE",
  TEXT_EXIT = "EXIT",
  TEXT_MONEY = "MONEY",
  TEXT_CURRENCY = "$",
  TEXT_PLAY = "PLAY",
  TEXT_FOLD = "FOLD",
  TEXT_ANTE_BONUS = "ANTE BONUS PAYS",
  TEXT_PAIR_PLUS = "PAIR PLUS PAYS",
  TEXT_ARE_SURE = "ARE YOU SURE?",
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET",
  TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!",
  TEXT_DISPLAY_MSG_STANDOFF = "STAND OFF",
  TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS",
  TEXT_DISPLAY_MSG_USER_TURN = "PLAYER TURN. PLAY OR FOLD?",
  TEXT_DISPLAY_MSG_SHOWDOWN = "SHOWDOWN!",
  TEXT_DISPLAY_MSG_DEALING = "DEALING...",
  TEXT_DISPLAY_MSG_NOT_QUALIFY = "DEALER DOES NOT QUALIFY",
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
  TEXT_NO_MONEY_FOR_ANTE = "YOU DON'T HAVE ENOUGH MONEY FOR ANTE BET!!!",
  TEXT_NO_MONEY_FOR_PLAY =
    "YOU DON'T HAVE ENOUGH MONEY FOR PLAY BET EVENTUALLY!!",
  TEXT_HAND_WON_PLAYER = "HAND WON BY THE PLAYER",
  TEXT_HAND_WON_DEALER = "HAND WON BY THE DEALER",
  TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!",
  TEXT_ERROR_MAX_BET = "YOUR BET IS HIGHER THAN MAXIMUM BET!!",
  TEXT_EVALUATOR = "STRAIGHT FLUSH;THREE OF A KIND;STRAIGHT;FLUSH;ONE PAIR;HIGH CARD;NO HAND".split(
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
  var a, d, b, c, g, f, m, n, p, h;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    h = new createjs.Container();
    s_oStage.addChild(h);
  };
  this.unload = function () {
    h.removeAllChildren();
    p.unload();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var t = new createjs.Shape();
    t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    h.addChild(t);
    t = s_oSpriteLibrary.getSprite("200x200");
    m = createBitmap(t);
    m.regX = 0.5 * t.width;
    m.regY = 0.5 * t.height;
    m.x = CANVAS_WIDTH / 2;
    m.y = CANVAS_HEIGHT / 2 - 180;
    h.addChild(m);
    n = new createjs.Shape();
    n.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(m.x - 100, m.y - 100, 200, 200, 10);
    h.addChild(n);
    m.mask = n;
    t = s_oSpriteLibrary.getSprite("progress_bar");
    c = createBitmap(t);
    c.x = CANVAS_WIDTH / 2 - t.width / 2;
    c.y = CANVAS_HEIGHT / 2 + 50;
    h.addChild(c);
    a = t.width;
    d = t.height;
    g = new createjs.Shape();
    g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, d);
    h.addChild(g);
    c.mask = g;
    b = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2 + 100;
    b.textBaseline = "alphabetic";
    b.textAlign = "center";
    h.addChild(b);
    t = s_oSpriteLibrary.getSprite("but_start");
    p = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      t,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      50,
      h
    );
    p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    p.setVisible(!1);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    h.addChild(f);
    createjs.Tween.get(f)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(f);
        h.removeChild(f);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (f) {
    b.text = f + "%";
    100 === f &&
      (s_oMain._onRemovePreloader(), (b.visible = !1), (c.visible = !1));
    g.graphics.clear();
    f = Math.floor((f * a) / 100);
    g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, f, d);
  };
  this._init();
}
function CMain(a) {
  var d,
    b = 0,
    c = 0,
    g = STATE_LOADING,
    f,
    m;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage);
    s_bMobile = jQuery.browser.mobile;
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    f = new CPreloader();
    s_oGameSettings = new CGameSettings();
    d = !0;
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
  };
  this.soundLoaded = function () {
    b++;
    f.refreshLoader(Math.floor((b / c) * 100));
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
    c += s_aSoundsInfo.length;
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
    s_oSpriteLibrary.addSprite("bg_menu1", "./sprites/bg_menu1.png");
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
    s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
    s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
    s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
    s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
    s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png");
    s_oSpriteLibrary.addSprite("bet_ante", "./sprites/bet_ante.png");
    s_oSpriteLibrary.addSprite("bet_play", "./sprites/bet_play.png");
    s_oSpriteLibrary.addSprite("bet_pair_plus", "./sprites/bet_pair_plus.png");
    s_oSpriteLibrary.addSprite(
      "paytable_ante_bg",
      "./sprites/paytable_ante_bg.png"
    );
    s_oSpriteLibrary.addSprite(
      "paytable_pair_plus_bg",
      "./sprites/paytable_pair_plus_bg.png"
    );
    s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
    s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    c += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    b++;
    f.refreshLoader(Math.floor((b / c) * 100));
  };
  this._onAllImagesLoaded = function () {};
  this._onRemovePreloader = function () {
    f.unload();
    this.gotoMenu();
  };
  this.gotoMenu = function () {
    new CMenu();
    g = STATE_MENU;
  };
  this.gotoGame = function () {
    m = new CGame(n);
    g = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    g = STATE_HELP;
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
      g === STATE_GAME && m.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var n = a;
  s_bAudioActive = a.audio_enable_on_startup;
  ENABLE_CHECK_ORIENTATION = n.check_orientation;
  ENABLE_FULLSCREEN = n.fullscreen;
  SHOW_CREDITS = a.show_credits;
  this.initContainer();
}
var s_bMobile,
  s_bAudioActive = !0,
  s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_bFullscreen = !1,
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary,
  s_oGameSettings,
  s_aSoundsInfo;
function CTextButton(a, d, b, c, g, f, m, n) {
  var p, h, t, l, q, k, u, w, ff, mm, D, C;
  this._init = function (a, b, c, d, g, f, k) {
    p = !1;
    h = 1;
    t = [];
    l = [];
    ff = c.width;
    mm = c.height;
    C = createBitmap(c);
    w = new createjs.Container();
    w.x = a;
    w.y = b;
    w.regX = c.width / 2;
    w.regY = c.height / 2;
    s_bMobile || (w.cursor = "pointer");
    w.addChild(C, D);
    n.addChild(w);
    D = new CTLText( // Button text.
      w,
      10,
      5,
      c.width - 20,
      c.height - 10,
      k,
      "center",
      f,
      g,
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
    w.off("mousedown", q);
    w.off("pressup", k);
    n.removeChild(w);
  };
  this.setVisible = function (a) {
    w.visible = a;
  };
  this.setAlign = function (a) {
    D.textAlign = a;
  };
  this.setTextX = function (a) {
    D.x = a;
  };
  this.setScale = function (a) {
    h = w.scaleX = w.scaleY = a;
  };
  this.enable = function () {
    p = !1;
    C.filters = [];
    C.cache(0, 0, ff, mm);
  };
  this.disable = function () {
    p = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    C.filters = [new createjs.ColorMatrixFilter(a)];
    C.cache(0, 0, ff, mm);
  };
  this._initListener = function () {
    q = w.on("mousedown", this.buttonDown);
    k = w.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    t[a] = b;
    l[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    t[a] = b;
    l[a] = c;
    u = d;
  };
  this.buttonRelease = function () {
    p ||
      (playSound("press_but", 1, !1),
      (w.scaleX = h),
      (w.scaleY = h),
      t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(l[ON_MOUSE_UP], u));
  };
  this.buttonDown = function () {
    p ||
      ((w.scaleX = 0.9 * h),
      (w.scaleY = 0.9 * h),
      t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    w.x = a;
    w.y = b;
  };
  this.tweenPosition = function (a, b, c, d, g, f, h) {
    createjs.Tween.get(w)
      .wait(d)
      .to({ x: a, y: b }, c, g)
      .call(function () {
        void 0 !== f && f.call(h);
      });
  };
  this.changeText = function (a) {
    D.refreshText(a);
  };
  this.setX = function (a) {
    w.x = a;
  };
  this.setY = function (a) {
    w.y = a;
  };
  this.getButtonImage = function () {
    return w;
  };
  this.getX = function () {
    return w.x;
  };
  this.getY = function () {
    return w.y;
  };
  this.getSprite = function () {
    return w;
  };
  this.getScale = function () {
    return w.scaleX;
  };
  this._init(a, d, b, c, g, f, m);
}
function CGfxButton(a, d, b, c) {
  var g,
    dd,
    f,
    m,
    n,
    p,
    h = [],
    t,
    l,
    q;
  this._init = function (a, b, c) {
    g = !1;
    dd = 1;
    n = [];
    p = [];
    f = c.width;
    m = c.height;
    q = createBitmap(c);
    q.x = a;
    q.y = b;
    q.regX = c.width / 2;
    q.regY = c.height / 2;
    q.cursor = "pointer";
    k.addChild(q);
    this._initListener();
  };
  this.unload = function () {
    q.off("mousedown", t);
    q.off("pressup", l);
    k.removeChild(q);
  };
  this.setVisible = function (a) {
    q.visible = a;
  };
  this._initListener = function () {
    t = q.on("mousedown", this.buttonDown);
    l = q.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    n[a] = b;
    p[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    n[a] = b;
    p[a] = c;
    h = d;
  };
  this.buttonRelease = function () {
    g ||
      ((q.scaleX = dd),
      (q.scaleY = dd),
      playSound("press_but", 1, !1),
      n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(p[ON_MOUSE_UP], h));
  };
  this.buttonDown = function () {
    g ||
      ((q.scaleX = 0.9 * dd),
      (q.scaleY = 0.9 * dd),
      n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], h));
  };
  this.setPosition = function (a, b) {
    q.x = a;
    q.y = b;
  };
  this.setX = function (a) {
    q.x = a;
  };
  this.setY = function (a) {
    q.y = a;
  };
  this.enable = function () {
    g = !1;
    q.filters = [];
    q.cache(0, 0, f, m);
  };
  this.disable = function () {
    g = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    q.filters = [new createjs.ColorMatrixFilter(a)];
    q.cache(0, 0, f, m);
  };
  this.getButtonImage = function () {
    return q;
  };
  this.getX = function () {
    return q.x;
  };
  this.getY = function () {
    return q.y;
  };
  var k = c;
  this._init(a, d, b);
  return this;
}
function CToggle(a, d, b, c, g) {
  var f, m, n, p, h, t, l;
  this._init = function (a, b, c, d, g) {
    l = void 0 !== g ? g : s_oStage;
    m = [];
    n = [];
    g = new createjs.SpriteSheet({
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
    p = createSprite(
      g,
      "state_" + f,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    p.x = a;
    p.y = b;
    p.stop();
    s_bMobile || (p.cursor = "pointer");
    l.addChild(p);
    this._initListener();
  };
  this.unload = function () {
    p.off("mousedown", h);
    p.off("pressup", t);
    l.removeChild(p);
  };
  this._initListener = function () {
    h = p.on("mousedown", this.buttonDown);
    t = p.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    n[a] = c;
  };
  this.setCursorType = function (a) {
    p.cursor = a;
  };
  this.setActive = function (a) {
    f = a;
    p.gotoAndStop("state_" + f);
  };
  this.buttonRelease = function () {
    p.scaleX = 1;
    p.scaleY = 1;
    playSound("press_but", 1, !1);
    f = !f;
    p.gotoAndStop("state_" + f);
    m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(n[ON_MOUSE_UP], f);
  };
  this.buttonDown = function () {
    p.scaleX = 0.9;
    p.scaleY = 0.9;
    m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    p.x = a;
    p.y = b;
  };
  this._init(a, d, b, c, g);
}
function CMenu() {
  var a,
    d,
    b,
    c,
    g,
    f,
    m,
    n,
    p,
    h,
    t,
    l = null,
    q = null,
    k;
  this._init = function () {
    m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(m);
    var u = s_oSpriteLibrary.getSprite("but_menu_bg");
    n = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, u, s_oStage);
    n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (u = s_oSpriteLibrary.getSprite("audio_icon")),
        (g = CANVAS_WIDTH - u.width / 4 - 10),
        (f = u.height / 2 + 10),
        (p = new CToggle(g, f, u, s_bAudioActive, s_oStage)),
        p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    u = s_oSpriteLibrary.getSprite("but_credits");
    SHOW_CREDITS
      ? ((a = 10 + u.width / 2),
        (d = u.height / 2 + 10),
        (h = new CGfxButton(a, d, u, s_oStage)),
        h.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (b = a + u.width + 10),
        (c = d))
      : ((b = 10 + u.width / 2), (c = u.height / 2 + 10));
    u = window.document;
    var w = u.documentElement;
    l =
      w.requestFullscreen ||
      w.mozRequestFullScreen ||
      w.webkitRequestFullScreen ||
      w.msRequestFullscreen;
    q =
      u.exitFullscreen ||
      u.mozCancelFullScreen ||
      u.webkitExitFullscreen ||
      u.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (l = !1);
    l &&
      screenfull.enabled &&
      ((u = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (t = new CToggle(b, c, u, s_bFullscreen, s_oStage)),
      t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    k = new createjs.Shape();
    k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(k);
    createjs.Tween.get(k)
      .to({ alpha: 0 }, 400)
      .call(function () {
        k.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (k, q) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      p.setPosition(g - k, q + f);
    l && screenfull.enabled && t.setPosition(b + k, c + q);
    SHOW_CREDITS && h.setPosition(a + k, d + q);
  };
  this.unload = function () {
    n.unload();
    n = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), (p = null);
    SHOW_CREDITS && h.unload();
    l && screenfull.enabled && t.unload();
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
  this._onCredits = function () {
    _oCreditsPanel = new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    l && screenfull.enabled && t.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? q.call(window.document)
      : l.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var d = !1,
    b,
    c,
    g,
    f,
    m,
    n,
    p,
    h,
    t,
    l,
    q,
    k,
    u,
    w,
    D,
    C,
    Q,
    G,
    L,
    V,
    R,
    N,
    T,
    K,
    I,
    E,
    z,
    x,
    U,
    H,
    O,
    M,
    y,
    e,
    P,
    oldCredit,
    S;
  this._init = function () {
    g = MAX_BET;
    f = -1;
    m = u = c = 0;
    s_oTweenController = new CTweenController();
    M = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(M);
    y = new CInterface(TOTAL_MONEY);
    U = new createjs.Container();
    s_oStage.addChild(U);
    H = new CHandEvaluator();
    e = new CSeat();
    e.setCredit(TOTAL_MONEY);
    oldCredit = e.getCredit();
    cursorHelper = new CHelpCursor(
      660,
      436,
      s_oSpriteLibrary.getSprite("help_cursor"),
      s_oStage
    );
    this.reset(!1);
    K = new CVector2();
    K.set(1214, 228);
    I = new CVector2();
    I.set(CANVAS_WIDTH / 2 - 119, 230);
    E = new CVector2();
    E.set(418, 820);
    z = new CVector2();
    z.set(0, -CANVAS_HEIGHT);
    x = new CVector2(454, 230);
    V = [e.getCardOffset(), I];
    S = new CGameOver();
    e.getCredit() < FICHES_VALUE[0]
      ? (this._gameOver(), this.changeState(-1))
      : (d = !0);
    T = new CVector2(K.getX(), K.getY());
    P = new CMsgBox();
    this.changeState(STATE_GAME_WAITING_FOR_BET);
  };
  this.unload = function () {
    d = !1;
    for (var a = 0; a < C.length; a++) C[a].unload();
    y.unload();
    S.unload();
    P.unload();
    s_oStage.removeAllChildren();
  };
  this.reset = function (a) {
    n = m = c = 0;
    e.reset();
    C = [];
    C.splice(0);
    Q = [];
    L = [];
    y.reset();
    y.enableBetFiches(a);
    this.shuffleCard();
  };
  this.setCredit = function (a) {
    e.setCredit(a);
    oldCredit = e.getCredit();
    y.refreshCredit(e.getCredit());
  };
  this.shuffleCard = function () {
    G = [];
    G = s_oGameSettings.getShuffledCardDeck();
  };
  this.changeState = function (a) {
    f = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        y.displayMsg(
          TEXT_DISPLAY_MSG_WAITING_BET,
          TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET
        );
        break;
      case STATE_GAME_DEALING:
        y.disableButtons(),
          y.displayMsg(TEXT_DISPLAY_MSG_DEALING),
          this._dealing();
    }
  };
  this.cardFromDealerArrived = function (a, b, c) {
    !1 === b && a.showCard();
    c < 2 * CARD_TO_DEAL && s_oGame._dealing();
  };
  this._calculatePairPlus = function () {};
  this._showWin = function () {
    b
      ? this._playerLose()
      : "player" === w && k <= STRAIGHT
      ? this._playerWin(TEXT_HAND_WON_PLAYER)
      : q === NO_HAND
      ? this._playerWin(TEXT_DISPLAY_MSG_NOT_QUALIFY)
      : "player" === w
      ? this._playerWin(TEXT_HAND_WON_PLAYER)
      : "dealer" === w
      ? this._playerLose()
      : this._standOff();
    "player" === w ? playSound("win", 1, !1) : playSound("lose", 1, !1);
    this.changeState(STATE_GAME_DISTRIBUTE_FICHES);
    let winAmount = e.getCredit() - oldCredit + e.getBetAnte() + e.getBetPlay() + e.getBetPlus();
    this.updateBalanceToServer();
    $(s_oMain).trigger("hand_finished", [winAmount]);
    oldCredit = e.getCredit();
    y.refreshCredit(e.getCredit());
    setTimeout(function () {
      e.resetBet();
      s_oGame.changeState(STATE_GAME_WAITING_FOR_BET);
      // y.enableBetFiches(!0);
      s_oGame._onEndHand();
      D = s_oGame.endedHand;
    }, TIME_CARD_REMOVE * 3);
  };
  this._playerWin = function (a) {
    var b = p + h;
    e.increaseCredit(b);
    F -= b;
    y.displayMsg(
      TEXT_DISPLAY_MSG_SHOWDOWN,
      TEXT_DISPLAY_MSG_PLAYER_WIN + " " + b + TEXT_CURRENCY
    );
    e.initMovement(BET_ANTE, E.getX(), E.getY());
    e.initMovement(BET_PLAY, E.getX(), E.getY());
    this._checkPlusWin();
    y.showResultText(a);
  };
  this._playerLose = function (a) {
    y.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_LOSE);
    0 < h
      ? (e.increaseCredit(h),
        (F -= h),
        e.initMovement(BET_ANTE, E.getX(), E.getY()))
      : e.initMovement(BET_ANTE, z.getX(), z.getY());
    a || e.initMovement(BET_PLAY, z.getX(), z.getY());
    this._checkPlusWin();
    y.showResultText(TEXT_HAND_WON_DEALER);
  };
  this._standOff = function () {
    var a = p + h;
    e.increaseCredit(a);
    F -= a;
    y.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_STANDOFF);
    e.initMovement(BET_ANTE, E.getX(), E.getY());
    e.initMovement(BET_PLAY, E.getX(), E.getY());
    this._checkPlusWin();
    y.showResultText(TEXT_DISPLAY_MSG_STANDOFF);
  };
  this._checkPlusWin = function () {
    0 < t
      ? (e.increaseCredit(t),
        (F -= t),
        e.initMovement(BET_PLUS, E.getX(), E.getY()))
      : e.initMovement(BET_PLUS, z.getX(), z.getY());
  };
  this._dealing = function () {
    if (n < 2 * CARD_TO_DEAL) {
      var a = new CCard(K.getX(), K.getY(), U);
      if (1 === n % V.length) {
        var b = new CVector2(I.getX() + (CARD_WIDTH / 2 + 7) * n, I.getY());
        var c = N.splice(0, 1),
          d = c[0].fotogram;
        c = c[0].rank;
        a.setInfo(T, b, d, c, !0, n);
        a.addEventListener(ON_CARD_SHOWN, this._onCardShown);
        Q.push(a);
      } else
        (c = R.splice(0, 1)),
          (d = c[0].fotogram),
          (c = c[0].rank),
          a.setInfo(T, e.getAttachCardOffset(), d, c, !1, n),
          e.newCardDealed(),
          L.push(a);
      C.push(a);
      n++;
      a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
      playSound("card", 1, !1);
    } else
      setTimeout(function () {
        s_oGame.changeState(STATE_GAME_PLAYER_TURN);
        y.displayMsg(TEXT_DISPLAY_MSG_USER_TURN);
        y.enable(!1, !0, !0);
      }, 20);
  };
  this._onEndHand = function () {
    for (var a = new CVector2(x.getX(), x.getY()), b = 0; b < C.length; b++)
      C[b].initRemoving(a), C[b].hideCard();
    y.clearCardValueText();
    c = 0;
    s_oGame.changeState(STATE_GAME_SHOW_WINNER);
    playSound("fiche_collect", 1, !1);
    u++;
    u === AD_SHOW_COUNTER &&
      ((u = 0), $(s_oMain).trigger("show_interlevel_ad"));
  };
  this._onCardShown = function () {
    f === STATE_GAME_PLAYER_TURN &&
      (l === CARD_TO_DEAL
        ? (y.showHandValue(q, k), (f = STATE_GAME_SHOWDOWN), s_oGame._showWin())
        : s_oGame._showNextDealerCard());
  };
  this.endedHand = function () {};
  this.updateBalanceToServer = function () {
    let winAmount = e.getCredit() - oldCredit + e.getBetAnte() + e.getBetPlay() + e.getBetPlus();
    let betAmount = e.getBetAnte() + e.getBetPlay() + e.getBetPlus();
    console.log('winAmount :>> ', winAmount);
    console.log('betAmount :>> ', betAmount);
    $.ajax({
      url: `${home_url}/api/games/updateGameBankWithWinAmount`,
      type: 'POST',
      data: {
        customerId: customerid,
        gameId: gameid,
        bet_amount: betAmount,
        win_amount: winAmount,
      },
    }).done((data) => {
      if(data.gameStatus == false) {
        alert("Sorry, Something went wrong, please try again");
        window.location.reload()
      }
    })
  }
  this.setBet = function (a, b) {
    if (y.isResultPanelvisible())
      y.disableBetFiches(), e.clearBet(), (D = this.setBet);
    else {
      var d = FICHES_VALUE[a];
      if (b === BET_ANTE) {
        c = 0;
        cursorHelper.hide();
        var f = e.getBetAnte() + d;
        if (f > g) {
          P.show(TEXT_ERROR_MAX_BET);
          return;
        }
        if (f > e.getCredit() - d) {
          y.displayMsg(TEXT_NO_MONEY_FOR_PLAY);
          return;
        }
      } else f = e.getBetAnte();
      b === BET_ANTE
        ? (e.decreaseCredit(d), (F += d), e.betAnte(d), y.enable(!0, !1, !1))
        : (e.decreaseCredit(f), (F += f), e.betPlay());
      y.refreshCredit(e.getCredit());
    }
  };
  this.setPairPlusBet = function (a) {
    if (y.isResultPanelvisible()) y.disableBetFiches(), e.clearBet();
    else {
      a = FICHES_VALUE[a];
      var b = e.getBetPlus() + a;
      b = parseFloat(b.toFixed(2));
      if (b > g) {
        P.show(TEXT_ERROR_MAX_BET);
        return;
      }
      e.getCredit() - e.getBetAnte() < a
        ? y.displayMsg(TEXT_NO_MONEY_FOR_ANTE)
        : 0 >= e.getCredit()
        ? y.displayMsg(TEXT_NO_MONEY)
        : (e.decreaseCredit(a),
          (F += b),
          e.betPairPlus(a),
          y.refreshCredit(e.getCredit()));
    }
  };
  this._gameOver = function () {
    S.show();
  };
  this._calculateTotalWin = function () {
    t = 0;
    plusMoney = 0;
    plusMoney = e.getBetPlus() * PAYOUT_PLUS[k];
    // k <= THREE_OF_A_KIND &&
    //   e.getBetPlus() * PAYOUT_PLUS[k] > maxLimit[k] &&
    //   (plusMoney = maxLimit[k]);
    0 < e.getBetPlus() && k <= ONE_PAIR && (t = plusMoney + e.getBetPlus());
    h = 0;
    k <= STRAIGHT && (h += e.getBetAnte() * PAYOUT_ANTE[k]);
    p = 0;
    switch (w) {
      case "player":
        p = 2 * e.getBetAnte() + 2 * e.getBetAnte();
        break;
      case "standoff":
        p = 2 * e.getBetAnte();
        break;
      case "dealer_no_hand":
        p = 2 * e.getBetAnte() + e.getBetAnte();
    }
  };
  this.onRebet = function () {
    this.rebet();
  };
  this.onDeal = function () {
    cursorHelper.hide();
    var a = e.getBetAnte() + e.getBetAnte();
    if (e.getBetAnte() < MIN_BET)
      P.show(TEXT_ERROR_MIN_BET), y.enableBetFiches(!1), y.enable(!1, !1, !1);
    else {
      U.removeAllChildren();
      const random = new Random();
      let randomNumber = random.integer(1, 100);
      // console.log(randomNumber);

      $.ajax({
        url: `${home_url}/api/games/check3CardPokerGameBank`,
        type: 'POST',
        data: {
          customerId: customerid,
          gameId: gameid,
          ante_bet_amount: e.getBetAnte(),
          plus_bet_amount: e.getBetPlus(),
          payout_mult: PAYOUT_MULT,
          randomNumber,
        }
      }).done((data) => {
        if(data.gameStatus == false) {
          alert("Sorry, Something went wrong, please try again");
          window.location.reload()
        }
    
        WIN_OCCURRENCE = data.win_occurrence;
  
        if (randomNumber < WIN_OCCURRENCE) {
          do {
            // Player win.
            R = this._generateRandPlayerCards();
            N = this._generateRandDealerCards();
            a = H.evaluate(N);
            var c = H.evaluate(R);
            q = a.ret;
            k = c.ret;
            w = H.getWinnerComparingHands(c.sort_hand, a.sort_hand, k, q);
            this._calculateTotalWin();
          } while (w === "dealer" && k >= Math.min.apply(null, data.data));
        } else {
          // Player lose
          do
            (R = this._generateRandPlayerCards()),
              (N = this._generateRandDealerCards()),
              (a = H.evaluate(N)),
              (c = H.evaluate(R)),
              (q = a.ret),
              (k = c.ret),
              (w = H.getWinnerComparingHands(c.sort_hand, a.sort_hand, k, q)),
              this._calculateTotalWin();
          while (w !== "dealer");
        }
        e.setPrevBet();
        bl = e.getBetAnte() + e.getBetPlus();
        $(s_oMain).trigger("bet_placed", bl);
        playSound("card", 1, !1);
        b = !1;
        this.changeState(STATE_GAME_DEALING);
      });
    }
  };
  this.onFold = function () {
    b = !0;
    w = "dealer";
    l = 0;
    this._showNextDealerCard();
  };
  this.onPlay = function () {
    f !== STATE_GAME_DISTRIBUTE_FICHES &&
      (this.setBet(y.getFicheSelected(), BET_PLAY),
      (l = 0),
      this._showNextDealerCard());
    bl = e.getBetPlay();
    $(s_oMain).trigger("bet_placed", bl);
  };
  this._showNextDealerCard = function () {
    Q[l].showCard();
    l++;
  };
  this._generateRandDealerCards = function () {
    for (var a = [], b = 0; b < CARD_TO_DEAL; b++)
      a.push({ fotogram: G[m].fotogram, rank: G[m].rank, suit: G[m].suit }),
        m++,
        this._checkDeckLength();
    return a;
  };
  this._generateRandPlayerCards = function () {
    for (var a = [], b = 0; b < CARD_TO_DEAL; b++)
      a.push({ fotogram: G[m].fotogram, rank: G[m].rank, suit: G[m].suit }),
        m++,
        this._checkDeckLength();
    return a;
  };
  this._checkDeckLength = function () {
    m >= G.length && ((G = s_oGameSettings.getShuffledCardDeck()), (m = 0));
  };
  this.clearBets = function () {
    if (f === STATE_GAME_WAITING_FOR_BET) {
      y.enable(!1, !1, !1);
      var a = e.getStartingBet();
      0 < a &&
        (e.clearBet(),
        e.increaseCredit(a),
        (F -= a),
        y.refreshCredit(e.getCredit()),
        (a = e.checkIfRebetIsPossible()),
        y.enableBetFiches(a));
    }
  };
  this.rebet = function () {
    this.clearBets();
    var a = e.rebet();
    F -= a;
    e.getBetPlus();
    y.enable(!0, !1, !1);
    y.refreshCredit(e.getCredit());
    c = BET_TIME;
  };
  this.onExit = function () {
    s_oGame.unload();
    $(s_oMain).trigger("save_score", [e.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", e.getCredit());
    s_oMain.gotoMenu();
  };
  this.getState = function () {
    return f;
  };
  this._updateDealing = function () {
    for (var a = 0; a < C.length; a++) C[a].update();
  };
  this._updateFiches = function () {
    e.updateFichesController();
  };
  this._updateShowWinner = function () {
    for (var a = 0; a < C.length; a++) C[a].update();
    c += s_iTimeElaps;
    c > TIME_END_HAND &&
      ((c = 0),
      (a = e.checkIfRebetIsPossible()),
      this.reset(a),
      y.reset(),
      e.getCredit() < FICHES_VALUE[0] * 2
        ? (this._gameOver(), this.changeState(-1), cursorHelper.hide())
        : this.changeState(STATE_GAME_WAITING_FOR_BET),
      D.call(this, y.getFicheSelected(), 0));
    // D.call(this, y.getFicheSelected(), 0)));
  };
  this.update = function () {
    if (!1 !== d)
      switch (f) {
        case STATE_GAME_WAITING_FOR_BET:
          (c = 0), cursorHelper.isVisible() || cursorHelper.show(1);
          break;
        case -1:
          (c = 0), cursorHelper.isVisible() || cursorHelper.show(1);
          break;
        case STATE_GAME_DEALING:
          this._updateDealing();
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
  MULTIPLIERS = a.multiplier;
  BET_TIME = a.bet_time;
  BLACKJACK_PAYOUT = a.blackjack_payout;
  WIN_OCCURRENCE = a.win_occurrence;
  BET_OCCURRENCE = a.bet_occurrence;
  STANDOFF_OCCURRENCE = a.standoff_occurrence;
  NO_HAND_OCCURRENCE = a.no_hand_occurrence;
  var F = a.game_cash;
  PAYOUT_ANTE = a.ante_payout;
  PAYOUT_PLUS = a.plus_payouts;
  // maxLimit = a.max_limit;
  TIME_END_HAND = a.time_show_hand;
  AD_SHOW_COUNTER = a.ad_show_counter;
  this._init();
}
var s_oGame, s_oTweenController;
function CInterface(a) {
  var d,
    b,
    c,
    g,
    f,
    m,
    n,
    p,
    h,
    t,
    l,
    q,
    k,
    u,
    w,
    D,
    C = null,
    Q,
    G,
    L,
    V,
    R,
    N,
    T,
    K,
    I = null,
    E = null;
  this._init = function (a) {
    var x = s_oSpriteLibrary.getSprite("but_exit");
    c = CANVAS_WIDTH - x.width / 2 - 10;
    g = x.height / 2 + 10;
    h = new CGfxButton(c, g, x, s_oStage);
    h.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (f = h.getX() - x.width - 10),
        (m = x.height / 2 + 10),
        (C = new CToggle(
          f,
          m,
          s_oSpriteLibrary.getSprite("audio_icon"),
          s_bAudioActive,
          s_oStage
        )),
        C.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    x = window.document;
    var z = x.documentElement;
    I =
      z.requestFullscreen ||
      z.mozRequestFullScreen ||
      z.webkitRequestFullScreen ||
      z.msRequestFullscreen;
    E =
      x.exitFullscreen ||
      x.mozCancelFullScreen ||
      x.webkitExitFullscreen ||
      x.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (I = !1);
    I &&
      screenfull.enabled &&
      ((x = s_oSpriteLibrary.getSprite("but_fullscreen")),
      null === C
        ? ((d = h.getX() - x.width / 2 - 10), (b = x.height / 2 + 10))
        : ((d = f - x.width / 2 - 10), (b = x.height / 2 + 10)),
      (K = new CToggle(d, b, x, s_bFullscreen, s_oStage)),
      K.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    x = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    x.x = 290;
    x.y = 6;
    s_oStage.addChild(x);
    x = s_oSpriteLibrary.getSprite("gui_bg");
    z = createBitmap(x);
    z.y = CANVAS_HEIGHT - x.height;
    s_oStage.addChild(z);
    x = s_oSpriteLibrary.getSprite("but_clear");
    t = new CGfxButton(1050, CANVAS_HEIGHT - x.height / 2 - 100, x, s_oStage);
    t.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
    x = s_oSpriteLibrary.getSprite("but_rebet");
    l = new CGfxButton(1150, CANVAS_HEIGHT - x.height / 2 - 100, x, s_oStage);
    l.disable();
    l.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
    x = s_oSpriteLibrary.getSprite("but_generic");
    u = new CTextButton(
      1080,
      CANVAS_HEIGHT - x.height / 2,
      x,
      TEXT_DEAL,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    u.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    x = s_oSpriteLibrary.getSprite("but_generic");
    w = new CTextButton(
      1240,
      CANVAS_HEIGHT - x.height / 2,
      x,
      TEXT_PLAY,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    w.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    x = s_oSpriteLibrary.getSprite("but_generic");
    D = new CTextButton(
      1400,
      CANVAS_HEIGHT - x.height / 2,
      x,
      TEXT_FOLD,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    D.addEventListener(ON_MOUSE_UP, this._onButFoldRelease, this);
    POS_BET[BET_PLUS] = { x: CANVAS_WIDTH / 2 - 200, y: 460 };
    POS_BET[BET_ANTE] = { x: CANVAS_WIDTH / 2, y: 460 };
    POS_BET[BET_PLAY] = { x: CANVAS_WIDTH / 2 + 200, y: 460 };
    q = new CGfxButton(
      POS_BET[BET_PLUS].x,
      POS_BET[BET_PLUS].y,
      s_oSpriteLibrary.getSprite("bet_pair_plus"),
      s_oStage
    );
    q.addEventListener(ON_MOUSE_UP, this._onButPlusRelease, this);
    k = new CGfxButton(
      POS_BET[BET_ANTE].x,
      POS_BET[BET_ANTE].y,
      s_oSpriteLibrary.getSprite("bet_ante"),
      s_oStage
    );
    k.addEventListener(ON_MOUSE_UP, this._onButAnteRelease, this);
    z = s_oSpriteLibrary.getSprite("bet_play");
    var H = createBitmap(z);
    H.x = POS_BET[BET_PLAY].x;
    H.y = POS_BET[BET_PLAY].y;
    H.regX = z.width / 2;
    H.regY = z.height / 2;
    s_oStage.addChild(H);
    V = new CTLText( // Unknow text.
      s_oStage,
      412,
      13,
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
    R = new CTLText( // Unknown text.
      s_oStage,
      412,
      63,
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
    G = new createjs.Text("", "21px " + FONT_GAME_1, "#fff");
    G.x = CANVAS_WIDTH / 2;
    G.y = 287;
    G.textAlign = "center";
    s_oStage.addChild(G);
    L = new createjs.Text("", "21px " + FONT_GAME_1, "#fff");
    L.x = CANVAS_WIDTH / 2;
    L.y = 550;
    L.textAlign = "center";
    s_oStage.addChild(L);
    new CTLText( // "Money" text.
      s_oStage,
      310,
      CANVAS_HEIGHT - 120,
      155,
      35,
      35,
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
    Q = new CTLText( // Total money text.
      s_oStage,
      450,
      CANVAS_HEIGHT - 120,
      155,
      35,
      35,
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
    a = [
      { x: 271, y: CANVAS_HEIGHT - 24 },
      { x: 392, y: CANVAS_HEIGHT - 24 },
      { x: 513, y: CANVAS_HEIGHT - 24 },
      { x: 634, y: CANVAS_HEIGHT - 24 },
      { x: 755, y: CANVAS_HEIGHT - 24 },
    ];
    p = [];
    for (z = 0; z < NUM_FICHES; z++)
      (p[z] = new CFiche(a[z].x, a[z].y, z, FICHES_VALUE[z], 1, !0, s_oStage)),
        p[z].addEventListenerWithParams(
          ON_MOUSE_UP,
          this._onFicheClicked,
          this,
          [FICHES_VALUE[z], z]
        );
    n = 0;
    p[n].select(!0);
    FICHE_WIDTH = x.width;
    N = new CAnimText(CANVAS_WIDTH, CANVAS_HEIGHT, s_oStage);
    T = new CPaytablePanel(CANVAS_WIDTH - 313, 400, s_oStage);
    this.disableButtons();
    this.disableRebetButtons();
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    h.unload();
    h = null;
    !1 === DISABLE_SOUND_MOBILE && (C.unload(), (C = null));
    I && screenfull.enabled && K.unload();
    t.unload();
    u.unload();
    l.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, k) {
    h.setPosition(c - a, k + g);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      C.setPosition(f - a, k + m);
    I && screenfull.enabled && K.setPosition(d - a, b + k);
    T.refreshButtonPos(a, k);
  };
  this.reset = function () {
    this.disableButtons();
  };
  this.enableBetFiches = function (a) {
    for (var b = 0; b < NUM_FICHES; b++) p[b].enable();
    t.enable(); // Clear button
    k.enable();
    q.enable();
    a && l.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) p[a].disable();
    t.disable();
    clearTrue = !1;
    l.disable();
    k.disable();
    q.disable();
  };
  this.disableRebetButtons = function () {
    l.disable();
  };
  this.disableButtons = function () {
    u.disable();
    D.disable();
    w.disable();
  };
  this.enable = function (a, b, c) {
    a ? u.enable() : u.disable();
    b ? w.enable() : w.disable();
    c ? D.enable() : D.disable();
  };
  this.refreshCredit = function (a) {
    Q.refreshText(TEXT_CURRENCY + a.toFixed(3));
  };
  this.refreshCardValue = function (a, b) {
    G.text = "" + a;
    L.text = "" + b;
  };
  this.displayMsg = function (a, b) {
    V.refreshText(a);
    void 0 !== b && R.refreshText(b);
  };
  this.clearCardValueText = function () {
    G.text = "";
    L.text = "";
    N.hide();
  };
  this._onFicheClicked = function (a) {
    for (var b = 0; b < p.length; b++) p[b].select(!1);
    p[a[1]].select(!0);
    n = a[1];
    clearTrue = !0;
  };
  this.showResultText = function (a) {
    N.show(
      { x: -200, y: CANVAS_HEIGHT / 2 + 160 },
      { x: CANVAS_WIDTH / 2 - 450, y: CANVAS_HEIGHT / 2 + 160 },
      a
    );
  };
  this.showHandValue = function (a, b) {
    G.text = TEXT_EVALUATOR[a];
    L.text = TEXT_EVALUATOR[b];
  };
  this._onButClearRelease = function () {
    s_oGame.clearBets();
  };
  this._onButRebetRelease = function () {
    l.disable();
    s_oGame.onRebet();
  };
  this._onButPlusRelease = function () {
    // s_oGame.setPairPlusBet(n);
    CURRENT_BET = BET_PLUS;
    cursorHelper._removeChild();
    cursorHelper._init(460, 436, s_oSpriteLibrary.getSprite("help_cursor"));
  };
  this._onButAnteRelease = function () {
    // s_oGame.setBet(n, BET_ANTE);
    CURRENT_BET = BET_ANTE;
    cursorHelper._removeChild();
    cursorHelper._init(660, 436, s_oSpriteLibrary.getSprite("help_cursor"));
  };
  this._onButDealRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onDeal();
  };
  this._onButPlayRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onPlay();
  };
  this._onButFoldRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onFold();
  };
  this._onExit = function () {
    new CAreYouSurePanel(s_oGame.onExit);
  };
  this._onCredits = function () {
    new CCreditsPanel();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    I && screenfull.enabled && K.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? E.call(window.document)
      : I.call(window.document.documentElement);
    sizeHandler();
  };
  this.getFicheSelected = function () {
    return n;
  };
  this.isResultPanelvisible = function () {
    return N.isVisible();
  };
  s_oInterface = this;
  this._init(a);
  return this;
}
var s_oInterface = null;
function CTweenController() {
  this.tweenValue = function (a, d, b) {
    return a + b * (d - a);
  };
  this.easeLinear = function (a, d, b, c) {
    return (b * a) / c + d;
  };
  this.easeInCubic = function (a, d, b, c) {
    c = (a /= c) * a * a;
    return d + b * c;
  };
  this.easeBackInQuart = function (a, d, b, c) {
    c = (a /= c) * a;
    return d + b * (2 * c * c + 2 * c * a + -3 * c);
  };
  this.easeInBack = function (a, d, b, c) {
    return b * (a /= c) * a * (2.70158 * a - 1.70158) + d;
  };
  this.easeOutCubic = function (a, d, b, c) {
    return b * ((a = a / c - 1) * a * a + 1) + d;
  };
}
function CSeat() {
  var a, d, b, c, g, f, m, n, p, h, t, l;
  this._init = function () {
    h = new createjs.Container();
    h.x = CANVAS_WIDTH / 2 - 160;
    h.y = 586;
    s_oStage.addChild(h);
    l = [];
    for (var c = 0; 3 > c; c++) l[c] = new CFichesController();
    b = d = a = m = 0;
    this.reset();
    t = new CVector2();
    t.set(81, 50);
    p = new CVector2(t.getX(), t.getY());
  };
  this.unload = function () {
    s_oStage.removeChild(h);
  };
  this.addEventListener = function (a, b, c) {};
  this.reset = function () {
    for (var a = (f = 0); a < l.length; a++) l[a].reset();
    n = [];
    for (a = 0; 3 > a; a++) n[a] = [];
  };
  this.clearBet = function () {
    b = d = a = 0;
    n = [];
    for (var c = 0; c < l.length; c++) l[c].reset(), (n[c] = []);
  };
  this.resetBet = function () {
    b = d = a = 0;
  };
  this.setCredit = function (a) {
    m = a;
  };
  this.increaseCredit = function (a) {
    m += a;
  };
  this.betAnte = function (b) {
    a += b;
    a = parseFloat(a.toFixed(2));
    l[BET_ANTE].createFichesPile(a, POS_BET[BET_ANTE].x, POS_BET[BET_ANTE].y);
  };
  this.betPlay = function () {
    d = a;
    d = parseFloat(d.toFixed(2));
    l[BET_PLAY].createFichesPile(d, POS_BET[BET_PLAY].x, POS_BET[BET_PLAY].y);
  };
  this.betPairPlus = function (a) {
    b += a;
    b = parseFloat(b.toFixed(2));
    l[BET_PLUS].createFichesPile(b, POS_BET[BET_PLUS].x, POS_BET[BET_PLUS].y);
  };
  this.setPrevBet = function () {
    c = a;
    c = parseFloat(c.toFixed(2));
    g = b;
  };
  this.decreaseCredit = function (a) {
    m -= a;
    m = parseFloat(m.toFixed(2));
  };
  this.refreshFiches = function (a, b, c, d, g) {
    n[g].push({ value: a, index: b });
    l[g].refreshFiches(n[g], c, d);
  };
  this.initMovement = function (a, b, c) {
    l[a].initMovement(b, c);
  };
  this.newCardDealed = function () {
    f++;
  };
  this.rebet = function () {
    if (c === undefined) return 0;
    d = 0;
    a = c;
    b = g;
    this.decreaseCredit(c + g);
    0 < a &&
      l[BET_ANTE].createFichesPile(c, POS_BET[BET_ANTE].x, POS_BET[BET_ANTE].y);
    0 < b &&
      l[BET_PLUS].createFichesPile(g, POS_BET[BET_PLUS].x, POS_BET[BET_PLUS].y);
    return c + g;
  };
  this.checkIfRebetIsPossible = function () {
    for (var a = 0, b = 0; b < l.length; b++) {
      var c = parseFloat(l[b].getPrevBet().toFixed(2));
      a += c;
    }
    return a > m ? !1 : !0;
  };
  this.updateFichesController = function () {
    for (var a = 0; a < l.length; a++) l[a].update();
  };
  this.getAttachCardOffset = function () {
    p.set(h.x + t.getX() + (CARD_WIDTH + 14) * f, h.y + t.getY());
    return p;
  };
  this.getBetAnte = function () {
    return a;
  };
  this.getBetPlay = function () {
    return d;
  };
  this.getBetPlus = function () {
    return b;
  };
  this.getCredit = function () {
    return m;
  };
  this.getCardOffset = function () {
    return t;
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
  var a, d, b, c, g, f, m, n, p, h;
  this._init = function () {
    n = new createjs.Container();
    s_oStage.addChild(n);
    g = new CVector2();
    g.set(n.x, n.y);
    p = new createjs.Container();
    s_oStage.addChild(p);
    h = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
    h.textAlign = "center";
    p.addChild(h);
    b = c = d = 0;
    a = !1;
  };
  this.addEventListener = function (a, b, c) {};
  this.reset = function () {
    a = !1;
    b = 0;
    n.removeAllChildren();
    n.x = g.getX();
    n.y = g.getY();
    h.text = "";
  };
  this.setPrevValue = function (a) {
    c = a;
  };
  this.refreshFiches = function (a, c, d) {
    a = a.sortOn("value", "index");
    for (var g = c, f = d, l = (b = 0), m = 0; m < a.length; m++)
      new CFiche(g, f, a[m].index, FICHES_VALUE[a[m].index], 0.7, !1, n),
        (f -= 5),
        l++,
        9 < l && ((l = 0), (g += FICHE_WIDTH), (f = d)),
        (b += a[m].value);
    playSound("chip", 1, !1);
    h.x = c;
    h.y = d + 40;
    h.text = b.toFixed(2) + TEXT_CURRENCY;
  };
  this.createFichesPile = function (a, b, c) {
    this.reset();
    var d = [];
    do {
      for (
        var g = FICHES_VALUE[FICHES_VALUE.length - 1],
          f = FICHES_VALUE.length - 1;
        g > a;

      )
        f--, (g = FICHES_VALUE[f]);
      f = Math.floor(a / g);
      for (var h = 0; h < f; h++)
        d.push({ value: g, index: s_oGameSettings.getIndexForFiches(g) });
      g = Math.floor(a / g) === a / g ? 0 : a % g;
      a = g.toFixed(2);
    } while (0 < g);
    this.refreshFiches(d, b, c);
  };
  this.initMovement = function (d, g) {
    c = b;
    f = new CVector2(n.x, n.y);
    m = new CVector2(d, g);
    h.text = "";
    a = !0;
  };
  this.getValue = function () {
    return b;
  };
  this.getPrevBet = function () {
    return c;
  };
  this.update = function () {
    if (a)
      if (((d += s_iTimeElaps), d > TIME_FICHES_MOV)) (d = 0), (a = !1);
      else {
        var b = easeInOutCubic(d, 0, 1, TIME_FICHES_MOV),
          c = new CVector2();
        c = tweenVectors(f, m, b, c);
        n.x = c.getX();
        n.y = c.getY();
      }
  };
  this._init();
}
function CVector2(a, d) {
  var b, c;
  this._init = function (a, d) {
    b = a;
    c = d;
  };
  this.add = function (a, d) {
    b += a;
    c += d;
  };
  this.addV = function (a) {
    b += a.getX();
    c += a.getY();
  };
  this.scalarDivision = function (a) {
    b /= a;
    c /= a;
  };
  this.subV = function (a) {
    b -= a.getX();
    c -= a.getY();
  };
  this.scalarProduct = function (a) {
    b *= a;
    c *= a;
  };
  this.invert = function () {
    b *= -1;
    c *= -1;
  };
  this.dotProduct = function (a) {
    return b * a.getX() + c * a.getY();
  };
  this.set = function (a, d) {
    b = a;
    c = d;
  };
  this.setV = function (a) {
    b = a.getX();
    c = a.getY();
  };
  this.length = function () {
    return Math.sqrt(b * b + c * c);
  };
  this.length2 = function () {
    return b * b + c * c;
  };
  this.normalize = function () {
    var a = this.length();
    0 < a && ((b /= a), (c /= a));
  };
  this.getNormalize = function (a) {
    this.length();
    a.set(b, c);
    a.normalize();
  };
  this.rot90CCW = function () {
    var a = b;
    b = -c;
    c = a;
  };
  this.rot90CW = function () {
    var a = b;
    b = c;
    c = -a;
  };
  this.getRotCCW = function (a) {
    a.set(b, c);
    a.rot90CCW();
  };
  this.getRotCW = function (a) {
    a.set(b, c);
    a.rot90CW();
  };
  this.ceil = function () {
    b = Math.ceil(b);
    c = Math.ceil(c);
  };
  this.round = function () {
    b = Math.round(b);
    c = Math.round(c);
  };
  this.toString = function () {
    return "Vector2: " + b + ", " + c;
  };
  this.print = function () {
    trace("Vector2: " + b + ", " + c);
  };
  this.getX = function () {
    return b;
  };
  this.getY = function () {
    return c;
  };
  this._init(a, d);
}
function CGameSettings() {
  var a, d;
  this._init = function () {
    var b = -1;
    a = [];
    for (var c = 0; 52 > c; c++) {
      var d = (c + 1) % 13;
      1 === d ? ((d = 14), b++) : 0 === d && (d = 13);
      a.push({ fotogram: c, rank: d, suit: b });
    }
    FICHES_VALUE = [1, 5, 10, 25, 100];
  };
  this.getIndexForFiches = function (a) {
    for (var b = 0, d = 0; d < FICHES_VALUE.length; d++)
      FICHES_VALUE[d] === a && (b = d);
    return b;
  };
  this.generateFichesPile = function (a) {
    var b = [],
      d = FICHES_VALUE.length - 1,
      f = FICHES_VALUE[d];
    do {
      var m = a % f;
      m = CMath.roundDecimal(m, 1);
      a = Math.floor(a / f);
      for (var n = 0; n < a; n++) b.push(f);
      d--;
      f = FICHES_VALUE[d];
      a = m;
    } while (0 < m && -1 < d);
    return b;
  };
  this.timeToString = function (a) {
    a = Math.round(a / 1e3);
    var b = Math.floor(a / 60);
    a -= 60 * b;
    var d = "";
    d = 10 > b ? d + ("0" + b + ":") : d + (b + ":");
    return 10 > a ? d + ("0" + a) : d + a;
  };
  this.getShuffledCardDeck = function () {
    for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
    for (d = []; 0 < b.length; )
      d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
    return d;
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
function ease(a, d, b, c, g, f) {
  switch (a) {
    case TYPE_LINEAR:
      var m = easeLinear(d, b, c, g, f);
      break;
    case TYPE_IN_CUBIC:
      m = easeInCubic(d, b, c, g, f);
      break;
    case TYPE_OUT_CUBIC:
      m = easeOutCubic(d, b, c, g, f);
      break;
    case TYPE_IN_BACK:
      m = easeInBack(d, b, c, g, f);
      break;
    case TYPE_OUT_BACK:
      m = easeInBack(d, b, c, g, f);
  }
  return m;
}
function easeOutBounce(a, d, b, c) {
  return (a /= c) < 1 / 2.75
    ? 7.5625 * b * a * a + d
    : a < 2 / 2.75
    ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + d
    : a < 2.5 / 2.75
    ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + d
    : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + d;
}
function easeInBounce(a, d, b, c) {
  return b - easeOutBounce(c - a, 0, b, c) + d;
}
function easeInOutBounce(a, d, b, c) {
  return a < c / 2
    ? 0.5 * easeInBounce(2 * a, 0, b, c) + d
    : 0.5 * easeOutBounce(2 * a - c, 0, b, c) + 0.5 * b + d;
}
function easeInCirc(a, d, b, c) {
  return -b * (Math.sqrt(1 - (a /= c) * a) - 1) + d;
}
function easeOutCirc(a, d, b, c) {
  return b * Math.sqrt(1 - (a = a / c - 1) * a) + d;
}
function easeInOutCirc(a, d, b, c) {
  return 1 > (a /= c / 2)
    ? (-b / 2) * (Math.sqrt(1 - a * a) - 1) + d
    : (b / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + d;
}
function easeInCubic(a, d, b, c, g) {
  return b * (a /= c) * a * a + d;
}
function easeOutCubic(a, d, b, c, g) {
  return b * ((a = a / c - 1) * a * a + 1) + d;
}
function easeInOutCubic(a, d, b, c, g) {
  return 1 > (a /= c / 2)
    ? (b / 2) * a * a * a + d
    : (b / 2) * ((a -= 2) * a * a + 2) + d;
}
function easeInElastic(a, d, b, c, g, f, m) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  m || (m = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = m / 4))
    : (g = (m / (2 * Math.PI)) * Math.asin(b / f));
  return (
    -(f * Math.pow(2, 10 * --a) * Math.sin((2 * (a * c - g) * Math.PI) / m)) + d
  );
}
function easeOutElastic(a, d, b, c, g, f, m) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  m || (m = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = m / 4))
    : (g = (m / (2 * Math.PI)) * Math.asin(b / f));
  return (
    f * Math.pow(2, -10 * a) * Math.sin((2 * (a * c - g) * Math.PI) / m) + b + d
  );
}
function easeInOutElastic(a, d, b, c, g, f, m) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  m || (m = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = m / 4))
    : (g = (m / (2 * Math.PI)) * Math.asin(b / f));
  return 1 > a
    ? -0.5 *
        f *
        Math.pow(2, 10 * --a) *
        Math.sin((2 * (a * c - g) * Math.PI) / m) +
        d
    : f *
        Math.pow(2, -10 * --a) *
        Math.sin((2 * (a * c - g) * Math.PI) / m) *
        0.5 +
        b +
        d;
}
function easeInExpo(a, d, b, c) {
  return 0 == a ? d : b * Math.pow(2, 10 * (a / c - 1)) + d;
}
function easeOutExpo(a, d, b, c) {
  return a == c ? d + b : b * (-Math.pow(2, (-10 * a) / c) + 1) + d;
}
function easeInOutExpo(a, d, b, c) {
  return 0 == a
    ? d
    : a == c
    ? d + b
    : 1 > (a /= c / 2)
    ? (b / 2) * Math.pow(2, 10 * (a - 1)) + d
    : (b / 2) * (-Math.pow(2, -10 * --a) + 2) + d;
}
function easeLinear(a, d, b, c) {
  return (b * a) / c + d;
}
function easeInQuad(a, d, b, c) {
  return b * (a /= c) * a + d;
}
function easeOutQuad(a, d, b, c) {
  return -b * (a /= c) * (a - 2) + d;
}
function easeInOutQuad(a, d, b, c) {
  return 1 > (a /= c / 2)
    ? (b / 2) * a * a + d
    : (-b / 2) * (--a * (a - 2) - 1) + d;
}
function easeInQuart(a, d, b, c) {
  return b * (a /= c) * a * a * a + d;
}
function easeOutQuart(a, d, b, c) {
  return -b * ((a = a / c - 1) * a * a * a - 1) + d;
}
function easeInOutQuart(a, d, b, c) {
  return 1 > (a /= c / 2)
    ? (b / 2) * a * a * a * a + d
    : (-b / 2) * ((a -= 2) * a * a * a - 2) + d;
}
function easeInQuint(a, d, b, c) {
  return b * (a /= c) * a * a * a * a + d;
}
function easeOutQuint(a, d, b, c) {
  return b * ((a = a / c - 1) * a * a * a * a + 1) + d;
}
function easeInOutQuint(a, d, b, c) {
  return 1 > (a /= c / 2)
    ? (b / 2) * a * a * a * a * a + d
    : (b / 2) * ((a -= 2) * a * a * a * a + 2) + d;
}
function easeInSine(a, d, b, c) {
  return -b * Math.cos((a / c) * (Math.PI / 2)) + b + d;
}
function easeOutSine(a, d, b, c) {
  return b * Math.sin((a / c) * (Math.PI / 2)) + d;
}
function easeInOutSine(a, d, b, c) {
  return (-b / 2) * (Math.cos((Math.PI * a) / c) - 1) + d;
}
function easeInBack(a, d, b, c) {
  return b * (a /= c) * a * (2.70158 * a - 1.70158) + d;
}
function easeOutBack(a, d, b, c) {
  return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d;
}
function CCard(a, d, b) {
  var c,
    g,
    f = -1,
    m,
    n,
    p,
    h,
    t,
    l,
    q,
    k,
    u,
    w;
  this._init = function (a, b, c) {
    w = c;
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
    u = createSprite(
      c,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    u.x = a;
    u.y = b;
    u.rotation = 120;
    u.stop();
    w.addChild(u);
    q = [];
    k = [];
  };
  this.unload = function () {
    l = t = null;
    w.removeChild(u);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    k[a] = c;
  };
  this.setInfo = function (a, b, d, k, q, u) {
    g = !1;
    h = 0;
    m = d;
    n = k;
    t = a;
    l = b;
    p = u;
    c = q;
    f = STATE_CARD_DEALING;
  };
  this.initRemoving = function (a) {
    t = new CVector2(u.x, u.y);
    l = a;
    h = 0;
    f = STATE_CARD_REMOVING;
  };
  this.setValue = function () {
    u.gotoAndStop(m);
    var a = this;
    createjs.Tween.get(u)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardShown();
      });
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(u)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(u)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    u.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(u)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    q[ON_CARD_SHOWN] && q[ON_CARD_SHOWN].call(k[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    g = !0;
  };
  this.getValue = function () {
    return n;
  };
  this.getFotogram = function () {
    return m;
  };
  this._updateDealing = function () {
    h += s_iTimeElaps;
    if (h > TIME_CARD_DEALING)
      (f = -1),
        (h = 0),
        (u.x = l.getX()),
        (u.y = l.getY()),
        (u.rotation = 360),
        q[ON_CARD_ANIMATION_ENDING] &&
          q[ON_CARD_ANIMATION_ENDING].call(
            k[ON_CARD_ANIMATION_ENDING],
            this,
            c,
            p
          );
    else {
      this.visible = !0;
      var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING),
        b = new CVector2();
      b = tweenVectors(t, l, a, b);
      u.x = b.getX();
      u.y = b.getY();
      u.rotation = 120 + (24e3 * a) / 100;
    }
  };
  this._updateRemoving = function () {
    h += s_iTimeElaps;
    if (h > TIME_CARD_REMOVE) (h = 0), (g = !1), (f = -1), this.unload();
    else {
      var a = easeInOutCubic(h, 0, 1, TIME_CARD_REMOVE),
        b = new CVector2();
      b = tweenVectors(t, l, a, b);
      u.x = b.getX();
      u.y = b.getY();
      u.rotation = (4500 * a) / 100;
    }
  };
  this.update = function () {
    switch (f) {
      case STATE_CARD_DEALING:
        this._updateDealing();
        break;
      case STATE_CARD_REMOVING:
        !0 === g && this._updateRemoving();
    }
  };
  s_oCard = this;
  this._init(a, d, b);
}
var s_oCard;
function CGameOver() {
  var a, d, b;
  this._init = function () {
    b = new createjs.Container();
    s_oStage.addChild(b);
    b.on("click", function () {});
    var c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(c);
    new CTLText( // No money text.
      b,
      CANVAS_WIDTH / 2 - 210,
      280,
      400,
      70,
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
    a = new CTextButton(
      CANVAS_WIDTH / 2 - 100,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_RECHARGE,
      FONT_GAME_1,
      "#fff",
      14,
      b
    );
    a.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    d = new CTextButton(
      CANVAS_WIDTH / 2 + 100,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT_GAME_1,
      "#fff",
      14,
      b
    );
    d.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    a.unload();
    d.unload();
    b.off("click", function () {});
  };
  this.show = function () {
    b.visible = !0;
    // $(s_oMain).trigger("end_session");
  };
  this.hide = function () {
    b.visible = !1;
  };
  this._onRecharge = function () {
    $(s_oMain).trigger("recharge");
    b.visible = !1;
    cursorHelper.isVisible();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._init();
}
function CMsgBox() {
  var a, d, b;
  this._init = function () {
    b = new createjs.Container();
    b.alpha = 0;
    b.visible = !1;
    s_oStage.addChild(b);
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(a);
    d = new CTLText(
      b,
      CANVAS_WIDTH / 2 - 210,
      280,
      400,
      200,
      34,
      "center",
      "#ffffff",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_ARE_SURE,
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
    d.refreshText(a);
    b.visible = !0;
    var c = this;
    createjs.Tween.get(b)
      .to({ alpha: 1 }, 500)
      .call(function () {
        c._initListener();
      });
    setTimeout(function () {
      c._onExit();
    }, 3e3);
  };
  this._onExit = function () {
    b.visible && (b.off("mousedown"), (b.visible = !1));
  };
  this._init();
  return this;
}
function CHandEvaluator() {
  var a, d;
  this.evaluate = function (b) {
    d = [];
    a = [];
    for (var c = 0; c < b.length; c++)
      (d[c] = { rank: b[c].rank, suit: b[c].suit }),
        (a[c] = { rank: b[c].rank, suit: b[c].suit });
    d.sort(this.compareRank);
    a.sort(this.compareRank);
    return { ret: this.rankHand(), sort_hand: a };
  };
  this.rankHand = function () {
    return this._checkForStraightFlush()
      ? STRAIGHT_FLUSH
      : this._checkForFlush()
      ? FLUSH
      : this._checkForStraight()
      ? STRAIGHT
      : this._checkForThreeOfAKind()
      ? THREE_OF_A_KIND
      : this._checkForOnePair()
      ? ONE_PAIR
      : this._checkHighCard()
      ? HIGH_CARD
      : NO_HAND;
  };
  this._checkForStraightFlush = function () {
    return this._isStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForFlush = function () {
    return this._isFlush() ? !0 : !1;
  };
  this._checkForStraight = function () {
    return this._isStraight() ? !0 : !1;
  };
  this._checkForThreeOfAKind = function () {
    return d[0].rank === d[1].rank && d[0].rank === d[2].rank ? !0 : !1;
  };
  this._checkForOnePair = function () {
    for (var a = 0; 2 > a; a++) if (d[a].rank === d[a + 1].rank) return !0;
    return !1;
  };
  this._checkHighCard = function () {
    for (var a = !1, c = 0; 3 > c; c++) d[c].rank > CARD_JACK && (a = !0);
    return a ? !0 : !1;
  };
  this._isFlush = function () {
    return d[0].suit === d[1].suit && d[0].suit === d[2].suit ? !0 : !1;
  };
  this._isStraight = function () {
    var a = d[0].rank + 1 === d[1].rank;
    return a && d[0].rank === CARD_TWO && d[2].rank === CARD_ACE
      ? !0
      : a && d[1].rank + 1 === d[2].rank
      ? !0
      : !1;
  };
  this.compareRank = function (a, c) {
    return a.rank < c.rank ? -1 : a.rank > c.rank ? 1 : 0;
  };
  this.getWinnerComparingHands = function (a, c, d, f) {
    if (d === f)
      switch (d) {
        case STRAIGHT_FLUSH:
          return a[2].rank > c[2].rank
            ? "player"
            : a[2].rank < c[2].rank
            ? "dealer"
            : "standoff";
        case FLUSH:
          return a[2].rank > c[2].rank
            ? "player"
            : a[2].rank < c[2].rank
            ? "dealer"
            : a[1].rank > c[1].rank
            ? "player"
            : a[1].rank < c[1].rank
            ? "dealer"
            : a[0].rank > c[0].rank
            ? "player"
            : a[0].rank < c[0].rank
            ? "dealer"
            : "standoff";
        case STRAIGHT:
          return a[2].rank > c[2].rank
            ? "player"
            : a[2].rank < c[2].rank
            ? "dealer"
            : "standoff";
        case THREE_OF_A_KIND:
          return a[2].rank > c[2].rank
            ? "player"
            : a[2].rank < c[2].rank
            ? "dealer"
            : "standoff";
        case ONE_PAIR:
          for (f = d = oddCardA = 0; f < a.length - 1; f++)
            if (a[f].rank === a[f + 1].rank) {
              oddCardA = f === 0 ? a[2].rank : a[0].rank;
              d = a[f].rank;
              break;
            }
          for (f = a = oddCardC = 0; f < c.length - 1; f++)
            if (c[f].rank === c[f + 1].rank) {
              a = c[f].rank;
              oddCardC = f === 0 ? c[2].rank : c[0].rank;
              break;
            }
          return d > a
            ? "player"
            : d < a
            ? "dealer"
            : oddCardA > oddCardC
            ? "player"
            : oddCardA < oddCardC
            ? "dealer"
            : "standoff";
        case HIGH_CARD:
          return a[2].rank > c[2].rank
            ? "player"
            : a[2].rank < c[2].rank
            ? "dealer"
            : a[1].rank > c[1].rank
            ? "player"
            : a[1].rank < c[1].rank
            ? "dealer"
            : a[0].rank > c[0].rank
            ? "player"
            : a[0].rank < c[0].rank
            ? "dealer"
            : "standoff";
        case NO_HAND:
          return "dealer_no_hand";
        default:
          return "standoff";
      }
    else return f === NO_HAND ? "dealer_no_hand" : d > f ? "dealer" : "player";
  };
}
function CAnimText(a, d, b) {
  var c, g, f;
  this._init = function (a, b) {
    f = new createjs.Container();
    f.visible = !1;
    f.x = a;
    f.y = b;
    m.addChild(f);
    var c = s_oSpriteLibrary.getSprite("win_bg"),
      d = createBitmap(c);
    f.addChild(d);
    g = new CTLText(
      f,
      10,
      10,
      c.width - 20,
      c.height - 20,
      28,
      "center",
      "#fff",
      FONT_GAME_1,
      1,
      0,
      0,
      "",
      !0,
      !0,
      !0,
      !1
    );
  };
  this.show = function (a, b, d) {
    c = a;
    g.refreshText(d);
    f.x = a.x;
    f.y = a.y;
    f.visible = !0;
    createjs.Tween.get(f).to({ x: b.x, y: b.y }, 1e3, createjs.Ease.elasticOut);
  };
  this.hide = function () {
    f.visible = !1;
    f.x = c.x;
    f.y = c.y;
  };
  this.isVisible = function () {
    return f.visible;
  };
  var m = b;
  this._init(a, d);
}
function CPaytablePanel(a, d, b) {
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
      TEXT_ANTE_BONUS,
      !0,
      !0,
      !1,
      !1
    );
    for (var l = "", p = "", k = 0; k < PAYOUT_ANTE.length; k++)
      (l += TEXT_EVALUATOR[k] + "\n"), (p += PAYOUT_ANTE[k] + ":1\n");
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
      d.width - 50,
      n.getY() + 35,
      40,
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
    n = createBitmap(s_oSpriteLibrary.getSprite("paytable_pair_plus_bg"));
    n.y = d.height + 10;
    f.addChild(n);
    n = new CTLText( // Pair plus pays title text.
      f,
      10,
      n.y + 6,
      d.width - 20,
      24,
      24,
      "left",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_PAIR_PLUS,
      !0,
      !0,
      !1,
      !1
    );
    p = l = "";
    for (k = 0; k < PAYOUT_PLUS.length; k++)
      (l += TEXT_EVALUATOR[k] + "\n"), (p += PAYOUT_PLUS[k] + ":1\n");
    l = l.substring(0, l.length - 1);
    p = p.substring(0, p.length - 1);
    new CTLText(
      f,
      10,
      n.getY() + 32,
      d.width - 65,
      110,
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
    new CTLText( // Pair plus pays text.
      f,
      d.width - 50,
      n.getY() + 32,
      40,
      110,
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
  };
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
    let c = new createjs.Text(text, fontSize + fontStyle, color);
    c.textAlign = "left";
    c.textBaseline = "alphabetic";
    c.x = posX;
    c.y = posY;
    return c;
  };
  this._init = function () {
    n = new createjs.Container();
    s_oStage.addChild(n);
    a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu1"));
    n.addChild(a);
    g = new createjs.Shape();
    // g.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // g.alpha = 0.01;
    // m = g.on("click", this._onLogoButRelease);
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(CANVAS_WIDTH - 230, p.height / 2 + 10, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    c = this.makeText(
      "Three Card Poker Rule",
      "34px ",
      "#0ff ",
      FONT_GAME_2,
      200,
      260
    );
    n.addChild(c);
    let text = `Three Card Poker is two games in one - 
 ______________and _________. The player may bet on Ante or both, and in different amounts. Both games are based on hands consisting of three cards.`;
    c = this.makeText("Ante and Play", "24px ", "#0ff", FONT_GAME_2, 200, 325);
    n.addChild(c);
    c = this.makeText("PairPlus", "24px ", "#0ff", FONT_GAME_2, 380, 325);
    n.addChild(c);
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 300);
    n.addChild(c);
    c = this.makeText("Ante and Play", "30px ", "#ff0", FONT_GAME_2, 200, 360);
    n.addChild(c);
    text = `Play begins with a wager on the ante. 
After you view your three cards you may either raise by putting an equal bet on play or fold and lose the ante bet. 
If you fold you also lose the Pairplus bet if one was made. 
This should not be any sacrifice because if the Pairplus bet paid anything, you shouldn't fold. If you raise, you then go against the dealer's hand. 
The dealer needs at least a queen high to qualify. Below are the possible outcomes and their payoff:`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 390);
    n.addChild(c);
    text = `- Dealer does not qualify: Ante wins 1 to 1 play bet is returned.
- Dealer qualifies and player beats dealer: Both play and ante win 1 to 1.
- Dealer qualifies and dealer beats player: Both pay and ante lose.
- Dealer qualifies and dealer ties player: Both pay and ante returned.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 220, 500);
    n.addChild(c);
    text = `In addition, the Ante bet has an extra bonus that does not depend on the dealer's hand. 
This bonus pays as "Ante Bonus Pays" on the game screen based on the ante bet.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 585);
    n.addChild(c);
    c = this.makeText("PairPlus", "30px ", "#ff0", FONT_GAME_2, 200, 640);
    n.addChild(c);
    text = `This will pay entirely based on the poker value of the player's hand as shown in the "Pair Plus Pays" on the game screen.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 670);
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
function CAreYouSurePanel(a) {
  var d, b, c, g;
  this._init = function () {
    c = new createjs.Shape();
    c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.alpha = 0;
    c.on("mousedown", function () {});
    s_oStage.addChild(c);
    new createjs.Tween.get(c).to({ alpha: 0.7 }, 500);
    g = new createjs.Container();
    s_oStage.addChild(g);
    var a = s_oSpriteLibrary.getSprite("msg_box");
    a = createBitmap(a);
    a.x = -20;
    g.addChild(a);
    new CTLText(
      g,
      CANVAS_WIDTH / 2 - 220,
      280,
      400,
      50,
      44,
      "center",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      TEXT_ARE_SURE,
      !0,
      !0,
      !0,
      !1
    );
    d = new CGfxButton(
      CANVAS_WIDTH / 2 + 100,
      420,
      s_oSpriteLibrary.getSprite("but_yes"),
      g
    );
    d.addEventListener(ON_MOUSE_UP, this._onButYes, this);
    b = new CGfxButton(
      CANVAS_WIDTH / 2 - 170,
      420,
      s_oSpriteLibrary.getSprite("but_no"),
      g
    );
    b.addEventListener(ON_MOUSE_UP, this._onButNo, this);
  };
  this._onButYes = function () {
    f.unload();
    m();
  };
  this._onButNo = function () {
    f.unload();
  };
  this.unload = function () {
    b.unload();
    d.unload();
    s_oStage.removeChild(c);
    s_oStage.removeChild(g);
    c.off("mousedown", function () {});
  };
  var f = this;
  var m = a;
  this._init(a);
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
  setShadow: function (a, d, b, c) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, d, b, c));
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
function CTLText(a, d, b, c, g, f, m, n, p, h, t, l, q, k, u, w, D) {
  this._oContainer = a;
  this._x = d;
  this._y = b;
  this._iWidth = c;
  this._iHeight = g;
  this._bMultiline = w;
  this._iFontSize = f;
  this._szAlign = m;
  this._szColor = n;
  this._szFont = p;
  this._iPaddingH = t;
  this._iPaddingV = l;
  this._bVerticalAlign = u;
  this._bFitText = k;
  this._bDebug = D;
  this._oDebugShape = null;
  this._fLineHeightFactor = h;
  this._oText = null;
  q && this.__createText(q);
}
function CFiche(a, d, b, c, g, f, m) {
  var n, p, h, t, l, q, k;
  this._init = function (a, b, c, d, f) {
    k = new createjs.Container();
    k.x = a;
    k.y = b;
    k.scaleX = k.scaleY = g;
    m.addChild(k);
    a = s_oSpriteLibrary.getSprite("fiche_highlight");
    l = createBitmap(a);
    l.x = -9;
    l.y = -9;
    l.visible = !1;
    k.addChild(l);
    a = s_oSpriteLibrary.getSprite("fiche_" + c);
    q = createBitmap(a);
    k.addChild(q);
    new CTLText( // Fich text.
      k,
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
      ((n = !1),
      (p = []),
      (h = []),
      k.on("mousedown", this.buttonDown),
      k.on("pressup", this.buttonRelease));
    k.regX = a.width / 2;
    k.regY = a.height / 2;
  };
  this.addEventListener = function (a, b, c) {
    p[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    p[a] = b;
    h[a] = c;
    t = d;
  };
  this.select = function (a) {
    l.visible = a;
  };
  this.enable = function () {
    n = !1;
  };
  this.disable = function () {
    n = !0;
  };
  this.buttonRelease = function () {
    n ||
      ((k.scaleX = g),
      (k.scaleY = g),
      p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(h[ON_MOUSE_UP], t),
      CURRENT_BET === BET_ANTE
        ? s_oGame.setBet(b, CURRENT_BET)
        : s_oGame.setPairPlusBet(b));
  };
  this.buttonDown = function () {
    n ||
      ((k.scaleX = 0.9 * g),
      (k.scaleY = 0.9 * g),
      p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], t));
  };
  this.getX = function () {
    return k.x;
  };
  this.getY = function () {
    return k.x;
  };
  this._init(a, d, b, c, f);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var d = a.split("."),
    b = d.length;
  2 < b && (a = d[b - 2] + "." + d[b - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      d = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          d = !0;
          break;
        }
    } catch (b) {
      d = !0;
    }
    return { topFrame: a, err: d };
  },
  getBestPageUrl = function (a) {
    var d = a.topFrame,
      b = "";
    if (a.err)
      try {
        try {
          b = window.top.location.href;
        } catch (g) {
          var c = window.location.ancestorOrigins;
          b = c[c.length - 1];
        }
      } catch (g) {
        b = d.document.referrer;
      }
    else b = d.location.href;
    return b;
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
      b = 0;
    b < d.length;
    b++
  )
    if (d[b] === a) return !0;
  return !1;
}
