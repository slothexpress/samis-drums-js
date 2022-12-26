
var drumsArray = document.querySelectorAll(".drum")
var audio = new Audio("sounds/tom-1.mp3");

drumsArray.forEach(element => {
    element.addEventListener("click", () => audio.play());
});





