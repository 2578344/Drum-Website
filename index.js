
var buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function () {
        var buttonHTML = this.innerHTML;
        giveASound(buttonHTML);
        buttonAnimation(buttonHTML);

    })
}

document.addEventListener("keydown", function(event){
    giveASound(event.key);
    buttonAnimation(event.key);
});
function giveASound(key){
    
    switch (key) {
        case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();                
            break;
        case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
            break;
        case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
            break; 
        case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
            break; 
        case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
            break;  
        case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
            break;    
        case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
            break;        
        default: console.log("Sth");
            break;
    }    
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    //don't need to include period before class in add function
    activeButton.classList.add("pressed");
    const myTimeout = setTimeout(turnOffAnimation, 200);
    //or instead this use annonymous function and pass it directly in setTimeout
    function turnOffAnimation(){
    activeButton.classList.remove("pressed");}
}