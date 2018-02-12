var imagesUrl = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg",
    "images/slide5.jpg",
    "images/slide6.jpg",
    "images/slide7.jpg"
]
var index = 1; // slide1.jpg already set, so we start with slide2.jpg
var slide = $("#slide-image"),
    arrowNext = $("#next"),
    arrowPrev = $("#prev");

function changeImage() {
    if(index >= imagesUrl.length) {
        index = 0;
    }
    slide.css("background-image", "url(" + (imagesUrl[index]) + ")");
    index++;
}

var imgInterval = setInterval(changeImage, 5000);

arrowNext.click(function() {
    clearInterval(imgInterval);
    index++;
    if(index >= imagesUrl.length) {
        index = 0;
    }
    slide.css("background-image", "url(" + (imagesUrl[index]) + ")");
    imgInterval = setInterval(changeImage, 5000);
});

arrowPrev.click(function() {
    clearInterval(imgInterval);
    if(index <= 0) {
        index = imagesUrl.length;
    }
    index--;
    slide.css("background-image", "url(" + (imagesUrl[index]) + ")");
    imgInterval = setInterval(changeImage, 5000);
});

