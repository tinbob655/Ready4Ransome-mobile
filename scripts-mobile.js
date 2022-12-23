function header_toggled () {
    document.getElementById('header').classList.toggle('opened');
};

//window.onclick = function clicked() {
//    document.getElementById('audio').play();
//};

function introbox_cleared() {
    document.getElementById('introbox').classList.add('cleared');
    document.getElementById('audio').play();
};