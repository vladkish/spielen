// Stein, Schere, Papier 

'use strict';

const array = [
    'stein',
    'schere',
    'papier',
]

const actionComputer = array[Math.floor(Math.random() * 3)];
const frageFurUser = confirm('Möchtest du spielen?');

function aktuellFrage() {
    switch (frageFurUser) {
        case true:
            let actionUser = prompt('Deine Wahl? (Stein / Schere / Papier)');
            let count = 0;

            while (!actionUser) {
                actionUser = prompt('Deine Wahl? Zweiter Versuch...');
                count++;

                if (count == 5) {
                    break;
                }
            }

            return actionUser;
        case false:
            return 'Okay, bis bald!';
        default:
            return 'Vielleicht hast du ein Problem :)';
    }
}

const AKTUELL = aktuellFrage();

if (array.includes(AKTUELL.toLowerCase())) {
    console.log(true);

    if (AKTUELL == 'schere' && actionComputer == 'schere') {
        document.write('Unentschieden!');
    }

} else {
    console.log('Was du geschrieben hast, ist falsch. Ich möchte nicht mit dir spielen.');
}