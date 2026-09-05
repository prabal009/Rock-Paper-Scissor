let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const i=Math.floor(Math.random()*3);
    return options[i];
}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw play again";
    msg.style.backgroundColor = "cadetblue";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("Congrats You Won");
        msg.innerText=`You Win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lost");
        msg.innerText=`You Lost ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";

    }
}

const play=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice===compchoice){
        drawgame();

    }else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice=="paper"){
            userwin = compchoice ==="scissor" ? false:true;
        }
        else{
            userwin=compchoice ==="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    play(userchoice);
  });
});