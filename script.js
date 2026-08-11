'use strict';

window.addEventListener('DOMContentLoaded', () => {

    function hide() {
        document.querySelectorAll('div').forEach(item => {
            item.classList.toggle('active');
        })
    }

    function show(id='home') {
        const home = document.querySelector(`#${id}`);
        home.classList.toggle('active');
    }

    hide();
    show();

    document.body.addEventListener('click', (even) => {
        const target = even.target;
        if (target) {
            document.querySelectorAll('button').forEach((item, index) => {
                if (target === item) {
                    hide();
                    show(item.attributes['data-tab'].value);
                    // console.log(item.attributes['data-tab'].value);
                }
            });
        }
    });
});