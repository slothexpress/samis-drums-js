
var drumsArray = document.querySelectorAll(".drum")

drumsArray.forEach(element => {

    var drum = element.classList[0];
    switch (drum) {
        case "w":
            var audioW = new Audio("sounds/tom1.mp3");
            element.addEventListener("click", () => audioW.play());
            break;
        case "a":
            var audioA = new Audio("sounds/tom2.mp3");
            element.addEventListener("click", () => audioA.play());
            break;
        case "s":
            audioS = new Audio("sounds/tom3.mp3");
            element.addEventListener("click", () => audioS.play());
            break;
        case "d":
            audioD = new Audio("sounds/tom4.mp3");
            element.addEventListener("click", () => audioD.play());
            break;
        case "j":
            audioJ = new Audio("sounds/snare.mp3");
            element.addEventListener("click", () => audioJ.play());
            break;
        case "k":
            audioK = new Audio("sounds/kick.mp3");
            element.addEventListener("click", () => audioK.play());
            break;
        case "l":
            audioL = new Audio("sounds/kick.mp3");
            element.addEventListener("click", () => audioL.play());
            break;
        default:
            break;
    };
});





