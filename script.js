function playGame() {
     alert("🎯 Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nCan you guess it?");
    
    const correctNumber = Math.floor(Math.random() * 100) + 1;
    const maxTries = 10;
    let attempts = 0;

   

    while (attempts < maxTries) {
        const attemptLabel = `Attempt ${attempts + 1} of ${maxTries}:\n`;
        const userGuess = getPlayerGuess(attemptLabel);

        if (userGuess === null) {
            alert("Game cancelled. Goodbye!");
            return;
        }

        // Skip incrementing attempts on invalid input
        if (userGuess === undefined) {
            continue;
        }

        attempts++; // Only valid guess gets counted

        const result = checkGuess(userGuess, correctNumber);
        alert(result);

        if (userGuess === correctNumber) {
            alert(`👏 You got it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`);
            break;
        }

        if (attempts === maxTries) {
            alert(`😞 You've used all ${maxTries} attempts.\nThe correct number was: ${correctNumber}`);
        }
    }

    const playAgain = confirm("🔁 Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("👋 Thanks for playing! Goodbye.");
    }
}
