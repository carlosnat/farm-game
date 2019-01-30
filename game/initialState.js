let myGame = {};
setInitialState();

function setGameState(state) {
    myGame.state = state;
    showGameStatus();
}

function setInitialState() {
    myGame = {
        time: {
            secondCounter: 0,
            minutesCounter: 0,
            hoursCounter: 0
        },
        sunrise: true,
        FPScounter: 0,
        state: 'stop',
        ground: [
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
        ]
    };
}