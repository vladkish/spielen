'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // children this is HTMLCollection.
    let section = document.querySelector('.play-section');
    
    const arrayButtons = {};

    section.addEventListener('click', (even, index) => {
        if (even.target.matches('.play-block')) {
            // basic information.
            even.preventDefault();
            const evens = even.target;

            const takeDate = evens.attributes[1].value;
            arrayButtons[evens] = takeDate;

            arrayButtons.forEach(item => {
                item.style.background = 'red';
            });
        }
    });
})