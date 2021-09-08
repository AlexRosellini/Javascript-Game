const character = document.querySelector(".umu");
const block = document.querySelector(".block")
var counter=0;


document.addEventListener("click", (event) => { 
if (character.classList != "animate") {
    character.classList.add("animate");
}
setTimeout(function () {
    character.classList.remove("animate");
},500)
let audio = new Audio("umu.mp3")
audio.play();
})

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<60 && blockLeft>-60 && characterTop>=120) {
        block.style.animation = "none";
        block.style.animation = "none";
        alert("Game Over.");
    }
})
