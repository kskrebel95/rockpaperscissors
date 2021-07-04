function checkRounds(rounds){
    if(rounds==5){
        if(userScore>computerScore){
            const content = document.createElement('p');
            content.textContent = 'User Wins!';
            content.classList.add('p');
            winMsg.appendChild(content);
             

        }
        else{
            const content = document.createElement('p');
            content.textContent = 'Computer Wins!';
            content.classList.add('p');
            winMsg.appendChild(content);
            ; 
        }
    }
}

function win(){
    userScore++;
    userScoreKeep.textContent=userScore;
    rounds++;
    checkRounds(rounds);
}
function lose(){
    computerScore++;
    compScoreKeep.textContent=computerScore;
    rounds++;
    checkRounds(rounds);
}
function tie(){
    tieScore++;
    tieScoreKeep.textContent=tieScore;
    rounds++;
    checkRounds(rounds);
    
}
// Create a function that returns randomly 1 of 3 strings (Rock, Paper, Scissors)

function computerPlay(){
    choices =['rock','paper','scissors'];
    var createComputerChoice =choices[Math.floor(Math.random()*choices.length)];
    return createComputerChoice;
}

//Prompt user for a choice and make sure it can take in any case

function userPlay(){
    rockbtn.addEventListener('click',()=>{
        playRound('rock');
    });

    paperbtn.addEventListener('click',()=>{
        playRound('paper');
    });

    scissorsbtn.addEventListener('click',()=>{
        playRound('scissors');
    });


}

//Create a function that takes in the user choice and computer choice and calls respective function
function playRound(playerSelection){
    var computerSelection = computerPlay();
    // console.log(playerSelection,computerSelection);
    
    if (playerSelection=='rock' && computerSelection=='paper'){
        winner='computer';
        lose(playerSelection,computerSelection);
    }
    if (playerSelection=='rock' && computerSelection=='scissors'){
        winner='user';
        win(playerSelection,computerSelection);
    }
    if (playerSelection=='paper' && computerSelection=='rock'){
        winner='user';
        win(playerSelection,computerSelection);
    }
    if (playerSelection=='paper' && computerSelection=='scissors'){
        winner='computer';
        lose(playerSelection,computerSelection);
    }
    if (playerSelection=='scissors' && computerSelection=='paper'){
        winner='user';
        win(playerSelection,computerSelection);
    }
    if (playerSelection=='scissors' && computerSelection=='rock'){
        winner='computer';
        lose(playerSelection,computerSelection);
    }
    if (playerSelection==computerSelection){
        tie(playerSelection,computerSelection);
    }
    
}
//cache DOM
const rockbtn=document.querySelector('#rock');
const paperbtn=document.querySelector('#paper');
const scissorsbtn=document.querySelector('#scissors');
var userScoreKeep=document.querySelector('#userScore');
var compScoreKeep=document.querySelector('#compScore');
var tieScoreKeep=document.querySelector('#tieScore');
var winMsg=document.querySelector('body');

//keeps score
var rounds=0;
var userScore=0;
var computerScore=0;
var tieScore=0;

// Start the game
userPlay();
