setTimeout( () => {
    const btnStart = document.getElementById('start');
    btnStart.addEventListener('click', () => {
        setGameState('start');
        gameLoop();
    });
    
    const btnStop = document.getElementById('stop');
    btnStop.addEventListener('click', () => {
        setGameState('stop');
    });
    
    const btnRestart = document.getElementById('restart');
    btnRestart.addEventListener('click', () => {
        setGameState('restart');
        setInitialState();
        showGameStatus();
    });
}, 1000); 