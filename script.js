'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // children this is HTMLCollection.
    let section = document.querySelector('.play-section');
    
    const arrayButtons = [];

    section.addEventListener('click', (even, index) => {
        even.preventDefault();

        if (even.target.matches('.play-block')) {
            // basic information.
            const evens = even.target;
            evens.style.background = 'gray';
            
            const takeDate = evens.attributes[1].value;
            
            // CS
            if (arrayButtons.length > 0) {
                console.log(arrayButtons);
                if (arrayButtons[0] == takeDate) {
                    console.log([true, true]);

                    const objects = document.querySelectorAll(`[play-data="${+takeDate}"]`);
                    objects.forEach(item => {
                        item.style.background = 'red';
                    });
                    
                } else {
                    arrayButtons.length = 0;
                }
            }

            // add element to array.
            arrayButtons.push(takeDate);
        }
    });

    function changeTheme() {
        const button = document.querySelector('.change-theme');

        // take objects.
        const playSection = document.querySelector('.play-section');
        const playButton = document.querySelector('.playButton');
        
        button.addEventListener('click', () => {
            playSection.classList.toggle('black-theme');
            playButton.classList.toggle('black-theme');

            document.body.style.background = 'gray !importantgit a';
        });
    }
    
    changeTheme();
});

