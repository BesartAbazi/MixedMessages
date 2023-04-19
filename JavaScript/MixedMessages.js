import { getName } from "./getName.js";

const getMixedMessages = () => {
    const messages = [
        'Hallo',
        'Hello',
        'Whats up',
        'Hi',
        'Hey'
    ];

    return `${messages[Math.floor(Math.random() * messages.length)]} ${getName()}`;
}

console.log(getMixedMessages());