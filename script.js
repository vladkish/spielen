'use strict';

const faqAnswer = document.querySelectorAll('.faq-answer');
const faqQuestion = document.querySelectorAll('.faq-question');

function hide() {
    faqAnswer.forEach(item => {
        item.style.display = 'none';
    });
}

function show(tab=0) {
   faqAnswer[tab].style.display = 'block'; 
}
hide();

document.querySelector('.tab-content').addEventListener('click', (even) => {
    const target = even.target;
    console.log(target);
    if (target) {
        faqQuestion.forEach((item, index) => {
            if (target === item) {
                hide();
                show(index);
            }
        })
    }
})