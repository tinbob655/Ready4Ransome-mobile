function init() {
    if (navigator.userAgentData.mobile == false) {
        var HTMLfilename = document.location.href;
        var filename = HTMLfilename.substring(HTMLfilename.lastIndexOf('/') + 1).replace('mobile', 'desktop');
        if (filename == 'index-desktop.html') {
            filename = 'index.html';
        };
        document.location = filename;
    };
};

function header_toggled () {
    document.getElementById('header').classList.toggle('opened');
};

function introbox_cleared() {
    document.getElementById('introbox').classList.add('cleared');
    document.getElementById('audio').play();
};

function gallery_refresh() {
};

//window.onload = init();