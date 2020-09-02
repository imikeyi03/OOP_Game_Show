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
        let phrases = ['Hello little girl',
                        'Kato did it',
                        'Is this dress small or am I fat',
                        'tiggle bitty',
                        'I declare bankruptcy'];

        return phrases.map(phrase => new Phrase(phrase));
        
    };

        /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        
        //Randomize the selected phrase using math.Mathrandom and .length 
        let randomizePhrase = Math.floor(Math.random() * this.createPhrases().length);
        let phrase = this.phrases[randomizePhrase];
        
        return phrase;
    };


    startGame() {
        // hide the start overlay div
        let bgOverlay = document.querySelector('#overlay');
        bgOverlay.style.display = 'none';


        // call getRandomPhrase() to select a phrase
       let randomPhrase = this.getRandomPhrase();
       


        //call addPhraseToDisplay and store the phrase in the activePhrase property
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
           
    }


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        //A user wins when all letters have been shown
        let unseenLetters = document.getElementsByClassName('hide');

        if (unseenLetters.length === 0) {
            alert('You Won!');
            return true;
        } else {
            return false;
        }

    };
    /**
    
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        //Selects all heart images in the DOM
        const healthPoints = document.querySelectorAll('img');
        
        //A heart is selected and changed to a 'lostHeart' based on the missed property index value
        healthPoints[this.missed].src = "images/lostHeart.png";
        
        // Increases the value of the missed property
        this.missed++;

        
    };


   








}
