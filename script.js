// Function to get a valid guess from the player
function getPlayerGuess(maxAttempts = 5) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        const userInput = prompt(`Attempt ${attempts + 1} of ${maxAttempts}:\nEnter a whole number between 1 and 100:`);

        if (userInput === null) {
            alert("You cancelled the input. Please enter a number to continue.");
            attempts++;
            continue;
        }

        if (/^\d+$/.test(userInput)) {
            const userGuess = Number(userInput);
            if (Number.isInteger(userGuess) && userGuess >= 1 && userGuess <= 100) {
                return userGuess;
            }
        }

        alert("🚫 Invalid input. Please enter a **whole number** between 1 and 100 (no letters or decimals).");
        attempts++;
    }

    throw new Error("Too many invalid attempts. Game aborted.");
}

// Function to check the player's guess against the correct number
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return "Too low! Try a higher number.";
    } else if (playerGuess > correctNumber) {
        return "Too high! Try a lower number.";
    } else {
        return "🎉 You guessed correctly!";
    }
}

// Function to play the game
function playGame() {
    const correctNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 7;

    while (attemptsLeft > 0) {
        let guess;

        try {
            guess = getPlayerGuess();
        } catch (e) {
            alert(e.message);
            return;
        }

        const feedback = checkGuess(guess, correctNumber);
        alert(feedback);

        if (feedback === "🎉 You guessed correctly!") {
            console.log(`🎯 The number was ${correctNumber}.`);
            return;
        }

        attemptsLeft--;
        if (attemptsLeft > 0) {
            alert(`❗ You have ${attemptsLeft} attempts left.`);
        }
    }

    alert(`😢 Out of attempts! The number was ${correctNumber}.`);
    console.log(`Game over. The correct number was ${correctNumber}.`);
}

// Game loop
function startGame() {
    do {
        playGame();
    } while (confirm("🔁 Do you want to play again?"));

    alert("👋 Thanks for playing!");
}

// Start the game
startGame();
