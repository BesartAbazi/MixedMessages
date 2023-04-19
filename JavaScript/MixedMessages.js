const getMixedMessages = () => {
    const messages = [
        'Hallo',
        'Hello',
        'Whats up',
        'Hi',
        'Hey'
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}

console.log(getMixedMessages());