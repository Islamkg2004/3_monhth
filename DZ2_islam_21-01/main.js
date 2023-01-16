const box = document.getElementsByClassName("box");

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 430 && positionY === 0) {
        positionX ++;
        box[0].style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 430 && positionY <= 430) {
        positionY ++;
        box[0].style.top = `${positionY}px`;
        setTimeout(move, 10);
    } else if (positionX >= 0 && positionY >= 430) {
        positionX --;
        box[0].style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX <= 430 && positionY >= 0) {
        positionY --;
        box[0].style.top = `${positionY}px`;
        setTimeout(move, 10);
    }
};
move();


let interVall = 0;
function see (){
    interVall++;
    console.log(interVall + " сек.");
    if(interVall === 60){
        clearInterval(id);
    }
}
id = setInterval(see,1000);