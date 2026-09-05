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

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the game |
| CSS3 | Styling, layout, hover effects, and transitions |
| JavaScript | Game logic, DOM manipulation, events, and score management |

---

## Concepts Learned

### 1. DOM Manipulation

Selecting HTML elements and dynamically modifying their content and styles using JavaScript.

```javascript
const msg = document.querySelector("#msg");

msg.innerText = "You Win!";
msg.style.backgroundColor = "green";

DOM manipulation allows the game interface to change dynamically without refreshing the page.

2. Event Listeners

Handling user interactions by attaching click events to the Rock, Paper, and Scissors choices.

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    });
});

This allows the game to respond whenever the player clicks on a choice.

3. Functions and Scope

Creating reusable functions for different parts of the game and understanding parameters, return values, local scope, and global scope.

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];
};
4. Control Flow

Using if, else if, else, and ternary operators to implement the game's decision-making logic.

if (userChoice === compChoice) {
    drawGame();
}
else {
    // Determine the winner
}

A ternary operator can also be used for shorter conditional expressions:

userWin = compChoice === "paper" ? false : true;
5. Variables and Data Types

The project uses different JavaScript data types and variable declarations.

Some of the concepts practiced include:

Strings
Numbers
Booleans
let
const
Template literals

Example:

let userScore = 0;
let compScore = 0;

Template literals are used to dynamically create messages:

msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
6. CSS Styling and Transitions

CSS was used to create the layout and improve the visual appearance of the game.

Important concepts practiced include:

Flexbox
Hover effects
Border radius
CSS transitions
Transformations
Alignment
Spacing

Example:

.choice {
    transition: 0.2s;
}

.choice:hover {
    background-color: black;
    transform: scale(1.05);
}
7. Random Number Generation

The computer's choice is generated using Math.random() and Math.floor().

const randIdx = Math.floor(Math.random() * 3);

The generated index is then used to select one of the available choices.

8. Game State Management

The game keeps track of the player's score and the computer's score using variables.

let userScore = 0;
let compScore = 0;

These values are updated after every round and displayed dynamically on the webpage.
