window.onscroll = function scrolled() {
    document.getElementById('background').style.opacity = (0.8-window.scrollY/document.documentElement.scrollHeight*3);
    if (window.scrollY > document.getElementById('background').height-20) {
        document.getElementById('header').classList.add('init');
        document.getElementById('button-header').classList.add('menu');
    }
    else if (window.scrollY <= document.getElementById('background').height-20) {
        document.getElementById('header').classList.remove('init');
        document.getElementById('button-header').classList.remove('menu');
    };
};

function header_toggled() {
    document.getElementById('header').classList.toggle('open');
};