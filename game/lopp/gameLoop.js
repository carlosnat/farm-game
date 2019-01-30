function gameLoop() {
    if(myGame.state !== 'stop') {
        window.requestAnimationFrame( () => {
            if ( myGame.FPScounter === 60 ) {
                checkSeconds();
                myGame.FPScounter = 0;
                checkSimulator();
            } else {
                myGame.FPScounter++;                       
            }
            showGameStatus();
            gameLoop();
        });
    }
}

function checkSeconds() {
    if ( myGame.time.secondCounter === 59 ){
        myGame.time.secondCounter = 0;
        checkMinutes();
    } else {
        myGame.time.secondCounter++;
    }
}

function checkMinutes() {
    if ( myGame.time.minutesCounter === 59 ){
        myGame.time.checkMinutes = 0;
    } else {
        myGame.time.minutesCounter++;
    }
}

function generarNumero(max, min){
    const random = Math.floor((Math.random() * (max-min) + min));
    return random;
}

function checkSimulator() {
    checkSunRise();
    if (myGame.sunrise) {
        simulateDay();
    } else {
        simulateNight();
    }
}

function simulateNight() {
    console.log('todos durmiendo zzzZZZZ');
}

function checkSunRise() {
    if ( myGame.time.secondCounter !== 0 && myGame.time.secondCounter % 10 === 0 ){
        myGame.sunrise = !myGame.sunrise;  
    }
    const image = myGame.sunrise ? 'sunny' : 'sleep';
    drawCharacterTurn(image, 'sun');
}


function drawCharacterTurn(image, target) {
    const imageElement = document.createElement('img');
    imageElement.src = `assets/${image}.png`;
    imageElement.classList.add('character-image');
    const targetElement = document.getElementById(target);
    targetElement.innerHTML = "";
    targetElement.append(imageElement);
}

function simulateDay() {
    const action = generarNumero(4,1);

    switch(action) {
        case 1:
            drawCharacterTurn('grass', 'character-playing');
            playGround();
        break;
        case 2:
            drawCharacterTurn('boy', 'character-playing')
            playHuman();
        break;
        case 3:
            drawCharacterTurn('pig', 'character-playing');
            playAnimal();
        break;
    }
}

function playGround(){
    const groundPowerUp = true;
    if(!groundPowerUp) {
        const tileSelectdY = generarNumero(myGame.ground.length, 0);
        const tileSelectedX = generarNumero(myGame.ground[tileSelectdY].length, 0);
        myGame.ground[tileSelectdY][tileSelectedX] = myGame.ground[tileSelectdY][tileSelectedX] === 0 ? 1 : 0;
    } else {
        const arreglo = [];
        myGame.ground.forEach((ele, indeY) => {
            ele.forEach((item, indeX) => {
                if (myGame.ground[indeY][indeX] === 0) 
                    arreglo.push([indeY, indeX]);
            })
        })
        if(arreglo.length > 0){
            const number = generarNumero(arreglo.length, 0);
            myGame.ground[arreglo[number][0]][arreglo[number][1]] = 1;
        }
    }
    paintGround();
}

function playHuman(){

}

function playAnimal(){

}

function paintGround(){
    const ground = document.querySelector('.ground');
    ground.innerHTML = "";
    myGame.ground.forEach( element => {
        element.forEach( item => {
            const tile = document.createElement("div");
            const tileType = item === 0 ? 'tile-sand' : 'tile-green';
            tile.classList.add(tileType);
            ground.append(tile);    
        });
    });
}
