'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs');
    const content = document.querySelectorAll('.content');

    function hiden() {
        content.forEach(item => {
            item.style.display = 'none';
        })

        tabs.forEach(item => {
            item.classList.remove('active');
        })
    }

    function show(tab = 0) {
        content[tab].style.display = 'block';
        tabs[tab].classList.add('active');
    }

    hiden();
    show();

    document.body.addEventListener('click', (even) => {
        const target = even.target;

        if (target) {
            tabs.forEach((item, index) => {
                if (item === target) {
                    hiden();
                    show(index);
                }
            });
        }
    });
})