
ROCK PAPER SCISSOR GAME

This is a Rock Paper Scissors game built as a learning project to practice fundamental web development concepts. While it's a basic implementation, it covers essential programming principles that form the foundation of interactive web applications.

How to Play

Click on one of the three options: Rock, Paper, or Scissors

The computer will randomly select its move

The winner is determined by classic rules:

Rock crushes Scissors

Paper covers Rock

Scissors cut Paper

Scores are updated automatically

The result is displayed with color-coded feedback:

Green = You win!

Red = You lose

Black = Draw

Concepts I Learned
1. DOM Manipulation
Selecting elements using querySelector and querySelectorAll

Accessing and modifying element properties like innerText, textContent, and style

Dynamically updating content without page refresh

javascript
const msg = document.querySelector("#msg");
msg.innerText = "You Win!";
msg.style.backgroundColor = "green";
2. Event Listeners
Attaching click events to multiple elements

Using forEach to iterate through NodeLists

Handling user interactions

javascript
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    });
});
3. Functions & Scope
Creating reusable functions for different game phases

Understanding global vs local scope

Function parameters and return values

javascript
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};
4. Control Flow
Conditional statements (if/else, else if)

Ternary operators for concise conditionals

Game logic implementation

javascript
userWin = compChoice === "paper" ? false : true;
5. Data Types & Variables
Working with strings, numbers, and booleans

let and const for variable declaration

Template literals for string interpolation

javascript
msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
6. CSS Styling & Transitions
Flexbox for layout

Hover effects for better UX

Border-radius for circular elements

Smooth transitions for interactions

css
.choice {
    transition: 0.2s;
}
.choice:hover {
    background-color: black;
    transform: scale(1.05);
}
7. Random Number Generation
Using Math.random() and Math.floor() for computer choices

Implementing AI opponent logic

javascript
const randIdx = Math.floor(Math.random() * 3);
8. Game State Management
Tracking scores with variables

Updating UI based on game state

Maintaining consistency between data and display




