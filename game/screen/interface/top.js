let gameStatus;
let gameTime;

setTimeout( () => {
    gameStatus = document.getElementById('gameStatus');
    gameTime = document.getElementById('gameTime');
},1000);

function showGameStatus() {
    gameStatus.innerHTML = myGame.state;
    gameTime.innerHTML = `Hrs: ${myGame.time.hoursCounter} Min: ${myGame.time.minutesCounter} Sec: ${myGame.time.secondCounter} `;
}