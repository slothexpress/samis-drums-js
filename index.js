addSoundsToButtons();

function addSoundsToButtons() {
    var drumsArray = document.querySelectorAll(".drum")

    drumsArray.forEach(element => {
        element.addEventListener("click", function () {

            var drum = element.classList[0];
            switch (drum) {
                case "w":
                    var audioW = new Audio("sounds/tom1.mp3");
                    audioW.play();
                    break;
                case "a":
                    var audioA = new Audio("sounds/tom2.mp3");
                    audioA.play();
                    break;
                case "s":
                    audioS = new Audio("sounds/tom3.mp3");
                    audioS.play();
                    break;
                case "d":
                    audioD = new Audio("sounds/tom4.mp3");
                    audioD.play();
                    break;
                case "j":
                    audioJ = new Audio("sounds/snare.mp3");
                    audioJ.play();
                    break;
                case "k":
                    audioK = new Audio("sounds/kick.mp3");
                    audioK.play();
                    break;
                case "l":
                    audioL = new Audio("sounds/crash.mp3");
                    audioL.play();
                    break;
                default:
                    console.log("Switch/Default: " + element.innerHTML);
                    break;
            };

        })

    });
}

