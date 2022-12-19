window.onscroll = function scrolled() {
    document.getElementById('background').style.opacity = (0.8-window.scrollY/document.documentElement.scrollHeight*3);
    if (window.scrollY > document.getElementById('background').height-20) {
        document.getElementById('header').classList.add('header');
    }
    else if (window.scrollY <= document.getElementById('background').height-20) {
        document.getElementById('header').classList.remove('header');
    };
};

document.getElementById('audio').onended = function audio_stopped() {
    alert("stopped");
};