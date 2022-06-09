import { Game, Actor } from "./game.js";

export class BouncingBall extends Game {
    constructor(canvas) {
        super(canvas);
        
        const background = new Background('yellow');
        this.addActor(background);

        const ball = new Ball();
        this.addActor(ball);
    }
}

class Background extends Actor {
    constructor(color) {
        super();
        this._color = color;
    }

    draw(game) {
        const canvas = game.canvas;
        const ctx = game.ctx;
        ctx.fillStyle = this._color;
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    }
}

class Ball extends Actor {
    constructor() {
        super();
        this._x = 0;
        this._y = 0;
        this._vx = 4;
        this._vy = 4;
        this.radius = 20;
    }

    update(game) {
        super.update();

        if (this._x - this.radius < 0) {
            this._x = this.radius;
            this._vx = 4;
        }

        if (this._x + this.radius > game.canvas.width) {
            this._x = game.canvas.width - this.radius;
            this._vx = -4;
        }

        if (this._y - this.radius < 0) {
            this._y = this.radius;
            this._vy = 4;
        }

        if (this._y + this.radius > game.canvas.height) {
            this._y = game.canvas.height - this.radius;
            this._vy = -4;
        }

        this._x += this._vx;
        this._y += this._vy;
    }

    draw(game) {
        const ctx = game.ctx;
        ctx.beginPath();
        ctx.arc(this._x, this._y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
}