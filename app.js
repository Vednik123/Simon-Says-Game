let gameSeq =[];
let userSeq=[];
let highScore=[];
let high = 0;

let start = false;
let level = 0;

let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let colors = ["red","yellow","green","blue"];
body.addEventListener("keypress",function(){
    if(start == false)
    {
        start = true;
        console.log("game started");
    }

    levelUp();
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIndex = Math.floor(Math.random() * 4);
    let randColor = colors[randIndex];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function btnFlash(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },350);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns)
{
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
            setTimeout(levelUp,1000);
    }
    else
    {
        h2.innerHTML = `Game Over!<b> Your score was ${level-1} </b><br>Press any key to continue.`
        highScore.push(level-1);
        high = Math.max(...highScore);
        h3.innerText = `High score : ${high}`;
        reset();
    }
}

function reset(){
    start = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}
