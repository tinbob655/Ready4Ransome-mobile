if (document.location.pathname == '/index.html') {
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
};

function header_toggled() {
    document.getElementById('header').classList.toggle('open');
};

const gallery_images = ['images/Merch/black hoodie.webp',
                        'images/Merch/black long sleeve t-shirt.webp',
                        'images/Merch/Black t-shirt.webp',
                        'images/Merch/blue t-shirt.webp',
                        'images/Merch/Todd is bad at golf t-shirt.webp',
                        'images/Merch/tote bag.webp',
                        'images/Merch/White Hoodie.webp',
                        'images/Merch/white long sleeve t-shirt.webp',
                        'images/Merch/white t-shirt.webp'];

function is_in_bounds (lower_bound, upper_bound, input) {
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
    gallery_num = 1;
    document.getElementById('gallery').style.opacity = 0.0;
    setTimeout(() => {
        document.getElementById('image1').src = gallery_images[0];
        document.getElementById('image2').src = gallery_images[1];
        document.getElementById('image3').src = gallery_images[2];
        document.getElementById('gallery').style.opacity = 1.0;
    }, 700);
};

function gallery_move() {
    document.getElementById('gallery').style.opacity = 0.0;
    setTimeout(() => {
        document.getElementById('image1').src = gallery_images[is_in_bounds(0, 8, gallery_num%9)];
        document.getElementById('image2').src = gallery_images[is_in_bounds(0, 8, gallery_num%9 +1)];
        document.getElementById('image3').src = gallery_images[is_in_bounds(0, 8, gallery_num%9 +2)];
        gallery_num++;
        document.getElementById('gallery').style.opacity = 1.0;
    }, 700);
};

var gallery_num = 1;