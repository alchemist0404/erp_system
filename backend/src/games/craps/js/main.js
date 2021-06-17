/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
  function a(b) {
    b = String(b);
    return b.charAt(0).toUpperCase() + b.slice(1);
  }
  function g(b, c) {
    var a = -1,
      d = b ? b.length : 0;
    if ("number" == typeof d && -1 < d && d <= A)
      for (; ++a < d; ) c(b[a], a, b);
    else e(b, c);
  }
  function d(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function e(b, c) {
    for (var a in b) z.call(b, a) && c(b[a], a, b);
  }
  function h(b) {
    return null == b ? a(b) : q.call(b).slice(8, -1);
  }
  function b(b, c) {
    var a = null != b ? typeof b[c] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(a) &&
      ("object" == a ? !!b[c] : !0)
    );
  }
  function f(b) {
    return String(b).replace(/([ -])(?!$)/g, "$1?");
  }
  function l(b, c) {
    var a = null;
    g(b, function (d, f) {
      a = c(a, d, f, b);
    });
    return a;
  }
  function c(a) {
    function g(b) {
      return l(b, function (b, c) {
        var h = c.pattern || f(c);
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
          (b = d(
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
    var t = r,
      m = a && "object" == typeof a && "String" != h(a);
    m && ((t = a), (a = null));
    var K = t.navigator || {},
      x = K.userAgent || "";
    a || (a = x);
    var y = m
        ? !!K.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(q.toString()),
      w = m ? "Object" : "ScriptBridgingProxyObject",
      A = m ? "Object" : "Environment",
      z = m && t.java ? "JavaPackage" : h(t.java),
      D = m ? "Object" : "RuntimeObject";
    A = (z = /\bJava/.test(z) && t.java) && h(t.environment) == A;
    var R = z ? "a" : "\u03b1",
      S = z ? "b" : "\u03b2",
      O = t.document || {},
      H = t.operamini || t.opera,
      L = n.test((L = m && H ? H["[[Class]]"] : h(H))) ? L : (H = null),
      k,
      M = a;
    m = [];
    var N = null,
      I = a == x;
    x = I && H && "function" == typeof H.version && H.version();
    var B = (function (b) {
        return l(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) &&
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
            (RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) &&
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
      C = g([
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
        return l(b, function (b, c, d) {
          return (
            b ||
            ((c[C] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] ||
              RegExp("\\b" + f(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
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
      v = (function (b) {
        return l(b, function (b, c) {
          var h = c.pattern || f(c);
          if (
            !b &&
            (b = RegExp("\\b" + h + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var g = b,
              l = c.label || c,
              e = {
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
              l &&
              /^Win/i.test(g) &&
              !/^Windows Phone /i.test(g) &&
              (e = e[/[\d.]+$/.exec(g)]) &&
              (g = "Windows " + e);
            g = String(g);
            h && l && (g = g.replace(RegExp(h, "i"), l));
            b = g = d(
              g
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
    G && !C && (C = g([G]));
    if ((k = /\bGoogle TV\b/.exec(C))) C = k[0];
    /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
    "Opera Mini" == u &&
      /\bOPiOS\b/.test(a) &&
      m.push("running in Turbo/Uncompressed mode");
    "IE" == u && /\blike iPhone OS\b/.test(a)
      ? ((k = c(a.replace(/like iPhone OS/, ""))),
        (G = k.manufacturer),
        (C = k.product))
      : /^iP/.test(C)
      ? (u || (u = "Safari"),
        (v =
          "iOS" +
          ((k = / OS ([\d_]+)/i.exec(a)) ? " " + k[1].replace(/_/g, ".") : "")))
      : "Konqueror" != u || /buntu/i.test(v)
      ? (G &&
          "Google" != G &&
          ((/Chrome/.test(u) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(C))) ||
        (/\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(a))
        ? ((u = "Android Browser"), (v = /\bAndroid\b/.test(v) ? v : "Android"))
        : "Silk" == u
        ? (/\bMobi/i.test(a) || ((v = "Android"), m.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && m.unshift("accelerated"))
        : "PaleMoon" == u && (k = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? m.push("identifying as Firefox " + k[1])
        : "Firefox" == u && (k = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (v || (v = "Firefox OS"), C || (C = k[1]))
        : !u ||
          (k = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(u))
        ? (u &&
            !C &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(k + "/") + 8)) &&
            (u = null),
          (k = C || G || v) &&
            (C || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) &&
            (u =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : k) +
              " Browser"))
        : "Electron" == u &&
          (k = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          m.push("Chromium " + k)
      : (v = "Kubuntu");
    x ||
      (x = p([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        f(u),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (k =
        ("iCab" == B && 3 < parseFloat(x) && "WebKit") ||
        (/\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(B) &&
          "WebKit") ||
        (!B && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident")) ||
        ("WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront"))
    )
      B = [k];
    "IE" == u && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((u += " Mobile"),
        (v = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x")),
        m.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((u = "IE Mobile"),
        (v = "Windows Phone 8.x"),
        m.unshift("desktop mode"),
        x || (x = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != u &&
        "Trident" == B &&
        (k = /\brv:([\d.]+)/.exec(a)) &&
        (u && m.push("identifying as " + u + (x ? " " + x : "")),
        (u = "IE"),
        (x = k[1]));
    if (I) {
      if (b(t, "global"))
        if (
          (z &&
            ((k = z.lang.System),
            (M = k.getProperty("os.arch")),
            (v =
              v ||
              k.getProperty("os.name") + " " + k.getProperty("os.version"))),
          A)
        ) {
          try {
            (x = t.require("ringo/engine").version.join(".")), (u = "RingoJS");
          } catch (Q) {
            (k = t.system) &&
              k.global.system == t.system &&
              ((u = "Narwhal"), v || (v = k[0].os || null));
          }
          u || (u = "Rhino");
        } else
          "object" == typeof t.process &&
            !t.process.browser &&
            (k = t.process) &&
            ("object" == typeof k.versions &&
              ("string" == typeof k.versions.electron
                ? (m.push("Node " + k.versions.node),
                  (u = "Electron"),
                  (x = k.versions.electron))
                : "string" == typeof k.versions.nw &&
                  (m.push("Chromium " + x, "Node " + k.versions.node),
                  (u = "NW.js"),
                  (x = k.versions.nw))),
            u ||
              ((u = "Node.js"),
              (M = k.arch),
              (v = k.platform),
              (x = (x = /[\d.]+/.exec(k.version)) ? x[0] : null)));
      else
        h((k = t.runtime)) == w
          ? ((u = "Adobe AIR"), (v = k.flash.system.Capabilities.os))
          : h((k = t.phantom)) == D
          ? ((u = "PhantomJS"),
            (x =
              (k = k.version || null) &&
              k.major + "." + k.minor + "." + k.patch))
          : "number" == typeof O.documentMode &&
            (k = /\bTrident\/(\d+)/i.exec(a))
          ? ((x = [x, O.documentMode]),
            (k = +k[1] + 4) != x[1] &&
              (m.push("IE " + x[1] + " mode"), B && (B[1] = ""), (x[1] = k)),
            (x = "IE" == u ? String(x[1].toFixed(1)) : x[0]))
          : "number" == typeof O.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(u) &&
            (m.push("masking as " + u + " " + x),
            (u = "IE"),
            (x = "11.0"),
            (B = ["Trident"]),
            (v = "Windows"));
      v = v && d(v);
    }
    x &&
      (k =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(x) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (I && K.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((N = /b/i.test(k) ? "beta" : "alpha"),
      (x =
        x.replace(RegExp(k + "\\+?$"), "") +
        ("beta" == N ? S : R) +
        (/\d+\+?/.exec(k) || "")));
    if (
      "Fennec" == u ||
      ("Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v))
    )
      u = "Firefox Mobile";
    else if ("Maxthon" == u && x) x = x.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(C))
      "Xbox 360" == C && (v = null),
        "Xbox 360" == C && /\bIEMobile\b/.test(a) && m.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(u) &&
        (!u || C || /Browser|Mobi/.test(u))) ||
      ("Windows CE" != v && !/Mobi/i.test(a))
    )
      if ("IE" == u && I)
        try {
          null === t.external && m.unshift("platform preview");
        } catch (Q) {
          m.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) &&
        (k =
          (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || x)
          ? ((k = [k, /BB10/.test(a)]),
            (v =
              (k[1] ? ((C = null), (G = "BlackBerry")) : "Device Software") +
              " " +
              k[0]),
            (x = null))
          : this != e &&
            "Wii" != C &&
            ((I && H) ||
              (/Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v)) ||
              ("IE" == u &&
                ((v && !/^Win/.test(v) && 5.5 < x) ||
                  (/\bWindows XP\b/.test(v) && 8 < x) ||
                  (8 == x && !/\bTrident\b/.test(a))))) &&
            !n.test((k = c.call(e, a.replace(n, "") + ";"))) &&
            k.name &&
            ((k = "ing as " + k.name + ((k = k.version) ? " " + k : "")),
            n.test(u)
              ? (/\bIE\b/.test(k) && "Mac OS" == v && (v = null),
                (k = "identify" + k))
              : ((k = "mask" + k),
                (u = L ? d(L.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(k) && (v = null),
                I || (x = null)),
            (B = ["Presto"]),
            m.push(k));
    else u += " Mobile";
    if ((k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k];
      if ("Safari" == u && "+" == k[1].slice(-1))
        (u = "WebKit Nightly"), (N = "alpha"), (x = k[1].slice(0, -1));
      else if (
        x == k[1] ||
        x == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        x = null;
      k[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == k[0] &&
        537.36 == k[2] &&
        28 <= parseFloat(k[1]) &&
        "WebKit" == B &&
        (B = ["Blink"]);
      I && (y || k[1])
        ? (B && (B[1] = "like Chrome"),
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
              : "Blink" != B
              ? "27"
              : "28")))
        : (B && (B[1] = "like Safari"),
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
      B &&
        (B[1] +=
          " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+"));
      "Safari" == u && (!x || 45 < parseInt(x)) && (x = k);
    }
    "Opera" == u && (k = /\bzbov|zvav$/.exec(v))
      ? ((u += " "),
        m.unshift("desktop mode"),
        "zvav" == k ? ((u += "Mini"), (x = null)) : (u += "Mobile"),
        (v = v.replace(RegExp(" *" + k + "$"), "")))
      : "Safari" == u &&
        /\bChrome\b/.exec(B && B[1]) &&
        (m.unshift("desktop mode"),
        (u = "Chrome Mobile"),
        (x = null),
        /\bOS X\b/.test(v) ? ((G = "Apple"), (v = "iOS 4.3+")) : (v = null));
    x &&
      0 == x.indexOf((k = /[\d.]+$/.exec(v))) &&
      -1 < a.indexOf("/" + k + "-") &&
      (v = String(v.replace(k, "")).replace(/^ +| +$/g, ""));
    B &&
      !/\b(?:Avant|Nook)\b/.test(u) &&
      (/Browser|Lunascape|Maxthon/.test(u) ||
        ("Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(B[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          u
        ) &&
          B[1])) &&
      (k = B[B.length - 1]) &&
      m.push(k);
    m.length && (m = ["(" + m.join("; ") + ")"]);
    G && C && 0 > C.indexOf(G) && m.push("on " + G);
    C && m.push((/^on /.test(m[m.length - 1]) ? "" : "on ") + C);
    if (v) {
      var P =
        (k = / ([\d.+]+)$/.exec(v)) &&
        "/" == v.charAt(v.length - k[0].length - 1);
      v = {
        architecture: 32,
        family: k && !P ? v.replace(k[0], "") : v,
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
      ? (v &&
          ((v.architecture = 64),
          (v.family = v.family.replace(RegExp(" *" + k), ""))),
        u &&
          (/\bWOW64\b/i.test(a) ||
            (I &&
              /\w(?:86|32)$/.test(K.cpuClass || K.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          m.unshift("32-bit"))
      : v &&
        /^OS X/.test(v.family) &&
        "Chrome" == u &&
        39 <= parseFloat(x) &&
        (v.architecture = 64);
    a || (a = null);
    t = {};
    t.description = a;
    t.layout = B && B[0];
    t.manufacturer = G;
    t.name = u;
    t.prerelease = N;
    t.product = C;
    t.ua = a;
    t.version = u && x;
    t.os = v || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    t.parse = c;
    t.toString = function () {
      return this.description || "";
    };
    t.version && m.unshift(x);
    t.name && m.unshift(u);
    v &&
      u &&
      (v != String(v).split(" ")[0] || (v != u.split(" ")[0] && !C)) &&
      m.push(C ? "(" + v + ")" : "on " + v);
    m.length && (t.description = m.join(" "));
    return t;
  }
  var p = { function: !0, object: !0 },
    r = (p[typeof window] && window) || this,
    y = p[typeof exports] && exports;
  p = p[typeof module] && module && !module.nodeType && module;
  var m = y && p && "object" == typeof global && global;
  !m || (m.global !== m && m.window !== m && m.self !== m) || (r = m);
  var A = Math.pow(2, 53) - 1,
    n = /\bOpera/;
  m = Object.prototype;
  var z = m.hasOwnProperty,
    q = m.toString,
    w = c();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((r.platform = w),
      define(function () {
        return w;
      }))
    : y && p
    ? e(w, function (b, a) {
        y[a] = b;
      })
    : (r.platform = w);
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
      g = 0;
    g < a.length;
    g++
  ) {
    var d = document.createElement("meta");
    d.name = a[g].name;
    d.content = a[g].content;
    var e = window.document.head.querySelector('meta[name="' + d.name + '"]');
    e && e.parentNode.removeChild(e);
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
    g = a.family.toLowerCase();
  a = parseFloat(a.version);
  return "ios" === g && 13 > a ? !0 : !1;
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
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function getSize(a) {
  var g = a.toLowerCase(),
    d = window.document,
    e = d.documentElement;
  if (void 0 === window["inner" + a]) a = e["client" + a];
  else if (window["inner" + a] != e["client" + a]) {
    var h = d.createElement("body");
    h.id = "vpw-test-b";
    h.style.cssText = "overflow:scroll";
    var b = d.createElement("div");
    b.id = "vpw-test-d";
    b.style.cssText = "position:absolute;top:-1000px";
    b.innerHTML =
      "<style>@media(" +
      g +
      ":" +
      e["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      g +
      ":7px!important}}</style>";
    h.appendChild(b);
    e.insertBefore(h, d.head);
    a = 7 == b["offset" + a] ? e["client" + a] : window["inner" + a];
    e.removeChild(h);
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
    var g = getSize("Width");
    _checkOrientation(g, a);
    s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, g / CANVAS_WIDTH);
    var d = Math.round(CANVAS_WIDTH * s_iScaleFactor),
      e = Math.round(CANVAS_HEIGHT * s_iScaleFactor);
    if (e < a) {
      var h = a - e;
      e += h;
      d += (CANVAS_WIDTH / CANVAS_HEIGHT) * h;
    } else
      d < g &&
        ((h = g - d), (d += h), (e += (CANVAS_HEIGHT / CANVAS_WIDTH) * h));
    h = a / 2 - e / 2;
    var b = g / 2 - d / 2,
      f = CANVAS_WIDTH / d;
    if (b * f < -EDGEBOARD_X || h * f < -EDGEBOARD_Y)
      (s_iScaleFactor = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        g / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (d = Math.round(CANVAS_WIDTH * s_iScaleFactor)),
        (e = Math.round(CANVAS_HEIGHT * s_iScaleFactor)),
        (h = (a - e) / 2),
        (b = (g - d) / 2),
        (f = CANVAS_WIDTH / d);
    s_fInverseScaling = f;
    s_iOffsetX = -1 * b * f;
    s_iOffsetY = -1 * h * f;
    0 <= h && (s_iOffsetY = 0);
    0 <= b && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * d),
        (s_oStage.canvas.height = 2 * e),
        (canvas.style.width = d + "px"),
        (canvas.style.height = e + "px"),
        (s_iScaleFactor = 2 * Math.min(d / CANVAS_WIDTH, e / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor))
      : s_bMobile || isChrome()
      ? ($("#canvas").css("width", d + "px"),
        $("#canvas").css("height", e + "px"),
        (s_iScaleFactor = 1))
      : ((s_oStage.canvas.width = d),
        (s_oStage.canvas.height = e),
        (s_iScaleFactor = Math.min(d / CANVAS_WIDTH, e / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > h || (h = (a - e) / 2);
    $("#canvas").css("top", h + "px");
    $("#canvas").css("left", b + "px");
    s_iCanvasResizeWidth = d;
    s_iCanvasResizeHeight = e;
    s_iCanvasOffsetWidth = b;
    fullscreenHandler();
  }
}
function _checkOrientation(a, g) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > g
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
function createBitmap(a, g, d) {
  var e = new createjs.Bitmap(a),
    h = new createjs.Shape();
  g && d
    ? h.graphics.beginFill("#fff").drawRect(-g / 2, -d / 2, g, d)
    : h.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  e.hitArea = h;
  return e;
}
function createSprite(a, g, d, e, h, b) {
  a = null !== g ? new createjs.Sprite(a, g) : new createjs.Sprite(a);
  g = new createjs.Shape();
  g.graphics.beginFill("#000000").drawRect(-d, -e, h, b);
  a.hitArea = g;
  return a;
}
function roundDecimal(a, g) {
  var d = Math.pow(10, g);
  return Math.round(d * a) / d;
}
function randomFloatBetween(a, g, d) {
  "undefined" === typeof d && (d = 2);
  return parseFloat(Math.min(a + Math.random() * (g - a), g).toFixed(d));
}
function shuffle(a) {
  for (var g = a.length, d, e; 0 !== g; )
    (e = Math.floor(Math.random() * g)),
      --g,
      (d = a[g]),
      (a[g] = a[e]),
      (a[e] = d);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var g = Math.floor(a / 60);
  a = parseFloat(a - 60 * g).toFixed(1);
  var d = "";
  d = 10 > g ? d + ("0" + g + ":") : d + (g + ":");
  return 10 > a ? d + ("0" + a) : d + a;
}
function degreesToRadians(a) {
  return (a * Math.PI) / 180;
}
function checkRectCollision(a, g) {
  var d = getBounds(a, 0.9);
  var e = getBounds(g, 0.98);
  return calculateIntersection(d, e);
}
function calculateIntersection(a, g) {
  var d, e, h, b;
  var f = a.x + (d = a.width / 2);
  var l = a.y + (e = a.height / 2);
  var c = g.x + (h = g.width / 2);
  var p = g.y + (b = g.height / 2);
  f = Math.abs(f - c) - (d + h);
  l = Math.abs(l - p) - (e + b);
  return 0 > f && 0 > l
    ? ((f = Math.min(Math.min(a.width, g.width), -f)),
      (l = Math.min(Math.min(a.height, g.height), -l)),
      {
        x: Math.max(a.x, g.x),
        y: Math.max(a.y, g.y),
        width: f,
        height: l,
        rect1: a,
        rect2: g,
      })
    : null;
}
function getBounds(a, g) {
  var d = { x: Infinity, y: Infinity, width: 0, height: 0 };
  if (a instanceof createjs.Container) {
    d.x2 = -Infinity;
    d.y2 = -Infinity;
    var e = a.children,
      h = e.length,
      b;
    for (b = 0; b < h; b++) {
      var f = getBounds(e[b], 1);
      f.x < d.x && (d.x = f.x);
      f.y < d.y && (d.y = f.y);
      f.x + f.width > d.x2 && (d.x2 = f.x + f.width);
      f.y + f.height > d.y2 && (d.y2 = f.y + f.height);
    }
    Infinity == d.x && (d.x = 0);
    Infinity == d.y && (d.y = 0);
    Infinity == d.x2 && (d.x2 = 0);
    Infinity == d.y2 && (d.y2 = 0);
    d.width = d.x2 - d.x;
    d.height = d.y2 - d.y;
    delete d.x2;
    delete d.y2;
  } else {
    if (a instanceof createjs.Bitmap) {
      h = a.sourceRect || a.image;
      b = h.width * g;
      var l = h.height * g;
    } else if (a instanceof createjs.Sprite)
      if (
        a.spriteSheet._frames &&
        a.spriteSheet._frames[a.currentFrame] &&
        a.spriteSheet._frames[a.currentFrame].image
      ) {
        h = a.spriteSheet.getFrame(a.currentFrame);
        b = h.rect.width;
        l = h.rect.height;
        e = h.regX;
        var c = h.regY;
      } else (d.x = a.x || 0), (d.y = a.y || 0);
    else (d.x = a.x || 0), (d.y = a.y || 0);
    e = e || 0;
    b = b || 0;
    c = c || 0;
    l = l || 0;
    d.regX = e;
    d.regY = c;
    h = a.localToGlobal(0 - e, 0 - c);
    f = a.localToGlobal(b - e, l - c);
    b = a.localToGlobal(b - e, 0 - c);
    e = a.localToGlobal(0 - e, l - c);
    d.x = Math.min(Math.min(Math.min(h.x, f.x), b.x), e.x);
    d.y = Math.min(Math.min(Math.min(h.y, f.y), b.y), e.y);
    d.width = Math.max(Math.max(Math.max(h.x, f.x), b.x), e.x) - d.x;
    d.height = Math.max(Math.max(Math.max(h.y, f.y), b.y), e.y) - d.y;
  }
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
      3 == a.nodeType && (a = a.parentNode);
      var g = document.createEvent("MouseEvents");
      g.initEvent("click", !0, !0);
      a.dispatchEvent(g);
    }
  },
};
(function () {
  function a(a) {
    var d = {
      focus: "visible",
      focusin: "visible",
      pageshow: "visible",
      blur: "hidden",
      focusout: "hidden",
      pagehide: "hidden",
    };
    a = a || window.event;
    a.type in d
      ? (document.body.className = d[a.type])
      : ((document.body.className = this[g] ? "hidden" : "visible"),
        "hidden" === document.body.className
          ? s_oMain.stopUpdate()
          : s_oMain.startUpdate());
  }
  var g = "hidden";
  g in document
    ? document.addEventListener("visibilitychange", a)
    : (g = "mozHidden") in document
    ? document.addEventListener("mozvisibilitychange", a)
    : (g = "webkitHidden") in document
    ? document.addEventListener("webkitvisibilitychange", a)
    : (g = "msHidden") in document
    ? document.addEventListener("msvisibilitychange", a)
    : "onfocusin" in document
    ? (document.onfocusin = document.onfocusout = a)
    : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a);
})();
function playSound(a, g, d) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(g),
      s_aSounds[a].loop(d),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, g) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(g);
}
function setMute(a, g) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(g);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var g = window.location.search.substring(1).split("&"), d = 0;
    d < g.length;
    d++
  ) {
    var e = g[d].split("=");
    if (e[0] == a) return e[1];
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
    g,
    d,
    e,
    h,
    b,
    f;
  this.init = function (a, c, p) {
    g = {};
    e = d = 0;
    h = a;
    b = c;
    f = p;
  };
  this.addSprite = function (b, c) {
    if (!a.hasOwnProperty(b)) {
      var h = new Image();
      a[b] = g[b] = { szPath: c, oSprite: h, bLoaded: !1 };
      d++;
    }
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    d = 0;
    b.call(f);
  };
  this._onSpriteLoaded = function () {
    h.call(f);
    ++e === d && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var b in g)
      (g[b].oSprite.oSpriteLibrary = this),
        (g[b].oSprite.szKey = b),
        (g[b].oSprite.onload = function () {
          this.oSpriteLibrary.setLoaded(this.szKey);
          this.oSpriteLibrary._onSpriteLoaded(this.szKey);
        }),
        (g[b].oSprite.onerror = function (b) {
          var a = b.currentTarget;
          setTimeout(function () {
            g[a.szKey].oSprite.src = g[a.szKey].szPath;
          }, 500);
        }),
        (g[b].oSprite.src = g[b].szPath);
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
  FONT_GAME_3 = "ariallight",
  prev_bet = 0;
function CGameSettings() {
  var a, g, d, e;
  this._init = function () {
    this._initAttachFiches();
    this._initBetMultiplier();
    this._setPuckPos();
    a = [1, 5, 10, 25, 50, 100];
    NUM_FICHES = a.length;
  };
  this._initAttachFiches = function () {
    e = [];
    e.pass_line = { x: 360, y: 555 };
    e.dont_pass1 = { x: 730, y: 503 };
    e.dont_pass2 = { x: 254, y: 320 };
    e.dont_come = { x: 322, y: 238 };
    e.come = { x: 740, y: 330 };
    e.field = { x: 570, y: 420 };
    e.big_6 = { x: 260, y: 440 };
    e.big_8 = { x: 316, y: 490 };
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
      (e["lay_bet" + a[b].value] = { x: a[b].x + 20, y: a[b].y }),
        (e["lose_bet" + a[b].value] = { x: a[b].x - 20, y: a[b].y + 20 }),
        (e["number" + a[b].value] = { x: a[b].x, y: a[b].y + 69 }),
        (e["win_bet" + a[b].value] = { x: a[b].x, y: a[b].y + 116 });
    e.any11_7 = { x: 1032, y: 582 };
    e.any_craps_7 = { x: 1032, y: 631 };
    e.seven_bet = { x: 1032, y: 356 };
    e.hardway6 = { x: 955, y: 400 };
    e.hardway10 = { x: 1112, y: 400 };
    e.hardway8 = { x: 955, y: 460 };
    e.hardway4 = { x: 1112, y: 460 };
    e.horn3 = { x: 930, y: 520 };
    e.horn2 = { x: 1032, y: 520 };
    e.horn12 = { x: 1134, y: 520 };
    e.oDealerWin = { x: CANVAS_WIDTH / 2, y: -232 };
    e.oReceiveWin = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT + 100 };
  };
  this._initBetMultiplier = function () {
    g = [];
    g.pass_line = 1;
    g.dont_pass1 = 1;
    g.dont_pass2 = 1;
    g.dont_come = 1;
    g.come = 1;
    g.field = 1;
    g.big_6 = 1;
    g.big_8 = 1;
    for (
      var a = [4, 5, 6, 8, 9, 10],
        b = [0.5, 0.66, 0.83, 0.83, 0.66, 0.5],
        d = [0.45, 0.62, 0.8, 0.8, 0.62, 0.45],
        e = [2, 1.5, 1.2, 1.2, 1.5, 2],
        c = [1.8, 1.4, 1.17, 1.17, 1.4, 1.8],
        p = 0;
      p < a.length;
      p++
    )
      (g["lay_bet" + a[p]] = b[p]),
        (g["lose_bet" + a[p]] = d[p]),
        (g["number" + a[p]] = e[p]),
        (g["win_bet" + a[p]] = c[p]);
    g.any11_7 = 15;
    g.any_craps_7 = 7;
    g.seven_bet = 4;
    g.hardway6 = 9;
    g.hardway10 = 7;
    g.hardway8 = 9;
    g.hardway4 = 7;
    g.horn3 = 15;
    g.horn2 = 30;
    g.horn12 = 30;
  };
  this.generateFichesPileByIndex = function (d) {
    var b = [],
      f = a.length - 1,
      g = a[f];
    do {
      var c = d % g;
      c = roundDecimal(c, 1);
      d = roundDecimal(d / g, 1);
      d = Math.floor(d);
      for (var h = 0; h < d; h++) b.push(this.getFicheIndexByValue(g));
      f--;
      g = a[f];
      d = c;
    } while (0 < c && -1 < f);
    return b;
  };
  this._setPuckPos = function () {
    d = [];
    d[4] = 410;
    d[5] = 495;
    d[6] = 580;
    d[8] = 666;
    d[9] = 752;
    d[10] = 836;
  };
  this.getBetWinLoss = function (a, b, d) {
    var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    switch (d) {
      case "pass_line":
        a === STATE_GAME_COME_OUT
          ? ((f[6] = 1), (f[10] = 1), (c[1] = 1), (c[2] = 1), (c[11] = 1))
          : ((f[b - 1] = 1), (c[6] = 1));
        break;
      case "come":
        f[6] = 1;
        f[10] = 1;
        c[1] = 1;
        c[2] = 1;
        c[11] = 1;
        break;
      case "dont_pass1":
      case "dont_pass2":
        a === STATE_GAME_COME_OUT
          ? ((f[1] = 1), (f[2] = 1), (f[11] = 1), (c[6] = 1), (c[10] = 1))
          : ((f[6] = 1), (c[b - 1] = 1));
        break;
      case "dont_come":
        f[1] = 1;
        f[2] = 1;
        f[11] = 1;
        c[6] = 1;
        c[10] = 1;
        break;
      case "field":
        f[1] = 1;
        f[2] = 1;
        f[3] = 1;
        f[8] = 1;
        f[9] = 1;
        f[10] = 1;
        f[11] = 1;
        c[0] = 1;
        c[4] = 1;
        c[5] = 1;
        c[6] = 1;
        c[7] = 1;
        break;
      case "big_6":
        f[5] = 1;
        c[6] = 1;
        break;
      case "big_8":
        f[7] = 1;
        c[6] = 1;
        break;
      case "lay_bet4":
      case "lose_bet4":
        f[6] = 1;
        c[3] = 1;
        break;
      case "lay_bet5":
      case "lose_bet5":
        f[6] = 1;
        c[4] = 1;
        break;
      case "lay_bet6":
      case "lose_bet6":
        f[6] = 1;
        c[5] = 1;
        break;
      case "lay_bet8":
      case "lose_bet8":
        f[6] = 1;
        c[7] = 1;
        break;
      case "lay_bet9":
      case "lose_bet9":
        f[6] = 1;
        c[8] = 1;
        break;
      case "lay_bet10":
      case "lose_bet10":
        f[6] = 1;
        c[9] = 1;
        break;
      case "number4":
      case "win_bet4":
        f[3] = 1;
        c[6] = 1;
        break;
      case "number5":
      case "win_bet5":
        f[4] = 1;
        c[6] = 1;
        break;
      case "number6":
      case "win_bet6":
        f[5] = 1;
        c[6] = 1;
        break;
      case "number8":
      case "win_bet8":
        f[7] = 1;
        c[6] = 1;
        break;
      case "number9":
      case "win_bet9":
        f[8] = 1;
        c[6] = 1;
        break;
      case "number10":
      case "win_bet10":
        f[9] = 1;
        c[6] = 1;
        break;
      case "any11":
        f[10] = 1;
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
        f[1] = 1;
        f[2] = 1;
        f[11] = 1;
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
        f[6] = 1;
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
        f[5] = 1;
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
        f[9] = 1;
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
        f[7] = 1;
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
        f[3] = 1;
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
        f[2] = 1;
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
        f[1] = 1;
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
        (f[11] = 1),
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
    return { win: f, lose: c };
  };
  this.checkBetWin = function (a, b, f, d, c, g) {
    var e = -1;
    switch (c) {
      case "pass_line":
        if (b === STATE_GAME_COME_OUT)
          if (2 === a || 3 === a || 12 === a) e = 0;
          else {
            if (7 === a || 11 === a)
              e = f * s_oGameSettings.getBetMultiplier(c);
          }
        else
          7 === a
            ? (e = 0)
            : a === d && (e = f * s_oGameSettings.getBetMultiplier(c));
        break;
      case "come":
        7 === a || 11 === a
          ? (e = f * s_oGameSettings.getBetMultiplier(c))
          : 2 === a || 3 === a || 12 === a
          ? (e = 0)
          : s_oGame.assignBetFromCome(a, c);
        break;
      case "dont_pass1":
      case "dont_pass2":
        b === STATE_GAME_COME_OUT
          ? 2 === a || 3 === a
            ? (e = f * s_oGameSettings.getBetMultiplier(c))
            : 7 === a || 11 === a
            ? (e = 0)
            : 12 === a && (e = f)
          : 7 === a
          ? (e = f * s_oGameSettings.getBetMultiplier(c))
          : a === d && (e = 0);
        break;
      case "dont_come":
        2 === a || 3 === a || 12 === a
          ? (e = f * s_oGameSettings.getBetMultiplier(c))
          : 7 === a || 11 === a
          ? (e = 0)
          : s_oGame.assignBetFromDontCome(a, c);
        break;
      case "field":
        if (5 === a || 6 === a || 7 === a || 8 === a) e = 0;
        else if (
          ((e = f * s_oGameSettings.getBetMultiplier(c)), 2 === a || 12 === a)
        )
          e *= 2;
        break;
      case "big_6":
        6 === a
          ? (e = f * s_oGameSettings.getBetMultiplier(c))
          : 7 === a && (e = 0);
        break;
      case "big_8":
        8 === a
          ? (e = f * s_oGameSettings.getBetMultiplier(c))
          : 7 === a && (e = 0);
        break;
      case "lay_bet4":
      case "lose_bet4":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet4" === c && (e = roundDecimal(0.05 * e, 2)))
          : 4 === a && (e = 0);
        break;
      case "lay_bet5":
      case "lose_bet5":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet5" === c && (e = roundDecimal(0.05 * e, 2)))
          : 5 === a && (e = 0);
        break;
      case "lay_bet6":
      case "lose_bet6":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet6" === c && (e = roundDecimal(0.05 * e, 2)))
          : 6 === a && (e = 0);
        break;
      case "lay_bet8":
      case "lose_bet8":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet8" === c && (e = roundDecimal(0.05 * e, 2)))
          : 8 === a && (e = 0);
        break;
      case "lay_bet9":
      case "lose_bet9":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet9" === c && (e = roundDecimal(0.05 * e, 2)))
          : 9 === a && (e = 0);
        break;
      case "lay_bet10":
      case "lose_bet10":
        7 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "lay_bet10" === c && (e = roundDecimal(0.05 * e, 2)))
          : 10 === a && (e = 0);
        break;
      case "number4":
      case "win_bet4":
        // b === STATE_GAME_COME_POINT &&
        4 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number4" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "number5":
      case "win_bet5":
        // b === STATE_GAME_COME_POINT &&
        5 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number5" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "number6":
      case "win_bet6":
        // b === STATE_GAME_COME_POINT &&
        6 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number6" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "number8":
      case "win_bet8":
        // b === STATE_GAME_COME_POINT &&
        8 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number8" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "number9":
      case "win_bet9":
        // b === STATE_GAME_COME_POINT &&
        9 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number9" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "number10":
      case "win_bet10":
        // b === STATE_GAME_COME_POINT &&
        10 === a
          ? ((e = f * s_oGameSettings.getBetMultiplier(c)),
            "number10" === c && (e = roundDecimal(0.05 * f, 2)))
          : 7 === a && (e = 0);
        break;
      case "any11_7":
        e = 11 === a ? f * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "any_craps_7":
        e =
          2 === a || 3 === a || 12 === a
            ? f * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "seven_bet":
        e = 7 === a ? f * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "hardway6":
        e =
          3 === g[0] && 3 === g[1]
            ? f * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway10":
        e =
          5 === g[0] && 5 === g[1]
            ? f * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway8":
        e =
          4 === g[0] && 4 === g[1]
            ? f * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "hardway4":
        e =
          2 === g[0] && 2 === g[1]
            ? f * s_oGameSettings.getBetMultiplier(c)
            : 0;
        break;
      case "horn3":
        e = 3 === a ? f * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "horn2":
        e = 2 === a ? f * s_oGameSettings.getBetMultiplier(c) : 0;
        break;
      case "horn12":
        e = 12 === a ? f * s_oGameSettings.getBetMultiplier(c) : 0;
    }
    return e;
  };
  this.getFicheValues = function (d) {
    return a[d];
  };
  this.getFicheIndexByValue = function (d) {
    for (var b = 0, f = 0; f < a.length; f++)
      if (d === a[f]) {
        b = f;
        break;
      }
    return b;
  };
  this.getBetMultiplier = function (a) {
    return g[a];
  };
  this.getAttachOffset = function (a) {
    return e[a];
  };
  this.getHelpMsgByBet = function (a) {
    return (void 0)[a];
  };
  this.getPuckXByNumber = function (a) {
    return d[a];
  };
  this._init();
}
function CFichesController(a) {
  var g, d, e, h;
  this._init = function (a) {
    h = a;
    this.reset();
  };
  this.reset = function () {
    this._removeAllFichesOnTable();
    g = [];
    d = [];
    e = [];
  };
  this.setFicheOnTable = function (a, f, d) {
    -1 !== f.indexOf("any_craps_")
      ? (f = "any_craps_7")
      : -1 !== f.indexOf("any11_") && (f = "any11_7");
    this.addFicheOnTable(a, f, d);
  };
  this.addFicheOnTable = function (a, f, e) {
    void 0 === g[f] && (g[f] = 0);
    a = s_oGameSettings.getFicheValues(a);
    g[f] += a;
    g[f] = roundDecimal(g[f], 1);
    a = s_oGameSettings.generateFichesPileByIndex(g[f]);
    a.sort(function (a, b) {
      return a - b;
    });
    this._removeFichesPile(d[f]);
    d[f] = [];
    var b = s_oGameSettings.getAttachOffset(f),
      h = b.x;
    b = b.y;
    for (var l = 0; l < a.length; l++)
      e.push(this._attachFichesPile(a[l], f, h, b)), (b -= 5);
  };
  this._attachFichesPile = function (a, f, g, c) {
    a = new CFiche(g, c, a, h);
    d[f].push(a);
    e.push(a);
    return a;
  };
  this._removeAllFichesOnTable = function () {
    if (e)
      for (var a = 0; a < e.length; a++)
        h.contains(e[a].getSprite()) && h.removeChild(e[a].getSprite());
  };
  this._removeFichesPile = function (a) {
    for (var b in a) h.removeChild(a[b].getSprite());
  };
  this.removeBet = function (a) {
    d[a] = [];
    g[a] = 0;
  };
  this.swapBet = function (a, f) {
    d[f] = d[a];
    g[f] = g[a];
    this.removeBet(a);
  };
  this.clearAllBets = function () {
    this._removeAllFichesOnTable();
    g = [];
    d = [];
    e = [];
  };
  this.clearAllBetsInComePoint = function () {
    if (d) {
      var a = 0,
        f;
      for (f in d)
        if ("pass_line" !== f && "dont_pass1" !== f && "dont_pass2" !== f) {
          a += g[f];
          for (var l = 0; l < d[f].length; l++)
            h.removeChild(d[f][l].getSprite());
          delete g[f];
          delete d[f];
          delete e[f];
        }
    }
    return a;
  };
  this.getFicheMc = function (a) {
    return d[a];
  };
  this.getBetAmountInPos = function (a) {
    return g[a];
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
  var a, g, d, e, h, b, f, l, c;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.loadSprites();
    c = new createjs.Container();
    s_oStage.addChild(c);
  };
  this.unload = function () {
    c.removeAllChildren();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var p = new createjs.Shape();
    p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.addChild(p);
    p = s_oSpriteLibrary.getSprite("200x200");
    f = createBitmap(p);
    f.regX = 0.5 * p.width;
    f.regY = 0.5 * p.height;
    f.x = CANVAS_WIDTH / 2;
    f.y = CANVAS_HEIGHT / 2 - 80;
    c.addChild(f);
    l = new createjs.Shape();
    l.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
    c.addChild(l);
    f.mask = l;
    p = s_oSpriteLibrary.getSprite("progress_bar");
    e = createBitmap(p);
    e.x = CANVAS_WIDTH / 2 - p.width / 2;
    e.y = CANVAS_HEIGHT / 2 + 70;
    c.addChild(e);
    a = p.width;
    g = p.height;
    h = new createjs.Shape();
    h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, 1, g);
    c.addChild(h);
    e.mask = h;
    d = new createjs.Text("", "30px " + FONT1, "#fff");
    d.x = CANVAS_WIDTH / 2;
    d.y = CANVAS_HEIGHT / 2 + 120;
    d.textBaseline = "alphabetic";
    d.textAlign = "center";
    c.addChild(d);
    b = new createjs.Shape();
    b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.addChild(b);
    createjs.Tween.get(b)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(b);
        c.removeChild(b);
      });
  };
  this.refreshLoader = function (b) {
    d.text = b + "%";
    100 === b &&
      (s_oMain._onRemovePreloader(), (d.visible = !1), (e.visible = !1));
    h.graphics.clear();
    b = Math.floor((b * a) / 100);
    h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, b, g);
  };
  this._init();
}
function CMain(a) {
  var g,
    d = 0,
    e = 0,
    h = STATE_LOADING,
    b,
    f;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    createjs.Touch.enable(s_oStage, !0);
    s_bMobile = isMobile();
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.setFPS(FPS);
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    seekAndDestroy()
      ? (b = new CPreloader())
      : (window.location.href = "http://www.codethislab.com/contact-us.html");
  };
  this.soundLoaded = function () {
    d++;
    b.refreshLoader(Math.floor((d / e) * 100));
  };
  this._initSounds = function () {
    Howler.mute(!s_bAudioActive);
    s_aSoundsInfo = [];
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "chip",
      loop: !1,
      volume: 1,
      ingamename: "chip",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "click",
      loop: !1,
      volume: 1,
      ingamename: "click",
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
      filename: "fiche_select",
      loop: !1,
      volume: 1,
      ingamename: "fiche_select",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "dice_rolling",
      loop: !1,
      volume: 1,
      ingamename: "dice_rolling",
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
    e += s_aSoundsInfo.length;
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
    e += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    d++;
    b.refreshLoader(Math.floor((d / e) * 100));
  };
  this._onAllImagesLoaded = function () {};
  this.onImageLoadError = function (a) {};
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    g = !0;
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
    f = new CGame(l);
    h = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    h = STATE_HELP;
  };
  this.stopUpdate = function () {
    g = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    g = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (!1 !== g) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      h === STATE_GAME && f.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var l = a;
  SHOW_CREDITS = a.show_credits;
  ENABLE_FULLSCREEN = a.fullscreen;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
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
  s_oMain = null,
  s_oSpriteLibrary,
  s_aSounds,
  s_aSoundsInfo;
function CTextButton(a, g, d, e, h, b, f, l, c) {
  var p, r, y, m, A, n, z, q, w, D;
  this._init = function (a, b, f, d, e, g, h, l) {
    p = !1;
    r = 1;
    y = [];
    m = [];
    D = createBitmap(f);
    q = new createjs.Container();
    q.x = a;
    q.y = b;
    q.regX = f.width / 2;
    q.regY = f.height / 2;
    s_bMobile || (q.cursor = "pointer");
    q.addChild(D, w);
    c.addChild(q);
    w = new CTLText(
      q,
      10,
      5,
      f.width - 20,
      f.height - 10,
      h,
      l,
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
    q.off("mousedown", A);
    q.off("pressup", n);
    c.removeChild(q);
  };
  this.setVisible = function (a) {
    q.visible = a;
  };
  this.setAlign = function (a) {
    w.setHorizAlign(a);
  };
  this.setTextX = function (a) {
    w.x = a;
  };
  this.setScale = function (a) {
    r = q.scaleX = q.scaleY = a;
  };
  this.enable = function () {
    p = !1;
  };
  this.disable = function () {
    p = !0;
  };
  this._initListener = function () {
    A = q.on("mousedown", this.buttonDown);
    n = q.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    y[a] = b;
    m[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, f) {
    y[a] = b;
    m[a] = c;
    z = f;
  };
  this.buttonRelease = function () {
    p ||
      (playSound("click", 1, !1),
      (q.scaleX = r),
      (q.scaleY = r),
      y[ON_MOUSE_UP] && y[ON_MOUSE_UP].call(m[ON_MOUSE_UP], z));
  };
  this.buttonDown = function () {
    p ||
      ((q.scaleX = 0.9 * r),
      (q.scaleY = 0.9 * r),
      y[ON_MOUSE_DOWN] && y[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    q.x = a;
    q.y = b;
  };
  this.tweenPosition = function (a, b, c, f, d, e, g) {
    createjs.Tween.get(q)
      .wait(f)
      .to({ x: a, y: b }, c, d)
      .call(function () {
        void 0 !== e && e.call(g);
      });
  };
  this.changeText = function (a) {
    w.refreshText(a);
  };
  this.setX = function (a) {
    q.x = a;
  };
  this.setY = function (a) {
    q.y = a;
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
  this.getSprite = function () {
    return q;
  };
  this.getScale = function () {
    return q.scaleX;
  };
  this._init(a, g, d, e, h, b, f, l);
}
function CGfxButton(a, g, d, e) {
  var h, b, f, l, c, p, r, y, m, A, n;
  this._init = function (a, d, e) {
    h = !1;
    l = [];
    c = [];
    n = createBitmap(e);
    b = e.width;
    f = e.height;
    n.x = a;
    n.y = d;
    n.regX = e.width / 2;
    n.regY = e.height / 2;
    s_bMobile || (n.cursor = "pointer");
    z.addChild(n);
    this._initListener();
  };
  this.unload = function () {
    n.off("mousedown", r);
    n.off("pressup", y);
    !1 === s_bMobile && (n.off("rollover", m), n.off("rollout", A));
    z.removeChild(n);
  };
  this.setVisible = function (a) {
    n.visible = a;
  };
  this.enable = function () {
    h = !1;
    n.filters = [];
    n.cache(0, 0, b, f);
  };
  this.disable = function () {
    h = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    n.filters = [new createjs.ColorMatrixFilter(a)];
    n.cache(0, 0, b, f);
  };
  this._initListener = function () {
    r = n.on("mousedown", this.buttonDown);
    y = n.on("pressup", this.buttonRelease);
    !1 === s_bMobile &&
      ((m = n.on("rollover", this.mouseOver)),
      (A = n.on("rollout", this.mouseOut)));
  };
  this.addEventListener = function (a, b, f) {
    l[a] = b;
    c[a] = f;
  };
  this.addEventListenerWithParams = function (a, b, f, d) {
    l[a] = b;
    c[a] = f;
    p = d;
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
  var z = e;
  this._init(a, g, d);
  return this;
}
function CFicheBut(a, g, d) {
  var e,
    h,
    b,
    f,
    l,
    c,
    p = [],
    r,
    y,
    m;
  this._init = function (a, d, g) {
    h = !1;
    y = new createjs.Container();
    s_oStage.addChild(y);
    e = !1;
    l = [];
    c = [];
    r = createBitmap(g);
    r.x = a;
    r.y = d;
    r.regX = g.width / 2;
    r.regY = g.height / 2;
    s_bMobile || (r.cursor = "pointer");
    y.addChild(r);
    b = g.width;
    f = g.height;
    g = s_oSpriteLibrary.getSprite("select_fiche");
    m = createBitmap(g);
    m.x = a - 2;
    m.y = d - 2;
    m.regX = g.width / 2;
    m.regY = g.height / 2;
    y.addChild(m);
    m.visible = e;
    this._initListener();
  };
  this.unload = function () {
    r.off("mousedown", this.buttonDown);
    r.off("pressup", this.buttonRelease);
    s_oStage.removeChild(y);
  };
  this.select = function () {
    e = !0;
    m.visible = e;
  };
  this.deselect = function () {
    e = !1;
    m.visible = e;
  };
  this.enable = function () {
    h = !1;
    r.filters = [];
    r.cache(0, 0, b, f);
  };
  this.disable = function () {
    h = !0;
    var a = new createjs.ColorMatrix().adjustSaturation(-90);
    r.filters = [new createjs.ColorMatrixFilter(a)];
    r.cache(0, 0, b, f);
  };
  this.setVisible = function (a) {
    r.visible = a;
  };
  this._initListener = function () {
    r.on("mousedown", this.buttonDown);
    r.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, f) {
    l[a] = b;
    c[a] = f;
  };
  this.addEventListenerWithParams = function (a, b, f, d) {
    l[a] = b;
    c[a] = f;
    p = d;
  };
  this.buttonRelease = function () {
    h ||
      (playSound("click", 1, !1),
      (r.scaleX = 1),
      (r.scaleY = 1),
      l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(c[ON_MOUSE_UP], p),
      (e = !e),
      (m.visible = e));
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
  this._init(a, g, d);
}
function CBetTableButton(a, g, d, e, h) {
  var b, f, l, c, p;
  this._init = function (a, d, e, g, h) {
    c = g;
    b = [];
    f = [];
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
    f[a] = d;
  };
  this.buttonRelease = function () {
    playSound("click", 1, !1);
    b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(f[ON_MOUSE_UP], { button: c }, !1);
  };
  this.buttonDown = function () {
    b[ON_MOUSE_DOWN] &&
      b[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], { button: c }, !1);
  };
  this.mouseOver = function () {
    b[ON_MOUSE_OVER] && b[ON_MOUSE_OVER].call(f[ON_MOUSE_OVER], { enlight: c });
  };
  this.mouseOut = function () {
    b[ON_MOUSE_OUT] && b[ON_MOUSE_OUT].call(f[ON_MOUSE_OUT], { enlight: c });
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
  this._init(a, g, d, e, h);
}
function CToggle(a, g, d, e, h) {
  var b, f, l, c, p, r, y;
  this._init = function (a, d, e, g, h) {
    y = void 0 !== h ? h : s_oStage;
    f = [];
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
    b = g;
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
    y.addChild(c);
    this._initListener();
  };
  this.unload = function () {
    c.off("mousedown", p);
    c.off("pressup", r);
    y.removeChild(c);
  };
  this._initListener = function () {
    p = c.on("mousedown", this.buttonDown);
    r = c.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
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
    f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(l[ON_MOUSE_UP], b);
  };
  this.buttonDown = function () {
    c.scaleX = 0.9;
    c.scaleY = 0.9;
    f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    c.x = a;
    c.y = b;
  };
  this._init(a, g, d, e, h);
}
function CMenu() {
  var a,
    g,
    d,
    e,
    h,
    b,
    f,
    l,
    c,
    p,
    r,
    y,
    m,
    A = null,
    n = null,
    z;
  this._init = function () {
    c = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(c);
    var q = s_oSpriteLibrary.getSprite("but_play");
    h = CANVAS_WIDTH / 2;
    b = CANVAS_HEIGHT - 110;
    p = new CGfxButton(h, b, q, s_oStage);
    p.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    q = s_oSpriteLibrary.getSprite("but_credits");
    SHOW_CREDITS
      ? ((a = CANVAS_WIDTH - q.height / 2 - 10),
        (g = q.height / 2 + 10),
        (r = new CGfxButton(a, g, q, s_oStage)),
        r.addEventListener(ON_MOUSE_UP, this._onCredits, this),
        (q = s_oSpriteLibrary.getSprite("audio_icon")),
        (f = a - q.width / 2 - 10))
      : ((q = s_oSpriteLibrary.getSprite("audio_icon")),
        (f = CANVAS_WIDTH - q.height / 2 - 10));
    l = q.height / 2 + 10;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (y = new CToggle(f, l, q, s_bAudioActive, s_oStage)),
        y.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    q = window.document;
    var w = q.documentElement;
    A =
      w.requestFullscreen ||
      w.mozRequestFullScreen ||
      w.webkitRequestFullScreen ||
      w.msRequestFullscreen;
    n =
      q.exitFullscreen ||
      q.mozCancelFullScreen ||
      q.webkitExitFullscreen ||
      q.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (A = !1);
    A &&
      screenfull.isEnabled &&
      ((q = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (d = 10 + q.width / 4),
      (e = q.height / 2 + 10),
      (m = new CToggle(d, e, q, s_bFullscreen, s_oStage)),
      m.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    z = new createjs.Shape();
    z.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(z);
    createjs.Tween.get(z)
      .to({ alpha: 0 }, 400)
      .call(function () {
        z.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (c, n) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      y.setPosition(f - c, n + l);
    A && screenfull.isEnabled && m.setPosition(d + c, e + n);
    SHOW_CREDITS && r.setPosition(a - c, n + g);
    p.setPosition(h, b - n);
  };
  this.unload = function () {
    p.unload();
    p = null;
    SHOW_CREDITS && (r.unload(), (r = null));
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y.unload(), (y = null);
    A && screenfull.isEnabled && m.unload();
    s_oStage.removeChild(c);
    c = null;
    s_oStage.removeChild(z);
    s_oMenu = z = null;
  };
  this._onButPlayRelease = function () {
    this.unload();
    s_oMain.gotoGame();
    prev_bet = 0;
    $(s_oMain).trigger("start_session");
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    A && screenfull.isEnabled && m.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? n.call(window.document)
      : A.call(window.document.documentElement);
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
  var g = !1,
    d,
    e,
    h,
    b,
    f,
    l,
    c,
    p,
    r,
    y,
    m,
    A,
    n,
    z,
    q,
    w,
    D,
    F,
    E,
    t;
  this._init = function () {
    s_oTweenController = new CTweenController();
    s_oGameSettings = new CGameSettings();
    D = new CTableController();
    D.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
    D.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
    D.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
    d = !1;
    c = 0;
    b = e = -1;
    m = {};
    n = new CSeat();
    q = new CPuck(325, 108, s_oStage);
    w = new CInterface();
    z = new CDicesAnim(240, 159);
    t = new CAreYouSurePanel(s_oStage);
    E = new CGameOver();
    F = new CMsgBox();
    p = [];
    h = 0;
    this._onSitDown();
    g = !0;
  };
  this.unload = function () {
    w.unload();
    D.unload();
    F.unload();
    E.unload();
    z.unload();
    s_oStage.removeAllChildren();
  };
  this._setState = function (a) {
    e = a;
    switch (a) {
      case STATE_GAME_WAITING_FOR_BET:
        if (n.getCredit() < s_oGameSettings.getFicheValues(0)) {
          e = -1;
          setTimeout(function () {
            w.hideBlock();
            E.show();
          }, 2e3);
          return;
        }
        b = -1;
        f = 0;
        l = Math.floor(3 * Math.random() + 3);
        w.enableClearButton();
        0 === n.getCurBet() && w.enableRoll(!1);
        c++;
        c > NUM_HAND_FOR_ADS &&
          ((c = 0), $(s_oMain).trigger("show_interlevel_ad"));
        w.hideBlock();
    }
    D.setState(a);
  };
  this._prepareForRolling = function () {
    w.disableBetFiches();
    w.disableClearButton();
    f++;
    r = [];
    this._generateWinLoss();
    p.push(r);
    h = 0;
  };
  this._generateWinLoss = function () {
    var a = J < 2 * n.getCurBet() ? 0 : WIN_OCCURRENCE;
    var c;
    const random = new Random();
    randomNumber = random.integer(1, 100);
    for (c in m) {
      -1 !== c.indexOf("any11_")
        ? (c = "any11")
        : -1 !== c.indexOf("any_craps") && (c = "any_craps");
      var d = s_oGameSettings.getBetWinLoss(e, b, c);
      var g = d.lose;
      d = d.win;
    }
    -1 !== c.indexOf("hardway") && (randomNumber *= 10);
    if (randomNumber >= WIN_OCCURRENCE)
      if (f > l) {
        do (a = this._generateRandomDices()), (c = a[0] + a[1]);
        while (0 === g[c - 1]);
      } else {
        do
          (a = this._generateRandomDices()),
            (c = a[0] + a[1]),
            (c = 0 === d[c - 1] ? !0 : !1);
        while (!c);
      }
    else if (f > l)
      if (-1 !== c.indexOf("hardway")) a = this._checkHardwayWin(c);
      else {
        do (a = this._generateRandomDices()), (c = a[0] + a[1]);
        while (0 === d[c - 1]);
      }
    else if (-1 !== c.indexOf("hardway")) a = this._checkHardwayWin(c);
    else {
      do
        (a = this._generateRandomDices()),
          (c = a[0] + a[1]),
          (c = 0 === g[c - 1] ? !1 : !0);
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
    z.startRolling(r);
  };
  this.dicesAnimEnded = function () {
    var a = r[0] + r[1];
    if (e === STATE_GAME_COME_OUT) {
      2 !== a &&
        3 !== a &&
        12 !== a &&
        7 !== a &&
        11 !== a &&
        this._assignNumber(a);
      this._checkWinForBet();
      if (0 < y.length) {
        d = !0;
        for (var c = 0; c < A.length; c++) n.removeBet(A[c]), delete m[A[c]];
        w.setCurBet(n.getCurBet());
      }
      -1 !== b && this._setState(STATE_GAME_COME_POINT);
    } else {
      this._checkWinForBet();
      if (0 < y.length) {
        d = !0;
        for (c = 0; c < A.length; c++) n.removeBet(A[c]), delete m[A[c]];
        w.setCurBet(n.getCurBet());
      }
      b === a
        ? (q.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET))
        : 7 === a &&
          (q.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET));
    }
    w.setMoney(n.getCredit());
    0 < Object.keys(m).length && (w.enableRoll(!0), w.enableClearButton());
    w.hideBlock();
    w.enableBetFiches();
    $(s_oMain).trigger("save_score", [n.getCredit()]);
    prev_bet = n.getCurBet();
  };
  this._assignNumber = function (a) {
    b = a;
    a = s_oGameSettings.getPuckXByNumber(b);
    q.switchOn(a);
    w.hideBlock();
  };
  this._checkWinForBet = function () {
    var a = r[0] + r[1],
      c = 0;
    y = [];
    A = [];
    for (var d in m) {
      var f = d;
      -1 !== d.indexOf("any11_")
        ? (d = "any11_7")
        : -1 !== d.indexOf("any_craps") && (d = "any_craps_7");
      var g = n.getBetAmountInPos(f),
        h = s_oGameSettings.checkBetWin(a, e, g, b, d, r);
      if (-1 !== h) {
        c += h;
        var l = n.getFicheMc(d);
        A.push(f);
        for (var t = 0; t < l.length; t++) {
          y.push(l[t]);
          if (0 < h) {
            var p = s_oGameSettings.getAttachOffset("oReceiveWin");
            playSound("win", 0.2, !1);
          } else
            (p = s_oGameSettings.getAttachOffset("oDealerWin")),
              playSound("lose", 0.2, !1);
          l[t].setEndPoint(p.x, p.y);
        }
        n.decreaseBet(g);
        0 < h &&
          (n.showWin(n.getBetAmountInPos(f) + h),
          (J -= h),
          (f = l[0].getStartingPos()),
          new CScoreText(h + TEXT_CURRENCY, f.x, f.y));
      }
    }
    0 < c &&
      (w.refreshMsgHelp(TEXT_YOU_WIN + ": " + c),
      setTimeout(function () {
        w.clearMsgHelp();
      }, 3e3));
  };
  this.assignBetFromCome = function (a, b) {
    for (var c = n.getFicheMc(b), d = 0; d < c.length; d++) {
      y.push(c[d]);
      var f = s_oGameSettings.getAttachOffset("number" + a);
      c[d].setEndPoint(f.x, f.y);
    }
    setTimeout(() => {
      m["number" + a] = m[b];
      delete m[b];
      n.swapBet(b, "number" + a);
    }, 20);
  };
  this.assignBetFromDontCome = function (a, b) {
    for (var c = n.getFicheMc(b), d = 0; d < c.length; d++) {
      y.push(c[d]);
      var f = s_oGameSettings.getAttachOffset("lay_bet" + a);
      c[d].setEndPoint(f.x, f.y);
    }
    setTimeout(() => {
      m["lay_bet" + a] = m[b];
      delete m[b];
      n.swapBet(b, "lay_bet" + a);
    }, 20);
  };
  this.onRecharge = function (a) {
    n.recharge(a);
    prev_bet = 0;
    w.setMoney(n.getCredit());
    this._setState(STATE_GAME_WAITING_FOR_BET);
    E.hide();
  };
  this.onRoll = function () {
    0 !== n.getCurBet() &&
      (n.getCurBet() < MIN_BET
        ? (F.show(TEXT_ERROR_MIN_BET), w.enableBetFiches(), w.enableRoll(!0))
        : //  w.isBlockVisible() ||
          (w.showBlock(),
          e === STATE_GAME_WAITING_FOR_BET &&
            this._setState(STATE_GAME_COME_OUT),
          prev_bet < n.getCurBet() &&
            $(s_oMain).trigger("bet_placed", n.getCurBet() - prev_bet),
          this._prepareForRolling(),
          this._startRollingAnim()));
  };
  this._onSitDown = function () {
    this._setState(STATE_GAME_WAITING_FOR_BET);
    n.setInfo(TOTAL_MONEY, D.getContainer());
    w.setMoney(TOTAL_MONEY);
    w.setCurBet(0);
  };
  this._onShowBetOnTable = function (a) {
    if (n.getCredit() + n.getCurBet() < s_oGameSettings.getFicheValues(0)) {
        E.show();
      return;
    }
    if (!d) {
      var b = a.button,
        c = w.getCurFicheSelected(),
        f = s_oGameSettings.getFicheValues(c),
        e = n.getCurBet();
      0 > n.getCredit() - f
        ? F.show(TEXT_ERROR_NO_MONEY_MSG)
        : e + f > MAX_BET
        ? F.show(TEXT_ERROR_MAX_BET_REACHED)
        : ((m[a.button] = void 0 === m[a.button] ? f : m[a.button] + f),
          n.addFicheOnTable(f, c, b),
          w.setMoney(n.getCredit()),
          w.setCurBet(n.getCurBet()),
          w.enableRoll(!0),
          w.enableClearButton(),
          w.refreshMsgHelp(TEXT_READY_TO_ROLL, !0),
          playSound("chip", 1, !1));
    }
  };
  this._onShowEnlight = function (a) {
    if ((a = a.enlight)) D.enlight(a), w.refreshMsgHelp(TEXT_HELP_MSG[a], !1);
  };
  this._onHideEnlight = function (a) {
    if ((a = a.enlight)) D.enlightOff(a), w.clearMsgHelp();
  };
  this.onClearAllBets = function () {
    $(s_oMain).trigger("clear_bet", n.getCurBet());
    if (e === STATE_GAME_COME_POINT) {
      n.clearAllBetsInComePoint();
      for (var a in m)
        "pass_line" !== a &&
          "dont_pass1" !== a &&
          "dont_pass2" !== a &&
          delete m[a];
    } else n.clearAllBets(), (m = {}), w.enableRoll(!1);
    w.setMoney(n.getCredit());
    w.setCurBet(n.getCurBet());
    // w.enableRoll(!1);
    w.disableClearButton();
    $(s_oMain).trigger("save_score", n.getCredit());
    prev_bet = n.getCurBet();
  };
  this.onExit = function (a) {
    a ? (this.unload(), s_oMain.gotoMenu()) : t.show();
  };
  this.onConfirmExit = function () {
    this.unload();
    s_oMain.gotoMenu();
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", n.getCredit());
  };
  this._updateDistributeFiches = function () {
    h += s_iTimeElaps;
    if (h > TIME_FICHES_MOV)
      (h = 0), (d = !1), playSound("fiche_collect", 1, !1);
    else
      for (
        var a = s_oTweenController.easeInOutCubic(h, 0, 1, TIME_FICHES_MOV),
          b = 0;
        b < y.length;
        b++
      )
        y[b].updatePos(a);
  };
  this.update = function () {
    !1 !== g &&
      (d && this._updateDistributeFiches(), z.isVisible() && z.update());
  };
  s_oGame = this;
  TOTAL_MONEY = a.money;
  MIN_BET = a.min_bet;
  MAX_BET = a.max_bet;
  WIN_OCCURRENCE = a.win_occurrence;
  TIME_SHOW_DICES_RESULT = a.time_show_dice_result;
  NUM_HAND_FOR_ADS = a.num_hand_before_ads;
  var J = a.casino_cash;
  this._init();
}
var s_oGame, s_oTweenController, s_oGameSettings;
function CInterface() {
  var a,
    g,
    d,
    e,
    h,
    b,
    f,
    l,
    c,
    p,
    r,
    y,
    m,
    A,
    n,
    z,
    q,
    w,
    D = null,
    F = null,
    E;
  this._init = function () {
    var t = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    t.x = 251;
    t.y = 603;
    s_oStage.addChild(t);
    new CTLText(
      s_oStage,
      260,
      616,
      140,
      16,
      16,
      "center",
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
    y = new CTLText(
      s_oStage,
      260,
      636,
      140,
      16,
      16,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
    t = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
    t.x = 410;
    t.y = 603;
    s_oStage.addChild(t);
    new CTLText(
      s_oStage,
      419,
      616,
      140,
      16,
      16,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_CUR_BET,
      !0,
      !0,
      !1,
      !1
    );
    m = new CTLText(
      s_oStage,
      419,
      636,
      140,
      16,
      16,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      " ",
      !0,
      !0,
      !1,
      !1
    );
    n = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
    n.x = 575;
    n.y = 610;
    s_oStage.addChild(n);
    new CTLText(
      s_oStage,
      n.x + 4,
      n.y + 4,
      140,
      40,
      16,
      "center",
      "#fff",
      FONT1,
      1.2,
      0,
      0,
      TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET,
      !0,
      !0,
      !0,
      !1
    );
    t = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
    t.x = 880;
    t.y = 210;
    s_oStage.addChild(t);
    A = new CTLText(
      s_oStage,
      t.x + 114,
      t.y + 13,
      130,
      80,
      20,
      "center",
      "#ffde00",
      FONT2,
      1,
      0,
      0,
      TEXT_WAITING_BET,
      !0,
      !0,
      !0,
      !1
    );
    l = TEXT_WAITING_BET;
    z = new CTextButton(
      1030,
      162,
      s_oSpriteLibrary.getSprite("roll_but"),
      "  " + TEXT_ROLL,
      FONT1,
      "#fff",
      22,
      "right",
      s_oStage
    );
    z.disable();
    z.addEventListener(ON_MOUSE_UP, this._onRoll, this);
    q = new CGfxButton(
      764,
      636,
      s_oSpriteLibrary.getSprite("but_clear_all"),
      s_oStage
    );
    q.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
    this._initFichesBut();
    f = 0;
    c[f].select();
    t = new createjs.Graphics()
      .beginFill("rgba(0,0,0,0.01)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    E = new createjs.Shape(t);
    E.on("click", function () {});
    E.visible = !1;
    s_oStage.addChild(E);
    t = s_oSpriteLibrary.getSprite("but_exit");
    a = CANVAS_WIDTH - t.width / 2 - 10;
    g = t.height / 2 + 10;
    p = new CGfxButton(a, g, t, s_oStage);
    p.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (t = s_oSpriteLibrary.getSprite("audio_icon")),
        (h = a - t.width / 2 - 10),
        (b = t.height / 2 + 10),
        (r = new CToggle(h, b, t, s_bAudioActive, s_oStage)),
        r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    t = window.document;
    var J = t.documentElement;
    D =
      J.requestFullscreen ||
      J.mozRequestFullScreen ||
      J.webkitRequestFullScreen ||
      J.msRequestFullscreen;
    F =
      t.exitFullscreen ||
      t.mozCancelFullScreen ||
      t.webkitExitFullscreen ||
      t.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (D = !1);
    D &&
      screenfull.isEnabled &&
      ((t = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (d = 10 + t.width / 4),
      (e = t.height / 2 + 10),
      (w = new CToggle(d, e, t, s_bFullscreen, s_oStage)),
      w.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    p.unload();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || r.unload();
    D && screenfull.isEnabled && w.unload();
    z.unload();
    q.unload();
    s_oInterface = null;
  };
  this.refreshButtonPos = function (c, f) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      r.setPosition(h - c, b + f);
    D && screenfull.isEnabled && w.setPosition(d + c, e + f);
    p.setPosition(a - c, g + f);
  };
  this.hideBlock = function () {
    E.visible = !1;
  };
  this.showBlock = function () {
    E.visible = !0;
  };
  this.enableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].enable();
  };
  this.enableClearButton = function () {
    q.enable();
  };
  this.disableBetFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].disable();
  };
  this.disableClearButton = function () {
    q.disable();
  };
  this.deselectAllFiches = function () {
    for (var a = 0; a < NUM_FICHES; a++) c[a].deselect();
  };
  this.enableRoll = function (a) {
    a ? z.enable() : z.disable();
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
    y.refreshText(a.toFixed(2) + TEXT_CURRENCY);
  };
  this.refreshMoney = function (a, b) {
    new CRollingTextController(
      y.getText(),
      null,
      a,
      parseFloat(b),
      4e3,
      EASE_LINEAR,
      TEXT_CURRENCY
    );
  };
  this.setCurBet = function (a) {
    m.refreshText(a.toFixed(2) + TEXT_CURRENCY);
  };
  this.refreshMsgHelp = function (a, b) {
    A.refreshText(a);
    b && (l = a);
  };
  this.clearMsgHelp = function () {
    A.refreshText(l);
  };
  this._onBetRelease = function (a) {
    null !== a.numbers && s_oGame._onShowBetOnTable({ button: a.name }, !1);
  };
  this._onFicheSelected = function (a) {
    playSound("fiche_collect", 1, !1);
    this.deselectAllFiches();
    a = a[0];
    for (var b = 0; b < NUM_FICHES; b++) b === a && (f = b);
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
    D && screenfull.isEnabled && w.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? F.call(window.document)
      : D.call(window.document.documentElement);
    sizeHandler();
  };
  this.getCurFicheSelected = function () {
    return f;
  };
  this.isBlockVisible = function () {
    return E.visible;
  };
  s_oInterface = this;
  this._init();
  return this;
}
var s_oInterface = null;
function CMsgBox() {
  var a, g, d;
  this._init = function () {
    d = new createjs.Container();
    d.alpha = 0;
    d.visible = !1;
    s_oStage.addChild(d);
    a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    a.on("click", function () {});
    d.addChild(a);
    g = new CTLText(
      d,
      CANVAS_WIDTH / 2 - 240,
      240,
      480,
      290,
      24,
      "center",
      "#fff",
      FONT1,
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
  this.unload = function () {
    a.off("click", function () {});
  };
  this.show = function (a) {
    g.refreshText(a);
    d.alpha = 0;
    d.visible = !0;
    var e = this;
    createjs.Tween.get(d).to({ alpha: 1 }, 500);
    setTimeout(function () {
      e._onExit();
    }, 2e3);
  };
  this._onExit = function () {
    d.visible && (d.visible = !1);
  };
  this._init();
  return this;
}
function CTweenController() {
  this.tweenValue = function (a, g, d) {
    return a + d * (g - a);
  };
  this.easeLinear = function (a, g, d, e) {
    return (d * a) / e + g;
  };
  this.easeInCubic = function (a, g, d, e) {
    e = (a /= e) * a * a;
    return g + d * e;
  };
  this.easeBackInQuart = function (a, g, d, e) {
    e = (a /= e) * a;
    return g + d * (2 * e * e + 2 * e * a + -3 * e);
  };
  this.easeInBack = function (a, g, d, e) {
    return d * (a /= e) * a * (2.70158 * a - 1.70158) + g;
  };
  this.easeOutCubic = function (a, g, d, e) {
    return d * ((a = a / e - 1) * a * a + 1) + g;
  };
  this.easeInOutCubic = function (a, g, d, e) {
    return 1 > (a /= e / 2)
      ? (d / 2) * a * a * a + g
      : (d / 2) * ((a -= 2) * a * a + 2) + g;
  };
  this.tweenVectors = function (a, g, d, e) {
    e.x = a.x + d * (g.x - a.x);
    e.y = a.y + d * (g.y - a.y);
    return e;
  };
}
function CSeat() {
  var a, g, d, e;
  this._init = function () {
    this.reset();
  };
  this.reset = function () {
    d = [];
    e && e.reset();
    a = 0;
  };
  this.setInfo = function (d, b) {
    g = d;
    a = 0;
    e = new CFichesController(b);
  };
  this.setFicheBetted = function (d, b, f) {
    a += d * f;
    g -= d * f;
    g = roundDecimal(g, 1);
  };
  this.addFicheOnTable = function (a, b, d) {
    var f = [];
    e.setFicheOnTable(b, d, f);
    this.setFicheBetted(a, f, 1);
  };
  this.decreaseBet = function (d) {
    a -= d;
  };
  this.removeBet = function (a) {
    e.removeBet(a);
  };
  this.swapBet = function (a, b) {
    e.swapBet(a, b);
  };
  this.clearAllBets = function () {
    e.clearAllBets();
    g += a;
    g = roundDecimal(g, 1);
    a = 0;
  };
  this.clearAllBetsInComePoint = function () {
    var d = e.clearAllBetsInComePoint();
    a -= d;
    g += d;
    g = roundDecimal(g, 1);
  };
  this.showWin = function (a) {
    g += a;
    g = roundDecimal(g, 1);
  };
  this.recharge = function (a) {
    g = a;
  };
  this.getCurBet = function () {
    return a;
  };
  this.getCredit = function () {
    return g;
  };
  this.getNumberSelected = function () {
    return d;
  };
  this.getFicheMc = function (a) {
    return e.getFicheMc(a);
  };
  this.getBetAmountInPos = function (a) {
    return e.getBetAmountInPos(a);
  };
  this._init();
}
function CTableController() {
  var a, g, d, e, h;
  this._init = function () {
    d = new createjs.Container();
    s_oStage.addChild(d);
    var a = createBitmap(s_oSpriteLibrary.getSprite("board_table"));
    d.addChild(a);
    this._initEnlights();
    this._initButtonBets();
    this.setState(STATE_GAME_WAITING_FOR_BET);
    e = [];
    h = [];
  };
  this._initEnlights = function () {
    g = [];
    var a = new CEnlight(
      175,
      162,
      s_oSpriteLibrary.getSprite("enlight_pass_line"),
      d
    );
    g.pass_line = a;
    a = new CEnlight(
      365,
      476,
      s_oSpriteLibrary.getSprite("enlight_dont_pass1"),
      d
    );
    g.dont_pass1 = a;
    a = new CEnlight(
      227,
      127,
      s_oSpriteLibrary.getSprite("enlight_dont_pass2"),
      d
    );
    g.dont_pass2 = a;
    a = new CEnlight(
      279,
      127,
      s_oSpriteLibrary.getSprite("enlight_dont_come"),
      d
    );
    g.dont_come = a;
    a = new CEnlight(279, 264, s_oSpriteLibrary.getSprite("enlight_come"), d);
    g.come = a;
    for (
      var f = [
          { value: 4, x: 365, y: 127 },
          { value: 5, x: 451, y: 127 },
          { value: 6, x: 537, y: 127 },
          { value: 8, x: 623, y: 127 },
          { value: 9, x: 709, y: 127 },
          { value: 10, x: 795, y: 127 },
        ],
        e = 0;
      6 > e;
      e++
    )
      (a = new CEnlight(
        f[e].x,
        f[e].y,
        s_oSpriteLibrary.getSprite("enlight_lay_bet"),
        d
      )),
        (g["lay_bet" + f[e].value] = a),
        (a = new CEnlight(
          f[e].x,
          f[e].y + 30,
          s_oSpriteLibrary.getSprite("enlight_lose_bet"),
          d
        )),
        (g["lose_bet" + f[e].value] = a),
        (a = new CEnlight(
          f[e].x,
          f[e].y + 41,
          s_oSpriteLibrary.getSprite("enlight_number"),
          d
        )),
        (g["number" + f[e].value] = a),
        (a = new CEnlight(
          f[e].x,
          f[e].y + 125,
          s_oSpriteLibrary.getSprite("enlight_lose_bet"),
          d
        )),
        (g["win_bet" + f[e].value] = a);
    a = new CEnlight(226, 391, s_oSpriteLibrary.getSprite("enlight_big_6"), d);
    g.big_6 = a;
    a = new CEnlight(240, 434, s_oSpriteLibrary.getSprite("enlight_big_8"), d);
    g.big_8 = a;
    a = new CEnlight(281, 391, s_oSpriteLibrary.getSprite("enlight_field"), d);
    g.field = a;
    f = 401;
    var c = 409;
    for (e = 0; 7 > e; e++)
      (a = new CEnlight(
        806,
        f,
        s_oSpriteLibrary.getSprite("enlight_circle"),
        d
      )),
        (g["any11_" + e] = a),
        (a = new CEnlight(
          840,
          c,
          s_oSpriteLibrary.getSprite("enlight_circle"),
          d
        )),
        (g["any_craps_" + e] = a),
        (f += 37),
        (c += 34);
    a = new CEnlight(877, 551, s_oSpriteLibrary.getSprite("enlight_any11"), d);
    g["any11_" + e] = a;
    a = new CEnlight(
      877,
      612,
      s_oSpriteLibrary.getSprite("enlight_any_craps"),
      d
    );
    g["any_craps_" + e] = a;
    a = new CEnlight(
      877,
      371,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      d
    );
    g.hardway6 = a;
    a = new CEnlight(
      1032,
      371,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      d
    );
    g.hardway10 = a;
    a = new CEnlight(
      877,
      431,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      d
    );
    g.hardway8 = a;
    a = new CEnlight(
      1032,
      431,
      s_oSpriteLibrary.getSprite("enlight_proposition1"),
      d
    );
    g.hardway4 = a;
    a = new CEnlight(
      877,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      d
    );
    g.horn3 = a;
    a = new CEnlight(
      980,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      d
    );
    g.horn2 = a;
    a = new CEnlight(
      1083,
      491,
      s_oSpriteLibrary.getSprite("enlight_proposition2"),
      d
    );
    g.horn12 = a;
    a = new CEnlight(877, 338, s_oSpriteLibrary.getSprite("enlight_seven"), d);
    g.seven_bet = a;
  };
  this._initButtonBets = function () {
    a = [];
    var b = new CBetTableButton(
      485,
      371,
      s_oSpriteLibrary.getSprite("hit_area_pass_line"),
      "pass_line",
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
    );
    b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
    !1 === s_bMobile &&
      (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
      b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
    a.big_6 = b;
    for (
      var f = [
          { value: 4, x: 408, y: 142 },
          { value: 5, x: 494, y: 142 },
          { value: 6, x: 580, y: 142 },
          { value: 8, x: 666, y: 142 },
          { value: 9, x: 752, y: 142 },
          { value: 10, x: 838, y: 142 },
        ],
        e = 0;
      6 > e;
      e++
    )
      (b = new CBetTableButton(
        f[e].x,
        f[e].y,
        s_oSpriteLibrary.getSprite("hit_area_lay_bet"),
        "lay_bet" + f[e].value,
        d
      )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["lay_bet" + f[e].value] = b),
        (b = new CBetTableButton(
          f[e].x,
          f[e].y + 20,
          s_oSpriteLibrary.getSprite("hit_area_lose_bet"),
          "lose_bet" + f[e].value,
          d
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["lose_bet" + f[e].value] = b),
        (b = new CBetTableButton(
          f[e].x,
          f[e].y + 69,
          s_oSpriteLibrary.getSprite("hit_area_number"),
          "number" + f[e].value,
          d
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["number" + f[e].value] = b),
        (b = new CBetTableButton(
          f[e].x,
          f[e].y + 116,
          s_oSpriteLibrary.getSprite("hit_area_lose_bet"),
          "win_bet" + f[e].value,
          d
        )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["win_bet" + f[e].value] = b);
    f = [
      { x: 820, y: 299 },
      { x: 820, y: 337 },
      { x: 820, y: 374 },
      { x: 820, y: 410 },
      { x: 820, y: 447 },
      { x: 820, y: 484 },
      { x: 820, y: 521 },
    ];
    e = [
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
        f[c].x,
        f[c].y + 116,
        s_oSpriteLibrary.getSprite("hit_area_circle"),
        "any11_7",
        d
      )),
        b.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this),
        !1 === s_bMobile &&
          (b.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this),
          b.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)),
        (a["any11_" + c] = b),
        (b = new CBetTableButton(
          e[c].x,
          e[c].y + 116,
          s_oSpriteLibrary.getSprite("hit_area_circle"),
          "any_craps_7",
          d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
      d
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
    for (var a = 0; a < d.getNumChildren(); a++) {
      var e = d.getChildAt(a);
      e instanceof CBetTableButton && e.unload();
    }
  };
  this.addEventListener = function (a, d, g) {
    e[a] = d;
    h[a] = g;
  };
  this._onBetPress = function (a) {
    null !== a.numbers &&
      e[ON_SHOW_BET_ON_TABLE] &&
      e[ON_SHOW_BET_ON_TABLE].call(h[ON_SHOW_BET_ON_TABLE], a, !1);
  };
  this._onBetNumberOver = function (a) {
    null !== a.numbers &&
      e[ON_SHOW_ENLIGHT] &&
      e[ON_SHOW_ENLIGHT].call(h[ON_SHOW_ENLIGHT], a);
  };
  this._onBetNumberOut = function (a) {
    null !== a.numbers &&
      e[ON_HIDE_ENLIGHT] &&
      e[ON_HIDE_ENLIGHT].call(h[ON_HIDE_ENLIGHT], a);
  };
  this.enlight = function (a) {
    if (-1 !== a.indexOf("any11_"))
      for (a = 0; 8 > a; a++) g["any11_" + a].show();
    else if (-1 !== a.indexOf("any_craps_"))
      for (a = 0; 8 > a; a++) g["any_craps_" + a].show();
    else g[a].show();
  };
  this.enlightOff = function (a) {
    if (-1 !== a.indexOf("any11_"))
      for (a = 0; 8 > a; a++) g["any11_" + a].hide();
    else if (-1 !== a.indexOf("any_craps_"))
      for (a = 0; 8 > a; a++) g["any_craps_" + a].hide();
    else g[a].hide();
  };
  this.getEnlightX = function (a) {
    return g["oEnlight_" + a].getX();
  };
  this.getEnlightY = function (a) {
    return g["oEnlight_" + a].getY();
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
function CEnlight(a, g, d, e) {
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
  this._init(a, g, d, e);
}
function CFiche(a, g, d, e, h) {
  var b, f, l, c, p;
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
    f = new createjs.Point(c.x, c.y);
    l = new createjs.Point(a, b);
  };
  this.updatePos = function (a) {
    var b = new createjs.Point();
    b = s_oTweenController.tweenVectors(f, l, a, b);
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
    return f;
  };
  this._init(a, g, d, e, h);
}
function CDicesAnim(a, g) {
  var d, e, h, b, f, l, c, p, r, y, m, A, n;
  this._init = function (a, b) {
    h = e = 0;
    m = new createjs.Container();
    m.visible = !1;
    m.x = a;
    m.y = b;
    s_oStage.addChild(m);
    var d = new createjs.Graphics()
      .beginFill("rgba(0,0,0,0.6)")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    n = new createjs.Shape(d);
    n.x = -a;
    n.y = -b;
    m.addChild(n);
    l = n.on("click", function () {});
    A = createBitmap(s_oSpriteLibrary.getSprite("dices_screen_bg"));
    m.addChild(A);
    f = [];
    for (d = 0; d < NUM_DICE_ROLLING_FRAMES; d++) {
      var g = createBitmap(s_oSpriteLibrary.getSprite("launch_dices_" + d));
      g.x = 162;
      g.y = 150;
      g.visible = !1;
      m.addChild(g);
      f.push(g);
    }
    r = f[0];
    r.visible = !0;
    d = {
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
    d = new createjs.SpriteSheet(d);
    c = createSprite(d, "anim_1", 80, 34);
    c.stop();
    c.visible = !1;
    c.x = 332;
    c.y = 206;
    m.addChild(c);
    d = {
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
    d = new createjs.SpriteSheet(d);
    p = createSprite(d, "anim_1", 102, 65);
    p.stop();
    p.visible = !1;
    p.x = 239;
    p.y = 240;
    m.addChild(p);
    p.addEventListener("animationend", z._onDiceBAnimEnded);
    y = new CDicesTopDownView(584, 20, m);
  };
  this.unload = function () {
    n.off("click", l);
  };
  this.hide = function () {
    y.hide();
    m.visible = !1;
    c.visible = !1;
    p.visible = !1;
    for (var a = 0; a < f.length; a++) f[a].visible = !1;
    s_oGame.dicesAnimEnded();
  };
  this.startRolling = function (a) {
    b = a;
    this.playToFrame(0);
    d = m.visible = !0;
    m.visible = !0;
    playSound("dice_rolling", 1, !1);
  };
  this.setShowNumberInfo = function () {
    y.setDiceResult(b[0], b[1]);
  };
  this.playToFrame = function (a) {
    r.visible = !1;
    e = a;
    f[e].visible = !0;
    r = f[e];
  };
  this.nextFrame = function () {
    r.visible = !1;
    e++;
    f[e].visible = !0;
    r = f[e];
  };
  this._setAnimForDiceResult = function () {
    f[e].visible = !1;
    c.visible = !0;
    p.visible = !0;
    c.gotoAndPlay("anim_" + b[0]);
    p.gotoAndPlay("anim_" + b[1]);
  };
  this._onDiceBAnimEnded = function (a) {
    -1 !== a.currentTarget.currentAnimation.indexOf("stop_anim") &&
      (z.setShowNumberInfo(),
      setTimeout(function () {
        z.hide();
      }, TIME_SHOW_DICES_RESULT));
  };
  this.isVisible = function () {
    return m.visible;
  };
  this.update = function () {
    !1 !== d &&
      (h++,
      1 === h &&
        ((h = 0),
        e === NUM_DICE_ROLLING_FRAMES - 1
          ? ((d = !1), this._setAnimForDiceResult())
          : this.nextFrame()));
  };
  var z = this;
  this._init(a, g);
}
function CGameOver() {
  var a, g, d;
  this._init = function () {
    d = new createjs.Container();
    s_oStage.addChild(d);
    var e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    d.addChild(e);
    new CTLText(
      d,
      CANVAS_WIDTH / 2 - 240,
      340,
      480,
      72,
      36,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_NO_MONEY,
      !0,
      !0,
      !0,
      !1
    );
    // new CTLText(
    //   d,
    //   CANVAS_WIDTH / 2 - 240,
    //   400,
    //   480,
    //   40,
    //   20,
    //   "center",
    //   "#fff",
    //   FONT1,
    //   1,
    //   0,
    //   0,
    //   TEXT_RECHARGE_MSG,
    //   !0,
    //   !0,
    //   !0,
    //   !1
    // );
    // a = new CTextButton(
    //   CANVAS_WIDTH / 2 + 170,
    //   510,
    //   s_oSpriteLibrary.getSprite("but_bg"),
    //   TEXT_RECHARGE,
    //   FONT1,
    //   "#fff",
    //   18,
    //   "center",
    //   s_oStage
    // );
    // a.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
    // d.addChild(a.getSprite());
    g = new CTextButton(
      CANVAS_WIDTH / 2,
      510,
      s_oSpriteLibrary.getSprite("but_bg"),
      TEXT_EXIT,
      FONT1,
      "#fff",
      18,
      "center",
      s_oStage
    );
    g.addEventListener(ON_MOUSE_UP, this._onExit, this);
    d.addChild(g.getSprite());
    this.hide();
  };
  this.unload = function () {
    // a.unload();
    g.unload();
  };
  this.show = function () {
    d.visible = !0;
  };
  this.hide = function () {
    d.visible = !1;
  };
  this._onRecharge = function () {
    $(s_oMain).trigger("recharge");
  };
  this._onExit = function () {
    s_oGame.onExit(!0);
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
    g = new createjs.Shape();
    n.addChild(g);
    var p = s_oSpriteLibrary.getSprite("but_exit");
    b = new CGfxButton(
      CANVAS_WIDTH - p.height / 2 - 40,
      p.height / 2 + 80,
      p,
      n
    );
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
function CRollingTextController(a, g, d, e, h, b, f) {
  var l,
    c,
    p,
    r,
    y,
    m,
    A,
    n,
    z,
    q,
    w,
    D = [],
    F,
    E;
  this._init = function (a, b, c, d, e, f, g) {
    q = [];
    w = [];
    y = e;
    this.setUpdateInfo(c, d);
    n = f;
    z = g;
    F = a;
    E = b;
  };
  this.unload = function () {
    clearInterval(A);
  };
  this.setUpdateInfo = function (a, b) {
    p = parseFloat(a);
    r = p + b;
    l = 0;
    c = Math.round(y / FPS);
    m = 0;
    var d = this;
    A = setInterval(function () {
      d.update();
    }, FPS_TIME);
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    w[a] = c;
  };
  this.addRollingListener = function (a, b, c) {
    q[ON_CONTROLLER_ROLL] = a;
    w[ON_CONTROLLER_ROLL] = b;
    D = [];
    for (a = 0; a < c.length; a++) D[a] = { step: c[a], flag: !1 };
  };
  this.increaseValue = function (a) {
    m = a;
  };
  this.getTarget = function () {
    return F;
  };
  this.update = function () {
    l++;
    if (l > c)
      (l = 0),
        (F.text = r.toFixed(2) + z),
        null !== E && (E.text = r.toFixed(2) + z),
        clearInterval(A),
        null !== q[ON_CONTROLLER_END] &&
          void 0 !== q[ON_CONTROLLER_END] &&
          q[ON_CONTROLLER_END].call(w[ON_CONTROLLER_END], this),
        0 < m
          ? this.setUpdateInfo(m)
          : null !== q[ON_CONTROLLER_REMOVE] &&
            void 0 !== q[ON_CONTROLLER_REMOVE] &&
            q[ON_CONTROLLER_REMOVE].call(w[ON_CONTROLLER_REMOVE], this);
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
      for (var b = 0; b < D.length; b++)
        a > D[b].step &&
          !D[b].flag &&
          ((D[b].flag = !0),
          null !== q[ON_CONTROLLER_ROLL] &&
            q[ON_CONTROLLER_ROLL].call(w[ON_CONTROLLER_ROLL], b));
      F.text = a.toFixed(2) + z;
      null !== E && (E.text = a.toFixed(2) + z);
    }
  };
  this._init(a, g, d, e, h, b, f);
}
function CPuck(a, g, d) {
  var e, h;
  this._init = function () {
    e = a;
    var d = s_oSpriteLibrary.getSprite("puck"),
      l = new createjs.SpriteSheet({
        images: [d],
        frames: {
          width: d.width / 2,
          height: d.height,
          regX: d.width / 2 / 2,
          regY: d.height / 2,
        },
        animations: { on: [0], off: [1] },
      });
    h = createSprite(
      l,
      "off",
      d.width / 2 / 2,
      d.height / 2,
      d.width / 2,
      d.height
    );
    h.x = a;
    h.y = g;
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
      .to({ x: e }, 1e3, createjs.Ease.cubicOut)
      .call(function () {
        h.gotoAndStop("off");
      });
  };
  var b = d;
  this._init(a, g);
}
function CDicesTopDownView(a, g, d) {
  var e, h, b, f;
  this._init = function (a, d) {
    f = new createjs.Container();
    f.x = a;
    f.y = d;
    f.visible = !1;
    l.addChild(f);
    var c = createBitmap(s_oSpriteLibrary.getSprite("dices_box"));
    f.addChild(c);
    c = s_oSpriteLibrary.getSprite("dice_topdown1");
    var g = {
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
    g = new createjs.SpriteSheet(g);
    h = createSprite(
      g,
      "dice_1",
      c.width / 6 / 2,
      c.height / 2,
      c.width / 6,
      c.height
    );
    h.x = c.width / 6 / 2 + 10;
    h.y = c.height / 2;
    f.addChild(h);
    c = s_oSpriteLibrary.getSprite("dice_topdown2");
    g = {
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
    g = new createjs.SpriteSheet(g);
    b = createSprite(
      g,
      "dice_1",
      c.width / 6 / 2,
      c.height / 2,
      c.width / 6,
      c.height
    );
    b.x = c.width / 6 / 2 + c.width / 6 + 20;
    b.y = c.height / 2;
    f.addChild(b);
    e = new CTLText(
      f,
      c.width / 6 - 80,
      c.height + 6,
      190,
      20,
      20,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_COME_OUT,
      !0,
      !0,
      !1,
      !1
    );
  };
  this.setDiceResult = function (a, d) {
    h.gotoAndStop("dice_" + a);
    b.gotoAndStop("dice_" + d);
    e.refreshText(TEXT_COME_OUT + " " + (a + d));
    f.alpha = 0;
    f.visible = !0;
    createjs.Tween.get(f).to({ alpha: 1 }, 400);
  };
  this.hide = function () {
    f.visible = !1;
  };
  var l = d;
  this._init(a, g);
}
function CAreYouSurePanel(a) {
  var g, d, e, h, b, f;
  this._init = function () {
    f = new createjs.Container();
    f.visible = !1;
    l.addChild(f);
    var a = s_oSpriteLibrary.getSprite("msg_box");
    b = createBitmap(a);
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2;
    b.regX = 0.5 * a.width;
    b.regY = 0.5 * a.height;
    f.addChild(b);
    g = b.on("click", function () {});
    d = new CTLText(
      f,
      CANVAS_WIDTH / 2 - 240,
      0.5 * CANVAS_HEIGHT - 100,
      480,
      120,
      60,
      "center",
      "#fff",
      FONT1,
      1,
      0,
      0,
      TEXT_ARE_SURE,
      !0,
      !0,
      !0,
      !1
    );
    e = new CGfxButton(
      CANVAS_WIDTH / 2 + 186,
      d.getY() + 200,
      s_oSpriteLibrary.getSprite("but_yes"),
      f
    );
    e.addEventListener(ON_MOUSE_UP, this._onButYes, this);
    h = new CGfxButton(
      CANVAS_WIDTH / 2 - 186,
      d.getY() + 200,
      s_oSpriteLibrary.getSprite("but_not"),
      f
    );
    h.addEventListener(ON_MOUSE_UP, this._onButNo, this);
  };
  this.show = function () {
    f.visible = !0;
  };
  this.unload = function () {
    h.unload();
    e.unload();
    b.off("click", g);
  };
  this._onButYes = function () {
    this.unload();
    playSound("click", 1, !1);
    s_oGame.onConfirmExit();
  };
  this._onButNo = function () {
    playSound("click", 1, !1);
    f.visible = !1;
  };
  var l = a;
  this._init();
}
function CScoreText(a, g, d) {
  var e;
  this._init = function (a, b, d) {
    e = new createjs.Text("+" + a, " 30px " + FONT1, "#ffffff");
    e.textAlign = "center";
    e.x = b;
    e.y = d - 10;
    e.alpha = 0;
    e.shadow = new createjs.Shadow("#000000", 2, 2, 2);
    s_oStage.addChild(e);
    createjs.Tween.get(e)
      .to({ alpha: 1 }, 500, createjs.Ease.quadIn)
      .call(function () {
        createjs.Tween.get(e).wait(1e3).to({ alpha: 0 }, 500);
      });
    this.moveUp();
  };
  this.moveUp = function () {
    var a = e.y - 40,
      b = this;
    createjs.Tween.get(e)
      .to({ y: a }, 2e3, createjs.Ease.sineIn)
      .call(function () {
        b.unload();
      });
  };
  this.unload = function () {
    s_oStage.removeChild(e);
  };
  this._init(a, g, d);
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
  setHorizAlign: function (a) {
    this._szAlign = a;
    this._oText.textAlign = this._szAlign;
  },
  setVerticalAlign: function (a) {
    this._bVerticalAlign = a;
  },
  setX: function (a) {
    this._x = a;
    this._oText.x = a;
  },
  setY: function (a) {
    this._y = a;
    this._oText.y = a;
  },
  setOutline: function (a) {
    null !== this._oText && (this._oText.outline = a);
  },
  setShadow: function (a, g, d, e) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, g, d, e));
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
function CTLText(a, g, d, e, h, b, f, l, c, p, r, y, m, A, n, z, q) {
  this._oContainer = a;
  this._x = g;
  this._y = d;
  this._iWidth = e;
  this._iHeight = h;
  this._bMultiline = z;
  this._iFontSize = this._iStartingFontSize = b;
  this._szAlign = f;
  this._szColor = l;
  this._szFont = c;
  this._iPaddingH = r;
  this._iPaddingV = y;
  this._bVerticalAlign = n;
  this._bFitText = A;
  this._bDebug = q;
  this._oDebugShape = null;
  this._fLineHeightFactor = p;
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
  var g = a.split("."),
    d = g.length;
  2 < d && (a = g[d - 2] + "." + g[d - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      g = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          g = !0;
          break;
        }
    } catch (d) {
      g = !0;
    }
    return { topFrame: a, err: g };
  },
  getBestPageUrl = function (a) {
    var g = a.topFrame,
      d = "";
    if (a.err)
      try {
        try {
          d = window.top.location.href;
        } catch (h) {
          var e = window.location.ancestorOrigins;
          d = e[e.length - 1];
        }
      } catch (h) {
        d = g.document.referrer;
      }
    else d = g.location.href;
    return d;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
      g = [
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
    d < g.length;
    d++
  )
    if (g[d] === a) return !0;
  return !0;
}
