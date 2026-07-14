'use strict';

const allObjectLis = document.querySelector('#categoryList');

allObjectLis.addEventListener('click', (even) => {
    const item = even.target;

    // reset style for every object with operation SP..READ.
    [...allObjectLis.children].forEach(li => {
        li.style.cssText = '';
    });

    const previous = item.previousElementSibling;
    const next = item.nextElementSibling;

    if (previous) {
        previous.style.cssText = `color : red`;
        console.log(true);
    }

    if (next) {
        next.style.cssText = `color : red`;
        console.log(true);
    }
    item.style.cssText = `transform : scale(1.3)`;
}, {once : false});