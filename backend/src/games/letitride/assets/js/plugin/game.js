(ST.gameMode = 4),
  (ST.gameNumCount = 40),
  (ST.gameNumFont = "20px"),
  (ST.gameBallCount = 20),
  (ST.gameSelCount = 3),
  (ST.gameFreeTickets0 = 3),
  (ST.gameFreeTickets1 = 0),
  parent.getFreeTickets && (ST.gameTickets = parent.getFreeTickets());
try {
  "" == ST.gameTickets
    ? (ST.gameTickets = 1 * ST.gameFreeTickets0)
    : (ST.gameTickets = parseInt(ST.gameTickets));
} catch (e) {
  ST.gameTickets = 1 * ST.gameFreeTickets1;
}
switch (
  ((ST.gameResultStatus = ""),
  GetURLParameter("mId") && (ST.gameMode = parseInt(GetURLParameter("mId"))),
  ST.gameMode)
) {
  case 1:
    ST.gameNumCount = 40;
    break;
  case 2:
    ST.gameNumCount = 65;
    break;
  case 3:
    ST.gameNumCount = 85;
    break;
  case 4:
    (ST.gameNumCount = 100), (ST.gameNumFont = "16px");
}
(ST.x = 0),
  (ST.y = 1),
  (ST.w = 2),
  (ST.h = 3),
  (ST.cx = 4),
  (ST.cy = 5),
  (ST.pgId = 4),
  (ST.title = 5),
  (ST.txtCss = 6),
  (ST.images = 6),
  (ST.animations = 7),
  (ST.pgStart = 0),
  (ST.pgDescription = 1),
  (ST.pgMain = 2),
  (ST.pgResult = 3),
  (ST.bgStart = 0),
  (ST.bgMain = 1),
  (ST.bgMainMask = 2),
  (ST.bgMainReadyStart = 3),
  (ST.bgCoins = 4),
  (ST.bgDevice = 5),
  (ST.bgMainBanner = 6),
  (ST.bgMainTxt = 7),
  (ST.bgMainCardframe0 = 8),
  (ST.bgMainCardframe1 = 9),
  (ST.bgMainCardframe2 = 10),
  (ST.bgMainCardframe3 = 11),
  (ST.bgMainCardframe4 = 12),
  (ST.bgMainActive = 13),
  (ST.bgResultWin = 14),
  (ST.bgResultLose = 15),
  (ST.btnStart = 0),
  (ST.btnOk = 1),
  (ST.btnRebet = 2),
  (ST.btnClear = 3),
  (ST.btnDeal = 4),
  (ST.btnLetit = 5),
  (ST.btnPull = 6),
  (ST.btnBonus = 7),
  (ST.btnBet0 = 8),
  (ST.btnBet1 = 9),
  (ST.btnBet2 = 10),
  (ST.btnLeft = 11),
  (ST.btnRight = 12),
  (ST.btnHelp = 13),
  (ST.btnSpeaker = 14),
  (ST.btnContinue = 15),
  (ST.btnExit = 16),
  (ST.btnYES = 17),
  (ST.btnNO = 18),
  (ST.coin0010 = 0),
  (ST.coin0025 = 1),
  (ST.coin0050 = 2),
  (ST.coin0100 = 3),
  (ST.coin0500 = 4),
  (ST.coin1000 = 5),
  (ST.coin2500 = 6),
  (ST.coin5000 = 7),
  (ST.txtHelp = 0),
  (ST.txtBetInfo = 1),
  (ST.txtBalance = 2),
  (ST.txtPayoutInfo = 3);
var GameHds = [];
for (i = 0; i < 100; i++) GameHds[i] = {};
console.log('GameHds :>> ', GameHds);
var rootPrefix = "./assets/images/game",
  imgData = [
    { name: "hd0_bgLogo", path: rootPrefix + "_1/logo.png" },
    { name: "hd0_bg0", path: rootPrefix + "_1/bg0.jpg" },
    { name: "hd0_bg1", path: rootPrefix + "_1/bg1.jpg" },
    { name: "hd0_bg2", path: rootPrefix + "_1/bgmask.png" },
    { name: "hd0_bg3", path: rootPrefix + "_1/bg4.png" },
    { name: "hd0_bg4", path: rootPrefix + "_1/bg-top.png" },
    { name: "hd0_bg5", path: rootPrefix + "_1/bg-top.png" },
    { name: "hd0_bg6", path: rootPrefix + "_1/bg-banner.png" },
    { name: "hd0_bg7", path: rootPrefix + "_1/bg-txt.png" },
    { name: "hd0_bg8", path: rootPrefix + "_1/bg-cardframe.png" },
    { name: "hd0_bg9", path: rootPrefix + "_1/bg-cardframe.png" },
    { name: "hd0_bg10", path: rootPrefix + "_1/bg-cardframe.png" },
    { name: "hd0_bg11", path: rootPrefix + "_1/bg-cardframe.png" },
    { name: "hd0_bg12", path: rootPrefix + "_1/bg-cardframe.png" },
    { name: "hd0_bg13", path: rootPrefix + "_1/btn-active.png" },
    { name: "hd0_bg14", path: rootPrefix + "_1/bg-results.png" },
    { name: "hd0_bg15", path: rootPrefix + "_1/bg-results.png" },
    { name: "hd0_b0", path: rootPrefix + "_1/b1.png" },
    { name: "hd0_b1", path: rootPrefix + "_1/b1.png" },
    { name: "hd0_b2", path: rootPrefix + "_1/btn-mains.png" },
    { name: "hd0_b3", path: rootPrefix + "_1/btn-mains.png" },
    { name: "hd0_b4", path: rootPrefix + "_1/btn-mains.png" },
    { name: "hd0_b5", path: rootPrefix + "_1/btn-mains.png" },
    { name: "hd0_b6", path: rootPrefix + "_1/btn-mains.png" },
    { name: "hd0_b7", path: rootPrefix + "_1/btn-betarea.png" },
    { name: "hd0_b8", path: rootPrefix + "_1/btn-betarea.png" },
    { name: "hd0_b9", path: rootPrefix + "_1/btn-betarea.png" },
    { name: "hd0_b10", path: rootPrefix + "_1/btn-betarea.png" },
    { name: "hd0_b11", path: rootPrefix + "_1/btn-left.png" },
    { name: "hd0_b12", path: rootPrefix + "_1/btn-left.png" },
    { name: "hd0_b13", path: rootPrefix + "_1/btn-help.png" },
    { name: "hd0_b14", path: rootPrefix + "_1/btn-speaker.png" },
    { name: "hd0_b15", path: rootPrefix + "_1/b1.png" },
    { name: "hd0_b16", path: rootPrefix + "_1/btn-close.png" },
    { name: "hd0_b17", path: rootPrefix + "_1/b0.png" },
    { name: "hd0_b18", path: rootPrefix + "_1/b0.png" },
    { name: "hd0_c0", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c1", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c2", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c3", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c4", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c5", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c6", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c7", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c8", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_c9", path: rootPrefix + "_1/btn-coins.png" },
    { name: "hd0_p0", path: rootPrefix + "_1/bg-cards.png" },
    { name: "hd0_p1", path: rootPrefix + "_1/bg-cards.png" },
    { name: "hd0_p2", path: rootPrefix + "_1/bg-cards.png" },
    { name: "hd0_p3", path: rootPrefix + "_1/bg-cards.png" },
    { name: "hd0_p4", path: rootPrefix + "_1/bg-cards.png" },
  ],
  imgPosData = [
    {
      images: ["btn-mains"],
      size: [0, 0, 948, 982, 1, 1],
      framerate: 24,
      frames: [
        [1, 1, 216, 254, 0, 108, 127, 216, 254],
        [218, 1, 216, 254, 0, 108, 127, 216, 254],
        [435, 1, 216, 254, 0, 108, 127, 216, 254],
        [216, 511, 182, 215, 0, 91, 107.5, 182, 215],
        [399, 511, 182, 215, 0, 91, 107.5, 182, 215],
        [582, 511, 182, 215, 0, 91, 107.5, 182, 215],
        [435, 256, 214, 254, 0, 107, 127, 214, 254],
        [650, 256, 214, 254, 0, 107, 127, 214, 254],
        [1, 511, 214, 254, 0, 107, 127, 214, 254],
        [652, 1, 216, 254, 0, 108, 127, 216, 254],
        [1, 256, 216, 254, 0, 108, 127, 216, 254],
        [218, 256, 216, 254, 0, 108, 127, 216, 254],
        [765, 511, 182, 215, 0, 91, 107.5, 182, 215],
        [216, 727, 182, 215, 0, 91, 107.5, 182, 215],
        [1, 766, 182, 215, 0, 91, 107.5, 182, 215],
        [399, 727, 182, 215, 0, 91, 107.5, 182, 215],
        [582, 727, 182, 215, 0, 91, 107.5, 182, 215],
        [765, 727, 182, 215, 0, 91, 107.5, 182, 215],
      ],
      animations: {
        letit11: { frames: [0], next: null },
        letit: { frames: [1], next: null },
        letit1: { frames: [2], next: null },
        clear11: { frames: [3], next: null },
        clear: { frames: [4], next: null },
        clear1: { frames: [5], next: null },
        deal11: { frames: [6], next: null },
        deal: { frames: [7], next: null },
        deal1: { frames: [8], next: null },
        pull11: { frames: [9], next: null },
        pull: { frames: [10], next: null },
        pull1: { frames: [11], next: null },
        rebet11: { frames: [12], next: null },
        rebet: { frames: [13], next: null },
        rebet1: { frames: [14], next: null },
        undo11: { frames: [15], next: null },
        undo: { frames: [16], next: null },
        undo1: { frames: [17], next: null },
      },
    },
    {
      images: ["btn-left"],
      size: [0, 0, 92, 285, 1, 1],
      framerate: 24,
      frames: [
        [1, 193, 90, 91, 0, 45, 45.5, 90, 91, 0, 0],
        [1, 1, 90, 94, 0, 45, 47, 90, 94, 0, 0],
        [1, 97, 90, 94, 0, 45, 47, 90, 94, 0, 0],
      ],
      animations: {
        n: { frames: [0], next: null },
        n1: { frames: [1], next: null },
        n11: { frames: [2], next: null },
      },
    },
    {
      images: ["btn-right"],
      size: [0, 0, 92, 285, -1, 1],
      framerate: 24,
      frames: [
        [1, 193, 90, 91, 0, 45, 45.5, 90, 91, 0, 0],
        [1, 1, 90, 94, 0, 45, 47, 90, 94, 0, 0],
        [1, 97, 90, 94, 0, 45, 47, 90, 94, 0, 0],
      ],
      animations: {
        n: { frames: [0], next: null },
        n1: { frames: [1], next: null },
        n11: { frames: [2], next: null },
      },
    },
    {
      images: ["btn-coins"],
      framerate: 24,
      size: [0, 0, 384, 309, 1, 1],
      frames: [
        [1, 1, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [1, 104, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [97, 1, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [97, 104, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [97, 207, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [193, 1, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [289, 1, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [193, 104, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [193, 207, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [289, 104, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
        [1, 207, 94, 101, 0, 47, 50.5, 94, 101, 0, 0],
      ],
      animations: {
        0: { frames: [0], next: null },
        1: { frames: [1], next: null },
        2: { frames: [2], next: null },
        3: { frames: [3], next: null },
        4: { frames: [4], next: null },
        5: { frames: [5], next: null },
        6: { frames: [6], next: null },
        7: { frames: [7], next: null },
        8: { frames: [8], next: null },
        9: { frames: [9], next: null },
        10: { frames: [10], next: null },
      },
    },
    {
      images: ["btn-betarea"],
      framerate: 24,
      size: [0, 0, 213, 213, 1, 1],
      frames: [
        [1, 1, 113, 113, 0, 56.5, 56.5, 113, 113],
        [1, 116, 96, 96, 0, 48, 48, 96, 96],
        [1, 116, 96, 96, 0, 48, 48, 96, 96],
        [1, 116, 96, 96, 0, 48, 48, 96, 96],
      ],
      animations: {
        bonus: { frames: [0], next: null },
        cash: { frames: [1], next: null },
        one: { frames: [2], next: null },
        two: { frames: [3], next: null },
      },
    },
    {
      images: ["btn-help"],
      framerate: 24,
      size: [0, 0, 213, 213, 1, 1],
      frames: [
        [2, 79, 69, 73, 0, 34.5, 35.5, 69, 73, 0, 1],
        [2, 2, 69, 75, 0, 34.5, 37.5, 69, 75, 0, 0],
        [73, 79, 69, 75, 0, 34.5, 37.5, 69, 75, 0, 0],
      ],
      animations: {
        help: { frames: [0], next: null },
        help1: { frames: [1], next: null },
        help11: { frames: [2], next: null },
      },
    },
    {
      images: ["bg-cards"],
      framerate: 24,
      size: [0, 0, 1475, 1006, 1, 1],
      frames: [
        [1, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [135, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [135, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [135, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [135, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [135, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [269, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [269, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [269, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [269, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [403, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [403, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [537, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [537, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [537, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [537, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [537, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [671, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [269, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [403, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [403, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [403, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [671, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [805, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [805, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [805, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [805, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [939, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [939, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [939, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [939, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [671, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [671, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [671, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [805, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1341, 403, 132, 200, 0, 0, 0, 132, 200, 0, 0],
        [939, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1073, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1207, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1207, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1207, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1207, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1207, 805, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1341, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1341, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1073, 1, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1073, 202, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1073, 403, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1073, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
        [1341, 604, 133, 200, 0, 0, 0, 133, 200, 0, 0],
      ],
      animations: {
        4: {
          frames: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0],
          next: null,
        },
        3: {
          frames: [13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 13],
          next: null,
        },
        1: {
          frames: [26, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 26],
          next: null,
        },
        5: { frames: [39], next: null },
        0: { frames: [53], next: null },
        2: {
          frames: [40, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 40],
          next: null,
        },
      },
    },
    {
      images: ["bg-top"],
      framerate: 24,
      size: [0, 0, 554, 640, 1, 1],
      frames: [
        [1, 320, 534, 319, 0, 267, 159.5, 534, 319, 0, 0],
        [1, 1, 552, 318, 0, 276, 159, 552, 318, 0, 0],
      ],
      animations: {
        device: { frames: [0], next: null },
        coins: { frames: [1], next: null },
      },
    },
    {
      images: ["bg-result"],
      framerate: 24,
      size: [0, 0, 999, 504, 1, 1],
      frames: [
        [697, 1, 301, 24, 0, 150.5, 12, 301, 24, 0, 0],
        [697, 43, 300, 31, 0, 150, 15.5, 300, 31, 0, 0],
        [697, 27, 301, 14, 0, 150.5, 7, 301, 14, 0, 0],
        [697, 76, 26, 37, 0, 13, 18.5, 26, 37, 0, 0],
        [1, 253, 694, 250, 0, 347, 125, 694, 250, 0, 0],
        [1, 1, 694, 250, 0, 347, 125, 694, 250, 0, 0],
      ],
      animations: {
        "panel-bottom": { frames: [0], next: null },
        "panel-middle": { frames: [1], next: null },
        "panel-top": { frames: [2], next: null },
        "panel-card": { frames: [3], next: null },
        "lose-red": { frames: [4], next: null },
        "win-purple": { frames: [5], next: null },
      },
    },
  ];
function navConfig(e) {
  _GCONF.preProcessing(function () {
    console.log('GameHds :>> ', GameHds);
    GameHds[0].configGame(), showPart(e + "");
  });
}
var selectedNum = [0, 0, 0, 0, 0, 0, 0],
  passedNum = [0, 0, 0, 0, 0, 0, 0],
  btnClicked = 0;
function pauseAudio() {
  scriptSound.pause();
}
function restoreAudio() {
  scriptSound.play();
}
!(function (e) {
  $(".overLayer");
  var t,
    a,
    n,
    r,
    i,
    o,
    s,
    g,
    l,
    T,
    S,
    b,
    p,
    d,
    m,
    u,
    c,
    h,
    f,
    _,
    x,
    P,
    C,
    M,
    w,
    y,
    F,
    v,
    B = 1;
  (e.configGame = function () {
    (t = []),
      (a = [
        [0, 0, 0, 0, ST.pgStart],
        [0, 0, 0, 0, ST.pgMain],
        [0, 0, 0, 0, ST.pgDescription],
        [210, 200, 0, 0, ST.pgDescription],
        [690, -240, 0, 0, ST.pgMain, "", "bg-top", "coins"],
        [1340, -30, 0, 0, ST.pgMain, "", "bg-top", "device"],
        [525, 325, 873, 183, ST.pgMain],
        [330, 450, 1305, 393, ST.pgMain],
        [675, 570, 150, 230, ST.pgMain],
        [885, 570, 150, 230, ST.pgMain],
        [1090, 570, 150, 230, ST.pgMain],
        [775, 150, 150, 230, ST.pgMain],
        [1e3, 150, 150, 230, ST.pgMain],
        [925, 1010, 75, 40, ST.pgMain],
        [617, 330, 443, 183, ST.pgResult, "", "bg-result", "win-purple"],
        [617, 330, 443, 183, ST.pgResult, "", "bg-result", "lose-red"],
      ]),
      (r = [100, 50, 250, 170]),
      (i = "0"),
      [""],
      1,
      (o = []),
      (s = [
        [825, 500, 277, 100, ST.pgStart, "Start Game"],
        [825, 960, 277, 80, ST.pgDescription, "OK"],
        [1315, 856, 150, 180, ST.pgMain, "REBET", "btn-mains", "rebet"],
        [1440, 856, 150, 180, ST.pgMain, "CLEAR", "btn-mains", "clear"],
        [1560, 820, 180, 220, ST.pgMain, "DEAL", "btn-mains", "deal"],
        [1480, 825, 180, 220, ST.pgMain, "LET IT RIDE", "btn-mains", "letit"],
        [1320, 825, 180, 220, ST.pgMain, "PULL", "btn-mains", "pull"],
        [905, 745, 100, 100, ST.pgMain, "3 CARD BONUS", "btn-betarea", "bonus"],
        [200, 800, 100, 100, ST.pgMain, "$", "btn-betarea", "cash"],
        [360, 800, 100, 100, ST.pgMain, "1", "btn-betarea", "one"],
        [520, 800, 100, 100, ST.pgMain, "2", "btn-betarea", "two"],
        [590, 960, 70, 90, ST.pgMain, "", "btn-left", "n"],
        [1245, 950, 70, 90, ST.pgMain, "", "btn-right", "n"],
        [220, 960, 80, 80, ST.pgMain, "", "btn-help", "help"],
        [320, 960, 80, 80, ST.pgMain, "", "btn-help", "help"],
        [825, 850, 277, 80, ST.pgMain, "Continue"],
        [1750, 80, 80, 80, ST.pgMain, "", "btn-help", "help"],
        [770, 600, 150, 60, ST.pgResult, "YES"],
        [1e3, 600, 150, 60, ST.pgResult, "NO"],
      ]),
      (g = []),
      (l = [
        [
          250,
          240,
          1420,
          700,
          ST.pgDescription,
          '<span><center>Game Rules</center></span><br/><br/>  Each player puts up three bets of identical size and is dealt three cards; two more cards are dealt face-down in front of the dealer. After examining his three cards, the player may elect to have one bet returned or to "let it ride". One of the down cards is then turned over, and then the player may again elect to have one bet returned -- this election is independent of the prior election. Up to this point players are not allowed to disclose their three-card hands to each other. Now the second down card is turned over; the player\'s three cards and the two common cards in front of the dealer comprise a five-card poker hand. The player is paid on each of his one, two or three remaining bets\naccording to the following schedule:<br/><br/>     Pair of 10s or better         ' +
            _GCONF.TensOrBetter +
            ":1<br/>     Two pair                      " +
            _GCONF.TwoPair +
            ":1<br/>     Three of a kind               " +
            _GCONF.ThreeOfKind +
            ":1<br/>     Straight                      " +
            _GCONF.Straight +
            ":1<br/>     Flush                         " +
            _GCONF.Flush +
            ":1<br/>     Full House                   " +
            _GCONF.FullHouse +
            ":1<br/>     Four of a Kind               " +
            _GCONF.FourOfKind +
            ":1<br/>     Straight Flush              " +
            _GCONF.StraightFlush +
            ":1 (Maximum $" +
            _GCONF.StraightFlushMax +
            ")<br/>     Royal Flush                " +
            _GCONF.RoyalFlush +
            ":1 (Maximum $" +
            _GCONF.RoyalFlushMax +
            ')<br/><br/>  Being able to have up to two of the three bets returned by the dealer is logically equivalent to starting with one bet and being allowed to put out up to two more. I surmise that the game is structured as it is because it would otherwise be too easy for players to covertly press bets -- the bet circles on the layout are quite close together.<br/>  The optimal strategy for this game is as follows. On the first three cards, take back a bet unless one holds:<br/><br/>     --a pair of 10s or better, or three of a kind; or<br/>     --three cards to a straight flush, provided:<br/>         -contiguous and 543 or higher, or<br/>         -one "hole" and at least one card is 10 or higher, or<br/>         -two "holes" and at least two cards are 10 or higher.<br/><br/>  On the fourth card, take back a bet unless one has:<br/><br/>     --a pair of 10s or better, two pair, or three or four of a kind; or<br/>     --a four-flush; or<br/>     --an open-ended straight including a 10 or higher.<br/><br/>  The following bets are optional, i.e., expected return = 1.000...<br/><br/>     --an open-ended straight not including a 10 or higher; or<br/>     --all cards 10 or higher (an inside A-to-10 straight).',
          {
            textAlign: "left",
            color: "#000",
            padding: 20,
            lineHeight: 1.2,
            fontWeight: "bold",
            fontSize: 26,
            fontFamily: "Courier, mono, serif",
          },
        ],
        [
          200,
          470,
          460,
          300,
          ST.pgMain,
          "Current Balance : <br/><br/>Please Bet on Here!<br/>   Min Bet: $" +
            _GCONF.MinBet +
            "<br/>   Max Bet: $" +
            _GCONF.MaxBet,
          { fontSize: 30, textAlign: "left", lineHeight: 1.5 },
        ],
        [
          500,
          470,
          200,
          50,
          ST.pgMain,
          "$" + _GCONF.CurrentBalance,
          { fontSize: 30, textAlign: "left", lineHeight: 1.5 },
        ],
        [
          1420,
          505,
          200,
          400,
          ST.pgMain,
          _GCONF.RoyalFlush +
            ":1  <br/>" +
            _GCONF.StraightFlush +
            ":1  <br/>" +
            _GCONF.FourOfKind +
            ":1  <br/>" +
            _GCONF.FullHouse +
            ":1  <br/>" +
            _GCONF.Flush +
            ":1  <br/>" +
            _GCONF.Straight +
            ":1  <br/>" +
            _GCONF.ThreeOfKind +
            ":1  <br/>" +
            _GCONF.TwoPair +
            ":1  <br/>" +
            _GCONF.TensOrBetter +
            ":1  <br/><br/>",
          { fontSize: 20, textAlign: "right", lineHeight: 1.4 },
        ],
      ]),
      (T = []),
      (S = 0),
      (b = 0),
      (p = [
        [500, 950, 120, 120, ST.pgMain, "10", "btn-coins", "2"],
        [685, 950, 120, 120, ST.pgMain, "25", "btn-coins", "3"],
        [810, 950, 120, 120, ST.pgMain, "50", "btn-coins", "4"],
        [915, 880, 120, 120, ST.pgMain, "1", "btn-coins", "0"],
        [1020, 950, 120, 120, ST.pgMain, "5", "btn-coins", "1"],
        [1145, 950, 120, 120, ST.pgMain, "10", "btn-coins", "2"],
        [1300, 950, 120, 120, ST.pgMain, "25", "btn-coins", "3"],
        [1300, 950, 120, 120, ST.pgMain, "50", "btn-coins", "4"],
        [1300, 950, 120, 120, ST.pgMain, "1", "btn-coins", "0"],
        [1300, 950, 120, 120, ST.pgMain, "5", "btn-coins", "1"],
      ]),
      (u = [660, 860, 600, 230, ST.pgMain]),
      (c = []),
      (h = [
        [675, 570, 150, 230, ST.pgMain],
        [885, 570, 150, 230, ST.pgMain],
        [1090, 570, 150, 230, ST.pgMain],
        [775, 150, 150, 230, ST.pgMain],
        [1e3, 150, 150, 230, ST.pgMain],
      ]),
      (f = [
        [1440, 80, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1440, 80, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1440, 80, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1440, 80, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1440, 80, 150, 230, ST.pgMain, "", "bg-cards", 0],
      ]),
      (_ = [
        [565, 570, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [725, 570, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [885, 570, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1045, 570, 150, 230, ST.pgMain, "", "bg-cards", 0],
        [1205, 570, 150, 230, ST.pgMain, "", "bg-cards", 0],
      ]),
      (x = []),
      [1, 2, 3, 4],
      (P = [0, 0, 0, 0, 0]),
      (C = [0, 0, 0, 0, 0]),
      [],
      [],
      "parent",
      0,
      [],
      $(".overLayer"),
      !1,
      !0,
      (M = 0),
      0,
      2e3,
      (w = 500),
      (y = 300),
      (F = 0),
      (v = []);
    for (var e = 1; e <= ST.gameNumCount; e++) v.push(e);
    randomSort(v);
  }),
    (e.initGame = function () {
      screenApi.isFullscreen() && screenApi.toggleFullscreen();
      for (var T = 0; T < a.length; T++)
        (t[T] = appendBackgroundPiece("bgArr" + T, getImgPath(i, "bg" + T), {
          x: a[T][ST.x],
          y: a[T][ST.y],
          image: a[T][ST.images],
          elem: a[T][ST.animations],
        })),
          t[T].attr({ "data-page-id": a[T][ST.pgId] }),
          a[T][ST.w] > 0 &&
            setPositionPiece(
              t[T],
              a[T][ST.x],
              a[T][ST.y],
              a[T][ST.w],
              a[T][ST.h]
            ),
          a[T][ST.pgId] != ST.pgStart && hideTag(t[T]),
          T == ST.bgMainMask && t[T].css({ "pointer-events": "auto" });
      (n = appendBackground(
        "logoIcon",
        getImgPath(i, "bgLogo"),
        r[ST.x],
        r[ST.y]
      )),
        setPosition(n, r[ST.x], r[ST.y], r[ST.w], r[ST.h]);
      for (T = 0; T < s.length; T++)
        (o[T] = appendButtonPiece("btnArr" + T, getImgPath(i, "b" + T), {
          x: s[T][ST.x],
          y: s[T][ST.y],
          image: s[T][ST.images],
          elem: s[T][ST.animations],
        })),
          o[T].attr({ "data-page-id": s[T][ST.pgId] }),
          s[T][ST.w] > 0 &&
            setPositionPiece(
              o[T],
              s[T][ST.x],
              s[T][ST.y],
              s[T][ST.w],
              s[T][ST.h]
            ),
          setBtnTitlePiece(o[T], s[T][ST.title]),
          T >= ST.btnBonus && T <= ST.btnBet2
            ? (o[T].find(".btn-title").css({ color: "#fff", "font-size": 50 }),
              setBtnTooltipPiece(o[T], ""))
            : T >= ST.btnRebet && T <= ST.btnDeal
            ? (o[T].attr("data-status", 0),
              o[T].find(".btn-title").css({
                "align-items": "flex-end",
                "padding-bottom": 50,
                "font-size": 24,
              }))
            : T >= ST.btnLetit &&
              T <= ST.btnPull &&
              (o[T].attr("data-status", 0),
              o[T].find(".btn-title").css({
                "align-items": "flex-end",
                "padding-bottom": 60,
                "font-size": 24,
              })),
          s[T][ST.pgId] != ST.pgStart && hideTag(o[T]);
      o[ST.btnBonus].remove();
      for (T = 0; T < l.length; T++) {
        (g[T] = appendTag("txtArr" + T)),
          setPosition(g[T], l[T][ST.x], l[T][ST.y], l[T][ST.w], l[T][ST.h]);
        var m = l[T][ST.title].replace(/\s/g, "&nbsp;");
        (m = m.replace(/-/g, "&#x2011;")),
          setTagTitle(g[T], m, "22px", "white"),
          g[T].attr({
            "data-tag-type": "textLabel",
            "data-page-id": l[T][ST.pgId],
          }),
          l[T][ST.txtCss] && g[T].css(l[T][ST.txtCss]);
      }
      e.makeCoinSelector(),
        o.forEach(function (a, r) {
          a.off(downEvent),
            a.off(upEvent),
            a.off(overEvent),
            a.off(outEvent),
            a
              .on(downEvent, function (e) {
                "0" != a.attr("data-status") &&
                  (clickTag(a),
                  (isStarShowNeeded = !0),
                  (mousePos = getCursorPos(e, $("#content"))));
              })
              .on(upEvent, function (l) {
                "0" != a.attr("data-status") &&
                  (clearTimeout(_tmr1),
                  (_tmr1 = setTimeout(function () {
                    isStarShowNeeded = !1;
                    parseInt(a.attr("data-sel"));
                    switch (r) {
                      case ST.btnExit:
                        showTagsOnTop([
                          t[ST.bgMainMask],
                          t[ST.bgResultLose],
                          o[ST.btnYES],
                          o[ST.btnNO],
                        ]),
                          showTag(t[ST.bgMainMask], 300),
                          showTag(t[ST.bgResultLose], 300),
                          showTag(o[ST.btnYES], 300),
                          showTag(o[ST.btnNO], 300),
                          setBtnTitlePiece(
                            t[ST.bgResultLose],
                            "Do you want exit game?"
                          ),
                          t[ST.bgResultLose]
                            .find(".btn-title")
                            .css({ fontSize: 38 });
                        break;
                      case ST.btnYES:
                        e.configGame(),
                          e.initGame();
                        //   _GCONF.exitGame(_GCONF.CurrentBalance);
                        break;
                      case ST.btnNO:
                        hideTag(t[ST.bgMainMask], 300),
                          hideTag(t[ST.bgResultLose], 300),
                          hideTag(o[ST.btnYES], 300),
                          hideTag(o[ST.btnNO], 300);
                        break;
                      case ST.btnStart:
                        (S = 0),
                          B &&
                            effecSoundPlay(
                              "./assets/sound/confirmbutton_3.mp3"
                            ),
                          hideTag($('div[data-page-id="' + ST.pgStart + '"]')),
                          hideTag(
                            $('div[data-page-id="' + ST.pgDescription + '"]')
                          ),
                          hideTag($('div[data-page-id="' + ST.pgResult + '"]')),
                          showTag(
                            $('div[data-page-id="' + ST.pgMain + '"]'),
                            300
                          ),
                          hideTag(o[ST.btnLetit]),
                          hideTag(o[ST.btnPull]),
                          hideTag(o[ST.btnContinue]);
                        break;
                      case ST.btnSpeaker:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_3.mp3"),
                          0 === B
                            ? ((B = 1),
                              scriptSound.play(),
                              a.removeAttr("data-sel"),
                              changeImagePiece(a, getImgPath(i, "b" + r), {
                                image: s[r][ST.images],
                                elem: s[r][ST.animations] + "",
                              }))
                            : ((B = 0),
                              scriptSound.pause(),
                              a.attr("data-sel", 1),
                              changeImagePiece(a, getImgPath(i, "b" + r), {
                                image: s[r][ST.images],
                                elem: s[r][ST.animations] + "11",
                              }));
                        break;
                      case ST.btnHelp:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_3.mp3"),
                          showTagsOnTop([
                            $('div[data-page-id="' + ST.pgDescription + '"]'),
                          ]),
                          showTagsOnTop([
                            t[ST.bgMainMask],
                            t[ST.bgMainReadyStart],
                            o[ST.btnOk],
                            g[ST.txtHelp],
                            n,
                          ]),
                          showTag(
                            $('div[data-page-id="' + ST.pgDescription + '"]'),
                            300
                          );
                        break;
                      case ST.btnOk:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_3.mp3"),
                          hideTag(
                            $('div[data-page-id="' + ST.pgDescription + '"]'),
                            300
                          );
                        break;
                      case ST.btnBet0:
                      case ST.btnBet1:
                      case ST.btnBet2:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_2.mp3");
                        var l = p.filter(function (e) {
                          return (
                            e[ST.animations] ==
                            ((p.length - b) % (p.length / 2)) + ""
                          );
                        })[0];
                        if (S + parseFloat(l[ST.title]) > _GCONF.MaxBet / 3)
                          return;
                        (S += parseFloat(l[ST.title])), e.refreshBetAmount();
                        break;
                      case ST.btnClear:
                        B &&
                          effecSoundPlay("./assets/sound/cancelbutton_1.mp3");
                        for (var T = ST.btnBet0; T <= ST.btnBet2; T++)
                          o[T].find("div[data-tag-type]").remove();
                        (S = 0), e.refreshBetAmount();
                        break;
                      case ST.btnDeal:
                        (F = 0),
                          B &&
                            effecSoundPlay(
                              "./assets/sound/confirmbutton_1.mp3"
                            ),
                          o[ST.btnBet0].attr("data-status", 0),
                          o[ST.btnBet1].attr("data-status", 0),
                          o[ST.btnBet2].attr("data-status", 0),
                          o[ST.btnDeal].attr("data-status", 0),
                          clearTimeout(_tmr),
                          (_GCONF.CurrentBalance -= 3 * S),
                          g[ST.txtBalance].html("$" + _GCONF.CurrentBalance),
                          hideTag(o[ST.btnRebet]),
                          hideTag(o[ST.btnClear]),
                          hideTag(o[ST.btnDeal]),
                          (_tmr = setTimeout(function () {
                            e.generateCards(function () {
                              e.animateCards(0, function () {
                                e.showCards(0, function () {
                                  showTag(o[ST.btnPull]),
                                    showTag(o[ST.btnLetit]),
                                    o[ST.btnLetit].attr("data-status", 1),
                                    o[ST.btnPull].attr("data-status", 1);
                                });
                              });
                            });
                          }, 500)),
                          (d = S),
                          e.changeCoinSelectorStatus(!1);
                        break;
                      case ST.btnRebet:
                        B &&
                          effecSoundPlay("./assets/sound/cancelbutton_1.mp3"),
                          (S = d),
                          e.refreshBetAmount(),
                          e.changeCoinSelectorStatus(!0),
                          o[ST.btnRebet].attr("data-status", 0);
                        break;
                      case ST.btnPull:
                        F++;
                        var m = ST.btnBet2;
                        P[3] > 0 && (m = ST.btnBet1),
                          o[m].find(".btn-tooltip").html(""),
                          o[m].find("div[data-tag-type]").remove(),
                          (_GCONF.CurrentBalance += S),
                          g[ST.txtBalance].html("$" + _GCONF.CurrentBalance);
                      case ST.btnLetit:
                        r == ST.btnPull
                          ? B &&
                            effecSoundPlay("./assets/sound/cancelbutton_1.mp3")
                          : B &&
                            effecSoundPlay(
                              "./assets/sound/confirmbutton_1.mp3"
                            ),
                          randomSort(C);
                        var u = 3;
                        P[3] > 0 && (u = 4),
                          (P[u] = C[0]),
                          C.splice(0, 1),
                          e.showCards(parseInt(u), function () {
                            4 == u &&
                              (o[ST.btnLetit].attr("data-status", 0),
                              o[ST.btnPull].attr("data-status", 0),
                              hideTag(o[ST.btnPull]),
                              hideTag(o[ST.btnLetit]),
                              showTag(o[ST.btnRebet]),
                              showTag(o[ST.btnClear]),
                              showTag(o[ST.btnDeal]),
                              e.checkPayout(P));
                          });
                        break;
                      case ST.btnContinue:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_3.mp3"),
                          hideTag(t[ST.bgMainMask], 300),
                          hideTag(o[ST.btnContinue], 300),
                          hideTag(t[ST.bgResultWin], 300),
                          hideTag(t[ST.bgResultLose], 300);
                        for (T = 0; T < h.length; T++) hideTag(c[T], 300);
                        o[ST.btnBet0].attr("data-status", 1),
                          o[ST.btnBet1].attr("data-status", 1),
                          o[ST.btnBet2].attr("data-status", 1),
                          o[ST.btnClear].attr("data-status", 0),
                          o[ST.btnDeal].attr("data-status", 0),
                          o[ST.btnRebet].attr("data-status", 1);
                        for (T = ST.btnBet0; T <= ST.btnBet2; T++)
                          o[T].find("div[data-tag-type]").remove();
                        (S = 0),
                          e.refreshBetAmount(),
                          e.changeCoinSelectorStatus(!0),
                          clearTimeout(_tmr),
                          (_tmr = setTimeout(function () {
                            g[ST.txtBalance].html("$" + _GCONF.CurrentBalance);
                          }, 500));
                        break;
                      case ST.btnLeft:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_1.mp3"),
                          ++b >= p.length && (b -= p.length),
                          e.selectCoin(b, 0);
                        break;
                      case ST.btnRight:
                        B &&
                          effecSoundPlay("./assets/sound/confirmbutton_1.mp3"),
                          --b < 0 && (b += p.length),
                          e.selectCoin(b, p.length - 1);
                    }
                  }, 50)));
              })
              .on(overEvent, function () {
                a.attr("data-sel") ||
                  changeImagePiece(a, getImgPath(i, "b" + r), {
                    image: s[r][ST.images],
                    elem: s[r][ST.animations] + "1",
                  });
              })
              .on(outEvent, function () {
                a.attr("data-sel") ||
                  changeImagePiece(a, getImgPath(i, "b" + r), {
                    image: s[r][ST.images],
                    elem: s[r][ST.animations],
                  });
              });
        });
    }),
    (e.makeCoinSelector = function () {
      (m = appendTag("coinContainer")),
        setPosition(m, u[ST.x], u[ST.y], u[ST.w], u[ST.h]),
        m.attr({ "data-page-id": u[ST.pgId], "data-tag-type": "btnContainer" }),
        m.css({ overflow: "hidden" });
      for (var e = 0; e < p.length; e++) {
        var t = (e + b) % p.length;
        (T[e] = appendButtonPiece("coinBtnArr" + e, getImgPath(i, "c" + t), {
          x: p[e][ST.x] - u[ST.x],
          y: p[e][ST.y] - u[ST.y],
          image: p[t][ST.images],
          elem: p[t][ST.animations],
        })),
          T[e].attr({
            "data-page-id": p[t][ST.pgId],
            "data-coin-id": t,
            "data-pos-id": e,
          }),
          p[t][ST.w] > 0 &&
            setPositionPiece(
              T[e],
              p[e][ST.x] - u[ST.x],
              p[e][ST.y] - u[ST.y],
              p[t][ST.w],
              p[t][ST.h]
            ),
          setBtnTitlePiece(T[e], p[t][ST.title]),
          T[e]
            .find(".btn-title")
            .css({ color: "#000", "font-size": 34, "padding-bottom": 10 }),
          m.append(T[e]),
          hideTag(T[e]);
      }
      T.forEach(function (e, t) {
        e.off("click"),
          e.on("click", function () {
            switch (e.attr("data-pos-id")) {
              case "1":
                clearTimeout(_tmr),
                  (_tmr = setTimeout(function () {
                    o[ST.btnLeft].trigger(upEvent);
                  }, 100));
              case "2":
                o[ST.btnLeft].trigger(upEvent);
                break;
              case "5":
                clearTimeout(_tmr),
                  (_tmr = setTimeout(function () {
                    o[ST.btnRight].trigger(upEvent);
                  }, 100));
              case "4":
                o[ST.btnRight].trigger(upEvent);
            }
          });
      });
    }),
    (e.changeCoinSelectorStatus = function (e) {
      null == e && (e = !1);
      for (
        var a = [t[ST.bgMainActive], o[ST.btnLeft], o[ST.btnRight]], n = 0;
        n < T.length;
        n++
      )
        a.push(T[n]);
      for (n = 0; n < a.length; n++)
        a[n].css({
          "pointer-events": e ? "auto" : "none",
          opacity: e ? 1 : 0.5,
        });
    }),
    (e.selectCoin = function (e, t) {
      for (var a = 0; a < p.length; a++) {
        var n = T[a],
          r = (a + e) % p.length;
        r == t ? setTransition([n], 0) : setTransition([n], 200),
          n.attr("data-pos-id", r),
          setPositionPiece(
            n,
            p[r][ST.x] - u[ST.x],
            p[r][ST.y] - u[ST.y],
            p[r][ST.w],
            p[r][ST.h]
          );
      }
    }),
    (e.refreshBetAmount = function () {
      for (
        var e = p.filter(function (e) {
            return e[ST.animations] == ((p.length - b) % (p.length / 2)) + "";
          })[0],
          t = ST.btnBet0;
        t <= ST.btnBet2;
        t++
      )
        if (0 == S) o[t].find(".btn-tooltip").html("");
        else {
          o[t].find(".btn-tooltip").html("$" + Math.round(100 * S) / 100);
          var a = appendBackgroundPiece("betBtnCoin" + t, getImgPath(i, "c0"), {
            x: 0,
            y: 0,
            image: e[ST.images],
            elem: e[ST.animations],
          });
          setPositionPiece(a, 0, -2, 70, 70),
            setBtnTitlePiece(a, e[ST.title]),
            a.find(".btn-title").css({ color: "#000" }),
            o[t].append(a);
        }
      S > 0
        ? o[ST.btnClear].attr("data-status", 1)
        : o[ST.btnClear].attr("data-status", 0),
        S >= _GCONF.MinBet / 3
          ? o[ST.btnDeal].attr("data-status", 1)
          : o[ST.btnDeal].attr("data-status", 0),
        3 * S > _GCONF.CurrentBalance
          ? (o[ST.btnDeal].attr("data-status", 0),
            g[ST.txtBalance].css({ color: "#f00" }))
          : g[ST.txtBalance].css({ color: "#fff" });
    }),
    (e.generateCards = function (e) {
      for (var t = 0; t < h.length; t++)
        (c[t] = appendBackgroundPiece("cardArr" + t, getImgPath(i, "p" + t), {
          x: f[t][ST.x],
          y: f[t][ST.y],
          image: f[t][ST.images],
          elem: f[t][ST.animations],
        })),
          c[t].attr({ "data-card": 0, "data-page-id": ST.pgMain }),
          setPositionPiece(
            c[t],
            f[t][ST.x],
            f[t][ST.y],
            f[t][ST.w],
            f[t][ST.h],
            55
          ),
          hideTag(c[t]);
      setTransition(c, w), (x = []);
      for (t = 0; t < 52; t++) {
        var a = 100 * parseInt(t / 13 + 1) + ((t % 13) + 2);
        x.push(a);
      }
      C = [0, 0, 0, 0, -1];
      let n = new Random().integer(1, 100) / 100;
      if (_GCONF.WinPercent > n)
        // dealer win
        do {
          randomSort(x), (C = []);
          for (t = 0; t < 5; t++) C.push(x[t]);
          C.sort(card_sort_fn);
        } while (eval_hand(C) < 16);
      else
        // player win
        do {
          randomSort(x), (C = []);
          for (t = 0; t < 5; t++) C.push(x[t]);
          C.sort(card_sort_fn);
        } while (eval_hand(C) >= 16);
      randomSort(C), (P = [0, 0, 0, 0, 0]);
      for (t = 0; t < 3; t++)
        (P[t] = C[0]), c[t].attr("data-card", P[t]), C.splice(0, 1);
      e && e();
    }),
    (e.animateCards = function (t, a) {
      0 == t && B && effecSoundPlay("assets/sound/cards.mp3"),
        clearTimeout(M),
        t >= 5
          ? a && a()
          : (showTag(c[t]),
            (M = setTimeout(function () {
              setPositionPiece(
                c[t],
                h[t][ST.x] + 8,
                h[t][ST.y] + 15,
                f[t][ST.w],
                f[t][ST.h],
                0
              ),
                e.animateCards(t + 1, a);
            }, y)));
    }),
    (e.showCards = function (t, a) {
      if ((clearTimeout(M), t >= 5)) a && a();
      else {
        if ((setTransition([c[t]], 0), 0 == P[t]))
          changeImagePiece(c[t], getImgPath(i, "p" + t), {
            image: f[t][ST.images],
            elem: f[t][ST.animations],
          });
        else {
          var n = parseInt(P[t] / 100),
            r = P[t] % 100;
          changeImagePiece(c[t], getImgPath(i, "p" + t), {
            image: f[t][ST.images],
            elem: n,
            id: r,
          });
        }
        M = setTimeout(function () {
          setTransition([c[t]], w), e.showCards(t + 1, a);
        }, y);
      }
    }),
    (e.checkPayout = function (e) {
      (e = e.filter(function (e) {
        return e > -1;
      })).sort(card_sort_fn),
        (GAME.player_val = eval_hand(e));
      var a = payoutMultiplier();
      showTagsOnTop([
        t[ST.bgMainMask],
        t[ST.bgResultWin],
        t[ST.bgResultLose],
        o[ST.btnContinue],
      ]);
      var n = S * (3 - F) * a.multiplier,
        r = ST.bgResultWin,
        i = "$";
      a.multiplier > 0
        ? (a.multiplier == _GCONF.RoyalFlush &&
            n > _GCONF.RoyalFlushMax &&
            (n = _GCONF.RoyalFlushMax),
          a.multiplier == _GCONF.StraightFlush &&
            n > _GCONF.StraightFlushMax &&
            (n = _GCONF.StraightFlushMax),
          (isStarShowNeeded = !0),
          (mousePos = { x: _wPos.w / 2, y: _wPos.h / 2 - 100 }),
          setTimeout(function () {
            (isStarShowNeeded = !1), showTag(o[ST.btnContinue], 300);
          }, 2e3))
        : ((r = ST.bgResultLose), showTag(o[ST.btnContinue], 300), (i = "-$")),
        (a.score = n),
        (a.curBetAmount = S),
        (a.pullCount = F),
        n > 0 && (_GCONF.CurrentBalance += n),
        (a.curBalance = _GCONF.CurrentBalance),
        _GCONF.payoutProcessing(a),
        showTag(t[r], 300),
        setBtnTitlePiece(
          t[r],
          '<span style="font-size: 55px;">' +
            a.message +
            '</span><span style="font-size: 50px;">SCORE : ' +
            i +
            Math.abs(n) +
            "</span>"
        ),
        t[r].find(".btn-title").css({ "flex-direction": "column" }),
        showTagsOnTop(c),
        showTag(t[ST.bgMainMask], 200),
        setTransition(c, 300),
        clearTimeout(_tmr),
        (_tmr = setTimeout(function () {
          for (var e = 0; e < c.length; e++)
            setPositionPiece(
              c[e],
              _[e][ST.x] + 8,
              _[e][ST.y] + 15,
              f[e][ST.w],
              f[e][ST.h],
              0
            );
        }, 100));
    }),
    (e.showResult = function () {});
})(GameHds[0]);
