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
    : (window.screenfull = !1);
})();
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function b(a, b) {
    var d = -1,
      f = a ? a.length : 0;
    if ("number" == typeof f && -1 < f && f <= A)
      for (; ++d < f; ) b(a[d], d, a);
    else c(a, b);
  }
  function d(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function c(a, b) {
    for (var d in a) v.call(a, d) && b(a[d], d, a);
  }
  function f(b) {
    return null == b ? a(b) : D.call(b).slice(8, -1);
  }
  function e(a, b) {
    var d = null != a ? typeof a[b] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(d) &&
      ("object" == d ? !!a[b] : !0)
    );
  }
  function h(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function n(a, d) {
    var c = null;
    b(a, function (b, f) {
      c = d(c, b, f, a);
    });
    return c;
  }
  function r(a) {
    function b(b) {
      return n(b, function (b, c) {
        var f = c.pattern || h(c);
        !b &&
          (b =
            RegExp("\\b" + f + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + f + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + f + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((b = String(
            c.label && !RegExp(f, "i").test(c.label) ? c.label : b
          ).split("/"))[1] &&
            !/[\d.]+/.test(b[0]) &&
            (b[0] += " " + b[1]),
          (c = c.label || c),
          (b = d(
            b[0]
              .replace(RegExp(f, "i"), c)
              .replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ")
              .replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")
          )));
        return b;
      });
    }
    function m(b) {
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
    var l = w,
      k = a && "object" == typeof a && "String" != f(a);
    k && ((l = a), (a = null));
    var v = l.navigator || {},
      u = v.userAgent || "";
    a || (a = u);
    var I = k
        ? !!v.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(D.toString()),
      A = k ? "Object" : "ScriptBridgingProxyObject",
      H = k ? "Object" : "Environment",
      E = k && l.java ? "JavaPackage" : f(l.java),
      y = k ? "Object" : "RuntimeObject";
    H = (E = /\bJava/.test(E) && l.java) && f(l.environment) == H;
    var O = E ? "a" : "\u03b1",
      F = E ? "b" : "\u03b2",
      U = l.document || {},
      z = l.operamini || l.opera,
      x = p.test((x = k && z ? z["[[Class]]"] : f(z))) ? x : (z = null),
      g,
      R = a;
    k = [];
    var J = null,
      S = a == u;
    u = S && z && "function" == typeof z.version && z.version();
    var B = (function (b) {
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) &&
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
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) &&
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
      C = b([
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
      L = (function (b) {
        return n(b, function (b, c, d) {
          return (
            b ||
            ((c[C] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] ||
              RegExp("\\b" + h(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      t = (function (b) {
        return n(b, function (b, c) {
          var f = c.pattern || h(c);
          if (
            !b &&
            (b = RegExp("\\b" + f + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var e = b,
              g = c.label || c,
              k = {
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
            f &&
              g &&
              /^Win/i.test(e) &&
              !/^Windows Phone /i.test(e) &&
              (k = k[/[\d.]+$/.exec(e)]) &&
              (e = "Windows " + k);
            e = String(e);
            f && g && (e = e.replace(RegExp(f, "i"), g));
            b = e = d(
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
    B && (B = [B]);
    L && !C && (C = b([L]));
    if ((g = /\bGoogle TV\b/.exec(C))) C = g[0];
    /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
    "Opera Mini" == q &&
      /\bOPiOS\b/.test(a) &&
      k.push("running in Turbo/Uncompressed mode");
    "IE" == q && /\blike iPhone OS\b/.test(a)
      ? ((g = r(a.replace(/like iPhone OS/, ""))),
        (L = g.manufacturer),
        (C = g.product))
      : /^iP/.test(C)
      ? (q || (q = "Safari"),
        (t =
          "iOS" +
          ((g = / OS ([\d_]+)/i.exec(a)) ? " " + g[1].replace(/_/g, ".") : "")))
      : "Konqueror" != q || /buntu/i.test(t)
      ? (L &&
          "Google" != L &&
          ((/Chrome/.test(q) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(C))) ||
        (/\bAndroid\b/.test(t) && /^Chrome/.test(q) && /\bVersion\//i.test(a))
        ? ((q = "Android Browser"), (t = /\bAndroid\b/.test(t) ? t : "Android"))
        : "Silk" == q
        ? (/\bMobi/i.test(a) || ((t = "Android"), k.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && k.unshift("accelerated"))
        : "PaleMoon" == q && (g = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? k.push("identifying as Firefox " + g[1])
        : "Firefox" == q && (g = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (t || (t = "Firefox OS"), C || (C = g[1]))
        : !q ||
          (g = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(q))
        ? (q &&
            !C &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(g + "/") + 8)) &&
            (q = null),
          (g = C || L || t) &&
            (C || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(t)) &&
            (q =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(t) ? t : g) +
              " Browser"))
        : "Electron" == q &&
          (g = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          k.push("Chromium " + g)
      : (t = "Kubuntu");
    u ||
      (u = m([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        h(q),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (g =
        ("iCab" == B && 3 < parseFloat(u) && "WebKit") ||
        (/\bOpera\b/.test(q) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(B) &&
          "WebKit") ||
        (!B && /\bMSIE\b/i.test(a) && ("Mac OS" == t ? "Tasman" : "Trident")) ||
        ("WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(q) && "NetFront"))
    )
      B = [g];
    "IE" == q && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((q += " Mobile"),
        (t = "Windows Phone " + (/\+$/.test(g) ? g : g + ".x")),
        k.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((q = "IE Mobile"),
        (t = "Windows Phone 8.x"),
        k.unshift("desktop mode"),
        u || (u = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != q &&
        "Trident" == B &&
        (g = /\brv:([\d.]+)/.exec(a)) &&
        (q && k.push("identifying as " + q + (u ? " " + u : "")),
        (q = "IE"),
        (u = g[1]));
    if (S) {
      if (e(l, "global"))
        if (
          (E &&
            ((g = E.lang.System),
            (R = g.getProperty("os.arch")),
            (t =
              t ||
              g.getProperty("os.name") + " " + g.getProperty("os.version"))),
          H)
        ) {
          try {
            (u = l.require("ringo/engine").version.join(".")), (q = "RingoJS");
          } catch (X) {
            (g = l.system) &&
              g.global.system == l.system &&
              ((q = "Narwhal"), t || (t = g[0].os || null));
          }
          q || (q = "Rhino");
        } else
          "object" == typeof l.process &&
            !l.process.browser &&
            (g = l.process) &&
            ("object" == typeof g.versions &&
              ("string" == typeof g.versions.electron
                ? (k.push("Node " + g.versions.node),
                  (q = "Electron"),
                  (u = g.versions.electron))
                : "string" == typeof g.versions.nw &&
                  (k.push("Chromium " + u, "Node " + g.versions.node),
                  (q = "NW.js"),
                  (u = g.versions.nw))),
            q ||
              ((q = "Node.js"),
              (R = g.arch),
              (t = g.platform),
              (u = (u = /[\d.]+/.exec(g.version)) ? u[0] : null)));
      else
        f((g = l.runtime)) == A
          ? ((q = "Adobe AIR"), (t = g.flash.system.Capabilities.os))
          : f((g = l.phantom)) == y
          ? ((q = "PhantomJS"),
            (u =
              (g = g.version || null) &&
              g.major + "." + g.minor + "." + g.patch))
          : "number" == typeof U.documentMode &&
            (g = /\bTrident\/(\d+)/i.exec(a))
          ? ((u = [u, U.documentMode]),
            (g = +g[1] + 4) != u[1] &&
              (k.push("IE " + u[1] + " mode"), B && (B[1] = ""), (u[1] = g)),
            (u = "IE" == q ? String(u[1].toFixed(1)) : u[0]))
          : "number" == typeof U.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(q) &&
            (k.push("masking as " + q + " " + u),
            (q = "IE"),
            (u = "11.0"),
            (B = ["Trident"]),
            (t = "Windows"));
      t = t && d(t);
    }
    u &&
      (g =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(u) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (S && v.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((J = /b/i.test(g) ? "beta" : "alpha"),
      (u =
        u.replace(RegExp(g + "\\+?$"), "") +
        ("beta" == J ? F : O) +
        (/\d+\+?/.exec(g) || "")));
    if (
      "Fennec" == q ||
      ("Firefox" == q && /\b(?:Android|Firefox OS)\b/.test(t))
    )
      q = "Firefox Mobile";
    else if ("Maxthon" == q && u) u = u.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(C))
      "Xbox 360" == C && (t = null),
        "Xbox 360" == C && /\bIEMobile\b/.test(a) && k.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(q) &&
        (!q || C || /Browser|Mobi/.test(q))) ||
      ("Windows CE" != t && !/Mobi/i.test(a))
    )
      if ("IE" == q && S)
        try {
          null === l.external && k.unshift("platform preview");
        } catch (X) {
          k.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) &&
        (g =
          (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || u)
          ? ((g = [g, /BB10/.test(a)]),
            (t =
              (g[1] ? ((C = null), (L = "BlackBerry")) : "Device Software") +
              " " +
              g[0]),
            (u = null))
          : this != c &&
            "Wii" != C &&
            ((S && z) ||
              (/Opera/.test(q) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == q && /\bOS X (?:\d+\.){2,}/.test(t)) ||
              ("IE" == q &&
                ((t && !/^Win/.test(t) && 5.5 < u) ||
                  (/\bWindows XP\b/.test(t) && 8 < u) ||
                  (8 == u && !/\bTrident\b/.test(a))))) &&
            !p.test((g = r.call(c, a.replace(p, "") + ";"))) &&
            g.name &&
            ((g = "ing as " + g.name + ((g = g.version) ? " " + g : "")),
            p.test(q)
              ? (/\bIE\b/.test(g) && "Mac OS" == t && (t = null),
                (g = "identify" + g))
              : ((g = "mask" + g),
                (q = x ? d(x.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(g) && (t = null),
                S || (u = null)),
            (B = ["Presto"]),
            k.push(g));
    else q += " Mobile";
    if ((g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      g = [parseFloat(g.replace(/\.(\d)$/, ".0$1")), g];
      if ("Safari" == q && "+" == g[1].slice(-1))
        (q = "WebKit Nightly"), (J = "alpha"), (u = g[1].slice(0, -1));
      else if (
        u == g[1] ||
        u == (g[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        u = null;
      g[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == g[0] &&
        537.36 == g[2] &&
        28 <= parseFloat(g[1]) &&
        "WebKit" == B &&
        (B = ["Blink"]);
      S && (I || g[1])
        ? (B && (B[1] = "like Chrome"),
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
              : "Blink" != B
              ? "27"
              : "28")))
        : (B && (B[1] = "like Safari"),
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
      B &&
        (B[1] +=
          " " + (g += "number" == typeof g ? ".x" : /[.+]/.test(g) ? "" : "+"));
      "Safari" == q && (!u || 45 < parseInt(u)) && (u = g);
    }
    "Opera" == q && (g = /\bzbov|zvav$/.exec(t))
      ? ((q += " "),
        k.unshift("desktop mode"),
        "zvav" == g ? ((q += "Mini"), (u = null)) : (q += "Mobile"),
        (t = t.replace(RegExp(" *" + g + "$"), "")))
      : "Safari" == q &&
        /\bChrome\b/.exec(B && B[1]) &&
        (k.unshift("desktop mode"),
        (q = "Chrome Mobile"),
        (u = null),
        /\bOS X\b/.test(t) ? ((L = "Apple"), (t = "iOS 4.3+")) : (t = null));
    u &&
      0 == u.indexOf((g = /[\d.]+$/.exec(t))) &&
      -1 < a.indexOf("/" + g + "-") &&
      (t = String(t.replace(g, "")).replace(/^ +| +$/g, ""));
    B &&
      !/\b(?:Avant|Nook)\b/.test(q) &&
      (/Browser|Lunascape|Maxthon/.test(q) ||
        ("Safari" != q && /^iOS/.test(t) && /\bSafari\b/.test(B[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          q
        ) &&
          B[1])) &&
      (g = B[B.length - 1]) &&
      k.push(g);
    k.length && (k = ["(" + k.join("; ") + ")"]);
    L && C && 0 > C.indexOf(L) && k.push("on " + L);
    C && k.push((/^on /.test(k[k.length - 1]) ? "" : "on ") + C);
    if (t) {
      var W =
        (g = / ([\d.+]+)$/.exec(t)) &&
        "/" == t.charAt(t.length - g[0].length - 1);
      t = {
        architecture: 32,
        family: g && !W ? t.replace(g[0], "") : t,
        version: g ? g[1] : null,
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
    (g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R)
      ? (t &&
          ((t.architecture = 64),
          (t.family = t.family.replace(RegExp(" *" + g), ""))),
        q &&
          (/\bWOW64\b/i.test(a) ||
            (S &&
              /\w(?:86|32)$/.test(v.cpuClass || v.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          k.unshift("32-bit"))
      : t &&
        /^OS X/.test(t.family) &&
        "Chrome" == q &&
        39 <= parseFloat(u) &&
        (t.architecture = 64);
    a || (a = null);
    l = {};
    l.description = a;
    l.layout = B && B[0];
    l.manufacturer = L;
    l.name = q;
    l.prerelease = J;
    l.product = C;
    l.ua = a;
    l.version = q && u;
    l.os = t || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    l.parse = r;
    l.toString = function () {
      return this.description || "";
    };
    l.version && k.unshift(u);
    l.name && k.unshift(q);
    t &&
      q &&
      (t != String(t).split(" ")[0] || (t != q.split(" ")[0] && !C)) &&
      k.push(C ? "(" + t + ")" : "on " + t);
    k.length && (l.description = k.join(" "));
    return l;
  }
  var m = { function: !0, object: !0 },
    w = (m[typeof window] && window) || this,
    l = m[typeof exports] && exports;
  m = m[typeof module] && module && !module.nodeType && module;
  var k = l && m && "object" == typeof global && global;
  !k || (k.global !== k && k.window !== k && k.self !== k) || (w = k);
  var A = Math.pow(2, 53) - 1,
    p = /\bOpera/;
  k = Object.prototype;
  var v = k.hasOwnProperty,
    D = k.toString,
    H = r();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((w.platform = H),
      define(function () {
        return H;
      }))
    : l && m
    ? c(H, function (a, b) {
        l[b] = a;
      })
    : (w.platform = H);
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
    var d = document.createElement("meta");
    d.name = a[b].name;
    d.content = a[b].content;
    var c = window.document.head.querySelector('meta[name="' + d.name + '"]');
    c && c.parentNode.removeChild(c);
    window.document.head.appendChild(d);
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
  // console.log(a);
}
function getSize(a) {
  var b = a.toLowerCase(),
    d = window.document,
    c = d.documentElement;
  if (void 0 === window["inner" + a]) a = c["client" + a];
  else if (window["inner" + a] != c["client" + a]) {
    var f = d.createElement("body");
    f.id = "vpw-test-b";
    f.style.cssText = "overflow:scroll";
    var e = d.createElement("div");
    e.id = "vpw-test-d";
    e.style.cssText = "position:absolute;top:-1000px";
    e.innerHTML =
      "<style>@media(" +
      b +
      ":" +
      c["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      b +
      ":7px!important}}</style>";
    f.appendChild(e);
    c.insertBefore(f, d.head);
    a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
    c.removeChild(f);
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
//   if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone"))
//     return (s_bIsIphone = !0);
//   for (; a.length; ) if (navigator.platform === a.pop()) return !0;
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
    var b = getSize("Width");
    _checkOrientation(b, a);
    var d = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
      c = Math.round(CANVAS_WIDTH * d);
    d = Math.round(CANVAS_HEIGHT * d);
    if (d < a) {
      var f = a - d;
      d += f;
      c += (CANVAS_WIDTH / CANVAS_HEIGHT) * f;
    } else
      c < b &&
        ((f = b - c), (c += f), (d += (CANVAS_HEIGHT / CANVAS_WIDTH) * f));
    f = a / 2 - d / 2;
    var e = b / 2 - c / 2,
      h = CANVAS_WIDTH / c;
    if (e * h < -EDGEBOARD_X || f * h < -EDGEBOARD_Y)
      (d = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (c = Math.round(CANVAS_WIDTH * d)),
        (d = Math.round(CANVAS_HEIGHT * d)),
        (f = (a - d) / 2),
        (e = (b - c) / 2),
        (h = CANVAS_WIDTH / c);
    s_iOffsetX = -1 * e * h;
    s_iOffsetY = -1 * f * h;
    0 <= f && (s_iOffsetY = 0);
    0 <= e && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * c),
        (s_oStage.canvas.height = 2 * d),
        (canvas.style.width = c + "px"),
        (canvas.style.height = d + "px"),
        (b = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT)),
        (s_iScaleFactor = 2 * b),
        (s_oStage.scaleX = s_oStage.scaleY = 2 * b))
      : s_bMobile && !1 === isIOS()
      ? ($("#canvas").css("width", c + "px"),
        $("#canvas").css("height", d + "px"))
      : ((s_oStage.canvas.width = c),
        (s_oStage.canvas.height = d),
        (s_iScaleFactor = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > f || (f = (a - d) / 2);
    $("#canvas").css("top", f + "px");
    $("#canvas").css("left", e + "px");
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
function createBitmap(a, b, d) {
  var c = new createjs.Bitmap(a),
    f = new createjs.Shape();
  b && d
    ? f.graphics.beginFill("#fff").drawRect(0, 0, b, d)
    : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  c.hitArea = f;
  return c;
}
function createSprite(a, b, d, c, f, e) {
  a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
  b = new createjs.Shape();
  b.graphics.beginFill("#000000").drawRect(-d, -c, f, e);
  a.hitArea = b;
  return a;
}
function randomFloatBetween(a, b, d) {
  "undefined" === typeof d && (d = 2);
  return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(d));
}
function shuffle(a) {
  for (var b = a.length, d, c; 0 !== b; )
    (c = Math.floor(Math.random() * b)),
      --b,
      (d = a[b]),
      (a[b] = a[c]),
      (a[c] = d);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var b = Math.floor(a / 60);
  a = parseFloat(a - 60 * b).toFixed(1);
  var d = "";
  d = 10 > b ? d + ("0" + b + ":") : d + (b + ":");
  return 10 > a ? d + ("0" + a) : d + a;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var b = Array.prototype.slice.call(arguments);
  return a.sort(function (a, c) {
    for (var d = b.slice(), e = d.shift(); a[e] == c[e] && d.length; )
      e = d.shift();
    return a[e] == c[e] ? 0 : a[e] > c[e] ? 1 : -1;
  });
};
function roundDecimal(a, b) {
  var d = Math.pow(10, b);
  return Math.round(d * a) / d;
}
function tweenVectors(a, b, d, c) {
  c.set(
    a.getX() + d * (b.getX() - a.getX()),
    a.getY() + d * (b.getY() - a.getY())
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
      var b = document.createEvent("MouseEvents");
      b.initEvent("click", !0, !0);
      a.dispatchEvent(b);
    }
  },
};
function playSound(a, b, d) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(b),
      s_aSounds[a].loop(d),
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
    var b = window.location.search.substring(1).split("&"), d = 0;
    d < b.length;
    d++
  ) {
    var c = b[d].split("=");
    if (c[0] == a) return c[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    screenfull.enabled &&
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
    b,
    d,
    c,
    f,
    e,
    h;
  this.init = function (a, r, m) {
    b = {};
    c = d = 0;
    f = a;
    e = r;
    h = m;
  };
  this.addSprite = function (c, f) {
    if (a.hasOwnProperty(c)) return !1;
    var e = new Image();
    a[c] = b[c] = { szPath: f, oSprite: e, bLoaded: !1 };
    d++;
    return !0;
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    d = 0;
    e.call(h);
  };
  this._onSpriteLoaded = function () {
    f.call(h);
    ++c === d && this._onSpritesLoaded();
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
    return d;
  };
}
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
  FICHE_VALUE,
  CARD_WIDTH = 66,
  CARD_HEIGHT = 102,
  MIN_BET,
  MAX_BET,
  TOTAL_MONEY,
  FICHE_WIDTH,
  WIN_OCCURRENCE,
  BET_OCCURRENCE,
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 250,
  TIME_CARD_REMOVE = 1e3,
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
  BET_ANTE = 0,
  BET_RAISE = 1,
  POS_BET = [],
  MULTIPLIERS = [],
  WIN_TYPE_VALUE = {
    0 : 100,
    1 : 50,
    2 : 20,
    3 : 7,
    4 : 5,
    5 : 4,
    6 : 3,
    7 : 2,
    8 : 1,
    9 : 1,
    10 : 0
  },
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
  TEXT_RAISE = "RAISE",
  TEXT_FOLD = "FOLD",
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET",
  TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!",
  TEXT_DISPLAY_MSG_STANDOFF = "STAND OFF",
  TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS",
  TEXT_DISPLAY_MSG_USER_TURN = "PLAYER TURN. RAISE OR FOLD?",
  TEXT_DISPLAY_MSG_SHOWDOWN = "SHOWDOWN!",
  TEXT_DISPLAY_MSG_DEALING = "DEALING...",
  TEXT_DISPLAY_MSG_NOT_QUALIFY = "DEALER DOES NOT QUALIFY",
  TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
  TEXT_NO_MONEY_FOR_RAISE =
    "YOU DON'T HAVE ENOUGH MONEY FOR RAISE BET EVENTUALLY!!!",
  TEXT_HAND_WON_PLAYER = "HAND WON BY THE PLAYER",
  TEXT_HAND_WON_DEALER = "HAND WON BY THE DEALER",
  TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!",
  TEXT_ERROR_MAX_BET = "YOUR BET IS HIGHER THAN MAXIMUM BET!!",
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
  var a, b, d, c, f, e, h, n, r, m;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    m = new createjs.Container();
    s_oStage.addChild(m);
  };
  this.unload = function () {
    m.removeAllChildren();
    r.unload();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var w = new createjs.Shape();
    w.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    m.addChild(w);
    w = s_oSpriteLibrary.getSprite("200x200");
    h = createBitmap(w);
    h.regX = 0.5 * w.width;
    h.regY = 0.5 * w.height;
    h.x = CANVAS_WIDTH / 2;
    h.y = CANVAS_HEIGHT / 2 - 180;
    m.addChild(h);
    n = new createjs.Shape();
    n.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(h.x - 100, h.y - 100, 200, 200, 10);
    m.addChild(n);
    h.mask = n;
    w = s_oSpriteLibrary.getSprite("progress_bar");
    c = createBitmap(w);
    c.x = CANVAS_WIDTH / 2 - w.width / 2;
    c.y = CANVAS_HEIGHT / 2 + 50;
    m.addChild(c);
    a = w.width;
    b = w.height;
    f = new createjs.Shape();
    f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, b);
    m.addChild(f);
    c.mask = f;
    d = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
    d.x = CANVAS_WIDTH / 2;
    d.y = CANVAS_HEIGHT / 2 + 100;
    d.textBaseline = "alphabetic";
    d.textAlign = "center";
    m.addChild(d);
    w = s_oSpriteLibrary.getSprite("but_start");
    r = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      w,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      "bold 50",
      m
    );
    r.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    r.setVisible(!1);
    e = new createjs.Shape();
    e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    m.addChild(e);
    createjs.Tween.get(e)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(e);
        m.removeChild(e);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (e) {
    d.text = e + "%";
    100 === e &&
      (s_oMain._onRemovePreloader(), (d.visible = !1), (c.visible = !1));
    f.graphics.clear();
    e = Math.floor((e * a) / 100);
    f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, e, b);
  };
  this._init();
}
function CMain(a) {
  var b,
    d = 0,
    c = 0,
    f = STATE_LOADING,
    e,
    h;
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
      ? (e = new CPreloader())
      : (window.location.href = "http://www.codethislab.com/contact-us.html");
    s_oGameSettings = new CGameSettings();
    b = !0;
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
  };
  this.soundLoaded = function () {
    d++;
    e.refreshLoader(Math.floor((d / c) * 100));
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
    s_oSpriteLibrary.addSprite("bet_raise", "./sprites/bet_raise.png");
    s_oSpriteLibrary.addSprite("paytable_bg", "./sprites/paytable_bg.png");
    s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + (a + 1) + ".png");
    c += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    d++;
    e.refreshLoader(Math.floor((d / c) * 100));
  };
  this._onAllImagesLoaded = function () {};
  this.onAllPreloaderImagesLoaded = function () {
    this._loadImages();
  };
  this._onRemovePreloader = function () {
    e.unload();
    this.gotoMenu();
  };
  this.gotoMenu = function () {
    new CMenu();
    f = STATE_MENU;
  };
  this.gotoGame = function () {
    h = new CGame(n);
    f = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    f = STATE_HELP;
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
      f === STATE_GAME && h.update();
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
function CTextButton(a, b, d, c, f, e, h, n) {
  var r, m, w, l, k, A, p, v, D, H, ff, mm;
  this._init = function (a, b, c, d, f, e, k) {
    r = !1;
    m = 1;
    w = [];
    l = [];
    H = createBitmap(c);
    ff = c.width;
    mm = c.width;
    v = new createjs.Container();
    v.x = a;
    v.y = b;
    v.regX = c.width / 2;
    v.regY = c.height / 2;
    s_bMobile || (v.cursor = "pointer");
    v.addChild(H, D);
    n.addChild(v);
    D = new CTLText(
      v,
      10,
      5,
      c.width - 20,
      c.height - 10,
      k,
      "center",
      e,
      f,
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
    v.off("mousedown", k);
    v.off("pressup", A);
    n.removeChild(v);
  };
  this.setVisible = function (a) {
    v.visible = a;
  };
  this.setAlign = function (a) {
    D.textAlign = a;
  };
  this.setTextX = function (a) {
    D.x = a;
  };
  this.setScale = function (a) {
    m = v.scaleX = v.scaleY = a;
  };
  this.enable = function () {
    r = !1;
    H.filters = [];
    H.cache(0, 0, ff, mm);
  };
  this.disable = function () {
    r = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    H.filters = [new createjs.ColorMatrixFilter(a)];
    H.cache(0, 0, ff, mm);
  };
  this._initListener = function () {
    k = v.on("mousedown", this.buttonDown);
    A = v.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    w[a] = b;
    l[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    w[a] = b;
    l[a] = c;
    p = d;
  };
  this.buttonRelease = function () {
    r ||
      (playSound("press_but", 1, !1),
      (v.scaleX = m),
      (v.scaleY = m),
      w[ON_MOUSE_UP] && w[ON_MOUSE_UP].call(l[ON_MOUSE_UP], p));
  };
  this.buttonDown = function () {
    r ||
      ((v.scaleX = 0.9 * m),
      (v.scaleY = 0.9 * m),
      w[ON_MOUSE_DOWN] && w[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    v.x = a;
    v.y = b;
  };
  this.tweenPosition = function (a, b, c, d, f, e, k) {
    createjs.Tween.get(v)
      .wait(d)
      .to({ x: a, y: b }, c, f)
      .call(function () {
        void 0 !== e && e.call(k);
      });
  };
  this.changeText = function (a) {
    D.refreshText(a);
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
  this._init(a, b, d, c, f, e, h);
}
function CGfxButton(a, b, d, c) {
  var f,
    e,
    h,
    n,
    r,
    m = [],
    w,
    l,
    k;
  this._init = function (a, b, c) {
    f = !1;
    n = [];
    r = [];
    e = c.width;
    h = c.height;
    k = createBitmap(c);
    k.x = a;
    k.y = b;
    k.regX = c.width / 2;
    k.regY = c.height / 2;
    k.cursor = "pointer";
    A.addChild(k);
    this._initListener();
  };
  this.unload = function () {
    k.off("mousedown", w);
    k.off("pressup", l);
    A.removeChild(k);
  };
  this.setVisible = function (a) {
    k.visible = a;
  };
  this._initListener = function () {
    w = k.on("mousedown", this.buttonDown);
    l = k.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    n[a] = b;
    r[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    n[a] = b;
    r[a] = c;
    m = d;
  };
  this.buttonRelease = function () {
    f ||
      (playSound("press_but", 1, !1),
      (k.scaleX = k.scaleY = 1),
      n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(r[ON_MOUSE_UP], m));
  };
  this.buttonDown = function () {
    f ||
      ((k.scaleX = k.scaleY = 0.9),
      n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], m));
  };
  this.setPosition = function (a, b) {
    k.x = a;
    k.y = b;
  };
  this.setX = function (a) {
    k.x = a;
  };
  this.setY = function (a) {
    k.y = a;
  };
  this.enable = function () {
    f = !1;
    k.filters = [];
    k.cache(0, 0, e, h);
  };
  this.disable = function () {
    f = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    k.filters = [new createjs.ColorMatrixFilter(a)];
    k.cache(0, 0, e, h);
  };
  this.getButtonImage = function () {
    return k;
  };
  this.getX = function () {
    return k.x;
  };
  this.getY = function () {
    return k.y;
  };
  var A = c;
  this._init(a, b, d);
  return this;
}
function CToggle(a, b, d, c, f) {
  var e,
    h,
    n,
    r = [],
    m,
    w,
    l;
  this._init = function (a, b, c, d) {
    h = [];
    n = [];
    var k = new createjs.SpriteSheet({
      images: [c],
      frames: {
        width: c.width / 2,
        height: c.height,
        regX: c.width / 2 / 2,
        regY: c.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    e = d;
    l = createSprite(
      k,
      "state_" + e,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    l.x = a;
    l.y = b;
    l.cursor = "pointer";
    l.stop();
    f.addChild(l);
    this._initListener();
  };
  this.unload = function () {
    l.off("mousedown", m);
    l.off("pressup", w);
    f.removeChild(l);
  };
  this._initListener = function () {
    m = l.on("mousedown", this.buttonDown);
    w = l.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    h[a] = b;
    n[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    h[a] = b;
    n[a] = c;
    r = d;
  };
  this.setActive = function (a) {
    e = a;
    l.gotoAndStop("state_" + e);
  };
  this.buttonRelease = function () {
    l.scaleX = 1;
    l.scaleY = 1;
    playSound("press_but", 1, !1);
    e = !e;
    l.gotoAndStop("state_" + e);
    h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(n[ON_MOUSE_UP], r);
  };
  this.buttonDown = function () {
    l.scaleX = 0.9;
    l.scaleY = 0.9;
    h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], r);
  };
  this.setPosition = function (a, b) {
    l.x = a;
    l.y = b;
  };
  this.setVisible = function (a) {
    l.visible = a;
  };
  this.getY = function () {
    return l.y;
  };
  this._init(a, b, d, c);
}
function CMenu() {
  var a,
    b,
    d,
    c,
    f,
    e,
    h,
    n,
    r,
    m,
    w,
    l = null,
    k = null,
    A;
  this._init = function () {
    h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(h);
    var p = s_oSpriteLibrary.getSprite("but_menu_bg");
    n = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, p, s_oStage);
    n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (p = s_oSpriteLibrary.getSprite("audio_icon")),
        (f = CANVAS_WIDTH - p.width / 4 - 10),
        (e = p.height / 2 + 10),
        (r = new CToggle(f, e, p, !!s_bAudioActive, s_oStage)),
        r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    p = s_oSpriteLibrary.getSprite("but_credits");
    SHOW_CREDITS
      ? ((a = 10 + p.width / 2),
        (b = p.height / 2 + 10),
        (m = new CGfxButton(a, b, p, s_oStage)),
        m.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (d = a + p.width + 10),
        (c = b))
      : ((d = 10 + p.width / 2), (c = p.height / 2 + 10));
    p = window.document;
    var v = p.documentElement;
    l =
      v.requestFullscreen ||
      v.mozRequestFullScreen ||
      v.webkitRequestFullScreen ||
      v.msRequestFullscreen;
    k =
      p.exitFullscreen ||
      p.mozCancelFullScreen ||
      p.webkitExitFullscreen ||
      p.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (l = !1);
    l &&
      screenfull.enabled &&
      ((p = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (w = new CToggle(d, c, p, s_bFullscreen, s_oStage)),
      w.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
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
  this.refreshButtonPos = function (h, k) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      r.setPosition(f - h, k + e);
    l && screenfull.enabled && w.setPosition(d + h, c + k);
    SHOW_CREDITS && m.setPosition(a + h, b + k);
  };
  this.unload = function () {
    n.unload();
    n = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), (r = null);
    SHOW_CREDITS && m.unload();
    l && screenfull.enabled && w.unload();
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
    // createjs.Sound.setMute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this._onCredits = function () {
    _oCreditsPanel = new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    l && screenfull.enabled && w.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? k.call(window.document)
      : l.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var b = !1,
    d,
    c,
    f,
    e,
    h,
    n,
    r,
    m,
    w,
    l,
    k,
    A,
    p,
    v,
    D,
    H,
    I,
    T,
    V,
    P,
    K,
    Q,
    u,
    M,
    G,
    N,
    E,
    y,
    O,
    F,
    U,
    z,
    x,
    g,
    oldCredit,
    R;
  this._init = function () {
    f = MAX_BET;
    e = -1;
    h = A = c = 0;
    s_oTweenController = new CTweenController();
    U = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(U);
    z = new CInterface(TOTAL_MONEY);
    y = new createjs.Container();
    s_oStage.addChild(y);
    O = new CHandEvaluator();
    x = new CSeat();
    x.setCredit(TOTAL_MONEY);
    oldCredit = x.getCredit();
    F = new CHelpCursor(
      520,
      416,
      s_oSpriteLibrary.getSprite("help_cursor"),
      s_oStage
    );
    this.reset(!1);
    u = new CVector2();
    u.set(1214, 228);
    M = new CVector2();
    M.set(CANVAS_WIDTH / 2 - 199, 230);
    G = new CVector2();
    G.set(418, 820);
    N = new CVector2();
    N.set(0, -CANVAS_HEIGHT);
    E = new CVector2(454, 230);
    V = [x.getCardOffset(), M];
    R = new CGameOver();
    x.getCredit() < s_oGameSettings.getFichesValueAt(0)
      ? (this._gameOver(), this.changeState(-1))
      : (b = !0);
    Q = new CVector2(u.getX(), u.getY());
    g = new CMsgBox();
    this.changeState(STATE_GAME_WAITING_FOR_BET);
  };
  this.unload = function () {
    b = !1;
    for (var a = 0; a < D.length; a++) D[a].unload();
    z.unload();
    R.unload();
    g.unload();
    s_oStage.removeAllChildren();
  };
  this.reset = function (a) {
    n = h = c = 0;
    x.reset();
    D = [];
    D.splice(0);
    H = [];
    T = [];
    z.reset();
    z.enableBetFiches(a);
    this.shuffleCard();
  };
  this.shuffleCard = function () {
    I = [];
    I = s_oGameSettings.getShuffledCardDeck();
  };
  this.changeState = function (a) {
    e = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        z.displayMsg(
          TEXT_DISPLAY_MSG_WAITING_BET,
          TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET
        );
        break;
      case STATE_GAME_DEALING:
        z.disableButtons(),
          z.displayMsg(TEXT_DISPLAY_MSG_DEALING, ""),
          this._dealing();
    }
  };
  this.cardFromDealerArrived = function (a, b, c) {
    (!1 === b || (b && 9 === c)) && a.showCard();
    10 > c && s_oGame._dealing();
  };
  this.updateBalanceToServer = function () {
    let winAmount = x.getCredit() - oldCredit + x.getBetAnte() + x.getBetRaise();
    let betAmount = x.getBetAnte() + x.getBetRaise();
    console.log('winAmount :>> ', winAmount);
    console.log('betAmount :>> ', betAmount);
    const response = $.ajax({
      url: 'http://localhost:6140/api/games/updateGameBankWithWinAmount',
      type: 'POST',
      async: false,
      data: {
        customerId: customerid,
        gameId: gameid,
        bet_amount: betAmount,
        win_amount: winAmount,
      }
    })
    if(response.responseJSON.gameStatus == false) {
      alert("Sorry, Something went wrong, please try again");
      window.location.reload()
    }
  }
  this.setCredit = function (a) {
    x.setCredit(a);
    oldCredit = x.getCredit();
    z.refreshCredit(a);
  };
  this._showWin = function () {
    d
      ? this._playerLose()
      : l === NO_HAND && "dealer" !== p
      ? this._playerWin(TEXT_DISPLAY_MSG_NOT_QUALIFY)
      : "player" === p
      ? this._playerWin(TEXT_HAND_WON_PLAYER)
      : "dealer" === p && l !== NO_HAND
      ? this._playerLose()
      : this._standOff();
    "player" === p ? playSound("win", 1, !1) : playSound("lose", 1, !1);
    this.changeState(STATE_GAME_DISTRIBUTE_FICHES);
    z.refreshCredit(x.getCredit());
    let winAmount = x.getCredit() - oldCredit + x.getBetAnte() + x.getBetRaise();
    this.updateBalanceToServer();
    $(s_oMain).trigger("hand_finished", [winAmount]);
    oldCredit = x.getCredit();
    setTimeout(function () {
      x.clearBet();
      s_oGame.changeState(STATE_GAME_WAITING_FOR_BET);
      s_oGame._onEndHand();
      v = s_oGame.endedHand;
    }, TIME_CARD_REMOVE * 5);
  };
  this._playerWin = function (a) {
    x.increaseCredit(m);
    J -= m;
    trace("_playerWin_iGameCash " + J);
    z.displayMsg(
      TEXT_DISPLAY_MSG_SHOWDOWN,
      TEXT_DISPLAY_MSG_PLAYER_WIN + " " + m + TEXT_CURRENCY
    );
    x.initMovement(0, G.getX(), G.getY());
    x.initMovement(1, G.getX(), G.getY());
    z.showResultText(a);
  };
  this._playerLose = function (a) {
    z.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_LOSE);
    x.initMovement(0, N.getX(), N.getY());
    a || x.initMovement(1, N.getX(), N.getY());
    z.showResultText(TEXT_HAND_WON_DEALER);
  };
  this._standOff = function () {
    x.increaseCredit(m);
    J -= m;
    trace("_standOff_iGameCash " + J);
    z.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_STANDOFF);
    x.initMovement(0, G.getX(), G.getY());
    x.initMovement(1, G.getX(), G.getY());
    z.showResultText(TEXT_DISPLAY_MSG_STANDOFF);
  };
  this._dealing = function () {
    if (10 > n) {
      var a = new CCard(u.getX(), u.getY(), y);
      if (1 === n % V.length) {
        var b = new CVector2(M.getX() + (CARD_WIDTH / 2 + 7) * n, M.getY());
        var c = K.splice(0, 1),
          d = c[0].fotogram;
        c = c[0].rank;
        a.setInfo(Q, b, d, c, !0, n);
        a.addEventListener(ON_CARD_SHOWN, this._onCardShown);
        H.push(a);
      } else
        (c = P.splice(0, 1)),
          (d = c[0].fotogram),
          (c = c[0].rank),
          a.setInfo(Q, x.getAttachCardOffset(), d, c, !1, n),
          x.newCardDealed(),
          T.push(a);
      D.push(a);
      n++;
      a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
      playSound("card", 1, !1);
    } else
      setTimeout(function () {
        s_oGame.changeState(STATE_GAME_PLAYER_TURN);
        z.displayMsg(TEXT_DISPLAY_MSG_USER_TURN, "");
        z.enable(!1, !0, !0);
      }, 1e3);
  };
  this._onEndHand = function () {
    for (var a = new CVector2(E.getX(), E.getY()), b = 0; b < D.length; b++)
      D[b].initRemoving(a), D[b].hideCard();
    z.clearCardValueText();
    c = 0;
    s_oGame.changeState(STATE_GAME_SHOW_WINNER);
    playSound("fiche_collect", 1, !1);
    A++;
    A === AD_SHOW_COUNTER &&
      ((A = 0), $(s_oMain).trigger("show_interlevel_ad"));
  };
  this._onCardShown = function () {
    e === STATE_GAME_PLAYER_TURN &&
      (4 === w
        ? (z.showHandValue(l, k), (e = STATE_GAME_SHOWDOWN), s_oGame._showWin())
        : s_oGame._showNextDealerCard());
  };
  this.endedHand = function () {};
  this.setBet = function (a, b) {
    if (z.isResultPanelvisible())
      z.disableBetFiches(), x.clearBet(), (v = this.setBet), this._onEndHand();
    else {
      var d = s_oGameSettings.getFichesValues()[b];
      if (a === BET_ANTE) {
        c = 0;
        F.hide();
        var e = x.getBetAnte() + d;
        if (2 * e > x.getCredit() - d) {
          z.displayMsg(TEXT_NO_MONEY_FOR_RAISE, "");
          return;
        }
        if (e > f) {
          g.show(TEXT_ERROR_MAX_BET);
          return;
        }
      } else e = 2 * x.getBetAnte();
      a === BET_ANTE
        ? (x.decreaseCredit(d), (J += d), x.betAnte(d), z.enable(!0, !1, !1))
        : (x.decreaseCredit(e), (J += e), x.betRaise());
      z.refreshCredit(x.getCredit());
    }
  };
  this._gameOver = function () {
    R.show();
  };
  this._calculateTotalWin = function () {
    let bonusMoney = 0;
    if (k <= 9) {
      bonusMoney = x.getBetAnte() * 3 * PAYOUT_MULT[k];
    }
    if (k === 0 && bonusMoney > 3000) {
      bonusMoney = 3000;
    }

    m = 0;
    switch (p) {
      case "player":
        m = 3 * x.getBetAnte() + bonusMoney;
        break;
      case "standoff":
        m = 3 * x.getBetAnte();
        break;
      case "dealer_no_hand":
        m = 3 * x.getBetAnte() + x.getBetAnte();
    }
  };
  this.onRebet = function () {
    this.rebet();
  };
  this.onDeal = function () {
    r = x.getBetAnte() * PAYOUT_MULT[PAYOUT_MULT.length - 1];
    if (x.getBetAnte() < MIN_BET)
      g.show(TEXT_ERROR_MIN_BET), z.enableBetFiches(!1), z.enable(!1, !1, !1);
    else {
      y.removeAllChildren();
      const random = new Random();
      let randomNumber = random.integer(1, 100);

      const response = $.ajax({
        url: 'http://localhost:6140/api/games/checkStudPokerGameBank',
        type: 'POST',
        async: false,
        data: {
          customerId: customerid,
          gameId: gameid,
          bet_amount: x.getBetAnte(),
          payout_mult: PAYOUT_MULT,
          randomNumber,
        }
      })
  
      if(response.responseJSON.gameStatus == false) {
        alert("Sorry, Something went wrong, please try again");
        window.location.reload()
      }
  
      WIN_OCCURRENCE = response.responseJSON.win_occurrence;

      // console.log(randomNumber);
      if (
        randomNumber >
        WIN_OCCURRENCE
      ) {
        do {
          // Dealer win
          P = this._generateRandPlayerCards();
          K = this._generateRandDealerCards();
          var a = O.evaluate(K),
            b = O.evaluate(P);
          l = a.ret;
          k = b.ret;
          p = O.getWinnerComparingHands(b.sort_hand, a.sort_hand, k, l);
          this._calculateTotalWin();
        } while (p !== "dealer");
      } else {
        do
          (P = this._generateRandPlayerCards()),
            (K = this._generateRandDealerCards()),
            (a = O.evaluate(K)),
            (b = O.evaluate(P)),
            (l = a.ret),
            (k = b.ret),
            (p = O.getWinnerComparingHands(b.sort_hand, a.sort_hand, k, l)),
            this._calculateTotalWin();
        while (p === "dealer" && WIN_TYPE_VALUE[k] <= Math.min.apply(null, response.responseJSON.data));
      }
      x.setPrevBet();
      playSound("card", 1, !1);
      d = !1;
      this.changeState(STATE_GAME_DEALING);
      $(s_oMain).trigger("bet_placed", x.getBetAnte());
    }
  };
  this.onFold = function () {
    d = !0;
    p = "dealer";
    w = 0;
    this._showNextDealerCard();
  };
  this.onRaise = function () {
    e !== STATE_GAME_DISTRIBUTE_FICHES &&
      (this.setBet(BET_RAISE, z.getFicheSelected()),
      (w = 0),
      this._showNextDealerCard());
      $(s_oMain).trigger("bet_placed", x.getBetRaise());
  };
  this._showNextDealerCard = function () {
    H[w].showCard();
    w++;
  };
  this._generateRandDealerCards = function () {
    for (var a = [], b = 0; 5 > b; b++)
      a.push({ fotogram: I[h].fotogram, rank: I[h].rank, suit: I[h].suit }),
        h++,
        this._checkDeckLength();
    return a;
  };
  this._generateRandPlayerCards = function () {
    for (var a = [], b = 0; 5 > b; b++)
      a.push({ fotogram: I[h].fotogram, rank: I[h].rank, suit: I[h].suit }),
        h++,
        this._checkDeckLength();
    return a;
  };
  this._checkDeckLength = function () {
    h >= I.length && ((I = s_oGameSettings.getShuffledCardDeck()), (h = 0));
  };
  this.clearBets = function () {
    if (e === STATE_GAME_WAITING_FOR_BET) {
      z.enable(!1, !1, !1);
      var a = x.getStartingBet();
      0 < a &&
        (x.clearBet(),
        x.increaseCredit(a),
        (J -= a),
        z.refreshCredit(x.getCredit()),
        (a = x.checkIfRebetIsPossible()),
        z.enableBetFiches(a));
    }
  };
  this.rebet = function () {
    this.clearBets();
    var a = x.rebet();
    J -= a;
    x.getBetAnte();
    z.enable(!0, !1, !1);
    z.refreshCredit(x.getCredit());
    c = BET_TIME;
  };
  this.onExit = function () {
    this.unload();
    $(s_oMain).trigger("save_score", [x.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", x.getCredit());
    s_oMain.gotoMenu();
  };
  this.getState = function () {
    return e;
  };
  this._updateDealing = function () {
    for (var a = 0; a < D.length; a++) D[a].update();
  };
  this._updateFiches = function () {
    x.updateFichesController();
  };
  this._updateShowWinner = function () {
    for (var a = 0; a < D.length; a++) D[a].update();
    c += s_iTimeElaps;
    c > TIME_END_HAND &&
      ((c = 0),
      (a = x.checkIfRebetIsPossible()),
      this.reset(a),
      z.reset(),
      x.getCredit() < s_oGameSettings.getFichesValueAt(0) * 3
        ? (this._gameOver(), this.changeState(-1))
        : (this.changeState(STATE_GAME_WAITING_FOR_BET),
          v.call(this, 0, z.getFicheSelected())));
  };
  this.update = function () {
    if (!1 !== b)
      switch (e) {
        case STATE_GAME_WAITING_FOR_BET:
            ((c = 0), F.isVisible() || 0 !== x.getBetAnte() || F.show(1));
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
  var J = a.game_cash;
  PAYOUT_MULT = a.payout;
  TIME_END_HAND = a.time_show_hand;
  AD_SHOW_COUNTER = a.ad_show_counter;
  this._init();
}
var s_oGame, s_oTweenController;
function CInterface(a) {
  var b,
    d,
    c,
    f,
    e,
    h,
    n,
    r,
    m,
    w,
    l,
    k,
    A,
    p,
    v,
    D = null,
    H,
    I,
    T,
    V,
    P,
    K,
    Q,
    u,
    M,
    G = null,
    N = null;
  this._init = function (a) {
    var y = s_oSpriteLibrary.getSprite("but_exit");
    c = CANVAS_WIDTH - y.width / 2 - 10;
    f = y.height / 2 + 10;
    m = new CGfxButton(c, f, y, s_oStage);
    m.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (e = m.getX() - y.width - 10),
        (h = y.height / 2 + 10),
        (D = new CToggle(
          e,
          h,
          s_oSpriteLibrary.getSprite("audio_icon"),
          !!s_bAudioActive,
          s_oStage
        )),
        D.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    y = window.document;
    var E = y.documentElement;
    G =
      E.requestFullscreen ||
      E.mozRequestFullScreen ||
      E.webkitRequestFullScreen ||
      E.msRequestFullscreen;
    N =
      y.exitFullscreen ||
      y.mozCancelFullScreen ||
      y.webkitExitFullscreen ||
      y.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (G = !1);
    G &&
      screenfull.enabled &&
      ((y = s_oSpriteLibrary.getSprite("but_fullscreen")),
      null === D
        ? ((b = m.getX() - y.width / 2 - 10), (d = y.height / 2 + 10))
        : ((b = e - y.width / 2 - 10), (d = y.height / 2 + 10)),
      (M = new CToggle(b, d, y, s_bFullscreen, s_oStage)),
      M.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    y = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    y.x = 290;
    y.y = 6;
    s_oStage.addChild(y);
    y = s_oSpriteLibrary.getSprite("gui_bg");
    E = createBitmap(y);
    E.y = CANVAS_HEIGHT - y.height;
    s_oStage.addChild(E);
    y = s_oSpriteLibrary.getSprite("but_clear");
    w = new CGfxButton(CANVAS_WIDTH - 400, CANVAS_HEIGHT - y.height / 2, y, s_oStage);
    w.disable();
    w.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
    y = s_oSpriteLibrary.getSprite("but_rebet");
    l = new CGfxButton(CANVAS_WIDTH - 550, CANVAS_HEIGHT - y.height / 2, y, s_oStage);
    l.disable();
    l.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
    y = s_oSpriteLibrary.getSprite("but_generic");
    A = new CTextButton(
      CANVAS_WIDTH - 400,
      CANVAS_HEIGHT - y.height / 2 - 350,
      y,
      TEXT_DEAL,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    A.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    y = s_oSpriteLibrary.getSprite("but_generic");
    p = new CTextButton(
      CANVAS_WIDTH - 400,
      CANVAS_HEIGHT - y.height / 2 - 250,
      y,
      TEXT_RAISE,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    p.addEventListener(ON_MOUSE_UP, this._onButRaiseRelease, this);
    y = s_oSpriteLibrary.getSprite("but_generic");
    v = new CTextButton(
      CANVAS_WIDTH - 400,
      CANVAS_HEIGHT - y.height / 2 - 150,
      y,
      TEXT_FOLD,
      FONT_GAME_1,
      "#ffffff",
      30,
      s_oStage
    );
    v.addEventListener(ON_MOUSE_UP, this._onButFoldRelease, this);
    POS_BET[BET_ANTE] = { x: CANVAS_WIDTH / 2 - 100, y: 440 };
    POS_BET[BET_RAISE] = { x: CANVAS_WIDTH / 2 + 100, y: 440 };
    k = new CGfxButton(
      POS_BET[BET_ANTE].x,
      POS_BET[BET_ANTE].y,
      s_oSpriteLibrary.getSprite("bet_ante"),
      s_oStage
    );
    k.addEventListener(ON_MOUSE_UP, this._onButAnteRelease, this);
    E = s_oSpriteLibrary.getSprite("bet_raise");
    var F = createBitmap(E);
    F.x = POS_BET[BET_RAISE].x;
    F.y = POS_BET[BET_RAISE].y;
    F.regX = E.width / 2;
    F.regY = E.height / 2;
    s_oStage.addChild(F);
    V = new CTLText(
      s_oStage,
      408,
      16,
      192,
      48,
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
    P = new CTLText(
      s_oStage,
      408,
      66,
      192,
      38,
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
    I = new CTLText(
      s_oStage,
      CANVAS_WIDTH / 2 - 180,
      290,
      360,
      21,
      21,
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
    T = new CTLText(
      s_oStage,
      CANVAS_WIDTH / 2 - 180,
      505,
      360,
      21,
      21,
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
    new CTLText(
      s_oStage,
      300,
      CANVAS_HEIGHT - 150,
      150,
      35,
      35,
      "right",
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
    H = new CTLText(
      s_oStage,
      460,
      CANVAS_HEIGHT - 150,
      150,
      35,
      35,
      "right",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      TEXT_CURRENCY + a.toFixed(2),
      !0,
      !0,
      !1,
      !1
    );
    a = [
      { x: 350, y: CANVAS_HEIGHT - 60 },
      { x: 485, y: CANVAS_HEIGHT - 60 },
      { x: 620, y: CANVAS_HEIGHT - 60 },
      { x: 755, y: CANVAS_HEIGHT - 60 },
      { x: 890, y: CANVAS_HEIGHT - 60 },
    ];
    r = [];
    E = s_oGameSettings.getFichesValues();
    for (F = 0; F < NUM_FICHES; F++)
      (y = s_oSpriteLibrary.getSprite("fiche_" + F)),
        (r[F] = new CGfxButton(a[F].x, a[F].y, y, s_oStage)),
        r[F].addEventListenerWithParams(
          ON_MOUSE_UP,
          this._onFicheClicked,
          this,
          [E[F], F]
        );
    a = s_oSpriteLibrary.getSprite("fiche_highlight");
    K = createBitmap(a);
    K.regX = a.width / 2;
    K.regY = a.height / 2;
    K.x = r[0].getX();
    K.y = r[0].getY();
    s_oStage.addChild(K);
    n = 0;
    FICHE_WIDTH = y.width;
    Q = new CAnimText(CANVAS_WIDTH, CANVAS_HEIGHT, s_oStage);
    u = new CPaytablePanel(CANVAS_WIDTH - 313, 100, s_oStage);
    this.disableButtons();
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    m.unload();
    m = null;
    !1 === DISABLE_SOUND_MOBILE && (D.unload(), (D = null));
    G && screenfull.enabled && M.unload();
    w.unload();
    A.unload();
    l.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, k) {
    m.setPosition(c - a, k + f);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      D.setPosition(e - a, k + h);
    G && screenfull.enabled && M.setPosition(b - a, d + k);
    u.refreshButtonPos(a, k);
  };
  this.reset = function () {
    this.disableButtons();
  };
  this.enableBetFiches = function (a) {
    for (var b = 0; b < NUM_FICHES; b++) r[b].enable();
    w.enable();
    k.enable();
    a && l.enable();
  };
  this.enableRebet = function () {
    l.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) r[a].disable();
    w.disable();
    l.disable();
    k.disable();
  };
  this.disableButtons = function () {
    A.disable();
    v.disable();
    p.disable();
  };
  this.enable = function (a, b, c) {
    a ? A.enable() : A.disable();
    b ? p.enable() : p.disable();
    c ? v.enable() : v.disable();
  };
  this.refreshCredit = function (a) {
    H.refreshText(TEXT_CURRENCY + a.toFixed(2));
  };
  this.refreshCardValue = function (a, b) {
    I.refreshText("" + a);
    T.refreshText("" + b);
  };
  this.displayMsg = function (a, b) {
    V.refreshText(a);
    P.refreshText(b);
  };
  this.clearCardValueText = function () {
    I.refreshText("");
    T.refreshText("");
    Q.hide();
  };
  this._onFicheClicked = function (a) {
    K.x = r[a[1]].getX();
    K.y = r[a[1]].getY();
    n = a[1];
    s_oGame.setBet(BET_ANTE, a[1]);
  };
  this.showResultText = function (a) {
    Q.show(
      { x: -200, y: CANVAS_HEIGHT / 2 + 160 },
      { x: CANVAS_WIDTH / 2 - 550, y: CANVAS_HEIGHT / 2 + 120 },
      a
    );
  };
  this.showHandValue = function (a, b) {
    I.refreshText(TEXT_EVALUATOR[a]);
    T.refreshText(TEXT_EVALUATOR[b]);
  };
  this._onButClearRelease = function () {
    s_oGame.clearBets();
  };
  this._onButRebetRelease = function () {
    l.disable();
    s_oGame.onRebet();
  };
  this._onButAnteRelease = function () {
    // s_oGame.setBet(BET_ANTE, n);
  };
  this._onButDealRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onDeal();
  };
  this._onButRaiseRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onRaise();
  };
  this._onButFoldRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onFold();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    G && screenfull.enabled && M.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? N.call(window.document)
      : G.call(window.document.documentElement);
    sizeHandler();
  };
  this.getFicheSelected = function () {
    return n;
  };
  this.isResultPanelvisible = function () {
    return Q.isVisible();
  };
  s_oInterface = this;
  this._init(a);
  return this;
}
var s_oInterface = null;
function CTweenController() {
  this.tweenValue = function (a, b, d) {
    return a + d * (b - a);
  };
  this.easeLinear = function (a, b, d, c) {
    return (d * a) / c + b;
  };
  this.easeInCubic = function (a, b, d, c) {
    c = (a /= c) * a * a;
    return b + d * c;
  };
  this.easeBackInQuart = function (a, b, d, c) {
    c = (a /= c) * a;
    return b + d * (2 * c * c + 2 * c * a + -3 * c);
  };
  this.easeInBack = function (a, b, d, c) {
    return d * (a /= c) * a * (2.70158 * a - 1.70158) + b;
  };
  this.easeOutCubic = function (a, b, d, c) {
    return d * ((a = a / c - 1) * a * a + 1) + b;
  };
}
function CSeat() {
  var a, b, d, c, f, e, h, n, r, m;
  this._init = function () {
    n = new createjs.Container();
    n.x = CANVAS_WIDTH / 2 - 160;
    n.y = 586;
    s_oStage.addChild(n);
    m = [];
    for (var c = 0; 2 > c; c++) m[c] = new CFichesController();
    b = a = f = 0;
    this.reset();
    r = new CVector2();
    r.set(0, 0);
    h = new CVector2(r.getX(), r.getY());
  };
  this.unload = function () {
    s_oStage.removeChild(n);
  };
  this.addEventListener = function (a, b, c) {};
  this.reset = function () {
    for (var a = (c = 0); a < m.length; a++) m[a].reset();
    e = [];
    for (a = 0; 3 > a; a++) e[a] = [];
  };
  this.clearBet = function () {
    b = a = 0;
    e = [];
    for (var c = 0; c < m.length; c++) m[c].reset(), (e[c] = []);
  };
  this.resetBet = function () {
    b = a = 0;
  };
  this.setCredit = function (a) {
    f = a;
  };
  this.increaseCredit = function (a) {
    f += a;
  };
  this.betAnte = function (b) {
    a += b;
    m[0].createFichesPile(a, POS_BET[0].x, POS_BET[0].y);
  };
  this.betRaise = function () {
    b = 2 * a;
    m[1].createFichesPile(b, POS_BET[1].x, POS_BET[1].y);
  };
  this.setPrevBet = function () {
    d = a;
  };
  this.decreaseCredit = function (a) {
    f -= a;
    f = parseFloat(f.toFixed(2));
  };
  this.refreshFiches = function (a, b, c, d, f) {
    e[f].push({ value: a, index: b });
    m[f].refreshFiches(e[f], c, d);
  };
  this.initMovement = function (a, b, c) {
    m[a].initMovement(b, c);
  };
  this.newCardDealed = function () {
    c++;
  };
  this.rebet = function () {
    if (d === undefined) return 0;
    b = 0;
    a = d;
    this.decreaseCredit(d);
    m[BET_ANTE].createFichesPile(d, POS_BET[BET_ANTE].x, POS_BET[BET_ANTE].y);
    return d;
  };
  this.checkIfRebetIsPossible = function () {
    for (var a = 0, b = 0; b < m.length; b++) {
      var c = parseFloat(m[b].getPrevBet().toFixed(2));
      a += c;
    }
    return a > f ? !1 : !0;
  };
  this.updateFichesController = function () {
    for (var a = 0; a < m.length; a++) m[a].update();
  };
  this.getAttachCardOffset = function () {
    h.set(n.x + r.getX() + (CARD_WIDTH + 14) * c, n.y + r.getY());
    return h;
  };
  this.getBetAnte = function () {
    return a;
  };
  this.getBetRaise = function () {
    return b;
  };
  this.getCredit = function () {
    return f;
  };
  this.getCardOffset = function () {
    return r;
  };
  this.getPotentialWin = function (a) {
    return (void 0)[a];
  };
  this.getStartingBet = function () {
    for (var a = 0, b = 0; b < m.length; b++) a += m[b].getValue();
    return a;
  };
  this._init();
}
function CFichesController() {
  var a, b, d, c, f, e, h, n, r, m;
  this._init = function () {
    n = new createjs.Container();
    s_oStage.addChild(n);
    f = new CVector2();
    f.set(n.x, n.y);
    r = new createjs.Container();
    s_oStage.addChild(r);
    m = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
    m.textAlign = "center";
    r.addChild(m);
    d = c = b = 0;
    a = !1;
  };
  this.addEventListener = function (a, b, c) {};
  this.reset = function () {
    a = !1;
    d = 0;
    n.removeAllChildren();
    n.x = f.getX();
    n.y = f.getY();
    m.text = "";
  };
  this.setPrevValue = function (a) {
    c = a;
  };
  this.refreshFiches = function (a, b, c) {
    a = a.sortOn("value", "index");
    for (var f = b, e = c - 50, h = (d = 0), k = 0; k < a.length; k++) {
      var l = s_oSpriteLibrary.getSprite("fiche_" + a[k].index);
      l = createBitmap(l);
      l.scaleX = 0.7;
      l.scaleY = 0.7;
      n.addChild(l);
      l.x = f - 52;
      l.y = e;
      e -= 5;
      h++;
      9 < h && ((h = 0), (f += FICHE_WIDTH), (e = c));
      d += a[k].value;
    }
    playSound("chip", 1, !1);
    m.x = b;
    m.y = c + 35;
    m.text = d.toFixed(2) + TEXT_CURRENCY;
  };
  this.createFichesPile = function (a, b, c) {
    this.reset();
    var d = s_oGameSettings.getFichesValues(),
      f = [];
    do {
      for (var e = d[d.length - 1], h = d.length - 1; e > a; ) h--, (e = d[h]);
      h = Math.floor(a / e);
      for (var k = 0; k < h; k++)
        f.push({ value: e, index: s_oGameSettings.getIndexForFiches(e) });
      e = Math.floor(a / e) === a / e ? 0 : a % e;
      a = e.toFixed(2);
    } while (0 < e);
    this.refreshFiches(f, b, c);
  };
  this.initMovement = function (b, f) {
    c = d;
    e = new CVector2(n.x, n.y);
    h = new CVector2(b, f);
    m.text = "";
    a = !0;
  };
  this.getValue = function () {
    return d;
  };
  this.getPrevBet = function () {
    return c;
  };
  this.update = function () {
    if (a)
      if (((b += s_iTimeElaps), b > TIME_FICHES_MOV)) (b = 0), (a = !1);
      else {
        var c = easeInOutCubic(b, 0, 1, TIME_FICHES_MOV),
          d = new CVector2();
        d = tweenVectors(e, h, c, d);
        n.x = d.getX();
        n.y = d.getY();
      }
  };
  this._init();
}
function CVector2(a, b) {
  var d, c;
  this._init = function (a, b) {
    d = a;
    c = b;
  };
  this.add = function (a, b) {
    d += a;
    c += b;
  };
  this.addV = function (a) {
    d += a.getX();
    c += a.getY();
  };
  this.scalarDivision = function (a) {
    d /= a;
    c /= a;
  };
  this.subV = function (a) {
    d -= a.getX();
    c -= a.getY();
  };
  this.scalarProduct = function (a) {
    d *= a;
    c *= a;
  };
  this.invert = function () {
    d *= -1;
    c *= -1;
  };
  this.dotProduct = function (a) {
    return d * a.getX() + c * a.getY();
  };
  this.set = function (a, b) {
    d = a;
    c = b;
  };
  this.setV = function (a) {
    d = a.getX();
    c = a.getY();
  };
  this.length = function () {
    return Math.sqrt(d * d + c * c);
  };
  this.length2 = function () {
    return d * d + c * c;
  };
  this.normalize = function () {
    var a = this.length();
    0 < a && ((d /= a), (c /= a));
  };
  this.getNormalize = function (a) {
    this.length();
    a.set(d, c);
    a.normalize();
  };
  this.rot90CCW = function () {
    var a = d;
    d = -c;
    c = a;
  };
  this.rot90CW = function () {
    var a = d;
    d = c;
    c = -a;
  };
  this.getRotCCW = function (a) {
    a.set(d, c);
    a.rot90CCW();
  };
  this.getRotCW = function (a) {
    a.set(d, c);
    a.rot90CW();
  };
  this.ceil = function () {
    d = Math.ceil(d);
    c = Math.ceil(c);
  };
  this.round = function () {
    d = Math.round(d);
    c = Math.round(c);
  };
  this.toString = function () {
    return "Vector2: " + d + ", " + c;
  };
  this.print = function () {
    trace("Vector2: " + d + ", " + c);
  };
  this.getX = function () {
    return d;
  };
  this.getY = function () {
    return c;
  };
  this._init(a, b);
}
function CGameSettings() {
  var a, b, d;
  this._init = function () {
    var b = -1;
    a = [];
    for (var f = 0; 52 > f; f++) {
      var e = (f + 1) % 13;
      1 === e ? ((e = 14), b++) : 0 === e && (e = 13);
      a.push({ fotogram: f, rank: e, suit: b });
    }
    FICHE_VALUE = [1, 5, 10, 25, 100];
  };
  this.getFichesValues = function () {
    return FICHE_VALUE;
  };
  this.getFichesValueAt = function (a) {
    return FICHE_VALUE[a];
  };
  this.getIndexForFiches = function (a) {
    for (var b = 0, c = 0; c < FICHE_VALUE.length; c++) 
      FICHE_VALUE[c] === a && (b = c);
    return b;
  };
  this.generateFichesPile = function (a) {
    var b = [],
      c = d.length - 1,
      h = d[c];
    do {
      var n = a % h;
      n = CMath.roundDecimal(n, 1);
      a = Math.floor(a / h);
      for (var r = 0; r < a; r++) b.push(h);
      c--;
      h = d[c];
      a = n;
    } while (0 < n && -1 < c);
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
    for (b = []; 0 < c.length; )
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
function ease(a, b, d, c, f, e) {
  switch (a) {
    case TYPE_LINEAR:
      var h = easeLinear(b, d, c, f, e);
      break;
    case TYPE_IN_CUBIC:
      h = easeInCubic(b, d, c, f, e);
      break;
    case TYPE_OUT_CUBIC:
      h = easeOutCubic(b, d, c, f, e);
      break;
    case TYPE_IN_BACK:
      h = easeInBack(b, d, c, f, e);
      break;
    case TYPE_OUT_BACK:
      h = easeInBack(b, d, c, f, e);
  }
  return h;
}
function easeOutBounce(a, b, d, c) {
  return (a /= c) < 1 / 2.75
    ? 7.5625 * d * a * a + b
    : a < 2 / 2.75
    ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b
    : a < 2.5 / 2.75
    ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b
    : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b;
}
function easeInBounce(a, b, d, c) {
  return d - easeOutBounce(c - a, 0, d, c) + b;
}
function easeInOutBounce(a, b, d, c) {
  return a < c / 2
    ? 0.5 * easeInBounce(2 * a, 0, d, c) + b
    : 0.5 * easeOutBounce(2 * a - c, 0, d, c) + 0.5 * d + b;
}
function easeInCirc(a, b, d, c) {
  return -d * (Math.sqrt(1 - (a /= c) * a) - 1) + b;
}
function easeOutCirc(a, b, d, c) {
  return d * Math.sqrt(1 - (a = a / c - 1) * a) + b;
}
function easeInOutCirc(a, b, d, c) {
  return 1 > (a /= c / 2)
    ? (-d / 2) * (Math.sqrt(1 - a * a) - 1) + b
    : (d / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
}
function easeInCubic(a, b, d, c, f) {
  return d * (a /= c) * a * a + b;
}
function easeOutCubic(a, b, d, c, f) {
  return d * ((a = a / c - 1) * a * a + 1) + b;
}
function easeInOutCubic(a, b, d, c, f) {
  return 1 > (a /= c / 2)
    ? (d / 2) * a * a * a + b
    : (d / 2) * ((a -= 2) * a * a + 2) + b;
}
function easeInElastic(a, b, d, c, f, e, h) {
  if (0 == a) return b;
  if (1 == (a /= c)) return b + d;
  h || (h = 0.3 * c);
  !e || e < Math.abs(d)
    ? ((e = d), (f = h / 4))
    : (f = (h / (2 * Math.PI)) * Math.asin(d / e));
  return (
    -(e * Math.pow(2, 10 * --a) * Math.sin((2 * (a * c - f) * Math.PI) / h)) + b
  );
}
function easeOutElastic(a, b, d, c, f, e, h) {
  if (0 == a) return b;
  if (1 == (a /= c)) return b + d;
  h || (h = 0.3 * c);
  !e || e < Math.abs(d)
    ? ((e = d), (f = h / 4))
    : (f = (h / (2 * Math.PI)) * Math.asin(d / e));
  return (
    e * Math.pow(2, -10 * a) * Math.sin((2 * (a * c - f) * Math.PI) / h) + d + b
  );
}
function easeInOutElastic(a, b, d, c, f, e, h) {
  if (0 == a) return b;
  if (1 == (a /= c)) return b + d;
  h || (h = 0.3 * c);
  !e || e < Math.abs(d)
    ? ((e = d), (f = h / 4))
    : (f = (h / (2 * Math.PI)) * Math.asin(d / e));
  return 1 > a
    ? -0.5 *
        e *
        Math.pow(2, 10 * --a) *
        Math.sin((2 * (a * c - f) * Math.PI) / h) +
        b
    : e *
        Math.pow(2, -10 * --a) *
        Math.sin((2 * (a * c - f) * Math.PI) / h) *
        0.5 +
        d +
        b;
}
function easeInExpo(a, b, d, c) {
  return 0 == a ? b : d * Math.pow(2, 10 * (a / c - 1)) + b;
}
function easeOutExpo(a, b, d, c) {
  return a == c ? b + d : d * (-Math.pow(2, (-10 * a) / c) + 1) + b;
}
function easeInOutExpo(a, b, d, c) {
  return 0 == a
    ? b
    : a == c
    ? b + d
    : 1 > (a /= c / 2)
    ? (d / 2) * Math.pow(2, 10 * (a - 1)) + b
    : (d / 2) * (-Math.pow(2, -10 * --a) + 2) + b;
}
function easeLinear(a, b, d, c) {
  return (d * a) / c + b;
}
function easeInQuad(a, b, d, c) {
  return d * (a /= c) * a + b;
}
function easeOutQuad(a, b, d, c) {
  return -d * (a /= c) * (a - 2) + b;
}
function easeInOutQuad(a, b, d, c) {
  return 1 > (a /= c / 2)
    ? (d / 2) * a * a + b
    : (-d / 2) * (--a * (a - 2) - 1) + b;
}
function easeInQuart(a, b, d, c) {
  return d * (a /= c) * a * a * a + b;
}
function easeOutQuart(a, b, d, c) {
  return -d * ((a = a / c - 1) * a * a * a - 1) + b;
}
function easeInOutQuart(a, b, d, c) {
  return 1 > (a /= c / 2)
    ? (d / 2) * a * a * a * a + b
    : (-d / 2) * ((a -= 2) * a * a * a - 2) + b;
}
function easeInQuint(a, b, d, c) {
  return d * (a /= c) * a * a * a * a + b;
}
function easeOutQuint(a, b, d, c) {
  return d * ((a = a / c - 1) * a * a * a * a + 1) + b;
}
function easeInOutQuint(a, b, d, c) {
  return 1 > (a /= c / 2)
    ? (d / 2) * a * a * a * a * a + b
    : (d / 2) * ((a -= 2) * a * a * a * a + 2) + b;
}
function easeInSine(a, b, d, c) {
  return -d * Math.cos((a / c) * (Math.PI / 2)) + d + b;
}
function easeOutSine(a, b, d, c) {
  return d * Math.sin((a / c) * (Math.PI / 2)) + b;
}
function easeInOutSine(a, b, d, c) {
  return (-d / 2) * (Math.cos((Math.PI * a) / c) - 1) + b;
}
function easeInBack(a, b, d, c) {
  return d * (a /= c) * a * (2.70158 * a - 1.70158) + b;
}
function easeOutBack(a, b, d, c) {
  return d * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + b;
}
function CCard(a, b, d) {
  var c,
    f,
    e = -1,
    h,
    n,
    r,
    m,
    w,
    l,
    k,
    A,
    p,
    v;
  this._init = function (a, b, c) {
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
        back: [52],
      },
    };
    c = new createjs.SpriteSheet(c);
    p = createSprite(
      c,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    p.x = a;
    p.y = b;
    p.rotation = 120;
    p.stop();
    v.addChild(p);
    k = [];
    A = [];
  };
  this.unload = function () {
    l = w = null;
    v.removeChild(p);
  };
  this.addEventListener = function (a, b, c) {
    k[a] = b;
    A[a] = c;
  };
  this.setInfo = function (a, b, d, k, p, v) {
    f = !1;
    m = 0;
    h = d;
    n = k;
    w = a;
    l = b;
    r = v;
    c = p;
    e = STATE_CARD_DEALING;
  };
  this.initRemoving = function (a) {
    w = new CVector2(p.x, p.y);
    l = a;
    m = 0;
    e = STATE_CARD_REMOVING;
  };
  this.setValue = function () {
    p.gotoAndStop(h);
    var a = this;
    createjs.Tween.get(p)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardShown();
      });
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(p)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(p)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    p.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(p)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    k[ON_CARD_SHOWN] && k[ON_CARD_SHOWN].call(A[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    f = !0;
  };
  this.getValue = function () {
    return n;
  };
  this.getFotogram = function () {
    return h;
  };
  this._updateDealing = function () {
    m += s_iTimeElaps;
    if (m > TIME_CARD_DEALING)
      (e = -1),
        (m = 0),
        (p.x = l.getX()),
        (p.y = l.getY()),
        (p.rotation = 360),
        k[ON_CARD_ANIMATION_ENDING] &&
          k[ON_CARD_ANIMATION_ENDING].call(
            A[ON_CARD_ANIMATION_ENDING],
            this,
            c,
            r
          );
    else {
      this.visible = !0;
      var a = easeInOutCubic(m, 0, 1, TIME_CARD_DEALING),
        b = new CVector2();
      b = tweenVectors(w, l, a, b);
      p.x = b.getX();
      p.y = b.getY();
      p.rotation = 120 + (24e3 * a) / 100;
    }
  };
  this._updateRemoving = function () {
    m += s_iTimeElaps;
    if (m > TIME_CARD_REMOVE) (m = 0), (f = !1), (e = -1), this.unload();
    else {
      var a = easeInOutCubic(m, 0, 1, TIME_CARD_REMOVE),
        b = new CVector2();
      b = tweenVectors(w, l, a, b);
      p.x = b.getX();
      p.y = b.getY();
      p.rotation = (4500 * a) / 100;
    }
  };
  this.update = function () {
    switch (e) {
      case STATE_CARD_DEALING:
        this._updateDealing();
        break;
      case STATE_CARD_REMOVING:
        this._updateRemoving();
    }
  };
  s_oCard = this;
  this._init(a, b, d);
}
var s_oCard;
function CGameOver() {
  var a, b, d;
  this._init = function () {
    d = new createjs.Container();
    s_oStage.addChild(d);
    d.on("click", function () {});
    var c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    d.addChild(c);
    new CTLText(
      d,
      CANVAS_WIDTH / 2 - 180,
      275,
      360,
      140,
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
    // a = new CTextButton(
    //   CANVAS_WIDTH / 2 - 100,
    //   450,
    //   s_oSpriteLibrary.getSprite("but_game_bg"),
    //   TEXT_RECHARGE,
    //   FONT_GAME_1,
    //   "#fff",
    //   14,
    //   d
    // );
    // a.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    b = new CTextButton(
      CANVAS_WIDTH / 2,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT_GAME_1,
      "#fff",
      14,
      d
    );
    b.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    // a.unload();
    b.unload();
    d.off("click", function () {});
  };
  this.show = function () {
    d.visible = !0;
    $(s_oMain).trigger("end_session");
  };
  this.hide = function () {
    d.visible = !1;
  };
  this._onRecharge = function () {
    d.visible = !1;
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._init();
}
function CMsgBox() {
  var a, b, d;
  this._init = function () {
    d = new createjs.Container();
    d.alpha = 0;
    d.visible = !1;
    s_oStage.addChild(d);
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    d.addChild(a);
    b = new CTLText(
      d,
      CANVAS_WIDTH / 2 - 180,
      CANVAS_HEIGHT / 2 - 90,
      360,
      166,
      34,
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
    d.off("mousedown", this._onExit);
  };
  this._initListener = function () {
    d.on("mousedown", this._onExit);
  };
  this.show = function (a) {
    b.refreshText(a);
    d.visible = !0;
    var c = this;
    createjs.Tween.get(d)
      .to({ alpha: 1 }, 500)
      .call(function () {
        c._initListener();
      });
  };
  this._onExit = function () {
    d.visible && (d.off("mousedown"), (d.visible = !1));
  };
  this._init();
  return this;
}
function CHandEvaluator() {
  var a, b, d;
  this.evaluate = function (c) {
    b = [];
    a = [];
    for (var f = 0; f < c.length; f++)
      (b[f] = { rank: c[f].rank, suit: c[f].suit }),
        (a[f] = { rank: c[f].rank, suit: c[f].suit });
    b.sort(this.compareRank);
    a.sort(this.compareRank);
    d = [0, 1, 2, 3, 4];
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
      : this._checkHighCard()
      ? HIGH_CARD
      : NO_HAND;
  };
  this._checkForRoyalFlush = function () {
    return this._isRoyalStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForStraightFlush = function () {
    return this._isStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForFourOfAKind = function () {
    return b[0].rank === b[3].rank
      ? (b.splice(4, 1), d.splice(4, 1), !0)
      : b[1].rank === b[4].rank
      ? (b.splice(0, 1), d.splice(0, 1), !0)
      : !1;
  };
  this._checkForFullHouse = function () {
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
      ? (b.splice(3, 1), b.splice(3, 1), d.splice(3, 1), d.splice(3, 1), !0)
      : b[1].rank === b[2].rank && b[1].rank === b[3].rank
      ? (b.splice(0, 1), b.splice(3, 1), d.splice(0, 1), d.splice(3, 1), !0)
      : b[2].rank === b[3].rank && b[2].rank === b[4].rank
      ? (b.splice(0, 1), b.splice(0, 1), d.splice(0, 1), d.splice(0, 1), !0)
      : !1;
  };
  this._checkForTwoPair = function () {
    return b[0].rank === b[1].rank && b[2].rank === b[3].rank
      ? (b.splice(4, 1), d.splice(4, 1), !0)
      : b[1].rank === b[2].rank && b[3].rank === b[4].rank
      ? (b.splice(0, 1), d.splice(0, 1), !0)
      : b[0].rank === b[1].rank && b[3].rank === b[4].rank
      ? (b.splice(2, 1), d.splice(2, 1), !0)
      : !1;
  };
  this._checkForOnePair = function () {
    for (var a = 0; 4 > a; a++)
      if (b[a].rank === b[a + 1].rank) {
        var f = b[a],
          e = b[a + 1];
        b = [];
        b.push(f);
        b.push(e);
        d = [a, a + 1];
        return !0;
      }
    return !1;
  };
  this._checkHighCard = function () {
    for (var a = !1, d = !1, e = 0; 5 > e; e++)
      b[e].rank === CARD_ACE && (a = !0), b[e].rank === CARD_KING && (d = !0);
    return a && d ? !0 : !1;
  };
  this._isFlush = function () {
    return b[0].suit === b[1].suit &&
      b[0].suit === b[2].suit &&
      b[0].suit === b[3].suit &&
      b[0].suit === b[4].suit
      ? !0
      : !1;
  };
  this._isRoyalStraight = function () {
    return b[0].rank === CARD_TEN &&
      b[1].rank === CARD_JACK &&
      b[2].rank === CARD_QUEEN &&
      b[3].rank === CARD_KING &&
      b[4].rank === CARD_ACE
      ? !0
      : !1;
  };
  this._isStraight = function () {
    var a =
      b[0].rank + 1 === b[1].rank &&
      b[1].rank + 1 === b[2].rank &&
      b[2].rank + 1 === b[3].rank;
    return a && b[0].rank === CARD_TWO && b[4].rank === CARD_ACE
      ? !0
      : a && b[3].rank + 1 === b[4].rank
      ? !0
      : !1;
  };
  this.compareRank = function (a, b) {
    return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;
  };
  this.getWinnerComparingHands = function (a, b, d, h) {
    if (d === h)
      switch (d) {
        case STRAIGHT_FLUSH:
          return a[0].rank > b[0].rank
            ? "player"
            : a[0].rank < b[0].rank
            ? "dealer"
            : "standoff";
        case FOUR_OF_A_KIND:
          return a[1].rank > b[1].rank
            ? "player"
            : a[1].rank < b[1].rank
            ? "dealer"
            : "standoff";
        case FULL_HOUSE:
          return a[2].rank > b[2].rank
            ? "player"
            : a[2].rank < b[2].rank
            ? "dealer"
            : "standoff";
        case FLUSH:
          for (h = 0; h < b.length; h ++)
            if (a[h].rank !== b[h].rank)
              return (a[h].rank > b[h].rank) ? "player" : "dealer";
        case STRAIGHT:
          return a[4].rank > b[4].rank
            ? "player"
            : a[4].rank < b[4].rank
            ? "dealer"
            : "standoff";
        case THREE_OF_A_KIND:
          return a[2].rank > b[2].rank
            ? "player"
            : a[2].rank < b[2].rank
            ? "dealer"
            : "standoff";
        case TWO_PAIR:
          d = 0;
          for (h = a.length - 1; 0 < h; h--)
            if (a[h].rank === a[h - 1].rank) {
              d = a[h].rank;
              break;
            }
          aa = 0;
          for (h = b.length - 1; 0 < h; h--)
            if (b[h].rank === b[h - 1].rank) {
              aa = b[h].rank;
              break;
            }
          return d > aa ? "player" : d < aa ? "dealer" : a[0].rank > b [0].rank ? "player" : a[0].rank < b [0].rank ? "dealer" : a[3].rank > b [3].rank ? "palyer" : a[3].rank < b [3].rank ? "dealer" : "standoff";
        case ONE_PAIR:
          let playerHigh = '0';
          for (h = d = 0; h < a.length - 1; h++)
            if (a[h].rank === a[h + 1].rank) {
              d = a[h].rank;
              break;
            }
          for (h = aa = 0; h < b.length - 1; h++)
            if (b[h].rank === b[h + 1].rank) {
              aa = b[h].rank;``
              break;
            }
          for (h = 0; h < b.length - 1; h ++){
            if (a[h].rank !== b[h].rank)
              playerHigh = (a[h].rank > b[h].rank) ? '1' : '-1';
              break;
            }
          return d > aa ? "player" : d < aa ? "dealer" : playerHigh === '1' ? "player" : playerHigh === '-1' ? "dealer" : "standoff";
        case HIGH_CARD:
          for (h = 2; h < b.length; h ++)
            if (a[h].rank !== b[h].rank)
              return (a[h].rank > b[h].rank) ? "player" : "dealer";
        case NO_HAND:
          return "dealer_no_hand";
        default:
          return "standoff";
      }
    else return h === NO_HAND ? "dealer_no_hand" : d > h ? "dealer" : "player";
  };
}
function CAnimText(a, b, d) {
  var c, f, e;
  this._init = function (a, b) {
    e = new createjs.Container();
    e.visible = !1;
    e.x = a;
    e.y = b;
    h.addChild(e);
    var c = s_oSpriteLibrary.getSprite("win_bg"),
      d = createBitmap(c);
    e.addChild(d);
    f = new CTLText(
      e,
      5,
      5,
      c.width - 10,
      c.height - 10,
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
      !0,
      !1
    );
  };
  this.show = function (a, b, d) {
    c = a;
    f.refreshText(d);
    e.x = a.x;
    e.y = a.y;
    e.visible = !0;
    createjs.Tween.get(e).to({ x: b.x, y: b.y }, 1e3, createjs.Ease.elasticOut);
  };
  this.hide = function () {
    e.visible = !1;
    e.x = c.x;
    e.y = c.y;
  };
  this.isVisible = function () {
    return e.visible;
  };
  var h = d;
  this._init(a, b);
}
function CPaytablePanel(a, b, d) {
  var c, f, e;
  this._init = function (a, b) {
    c = a;
    f = b;
    e = new createjs.Container();
    e.x = c;
    e.y = f;
    h.addChild(e);
    var d = s_oSpriteLibrary.getSprite("paytable_bg"),
      n = createBitmap(d);
    e.addChild(n);
    for (var l = (n = ""), k = 0; k < PAYOUT_MULT.length; k++)
      (n += TEXT_EVALUATOR[k]),
        (l += PAYOUT_MULT[k] + ":1"),
        k < PAYOUT_MULT.length - 1 && ((n += "\n"), (l += "\n"));
    new CTLText(
      e,
      10,
      10,
      200,
      180,
      20,
      "left",
      "#ffde00",
      FONT_GAME_1,
      1,
      0,
      0,
      n,
      !0,
      !0,
      !0,
      !1
    );
    new CTLText(
      e,
      d.width - 90,
      10,
      85,
      180,
      20,
      "right",
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
  };
  this.refreshButtonPos = function (a, b) {
    e.x = c - a;
  };
  var h = d;
  this._init(a, b);
}
function CHelpCursor(a, b, d, c) {
  var f, e;
  this._init = function (a, b, d) {
    f = a;
    e = createBitmap(d);
    e.visible = !1;
    e.x = a;
    e.y = b;
    c.addChild(e);
  };
  this.show = function (a) {
    0 > a && (e.scaleX *= -1);
    this._move(a, f + 30 * a, 600);
    e.visible = !0;
  };
  this.hide = function () {
    createjs.Tween.removeTweens(e);
    e.x = f;
    e.visible = !1;
  };
  this._move = function (a, b, c) {
    var d = 0 < a ? createjs.Ease.cubicIn : createjs.Ease.cubicOut;
    createjs.Tween.get(e)
      .to({ x: b }, c, d)
      .call(function () {
        a *= -1;
        h._move(a, b + 15 * a, 400);
      });
  };
  this.isVisible = function () {
    return e.visible;
  };
  var h = this;
  this._init(a, b, d);
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
    c = this.makeText("Rule", "35px ", "#ff0", FONT_GAME_2, 200, 360);
    n.addChild(c);
    text = `The player antes, and is then dealt a five-card hand; the dealer is also dealt five cards of which only one is exposed. 
The player now either folds, losing his ante, or bets an additional amount equal to exactly twice the ante. 
The dealer then reveals his remaining four cards. If the dealer's hand is not Ace-King or better, 
the player is paid even money on the ante and nothing (i.e., a push) on the bet. 
If the dealer's hand is Ace-King or better it is said to "qualify" (for play against the player). 
In that case if the dealer's hand is better than the player's, the player's ante and bet are collected by the house. 
If the dealer's qualifying hand is worse than the player's hand, 
the player is paid even money on the ante and an amount on the bet according to the player's hand as the "Table" of game screen.
(Max payout for "Royal Flush" is $3000.)`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 390);
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
  setShadow: function (a, b, d, c) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, b, d, c));
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
function CTLText(a, b, d, c, f, e, h, n, r, m, w, l, k, A, p, v, D) {
  this._oContainer = a;
  this._x = b;
  this._y = d;
  this._iWidth = c;
  this._iHeight = f;
  this._bMultiline = v;
  this._iFontSize = this._iStartingFontSize = e;
  this._szAlign = h;
  this._szColor = n;
  this._szFont = r;
  this._iPaddingH = w;
  this._iPaddingV = l;
  this._bVerticalAlign = p;
  this._bFitText = A;
  this._bDebug = D;
  this._oDebugShape = null;
  this._fLineHeightFactor = m;
  this._oText = null;
  k && this.__createText(k);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var b = a.split("."),
    d = b.length;
  2 < d && (a = b[d - 2] + "." + b[d - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      b = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          b = !0;
          break;
        }
    } catch (d) {
      b = !0;
    }
    return { topFrame: a, err: b };
  },
  getBestPageUrl = function (a) {
    var b = a.topFrame,
      d = "";
    if (a.err)
      try {
        try {
          d = window.top.location.href;
        } catch (f) {
          var c = window.location.ancestorOrigins;
          d = c[c.length - 1];
        }
      } catch (f) {
        d = b.document.referrer;
      }
    else d = b.location.href;
    return d;
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
      d = 0;
    d < b.length;
    d++
  )
    if (b[d] === a) return !0;
  return !0;
}
