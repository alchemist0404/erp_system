/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function c(a, b) {
    var c = -1,
      g = a ? a.length : 0;
    if ("number" == typeof g && -1 < g && g <= u)
      for (; ++c < g; ) b(a[c], c, a);
    else d(a, b);
  }
  function b(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function d(a, b) {
    for (var c in a) A.call(a, c) && b(a[c], c, a);
  }
  function k(b) {
    return null == b ? a(b) : w.call(b).slice(8, -1);
  }
  function m(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(c) &&
      ("object" == c ? !!a[b] : !0)
    );
  }
  function p(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function g(a, b) {
    var d = null;
    c(a, function (c, g) {
      d = b(d, c, g, a);
    });
    return d;
  }
  function n(a) {
    function c(c) {
      return g(c, function (c, d) {
        var e = d.pattern || p(d);
        !c &&
          (c =
            RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((c = String(
            d.label && !RegExp(e, "i").test(d.label) ? d.label : c
          ).split("/"))[1] &&
            !/[\d.]+/.test(c[0]) &&
            (c[0] += " " + c[1]),
          (d = d.label || d),
          (c = b(
            c[0]
              .replace(RegExp(e, "i"), d)
              .replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ")
              .replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")
          )));
        return c;
      });
    }
    function h(b) {
      return g(b, function (b, c) {
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
    var x = q,
      f = a && "object" == typeof a && "String" != k(a);
    f && ((x = a), (a = null));
    var u = x.navigator || {},
      l = u.userAgent || "";
    a || (a = l);
    var y = f
        ? !!u.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
      A = f ? "Object" : "ScriptBridgingProxyObject",
      z = f ? "Object" : "Environment",
      D = f && x.java ? "JavaPackage" : k(x.java),
      R = f ? "Object" : "RuntimeObject";
    z = (D = /\bJava/.test(D) && x.java) && k(x.environment) == z;
    var S = D ? "a" : "\u03b1",
      T = D ? "b" : "\u03b2",
      N = x.document || {},
      I = x.operamini || x.opera,
      K = v.test((K = f && I ? I["[[Class]]"] : k(I))) ? K : (I = null),
      e,
      L = a;
    f = [];
    var M = null,
      J = a == l;
    l = J && I && "function" == typeof I.version && I.version();
    var B = (function (b) {
        return g(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || p(c)) + "\\b", "i").exec(a) &&
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
        return g(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || p(c)) + "\\b", "i").exec(a) &&
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
      C = c([
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
        return g(b, function (b, c, d) {
          return (
            b ||
            ((c[C] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] ||
              RegExp("\\b" + p(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      t = (function (c) {
        return g(c, function (c, d) {
          var e = d.pattern || p(d);
          if (
            !c &&
            (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var f = c,
              g = d.label || d,
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
              g &&
              /^Win/i.test(f) &&
              !/^Windows Phone /i.test(f) &&
              (h = h[/[\d.]+$/.exec(f)]) &&
              (f = "Windows " + h);
            f = String(f);
            e && g && (f = f.replace(RegExp(e, "i"), g));
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
    B && (B = [B]);
    G && !C && (C = c([G]));
    if ((e = /\bGoogle TV\b/.exec(C))) C = e[0];
    /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
    "Opera Mini" == r &&
      /\bOPiOS\b/.test(a) &&
      f.push("running in Turbo/Uncompressed mode");
    "IE" == r && /\blike iPhone OS\b/.test(a)
      ? ((e = n(a.replace(/like iPhone OS/, ""))),
        (G = e.manufacturer),
        (C = e.product))
      : /^iP/.test(C)
      ? (r || (r = "Safari"),
        (t =
          "iOS" +
          ((e = / OS ([\d_]+)/i.exec(a)) ? " " + e[1].replace(/_/g, ".") : "")))
      : "Konqueror" != r || /buntu/i.test(t)
      ? (G &&
          "Google" != G &&
          ((/Chrome/.test(r) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(C))) ||
        (/\bAndroid\b/.test(t) && /^Chrome/.test(r) && /\bVersion\//i.test(a))
        ? ((r = "Android Browser"), (t = /\bAndroid\b/.test(t) ? t : "Android"))
        : "Silk" == r
        ? (/\bMobi/i.test(a) || ((t = "Android"), f.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && f.unshift("accelerated"))
        : "PaleMoon" == r && (e = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? f.push("identifying as Firefox " + e[1])
        : "Firefox" == r && (e = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (t || (t = "Firefox OS"), C || (C = e[1]))
        : !r ||
          (e = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(r))
        ? (r &&
            !C &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e + "/") + 8)) &&
            (r = null),
          (e = C || G || t) &&
            (C || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(t)) &&
            (r =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(t) ? t : e) +
              " Browser"))
        : "Electron" == r &&
          (e = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          f.push("Chromium " + e)
      : (t = "Kubuntu");
    l ||
      (l = h([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        p(r),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (e =
        ("iCab" == B && 3 < parseFloat(l) && "WebKit") ||
        (/\bOpera\b/.test(r) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(B) &&
          "WebKit") ||
        (!B && /\bMSIE\b/i.test(a) && ("Mac OS" == t ? "Tasman" : "Trident")) ||
        ("WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(r) && "NetFront"))
    )
      B = [e];
    "IE" == r && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((r += " Mobile"),
        (t = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x")),
        f.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((r = "IE Mobile"),
        (t = "Windows Phone 8.x"),
        f.unshift("desktop mode"),
        l || (l = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != r &&
        "Trident" == B &&
        (e = /\brv:([\d.]+)/.exec(a)) &&
        (r && f.push("identifying as " + r + (l ? " " + l : "")),
        (r = "IE"),
        (l = e[1]));
    if (J) {
      if (m(x, "global"))
        if (
          (D &&
            ((e = D.lang.System),
            (L = e.getProperty("os.arch")),
            (t =
              t ||
              e.getProperty("os.name") + " " + e.getProperty("os.version"))),
          z)
        ) {
          try {
            (l = x.require("ringo/engine").version.join(".")), (r = "RingoJS");
          } catch (Q) {
            (e = x.system) &&
              e.global.system == x.system &&
              ((r = "Narwhal"), t || (t = e[0].os || null));
          }
          r || (r = "Rhino");
        } else
          "object" == typeof x.process &&
            !x.process.browser &&
            (e = x.process) &&
            ("object" == typeof e.versions &&
              ("string" == typeof e.versions.electron
                ? (f.push("Node " + e.versions.node),
                  (r = "Electron"),
                  (l = e.versions.electron))
                : "string" == typeof e.versions.nw &&
                  (f.push("Chromium " + l, "Node " + e.versions.node),
                  (r = "NW.js"),
                  (l = e.versions.nw))),
            r ||
              ((r = "Node.js"),
              (L = e.arch),
              (t = e.platform),
              (l = (l = /[\d.]+/.exec(e.version)) ? l[0] : null)));
      else
        k((e = x.runtime)) == A
          ? ((r = "Adobe AIR"), (t = e.flash.system.Capabilities.os))
          : k((e = x.phantom)) == R
          ? ((r = "PhantomJS"),
            (l =
              (e = e.version || null) &&
              e.major + "." + e.minor + "." + e.patch))
          : "number" == typeof N.documentMode &&
            (e = /\bTrident\/(\d+)/i.exec(a))
          ? ((l = [l, N.documentMode]),
            (e = +e[1] + 4) != l[1] &&
              (f.push("IE " + l[1] + " mode"), B && (B[1] = ""), (l[1] = e)),
            (l = "IE" == r ? String(l[1].toFixed(1)) : l[0]))
          : "number" == typeof N.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(r) &&
            (f.push("masking as " + r + " " + l),
            (r = "IE"),
            (l = "11.0"),
            (B = ["Trident"]),
            (t = "Windows"));
      t = t && b(t);
    }
    l &&
      (e =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(l) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (J && u.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((M = /b/i.test(e) ? "beta" : "alpha"),
      (l =
        l.replace(RegExp(e + "\\+?$"), "") +
        ("beta" == M ? T : S) +
        (/\d+\+?/.exec(e) || "")));
    if (
      "Fennec" == r ||
      ("Firefox" == r && /\b(?:Android|Firefox OS)\b/.test(t))
    )
      r = "Firefox Mobile";
    else if ("Maxthon" == r && l) l = l.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(C))
      "Xbox 360" == C && (t = null),
        "Xbox 360" == C && /\bIEMobile\b/.test(a) && f.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(r) &&
        (!r || C || /Browser|Mobi/.test(r))) ||
      ("Windows CE" != t && !/Mobi/i.test(a))
    )
      if ("IE" == r && J)
        try {
          null === x.external && f.unshift("platform preview");
        } catch (Q) {
          f.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) &&
        (e =
          (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || l)
          ? ((e = [e, /BB10/.test(a)]),
            (t =
              (e[1] ? ((C = null), (G = "BlackBerry")) : "Device Software") +
              " " +
              e[0]),
            (l = null))
          : this != d &&
            "Wii" != C &&
            ((J && I) ||
              (/Opera/.test(r) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == r && /\bOS X (?:\d+\.){2,}/.test(t)) ||
              ("IE" == r &&
                ((t && !/^Win/.test(t) && 5.5 < l) ||
                  (/\bWindows XP\b/.test(t) && 8 < l) ||
                  (8 == l && !/\bTrident\b/.test(a))))) &&
            !v.test((e = n.call(d, a.replace(v, "") + ";"))) &&
            e.name &&
            ((e = "ing as " + e.name + ((e = e.version) ? " " + e : "")),
            v.test(r)
              ? (/\bIE\b/.test(e) && "Mac OS" == t && (t = null),
                (e = "identify" + e))
              : ((e = "mask" + e),
                (r = K ? b(K.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(e) && (t = null),
                J || (l = null)),
            (B = ["Presto"]),
            f.push(e));
    else r += " Mobile";
    if ((e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e];
      if ("Safari" == r && "+" == e[1].slice(-1))
        (r = "WebKit Nightly"), (M = "alpha"), (l = e[1].slice(0, -1));
      else if (
        l == e[1] ||
        l == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        l = null;
      e[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == e[0] &&
        537.36 == e[2] &&
        28 <= parseFloat(e[1]) &&
        "WebKit" == B &&
        (B = ["Blink"]);
      J && (y || e[1])
        ? (B && (B[1] = "like Chrome"),
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
              : "Blink" != B
              ? "27"
              : "28")))
        : (B && (B[1] = "like Safari"),
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
      B &&
        (B[1] +=
          " " + (e += "number" == typeof e ? ".x" : /[.+]/.test(e) ? "" : "+"));
      "Safari" == r && (!l || 45 < parseInt(l)) && (l = e);
    }
    "Opera" == r && (e = /\bzbov|zvav$/.exec(t))
      ? ((r += " "),
        f.unshift("desktop mode"),
        "zvav" == e ? ((r += "Mini"), (l = null)) : (r += "Mobile"),
        (t = t.replace(RegExp(" *" + e + "$"), "")))
      : "Safari" == r &&
        /\bChrome\b/.exec(B && B[1]) &&
        (f.unshift("desktop mode"),
        (r = "Chrome Mobile"),
        (l = null),
        /\bOS X\b/.test(t) ? ((G = "Apple"), (t = "iOS 4.3+")) : (t = null));
    l &&
      0 == l.indexOf((e = /[\d.]+$/.exec(t))) &&
      -1 < a.indexOf("/" + e + "-") &&
      (t = String(t.replace(e, "")).replace(/^ +| +$/g, ""));
    B &&
      !/\b(?:Avant|Nook)\b/.test(r) &&
      (/Browser|Lunascape|Maxthon/.test(r) ||
        ("Safari" != r && /^iOS/.test(t) && /\bSafari\b/.test(B[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          r
        ) &&
          B[1])) &&
      (e = B[B.length - 1]) &&
      f.push(e);
    f.length && (f = ["(" + f.join("; ") + ")"]);
    G && C && 0 > C.indexOf(G) && f.push("on " + G);
    C && f.push((/^on /.test(f[f.length - 1]) ? "" : "on ") + C);
    if (t) {
      var P =
        (e = / ([\d.+]+)$/.exec(t)) &&
        "/" == t.charAt(t.length - e[0].length - 1);
      t = {
        architecture: 32,
        family: e && !P ? t.replace(e[0], "") : t,
        version: e ? e[1] : null,
        toString: function () {
          var a = this.version;
          return (
            this.family +
            (a && !P ? " " + a : "") +
            (64 == this.architecture ? " 64-bit" : "")
          );
        },
      };
    }
    (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L)
      ? (t &&
          ((t.architecture = 64),
          (t.family = t.family.replace(RegExp(" *" + e), ""))),
        r &&
          (/\bWOW64\b/i.test(a) ||
            (J &&
              /\w(?:86|32)$/.test(u.cpuClass || u.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          f.unshift("32-bit"))
      : t &&
        /^OS X/.test(t.family) &&
        "Chrome" == r &&
        39 <= parseFloat(l) &&
        (t.architecture = 64);
    a || (a = null);
    x = {};
    x.description = a;
    x.layout = B && B[0];
    x.manufacturer = G;
    x.name = r;
    x.prerelease = M;
    x.product = C;
    x.ua = a;
    x.version = r && l;
    x.os = t || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    x.parse = n;
    x.toString = function () {
      return this.description || "";
    };
    x.version && f.unshift(l);
    x.name && f.unshift(r);
    t &&
      r &&
      (t != String(t).split(" ")[0] || (t != r.split(" ")[0] && !C)) &&
      f.push(C ? "(" + t + ")" : "on " + t);
    f.length && (x.description = f.join(" "));
    return x;
  }
  var f = { function: !0, object: !0 },
    q = (f[typeof window] && window) || this,
    y = f[typeof exports] && exports;
  f = f[typeof module] && module && !module.nodeType && module;
  var h = y && f && "object" == typeof global && global;
  !h || (h.global !== h && h.window !== h && h.self !== h) || (q = h);
  var u = Math.pow(2, 53) - 1,
    v = /\bOpera/;
  h = Object.prototype;
  var A = h.hasOwnProperty,
    w = h.toString,
    z = n();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((q.platform = z),
      define(function () {
        return z;
      }))
    : y && f
    ? d(z, function (a, b) {
        y[b] = a;
      })
    : (q.platform = z);
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
      c = 0;
    c < a.length;
    c++
  ) {
    var b = document.createElement("meta");
    b.name = a[c].name;
    b.content = a[c].content;
    var d = window.document.head.querySelector('meta[name="' + b.name + '"]');
    d && d.parentNode.removeChild(d);
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
    c = a.family.toLowerCase();
  a = parseFloat(a.version);
  return "ios" === c && 13 > a ? !0 : !1;
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
  console.log(a);
}
function isChrome() {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
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
  if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone"))
    return (s_bIsIphone = !0);
  for (; a.length; ) if (navigator.platform === a.pop()) return !0;
  return (s_bIsIphone = !1);
}
function getSize(a) {
  var c = a.toLowerCase(),
    b = window.document,
    d = b.documentElement;
  if (void 0 === window["inner" + a]) a = d["client" + a];
  else if (window["inner" + a] != d["client" + a]) {
    var k = b.createElement("body");
    k.id = "vpw-test-b";
    k.style.cssText = "overflow:scroll";
    var m = b.createElement("div");
    m.id = "vpw-test-d";
    m.style.cssText = "position:absolute;top:-1000px";
    m.innerHTML =
      "<style>@media(" +
      c +
      ":" +
      d["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      c +
      ":7px!important}}</style>";
    k.appendChild(m);
    d.insertBefore(k, b.head);
    a = 7 == m["offset" + a] ? d["client" + a] : window["inner" + a];
    d.removeChild(k);
  } else a = window["inner" + a];
  return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
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
    var c = getSize("Width");
    _checkOrientation(c, a);
    var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
      d = Math.round(CANVAS_WIDTH * b);
    b = Math.round(CANVAS_HEIGHT * b);
    if (b < a) {
      var k = a - b;
      b += k;
      d += (CANVAS_WIDTH / CANVAS_HEIGHT) * k;
    } else
      d < c &&
        ((k = c - d), (d += k), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * k));
    k = a / 2 - b / 2;
    var m = c / 2 - d / 2,
      p = CANVAS_WIDTH / d;
    if (m * p < -EDGEBOARD_X || k * p < -EDGEBOARD_Y)
      (b = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (d = Math.round(CANVAS_WIDTH * b)),
        (b = Math.round(CANVAS_HEIGHT * b)),
        (k = (a - b) / 2),
        (m = (c - d) / 2),
        (p = CANVAS_WIDTH / d);
    s_iOffsetX = -1 * m * p;
    s_iOffsetY = -1 * k * p;
    0 <= k && (s_iOffsetY = 0);
    0 <= m && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * d),
        (s_oStage.canvas.height = 2 * b),
        (canvas.style.width = d + "px"),
        (canvas.style.height = b + "px"),
        (s_iScaleFactor = 2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor))
      : s_bMobile || isChrome()
      ? ($("#canvas").css("width", d + "px"),
        $("#canvas").css("height", b + "px"))
      : ((s_oStage.canvas.width = d),
        (s_oStage.canvas.height = b),
        (s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > k || (k = (a - b) / 2);
    $("#canvas").css("top", k + "px");
    $("#canvas").css("left", m + "px");
    fullscreenHandler();
  }
}
function _checkOrientation(a, c) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > c
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
function playSound(a, c, b) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(c),
      s_aSounds[a].loop(b),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, c) {}
function setMute(a, c) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(c);
}
function createBitmap(a, c, b) {
  var d = new createjs.Bitmap(a),
    k = new createjs.Shape();
  c && b
    ? k.graphics.beginFill("#fff").drawRect(0, 0, c, b)
    : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  d.hitArea = k;
  return d;
}
function createSprite(a, c, b, d, k, m) {
  a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
  c = new createjs.Shape();
  c.graphics.beginFill("#000000").drawRect(-b, -d, k, m);
  a.hitArea = c;
  return a;
}
function randomFloatBetween(a, c, b) {
  "undefined" === typeof b && (b = 2);
  return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b));
}
function shuffle(a) {
  for (var c = a.length, b, d; 0 !== c; )
    (d = Math.floor(Math.random() * c)),
      --c,
      (b = a[c]),
      (a[c] = a[d]),
      (a[d] = b);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var c = Math.floor(a / 60);
  a = parseFloat(a - 60 * c).toFixed(1);
  var b = "";
  b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
  return 10 > a ? b + ("0" + a) : b + a;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var c = Array.prototype.slice.call(arguments);
  return a.sort(function (a, d) {
    for (var b = c.slice(), m = b.shift(); a[m] == d[m] && b.length; )
      m = b.shift();
    return a[m] == d[m] ? 0 : a[m] > d[m] ? 1 : -1;
  });
};
function roundDecimal(a, c) {
  var b = Math.pow(10, c);
  return Math.round(b * a) / b;
}
function tweenVectors(a, c, b, d) {
  d.set(
    a.getX() + b * (c.getX() - a.getX()),
    a.getY() + b * (c.getY() - a.getY())
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
      var c = document.createEvent("MouseEvents");
      c.initEvent("click", !0, !0);
      a.dispatchEvent(c);
    }
  },
};
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var c = window.location.search.substring(1).split("&"), b = 0;
    b < c.length;
    b++
  ) {
    var d = c[b].split("=");
    if (d[0] == a) return d[1];
  }
}
(function () {
  function a(a) {
    var b = {
      focus: "visible",
      focusin: "visible",
      pageshow: "visible",
      blur: "hidden",
      focusout: "hidden",
      pagehide: "hidden",
    };
    a = a || window.event;
    a.type in b
      ? (document.body.className = b[a.type])
      : ((document.body.className = this[c] ? "hidden" : "visible"),
        "hidden" === document.body.className
          ? s_oMain.stopUpdate()
          : s_oMain.startUpdate());
  }
  var c = "hidden";
  c in document
    ? document.addEventListener("visibilitychange", a)
    : (c = "mozHidden") in document
    ? document.addEventListener("mozvisibilitychange", a)
    : (c = "webkitHidden") in document
    ? document.addEventListener("webkitvisibilitychange", a)
    : (c = "msHidden") in document
    ? document.addEventListener("msvisibilitychange", a)
    : "onfocusin" in document
    ? (document.onfocusin = document.onfocusout = a)
    : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a);
})();
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
    c,
    b,
    d,
    k,
    m,
    p;
  this.init = function (a, n, f) {
    c = {};
    d = b = 0;
    k = a;
    m = n;
    p = f;
  };
  this.addSprite = function (d, n) {
    if (a.hasOwnProperty(d)) return !1;
    var f = new Image();
    a[d] = c[d] = { szPath: n, oSprite: f, bLoaded: !1 };
    b++;
    return !0;
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    b = 0;
    m.call(p);
  };
  this._onSpriteLoaded = function () {
    k.call(p);
    ++d === b && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var a in c)
      (c[a].oSprite.oSpriteLibrary = this),
        (c[a].oSprite.szKey = a),
        (c[a].oSprite.onload = function () {
          this.oSpriteLibrary.setLoaded(this.szKey);
          this.oSpriteLibrary._onSpriteLoaded(this.szKey);
        }),
        (c[a].oSprite.onerror = function (a) {
          var b = a.currentTarget;
          setTimeout(function () {
            c[b.szKey].oSprite.src = c[b.szKey].szPath;
          }, 500);
        }),
        (c[a].oSprite.src = c[a].szPath);
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
var CANVAS_WIDTH = 1920,
  CANVAS_HEIGHT = 768,
  EDGEBOARD_X = 350,
  EDGEBOARD_Y = 0,
  FONT1 = "OpenSans-BoldItalic",
  FONT2 = "Digital-7",
  FPS_TIME = 1e3 / 30,
  DISABLE_SOUND_MOBILE = !1,
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  STATE_GAME_WAITING_FOR_BET = 0,
  STATE_GAME_DEAL = 1,
  STATE_GAME_CHOOSE_HOLD = 2,
  STATE_GAME_DRAW = 3,
  STATE_GAME_EVALUATE = 4,
  ON_CARD_SHOWN = "ON_CARD_SHOWN",
  ON_CARD_HIDE = "ON_CARD_HIDE",
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  ROYAL_FLUSH = 0,
  STRAIGHT_FLUSH = 1,
  FOUR_OF_A_KIND = 2,
  FULL_HOUSE = 3,
  FLUSH = 4,
  STRAIGHT = 5,
  THREE_OF_A_KIND = 6,
  TWO_PAIR = 7,
  JACKS_OR_BETTER = 8,
  HIGH_CARD = 9,
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
  SUIT_HEARTS = 0,
  SUIT_DIAMONDS = 1,
  SUIT_CLUBS = 2,
  SUIT_SPADES = 3,
  CARD_WIDTH = 154,
  CARD_HEIGHT = 240,
  BET_TYPE,
  TOTAL_MONEY,
  NUM_BETS = 5,
  WIN_COMBINATIONS = 9,
  COMBO_PRIZES,
  AUTOMATIC_RECHARGE,
  WIN_OCCURRENCE,
  GAME_CASH,
  MIN_WIN,
  NUM_HAND_FOR_ADS,
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SOUNDTRACK_VOLUME_IN_GAME = 0.5;
  AVAILABLE_CARDS = [];
TEXT_GAMEOVER = "GAME OVER";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_WIN = "WIN";
TEXT_MONEY = "MONEY";
TEXT_DEAL = "DEAL";
TEXT_BET_ONE = "BET ONE";
TEXT_MAX_BET = "BET MAX";
TEXT_RECHARGE = "RECHARGE";
TEXT_EXIT = "EXIT";
TEXT_DRAW = "DRAW";
TEXT_NO_WIN = "NO WIN";
TEXT_CURRENCY = "$";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
var TEXT_PRELOADER_CONTINUE = "START";
TEXT_COMBO = "Royal Flush;Straight Flush;Four of a Kind;Full House;Flush;Straight;Three of a Kind;Two Pairs;Jacks or Better".split(
  ";"
);
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_SHARE_1 = "You collected <strong>";
TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_3 = "My score is ";
TEXT_SHARE_4 = " points! Can you do better?";
var WIN_TYPE_VALUE = {
  0 : 250,
  1 : 50,
  2 : 25,
  3 : 9,
  4 : 6,
  5 : 4,
  6 : 3,
  7 : 2,
  8 : 1,
  9 : 0
}
let id;
function CPreloader() {
  var a, c, b, d, k, m, p, g, n, f;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    f = new createjs.Container();
    s_oStage.addChild(f);
  };
  this.unload = function () {
    n.unload();
    f.removeAllChildren();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var q = new createjs.Shape();
    q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    f.addChild(q);
    q = s_oSpriteLibrary.getSprite("200x200");
    p = createBitmap(q);
    p.regX = 0.5 * q.width;
    p.regY = 0.5 * q.height;
    p.x = CANVAS_WIDTH / 2;
    p.y = CANVAS_HEIGHT / 2 - 80;
    f.addChild(p);
    g = new createjs.Shape();
    g.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(p.x - 100, p.y - 100, 200, 200, 10);
    f.addChild(g);
    p.mask = g;
    q = s_oSpriteLibrary.getSprite("progress_bar");
    d = createBitmap(q);
    d.x = CANVAS_WIDTH / 2 - q.width / 2;
    d.y = CANVAS_HEIGHT / 2 + 70;
    f.addChild(d);
    a = q.width;
    c = q.height;
    k = new createjs.Shape();
    k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
    f.addChild(k);
    d.mask = k;
    b = new createjs.Text("", "30px " + FONT1, "#fff");
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2 + 120;
    b.textBaseline = "alphabetic";
    b.textAlign = "center";
    f.addChild(b);
    q = s_oSpriteLibrary.getSprite("but_start");
    n = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2 + 100,
      q,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      36,
      0,
      f
    );
    n.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    n.setVisible(!1);
    m = new createjs.Shape();
    m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    f.addChild(m);
    createjs.Tween.get(m)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(m);
        f.removeChild(m);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (f) {
    b.text = f + "%";
    100 === f &&
      (s_oMain._onRemovePreloader(), (b.visible = !1), (d.visible = !1));
    k.graphics.clear();
    f = Math.floor((f * a) / 100);
    k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, f, c);
  };
  this._init();
}
function CMain(a) {
  var c,
    b = 0,
    d = 0,
    k = STATE_LOADING,
    m,
    p;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage, !0);
    s_bMobile = isMobile();
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.framerate = 30;
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    seekAndDestroy()
      ? (m = new CPreloader())
      : (window.location.href = "http://www.codethislab.com/contact-us.html");
  };
  this.soundLoaded = function () {
    b++;
    m.refreshLoader(Math.floor((b / d) * 100));
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
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "press_hold",
      loop: !1,
      volume: 1,
      ingamename: "press_hold",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "soundtrack",
      loop: !0,
      volume: 1,
      ingamename: "soundtrack",
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
                    "soundtrack" === s_aSoundsInfo[b].ingamename &&
                      null !== s_oGame &&
                      setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
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
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
    s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
    s_oSpriteLibrary.addSprite(
      "card_spritesheet",
      "./sprites/card_spritesheet.png"
    );
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("but_left", "./sprites/but_left.png");
    s_oSpriteLibrary.addSprite("but_right", "./sprites/but_right.png");
    s_oSpriteLibrary.addSprite("hold", "./sprites/hold.png");
    s_oSpriteLibrary.addSprite("logo_game", "./sprites/logo_game.png");
    s_oSpriteLibrary.addSprite("paytable", "./sprites/paytable.png");
    s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
    s_oSpriteLibrary.addSprite("big_display", "./sprites/big_display.png");
    s_oSpriteLibrary.addSprite("selection", "./sprites/selection.png");
    s_oSpriteLibrary.addSprite(
      "card_selection",
      "./sprites/card_selection.png"
    );
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
    s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
    d += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    b++;
    m.refreshLoader(Math.floor((b / d) * 100));
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    c = !0;
  };
  this._onRemovePreloader = function () {
    m.unload();
    s_oSoundTrack = playSound("soundtrack", 1, !0);
    this.gotoMenu();
  };
  this._onAllImagesLoaded = function () {};
  this.gotoMenu = function () {
    new CMenu();
    k = STATE_MENU;
  };
  this.gotoGame = function () {
    p = new CGame(g);
    k = STATE_GAME;
    $(s_oMain).trigger("game_start");
  };
  this.gotoHelp = function () {
    new CHelp();
    k = STATE_HELP;
  };
  this.stopUpdate = function () {
    c = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    c = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (!1 !== c) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      k === STATE_GAME && p.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var g = a;
  ENABLE_FULLSCREEN = g.fullscreen;
  ENABLE_CHECK_ORIENTATION = g.check_orientation;
  SHOW_CREDITS = g.show_credits;
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
  s_oMain = null,
  s_oSpriteLibrary,
  s_oSoundTrack = null,
  s_bFullscreen = !1,
  s_aSounds;
function CTextButton(a, c, b, d, k, m, p, g, n) {
  var f, q, y, h, u, v, A, w, z, D;
  this._init = function (a, b, c, d, g, k, m, p) {
    f = !1;
    q = 1;
    y = [];
    h = [];
    D = createBitmap(c);
    w = new createjs.Container();
    w.x = a;
    w.y = b;
    w.regX = c.width / 2;
    w.regY = c.height / 2;
    s_bMobile || (w.cursor = "pointer");
    w.addChild(D, z);
    n.addChild(w);
    z = new CTLText(
      w,
      10,
      5,
      c.width - 20,
      c.height - 10,
      m,
      "center",
      k,
      g,
      1,
      p,
      0,
      d,
      !0,
      !0,
      !0,
      !1
    );
    this._initListener();
  };
  this.unload = function () {
    w.off("mousedown", u);
    w.off("pressup", v);
    n.removeChild(w);
  };
  this.setVisible = function (a) {
    w.visible = a;
  };
  this.setAlign = function (a) {
    z.textAlign = a;
  };
  this.setTextX = function (a) {
    z.x = a;
  };
  this.setScale = function (a) {
    q = w.scaleX = w.scaleY = a;
  };
  this.enable = function () {
    f = !1;
  };
  this.disable = function () {
    f = !0;
  };
  this._initListener = function () {
    u = w.on("mousedown", this.buttonDown);
    v = w.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    y[a] = b;
    h[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    y[a] = b;
    h[a] = c;
    A = d;
  };
  this.buttonRelease = function () {
    f ||
      (playSound("press_but", 1, !1),
      (w.scaleX = q),
      (w.scaleY = q),
      y[ON_MOUSE_UP] && y[ON_MOUSE_UP].call(h[ON_MOUSE_UP], A));
  };
  this.buttonDown = function () {
    f ||
      ((w.scaleX = 0.9 * q),
      (w.scaleY = 0.9 * q),
      y[ON_MOUSE_DOWN] && y[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    w.x = a;
    w.y = b;
  };
  this.tweenPosition = function (a, b, c, d, f, g, h) {
    createjs.Tween.get(w)
      .wait(d)
      .to({ x: a, y: b }, c, f)
      .call(function () {
        void 0 !== g && g.call(h);
      });
  };
  this.changeText = function (a) {
    z.refreshText(a);
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
  this._init(a, c, b, d, k, m, p, g);
}
function CGfxButton(a, c, b, d) {
  var k,
    m,
    p,
    g,
    n,
    f = [],
    q,
    y,
    h;
  this._init = function (a, b, c) {
    k = !1;
    g = [];
    n = [];
    m = c.width;
    p = c.height;
    h = createBitmap(c);
    h.x = a;
    h.y = b;
    h.regX = c.width / 2;
    h.regY = c.height / 2;
    h.cursor = "pointer";
    d.addChild(h);
    this._initListener();
  };
  this.unload = function () {
    h.off("mousedown", q);
    h.off("pressup", y);
    d.removeChild(h);
  };
  this.setVisible = function (a) {
    h.visible = a;
  };
  this._initListener = function () {
    q = h.on("mousedown", this.buttonDown);
    y = h.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    g[a] = b;
    n[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    g[a] = b;
    n[a] = c;
    f = d;
  };
  this.buttonRelease = function () {
    k ||
      (playSound("press_but", 1, !1),
      (h.scaleX = 1),
      (h.scaleY = 1),
      g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(n[ON_MOUSE_UP], f));
  };
  this.buttonDown = function () {
    k ||
      ((h.scaleX = 0.9),
      (h.scaleY = 0.9),
      g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], f));
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
    k = !1;
    h.filters = [];
    h.cache(0, 0, m, p);
  };
  this.disable = function () {
    k = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    h.filters = [new createjs.ColorMatrixFilter(a)];
    h.cache(0, 0, m, p);
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
  this._init(a, c, b);
  return this;
}
function CToggle(a, c, b, d) {
  var k, m, p, g;
  this._init = function (a, b, c, d) {
    m = [];
    p = [];
    var f = new createjs.SpriteSheet({
      images: [c],
      frames: {
        width: c.width / 2,
        height: c.height,
        regX: c.width / 2 / 2,
        regY: c.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    k = d;
    g = createSprite(
      f,
      "state_" + k,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    g.x = a;
    g.y = b;
    g.stop();
    g.cursor = "pointer";
    s_oStage.addChild(g);
    this._initListener();
  };
  this.unload = function () {
    g.off("mousedown", this.buttonDown);
    g.off("pressup", this.buttonRelease);
    s_oStage.removeChild(g);
  };
  this._initListener = function () {
    g.on("mousedown", this.buttonDown);
    g.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    m[a] = b;
    p[a] = c;
  };
  this.setActive = function (a) {
    k = a;
    g.gotoAndStop("state_" + k);
  };
  this.buttonRelease = function () {
    g.scaleX = 1;
    g.scaleY = 1;
    playSound("press_but", 1, !1);
    k = !k;
    g.gotoAndStop("state_" + k);
    m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(p[ON_MOUSE_UP], k);
  };
  this.buttonDown = function () {
    g.scaleX = 0.9;
    g.scaleY = 0.9;
    m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    g.x = a;
    g.y = b;
  };
  this._init(a, c, b, d);
}
function CMenu() {
  var a,
    c,
    b,
    d,
    k,
    m,
    p,
    g,
    n,
    f,
    q,
    y = null,
    h = null,
    u;
  this._init = function () {
    p = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(p);
    var v = s_oSpriteLibrary.getSprite("but_menu_bg");
    g = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - 164,
      v,
      TEXT_PLAY,
      FONT1,
      "#ffffff",
      40,
      0,
      s_oStage
    );
    g.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (v = s_oSpriteLibrary.getSprite("audio_icon")),
        (k = CANVAS_WIDTH - v.width / 4 - 10),
        (m = v.height / 2 + 10),
        (f = new CToggle(
          CANVAS_WIDTH - v.width / 2 + 20,
          v.height / 2 + 20,
          v,
          s_bAudioActive
        )),
        f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        setVolume("soundtrack", 1);
    SHOW_CREDITS
      ? ((v = s_oSpriteLibrary.getSprite("but_info")),
        (a = v.height / 2 + 10),
        (c = v.height / 2 + 10),
        (n = new CGfxButton(a, c, v, s_oStage)),
        n.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this),
        (b = a + v.width + 10),
        (d = c))
      : ((b = v.height / 2 + 10), (d = v.height / 2 + 10));
    v = window.document;
    var A = v.documentElement;
    y =
      A.requestFullscreen ||
      A.mozRequestFullScreen ||
      A.webkitRequestFullScreen ||
      A.msRequestFullscreen;
    h =
      v.exitFullscreen ||
      v.mozCancelFullScreen ||
      v.webkitExitFullscreen ||
      v.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (y = !1);
    y &&
      screenfull.isEnabled &&
      ((v = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (q = new CToggle(b, d, v, s_bFullscreen, !0)),
      q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    u = new createjs.Shape();
    u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(u);
    createjs.Tween.get(u)
      .to({ alpha: 0 }, 500)
      .call(function () {
        u.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    g.unload();
    g = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), (f = null);
    y && screenfull.isEnabled && q.unload();
    SHOW_CREDITS && n.unload();
    s_oStage.removeChild(p);
    p = null;
    s_oStage.removeChild(u);
    s_oMenu = u = null;
  };
  this.refreshButtonPos = function (g, h) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      f.setPosition(k - g, h + m);
    y && screenfull.isEnabled && q.setPosition(b + g, d + h);
    SHOW_CREDITS && n.setPosition(a + g, c + h);
  };
  this._onButPlayRelease = function () {
    this.unload();
    $(s_oMain).trigger("start_session");
    s_oMain.gotoGame();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this._onButCreditsRelease = function () {
    new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    y && screenfull.isEnabled && q.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? h.call(window.document)
      : y.call(window.document.documentElement);
    sizeHandler();
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  var c,
    b,
    d,
    k,
    m,
    p,
    g,
    n,
    f,
    q,
    y,
    h = [],
    u,
    v,
    A,
    w,
    z,
    D,
    E,
    oldCredit,
    F;
  this._init = function () {
    s_oPayTableSettings = new CPayTableSettings();
    d = TOTAL_MONEY;
    oldCredit = d;
    k = GAME_CASH;
    w = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(w);
    F = new createjs.Container();
    F.x = 600;
    F.y = 530;
    s_oStage.addChild(F);
    D = new CPayTable(550, 149);
    c = !1;
    y = p = n = g = 0;
    m = parseFloat(BET_TYPE[g] * (n + 1));
    D.setCreditColumn(n);
    q = STATE_GAME_WAITING_FOR_BET;
    z = new CInterface(d, BET_TYPE[g]);
    E = new CGameOver();
    v = new CGameSettings();
    A = new CHandEvaluator();
    f = 0;
    u = [];
    u = v.getShuffledCardDeck();
    MIN_WIN = COMBO_PRIZES[COMBO_PRIZES.length - 1] * BET_TYPE[g] * (n + 1);
    this.placeFakeCardForStarting();
    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
  };
  this.unload = function () {
    z.unload();
    E.unload();
    s_oStage.removeAllChildren();
  };
  this.resetHand = function () {
    f = p = 0;
    u = [];
    u = v.getShuffledCardDeck();
    for (var a = 0; a < h.length; a++) h[a].reset();
    z.resetHand();
    D.resetHand();
    this.checkMoney();
    c = !1;
    q = STATE_GAME_WAITING_FOR_BET;
  };
  this.checkMoney = function () {
    d < m &&
      ((n = g = 0),
      (m = parseFloat(BET_TYPE[g] * (n + 1))),
      D.setCreditColumn(n),
      d < m
        ? this._gameOver()
        : (z.refreshMoney(d, m), z.refreshBet(BET_TYPE[g])));
  };
  this.changeState = function (a) {};
  this.placeFakeCardForStarting = function () {
    for (
      var a = {
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
        },
        b = 0,
        c = 0;
      5 > c;
      c++
    ) {
      var d = new createjs.SpriteSheet(a);
      d = createSprite(
        d,
        "back",
        CARD_WIDTH / 2,
        CARD_HEIGHT / 2,
        CARD_WIDTH,
        CARD_HEIGHT
      );
      d.x = b;
      d.y = 0;
      d.shadow = new createjs.Shadow("#000000", 5, 5, 5);
      F.addChild(d);
      b += 180;
    }
  };
  this.dealCards = function () {
    const random = new Random();
    let randomNumber = random.integer(1, 100);
    if (!(c || 0 >= d)) {
      c = !0;
      F.removeAllChildren();

      const response = $.ajax({
        url: 'http://localhost:6140/api/games/checkJackorBetterGameBank',
        type: 'POST',
        async: false,
        data: {
          customerId: customerid,
          gameId: gameid,
          bet_amount: m,
          randomNumber,
        }
      })

      if(response.responseJSON.gameStatus == false) {
        alert("Sorry, Something went wrong, please login again");
        window.location.reload()
      }
  
      WIN_OCCURRENCE = response.responseJSON.win_occurrence;
      AVAILABLE_WIN_TYPES = response.responseJSON.data;

      if (randomNumber > WIN_OCCURRENCE) {
        do this._createCard();
        while (A.evaluate(h) < HIGH_CARD);
        b = !1;
      } else this._createCard(), (b = !0);
      d -= m;
      d = parseFloat(d.toFixed(2));
      k += m;
      z.refreshMoney(d, m);
      playSound("card", 1, !1);
      $(s_oMain).trigger("bet_placed", m);
      q = STATE_GAME_DEAL;
    }
  };
  this._createCard = function () {
    for (var a = 0; a < h.length; a++) h[a].unload();
    a = 0;
    h = [];
    for (var b = 0; 5 > b; b++) {
      var c = new CCard(a, 0, F, u[f].fotogram, u[f].rank, u[f].suit);
      c.addEventListener(ON_CARD_SHOWN, this._onCardShown);
      c.addEventListener(ON_CARD_HIDE, this._onCardHide);
      h.push(c);
      f++;
      this._checkDeckLength();
      a += 180;
      c.showCard();
    }
    var k = A.evaluate(h);
    if (WIN_TYPE_VALUE[k] !== 0 && !AVAILABLE_WIN_TYPES.includes(WIN_TYPE_VALUE[k])) {
      this._createCard()
    }
  };
  this.drawCards = function () {
    if (!c) {
      c = !0;
      playSound("card", 1, !1);
      for (var a = h.length, b = 0; b < h.length; b++)
        !1 === h[b].isHold() && (h[b].hideCard(), a--);
      a === h.length && ((q = STATE_GAME_DRAW), this._onCardShown());
    }
  };
  this._checkDeckLength = function () {
    f >= u.length && ((u = v.getShuffledCardDeck()), (f = 0));
  };
  this.assignWin = function (a) {
    playSound("win", 1, !1);
    for (var b = A.getSortedHand(), c = 0; c < h.length; c++)
      for (var f = 0; f < b.length; f++)
        if (b[f].rank === h[c].getRank() && b[f].suit === h[c].getSuit()) {
          h[c].highlight();
          break;
        }
    D.showWinAnim(n, a);
    p = s_oPayTableSettings.getWin(n, a) * BET_TYPE[g];
    d += p;
    d = parseFloat(d.toFixed(2));
    k -= p;
    z.refreshWin(p);
    z.refreshMoney(d, m);
  };
  this.recharge = function (a) {
    d = a;
    oldCredit = d;
    D.setCreditColumn(n);
    this.checkMoney();
    z.refreshMoney(d, m);
    z.refreshBet(BET_TYPE[g]);
    E.hide();
  };
  this._gameOver = function () {
    E.show();
  };
  this.setMoney = function (a) {
    d = parseFloat(a);
    oldCredit = d;
    z.refreshMoney(d, m);
  };
  this.onCardSelected = function (a) {
    q === STATE_GAME_CHOOSE_HOLD && a.toggleHold();
  };
  this._onCardShown = function () {
    if (q !== STATE_GAME_CHOOSE_HOLD) {
      switch (q) {
        case STATE_GAME_DEAL:
          q = STATE_GAME_CHOOSE_HOLD;
          z.setState(q);
          break;
        case STATE_GAME_DRAW:
          var a = A.evaluate(h);
          z.setState(q);
          a !== HIGH_CARD
            ? s_oGame.assignWin(a)
            : (playSound("lose", 1, !1), z.showLosePanel());
          let winAmount = d - oldCredit + m;

          const response = $.ajax({
            url: 'http://localhost:6140/api/games/updateGameBankWithWinAmount',
            type: 'POST',
            async: false,
            data: {
              customerId: customerid,
              gameId: gameid,
              bet_amount: m,
              win_amount: winAmount,
            }
          })
          if(response.responseJSON.gameStatus == false) {
            alert("Sorry, Something went wrong, please try again");
            window.location.reload()
          }

          $(s_oMain).trigger("save_score", [d]);
          oldCredit = d;
          y++;
          y === NUM_HAND_FOR_ADS
            ? ((y = 0), $(s_oMain).trigger("show_interlevel_ad"))
            : y === NUM_HAND_FOR_ADS - 1 &&
              $(s_oMain).trigger("share_event", [d]);
          q = STATE_GAME_EVALUATE;
          break;
        case STATE_GAME_EVALUATE:
          z.setState(q);
      }
      c = !1;
    }
  };
  this._onCardHide = function () {
    if (q !== STATE_GAME_DRAW) {
      q = STATE_GAME_DRAW;
      if (b) {
        var a = 0;
        do {
          s_oGame._changeCardValue();
          var c = A.evaluate(h);
          var d =
            c === HIGH_CARD
              ? 0
              : s_oPayTableSettings.getWin(n, c) * BET_TYPE[g];
          a++;
        } while ((c === HIGH_CARD || k < d) && 5e3 > a);
        if (5e3 <= a) {
          do s_oGame._changeCardValue(), (c = A.evaluate(h));
          while (c < HIGH_CARD);
          b = !1;
        }
      } else {
        do s_oGame._changeCardValue(), (c = A.evaluate(h));
        while (c < HIGH_CARD);
      }
      for (a = 0; 5 > a; a++) h[a].setHold(!1);
    }
  };
  this._changeCardValue = function () {
    for (var a = 0; 5 > a; a++)
      !1 === h[a].isHold() &&
        (h[a].changeInfo(u[f].fotogram, u[f].rank, u[f].suit),
        h[a].showCard(),
        f++,
        this._checkDeckLength());
    var k = A.evaluate(h);
    if (WIN_TYPE_VALUE[k] !== 0 && !AVAILABLE_WIN_TYPES.includes(WIN_TYPE_VALUE[k])) {
      this._changeCardValue()
    }
  };
  this._onButDealRelease = function () {
    clearInterval(id);
    switch (q) {
      case STATE_GAME_WAITING_FOR_BET:
        this.dealCards();
        break;
      case STATE_GAME_CHOOSE_HOLD:
        this.drawCards();
        break;
      case STATE_GAME_EVALUATE:
        this.resetHand(), this.dealCards();
    }
  };
  this._onButLeftRelease = function () {
    if (
      !(c || (q !== STATE_GAME_WAITING_FOR_BET && q !== STATE_GAME_EVALUATE))
    ) {
      n--;
      n < 0 && (n = NUM_BETS - 1);
      var a = parseFloat(BET_TYPE[g] * (n + 1));
      d < a
        ? 0 === n
          ? (n = NUM_BETS - 1)
          : n--
        : ((m = a),
          z.refreshMoney(d, m),
          D.setCreditColumn(n),
          (MIN_WIN =
            COMBO_PRIZES[COMBO_PRIZES.length - 1] * BET_TYPE[g] * (n + 1)));
    }
  };
  this._onButRightRelease = function () {
    if (
      !(c || (q !== STATE_GAME_WAITING_FOR_BET && q !== STATE_GAME_EVALUATE))
    ) {
      n++;
      n === NUM_BETS && (n = 0);
      var a = parseFloat(BET_TYPE[g] * (n + 1));
      d < a
        ? 0 === n
          ? (n = NUM_BETS - 1)
          : n--
        : ((m = a),
          z.refreshMoney(d, m),
          D.setCreditColumn(n),
          (MIN_WIN =
            COMBO_PRIZES[COMBO_PRIZES.length - 1] * BET_TYPE[g] * (n + 1)));
    }
  };
  this._onButBetOneRelease = function () {
    if (
      !(c || (q !== STATE_GAME_WAITING_FOR_BET && q !== STATE_GAME_EVALUATE))
    ) {
      n++;
      n === NUM_BETS && (n = 0);
      var a = parseFloat(BET_TYPE[g] * (n + 1));
      d < a
        ? 0 === n
          ? (n = NUM_BETS - 1)
          : n--
        : ((m = a),
          z.refreshMoney(d, m),
          D.setCreditColumn(n),
          (MIN_WIN =
            COMBO_PRIZES[COMBO_PRIZES.length - 1] * BET_TYPE[g] * (n + 1)));
    }
  };
  this._onButBetMaxRelease = function () {
    if (
      !(c || (q !== STATE_GAME_WAITING_FOR_BET && q !== STATE_GAME_EVALUATE))
    ) {
      c = !0;
      n = NUM_BETS - 1;
      var a = parseFloat(BET_TYPE[g] * (n + 1));
      d < a
        ? this._gameOver()
        : ((m = a),
          z.refreshMoney(d, m),
          D.setCreditColumn(n),
          (MIN_WIN =
            COMBO_PRIZES[COMBO_PRIZES.length - 1] * BET_TYPE[g] * (n + 1)),
          this.resetHand(),
          this.dealCards());
    }
  };
  this.onExit = function () {
    this.unload();
    s_oMain.gotoMenu();
    $(s_oMain).trigger("save_score", [d]);
    $(s_oMain).trigger("end_session");
  };
  this.update = function () {};
  s_oGame = this;
  WIN_OCCURRENCE = a.win_occurrence;
  GAME_CASH = a.game_cash;
  BET_TYPE = a.bets;
  COMBO_PRIZES = a.combo_prizes;
  TOTAL_MONEY = a.money;
  AUTOMATIC_RECHARGE = a.recharge;
  NUM_HAND_FOR_ADS = a.num_hand_before_ads;
  this._init();
}
var s_oGame, s_oPayTableSettings;
function CInterface(a, c) {
  var b,
    d,
    k,
    m,
    p,
    g,
    n,
    f,
    q,
    y,
    h,
    u,
    v,
    A,
    w,
    z,
    D,
    E,
    F,
    x = null,
    O = null;
  this._init = function (a, c) {
    var l = s_oSpriteLibrary.getSprite("but_exit");
    k = CANVAS_WIDTH - l.width / 2 - 2;
    m = l.height / 2 + 2;
    n = new CGfxButton(k, m, l, s_oStage);
    n.addEventListener(ON_MOUSE_UP, this._onExit, this);
    !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
      ? ((p = n.getX() - l.width),
        (g = l.height / 2 + 2),
        (v = new CToggle(
          p,
          g,
          s_oSpriteLibrary.getSprite("audio_icon"),
          s_bAudioActive
        )),
        v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        (b = p - l.width - 10),
        (d = g))
      : ((b = n.getX() - l.width - 10), (d = l.height / 2 + 2));
    l = window.document;
    var H = l.documentElement;
    x =
      H.requestFullscreen ||
      H.mozRequestFullScreen ||
      H.webkitRequestFullScreen ||
      H.msRequestFullscreen;
    O =
      l.exitFullscreen ||
      l.mozCancelFullScreen ||
      l.webkitExitFullscreen ||
      l.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (x = !1);
    x &&
      screenfull.isEnabled &&
      ((l = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (F = new CToggle(b, d, l, s_bFullscreen, !0)),
      F.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    l = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    l.x = 480;
    l.y = 25;
    s_oStage.addChild(l);
    new CTLText(
      s_oStage,
      470,
      20,
      100,
      22,
      22,
      "left",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_WIN,
      !0,
      !0,
      !1,
      !1
    );
    l = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    l.x = 480;
    l.y = 93;
    s_oStage.addChild(l);
    new CTLText(
      s_oStage,
      470,
      90,
      100,
      22,
      22,
      "left",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_BET,
      !0,
      !0,
      !1,
      !1
    );
    l = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    l.x = 470;
    l.y = 687;
    s_oStage.addChild(l);
    new CTLText(
      s_oStage,
      460,
      685,
      100,
      22,
      22,
      "left",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_MONEY,
      !0,
      !0,
      !1,
      !1
    );
    A = new CTLText(
      s_oStage,
      480,
      CANVAS_HEIGHT - 66,
      210,
      30,
      30,
      "center",
      "#ffde00",
      FONT2,
      1,
      0,
      0,
      a.toFixed(2) + TEXT_CURRENCY,
      !0,
      !0,
      !1,
      !1
    );
    z = new CTLText(
      s_oStage,
      490,
      110,
      210,
      30,
      30,
      "center",
      "#ffde00",
      FONT2,
      1,
      0,
      0,
      c.toFixed(2) + TEXT_CURRENCY,
      !0,
      !0,
      !1,
      !1
    );
    w = new CTLText(
      s_oStage,
      490,
      40,
      210,
      30,
      30,
      "center",
      "#ffde00",
      FONT2,
      1,
      0,
      0,
      "0" + TEXT_CURRENCY,
      !0,
      !0,
      !1,
      !1
    );
    l = createBitmap(s_oSpriteLibrary.getSprite("big_display"));
    l.x = 770;
    l.y = 686;
    s_oStage.addChild(l);
    D = new CTLText(
      s_oStage,
      780,
      700,
      108,
      40,
      40,
      "center",
      "#ffde00",
      FONT2,
      1,
      0,
      0,
      c.toFixed(2) + TEXT_CURRENCY,
      !0,
      !0,
      !1,
      !1
    );
    l = s_oSpriteLibrary.getSprite("logo_game");
    H = createBitmap(l);
    H.x = CANVAS_WIDTH / 2;
    H.y = 17;
    H.regX = l.width / 2;
    s_oStage.addChild(H);
    l = s_oSpriteLibrary.getSprite("but_left");
    f = new CGfxButton(744, 722, l, s_oStage);
    f.addEventListener(ON_MOUSE_UP, this._onButLeftRelease, this);
    l = s_oSpriteLibrary.getSprite("but_right");
    q = new CGfxButton(930, 722, l, s_oStage);
    q.addEventListener(ON_MOUSE_UP, this._onButRightRelease, this);
    l = s_oSpriteLibrary.getSprite("but_game_bg");
    y = new CTextButton(
      1040,
      716,
      l,
      TEXT_BET_ONE,
      FONT1,
      "#ffffff",
      23,
      0,
      s_oStage
    );
    y.addEventListener(ON_MOUSE_UP, this._onButBetOneRelease, this);
    h = new CTextButton(
      1190,
      716,
      l,
      TEXT_MAX_BET,
      FONT1,
      "#ffffff",
      23,
      0,
      s_oStage
    );
    h.addEventListener(ON_MOUSE_UP, this._onButBetMaxRelease, this);
    u = new CTextButton(
      1340,
      716,
      l,
      TEXT_DEAL,
      FONT1,
      "#ffffff",
      30,
      0,
      s_oStage
    );
    u.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
    E = new createjs.Container();
    E.visible = !1;
    E.x = 710;
    E.y = 500;
    s_oStage.addChild(E);
    l = new createjs.Shape();
    l.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, 500, 100);
    E.addChild(l);
    new CTLText(
      E,
      0,
      0,
      500,
      100,
      50,
      "center",
      "#fff",
      FONT1,
      1,
      10,
      5,
      TEXT_NO_WIN,
      !0,
      !0,
      !1,
      !1
    );
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    n.unload();
    f.unload();
    q.unload();
    y.unload();
    h.unload();
    u.unload();
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v.unload(), (v = null);
    x && screenfull.isEnabled && F.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (a, c) {
    n.setPosition(k - a, c + m);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      v.setPosition(p - a, c + g);
    x && screenfull.isEnabled && F.setPosition(b - a, d + c);
  };
  this.setState = function (a) {
    switch (a) {
      case STATE_GAME_CHOOSE_HOLD:
        u.changeText(TEXT_DRAW);
        break;
      case STATE_GAME_DRAW:
      case STATE_GAME_EVALUATE:
        u.changeText(TEXT_DEAL);
    }
  };
  this.resetHand = function () {
    this.refreshWin(0);
    E.visible = !1;
  };
  this.refreshMoney = function (a, b) {
    A.refreshText(a.toFixed(2) + TEXT_CURRENCY);
    z.refreshText(b.toFixed(2) + TEXT_CURRENCY);
    D.refreshText(b.toFixed(2) + TEXT_CURRENCY);
  };
  this.refreshWin = function (a) {
    w.refreshText(a.toFixed(2) + TEXT_CURRENCY);
  };
  this.refreshBet = function (a) {
    // D.refreshText(a.toFixed(2) + TEXT_CURRENCY);
  };
  this.showLosePanel = function () {
    E.visible = !0;
  };
  this._onButLeftRelease = function () {
    s_oGame._onButLeftRelease();
  };
  this._onButRightRelease = function () {
    s_oGame._onButRightRelease();
  };
  this._onButBetOneRelease = function () {
    s_oGame._onButBetOneRelease();
  };
  this._onButBetMaxRelease = function () {
    s_oGame._onButBetMaxRelease();
  };
  this._onButDealRelease = function () {
    s_oGame._onButDealRelease();
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    x && screenfull.isEnabled && F.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? O.call(window.document)
      : x.call(window.document.documentElement);
    sizeHandler();
  };
  s_oInterface = this;
  this._init(a, c);
  return this;
}
var s_oInterface = null;
function CGameSettings() {
  var a, c;
  this._init = function () {
    var b = -1;
    a = [];
    for (var c = 0; 52 > c; c++) {
      var k = (c + 1) % 13;
      1 === k ? ((k = 14), b++) : 0 === k && (k = 13);
      a.push({ fotogram: c, rank: k, suit: b });
    }
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
    for (var b = [], d = 0; d < a.length; d++) b[d] = a[d];
    for (c = []; 0 < b.length; )
      c.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
    return c;
  };
  this.getCardValue = function (a) {
    return (void 0)[a];
  };
  this._init();
}
function CCard(a, c, b, d, k, m) {
  var p, g, n, f, q, y, h, u, v, A, w;
  this._init = function (a, c, b, d, k, m) {
    p = !1;
    w = b;
    g = d;
    n = k;
    f = m;
    b = s_oSpriteLibrary.getSprite("card_spritesheet");
    b = new createjs.SpriteSheet({
      images: [b],
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
    });
    h = createSprite(
      b,
      "back",
      CARD_WIDTH / 2,
      CARD_HEIGHT / 2,
      CARD_WIDTH,
      CARD_HEIGHT
    );
    h.x = a;
    h.y = c;
    h.stop();
    h.shadow = new createjs.Shadow("#000000", 5, 5, 5);
    w.addChild(h);
    b = s_oSpriteLibrary.getSprite("hold");
    u = createBitmap(b);
    u.regX = b.width / 2;
    u.x = a;
    u.y = c + 76;
    u.visible = !1;
    w.addChild(u);
    b = s_oSpriteLibrary.getSprite("card_selection");
    A = createBitmap(b);
    A.x = a;
    A.y = c;
    A.regX = b.width / 2;
    A.regY = b.height / 2;
    A.visible = !1;
    w.addChild(A);
    v = new createjs.Shape();
    v.graphics
      .beginFill("rgba(255,255,255,0.01)")
      .drawRect(
        a - CARD_WIDTH / 2,
        c - CARD_HEIGHT / 2,
        CARD_WIDTH,
        CARD_HEIGHT
      );
    v.on("click", this._onSelected);
    v.cursor = "pointer";
    w.addChild(v);
    q = [];
    y = [];
  };
  this.unload = function () {
    v.off("click", this._onSelected);
    w.removeChild(h);
  };
  this.reset = function () {
    p = !1;
    A.visible = !1;
    h.shadow = new createjs.Shadow("#000000", 5, 5, 5);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    y[a] = c;
  };
  this.changeInfo = function (a, b, c) {
    g = a;
    n = b;
    f = c;
  };
  this.setValue = function () {
    h.gotoAndStop(g);
    var a = this;
    createjs.Tween.get(h)
      .to({ scaleX: 1 }, 200)
      .call(function () {
        a.cardShown();
      });
  };
  this.setHold = function (a) {
    p = a;
    u.visible = p;
  };
  this.toggleHold = function () {
    createjs.Tween.hasActiveTweens(h) ||
      ((p = !p), (u.visible = p), playSound("press_hold", 1, !1));
  };
  this.showCard = function () {
    var a = this;
    createjs.Tween.get(h)
      .to({ scaleX: 0.1 }, 200)
      .call(function () {
        a.setValue();
      });
  };
  this.hideCard = function () {
    var a = this;
    createjs.Tween.get(h)
      .to({ scaleX: 0.1 }, 200)
      .call(function () {
        a.setBack();
      });
  };
  this.setBack = function () {
    h.gotoAndStop("back");
    var a = this;
    createjs.Tween.get(h)
      .to({ scaleX: 1 }, 200)
      .call(function () {
        a.cardHidden();
      });
  };
  this.cardShown = function () {
    q[ON_CARD_SHOWN] && q[ON_CARD_SHOWN].call(y[ON_CARD_SHOWN]);
  };
  this.cardHidden = function () {
    q[ON_CARD_HIDE] && q[ON_CARD_HIDE].call(y[ON_CARD_HIDE], this);
  };
  this.highlight = function () {
    h.shadow = new createjs.Shadow("#fff000", 0, 0, 15);
    A.visible = !0;
  };
  this._onSelected = function () {
    s_oGame.onCardSelected(z);
  };
  this.getRank = function () {
    return n;
  };
  this.getSuit = function () {
    return f;
  };
  this.getFotogram = function () {
    return g;
  };
  this.isHold = function () {
    return p;
  };
  var z = this;
  this._init(a, c, b, d, k, m);
}
function CGameOver() {
  var a, c, b;
  this._init = function () {
    b = new createjs.Container();
    s_oStage.addChild(b);
    var d = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    b.addChild(d);
    new CTLText(
      b,
      CANVAS_WIDTH / 2 - 198,
      CANVAS_HEIGHT / 2 - 98,
      400,
      50,
      50,
      "center",
      "#000",
      FONT1,
      1,
      0,
      0,
      TEXT_GAMEOVER,
      !0,
      !0,
      !1,
      !1
    );
    new CTLText(
      b,
      CANVAS_WIDTH / 2 - 200,
      CANVAS_HEIGHT / 2 - 100,
      400,
      50,
      50,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_GAMEOVER,
      !0,
      !0,
      !1,
      !1
    );
    // a = new CTextButton(
    //   CANVAS_WIDTH / 2 - 100,
    //   450,
    //   s_oSpriteLibrary.getSprite("but_game_bg"),
    //   TEXT_RECHARGE,
    //   FONT1,
    //   "#fff",
    //   14,
    //   0,
    //   b
    // );
    // a.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    c = new CTextButton(
      CANVAS_WIDTH / 2,
      450,
      s_oSpriteLibrary.getSprite("but_game_bg"),
      TEXT_EXIT,
      FONT1,
      "#fff",
      14,
      0,
      b
    );
    c.addEventListener(ON_MOUSE_UP, this._onExit, this);
    this.hide();
  };
  this.unload = function () {
    // a.unload();
    c.unload();
  };
  this.show = function () {
    b.visible = !0;
  };
  this.hide = function () {
    b.visible = !1;
  };
  this._onRecharge = function () {
    b.visible = !1;
    AUTOMATIC_RECHARGE && s_oGame.recharge(TOTAL_MONEY);
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    $(s_oMain).trigger("end_session");
    s_oGame.onExit();
  };
  this._init();
}
function CPayTable(a, c) {
  var b, d, k, m, p;
  this._init = function (a, c) {
    b = 0;
    p = new createjs.Container();
    p.x = a;
    p.y = c;
    s_oStage.addChild(p);
    var f = createBitmap(s_oSpriteLibrary.getSprite("paytable"));
    p.addChild(f);
    f = 278;
    var g = 4;
    d = [];
    for (var n = 0; n < NUM_BETS; n++) {
      var h = createBitmap(s_oSpriteLibrary.getSprite("selection"));
      h.visible = !1;
      h.x = f;
      h.y = g;
      p.addChild(h);
      d.push(h);
      f += 100;
    }
    f = 25;
    g = 15;
    m = [];
    for (n = 0; n < WIN_COMBINATIONS; n++)
      (h = new CTLText(
        p,
        f,
        g,
        250,
        19,
        19,
        "right",
        "#fff000",
        FONT1,
        1,
        0,
        0,
        TEXT_COMBO[n],
        !0,
        !0,
        !1,
        !1
      )),
        (g += 22),
        (m[n] = h);
    f = 375;
    k = [];
    for (n = 0; n < NUM_BETS; n++) {
      g = 27;
      k[n] = [];
      for (h = 0; h < WIN_COMBINATIONS; h++) {
        var u = new createjs.Text(
          s_oPayTableSettings.getWin(n, h),
          "22px " + FONT1,
          "#fff000"
        );
        u.x = f;
        u.y = g;
        u.textAlign = "right";
        u.textBaseline = "middle";
        p.addChild(u);
        g += 22;
        k[n][h] = u;
      }
      f += 100;
    }
  };
  this.resetHand = function () {
    createjs.Tween.removeAllTweens();
    for (var a = 0; a < NUM_BETS; a++)
      for (var b = 0; b < WIN_COMBINATIONS; b++) k[a][b].alpha = 1;
    for (a = 0; a < WIN_COMBINATIONS; a++) m[a].alpha = 1;
  };
  this.setCreditColumn = function (a) {
    for (var b = 0; b < NUM_BETS; b++) d[b].visible = !1;
    d[a].visible = !0;
  };
  this.showWinAnim = function (a, c) {
    clearInterval(id);
    var d = this;
    b = 0;
    let counter = 0;
    id = setInterval(() => {
      if (counter > 400) {
        clearInterval(id);
      } else {
        b = b === 1 ? 0 : 1;
        createjs.Tween.get(k[a][c]).to({ alpha: b }, 100);
        counter++;
      }
    }, 100);
  };
  this._init(a, c);
}
function CPayTableSettings() {
  var a;
  this._init = function () {
    a = [];
    for (var c = 0; c < NUM_BETS; c++) {
      a[c] = [];
      for (var b = 0; b < WIN_COMBINATIONS; b++)
        a[c][b] = COMBO_PRIZES[b] * (c + 1);
    }
  };
  this.getWin = function (c, b) {
    return a[c][b];
  };
  this._init();
}
function CHandEvaluator() {
  var a, c;
  this.evaluate = function (b) {
    a = [];
    for (var d = 0; d < b.length; d++)
      a[d] = { rank: b[d].getRank(), suit: b[d].getSuit() };
    a.sort(this.compareRank);
    c = [0, 1, 2, 3, 4];
    return this.rankHand();
  };
  this.rankHand = function () {
    if (this._checkForRoyalFlush()) return ROYAL_FLUSH;
    if (this._checkForStraightFlush()) return STRAIGHT_FLUSH;
    if (this._checkForFourOfAKind()) return FOUR_OF_A_KIND;
    if (this._checkForFullHouse()) return FULL_HOUSE;
    if (this._checkForFlush()) return FLUSH;
    if (this._checkForStraight()) return STRAIGHT;
    if (this._checkForThreeOfAKind()) return THREE_OF_A_KIND;
    if (this._checkForTwoPair()) return TWO_PAIR;
    if (this._checkForOnePair()) return JACKS_OR_BETTER;
    this._identifyHighCard();
    return HIGH_CARD;
  };
  this._checkForRoyalFlush = function () {
    return this._isRoyalStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForStraightFlush = function () {
    return this._isStraight() && this._isFlush() ? !0 : !1;
  };
  this._checkForFourOfAKind = function () {
    return a[0].rank === a[3].rank
      ? (a.splice(4, 1), c.splice(4, 1), !0)
      : a[1].rank === a[4].rank
      ? (a.splice(0, 1), c.splice(0, 1), !0)
      : !1;
  };
  this._checkForFullHouse = function () {
    return (a[0].rank === a[1].rank && a[2].rank === a[4].rank) ||
      (a[0].rank === a[2].rank && a[3].rank === a[4].rank)
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
    return a[0].rank === a[1].rank && a[0].rank === a[2].rank
      ? (a.splice(3, 1), a.splice(3, 1), c.splice(3, 1), c.splice(3, 1), !0)
      : a[1].rank === a[2].rank && a[1].rank === a[3].rank
      ? (a.splice(0, 1), a.splice(3, 1), c.splice(0, 1), c.splice(3, 1), !0)
      : a[2].rank === a[3].rank && a[2].rank === a[4].rank
      ? (a.splice(0, 1), a.splice(0, 1), c.splice(0, 1), c.splice(0, 1), !0)
      : !1;
  };
  this._checkForTwoPair = function () {
    return a[0].rank === a[1].rank && a[2].rank === a[3].rank
      ? (a.splice(4, 1), c.splice(4, 1), !0)
      : a[1].rank === a[2].rank && a[3].rank === a[4].rank
      ? (a.splice(0, 1), c.splice(0, 1), !0)
      : a[0].rank === a[1].rank && a[3].rank === a[4].rank
      ? (a.splice(2, 1), c.splice(2, 1), !0)
      : !1;
  };
  this._checkForOnePair = function () {
    for (var b = 0; 4 > b; b++)
      if (a[b].rank === a[b + 1].rank && a[b].rank > CARD_TEN) {
        var d = a[b],
          k = a[b + 1];
        a = [];
        a.push(d);
        a.push(k);
        c = [b, b + 1];
        return !0;
      }
    return !1;
  };
  this._identifyHighCard = function () {
    for (var b = 0; 4 > b; b++) a.splice(0, 1);
  };
  this._isFlush = function () {
    return a[0].suit === a[1].suit &&
      a[0].suit === a[2].suit &&
      a[0].suit === a[3].suit &&
      a[0].suit === a[4].suit
      ? !0
      : !1;
  };
  this._isRoyalStraight = function () {
    return a[0].rank === CARD_TEN &&
      a[1].rank === CARD_JACK &&
      a[2].rank === CARD_QUEEN &&
      a[3].rank === CARD_KING &&
      a[4].rank === CARD_ACE
      ? !0
      : !1;
  };
  this._isStraight = function () {
    var b =
      a[0].rank + 1 === a[1].rank &&
      a[1].rank + 1 === a[2].rank &&
      a[2].rank + 1 === a[3].rank;
    return b && a[0].rank === CARD_TWO && a[4].rank === CARD_ACE
      ? !0
      : b && a[3].rank + 1 === a[4].rank
      ? !0
      : !1;
  };
  this.compareRank = function (a, c) {
    return a.rank < c.rank ? -1 : a.rank > c.rank ? 1 : 0;
  };
  this.getSortedHand = function () {
    return a;
  };
  this.getCardIndexInCombo = function () {
    return c;
  };
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
    g = new createjs.Shape();
    // g.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // g.alpha = 0.01;
    // m = g.on("click", this._onLogoButRelease);
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(CANVAS_WIDTH - 390, p.height / 2 + 10, p, n);
    b.addEventListener(ON_MOUSE_UP, this.unload, this);
    c = this.makeText("Rule", "44px ", "#0ff ", FONT2, 400, 460);
    n.addChild(c);
    let text = `To begin playing "Jacks or Better" player is required to ante.
The dealer will then deal out five cards to player. 
Player will have the chance to look at their cards and decide which card they will hold.
Player will draw the card that not be held again.
According to the result, player will get paid or lose.
See the "Pay Table" on the game screen.`;
    c = this.makeText(text, "24px ", "#fff", FONT1, 380, 525);
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
  setShadow: function (a, c, b, d) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, c, b, d));
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
function CTLText(a, c, b, d, k, m, p, g, n, f, q, y, h, u, v, A, w) {
  this._oContainer = a;
  this._x = c;
  this._y = b;
  this._iWidth = d;
  this._iHeight = k;
  this._bMultiline = A;
  this._iFontSize = m;
  this._szAlign = p;
  this._szColor = g;
  this._szFont = n;
  this._iPaddingH = q;
  this._iPaddingV = y;
  this._bVerticalAlign = v;
  this._bFitText = u;
  this._bDebug = w;
  this._oDebugShape = null;
  this._fLineHeightFactor = f;
  this._oText = null;
  h && this.__createText(h);
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var c = a.split("."),
    b = c.length;
  2 < b && (a = c[b - 2] + "." + c[b - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      c = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          c = !0;
          break;
        }
    } catch (b) {
      c = !0;
    }
    return { topFrame: a, err: c };
  },
  getBestPageUrl = function (a) {
    var c = a.topFrame,
      b = "";
    if (a.err)
      try {
        try {
          b = window.top.location.href;
        } catch (k) {
          var d = window.location.ancestorOrigins;
          b = d[d.length - 1];
        }
      } catch (k) {
        b = c.document.referrer;
      }
    else b = c.location.href;
    return b;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
      c = [
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
    b < c.length;
    b++
  )
    if (c[b] === a) return !0;
  return !0;
}
