import { BouncingBall } from "./projects/bouncing_ball.js";

const canvas = document.querySelector('.featured-project canvas');

const bouncingBall = new BouncingBall(canvas);

setInterval(() => {
    bouncingBall.gameLoop();
}, 1000 / 60);