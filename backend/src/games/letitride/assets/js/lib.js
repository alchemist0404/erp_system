var screenApi = {};

(function (lib) {
    lib.isFullscreen = function () {
        if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.isFullscreen || document.msIsFullscreen || document.msFullscreenElement) {
            return true;
        }
        return false
    };

    lib.requestFullscreen = function () {
        if (this.isFullscreen()) {
            return;
        }
        var dom = document.getElementById('content');
        if (dom.requestFullscreen) {
            dom.requestFullscreen();
        } else if (dom.mozRequestFullScreen) {
            dom.mozRequestFullScreen();
        } else if (dom.webkitRequestFullscreen) {
            dom.webkitRequestFullscreen();
        } else if (dom.msRequestFullscreen) {
            dom.msRequestFullscreen();
        }
    };
    lib.quitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };
    lib.toggleFullscreen = function () {

        if (this.isFullscreen()) {
            this.quitFullscreen();
        } else {
            this.requestFullscreen();
        }
    };
    lib.onScreenChange = function () {
        initVariables();
        onresize();
    };

    var initRatio, lastRatio, bodyScale;

    function getDevicePixelRatio() {
        if (window.devicePixelRatio) {
            return window.devicePixelRatio;
        }
        return screen.deviceXDPI / screen.logicalXDPI;
    }

    lib.init = function () {
        document.addEventListener("fullscreenchange", this.onScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onScreenChange);
        document.addEventListener("mozfullscreenchange", this.onScreenChange);
        document.addEventListener("MSFullscreenChange", this.onScreenChange);
        document.addEventListener("orientationchange", this.onScreenChange);
        window.addEventListener('orientationchange', this.onScreenChange);
        window.addEventListener('resize', this.onScreenChange);
        initRatio = getDevicePixelRatio();
        lastRatio = initRatio;
        bodyScale = 1 / initRatio;
        //$('body').css({width:window.innerWidth * initRatio, height:window.innerHeight * initRatio,transform:'scale(' +(bodyScale)+')'})
        onresize(null);
    };

    function onresize(e) {
        var ratio = getDevicePixelRatio() / initRatio;
        var w = window.innerWidth;
        var h = window.innerHeight;

        if (!_isStretchScreen) {
            if ((w - h * _wPos.w / _wPos.h) > 0) {
                _wPos.x = (w - h * _wPos.w / _wPos.h) / 2;
                w = h * _wPos.w / _wPos.h;
            } else {
                _wPos.y = (h - w * _wPos.h / _wPos.w) / 2;
                h = w * _wPos.h / _wPos.w;
            }

        }
        if (false && (window.orientation == 0 || window.orientation == 180)) {
            w = window.innerHeight;
            h = window.innerWidth;
            //scale_x = Math.min(h / _wPos.h, h / _wPos.h) * ratio;
            //scale_y = Math.min(w / _wPos.w, w / _wPos.w) * ratio;
            if (window.orientation == 0) {
                setTransform($('.wrap'), 1, 90, [0, 0], [w / 2, h / 2]);
            } else {
                setTransform($('.wrap'), 1, 90, [0, 0], [w / 2, h / 2]);
            }
        } else {
            setTransform($('.wrap'), 1, 0, [0, 0], [w / 2, h / 2]);
        }

        var scale_x = Math.min(w / _wPos.w, w / _wPos.w) * ratio;
        var scale_y = Math.min(h / _wPos.h, h / _wPos.h) * ratio;
        _ww = w;
        _hh = h;
        _scaleX = scale_x;
        _scaleY = scale_y;
        $('.gameContent').css({width: _wPos.w, height: _wPos.h});
        $('.dragLayer').css({width: _wPos.w, height: _wPos.h - 120});
        $('.overLayer').css({width: _wPos.w, height: _wPos.h});
        $('.vjs-control').css({height: '3em'});
        $('.vjs-control-bar').css({height: '3em', bottom: 0});

        $('.videoContent').css({
            left: _vPos.x * scale_x, top: _vPos.y * scale_y,
            width: _vPos.w * scale_x, height: _vPos.h * scale_y
        });
        $('.videoContent div').css({'font-size': '12px'});
        //vplayer.width(_vPos.w * scale_x);
        //vplayer.height(_vPos.h * scale_y);
        vpWidth = _vPos.w * scale_x;
        vpHeight = _vPos.h * scale_y;
        $('video').css({'object-fit': 'fill'});


        $('.wrap').css({
            width: Math.round(_wPos.w * scale_x),
            height: Math.round(_wPos.h * scale_y),
            left: _wPos.x, top: _wPos.y
        });
        $('.content').css({
            width: Math.round(_wPos.w * scale_x),
            height: Math.round(_wPos.h * scale_y*2),
            perspective: '100px'
        });
        var transformStr = 'scale(' + 1 * scale_x + ',' + 1 * scale_y + ')'+' rotateX(1deg)';
        $('.contentWrap').css({
            top: 0, left: 0,
            margin: 0, padding: 0,
            width: _wPos.w, height: _wPos.h,
            transform: transformStr,
            '-webkit-transform': transformStr,
            '-moz-transform': transformStr,
            '-ms-transform': transformStr,
            '-o-transform': transformStr
        });

        isHuawei = false;
        isMacOs = false;
        var nagt = navigator.userAgent;
        var pos1 = nagt.indexOf("HonorSCL");
        var pos2 = nagt.indexOf("Chrome");
        var pos3 = nagt.indexOf("Mac OS");
        var pos4 = nagt.indexOf("UCBrowser");
        var pos5 = nagt.indexOf("SM-A8000");
        ////For Mac Osx
        var MacCPUVersion = nagt.indexOf('CPU OS 8');

        if ((pos1 > -1 && pos2 < 0) || (pos5 > 0 && pos4 > 0) || (pos3 > 0 && MacCPUVersion > 0)) {
            if (pos1 > -1 && pos2 < 0) isHuawei = true;
            var offsetX = Math.round(((_wPos.w - w) / 2) / scale_x);
            var offsetY = Math.round(((_wPos.h - h) / 2) / scale_y);
            $('.gameContent').css({width: _wPos.w, height: _wPos.h});
        } else if (pos3 > -1) {
            isMacOs = true;
        }

        $('#game_canvas').css({width: _wPos.w, height: _wPos.h, margin: 0});
        setTimeout(function () {
            $('#effect_canvas').css({width: _wPos.w * _scaleX, height: _wPos.h * _scaleY, margin: 0});
        },1500);

        $('body').fadeIn('fast');

        return;
    };

})(screenApi);

function gloalHandle(e) {
    screenApi.toggleFullscreen();
}

$(function () {
    initStarTail();
    videoPlayerConfig();
    switchVideo(false);
    
    showTag($('.gameContent'));
    navConfig('0');
});

function showPart(id, type) {
    if (type == undefined) type = 'start';
    if (type != 'video') {
        $('#game').html('');
        $('div[data-btn-type="pagenav"]').remove();
    }
    hideTag($('#effect_canvas'));
    hideTag($('.dragLayer'));
    if (isPlayingAudio(effectSound)) effectSound.pause();
    // id='83';
    switch (id) {
        case '0':
        case '1':
            if (type == 'start' || type == 'reset') GameHds[parseInt(id)].initGame();
            break;
        default:
            if (type == 'start' || type == 'reset') GameHds[0].initGame();
            break;
    }
}

$('.scripts').remove();