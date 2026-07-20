'use strict';

// style
const content = document.createElement('div');
content.textContent = 'take';
content.classList.add('block');
content.style.cssText = `
    color : white;
    border : 5px solid pink;
    background : red;
    padding : 50px;

    position: absolute;
    top : 250px;
    left : 100px;

    max-width: 50px;
    max-height: 50px;
`;

// native-positon - div.
const blockExample = document.createElement('div');
blockExample.textContent = 'HEREE'
blockExample.style.cssText = `
    color : white;
    border : 5px solid black;
    background : white;
    padding : 50px;
    color : black;

    max-width: 50px;
    max-height: 50px;
`;

// body
document.body.style.background = 'gray';

// create.
document.body.append(content);
document.body.append(blockExample);

window.addEventListener('DOMContentLoaded', () => {
    const block = document.querySelector('.block');

    block.addEventListener('touchmove', (e) => {
        const y = Math.round(e.changedTouches[0].pageY);
        const x = Math.round(e.changedTouches[0].pageX);
        block.style.cssText += `
            position: absolute;
            top : ${y}px;
            left : ${x}px;
        `;

        if (y >= -25 && y <= 25 && x >= -25 && x <= 25) {
            alert("GREAT");
        }
    });
});