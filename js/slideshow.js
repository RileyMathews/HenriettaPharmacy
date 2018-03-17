var urlStart = "url(img/bg";
var urlEnd = ".jpg)";
var x = 1;
var time = 3000
var jumbo = document.getElementById("bg");


function slideshow() {
    setTimeout(function() {
        jumbo.style.backgroundImage = urlStart + x + urlEnd;
        x++;
        if (x === 4) {
            x = 1;
        }
        slideshow();
    }, time);
}

slideshow();