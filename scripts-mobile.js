function init() {
    if (navigator.userAgentData.mobile == false) {
        var HTMLfilename = document.location.href;
        var filename = HTMLfilename.substring(HTMLfilename.lastIndexOf('/') + 1).replace('mobile', 'desktop');
        if (filename == 'index-desktop.html') {
            filename = 'index.html';
        };
        document.location = filename;
    };
    if (document.location.href.substring(document.location.href.lastIndexOf('/') +1) != 'index-mobile.html') {
        setTimeout(() => {
            next_track()
        }, 1000);
    };
};

function next_track() {
    const audio = document.getElementById('audio');
    audio.pause();
    if (track%2 == 0) {
        audio.src = 'music/R4R theme.mp3';
    }
    else {
        audio.src = 'music/March Of Leader Ransome.mp3';
    };
    track++;
    setTimeout(() => {
        audio.play();
    }, 500);
};

function header_toggled () {
    document.getElementById('header').classList.toggle('opened');
};

function introbox_cleared() {
    document.getElementById('introbox').classList.add('cleared');
    document.getElementById('menu-button-content').style.color = '#5dddcc';
    next_track();
    setTimeout(() => {
        document.getElementById('introbox').style.width = 0;
        document.getElementById('introbox').style.height = 0;
    }, 1001);
};

function is_in_bounds(lower_bound, upper_bound, input) {
    if (input > upper_bound) {
        var difference = input - upper_bound -1;
        input = lower_bound + difference;
    }
    else if (input < lower_bound) {
        var difference = lower_bound - input -1;
        input = upper_bound - difference;
    };
    return(input);
};

function gallery_refresh() {
    if (!document.getElementById('image1').src.includes('black%20hoodie')) {
        document.getElementById('gallery').style.opacity = 0.0;
        setTimeout(() => {
            document.getElementById('image1').src = gallery_images[0];
            document.getElementById('image2').src = gallery_images[1];
            document.getElementById('image3').src = gallery_images[2];
            gallery_num = 1;
            document.getElementById('gallery').style.opacity = 1.0;
        }, 700);
    };
};

function gallery_move() {
    document.getElementById('gallery').style.opacity = 0.0;
    setTimeout(() => {
        document.getElementById('image1').src = gallery_images[is_in_bounds(0, 8, gallery_num%9)];
        document.getElementById('image2').src = gallery_images[is_in_bounds(0, 8, gallery_num%9 +1)];
        document.getElementById('image3').src = gallery_images[is_in_bounds(0, 8, gallery_num%9 +2)];
        gallery_num++;
        setTimeout(() => {
            document.getElementById('gallery').style.opacity = 1.0;
        }, 500);
    }, 500);
};

const gallery_images = [
    'images/Merch/black hoodie.webp',
    'images/Merch/black long sleeve t-shirt.webp',
    'images/Merch/Black t-shirt.webp',
    'images/Merch/blue t-shirt.webp',
    'images/Merch/Todd is bad at golf t-shirt.webp',
    'images/Merch/tote bag.webp',
    'images/Merch/White Hoodie.webp',
    'images/Merch/white long sleeve t-shirt.webp',
    'images/Merch/white t-shirt.webp',
];

var gallery_num = 1;
var track = Math.floor(Math.random() *2);

init();