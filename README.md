# 🎯 Number Guessing Game

A simple interactive JavaScript game where the player tries to guess a randomly generated number between 1 and 100. The game provides feedback after each guess and limits the number of attempts.

## 🕹️ How to Play

- The computer selects a **random number** between **1 and 100**.
- The player has **10 attempts** to guess the number correctly.
- After each guess, the game provides hints:
  - 🔼 "Too high!" if the guess is higher than the target number.
  - 🔽 "Too low!" if the guess is lower than the target number.
  - 🎉 "Correct!" if the guess is spot on.
- Invalid inputs (non-numbers, decimals, empty, etc.) count as attempts and will prompt an error message.
- The player can cancel at any time or restart the game when it's over.

## 🧠 Features

- Input validation (only whole numbers between 1 and 100 accepted)
- Clear feedback and visual cues via emojis
- Prompts and alerts for easy interaction
- Play-again functionality after the game ends
- Error handling for invalid or canceled input

## 💻 Technologies

- HTML (for embedding the script)
- JavaScript (core game logic using `prompt()`, `alert()`, and `confirm()`)

## 🚀 Getting Started

1. Clone or download this repository.
2. Open the HTML file in any modern web browser.
3. Play the game directly in the browser using prompts and alerts.

### Example

```javascript
playGame(); // Starts the game
