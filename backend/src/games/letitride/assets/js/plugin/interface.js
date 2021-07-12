
function getScoStatus() {
    var curstudystatus = SCOGetValue('cmi.launch_data');
    return curstudystatus;
};


function setCurScoId(para) {
    var _curScoId = SCOGetValue('cmi.core.lesson_location');
    if (_curScoId != para) {
        SCOSetValue('cmi.core.lesson_location', para);
    } else {
        console.log(":" + _curScoId);
    }
}


function setScoStatus(para) {
    var _Status = para;
    SCOSetValue('cmi.core.lesson_status', _Status);
}




function ScoStatus_init(starId) {
    var _starId = starId;
    if (_starId) {
        setCurScoId(_starId);
    } else {
        setCurScoId('sco01');
    }



}



//暂停状态向平台发送学习状态
function pause_lesson_status() {
    setScoStatus('pause');
}


//继续学习状态向平台发送学习状态
function play_lesson_status() {
    setScoStatus('play');
}


//章节学习完成状态
function sco_completed() {
    setScoStatus('completed');
}

var num = 0;
//切换章节
function changeSco(scoId) {
    //var _curScoId = SCOGetValue('cmi.core.lesson_location');

    //if (_curScoId != scoId) {
    //    SCOSetValue('cmi.core.lesson_location', scoId);
    //    setCurScoId(scoId);
    //}else {
    //    console.log("当前知识点ID为:" + _curScoId);
    //}

    SCOSetValue('cmi.core.lesson_location', scoId);
    //setCurScoId(scoId);
}

