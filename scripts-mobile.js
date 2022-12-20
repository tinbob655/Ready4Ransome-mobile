window.onscroll = function scrolled() {
    document.getElementById('fade-with-scroll').style.opacity = (0.8-window.scrollY/document.documentElement.scrollHeight*5);
    if (window.scrollY > document.getElementById('fade-with-scroll').height-20) {
        document.getElementById('header').classList.add('header');
    }
    else if (window.scrollY <= document.getElementById('fade-with-scroll').height-20) {
        document.getElementById('header').classList.remove('header');
    };
};