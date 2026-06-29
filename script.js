'use strict';

const createChat = function() {

    // memore chat
    const allMessage = {
        'allChat' : []
    };

    return {
        send: function (username, message) {

            // all Chat.
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            const dateAndTime = `${hours}:${minutes}`
            allMessage.allChat.push(`${dateAndTime} ${username} : ${message}`);

            // list chat 
            if (allMessage[username]) {
                allMessage[username].push(message);
            } else {
                allMessage[username] = [];
                allMessage[username].push(message);
            }
        }, 
        history: function (username) {
            return `${username} : ${allMessage[username].join('\n')}`;
        },
        clear: function (username) {
            allMessage[username].length = 0;
        },
        messageCount: function (username) {
            return allMessage[username].length;
        },
        allChatShowen : function() {
            return allMessage.allChat;
        }
    };
}

// create Chat.
const mainChat = createChat();

mainChat.send('Alice', "hello");

mainChat.send('Bob', 'Hello, how are you ?');
mainChat.send('Bob', 'Hello, how are you ?');
mainChat.send('Bob', 'Hello, how are you ?');

console.log(mainChat.history('Bob'));