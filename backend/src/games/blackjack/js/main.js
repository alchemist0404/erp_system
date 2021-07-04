/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
 screenfull
 v5.0.0 - 2019-09-09
 (c) Sindre Sorhus; MIT License
*/
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function d(a, b) {
    var d = -1,
      f = a ? a.length : 0;
    if ("number" == typeof f && -1 < f && f <= q)
      for (; ++d < f;) b(a[d], d, a);
    else c(a, b);
  }
  function b(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function c(a, b) {
    for (var c in a) A.call(a, c) && b(a[c], c, a);
  }
  function g(b) {
    return null == b ? a(b) : x.call(b).slice(8, -1);
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
  function t(a, b) {
    var c = null;
    d(a, function (d, f) {
      c = b(c, d, f, a);
    });
    return c;
  }
  function n(a) {
    function d(c) {
      return t(c, function (c, e) {
        var d = e.pattern || k(e);
        !c &&
          (c =
            RegExp("\\b" + d + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + d + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + d + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((c = String(
            e.label && !RegExp(d, "i").test(e.label) ? e.label : c
          ).split("/"))[1] &&
            !/[\d.]+/.test(c[0]) &&
            (c[0] += " " + c[1]),
            (e = e.label || e),
            (c = b(
              c[0]
                .replace(RegExp(d, "i"), e)
                .replace(RegExp("; *(?:" + e + "[_-])?", "i"), " ")
                .replace(RegExp("(" + e + ")[-_.]?(\\w)", "i"), "$1 $2")
            )));
        return c;
      });
    }
    function l(b) {
      return t(b, function (b, c) {
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
    var p = v,
      m = a && "object" == typeof a && "String" != g(a);
    m && ((p = a), (a = null));
    var q = p.navigator || {},
      h = q.userAgent || "";
    a || (a = h);
    var y = m
      ? !!q.likeChrome
      : /\bChrome\b/.test(a) && !/internal|\n/i.test(x.toString()),
      U = m ? "Object" : "ScriptBridgingProxyObject",
      D = m ? "Object" : "Environment",
      A = m && p.java ? "JavaPackage" : g(p.java),
      M = m ? "Object" : "RuntimeObject";
    D = (A = /\bJava/.test(A) && p.java) && g(p.environment) == D;
    var O = A ? "a" : "\u03b1",
      V = A ? "b" : "\u03b2",
      R = p.document || {},
      P = p.operamini || p.opera,
      z = r.test((z = m && P ? P["[[Class]]"] : g(P))) ? z : (P = null),
      e,
      S = a;
    m = [];
    var Q = null,
      J = a == h;
    h = J && P && "function" == typeof P.version && P.version();
    var C = (function (b) {
      return t(b, function (b, c) {
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
      u = (function (b) {
        return t(b, function (b, c) {
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
      F = d([
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
        return t(b, function (b, c, e) {
          return (
            b ||
            ((c[F] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] ||
              RegExp("\\b" + k(e) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      w = (function (c) {
        return t(c, function (c, e) {
          var d = e.pattern || k(e);
          if (
            !c &&
            (c = RegExp("\\b" + d + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var f = c,
              g = e.label || e,
              C = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME",
              };
            d &&
              g &&
              /^Win/i.test(f) &&
              !/^Windows Phone /i.test(f) &&
              (C = C[/[\d.]+$/.exec(f)]) &&
              (f = "Windows " + C);
            f = String(f);
            d && g && (f = f.replace(RegExp(d, "i"), g));
            c = f = b(
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
    C && (C = [C]);
    N && !F && (F = d([N]));
    if ((e = /\bGoogle TV\b/.exec(F))) F = e[0];
    /\bSimulator\b/i.test(a) && (F = (F ? F + " " : "") + "Simulator");
    "Opera Mini" == u &&
      /\bOPiOS\b/.test(a) &&
      m.push("running in Turbo/Uncompressed mode");
    "IE" == u && /\blike iPhone OS\b/.test(a)
      ? ((e = n(a.replace(/like iPhone OS/, ""))),
        (N = e.manufacturer),
        (F = e.product))
      : /^iP/.test(F)
        ? (u || (u = "Safari"),
          (w =
            "iOS" +
            ((e = / OS ([\d_]+)/i.exec(a)) ? " " + e[1].replace(/_/g, ".") : "")))
        : "Konqueror" != u || /buntu/i.test(w)
          ? (N &&
            "Google" != N &&
            ((/Chrome/.test(u) && !/\bMobile Safari\b/i.test(a)) ||
              /\bVita\b/.test(F))) ||
            (/\bAndroid\b/.test(w) && /^Chrome/.test(u) && /\bVersion\//i.test(a))
            ? ((u = "Android Browser"), (w = /\bAndroid\b/.test(w) ? w : "Android"))
            : "Silk" == u
              ? (/\bMobi/i.test(a) || ((w = "Android"), m.unshift("desktop mode")),
                /Accelerated *= *true/i.test(a) && m.unshift("accelerated"))
              : "PaleMoon" == u && (e = /\bFirefox\/([\d.]+)\b/.exec(a))
                ? m.push("identifying as Firefox " + e[1])
                : "Firefox" == u && (e = /\b(Mobile|Tablet|TV)\b/i.exec(a))
                  ? (w || (w = "Firefox OS"), F || (F = e[1]))
                  : !u ||
                    (e = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(u))
                    ? (u &&
                      !F &&
                      /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e + "/") + 8)) &&
                      (u = null),
                      (e = F || N || w) &&
                      (F || N || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) &&
                      (u =
                        /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : e) +
                        " Browser"))
                    : "Electron" == u &&
                    (e = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
                    m.push("Chromium " + e)
          : (w = "Kubuntu");
    h ||
      (h = l([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        k(u),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (e =
        ("iCab" == C && 3 < parseFloat(h) && "WebKit") ||
        (/\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(C) &&
          "WebKit") ||
        (!C && /\bMSIE\b/i.test(a) && ("Mac OS" == w ? "Tasman" : "Trident")) ||
        ("WebKit" == C && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront"))
    )
      C = [e];
    "IE" == u && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((u += " Mobile"),
        (w = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x")),
        m.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
        ? ((u = "IE Mobile"),
          (w = "Windows Phone 8.x"),
          m.unshift("desktop mode"),
          h || (h = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
        : "IE" != u &&
        "Trident" == C &&
        (e = /\brv:([\d.]+)/.exec(a)) &&
        (u && m.push("identifying as " + u + (h ? " " + h : "")),
          (u = "IE"),
          (h = e[1]));
    if (J) {
      if (f(p, "global"))
        if (
          (A &&
            ((e = A.lang.System),
              (S = e.getProperty("os.arch")),
              (w =
                w ||
                e.getProperty("os.name") + " " + e.getProperty("os.version"))),
            D)
        ) {
          try {
            (h = p.require("ringo/engine").version.join(".")), (u = "RingoJS");
          } catch (X) {
            (e = p.system) &&
              e.global.system == p.system &&
              ((u = "Narwhal"), w || (w = e[0].os || null));
          }
          u || (u = "Rhino");
        } else
          "object" == typeof p.process &&
            !p.process.browser &&
            (e = p.process) &&
            ("object" == typeof e.versions &&
              ("string" == typeof e.versions.electron
                ? (m.push("Node " + e.versions.node),
                  (u = "Electron"),
                  (h = e.versions.electron))
                : "string" == typeof e.versions.nw &&
                (m.push("Chromium " + h, "Node " + e.versions.node),
                  (u = "NW.js"),
                  (h = e.versions.nw))),
              u ||
              ((u = "Node.js"),
                (S = e.arch),
                (w = e.platform),
                (h = (h = /[\d.]+/.exec(e.version)) ? h[0] : null)));
      else
        g((e = p.runtime)) == U
          ? ((u = "Adobe AIR"), (w = e.flash.system.Capabilities.os))
          : g((e = p.phantom)) == M
            ? ((u = "PhantomJS"),
              (h =
                (e = e.version || null) &&
                e.major + "." + e.minor + "." + e.patch))
            : "number" == typeof R.documentMode &&
              (e = /\bTrident\/(\d+)/i.exec(a))
              ? ((h = [h, R.documentMode]),
                (e = +e[1] + 4) != h[1] &&
                (m.push("IE " + h[1] + " mode"), C && (C[1] = ""), (h[1] = e)),
                (h = "IE" == u ? String(h[1].toFixed(1)) : h[0]))
              : "number" == typeof R.documentMode &&
              /^(?:Chrome|Firefox)\b/.test(u) &&
              (m.push("masking as " + u + " " + h),
                (u = "IE"),
                (h = "11.0"),
                (C = ["Trident"]),
                (w = "Windows"));
      w = w && b(w);
    }
    h &&
      (e =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(h) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (J && q.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((Q = /b/i.test(e) ? "beta" : "alpha"),
        (h =
          h.replace(RegExp(e + "\\+?$"), "") +
          ("beta" == Q ? V : O) +
          (/\d+\+?/.exec(e) || "")));
    if (
      "Fennec" == u ||
      ("Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(w))
    )
      u = "Firefox Mobile";
    else if ("Maxthon" == u && h) h = h.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(F))
      "Xbox 360" == F && (w = null),
        "Xbox 360" == F && /\bIEMobile\b/.test(a) && m.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(u) &&
        (!u || F || /Browser|Mobi/.test(u))) ||
      ("Windows CE" != w && !/Mobi/i.test(a))
    )
      if ("IE" == u && J)
        try {
          null === p.external && m.unshift("platform preview");
        } catch (X) {
          m.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(a)) &&
          (e =
            (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
              0)[1] || h)
          ? ((e = [e, /BB10/.test(a)]),
            (w =
              (e[1] ? ((F = null), (N = "BlackBerry")) : "Device Software") +
              " " +
              e[0]),
            (h = null))
          : this != c &&
          "Wii" != F &&
          ((J && P) ||
            (/Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
            ("Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(w)) ||
            ("IE" == u &&
              ((w && !/^Win/.test(w) && 5.5 < h) ||
                (/\bWindows XP\b/.test(w) && 8 < h) ||
                (8 == h && !/\bTrident\b/.test(a))))) &&
          !r.test((e = n.call(c, a.replace(r, "") + ";"))) &&
          e.name &&
          ((e = "ing as " + e.name + ((e = e.version) ? " " + e : "")),
            r.test(u)
              ? (/\bIE\b/.test(e) && "Mac OS" == w && (w = null),
                (e = "identify" + e))
              : ((e = "mask" + e),
                (u = z ? b(z.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(e) && (w = null),
                J || (h = null)),
            (C = ["Presto"]),
            m.push(e));
    else u += " Mobile";
    if ((e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e];
      if ("Safari" == u && "+" == e[1].slice(-1))
        (u = "WebKit Nightly"), (Q = "alpha"), (h = e[1].slice(0, -1));
      else if (
        h == e[1] ||
        h == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        h = null;
      e[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == e[0] &&
        537.36 == e[2] &&
        28 <= parseFloat(e[1]) &&
        "WebKit" == C &&
        (C = ["Blink"]);
      J && (y || e[1])
        ? (C && (C[1] = "like Chrome"),
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
                                                              : "Blink" != C
                                                                ? "27"
                                                                : "28")))
        : (C && (C[1] = "like Safari"),
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
      C &&
        (C[1] +=
          " " + (e += "number" == typeof e ? ".x" : /[.+]/.test(e) ? "" : "+"));
      "Safari" == u && (!h || 45 < parseInt(h)) && (h = e);
    }
    "Opera" == u && (e = /\bzbov|zvav$/.exec(w))
      ? ((u += " "),
        m.unshift("desktop mode"),
        "zvav" == e ? ((u += "Mini"), (h = null)) : (u += "Mobile"),
        (w = w.replace(RegExp(" *" + e + "$"), "")))
      : "Safari" == u &&
      /\bChrome\b/.exec(C && C[1]) &&
      (m.unshift("desktop mode"),
        (u = "Chrome Mobile"),
        (h = null),
        /\bOS X\b/.test(w) ? ((N = "Apple"), (w = "iOS 4.3+")) : (w = null));
    h &&
      0 == h.indexOf((e = /[\d.]+$/.exec(w))) &&
      -1 < a.indexOf("/" + e + "-") &&
      (w = String(w.replace(e, "")).replace(/^ +| +$/g, ""));
    C &&
      !/\b(?:Avant|Nook)\b/.test(u) &&
      (/Browser|Lunascape|Maxthon/.test(u) ||
        ("Safari" != u && /^iOS/.test(w) && /\bSafari\b/.test(C[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          u
        ) &&
          C[1])) &&
      (e = C[C.length - 1]) &&
      m.push(e);
    m.length && (m = ["(" + m.join("; ") + ")"]);
    N && F && 0 > F.indexOf(N) && m.push("on " + N);
    F && m.push((/^on /.test(m[m.length - 1]) ? "" : "on ") + F);
    if (w) {
      var W =
        (e = / ([\d.+]+)$/.exec(w)) &&
        "/" == w.charAt(w.length - e[0].length - 1);
      w = {
        architecture: 32,
        family: e && !W ? w.replace(e[0], "") : w,
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
    (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(S)) && !/\bi686\b/i.test(S)
      ? (w &&
        ((w.architecture = 64),
          (w.family = w.family.replace(RegExp(" *" + e), ""))),
        u &&
        (/\bWOW64\b/i.test(a) ||
          (J &&
            /\w(?:86|32)$/.test(q.cpuClass || q.platform) &&
            !/\bWin64; x64\b/i.test(a))) &&
        m.unshift("32-bit"))
      : w &&
      /^OS X/.test(w.family) &&
      "Chrome" == u &&
      39 <= parseFloat(h) &&
      (w.architecture = 64);
    a || (a = null);
    p = {};
    p.description = a;
    p.layout = C && C[0];
    p.manufacturer = N;
    p.name = u;
    p.prerelease = Q;
    p.product = F;
    p.ua = a;
    p.version = u && h;
    p.os = w || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    p.parse = n;
    p.toString = function () {
      return this.description || "";
    };
    p.version && m.unshift(h);
    p.name && m.unshift(u);
    w &&
      u &&
      (w != String(w).split(" ")[0] || (w != u.split(" ")[0] && !F)) &&
      m.push(F ? "(" + w + ")" : "on " + w);
    m.length && (p.description = m.join(" "));
    return p;
  }
  var l = { function: !0, object: !0 },
    v = (l[typeof window] && window) || this,
    h = l[typeof exports] && exports;
  l = l[typeof module] && module && !module.nodeType && module;
  var m = h && l && "object" == typeof global && global;
  !m || (m.global !== m && m.window !== m && m.self !== m) || (v = m);
  var q = Math.pow(2, 53) - 1,
    r = /\bOpera/;
  m = Object.prototype;
  var A = m.hasOwnProperty,
    x = m.toString,
    p = n();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((v.platform = p),
      define(function () {
        return p;
      }))
    : h && l
      ? c(p, function (a, b) {
        h[b] = a;
      })
      : (v.platform = p);
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
  window.scrollTo(0, 0);
  //   console.log(window.devicePixelRatio);
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
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
    d = a.family.toLowerCase();
  a = parseFloat(a.version);
  return "ios" === d && 13 > a ? !0 : !1;
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
(function () {
  var a =
    "undefined" !== typeof window && "undefined" !== typeof window.document
      ? window.document
      : {},
    d = "undefined" !== typeof module && module.exports,
    b = (function () {
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
        l = {};
        d < g;
        d++
      )
        if ((b = c[d]) && b[1] in a) {
          for (d = 0; d < b.length; d++) l[c[0][d]] = b[d];
          return l;
        }
      return !1;
    })(),
    c = { change: b.fullscreenchange, error: b.fullscreenerror },
    g = {
      request: function (c) {
        return new Promise(
          function (d, f) {
            var g = function () {
              this.off("change", g);
              d();
            }.bind(this);
            this.on("change", g);
            c = c || a.documentElement;
            Promise.resolve(c[b.requestFullscreen]())["catch"](f);
          }.bind(this)
        );
      },
      exit: function () {
        return new Promise(
          function (c, d) {
            if (this.isFullscreen) {
              var f = function () {
                this.off("change", f);
                c();
              }.bind(this);
              this.on("change", f);
              Promise.resolve(a[b.exitFullscreen]())["catch"](d);
            } else c();
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
      on: function (b, d) {
        var g = c[b];
        g && a.addEventListener(g, d, !1);
      },
      off: function (b, d) {
        var g = c[b];
        g && a.removeEventListener(g, d, !1);
      },
      raw: b,
    };
  b
    ? (Object.defineProperties(g, {
      isFullscreen: {
        get: function () {
          return !!a[b.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return a[b.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!a[b.fullscreenEnabled];
        },
      },
    }),
      d ? (module.exports = g) : (window.screenfull = g))
    : d
      ? (module.exports = { isEnabled: !1 })
      : (window.screenfull = { isEnabled: !1 });
})();
var s_iOffsetX, s_iOffsetY, s_bIsRetina;
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
  isRetina();
  for (
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(
      ";"
    );
    a.length;

  )
    if (navigator.platform === a.pop()) return (s_bIsIphone = !0);
  return (s_bIsIphone = !1);
}
function isRetina() {
  s_bIsRetina = matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches
    ? !0
    : !1;
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
      c = Math.round(CANVAS_WIDTH * b);
    b = Math.round(CANVAS_HEIGHT * b);
    if (b < a) {
      var g = a - b;
      b += g;
      c += (CANVAS_WIDTH / CANVAS_HEIGHT) * g;
    } else
      c < d &&
        ((g = d - c), (c += g), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * g));
    g = a / 2 - b / 2;
    var f = d / 2 - c / 2,
      k = CANVAS_WIDTH / c;
    if (f * k < -EDGEBOARD_X || g * k < -EDGEBOARD_Y)
      (b = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (c = CANVAS_WIDTH * b),
        (b *= CANVAS_HEIGHT),
        (g = (a - b) / 2),
        (f = (d - c) / 2),
        (k = CANVAS_WIDTH / c);
    s_iOffsetX = -1 * f * k;
    s_iOffsetY = -1 * g * k;
    0 <= g && (s_iOffsetY = 0);
    0 <= f && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsRetina
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * c),
        (s_oStage.canvas.height = 2 * b),
        (canvas.style.width = c + "px"),
        (canvas.style.height = b + "px"),
        (d = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_iScaleFactor = 2 * d),
        (s_oStage.scaleX = s_oStage.scaleY = 2 * d))
      : s_bMobile
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
  for (var d = a.length, b, c; 0 !== d;)
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
    for (var b = d.slice(), f = b.shift(); a[f] == c[f] && b.length;)
      f = b.shift();
    return a[f] == c[f] ? 0 : a[f] > c[f] ? 1 : -1;
  });
};
function roundDecimal(a, d) {
  var b = Math.pow(10, d);
  return Math.round(b * a) / b;
}
function tweenVectors(a, d, b, c) {
  !!a &&
    !!d &&
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
function backSound(a, d, b) {
  Howler.mute(!1);
  s_aSounds[a].play(),
    s_aSounds[a].volume(d),
    s_aSounds[a].loop(b),
    s_aSounds[a];
  !s_bAudioActive &&
    setTimeout(() => {
      Howler.mute(!0);
    }, 1e3);
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
    b,
    c,
    g,
    f,
    k;
  this.init = function (a, n, l) {
    d = {};
    c = b = 0;
    g = a;
    f = n;
    k = l;
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
    f.call(k);
  };
  this._onSpriteLoaded = function () {
    g.call(k);
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
var CANVAS_WIDTH = 1700,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 200,
  randomNumber = 0,
  splited = 0,
  EDGEBOARD_Y = 0,
  FPS_TIME = 1e3 / 24,
  DISABLE_SOUND_MOBILE = !1,
  FONT_GAME_1 = "ArialBold",
  FONT_GAME_2 = "Digital-7",
  FONT_GAME_3 = "ariallight",
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  STATE_GAME_WAITING_FOR_BET = 0,
  STATE_GAME_DEALING = 1,
  STATE_GAME_HITTING = 2,
  STATE_GAME_SPLIT = 3,
  STATE_GAME_FINALIZE = 4,
  STATE_GAME_SHOW_WINNER = 5,
  STATE_CARD_DEALING = 0,
  STATE_CARD_SPLIT = 1,
  STATE_CARD_REMOVING = 2,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  SIT_DOWN = "SIT_DOWN",
  PASS_TURN = "PASS_TURN",
  PLAYER_LOSE = "PLAYER_LOSE",
  ASSIGN_FICHES = "ASSIGN_FICHES",
  FICHES_END_MOV = "FICHES_END_MOV",
  RESTORE_ACTION = "RESTORE_ACTION",
  END_HAND = "END_HAND",
  ON_CARD_SHOWN = "ON_CARD_SHOWN",
  ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
  SPLIT_CARD_END_ANIM = "SPLIT_CARD_END_ANIM",
  ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
  NUM_FICHES = 5,
  CARD_WIDTH = 66,
  CARD_HEIGHT = 94.5,
  MIN_BET,
  MAX_BET,
  TOTAL_MONEY,
  FICHE_WIDTH = 45,
  WIN_OCCURRENCE,
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 250,
  TIME_CARD_REMOVE = 1e3,
  TIME_SHOW_FINAL_CARDS = 4e3,
  TIME_END_HAND = 1500,
  BET_TIME = 1e4,
  COLOR_FICHE_PER_VALUE = "#000 #000 #000 #000 #000 #000".split(" "),
  SIZE_FONT_FICHE = [18, 18, 18, 18, 18, 18],
  AD_SHOW_COUNTER,
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS;
TEXT_PLAY = "PLAY";
TEXT_SIT_DOWN = "SIT DOWN";
TEXT_CLEAR = "CLEAR";
TEXT_REBET = "REBET";
TEXT_DEAL = "DEAL";
TEXT_HIT = "HIT";
TEXT_STAND = "STAND";
TEXT_DOUBLE = "DOUBLE";
TEXT_SPLIT = "SPLIT";
TEXT_MIN_BET = "MIN BET";
TEXT_MAX_BET = "MAX BET";
TEXT_NO = "NO";
TEXT_YES = "YES";
TEXT_RECHARGE = "RECHARGE";
TEXT_EXIT = "EXIT";
TEXT_CURRENCY = "$";
TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET";
TEXT_DISPLAY_MSG_SIT_DOWN = "PLEASE SIT DOWN TO START PLAYING";
TEXT_DISPLAY_MSG_YOUR_ACTION = "WAITING FOR PLAYER ACTION";
TEXT_DISPLAY_MSG_DEALER_TURN = "DEALER TURN";
TEXT_DISPLAY_MSG_PLAYER_LOSE = "HAND WON BY DEALER ";
TEXT_DISPLAY_MSG_PLAYER_WIN = "HAND WON BY PLAYER ";
TEXT_DISPLAY_MSG_PLAYER_STANDOFF = "STANDOFF";
TEXT_DISPLAY_MSG_DEALING = "DEALING...";
TEXT_SHOW_WIN_PLAYER = "YOU WIN ";
TEXT_SHOW_LOSE_PLAYER = "YOU LOSE ";
TEXT_SHOW_STANDOFF = "STANDOFF";
TEXT_INSURANCE = "Do you want Insurance?";
TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!";
TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!";
TEXT_ERROR_MAX_BET = "THIS BET IS HIGHER OF THE GAME MAXIMUM BET!!";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
var TEXT_PRELOADER_CONTINUE = "START";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 =
  " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";
var oldCredit;
var beted = 1;
function CPreloader() {
  var a, d, b, c, g, f, k, t, n;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.loadSprites();
    n = new createjs.Container();
    s_oStage.addChild(n);
  };
  this.unload = function () {
    n.removeAllChildren();
  };
  this._onImagesLoaded = function () { };
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var l = new createjs.Shape();
    l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    n.addChild(l);
    l = s_oSpriteLibrary.getSprite("200x200");
    k = createBitmap(l);
    k.regX = 0.5 * l.width;
    k.regY = 0.5 * l.height;
    k.x = CANVAS_WIDTH / 2;
    k.y = CANVAS_HEIGHT / 2 - 180;
    n.addChild(k);
    t = new createjs.Shape();
    t.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(k.x - 100, k.y - 100, 200, 200, 10);
    n.addChild(t);
    k.mask = t;
    l = s_oSpriteLibrary.getSprite("progress_bar");
    c = createBitmap(l);
    c.x = CANVAS_WIDTH / 2 - l.width / 2;
    c.y = CANVAS_HEIGHT / 2 + 50;
    n.addChild(c);
    a = l.width;
    d = l.height;
    g = new createjs.Shape();
    g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, d);
    n.addChild(g);
    c.mask = g;
    b = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2 + 100;
    b.textBaseline = "alphabetic";
    b.textAlign = "center";
    n.addChild(b);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    n.addChild(f);
    createjs.Tween.get(f)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(f);
        n.removeChild(f);
      });
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
    k;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage, !0);
    s_bMobile = jQuery.browser.mobile;
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
    b++;
    f.refreshLoader(Math.floor((b / c) * 100));
  };
  this._initSounds = function () {
    var a = [];
    a.push({
      path: "./sounds/",
      filename: "card",
      loop: !1,
      volume: 1,
      ingamename: "card",
    });
    a.push({
      path: "./sounds/",
      filename: "chip",
      loop: !1,
      volume: 1,
      ingamename: "chip",
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
      filename: "press_but",
      loop: !1,
      volume: 1,
      ingamename: "press_but",
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
    c += a.length;
    s_aSounds = [];
    for (var b = 0; b < a.length; b++)
      s_aSounds[a[b].ingamename] = new Howl({
        src: [a[b].path + a[b].filename + ".mp3"],
        autoplay: !1,
        preload: !0,
        loop: a[b].loop,
        volume: a[b].volume,
        onload: s_oMain.soundLoaded,
      });
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
    s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
    s_oSpriteLibrary.addSprite(
      "but_game_small_bg",
      "./sprites/but_game_small_bg.png"
    );
    s_oSpriteLibrary.addSprite(
      "but_game_very_small_bg",
      "./sprites/but_game_very_small_bg.png"
    );
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("bg_game_1", "./sprites/bg_game_1.jpg");
    s_oSpriteLibrary.addSprite("bg_game_2", "./sprites/bg_game_2.jpg");
    s_oSpriteLibrary.addSprite("bg_game_3", "./sprites/bg_game_3.jpg");
    s_oSpriteLibrary.addSprite("bg_game_4", "./sprites/bg_game_4.jpg");
    s_oSpriteLibrary.addSprite("seat", "./sprites/seat.png");
    s_oSpriteLibrary.addSprite(
      "card_spritesheet",
      "./sprites/card_spritesheet.png"
    );
    s_oSpriteLibrary.addSprite("arrow_hand", "./sprites/arrow_hand.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite("bet_bg", "./sprites/bet_bg.png");
    s_oSpriteLibrary.addSprite("money_bg", "./sprites/money_bg.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    for (var a = 0; a < NUM_FICHES; a++)
      s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
    c += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    b++;
    f.refreshLoader(Math.floor((b / c) * 100));
  };
  this._onAllImagesLoaded = function () { };
  this._onRemovePreloader = function () {
    f.unload();
    this.gotoMenu();
  };
  this.gotoMenu = function () {
    new CMenu();
    g = STATE_MENU;
  };
  this.gotoGame = function () {
    k = new CGame(t);
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
    //-----------------
    if (d) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      g === STATE_GAME && k.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var t = a;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
  ENABLE_FULLSCREEN = a.fullscreen;
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
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary,
  s_oGameSettings,
  s_bFullscreen = !1,
  s_aSounds;
function CTextButton(a, d, b, c, g, f, k, t) {
  var n, l, v, h, m, q, r, A, x, p, D, G;
  this._init = function (a, b, c, d, g, f, k) {
    n = !1;
    l = 1;
    m = [];
    q = [];
    G = createBitmap(c);
    v = c.width;
    h = c.height;
    p = new createjs.Container();
    p.x = a;
    p.y = b;
    p.regX = c.width / 2;
    p.regY = c.height / 2;
    s_bMobile || (p.cursor = "pointer");
    p.addChild(G, D);
    t.addChild(p);
    D = new CTLText(
      p,
      10,
      6,
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
    p.off("mousedown", r);
    p.off("pressup", A);
    t.removeChild(p);
  };
  this.setVisible = function (a) {
    p.visible = a;
  };
  this.setAlign = function (a) {
    D.textAlign = a;
  };
  this.setTextX = function (a) {
    D.x = a;
  };
  this.setScale = function (a) {
    l = p.scaleX = p.scaleY = a;
  };
  this.enable = function () {
    n = !1;
    p.filters = [];
    p.cache(0, 0, v, h);
  };
  this.disable = function () {
    n = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-100);
    p.filters = [new createjs.ColorMatrixFilter(a)];
    p.cache(0, 0, v, h);
  };
  this._initListener = function () {
    r = p.on("mousedown", this.buttonDown);
    A = p.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    q[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    m[a] = b;
    q[a] = c;
    x = d;
  };
  this.buttonRelease = function () {
    n ||
      (playSound("press_but", 1, !1),
        (p.scaleX = l),
        (p.scaleY = l),
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(q[ON_MOUSE_UP], x));
  };
  this.buttonDown = function () {
    n ||
      ((p.scaleX = 0.9 * l),
        (p.scaleY = 0.9 * l),
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    p.x = a;
    p.y = b;
  };
  this.tweenPosition = function (a, b, c, d, g, f, k) {
    createjs.Tween.get(p)
      .wait(d)
      .to({ x: a, y: b }, c, g)
      .call(function () {
        void 0 !== f && f.call(k);
      });
  };
  this.changeText = function (a) {
    D.refreshText(a);
  };
  this.setX = function (a) {
    p.x = a;
  };
  this.setY = function (a) {
    p.y = a;
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
  this.getSprite = function () {
    return p;
  };
  this.getScale = function () {
    return p.scaleX;
  };
  this._init(a, d, b, c, g, f, k);
}
function CGfxButton(a, d, b) {
  var c,
    g,
    f,
    k,
    t,
    n = [],
    l,
    v,
    h;
  this._init = function (a, b, d) {
    c = !1;
    k = [];
    t = [];
    g = d.width;
    f = d.height;
    h = createBitmap(d);
    h.x = a;
    h.y = b;
    h.regX = d.width / 2;
    h.regY = d.height / 2;
    h.cursor = "pointer";
    s_oStage.addChild(h);
    this._initListener();
  };
  this.unload = function () {
    h.off("mousedown", l);
    h.off("pressup", v);
    s_oStage.removeChild(h);
  };
  this.setVisible = function (a) {
    h.visible = a;
  };
  this._initListener = function () {
    l = h.on("mousedown", this.buttonDown);
    v = h.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    k[a] = b;
    t[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    k[a] = b;
    t[a] = c;
    n = d;
  };
  this.buttonRelease = function () {
    c ||
      (playSound("press_but", 1, !1),
        (h.scaleX = 1),
        (h.scaleY = 1),
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(t[ON_MOUSE_UP], n));
  };
  this.buttonDown = function () {
    c ||
      ((h.scaleX = 0.9),
        (h.scaleY = 0.9),
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], n));
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
  this.enable = function () {
    c = !1;
    h.filters = [];
    h.cache(0, 0, g, f);
  };
  this.disable = function () {
    c = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    h.filters = [new createjs.ColorMatrixFilter(a)];
    h.cache(0, 0, g, f);
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
  this._init(a, d, b);
  return this;
}
function CToggle(a, d, b, c, g) {
  var f, k, t, n;
  this._init = function (a, b, c, d) {
    k = [];
    t = [];
    var g = new createjs.SpriteSheet({
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
    n = createSprite(
      g,
      "state_" + f,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    n.x = a;
    n.y = b;
    n.stop();
    l.addChild(n);
    this._initListener();
  };
  this.unload = function () {
    n.off("mousedown", this.buttonDown);
    n.off("pressup", this.buttonRelease);
    s_bMobile || n.off("mouseover", this.buttonOver);
    l.removeChild(n);
  };
  this._initListener = function () {
    n.on("mousedown", this.buttonDown);
    n.on("pressup", this.buttonRelease);
    if (!s_bMobile) n.on("mouseover", this.buttonOver);
  };
  this.addEventListener = function (a, b, c) {
    k[a] = b;
    t[a] = c;
  };
  this.setActive = function (a) {
    f = a;
    n.gotoAndStop("state_" + f);
  };
  this.buttonRelease = function () {
    n.scaleX = 1;
    n.scaleY = 1;
    playSound("press_but", 1, 0);
    f = !f;
    n.gotoAndStop("state_" + f);
    k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(t[ON_MOUSE_UP], f);
  };
  this.buttonDown = function () {
    n.scaleX = 0.9;
    n.scaleY = 0.9;
    k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN]);
  };
  this.buttonOver = function (a) {
    s_bMobile || (a.target.cursor = "pointer");
  };
  this.setPosition = function (a, b) {
    n.x = a;
    n.y = b;
  };
  var l = g;
  this._init(a, d, b, c);
}
function CMenu() {
  var a,
    d,
    b,
    c,
    g,
    f,
    k,
    t,
    n,
    l,
    v,
    h,
    m = null,
    q = null;
  this._init = function () {
    k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(k);
    var r = s_oSpriteLibrary.getSprite("but_menu_bg");
    t = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - 164,
      r,
      TEXT_PLAY,
      FONT_GAME_1,
      "#ffffff",
      40,
      s_oStage
    );
    t.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (r = s_oSpriteLibrary.getSprite("audio_icon")),
        (g = CANVAS_WIDTH - r.width / 4 - 10),
        (f = r.height / 2 + 10),
        (n = new CToggle(g, f, r, s_bAudioActive, s_oStage)),
        n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    var A = s_oSpriteLibrary.getSprite("but_credits");
    r = window.document;
    var x = r.documentElement;
    m =
      x.requestFullscreen ||
      x.mozRequestFullScreen ||
      x.webkitRequestFullScreen ||
      x.msRequestFullscreen;
    q =
      r.exitFullscreen ||
      r.mozCancelFullScreen ||
      r.webkitExitFullscreen ||
      r.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (m = !1);
    m && screenfull.isEnabled
      ? ((r = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (b = r.width / 4 + 10),
        (c = r.height / 2 + 10),
        (v = new CToggle(b, c, r, s_bFullscreen, s_oStage)),
        v.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this),
        (a = b + 10 + r.width / 2),
        (d = r.height / 2 + 10))
      : ((a = 10 + A.width / 2), (d = A.height / 2 + 10));
    SHOW_CREDITS &&
      ((h = new CGfxButton(a, d, A)),
        h.addEventListener(ON_MOUSE_UP, this._onCredits, this));
    l = new createjs.Shape();
    l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(l);
    createjs.Tween.get(l)
      .to({ alpha: 0 }, 400)
      .call(function () {
        l.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (k, l) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      n.setPosition(g - k, l + f);
    m && screenfull.isEnabled && v.setPosition(b + k, c + l);
    SHOW_CREDITS && h.setPosition(a + k, d + l);
  };
  this.unload = function () {
    t.unload();
    t = null;
    SHOW_CREDITS && h.unload();
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(), (n = null);
    m && screenfull.isEnabled && v.unload();
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
  this.resetFullscreenBut = function () {
    m && screenfull.isEnabled && v.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? q.call(window.document)
      : m.call(window.document.documentElement);
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
  var d = !1,
    b,
    c,
    g,
    f = !1,
    k,
    t,
    n,
    l,
    v,
    h,
    m,
    q,
    r,
    A,
    x,
    p,
    D,
    G,
    K,
    H,
    I,
    B,
    L,
    y,
    U,
    E,
    T,
    M,
    O,
    V,
    R,
    P,
    z,
    e,
    S,
    Q;
  this._init = function () {
    l = MAX_BET;
    v = MIN_BET;
    h = -1;
    D = n = 0;
    s_oTweenController = new CTweenController();
    P = createBitmap(
      s_oSpriteLibrary.getSprite(
        "bg_game_" + (Math.floor(4 * Math.random()) + 1)
      )
    );
    s_oStage.addChild(P);
    e = new CSeat();
    e.setCredit(TOTAL_MONEY);
    oldCredit = e.getCredit();
    e.addEventListener(SIT_DOWN, this._onSitDown, this);
    e.addEventListener(RESTORE_ACTION, this._onSetPlayerActions);
    e.addEventListener(PASS_TURN, this._passTurnToDealer);
    e.addEventListener(END_HAND, this._onEndHand);
    e.addEventListener(PLAYER_LOSE, this._playerLose);
    R = new createjs.Container();
    s_oStage.addChild(R);
    z = new CInterface(TOTAL_MONEY);
    z.displayMsg(TEXT_DISPLAY_MSG_SIT_DOWN);
    this.reset(!0);
    E = new CVector2();
    E.set(1214, 228);
    T = new CVector2();
    T.set(788, 180);
    M = new CVector2();
    M.set(418, 820);
    O = new CVector2();
    O.set(CANVAS_WIDTH / 2, -100);
    V = new CVector2(408, 208);
    L = [e.getCardOffset(), T];
    z.disableBetFiches();
    S = new CGameOver();
    Q = new CMsgBox();
    e.getCredit() < s_oGameSettings.getFichesValueAt(0)
      ? (this._gameOver(), this.changeState(-1))
      : (d = !0);
  };
  this.unload = function () {
    d = !1;
    for (var a = 0; a < G.length; a++) G[a].unload();
    a = e.getPlayerCards();
    for (var b = 0; b < a.length; b++) a[b].unload();
    z.unload();
    S.unload();
    Q.unload();
    s_oStage.removeAllChildren();
  };
  this.reset = function (a) {
    b = !0;
    k = g = c = !1;
    A = r = q = m = n = t = 0;
    e.reset();
    G = [];
    G.splice(0);
    H = [];
    H.splice(0);
    z.reset();
    z.enableBetFiches();
    a
      ? this.shuffleCard()
      : (x > B.length / 2 || p > K.length / 2) && this.shuffleCard();
  };
  this.setMoney = function (a) {
    e.setCredit(a);
    oldCredit = e.getCredit();
    z.refreshCredit(a);
    s_oInterface.enableBetFiches();
    s_oInterface.enable(!0, !1, !1, !1, !1);
  };
  this.shuffleCard = function () {
    I = [];
    I = s_oGameSettings.getShuffledCardDeck();
    B = [];
    K = [];
    for (var a = 0; a < I.length; a++)
      0 === a % 2 ? B.push(I[a]) : K.push(I[a]);
    p = x = 0;
    y = [];
    for (a = 0; a < I.length; a++) y[a] = 0;
  };
  this.changeState = function (a) {
    h = a;

    switch (h) {
      case STATE_GAME_DEALING:
        var c_bet = e.getCurBet();
        $.ajax({
          url: `${home_url}/api/games/checkBlackjackGameBank`,
          type: 'POST',
          data: {
            customerId: customerid,
            gameId: gameid,
            current_bet: c_bet,
            randomNumber,
          },
        }).done((data) => {
          if (data.gameStatus == false) {
            alert("Sorry, Something went wrong, please try again");
            window.location.reload()
          }

          WIN_OCCURRENCE = data.occurrence;

          if (randomNumber < WIN_OCCURRENCE) {
            f = !0;
            do a = s_oGameSettings.getRandDealerPattern();
            while (!1 === this._checkIfDealerPatternCanBeUsed(a));
            U = [];
            for (var b = 0; b < a.length; b++) U[b] = a[b];
          } else f = !1;
          z.disableButtons();
          z.displayMsg(TEXT_DISPLAY_MSG_DEALING);
          this._dealing();
        })
    }
  };
  this._checkIfDealerPatternCanBeUsed = function (a) {
    for (var b = 0; b < a.length; b++) if (1 < y[a[b]]) return !1;
    return !0;
  };
  this.attachCardToDeal = function (a, b, c, d) {
    var g = new CCard(E.getX(), E.getY(), R);
    if (c)
      if (f) {
        var k = U.shift();
        p++;
      } else {
        do {
          k = K[p];
          p++;
          p > K.length / 2 && (this.shuffleCard(), (p = 0));
          var h = s_oGameSettings.getCardValue(k);
          11 === h && 21 < q + h && (h = 1);
        } while (
          21 < q + h ||
          (16 < q + h && q + h < e.getHandValue(0) && 21 > e.getHandValue(0))
        );
      }
    else if (f) {
      do
        (k = B[x]),
          x++,
          x > B.length / 2 && (this.shuffleCard(), (x = 0)),
          (h = s_oGameSettings.getCardValue(k)),
          11 === h && 21 < e.getHandValue(0) + h && (h = 1);
      while (21 < e.getHandValue(0) + h);
    } else {
      do
        (k = B[x]),
          x++,
          x > B.length / 2 && (this.shuffleCard(), (x = 0)),
          (h = s_oGameSettings.getCardValue(k)),
          11 === h && 21 < e.getHandValue(0) + h && (h = 1);
      while (16 < e.getHandValue(0) + h && 22 > e.getHandValue(0) + h);
    }
    g.setInfo(a, b, k, s_oGameSettings.getCardValue(k), c, d);
    y[k] += 1;
    g.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
    G.push(g);
    playSound("card", 1, !1);
  };
  this.cardFromDealerArrived = function (a, b, c) {
    for (var d = 0; d < G.length; d++)
      if (G[d] === a) {
        G.splice(d, 1);
        break;
      }
    !1 === b
      ? (e.addCardToHand(a),
        e.increaseHandValue(a.getValue()),
        2 < c && e.refreshCardValue())
      : ((q += a.getValue()),
        2 < r && z.refreshDealerCardValue(q),
        11 === a.getValue() && A++,
        H.push(a));
    3 > c
      ? s_oGame._dealing()
      : (s_oGame._checkHand(),
        !1 === b && g && ((g = !1), s_oGame._onStandPlayer()));
  };
  this._onStandPlayer = function () {
    e.getHandValue(1) < 21 && e.stand();
  };
  this._checkHand = function () {
    var a;
    if (b) e.checkHand();
    else if ((z.refreshDealerCardValue(q), k))
      21 === q ? this.playerStandOff(0) : this._playerWin(0);
    else if (21 === q && 2 === H.length)
      for (
        0 < t &&
        2 === H.length &&
        (e.increaseCredit(2 * t + t),
          (J -= 2 * t),
          z.refreshCredit(e.getCredit())),
        a = 0;
        a < e.getNumHands();
        a++
      )
        this._playerLose(a);
    else
      21 < q
        ? 0 < A
          ? (A--,
            (q -= 10),
            z.refreshDealerCardValue(q),
            17 > q ? this.hitDealer() : this._checkWinner())
          : this._checkWinner()
        : 17 > q
          ? this.hitDealer()
          : this._checkWinner();
  };
  this._playerWin = function (a) {
    var b = 1;
    21 === e.getHandValue(a) &&
      2 === e.getNumCardsForHand(a) &&
      (b = BLACKJACK_PAYOUT);
    b = e.getBetForHand(a) + parseFloat((e.getBetForHand(a) * b).toFixed(2));
    e.increaseCredit(b);
    J -= b;
    e.showWinner(a, TEXT_SHOW_WIN_PLAYER, b);
    z.displayMsg(TEXT_DISPLAY_MSG_PLAYER_WIN);
    e.initMovement(a, M.getX(), M.getY());
    21 === q
      ? e.initInsuranceMov(M.getX(), M.getY())
      : e.initInsuranceMov(O.getX(), O.getY());
  };
  this._playerLose = function (a) {
    e.showWinner(a, TEXT_SHOW_LOSE_PLAYER, 0);
    z.displayMsg(TEXT_DISPLAY_MSG_PLAYER_LOSE);
    e.initMovement(a, O.getX(), O.getY());
    21 === q
      ? e.initInsuranceMov(M.getX(), M.getY())
      : e.initInsuranceMov(O.getX(), O.getY());
  };
  this.playerStandOff = function (a) {
    e.increaseCredit(e.getBetForHand(a));
    J -= e.getBetForHand(a);
    e.showWinner(a, TEXT_SHOW_STANDOFF, 0);
    z.displayMsg(TEXT_DISPLAY_MSG_PLAYER_STANDOFF);
    e.initMovement(a, M.getX(), M.getY());
    21 === q
      ? e.initInsuranceMov(M.getX(), M.getY())
      : e.initInsuranceMov(O.getX(), O.getY());
  };
  this._dealing = function () {
    if (m < 2 * L.length) {
      var a = new CCard(E.getX(), E.getY(), R),
        b = new CVector2(E.getX(), E.getY());
      if (1 === m % L.length) {
        r++;
        var c = new CVector2(
          T.getX() + (CARD_WIDTH + 2) * (1 < m ? 1 : 0),
          T.getY()
        );
        var d = f ? U.shift() : K[p];
        a.setInfo(b, c, d, s_oGameSettings.getCardValue(d), !0, r);
        y[d] += 1;
        p++;
        2 === r && a.addEventListener(ON_CARD_SHOWN, this._onCardShown);
      } else {
        if (
          !f &&
          1 === x &&
          18 <
          s_oGameSettings.getCardValue(B[x]) +
          s_oGameSettings.getCardValue(B[x - 1])
        ) {
          c = s_oGameSettings.getCardValue(B[x - 1]);
          do B.shift();
          while (21 === c + s_oGameSettings.getCardValue(B[x]));
        }
        a.setInfo(
          b,
          e.getAttachCardOffset(),
          B[x],
          s_oGameSettings.getCardValue(B[x]),
          !1,
          e.newCardDealed()
        );
        y[B[x]] += 1;
        x++;
      }
      G.push(a);
      m++;
      a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
      a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
      playSound("card", 1, !1);
    } else this._checkAvailableActionForPlayer();
  };
  this.hitDealer = function () {
    var a = new CVector2(E.getX(), E.getY()),
      b = new CVector2(T.getX() + (CARD_WIDTH + 3) * r, T.getY());
    r++;
    this.attachCardToDeal(a, b, !0, r);
    this.changeState(STATE_GAME_HITTING);
    playSound("card", 1, !1);
  };
  this._checkWinner = function () {
    for (var a = 0; a < e.getNumHands(); a++)
      21 < e.getHandValue(a)
        ? this._playerLose(a)
        : 21 < q
          ? this._playerWin(a)
          : 22 > e.getHandValue(a) && e.getHandValue(a) > q
            ? this._playerWin(a)
            : e.getHandValue(a) === q
              ? this.playerStandOff(a)
              : this._playerLose(a);
  };
  this._onEndHand = function () {
    var a = new CVector2(V.getX(), V.getY());

    b = e.getPlayerCards();
    for (var c = 0; c < b.length; c++) b[c].initRemoving(a), b[c].hideCard();

    for (var b = 0; b < H.length; b++) H[b].initRemoving(a), H[b].hideCard();
    e.clearText();
    z.clearDealerText();
    n = 0;
    s_oGame.changeState(STATE_GAME_SHOW_WINNER);
    // playSound("fiche_collect", 1, !1);
    backSound("fiche_collect", 0.1, !1);
    D++;
    D === AD_SHOW_COUNTER &&
      ((D = 0), $(s_oMain).trigger("show_interlevel_ad"));
  };
  this.ficheSelected = function (a, b) {
    var c = e.getCurBet();
    a > e.getCredit()
      ? Q.show(TEXT_NO_MONEY)
      : c + a > l
        ? Q.show(TEXT_ERROR_MAX_BET)
        : ((c = Number((c + a).toFixed(1))),
          e.decreaseCredit(a),
          (J += a),
          e.changeBet(c),
          e.refreshFiches(a, b, 0, 0),
          e.bet(c, !1),
          z.enable(!0, !1, !1, !1, !1),
          z.refreshCredit(e.getCredit()));
  };
  this._checkAvailableActionForPlayer = function () {
    this.changeState(-1);
    var a = e.getHandValue(0);
    if (H[0].getValue() + H[1].getValue() === 21) {
      11 === H[0].getValue() && e.getCredit() >= e.getCurBet() / 2
        ? ((t = e.getCurBet() / 2), z.showInsurancePanel())
        : this._passTurnToDealer();
    } else if (21 === a)
      (k = !0),
        e.refreshCardValue(),
        11 === H[0].getValue() && e.getCredit() >= e.getCurBet() / 2
          ? ((t = e.getCurBet() / 2), z.showInsurancePanel())
          : this._passTurnToDealer();
    else {
      21 < a && e.removeAce();
      e.refreshCardValue();
      a = !1;
      e.isSplitAvailable() && e.getCredit() >= e.getCurBet() && (a = !0);
      z.displayMsg(TEXT_DISPLAY_MSG_YOUR_ACTION);
      var b = !1;
      2 === e.getNumCardsForHand(0) &&
        7 < e.getHandValue(0) &&
        13 > e.getHandValue(0) &&
        e.getCredit() >= e.getCurBet() &&
        !c &&
        (b = !0);
      z.enable(!1, !0, !0, b, a);
      11 === H[0].getValue() &&
        e.getCredit() >= e.getCurBet() / 2 &&
        z.showInsurancePanel();
    }
  };
  this._passTurnToDealer = function () {
    b &&
      ((b = !1),
        z.disableButtons(),
        H[1].showCard(),
        playSound("card", 1, !1),
        z.displayMsg(TEXT_DISPLAY_MSG_DEALER_TURN));
  };
  this._gameOver = function () {
    S.show();
  };
  this.onFicheSelected = function (a, b) {
    this.ficheSelected(b, a);
  };
  this._onSetPlayerActions = function (a, b, c, d, g) {
    z.enable(a, b, c, d, g);
    e.refreshCardValue();
  };
  this._onSitDown = function () {
    this.changeState(STATE_GAME_WAITING_FOR_BET);
    z.enableBetFiches();
  };
  this.onDeal = function () {
    splited = 0;
    const random = new Random();
    randomNumber = random.integer(1, 100);
    beted = 1;
    e.getCredit() + e.getCurBet() < s_oGameSettings.getFichesValueAt(0)
      ? this._gameOver()
      : v > e.getCurBet()
        ? (Q.show(TEXT_ERROR_MIN_BET),
          s_oInterface.enableBetFiches(),
          s_oInterface.enable(!0, !1, !1, !1, !1))
        : (this.changeState(STATE_GAME_DEALING),
          $(s_oMain).trigger("bet_placed", e.getCurBet()));
  };
  this.onHit = function () {
    var a = new CVector2(E.getX(), E.getY()),
      b = new CVector2(
        e.getAttachCardOffset().getX(),
        e.getAttachCardOffset().getY()
      );
    this.attachCardToDeal(a, b, !1, e.newCardDealed());
    this.changeState(STATE_GAME_HITTING);
  };
  this.onStand = function () {
    e.stand();
  };
  this.changePassTurn = function () {
    e.changePassTurn();
  };
  this.onDouble = function () {
    var a = e.getCurBet();
    var b = a + a;
    e.doubleAction(b);
    e.changeBet(b);
    e.decreaseCredit(a);
    J += a;
    J < 2 * b && (f = !1);
    e.bet(b);
    z.refreshCredit(e.getCredit());
    this.onHit();
    // g = !0;
    $(s_oMain).trigger("bet_placed", a);
    setTimeout(() => {
      e.getHandValue(0) < 21 && this.onStand();
    }, 300);
  };
  this.onSplit = function () {
    splited = 1;
    J < 4 * e.getCurBet() && (f = !1);
    e.split();
    this.changeState(STATE_GAME_SPLIT);
    setTimeout(() => {
      this.onHit();
    }, 300);
  };
  this._onSplitCardEndAnim = function () {
    var a = e.getCurBet(),
      b = a;
    a += b;
    e.bet(a, !0);
    c = !0;
    z.enable(!1, !0, !0, !1, !1);
    e.setSplitHand();
    e.refreshCardValue();
    e.changeBet(a - b);
    e.decreaseCredit(b);
    J += b;
    z.refreshCredit(e.getCredit());
    $(s_oMain).trigger("bet_placed", b);
  };
  this.clearBets = function () {
    var a = e.getStartingBet();
    0 < a &&
      (e.clearBet(),
        e.increaseCredit(a),
        (J -= a),
        z.refreshCredit(e.getCredit()));
  };
  this.rebet = function () {
    this.clearBets();
    var a = e.rebet();
    0 < a
      ? (z.enable(!0, !1, !1, !1, !1),
        (J += a),
        z.refreshCredit(e.getCredit()),
        (n = BET_TIME))
      : z.disableRebet();
  };
  this.onBuyInsurance = function () {
    z.enable(!1, !0, !0, !1, !1);
    t = e.getCurBet() / 2;
    var a = e.getCurBet();
    a += t;
    e.insurance(a, -t, t);
    $(s_oMain).trigger("bet_placed", t);
    z.refreshCredit(e.getCredit());
    k && this._passTurnToDealer();
    if (H[0].getValue() + H[1].getValue() === 21) {
      this._passTurnToDealer();
    }
  };
  this.onNotBuyInsurance = function () {
    z.enable(!1, !0, !0, !1, !1);
    k && this._passTurnToDealer();
    if (H[0].getValue() + H[1].getValue() === 21) {
      this._passTurnToDealer();
    }
  };
  this._onCardShown = function () {
    s_oGame._checkHand();
  };
  this._onRemoveCard = function (a) {
    a.unload();
  };
  this.onExit = function () {
    this.unload();
    $(s_oMain).trigger("save_score", [e.getCredit()]);
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", e.getCredit());
    s_oMain.gotoMenu();
  };
  this.getState = function () {
    return h;
  };
  this._updateWaitingBet = function () {
    z.displayMsg(TEXT_MIN_BET + ":" + v + "\n" + TEXT_MAX_BET + ":" + l);
  };
  this._updateDealing = function () {
    for (var a = 0; a < G.length; a++) G[a].update();
  };
  this._updateHitting = function () {
    for (var a = 0; a < G.length; a++) G[a].update();
  };
  this._updateSplit = function () {
    e.updateSplit();
  };
  this._updateShowWinner = function () {
    e.updateFichesController(s_iTimeElaps);
    for (var a = e.getPlayerCards(), b = 0; b < a.length; b++) a[b].update();
    for (a = 0; a < H.length; a++) H[a].update();
    n += s_iTimeElaps;
    n > TIME_END_HAND &&
      ((n = 0),
        this.reset(!1),
        z.reset(),
        e.getCredit() < s_oGameSettings.getFichesValueAt(0)
          ? (this._gameOver(), this.changeState(-1))
          : this.changeState(STATE_GAME_WAITING_FOR_BET),
        z.refreshCredit(e.getCredit()));
  };
  this.update = function () {
    //=================
    if (!1 !== d)
      switch (h) {
        case STATE_GAME_WAITING_FOR_BET:
          this._updateWaitingBet();
          break;
        case STATE_GAME_DEALING:
          this._updateDealing();
          break;
        case STATE_GAME_HITTING:
          this._updateHitting();
          break;
        case STATE_GAME_SPLIT:
          this._updateSplit();
          break;
        case STATE_GAME_SHOW_WINNER:
          this._updateShowWinner();
      }
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  BET_TIME = a.bet_time;
  BLACKJACK_PAYOUT = a.blackjack_payout;
  WIN_OCCURRENCE = a.win_occurrence;
  var J = a.game_cash;
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
    k,
    t,
    n,
    l,
    v,
    h,
    m,
    q,
    r,
    A,
    x,
    p,
    D,
    G,
    K,
    H,
    I,
    B = null,
    L = null;
  this._init = function (a) {
    var y = s_oSpriteLibrary.getSprite("but_exit");
    c = CANVAS_WIDTH - y.width / 2 - 2;
    g = y.height / 2 + 2;
    n = new CGfxButton(c, g, y, !0);
    n.addEventListener(ON_MOUSE_UP, this._onExit, this);
    !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
      ? ((f = n.getX() - y.width),
        (k = y.height / 2 + 2),
        (x = new CToggle(
          f,
          k,
          s_oSpriteLibrary.getSprite("audio_icon"),
          s_bAudioActive,
          s_oStage
        )),
        x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        (d = f - y.width - 2),
        (b = k))
      : ((d = n.getX() - y.width), (b = y.height / 2 + 2));
    y = window.document;
    var E = y.documentElement;
    B =
      E.requestFullscreen ||
      E.mozRequestFullScreen ||
      E.webkitRequestFullScreen ||
      E.msRequestFullscreen;
    L =
      y.exitFullscreen ||
      y.mozCancelFullScreen ||
      y.webkitExitFullscreen ||
      y.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (B = !1);
    B &&
      screenfull.isEnabled &&
      ((y = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (I = new CToggle(d, b, y, s_bFullscreen, s_oStage)),
        I.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    y = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    y.x = 280;
    y.y = 6;
    s_oStage.addChild(y);
    // y = s_oSpriteLibrary.getSprite("bet_bg");
    // E = createBitmap(y);
    // E.x = 340;
    // E.y = CANVAS_HEIGHT - y.height + 4;
    // s_oStage.addChild(E);
    y = s_oSpriteLibrary.getSprite("but_game_small_bg");
    l = new CTextButton(
      444,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_CLEAR,
      FONT_GAME_1,
      "#ffffff",
      14,
      s_oStage
    );
    l.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
    v = new CTextButton(
      632,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_REBET,
      FONT_GAME_1,
      "#ffffff",
      14,
      s_oStage
    );
    v.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
    G = new CTLText(
      s_oStage,
      400,
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
    K = new CTLText(
      s_oStage,
      400,
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
    D = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
    D.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    D.x = 728;
    D.y = 180;
    D.textAlign = "right";
    s_oStage.addChild(D);
    y = createBitmap(s_oSpriteLibrary.getSprite("money_bg"));
    y.x = 1127;
    y.y = CANVAS_HEIGHT - 100;
    s_oStage.addChild(y);
    p = new CTLText(
      s_oStage,
      1130,
      CANVAS_HEIGHT - 95,
      224,
      29,
      29,
      "center",
      "#ffde00",
      FONT_GAME_2,
      1,
      0,
      0,
      TEXT_CURRENCY + a.toFixed(2),
      !0,
      !0,
      !0,
      !1
    );
    y = s_oSpriteLibrary.getSprite("but_game_bg");
    h = new CTextButton(
      908,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_DEAL,
      FONT_GAME_1,
      "#ffffff",
      20,
      s_oStage
    );
    h.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    m = new CTextButton(
      1008,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_HIT,
      FONT_GAME_1,
      "#ffffff",
      20,
      s_oStage
    );
    m.addEventListener(ON_MOUSE_UP, this._onButHitRelease, this);
    q = new CTextButton(
      1108,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_STAND,
      FONT_GAME_1,
      "#ffffff",
      20,
      s_oStage
    );
    q.addEventListener(ON_MOUSE_UP, this._onButStandRelease, this);
    r = new CTextButton(
      1208,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_DOUBLE,
      FONT_GAME_1,
      "#ffffff",
      20,
      s_oStage
    );
    r.addEventListener(ON_MOUSE_UP, this._onButDoubleRelease, this);
    A = new CTextButton(
      1308,
      CANVAS_HEIGHT - 30,
      y,
      TEXT_SPLIT,
      FONT_GAME_1,
      "#ffffff",
      20,
      s_oStage
    );
    A.addEventListener(ON_MOUSE_UP, this._onButSplitRelease, this);
    a = [
      { x: 320, y: 635 },
      { x: 405, y: 635 },
      { x: 490, y: 635 },
      { x: 575, y: 635 },
      { x: 660, y: 635 },
    ];
    t = [];
    y = s_oGameSettings.getFichesValues();
    for (E = 0; E < NUM_FICHES; E++)
      (t[E] = new CFiche(a[E].x, a[E].y, E, y[E], !0, s_oStage)),
        t[E].addEventListenerWithParams(
          ON_MOUSE_UP,
          this._onFicheClicked,
          this,
          [y[E], E]
        );
    H = new CInsurancePanel();
    this.disableButtons();
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    n.unload();
    n = null;
    !1 === DISABLE_SOUND_MOBILE && (x.unload(), (x = null));
    B && screenfull.isEnabled && I.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, h) {
    n.setPosition(c - a, h + g);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      x.setPosition(f - a, h + k);
    B && screenfull.isEnabled && I.setPosition(d - a, b + h);
  };
  this.reset = function () {
    this.disableButtons();
  };
  this.enableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) t[a].enable();
    l.enable();
    v.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) t[a].disable();
    l.disable();
    v.disable();
  };
  this.disableRebet = function () {
    v.disable();
  };
  this.disableButtons = function () {
    h.disable();
    m.disable();
    q.disable();
    r.disable();
    A.disable();
  };
  this.enable = function (a, b, c, d, g) {
    a ? h.enable() : h.disable();
    b ? m.enable() : m.disable();
    c ? q.enable() : q.disable();
    d ? r.enable() : r.disable();
    g ? A.enable() : A.disable();
  };
  this.refreshCredit = function (a) {
    p.refreshText(TEXT_CURRENCY + a.toFixed(2));
  };
  this.refreshDealerCardValue = function (a) {
    D.text = "" + a;
  };
  this.displayMsg = function (a, b) {
    G.refreshText(a);
    void 0 !== b && K.refreshText(b);
  };
  this.showInsurancePanel = function () {
    this.disableButtons();
    H.show(TEXT_INSURANCE);
  };
  this.clearDealerText = function () {
    D.text = "";
  };
  this._onFicheClicked = function (a) {
    s_oGame.onFicheSelected(a[1], a[0]);
  };
  this._onButClearRelease = function () {
    s_oGame.clearBets();
  };
  this._onButRebetRelease = function () {
    s_oGame.rebet();
  };
  this._onButDealRelease = function () {
    this.disableBetFiches();
    this.disableButtons();
    s_oGame.onDeal();
  };
  this._onButHitRelease = function () {
    this.disableButtons();
    s_oGame.onHit();
  };
  this._onButStandRelease = function () {
    this.disableButtons();
    s_oGame.changePassTurn();
    s_oGame.onStand();
  };
  this._onButDoubleRelease = function () {
    this.disableButtons();
    s_oGame.onDouble();
  };
  this._onButSplitRelease = function () {
    this.disableButtons();
    s_oGame.onSplit();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    B && screenfull.isEnabled && I.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? L.call(window.document)
      : B.call(window.document.documentElement);
    sizeHandler();
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
  var a,
    d,
    b,
    c,
    g,
    f,
    k,
    t,
    n,
    l,
    v,
    h,
    m,
    q,
    r,
    A,
    x,
    p,
    D,
    G,
    K,
    H,
    I,
    B,
    L,
    passturned = !1;
  this._init = function () {
    l = new createjs.Container();
    l.x = 734;
    l.y = 360;
    var a = createBitmap(s_oSpriteLibrary.getSprite("seat"));
    a.x = 66;
    a.y = 175;
    l.addChild(a);
    a = s_oSpriteLibrary.getSprite("but_game_small_bg");
    r = new CTextButton(
      115,
      221,
      a,
      TEXT_SIT_DOWN,
      FONT_GAME_1,
      "#ffffff",
      20,
      l
    );
    r.addEventListener(ON_MOUSE_UP, this._onSitDown, this);
    m = new createjs.Text("", "30px " + FONT_GAME_1, "#ffde00");
    m.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    m.x = 110;
    m.y = 268;
    m.textAlign = "center";
    l.addChild(m);
    q = new createjs.Text("", "30px " + FONT_GAME_1, "#ffde00");
    q.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    q.x = 200;
    q.y = 268;
    q.textAlign = "center";
    l.addChild(q);
    v = new createjs.Text("", "30px " + FONT_GAME_1, "#ffffff");
    v.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    v.x = 16;
    v.y = 105;
    v.textAlign = "right";
    l.addChild(v);
    h = new createjs.Text("", "30px " + FONT_GAME_1, "#ffffff");
    h.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    h.x = 240;
    h.y = 105;
    h.textAlign = "left";
    l.addChild(h);
    D = new createjs.Text("", "30px " + FONT_GAME_1, "#ffffff");
    D.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    D.x = -30;
    D.y = 240;
    D.textAlign = "center";
    l.addChild(D);
    G = new createjs.Text("", "30px " + FONT_GAME_1, "#ffffff");
    G.shadow = new createjs.Shadow("#000000", 2, 2, 1);
    G.x = 270;
    G.y = 240;
    G.textAlign = "left";
    l.addChild(G);
    K = createBitmap(s_oSpriteLibrary.getSprite("arrow_hand"));
    K.visible = !1;
    l.addChild(K);
    s_oStage.addChild(l);
    A = new CVector2();
    A.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    H = new CFichesController({ x: 834, y: 566 }, A);
    g = 0;
    f = [];
    k = [];
    this.reset();
    x = new CVector2();
    x.set(64, 163);
    n = new CVector2(x.getX(), x.getY());
    p = new CVector2();
    p.set(172, 163);
    B = [];
    L = [];
  };
  this.unload = function () {
    s_oStage.removeChild(l);
  };
  this.addEventListener = function (a, b, c) {
    B[a] = b;
    L[a] = c;
  };
  this.reset = function () {
    c = b = 0;
    d = a = !1;
    for (var g = 0; g < f.length; g++) f[g].getFichesController().reset();
    f = [];
    g = new CHandController(x, H);
    f.push(g);
    for (g = 0; g < k.length; g++) k[g].unload();
    k = [];
    t = [];
    H.addEventListener(FICHES_END_MOV, this._onFichesEndMove);
    I = null;
    this.clearText();
  };
  this.clearText = function () {
    m.text = "";
    q.text = "";
    v.text = "";
    h.text = "";
  };
  this.clearBet = function () {
    H.reset();
    t = [];
    m.text = "";
    f[b].changeBet(0);
  };
  this.addCardToHand = function (a) {
    f[b].addCard(a);
    k.push(a);
    a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
  };
  this.increaseHandValue = function (a) {
    f[b].increaseHandValue(a);
  };
  this.refreshCardValue = function () {
    v.text = "" + this.getHandValue(0);
    0 < this.getHandValue(1) && (h.text = "" + this.getHandValue(1));
  };
  this.setCredit = function (a) {
    g = a;
  };
  this.increaseCredit = function (a) {
    g += a;
  };
  this.changeBet = function (a) {
    f[b].changeBet(a);
  };
  this.getSumOfCards = function (a) {
    return f[a].getValue();
  };
  this.checkHand = function () {
    //=====================
    passturned = !1;
    var c = f[b].getValue();
    if (21 === c) this.checkPlayerLastHand(PASS_TURN), (passturned = !0);
    else if (21 < c)
      0 < f[b].getAces()
        ? (f[b].removeAce(),
          21 === f[b].getValue()
            ? this.checkPlayerLastHand(PASS_TURN)
            : a
              ? this.checkPlayerLastHand(PASS_TURN)
              : B[RESTORE_ACTION] &&
              B[RESTORE_ACTION].call(L[RESTORE_ACTION], !1, !0, !0, !1, !1),
          this.refreshCardValue())
        : (1 < f.length || d) && splited < 2
          ? (this.checkPlayerLastHand(PASS_TURN),
            (passturned = !0),
            (splited = 2))
          : this.checkPlayerLastHand(PLAYER_LOSE);
    else if (a) this.checkPlayerLastHand(PASS_TURN);
    else {
      var g = !1;
      2 === f[b].getNumCards() && 7 < c && 13 > c
        ? (g = !0)
        : 0 < this.getAces() &&
        (21 < c
          ? ((c -= 10), this.removeAce(), 7 < c && 13 > c && (g = !0))
          : ((c -= 10),
            2 === f[b].getNumCards() && 7 < c && 13 > c && (g = !0)));
      setTimeout(() => {
        B[RESTORE_ACTION] &&
          B[RESTORE_ACTION].call(L[RESTORE_ACTION], !1, !0, !0, g, !1);
      }, 400);
    }
  };
  this.checkPlayerLastHand = function (a) {
    b--;
    -1 < b
      ? (B[RESTORE_ACTION] && s_oGame.onHit(),
        (K.x = x.getX()),
        setTimeout(() => {
          B[RESTORE_ACTION].call(L[RESTORE_ACTION], !1, !0, !0, !1, !1);
        }, 300))
      : (B[a] && B[a].call(L[a], 0), this.removeArrow());
  };
  this.bet = function (a, b) {
    b
      ? ((m.text = TEXT_CURRENCY + a / 2), (q.text = TEXT_CURRENCY + a / 2))
      : (m.text = TEXT_CURRENCY + a);
  };
  this.setSplitHand = function () {
    for (var a = [], c = 0; c < t.length; c++) a.push(t[c]);
    I = new CFichesController({ x: 950, y: 566 }, A);
    I.refreshFiches(a, 0, 0, !1);
    I.addEventListener(I.FICHES_END_MOV, this._onFichesEndMove);
    a = new CHandController(p, I);
    f.push(a);
    f[1].addCard(f[0].getCard(1));
    f[0].removeCard(1);
    1 === f[0].getValue() && (f[0].setHandValue(11), f[0].increaseAces());
    f[1].setHandValue(f[0].getValue());
    b = f.length - 1;
  };
  this.decreaseCredit = function (a) {
    g -= a;
  };
  this.changePassTurn = function () {
    passturned = !1;
  };
  this.stand = function () {
    passturned === !1 && this.checkPlayerLastHand(PASS_TURN);
  };
  this.refreshFiches = function (a, b, c, d) {
    t.push({ value: a, index: b });
    H.refreshFiches(t, c, d);
  };
  this.initMovement = function (a, b, c) {
    this.getFichesController(a).initMovement(b, c, !1);
  };
  this.initInsuranceMov = function (a, b) {
    H.initInsuranceMov(a, b);
  };
  this.showWinner = function (a, b, c) {
    var cur_bet = f[0].getCurBet();
    var is_win = false
    if (b == TEXT_SHOW_WIN_PLAYER) {
      is_win = true
    }
    if (b !== TEXT_SHOW_STANDOFF) {
      $.ajax({
        url: `${home_url}/api/games/updateBlackjackGameBank`,
        type: 'POST',
        async: false,
        data: {
          customerId: customerid,
          gameId: gameid,
          current_bet: cur_bet,
          is_win,
        },
        success: (data) => {
          if (data.gameStatus == false) {
            alert("Sorry, Something went wrong, please try again");
            window.location.reload()
          }
        }
      })
    }

    0 < c
      ? (0 === a ? (D.text = b + ": " + c) : (G.text = b + ": " + c),
        playSound("win", 1, !1))
      : (0 === a ? (D.text = b) : (G.text = b), playSound("lose", 1, !1));
    var d = this;
    0 === a
      ? createjs.Tween.get(D)
        .to({ alpha: 1 }, TIME_SHOW_FINAL_CARDS)
        .call(function () {
          d.endWinAnim();
        })
      : createjs.Tween.get(G)
        .to({ alpha: 1 }, TIME_SHOW_FINAL_CARDS)
        .call(function () {
          d.endWinAnim();
        });
    let winAmount = g - oldCredit + f[0].getCurBet();
    !!f[1] && (winAmount += f[1].getCurBet());
    oldCredit = g;

    setTimeout(() => {
      beted && $(s_oMain).trigger("save_score", [this.getCredit()]);
      beted = 0;
    }, 400);
  };
  this.endWinAnim = function () {
    D &&
      G &&
      ((D.text = ""),
        (G.text = ""),
        B[END_HAND] && B[END_HAND].call(L[END_HAND]));
  };
  this.newCardDealed = function () {
    c++;
    return c;
  };
  this.removeAce = function () {
    f[b].removeAce();
  };
  this.removeArrow = function () {
    K.visible = !1;
  };
  this.doubleAction = function (a) {
    f[b].changeBet(a);
    a = [];
    for (var c = 0; c < t.length; c++) a.push(t[c]);
    1 < f.length
      ? 1 === b
        ? I.refreshFiches(a, 0, 40)
        : H.refreshFiches(a, 0, 40)
      : H.refreshFiches(a, 0, 40);
  };
  this.split = function () {
    k[0].initSplit(new CVector2(l.x + x.getX(), l.y + x.getY()));
    k[1].initSplit(new CVector2(l.x + p.getX(), l.y + p.getY()));
    k[1].addEventListener(SPLIT_CARD_END_ANIM, this._onSplitCardEndAnim);
  };
  this.insurance = function (a, b, c) {
    this.changeBet(a);
    this.increaseCredit(b);
    a = H.createFichesPile(c, !0);
    t = [];
    for (b = 0; b < a.length; b++)
      t.push({ value: a[b].value, index: a[b].index });
    d = !0;
  };
  this.rebet = function () {
    var a = H.getPrevBet();
    if (a > g || 0 === a) return 0;
    this.decreaseCredit(a);
    this.changeBet(a);
    var b = H.createFichesPile(a, !1);
    t = [];
    for (var c = 0; c < b.length; c++)
      t.push({ value: b[c].value, index: b[c].index });
    this.bet(a, !1);
    return a;
  };
  this._onSitDown = function () {
    r.setVisible(!1);
    B[SIT_DOWN] && B[SIT_DOWN].call(L[SIT_DOWN]);
  };
  this._onFichesEndMove = function () {
    B[ASSIGN_FICHES] && B[ASSIGN_FICHES].call(L[ASSIGN_FICHES]);
  };
  this._onRemoveCard = function (a) {
    for (var b = 0; b < k.length; b++)
      if (k[b] === a) {
        k.splice(b, 1);
        break;
      }
  };
  this._onSplitCardEndAnim = function () {
    s_oGame._onSplitCardEndAnim();
    K.x = p.getX();
    K.y = p.getY() + 70;
    K.visible = !0;
  };
  this.updateFichesController = function (a) {
    I && I.update(a);
    H.update(a);
  };
  this.updateSplit = function () {
    for (var a = 0; a < k.length; a++) k[a].update(s_iTimeElaps);
  };
  this.isSplitAvailable = function () {
    return k[0] && k[1]
      ? 0 === Math.abs(k[0].getFotogram() - k[1].getFotogram()) % 13
        ? !0
        : !1
      : !1;
  };
  this.getAttachCardOffset = function () {
    if (0 === b)
      n.set(
        l.x + x.getX() + (CARD_WIDTH / 2) * f[b].getNumCards(),
        l.y + x.getY() - (CARD_HEIGHT / 2) * f[b].getNumCards() - 10
      );
    else {
      var a = l.x + p.getX() + (CARD_WIDTH / 2) * f[b].getNumCards(),
        c = l.y + p.getY() - (CARD_HEIGHT / 2) * f[b].getNumCards() - 10;
      n.set(a, c);
    }
    return n;
  };
  this.getCurBet = function () {
    return f[b].getCurBet();
  };
  this.getCredit = function () {
    return g;
  };
  this.getHandValue = function (a) {
    return a > f.length - 1 ? 0 : f[a].getValue();
  };
  this.getNumHands = function () {
    return f.length;
  };
  this.getNumCardsForHand = function (a) {
    return f[a].getNumCards();
  };
  this.getBetForHand = function (a) {
    return f[a].getCurBet();
  };
  this.getAces = function () {
    return f[b].getAces();
  };
  this.getFichesController = function (a) {
    return f[a].getFichesController();
  };
  this.getCardOffset = function () {
    return x;
  };
  this.getPlayerCards = function () {
    return k;
  };
  this.getStartingBet = function () {
    return H.getValue();
  };
  this._init();
}
function CFichesController(a, d) {
  var b, c, g, f, k, t, n, l, v, h, m, q, r, A, x;
  this._init = function (a, d) {
    q = new createjs.Container();
    q.x = a.x;
    q.y = a.y;
    s_oStage.addChild(q);
    r = new createjs.Container();
    r.x = 400;
    r.y = 230;
    s_oStage.addChild(r);
    n = new CVector2();
    n.set(q.x, q.y);
    h = new CVector2();
    h.setV(d);
    k = t = f = 0;
    c = b = !1;
    A = [];
    x = [];
  };
  this.addEventListener = function (a, b, c) {
    A[a] = b;
    x[a] = c;
  };
  this.reset = function () {
    g = b = !1;
    k = 0;
    q.removeAllChildren();
    r.removeAllChildren();
    q.x = n.getX();
    q.y = n.getY();
    r.x = h.getX();
    r.y = h.getY();
  };
  this.refreshFiches = function (a, c, d, g) {
    a = a.sortOn("value", "index");
    var f = d - 10;
    g && (b = !0);
    for (var h = (k = 0), p = 0; p < a.length; p++) {
      var l = q;
      g && (l = r);
      new CFiche(c - 20, f, a[p].index, a[p].value, !1, l).setScale(0.8);
      f -= 5;
      h++;
      9 < h && ((h = 0), (c += FICHE_WIDTH), (f = d));
      k += a[p].value;
      k = parseFloat(k.toFixed(2));
    }
    playSound("chip", 1, !1);
  };
  this.createFichesPile = function (a, b) {
    var c = s_oGameSettings.getFichesValues(),
      d = [];
    do {
      for (var g = c[c.length - 1], f = c.length - 1; g > a;) f--, (g = c[f]);
      f = Math.floor(a / g);
      for (var k = 0; k < f; k++)
        d.push({ value: g, index: s_oGameSettings.getIndexForFiches(g) });
      g = a % g;
      a = g = parseFloat(g.toFixed(2));
    } while (0 < g);
    this.refreshFiches(d, 0, 0, b);
    return d;
  };
  this.rebet = function () {
    this.createFichesPile(t, !1);
  };
  this.initMovement = function (a, d, g) {
    b || (t = k);
    c = g;
    l = new CVector2(q.x, q.y);
    v = new CVector2(a, d);
  };
  this.initInsuranceMov = function (a, b) {
    m = new CVector2(a, b);
  };
  this.getValue = function () {
    return k;
  };
  this.getPrevBet = function () {
    return t;
  };
  this._updateInsuranceFiches = function () {
    if (b) {
      var a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
      a = tweenVectors(h, m, a, new CVector2());
      r.x = a.getX();
      r.y = a.getY();
    }
  };
  this.update = function (a) {
    if (!g)
      if (((f += a), f > TIME_FICHES_MOV))
        (f = 0),
          (g = !0),
          A[FICHES_END_MOV] && A[FICHES_END_MOV].call(x[FICHES_END_MOV], c, k);
      else {
        a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
        var b = new CVector2();
        b = tweenVectors(l, v, a, b);
        q.x = b.getX();
        q.y = b.getY();
        this._updateInsuranceFiches();
      }
  };
  this._init(a, d);
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
  var a, d, b, c;
  this._init = function () {
    b = [];
    a = [];
    for (var d = 0; 2 > d; d++)
      for (var f = 0; 52 > f; f++) {
        a.push(f);
        var k = (f + 1) % 13;
        if (10 < k || 0 === k) k = 10;
        1 === k && (k = 11);
        b.push(k);
      }
    c = [1, 5, 10, 25, 100];
  };
  this.getFichesValues = function () {
    return c;
  };
  this.getFichesValueAt = function (a) {
    return c[a];
  };
  this.getIndexForFiches = function (a) {
    for (var b = 0, d = 0; d < c.length; d++) c[d] === a && (b = d);
    return b;
  };
  this.generateFichesPile = function (a) {
    var b = [],
      d = c.length - 1,
      g = c[d];
    do {
      var n = a % g;
      n = CMath.roundDecimal(n, 1);
      a = Math.floor(a / g);
      for (var l = 0; l < a; l++) b.push(g);
      d--;
      g = c[d];
      a = n;
    } while (0 < n && -1 < d);
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
    return b[a];
  };
  this.getRandDealerPattern = function () {
    var a;
    let numOfCards =
      Math.random() < 0.1
        ? Math.floor(Math.random() * 4 + 2)
        : Math.floor(Math.random() * 1.5 + 2);
    do {
      var b = [];
      for (var c = (a = 0); numOfCards > c; c++) {
        do var d = Math.floor(52 * Math.random());
        while (11 === this.getCardValue(d));
        a += this.getCardValue(d);
        b.push(d);
      }
    } while (12 > a || 16 < a);
    a = 21 - a;
    do c = Math.floor(52 * Math.random());
    while (this.getCardValue(c) <= a || 11 === this.getCardValue(c));
    b.push(c);
    return b;
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
      var k = easeLinear(d, b, c, g, f);
      break;
    case TYPE_IN_CUBIC:
      k = easeInCubic(d, b, c, g, f);
      break;
    case TYPE_OUT_CUBIC:
      k = easeOutCubic(d, b, c, g, f);
      break;
    case TYPE_IN_BACK:
      k = easeInBack(d, b, c, g, f);
      break;
    case TYPE_OUT_BACK:
      k = easeInBack(d, b, c, g, f);
  }
  return k;
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
function easeInElastic(a, d, b, c, g, f, k) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  k || (k = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = k / 4))
    : (g = (k / (2 * Math.PI)) * Math.asin(b / f));
  return (
    -(f * Math.pow(2, 10 * --a) * Math.sin((2 * (a * c - g) * Math.PI) / k)) + d
  );
}
function easeOutElastic(a, d, b, c, g, f, k) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  k || (k = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = k / 4))
    : (g = (k / (2 * Math.PI)) * Math.asin(b / f));
  return (
    f * Math.pow(2, -10 * a) * Math.sin((2 * (a * c - g) * Math.PI) / k) + b + d
  );
}
function easeInOutElastic(a, d, b, c, g, f, k) {
  if (0 == a) return d;
  if (1 == (a /= c)) return d + b;
  k || (k = 0.3 * c);
  !f || f < Math.abs(b)
    ? ((f = b), (g = k / 4))
    : (g = (k / (2 * Math.PI)) * Math.asin(b / f));
  return 1 > a
    ? -0.5 *
    f *
    Math.pow(2, 10 * --a) *
    Math.sin((2 * (a * c - g) * Math.PI) / k) +
    d
    : f *
    Math.pow(2, -10 * --a) *
    Math.sin((2 * (a * c - g) * Math.PI) / k) *
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
function CHandController(a, d) {
  var b, c, g, f, k, t;
  this._init = function (a, d) {
    g = c = b = 0;
    f = [];
    k = a;
    t = d;
  };
  this.addCard = function (a) {
    f.push(a);
    11 === a.getValue() && c++;
  };
  this.removeCard = function (a) {
    var d = f[a];
    b -= d.getValue();
    11 === d.getValue() && c--;
    f.splice(a, 1);
  };
  this.changeBet = function (a) {
    g = a;
  };
  this.removeAce = function () {
    b -= 10;
    c--;
  };
  this.setHandValue = function (a) {
    b = a;
  };
  this.increaseAces = function () {
    c++;
  };
  this.increaseHandValue = function (a) {
    b += a;
  };
  this.getValue = function () {
    return b;
  };
  this.getCurBet = function () {
    return g;
  };
  this.getDoubleBet = function () {
    return g;
  };
  this.getAces = function () {
    return c;
  };
  this.getCard = function (a) {
    return f[a];
  };
  this.getNumCards = function () {
    return f.length;
  };
  this.getAttachOffset = function () {
    return k;
  };
  this.getFichesController = function () {
    return t;
  };
  this._init(a, d);
}
function CCard(a, d, b) {
  var c,
    g,
    f = -1,
    k,
    t,
    n,
    l,
    v,
    h,
    m,
    q,
    r,
    A;
  this._init = function (a, b, c) {
    A = c;
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
    r = createSprite(
      c,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    r.x = a;
    r.y = b;
    r.stop();
    A.addChild(r);
    m = [];
    q = [];
  };
  this.unload = function () {
    h = v = null;
    A.removeChild(r);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    q[a] = c;
  };
  this.setInfo = function (a, b, d, m, r, q) {
    g = !1;
    l = 0;
    k = d;
    t = m;
    v = a;
    h = b;
    n = q;
    c = r;
    f = STATE_CARD_DEALING;
  };
  this.removeFromTable = function () {
    m[ON_CARD_TO_REMOVE] &&
      m[ON_CARD_TO_REMOVE].call(q[ON_CARD_TO_REMOVE], this);
  };
  this.initSplit = function (a) {
    v = new CVector2(r.x, r.y);
    h = a;
    l = 0;
    f = STATE_CARD_SPLIT;
  };
  this.initRemoving = function (a) {
    v = new CVector2(r.x, r.y);
    h = a;
    l = 0;
    f = STATE_CARD_REMOVING;
  };
  this.setValue = function () {
    r.gotoAndStop(k);
    var a = this;
    createjs.Tween.get(r)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardShown();
      });
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(r)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(r)
      .to({ scaleX: 0.1 }, 100)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    r.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(r)
      .to({ scaleX: 1 }, 100)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    m[ON_CARD_SHOWN] && m[ON_CARD_SHOWN].call(q[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    g = !0;
  };
  this.getValue = function () {
    return t;
  };
  this.getFotogram = function () {
    return k;
  };
  this._updateDealing = function () {
    l += s_iTimeElaps;
    if (l > TIME_CARD_DEALING)
      (f = -1),
        (l = 0),
        (r.x = h.getX()),
        (r.y = h.getY()),
        (r.rotation = 360),
        m[ON_CARD_ANIMATION_ENDING] &&
        m[ON_CARD_ANIMATION_ENDING].call(
          q[ON_CARD_ANIMATION_ENDING],
          this,
          c,
          n
        ),
        !1 === (c && 2 === n) && this.showCard();
    else {
      this.visible = !0;
      var a = easeInOutCubic(l, 0, 1, TIME_CARD_DEALING),
        b = new CVector2();
      b = tweenVectors(v, h, a, b);
      r.x = b.getX();
      r.y = b.getY();
      !1 === c && (r.rotation = (36e3 * a) / 100);
    }
  };
  this._updateSplit = function () {
    l += s_iTimeElaps;
    if (l > TIME_CARD_DEALING)
      (l = 0),
        m[SPLIT_CARD_END_ANIM] &&
        m[SPLIT_CARD_END_ANIM].call(q[SPLIT_CARD_END_ANIM]),
        (f = -1);
    else {
      var a = easeInOutCubic(l, 0, 1, TIME_CARD_DEALING),
        b = new CVector2();
      b = tweenVectors(v, h, a, b);
      r.x = b.getX();
      r.y = b.getY();
    }
  };
  this._updateRemoving = function () {
    ////////////////////////////////
    l += s_iTimeElaps;
    if (l > TIME_CARD_REMOVE)
      (l = 0),
        (g = r.visible = !1),
        (f = -1),
        m[ON_CARD_TO_REMOVE] &&
        m[ON_CARD_TO_REMOVE].call(q[ON_CARD_TO_REMOVE], this);
    else {
      var a = easeInOutCubic(l, 0, 1, TIME_CARD_REMOVE),
        b = new CVector2();
      b = tweenVectors(v, h, a, b);
      r.x = b.getX();
      r.y = b.getY();
      r.rotation = (4500 * a) / 100;
    }
  };
  this.update = function () {
    ///////////////
    switch (f) {
      case STATE_CARD_DEALING:
        this._updateDealing();
        break;
      case STATE_CARD_SPLIT:
        this._updateSplit();
        break;
      case STATE_CARD_REMOVING:
        this._updateRemoving();
    }
  };
  s_oCard = this;
  this._init(a, d, b);
}
var s_oCard;
function CInsurancePanel() {
  var a, d, b, c;
  this._init = function () {
    c = new createjs.Container();
    s_oStage.addChild(c);
    c.visible = !1;
    var g = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    c.addChild(g);
    b = new CTLText(
      c,
      CANVAS_WIDTH / 2 - 190,
      290,
      360,
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
    b.setShadow("#000000", 2, 2, 2);
    g = s_oSpriteLibrary.getSprite("but_game_small_bg");
    a = new CTextButton(
      CANVAS_WIDTH / 2 - 100,
      CANVAS_HEIGHT - 300,
      g,
      TEXT_NO,
      FONT_GAME_1,
      "#ffffff",
      20,
      c
    );
    a.addEventListener(ON_MOUSE_UP, this._onButNoRelease, this);
    d = new CTextButton(
      CANVAS_WIDTH / 2 + 100,
      CANVAS_HEIGHT - 300,
      g,
      TEXT_YES,
      FONT_GAME_1,
      "#ffffff",
      20,
      c
    );
    d.addEventListener(ON_MOUSE_UP, this._onButYesRelease, this);
  };
  this.unload = function () {
    s_oStage.removeChild(c);
  };
  this.show = function (a) {
    b.refreshText(a);
    c.visible = !0;
  };
  this._onButNoRelease = function () {
    c.visible = !1;
    s_oGame.onNotBuyInsurance();
  };
  this._onButYesRelease = function () {
    c.visible = !1;
    s_oGame.onBuyInsurance();
  };
  this._init();
}
function CGameOver() {
  var a, d, b, c;
  this._init = function () {
    c = new createjs.Container();
    s_oStage.addChild(c);
    c.on("click", function () { });
    var g = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    c.addChild(g);
    a = new CTLText(
      c,
      CANVAS_WIDTH / 2 - 190,
      290,
      360,
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
    // d = new CTextButton(
    //   CANVAS_WIDTH / 2 - 100,
    //   450,
    //   s_oSpriteLibrary.getSprite("but_game_bg"),
    //   TEXT_RECHARGE,
    //   FONT_GAME_1,
    //   "#fff",
    //   14,
    //   c
    // );
    // d.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    b = new CTextButton(
      CANVAS_WIDTH / 2,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT_GAME_1,
      "#fff",
      14,
      c
    );
    b.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    // d.unload();
    b.unload();
    c.off("click", function () { });
  };
  this.show = function () {
    c.visible = !0;
  };
  this.hide = function () {
    c.visible = !1;
  };
  this._onRecharge = function () {
    c.visible = !1;
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    c.visible = !1;
    s_oInterface.enableBetFiches();
    s_oInterface.enable(!0, !1, !1, !1, !1);
    s_oGame.onExit(!0);
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
      CANVAS_WIDTH / 2 - 180,
      CANVAS_HEIGHT / 2 - 50,
      360,
      100,
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
    d.setShadow("#000", 2, 2, 2);
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
    a = createBitmap(s_oSpriteLibrary.getSprite("bg_game_4"));
    n.addChild(a);
    g = new createjs.Shape();
    // g.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // g.alpha = 0.01;
    // m = g.on("click", this._onLogoButRelease);
    let text = "";
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(CANVAS_WIDTH - 245, p.height / 2 + 10, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    c = this.makeText(
      "BlackJack Rule",
      "40px ",
      "#0ff ",
      FONT_GAME_2,
      280,
      120
    );
    n.addChild(c);
    c = this.makeText("BlackJack", "24px ", "#0ff", FONT_GAME_2, 230, 165);
    n.addChild(c);
    c = this.makeText("HIT or STAND", "24px ", "#0ff", FONT_GAME_2, 230, 250);
    n.addChild(c);
    c = this.makeText("DOUBLE DOWN", "24px ", "#0ff", FONT_GAME_2, 230, 355);
    n.addChild(c);
    c = this.makeText(
      "SPLITTING PAIRS",
      "24px ",
      "#0ff",
      FONT_GAME_2,
      230,
      420
    );
    n.addChild(c);
    c = this.makeText("INSURANCE ", "24px ", "#0ff", FONT_GAME_2, 230, 505);
    n.addChild(c);
    text = `If the player's first two cards are an ace and a 10 or face card, he wins. However, if the dealer also has a blackjack, it is a standoff, as are all ties or pushes. 
A winning blackjack pays the player 3 to 2.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 230, 185);
    n.addChild(c);
    text = `Hit means to draw another card (which the player signifies by scraping the table with his cards or a similar hand motion). 
Stand means no more cards (which the player signals by placing his cards under his wager or moving his hand in a horizontal direction. 
If the player hits and busts (goes over 21), he immediately turns his cards over and his wager is lost.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 230, 270);
    n.addChild(c);
    text = `The player is allowed to double the bet on his first two cards and draw one additional card only to improve his hand.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 230, 375);
    n.addChild(c);
    text = `If the first two cards a player is dealt are a pair, he may split them into two separate hands, bet the same amount on each and then play them separately. 
Aces receive only one additional card. After splitting, A-10 counts as 21 and not as blackjack.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 230, 440);
    n.addChild(c);
    text = `If the dealer's up card is an ace, the player may take insurance, a bet not exceeding one-half his original bet. 
If the dealer's down card is a 10 or any face card, the player wins 2 to 1. Any other card means a win for the dealer.`;
    c = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 230, 525);
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
function CFiche(a, d, b, c, g, f) {
  var k, t, n, l, v, h, m, q;
  this._init = function (a, b, c, d, g) {
    q = new createjs.Container();
    q.x = a;
    q.y = b;
    f.addChild(q);
    a = s_oSpriteLibrary.getSprite("fiche_" + c);
    m = createBitmap(a);
    q.addChild(m);
    new CTLText(
      q,
      8,
      14,
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
    g &&
      ((k = !1),
        (t = a.width),
        (n = a.height),
        (l = []),
        (v = []),
        q.on("mousedown", this.buttonDown),
        q.on("pressup", this.buttonRelease));
  };
  this.addEventListener = function (a, b, c) {
    l[a] = b;
    v[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    l[a] = b;
    v[a] = c;
    h = d;
  };
  this.enable = function () {
    k = !1;
    q.filters = [];
    q.cache(0, 0, t, n);
  };
  this.disable = function () {
    k = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    q.filters = [new createjs.ColorMatrixFilter(a)];
    q.cache(0, 0, t, n);
  };
  this.setScale = function (a) {
    q.scaleX = a;
    q.scaleY = a;
  };
  this.buttonRelease = function () {
    k ||
      (playSound("press_but", 1, !1),
        (q.scaleX = 1),
        (q.scaleY = 1),
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(v[ON_MOUSE_UP], h));
  };
  this.buttonDown = function () {
    k ||
      ((q.scaleX = 0.9),
        (q.scaleY = 0.9),
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN], h));
  };
  this._init(a, d, b, c, g);
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
function CTLText(a, d, b, c, g, f, k, t, n, l, v, h, m, q, r, A, x) {
  this._oContainer = a;
  this._x = d;
  this._y = b;
  this._iWidth = c;
  this._iHeight = g;
  this._bMultiline = A;
  this._iFontSize = f;
  this._szAlign = k;
  this._szColor = t;
  this._szFont = n;
  this._iPaddingH = v;
  this._iPaddingV = h;
  this._bVerticalAlign = r;
  this._bFitText = q;
  this._bDebug = x;
  this._oDebugShape = null;
  this._fLineHeightFactor = l;
  this._oText = null;
  m && this.__createText(m);
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
    for (; a.parent.document !== a.document;)
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
  return !0;
}
