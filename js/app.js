/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 //  Global Variables

let startBtn = document.getElementById('btn__reset');
let interactionButtons = document.querySelector('#qwerty');


startBtn.addEventListener('click', function()  {
    game = new Game();
    game.resetSession();
    game.startGame();
    
});


// If the user clicks a key button, fire the handleInteraction method
interactionButtons.addEventListener('click', (e) => {
    let selection = e.target;
    if(selection.className == 'key') {
        game.handleInteraction(selection);
    }
});