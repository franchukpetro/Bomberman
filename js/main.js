// Class of playing field
import {map1, map2, map3, map4} from "./maps";
import {Bomberman, Enemy} from "./characters";
import {Box, Grass, LeftRightWall, LightBlock, StrongBlock, TopDownWall} from "./blocks";

function Field(map, enemiesAmount, bomberman) {
    this.field = document.getElementsByClassName('playing-field')[0];
    // array with numbers
    this.map = map;
    // objects
    this.elements = [];

    this.bomberman = bomberman;

    this.enemiesAmount = enemiesAmount;
    // array of enemies objects
    this.enemies = [];
    // array of additional bombs objects
    this.powerUps = [];

    // determines start spawns for enemies
    this.placeEnemies = function () {
        let spawns = [];
        // divide all field on lines of same size, in each lines can be just 1 enemy
        // did it for balance of enemies on the field
        let range = Math.floor(10 / this.enemiesAmount);
        // for each line determines all cells with grass, and then choose randomly one of them
        for (let x = 1; x < 10; x += range) {

            let possibleSpawns = [];

            for (let i = x; i < x + range; i++) {
                for (let j = 1; j < 10; j++) {
                    if (this.map[i][j] === 2) {
                        possibleSpawns.push([i, j]);
                    }
                }
            }
            spawns.push(possibleSpawns[Math.floor(Math.random() * possibleSpawns.length)]);
        }
        return spawns;

    };

    // add enemies on the filed and make them to move
    this.addEnemies = async function () {

        let spawns = this.placeEnemies();
        for (let i = 0; i < spawns.length; i++) {
            let spawn = spawns[i];
            let enemy = new Enemy(spawn[0], spawn[1]);
            this.field.appendChild(enemy.htmlElement);
            this.enemies.push(enemy);
        }

        while (this.enemies.length) {
            for (let i = 0; i < this.enemies.length; i++) {
                // in each move check whether there are Bomberman in that position
                this.enemies[i].checkBomberman(this.bomberman);
                this.enemies[i].move(this.enemies[i].determineDirection(this.map), this.map);
            }
            await sleep(500);
        }
    };

    this.addBomberman = function () {
        this.field.appendChild(this.bomberman.htmlElement);
    };


    this.createField = function () {
        for (let i = 0; i < this.map.length; i++) {
            let row = [];
            for (let j = 0; j < this.map[i].length; j++) {
                let element = typeToBlock(this.map[i][j], i, j);
                this.field.appendChild(element.htmlElement);
                row.push(element);
            }
            this.elements.push(row);
        }
    };

    this.remove = function (block) {
        block.remove();
        this.map[block.x][block.y] = 2;
    }

}

// maps integer type of block to its class
function typeToBlock(type, x, y) {
    if (type === 0) {
        return new LeftRightWall(x, y);
    } else if (type === 1) {
        return new TopDownWall(x, y);
    } else if (type === 2) {
        return new Grass(x, y);
    } else if (type === 3) {
        return new LightBlock(x, y);
    } else if (type === 4) {
        return new StrongBlock(x, y);
    } else if (type === 5) {
        return new Box(x, y);
    }

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function Game(level) {
    let maps = [map1, map2, map3, map4];
    let indx = Math.floor(Math.random() * maps.length);

    let bombs_num = 5 - (level - 1);
    let enemies_num = 2 + (level - 1);

    let bomberman = new Bomberman(1, 1, bombs_num);


    let field = new Field(maps[indx], enemies_num, bomberman);
    field.createField();
    field.addBomberman();
    field.addEnemies();


    let bombs_score = document.createElement("div");
    bombs_score.innerHTML = "Bombs number: " + field.bomberman.bombs_number;
    bombs_score.className = "bombs_number";
    let score_bar = document.getElementsByClassName("score_bar")[0];
    score_bar.appendChild(bombs_score);


    document.addEventListener('keydown', event => {
        const key = event.key;
        if (!field.bomberman.alive) {
            lose();
        }

        if (field.enemies.length === 0) {
            win();
        }

        field.bomberman.move(key, field.map);

        for (let p = 0; p < field.powerUps.length; p++) {
            if (field.bomberman.x === field.powerUps[p].x && field.bomberman.y === field.powerUps[p].y) {
                field.powerUps[p].remove();
                field.powerUps.splice(p, 1);
                field.bomberman.bombs_number += 1;
            }
        }

    });

    document.addEventListener('keydown', event => {
        const key = event.key;
        if (key === " ")
            field.bomberman.plantBomb(field);
        bombs_score.innerHTML = "Bombs number: " + field.bomberman.bombs_number;
    });

}


function lose() {
    alert("GAME OVER :(");
    document.location.reload();
}

function win() {
    alert("YOU WIN");
    document.location.reload();
}

function MainGame(level) {

    let button = document.createElement("button");
    button.innerHTML = "New Game";
    button.className = "button";
    let wrapper = document.getElementsByClassName("wrapper")[0];
    wrapper.appendChild(button);

    button.addEventListener("click", function () {
        button.remove();

        let level_bar = document.createElement("div");
        level_bar.innerHTML = "Level: " + level;
        level_bar.className = "level";
        let score_bar = document.getElementsByClassName("score_bar")[0];
        score_bar.appendChild(level_bar);

        Game(level);

    });
}

MainGame(1);


