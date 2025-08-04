// Function to get a valid guess from the player
// Now takes 'attempts' and 'maxTries' as arguments to display in the prompt
function getPlayerGuess(attempts, maxTries) {
    const promptMessage = `Attempt ${attempts + 1} of ${maxTries}:\nEnter a whole number between 1 and 100:`;
    const userInput = prompt(promptMessage); // Prompt the user for input

    if (userInput === null) {
        return null; // user cancelled
    }

    if (/^\d+$/.test(userInput)) {
        const userGuess = Number(userInput);
        if (userGuess >= 1 && userGuess <= 100) {
            return userGuess;
        }
    }

    alert("🚫 Invalid input. Please enter a whole number between 1 and 100.");
    return undefined; // invalid input
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
        // Pass the current 'attempts' and 'maxTries' to the function
        const userGuess = getPlayerGuess(attempts, maxTries);

        if (userGuess === null) {
            alert("Game cancelled. Goodbye!");
            return;
        }

        if (userGuess === undefined) {
            // invalid input → do NOT count this attempt
            continue;
        }

        attempts++; // only valid input increases attempts

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
        playGame(); // Recursive call to restart the game
    } else {
        alert("👋 Thanks for playing! Goodbye.");
    }
}

// Start the game
playGame();
