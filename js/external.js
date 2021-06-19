// Create a function that returns randomly 1 of 3 strings (Rock, Paper, Scissors)

function computerPlay(){
    choices =['rock','paper','scissors'];
    var createComputerChoice =choices[Math.floor(Math.random()*choices.length)];
    // console.log(createComputerChoice);
    return createComputerChoice;
}

//Prompt user for a choice and make sure it can take in any case

function userPlay(){
    var choice= prompt("Enter choice (Rock/Paper/Scissors):");
    return choice.toLowerCase();
}

//Create a function that takes in the user choice and computer choice and returns a string declaring the winner
//return the winner , do not console.log unless to check results
function playRound(playerSelection,computerSelection){
    var winner;
    if (playerSelection=='rock' && computerSelection=='paper'){
        winner='computer';
    }
    if (playerSelection=='rock' && computerSelection=='scissors'){
        winner='user';
    }
    if (playerSelection=='paper' && computerSelection=='rock'){
        winner='user';
    }
    if (playerSelection=='paper' && computerSelection=='scissors'){
        winner='computer';
    }
    if (playerSelection=='scissors' && computerSelection=='paper'){
        winner='user';
    }
    if (playerSelection=='scissors' && computerSelection=='rock'){
        winner='computer';
    }
    if (playerSelection==computerSelection){
        return "tie";
    }
    return winner;
}

//Create a function to call playround 5 times and keeps score of a winner at the end
function game(){   
   var usercount=0;
   var computercount=0;
    for (var i=0;i<5;i++){
        var result=playRound(userPlay(),computerPlay());
        if (result=='user'){
            usercount++;
        }

        if (result=='computer'){
            computercount++;
        }

    }

    if (usercount>computercount){
        console.log("User won with "+usercount+" win(s)");
        console.log("Computer lost with "+computercount+" loss(es)");
    }
    else if (usercount<computercount){
        console.log("Computer won with "+computercount+" win(s)");
        console.log("User lost with "+usercount+" loss(es)");
    }
    else{
        console.log("It ended in a tie.")
    }
}
// Start the game
game();