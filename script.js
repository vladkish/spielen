'use strict';

// FAQ.
function FAQ() {
    // object answer
    const answer = {
        1: 'answer 1',
        2: 'answer 2',
        3: 'answer 3',
        4: 'answer 4',
    };

    const blockQuestion = document.querySelector('.block-question');
    let objectAnswer = document.createElement('h1');

    blockQuestion.addEventListener('click', (even) => {
        if (even.target.matches('button') && even.target) {
            const index = even.target.attributes['data-number'].value;
            // create object(answer).
            objectAnswer.textContent = answer[index];
            even.target.append(objectAnswer);
        }
    });
}

// Burger menu.
function burgerMenu() {
    // button Menu.
    const buttonMenu = document.querySelector('.burger');

    // menuPlace.
    const menuPlace = document.createElement('div');
    menuPlace.style.cssText = `
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 100%;
        background : black;

        color : white;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

    // all text from header.
    const ul = document.querySelector('.ul');
    ul.style.cssText = `
        * {
            color : white !important;
        }
    `;

    // close 'X'.
    const buttonClose = document.createElement('button');
    buttonClose.textContent = 'X'
    buttonClose.style.cssText = `
        color : white;
        background : red;
        padding : 20px;
        maring : 20px;
        border : 2px solid white;
        border-radius : 70px;

        position: absolute;
        right: 0px; 
    `;

    // function menu.
    function menu() {
        buttonMenu.addEventListener('click', () => {
            if (buttonMenu.classList.contains('noactiv')) {
                document.body.append(menuPlace);
                menuPlace.append(ul);
                menuPlace.append(buttonClose);

                document.querySelector('.header').style.cssText = `
                    display : none;
                `;

                buttonClose.addEventListener('click', () => {
                    menuPlace.remove();

                    document.querySelector('.header').style.cssText = `
                        display : block;
                    `;
                    document.querySelector('.logo').append(ul);
                })
            }
        });
    }
    menu();
}

// change theme
function changeTheme() {
    const buttonChange = document.querySelector('.theme-toggle');

    const example = [
        document.querySelector('.section-main'), 
        document.querySelector('.header'), 
        document.querySelector('.block')
    ];

    buttonChange.addEventListener('click', () => {
        example.forEach(item => {
            item.classList.toggle('dark');
        });
    });
}

// data in project.
const data = {
    'faq' : FAQ,
    'changeTheme' : changeTheme,
    'burgerMenu' : burgerMenu
}

data.faq();
data.changeTheme();
data.burgerMenu();