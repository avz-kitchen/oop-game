console.log("hello world")

class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;

        this.playerElm = document.getElementById("player");
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vw";

        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";

    }

    doSomething() {
        console.log("doing something..");
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
        console.log("New Position: " + this.positionX);

    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
        console.log("New Position: " + this.positionX)
    }
};

class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 85;
        this.width = 10;
        this.height = 10;
        this.obstacleElm = null;

        this.createDomElement();
    };
    createDomElement() {
        this.obstacleElm = document.createElement("div");

        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vw";
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown() {
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }

}


const player = new Player();
const obstaclesArr = [];
//const o1 = new Obstacle();

setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
}, 3000)


//move all obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown();

        //detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log("game over my fren!");
            location.href = "gameover.html"
        }
    })

}, 30)

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight") {
        player.moveRight();

    }
})





