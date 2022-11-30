const character = document.getElementsByClassName("character")[0]; // create the character
const containerCharacter = document.getElementsByClassName("container-character")[0]; // creates the character's container to place the images and modify their position


const VELOCITY = 10; // set speed to 10

const SCREEN_WIDTH = screen.width; // get the width of the screen
const SCREEN_HEIGHT = screen.height; // get the height of the screen

let xPosition = 500; // sets the starting position x of the character
let yPosition = 300; // sets the starting position y of the character

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] // create the list of game buttons
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // create the list of game directions

window.addEventListener("keydown", (event) => { //create the move function
    const key  = event.key; // assign even.key to key 

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //check if any key was pressed
        return currentKey === key; // return true if any key was pressed
    })

    if(!keyPressedAvaiable) return; // if no key is pressed it returns and does nothing

    directions.forEach((direction) => { // check if you have any directions saved
        if(character.classList.contains(direction)) character.classList.remove(direction); // if you have it clean it
    })


    if(key === "ArrowUp" && yPosition > 10){ // check if the pressed key is the arrowup and does not let the character leave the screen on top
        character.classList.add("turnUp"); // places the image in the turn up direction
        yPosition -= VELOCITY; // shifts the character's position vertically upwards
    }

    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT-220){ // check if the pressed key is the arrowdown and does not let the character leave the screen underneath
        character.classList.add("turnDown"); // places the image in the turn down direction
        yPosition += VELOCITY; // shifts the character's position vertically downwards
    }

    if(key === "ArrowLeft" && xPosition > 0){ // check if the pressed key is the arrowleft and does not let the character leave the screen on left
        character.classList.add("turnLeft"); // places the image in the turn left direction
        xPosition -= VELOCITY; // shifts the character's position horizontally to the left
    }

    if(key === "ArrowRight" && xPosition < SCREEN_WIDTH-120){ // check if the pressed key is the arrowright and does not let the character leave the screen on right
        character.classList.add("turnRight"); // places the image in the turn right direction
        xPosition += VELOCITY; // shifts the character's position horizontally to the right
    }

    containerCharacter.style.top = `${yPosition}px`; // move the image position vertically
    containerCharacter.style.left = `${xPosition}px` // move the image position horizontally
});