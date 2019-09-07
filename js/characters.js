// Basic class for characters
import {Bomb, Explosion, NewBomb} from "./bomb";

export function Personage(x, y) {
    this.htmlElement = document.createElement('div');

    this.x = x;
    this.y = y;

    this.htmlElement.style.left = (50 * y) + 'px';
    this.htmlElement.style.top = (50 * x) + 'px';

    this.moveLeft = function () {
        this.htmlElement.style.left = Number(this.htmlElement.style.left.slice(0, -2)) - 50 + "px"
    };

    this.moveUp = function () {
        this.htmlElement.style.top = Number(this.htmlElement.style.top.slice(0, -2)) - 50 + "px"
    };

    this.moveRight = function () {
        this.htmlElement.style.left = Number(this.htmlElement.style.left.slice(0, -2)) + 50 + "px"
    };

    this.moveDown = function () {
        this.htmlElement.style.top = Number(this.htmlElement.style.top.slice(0, -2)) + 50 + "px"
    };
    // according to the key, which was pressed, character will move in one of 4 directions
    this.move = function (key, map) {
        if (key === "ArrowLeft" || key === "a") {
            if ((this.y > 1) && (map[this.x][this.y - 1] === 2)) {
                this.moveLeft();
                this.y -= 1;
            }
        } else if (key === "ArrowUp" || key === "w") {
            if ((this.x > 1) && (map[this.x - 1][this.y] === 2)) {
                this.moveUp();
                this.x -= 1;
            }
        } else if (key === "ArrowRight" || key === "d") {
            if ((this.y < 11) && (map[this.x][this.y + 1] === 2)) {
                this.moveRight();
                this.y += 1;
            }
        } else if (key === "ArrowDown" || key === "s") {
            if ((this.x < 11) && (map[this.x + 1][this.y] === 2)) {
                this.moveDown();
                this.x += 1;
            }
        }
    }

}


export function Bomberman(x, y, bombs_number) {
    Personage.call(this, x, y);
    this.htmlElement.className = 'bomberman';
    this.bombs_number = bombs_number;
    this.alive = true;

    this.die = function () {
        this.alive = false;
    };


    this.plantBomb = async function (field) {
        // blocks planting when number of bombs is zero
        if (this.bombs_number < 1) {
            return 0;
        }

        this.bombs_number -= 1;
        let bomb = new Bomb(this.x, this.y);
        field.field.appendChild(bomb.htmlElement);
        // time before explosion
        await sleep(2000);

        // possibly damaged sides
        let sides = [[bomb.x, bomb.y - 1], [bomb.x - 1, bomb.y], [bomb.x, bomb.y + 1], [bomb.x + 1, bomb.y]];
        let damagedSides = [];


        for (let s = 0; s < sides.length; s++) {
            let side = field.map[sides[s][0]][sides[s][1]];
            if ((side === 2) || (side === 3) || (side === 5)) {
                damagedSides.push(sides[s]);
            }

            for (let e = 0; e < field.enemies.length; e++) {
                if ((field.enemies[e].x === sides[s][0]) && (field.enemies[e].y === sides[s][1])) {
                    // "kills" enemy if it was in damaged side
                    field.enemies[e].remove();
                    field.enemies.splice(e, 1);

                }
            }
        }

        let exps = [];
        for (let i = 0; i < damagedSides.length; i++) {
            // kills Bomberman if it was in damaged side
            if ((damagedSides[i][0] === this.x) && (damagedSides[i][1] === this.y)) {
                this.die();
            }

            if (field.map[damagedSides[i][0]][damagedSides[i][1]] === 5) {
                // append explosions to the field
                field.remove(field.elements[damagedSides[i][0]][damagedSides[i][1]]);
                let exp = new Explosion(damagedSides[i][0], damagedSides[i][1]);
                field.field.appendChild(exp.htmlElement);
                exps.push(exp);

                // appends bomb instead of destroyed box
                let b = new NewBomb(damagedSides[i][0], damagedSides[i][1]);
                field.field.appendChild(b.htmlElement);
                field.powerUps.push(b);


            } else {
                field.remove(field.elements[damagedSides[i][0]][damagedSides[i][1]]);
                let exp = new Explosion(damagedSides[i][0], damagedSides[i][1]);
                field.field.appendChild(exp.htmlElement);
                exps.push(exp);
            }

        }

        if ((bomb.x === this.x) && (bomb.y === this.y)) {
            this.die();
        }

        bomb.remove();
        let exp = new Explosion(bomb.x, bomb.y);
        field.field.appendChild(exp.htmlElement);
        exps.push(exp);

        // wait some time  for explosions to disappear
        await sleep(750);
        for (let j = 0; j < exps.length; j++) {
            exps[j].remove();
        }

    }
}


export function Enemy(x, y) {
    Personage.call(this, x, y);
    this.htmlElement.className = 'enemy';

    // determines possible ways to move in next step
    this.determineDirection = function (map) {
        let possibleDirections = [];

        if ((this.y > 1) && (map[this.x][this.y - 1] === 2)) {
            possibleDirections.push("a");
        }

        if ((this.x > 1) && (map[this.x - 1][this.y] === 2)) {
            possibleDirections.push("w");
        }

        if ((this.y < 10) && (map[this.x][this.y + 1] === 2)) {
            possibleDirections.push("d");
        }

        if ((this.x < 10) && (map[this.x + 1][this.y] === 2)) {
            possibleDirections.push("s");
        }

        return possibleDirections[Math.floor(Math.random() * possibleDirections.length)]

    };

    // kills Bomberman with touching him
    this.checkBomberman = function (bomberman) {
        if ((this.x === bomberman.x) && (this.y === bomberman.y)) {
            bomberman.die();
        }
    };

    this.remove = function () {
        this.htmlElement.className = 'grass';
    }


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


