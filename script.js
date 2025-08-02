function getPlayerGuess(attemptLabel = "") {
    const userInput = prompt(`${attemptLabel}Enter a whole number between 1 and 100:`);

    if (userInput === null) {
        alert("You cancelled the input. Please enter a number to continue.");
        return null;
    }

    if (/^\d+$/.test(userInput)) {
        const userGuess = Number(userInput);
        if (Number.isInteger(userGuess) && userGuess >= 1 && userGuess <= 100) {
            return userGuess;
        }
    }

    alert("🚫 Invalid input. Please enter a **whole number** between 1 and 100 (no letters or decimals).");
    return undefined;
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Too low! 🔽 Try a higher number.";
    } else if (playerGuess > correctNumber) {
        return "Too high! 🔼 Try a lower number.";
    } else {
        return "🎉 Correct! You guessed the number!";
    }
}

function playGame() {
    const correctNumber = Math.floor(Math.random() * 100) + 1;
    const maxTries = 10;
    let attempts = 0;

    alert("🎯 Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nCan you guess it?");

    while (attempts < maxTries) {
        const attemptLabel = `Attempt ${attempts + 1} of ${maxTries}:\n`;
        const userGuess = getPlayerGuess(attemptLabel);

        if (userGuess === null) {
            // User canceled
            alert("Game cancelled. Goodbye!");
            return;
        }

        if (userGuess === undefined) {
            // Invalid input, but count as an attempt
            attempts++;
            continue;
        }

        attempts++;
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

playGame();
