import "babel-polyfill";
import Game from "./game";

window.onload = () => {

    document.onkeydown=(e)=>{
        const key = e.key;
        let newDirection;
        switch(key){
            case 'ArrowLeft':
            case 'Left':
                newDirection = "left";
                break;
            case 'ArrowUp':
            case 'Up':
                newDirection = "up";
                break;
            case 'ArrowRight':
            case 'Right':
                newDirection = "right";
                break;
            case 'ArrowDown':
            case 'Down':
                newDirection = "down";
                break;
            case ' ':
            case 'Spacebar':
                if(myGame.gameover){
                    myGame.launch();
                }
                return;
            default:
                return;
        }
        myGame.snakee.setDirection(newDirection);
    };


    let myGame = new Game(900,600,30);
    myGame.init();

};

