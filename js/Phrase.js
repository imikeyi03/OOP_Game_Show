/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
     this.phrase = phrase.toLowerCase();
    }

    /**
        * Display phrase on game board
    */

    addPhraseToDisplay() {
        // splitPhrase by spaces
        let splitPhrase = this.phrase.split('');

        // const variable to select the #phrase ul 
        const ul = document.querySelector('#phrase ul');

        // let variable to hold current character
        let currentLetter = splitPhrase.forEach((letter) => {
            const letters = /[a-z]/;
            
            if(letters.test(letter) === true) {
                let li = document.createElement('LI');
                li.className = `hide letter ${letter}`;
                li.textContent = `${letter}`;
                ul.appendChild(li);
            } else {
                let li = document.createElement('LI');
                li.className = 'space';
                li.textContent = ' ';
                ul.appendChild(li);
            }

        });
    }

    // returns true or false depending on if the letter is found in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // reveal matching letter on the board that the user entered
    showMatchedLetter(letter) {
        
        let allLetters = document.getElementsByClassName('letter');
        
        // When a letter in the phrase is matched, display that letter on page
        for(let i = 0; i < allLetters.length; i++) {
            if(allLetters[i].classList.contains(`${letter}`)) {
                allLetters[i].className = `show letter ${letter}`;
                allLetters[i].textContent = `${letter}`;
            }
        }
    }

}