// Function to get a valid guess from the player
// It keeps prompting the user until a valid number (1-100) is entered or the user cancels.
function getPlayerGuess() {
    while (true) {
        const userInput = prompt("Enter a whole number between 1 and 100:");

        if (userInput === null) {
            return null; // User cancelled the game
        }

        // Check if the input is a valid number between 1 and 100
        if (/^\d+$/.test(userInput)) {
            const userGuess = Number(userInput);
            if (userGuess >= 1 && userGuess <= 100) {
                return userGuess; // Return the valid guess
            }
        }

        // If the input is invalid, alert the user and continue the loop
        alert("🚫 Invalid input. Please enter a whole number between 1 and 100.");
    }
}

// Function to check the player's guess against the correct number
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Too low! 🔽 Try a higher number.";
    } else if (playerGuess > correctNumber) {
        return "Too high! 🔼 Try a lower number.";
    } else {
        return "🎉 Correct! You guessed the number!";
    }
}

// Main function to play the number guessing game
function playGame() {
    const correctNumber = Math.floor(Math.random() * 100) + 1;
    const maxTries = 10;
    let attempts = 0;

    alert("🎯 Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nCan you guess it?");

    while (attempts < maxTries) {
        // Get a valid guess from the player (no need for a label here anymore)
        const userGuess = getPlayerGuess();

        if (userGuess === null) {
            alert("Game cancelled. Goodbye!");
            return; // Exit the game
        }

        attempts++; // A valid guess was made, so increment attempts

        const result = checkGuess(userGuess, correctNumber);
        alert(`Attempt ${attempts} of ${maxTries}: ${result}`);

        if (userGuess === correctNumber) {
            alert(`👏 You got it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`);
            break; // Exit the loop because the player won
        }
    }

    // Check if the loop ended because the player ran out of attempts
    if (attempts === maxTries && userGuess !== correctNumber) {
        alert(`😞 You've used all ${maxTries} attempts.\nThe correct number was: ${correctNumber}`);
    }

    // Ask to play again
    const playAgain = confirm("🔁 Do you want to play again?");
    if (playAgain) {
        playGame(); // Start a new game
    } else {
        alert("👋 Thanks for playing! Goodbye.");
    }
}

// Start the game
playGame();
