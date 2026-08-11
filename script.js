'use strict';

window.addEventListener('DOMContentLoaded', () => {

    function hide() {
        document.querySelectorAll('.hide').forEach(item => {
            item.classList.remove('active');
            item.classList.add('noactive');
        })
    }

    function show(id='home') {
        const home = document.querySelector(`#${id}`);

        if (home.classList.contains('noactive')) {
            home.classList.remove('noactive')
        } 
        home.classList.add('active');
    }

    // show();
    hide();

    document.body.addEventListener('click', (even) => {
        const target = even.target;
        if (target) {
            document.querySelectorAll('button').forEach((item, index) => {
                if (target === item) {
                    hide();
                    show(item.attributes['data-tab'].value);
                }
            });
        }
    });
});