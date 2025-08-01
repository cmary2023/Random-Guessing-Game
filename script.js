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
