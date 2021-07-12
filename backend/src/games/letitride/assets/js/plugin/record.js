var recordAudio;
var isAudioPlaying = false;
var playAudio;
var audioBlob;
var isAudioRecording = false;
var pluginUsing = false;

var audioPlayer = document.getElementById("videoPlayer");

// weixin recording part
var _recordingTime = 0;
var _tmr = 0;

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

function wx_hideOptionMenu(){
	wx.hideOptionMenu();
}

var voice = {
    localId: '',
    serverId: ''
};

var replayEndCallback;
function wx_config(){		
	// document.removeEventListener("WeixinJSBridgeReady", wx_hideOptionMenu);
	// document.addEventListener("WeixinJSBridgeReady", wx_hideOptionMenu);
	// wx.config({
	// 	debug: false,
	// 	appId: _conf.appId,
	// 	timestamp: _conf.timestamp,
	// 	nonceStr: _conf.nonceStr,
	// 	signature: _conf.signature,
	// 	jsApiList: _conf.jsApiList
	// });
	// wx.ready(function() {
	// 	wx.hideOptionMenu();
	//
	// 	wx.onVoiceRecordEnd({
	// 		complete: function (res) {
	// 			voice.localId = res.localId;
	// 		}
	// 	});
	//
	// });
}

function wx_startRecord(errfunc) {
    wx.startRecord({
        success: function (res) {
			_recordingTime = (new Date()).getTime();
		},
        cancel: function () {
            alert('用户拒绝授权录音');
        },
		fail: function(){
			if(errfunc) errfunc();
		}
    });
};

function wx_stopRecord(callback) {
    wx.stopRecord({
        success: function (res) {
            voice.localId = res.localId;
			_recordingTime = (new Date()).getTime() - _recordingTime;
			if(callback) callback();
			return;
			wx.uploadVoice({
				localId: voice.localId,
				success: function(res){
					voice.serverId = res.serverId;
				}
			})
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
        }
    });
};


function wx_playVoice(callback) {
    if (voice.localId == '') {
        alert('请先录制一段声音');
        return;
    }		
	wx.playVoice({
		localId: voice.localId		
	});
	if(callback) replayEndCallback = callback;
	clearTimeout(_tmr);
	_tmr = setTimeout(function(){
		wx_stopVoice();
		if(replayEndCallback)
			replayEndCallback();
		replayEndCallback = null;
		_recordingTime = 0;
	},_recordingTime);
	return;
	wx.onVoicePlayEnd({
		serverId: voice.serverId,
		localId: res.localId,
		complete: function (ret) {
			alert('声音播放结束');
			
		}
	});
	wx.downloadVoice({
		serverId: voice.serverId,
		success: function(res){	
		}
	})
};

function wx_pauseVoice() {
    wx.pauseVoice({
        localId: voice.localId
    });
};

function wx_stopVoice() {
    wx.stopVoice({
        localId: voice.localId
    });
};

// general browser recording part
function recordStart(errfunc) {

    // if (osStatus == 'iOS' || osStatus=='Android') {
    //     sendCommand2APP('audiorecordstart', '1', osStatus);
    //     return;
    // }


	function onstream() {

        if (pluginUsing) {
            recordAudio = new StereoAudioRecorder(stream, {
                sampleRate: 44100,
                bufferSize: 512
            });
            recordAudio.record();
        } else {
            recordAudio = RecordRTC(stream, {
                type: 'audio',
                bitsPerSecond: 128000,
                bufferSize: 512,
                numberOfAudioChannels: 1,
                recorderType: StereoAudioRecorder
                // bufferSize: 16384,
            });
            recordAudio.startRecording();
        }
    }

    isAudioRecording = true;

	if(is_weixin()){
		wx_startRecord(errfunc);
	}else{
		if (!window.stream) {
			navigator.getUserMedia({
				audio: true,
				video: false
			}, function (stream) {
				window.stream = stream;
				onstream();
			}, function (error) {
				console.log(error)
				recordStop();
				if (errfunc != undefined)
					errfunc();
				alert(JSON.stringify(error, null, '\t'));
			});
		} else {
			onstream();
		}
	}
}

function recordStop(normalfunc) {
    // if (osStatus == 'iOS' || osStatus == 'Android') {
    //     sendCommand2APP('audiorecordstop', '1',osStatus);
    //     return;
    // }
    isAudioRecording = false;
	if(is_weixin()){
		wx_stopRecord(normalfunc);
	}else{
		if (pluginUsing) {
			if (recordAudio)
				recordAudio.stop(function (blob) {
					audioBlob = blob;
					if (normalfunc) normalfunc();
				});
		} else {
			if (recordAudio)
				recordAudio.stopRecording(function () {
					audioBlob = recordAudio.getBlob();
					if (normalfunc) normalfunc();
				});
		}
	}
}

var replayOldCallback;
function recordReplay(callback, errfunc) {
    // if (osStatus == 'iOS' || osStatus=='Android') {
    //     if(isAudioPlaying == false){
    //        sendCommand2APP('audioplay', '1', osStatus);
    //     }else{
    //        sendCommand2APP('audiostop', '1', osStatus);
    //     }
    //     return;
    // }
    if (true || isAudioPlaying == false) {
		if(is_weixin()){
			//replayEndCallback = callback;
			wx_playVoice(callback);
		}else{
			if(osStatus == 'iOS' || osStatus == 'Android')
				$('.replay').css({'pointer-events':'auto'});
			if (recordAudio && audioBlob) {
				console.log('Replay Started.')
				scriptSoundPlay(window.URL.createObjectURL(audioBlob), callback)
				isAudioPlaying = true;
			} else {
				if (errfunc) errfunc();
			}
		}
    } else {
        recordReplayStop();
    }
}

function audioDownloadToolset() {

    // if (osStatus == 'iOS' || osStatus == 'Android') {
    //     sendCommand2APP('audiodownload', '1', osStatus);
    //     return;
    // }

    if (recordAudio != undefined && audioBlob != undefined) {
        var audioURL;
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        audioURL = window.URL.createObjectURL(recordAudio.getBlob());
        a.href = audioURL;
        a.download = '录音.wav';
        a.click();
        a.remove();
    } else {
        alert('没有录音！');
    }

}

function recordReplayStop(callback, errFunc) {

    // if (osStatus == 'iOS' || osStatus == 'Android') {
    //     sendCommand2APP('audiostop', '1', osStatus);
    //     return;
    // }
	if(is_weixin()){
		if(callback) replayEndCallback = callback;
		wx_stopVoice();
	}else{
		if (recordAudio != undefined && audioBlob != undefined) {
			console.log('Replay Stopped.')
			scriptSoundPlay('');
			isAudioPlaying = false;
			if(callback) callback();
		} else {
			if (errFunc != undefined)
				errFunc();
		}
	}
}


