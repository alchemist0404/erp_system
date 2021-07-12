//////////////////////////////////////////

var _tmr, _tmr1, _tmr2;
var _ww, _hh;
var _wPos, _vPos; // video position
var _scaleX, _scaleY;
var _isStretchScreen;
var baseURL;
var isStarShowNeeded = false;
var mousePos = {x: 0, y: 0};

function initVariables() {
    _tmr = 0;
    _ww = window.innerWidth;
    _hh = window.innerHeight;
    _wPos = {x: 0, y: 0, w: 1920, h: 1080};
    _vPos = {x: 0, y: 0, w: 1280, h: 720}; // video position
    _scaleX = _ww / _wPos.w;
    _scaleY = _hh / _wPos.h;
    _isStretchScreen = false;
}

initVariables();

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}

var osStatus = getMobileOperatingSystem();

function getBrowser() {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name: 'IE ', version: (tem[1] || '')};
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return {name: 'Opera', version: tem[1]};
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function b64toBlob(b64Data, contentType, sliceSize) {

    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    //var byteCharacters = atob(b64Data);//IE10+
    var byteCharacters = Base64.decode(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

function getCursorPos(evt, elem) {
    evt = evt || window.event;
    evt = evt.originalEvent;
    if (osStatus == 'Android' || osStatus == 'iOS') {
        if (('changedTouches' in evt)) evt = evt.changedTouches[0];
    }
    // var oL = 0, oT = 0;
    var oL = 0, oT = 0;
    if (elem && elem[0].offsetParent) {
        var a = elem[0].getBoundingClientRect();
        oL = a.left;
        oT = a.top;
    }
    /*consider any page scrolling:*/
    // x = x - window.pageXOffset;
    // y = y - window.pageYOffset;

    return {
        x: parseInt(((evt.pageX) - oL) / _scaleX),
        y: parseInt(((evt.pageY) - oT) / _scaleY)
    };

}

function getElemCursorPos(evt, elem) {
    evt = evt || window.event;
    evt = evt.originalEvent;
    if (osStatus === 'Android' || osStatus === 'iOS') {
        if (('changedTouches' in evt)) evt = evt.changedTouches[0];
    }
    var oL = 0, oT = 0;
    return {
        x: evt.clientX - _wPos.x,
        y: evt.clientY - _wPos.y
    };

}

var downEvent = 'mousedown';
var upEvent = 'mouseup';
var moveEvent = 'mousemove';
var overEvent = 'mouseover';
var outEvent = 'mouseout';
if (osStatus == 'Android' || osStatus == 'iOS') {
    downEvent = 'touchstart';
    upEvent = 'touchend';
    moveEvent = 'touchmove';
    overEvent = 'touchmove';
    outEvent = 'touchmove';
}

var effectSound = new Audio();
var scriptSound = new Audio();
var soundOldCallback;
var soundOldCallback1;
var isAudioInitFailed = true;
var isScriptInitFailed = true;

effectSound.addEventListener('play', function (e) {
    if (!isAudioInitFailed) return;
    isAudioInitFailed = false;
    console.log('EffectSound Initialized');
});

scriptSound.addEventListener('play', function (e) {
    if (!isScriptInitFailed) return;
    isScriptInitFailed = false;
    console.log('ScriptSound Initialized');
});

var playEffect = function () {
    effectSound.play();
};

var playScript = function () {
    scriptSound.play();
};

function effecSoundPlay(filename, callback) {
    effectSound.pause();
    // effectSound.currentTime = 0;
    if (soundOldCallback != undefined)
        effectSound.removeEventListener('ended', soundOldCallback);
    if (filename) {
        effectSound.src = filename;
        effectSound.load();
        playEffect();
    }
    if (callback) {
        soundOldCallback = callback;
        effectSound.addEventListener('ended', callback);
    }
}

function scriptSoundPlay(filename, callback) {
    scriptSound.pause();
    // effectSound.currentTime = 0;
    if (soundOldCallback1 != undefined)
        scriptSound.removeEventListener('ended', soundOldCallback1);
    if (filename) {
        scriptSound.src = filename;
        scriptSound.load();
        playScript();
    }
    if (callback) {
        soundOldCallback1 = callback;
    }
    scriptSound.addEventListener('ended', function () {
        scriptSound.play();
        if (callback) callback();
    });
}

var isAudioInit = false;
var _downEvt = 'mousedown';
if (osStatus == 'iOS' || osStatus == 'Android') _downEvt = 'touchstart';
document.addEventListener(_downEvt, function () {
    if (isAudioInitFailed) {
        effecSoundPlay("./assets/sound/loading.mp3");
    }
    if (isScriptInitFailed) {
        scriptSoundPlay("./assets/sound/music.mp3");
    }
});

var vplayer;
var vpWidth = 0;
var vpHeight = 0;
var isVideoInitialized = false;

function videoPlayerConfig() {
    /*vplayer = videojs('videoPlayer', {
        controls: true,
        width: _wPos.w,
        height: _wPos.h,
        preload: 'auto',
        autoplay: false,
        loop: false,
    }, function () {
        vplayer.on('play', function (e) {
            isVideoInitialized = true;
        });
        vplayer.on("pause", function (e) {
        });
        vplayer.on("ended", function (e) {
            vplayer.src({type: 'video/mp4', src: 'video/loading.mp4'});
            vplayer.load();
        });
    });*/
    screenApi.init();
}

function playVideo() {
    if (!isVideoInitialized) vplayer.play();
}

var isPlayingAudio = function (audio) {
    return audio
        && audio.currentTime > 0
        && !audio.paused
        && !audio.ended
        && audio.readyState > 2;
};

function switchVideo(b) {
    gIsVideo = b;
    try {
        GameClass.sounds.clean();
        if (isPlayingAudio(titleAudio)) titleAudio.pause();
        if (isPlayingAudio(effectSound)) effectSound.pause();///when game
        if (isPlayingAudio(scriptSound)) scriptSound.pause();
        console.log('Sound Paused');
    } catch (err) {
    }
    if (b) {
        //vplayer.width(vpWidth);//video-switch
        //vplayer.height(vpHeight);
        $('video').show();
        $('.videoContent').show();
        $('.gameContent').hide();

    } else {
        $('.gameContent').show();
        $('.videoContent').hide();
        return;
        vplayer.pause();
        vplayer.src({type: 'video/mp4', src: './assets/video/loading.mp4'});
        vplayer.load();
        vplayer.width(1);//huawei-pms
        vplayer.height(1);
    }
}

var isPlayingVideo = false;

function showVideo(vfile, onComplete) {
    vplayer.pause();
    vplayer.src({type: 'video/mp4', src: vfile});
    vplayer.load();
    vplayer.play();
    isPlayingVideo = true;
    var callback = function () {
        clearTimeout(_tmr);
        _tmr = setTimeout(function () {
            closeBtn.remove();
            vplayer.pause();
            vplayer.src({type: 'video/mp4', src: './assets/video/loading.mp4'});
            vplayer.load();
            // vplayer.play();
            switchVideo(false);
            vplayer.off("ended", arguments.callee);
            vplayer.off("timeupdate", arguments.callee);
            if (onComplete) {
                // if (screenApi.isFullscreen()) screenApi.toggleFullscreen();
                onComplete();
            }
        }, 5);
    };
    vplayer.on("ended", function (e) {
        callback();
    });
    vplayer.on("timeupdate", function (e) {
        if (vplayer.currentTime > vplayer.duration - 0.2) callback();
    });
    switchVideo(true);
    var closeBtn = appendButton('videoClose', './assets/images/close.png');
    setPosition(closeBtn, 1190 * _scaleX, 30 * _scaleY, 50 * _scaleX, 50 * _scaleY);
    closeBtn.css('z-index', 10);
    $('.content').append(closeBtn);
    closeBtn.on(downEvent, function (e) {
        clickTag(closeBtn);
    }).on(upEvent, function (e) {
        clearTimeout(_tmr);
        _tmr = setTimeout(function () {
            callback();
        })
    })

}

function getUrlFromInputFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        if (callback) callback(reader.result);
    };
    if (file) {
        reader.readAsDataURL(file);//reads the data as a URL
        return;
    }
    if (callback) callback('');
}

function getFilenameFromURL(str) {
    if (str == '') return '';
    var str = str.split('/');
    if (str[str.length - 1] == '') return str[str.length - 2].toLowerCase();
    return str[str.length - 1].toLowerCase();
}

function getFiletypeFromURL(str) {
    if (str == '') return '';
    var str = str.split('.');
    return str[str.length - 1].toLowerCase();
}

function removeExtFromFilename(str) {
    if (str == '') return '';
    var str = str.split('.');
    if (str.length == 1) return str[0].toLowerCase();
    return str[str.length - 2].toLowerCase();
}

var totalTagData = [];

var ST = {
    text: 'text',
    link: '',
    image: 2,
    audio: 3,
    video: 4,

    addMedia: 1,
    addText: 2,
    addLink: 3,

    leftButton: 0,
    middleButton: 1,
    rightButton: 2,

    ctrlLT: 0,
    ctrlLB: 1,
    ctrlRB: 2,
    rotate: 3,
    delete: 4,
    move: 5,
    zoom: 6,
    resize: 7
};

var tagItem = {
    id: 'img1',
    type: ST.image,
    no: 0,
    content: 'imagePath',
    scale: 1,
    x: 0,
    y: 0
}

function getImgPath(gId, name, _imgData) {
    if (_imgData == undefined) _imgData = imgData;
    var imgPath = _imgData.filter(function (a) {
        return (a.name == 'hd' + gId + '_' + name);
    });
    if (imgPath.length == 0) return '';
    return imgPath[0].path;
}

function getPosition(elem) {
    if (!elem) return {x: 0, y: 0, w: 0, h: 0};
    return {
        x: Math.floor((elem[0].getBoundingClientRect().left - _wPos.x) / _scaleX),
        y: Math.floor((elem[0].getBoundingClientRect().top - _wPos.y) / _scaleY),
        w: Math.floor(elem[0].getBoundingClientRect().width / _scaleX),
        h: Math.floor(elem[0].getBoundingClientRect().height / _scaleY)
    };
}

function getElemPosition(elem, parent) {
    if (!elem) return {x: 0, y: 0, w: 0, h: 0};
    return {
        x: Math.floor(elem[0].offsetLeft),
        y: Math.floor(elem[0].offsetTop),
        w: Math.floor(elem[0].offsetWidth),
        h: Math.floor(elem[0].offsetHeight)
    };
}

function setPosition(elem, x, y, w, h, isShow) {
    if (elem == undefined) return;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (w != undefined) {
        elem.css({width: w});
        elem.find('img').css({width: w});
    }
    if (h != undefined) {
        elem.css({height: h});
        elem.find('img').css({height: h});
    }
    if (isShow == undefined) isShow = true;
    elem.css({left: x, top: y});
    if (isShow) elem.css({opacity: 1});
    else elem.css({opacity: 0});
}

function getDeltaPosFromCenter(pos, center, rot) {
    if (rot == undefined) rot = 0;
    rot = rot * Math.PI / 180;
    var dx = center.x * 1;
    var dy = center.y * 1;
    var cornerR = Math.sqrt(dx * dx + dy * dy);
    var newPos = {};
    newPos.x = dx * cos(rot);
    newPos.y = dy / cos(rot);
    return newPos;
}

function setTransform(elem, _scale, _rotate, _hot, _center) {
    if (elem == undefined) return;
    if (_scale == undefined) _scale = 1;
    if (!_rotate || elem.attr('data-ctrl-type') == ST.rotate) _rotate = 0;
    var transStr = '';
    if (_hot != undefined) transStr += 'translate(' + (0 - _hot[0]) + 'px, ' + (0 - _hot[1]) + 'px) ';
    transStr += ' scale(' + _scale + ')';
    transStr += ' rotate(' + _rotate + 'deg)';
    elem.css({
        transform: transStr,
        '-webkit-transform': transStr,
        '-moz-transform': transStr,
        '-ms-transform': transStr,
        '-o-transform': transStr
    });
    if (_center != undefined) {
        elem.css({
            '-webkit-transform-origin': _center[0] + ' ' + _center[1] + '',
            '-moz-transform-origin': _center[0] + ' ' + _center[1] + '',
            '-ms-transform-origin': _center[0] + ' ' + _center[1] + '',
            '-o-transform-origin': _center[0] + ' ' + _center[1] + '',
            'transform-origin': _center[0] + ' ' + _center[1] + ''
        });
    }
}

function setClipPath(elem, path) {
    elem.css({
        'clip-path': path,
        '-webkit-clip-path': path,
        'pointer-events': 'none'
    })
}

function removeTag(elem) {
    elem.remove();
}

function showTag(elem, duration) {
    if (!duration) elem.show();
    else elem.fadeIn(duration);
}

function hideTag(elem, duration) {
    if (!duration) {
        elem.hide();
        elem.css({display: 'none'});
    } else elem.fadeOut(duration);
}

function isShowed(elem) {
    return elem.is(':visible');
}

var _clickTmr = 0;

function clickTag(elem, zoom) {
    var elemZoom = elem.attr('data-elemScale');
    if (!elemZoom) elemZoom = 1;
    else elemZoom *= 1;
    if (!zoom) zoom = 1.1;
    setTransition([elem], 100);
    setTransform(elem, elemZoom * zoom, elem.attr('data-rotate') * 1);
    // elem.find('img').css({transition: 'transform .2s'});
    // elem.find('img').css({transform: 'scale(' + zoom + ')'});
    clearTimeout(_clickTmr);
    _clickTmr = setTimeout(function () {
        setTransform(elem, elemZoom, elem.attr('data-rotate') * 1);
        setTransition([elem], 0);
        // elem.find('img').css({transform: 'scale(1)'});
    }, 200);
}

function changeImage(elem, newImgPath) {
    var isImg = (elem.find('img').length > 0);
    var imgType = getFiletypeFromURL(newImgPath);
    if (imgType == 'gif') newImgPath += '?p' + (new Date()).getTime();
    if (isImg) $(elem.find('img')[0]).attr('src', newImgPath);
    else elem.css({'background-image': 'url(' + newImgPath + ')'})
    return elem;
}

function appendTag(id, kind, isHidden) {
    if (kind == undefined) kind = 'div';
    if (isHidden == undefined) isHidden = true;
    if (isHidden) isHidden = 'style="display:none;"';
    else isHidden = '';
    var tag = '<' + kind + ' id="' + id + '" ' + isHidden + '></' + kind + '>';
    if ($('#' + id).length > 0) $('#' + id).remove();
    $('#game').append(tag);
    var elem = $('#' + id);
    elem.css({
        'word-break': 'break-word',
        'overflow-x': 'hidden',
        'overflow-y': 'auto'
    });
    return $('#' + id);
}

function setTagTitle(elem, title, fontsize, color, align, lineHeight) {
    if (fontsize == undefined) fontsize = '28px';
    if (color == undefined) color = '#000';
    if (align == undefined) align = 'center';
    if (lineHeight == undefined) lineHeight = elem[0].style.height;
    elem.css({
        'text-align': align,
        'line-height': lineHeight,
        'font-size': fontsize,
        'font-weight': 'bold',
        'color': color
    })
    elem.html(title);
    return elem;
}

function setTransition(objArr, delay) {
    if (delay == undefined) delay = 300;
    delay = delay / 1000;
    var cssStr = 'all ' + delay + 's linear';
    if (delay == 0) cssStr = 'none';
    for (var i = 0; i < objArr.length; i++) {
        objArr[i].css({
            '-webkit-transition': cssStr,
            '-moz-transition': cssStr,
            '-ms-transition': cssStr,
            '-o-transition': cssStr,
            'transition': cssStr
        });
        objArr[i].find('img').css({
            '-webkit-transition': cssStr,
            '-moz-transition': cssStr,
            '-ms-transition': cssStr,
            '-o-transition': cssStr,
            'transition': cssStr
        });
    }
}

function appendImagePiece(id, imgPath, posData, isBtn, isBackground) {
    var posSet = imgPosData.filter(function (a) {
        return a.images[0] == posData.image;
    });
    if (posSet.length == 0) return;
    posSet = posSet[0];
    var posItem = posSet.frames[posSet.animations[posData.elem].frames[0]];
    if (id == undefined || imgPath == undefined) return null;
    if (posData.x == undefined) posData.x = 0;
    if (posData.y == undefined) posData.y = 0;
    if (isBtn) {
        isBtn = 'pointer';
        isBackground = false;
    } else isBtn = 'default';
    if (isBackground == undefined) isBackground = true;
    if (isBackground) isBackground = 'none';
    else isBackground = 'auto';
    var tag = '<div id="' + id + '" ' +
        ' draggable="false" ' +
        ' ondragend="return false;" ' +
        ' ondragstart="return false;">' +
        '</div>';
    var target = $('#' + id);
    if (target.length > 0) $('#' + id).remove();
    $('#game').append(tag);
    target = $('#' + id);
    target.css({
        position: 'absolute',
        left: posData.x, top: posData.y,
        width: posItem[ST.w], height: posItem[ST.h],
        'background-image': 'url(' + imgPath + ')',
        'background-size': 'auto',
        'background-position': (-posItem[ST.x]) + 'px ' + (-posItem[ST.y]) + 'px',
        'background-repeat': 'no-repeat',
        cursor: isBtn,
        overflow: 'unset'
    });
    target.css({
        'pointer-events': isBackground
    });
    target.attr({
        'data-elemW': posItem[ST.w] * posSet.size[ST.cx],
        'data-elemH': posItem[ST.h],
    });
    return target;
}

function changeImagePiece(elem, imgPath, posData) {
    if (posData == undefined) return changeImage(elem, imgPath);
    if (!posData.id) posData.id = 0;
    var posSet = imgPosData.filter(function (a) {
        return a.images[0] == posData.image;
    });
    if (posSet.length == 0) return false;
    posSet = posSet[0];
    if (!posSet.animations[posData.elem]) return false;
    var posItem = posSet.frames[posSet.animations[posData.elem].frames[posData.id]];

    elem.css({
        width: posItem[ST.w], height: posItem[ST.h],
        'background-image': 'url(' + imgPath + ')',
        'background-position': (-posItem[ST.x]) + 'px ' + (-posItem[ST.y]) + 'px',
    });
    return elem;
}

function appendButtonPiece(id, imgPath, posData) {
    if (!posData.image) return appendButton(id, imgPath, posData.x, posData.y);
    var result = appendImagePiece(id, imgPath, posData, true);
    result.attr('data-tag-type', 'button');
    result.css({'cursor': 'pointer'});
    return result;
}

function appendBackgroundPiece(id, imgPath, posData) {
    if (!posData.image) return appendBackground(id, imgPath, posData.x, posData.y);
    var result = appendImagePiece(id, imgPath, posData, false, true);
    // result.find('img').css({
    //     'object-fit': 'none',
    //     'object-position': 'bottom'
    // });
    result.off('dragstart');
    result.off('select');
    result.off(downEvent);
    result.off(upEvent);
    result.off(moveEvent);
    result.off(overEvent);
    result.on('dragstart', function (e) {
        e.preventDefault();
    }).on('select', function (e) {
        e.preventDefault();
    }).on(downEvent, function (e) {
        e.preventDefault();
    }).on(moveEvent, function (e) {
        e.preventDefault();
    }).on(overEvent, function (e) {
        e.preventDefault();
    });
    result.attr('data-tag-type', 'background');
    return result;
}

function setPositionPiece(elem, x, y, w, h, rotate, isShow) {
    if (elem.find('img').length > 0) return setPosition(elem, x, y, w, h, isShow);
    if (elem == undefined) return;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (rotate == undefined) rotate = 0;
    var pScaleX = 1;
    var pScaleY = 1;
    if (w != undefined) pScaleX = 1 * (w / elem.attr('data-elemW')).toFixed(3);
    if (h != undefined) pScaleY = 1 * (h / elem.attr('data-elemH')).toFixed(3);
    if (isShow == undefined) isShow = true;
    elem.css({left: x, top: y});
    elem.attr('data-elemScale', pScaleX);
    setTransform(elem, pScaleX, rotate);//, 0, [0, 0], [0, 0]);
    if (isShow) elem.css({opacity: 1});
    else elem.css({opacity: 0});
}

function setBtnTitlePiece(elem, title) {
    var tag = '<div class="btn-title"' +
        '>' + title + '</div>'
    if (elem.find('img').length > 0) {
        elem.append(tag);
    } else {
        elem.html(tag);
    }
}

function setBtnTooltipPiece(elem, title) {
    var tag = '<div class="btn-tooltip"' +
        '>' + title + '</div>'
    var target = elem.find('.btn-tooltip');
    if (target.length > 0) target.remove();
    elem.append(tag);
}

function appendImage(id, imgPath, x, y, isBtn, isBackground) {
    if (id == undefined || imgPath == undefined) return null;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (isBtn) {
        isBtn = 'pointer';
        isBackground = false;
    } else isBtn = 'default';
    if (isBackground == undefined) isBackground = true;
    if (isBackground) isBackground = 'none';
    else isBackground = 'auto';
    // var tag = '<img id="' + id + '" src="' + imgPath + '" draggable="false">';
    var tag = '<div id="' + id + '" ' +
        ' draggable="false" ' +
        ' ondragend="return false;" ' +
        ' ondragstart="return false;">' +
        '<img src="' + imgPath + '" ' +
        ' draggable="false" ' +
        ' ondragend="return false;" ' +
        ' ondragstart="return false;"/>' +
        '</div>';
    if ($('#' + id).length > 0) $('#' + id).remove();
    $('#game').append(tag);
    $('#' + id).css({
        left: x, top: y, position: 'absolute',
        cursor: isBtn,
        overflow: 'unset'
    });
    $('#' + id).css({
        'pointer-events': isBackground
    });
    $('#' + id).find('img').css({
        position: 'relative', width: 'auto', height: 'auto',
        display: 'block',
        padding: 0, margin: 0
    });
    return $('#' + id);
}

function appendButton(id, imgPath, x, y) {
    var result = appendImage(id, imgPath, x, y, true);
    result.attr('data-tag-type', 'button');
    result.css({'cursor': 'pointer'});
    return result;
}

function appendBackground(id, imgPath, x, y) {
    var result = appendImage(id, imgPath, x, y, false, true);
    // result.find('img').css({
    //     'object-fit': 'none',
    //     'object-position': 'bottom'
    // });
    result.off('dragstart');
    result.off('select');
    result.off(downEvent);
    result.off(upEvent);
    result.off(moveEvent);
    result.off(overEvent);
    result.on('dragstart', function (e) {
        e.preventDefault();
    }).on('select', function (e) {
        e.preventDefault();
    }).on(downEvent, function (e) {
        e.preventDefault();
    }).on(moveEvent, function (e) {
        e.preventDefault();
    }).on(overEvent, function (e) {
        e.preventDefault();
    });
    result.attr('data-tag-type', 'background');
    return result;
}

function appendHotarea(id) {
    var parentElem = $('#' + id);
    var result = appendTag(id + 'Hot', 'canvas');
    parentElem.find('canvas').remove();
    parentElem.append(result);
    result.css({
        left: '0px', top: '0px',
        position: 'absolute'
    });
    var img = parentElem.find('img')[0];
    var canvas = parentElem.find('#' + id + 'Hot')[0];
    canvas.width = parentElem.attr('data-w') * 1;
    canvas.height = parentElem.attr('data-h') * 1;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    parentElem.attr('data-hot-type', 'hotarea');
    hideTag(result);
    return result;
}

function appendBackgroundChangeable(id, imgPath, x, y, w, h) {
    var result = appendTag(id);
    result.css({
        display: 'block',
        background: 'url(' + imgPath + ')',
        left: x,
        top: y,
        width: w,
        height: h,
        'background-size': 'auto',
        'background-position': 'bottom'
    });
    result.attr('data-tag-type', 'background');
    return result;
}

function appendSelector(id, imgPath, imgHover, list, x, y, w, h, callback) {
    var fadeTime = 200;
    if (id == undefined) return null;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (w == undefined) w = 'auto';
    if (h == undefined) h = 'auto';
    if (list == undefined) return null;

    var content_html = '<div id="' + id + '" class="selectorContainer">' + list[0] + '</div>' +
        '<div class="selectorContainerHover" data-id="' + id + '" style="width:1px;height:1px;opacity:0.01;pointer-events: none;">' + list[0] + '</div>' +
        '<div class="selectorList" data-id="' + id + '"></div>';
    if ($('#' + id).length > 0) $('#' + id).remove();
    $('#game').append(content_html);
    var selector = $('#' + id);
    var selectorList = $('.selectorList[data-id="' + id + '"]');
    $('.selectorContainerHover[data-id="' + id + '"]').css({background: 'url(' + imgHover + ')'});
    selector.css({
        background: 'url(' + imgPath + ')',
        left: x + 'px', top: y + 'px',
        width: w + 'px', height: h + 'px', 'line-height': h + 'px'
    });
    if (y + h * 6 > 720) y = 720 - h * 6;
    selectorList.css({left: x, top: y + h, width: w + 'px', height: 'auto', 'max-height': h * 5 + 'px'});
    selectorList.hover(function (e) {
    }, function (e) {
        var that = $(this);
        $('.selectorContainer').removeAttr('data-sel');
        that.fadeOut(fadeTime);
    });
    selector.on(downEvent, function (e) {
        var that = $(this);
        $('.selectorList').fadeOut(fadeTime);
        if (that.attr('data-sel') != '1') {
            $('.selectorContainer').removeAttr('data-sel');
            that.attr('data-sel', 1);
            selectorList.fadeIn(fadeTime);
        } else {
            that.removeAttr('data-sel');
            selectorList.fadeOut(fadeTime);
        }
    }).hover(function (e) {
        var that = $(this);
        that.css({background: 'url(' + imgHover + ')'});
    }, function (e) {
        var that = $(this);
        that.css({background: 'url(' + imgPath + ')'});
    });
    changeSelectorList(id, list, h, callback, fadeTime);
    return selector;
}

function changeSelectorList(id, selList, h, callback, fadeTime) {
    if (fadeTime == undefined) fadeTime = 200;
    if (h == undefined) h = 1.5;
    else h += 'px';
    var selector = $('#' + id);
    var selectorList = $('.selectorList[data-id="' + id + '"]');
    var content_html = '';
    for (var i = 0; i < selList.length; i++) {
        content_html += '<div class="select-item" data-value="' + i + '" data-id="' + id + '">' + selList[i] + '</div>';
    }
    selectorList.html(content_html);
    selectorList.find('.select-item').css({height: h, 'line-height': h});
    selectorList.find('.select-item').on(downEvent, function (e) {
        var that = $(this);
        $('.selectorContainer').removeAttr('data-sel');
        var value = that.attr('data-value');
        var id = that.attr('data-id');
        $('.selectorList').fadeOut(fadeTime);
        $('#' + id).attr('data-value', value);
        $('#' + id).html(that.html());
        if (callback) callback($('#' + id));
    })
    selectorList.find('.select-item:first-child').trigger(downEvent);
    return selector;
}

function appendInput(id, x, y, w, h) {
    if (id == undefined) return null;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (w == undefined) w = 'auto';
    if (h == undefined) h = 'auto';
    var tag = '<input id="' + id + '"/>';

    if ($('#' + id).length > 0) $('#' + id).remove();
    $('#game').append(tag);
    var result = $('#' + id);
    result.css({
        left: x, top: y, width: w, height: h,
        'line-height': h + 'px',
        'z-index': 15000,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        'font-weight': 300
    });
    result.attr('data-tag-type', 'inputBox');
    return result;
}

function appendTextarea(id, x, y, w, h) {
    if (id == undefined) return null;
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (w == undefined) w = 'auto';
    if (h == undefined) h = 'auto';
    var tag = '<textarea id="' + id + '"></textarea>';
    if ($('#' + id).length > 0) $('#' + id).remove();
    $('#game').append(tag);
    var result = $('#' + id);
    result.css({
        left: x, top: y, width: w, height: h,
        'z-index': 15000, resize: 'none',
        border: 'none',
        background: 'transparent',
        'font-weight': 300
    });
    result.attr('data-tag-type', 'textArea');
    return result;
}

function getServerUrlFromInputFile(callback) {
    if (isShowed($('.uploading_backdrop'))) return;
    var content_html = '<div class="uploading_backdrop"></div>' +
        '<div class="progressing_area">' +
        '<img id="wait_ajax_loader" src="images/ajax-loader.gif' + '"/>' +
        '<span id="progress_label">上传中</span>' +
        '<span id="progress_percent">0%</span>' +
        '</div>'
    $('body').append(content_html);
    $(".uploading_backdrop").show();
    $(".progressing_area").show();
    var that = document.getElementById('fileUploader')
    var fdata = new FormData(that);
    fdata.append("format", that.getAttribute('data-format'));
    fdata.append("idx", that.getAttribute('data-idx'));
    $.ajax({
        url: baseURL + "api/uploadPureMedia",
        type: "POST",
        data: fdata,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        xhr: function () {
            //upload Progress
            var xhr = $.ajaxSettings.xhr();
            if (xhr.upload) {
                xhr.upload.addEventListener('progress', function (event) {
                    var percent = 0;
                    var position = event.loaded || event.position;
                    var total = event.total;
                    if (event.lengthComputable) {
                        percent = Math.ceil(position / total * 100);
                    }
                    $("#progress_percent").text(percent + '%');

                }, true);
            }
            return xhr;
        },
        mimeType: "multipart/form-data"
    }).done(function (res) { //
        var ret;
        try {
            ret = JSON.parse(res);
        } catch (e) {
            $(".uploading_backdrop").remove();
            $(".progressing_area").remove();
            alert('操作失败 : ' + JSON.stringify(e));
            return;
        }
        if (ret.status == 'success') {
            $(".uploading_backdrop").remove();
            $(".progressing_area").remove();
            if (callback) callback(baseURL + ret.data);
        } else { //failed
            alert('操作失败 : ' + ret.data);
            $(".uploading_backdrop").remove();
            $(".progressing_area").remove();
        }
    });

};

function saveContents2Storage(elemCollection) {
    var allBtns = elemCollection;
    var storageTag = document.createElement('div');
    for (var i = 0; i < allBtns.length; i++) {
        storageTag.appendChild(allBtns[i]);
    }
    localStorage.setItem('allBtns', storageTag.innerHTML);
    $('#game').append(storageTag.innerHTML);
}

function getContentsFromStorage() {
    var allBtns = localStorage.getItem('allBtns');
    if (allBtns) {
        $('#game').append(allBtns);
        var imgSet = $('img[data-type="btnAdded"]');
        return imgSet[imgSet.length - 1].getAttribute('data-id') * 1;
    }
    return 0;
}

function mediaPlayerConfig() {
    var player = $('.mediaPlayer');
    var dragLayer = $('.dragLayer');
    // showTag(dragLayer);
    // dragLayer.off(downEvent);
    // dragLayer.on(downEvent,function (e) {
    //     var that = $(this);
    //     hideTag(that);
    //     getBottomElement(e).trigger(downEvent);
    //     showTag(that);
    // }).on(moveEvent,function (e) {
    //     var that = $(this);
    //     var isPlayerShowed = ($('.mediaPlayer').length > 0);
    //     if(!isPlayerShowed) hideTag(that);
    // }).on(upEvent,function (e) {
    //     var that = $(this);
    //     var isPlayerShowed = ($('.mediaPlayer').length > 0);
    //     if(!isPlayerShowed) hideTag(that);
    // })
}

function showPlayer(content, format, callback, elem) {
    var id = 'playerView' + parseInt(1000 + Math.random() * 9000);
    var player = $('#playerTemplate');
    var playerTag = '<div class="mediaPlayer" data-id="init" data-scale="1" draggable="false"></div>';
    $('#contentWrap').append(playerTag);
    $('#contentWrap').find('.mediaPlayer[data-id="init"]').attr('id', id);
    $('#' + id).removeAttr('data-id');
    $('#' + id).html(player.html());
    player = $('#' + id);
    var iFrame = player.find('iframe');
    var textViewer = player.find('.textViewer');
    if (format == undefined) format = 'link';
    player.find('.player-bg').attr('src', 'images/qd_1/player-bg.png');
    hideTag(iFrame);
    hideTag(textViewer);
    player.find('.btnCtrl').off(downEvent);
    player.find('.btnCtrl').on(downEvent, function (e) {
        var that = $(this);
        var type = that.attr('data-type');
        console.log(type);
        var curScale = player.attr('data-scale') * 1;
        switch (type) {
            case 'plus':
                curScale += 0.1;
                if (curScale > 1.7) curScale = 1.7;
                break;
            case 'minus':
                curScale -= 0.1;
                if (curScale < 0.7) curScale = 0.7;
                break;
            case 'close':
                player.fadeOut(200);
                setTimeout(function () {
                    player.remove();
                }, 250);
                break;
        }
        var transform = 'scale(' + curScale.toFixed(2) + ')';
        player.css({
            transform: transform,
            '-webkit-transform': transform,
            '-moz-transform': transform,
            '-ms-transform': transform,
            '-o-transform': transform
        });
        player.attr('data-scale', curScale);
    });
    player.find('img').off(downEvent);
    player.find('img').on(downEvent, function (e) {
        startDrag(player);
    });
    switch (format) {
        case 'text':
            player.find('.player-bg').attr('src', 'images/qd_1/16-7.png');
            textViewer.html(content);
            showTag(textViewer);
            player.fadeIn('fast');
            var hId = parseInt(textViewer.height() / 43);
            player.find('.player-bg').attr('src', 'images/qd_1/16-' + hId + '.png');
            break;
        case 'audio':
            effecSoundPlay(content, function () {
                if (callback) callback();
            }, elem);
            player.remove();
            break;
        case 'image':
            iFrame.attr('src', '');
            iFrame.css({
                background: 'url(' + content + ') no-repeat',
                'background-size': 'contain',
                'background-position': 'center'
            });
            showTag(iFrame);
            player.fadeIn('fast');
            break;
        case 'link':
        case 'video':
            iFrame.css({background: 'transparent', 'background-size': '100% 100%'});
            iFrame.attr('src', content);
            showTag(iFrame);
            player.fadeIn('fast');
            break;
    }
    setPosition(player, _wPos.w / 2 - player.width() / 2, 720 / 2 - player.find('.player-bg').height() / 2);
    clickTag(player);
}

function startDrag(elem, finishDrag) {
    var oldElemPos = {x: elem[0].offsetLeft, y: elem[0].offsetTop};
    var dragLayer = $('.dragLayer');
    var oldPos = {x: 0, y: 0};
    var newPos = {x: 0, y: 0};
    dragLayer.off(moveEvent);
    dragLayer.off(upEvent);

    dragLayer.on(moveEvent, function (e) {
        newPos = getCursorPos(e);
        // console.log(newPos.x, newPos.y);
        if (oldPos.x == 0 && oldPos.y == 0) {
            oldPos.x = newPos.x * 1;
            oldPos.y = newPos.y * 1;
        }
        setPosition(elem,
            oldElemPos.x + newPos.x - oldPos.x,
            oldElemPos.y + newPos.y - oldPos.y
        );
    }).on(upEvent, function (e) {
        hideTag(dragLayer);
        if (finishDrag) finishDrag({x: elem[0].offsetLeft, y: elem[0].offsetTop});
    });
    showTag(dragLayer);
    clickTag(elem, 1.01);
    // dragLayer.trigger(moveEvent);
}

function dragConfig(elemArr, beforeCallback, dragCallback, finishCallback) {
    var dragLayer = $('.dragLayer');
    showTag(dragLayer);
    var oldElemPos = {};
    var oldPos = {x: 0, y: 0};
    var newPos = {x: 0, y: 0};

    var curDragElem = null;
    var isDragging = false;

    dragLayer.off(downEvent);
    dragLayer.off(moveEvent);
    dragLayer.off(upEvent);

    // setTimeout(function () {
    //     makeShapeImg('hover');
    // }, 1000);

    dragLayer.on(downEvent, function (e) {
        e.preventDefault();
        oldPos = getCursorPos(e, dragLayer);
        isDragging = false;
        for (var i = elemArr.length - 1; i >= 0; i--) {
            if (elemArr[i].attr('data-tag-type') != 'button') continue;
            var elemPos = getPosition(elemArr[i]);
            if (oldPos.x > elemPos.x && oldPos.x < elemPos.x + elemPos.w
                && oldPos.y > elemPos.y && oldPos.y < elemPos.y + elemPos.h) {
                curDragElem = elemArr[i];
                isDragging = true;
                oldElemPos = elemPos;
                break;
            }
        }

        if (curDragElem && curDragElem.attr('data-tag-type') == 'button') {
            isDragging = false;
            curDragElem.trigger(downEvent);
            return;
        }
        curDragElem = null;
        isDragging = false;
        for (var i = elemArr.length - 1; i >= 0; i--) {
            if (elemArr[i].attr('data-tag-type') == 'button') continue;
            var elemPos = getPosition(elemArr[i]);

            var isClickable = true;
            if (elemArr[i].attr('data-hot-type') == 'hotarea') {
                var hotPos = {
                    x: getElemCursorPos(e).x / _scaleX,
                    y: getElemCursorPos(e).y / _scaleY
                };
                var canvas = document.getElementById('saveCanvas');
                var ctx = canvas.getContext('2d');
                var col = ctx.getImageData(hotPos.x, hotPos.y, 1, 1).data;
                if (Math.abs(rgb2Hex(col).alpha - (elemArr[i].attr('data-id') * 1 + 1) * 0.1) > 0.05) {
                    isClickable = false;
                }
            }

            if (isClickable && oldPos.x > elemPos.x && oldPos.x < elemPos.x + elemPos.w
                && oldPos.y > elemPos.y && oldPos.y < elemPos.y + elemPos.h) {
                curDragElem = elemArr[i];
                isDragging = true;
                oldElemPos = elemPos;
                break;
            }
        }
        if (isDragging) {
            clickTag(curDragElem, 1.01);
            if (beforeCallback) beforeCallback(curDragElem, oldElemPos, oldPos);
        } else {
            if (beforeCallback) beforeCallback();
        }
    }).on(moveEvent, function (e) {
        e.preventDefault();
        newPos = getCursorPos(e, dragLayer);
        var isHovering = false;
        var curHoverElem = null;
        for (var i = 0; i < elemArr.length; i++) {
            var elemPos = getPosition(elemArr[i]);
            var isClickable = true;
            if (elemArr[i].attr('data-hot-type') == 'hotarea') {
                var hotPos = {
                    x: getElemCursorPos(e).x / _scaleX,
                    y: getElemCursorPos(e).y / _scaleY
                };
                var canvas = document.getElementById('saveCanvas');
                var ctx = canvas.getContext('2d');
                var col = ctx.getImageData(hotPos.x, hotPos.y, 1, 1).data;
                if (Math.abs(rgb2Hex(col).alpha - (elemArr[i].attr('data-id') * 1 + 1) * 0.1) > 0.05) {
                    isClickable = false;
                }
            }
            if (isClickable && newPos.x > elemPos.x && newPos.x < elemPos.x + elemPos.w
                && newPos.y > elemPos.y && newPos.y < elemPos.y + elemPos.h) {
                curHoverElem = elemArr[i];
                isHovering = true;
                break;
            }
        }
        if (isHovering) {
            dragLayer.css('cursor', 'pointer');
            if (isHovering && curHoverElem.attr('data-tag-type') == 'button') {
                if (curHoverElem.attr('data-hoverimg')) {
                    changeImage(curHoverElem, curHoverElem.attr('data-hoverimg'));
                }
                curHoverElem.trigger(overEvent);
                return;
            } else {
                curHoverElem.trigger(outEvent);
            }
        } else {
            var allBtns = $('div[data-tag-type="button"]');
            for (var i = 0; i < allBtns.length; i++) {
                var normImg = $(allBtns[i]).attr('data-normalimg');
                if (normImg) changeImage($(allBtns[i]), normImg);
            }
            dragLayer.css('cursor', 'auto');
            curHoverElem = null;
        }
        if (!isDragging) return;
        if (false && curDragElem.attr('data-ctrl-type') == ST.resize) {
            curDragElem.trigger(moveEvent);
            return;
        }
        if (oldPos.x == 0 && oldPos.y == 0) {
            oldPos.x = newPos.x * 1;
            oldPos.y = newPos.y * 1;
        }
        if (dragCallback) {
            dragCallback(curDragElem, {
                x: newPos.x - oldPos.x,
                y: newPos.y - oldPos.y
            }, newPos, e);
        } else {
            setPosition(curDragElem,
                oldElemPos.x + newPos.x - oldPos.x,
                oldElemPos.y + newPos.y - oldPos.y
            );
        }
    }).on(upEvent, function (e) {
        e.preventDefault();
        if (curDragElem && curDragElem.attr('data-tag-type') == 'button') {
            curDragElem.trigger(upEvent);
            curDragElem = null;
            return;
        }
        if (!isDragging) {
            hideTag($('div[data-ctrl-type="' + ST.rotate + '"]'));
            return;
        }

        isDragging = false;
        if (finishCallback)
            finishCallback(curDragElem, getPosition(curDragElem), newPos);
        curDragElem = null;
    });
}

function appendNumberPanel(elem, x, y, callback) {
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    var panPos = [12, 37, 75, 50];
    var iPref = 'images/' + root_Prefix + '/mb';
    var id = elem.attr('id');
    var tag = '<div class="numberPanel" data-id="' + id + '" draggable="false">' +
        '<img class="numPanelBg" src="' + iPref + '.png" draggable="false">' +
        '<div class="close" data-type="x"  style="cursor:pointer;">' +
        '<img src="' + iPref + 'x.png" draggable="false"></div>';
    var values = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['back', 0, 'enter']];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            var xPos = panPos[0] + panPos[2] * j;
            var yPos = panPos[1] + panPos[3] * i;
            tag += '<div class="num-item" ' +
                'style="left:' + xPos + 'px;top:' + yPos + 'px;cursor:pointer;" ' +
                'data-id="' + id + '" draggable="false" ' +
                'data-type="' + values[i][j] + '"' +
                '><img src="' + iPref + '' + values[i][j] + '.png" ' + '></div>';
        }
    }
    tag += '</div>';
    $('#game').append(tag);
    tag = $('.numberPanel[data-id="' + id + '"]');
    tag.css({left: x, top: y});
    tag.find('.close, .num-item').off(downEvent);
    tag.find('.close, .num-item').off(upEvent);
    tag.find('.close, .num-item').off(overEvent);
    tag.find('.close, .num-item').on(downEvent, function (e) {
        var that = $(this);
        // clickTag(that);
        var that = $(this);
        var type = that.attr('data-type');
        var curStr = elem.html();
        switch (type) {
            case 'x':
                hideTag(tag, 200);
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                curStr += type;
                elem.html(curStr);
                break;
            case 'back':
                curStr = curStr.substr(0, curStr.length - 1);
                elem.html(curStr);
                break;
            case 'enter':
                hideTag(tag, 200);
                if (callback) callback(curStr);
                break;
        }
    }).hover(function (e) {
        var that = $(this);
        changeImage(that, iPref + that.attr('data-type') + '-.png');
    }, function (e) {
        var that = $(this);
        changeImage(that, iPref + that.attr('data-type') + '.png');
    });
    hideTag(tag);
    return tag;
}

function showGIF(elem, imgGIF, elem_end, imgEnd, posX, posY, delay, callback) {
    changeImage(elem, getImgPath(imgGIF) + '?p' + (new Date()).getTime());
    setPosition(elem, posX, posY);
    clearTimeout(_tmr);
    _tmr = setTimeout(function () {
        hideTag(elem);
        if (callback) callback();
    }, delay);
    changeImage(elem_end, getImgPath(imgEnd));
    setPosition(elem_end, posX, posY);
}

function showNumbers2Tag(elem, arr, delimiter) {
    var content = '';
    if (delimiter == undefined) delimiter = ',&nbsp;&nbsp;&nbsp; ';
    for (var i = 0; i < arr.length; i++) {
        if (i != 0) content += delimiter;
        content += arr[i];
    }
    elem.html(content);
}

function isPrimeNumber(a) {
    return getDivisors(a).length == 0;
}

function divide2PrimeNumber(a) {
    var res = [];
    var index = 0;

    function divide2Prime(num) {
        var i = 2;
        if (num == 1 || num == 2 || num == 3) {
            res[index++] = num;
            return res;
        }
        for (; i <= num / 2; i++) {
            if (num % i == 0) {
                res[index++] = i;//每得到一个质因数就存进YZ
                divide2Prime(num / i);
                break;
            }
        }
        if (i > num / 2) {
            res[index++] = num;//存放最后一次结果
        }
        return res;
    }

    return divide2Prime(a);
}

function getPrimeNumbers(a, b) {
    var res = [];
    for (var i = a; i < b; i++) {
        if (isPrimeNumber(i)) res.push(i);
    }
    return res;
}

function getDivisors(a) {
    var res = [];
    for (var i = 2; i <= a / 2; i++) {
        if (a % i == 0) res.push(i);
    }
    return res;
}

function getMultiple(a, max) {
    var res = [];
    for (var i = a; i <= max; i += a) {
        res.push(i);
    }
    return res;
}

function getMaxCommDivisor(a, b) {
    return a * b / getMinCommMultiple(a, b);
}

function getMinCommMultiple(a, b) {
    var res = a;
    for (var i = a; i <= a * b; i += a) {
        if (i % a == 0 && i % b == 0) {
            res = i;
            break;
        }
    }
    return res;
};

function rgb2Hex(color) {
    if (color.length < 4) return false;
    var hex = '000000';
    var r = color[0];
    var g = color[1];
    var b = color[2];
    var a = (color[3] / 255).toFixed(3) * 1;
    if (r > 255 || g > 255 || b > 255) return false;
    hex += ((r << 16) | (g << 8) | b).toString(16);
    return {color: '#' + hex.slice(-6), alpha: a};
}

function makeShapeImg(type) {
    if (type == 'hover') type = 1;
    else type = 0;
    var saveCanvas = document.getElementById('saveCanvas');

    $(saveCanvas).css({
        'pointer-events': 'none',
        'display': 'none'
    });
    if (type == 1) {
        saveCanvas.width = 800;
        saveCanvas.height = 600;
    } else {
        saveCanvas.width = 530;
        saveCanvas.height = 530;
    }

    var _sW = 800 / _wPos.w;
    var _sH = 600 / _wPos.h;

    var allShapes = $('div[data-ctrl-type="' + ST.move + '"]');

    var ctx = saveCanvas.getContext('2d');
    ctx.clearRect(0, 0, saveCanvas.width, saveCanvas.height);
    var posData = [];
    for (var i = 0; i < allShapes.length; i++) {
        var shapeItem = $(allShapes[i]).parent();
        var posItem = getElemPosition(shapeItem);
        var sizeItem = getElemPosition(shapeItem.find('img'));
        posItem.rot = shapeItem.attr('data-rotate') * 1 * Math.PI / 180;
        ctx.save();
        ctx.translate(
            (posItem.x + sizeItem.w / 2) * _sW,
            (posItem.y + sizeItem.h / 2) * _sH);
        ctx.rotate(posItem.rot);
        ctx.drawImage(shapeItem.find('img')[type],
            -sizeItem.w / 2,
            -sizeItem.h / 2
        );
        ctx.restore();
        posData[shapeItem.attr('data-obj-type') * 1] = posItem;
    }
}

function save_panel() {
    makeShapeImg('save');
    var saveCanvas = document.getElementById('saveCanvas');

    var spiriteURL = '';
    try {
        spiriteURL = saveCanvas.toDataURL();
    } catch (e) {
        console.log(e);
    }
    if (spiriteURL == '') {
        alert('请使用线上版本');
        return;
    }
    var spData = spiriteURL.substring(22);
    var blob = b64toBlob(spData, 'image/png');

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, "游戏图片.png");
    } else {
        if (osStatus === 'iOS' || osStatus == 'Android') {
            $.ajax({
                url: "https://taiyang.hulalaedu.com/coursewares/uploadImgData",
                type: "POST",
                data: {'imageData': spData},
                success: function (result) {
                    result = JSON.parse(result);
                    if (result.status) {
                        var elem = document.createElement('a');
                        elem.href = result.data;
                        elem.setAttribute('target', "_blank");
                        elem.download = "游戏图片.png";
                        elem.innerHTML = "";
                        document.body.appendChild(elem);
                        elem.click();
                        setTimeout(function () {
                            $(elem).remove();
                            window.URL.revokeObjectURL(elem.href);
                        }, 100);
                        console.log(result);
                    } else
                        window.alert(result['data']);
                }
            });
        } else {
            var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
            var base64ImgData = URL.createObjectURL(blob);
            var elem = document.createElement('a');
            elem.href = base64ImgData;
            elem.setAttribute('target', "_blank");
            elem.download = "游戏图片.png";
            elem.innerHTML = "";
            document.body.appendChild(elem);
            elem.click();
            setTimeout(function () {
                $(elem).remove();
                window.URL.revokeObjectURL(elem.href);
            }, 30);
        }
    }

}

function closeWindow() {

    window.close();

    window.opener = window;
    window.close();

    window.opener = "HikksNotAtHome";
    window.close();

    // var objWindow = window.open(location.href, "_self");
    // objWindow.close();
}


function makeNDigit(num, len) {
    num = num.toString();
    if (!len) len = 2;
    var ret = '';
    for (var i = 0; i < len; i++) ret += '0';

    ret += num;
    ret = ret.substr(-len);
    return ret;
}

function appendLine(id, pos1, pos2, width, color) {
    var tag = appendTag(id);
    var alpha = Math.atan((pos1.y - pos2.y) / (pos1.x - pos2.x)) * 180 / Math.PI;
    if ((pos1.x - pos2.x) > 0) alpha = alpha - 180;
    var len = calcDistance(pos1, pos2);
    setPosition(tag, pos1.x, pos1.y, len, width);
    tag.css({
        background: color
    })
    setTransform(tag, 1, alpha, [0, width / 2], [0, width / 2 + 'px']);
    showTag(tag);
    return tag;
}

function calcDistance(pos1, pos2) {
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x)
        + (pos1.y - pos2.y) * (pos1.y - pos2.y));
}

function changeLine(elem, pos1, pos2, width) {
    var alpha = Math.atan((pos1.y - pos2.y) / (pos1.x - pos2.x)) * 180 / Math.PI;
    if ((pos1.x - pos2.x) > 0) alpha = alpha - 180;
    var len = calcDistance(pos1, pos2);
    setPosition(elem, pos1.x, pos1.y, len, width);
    setTransform(elem, 1, alpha, [0, width / 2], [0, width / 2 + 'px']);
    var rotate = alpha * pi / 180;
    if (rotate > 2 * pi) rotate = 2 * pi - rotate;
    else if (rotate < 0) rotate = 2 * pi + rotate;
    return rotate;
}

function appendAngle(id, pos, alpha, rotate, radius, imgPath) {
    var filename = 'images/qd_1/cangle.png';
    if (imgPath) filename = imgPath;
    var angle = '<svg class="angle" data-id="' + id + '"><image xlink:href="' + filename + '"/></svg>';
    $('#game').append(angle);
    var clipPath = '<svg width="0" height="0" class="clipPath"><defs><clippath id="angleShapeClip' + id + '">' +
        '<polygon></polygon></clippath></defs></svg>';
    $('#game').append(clipPath);
    changeAngle($('.angle[data-id="' + id + '"]'), pos, alpha, rotate, radius, imgPath);
    return $('.angle[data-id="' + id + '"]');
}

function changeAngle(elem, pos, alpha, rotate, radius, imgPath) {
    var pi = Math.PI;
    rotate = rotate * 180 / pi;
    var filename = 'images/qd_1/cangle.png';
    if (Math.abs((Math.abs(alpha) - pi / 2)) < pi / 3600) filename = 'images/qd_1/rangle.png';
    var dr = radius;
    var angle = elem;
    elem.find('image').attr({
        width: dr * 2 + '',
        height: dr * 2 + '',
        'xlink:href': filename
    });
    var suff = '';
    // if (alpha < 0) alpha = alpha + 2 * pi;
    var id = angle.attr('data-id');
    var dx = dr * 5 * Math.cos(2 * pi - alpha) + dr;
    var dy = dr * 5 * Math.sin(2 * pi - alpha) + dr;

    // console.log('alpha is:', alpha * 180 / pi);
    $('#angleShapeClip' + id).find('polygon').attr({
        points: dr + ' ' + dr + ','
            + (dr * 11) + ' ' + dr + ','
            + (dr * 11) + ' ' + ((alpha > 0) ? (-dr * 11) : (dr * 11)) + ','
            + ((alpha > pi) ? ((-dr * 11) + ' ' + (-dr * 11) + ',') : '')
            + ((alpha > pi * 3 / 2) ? ((-dr * 11) + ' ' + (dr * 11) + ',') : '')
            + ((alpha < -pi) ? ((-dr * 11) + ' ' + (dr * 11) + ',') : '')
            + ((alpha < -pi * 3 / 2) ? ((-dr * 11) + ' ' + (-dr * 11) + ',') : '')
            + dx + ' ' + dy
    });

    elem.css({
        left: pos.x,
        top: pos.y,
        width: dr * 2,
        height: dr * 2,
        opacity: 0.7,
        'transform': 'translate(-50%,-50%) rotate(' + rotate + 'deg)',
        '-webkit-transform': 'translate(-50%,-50%) rotate(' + rotate + 'deg)',
        '-moz-transform': 'translate(-50%,-50%) rotate(' + rotate + 'deg)',
        '-ms-transform': 'translate(-50%,-50%) rotate(' + rotate + 'deg)',
        '-o-transform': 'translate(-50%,-50%) rotate(' + rotate + 'deg)'
    });
    elem.find('image').css({
        'clip-path': 'url("#angleShapeClip' + id + '")',
        '-webkit-clip-path': 'url("#angleShapeClip' + id + '")',
        '-ms-clip-path': 'url("#angleShapeClip' + id + '")'
    });
    return elem;
}

function showTagsOnTop(elemArr) {
    for (var i = 0; i < elemArr.length; i++) {
        $('#game').append(elemArr[i]);
    }
}

function randomSort(arr) {
    for (var i = 0; i < 60; i++) {
        var id1 = parseInt(Math.random() * arr.length);
        var id2 = parseInt(Math.random() * arr.length);
        var tmp = arr[id1];
        arr[id1] = arr[id2];
        arr[id2] = tmp;
    }
    return arr;
};

function randomSortPosition(arr, startId, len, isXY) {
    if (!len) len = arr.length;
    if (!startId) startId = 0;
    if (!isXY) isXY = false;
    for (var i = 0; i < 60; i++) {
        var id1 = parseInt(startId + Math.random() * len);
        var id2 = parseInt(startId + Math.random() * len);
        var tmp = arr[id1][0];
        arr[id1][0] = arr[id2][0];
        arr[id2][0] = tmp;
        if (isXY) {
            tmp = arr[id1][1];
            arr[id1][1] = arr[id2][1];
            arr[id2][1] = tmp;
        }
    }
    return arr;
};
