'use strict';

const main = function() {

    const body = document.body;
    body.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #74ebd5, #ACB6E5);

        height: 100vh;
        width: 100vw;

        margin: 0;
    `;

    const section = document.createElement('section');
    section.classList.add('section');

    section.style.cssText = `
        border-radius: 16px;
        background: #fff5f7;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 30px 40px;
    `;

    const blockInSection = document.createElement('div');
    blockInSection.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    `;
    blockInSection.classList.add('block-in-section');

    const text = document.createElement('h1');
    text.innerHTML = '<h1>maybe you will forgive me?🥹</h1>';
    text.style.cssText = `
        color: #4a4a4a;
        font-size: 24px;
        text-align: center;
        padding: 10px 25px;
        margin: 0;
    `;

    const blockButtons = document.createElement('div');
    blockButtons.classList.add('block-buttons');
    blockButtons.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    `;

    const firstButton = document.createElement('block');
    firstButton.innerHTML = '<h1>Yes</h1>';
    firstButton.style.cssText = `
        background: #2ecc71;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.2s ease, background 0.2s ease;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 14px 28px;
    `;

    const secondButton = document.createElement('block');
    secondButton.innerHTML = '<h1>No</h1>';
    secondButton.style.cssText = `
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.2s ease, background 0.2s ease;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 14px 28px;
    `;

    body.append(section);
    section.append(blockInSection);

    blockInSection.append(text);
    blockInSection.append(blockButtons);

    blockButtons.append(firstButton);
    blockButtons.append(secondButton);

    // even.
    evenForYes(firstButton);
    evenForNo(secondButton);
};

// function's event handler.
function evenForYes(button) {
    const styleButton = button.style.cssText;
    button.addEventListener('mouseenter', () => {
        button.style.cssText = styleButton + `transform : scale(1.1);`
    });

    button.addEventListener('mouseleave', () => {
        button.style.cssText = styleButton;
    });

    // work with click.
    button.addEventListener('click', () => {
        alert('THANK YOU VERY MATCH, MY BABY');
    })
}

function evenForNo(button) {
    let styleButton = button.style.cssText;

    button.addEventListener('mouseenter', () => {
        button.style.cssText = styleButton + `transform : scale(1.1);`
    });

    button.addEventListener('mouseleave', () => {
        button.style.cssText = styleButton;
    });

    // work with click.
    button.addEventListener('click', () => {
        button.textContent = 'ОТКАЗАНО';        
    });

    button.addEventListener('dblclick', () => {
        button.textContent = 'нет, сказал';        
    });
}

main();