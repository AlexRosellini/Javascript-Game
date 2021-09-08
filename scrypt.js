const character = document.querySelector(".umu");
const block = document.querySelector(".block")
let counter=0;
let game = document.querySelector(".game");

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
        alert("Congrats, "+Math.floor(counter/100) + " presents were delivered");        
        counter=0;
        window.location.reload();

    } else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
})
