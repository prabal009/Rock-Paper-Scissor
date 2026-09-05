# Rock Paper Scissors Game

A classic Rock Paper Scissors game built using HTML, CSS, and JavaScript.

This project was created as a learning exercise to practice fundamental web development concepts, JavaScript logic, DOM manipulation, event handling, and interactive UI design.

---

## Overview

This is a browser-based implementation of the classic Rock Paper Scissors game.

The player selects Rock, Paper, or Scissors, while the computer randomly generates its move. The game compares both choices, determines the winner, updates the score, and displays the result dynamically.

The main goal of this project was to understand how HTML, CSS, and JavaScript work together to create an interactive web application.

---

## Features

- Interactive Rock, Paper, and Scissors choices
- Random computer-generated moves
- Automatic winner determination
- Real-time score tracking
- Dynamic result messages
- Win, lose, and draw feedback
- Hover effects and smooth transitions
- Circular game-choice buttons
- Simple and clean user interface
- Browser-based gameplay with no additional dependencies

---

## How to Play

1. Open the game in a web browser.
2. Select **Rock**, **Paper**, or **Scissors**.
3. The computer randomly selects its move.
4. The game compares both choices.
5. The winner is determined using the classic rules.
6. The score is updated automatically.
7. The result is displayed on the screen.

### Game Rules

| Player Choice | Beats |
|---------------|-------|
| Rock | Scissors |
| Paper | Rock |
| Scissors | Rock |

If both the player and computer choose the same option, the round is a draw.

---



---

## Concepts Learned

### 1. DOM Manipulation

Selecting HTML elements and dynamically modifying their content and styles using JavaScript.

```javascript
const msg = document.querySelector("#msg");

msg.innerText = "You Win!";
msg.style.backgroundColor = "green";
2. Event Listeners

Handling user interactions by attaching click events to multiple game choices.

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    });
});
3. Functions and Scope

Creating reusable functions, passing parameters, returning values, and understanding local and global scope.

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};
4. Control Flow

Using conditional statements and ternary operators to implement the game logic.

userWin = compChoice === "paper" ? false : true;
5. Variables and Data Types

Working with:

Strings
Numbers
Booleans
let
const
Template literals
msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
6. CSS Styling and Transitions

Using CSS to create the game's layout and improve the user experience.

Important concepts included:

Flexbox
Hover effects
Border radius
Transitions
Transformations
.choice {
    transition: 0.2s;
}

.choice:hover {
    background-color: black;
    transform: scale(1.05);
}
7. Random Number Generation

Using Math.random() and Math.floor() to generate the computer's move.

const randIdx = Math.floor(Math.random() * 3);
8. Game State Management

Tracking the player's and computer's scores and updating the interface after each round.

let userScore = 0;
let compScore = 0;
