const getName = () => {
    const names = [
        'Besart Abazi',
        'Sylvester Stallone',
        'Arnold Schwarzenegger'
    ];

    return names[Math.floor(Math.random() * names.length)];
}

export { getName };