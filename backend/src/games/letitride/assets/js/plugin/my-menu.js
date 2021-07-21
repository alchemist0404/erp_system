$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        return false;
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('select', function (event) {
    event.preventDefault();
});

document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

// window.console.log = function(){
//     // console.error('Sorry , developers tools are blocked here....');
//     window.console.log = function() {
//         return false;
//     }
// };