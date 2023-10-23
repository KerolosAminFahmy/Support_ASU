
var nav = document.querySelector('header');

window.onscroll = function() {

var scrollPosition = window.scrollY;
var threshold = 10;
nav.style.position = "sticky";
// nav.style.background = "#262626";
if (scrollPosition > threshold) {
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';
}else{
    // nav.style.background = "#000";
    nav.style.boxShadow = 'none';
}
}
