// Library ----------------

var stage;
var renderer;
var isMouseDown = false;
var _updateInterval = 15;
var isMoving = false;

function initStarTail() {
    // console.clear();

    stage = new PIXI.Stage();

    renderer = PIXI.autoDetectRecommendedRenderer(
        _wPos.w, _wPos.h, {
            view: document.getElementById("effect_canvas"),
            transparent: true
        }
    );
    var starTexture = PIXI.Texture.fromImage("./assets/images/star.png");

    $('#effect_canvas').css({width: _wPos.w * _scaleX, height: _wPos.h * _scaleY});
    var colours = [
        0x88ff88,  // BlueGreen
        // 0x9b59b6,  // Purple
        0xffff88,  // Yellow
        // 0xffeeee,  // White
        0xff00ff,  // green
        0xff8800  // Orange
        //0xfA2323   // Red
    ];

    var starPool = [];
    var starsInUse = [];
    for (var i = 0; i < 100; i++) {
        var star = new PIXI.Sprite(starTexture);
        star.anchor.x = star.anchor.y = 0.5;
        star.visible = false;
        star.scaleDecay = 0;
        star.alphaDecay = 0;
        star.speed = 0;
        star.velocity = {
            x: 0,
            y: 0
        };
        starPool[i] = star;
        stage.addChild(star);
    }

    var spawn = function (x, y) {
        var star = starPool.splice(0, 1)[0];
        star.tint = colours[Math.floor(Math.random() * colours.length)];
        star.scale.x = star.scale.y = (Math.random() * 0.8) + 0.2;
        star.scaleDecay = (Math.random() * 0.05) + 0.05;
        star.alpha = (Math.random() * 0.2) + 0.8;
        star.alphaDecay = (Math.random() * 2) + 1;
        star.rotation = 2 * Math.random() * Math.PI;
        star.x = Math.cos(star.rotation) * 10 + x;
        star.y = Math.sin(star.rotation) * 10 + y;
        star.speed = (Math.random() * 30) + 100;
        star.velocity.x = star.speed * Math.cos(star.rotation);
        star.velocity.y = star.speed * Math.sin(star.rotation);
        star.visible = true;
        starsInUse.push(star);
    };

    var updateStars = function (delta) {
        for (var i = 0; i < starsInUse.length; i++) {
            var star = starsInUse[i];
            if (star.visible) {
                star.alpha -= star.alphaDecay * delta;
                star.scale.x -= star.scaleDecay * delta;
                star.scale.y -= star.scaleDecay * delta;
                star.x += star.velocity.x * delta;
                star.y += star.velocity.y * delta;

                if (star.alpha < 0 || star.scale.x < 0) {
                    star.visible = false;
                    starPool.push(starsInUse.splice(i, 1)[0]);
                }
            }
        }
    };

    var lastTime = null;

    var animate = function (timestamp) {
        if (lastTime === null) {
            lastTime = timestamp;
        }
        var delta = (timestamp - lastTime) / 1000;
        lastTime = timestamp;
        if (isStarShowNeeded) {
            $('#effect_canvas').show();
            for (var i = 0; i < Math.min(starPool.length, 5); i++) {
                var pos = mousePos;
                spawn(pos.x, pos.y);
            }
        }
        updateStars(delta);
        renderer.render(stage);

        setTimeout(function () {
            requestAnimationFrame(animate);
        }, _updateInterval);

    };

    requestAnimationFrame(animate);

    if (getBrowser().name.indexOf('IE') >= 0 && parseInt(getBrowser().version) < 11) {
        $('#effect_canvas').hide();
    }
    // var canvas = $('.content');
    // canvas.on(moveEvent, function (e) {
    //     // if (isMobile && ('changedTouches' in e)) e = e.changedTouches[0];
    //     if (isMouseDown) {
    //         mousePos = getCursorPos(e);
    //         // mousePos = getMouseCoordinate.call(this, e);
    //     }
    // });
    // canvas.on(downEvent, function (e) {
    //     isMouseDown = true;
    //     // if (isMobile && ('changedTouches' in e)) e = e.changedTouches[0];
    //     mousePos = getCursorPos(e)
    //     // mousePos = getMouseCoordinate.call(this, e);
    //     // console.log('MouseDown ----- ');
    //     // console.log(mousePos);
    //     if (getBrowser().name.indexOf('IE') >= 0 && parseInt(getBrowser().version) < 11) {
    //         // $('#effect_canvas,.flip-btn-next,.flip-btn-prev,img.bottom-nav').hide();
    //         // var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
    //         // // console.log(BottomElement);
    //         // $('#effect_canvas,.flip-btn-next,.flip-btn-prev,img.bottom-nav').show();
    //         // $(BottomElement).trigger('click'); //Manually fire the event for desired underlying element
    //     }
    // });
    // canvas.on(upEvent, function (e) {
    //     isMouseDown = false;
    //     // if (isMobile && ('changedTouches' in e)) e = e.changedTouches[0];
    //     mousePos = getCursorPos(e);
    //     // mousePos = getMouseCoordinate.call(this, e);
    //     // console.log('MouseUp ----- ');
    //     // console.log(mousePos);
    // });

    resizeScreen();

};

function magnify(imgID, zoom) {
    var img, glass, w, h, bw, frame;
    img = document.getElementById('magnifyImg');
    img.width = _ww;
    img.height = _hh;
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    //$('.img-magnifier-glass').hide();
    /*set background properties for the magnifier glass:*/
    //glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundImage = "url('" + imgID + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.setProperty('background-size', (_ww * zoom) + "px " + (_hh * zoom) + "px", 'important');
    glass.style.setProperty('-webkit-background-size', glass.style.backgroundSize, 'important');
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    w = 0;
    h = 0;
    frame = document.createElement("DIV");
    frame.setAttribute("class", "img-magnifier-frame");
    img.parentElement.insertBefore(frame, img);
    /*execute a function when someone moves the magnifier glass over the image:*/
    // glass.addEventListener("mousemove", moveMagnifier);
    var hotX = 0;
    var hotY = 0;
    var isDragging = false;
    img.parentElement.removeEventListener(downEvent, downEventProcessor);
    img.parentElement.removeEventListener(upEvent, upEventProcessor);
    img.parentElement.removeEventListener(moveEvent, moveMagnifier);
    img.parentElement.addEventListener(downEvent, downEventProcessor);
    img.parentElement.addEventListener(upEvent, upEventProcessor);
    img.parentElement.addEventListener(moveEvent, moveMagnifier);
    /*and also for touch screens:*/
    // glass.addEventListener("touchmove", moveMagnifier);
    // img.addEventListener("touchmove", moveMagnifier);

    function downEventProcessor(e) {
        var hotPos = getCursorPos(e);
        var framePos = glass.getBoundingClientRect();
        hotX = 0;
        hotY = 0;
        if (hotPos.x > framePos.left && hotPos.x < framePos.left + framePos.width &&
            hotPos.y > framePos.top - _top && hotPos.y < framePos.top + framePos.height - _top) {
            isDragging = true;
            hotX = framePos.left + framePos.width * .49 - hotPos.x;
            hotY = framePos.top + framePos.height * .48 - hotPos.y - _top;
        }
    }

    function upEventProcessor(e) {
        isDragging = false;
    }

    function moveMagnifier(e) {
        if (!isDragging) return;
        //$('.img-magnifier-glass').hide();
        //$('.img-magnifier-frame').hide();
        $(e.target).find('.img-magnifier-glass').show();
        $(e.target).find('.img-magnifier-frame').show();
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        x = pos.x + hotX;
        y = pos.y + hotY;
        x = x - w;
        y = y - h;
        /*prevent the magnifier glass from being positioned outside the image:*/
        if (x > img.width - (w / zoom)) {
            x = img.width - (w / zoom);
        }
        if (x < w / zoom) {
            x = w / zoom;
        }
        if (y > img.height - (h / zoom)) {
            y = img.height - (h / zoom);
        }
        if (y < h / zoom) {
            y = h / zoom;
        }
        /*set the position of the magnifier glass:*/
        frame.style.left = glass.style.left = (x) + "px";
        frame.style.top = glass.style.top = (y) + "px";
        /*display what the magnifier glass "sees":*/

        var dw = glass.offsetWidth / 2;
        var dh = glass.offsetHeight / 2;
        glass.style.backgroundPosition = "" + (-(x * zoom) + dw) + "px " +
            "" + (-(y * zoom) + dh) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/

        if (osStatus === 'Android' || osStatus === 'iOS') {
            if (('changedTouches' in e)) e = e.changedTouches[0];
        }

        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        // x = x - window.pageXOffset;
        // y = y - window.pageYOffset;
        return {x: x, y: y};
    }
}

function getMouseCoordinate(evt) {
    // evt = evt || window.event;
    // if (osStatus === 'Android' || osStatus === 'iOS') {
    //     if (('changedTouches' in evt)) evt = evt.changedTouches[0];
    // }
    // // evt = evt.originalEvent;
    // var oL = 0, oT = 0;
    // if (this.offsetParent) {
    //     var a = this.offsetParent.getBoundingClientRect();
    //     oL = a.left;
    //     oT = a.top;
    // }
    return {
        x: getElemCursorPos(evt).x,
        y: getElemCursorPos(evt).y
    };

}

/****************************************************************************
 //** Software License Agreement (BSD License)
 //** Book Flip slideshow script- Copyright 2011, Will Jones (coastworx.com)
 //** This Script is wholly developed and owned by CoastWorx.com
 //** Copywrite: http://www.coastworx.com/
 //** You are free to use this script so long as this coptwrite notices
 //** and link back to http://www.coastworx.com stays intact in its entirety.
 //** If you want to remove the link back to http://www.coastworx.com then purchase a licence.
 //** You are NOT Permitted to claim this script as your own or
 //** use this script for commercial purposes without the express
 //** permission of CoastWorx Technologies!
 //***************************************************************************/
//    window.screen.orientation.lock('landscape-secondary');

function resizeScreen() {
    numPixels = 40;  //size of block in pixels to move each pass
    pSpeed = 15; //speed of animation, more is slower
    renderer.resize(_wPos.w, _wPos.h);
    setTimeout(function () {
        $('.overlay').fadeOut('fast');
    }, 1000);
}
