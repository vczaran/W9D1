import Asteroid from "./asteroid";

export default class Game {

    constructor(canvas) {
        let options = {
            pos: [50,50],
            vel: [0,0],
            radius: 50,
            color: 'white'
        }
        this.asteroid = new Asteroid();
        this.ctx = canvas.getContext("2d");
        this.moving_object = new MovingObject(options)
    }
    
    step () {

    }

    move () {

    }

    checkCollisions () {

    }


    draw(ctx) {
        this.moving_object.draw(ctx);
    }

}