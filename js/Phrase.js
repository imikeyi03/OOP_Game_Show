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

}
 