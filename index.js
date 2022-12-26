
var drumsArray = document.querySelectorAll(".drum");

drumsArray.forEach(element => {
    element.addEventListener("click", () => alert("This is the " + element.classList));
});