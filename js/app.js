/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  Temp code to test class instances of phrase and game

const game = new Game();

game.phrases.forEach((phrases, index) => {
    console.log(`Phrase ${index} - phrase: ${phrases.phrase}`);
});