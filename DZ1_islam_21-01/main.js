const gmailInput = document.querySelector("#gmailInput")
const gmailCheck = document.querySelector('#gmailCheck  ')
const gmailResult  = document.querySelector('#gmailResult')

const regExp =  /^\[a-zA-Z0-9]+@+gmail+\.ru|com|info$/
gmailCheck.addEventListener("click", ()=>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerText = "адрес введен правильно :)"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerText = "адрес введен не правильно :("
        gmailResult.style.color = "red"
    }
})



let pos = 0
const start = document.querySelector(".start")
function recursionBox (){
    pos ++;
    if (pos > 450) return;
    document.querySelector(".second").style.left = pos + "px";
    animation();
}
function animation (){
    setTimeout(recursionBox, 10);
}
start.addEventListener('click', () => {
    animation()
})





