'use strict';

// FAQ, without DomContentLoaded if we have 'defer' in scripts(html a page).
window.addEventListener('DOMContentLoaded', () => {
    // main place(first section).
    const main = document.querySelectorAll('.faq-item');
    const question = document.querySelectorAll('.faq-question');
    const answer = document.querySelectorAll('.faq-answer');

    function hide() {
        answer.forEach(item => {
            item.style.display = 'none';
        });
    }

    function show(tab = 1) {
        answer[tab].style.display = 'block';
    }

    hide();

    main.addEventListener('click', (even) => {
        const target = even.target;
        console.log(target);

        if (target) {
            question.forEach((item, index) => {
                if (item == target) {
                    hide();
                    show(index);
                }
            })
        }
    })
});