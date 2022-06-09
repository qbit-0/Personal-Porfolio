export class Game {
    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._actors = [];
    }

    update() {
        this._actors.forEach(actor => {
            actor.update(this);
        });
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    draw() {
        this._actors.forEach(actor => {
            actor.draw(this);
        });
    }

    gameLoop() {
        this.clear();
        this.update();
        this.draw();
    }

    addActor(actor) {
        this._actors.push(actor);
    }

    get canvas() {
        return this._canvas;
    }

    get ctx() {
        return this._ctx;
    }
    
    get actors() {
        return this._actors;
    }
}

export class Actor {
    constructor(game) {
        this._game = game;
    }

    update(game) {
    }

    draw(game) {
    }
}