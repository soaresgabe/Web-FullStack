const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");
const crash = new Audio("sounds/crash.mp3");
const snare = new Audio("sounds/snare.mp3");
const kickbass = new Audio("sounds/kick-bass.mp3");

document.querySelectorAll(".drum").forEach(addEventListener("click", (btn) => {
    makeNoise(btn.srcElement.innerHTML);
}));

document.addEventListener("keydown", (e) => {
    makeNoise(e.key);
})

function makeNoise (btn) {
    switch(btn) {
        case("w"):
            tom1.play();
            break;
        case("a"):
            tom2.play();
            break;
        case("s"):
            tom3.play();
            break;
        case("d"):
            tom4.play();
            break;
        case("j"):
            snare.play();
            break;
        case("k"):
            crash.play();
            break;
        case("l"):
            kickbass.play();
            break;
    }
}