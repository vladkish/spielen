'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        const script = document.createElement('script');
        script.src = 'test.js';
        document.body.append(script);
    });
});