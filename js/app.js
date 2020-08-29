/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  Temp code to test class instances of phrase and game

let game;
let startBtn = document.getElementById('btn__reset');



startBtn.addEventListener('click', function()  {
    game = new Game();
    game.startGame();

    
});