window.onscroll = function scrolled() {
    document.getElementById('background').style.opacity = (1-window.scrollY/document.documentElement.scrollHeight*2.5);
    if (window.scrollY > document.getElementById('background').height-20) {
        document.getElementById('header').classList.add('header');
    }
    else if (window.scrollY <= document.getElementById('background').height-20) {
        document.getElementById('header').classList.remove('header');
    }
}