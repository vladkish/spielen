'use strict';

// initialization style for object.
const button = document.querySelector('button');
button.classList.add('onclick-function');
button.style.cssText = `
    color : white; 
    background-color : black;
    border : 4px solid red;
    cursor: progress;
`;

let backgorund = document.body.style.backgroundColor = 'gray';

// function onclikc.
function click_function() {
    // red object's.
    const block = document.getElementById('box'),
        hearts = document.querySelectorAll('.heart')

    if (backgorund == 'gray') {
        backgorund = document.body.style.backgroundColor = 'red';

        block.style.backgroundColor = 'gray';
        hearts.forEach(item => {
            item.style.backgroundColor = 'gray';
        });
    } else {
        backgorund = document.body.style.backgroundColor = 'gray';

        block.style.backgroundColor = 'red';
        hearts.forEach(item => {
            item.style.backgroundColor = 'red';
        });
    }
}