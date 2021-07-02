function buildIOSMeta() {
  for (
    var e = [
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
      t = 0;
    t < e.length;
    t++
  ) {
    var i = document.createElement("meta");
    (i.name = e[t].name), (i.content = e[t].content);
    var n = window.document.head.querySelector('meta[name="' + i.name + '"]');
    n && n.parentNode.removeChild(n), window.document.head.appendChild(i);
  }
}
function hideIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "none"),
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none"),
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
}
function buildIOSFullscreenPanel() {
  jQuery("body").append(
    '<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>'
  );
}
function showIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "block"),
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
}
function __iosResize() {
  if ((window.scrollTo(0, 0), "iPhone" === platform.product))
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
  __iosResize(),
    setTimeout(function () {
      __iosResize();
    }, 500);
}
function iosInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return !0;
  }
}
function isIOSLessThen13() {
  var e = platform.os,
    t = e.family.toLowerCase();
  return (e = parseFloat(e.version)), "ios" === t && 13 > e;
}
!(function () {
  var e =
      "undefined" != typeof window && void 0 !== window.document
        ? window.document
        : {},
    t = "undefined" != typeof module && module.exports,
    i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    n = (function () {
      for (
        var t,
          i = [
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
          n = 0,
          r = i.length,
          a = {};
        n < r;
        n++
      )
        if ((t = i[n]) && t[1] in e) {
          for (n = 0; n < t.length; n++) a[i[0][n]] = t[n];
          return a;
        }
      return !1;
    })(),
    r = { change: n.fullscreenchange, error: n.fullscreenerror },
    a = {
      request: function (t) {
        var r = n.requestFullscreen;
        (t = t || e.documentElement),
          /5\.1[.\d]* Safari/.test(navigator.userAgent)
            ? t[r]()
            : t[r](i && Element.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        e[n.exitFullscreen]();
      },
      toggle: function (e) {
        this.isFullscreen ? this.exit() : this.request(e);
      },
      onchange: function (e) {
        this.on("change", e);
      },
      onerror: function (e) {
        this.on("error", e);
      },
      on: function (t, i) {
        var n = r[t];
        n && e.addEventListener(n, i, !1);
      },
      off: function (t, i) {
        var n = r[t];
        n && e.removeEventListener(n, i, !1);
      },
      raw: n,
    };
  n
    ? (Object.defineProperties(a, {
        isFullscreen: {
          get: function () {
            return !!e[n.fullscreenElement];
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return e[n.fullscreenElement];
          },
        },
        enabled: {
          enumerable: !0,
          get: function () {
            return !!e[n.fullscreenEnabled];
          },
        },
      }),
      t ? (module.exports = a) : (window.screenfull = a))
    : t
    ? (module.exports = !1)
    : (window.screenfull = !1);
})(),
  function () {
    function e(e) {
      return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
    }
    function t(e, t) {
      var i = -1,
        r = e ? e.length : 0;
      if ("number" == typeof r && -1 < r && r <= u)
        for (; ++i < r; ) t(e[i], i, e);
      else n(e, t);
    }
    function i(t) {
      return (
        (t = String(t).replace(/^ +| +$/g, "")),
        /^(?:webOS|i(?:OS|P))/.test(t) ? t : e(t)
      );
    }
    function n(e, t) {
      for (var i in e) d.call(e, i) && t(e[i], i, e);
    }
    function r(t) {
      return null == t ? e(t) : f.call(t).slice(8, -1);
    }
    function a(e) {
      return String(e).replace(/([ -])(?!$)/g, "$1?");
    }
    function s(e, i) {
      var n = null;
      return (
        t(e, function (t, r) {
          n = i(n, t, r, e);
        }),
        n
      );
    }
    var o = { function: !0, object: !0 },
      l = (o[typeof window] && window) || this,
      c = o[typeof exports] && exports;
    o = o[typeof module] && module && !module.nodeType && module;
    var _ = c && o && "object" == typeof global && global;
    !_ || (_.global !== _ && _.window !== _ && _.self !== _) || (l = _);
    var u = Math.pow(2, 53) - 1,
      h = /\bOpera/,
      d = (_ = Object.prototype).hasOwnProperty,
      f = _.toString,
      S = (function e(t) {
        function o(e) {
          return s(e, function (e, n) {
            var r = n.pattern || a(n);
            return (
              !e &&
                (e =
                  RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) ||
                  RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) ||
                  RegExp(
                    "\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                    "i"
                  ).exec(t)) &&
                ((e = String(
                  n.label && !RegExp(r, "i").test(n.label) ? n.label : e
                ).split("/"))[1] &&
                  !/[\d.]+/.test(e[0]) &&
                  (e[0] += " " + e[1]),
                (n = n.label || n),
                (e = i(
                  e[0]
                    .replace(RegExp(r, "i"), n)
                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2")
                ))),
              e
            );
          });
        }
        var c = l,
          _ = t && "object" == typeof t && "String" != r(t);
        _ && ((c = t), (t = null));
        var u = c.navigator || {},
          d = u.userAgent || "";
        t || (t = d);
        var S = _
            ? !!u.likeChrome
            : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
          p = _ ? "Object" : "ScriptBridgingProxyObject",
          g = _ ? "Object" : "Environment",
          E = _ && c.java ? "JavaPackage" : r(c.java),
          T = _ ? "Object" : "RuntimeObject";
        g = (E = /\bJava/.test(E) && c.java) && r(c.environment) == g;
        var b,
          A = E ? "a" : "α",
          m = E ? "b" : "β",
          C = c.document || {},
          O = c.operamini || c.opera,
          I = h.test((I = _ && O ? O["[[Class]]"] : r(O))) ? I : (O = null),
          w = t;
        _ = [];
        var v = null,
          N = t == d;
        d = N && O && "function" == typeof O.version && O.version();
        var M = s(
            [
              { label: "EdgeHTML", pattern: "Edge" },
              "Trident",
              { label: "WebKit", pattern: "AppleWebKit" },
              "iCab",
              "Presto",
              "NetFront",
              "Tasman",
              "KHTML",
              "Gecko",
            ],
            function (e, i) {
              return (
                e ||
                (RegExp("\\b" + (i.pattern || a(i)) + "\\b", "i").exec(t) &&
                  (i.label || i))
              );
            }
          ),
          x = s(
            [
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
            ],
            function (e, i) {
              return (
                e ||
                (RegExp("\\b" + (i.pattern || a(i)) + "\\b", "i").exec(t) &&
                  (i.label || i))
              );
            }
          ),
          R = o([
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
          y = s(
            {
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
            },
            function (e, i, n) {
              return (
                e ||
                ((i[R] ||
                  i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(R)] ||
                  RegExp("\\b" + a(n) + "(?:\\b|\\w*\\d)", "i").exec(t)) &&
                  n)
              );
            }
          ),
          L = s(
            [
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
            ],
            function (e, n) {
              var r = n.pattern || a(n);
              if (
                !e &&
                (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))
              ) {
                var s = e,
                  o = n.label || n,
                  l = {
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
                r &&
                  o &&
                  /^Win/i.test(s) &&
                  !/^Windows Phone /i.test(s) &&
                  (l = l[/[\d.]+$/.exec(s)]) &&
                  (s = "Windows " + l),
                  (s = String(s)),
                  r && o && (s = s.replace(RegExp(r, "i"), o)),
                  (e = s =
                    i(
                      s
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
                    ));
              }
              return e;
            }
          );
        if (
          (M && (M = [M]),
          y && !R && (R = o([y])),
          (b = /\bGoogle TV\b/.exec(R)) && (R = b[0]),
          /\bSimulator\b/i.test(t) && (R = (R ? R + " " : "") + "Simulator"),
          "Opera Mini" == x &&
            /\bOPiOS\b/.test(t) &&
            _.push("running in Turbo/Uncompressed mode"),
          "IE" == x && /\blike iPhone OS\b/.test(t)
            ? ((y = (b = e(t.replace(/like iPhone OS/, ""))).manufacturer),
              (R = b.product))
            : /^iP/.test(R)
            ? (x || (x = "Safari"),
              (L =
                "iOS" +
                ((b = / OS ([\d_]+)/i.exec(t))
                  ? " " + b[1].replace(/_/g, ".")
                  : "")))
            : "Konqueror" != x || /buntu/i.test(L)
            ? (y &&
                "Google" != y &&
                ((/Chrome/.test(x) && !/\bMobile Safari\b/i.test(t)) ||
                  /\bVita\b/.test(R))) ||
              (/\bAndroid\b/.test(L) &&
                /^Chrome/.test(x) &&
                /\bVersion\//i.test(t))
              ? ((x = "Android Browser"),
                (L = /\bAndroid\b/.test(L) ? L : "Android"))
              : "Silk" == x
              ? (/\bMobi/i.test(t) ||
                  ((L = "Android"), _.unshift("desktop mode")),
                /Accelerated *= *true/i.test(t) && _.unshift("accelerated"))
              : "PaleMoon" == x && (b = /\bFirefox\/([\d.]+)\b/.exec(t))
              ? _.push("identifying as Firefox " + b[1])
              : "Firefox" == x && (b = /\b(Mobile|Tablet|TV)\b/i.exec(t))
              ? (L || (L = "Firefox OS"), R || (R = b[1]))
              : !x ||
                (b =
                  !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(x))
              ? (x &&
                  !R &&
                  /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(b + "/") + 8)) &&
                  (x = null),
                (b = R || y || L) &&
                  (R ||
                    y ||
                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L)) &&
                  (x =
                    /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(L) ? L : b) +
                    " Browser"))
              : "Electron" == x &&
                (b = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) &&
                _.push("Chromium " + b)
            : (L = "Kubuntu"),
          d ||
            (d = (function (e) {
              return s(e, function (e, i) {
                return (
                  e ||
                  (RegExp(
                    i +
                      "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
                    "i"
                  ).exec(t) || 0)[1] ||
                  null
                );
              });
            })([
              "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
              "Version",
              a(x),
              "(?:Firefox|Minefield|NetFront)",
            ])),
          (b =
            ("iCab" == M && 3 < parseFloat(d)
              ? "WebKit"
              : /\bOpera\b/.test(x) &&
                (/\bOPR\b/.test(t) ? "Blink" : "Presto")) ||
            (/\b(?:Midori|Nook|Safari)\b/i.test(t) &&
              !/^(?:Trident|EdgeHTML)$/.test(M) &&
              "WebKit") ||
            (!M &&
              /\bMSIE\b/i.test(t) &&
              ("Mac OS" == L ? "Tasman" : "Trident")) ||
            ("WebKit" == M &&
              /\bPlayStation\b(?! Vita\b)/i.test(x) &&
              "NetFront")) && (M = [b]),
          "IE" == x && (b = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1])
            ? ((x += " Mobile"),
              (L = "Windows Phone " + (/\+$/.test(b) ? b : b + ".x")),
              _.unshift("desktop mode"))
            : /\bWPDesktop\b/i.test(t)
            ? ((x = "IE Mobile"),
              (L = "Windows Phone 8.x"),
              _.unshift("desktop mode"),
              d || (d = (/\brv:([\d.]+)/.exec(t) || 0)[1]))
            : "IE" != x &&
              "Trident" == M &&
              (b = /\brv:([\d.]+)/.exec(t)) &&
              (x && _.push("identifying as " + x + (d ? " " + d : "")),
              (x = "IE"),
              (d = b[1])),
          N)
        ) {
          if (
            (function (e, t) {
              var i = null != e ? typeof e[t] : "number";
              return !(
                /^(?:boolean|number|string|undefined)$/.test(i) ||
                ("object" == i && !e[t])
              );
            })(c, "global")
          )
            if (
              (E &&
                ((w = (b = E.lang.System).getProperty("os.arch")),
                (L =
                  L ||
                  b.getProperty("os.name") +
                    " " +
                    b.getProperty("os.version"))),
              g)
            ) {
              try {
                (d = c.require("ringo/engine").version.join(".")),
                  (x = "RingoJS");
              } catch (e) {
                (b = c.system) &&
                  b.global.system == c.system &&
                  ((x = "Narwhal"), L || (L = b[0].os || null));
              }
              x || (x = "Rhino");
            } else
              "object" == typeof c.process &&
                !c.process.browser &&
                (b = c.process) &&
                ("object" == typeof b.versions &&
                  ("string" == typeof b.versions.electron
                    ? (_.push("Node " + b.versions.node),
                      (x = "Electron"),
                      (d = b.versions.electron))
                    : "string" == typeof b.versions.nw &&
                      (_.push("Chromium " + d, "Node " + b.versions.node),
                      (x = "NW.js"),
                      (d = b.versions.nw))),
                x ||
                  ((x = "Node.js"),
                  (w = b.arch),
                  (L = b.platform),
                  (d = (d = /[\d.]+/.exec(b.version)) ? d[0] : null)));
          else
            r((b = c.runtime)) == p
              ? ((x = "Adobe AIR"), (L = b.flash.system.Capabilities.os))
              : r((b = c.phantom)) == T
              ? ((x = "PhantomJS"),
                (d =
                  (b = b.version || null) &&
                  b.major + "." + b.minor + "." + b.patch))
              : "number" == typeof C.documentMode &&
                (b = /\bTrident\/(\d+)/i.exec(t))
              ? ((d = [d, C.documentMode]),
                (b = +b[1] + 4) != d[1] &&
                  (_.push("IE " + d[1] + " mode"),
                  M && (M[1] = ""),
                  (d[1] = b)),
                (d = "IE" == x ? String(d[1].toFixed(1)) : d[0]))
              : "number" == typeof C.documentMode &&
                /^(?:Chrome|Firefox)\b/.test(x) &&
                (_.push("masking as " + x + " " + d),
                (x = "IE"),
                (d = "11.0"),
                (M = ["Trident"]),
                (L = "Windows"));
          L = L && i(L);
        }
        if (
          (d &&
            (b =
              /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(d) ||
              /(?:alpha|beta)(?: ?\d)?/i.exec(
                t + ";" + (N && u.appMinorVersion)
              ) ||
              (/\bMinefield\b/i.test(t) && "a")) &&
            ((v = /b/i.test(b) ? "beta" : "alpha"),
            (d =
              d.replace(RegExp(b + "\\+?$"), "") +
              ("beta" == v ? m : A) +
              (/\d+\+?/.exec(b) || ""))),
          "Fennec" == x ||
            ("Firefox" == x && /\b(?:Android|Firefox OS)\b/.test(L)))
        )
          x = "Firefox Mobile";
        else if ("Maxthon" == x && d) d = d.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(R))
          "Xbox 360" == R && (L = null),
            "Xbox 360" == R &&
              /\bIEMobile\b/.test(t) &&
              _.unshift("mobile mode");
        else if (
          (!/^(?:Chrome|IE|Opera)$/.test(x) &&
            (!x || R || /Browser|Mobi/.test(x))) ||
          ("Windows CE" != L && !/Mobi/i.test(t))
        )
          if ("IE" == x && N)
            try {
              null === c.external && _.unshift("platform preview");
            } catch (e) {
              _.unshift("embedded");
            }
          else
            (/\bBlackBerry\b/.test(R) || /\bBB10\b/.test(t)) &&
            (b =
              (RegExp(R.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) ||
                0)[1] || d)
              ? ((L =
                  ((b = [b, /BB10/.test(t)])[1]
                    ? ((R = null), (y = "BlackBerry"))
                    : "Device Software") +
                  " " +
                  b[0]),
                (d = null))
              : this != n &&
                "Wii" != R &&
                ((N && O) ||
                  (/Opera/.test(x) && /\b(?:MSIE|Firefox)\b/i.test(t)) ||
                  ("Firefox" == x && /\bOS X (?:\d+\.){2,}/.test(L)) ||
                  ("IE" == x &&
                    ((L && !/^Win/.test(L) && 5.5 < d) ||
                      (/\bWindows XP\b/.test(L) && 8 < d) ||
                      (8 == d && !/\bTrident\b/.test(t))))) &&
                !h.test((b = e.call(n, t.replace(h, "") + ";"))) &&
                b.name &&
                ((b = "ing as " + b.name + ((b = b.version) ? " " + b : "")),
                h.test(x)
                  ? (/\bIE\b/.test(b) && "Mac OS" == L && (L = null),
                    (b = "identify" + b))
                  : ((b = "mask" + b),
                    (x = I
                      ? i(I.replace(/([a-z])([A-Z])/g, "$1 $2"))
                      : "Opera"),
                    /\bIE\b/.test(b) && (L = null),
                    N || (d = null)),
                (M = ["Presto"]),
                _.push(b));
        else x += " Mobile";
        if (
          ((b = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) &&
            ((b = [parseFloat(b.replace(/\.(\d)$/, ".0$1")), b]),
            "Safari" == x && "+" == b[1].slice(-1)
              ? ((x = "WebKit Nightly"), (v = "alpha"), (d = b[1].slice(0, -1)))
              : (d != b[1] &&
                  d != (b[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) ||
                (d = null),
            (b[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1]),
            537.36 == b[0] &&
              537.36 == b[2] &&
              28 <= parseFloat(b[1]) &&
              "WebKit" == M &&
              (M = ["Blink"]),
            N && (S || b[1])
              ? (M && (M[1] = "like Chrome"),
                (b =
                  b[1] ||
                  (530 > (b = b[0])
                    ? 1
                    : 532 > b
                    ? 2
                    : 532.05 > b
                    ? 3
                    : 533 > b
                    ? 4
                    : 534.03 > b
                    ? 5
                    : 534.07 > b
                    ? 6
                    : 534.1 > b
                    ? 7
                    : 534.13 > b
                    ? 8
                    : 534.16 > b
                    ? 9
                    : 534.24 > b
                    ? 10
                    : 534.3 > b
                    ? 11
                    : 535.01 > b
                    ? 12
                    : 535.02 > b
                    ? "13+"
                    : 535.07 > b
                    ? 15
                    : 535.11 > b
                    ? 16
                    : 535.19 > b
                    ? 17
                    : 536.05 > b
                    ? 18
                    : 536.1 > b
                    ? 19
                    : 537.01 > b
                    ? 20
                    : 537.11 > b
                    ? "21+"
                    : 537.13 > b
                    ? 23
                    : 537.18 > b
                    ? 24
                    : 537.24 > b
                    ? 25
                    : 537.36 > b
                    ? 26
                    : "Blink" != M
                    ? "27"
                    : "28")))
              : (M && (M[1] = "like Safari"),
                (b =
                  400 > (b = b[0])
                    ? 1
                    : 500 > b
                    ? 2
                    : 526 > b
                    ? 3
                    : 533 > b
                    ? 4
                    : 534 > b
                    ? "4+"
                    : 535 > b
                    ? 5
                    : 537 > b
                    ? 6
                    : 538 > b
                    ? 7
                    : 601 > b
                    ? 8
                    : "8")),
            M &&
              (M[1] +=
                " " +
                (b += "number" == typeof b ? ".x" : /[.+]/.test(b) ? "" : "+")),
            "Safari" == x && (!d || 45 < parseInt(d)) && (d = b)),
          "Opera" == x && (b = /\bzbov|zvav$/.exec(L))
            ? ((x += " "),
              _.unshift("desktop mode"),
              "zvav" == b ? ((x += "Mini"), (d = null)) : (x += "Mobile"),
              (L = L.replace(RegExp(" *" + b + "$"), "")))
            : "Safari" == x &&
              /\bChrome\b/.exec(M && M[1]) &&
              (_.unshift("desktop mode"),
              (x = "Chrome Mobile"),
              (d = null),
              /\bOS X\b/.test(L)
                ? ((y = "Apple"), (L = "iOS 4.3+"))
                : (L = null)),
          d &&
            0 == d.indexOf((b = /[\d.]+$/.exec(L))) &&
            -1 < t.indexOf("/" + b + "-") &&
            (L = String(L.replace(b, "")).replace(/^ +| +$/g, "")),
          M &&
            !/\b(?:Avant|Nook)\b/.test(x) &&
            (/Browser|Lunascape|Maxthon/.test(x) ||
              ("Safari" != x && /^iOS/.test(L) && /\bSafari\b/.test(M[1])) ||
              (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                x
              ) &&
                M[1])) &&
            (b = M[M.length - 1]) &&
            _.push(b),
          _.length && (_ = ["(" + _.join("; ") + ")"]),
          y && R && 0 > R.indexOf(y) && _.push("on " + y),
          R && _.push((/^on /.test(_[_.length - 1]) ? "" : "on ") + R),
          L)
        ) {
          var F =
            (b = / ([\d.+]+)$/.exec(L)) &&
            "/" == L.charAt(L.length - b[0].length - 1);
          L = {
            architecture: 32,
            family: b && !F ? L.replace(b[0], "") : L,
            version: b ? b[1] : null,
            toString: function () {
              var e = this.version;
              return (
                this.family +
                (e && !F ? " " + e : "") +
                (64 == this.architecture ? " 64-bit" : "")
              );
            },
          };
        }
        return (
          (b = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w)) &&
          !/\bi686\b/i.test(w)
            ? (L &&
                ((L.architecture = 64),
                (L.family = L.family.replace(RegExp(" *" + b), ""))),
              x &&
                (/\bWOW64\b/i.test(t) ||
                  (N &&
                    /\w(?:86|32)$/.test(u.cpuClass || u.platform) &&
                    !/\bWin64; x64\b/i.test(t))) &&
                _.unshift("32-bit"))
            : L &&
              /^OS X/.test(L.family) &&
              "Chrome" == x &&
              39 <= parseFloat(d) &&
              (L.architecture = 64),
          t || (t = null),
          ((c = {}).description = t),
          (c.layout = M && M[0]),
          (c.manufacturer = y),
          (c.name = x),
          (c.prerelease = v),
          (c.product = R),
          (c.ua = t),
          (c.version = x && d),
          (c.os = L || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
              return "null";
            },
          }),
          (c.parse = e),
          (c.toString = function () {
            return this.description || "";
          }),
          c.version && _.unshift(d),
          c.name && _.unshift(x),
          L &&
            x &&
            (L != String(L).split(" ")[0] || (L != x.split(" ")[0] && !R)) &&
            _.push(R ? "(" + L + ")" : "on " + L),
          _.length && (c.description = _.join(" ")),
          c
        );
      })();
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? ((l.platform = S),
        define(function () {
          return S;
        }))
      : c && o
      ? n(S, function (e, t) {
          c[t] = e;
        })
      : (l.platform = S);
  }.call(this),
  $(document).ready(function () {
    platform &&
      "iPhone" === platform.product &&
      "safari" === platform.name.toLowerCase() &&
      isIOSLessThen13() &&
      !iosInIframe() &&
      (buildIOSFullscreenPanel(), buildIOSMeta());
  }),
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
function trace(e) {}
function getSize(e) {
  var t = e.toLowerCase(),
    i = window.document,
    n = i.documentElement;
  if (void 0 === window["inner" + e]) e = n["client" + e];
  else if (window["inner" + e] != n["client" + e]) {
    var r = i.createElement("body");
    (r.id = "vpw-test-b"), (r.style.cssText = "overflow:scroll");
    var a = i.createElement("div");
    (a.id = "vpw-test-d"),
      (a.style.cssText = "position:absolute;top:-1000px"),
      (a.innerHTML =
        "<style>@media(" +
        t +
        ":" +
        n["client" + e] +
        "px){body#vpw-test-b div#vpw-test-d{" +
        t +
        ":7px!important}}</style>"),
      r.appendChild(a),
      n.insertBefore(r, i.head),
      (e = 7 == a["offset" + e] ? n["client" + e] : window["inner" + e]),
      n.removeChild(r);
  } else e = window["inner" + e];
  return e;
}
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler(),
    window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function isIpad() {
  var e = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
  return (
    !!(
      !e &&
      navigator.userAgent.match(/Mac/) &&
      navigator.maxTouchPoints &&
      2 < navigator.maxTouchPoints
    ) || e
  );
}
function isMobile() {
  return !!isIpad() || jQuery.browser.mobile;
}
function isIOS() {
  var e =
    "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(
      ";"
    );
  for (
    -1 !== navigator.userAgent.toLowerCase().indexOf("iphone") &&
    (s_bIsIphone = !0);
    e.length;

  )
    if (navigator.platform === e.pop()) return !0;
  return (s_bIsIphone = !1);
}
function getIOSWindowHeight() {
  return (
    (document.documentElement.clientWidth / window.innerWidth) *
    window.innerHeight
  );
}
function getHeightOfIOSToolbars() {
  var e =
    (0 === window.orientation ? screen.height : screen.width) -
    getIOSWindowHeight();
  return 1 < e ? e : 0;
}
function sizeHandler() {
  if ((window.scrollTo(0, 1), $("#canvas"))) {
    var e =
        "safari" === platform.name.toLowerCase()
          ? getIOSWindowHeight()
          : getSize("Height"),
      t = getSize("Width");
    _checkOrientation(t, e);
    var i = Math.min(e / CANVAS_HEIGHT, t / CANVAS_WIDTH),
      n = Math.round(CANVAS_WIDTH * i);
    if ((i = Math.round(CANVAS_HEIGHT * i)) < e) {
      var r = e - i;
      (i += r), (n += (CANVAS_WIDTH / CANVAS_HEIGHT) * r);
    } else
      n < t && ((n += r = t - n), (i += (CANVAS_HEIGHT / CANVAS_WIDTH) * r));
    r = e / 2 - i / 2;
    var a = t / 2 - n / 2,
      s = CANVAS_WIDTH / n;
    (a * s < -EDGEBOARD_X || r * s < -EDGEBOARD_Y) &&
      ((i = Math.min(
        e / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        t / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
      (n = Math.round(CANVAS_WIDTH * i)),
      (r = (e - (i = Math.round(CANVAS_HEIGHT * i))) / 2),
      (a = (t - n) / 2),
      (s = CANVAS_WIDTH / n)),
      (s_iOffsetX = -1 * a * s),
      (s_iOffsetY = -1 * r * s),
      0 <= r && (s_iOffsetY = 0),
      0 <= a && (s_iOffsetX = 0),
      null !== s_oInterface &&
        s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY),
      null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY),
      s_bIsIphone
        ? ((canvas = document.getElementById("canvas")),
          (s_oStage.canvas.width = 2 * n),
          (s_oStage.canvas.height = 2 * i),
          (canvas.style.width = n + "px"),
          (canvas.style.height = i + "px"),
          (t = Math.min(n / CANVAS_WIDTH, i / CANVAS_HEIGHT)),
          (s_iScaleFactor = 2 * t),
          (s_oStage.scaleX = s_oStage.scaleY = 2 * t))
        : s_bMobile && !1 === isIOS()
        ? ($("#canvas").css("width", n + "px"),
          $("#canvas").css("height", i + "px"))
        : ((s_oStage.canvas.width = n),
          (s_oStage.canvas.height = i),
          (s_iScaleFactor = Math.min(n / CANVAS_WIDTH, i / CANVAS_HEIGHT)),
          (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor)),
      0 > r || (r = (e - i) / 2),
      $("#canvas").css("top", r + "px"),
      $("#canvas").css("left", a + "px"),
      fullscreenHandler();
  }
}
function _checkOrientation(e, t) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (e > t
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
function createBitmap(e, t, i) {
  var n = new createjs.Bitmap(e),
    r = new createjs.Shape();
  return (
    t && i
      ? r.graphics.beginFill("#fff").drawRect(0, 0, t, i)
      : r.graphics.beginFill("#ff0").drawRect(0, 0, e.width, e.height),
    (n.hitArea = r),
    n
  );
}
function createSprite(e, t, i, n, r, a) {
  return (
    (e = null !== t ? new createjs.Sprite(e, t) : new createjs.Sprite(e)),
    (t = new createjs.Shape()).graphics
      .beginFill("#000000")
      .drawRect(-i, -n, r, a),
    (e.hitArea = t),
    e
  );
}
function randomFloatBetween(e, t, i) {
  return (
    void 0 === i && (i = 2),
    parseFloat(Math.min(e + Math.random() * (t - e), t).toFixed(i))
  );
}
function shuffle(e) {
  for (var t, i, n = e.length; 0 !== n; )
    (i = Math.floor(Math.random() * n)),
      (t = e[--n]),
      (e[n] = e[i]),
      (e[i] = t);
  return e;
}
function formatTime(e) {
  e /= 1e3;
  var t = Math.floor(e / 60),
    i = "";
  return (
    (i = 10 > t ? i + "0" + t + ":" : i + (t + ":")),
    10 > (e = parseFloat(e - 60 * t).toFixed(1)) ? i + "0" + e : i + e
  );
}
function roundDecimal(e, t) {
  var i = Math.pow(10, t);
  return Math.round(i * e) / i;
}
function tweenVectors(e, t, i, n) {
  return (
    n.set(
      e.getX() + i * (t.getX() - e.getX()),
      e.getY() + i * (t.getY() - e.getY())
    ),
    n
  );
}
function NoClickDelay(e) {
  (this.element = e),
    window.Touch && this.element.addEventListener("touchstart", this, !1);
}
function playSound(e, t, i) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[e].play(),
      s_aSounds[e].volume(t),
      s_aSounds[e].loop(i),
      s_aSounds[e])
    : null;
}
function stopSound(e) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[e].stop();
}
function setVolume(e, t) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[e].volume(t);
}
function setMute(e, t) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[e].mute(t);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(e) {
  for (
    var t = window.location.search.substring(1).split("&"), i = 0;
    i < t.length;
    i++
  ) {
    var n = t[i].split("=");
    if (n[0] == e) return n[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    screenfull.enabled &&
    ((s_bFullscreen = screenfull.isFullscreen),
    null !== s_oInterface && s_oInterface.resetFullscreenBut(),
    null !== s_oMenu && s_oMenu.resetFullscreenBut());
}
function CSpriteLibrary() {
  var e,
    t,
    i,
    n,
    r,
    a,
    s = {};
  (this.init = function (s, o, l) {
    (e = {}), (i = t = 0), (n = s), (r = o), (a = l);
  }),
    (this.addSprite = function (i, n) {
      if (s.hasOwnProperty(i)) return !1;
      var r = new Image();
      return (s[i] = e[i] = { szPath: n, oSprite: r, bLoaded: !1 }), t++, !0;
    }),
    (this.getSprite = function (e) {
      return s.hasOwnProperty(e) ? s[e].oSprite : null;
    }),
    (this._onSpritesLoaded = function () {
      (t = 0), r.call(a);
    }),
    (this._onSpriteLoaded = function () {
      n.call(a), ++i === t && this._onSpritesLoaded();
    }),
    (this.loadSprites = function () {
      for (var t in e)
        (e[t].oSprite.oSpriteLibrary = this),
          (e[t].oSprite.szKey = t),
          (e[t].oSprite.onload = function () {
            this.oSpriteLibrary.setLoaded(this.szKey),
              this.oSpriteLibrary._onSpriteLoaded(this.szKey);
          }),
          (e[t].oSprite.onerror = function (t) {
            var i = t.currentTarget;
            setTimeout(function () {
              e[i.szKey].oSprite.src = e[i.szKey].szPath;
            }, 500);
          }),
          (e[t].oSprite.src = e[t].szPath);
    }),
    (this.setLoaded = function (e) {
      s[e].bLoaded = !0;
    }),
    (this.isLoaded = function (e) {
      return s[e].bLoaded;
    }),
    (this.getNumSprites = function () {
      return t;
    });
}
!(function (e) {
  (jQuery.browser = jQuery.browser || {}).mobile =
    /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
      e.substr(0, 4)
    );
})(navigator.userAgent || navigator.vendor || window.opera),
  $(window).resize(function () {
    sizeHandler();
  }),
  window.addEventListener("orientationchange", onOrientationChange),
  (Array.prototype.sortOn = function () {
    var e = this.slice();
    if (!arguments.length) return e.sort();
    var t = Array.prototype.slice.call(arguments);
    return e.sort(function (e, i) {
      for (var n = t.slice(), r = n.shift(); e[r] == i[r] && n.length; )
        r = n.shift();
      return e[r] == i[r] ? 0 : e[r] > i[r] ? 1 : -1;
    });
  }),
  (NoClickDelay.prototype = {
    handleEvent: function (e) {
      switch (e.type) {
        case "touchstart":
          this.onTouchStart(e);
          break;
        case "touchmove":
          this.onTouchMove(e);
          break;
        case "touchend":
          this.onTouchEnd(e);
      }
    },
    onTouchStart: function (e) {
      e.preventDefault(),
        (this.moved = !1),
        this.element.addEventListener("touchmove", this, !1),
        this.element.addEventListener("touchend", this, !1);
    },
    onTouchMove: function (e) {
      this.moved = !0;
    },
    onTouchEnd: function (e) {
      if (
        (this.element.removeEventListener("touchmove", this, !1),
        this.element.removeEventListener("touchend", this, !1),
        !this.moved)
      ) {
        3 ===
          (e = document.elementFromPoint(
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY
          )).nodeType && (e = e.parentNode);
        var t = document.createEvent("MouseEvents");
        t.initEvent("click", !0, !0), e.dispatchEvent(t);
      }
    },
  }),
  screenfull.enabled &&
    screenfull.on("change", function () {
      (s_bFullscreen = screenfull.isFullscreen),
        null !== s_oInterface && s_oInterface.resetFullscreenBut(),
        null !== s_oMenu && s_oMenu.resetFullscreenBut();
    });
var FICHE_VALUE,
  MIN_BET,
  MAX_BET,
  TOTAL_MONEY,
  FICHE_WIDTH,
  WIN_OCCURRENCE,
  BET_OCCURRENCE,
  TIME_END_HAND,
  AD_SHOW_COUNTER,
  PAYOUT_MULT,
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION,
  SHOW_CREDITS,
  CANVAS_WIDTH = 1700,
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
  TIME_FICHES_MOV = 600,
  TIME_CARD_DEALING = 250,
  TIME_CARD_REMOVE = 1e3,
  TIME_SHOW_FINAL_CARDS = 4e3,
  BET_TIME = 1e4,
  NUM_DECKS = 4,
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
  TEXT_EVALUATOR =
    "ROYAL FLUSH;STRAIGHT FLUSH;FOUR OF A KIND;FULL HOUSE;FLUSH;STRAIGHT;THREE OF A KIND;TWO PAIR;ONE PAIR;HIGH CARD;NO HAND".split(
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
  var e, t, i, n, r, a, s, o, l, c;
  (this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this),
      s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png"),
      s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg"),
      s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png"),
      s_oSpriteLibrary.loadSprites(),
      (c = new createjs.Container()),
      s_oStage.addChild(c);
  }),
    (this.unload = function () {
      c.removeAllChildren(), l.unload();
    }),
    (this._onImagesLoaded = function () {}),
    (this._onAllImagesLoaded = function () {
      this.attachSprites(), s_oMain.preloaderReady();
    }),
    (this.attachSprites = function () {
      var _ = new createjs.Shape();
      _.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
        c.addChild(_),
        (_ = s_oSpriteLibrary.getSprite("200x200")),
        ((s = createBitmap(_)).regX = 0.5 * _.width),
        (s.regY = 0.5 * _.height),
        (s.x = CANVAS_WIDTH / 2),
        (s.y = CANVAS_HEIGHT / 2 - 180),
        c.addChild(s),
        (o = new createjs.Shape()).graphics
          .beginFill("rgba(0,0,0,0.01)")
          .drawRoundRect(s.x - 100, s.y - 100, 200, 200, 10),
        c.addChild(o),
        (s.mask = o),
        (_ = s_oSpriteLibrary.getSprite("progress_bar")),
        ((n = createBitmap(_)).x = CANVAS_WIDTH / 2 - _.width / 2),
        (n.y = CANVAS_HEIGHT / 2 + 50),
        c.addChild(n),
        (e = _.width),
        (t = _.height),
        (r = new createjs.Shape()).graphics
          .beginFill("rgba(0,0,0,0.01)")
          .drawRect(n.x, n.y, 1, t),
        c.addChild(r),
        (n.mask = r),
        ((i = new createjs.Text("", "30px " + FONT_GAME_1, "#fff")).x =
          CANVAS_WIDTH / 2),
        (i.y = CANVAS_HEIGHT / 2 + 100),
        (i.textBaseline = "alphabetic"),
        (i.textAlign = "center"),
        c.addChild(i),
        (_ = s_oSpriteLibrary.getSprite("but_start")),
        (l = new CTextButton(
          CANVAS_WIDTH / 2,
          CANVAS_HEIGHT / 2,
          _,
          TEXT_PRELOADER_CONTINUE,
          "Arial",
          "#000",
          "bold 50",
          c
        )).addEventListener(ON_MOUSE_UP, this._onButStartRelease, this),
        l.setVisible(!1),
        (a = new createjs.Shape()).graphics
          .beginFill("black")
          .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
        c.addChild(a),
        createjs.Tween.get(a)
          .to({ alpha: 0 }, 500)
          .call(function () {
            createjs.Tween.removeTweens(a), c.removeChild(a);
          });
    }),
    (this._onButStartRelease = function () {
      s_oMain._onRemovePreloader();
    }),
    (this.refreshLoader = function (a) {
      (i.text = a + "%"),
        100 === a &&
          (s_oMain._onRemovePreloader(), (i.visible = !1), (n.visible = !1)),
        r.graphics.clear(),
        (a = Math.floor((a * e) / 100)),
        r.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(n.x, n.y, a, t);
    }),
    this._init();
}
function CMain(e) {
  var t,
    i,
    n,
    r = 0,
    a = 0,
    s = STATE_LOADING;
  (this.initContainer = function () {
    var e = document.getElementById("canvas");
    (s_oStage = new createjs.Stage(e)),
      createjs.Touch.enable(s_oStage, !0),
      !1 === (s_bMobile = isMobile()) && s_oStage.enableMouseOver(20),
      (s_iPrevTime = new Date().getTime()),
      createjs.Ticker.setFPS(30),
      createjs.Ticker.addEventListener("tick", this._update),
      navigator.userAgent.match(/Windows Phone/i) &&
        (DISABLE_SOUND_MOBILE = !0),
      (s_oSpriteLibrary = new CSpriteLibrary()),
      seekAndDestroy()
        ? (i = new CPreloader())
        : (window.location.href = "http://www.codethislab.com/contact-us.html"),
      (s_oGameSettings = new CGameSettings()),
      (t = !0);
  }),
    (this.preloaderReady = function () {
      this._loadImages(),
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    }),
    (this.soundLoaded = function () {
      r++, i.refreshLoader(Math.floor((r / a) * 100));
    }),
    (this._initSounds = function () {
      Howler.mute(!s_bAudioActive),
        (s_aSoundsInfo = []).push({
          path: "./sounds/",
          filename: "card",
          loop: !1,
          volume: 1,
          ingamename: "card",
        }),
        s_aSoundsInfo.push({
          path: "./sounds/",
          filename: "chip",
          loop: !1,
          volume: 1,
          ingamename: "chip",
        }),
        s_aSoundsInfo.push({
          path: "./sounds/",
          filename: "fiche_collect",
          loop: !1,
          volume: 1,
          ingamename: "fiche_collect",
        }),
        s_aSoundsInfo.push({
          path: "./sounds/",
          filename: "press_but",
          loop: !1,
          volume: 1,
          ingamename: "press_but",
        }),
        s_aSoundsInfo.push({
          path: "./sounds/",
          filename: "win",
          loop: !1,
          volume: 1,
          ingamename: "win",
        }),
        s_aSoundsInfo.push({
          path: "./sounds/",
          filename: "lose",
          loop: !1,
          volume: 1,
          ingamename: "lose",
        }),
        (a += s_aSoundsInfo.length),
        (s_aSounds = []);
      for (var e = 0; e < s_aSoundsInfo.length; e++)
        this.tryToLoadSound(s_aSoundsInfo[e], !1);
    }),
    (this.tryToLoadSound = function (e, t) {
      setTimeout(
        function () {
          s_aSounds[e.ingamename] = new Howl({
            src: [e.path + e.filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: e.loop,
            volume: e.volume,
            onload: s_oMain.soundLoaded,
            onloaderror: function (e, t) {
              for (var i = 0; i < s_aSoundsInfo.length; i++)
                if (
                  e === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id
                ) {
                  s_oMain.tryToLoadSound(s_aSoundsInfo[i], !0);
                  break;
                }
            },
            onplayerror: function (e) {
              for (var t = 0; t < s_aSoundsInfo.length; t++)
                if (
                  e === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id
                ) {
                  s_aSounds[s_aSoundsInfo[t].ingamename].once(
                    "unlock",
                    function () {
                      s_aSounds[s_aSoundsInfo[t].ingamename].play();
                    }
                  );
                  break;
                }
            },
          });
        },
        t ? 200 : 0
      );
    }),
    (this._loadImages = function () {
      s_oSpriteLibrary.init(
        this._onImagesLoaded,
        this._onAllImagesLoaded,
        this
      ),
        s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png"),
        s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png"),
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png"),
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg"),
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png"),
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg"),
        s_oSpriteLibrary.addSprite(
          "card_spritesheet",
          "./sprites/card_spritesheet.png"
        ),
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png"),
        s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png"),
        s_oSpriteLibrary.addSprite(
          "fiche_highlight",
          "./sprites/fiche_highlight.png"
        ),
        s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png"),
        s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png"),
        s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png"),
        s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png"),
        s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png"),
        s_oSpriteLibrary.addSprite("bet_ante", "./sprites/bet_ante.png"),
        s_oSpriteLibrary.addSprite("bet_raise", "./sprites/bet_raise.png"),
        s_oSpriteLibrary.addSprite("paytable_bg", "./sprites/paytable_bg.png"),
        s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png"),
        s_oSpriteLibrary.addSprite(
          "but_fullscreen",
          "./sprites/but_fullscreen.png"
        ),
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png"),
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
      for (var e = 0; e < NUM_FICHES; e++)
        s_oSpriteLibrary.addSprite(
          "fiche_" + e,
          "./sprites/fiche_" + (e + 1) + ".png"
        );
      (a += s_oSpriteLibrary.getNumSprites()), s_oSpriteLibrary.loadSprites();
    }),
    (this._onImagesLoaded = function () {
      r++, i.refreshLoader(Math.floor((r / a) * 100));
    }),
    (this._onAllImagesLoaded = function () {}),
    (this.onAllPreloaderImagesLoaded = function () {
      this._loadImages();
    }),
    (this._onRemovePreloader = function () {
      i.unload(), this.gotoMenu();
    }),
    (this.gotoMenu = function () {
      new CMenu(), (s = STATE_MENU);
    }),
    (this.gotoGame = function () {
      (n = new CGame(o)), (s = STATE_GAME);
    }),
    (this.gotoHelp = function () {
      new CHelp(), (s = STATE_HELP);
    }),
    (this.stopUpdate = function () {
      (t = !1),
        (createjs.Ticker.paused = !0),
        $("#block_game").css("display", "block"),
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
    }),
    (this.startUpdate = function () {
      (s_iPrevTime = new Date().getTime()),
        (t = !0),
        (createjs.Ticker.paused = !1),
        $("#block_game").css("display", "none"),
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
          s_bAudioActive &&
          Howler.mute(!1);
    }),
    (this._update = function (e) {
      if (t) {
        var i = new Date().getTime();
        (s_iTimeElaps = i - s_iPrevTime),
          s_iCntFps++,
          (s_iPrevTime = i),
          1e3 <= (s_iCntTime += s_iTimeElaps) &&
            ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0)),
          s === STATE_GAME && n.update(),
          s_oStage.update(e);
      }
    }),
    (s_oMain = this);
  var o = e;
  (s_bAudioActive = e.audio_enable_on_startup),
    (ENABLE_CHECK_ORIENTATION = o.check_orientation),
    (ENABLE_FULLSCREEN = o.fullscreen),
    (SHOW_CREDITS = e.show_credits),
    this.initContainer();
}
var s_bMobile,
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary,
  s_oGameSettings,
  s_aSoundsInfo,
  s_bAudioActive = !0,
  s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_bFullscreen = !1;
function CTextButton(e, t, i, n, r, a, s, o) {
  var l, c, _, u, h, d, f, S, p, g, E, T;
  (this._init = function (e, t, i, n, r, a, s) {
    (l = !1),
      (c = 1),
      (_ = []),
      (u = []),
      (g = createBitmap(i)),
      (E = i.width),
      (T = i.width),
      ((S = new createjs.Container()).x = e),
      (S.y = t),
      (S.regX = i.width / 2),
      (S.regY = i.height / 2),
      s_bMobile || (S.cursor = "pointer"),
      S.addChild(g, p),
      o.addChild(S),
      (p = new CTLText(
        S,
        10,
        5,
        i.width - 20,
        i.height - 10,
        s,
        "center",
        a,
        r,
        1,
        0,
        0,
        n,
        !0,
        !0,
        !1,
        !1
      )),
      this._initListener();
  }),
    (this.unload = function () {
      S.off("mousedown", h), S.off("pressup", d), o.removeChild(S);
    }),
    (this.setVisible = function (e) {
      S.visible = e;
    }),
    (this.setAlign = function (e) {
      p.textAlign = e;
    }),
    (this.setTextX = function (e) {
      p.x = e;
    }),
    (this.setScale = function (e) {
      c = S.scaleX = S.scaleY = e;
    }),
    (this.enable = function () {
      (l = !1), (g.filters = []), g.cache(0, 0, E, T);
    }),
    (this.disable = function () {
      l = !0;
      var e = new createjs.ColorMatrix().adjustSaturation(-100);
      (g.filters = [new createjs.ColorMatrixFilter(e)]), g.cache(0, 0, E, T);
    }),
    (this._initListener = function () {
      (h = S.on("mousedown", this.buttonDown)),
        (d = S.on("pressup", this.buttonRelease));
    }),
    (this.addEventListener = function (e, t, i) {
      (_[e] = t), (u[e] = i);
    }),
    (this.addEventListenerWithParams = function (e, t, i, n) {
      (_[e] = t), (u[e] = i), (f = n);
    }),
    (this.buttonRelease = function () {
      l ||
        (playSound("press_but", 1, !1),
        (S.scaleX = c),
        (S.scaleY = c),
        _[ON_MOUSE_UP] && _[ON_MOUSE_UP].call(u[ON_MOUSE_UP], f));
    }),
    (this.buttonDown = function () {
      l ||
        ((S.scaleX = 0.9 * c),
        (S.scaleY = 0.9 * c),
        _[ON_MOUSE_DOWN] && _[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN]));
    }),
    (this.setPosition = function (e, t) {
      (S.x = e), (S.y = t);
    }),
    (this.tweenPosition = function (e, t, i, n, r, a, s) {
      createjs.Tween.get(S)
        .wait(n)
        .to({ x: e, y: t }, i, r)
        .call(function () {
          void 0 !== a && a.call(s);
        });
    }),
    (this.changeText = function (e) {
      p.refreshText(e);
    }),
    (this.setX = function (e) {
      S.x = e;
    }),
    (this.setY = function (e) {
      S.y = e;
    }),
    (this.getButtonImage = function () {
      return S;
    }),
    (this.getX = function () {
      return S.x;
    }),
    (this.getY = function () {
      return S.y;
    }),
    (this.getSprite = function () {
      return S;
    }),
    (this.getScale = function () {
      return S.scaleX;
    }),
    this._init(e, t, i, n, r, a, s);
}
function CGfxButton(e, t, i, n) {
  var r,
    a,
    s,
    o,
    l,
    c,
    _,
    u,
    h = [];
  (this._init = function (e, t, i) {
    (r = !1),
      (o = []),
      (l = []),
      (a = i.width),
      (s = i.height),
      ((u = createBitmap(i)).x = e),
      (u.y = t),
      (u.regX = i.width / 2),
      (u.regY = i.height / 2),
      (u.cursor = "pointer"),
      d.addChild(u),
      this._initListener();
  }),
    (this.unload = function () {
      u.off("mousedown", c), u.off("pressup", _), d.removeChild(u);
    }),
    (this.setVisible = function (e) {
      u.visible = e;
    }),
    (this._initListener = function () {
      (c = u.on("mousedown", this.buttonDown)),
        (_ = u.on("pressup", this.buttonRelease));
    }),
    (this.addEventListener = function (e, t, i) {
      (o[e] = t), (l[e] = i);
    }),
    (this.addEventListenerWithParams = function (e, t, i, n) {
      (o[e] = t), (l[e] = i), (h = n);
    }),
    (this.buttonRelease = function () {
      r ||
        (playSound("press_but", 1, !1),
        (u.scaleX = u.scaleY = 1),
        o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(l[ON_MOUSE_UP], h));
    }),
    (this.buttonDown = function () {
      r ||
        ((u.scaleX = u.scaleY = 0.9),
        o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], h));
    }),
    (this.setPosition = function (e, t) {
      (u.x = e), (u.y = t);
    }),
    (this.setX = function (e) {
      u.x = e;
    }),
    (this.setY = function (e) {
      u.y = e;
    }),
    (this.enable = function () {
      (r = !1), (u.filters = []), u.cache(0, 0, a, s);
    }),
    (this.disable = function () {
      r = !0;
      var e = new createjs.ColorMatrix().adjustSaturation(-100);
      (u.filters = [new createjs.ColorMatrixFilter(e)]), u.cache(0, 0, a, s);
    }),
    (this.getButtonImage = function () {
      return u;
    }),
    (this.getX = function () {
      return u.x;
    }),
    (this.getY = function () {
      return u.y;
    });
  var d = n;
  return this._init(e, t, i), this;
}
function CToggle(e, t, i, n, r) {
  var a,
    s,
    o,
    l,
    c,
    _,
    u = [];
  (this._init = function (e, t, i, n) {
    (s = []), (o = []);
    var l = new createjs.SpriteSheet({
      images: [i],
      frames: {
        width: i.width / 2,
        height: i.height,
        regX: i.width / 2 / 2,
        regY: i.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    ((_ = createSprite(
      l,
      "state_" + (a = n),
      i.width / 2 / 2,
      i.height / 2,
      i.width / 2,
      i.height
    )).x = e),
      (_.y = t),
      (_.cursor = "pointer"),
      _.stop(),
      r.addChild(_),
      this._initListener();
  }),
    (this.unload = function () {
      _.off("mousedown", l), _.off("pressup", c), r.removeChild(_);
    }),
    (this._initListener = function () {
      (l = _.on("mousedown", this.buttonDown)),
        (c = _.on("pressup", this.buttonRelease));
    }),
    (this.addEventListener = function (e, t, i) {
      (s[e] = t), (o[e] = i);
    }),
    (this.addEventListenerWithParams = function (e, t, i, n) {
      (s[e] = t), (o[e] = i), (u = n);
    }),
    (this.setActive = function (e) {
      (a = e), _.gotoAndStop("state_" + a);
    }),
    (this.buttonRelease = function () {
      (_.scaleX = 1),
        (_.scaleY = 1),
        playSound("press_but", 1, !1),
        (a = !a),
        _.gotoAndStop("state_" + a),
        s[ON_MOUSE_UP] && s[ON_MOUSE_UP].call(o[ON_MOUSE_UP], u);
    }),
    (this.buttonDown = function () {
      (_.scaleX = 0.9),
        (_.scaleY = 0.9),
        s[ON_MOUSE_DOWN] && s[ON_MOUSE_DOWN].call(o[ON_MOUSE_DOWN], u);
    }),
    (this.setPosition = function (e, t) {
      (_.x = e), (_.y = t);
    }),
    (this.setVisible = function (e) {
      _.visible = e;
    }),
    (this.getY = function () {
      return _.y;
    }),
    this._init(e, t, i, n);
}
function CMenu() {
  var e,
    t,
    i,
    n,
    r,
    a,
    s,
    o,
    l,
    c,
    _,
    u,
    h = null,
    d = null;
  (this._init = function () {
    (s = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"))),
      s_oStage.addChild(s);
    var f = s_oSpriteLibrary.getSprite("but_menu_bg");
    (o = new CGfxButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - 164,
      f,
      s_oStage
    )).addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this),
      (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
        ((f = s_oSpriteLibrary.getSprite("audio_icon")),
        (r = CANVAS_WIDTH - f.width / 4 - 10),
        (a = f.height / 2 + 10),
        (l = new CToggle(r, a, f, !!s_bAudioActive, s_oStage)).addEventListener(
          ON_MOUSE_UP,
          this._onAudioToggle,
          this
        )),
      (f = s_oSpriteLibrary.getSprite("but_credits")),
      SHOW_CREDITS
        ? ((e = 10 + f.width / 2),
          (t = f.height / 2 + 10),
          (c = new CGfxButton(e, t, f, s_oStage)).addEventListener(
            ON_MOUSE_UP,
            this._onCredits,
            this
          ),
          (i = e + f.width + 10),
          (n = t))
        : ((i = 10 + f.width / 2), (n = f.height / 2 + 10));
    var S = (f = window.document).documentElement;
    (h =
      S.requestFullscreen ||
      S.mozRequestFullScreen ||
      S.webkitRequestFullScreen ||
      S.msRequestFullscreen),
      (d =
        f.exitFullscreen ||
        f.mozCancelFullScreen ||
        f.webkitExitFullscreen ||
        f.msExitFullscreen),
      !1 === ENABLE_FULLSCREEN && (h = !1),
      h &&
        screenfull.enabled &&
        ((f = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (_ = new CToggle(i, n, f, s_bFullscreen, s_oStage)).addEventListener(
          ON_MOUSE_UP,
          this._onFullscreenRelease,
          this
        )),
      (u = new createjs.Shape()).graphics
        .beginFill("black")
        .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
      s_oStage.addChild(u),
      createjs.Tween.get(u)
        .to({ alpha: 0 }, 400)
        .call(function () {
          u.visible = !1;
        }),
      this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  }),
    (this.refreshButtonPos = function (s, o) {
      (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
        l.setPosition(r - s, o + a),
        h && screenfull.enabled && _.setPosition(i + s, n + o),
        SHOW_CREDITS && c.setPosition(e + s, t + o);
    }),
    (this.unload = function () {
      o.unload(),
        (o = null),
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
          (l.unload(), (l = null)),
        SHOW_CREDITS && c.unload(),
        h && screenfull.enabled && _.unload(),
        s_oStage.removeAllChildren(),
        (s_oMenu = null);
    }),
    (this._onButPlayRelease = function () {
      this.unload(), s_oMain.gotoGame(), $(s_oMain).trigger("start_session");
    }),
    (this._onAudioToggle = function () {
      Howler.mute(s_bAudioActive), (s_bAudioActive = !s_bAudioActive);
    }),
    (this._onCredits = function () {
      _oCreditsPanel = new CCreditsPanel();
    }),
    (this.resetFullscreenBut = function () {
      h && screenfull.enabled && _.setActive(s_bFullscreen);
    }),
    (this._onFullscreenRelease = function () {
      s_bFullscreen
        ? d.call(window.document)
        : h.call(window.document.documentElement),
        sizeHandler();
    }),
    (s_oMenu = this),
    this._init();
}
var s_oGame,
  s_oTweenController,
  s_oMenu = null;
function CGame(e) {
  var t,
    i,
    n,
    r,
    a,
    s,
    o,
    l,
    c,
    _,
    u,
    h,
    d,
    f,
    S,
    p,
    g,
    E,
    T,
    b,
    A,
    m,
    C,
    O,
    I,
    w,
    v,
    N,
    M,
    x,
    R,
    y,
    L,
    F,
    D,
    H = !1;
  (this._init = function () {
    (n = MAX_BET),
      (r = -1),
      (a = u = i = 0),
      (s_oTweenController = new CTweenController()),
      (x = createBitmap(s_oSpriteLibrary.getSprite("bg_game"))),
      s_oStage.addChild(x),
      (R = new CInterface(TOTAL_MONEY)),
      (v = new createjs.Container()),
      s_oStage.addChild(v),
      (N = new CHandEvaluator()),
      (y = new CSeat()).setCredit(TOTAL_MONEY),
      (F = y.getCredit()),
      (M = new CHelpCursor(
        520,
        416,
        s_oSpriteLibrary.getSprite("help_cursor"),
        s_oStage
      )),
      this.reset(!1),
      (m = new CVector2()).set(1214, 228),
      (C = new CVector2()).set(CANVAS_WIDTH / 2 - 199, 230),
      (O = new CVector2()).set(418, 820),
      (I = new CVector2()).set(0, -CANVAS_HEIGHT),
      (w = new CVector2(454, 230)),
      (E = [y.getCardOffset(), C]),
      (D = new CGameOver()),
      y.getCredit() < s_oGameSettings.getFichesValueAt(0)
        ? (this._gameOver(), this.changeState(-1))
        : (H = !0),
      (A = new CVector2(m.getX(), m.getY())),
      (L = new CMsgBox()),
      this.changeState(STATE_GAME_WAITING_FOR_BET);
  }),
    (this.unload = function () {
      H = !1;
      for (var e = 0; e < f.length; e++) f[e].unload();
      R.unload(), D.unload(), L.unload(), s_oStage.removeAllChildren();
    }),
    (this.reset = function (e) {
      (s = a = i = 0),
        y.reset(),
        (f = []).splice(0),
        (S = []),
        (g = []),
        R.reset(),
        R.enableBetFiches(e),
        this.shuffleCard();
    }),
    (this.shuffleCard = function () {
      (p = []), (p = s_oGameSettings.getShuffledCardDeck());
    }),
    (this.changeState = function (e) {
      switch (((r = e), e)) {
        case STATE_GAME_WAITING_FOR_BET:
          R.displayMsg(
            TEXT_DISPLAY_MSG_WAITING_BET,
            TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET
          );
          break;
        case STATE_GAME_DEALING:
          R.disableButtons(),
            R.displayMsg(TEXT_DISPLAY_MSG_DEALING, ""),
            this._dealing();
      }
    }),
    (this.cardFromDealerArrived = function (e, t, i) {
      (!1 === t || (t && 9 === i)) && e.showCard(),
        10 > i && s_oGame._dealing();
    }),
    (this.setCredit = function (e) {
      y.setCredit(e), (F = y.getCredit()), R.refreshCredit(e);
    }),
    (this._showWin = function () {
      t
        ? this._playerLose()
        : c === NO_HAND && "dealer" !== h
        ? this._playerWin(TEXT_DISPLAY_MSG_NOT_QUALIFY)
        : "player" === h
        ? this._playerWin(TEXT_HAND_WON_PLAYER)
        : "dealer" === h && c !== NO_HAND
        ? this._playerLose()
        : this._standOff(),
        playSound("player" === h ? "win" : "lose", 1, !1),
        this.changeState(STATE_GAME_DISTRIBUTE_FICHES),
        R.refreshCredit(y.getCredit());
      let e = y.getCredit() - F + y.getBetAnte() + y.getBetRaise();
      $(s_oMain).trigger("hand_finished", [e]),
        (F = y.getCredit()),
        setTimeout(function () {
          y.clearBet(),
            s_oGame.changeState(STATE_GAME_WAITING_FOR_BET),
            s_oGame._onEndHand(),
            (d = s_oGame.endedHand);
        }, 5 * TIME_CARD_REMOVE);
    }),
    (this._playerWin = function (e) {
      y.increaseCredit(o),
        trace("_playerWin_iGameCash " + (k -= o)),
        R.displayMsg(
          TEXT_DISPLAY_MSG_SHOWDOWN,
          TEXT_DISPLAY_MSG_PLAYER_WIN + " " + o + TEXT_CURRENCY
        ),
        y.initMovement(0, O.getX(), O.getY()),
        y.initMovement(1, O.getX(), O.getY()),
        R.showResultText(e);
    }),
    (this._playerLose = function (e) {
      R.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_LOSE),
        y.initMovement(0, I.getX(), I.getY()),
        e || y.initMovement(1, I.getX(), I.getY()),
        R.showResultText(TEXT_HAND_WON_DEALER);
    }),
    (this._standOff = function () {
      y.increaseCredit(o),
        trace("_standOff_iGameCash " + (k -= o)),
        R.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_STANDOFF),
        y.initMovement(0, O.getX(), O.getY()),
        y.initMovement(1, O.getX(), O.getY()),
        R.showResultText(TEXT_DISPLAY_MSG_STANDOFF);
    }),
    (this._dealing = function () {
      if (10 > s) {
        var e = new CCard(m.getX(), m.getY(), v);
        if (1 == s % E.length) {
          var t = new CVector2(C.getX() + (CARD_WIDTH / 2 + 7) * s, C.getY()),
            i = b.splice(0, 1),
            n = i[0].fotogram;
          (i = i[0].rank),
            e.setInfo(A, t, n, i, !0, s),
            e.addEventListener(ON_CARD_SHOWN, this._onCardShown),
            S.push(e);
        } else
          (n = (i = T.splice(0, 1))[0].fotogram),
            (i = i[0].rank),
            e.setInfo(A, y.getAttachCardOffset(), n, i, !1, s),
            y.newCardDealed(),
            g.push(e);
        f.push(e),
          s++,
          e.addEventListener(
            ON_CARD_ANIMATION_ENDING,
            this.cardFromDealerArrived
          ),
          playSound("card", 1, !1);
      } else
        setTimeout(function () {
          s_oGame.changeState(STATE_GAME_PLAYER_TURN),
            R.displayMsg(TEXT_DISPLAY_MSG_USER_TURN, ""),
            R.enable(!1, !0, !0);
        }, 1e3);
    }),
    (this._onEndHand = function () {
      for (var e = new CVector2(w.getX(), w.getY()), t = 0; t < f.length; t++)
        f[t].initRemoving(e), f[t].hideCard();
      R.clearCardValueText(),
        (i = 0),
        s_oGame.changeState(STATE_GAME_SHOW_WINNER),
        playSound("fiche_collect", 1, !1),
        ++u === AD_SHOW_COUNTER &&
          ((u = 0), $(s_oMain).trigger("show_interlevel_ad"));
    }),
    (this._onCardShown = function () {
      r === STATE_GAME_PLAYER_TURN &&
        (4 === l
          ? (R.showHandValue(c, _),
            (r = STATE_GAME_SHOWDOWN),
            s_oGame._showWin())
          : s_oGame._showNextDealerCard());
    }),
    (this.endedHand = function () {}),
    (this.setBet = function (e, t) {
      if (R.isResultPanelvisible())
        R.disableBetFiches(),
          y.clearBet(),
          (d = this.setBet),
          this._onEndHand();
      else {
        var r = s_oGameSettings.getFichesValues()[t];
        if (e === BET_ANTE) {
          (i = 0), M.hide();
          var a = y.getBetAnte() + r;
          if (2 * a > y.getCredit() - r)
            return void R.displayMsg(TEXT_NO_MONEY_FOR_RAISE, "");
          if (a > n) return void L.show(TEXT_ERROR_MAX_BET);
        } else a = 2 * y.getBetAnte();
        e === BET_ANTE
          ? (y.decreaseCredit(r), (k += r), y.betAnte(r), R.enable(!0, !1, !1))
          : (y.decreaseCredit(a), (k += a), y.betRaise()),
          R.refreshCredit(y.getCredit());
      }
    }),
    (this._gameOver = function () {
      D.show();
    }),
    (this._calculateTotalWin = function () {
      let e = 0;
      switch (
        (_ <= 9 && (e = 3 * y.getBetAnte() * PAYOUT_MULT[_]),
        0 === _ && e > 5e3 && (e = 5e3),
        1 === _ && e > 3e3 && (e = 3e3),
        (o = 0),
        h)
      ) {
        case "player":
          o = 3 * y.getBetAnte() + e;
          break;
        case "standoff":
          o = 3 * y.getBetAnte();
          break;
        case "dealer_no_hand":
          o = 3 * y.getBetAnte() + y.getBetAnte();
      }
    }),
    (this.onRebet = function () {
      this.rebet();
    }),
    (this.onDeal = function () {
      if (
        (y.getBetAnte() * PAYOUT_MULT[PAYOUT_MULT.length - 1],
        y.getBetAnte() < MIN_BET)
      )
        L.show(TEXT_ERROR_MIN_BET), R.enableBetFiches(!1), R.enable(!1, !1, !1);
      else {
        v.removeAllChildren();
        let n = new Random().integer(1, 100);

        const response = $.ajax({
          url: 'http://localhost:6140/api/games/checkStudPokerGameBank',
          type: 'POST',
          async: false,
          data: {
            customerId: customerid,
            gameId: gameid,
            bet_amount: y.getBetAnte(),
            payout_mult: PAYOUT_MULT,
            randomNumber: n,
          }
        })
    
        if(response.responseJSON.gameStatus == false) {
          alert("Sorry, Something went wrong, please try again");
          window.location.reload()
        }
    
        WIN_OCCURRENCE = response.responseJSON.win_occurrence;

        if (n > WIN_OCCURRENCE)
          do {
            (T = this._generateRandPlayerCards()),
              (b = this._generateRandDealerCards());
            var e = N.evaluate(b),
              i = N.evaluate(T);
            (c = e.ret),
              (_ = i.ret),
              (h = N.getWinnerComparingHands(i.sort_hand, e.sort_hand, _, c)),
              this._calculateTotalWin();
          } while ("dealer" !== h);
        else
          do {
            (T = this._generateRandPlayerCards()),
              (b = this._generateRandDealerCards()),
              (e = N.evaluate(b)),
              (i = N.evaluate(T)),
              (c = e.ret),
              (_ = i.ret),
              (h = N.getWinnerComparingHands(i.sort_hand, e.sort_hand, _, c)),
              this._calculateTotalWin();
          } while ("dealer" === h && WIN_TYPE_VALUE[_] <= Math.min.apply(null, response.responseJSON.data));
        y.setPrevBet(),
          playSound("card", 1, !1),
          (t = !1),
          this.changeState(STATE_GAME_DEALING),
          $(s_oMain).trigger("bet_placed", y.getBetAnte());
      }
    }),
    (this.onFold = function () {
      (t = !0), (h = "dealer"), (l = 0), this._showNextDealerCard();
    }),
    (this.onRaise = function () {
      r !== STATE_GAME_DISTRIBUTE_FICHES &&
        (this.setBet(BET_RAISE, R.getFicheSelected()),
        (l = 0),
        this._showNextDealerCard()),
        $(s_oMain).trigger("bet_placed", y.getBetRaise());
    }),
    (this._showNextDealerCard = function () {
      S[l].showCard(), l++;
    }),
    (this._generateRandDealerCards = function () {
      for (var e = [], t = 0; 5 > t; t++)
        e.push({ fotogram: p[a].fotogram, rank: p[a].rank, suit: p[a].suit }),
          a++,
          this._checkDeckLength();
      return e;
    }),
    (this._generateRandPlayerCards = function () {
      for (var e = [], t = 0; 5 > t; t++)
        e.push({ fotogram: p[a].fotogram, rank: p[a].rank, suit: p[a].suit }),
          a++,
          this._checkDeckLength();
      return e;
    }),
    (this._checkDeckLength = function () {
      a >= p.length && ((p = s_oGameSettings.getShuffledCardDeck()), (a = 0));
    }),
    (this.clearBets = function () {
      if (r === STATE_GAME_WAITING_FOR_BET) {
        R.enable(!1, !1, !1);
        var e = y.getStartingBet();
        0 < e &&
          (y.clearBet(),
          y.increaseCredit(e),
          (k -= e),
          R.refreshCredit(y.getCredit()),
          (e = y.checkIfRebetIsPossible()),
          R.enableBetFiches(e));
      }
    }),
    (this.rebet = function () {
      this.clearBets();
      var e = y.rebet();
      e > 0 && M.isVisible() && (M.hide());
      (k -= e),
        y.getBetAnte(),
        R.enable(!0, !1, !1),
        R.refreshCredit(y.getCredit()),
        (i = BET_TIME);
    }),
    (this.onExit = function () {
      this.unload(),
        $(s_oMain).trigger("save_score", [y.getCredit()]),
        $(s_oMain).trigger("end_session"),
        $(s_oMain).trigger("share_event", y.getCredit()),
        s_oMain.gotoMenu();
    }),
    (this.getState = function () {
      return r;
    }),
    (this._updateDealing = function () {
      for (var e = 0; e < f.length; e++) f[e].update();
    }),
    (this._updateFiches = function () {
      y.updateFichesController();
    }),
    (this._updateShowWinner = function () {
      for (var e = 0; e < f.length; e++) f[e].update();
      (i += s_iTimeElaps) > TIME_END_HAND &&
        ((i = 0),
        (e = y.checkIfRebetIsPossible()),
        this.reset(e),
        R.reset(),
        y.getCredit() < 3 * s_oGameSettings.getFichesValueAt(0)
          ? (this._gameOver(), this.changeState(-1))
          : (this.changeState(STATE_GAME_WAITING_FOR_BET),
            d.call(this, 0, R.getFicheSelected())));
    }),
    (this.update = function () {
      if (!1 !== H)
        switch (r) {
          case STATE_GAME_WAITING_FOR_BET:
            (i = 0), M.isVisible() || 0 !== y.getBetAnte() || M.show(1);
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
    }),
    (s_oGame = this),
    (TOTAL_MONEY = e.money),
    (MIN_BET = e.min_bet),
    (MAX_BET = e.max_bet),
    (MULTIPLIERS = e.multiplier),
    (BET_TIME = e.bet_time),
    (BLACKJACK_PAYOUT = e.blackjack_payout),
    (WIN_OCCURRENCE = e.win_occurrence),
    (BET_OCCURRENCE = e.bet_occurrence);
  var k = e.game_cash;
  (PAYOUT_MULT = e.payout),
    (TIME_END_HAND = e.time_show_hand),
    (AD_SHOW_COUNTER = e.ad_show_counter),
    this._init();
}
function CInterface(e) {
  var t,
    i,
    n,
    r,
    a,
    s,
    o,
    l,
    c,
    _,
    u,
    h,
    d,
    f,
    S,
    p,
    g,
    E,
    T,
    b,
    A,
    m,
    C,
    O,
    I = null,
    w = null,
    v = null;
  return (
    (this._init = function (e) {
      var N = s_oSpriteLibrary.getSprite("but_exit");
      (n = CANVAS_WIDTH - N.width / 2 - 10),
        (r = N.height / 2 + 10),
        (c = new CGfxButton(n, r, N, s_oStage)).addEventListener(
          ON_MOUSE_UP,
          this._onExit,
          this
        ),
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
          ((a = c.getX() - N.width - 10),
          (s = N.height / 2 + 10),
          (I = new CToggle(
            a,
            s,
            s_oSpriteLibrary.getSprite("audio_icon"),
            !!s_bAudioActive,
            s_oStage
          )).addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
      var M = (N = window.document).documentElement;
      (w =
        M.requestFullscreen ||
        M.mozRequestFullScreen ||
        M.webkitRequestFullScreen ||
        M.msRequestFullscreen),
        (v =
          N.exitFullscreen ||
          N.mozCancelFullScreen ||
          N.webkitExitFullscreen ||
          N.msExitFullscreen),
        !1 === ENABLE_FULLSCREEN && (w = !1),
        w &&
          screenfull.enabled &&
          ((N = s_oSpriteLibrary.getSprite("but_fullscreen")),
          null === I
            ? ((t = c.getX() - N.width / 2 - 10), (i = N.height / 2 + 10))
            : ((t = a - N.width / 2 - 10), (i = N.height / 2 + 10)),
          (O = new CToggle(t, i, N, s_bFullscreen, s_oStage)).addEventListener(
            ON_MOUSE_UP,
            this._onFullscreenRelease,
            this
          )),
        ((N = createBitmap(s_oSpriteLibrary.getSprite("display_bg"))).x = 290),
        (N.y = 6),
        s_oStage.addChild(N),
        ((M = createBitmap((N = s_oSpriteLibrary.getSprite("gui_bg")))).y =
          CANVAS_HEIGHT - N.height),
        s_oStage.addChild(M),
        (N = s_oSpriteLibrary.getSprite("but_clear")),
        (_ = new CGfxButton(
          CANVAS_WIDTH - 400,
          CANVAS_HEIGHT - N.height / 2,
          N,
          s_oStage
        )).disable(),
        _.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this),
        (N = s_oSpriteLibrary.getSprite("but_rebet")),
        (u = new CGfxButton(
          CANVAS_WIDTH - 550,
          CANVAS_HEIGHT - N.height / 2,
          N,
          s_oStage
        )).disable(),
        u.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this),
        (N = s_oSpriteLibrary.getSprite("but_generic")),
        (d = new CTextButton(
          CANVAS_WIDTH - 400,
          CANVAS_HEIGHT - N.height / 2 - 350,
          N,
          TEXT_DEAL,
          FONT_GAME_1,
          "#ffffff",
          30,
          s_oStage
        )).addEventListener(ON_MOUSE_UP, this._onButDealRelease, this),
        (N = s_oSpriteLibrary.getSprite("but_generic")),
        (f = new CTextButton(
          CANVAS_WIDTH - 400,
          CANVAS_HEIGHT - N.height / 2 - 250,
          N,
          TEXT_RAISE,
          FONT_GAME_1,
          "#ffffff",
          30,
          s_oStage
        )).addEventListener(ON_MOUSE_UP, this._onButRaiseRelease, this),
        (N = s_oSpriteLibrary.getSprite("but_generic")),
        (S = new CTextButton(
          CANVAS_WIDTH - 400,
          CANVAS_HEIGHT - N.height / 2 - 150,
          N,
          TEXT_FOLD,
          FONT_GAME_1,
          "#ffffff",
          30,
          s_oStage
        )).addEventListener(ON_MOUSE_UP, this._onButFoldRelease, this),
        (POS_BET[BET_ANTE] = { x: CANVAS_WIDTH / 2 - 100, y: 440 }),
        (POS_BET[BET_RAISE] = { x: CANVAS_WIDTH / 2 + 100, y: 440 }),
        (h = new CGfxButton(
          POS_BET[BET_ANTE].x,
          POS_BET[BET_ANTE].y,
          s_oSpriteLibrary.getSprite("bet_ante"),
          s_oStage
        )).addEventListener(ON_MOUSE_UP, this._onButAnteRelease, this);
      var x = createBitmap((M = s_oSpriteLibrary.getSprite("bet_raise")));
      for (
        x.x = POS_BET[BET_RAISE].x,
          x.y = POS_BET[BET_RAISE].y,
          x.regX = M.width / 2,
          x.regY = M.height / 2,
          s_oStage.addChild(x),
          T = new CTLText(
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
          ),
          b = new CTLText(
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
          ),
          g = new CTLText(
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
          ),
          E = new CTLText(
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
          ),
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
          ),
          p = new CTLText(
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
            TEXT_CURRENCY + e.toFixed(2),
            !0,
            !0,
            !1,
            !1
          ),
          e = [
            { x: 350, y: CANVAS_HEIGHT - 60 },
            { x: 485, y: CANVAS_HEIGHT - 60 },
            { x: 620, y: CANVAS_HEIGHT - 60 },
            { x: 755, y: CANVAS_HEIGHT - 60 },
            { x: 890, y: CANVAS_HEIGHT - 60 },
          ],
          l = [],
          M = s_oGameSettings.getFichesValues(),
          x = 0;
        x < NUM_FICHES;
        x++
      )
        (N = s_oSpriteLibrary.getSprite("fiche_" + x)),
          (l[x] = new CGfxButton(e[x].x, e[x].y, N, s_oStage)),
          l[x].addEventListenerWithParams(
            ON_MOUSE_UP,
            this._onFicheClicked,
            this,
            [M[x], x]
          );
      (e = s_oSpriteLibrary.getSprite("fiche_highlight")),
        ((A = createBitmap(e)).regX = e.width / 2),
        (A.regY = e.height / 2),
        (A.x = l[0].getX()),
        (A.y = l[0].getY()),
        s_oStage.addChild(A),
        (o = 0),
        (FICHE_WIDTH = N.width),
        (m = new CAnimText(CANVAS_WIDTH, CANVAS_HEIGHT, s_oStage)),
        (C = new CPaytablePanel(CANVAS_WIDTH - 313, 100, s_oStage)),
        this.disableButtons(),
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    }),
    (this.unload = function () {
      c.unload(),
        (c = null),
        !1 === DISABLE_SOUND_MOBILE && (I.unload(), (I = null)),
        w && screenfull.enabled && O.unload(),
        _.unload(),
        d.unload(),
        u.unload(),
        (s_oInterface = null);
    }),
    (this.refreshButtonPos = function (e, o) {
      c.setPosition(n - e, o + r),
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
          I.setPosition(a - e, o + s),
        w && screenfull.enabled && O.setPosition(t - e, i + o),
        C.refreshButtonPos(e, o);
    }),
    (this.reset = function () {
      this.disableButtons();
    }),
    (this.enableBetFiches = function (e) {
      for (var t = 0; t < NUM_FICHES; t++) l[t].enable();
      _.enable(), h.enable(), e && u.enable();
    }),
    (this.enableRebet = function () {
      u.enable();
    }),
    (this.disableBetFiches = function () {
      for (var e = 0; e < NUM_FICHES; e++) l[e].disable();
      _.disable(), u.disable(), h.disable();
    }),
    (this.disableButtons = function () {
      d.disable(), S.disable(), f.disable();
    }),
    (this.enable = function (e, t, i) {
      e ? d.enable() : d.disable(),
        t ? f.enable() : f.disable(),
        i ? S.enable() : S.disable();
    }),
    (this.refreshCredit = function (e) {
      p.refreshText(TEXT_CURRENCY + e.toFixed(2));
    }),
    (this.refreshCardValue = function (e, t) {
      g.refreshText("" + e), E.refreshText("" + t);
    }),
    (this.displayMsg = function (e, t) {
      T.refreshText(e), b.refreshText(t);
    }),
    (this.clearCardValueText = function () {
      g.refreshText(""), E.refreshText(""), m.hide();
    }),
    (this._onFicheClicked = function (e) {
      (A.x = l[e[1]].getX()),
        (A.y = l[e[1]].getY()),
        (o = e[1]),
        s_oGame.setBet(BET_ANTE, e[1]);
    }),
    (this.showResultText = function (e) {
      m.show(
        { x: -200, y: CANVAS_HEIGHT / 2 + 160 },
        { x: CANVAS_WIDTH / 2 - 550, y: CANVAS_HEIGHT / 2 + 120 },
        e
      );
    }),
    (this.showHandValue = function (e, t) {
      g.refreshText(TEXT_EVALUATOR[e]), E.refreshText(TEXT_EVALUATOR[t]);
    }),
    (this._onButClearRelease = function () {
      s_oGame.clearBets();
    }),
    (this._onButRebetRelease = function () {
      u.disable(), s_oGame.onRebet();
    }),
    (this._onButAnteRelease = function () {}),
    (this._onButDealRelease = function () {
      this.disableBetFiches(), this.disableButtons(), s_oGame.onDeal();
    }),
    (this._onButRaiseRelease = function () {
      this.disableBetFiches(), this.disableButtons(), s_oGame.onRaise();
    }),
    (this._onButFoldRelease = function () {
      this.disableBetFiches(), this.disableButtons(), s_oGame.onFold();
    }),
    (this._onExit = function () {
      s_oGame.onExit();
    }),
    (this._onAudioToggle = function () {
      Howler.mute(s_bAudioActive), (s_bAudioActive = !s_bAudioActive);
    }),
    (this.resetFullscreenBut = function () {
      w && screenfull.enabled && O.setActive(s_bFullscreen);
    }),
    (this._onFullscreenRelease = function () {
      s_bFullscreen
        ? v.call(window.document)
        : w.call(window.document.documentElement),
        sizeHandler();
    }),
    (this.getFicheSelected = function () {
      return o;
    }),
    (this.isResultPanelvisible = function () {
      return m.isVisible();
    }),
    (s_oInterface = this),
    this._init(e),
    this
  );
}
var s_oInterface = null;
function CTweenController() {
  (this.tweenValue = function (e, t, i) {
    return e + i * (t - e);
  }),
    (this.easeLinear = function (e, t, i, n) {
      return (i * e) / n + t;
    }),
    (this.easeInCubic = function (e, t, i, n) {
      return t + i * (n = (e /= n) * e * e);
    }),
    (this.easeBackInQuart = function (e, t, i, n) {
      return t + i * (2 * (n = (e /= n) * e) * n + 2 * n * e + -3 * n);
    }),
    (this.easeInBack = function (e, t, i, n) {
      return i * (e /= n) * e * (2.70158 * e - 1.70158) + t;
    }),
    (this.easeOutCubic = function (e, t, i, n) {
      return i * ((e = e / n - 1) * e * e + 1) + t;
    });
}
function CSeat() {
  var e, t, i, n, r, a, s, o, l, c;
  (this._init = function () {
    ((o = new createjs.Container()).x = CANVAS_WIDTH / 2 - 160),
      (o.y = 586),
      s_oStage.addChild(o),
      (c = []);
    for (var i = 0; 2 > i; i++) c[i] = new CFichesController();
    (t = e = r = 0),
      this.reset(),
      (l = new CVector2()).set(0, 0),
      (s = new CVector2(l.getX(), l.getY()));
  }),
    (this.unload = function () {
      s_oStage.removeChild(o);
    }),
    (this.addEventListener = function (e, t, i) {}),
    (this.reset = function () {
      for (var e = (n = 0); e < c.length; e++) c[e].reset();
      for (a = [], e = 0; 3 > e; e++) a[e] = [];
    }),
    (this.clearBet = function () {
      (t = e = 0), (a = []);
      for (var i = 0; i < c.length; i++) c[i].reset(), (a[i] = []);
    }),
    (this.resetBet = function () {
      t = e = 0;
    }),
    (this.setCredit = function (e) {
      r = e;
    }),
    (this.increaseCredit = function (e) {
      r += e;
    }),
    (this.betAnte = function (t) {
      (e += t), c[0].createFichesPile(e, POS_BET[0].x, POS_BET[0].y);
    }),
    (this.betRaise = function () {
      (t = 2 * e), c[1].createFichesPile(t, POS_BET[1].x, POS_BET[1].y);
    }),
    (this.setPrevBet = function () {
      i = e;
    }),
    (this.decreaseCredit = function (e) {
      (r -= e), (r = parseFloat(r.toFixed(2)));
    }),
    (this.refreshFiches = function (e, t, i, n, r) {
      a[r].push({ value: e, index: t }), c[r].refreshFiches(a[r], i, n);
    }),
    (this.initMovement = function (e, t, i) {
      c[e].initMovement(t, i);
    }),
    (this.newCardDealed = function () {
      n++;
    }),
    (this.rebet = function () {
      return void 0 === i
        ? 0
        : ((t = 0),
          (e = i),
          this.decreaseCredit(i),
          c[BET_ANTE].createFichesPile(
            i,
            POS_BET[BET_ANTE].x,
            POS_BET[BET_ANTE].y
          ),
          i);
    }),
    (this.checkIfRebetIsPossible = function () {
      for (var e = 0, t = 0; t < c.length; t++) {
        e += parseFloat(c[t].getPrevBet().toFixed(2));
      }
      return !(e > r);
    }),
    (this.updateFichesController = function () {
      for (var e = 0; e < c.length; e++) c[e].update();
    }),
    (this.getAttachCardOffset = function () {
      return s.set(o.x + l.getX() + (CARD_WIDTH + 14) * n, o.y + l.getY()), s;
    }),
    (this.getBetAnte = function () {
      return e;
    }),
    (this.getBetRaise = function () {
      return t;
    }),
    (this.getCredit = function () {
      return r;
    }),
    (this.getCardOffset = function () {
      return l;
    }),
    (this.getPotentialWin = function (e) {
      return (void 0)[e];
    }),
    (this.getStartingBet = function () {
      for (var e = 0, t = 0; t < c.length; t++) e += c[t].getValue();
      return e;
    }),
    this._init();
}
function CFichesController() {
  var e, t, i, n, r, a, s, o, l, c;
  (this._init = function () {
    (o = new createjs.Container()),
      s_oStage.addChild(o),
      (r = new CVector2()).set(o.x, o.y),
      (l = new createjs.Container()),
      s_oStage.addChild(l),
      ((c = new createjs.Text("", "28px " + FONT_GAME_1, "#fff")).textAlign =
        "center"),
      l.addChild(c),
      (i = n = t = 0),
      (e = !1);
  }),
    (this.addEventListener = function (e, t, i) {}),
    (this.reset = function () {
      (e = !1),
        (i = 0),
        o.removeAllChildren(),
        (o.x = r.getX()),
        (o.y = r.getY()),
        (c.text = "");
    }),
    (this.setPrevValue = function (e) {
      n = e;
    }),
    (this.refreshFiches = function (e, t, n) {
      e = e.sortOn("value", "index");
      for (var r = t, a = n - 50, s = (i = 0), l = 0; l < e.length; l++) {
        var _ = s_oSpriteLibrary.getSprite("fiche_" + e[l].index);
        ((_ = createBitmap(_)).scaleX = 0.7),
          (_.scaleY = 0.7),
          o.addChild(_),
          (_.x = r - 52),
          (_.y = a),
          (a -= 5),
          9 < ++s && ((s = 0), (r += FICHE_WIDTH), (a = n)),
          (i += e[l].value);
      }
      playSound("chip", 1, !1),
        (c.x = t),
        (c.y = n + 35),
        (c.text = i.toFixed(2) + TEXT_CURRENCY);
    }),
    (this.createFichesPile = function (e, t, i) {
      this.reset();
      var n = s_oGameSettings.getFichesValues(),
        r = [];
      do {
        for (var a = n[n.length - 1], s = n.length - 1; a > e; ) a = n[--s];
        s = Math.floor(e / a);
        for (var o = 0; o < s; o++)
          r.push({ value: a, index: s_oGameSettings.getIndexForFiches(a) });
        e = (a = Math.floor(e / a) === e / a ? 0 : e % a).toFixed(2);
      } while (0 < a);
      this.refreshFiches(r, t, i);
    }),
    (this.initMovement = function (t, r) {
      (n = i),
        (a = new CVector2(o.x, o.y)),
        (s = new CVector2(t, r)),
        (c.text = ""),
        (e = !0);
    }),
    (this.getValue = function () {
      return i;
    }),
    (this.getPrevBet = function () {
      return n;
    }),
    (this.update = function () {
      if (e)
        if ((t += s_iTimeElaps) > TIME_FICHES_MOV) (t = 0), (e = !1);
        else {
          var i = easeInOutCubic(t, 0, 1, TIME_FICHES_MOV),
            n = new CVector2();
          (n = tweenVectors(a, s, i, n)), (o.x = n.getX()), (o.y = n.getY());
        }
    }),
    this._init();
}
function CVector2(e, t) {
  var i, n;
  (this._init = function (e, t) {
    (i = e), (n = t);
  }),
    (this.add = function (e, t) {
      (i += e), (n += t);
    }),
    (this.addV = function (e) {
      (i += e.getX()), (n += e.getY());
    }),
    (this.scalarDivision = function (e) {
      (i /= e), (n /= e);
    }),
    (this.subV = function (e) {
      (i -= e.getX()), (n -= e.getY());
    }),
    (this.scalarProduct = function (e) {
      (i *= e), (n *= e);
    }),
    (this.invert = function () {
      (i *= -1), (n *= -1);
    }),
    (this.dotProduct = function (e) {
      return i * e.getX() + n * e.getY();
    }),
    (this.set = function (e, t) {
      (i = e), (n = t);
    }),
    (this.setV = function (e) {
      (i = e.getX()), (n = e.getY());
    }),
    (this.length = function () {
      return Math.sqrt(i * i + n * n);
    }),
    (this.length2 = function () {
      return i * i + n * n;
    }),
    (this.normalize = function () {
      var e = this.length();
      0 < e && ((i /= e), (n /= e));
    }),
    (this.getNormalize = function (e) {
      this.length(), e.set(i, n), e.normalize();
    }),
    (this.rot90CCW = function () {
      var e = i;
      (i = -n), (n = e);
    }),
    (this.rot90CW = function () {
      var e = i;
      (i = n), (n = -e);
    }),
    (this.getRotCCW = function (e) {
      e.set(i, n), e.rot90CCW();
    }),
    (this.getRotCW = function (e) {
      e.set(i, n), e.rot90CW();
    }),
    (this.ceil = function () {
      (i = Math.ceil(i)), (n = Math.ceil(n));
    }),
    (this.round = function () {
      (i = Math.round(i)), (n = Math.round(n));
    }),
    (this.toString = function () {
      return "Vector2: " + i + ", " + n;
    }),
    (this.print = function () {
      trace("Vector2: " + i + ", " + n);
    }),
    (this.getX = function () {
      return i;
    }),
    (this.getY = function () {
      return n;
    }),
    this._init(e, t);
}
function CGameSettings() {
  var e, t, i;
  (this._init = function () {
    var t = -1;
    e = [];
    for (var i = 0; 52 > i; i++) {
      var n = (i + 1) % 13;
      1 === n ? ((n = 14), t++) : 0 === n && (n = 13),
        e.push({ fotogram: i, rank: n, suit: t });
    }
    FICHE_VALUE = [1, 5, 10, 25, 100];
  }),
    (this.getFichesValues = function () {
      return FICHE_VALUE;
    }),
    (this.getFichesValueAt = function (e) {
      return FICHE_VALUE[e];
    }),
    (this.getIndexForFiches = function (e) {
      for (var t = 0, i = 0; i < FICHE_VALUE.length; i++)
        FICHE_VALUE[i] === e && (t = i);
      return t;
    }),
    (this.generateFichesPile = function (e) {
      var t = [],
        n = i.length - 1,
        r = i[n];
      do {
        var a = e % r;
        (a = CMath.roundDecimal(a, 1)), (e = Math.floor(e / r));
        for (var s = 0; s < e; s++) t.push(r);
        (r = i[--n]), (e = a);
      } while (0 < a && -1 < n);
      return t;
    }),
    (this.timeToString = function (e) {
      e = Math.round(e / 1e3);
      var t = Math.floor(e / 60),
        i = "";
      return (
        (i = 10 > t ? i + "0" + t + ":" : i + (t + ":")),
        10 > (e -= 60 * t) ? i + "0" + e : i + e
      );
    }),
    (this.getShuffledCardDeck = function () {
      for (var i = [], n = 0; n < e.length; n++) i[n] = e[n];
      for (t = []; 0 < i.length; )
        t.push(i.splice(Math.round(Math.random() * (i.length - 1)), 1)[0]);
      return t;
    }),
    (this.getCardDeck = function () {
      return e;
    }),
    this._init();
}
var s_oCard,
  TYPE_LINEAR = 0,
  TYPE_OUT_CUBIC = 1,
  TYPE_IN_CUBIC = 2,
  TYPE_OUT_BACK = 3,
  TYPE_IN_BACK = 4;
function ease(e, t, i, n, r, a) {
  switch (e) {
    case TYPE_LINEAR:
      var s = easeLinear(t, i, n, r, a);
      break;
    case TYPE_IN_CUBIC:
      s = easeInCubic(t, i, n, r, a);
      break;
    case TYPE_OUT_CUBIC:
      s = easeOutCubic(t, i, n, r, a);
      break;
    case TYPE_IN_BACK:
      s = easeInBack(t, i, n, r, a);
      break;
    case TYPE_OUT_BACK:
      s = easeInBack(t, i, n, r, a);
  }
  return s;
}
function easeOutBounce(e, t, i, n) {
  return (e /= n) < 1 / 2.75
    ? 7.5625 * i * e * e + t
    : e < 2 / 2.75
    ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
    : e < 2.5 / 2.75
    ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
    : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
}
function easeInBounce(e, t, i, n) {
  return i - easeOutBounce(n - e, 0, i, n) + t;
}
function easeInOutBounce(e, t, i, n) {
  return e < n / 2
    ? 0.5 * easeInBounce(2 * e, 0, i, n) + t
    : 0.5 * easeOutBounce(2 * e - n, 0, i, n) + 0.5 * i + t;
}
function easeInCirc(e, t, i, n) {
  return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
}
function easeOutCirc(e, t, i, n) {
  return i * Math.sqrt(1 - (e = e / n - 1) * e) + t;
}
function easeInOutCirc(e, t, i, n) {
  return 1 > (e /= n / 2)
    ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
    : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
}
function easeInCubic(e, t, i, n, r) {
  return i * (e /= n) * e * e + t;
}
function easeOutCubic(e, t, i, n, r) {
  return i * ((e = e / n - 1) * e * e + 1) + t;
}
function easeInOutCubic(e, t, i, n, r) {
  return 1 > (e /= n / 2)
    ? (i / 2) * e * e * e + t
    : (i / 2) * ((e -= 2) * e * e + 2) + t;
}
function easeInElastic(e, t, i, n, r, a, s) {
  return 0 == e
    ? t
    : 1 == (e /= n)
    ? t + i
    : (s || (s = 0.3 * n),
      !a || a < Math.abs(i)
        ? ((a = i), (r = s / 4))
        : (r = (s / (2 * Math.PI)) * Math.asin(i / a)),
      -a * Math.pow(2, 10 * --e) * Math.sin((2 * (e * n - r) * Math.PI) / s) +
        t);
}
function easeOutElastic(e, t, i, n, r, a, s) {
  return 0 == e
    ? t
    : 1 == (e /= n)
    ? t + i
    : (s || (s = 0.3 * n),
      !a || a < Math.abs(i)
        ? ((a = i), (r = s / 4))
        : (r = (s / (2 * Math.PI)) * Math.asin(i / a)),
      a * Math.pow(2, -10 * e) * Math.sin((2 * (e * n - r) * Math.PI) / s) +
        i +
        t);
}
function easeInOutElastic(e, t, i, n, r, a, s) {
  return 0 == e
    ? t
    : 1 == (e /= n)
    ? t + i
    : (s || (s = 0.3 * n),
      !a || a < Math.abs(i)
        ? ((a = i), (r = s / 4))
        : (r = (s / (2 * Math.PI)) * Math.asin(i / a)),
      1 > e
        ? -0.5 *
            a *
            Math.pow(2, 10 * --e) *
            Math.sin((2 * (e * n - r) * Math.PI) / s) +
          t
        : a *
            Math.pow(2, -10 * --e) *
            Math.sin((2 * (e * n - r) * Math.PI) / s) *
            0.5 +
          i +
          t);
}
function easeInExpo(e, t, i, n) {
  return 0 == e ? t : i * Math.pow(2, 10 * (e / n - 1)) + t;
}
function easeOutExpo(e, t, i, n) {
  return e == n ? t + i : i * (1 - Math.pow(2, (-10 * e) / n)) + t;
}
function easeInOutExpo(e, t, i, n) {
  return 0 == e
    ? t
    : e == n
    ? t + i
    : 1 > (e /= n / 2)
    ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
    : (i / 2) * (2 - Math.pow(2, -10 * --e)) + t;
}
function easeLinear(e, t, i, n) {
  return (i * e) / n + t;
}
function easeInQuad(e, t, i, n) {
  return i * (e /= n) * e + t;
}
function easeOutQuad(e, t, i, n) {
  return -i * (e /= n) * (e - 2) + t;
}
function easeInOutQuad(e, t, i, n) {
  return 1 > (e /= n / 2)
    ? (i / 2) * e * e + t
    : (-i / 2) * (--e * (e - 2) - 1) + t;
}
function easeInQuart(e, t, i, n) {
  return i * (e /= n) * e * e * e + t;
}
function easeOutQuart(e, t, i, n) {
  return -i * ((e = e / n - 1) * e * e * e - 1) + t;
}
function easeInOutQuart(e, t, i, n) {
  return 1 > (e /= n / 2)
    ? (i / 2) * e * e * e * e + t
    : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
}
function easeInQuint(e, t, i, n) {
  return i * (e /= n) * e * e * e * e + t;
}
function easeOutQuint(e, t, i, n) {
  return i * ((e = e / n - 1) * e * e * e * e + 1) + t;
}
function easeInOutQuint(e, t, i, n) {
  return 1 > (e /= n / 2)
    ? (i / 2) * e * e * e * e * e + t
    : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
}
function easeInSine(e, t, i, n) {
  return -i * Math.cos((e / n) * (Math.PI / 2)) + i + t;
}
function easeOutSine(e, t, i, n) {
  return i * Math.sin((e / n) * (Math.PI / 2)) + t;
}
function easeInOutSine(e, t, i, n) {
  return (-i / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
}
function easeInBack(e, t, i, n) {
  return i * (e /= n) * e * (2.70158 * e - 1.70158) + t;
}
function easeOutBack(e, t, i, n) {
  return i * ((e = e / n - 1) * e * (2.70158 * e + 1.70158) + 1) + t;
}
function CCard(e, t, i) {
  var n,
    r,
    a,
    s,
    o,
    l,
    c,
    _,
    u,
    h,
    d,
    f = -1;
  (this._init = function (e, t, i) {
    (d = i),
      (i = {
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
      }),
      (i = new createjs.SpriteSheet(i)),
      ((h = createSprite(
        i,
        "back",
        CARD_WIDTH / 2,
        CARD_HEIGHT / 2,
        CARD_WIDTH,
        CARD_HEIGHT
      )).x = e),
      (h.y = t),
      (h.rotation = 120),
      h.stop(),
      d.addChild(h),
      (_ = []),
      (u = []);
  }),
    (this.unload = function () {
      (c = l = null), d.removeChild(h);
    }),
    (this.addEventListener = function (e, t, i) {
      (_[e] = t), (u[e] = i);
    }),
    (this.setInfo = function (e, t, i, _, u, h) {
      !1,
        (o = 0),
        (r = i),
        (a = _),
        (l = e),
        (c = t),
        (s = h),
        (n = u),
        (f = STATE_CARD_DEALING);
    }),
    (this.initRemoving = function (e) {
      (l = new CVector2(h.x, h.y)), (c = e), (o = 0), (f = STATE_CARD_REMOVING);
    }),
    (this.setValue = function () {
      h.gotoAndStop(r);
      var e = this;
      createjs.Tween.get(h)
        .to({ scaleX: 1 }, 100)
        .call(function () {
          e.cardShown();
        });
    }),
    (this.showCard = function () {
      var e = this;
      createjs.Tween.get(h)
        .to({ scaleX: 0.1 }, 100)
        .call(function () {
          e.setValue();
        });
    }),
    (this.hideCard = function () {
      var e = this;
      createjs.Tween.get(h)
        .to({ scaleX: 0.1 }, 100)
        .call(function () {
          e.setBack();
        });
    }),
    (this.setBack = function () {
      h.gotoAndStop("back");
      var e = this;
      createjs.Tween.get(h)
        .to({ scaleX: 1 }, 100)
        .call(function () {
          e.cardHidden();
        });
    }),
    (this.cardShown = function () {
      _[ON_CARD_SHOWN] && _[ON_CARD_SHOWN].call(u[ON_CARD_SHOWN]);
    }),
    (this.cardHidden = function () {
      !0;
    }),
    (this.getValue = function () {
      return a;
    }),
    (this.getFotogram = function () {
      return r;
    }),
    (this._updateDealing = function () {
      if ((o += s_iTimeElaps) > TIME_CARD_DEALING)
        (f = -1),
          (o = 0),
          (h.x = c.getX()),
          (h.y = c.getY()),
          (h.rotation = 360),
          _[ON_CARD_ANIMATION_ENDING] &&
            _[ON_CARD_ANIMATION_ENDING].call(
              u[ON_CARD_ANIMATION_ENDING],
              this,
              n,
              s
            );
      else {
        this.visible = !0;
        var e = easeInOutCubic(o, 0, 1, TIME_CARD_DEALING),
          t = new CVector2();
        (t = tweenVectors(l, c, e, t)),
          (h.x = t.getX()),
          (h.y = t.getY()),
          (h.rotation = 120 + (24e3 * e) / 100);
      }
    }),
    (this._updateRemoving = function () {
      if ((o += s_iTimeElaps) > TIME_CARD_REMOVE)
        (o = 0), !1, (f = -1), this.unload();
      else {
        var e = easeInOutCubic(o, 0, 1, TIME_CARD_REMOVE),
          t = new CVector2();
        (t = tweenVectors(l, c, e, t)),
          (h.x = t.getX()),
          (h.y = t.getY()),
          (h.rotation = (4500 * e) / 100);
      }
    }),
    (this.update = function () {
      switch (f) {
        case STATE_CARD_DEALING:
          this._updateDealing();
          break;
        case STATE_CARD_REMOVING:
          this._updateRemoving();
      }
    }),
    (s_oCard = this),
    this._init(e, t, i);
}
function CGameOver() {
  var e, t;
  (this._init = function () {
    (t = new createjs.Container()),
      s_oStage.addChild(t),
      t.on("click", function () {});
    var i = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
    t.addChild(i),
      new CTLText(
        t,
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
      ),
      (e = new CTextButton(
        CANVAS_WIDTH / 2,
        450,
        s_oSpriteLibrary.getSprite("but_game_bg"),
        TEXT_EXIT,
        FONT_GAME_1,
        "#fff",
        14,
        t
      )).addEventListener(ON_MOUSE_UP, this._onExit, this),
      this.hide();
  }),
    (this.unload = function () {
      e.unload(), t.off("click", function () {});
    }),
    (this.show = function () {
      (t.visible = !0), $(s_oMain).trigger("end_session");
    }),
    (this.hide = function () {
      t.visible = !1;
    }),
    (this._onRecharge = function () {
      (t.visible = !1), $(s_oMain).trigger("recharge");
    }),
    (this._onExit = function () {
      s_oGame.onExit();
    }),
    this._init();
}
function CMsgBox() {
  var e, t, i;
  return (
    (this._init = function () {
      ((i = new createjs.Container()).alpha = 0),
        (i.visible = !1),
        s_oStage.addChild(i),
        (e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"))),
        i.addChild(e),
        (t = new CTLText(
          i,
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
        )).setShadow("#000", 2, 2, 2);
    }),
    (this.unload = function () {
      i.off("mousedown", this._onExit);
    }),
    (this._initListener = function () {
      i.on("mousedown", this._onExit);
    }),
    (this.show = function (e) {
      t.refreshText(e), (i.visible = !0);
      var n = this;
      createjs.Tween.get(i)
        .to({ alpha: 1 }, 500)
        .call(function () {
          n._initListener();
        });
    }),
    (this._onExit = function () {
      i.visible && (i.off("mousedown"), (i.visible = !1));
    }),
    this._init(),
    this
  );
}
function CHandEvaluator() {
  var e, t, i;
  (this.evaluate = function (n) {
    (t = []), (e = []);
    for (var r = 0; r < n.length; r++)
      (t[r] = { rank: n[r].rank, suit: n[r].suit }),
        (e[r] = { rank: n[r].rank, suit: n[r].suit });
    return (
      t.sort(this.compareRank),
      e.sort(this.compareRank),
      (i = [0, 1, 2, 3, 4]),
      { ret: this.rankHand(), sort_hand: e }
    );
  }),
    (this.rankHand = function () {
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
    }),
    (this._checkForRoyalFlush = function () {
      return !(!this._isRoyalStraight() || !this._isFlush());
    }),
    (this._checkForStraightFlush = function () {
      return !(!this._isStraight() || !this._isFlush());
    }),
    (this._checkForFourOfAKind = function () {
      return t[0].rank === t[3].rank
        ? (t.splice(4, 1), i.splice(4, 1), !0)
        : t[1].rank === t[4].rank && (t.splice(0, 1), i.splice(0, 1), !0);
    }),
    (this._checkForFullHouse = function () {
      return (
        (t[0].rank === t[1].rank && t[2].rank === t[4].rank) ||
        (t[0].rank === t[2].rank && t[3].rank === t[4].rank)
      );
    }),
    (this._checkForFlush = function () {
      return !!this._isFlush();
    }),
    (this._checkForStraight = function () {
      return !!this._isStraight();
    }),
    (this._checkForThreeOfAKind = function () {
      return t[0].rank === t[1].rank && t[0].rank === t[2].rank
        ? (t.splice(3, 1), t.splice(3, 1), i.splice(3, 1), i.splice(3, 1), !0)
        : t[1].rank === t[2].rank && t[1].rank === t[3].rank
        ? (t.splice(0, 1), t.splice(3, 1), i.splice(0, 1), i.splice(3, 1), !0)
        : t[2].rank === t[3].rank &&
          t[2].rank === t[4].rank &&
          (t.splice(0, 1), t.splice(0, 1), i.splice(0, 1), i.splice(0, 1), !0);
    }),
    (this._checkForTwoPair = function () {
      return t[0].rank === t[1].rank && t[2].rank === t[3].rank
        ? (t.splice(4, 1), i.splice(4, 1), !0)
        : t[1].rank === t[2].rank && t[3].rank === t[4].rank
        ? (t.splice(0, 1), i.splice(0, 1), !0)
        : t[0].rank === t[1].rank &&
          t[3].rank === t[4].rank &&
          (t.splice(2, 1), i.splice(2, 1), !0);
    }),
    (this._checkForOnePair = function () {
      for (var e = 0; 4 > e; e++)
        if (t[e].rank === t[e + 1].rank) {
          var n = t[e],
            r = t[e + 1];
          return (t = []).push(n), t.push(r), (i = [e, e + 1]), !0;
        }
      return !1;
    }),
    (this._checkHighCard = function () {
      for (var e = !1, i = !1, n = 0; 5 > n; n++)
        t[n].rank === CARD_ACE && (e = !0), t[n].rank === CARD_KING && (i = !0);
      return !(!e || !i);
    }),
    (this._isFlush = function () {
      return (
        t[0].suit === t[1].suit &&
        t[0].suit === t[2].suit &&
        t[0].suit === t[3].suit &&
        t[0].suit === t[4].suit
      );
    }),
    (this._isRoyalStraight = function () {
      return (
        t[0].rank === CARD_TEN &&
        t[1].rank === CARD_JACK &&
        t[2].rank === CARD_QUEEN &&
        t[3].rank === CARD_KING &&
        t[4].rank === CARD_ACE
      );
    }),
    (this._isStraight = function () {
      var e =
        t[0].rank + 1 === t[1].rank &&
        t[1].rank + 1 === t[2].rank &&
        t[2].rank + 1 === t[3].rank;
      return (
        !(!e || t[0].rank !== CARD_TWO || t[4].rank !== CARD_ACE) ||
        !(!e || t[3].rank + 1 !== t[4].rank)
      );
    }),
    (this.compareRank = function (e, t) {
      return e.rank < t.rank ? -1 : e.rank > t.rank ? 1 : 0;
    }),
    (this.getWinnerComparingHands = function (e, t, i, n) {
      if (i !== n)
        return n === NO_HAND ? "dealer_no_hand" : i > n ? "dealer" : "player";
      switch (i) {
        case STRAIGHT_FLUSH:
          return e[0].rank > t[0].rank
            ? "player"
            : e[0].rank < t[0].rank
            ? "dealer"
            : "standoff";
        case FOUR_OF_A_KIND:
          return e[1].rank > t[1].rank
            ? "player"
            : e[1].rank < t[1].rank
            ? "dealer"
            : "standoff";
        case FULL_HOUSE:
          return e[2].rank > t[2].rank
            ? "player"
            : e[2].rank < t[2].rank
            ? "dealer"
            : "standoff";
        case FLUSH:
          for (n = 0; n < t.length; n++)
            if (e[n].rank !== t[n].rank)
              return e[n].rank > t[n].rank ? "player" : "dealer";
        case STRAIGHT:
          return e[4].rank > t[4].rank
            ? "player"
            : e[4].rank < t[4].rank
            ? "dealer"
            : "standoff";
        case THREE_OF_A_KIND:
          return e[2].rank > t[2].rank
            ? "player"
            : e[2].rank < t[2].rank
            ? "dealer"
            : "standoff";
        case TWO_PAIR:
          for (i = 0, n = e.length - 1; 0 < n; n--)
            if (e[n].rank === e[n - 1].rank) {
              i = e[n].rank;
              break;
            }
          for (aa = 0, n = t.length - 1; 0 < n; n--)
            if (t[n].rank === t[n - 1].rank) {
              aa = t[n].rank;
              break;
            }
          return i > aa
            ? "player"
            : i < aa
            ? "dealer"
            : e[0].rank > t[0].rank
            ? "player"
            : e[0].rank < t[0].rank
            ? "dealer"
            : e[3].rank > t[3].rank
            ? "palyer"
            : e[3].rank < t[3].rank
            ? "dealer"
            : "standoff";
        case ONE_PAIR:
          let r = "0";
          for (n = i = 0; n < e.length - 1; n++)
            if (e[n].rank === e[n + 1].rank) {
              i = e[n].rank;
              break;
            }
          for (n = aa = 0; n < t.length - 1; n++)
            if (t[n].rank === t[n + 1].rank) {
              aa = t[n].rank;
              break;
            }
          for (n = 0; n < t.length - 1; n++) {
            e[n].rank !== t[n].rank && (r = e[n].rank > t[n].rank ? "1" : "-1");
            break;
          }
          return i > aa
            ? "player"
            : i < aa
            ? "dealer"
            : "1" === r
            ? "player"
            : "-1" === r
            ? "dealer"
            : "standoff";
        case HIGH_CARD:
          for (n = 2; n < t.length; n++)
            if (e[n].rank !== t[n].rank)
              return e[n].rank > t[n].rank ? "player" : "dealer";
        case NO_HAND:
          return "dealer_no_hand";
        default:
          return "standoff";
      }
    });
}
function CAnimText(e, t, i) {
  var n, r, a;
  (this._init = function (e, t) {
    ((a = new createjs.Container()).visible = !1),
      (a.x = e),
      (a.y = t),
      s.addChild(a);
    var i = s_oSpriteLibrary.getSprite("win_bg"),
      n = createBitmap(i);
    a.addChild(n),
      (r = new CTLText(
        a,
        5,
        5,
        i.width - 10,
        i.height - 10,
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
      ));
  }),
    (this.show = function (e, t, i) {
      (n = e),
        r.refreshText(i),
        (a.x = e.x),
        (a.y = e.y),
        (a.visible = !0),
        createjs.Tween.get(a).to(
          { x: t.x, y: t.y },
          1e3,
          createjs.Ease.elasticOut
        );
    }),
    (this.hide = function () {
      (a.visible = !1), (a.x = n.x), (a.y = n.y);
    }),
    (this.isVisible = function () {
      return a.visible;
    });
  var s = i;
  this._init(e, t);
}
function CPaytablePanel(e, t, i) {
  var n, r, a;
  (this._init = function (e, t) {
    (n = e),
      (r = t),
      ((a = new createjs.Container()).x = n),
      (a.y = r),
      s.addChild(a);
    var i = s_oSpriteLibrary.getSprite("paytable_bg"),
      o = createBitmap(i);
    a.addChild(o);
    for (var l = (o = ""), c = 0; c < PAYOUT_MULT.length; c++)
      (o += TEXT_EVALUATOR[c]),
        (l += PAYOUT_MULT[c] + ":1"),
        c < PAYOUT_MULT.length - 1 && ((o += "\n"), (l += "\n"));
    new CTLText(
      a,
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
      o,
      !0,
      !0,
      !0,
      !1
    ),
      new CTLText(
        a,
        i.width - 90,
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
  }),
    (this.refreshButtonPos = function (e, t) {
      a.x = n - e;
    });
  var s = i;
  this._init(e, t);
}
function CHelpCursor(e, t, i, n) {
  var r, a;
  (this._init = function (e, t, i) {
    (r = e),
      ((a = createBitmap(i)).visible = !1),
      (a.x = e),
      (a.y = t),
      n.addChild(a);
  }),
    (this.show = function (e) {
      0 > e && (a.scaleX *= -1),
        this._move(e, r + 30 * e, 600),
        (a.visible = !0);
    }),
    (this.hide = function () {
      createjs.Tween.removeTweens(a), (a.x = r), (a.visible = !1);
    }),
    (this._move = function (e, t, i) {
      var n = 0 < e ? createjs.Ease.cubicIn : createjs.Ease.cubicOut;
      createjs.Tween.get(a)
        .to({ x: t }, i, n)
        .call(function () {
          (e *= -1), s._move(e, t + 15 * e, 400);
        });
    }),
    (this.isVisible = function () {
      return a.visible;
    });
  var s = this;
  this._init(e, t, i);
}
function CCreditsPanel() {
  var e, t, i, n, r;
  (this.makeText = function (e, t, i, n, r, a) {
    let s = new createjs.Text(e, t + n, i);
    return (
      (s.textAlign = "left"),
      (s.textBaseline = "alphabetic"),
      (s.x = r),
      (s.y = a),
      s
    );
  }),
    (this._init = function () {
      (r = new createjs.Container()),
        s_oStage.addChild(r),
        (e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"))),
        r.addChild(e),
        (n = new createjs.Shape()),
        r.addChild(n);
      var a = s_oSpriteLibrary.getSprite("but_exit");
      (t = new CGfxButton(
        CANVAS_WIDTH - 230,
        a.height / 2 + 10,
        a,
        r
      )).addEventListener(ON_MOUSE_UP, this.unload, this),
        (i = this.makeText("Rule", "35px ", "#ff0", FONT_GAME_2, 200, 360)),
        r.addChild(i),
        (text =
          "The player antes, and is then dealt a five-card hand; the dealer is also dealt five cards of which only one is exposed. \nThe player now either folds, losing his ante, or bets an additional amount equal to exactly twice the ante. \nThe dealer then reveals his remaining four cards. If the dealer's hand is not Ace-King or better, \nthe player is paid even money on the ante and nothing (i.e., a push) on the bet. \nIf the dealer's hand is Ace-King or better it is said to \"qualify\" (for play against the player). \nIn that case if the dealer's hand is better than the player's, the player's ante and bet are collected by the house. \nIf the dealer's qualifying hand is worse than the player's hand, \nthe player is paid even money on the ante and an amount on the bet according to the player's hand as the \"Table\" of game screen.\n(Max payout for \"Straight Flush\" is $3000,  \"Royal Flush\" is $5000.)"),
        (i = this.makeText(text, "20px ", "#fff", FONT_GAME_3, 200, 390)),
        r.addChild(i);
    }),
    (this.unload = function () {
      t.unload(), (t = null), s_oStage.removeChild(r);
    }),
    (this._onLogoButRelease = function () {
      window.open("http://www.codethislab.com/index.php?&l=en", "_blank");
    }),
    this._init();
}
function CTLText(e, t, i, n, r, a, s, o, l, c, _, u, h, d, f, S, p) {
  (this._oContainer = e),
    (this._x = t),
    (this._y = i),
    (this._iWidth = n),
    (this._iHeight = r),
    (this._bMultiline = S),
    (this._iFontSize = this._iStartingFontSize = a),
    (this._szAlign = s),
    (this._szColor = o),
    (this._szFont = l),
    (this._iPaddingH = _),
    (this._iPaddingV = u),
    (this._bVerticalAlign = f),
    (this._bFitText = d),
    (this._bDebug = p),
    (this._oDebugShape = null),
    (this._fLineHeightFactor = c),
    (this._oText = null),
    h && this.__createText(h);
}
function extractHostname(e) {
  return (e = (e =
    -1 < e.indexOf("://") ? e.split("/")[2] : e.split("/")[0]).split(
    ":"
  )[0]).split("?")[0];
}
function extractRootDomain(e) {
  var t = (e = extractHostname(e)).split("."),
    i = t.length;
  return 2 < i && (e = t[i - 2] + "." + t[i - 1]), e;
}
CTLText.prototype = {
  constructor: CTLText,
  __autofit: function () {
    if (this._bFitText) {
      for (
        var e = this._iStartingFontSize;
        (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV ||
          this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) &&
        (e--,
        (this._oText.font = e + "px " + this._szFont),
        (this._oText.lineHeight = Math.round(e * this._fLineHeightFactor)),
        this.__updateY(),
        this.__verticalAlign(),
        !(8 > e));

      );
      this._iFontSize = e;
    }
  },
  __verticalAlign: function () {
    if (this._bVerticalAlign) {
      var e = this._oText.getBounds().height;
      this._oText.y -= (e - this._iHeight) / 2 + this._iPaddingV;
    }
  },
  __updateY: function () {
    switch (
      ((this._oText.y = this._y + this._iPaddingV), this._oText.textBaseline)
    ) {
      case "middle":
        this._oText.y +=
          this._oText.lineHeight / 2 +
          (this._iFontSize * this._fLineHeightFactor - this._iFontSize);
    }
  },
  __createText: function (e) {
    switch (
      (this._bDebug &&
        ((this._oDebugShape = new createjs.Shape()),
        this._oDebugShape.graphics
          .beginFill("rgba(255,0,0,0.5)")
          .drawRect(this._x, this._y, this._iWidth, this._iHeight),
        this._oContainer.addChild(this._oDebugShape)),
      (this._oText = new createjs.Text(
        e,
        this._iFontSize + "px " + this._szFont,
        this._szColor
      )),
      (this._oText.textBaseline = "middle"),
      (this._oText.lineHeight = Math.round(
        this._iFontSize * this._fLineHeightFactor
      )),
      (this._oText.textAlign = this._szAlign),
      (this._oText.lineWidth = this._bMultiline
        ? this._iWidth - 2 * this._iPaddingH
        : null),
      this._szAlign)
    ) {
      case "center":
        this._oText.x = this._x + this._iWidth / 2;
        break;
      case "left":
        this._oText.x = this._x + this._iPaddingH;
        break;
      case "right":
        this._oText.x = this._x + this._iWidth - this._iPaddingH;
    }
    this._oContainer.addChild(this._oText), this.refreshText(e);
  },
  setX: function (e) {
    this._x = this._oText.x = e;
  },
  setY: function (e) {
    this._y = this._oText.y = e;
  },
  setVerticalAlign: function (e) {
    this._bVerticalAlign = e;
  },
  setOutline: function (e) {
    null !== this._oText && (this._oText.outline = e);
  },
  setShadow: function (e, t, i, n) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(e, t, i, n));
  },
  setColor: function (e) {
    this._oText.color = e;
  },
  setAlpha: function (e) {
    this._oText.alpha = e;
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
  refreshText: function (e) {
    "" === e && (e = " "),
      null === this._oText && this.__createText(e),
      (this._oText.text = e),
      (this._oText.font = this._iStartingFontSize + "px " + this._szFont),
      (this._oText.lineHeight = Math.round(
        this._iStartingFontSize * this._fLineHeightFactor
      )),
      this.__autofit(),
      this.__updateY(),
      this.__verticalAlign();
  },
};
var getClosestTop = function () {
    var e = window,
      t = !1;
    try {
      for (; e.parent.document !== e.document; ) {
        if (!e.parent.document) {
          t = !0;
          break;
        }
        e = e.parent;
      }
    } catch (e) {
      t = !0;
    }
    return { topFrame: e, err: t };
  },
  getBestPageUrl = function (e) {
    var t = e.topFrame,
      i = "";
    if (e.err)
      try {
        try {
          i = window.top.location.href;
        } catch (e) {
          var n = window.location.ancestorOrigins;
          i = n[n.length - 1];
        }
      } catch (e) {
        i = t.document.referrer;
      }
    else i = t.location.href;
    return i;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var e = extractRootDomain(PAGE_URL),
      t = [
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
      i = 0;
    i < t.length;
    i++
  )
    if (t[i] === e) return !0;
  return !0;
}
