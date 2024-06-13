    document.body.style.backgroundColor = getRandomColor();
    this.style.backgroundColor = 'red';  // Muda a cor do botão para vermelho
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


