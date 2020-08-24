/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
   }
   /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */

   // Creates phrases for use in game
    createPhrases() {
        let phrases = ['Hello little girl','Kato did it','Is this dress small or am I fat','tiggle bitty','I declare bankruptcy'];

        phrases = phrases.map((str) => (new Phrase(str)));
        return phrases;
    };
}



