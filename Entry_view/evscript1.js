window.onload = function() {

const enter = document.getElementById("playbtn");
const fv = document.getElementById("firstView");
const video = document.getElementById("video");
const preloader = document.getElementById("preloader");

// It makes the introduction view disappear, 
// and plays the video. (Here's where the user
// interacts with the page)
enter.addEventListener("click", function() {
    fv.style.display = "none";
    video.play();
});

// This way could be eassier since there's
// no need to reach the buttom (in desktop)
document.addEventListener("click", function() {
    fv.style.display = "none";
    video.play();
});

// To hide preloader when video is loaded
video.addEventListener("loadedmetadata", function() {
    preloader.style.display = "none";
});

}
