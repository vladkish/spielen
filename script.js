'use strict';

// task 1.
const allObjectLis = document.querySelector('#categoryList');

allObjectLis.addEventListener('click', (even) => {
    const item = even.target;

    // reset style for every object.
    [...allObjectLis.children].forEach(li => {
        li.style.cssText = '';
    });

    const previous = item.previousElementSibling;
    const next = item.nextElementSibling;


    if (previous) {
        previous.style.cssText = `color : red`;
    }

    if (next) {
        next.style.cssText = `color : red`;
    }
    item.style.cssText = `transform : scale(1.3)`;

}, {once : false});


// task 2
const firstButton = document.querySelector('#goFirstBtn');

firstButton.addEventListener('click', () => {
    const first = allObjectLis.firstElementChild;
    first.style.cssText = `text-decoration : underline; color : red`;
});


const lastButton = document.querySelector('#goLastBJtn');

lastButton.addEventListener('click', () => {
    const last = allObjectLis.lastElementChild;
    last.style.cssText = `text-decoration : underline; color : red`;
});