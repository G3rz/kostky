'use strict';

/**
 * Random - Náhodné číslo od 1 do X
 * @param {number} number maximální hodnota
 * @returns
 */
function random(number){
    return Math.floor(Math.random()*number)+1;
}

// Označení, kostek
const diceTrs = document.querySelectorAll('.dice-tr');

diceTrs.forEach((diceTr)=>{
    diceTr.addEventListener('click',function(){

        this.classList.toggle('selected');

    })


})

// Hod kostkami
const roll = document.querySelector('#roll');

roll.addEventListener('click',()=>{
    // Vymazání všech hodů
    diceTrs.forEach((diceTr) => {
        diceTr.children[1].textContent = ""
    })

    // Zápis hodů na označené
    const selectedDiceTrs = document.querySelectorAll('.selected');
    selectedDiceTrs.forEach((selectedDiceTr)=>{
        const selectedInput = selectedDiceTr.children[0].children[0].textContent,
            selectedOutput = selectedDiceTr.children[1];

        roll.classList.add('shake');

        setTimeout(() => {
            roll.classList.remove('shake');
            selectedOutput.textContent = random(selectedInput);
        },800)

    })

})

