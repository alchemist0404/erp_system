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
      for (; ++a < e;) c(b[a], a, b);
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
  var d = a.toLowerCase(),
    g = window.document,
    e = g.documentElement;
  if (void 0 === window["inner" + a]) a = e["client" + a];
  else if (window["inner" + a] != e["client" + a]) {
    var b = g.createElement("body");
    b.id = "vpw-test-b";
    b.style.cssText = "overflow:scroll";
    var l = g.createElement("div");
    l.id = "vpw-test-d";
    l.style.cssText = "position:absolute;top:-1000px";
    l.innerHTML =
      "<style>@media(" +
      d +
      ":" +
      e["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      d +
      ":7px!important}}</style>";
    b.appendChild(l);
    e.insertBefore(b, g.head);
    a = 7 == l["offset" + a] ? e["client" + a] : window["inner" + a];
    e.removeChild(b);
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
function createBitmap(a, d, g) {
  var e = new createjs.Bitmap(a),
    b = new createjs.Shape();
  d && g
    ? b.graphics.beginFill("#fff").drawRect(-d / 2, -g / 2, d, g)
    : b.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  e.hitArea = b;
  return e;
}
function createSprite(a, d, g, e, b, l) {
  a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
  d = new createjs.Shape();
  d.graphics.beginFill("#000000").drawRect(-g, -e, b, l);
  a.hitArea = d;
  return a;
}
function roundDecimal(a, d) {
  var g = Math.pow(10, d);
  return Math.round(g * a) / g;
}
function randomFloatBetween(a, d, g) {
  "undefined" === typeof g && (g = 2);
  return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(g));
}
function shuffle(a) {
  for (var d = a.length, g, e; 0 !== d;)
    (e = Math.floor(Math.random() * d)),
      --d,
      (g = a[d]),
      (a[d] = a[e]),
      (a[e] = g);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var d = Math.floor(a / 60);
  a = parseFloat(a - 60 * d).toFixed(1);
  var g = "";
  g = 10 > d ? g + ("0" + d + ":") : g + (d + ":");
  return 10 > a ? g + ("0" + a) : g + a;
}
function degreesToRadians(a) {
  return (a * Math.PI) / 180;
}
function checkRectCollision(a, d) {
  var g = getBounds(a, 0.9);
  var e = getBounds(d, 0.98);
  return calculateIntersection(g, e);
}
function calculateIntersection(a, d) {
  var g, e, b, l;
  var k = a.x + (g = a.width / 2);
  var f = a.y + (e = a.height / 2);
  var h = d.x + (b = d.width / 2);
  var n = d.y + (l = d.height / 2);
  k = Math.abs(k - h) - (g + b);
  f = Math.abs(f - n) - (e + l);
  return 0 > k && 0 > f
    ? ((k = Math.min(Math.min(a.width, d.width), -k)),
      (f = Math.min(Math.min(a.height, d.height), -f)),
    {
      x: Math.max(a.x, d.x),
      y: Math.max(a.y, d.y),
      width: k,
      height: f,
      rect1: a,
      rect2: d,
    })
    : null;
}
function getBounds(a, d) {
  var g = { x: Infinity, y: Infinity, width: 0, height: 0 };
  if (a instanceof createjs.Container) {
    g.x2 = -Infinity;
    g.y2 = -Infinity;
    var e = a.children,
      b = e.length,
      l;
    for (l = 0; l < b; l++) {
      var k = getBounds(e[l], 1);
      k.x < g.x && (g.x = k.x);
      k.y < g.y && (g.y = k.y);
      k.x + k.width > g.x2 && (g.x2 = k.x + k.width);
      k.y + k.height > g.y2 && (g.y2 = k.y + k.height);
    }
    Infinity == g.x && (g.x = 0);
    Infinity == g.y && (g.y = 0);
    Infinity == g.x2 && (g.x2 = 0);
    Infinity == g.y2 && (g.y2 = 0);
    g.width = g.x2 - g.x;
    g.height = g.y2 - g.y;
    delete g.x2;
    delete g.y2;
  } else {
    if (a instanceof createjs.Bitmap) {
      b = a.sourceRect || a.image;
      l = b.width * d;
      var f = b.height * d;
    } else if (a instanceof createjs.Sprite)
      if (
        a.spriteSheet._frames &&
        a.spriteSheet._frames[a.currentFrame] &&
        a.spriteSheet._frames[a.currentFrame].image
      ) {
        b = a.spriteSheet.getFrame(a.currentFrame);
        l = b.rect.width;
        f = b.rect.height;
        e = b.regX;
        var h = b.regY;
      } else (g.x = a.x || 0), (g.y = a.y || 0);
    else (g.x = a.x || 0), (g.y = a.y || 0);
    e = e || 0;
    l = l || 0;
    h = h || 0;
    f = f || 0;
    g.regX = e;
    g.regY = h;
    b = a.localToGlobal(0 - e, 0 - h);
    k = a.localToGlobal(l - e, f - h);
    l = a.localToGlobal(l - e, 0 - h);
    e = a.localToGlobal(0 - e, f - h);
    g.x = Math.min(Math.min(Math.min(b.x, k.x), l.x), e.x);
    g.y = Math.min(Math.min(Math.min(b.y, k.y), l.y), e.y);
    g.width = Math.max(Math.max(Math.max(b.x, k.x), l.x), e.x) - g.x;
    g.height = Math.max(Math.max(Math.max(b.y, k.y), l.y), e.y) - g.y;
  }
  return g;
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
      var d = document.createEvent("MouseEvents");
      d.initEvent("click", !0, !0);
      a.dispatchEvent(d);
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
      : ((document.body.className = this[d] ? "hidden" : "visible"),
        "hidden" === document.body.className
          ? s_oMain.stopUpdate()
          : s_oMain.startUpdate());
  }
  var d = "hidden";
  d in document
    ? document.addEventListener("visibilitychange", a)
    : (d = "mozHidden") in document
      ? document.addEventListener("mozvisibilitychange", a)
      : (d = "webkitHidden") in document
        ? document.addEventListener("webkitvisibilitychange", a)
        : (d = "msHidden") in document
          ? document.addEventListener("msvisibilitychange", a)
          : "onfocusin" in document
            ? (document.onfocusin = document.onfocusout = a)
            : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a);
})();
function playSound(a, d, g) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(d),
      s_aSounds[a].loop(g),
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
    var d = window.location.search.substring(1).split("&"), g = 0;
    g < d.length;
    g++
  ) {
    var e = d[g].split("=");
    if (e[0] == a) return e[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    !1 !== screenfull.enabled &&
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
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var d = a.split("."),
    g = d.length;
  2 < g && (a = d[g - 2] + "." + d[g - 1]);
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
  } catch (g) {
    d = !0;
  }
  return { topFrame: a, err: d };
},
  getBestPageUrl = function (a) {
    var d = a.topFrame,
      g = "";
    if (a.err)
      try {
        try {
          g = window.top.location.href;
        } catch (b) {
          var e = window.location.ancestorOrigins;
          g = e[e.length - 1];
        }
      } catch (b) {
        g = d.document.referrer;
      }
    else g = d.location.href;
    return g;
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
    g = 0;
    g < d.length;
    g++
  )
    if (d[g] === a) return !0;
  return !1;
}
function CSpriteLibrary() {
  var a, d, g, e, b, l;
  this.init = function (k, f, h) {
    g = d = 0;
    e = k;
    b = f;
    l = h;
    a = {};
  };
  this.addSprite = function (b, f) {
    a.hasOwnProperty(b) || ((a[b] = { szPath: f, oSprite: new Image() }), d++);
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    b.call(l);
  };
  this._onSpriteLoaded = function () {
    e.call(l);
    ++g === d && this._onSpritesLoaded();
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
    return d;
  };
}
var CANVAS_WIDTH = 1280,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 30,
  EDGEBOARD_Y = 80,
  CANVAS_OFFSET_HEIGHT,
  CANVAS_OFFSET_WIDTH,
  FPS = 30,
  FPS_TIME = 1e3 / FPS,
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
  ON_CONTROLLER_END = 6,
  ON_CONTROLLER_REMOVE = 7,
  ON_CONTROLLER_ROLL = 8,
  COLOR_RED = "red",
  COLOR_BLACK = "black",
  COLOR_ZERO = "zero",
  TOTAL_MONEY,
  NUM_FICHE_VALUES = 5,
  NUMBERS_TO_BET = 38,
  NUM_FICHES = 5,
  MIN_BET,
  MAX_BET,
  WIN_OCCURRENCE,
  TIME_WAITING_BET,
  TIME_SHOW_WINNER,
  TIME_FICHES_MOV = 1500,
  DOUBLE_ZERO = 37,
  NUM_MASK_BALL_SPIN_FRAMES = 100,
  NUM_BALL_SPIN_FRAMES = 200,
  NUM_HAND_FOR_ADS,
  WIDTH_CELL_NUMBER,
  HEIGHT_CELL_NUMBER,
  ROW_HISTORY = 19,
  FONT1 = "arialbold",
  FONT2 = "plantagenet_cherokeeregular",
  FONT_GAME_1 = "arialbold",
  FONT_GAME_2 = "Digital-7",
  FONT_GAME_3 = "ariallight",
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS;
function CRouletteSettings() {
  var a, d, g, e, b;
  this._init = function () {
    var b = s_oSpriteLibrary.getSprite("hit_area_number");
    WIDTH_CELL_NUMBER = b.width;
    HEIGHT_CELL_NUMBER = b.height;
    this._initAttachFiches();
    a = [1, 5, 10, 25, 100];
    g = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    d = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    e = [[]];
    e[0][0] = 73;
    e[0][1] = 25;
    e[0][2] = 75;
    e[0][3] = 36;
    e[0][4] = 86;
    e[0][5] = 46;
    e[0][6] = 96;
    e[0][7] = 57;
    e[0][8] = 7;
    e[0][9] = 68;
    e[0][10] = 17;
    e[0][11] = 60;
    e[0][12] = 10;
    e[0][13] = 28;
    e[0][14] = 78;
    e[0][15] = 38;
    e[0][16] = 88;
    e[0][17] = 49;
    e[0][18] = 99;
    e[0][19] = 4;
    e[0][20] = 54;
    e[0][21] = 94;
    e[0][22] = 44;
    e[0][23] = 83;
    e[0][24] = 33;
    e[0][25] = 15;
    e[0][26] = 65;
    e[0][27] = 20;
    e[0][28] = 70;
    e[0][29] = 12;
    e[0][30] = 62;
    e[0][31] = 2;
    e[0][32] = 52;
    e[0][33] = 91;
    e[0][34] = 41;
    e[0][35] = 81;
    e[0][36] = 31;
    e[0][37] = 23;
  };
  this._initAttachFiches = function () {
    b = [];
    b.bet_0 = { x: 57, y: 177 };
    b.bet_37 = { x: 57, y: 67 };
    for (var a = 127, k = 196, f = 1; f < NUMBERS_TO_BET - 1; f++)
      (b["bet_" + f] = { x: a, y: k }),
        0 === f % 3
          ? ((a += WIDTH_CELL_NUMBER + 3), (k = 196))
          : (k -= HEIGHT_CELL_NUMBER + 3);
    b.bet_0_1 = { x: 97, y: 195 };
    b.bet_0_2 = { x: 97, y: 120 };
    b.bet_0_3 = { x: 97, y: 45 };
    a = 159;
    k = 194;
    for (var h = 1; 34 > h; h++)
      (b["bet_" + h + "_" + (h + 3)] = { x: a, y: k }),
        0 === h % 3
          ? ((a += WIDTH_CELL_NUMBER + 3), (k = 194))
          : (k -= HEIGHT_CELL_NUMBER + 3);
    a = 128;
    k = 157;
    for (h = f = 1; 25 > h; h++)
      (b["bet_" + f + "_" + (f + 1)] = { x: a, y: k }),
        0 === h % 2
          ? ((a += WIDTH_CELL_NUMBER + 3), (k = 157), (f += 2))
          : ((k -= HEIGHT_CELL_NUMBER + 3), f++);
    b.bet_0_1_2 = { x: 96, y: 158 };
    b.bet_2_3_37 = { x: 96, y: 84 };
    b.bet_0_2_37 = { x: 96, y: 124 };
    b.bet_0_1_2_3_37 = { x: 96, y: 232 };
    b.bet_0_37 = { x: 65, y: 122 };
    a = 128;
    k = 232;
    for (h = f = 1; 13 > h; h++)
      (b["bet_" + f + "_" + (f + 1) + "_" + (f + 2)] = { x: a, y: k }),
        (a += WIDTH_CELL_NUMBER + 3),
        (f += 3);
    b.bet_0_1_2_3 = { x: 96, y: 232 };
    k = a = 158;
    for (h = f = 1; 23 > h; h++)
      (b["bet_" + f + "_" + (f + 1) + "_" + (f + 3) + "_" + (f + 4)] = {
        x: a,
        y: k,
      }),
        0 === h % 2
          ? ((a += WIDTH_CELL_NUMBER + 3), (k = 157), (f += 2))
          : ((k -= HEIGHT_CELL_NUMBER + 3), f++);
    a = 158;
    k = 232;
    for (h = f = 1; 12 > h; h++)
      (b[
        "bet_" +
        f +
        "_" +
        (f + 1) +
        "_" +
        (f + 2) +
        "_" +
        (f + 3) +
        "_" +
        (f + 4) +
        "_" +
        (f + 5)
      ] = { x: a, y: k }),
        (f += 3),
        (a += WIDTH_CELL_NUMBER + 3);
    b.col1 = { x: 872, y: 194 };
    b.col2 = { x: 872, y: 120 };
    b.col3 = { x: 872, y: 46 };
    b.first12 = { x: 220, y: 289 };
    b.second12 = { x: 469, y: 289 };
    b.third12 = { x: 717, y: 289 };
    b.first18 = { x: 159, y: 400 };
    b.even = { x: 281, y: 400 };
    b.black = { x: 409, y: 400 };
    b.red = { x: 533, y: 400 };
    b.odd = { x: 656, y: 400 };
    b.second18 = { x: 778, y: 400 };
    b.oDealerWin = { x: CANVAS_WIDTH / 2, y: -232 };
    b.oReceiveWin = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT + 100 };
  };
  this.generateFichesPileByIndex = function (b) {
    var k = [],
      f = a.length - 1,
      h = a[f];
    do {
      var d = b % h;
      d = roundDecimal(d, 1);
      b = roundDecimal(b / h, 1);
      b = Math.floor(b);
      for (var c = 0; c < b; c++) k.push(this.getFicheIndexByValue(h));
      f--;
      h = a[f];
      b = d;
    } while (0 < d && -1 < f);
    return k;
  };
  this.getNumbersForButton = function (b) {
    switch (b) {
      case "col1":
        var a = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        break;
      case "col2":
        a = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        break;
      case "col3":
        a = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        break;
      case "first12":
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        break;
      case "second12":
        a = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        break;
      case "third12":
        a = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        break;
      case "first18":
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        break;
      case "second18":
        a = [
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
        ];
        break;
      case "even":
        a = [
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
          22,
          24,
          26,
          28,
          30,
          32,
          34,
          36,
        ];
        break;
      case "black":
        a = [
          2,
          4,
          6,
          8,
          10,
          11,
          13,
          15,
          17,
          20,
          22,
          24,
          26,
          28,
          29,
          31,
          33,
          35,
        ];
        break;
      case "red":
        a = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        break;
      case "odd":
        a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    }
    return a;
  };
  this.getBetMultiplierForButton = function (b) {
    switch (b) {
      case "oBetFirstRow":
        var a = 12;
        break;
      case "oBetSecondRow":
        a = 12;
        break;
      case "oBetThirdRow":
        a = 12;
        break;
      case "oBetFirst12":
        a = 12;
        break;
      case "oBetSecond12":
        a = 12;
        break;
      case "oBetThird12":
        a = 12;
        break;
      case "oBetFirst18":
        a = 18;
        break;
      case "oBetSecond18":
        a = 18;
        break;
      case "oBetEven":
        a = 18;
        break;
      case "oBetBlack":
        a = 18;
        break;
      case "oBetRed":
        a = 18;
        break;
      case "oBetOdd":
        a = 18;
        break;
      case "oBetFinalsBet":
        a = 4;
    }
    return a;
  };
  this.getBetWinForButton = function (b) {
    switch (b) {
      case "oBetFirstRow":
        var a = 3;
        break;
      case "oBetSecondRow":
        a = 3;
        break;
      case "oBetThirdRow":
        a = 3;
        break;
      case "oBetFirst12":
        a = 3;
        break;
      case "oBetSecond12":
        a = 3;
        break;
      case "oBetThird12":
        a = 3;
        break;
      case "oBetFirst18":
        a = 2;
        break;
      case "oBetSecond18":
        a = 2;
        break;
      case "oBetEven":
        a = 2;
        break;
      case "oBetBlack":
        a = 2;
        break;
      case "oBetRed":
        a = 2;
        break;
      case "oBetOdd":
        a = 2;
        break;
      case "oBetFinalsBet":
        a = 4;
    }
    return a;
  };
  this.getFicheValues = function (b) {
    return a[b];
  };
  this.getFicheIndexByValue = function (b) {
    for (var d = 0, f = 0; f < a.length; f++)
      if (b === a[f]) {
        d = f;
        break;
      }
    return d;
  };
  this.getColorNumber = function (b) {
    var a;
    for (a = 0; a < g.length; a++) if (g[a] === b) return COLOR_BLACK;
    for (a = 0; a < d.length; a++) if (d[a] === b) return COLOR_RED;
    return COLOR_ZERO;
  };
  this.getFrameForBallSpin = function (b, a) {
    return e[b][a];
  };
  this.getAttachOffset = function (a) {
    return b[a];
  };
  this._init();
}
function CFichesController(a) {
  var d, g, e, b, l, k;
  this._init = function (b) {
    k = b;
    this.reset();
  };
  this.reset = function () {
    this._removeAllFichesOnTable();
    d = [];
    g = [];
    e = [];
    b = [];
    l = [];
  };
  this.setFicheOnTable = function (a, h, d) {
    this.addFicheOnTable(a, h, d);
    b.push({ tag: "oBetSingle", num: 1 });
  };
  this.addFicheOnTable = function (b, a, k) {
    void 0 === d[a] && (d[a] = 0);
    var c = s_oGameSettings.getFicheValues(b);
    d[a] += c;
    d[a] = roundDecimal(d[a], 1);
    c = s_oGameSettings.generateFichesPileByIndex(d[a]);
    c.sort(function (a, b) {
      return a - b;
    });
    this._removeFichesPile(g[a]);
    g[a] = [];
    var h = s_oGameSettings.getAttachOffset(a),
      f = h.x;
    h = h.y;
    for (var l = 0; l < c.length; l++)
      k.push(this._attachFichesPile(c[l], a, f, h)), (h -= 5);
    e.push({ index: a, value: b });
  };
  this._attachFichesPile = function (a, b, d, c) {
    a = new CFiche(d, c, a, k);
    g[b].push(a);
    l.push(a);
    return a;
  };
  this.createPileForMultipleNumbers = function (a, h, d) {
    for (var c = 0; c < h.length; c++)
      this.addFicheOnTable(a, "bet_" + h[c], d);
    b.push({ tag: "oBetMultiple", num: h.length });
  };
  this._removeAllFichesOnTable = function () {
    if (l)
      for (var a = 0; a < l.length; a++)
        k.contains(l[a].getSprite()) && k.removeChild(l[a].getSprite());
  };
  this._removeFichesPile = function (a) {
    for (var b in a) k.removeChild(a[b].getSprite());
  };
  this.clearLastBet = function () {
    if (0 === b.length) return 0;
    for (var a = b.pop().num, h, k = 0; k < a; k++) {
      var c = e.pop();
      h = s_oGameSettings.getFicheValues(c.value);
      d[c.index] -= h;
      d[c.index] = roundDecimal(d[c.index], 1);
      var l = s_oGameSettings.generateFichesPileByIndex(d[c.index]);
      l.sort(function (a, b) {
        return a - b;
      });
      this._removeFichesPile(g[c.index]);
      g[c.index] = [];
      var w = s_oGameSettings.getAttachOffset(c.index),
        u = w.x;
      w = w.y;
      for (var t = 0; t < l.length; t++)
        this._attachFichesPile(l[t], c.index, u, w), (w -= 5);
    }
    return h * a;
  };
  this.clearAllBets = function () {
    for (var a = e.length, b = 0; b < a; b++) this.clearLastBet();
  };
  this._init(a);
}
TEXT_MONEY = "MONEY";
TEXT_CUR_BET = "CUR BET";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MIN_BET = "MIN BET";
TEXT_MAX_BET = "MAX BET";
TEXT_SPIN = "SPIN";
TEXT_EXIT = "EXIT";
TEXT_RECHARGE = "RECHARGE";
TEXT_NEIGHBORS = "NEIGHBORS";
TEXT_FINALSBET = "FINALS BET";
TEXT_REBET = "REBET";
TEXT_WIN = "WIN";
TEXT_HISTORY = "HISTORY";
TEXT_YOU_WIN = "YOU WON";
TEXT_YOU_LOSE = "YOU LOST";
TEXT_CURRENCY = "$";
TEXT_ERROR_NO_MONEY_MSG = "NOT ENOUGH MONEY FOR THIS BET!!";
TEXT_ERROR_MAX_BET_REACHED = "MAX BET REACHED!!";
TEXT_ERROR_MIN_BET = "YOU BET IS LOWER THAN MINIMUM BET!!";
TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
TEXT_RECHARGE_MSG = "PLEASE CLICK RECHARGE BUTTON TO PLAY AGAIN";
var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
  TEXT_LINK = "WWW.CODETHISLAB.COM";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_SHARE_1 = "You collected <strong>";
TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_3 = "My score is ";
TEXT_SHARE_4 = " points! Can you do better?";
function CPreloader() {
  var a, d, g, e, b, l;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.loadSprites();
    l = new createjs.Container();
    s_oStage.addChild(l);
  };
  this.unload = function () {
    l.removeAllChildren();
  };
  this._onImagesLoaded = function () { };
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    l.addChild(k);
    e = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
    e.x = CANVAS_WIDTH / 2 - 50;
    e.y = CANVAS_HEIGHT - 140;
    l.addChild(e);
    a = 476;
    b = new createjs.Shape();
    b.graphics
      .beginFill("rgba(255,0,0,0.01)")
      .drawRect(400, CANVAS_HEIGHT - 140, 1, 30);
    l.addChild(b);
    e.mask = b;
    d = new createjs.Text("0%", "30px " + FONT1, "#fff");
    d.x = CANVAS_WIDTH / 2;
    d.y = CANVAS_HEIGHT - 140;
    d.textAlign = "center";
    d.textBaseline = "middle";
    l.addChild(d);
    g = new createjs.Text("0%", "30px " + FONT2, "#fff");
    g.x = CANVAS_WIDTH + 200;
    g.y = CANVAS_HEIGHT + 140;
    g.textAlign = "center";
    g.textBaseline = "middle";
    l.addChild(g);
  };
  this.refreshLoader = function (e) {
    d.text = e + "%";
    g.text = e + "%";
    e = Math.floor((e * a) / 100);
    b.graphics.clear();
    b.graphics
      .beginFill("rgba(255,0,0,0.01)")
      .drawRect(400, CANVAS_HEIGHT - 140, e, 30);
  };
  this._init();
}
function CMain(a) {
  var d,
    g = 0,
    e = 0,
    b = STATE_LOADING,
    l,
    k;
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
    l = new CPreloader();
  };
  this.soundLoaded = function () {
    g++;
    g === e && (l.unload(), this.gotoMenu());
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
      filename: "wheel_sound",
      loop: !0,
      volume: 1,
      ingamename: "wheel_sound",
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
    e += a.length;
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
    s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("hit_area_0", "./sprites/hit_area_0.png");
    s_oSpriteLibrary.addSprite(
      "hit_area_color",
      "./sprites/hit_area_color.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_horizontal",
      "./sprites/hit_area_horizontal.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_number",
      "./sprites/hit_area_number.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_couple_horizontal",
      "./sprites/hit_area_couple_horizontal.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_couple_vertical",
      "./sprites/hit_area_couple_vertical.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_small",
      "./sprites/hit_area_small.png"
    );
    s_oSpriteLibrary.addSprite(
      "hit_area_horizontal_half",
      "./sprites/hit_area_horizontal_half.png"
    );
    s_oSpriteLibrary.addSprite("chip_box", "./sprites/chip_box.png");
    s_oSpriteLibrary.addSprite("but_bets", "./sprites/but_bets.png");
    s_oSpriteLibrary.addSprite("but_bg", "./sprites/but_bg.png");
    s_oSpriteLibrary.addSprite("but_clear_all", "./sprites/but_clear_all.png");
    s_oSpriteLibrary.addSprite(
      "but_clear_last",
      "./sprites/but_clear_last.png"
    );
    s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
    s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
    s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    s_oSpriteLibrary.addSprite("history_bg", "./sprites/history_bg.png");
    s_oSpriteLibrary.addSprite(
      "show_number_panel",
      "./sprites/show_number_panel.png"
    );
    s_oSpriteLibrary.addSprite(
      "show_number_bg",
      "./sprites/show_number_bg.png"
    );
    s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
    s_oSpriteLibrary.addSprite("enlight_0", "./sprites/enlight_0.png");
    s_oSpriteLibrary.addSprite("enlight_color", "./sprites/enlight_color.png");
    s_oSpriteLibrary.addSprite(
      "enlight_horizontal",
      "./sprites/enlight_horizontal.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_number",
      "./sprites/enlight_number.png"
    );
    s_oSpriteLibrary.addSprite(
      "enlight_horizontal_half",
      "./sprites/enlight_horizontal_half.png"
    );
    s_oSpriteLibrary.addSprite("select_fiche", "./sprites/select_fiche.png");
    s_oSpriteLibrary.addSprite("spin_but", "./sprites/spin_but.png");
    s_oSpriteLibrary.addSprite("placeholder", "./sprites/placeholder.png");
    s_oSpriteLibrary.addSprite("circle_red", "./sprites/circle_red.png");
    s_oSpriteLibrary.addSprite("circle_green", "./sprites/circle_green.png");
    s_oSpriteLibrary.addSprite("circle_black", "./sprites/circle_black.png");
    s_oSpriteLibrary.addSprite("final_bet_bg", "./sprites/final_bet_bg.png");
    s_oSpriteLibrary.addSprite("neighbor_bg", "./sprites/neighbor_bg.jpg");
    s_oSpriteLibrary.addSprite(
      "neighbor_enlight",
      "./sprites/neighbor_enlight.png"
    );
    s_oSpriteLibrary.addSprite(
      "hitarea_neighbor",
      "./sprites/hitarea_neighbor.png"
    );
    s_oSpriteLibrary.addSprite("bg_wheel", "./sprites/bg_wheel.jpg");
    s_oSpriteLibrary.addSprite("logo_game_0", "./sprites/logo_game_0.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("logo", "./sprites/logo.png");
    s_oSpriteLibrary.addSprite("rule_table", "./sprites/1.png");
    s_oSpriteLibrary.addSprite(
      "board_roulette",
      "./sprites/board_roulette.jpg"
    );
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++)
      s_oSpriteLibrary.addSprite(
        "wheel_handle_" + a,
        "./sprites/mask_ball_spin/wheel_handle_" + a + ".png"
      );
    for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++)
      s_oSpriteLibrary.addSprite(
        "wheel_numbers_" + a,
        "./sprites/wheel_anim/wheel_numbers_" + a + ".png"
      );
    e += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    g++;
    l.refreshLoader(Math.floor((g / e) * 100));
    g === e && (l.unload(), this.gotoMenu());
  };
  this._onAllImagesLoaded = function () { };
  this.onImageLoadError = function (a) { };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    d = !0;
  };
  this.gotoMenu = function () {
    new CMenu();
    b = STATE_MENU;
  };
  this.gotoGame = function () {
    k = new CGame(f);
    b = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    b = STATE_HELP;
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
    if (!1 !== d) {
      var f = new Date().getTime();
      s_iTimeElaps = f - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = f;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      b === STATE_GAME && k.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var f = a;
  ENABLE_FULLSCREEN = a.fullscreen;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
  SHOW_CREDITS = f.show_credits;
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
function CTextButton(a, d, g, e, b, l, k, f) {
  var h, n, c, q, w, u, t, p, m, r;
  this._init = function (a, b, d, f, e, g, k, l) {
    h = !1;
    q = [];
    w = [];
    r = createBitmap(d);
    n = d.width;
    c = d.height;
    var v = Math.ceil(k / 20);
    p = new createjs.Text(f, k + "px " + e, "#000000");
    var x = p.getBounds();
    p.textAlign = "center";
    p.textBaseline = "alphabetic";
    p.x = d.width / 2 + v;
    p.y = Math.floor(d.height / 2) + x.height / 3 + v;
    m = new createjs.Text(f, k + "px " + e, g);
    m.textAlign = "center";
    m.textBaseline = "alphabetic";
    m.x = d.width / 2;
    m.y = Math.floor(d.height / 2) + x.height / 3;
    t = new createjs.Container();
    t.x = a;
    t.y = b;
    t.regX = d.width / 2;
    t.regY = d.height / 2;
    s_bMobile || (t.cursor = "pointer");
    t.addChild(r, p, m);
    !1 !== l && s_oStage.addChild(t);
    this._initListener();
  };
  this.unload = function () {
    t.off("mousedown");
    t.off("pressup");
    s_oStage.removeChild(t);
  };
  this.setVisible = function (a) {
    t.visible = a;
  };
  this.setAlign = function (a) {
    m.textAlign = a;
    p.textAlign = a;
  };
  this.enable = function () {
    h = !1;
    r.filters = [];
    r.cache(0, 0, n, c);
  };
  this.disable = function () {
    h = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    r.filters = [new createjs.ColorMatrixFilter(a)];
    r.cache(0, 0, n, c);
  };
  this._initListener = function () {
    t.on("mousedown", this.buttonDown);
    t.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    w[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    q[a] = b;
    w[a] = c;
    u = d;
  };
  this.buttonRelease = function () {
    h ||
      (playSound("click", 1, !1),
        (t.scaleX = 1),
        (t.scaleY = 1),
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(w[ON_MOUSE_UP], u));
  };
  this.buttonDown = function () {
    h ||
      ((t.scaleX = 0.9),
        (t.scaleY = 0.9),
        q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(w[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    t.x = a;
    t.y = b;
  };
  this.changeText = function (a) {
    m.text = a;
    p.text = a;
  };
  this.setX = function (a) {
    t.x = a;
  };
  this.setY = function (a) {
    t.y = a;
  };
  this.getButtonImage = function () {
    return t;
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
  this._init(a, d, g, e, b, l, k, f);
  return this;
}
function CGfxButton(a, d, g, e) {
  var b, l, k, f, h, n, c;
  this._init = function (a, d, e) {
    b = !1;
    f = [];
    h = [];
    c = createBitmap(e);
    l = e.width;
    k = e.height;
    c.x = a;
    c.y = d;
    c.regX = e.width / 2;
    c.regY = e.height / 2;
    s_bMobile || (c.cursor = "pointer");
    q.addChild(c);
    this._initListener();
  };
  this.unload = function () {
    c.off("mousedown", this.buttonDown);
    c.off("pressup", this.buttonRelease);
    !1 === s_bMobile &&
      (c.off("rollover", this.mouseOver), c.off("rollout", this.mouseOut));
    q.removeChild(c);
  };
  this.setVisible = function (a) {
    c.visible = a;
  };
  this.enable = function () {
    b = !1;
    c.filters = [];
    c.cache(0, 0, l, k);
  };
  this.disable = function () {
    b = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    c.filters = [new createjs.ColorMatrixFilter(a)];
    c.cache(0, 0, l, k);
  };
  this._initListener = function () {
    c.on("mousedown", this.buttonDown);
    c.on("pressup", this.buttonRelease);
    !1 === s_bMobile &&
      (c.on("rollover", this.mouseOver), c.on("rollout", this.mouseOut));
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    f[a] = b;
    h[a] = c;
    n = d;
  };
  this.buttonRelease = function () {
    b ||
      (playSound("click", 1, !1),
        (c.scaleX = 1),
        (c.scaleY = 1),
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], n));
  };
  this.buttonDown = function () {
    b ||
      ((c.scaleX = 0.9),
        (c.scaleY = 0.9),
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], n));
  };
  this.mouseOver = function () {
    f[ON_MOUSE_OVER] && f[ON_MOUSE_OVER].call(h[ON_MOUSE_OVER], n);
  };
  this.mouseOut = function () {
    f[ON_MOUSE_OUT] && f[ON_MOUSE_OUT].call(h[ON_MOUSE_OUT], n);
  };
  this.setPosition = function (a, b) {
    c.x = a;
    c.y = b;
  };
  this.rotate = function (a) {
    c.rotation = a;
  };
  this.setX = function (a) {
    c.x = a;
  };
  this.setY = function (a) {
    c.y = a;
  };
  this.getButtonImage = function () {
    return c;
  };
  this.getX = function () {
    return c.x;
  };
  this.getY = function () {
    return c.y;
  };
  var q = e;
  this._init(a, d, g);
  return this;
}
function CFicheBut(a, d, g) {
  var e,
    b,
    l,
    k,
    f,
    h,
    n = [],
    c,
    q,
    w;
  this._init = function (a, d, g) {
    b = !1;
    q = new createjs.Container();
    s_oStage.addChild(q);
    e = !1;
    f = [];
    h = [];
    c = createBitmap(g);
    c.x = a;
    c.y = d;
    c.regX = g.width / 2;
    c.regY = g.height / 2;
    s_bMobile || (c.cursor = "pointer");
    q.addChild(c);
    l = g.width;
    k = g.height;
    g = s_oSpriteLibrary.getSprite("select_fiche");
    w = createBitmap(g);
    w.x = a - 2;
    w.y = d - 2;
    w.regX = g.width / 2;
    w.regY = g.height / 2;
    q.addChild(w);
    w.visible = e;
    this._initListener();
  };
  this.unload = function () {
    c.off("mousedown", this.buttonDown);
    c.off("pressup", this.buttonRelease);
    s_oStage.removeChild(q);
  };
  this.select = function () {
    e = !0;
    w.visible = e;
  };
  this.deselect = function () {
    e = !1;
    w.visible = e;
  };
  this.enable = function () {
    b = !1;
    c.filters = [];
    c.cache(0, 0, l, k);
  };
  this.disable = function () {
    b = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-90);
    c.filters = [new createjs.ColorMatrixFilter(a)];
    c.cache(0, 0, l, k);
  };
  this.setVisible = function (a) {
    c.visible = a;
  };
  this._initListener = function () {
    c.on("mousedown", this.buttonDown);
    c.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    f[a] = b;
    h[a] = c;
    n = d;
  };
  this.buttonRelease = function () {
    b ||
      (playSound("click", 1, !1),
        (c.scaleX = 1),
        (c.scaleY = 1),
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], n),
        (e = !e),
        (w.visible = e));
  };
  this.buttonDown = function () {
    b ||
      ((c.scaleX = 0.9),
        (c.scaleY = 0.9),
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], n));
  };
  this.setPosition = function (a, b) {
    c.x = a;
    c.y = b;
  };
  this.setX = function (a) {
    c.x = a;
  };
  this.setY = function (a) {
    c.y = a;
  };
  this.getButtonImage = function () {
    return c;
  };
  this.getX = function () {
    return c.x;
  };
  this.getY = function () {
    return c.y;
  };
  this._init(a, d, g);
}
function CBetTableButton(a, d, g, e, b, l) {
  var k, f, h, n, c, q, w, u, t;
  this._init = function (a, b, c, d, e, g) {
    k = g;
    w = d;
    f = [];
    h = [];
    t = e;
    n = createBitmap(c);
    n.x = a;
    n.y = b;
    n.regX = c.width / 2;
    n.regY = c.height / 2;
    s_bMobile || (n.cursor = "pointer");
    this._initListener();
    t.addChild(n);
    u = [];
    u = w.split("_");
    1 < u.length ? u.splice(0, 1) : this._assignNumber();
    this._assignBetMultiplier();
  };
  this.unload = function () {
    n.off("mousedown", this.buttonDown);
    n.off("pressup", this.buttonRelease);
    n.off("rollover", this.mouseOver);
    n.off("rollout", this.mouseOut);
    t.removeChild(n);
  };
  this.setVisible = function (a) {
    n.visible = a;
  };
  this._assignNumber = function () {
    u = s_oGameSettings.getNumbersForButton(w);
  };
  this._assignBetMultiplier = function () {
    switch (u.length) {
      case 0:
        c = s_oGameSettings.getBetMultiplierForButton(w);
        q = s_oGameSettings.getBetWinForButton(w);
        break;
      default:
        (c = u.length), (q = Math.floor(36 / u.length));
    }
  };
  this._initListener = function () {
    n.on("mousedown", this.buttonDown);
    n.on("pressup", this.buttonRelease);
    n.on("rollover", this.mouseOver);
    n.on("rollout", this.mouseOut);
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    f[a] = b;
    h[a] = c;
  };
  this.buttonRelease = function () {
    playSound("click", 1, !1);
    f[ON_MOUSE_UP] &&
      f[ON_MOUSE_UP].call(
        h[ON_MOUSE_UP],
        { numbers: u, bet_mult: c, bet_win: q, name: w, num_fiches: 1 },
        !1
      );
  };
  this.buttonDown = function () {
    f[ON_MOUSE_DOWN] &&
      f[ON_MOUSE_DOWN].call(
        h[ON_MOUSE_DOWN],
        { button: w, numbers: u, bet_mult: c, bet_win: q, num_fiches: 1 },
        !1
      );
  };
  this.mouseOver = function () {
    f[ON_MOUSE_OVER] &&
      (k
        ? f[ON_MOUSE_OVER].call(h[ON_MOUSE_OVER], { numbers: u, enlight: w })
        : f[ON_MOUSE_OVER].call(h[ON_MOUSE_OVER], { numbers: u }));
  };
  this.mouseOut = function () {
    f[ON_MOUSE_OUT] &&
      (k
        ? f[ON_MOUSE_OUT].call(h[ON_MOUSE_OUT], { numbers: u, enlight: w })
        : f[ON_MOUSE_OUT].call(h[ON_MOUSE_OUT], { numbers: u }));
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
  this.rotate = function (a) {
    n.rotation = a;
  };
  this.getButtonImage = function () {
    return n;
  };
  this.getX = function () {
    return n.x;
  };
  this.getY = function () {
    return n.y;
  };
  this._init(a, d, g, e, b, l);
}
function CToggle(a, d, g, e, b) {
  var l, k, f, h, n;
  this._init = function (a, b, d, e, g) {
    n = void 0 !== g ? g : s_oStage;
    k = [];
    f = [];
    g = new createjs.SpriteSheet({
      images: [d],
      frames: {
        width: d.width / 2,
        height: d.height,
        regX: d.width / 2 / 2,
        regY: d.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    l = e;
    h = createSprite(
      g,
      "state_" + l,
      d.width / 2 / 2,
      d.height / 2,
      d.width / 2,
      d.height
    );
    h.x = a;
    h.y = b;
    h.stop();
    s_bMobile || (h.cursor = "pointer");
    n.addChild(h);
    this._initListener();
  };
  this.unload = function () {
    h.off("mousedown", this.buttonDown);
    h.off("pressup", this.buttonRelease);
    n.removeChild(h);
  };
  this._initListener = function () {
    h.on("mousedown", this.buttonDown);
    h.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, d) {
    k[a] = b;
    f[a] = d;
  };
  this.setCursorType = function (a) {
    h.cursor = a;
  };
  this.setActive = function (a) {
    l = a;
    h.gotoAndStop("state_" + l);
  };
  this.buttonRelease = function () {
    h.scaleX = 1;
    h.scaleY = 1;
    playSound("click", 1, !1);
    l = !l;
    h.gotoAndStop("state_" + l);
    k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(f[ON_MOUSE_UP], l);
  };
  this.buttonDown = function () {
    h.scaleX = 0.9;
    h.scaleY = 0.9;
    k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    h.x = a;
    h.y = b;
  };
  this._init(a, d, g, e, b);
}
function CMenu() {
  var a,
    d,
    g,
    e,
    b,
    l,
    k,
    f,
    h,
    n,
    c = null,
    q = null,
    w,
    u,
    t,
    p,
    m,
    r;
  this._init = function () {
    w = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(w);
    var v = s_oSpriteLibrary.getSprite("but_play");
    e = CANVAS_WIDTH / 2;
    b = CANVAS_HEIGHT - 110;
    t = new CGfxButton(e, b, v, s_oStage);
    t.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (v = s_oSpriteLibrary.getSprite("audio_icon")),
        (f = CANVAS_WIDTH - v.width / 4 - 10),
        (h = v.height / 2 + 10),
        (m = new CToggle(f, h, v, s_bAudioActive, s_oStage)),
        m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    var x = s_oSpriteLibrary.getSprite("but_fullscreen");
    SHOW_CREDITS
      ? ((v = s_oSpriteLibrary.getSprite("but_credits")),
        (l = v.width / 2 + 10),
        (k = v.height / 2 + 10),
        (p = new CGfxButton(l, k, v, s_oStage)),
        p.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (d = l + x.width / 2 + 10),
        (g = x.height / 2 + 10))
      : ((d = v.width / 4 + 10), (g = v.height / 2 + 10));
    v = window.document;
    var A = v.documentElement;
    c =
      A.requestFullscreen ||
      A.mozRequestFullScreen ||
      A.webkitRequestFullScreen ||
      A.msRequestFullscreen;
    q =
      v.exitFullscreen ||
      v.mozCancelFullScreen ||
      v.webkitExitFullscreen ||
      v.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (c = !1);
    c &&
      screenfull.enabled &&
      ((n = new CToggle(d, g, x, s_bFullscreen, s_oStage)),
        n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    a = -60;
    u = createBitmap(s_oSpriteLibrary.getSprite("logo"));
    u.x = 450;
    u.y = a;
    s_oStage.addChild(u);
    r = new createjs.Shape();
    r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(r);
    createjs.Tween.get(r)
      .to({ alpha: 0 }, 400)
      .call(function () {
        r.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (e, x) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      m.setPosition(f - e, x + h);
    c && screenfull.enabled && n.setPosition(d + e, g + x);
    SHOW_CREDITS && p.setPosition(l + e, x + k);
    u.y = a + x;
    t.setPosition(b, b - x);
  };
  this.unload = function () {
    t.unload();
    t = null;
    SHOW_CREDITS && (p.unload(), (p = null));
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), (m = null);
    c && screenfull.enabled && n.unload();
    s_oStage.removeChild(w);
    w = null;
    s_oStage.removeChild(r);
    s_oMenu = r = null;
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
    new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    c && screenfull.enabled && n.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? q.call(window.document)
      : c.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var d = !1,
    g,
    e,
    b,
    l,
    k,
    f,
    h,
    n,
    c,
    q,
    w,
    u,
    t,
    p,
    m,
    r,
    v,
    x,
    A,
    C,
    z,
    D;
  this._init = function () {
    s_oTweenController = new CTweenController();
    s_oGameSettings = new CRouletteSettings();
    t = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(t);
    v = new CTableController();
    v.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
    v.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
    v.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
    f = 0;
    e = -1;
    b = NUMBERS_TO_BET;
    h = [];
    n = [];
    c = [];
    u = [];
    p = new CSeat();
    r = new CInterface();
    C = new CFinalBetPanel(816, 564);
    A = new CWheelAnim(0, 0);
    z = new CNeighborsPanel(p.getCredit());
    D = new CGameOver();
    x = new CMsgBox();
    q = [];
    l = 0;
    this._onSitDown();
    d = !0;
  };
  this.unload = function () {
    stopSound("wheel_sound");
    r.unload();
    v.unload();
    x.unload();
    C.unload();
    z.unload();
    D.unload();
    A.unload();
    s_oStage.removeAllChildren();
  };
  this._setState = function (a) {
    e = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        r.enableBetFiches(), r.setCurBet(0), r.hideBlock();
    }
  };
  this._resetTable = function () {
    l = 0;
    b = NUMBERS_TO_BET;
    h = [];
    n = [];
    c = [];
    null !== m && (v.getContainer().removeChild(m), (m = null));
    p.reset();
    z.reset();
    0.1 > p.getCredit()
      ? ((e = -1), r.hideBlock(), D.show())
      : (r.enableRebet(), this._setState(STATE_GAME_WAITING_FOR_BET));
    f++;
    f === NUM_HAND_FOR_ADS &&
      ((f = 0), $(s_oMain).trigger("show_interlevel_ad"));
  };
  this._startRouletteAnim = function () {
    r.disableBetFiches();
    k = this._generateWinLoss();
    q.push(k);
    l = 0;
  };
  this._startBallSpinAnim = function () {
    var a = p.getNumbersBetted()[k];
    a = roundDecimal(a.win, 2);
    A.startSpin(0, s_oGameSettings.getFrameForBallSpin(0, k), k, a);
  };
  this._generateWinLoss = function () {
    var a = p.getNumbersBetted(),
      c = p.getNumberSelected(),
      d = a[c[0][0]].win;
    B += p.getCurBet();
    B = parseFloat(B.toFixed(2));
    const random = new Random();
    let randomNumber = random.integer(1, 100);

    const response = $.ajax({
      url: `${home_url}/api/games/checkAmericanRoulleteGameBank`,
      type: 'POST',
      async: false,
      data: {
        customerId: customerid,
        gameId: gameid,
        bets_arr: JSON.stringify(a),
        bets_p: c,
        cur_bet: p.getCurBet()
      }
    })

    if(response.responseJSON.gameStatus == false) {
      alert("Sorry, Something went wrong, please login again");
      window.location.reload()
    }

    a = response.responseJSON.win_arr;
    c = response.responseJSON.win_pos;

    g = (WIN_OCCURRENCE * [].concat.apply([], c).length) / NUMBERS_TO_BET <= randomNumber ? !1 : !0;

    if (g) {
      do (e = Math.floor(Math.random() * a.length)), (d = a[e].win);
      while (0 === d);
    } else {
      c = [];
      for (e = 0; e < NUMBERS_TO_BET; e++) c.push(e);
      do {
        if (0 === c.length) {
          e = Math.floor(Math.random() * a.length);
          break;
        }
        e = Math.floor(Math.random() * c.length);
        d = a[e].win;
        c.splice(e, 1);
      } while (d >= p.getCurBet());
    }


    return (k = e);
  };
  this._rouletteAnimEnded = function () {
    l = 0;
    this._setState(STATE_GAME_SHOW_WINNER);
    stopSound("wheel_sound");
    var a = p.getNumbersBetted(),
      b = a[k],
      c = roundDecimal(b.win, 2);
    w = [];
    for (var d = 0; d < a.length; d++) {
      var e = a[d];
      if (0 < e.win)
        for (var f = 0; f < e.mc.length; f++) {
          w.push(e.mc[f]);
          var x = s_oGameSettings.getAttachOffset("oDealerWin");
          e.mc[f].setEndPoint(x.x, x.y);
        }
    }
    if (b.mc)
      for (a = 0; a < b.mc.length; a++)
        (x = s_oGameSettings.getAttachOffset("oReceiveWin")),
          b.mc[a].setEndPoint(x.x, x.y);
    r.refreshNumExtracted(q);
    m = createBitmap(s_oSpriteLibrary.getSprite("placeholder"));
    0 === k
      ? ((m.x = v.getEnlightX(k) + 26), (m.y = v.getEnlightY(k) + 34))
      : 37 === k
        ? ((m.x = v.getEnlightX(k) + 26), (m.y = v.getEnlightY(k) + 34))
        : ((m.x = v.getEnlightX(k) + 8), (m.y = v.getEnlightY(k) + 16));
    m.regX = 6;
    m.regY = 20;
    v.getContainer().addChild(m);
    p.showWin(c);
    0 < c && (B -= c);
    B = parseFloat(B.toFixed(2));
    
    $.ajax({
      url: `${home_url}/api/games/updateGameBankWithWinAmount`,
      type: 'POST',
      data: {
        customerId: customerid,
        gameId: gameid,
        win_amount: c,
        bet_amount: p.getCurBet(),
        player
      },
      success: (data) => {
        if(data.gameStatus == false) {
          alert("Sorry, Something went wrong, please try again");
          window.location.reload()
        }
      }
    })

    $(s_oMain).trigger("save_score", p.getCredit());
    r.refreshMoney(p.getCredit() - c, c);
  };
  this.showMsgBox = function (a) {
    x.show(a);
  };
  this.onRecharge = function () {
    p.recharge(TOTAL_MONEY);
    r.setMoney(p.getCredit());
    this._setState(STATE_GAME_WAITING_FOR_BET);
    D.hide();
    $(s_oMain).trigger("recharge");
  };
  this.onSpin = function () {
    if (z.isVisible()) z.onExit();
    0 !== p.getCurBet() &&
      (p.getCurBet() < MIN_BET
        ? (x.show(TEXT_ERROR_MIN_BET), r.enableBetFiches(), r.enableSpin(!0))
        : r.isBlockVisible() ||
        (r.showBlock(),
          z.hide(),
          C.hide(),
          r.enableSpin(!1),
          $(s_oMain).trigger("bet_placed", p.getCurBet()),
          this._startRouletteAnim(),
          this._startBallSpinAnim(),
          this._setState(STATE_GAME_SPINNING),
          playSound("wheel_sound", 1, !1)));
  };
  this._onSitDown = function () {
    this._setState(STATE_GAME_WAITING_FOR_BET);
    p.setInfo(TOTAL_MONEY, v.getContainer());
    r.setMoney(TOTAL_MONEY);
    r.setCurBet(0);
  };
  this._onShowBetOnTable = function (a, d) {
    var e = a.button,
      f = a.numbers;
    b -= a.bet_mult;
    h.push(a.bet_mult);
    var v = a.bet_win,
      g = a.num_fiches;
    if (d) var k = a.value;
    else
      (k = r.getCurFicheSelected()),
        0 === n.length && ((u = []), r.disableRebet()),
        u.push({
          button: a.button,
          numbers: a.numbers,
          bet_mult: a.bet_mult,
          bet_win: a.bet_win,
          num_fiches: a.num_fiches,
          neighbors: !1,
          value: k,
        });
    var l = s_oGameSettings.getFicheValues(k);
    n.push(v);
    c.push(g);
    var m = p.getCurBet();
    if (0 > p.getCredit() - l * g) x.show(TEXT_ERROR_NO_MONEY_MSG), z.reset();
    else if (m + l * g > MAX_BET) x.show(TEXT_ERROR_MAX_BET_REACHED), z.reset();
    else {
      switch (e) {
        case "oBetFinalsBet":
          p.createPileForMultipleNumbers(l, k, f, v, g);
          break;
        default:
          p.addFicheOnTable(l, k, f, v, e);
      }
      r.setMoney(p.getCredit());
      r.setCurBet(p.getCurBet());
      r.enableSpin(!0);
      playSound("chip", 1, !1);
    }
  };
  this._onShowBetOnTableFromNeighbors = function (a, d) {
    var e = a.numbers;
    b -= a.bet_mult;
    h.push(a.bet_mult);
    var f = a.bet_win,
      v = a.num_fiches;
    d ||
      (0 === n.length && ((u = []), r.disableRebet()),
        u.push({
          button: a.button,
          numbers: a.numbers,
          bet_mult: a.bet_mult,
          bet_win: a.bet_win,
          num_fiches: a.num_fiches,
          value: r.getCurFicheSelected(),
          num_clicked: a.num_clicked,
          neighbors: !0,
        }));
    n.push(f);
    c.push(v);
    var g = s_oGameSettings.getFicheValues(a.value);
    g * v > p.getCredit()
      ? (x.show(TEXT_ERROR_NO_MONEY_MSG), z.reset())
      : (p.createPileForMultipleNumbers(g, a.value, e, f, v),
        r.setMoney(p.getCredit()),
        r.setCurBet(p.getCurBet()),
        r.enableSpin(!0),
        playSound("chip", 1, !1));
  };
  this._onShowEnlight = function (a) {
    for (var b = a.numbers, c = 0; c < b.length; c++)
      v.enlight("oEnlight_" + b[c]);
    (a = a.enlight) && v.enlight("oEnlight_" + a);
  };
  this._onHideEnlight = function (a) {
    for (var b = a.numbers, c = 0; c < b.length; c++)
      v.enlightOff("oEnlight_" + b[c]);
    (a = a.enlight) && v.enlightOff("oEnlight_" + a);
  };
  this.onClearLastBet = function () {
    if (0 < h.length) {
      var a = h.pop();
      b += a;
    }
    0 === h.length && r.enableSpin(!1);
    p.clearLastBet(n.pop(), c.pop());
    r.setMoney(p.getCredit());
    r.setCurBet(p.getCurBet());
    z.clearLastBet();
    0 < u.length && u.pop();
  };
  this.onClearAllBets = function () {
    p.clearAllBets();
    r.setMoney(p.getCredit());
    r.setCurBet(p.getCurBet());
    r.enableSpin(!1);
    z.reset();
    u = [];
    b = NUMBERS_TO_BET;
  };
  this.onRebet = function () {
    for (var a = 0; a < u.length; a++)
      !0 === u[a].neighbors
        ? z.rebet(u[a].num_clicked)
        : this._onShowBetOnTable(u[a], !0);
  };
  this.onFinalBetShown = function () {
    C.isVisible() ? C.hide() : C.show();
  };
  this.onOpenNeighbors = function () {
    C.hide();
    z.showPanel(r.getCurFicheSelected(), p.getCredit(), p.getCurBet());
  };
  this.onExit = function () {
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("save_score", p.getCredit());
    $(s_oMain).trigger("share_event", p.getCredit());
    this.unload();
    s_oMain.gotoMenu();
  };
  this._updateWaitingBet = function () {
    z.isVisible() ||
      0 === TIME_WAITING_BET ||
      ((l += s_iTimeElaps), l > TIME_WAITING_BET && ((l = 0), this.onSpin()));
  };
  this._updateSpinning = function () { };
  this._updateShowWinner = function () {
    l += s_iTimeElaps;
    l > TIME_SHOW_WINNER &&
      ((l = 0), s_oGame._setState(STATE_DISTRIBUTE_FICHES));
  };
  this._updateDistributeFiches = function () {
    l += s_iTimeElaps;
    if (l > TIME_FICHES_MOV)
      (l = 0), playSound("fiche_collect", 1, !1), this._resetTable();
    else
      for (
        var a = s_oTweenController.easeInOutCubic(l, 0, 1, TIME_FICHES_MOV),
        b = 0;
        b < w.length;
        b++
      )
        w[b].updatePos(a);
  };
  this.update = function () {
    if (!1 !== d) {
      switch (e) {
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
          this._updateDistributeFiches();
      }
      A.isVisible() && A.update();
    }
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  TIME_WAITING_BET = a.time_bet;
  TIME_SHOW_WINNER = a.time_winner;
  WIN_OCCURRENCE = a.win_occurrence;
  NUM_HAND_FOR_ADS = a.num_hand_before_ads;
  var B = a.casino_cash;
  this._init();
}
var s_oGame, s_oTweenController, s_oGameSettings;
function CInterface() {
  var a,
    d,
    g,
    e,
    b,
    l,
    k,
    f,
    h,
    n,
    c,
    q = null,
    w = null,
    u,
    t,
    p,
    m,
    r,
    v,
    x,
    A,
    C,
    z,
    D,
    B;
  this._init = function () {
    var y = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    y.x = 191;
    y.y = 93;
    s_oStage.addChild(y);
    y = new createjs.Text(TEXT_MONEY, "16px " + FONT1, "#fff");
    y.textAlign = "center";
    y.x = 272;
    y.y = 105;
    s_oStage.addChild(y);
    u = new createjs.Text("", "16px " + FONT1, "#fff");
    u.textAlign = "center";
    u.x = 272;
    u.y = 125;
    s_oStage.addChild(u);
    y = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    y.x = 350;
    y.y = 93;
    s_oStage.addChild(y);
    y = new createjs.Text(TEXT_CUR_BET, "16px " + FONT1, "#fff");
    y.textAlign = "center";
    y.x = 432;
    y.y = 105;
    s_oStage.addChild(y);
    t = new createjs.Text("", "16px " + FONT1, "#fff");
    t.textAlign = "center";
    t.x = 432;
    t.y = 125;
    s_oStage.addChild(t);
    m = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
    m.x = 515;
    m.y = 100;
    s_oStage.addChild(m);
    p = new createjs.Text(
      TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET,
      "16px " + FONT1,
      "#fff"
    );
    p.textAlign = "center";
    p.lineHeight = 20;
    p.x = m.x + 75;
    p.y = m.y + 5;
    s_oStage.addChild(p);
    y = createBitmap(s_oSpriteLibrary.getSprite("logo_game_0"));
    y.x = 856;
    y.y = 612;
    s_oStage.addChild(y);
    r = new CTextButton(
      1107,
      641,
      s_oSpriteLibrary.getSprite("spin_but"),
      "  " + TEXT_SPIN,
      FONT1,
      "#fff",
      19,
      s_oStage
    );
    r.setVisible(!1);
    r.setAlign("left");
    r.addEventListener(ON_MOUSE_UP, this._onSpin, this);
    C = new CTextButton(
      350,
      641,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_NEIGHBORS,
      FONT1,
      "#fff",
      16
    );
    C.addEventListener(ON_MOUSE_UP, this._onNeighborsPanel, this);
    A = new CTextButton(
      508,
      641,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_FINALSBET,
      FONT1,
      "#fff",
      16
    );
    A.addEventListener(ON_MOUSE_UP, this._onFinalBetShow, this);
    z = new CGfxButton(
      1064,
      586,
      s_oSpriteLibrary.getSprite("but_rebet"),
      s_oStage
    );
    z.disable();
    z.addEventListener(ON_MOUSE_UP, this._onRebet, this);
    v = new CGfxButton(
      1064,
      526,
      s_oSpriteLibrary.getSprite("but_clear_last"),
      s_oStage
    );
    v.addEventListener(ON_MOUSE_UP, this._onClearLastBet, this);
    x = new CGfxButton(
      1064,
      466,
      s_oSpriteLibrary.getSprite("but_clear_all"),
      s_oStage
    );
    x.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
    this._initFichesBut();
    this.disableBetFiches();
    D = new CHistory(1095, 158, s_oStage);
    k = 0;
    f[k].select();
    y = new createjs.Graphics()
      .beginFill("rgba(0,0,0,0.01)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    B = new createjs.Shape(y);
    B.on("click", function () { });
    B.visible = !1;
    s_oStage.addChild(B);
    y = s_oSpriteLibrary.getSprite("but_exit");
    a = CANVAS_WIDTH - y.width / 2 - 10;
    d = y.height / 2 + 10;
    h = new CGfxButton(a, d, y, s_oStage);
    h.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (y = s_oSpriteLibrary.getSprite("audio_icon")),
        (b = a - y.width / 2 - 10),
        (l = y.height / 2 + 10),
        (n = new CToggle(b, l, y, s_bAudioActive, s_oStage)),
        n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    y = window.document;
    var E = y.documentElement;
    q =
      E.requestFullscreen ||
      E.mozRequestFullScreen ||
      E.webkitRequestFullScreen ||
      E.msRequestFullscreen;
    w =
      y.exitFullscreen ||
      y.mozCancelFullScreen ||
      y.webkitExitFullscreen ||
      y.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (q = !1);
    q &&
      screenfull.enabled &&
      ((y = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (g = y.width / 4 + 10),
        (e = y.height / 2 + 10),
        (c = new CToggle(g, e, y, s_bFullscreen, s_oStage)),
        c.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    h.unload();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || n.unload();
    q && screenfull.enabled && c.unload();
    r.unload();
    v.unload();
    x.unload();
    A.unload();
    C.unload();
    z.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (f, v) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      n.setPosition(b - f, l + v);
    q && screenfull.enabled && c.setPosition(g + f, e + v);
    h.setPosition(a - f, d + v);
  };
  this.hideBlock = function () {
    B.visible = !1;
  };
  this.showBlock = function () {
    B.visible = !0;
  };
  this.enableBetFiches = function () {
    for (var a = 0; a < NUM_FICHE_VALUES; a++) f[a].enable();
    v.enable();
    x.enable();
    A.enable();
    C.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHE_VALUES; a++) f[a].disable();
    v.disable();
    x.disable();
    A.disable();
    C.disable();
    z.disable();
  };
  this.enableRebet = function () {
    z.enable();
  };
  this.disableRebet = function () {
    z.disable();
  };
  this.deselectAllFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) f[a].deselect();
  };
  this.enableSpin = function (a) {
    r.setVisible(a);
  };
  this._initFichesBut = function () {
    var a = createBitmap(s_oSpriteLibrary.getSprite("chip_box"));
    a.x = 102;
    a.y = 100;
    s_oStage.addChild(a);
    a = 150;
    f = [];
    for (var b = 0; b < NUM_FICHES; b++) {
      var c = s_oSpriteLibrary.getSprite("fiche_" + b);
      f[b] = new CFicheBut(142, a, c);
      f[b].addEventListenerWithParams(
        ON_MOUSE_UP,
        this._onFicheSelected,
        this,
        [b]
      );
      a += c.height + 25;
    }
  };
  this.refreshTime = function (a) {
    formatTime(a);
  };
  this.setMoney = function (a) {
    u.text = a.toFixed(2) + TEXT_CURRENCY;
  };
  this.setCurBet = function (a) {
    t.text = a.toFixed(2) + TEXT_CURRENCY;
  };
  this.refreshMoney = function (a, b) {
    new CRollingTextController(
      u,
      null,
      a,
      parseFloat(b),
      1e3,
      EASE_LINEAR,
      TEXT_CURRENCY
    );
  };
  this.refreshNumExtracted = function (a) {
    var b = a.length - 1,
      c = -1;
    a.length > ROW_HISTORY - 1 && (c = b - ROW_HISTORY);
    for (var d = 0; b > c; b--) {
      switch (s_oGameSettings.getColorNumber(a[b])) {
        case COLOR_BLACK:
          D.showBlack(d, a[b]);
          break;
        case COLOR_RED:
          D.showRed(d, a[b]);
          break;
        case COLOR_ZERO:
          D.showGreen(d, a[b]);
      }
      d++;
    }
  };
  this.gameOver = function () { };
  this._onBetRelease = function (a) {
    var b = a.numbers,
      c = a.bet_mult,
      d = a.bet_win;
    null !== b &&
      s_oGame._onShowBetOnTable(
        {
          button: a.name,
          numbers: b,
          bet_mult: c,
          bet_win: d,
          num_fiches: a.num_fiches,
        },
        !1
      );
  };
  this._onFicheSelected = function (a) {
    playSound("fiche_collect", 1, !1);
    this.deselectAllFiches();
    a = a[0];
    for (var b = 0; b < NUM_FICHE_VALUES; b++) b === a && (k = b);
  };
  this._onSpin = function () {
    this.disableBetFiches();
    this.enableSpin(!1);
    s_oGame.onSpin();
  };
  this._onClearLastBet = function () {
    s_oGame.onClearLastBet();
  };
  this._onClearAllBet = function () {
    s_oGame.onClearAllBets();
  };
  this._onFinalBetShow = function () {
    s_oGame.onFinalBetShown();
  };
  this._onNeighborsPanel = function () {
    s_oGame.onOpenNeighbors();
  };
  this._onRebet = function () {
    z.disable();
    s_oGame.onRebet();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    q && screenfull.enabled && c.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? w.call(window.document)
      : q.call(window.document.documentElement);
    sizeHandler();
  };
  this.getCurFicheSelected = function () {
    return k;
  };
  this.isBlockVisible = function () {
    return B.visible;
  };
  s_oInterface = this;
  this._init();
  return this;
}
var s_oInterface = null;
function CMsgBox() {
  var a, d, g, e;
  this._init = function () {
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    a.on("click", function () { });
    g = new createjs.Text("", "24px " + FONT1, "#000");
    g.x = CANVAS_WIDTH / 2 + 2;
    g.y = CANVAS_HEIGHT / 2 - 28;
    g.textAlign = "center";
    g.lineWidth = 300;
    d = new createjs.Text("", "24px " + FONT1, "#ffffff");
    d.x = CANVAS_WIDTH / 2;
    d.y = CANVAS_HEIGHT / 2 - 30;
    d.textAlign = "center";
    d.lineWidth = 300;
    e = new createjs.Container();
    e.alpha = 0;
    e.visible = !1;
    e.addChild(a, g, d);
    s_oStage.addChild(e);
  };
  this.unload = function () {
    a.off("click", function () { });
  };
  this.show = function (a) {
    g.text = a;
    d.text = a;
    e.visible = !0;
    var b = this;
    createjs.Tween.get(e).to({ alpha: 1 }, 500);
    setTimeout(function () {
      b._onExit();
    }, 2e3);
  };
  this._onExit = function () {
    e.visible && (e.off("mousedown"), (e.visible = !1));
  };
  this._init();
  return this;
}
function CTweenController() {
  this.tweenValue = function (a, d, g) {
    return a + g * (d - a);
  };
  this.easeLinear = function (a, d, g, e) {
    return (g * a) / e + d;
  };
  this.easeInCubic = function (a, d, g, e) {
    e = (a /= e) * a * a;
    return d + g * e;
  };
  this.easeBackInQuart = function (a, d, g, e) {
    e = (a /= e) * a;
    return d + g * (2 * e * e + 2 * e * a + -3 * e);
  };
  this.easeInBack = function (a, d, g, e) {
    return g * (a /= e) * a * (2.70158 * a - 1.70158) + d;
  };
  this.easeOutCubic = function (a, d, g, e) {
    return g * ((a = a / e - 1) * a * a + 1) + d;
  };
  this.easeInOutCubic = function (a, d, g, e) {
    return 1 > (a /= e / 2)
      ? (g / 2) * a * a * a + d
      : (g / 2) * ((a -= 2) * a * a + 2) + d;
  };
  this.tweenVectors = function (a, d, g, e) {
    e.x = a.x + g * (d.x - a.x);
    e.y = a.y + g * (d.y - a.y);
    return e;
  };
}
function CSeat() {
  var a, d, g, e, b, l;
  this._init = function () {
    this.reset();
  };
  this.reset = function () {
    g = [];
    e = [];
    b = [];
    this.resetNumberWins();
    l && l.reset();
    a = 0;
  };
  this.setInfo = function (b, e) {
    d = b;
    a = 0;
    l = new CFichesController(e);
  };
  this.resetNumberWins = function () {
    for (var a = 0; a < NUMBERS_TO_BET; a++) g[a] = { win: 0, mc: null };
    b = [];
  };
  this.setFicheBetted = function (k, f, h, l, c) {
    for (var n = [], w = [], u = 0; u < f.length; u++) {
      var t = (parseFloat(g[f[u]].win) + h * k * c).toFixed(1);
      g[f[u]] = { win: t, mc: l };
      n.push(h * k * c);
      w.push(l);
    }
    b.push({ win: n, mc: l });
    e.push(f);
    k = parseFloat((k * c).toFixed(2));
    a += k;
    a = parseFloat(a.toFixed(2));
    d -= k;
    d = roundDecimal(d, 1);
  };
  this.createPileForMultipleNumbers = function (a, b, d, e, c) {
    var f = [];
    l.createPileForMultipleNumbers(b, d, f);
    this.setFicheBetted(a, d, e, f, c);
  };
  this.addFicheOnTable = function (a, b, d, e, c) {
    var f = [];
    l.setFicheOnTable(b, c, f);
    this.setFicheBetted(a, d, e, f, 1);
  };
  this.clearLastBet = function () {
    if (0 !== e.length) {
      var k = l.clearLastBet();
      d += k;
      d = roundDecimal(d, 1);
      a -= k;
      k = e.pop();
      for (var f = b.pop().win, h = 0; h < k.length; h++)
        g[k[h]] =
          0 < b.length
            ? { win: g[k[h]].win - f[h], mc: b[b.length - 1].mc }
            : { win: g[k[h]].win - f[h], mc: null };
    }
  };
  this.clearAllBets = function () {
    this.resetNumberWins();
    l.clearAllBets();
    d += a;
    d = roundDecimal(d, 1);
    a = 0;
  };
  this.showWin = function (a) {
    d += a;
    d = roundDecimal(d, 1);
  };
  this.recharge = function (a) {
    d = a;
  };
  this.getCurBet = function () {
    return a;
  };
  this.getCredit = function () {
    return d;
  };
  this.getNumbersBetted = function () {
    return g;
  };
  this.getNumberSelected = function () {
    return e;
  };
  this._init();
}
function CTableController() {
  var a, d, g, e;
  this._init = function () {
    d = new createjs.Container();
    d.x = 184;
    d.y = 150;
    s_oStage.addChild(d);
    var a = createBitmap(s_oSpriteLibrary.getSprite("board_roulette"));
    d.addChild(a);
    this._initEnlights();
    a = new CBetTableButton(
      221,
      289,
      s_oSpriteLibrary.getSprite("hit_area_horizontal"),
      "first12",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      470,
      289,
      s_oSpriteLibrary.getSprite("hit_area_horizontal"),
      "second12",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      717,
      289,
      s_oSpriteLibrary.getSprite("hit_area_horizontal"),
      "third12",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      50,
      176,
      s_oSpriteLibrary.getSprite("hit_area_0"),
      "bet_0",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      50,
      64,
      s_oSpriteLibrary.getSprite("hit_area_0"),
      "bet_37",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    for (
      var l = s_oSpriteLibrary.getSprite("hit_area_number"),
      k = 128,
      f = 194,
      h = 1;
      h < NUMBERS_TO_BET;
      h++
    )
      (a = new CBetTableButton(k, f, l, "bet_" + h, d, !1)),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        0 === h % 3
          ? ((k += WIDTH_CELL_NUMBER + 3), (f = 194))
          : (f -= HEIGHT_CELL_NUMBER + 3);
    // a = new CBetTableButton(
    //   97,
    //   195,
    //   s_oSpriteLibrary.getSprite("hit_area_couple_vertical"),
    //   "bet_0_1",
    //   d,
    //   !1
    // );
    // a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    // !1 === s_bMobile &&
    //   (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
    //   a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    // a = new CBetTableButton(
    //   97,
    //   120,
    //   s_oSpriteLibrary.getSprite("hit_area_couple_vertical"),
    //   "bet_0_2_37",
    //   d,
    //   !1
    // );
    // a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    // !1 === s_bMobile &&
    //   (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
    //   a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    // a = new CBetTableButton(
    //   97,
    //   45,
    //   s_oSpriteLibrary.getSprite("hit_area_couple_vertical"),
    //   "bet_3_37",
    //   d,
    //   !1
    // );
    // a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    // !1 === s_bMobile &&
    //   (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
    //   a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    k = 159;
    f = 194;
    for (var n = 1; 34 > n; n++)
      (a = new CBetTableButton(
        k,
        f,
        s_oSpriteLibrary.getSprite("hit_area_couple_vertical"),
        "bet_" + n + "_" + (n + 3),
        d,
        !1
      )),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        0 === n % 3
          ? ((k += WIDTH_CELL_NUMBER + 3), (f = 194))
          : (f -= HEIGHT_CELL_NUMBER + 3);
    k = 128;
    f = 157;
    for (n = h = 1; 25 > n; n++)
      (a = new CBetTableButton(
        k,
        f,
        s_oSpriteLibrary.getSprite("hit_area_couple_horizontal"),
        "bet_" + h + "_" + (h + 1),
        d,
        !1
      )),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        0 === n % 2
          ? ((k += WIDTH_CELL_NUMBER + 3), (f = 157), (h += 2))
          : ((f -= HEIGHT_CELL_NUMBER + 3), h++);
    a = new CBetTableButton(
      96,
      158,
      s_oSpriteLibrary.getSprite("hit_area_small"),
      "bet_0_1_2",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      96,
      84,
      s_oSpriteLibrary.getSprite("hit_area_small"),
      "bet_2_3_37",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    k = 128;
    f = 232;
    h = 1;
    l = s_oSpriteLibrary.getSprite("hit_area_couple_horizontal");
    for (n = 1; 13 > n; n++)
      (a = new CBetTableButton(
        k,
        f,
        l,
        "bet_" + h + "_" + (h + 1) + "_" + (h + 2),
        d,
        !1
      )),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (k += WIDTH_CELL_NUMBER + 3),
        (h += 3);
    a = new CBetTableButton(
      96,
      232,
      s_oSpriteLibrary.getSprite("hit_area_small"),
      "bet_0_1_2_3_37",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton( // 0 and double 0 splite button.
      60,
      119,
      s_oSpriteLibrary.getSprite("hit_area_couple_horizontal"),
      "bet_0_37",
      d,
      !1
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    f = k = 158;
    for (n = h = 1; 23 > n; n++)
      (a = new CBetTableButton(
        k,
        f,
        s_oSpriteLibrary.getSprite("hit_area_small"),
        "bet_" + h + "_" + (h + 1) + "_" + (h + 3) + "_" + (h + 4),
        d,
        !1
      )),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        0 === n % 2
          ? ((k += WIDTH_CELL_NUMBER + 3), (f = 157), (h += 2))
          : ((f -= HEIGHT_CELL_NUMBER + 3), h++);
    k = 158;
    f = 232;
    h = 1;
    l = s_oSpriteLibrary.getSprite("hit_area_small");
    for (n = 1; 12 > n; n++)
      (a = new CBetTableButton(
        k,
        f,
        l,
        "bet_" +
        h +
        "_" +
        (h + 1) +
        "_" +
        (h + 2) +
        "_" +
        (h + 3) +
        "_" +
        (h + 4) +
        "_" +
        (h + 5),
        d,
        !1
      )),
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
        (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (h += 3),
        (k += WIDTH_CELL_NUMBER + 3);
    a = new CBetTableButton(
      872,
      194,
      s_oSpriteLibrary.getSprite("hit_area_number"),
      "col1",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      872,
      120,
      s_oSpriteLibrary.getSprite("hit_area_number"),
      "col2",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      872,
      46,
      s_oSpriteLibrary.getSprite("hit_area_number"),
      "col3",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      159,
      400,
      s_oSpriteLibrary.getSprite("hit_area_horizontal_half"),
      "first18",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      281,
      400,
      s_oSpriteLibrary.getSprite("hit_area_horizontal_half"),
      "even",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      408,
      400,
      s_oSpriteLibrary.getSprite("hit_area_color"),
      "black",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      533,
      400,
      s_oSpriteLibrary.getSprite("hit_area_color"),
      "red",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      656,
      400,
      s_oSpriteLibrary.getSprite("hit_area_horizontal_half"),
      "odd",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a = new CBetTableButton(
      778,
      400,
      s_oSpriteLibrary.getSprite("hit_area_horizontal_half"),
      "second18",
      d,
      !0
    );
    a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
        a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    g = [];
    e = [];
  };
  this._initEnlights = function () {
    a = [];
    var b = new CEnlight(5, 121, s_oSpriteLibrary.getSprite("enlight_0"), d);
    a.oEnlight_0 = b;
    b = new CEnlight(5, 10, s_oSpriteLibrary.getSprite("enlight_0"), d);
    a.oEnlight_37 = b;
    for (
      var e = 98,
      g = 159,
      f = s_oSpriteLibrary.getSprite("enlight_number"),
      h = 0;
      36 > h;
      h++
    )
      (b = new CEnlight(e, g, f, d)),
        (a["oEnlight_" + (h + 1)] = b),
        0 === (h + 1) % 3
          ? ((e += f.width + 3), (g = 159))
          : (g -= f.height + 3);
    b = new CEnlight(842, 159, s_oSpriteLibrary.getSprite("enlight_number"), d);
    a.oEnlight_col1 = b;
    b = new CEnlight(842, 85, s_oSpriteLibrary.getSprite("enlight_number"), d);
    a.oEnlight_col2 = b;
    b = new CEnlight(842, 11, s_oSpriteLibrary.getSprite("enlight_number"), d);
    a.oEnlight_col3 = b;
    b = new CEnlight(
      98,
      234,
      s_oSpriteLibrary.getSprite("enlight_horizontal"),
      d
    );
    a.oEnlight_first12 = b;
    b = new CEnlight(
      347,
      234,
      s_oSpriteLibrary.getSprite("enlight_horizontal"),
      d
    );
    a.oEnlight_second12 = b;
    b = new CEnlight(
      595,
      234,
      s_oSpriteLibrary.getSprite("enlight_horizontal"),
      d
    );
    a.oEnlight_third12 = b;
    b = new CEnlight(
      98,
      345,
      s_oSpriteLibrary.getSprite("enlight_horizontal_half"),
      d
    );
    a.oEnlight_first18 = b;
    b = new CEnlight(
      220,
      345,
      s_oSpriteLibrary.getSprite("enlight_horizontal_half"),
      d
    );
    a.oEnlight_even = b;
    b = new CEnlight(347, 348, s_oSpriteLibrary.getSprite("enlight_color"), d);
    a.oEnlight_black = b;
    b = new CEnlight(470, 348, s_oSpriteLibrary.getSprite("enlight_color"), d);
    a.oEnlight_red = b;
    b = new CEnlight(
      595,
      345,
      s_oSpriteLibrary.getSprite("enlight_horizontal_half"),
      d
    );
    a.oEnlight_odd = b;
    b = new CEnlight(
      717,
      345,
      s_oSpriteLibrary.getSprite("enlight_horizontal_half"),
      d
    );
    a.oEnlight_second18 = b;
  };
  this.unload = function () {
    for (var a = 0; a < d.getNumChildren(); a++) {
      var e = d.getChildAt(a);
      e instanceof CBetTableButton && e.unload();
    }
  };
  this.addEventListener = function (a, d, k) {
    g[a] = d;
    e[a] = k;
  };
  this._onBetPress = function (a) {
    null !== a.numbers &&
      g[ON_SHOW_BET_ON_TABLE] &&
      g[ON_SHOW_BET_ON_TABLE].call(e[ON_SHOW_BET_ON_TABLE], a, !1);
  };
  this._onBetNumberOver = function (a) {
    null !== a.numbers &&
      g[ON_SHOW_ENLIGHT] &&
      g[ON_SHOW_ENLIGHT].call(e[ON_SHOW_ENLIGHT], a);
  };
  this._onBetNumberOut = function (a) {
    null !== a.numbers &&
      g[ON_HIDE_ENLIGHT] &&
      g[ON_HIDE_ENLIGHT].call(e[ON_HIDE_ENLIGHT], a);
  };
  this.enlight = function (b) {
    a[b].show();
  };
  this.enlightOff = function (b) {
    a[b].hide();
  };
  this.getEnlightX = function (b) {
    return a["oEnlight_" + b].getX();
  };
  this.getEnlightY = function (b) {
    return a["oEnlight_" + b].getY();
  };
  this.getContainer = function () {
    return d;
  };
  this.getX = function () {
    return d.x;
  };
  this.getY = function () {
    return d.x;
  };
  this._init();
}
function CEnlight(a, d, g, e) {
  var b;
  this._init = function (a, d, e, g) {
    b = createBitmap(e);
    b.x = a;
    b.y = d;
    b.visible = !1;
    g.addChild(b);
  };
  this.show = function () {
    b.visible = !0;
  };
  this.hide = function () {
    b.visible = !1;
  };
  this.rotate = function (a) {
    b.rotation = a;
  };
  this.getX = function () {
    return b.x;
  };
  this.getY = function () {
    return b.y;
  };
  this._init(a, d, g, e);
}
function CFiche(a, d, g, e, b) {
  var l, k, f, h, n;
  this._init = function (a, b, d, e, f) {
    n = e;
    e = s_oSpriteLibrary.getSprite("fiche_" + d);
    h = createBitmap(e);
    h.x = a;
    h.y = b;
    h.regX = e.width / 2;
    h.regY = e.height / 2;
    f ? ((h.scaleX = f), (h.scaleY = f)) : ((h.scaleX = 0.8), (h.scaleY = 0.8));
    l = d;
    n.addChild(h);
  };
  this.setEndPoint = function (a, b) {
    k = new createjs.Point(h.x, h.y);
    f = new createjs.Point(a, b);
  };
  this.updatePos = function (a) {
    var b = new createjs.Point();
    b = s_oTweenController.tweenVectors(k, f, a, b);
    h.x = b.x;
    h.y = b.y;
  };
  this.getSprite = function () {
    return h;
  };
  this.getValue = function () {
    return l;
  };
  this._init(a, d, g, e, b);
}
function CHistoryRow(a, d, g) {
  var e, b, l, k, f, h, n;
  this._init = function (a, d) {
    n = new createjs.Container();
    n.x = a;
    n.y = d;
    g.addChild(n);
    e = createBitmap(s_oSpriteLibrary.getSprite("circle_red"));
    e.visible = !1;
    n.addChild(e);
    b = createBitmap(s_oSpriteLibrary.getSprite("circle_green"));
    b.visible = !1;
    b.x = 24;
    n.addChild(b);
    l = createBitmap(s_oSpriteLibrary.getSprite("circle_black"));
    l.visible = !1;
    l.x = 48;
    n.addChild(l);
    k = new createjs.Text("a", "12px " + FONT1, "#fff");
    k.x = e.x + 10;
    k.y = e.y + 4;
    k.visible = !1;
    k.textAlign = "center";
    n.addChild(k);
    f = new createjs.Text("a", "12px " + FONT1, "#fff");
    f.x = b.x + 10;
    f.y = b.y + 4;
    f.visible = !1;
    f.textAlign = "center";
    n.addChild(f);
    h = new createjs.Text("a", "12px " + FONT1, "#fff");
    h.x = l.x + 10;
    h.y = l.y + 4;
    h.visible = !1;
    h.textAlign = "center";
    n.addChild(h);
  };
  this.showBlack = function (a) {
    h.text = a;
    e.visible = !1;
    k.visible = !1;
    b.visible = !1;
    f.visible = !1;
    l.visible = !0;
    h.visible = !0;
  };
  this.showRed = function (a) {
    k.text = a;
    e.visible = !0;
    k.visible = !0;
    b.visible = !1;
    f.visible = !1;
    l.visible = !1;
    h.visible = !1;
  };
  this.showGreen = function (a) {
    f.text = a === 0 ? a : "00";
    e.visible = !1;
    k.visible = !1;
    b.visible = !0;
    f.visible = !0;
    l.visible = !1;
    h.visible = !1;
  };
  this._init(a, d);
}
function CWheelAnim(a, d) {
  var g, e, b, l, k, f, h, n, c, q, w, u, t, p, m, r, v, x;
  this._init = function (a, b) {
    k = l = 0;
    e = !1;
    x = new createjs.Container();
    x.visible = !1;
    x.x = a;
    x.y = b;
    v = x.on("click", function () { });
    s_oStage.addChild(x);
    var c = new createjs.Shape();
    c.graphics
      .beginFill("rgba(0,0,0,0.7)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    x.addChild(c);
    c = createBitmap(s_oSpriteLibrary.getSprite("bg_wheel"));
    c.x = 240;
    c.y = 159;
    x.addChild(c);
    h = [];
    for (var d = 0; d < NUM_MASK_BALL_SPIN_FRAMES; d++)
      (c = createBitmap(s_oSpriteLibrary.getSprite("wheel_numbers_" + d))),
        (c.x = 418),
        (c.y = 219),
        (c.visible = !1),
        x.addChild(c),
        h.push(c);
    this._initBall();
    n = [];
    for (d = 0; d < NUM_MASK_BALL_SPIN_FRAMES; d++)
      (c = createBitmap(s_oSpriteLibrary.getSprite("wheel_handle_" + d))),
        (c.x = 519),
        (c.y = 186),
        (c.visible = !1),
        x.addChild(c),
        n.push(c);
    w = h[0];
    w.visible = !0;
    u = n[0];
    u.visible = !0;
    m = new createjs.Container();
    m.visible = !1;
    m.x = CANVAS_WIDTH / 2;
    m.y = CANVAS_HEIGHT / 2;
    x.addChild(m);
    c = s_oSpriteLibrary.getSprite("show_number_panel");
    d = createBitmap(c);
    m.addChild(d);
    d = {
      images: [s_oSpriteLibrary.getSprite("show_number_bg")],
      frames: { width: 117, height: 117, regX: 58, regY: 58 },
      animations: { black: [0], red: [1], green: [2] },
    };
    d = new createjs.SpriteSheet(d);
    r = createSprite(d, "black", 58, 58, 117, 117);
    r.x = c.width / 2;
    r.y = c.height / 2;
    m.addChild(r);
    t = new createjs.Text("36", "80px " + FONT2, "#fff");
    t.textAlign = "center";
    t.textBaseline = "middle";
    t.x = c.width / 2;
    t.y = c.height / 2 + 7;
    m.addChild(t);
    d = s_oSpriteLibrary.getSprite("but_bg");
    var f = createBitmap(d);
    f.regX = d.width / 2;
    f.x = c.width / 2;
    f.y = c.height - 12;
    m.addChild(f);
    p = new createjs.Text("", "22px " + FONT1, "#fff");
    p.textAlign = "center";
    p.textBaseline = "middle";
    p.x = c.width / 2;
    p.y = c.height + 20;
    m.addChild(p);
    m.regX = c.width / 2;
    m.regY = c.height / 2;
  };
  this.unload = function () {
    x.off("click", v);
  };
  this._initBall = function () {
    c = [];
    c.push({ x: 892.9, y: 358.95 });
    c.push({ x: 889.4, y: 338.95 });
    c.push({ x: 880.9, y: 320.45 });
    c.push({ x: 870.9, y: 303.45 });
    c.push({ x: 857.65, y: 287.2 });
    c.push({ x: 842.4, y: 272.2 });
    c.push({ x: 825.9, y: 257.45 });
    c.push({ x: 808.15, y: 245.7 });
    c.push({ x: 788.15, y: 234.45 });
    c.push({ x: 767.9, y: 224.45 });
    c.push({ x: 746.9, y: 217.2 });
    c.push({ x: 724.4, y: 210.7 });
    c.push({ x: 702.15, y: 205.2 });
    c.push({ x: 680.15, y: 201.7 });
    c.push({ x: 657.15, y: 199.45 });
    c.push({ x: 634.15, y: 198.95 });
    c.push({ x: 609.15, y: 199.95 });
    c.push({ x: 586.4, y: 202.2 });
    c.push({ x: 564.15, y: 206.2 });
    c.push({ x: 541.65, y: 211.2 });
    c.push({ x: 519.15, y: 218.2 });
    c.push({ x: 498.9, y: 227.45 });
    c.push({ x: 478.9, y: 236.7 });
    c.push({ x: 461.15, y: 248.95 });
    c.push({ x: 444.15, y: 261.45 });
    c.push({ x: 429.15, y: 275.7 });
    c.push({ x: 416.65, y: 291.45 });
    c.push({ x: 406.65, y: 308.95 });
    c.push({ x: 399.15, y: 326.7 });
    c.push({ x: 394.4, y: 345.7 });
    c.push({ x: 394.4, y: 365.7 });
    c.push({ x: 396.65, y: 385.7 });
    c.push({ x: 402.4, y: 405.2 });
    c.push({ x: 411.65, y: 424.95 });
    c.push({ x: 425.9, y: 444.2 });
    c.push({ x: 444.15, y: 462.2 });
    c.push({ x: 465.9, y: 477.95 });
    c.push({ x: 491.15, y: 492.45 });
    c.push({ x: 519.15, y: 504.7 });
    c.push({ x: 549.9, y: 512.95 });
    c.push({ x: 582.4, y: 518.7 });
    c.push({ x: 615.4, y: 520.45 });
    c.push({ x: 648.4, y: 518.45 });
    c.push({ x: 681.4, y: 513.45 });
    c.push({ x: 711.9, y: 505.2 });
    c.push({ x: 739.65, y: 493.45 });
    c.push({ x: 764.65, y: 478.7 });
    c.push({ x: 786.15, y: 461.95 });
    c.push({ x: 802.9, y: 444.45 });
    c.push({ x: 816.15, y: 424.7 });
    c.push({ x: 825.15, y: 404.7 });
    c.push({ x: 829.9, y: 384.7 });
    c.push({ x: 829.9, y: 364.7 });
    c.push({ x: 825.9, y: 345.95 });
    c.push({ x: 818.9, y: 327.2 });
    c.push({ x: 808.15, y: 310.2 });
    c.push({ x: 795.15, y: 293.95 });
    c.push({ x: 779.65, y: 279.45 });
    c.push({ x: 761.65, y: 267.2 });
    c.push({ x: 742.4, y: 256.45 });
    c.push({ x: 721.15, y: 247.95 });
    c.push({ x: 698.65, y: 240.45 });
    c.push({ x: 673.65, y: 236.95 });
    c.push({ x: 650.65, y: 234.45 });
    c.push({ x: 625.65, y: 233.95 });
    c.push({ x: 603.15, y: 235.45 });
    c.push({ x: 579.9, y: 238.7 });
    c.push({ x: 556.9, y: 246.2 });
    c.push({ x: 534.4, y: 254.2 });
    c.push({ x: 514.4, y: 265.7 });
    c.push({ x: 497.65, y: 278.2 });
    c.push({ x: 482.15, y: 292.45 });
    c.push({ x: 468.9, y: 307.7 });
    c.push({ x: 460.65, y: 326.2 });
    c.push({ x: 455.65, y: 344.7 });
    c.push({ x: 454.4, y: 364.7 });
    c.push({ x: 458.15, y: 384.7 });
    c.push({ x: 466.9, y: 403.7 });
    c.push({ x: 480.15, y: 421.95 });
    c.push({ x: 498.15, y: 438.2 });
    c.push({ x: 520.65, y: 453.2 });
    c.push({ x: 546.65, y: 463.7 });
    c.push({ x: 575.4, y: 471.45 });
    c.push({ x: 605.4, y: 475.2 });
    c.push({ x: 635.4, y: 474.95 });
    c.push({ x: 664.4, y: 469.95 });
    c.push({ x: 690.9, y: 460.7 });
    c.push({ x: 714.15, y: 447.95 });
    c.push({ x: 732.65, y: 431.2 });
    c.push({ x: 743.4, y: 418.7 });
    c.push({ x: 749.4, y: 411.2 });
    c.push({ x: 752.15, y: 397.95 });
    c.push({ x: 757.65, y: 379.45 });
    c.push({ x: 757.65, y: 379.45 });
    c.push({ x: 755.65, y: 375.7 });
    c.push({ x: 756.15, y: 366.2 });
    c.push({ x: 756.15, y: 356.2 });
    c.push({ x: 753.65, y: 344.95 });
    c.push({ x: 751.4, y: 346.45 });
    c.push({ x: 749.9, y: 348.45 });
    c.push({ x: 752.65, y: 354.45 });
    c.push({ x: 754.15, y: 360.45 });
    c.push({ x: 754.9, y: 366.2 });
    c.push({ x: 755.9, y: 372.45 });
    c.push({ x: 755.9, y: 378.2 });
    c.push({ x: 755.4, y: 384.2 });
    c.push({ x: 754.15, y: 390.45 });
    c.push({ x: 752.9, y: 396.7 });
    c.push({ x: 750.4, y: 403.2 });
    c.push({ x: 747.65, y: 409.2 });
    c.push({ x: 744.65, y: 414.7 });
    c.push({ x: 740.65, y: 420.45 });
    c.push({ x: 736.15, y: 425.7 });
    c.push({ x: 731.4, y: 430.95 });
    c.push({ x: 725.65, y: 435.45 });
    c.push({ x: 719.9, y: 440.45 });
    c.push({ x: 713.15, y: 445.2 });
    c.push({ x: 706.4, y: 449.95 });
    c.push({ x: 698.65, y: 453.95 });
    c.push({ x: 691.15, y: 457.45 });
    c.push({ x: 681.9, y: 460.95 });
    c.push({ x: 674.4, y: 462.7 });
    c.push({ x: 665.65, y: 465.45 });
    c.push({ x: 657.65, y: 467.95 });
    c.push({ x: 648.9, y: 469.45 });
    c.push({ x: 639.4, y: 469.95 });
    c.push({ x: 630.15, y: 470.7 });
    c.push({ x: 620.9, y: 470.95 });
    c.push({ x: 611.4, y: 469.95 });
    c.push({ x: 602.15, y: 469.7 });
    c.push({ x: 593.65, y: 467.95 });
    c.push({ x: 584.9, y: 466.2 });
    c.push({ x: 575.9, y: 463.7 });
    c.push({ x: 567.4, y: 460.7 });
    c.push({ x: 559.4, y: 457.95 });
    c.push({ x: 551.65, y: 453.95 });
    c.push({ x: 543.9, y: 449.95 });
    c.push({ x: 537.15, y: 445.7 });
    c.push({ x: 531.4, y: 441.45 });
    c.push({ x: 524.65, y: 435.2 });
    c.push({ x: 518.4, y: 431.2 });
    c.push({ x: 513.4, y: 424.95 });
    c.push({ x: 509.15, y: 420.2 });
    c.push({ x: 505.9, y: 413.7 });
    c.push({ x: 502.4, y: 408.2 });
    c.push({ x: 498.9, y: 403.2 });
    c.push({ x: 497.9, y: 396.7 });
    c.push({ x: 494.65, y: 390.95 });
    c.push({ x: 494.15, y: 384.2 });
    c.push({ x: 493.65, y: 378.45 });
    c.push({ x: 493.4, y: 372.2 });
    c.push({ x: 493.65, y: 366.95 });
    c.push({ x: 493.9, y: 360.7 });
    c.push({ x: 494.9, y: 354.95 });
    c.push({ x: 496.9, y: 348.7 });
    c.push({ x: 499.15, y: 343.7 });
    c.push({ x: 502.15, y: 338.45 });
    c.push({ x: 505.65, y: 332.7 });
    c.push({ x: 508.9, y: 328.2 });
    c.push({ x: 512.9, y: 323.45 });
    c.push({ x: 516.9, y: 318.7 });
    c.push({ x: 521.4, y: 313.95 });
    c.push({ x: 526.4, y: 309.2 });
    c.push({ x: 531.9, y: 305.2 });
    c.push({ x: 537.65, y: 301.7 });
    c.push({ x: 543.65, y: 298.45 });
    c.push({ x: 550.15, y: 294.7 });
    c.push({ x: 556.15, y: 292.45 });
    c.push({ x: 562.4, y: 289.95 });
    c.push({ x: 569.15, y: 287.2 });
    c.push({ x: 576.15, y: 285.2 });
    c.push({ x: 583.4, y: 283.95 });
    c.push({ x: 590.65, y: 282.45 });
    c.push({ x: 597.15, y: 280.95 });
    c.push({ x: 605.4, y: 280.2 });
    c.push({ x: 612.65, y: 279.95 });
    c.push({ x: 619.9, y: 279.7 });
    c.push({ x: 627.4, y: 279.2 });
    c.push({ x: 634.4, y: 280.2 });
    c.push({ x: 642.65, y: 280.7 });
    c.push({ x: 649.9, y: 281.95 });
    c.push({ x: 656.65, y: 282.95 });
    c.push({ x: 663.9, y: 284.2 });
    c.push({ x: 670.65, y: 286.45 });
    c.push({ x: 677.65, y: 288.7 });
    c.push({ x: 684.9, y: 291.2 });
    c.push({ x: 691.65, y: 293.7 });
    c.push({ x: 697.4, y: 296.2 });
    c.push({ x: 703.9, y: 299.7 });
    c.push({ x: 709.9, y: 303.7 });
    c.push({ x: 715.15, y: 306.95 });
    c.push({ x: 721.4, y: 310.95 });
    c.push({ x: 726.4, y: 314.7 });
    c.push({ x: 730.9, y: 319.45 });
    c.push({ x: 734.4, y: 323.7 });
    c.push({ x: 738.15, y: 328.7 });
    c.push({ x: 741.4, y: 333.95 });
    c.push({ x: 744.4, y: 338.95 });
    c.push({ x: 747.65, y: 344.2 });
    c.push({ x: 748.65, y: 349.7 });
    q = createBitmap(s_oSpriteLibrary.getSprite("ball"));
    q.x = c[0].x;
    q.y = c[0].y;
    x.addChild(q);
    f = 0;
  };
  this.hide = function () {
    m.visible = !1;
    x.visible = !1;
    f = 0;
  };
  this.startSpin = function (a, c, d, f) {
    this.playToFrame(c);
    b = f;
    e = !0;
    x.visible = !0;
    this.setShowNumberInfo(d);
    g = !0;
  };
  this.setShowNumberInfo = function (a) {
    a === DOUBLE_ZERO && (a = "00");
    t.text = a;
    0 < b
      ? ((p.font = "18px " + FONT1),
        (p.text = TEXT_YOU_WIN + " " + b + TEXT_CURRENCY))
      : ((p.font = "22px " + FONT1), (p.text = TEXT_YOU_LOSE));
    switch (s_oGameSettings.getColorNumber(a)) {
      case COLOR_BLACK:
        r.gotoAndStop("black");
        break;
      case COLOR_RED:
        r.gotoAndStop("red");
        break;
      case COLOR_ZERO:
        r.gotoAndStop("green");
    }
  };
  this._showNumberExtracted = function () {
    m.scaleX = m.scaleY = 0.1;
    m.visible = !0;
    createjs.Tween.get(m).to(
      { scaleX: 1, scaleY: 1 },
      800,
      createjs.Ease.cubicOut
    );
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      0 < b ? playSound("win", 1, !1) : playSound("lose", 1, !1);
  };
  this.playToFrame = function (a) {
    w.visible = !1;
    l = a;
    h[l].visible = !0;
    w = h[l];
    u.visible = !1;
    n[l].visible = !0;
    u = n[l];
  };
  this.nextFrame = function () {
    w.visible = !1;
    l++;
    h[l].visible = !0;
    w = h[l];
    u.visible = !1;
    n[l].visible = !0;
    u = n[l];
  };
  this._ballSpin = function () {
    q.x = c[f].x;
    q.y = c[f].y;
    f++;
    f === NUM_BALL_SPIN_FRAMES
      ? ((g = !1),
        (f = NUM_BALL_SPIN_FRAMES - 1),
        s_oGame._rouletteAnimEnded(),
        this.hide())
      : f === NUM_BALL_SPIN_FRAMES / 2 && this._showNumberExtracted();
  };
  this.isVisible = function () {
    return x.visible;
  };
  this.update = function () {
    !1 !== g &&
      (k++,
        2 === k &&
        ((k = 0),
          e &&
          (this._ballSpin(),
            l === NUM_MASK_BALL_SPIN_FRAMES - 1
              ? this.playToFrame(0)
              : this.nextFrame())));
  };
  this._init(a, d);
}
function CFinalBetPanel(a, d) {
  var g, e;
  this._init = function (a, d) {
    g = [
      [0, 10, 20, 30],
      [1, 11, 21, 31],
      [2, 12, 22, 32],
      [3, 13, 23, 33],
      [4, 14, 24, 34],
      [5, 15, 25, 35],
      [6, 16, 26, 36],
      [7, 17, 27],
      [8, 18, 28],
      [9, 19, 29],
    ];
    e = new createjs.Container();
    e.x = a;
    e.y = d;
    s_oStage.addChild(e);
    for (
      var b = s_oSpriteLibrary.getSprite("final_bet_bg"),
      f = b.width / 2,
      h = b.height / 2,
      l = 0;
      10 > l;
      l++
    ) {
      var c = new CTextButton(f, h, b, "" + l, FONT1, "#fff", 14, !1);
      c.addEventListenerWithParams(ON_MOUSE_UP, this._onFinalBetPressed, this, {
        index: l,
      });
      e.addChild(c.getSprite());
      4 === l ? ((f = b.width / 2), (h += b.height)) : (f += b.width + 2);
    }
    e.visible = !1;
  };
  this.unload = function () {
    for (var a = 0; a < e.getNumChildren(); a++)
      if (d instanceof CTextButton) {
        var d = e.getChildAt(a);
        d.unload();
      }
  };
  this.show = function () {
    e.visible = !0;
  };
  this.hide = function () {
    e.visible = !1;
  };
  this._onFinalBetPressed = function (a) {
    a = a.index;
    s_oGame._onShowBetOnTable(
      {
        button: "oBetFinalsBet",
        numbers: g[a],
        bet_mult: 4 === g[a].length ? 4 : 3,
        bet_win: 4 === g[a].length ? 9 : 12,
        num_fiches: g[a].length,
      },
      !1
    );
    this.hide();
  };
  this.isVisible = function () {
    return e.visible;
  };
  this._init(a, d);
}
function CNeighborsPanel() {
  var a, d, g, e, b, l, k, f, h, n, c, q, w, u, t, p, m, r;
  this._init = function () {
    c = [];
    r = new createjs.Container();
    s_oStage.addChild(r);
    p = new createjs.Shape();
    p.graphics
      .beginFill("rgba(0,0,0,0.7)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p.on("click", function () { });
    r.addChild(p);
    m = new createjs.Container();
    m.x = 265;
    m.y = 85;
    r.addChild(m);
    var a = createBitmap(s_oSpriteLibrary.getSprite("neighbor_bg"));
    m.addChild(a);
    t = new createjs.Text(g + TEXT_CURRENCY, "20px " + FONT1, "#fff");
    t.textAlign = "center";
    t.x = 690;
    t.y = 564;
    m.addChild(t);
    f = [];
    a = new CEnlight(
      399,
      555,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(180);
    f.oEnlight_0 = a;
    a = new CEnlight(
      314,
      54,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-10);
    f.oEnlight_1 = a;
    a = new CEnlight(
      441,
      549,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(170);
    f.oEnlight_2 = a;
    a = new CEnlight(
      176,
      144,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-47);
    f.oEnlight_3 = a;
    a = new CEnlight(
      579,
      457,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(131);
    f.oEnlight_4 = a;
    a = new CEnlight(
      122,
      302,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-86);
    f.oEnlight_5 = a;
    a = new CEnlight(
      632,
      301,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(94);
    f.oEnlight_6 = a;
    a = new CEnlight(
      176,
      458,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-123);
    f.oEnlight_7 = a;
    a = new CEnlight(
      578,
      144,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(56);
    f.oEnlight_8 = a;
    a = new CEnlight(
      316,
      548,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-162);
    f.oEnlight_9 = a;
    a = new CEnlight(
      439,
      54,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(18);
    f.oEnlight_10 = a;
    a = new CEnlight(
      205,
      489,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-133);
    f.oEnlight_11 = a;
    a = new CEnlight(
      549,
      113,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(45);
    f.oEnlight_12 = a;
    a = new CEnlight(
      274,
      68,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-20);
    f.oEnlight_13 = a;
    a = new CEnlight(
      481,
      535,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(160);
    f.oEnlight_14 = a;
    a = new CEnlight(
      153,
      181,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-57);
    f.oEnlight_15 = a;
    a = new CEnlight(
      602,
      421,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(121);
    f.oEnlight_16 = a;
    a = new CEnlight(
      126,
      344,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-96);
    f.oEnlight_17 = a;
    a = new CEnlight(
      629,
      259,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(85);
    f.oEnlight_18 = a;
    a = new CEnlight(
      601,
      179,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(66);
    f.oEnlight_19 = a;
    a = new CEnlight(
      153,
      423,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-114);
    f.oEnlight_20 = a;
    a = new CEnlight(
      628,
      342,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(103);
    f.oEnlight_21 = a;
    a = new CEnlight(
      126,
      260,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-77);
    f.oEnlight_22 = a;
    a = new CEnlight(
      550,
      487,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(140);
    f.oEnlight_23 = a;
    a = new CEnlight(
      204,
      114,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-38);
    f.oEnlight_24 = a;
    a = new CEnlight(
      479,
      68,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(27);
    f.oEnlight_25 = a;
    a = new CEnlight(
      275,
      535,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-153);
    f.oEnlight_26 = a;
    a = new CEnlight(
      398,
      47,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(9);
    f.oEnlight_27 = a;
    a = new CEnlight(
      357,
      556,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-171);
    f.oEnlight_28 = a;
    a = new CEnlight(
      515,
      88,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(36);
    f.oEnlight_29 = a;
    a = new CEnlight(
      238,
      515,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-143);
    f.oEnlight_30 = a;
    a = new CEnlight(
      619,
      218,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(75);
    f.oEnlight_31 = a;
    a = new CEnlight(
      137,
      384,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-106);
    f.oEnlight_32 = a;
    a = new CEnlight(
      618,
      383,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(112);
    f.oEnlight_33 = a;
    a = new CEnlight(
      136,
      219,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-67);
    f.oEnlight_34 = a;
    a = new CEnlight(
      517,
      515,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(151);
    f.oEnlight_35 = a;
    a = new CEnlight(
      238,
      88,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    a.rotate(-29);
    f.oEnlight_36 = a;
    a = new CEnlight(
      356,
      47,
      s_oSpriteLibrary.getSprite("neighbor_enlight"),
      m
    );
    f.oEnlight_37 = a;
    u = new createjs.Container();
    m.addChild(u);
    a = s_oSpriteLibrary.getSprite("hitarea_neighbor");
    var b = new CGfxButton(376, 72, a, m);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 37,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 37,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 37,
    });
    b = new CGfxButton(414, 76, a, m);
    b.rotate(9.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 27,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 27,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 27,
    });
    b = new CGfxButton(451, 86, a, m);
    b.rotate(19);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 10,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 10,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 10,
    });
    b = new CGfxButton(486, 101, a, m);
    b.rotate(28.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 25,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 25,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 25,
    });
    b = new CGfxButton(518, 122, a, m);
    b.rotate(38);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 29,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 29,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 29,
    });
    b = new CGfxButton(545, 147, a, m);
    b.rotate(46.7);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 12,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 12,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 12,
    });
    b = new CGfxButton(569, 176, a, m);
    b.rotate(56);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 8,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 8,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 8,
    });
    b = new CGfxButton(588, 210, a, m);
    b.rotate(65);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 19,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 19,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 19,
    });
    b = new CGfxButton(600, 245, a, m);
    b.rotate(76.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 31,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 31,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 31,
    });
    b = new CGfxButton(606, 283, a, m);
    b.rotate(86);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 18,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 18,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 18,
    });
    b = new CGfxButton(606, 321, a, m);
    b.rotate(95.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 6,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 6,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 6,
    });
    b = new CGfxButton(600, 358, a, m);
    b.rotate(104.5);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 21,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 21,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 21,
    });
    b = new CGfxButton(587, 394, a, m);
    b.rotate(112);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 33,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 33,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 33,
    });
    b = new CGfxButton(570, 428, a, m);
    b.rotate(121);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 16,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 16,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 16,
    });
    b = new CGfxButton(546, 458, a, m);
    b.rotate(131);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 4,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 4,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 4,
    });
    b = new CGfxButton(518, 484, a, m);
    b.rotate(141.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 23,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 23,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 23,
    });
    b = new CGfxButton(487, 505, a, m);
    b.rotate(150.9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 35,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 35,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 35,
    });
    b = new CGfxButton(452, 520, a, m);
    b.rotate(160.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 14,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 14,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 14,
    });
    b = new CGfxButton(415, 529, a, m);
    b.rotate(170.2);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 2,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 2,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 2,
    });
    b = new CGfxButton(378, 532, a, m);
    b.rotate(180);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 0,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 0,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 0,
    });
    b = new CGfxButton(339, 528, a, m);
    b.rotate(-171);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 28,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 28,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 28,
    });
    b = new CGfxButton(303, 519, a, m);
    b.rotate(-162);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 9,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 9,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 9,
    });
    b = new CGfxButton(268, 503, a, m);
    b.rotate(-152);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 26,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 26,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 26,
    });
    b = new CGfxButton(237, 482, a, m);
    b.rotate(-142);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 30,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 30,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 30,
    });
    b = new CGfxButton(208, 457, a, m);
    b.rotate(-132);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 11,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 11,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 11,
    });
    b = new CGfxButton(184, 428, a, m);
    b.rotate(-123);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 7,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 7,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 7,
    });
    b = new CGfxButton(166, 394, a, m);
    b.rotate(-113);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 20,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 20,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 20,
    });
    b = new CGfxButton(156, 358, a, m);
    b.rotate(-103);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 32,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 32,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 32,
    });
    b = new CGfxButton(149, 320, a, m);
    b.rotate(-93);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 17,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 17,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 17,
    });
    b = new CGfxButton(148, 282, a, m);
    b.rotate(-85);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 5,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 5,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 5,
    });
    b = new CGfxButton(154, 246, a, m);
    b.rotate(-75);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 22,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 22,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 22,
    });
    b = new CGfxButton(167, 209, a, m);
    b.rotate(-65);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 34,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 34,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 34,
    });
    b = new CGfxButton(185, 175, a, m);
    b.rotate(-55);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 15,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 15,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 15,
    });
    b = new CGfxButton(208, 145, a, m);
    b.rotate(-47);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 3,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 3,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 3,
    });
    b = new CGfxButton(235, 120, a, m);
    b.rotate(-39);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 24,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 24,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 24,
    });
    b = new CGfxButton(267, 98, a, m);
    b.rotate(-29);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 36,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 36,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 36,
    });
    b = new CGfxButton(302, 84, a, m);
    b.rotate(-19);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 13,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 13,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 13,
    });
    b = new CGfxButton(338, 76, a, m);
    b.rotate(-9);
    b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
      index: 1,
    });
    b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
      index: 1,
    });
    b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
      index: 1,
    });
    this._initNeighbors();
    w = new CGfxButton(717, 38, s_oSpriteLibrary.getSprite("but_exit"), m);
    w.addEventListener(ON_MOUSE_UP, this.onExit, this);
    this.reset();
    this.hide();
  };
  this.unload = function () {
    p.off("click", function () { });
    for (var a = 0; a < r.getNumChildren(); a++)
      if (b instanceof CGfxButton) {
        var b = r.getChildAt(a);
        b.unload();
      }
  };
  this.showPanel = function (a, b, c) {
    d = a;
    g = b;
    e = c;
    n = [];
    t.text = b + TEXT_CURRENCY;
    r.visible = !0;
  };
  this.hide = function () {
    r.visible = !1;
  };
  this._initNeighbors = function () {
    b = [
      [14, 2, 0, 28, 9],
      [36, 13, 1, 37, 27],
      [35, 14, 2, 0, 28],
      [34, 15, 3, 24, 36],
      [33, 16, 4, 23, 35],
      [32, 17, 5, 22, 34],
      [31, 18, 6, 21, 33],
      [30, 11, 7, 20, 32],
      [29, 12, 8, 19, 31],
      [0, 28, 9, 26, 30],
      [37, 27, 10, 25, 29],
      [26, 30, 11, 7, 20],
      [25, 29, 12, 8, 19],
      [24, 36, 13, 1, 37],
      [23, 35, 14, 2, 0],
      [22, 34, 15, 3, 24],
      [21, 33, 16, 4, 23],
      [20, 32, 17, 5, 22],
      [19, 31, 18, 6, 21],
      [12, 8, 19, 31, 18],
      [11, 7, 20, 32, 17],
      [18, 6, 21, 33, 16],
      [17, 5, 22, 34, 15],
      [16, 4, 23, 35, 14],
      [15, 3, 24, 36, 13],
      [27, 10, 25, 29, 12],
      [28, 9, 26, 30, 11],
      [1, 37, 27, 10, 25],
      [2, 0, 28, 9, 26],
      [10, 25, 29, 12, 8],
      [9, 26, 30, 11, 7],
      [8, 19, 31, 18, 6],
      [7, 20, 32, 17, 5],
      [6, 21, 33, 16, 4],
      [5, 22, 34, 15, 3],
      [4, 23, 35, 14, 2],
      [3, 24, 36, 13, 1],
      [13, 1, 37, 27, 10],
    ];
    q = [];
    q.oAttach_0 = new createjs.Point(378, 532);
    q.oAttach_1 = new createjs.Point(339, 74);
    q.oAttach_2 = new createjs.Point(415, 530);
    q.oAttach_3 = new createjs.Point(208, 145);
    q.oAttach_4 = new createjs.Point(548, 457);
    q.oAttach_5 = new createjs.Point(149, 282);
    q.oAttach_6 = new createjs.Point(607, 320);
    q.oAttach_7 = new createjs.Point(183, 428);
    q.oAttach_8 = new createjs.Point(570, 176);
    q.oAttach_9 = new createjs.Point(303, 520);
    q.oAttach_10 = new createjs.Point(451, 85);
    q.oAttach_11 = new createjs.Point(208, 458);
    q.oAttach_12 = new createjs.Point(547, 145);
    q.oAttach_13 = new createjs.Point(304, 84);
    q.oAttach_14 = new createjs.Point(452, 520);
    q.oAttach_15 = new createjs.Point(185, 176);
    q.oAttach_16 = new createjs.Point(571, 429);
    q.oAttach_17 = new createjs.Point(149, 321);
    q.oAttach_18 = new createjs.Point(606, 283);
    q.oAttach_19 = new createjs.Point(589, 211);
    q.oAttach_20 = new createjs.Point(167, 394);
    q.oAttach_21 = new createjs.Point(601, 358);
    q.oAttach_22 = new createjs.Point(155, 247);
    q.oAttach_23 = new createjs.Point(518, 485);
    q.oAttach_24 = new createjs.Point(238, 120);
    q.oAttach_25 = new createjs.Point(486, 99);
    q.oAttach_26 = new createjs.Point(268, 505);
    q.oAttach_27 = new createjs.Point(415, 74);
    q.oAttach_28 = new createjs.Point(339, 529);
    q.oAttach_29 = new createjs.Point(521, 120);
    q.oAttach_30 = new createjs.Point(235, 484);
    q.oAttach_31 = new createjs.Point(601, 245);
    q.oAttach_32 = new createjs.Point(153, 358);
    q.oAttach_33 = new createjs.Point(589, 395);
    q.oAttach_34 = new createjs.Point(166, 209);
    q.oAttach_35 = new createjs.Point(486, 506);
    q.oAttach_36 = new createjs.Point(268, 99);
    q.oAttach_37 = new createjs.Point(377, 70);
  };
  this.reset = function () {
    l = [];
    for (var a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
    if (k) for (a = 0; a < k.length; a++) u.removeChild(k[a].getSprite());
    k = [];
    h = [];
    e = 0;
  };
  this.clearLastBet = function () {
    if (0 !== c.length) {
      var a = c.pop(),
        b = s_oGameSettings.getFicheValues(d);
      l[a] -= b;
      l[a] = roundDecimal(l[a], 1);
      b = h[a];
      0 < b.length
        ? u.removeChild(b[b.length - 1].getSprite())
        : ((c = []), (l[a] = 0));
      k.pop();
      h[a].pop();
      if (0 === c.length)
        for (k = [], h = [], a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
      e = 0;
    }
  };
  this.onExit = function () {
    this.hide();
  };
  this.addFicheOnNeighborTable = function () {
    var f = s_oGameSettings.getFicheValues(d);
    if (e + 5 * f > g) s_oGame.showMsgBox(TEXT_ERROR_NO_MONEY_MSG);
    else if (e + 5 * f > MAX_BET)
      s_oGame.showMsgBox(TEXT_ERROR_MAX_BET_REACHED);
    else {
      e += 5 * f;
      e = roundDecimal(e, 1);
      var k = g - e;
      k = roundDecimal(k, 1);
      t.text = k + TEXT_CURRENCY;
      playSound("chip", 1, !1);
      l[a] += f;
      l[a] = roundDecimal(l[a], 1);
      f = s_oGameSettings.generateFichesPileByIndex(l[a]);
      f.sort();
      this._removeFichesPile(h[a]);
      h[a] = [];
      k = q["oAttach_" + a].x;
      for (var m = q["oAttach_" + a].y, p = 0; p < f.length; p++)
        this._attachFichesPile(f[p], a, k, m), (m -= 5);
      n.push(a);
      s_oGame._onShowBetOnTableFromNeighbors(
        {
          button: "oBetNeighbors",
          numbers: b[a],
          bet_mult: 5,
          bet_win: 7.2,
          value: d,
          num_fiches: 5,
          num_clicked: a,
        },
        !1
      );
      c.push(a);
    }
  };
  this._attachFichesPile = function (a, b, c, d) {
    a = new CFiche(c, d, a, u, 0.7);
    h[b].push(a);
    k.push(a);
  };
  this._removeFichesPile = function (a) {
    for (var b in a) u.removeChild(a[b].getSprite());
  };
  this.searchForNumClicked = function () {
    for (var b = 0; b < n.length; b++) if (n[b] === a) return !0;
    return !1;
  };
  this._onNeighborRelease = function (b) {
    a = b.index;
    this.addFicheOnNeighborTable();
  };
  this.rebet = function (b) {
    a = b;
    this.addFicheOnNeighborTable();
  };
  this._onNeighborOver = function (a) {
    a = b[a.index];
    for (var c = 0; c < a.length; c++) f["oEnlight_" + a[c]].show();
  };
  this._onNeighborOut = function (a) {
    a = b[a.index];
    for (var c = 0; c < a.length; c++) f["oEnlight_" + a[c]].hide();
  };
  this.isVisible = function () {
    return r.visible;
  };
  this._init();
}
function CGameOver() {
  var a, d, g, e, b;
  this._init = function () {
    b = new createjs.Container();
    s_oStage.addChild(b);
    var l = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(l);
    a = new createjs.Text(TEXT_NO_MONEY, "36px " + FONT1, "#fff");
    a.textAlign = "center";
    a.lineWidth = 500;
    a.x = CANVAS_WIDTH / 2;
    a.y = 240;
    b.addChild(a);
    d = new createjs.Text(TEXT_RECHARGE_MSG, "20px " + FONT1, "#fff");
    d.textAlign = "center";
    d.lineWidth = 500;
    d.x = CANVAS_WIDTH / 2;
    d.y = 400;
    b.addChild(d);
    g = new CTextButton(
      CANVAS_WIDTH / 2 + 170,
      510,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_RECHARGE,
      FONT1,
      "#fff",
      14,
      !1
    );
    g.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    b.addChild(g.getSprite());
    e = new CTextButton(
      CANVAS_WIDTH / 2 - 170,
      510,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_EXIT,
      FONT1,
      "#fff",
      14,
      !1
    );
    e.addEventListener(ON_MOUSE_UP, this._onExit, this);
    b.addChild(e.getSprite());
    this.hide();
  };
  this.unload = function () {
    g.unload();
    e.unload();
  };
  this.show = function () {
    b.visible = !0;
  };
  this.hide = function () {
    b.visible = !1;
  };
  this._onRecharge = function () {
    s_oGame.onRecharge();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._init();
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
    a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    n.addChild(a);
    u = createBitmap(s_oSpriteLibrary.getSprite("rule_table"));
    u.x = 800;
    u.y = 200;
    n.addChild(u);
    g = new createjs.Shape();
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(CANVAS_WIDTH - 60, p.height / 2 + 85, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    c = this.makeText("Game Rule", "45px ", "#ff0", FONT_GAME_2, 550, 150);
    n.addChild(c);
    text = `A: Straight up 35 : 1
    bet is placed on a single number
B: Split  17 : 1
    bet split 2 numbers
C: Street 11 : 1
    bet covers 3 numbers in a row
D: Corner 8 : 1
    bet covers 4 numbers
E: Basbet 6 : 1
    bet covers 1, 2, 3 and both zeros
F: Line 5 : 1
    bet covers 6 numbers iin two rows
G: Column 2 : 1
    bet covers 12 numbers
H: Dozen 2 : 1
    bet covers 12 numbers
I: Low number 1 : 1
    bet covers numbers between 1 - 18
J: High number 1 : 1
    bet covers numbers between 19 - 36
K: Red / Black 1 : 1
    bet covers red or black numbers
L: Odd / Even number 1 : 1
    bet covers odd or even numbers
M: Zero split 17 : 1
    bet covers both zeros`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 160);
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
function CHistory(a, d, g) {
  var e, b;
  this._init = function (a, d) {
    b = new createjs.Container();
    b.x = a;
    b.y = d;
    l.addChild(b);
    var e = s_oSpriteLibrary.getSprite("history_bg"),
      f = createBitmap(e);
    b.addChild(f);
    f = new createjs.Text(TEXT_HISTORY, "12px " + FONT1, "#fff");
    f.textAlign = "center";
    f.x = e.width / 2;
    f.y = 5;
    b.addChild(f);
    this._initNumExtracted();
  };
  this._initNumExtracted = function () {
    e = [];
    for (var a = 24, d = 0; d < ROW_HISTORY; d++) {
      var g = new CHistoryRow(5, a, b);
      e[d] = g;
      a += 22;
    }
  };
  this.setPosition = function (a, d) {
    b.x = a;
    b.y = d;
  };
  this.showBlack = function (a, b) {
    e[a].showBlack(b);
  };
  this.showRed = function (a, b) {
    e[a].showRed(b);
  };
  this.showGreen = function (a, b) {
    e[a].showGreen(b);
  };
  var l = g;
  this._init(a, d);
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
function CRollingTextController(a, d, g, e, b, l, k) {
  var f,
    h,
    n,
    c,
    q,
    w,
    u,
    t,
    p,
    m,
    r,
    v = [],
    x,
    A;
  this._init = function (a, b, c, d, e, f, g) {
    m = [];
    r = [];
    q = e;
    this.setUpdateInfo(c, d);
    t = f;
    p = g;
    x = a;
    A = b;
  };
  this.unload = function () {
    clearInterval(u);
  };
  this.setUpdateInfo = function (a, b) {
    n = parseFloat(a);
    c = n + b;
    f = 0;
    h = Math.round(q / FPS);
    w = 0;
    var d = this;
    u = setInterval(function () {
      d.update();
    }, FPS_TIME);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    r[a] = c;
  };
  this.addRollingListener = function (a, b, c) {
    m[ON_CONTROLLER_ROLL] = a;
    r[ON_CONTROLLER_ROLL] = b;
    v = [];
    for (a = 0; a < c.length; a++) v[a] = { step: c[a], flag: !1 };
  };
  this.increaseValue = function (a) {
    w = a;
  };
  this.getTarget = function () {
    return x;
  };
  this.update = function () {
    f++;
    if (f > h)
      (f = 0),
        (x.text = c.toFixed(2) + p),
        null !== A && (A.text = c.toFixed(2) + p),
        clearInterval(u),
        null !== m[ON_CONTROLLER_END] &&
        void 0 !== m[ON_CONTROLLER_END] &&
        m[ON_CONTROLLER_END].call(r[ON_CONTROLLER_END], this),
        0 < w
          ? this.setUpdateInfo(w)
          : null !== m[ON_CONTROLLER_REMOVE] &&
          void 0 !== m[ON_CONTROLLER_REMOVE] &&
          m[ON_CONTROLLER_REMOVE].call(r[ON_CONTROLLER_REMOVE], this);
    else {
      switch (t) {
        case EASE_BACKIN:
          var a = s_oTweenController.easeInBack(f, 0, 1, h);
          break;
        case EASE_BACKOUT:
          a = s_oTweenController.easeOutBack(f, 0, 1, h);
          break;
        case EASE_CUBIC_IN:
          a = s_oTweenController.easeInCubic(f, 0, 1, h);
          break;
        case EASE_CUBIC_OUT:
          a = s_oTweenController.easeOutCubic(f, 0, 1, h);
          break;
        case EASE_ELASTIC_OUT:
          a = s_oTweenController.easeOutElastic(f, 0, 1, h);
          break;
        case EASE_LINEAR:
          a = s_oTweenController.easeLinear(f, 0, 1, h);
          break;
        case EASE_QUART_BACKIN:
          a = s_oTweenController.easeBackInQuart(f, 0, 1, h);
          break;
        default:
          a = s_oTweenController.easeLinear(f, 0, 1, h);
      }
      a = s_oTweenController.tweenValue(n, c, a);
      for (var b = 0; b < v.length; b++)
        a > v[b].step &&
          !v[b].flag &&
          ((v[b].flag = !0),
            null !== m[ON_CONTROLLER_ROLL] &&
            m[ON_CONTROLLER_ROLL].call(r[ON_CONTROLLER_ROLL], b));
      x.text = a.toFixed(2) + p;
      null !== A && (A.text = a.toFixed(2) + p);
    }
  };
  this._init(a, d, g, e, b, l, k);
}
