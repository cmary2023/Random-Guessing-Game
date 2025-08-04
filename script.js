
//Function to get a valid guess from the player
function getPlayerGuess(maxAttempts = 5) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        const userInput = prompt(`Attempt ${attempts + 1} of ${maxAttempts}:\nEnter a whole number between 1 and 100:`);// Prompt the user for input

        // Check if the user pressed Cancel
        if (userInput === null) {
            alert("You cancelled the input. Please enter a number to continue.");
            attempts++;
            continue;
        }

        // Check if the input is a valid whole number between 1 and 100
        if (/^\d+$/.test(userInput)) {
            const userGuess = Number(userInput);
            if (Number.isInteger(userGuess) && userGuess >= 1 && userGuess <= 100) {
                return userGuess;
            }
        }
        // If the input is invalid, alert the user and increment attempts
        alert("🚫 Invalid input. Please enter a **whole number** between 1 and 100 (no letters or decimals).");
        attempts++;
    }

    throw new Error("Too many invalid attempts. Game aborted.");
}

//Function to check the player's guess against the correct number
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Too low! 🔽 Try a higher number.";
    } else if (playerGuess > correctNumber) {
        return "Too high! 🔼 Try a lower number.";
    } else {
        return "🎉 Correct! You guessed the number!";
    }
}

//Main function to play the number guessing game
function playGame() {
    const correctNumber = Math.floor(Math.random() * 100) + 1;// Generate a random number between 1 and 100
    const maxTries = 10; // Maximum number of attempts allowed
    let attempts = 0;

    // Welcome message and instructions
    alert("🎯 Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nCan you guess it?");

    // Loop until the player guesses the correct number or runs out of attempts
    while (attempts < maxTries) {
        try {
            const userGuess = getPlayerGuess();
            attempts++;
            const result = checkGuess(userGuess, correctNumber);
            alert(result);
            // If the guess is correct, congratulate the player and exit the loop
            if (userGuess === correctNumber) {
                alert(`👏 You got it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`);
                break;
            }
            // If the guess is incorrect, inform the player and continue
            if (attempts === maxTries) {
                alert(`😞 You've used all ${maxTries} attempts.\nThe correct number was: ${correctNumber}`);
            }
        } catch (error) {
            alert(error.message);
            return;
        }
    }
    // Ask the player if they want to play again
    const playAgain = confirm("🔁 Do you want to play again?");
    if (playAgain) {
        playGame(); // Restart the game
    } else {
        alert("👋 Thanks for playing! Goodbye.");
    }
}

// Start the game
playGame();
