

function playTheGame() {
    let userNotice;
    if (confirm("Do you want to play the game?") == false) {
        userNotice = "No problem, Goodbye";
    } else {
        let userNumber = prompt("Please enter a number between 0 and 10");
        if (isNaN(userNumber) = true);
        alert("Sorry Not a number, Goodbye");
    } else {
             if (0 <= userNumber <=10) { 
                let computerNumber
                function computerNumber(0, 11) {
                    return Math.random()
                    return Math.floor(Math.random(0) * 11);
                }

              } else {
                  alert("Sorry it’s not a good number, Goodbye");
              }

            }
}

function test(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
        alert("WINNER");
        return;
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again");


    } 

    




}

