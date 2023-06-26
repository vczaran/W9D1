import Game from "./game.js";
import MovingObject from "./moving_object.js";

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.height = 1000;
    canvas.width = 500;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 1000);

    // ctx.beginPath();
    // ctx.arc(50,50,100,0,2*Math.PI);
    // ctx.fillStyle = 'white';
    // ctx.fill();
});

let game = new Game(canvas);
game.draw();
