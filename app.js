let gameseq = [];
let userseq=[];
let started = false;
let level = 0;
let maxscore = 0;
let color = ["red","blue","yellow","green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started ==false){
        started=true;
        console.log("game started");

        levelup();
    }
})
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function btnpress(){
    let btn = this;
    userbtn(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx = Math.floor(Math.random()*4);
    let radncolor =color[randidx];
    let randbtn = document.querySelector(`.${radncolor}`);
    gameseq.push(radncolor);
    console.log(gameseq);
    flashbtn(randbtn);
}
function check(idx){
    if(gameseq[idx]=== userseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        maxscore = Math.max(maxscore,level);
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> Max score : ${maxscore} <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
