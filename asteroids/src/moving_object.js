export default class MovingObject{
    constructor (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        }

    move () {

    }

    draw (ctx) {
        
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    isCollidedWith(otherMovingObject) {

    }
}
