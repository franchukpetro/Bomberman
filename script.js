;
(function () {
    "use strict";


    function Field(map, enemiesAmount) {
        this.field = document.getElementsByClassName('playing-field')[0];
        this.map = map;
        this.elements = [];

        this.bomberman = typeToBlock(6, 1, 1);

        this.enemiesAmount = enemiesAmount;
        this.enemies = [];

        this.placeEnemies = function () {
            var respawns = [];
            var range = Math.floor(10 / this.enemiesAmount);
            for (var x = 1; x < 10; x += range) {

                var possibleRespawns = [];

                for (var i = x; i < x + range; i++) {
                    for (var j = 1; j < 10; j++) {
                        if (this.map[i][j] === 2) {
                            possibleRespawns.push([i, j]);
                        }
                    }
                }
                respawns.push(possibleRespawns[Math.floor(Math.random() * possibleRespawns.length)]);
            }
            return respawns;

        };


        this.addEnemies = async function () {

            var respawns = this.placeEnemies();
            for (var i = 0; i < respawns.length; i++) {
                var spawn = respawns[i];
                var enemy = typeToBlock(7, spawn[0], spawn[1]);
                this.field.appendChild(enemy.htmlElement);
                this.enemies.push(enemy);
            }

            while (true) {
                for (i = 0; i < this.enemies.length; i++) {
                    this.enemies[i].checkBomberman(this.bomberman);
                    this.enemies[i].move(this.enemies[i].determineDirection(this.map), this.map);
                }
                await sleep(500);
            }
        };

        this.addBomberman = function () {
            this.field.appendChild(this.bomberman.htmlElement);
        }


        this.createField = function () {
            for (var i = 0; i < this.map.length; i++) {
                var row = [];
                for (var j = 0; j < this.map[i].length; j++) {
                    var element = typeToBlock(this.map[i][j], i, j);
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


    function Block(x, y) {

        this.htmlElement = document.createElement('div');

        this.x = x;
        this.y = y;

        this.htmlElement.style.top = this.x * 50 + 'px';
        this.htmlElement.style.left = this.y * 50 + 'px';

        this.remove = function () {
        }
    }

    function Grass(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'grass';
    }

    function LightBlock(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'light-block';

        this.remove = function () {
            this.htmlElement.className = 'grass';
        }
    }


    function StrongBlock(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'strong-block';
    }

    function Box(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'box';

        this.remove = function () {
            this.htmlElement.className = 'grass';
        }
    }

    function LeftRigthWall(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'left-wall';
    }

    function TopDownWall(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'top-wall';
    }

    function Bomb(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'bomb'

        this.remove = function () {
            this.htmlElement.className = 'grass'
        }
    }

    function Explosion(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'explosion';

        this.remove = function () {
            this.htmlElement.className = 'grass'

        }
    }

    function Personage(x, y) {
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
                if ((this.y < 10) && (map[this.x][this.y + 1] === 2)) {
                    this.moveRight();
                    this.y += 1;
                }
            } else if (key === "ArrowDown" || key === "s") {
                if ((this.x < 10) && (map[this.x + 1][this.y] === 2)) {
                    this.moveDown();
                    this.x += 1;
                }
            }
        }

    }


    function Bomberman(x, y) {
        Personage.call(this, x, y);
        this.htmlElement.className = 'bomberman';
        this.alive = true;

        this.die = function () {
            this.alive = false;
            console.log("You died!!");
        };

        this.plantBomb = async function (field) {
            var bomb = new Bomb(this.x, this.y);
            field.field.appendChild(bomb.htmlElement);
            await sleep(2000);

            var sides = [[bomb.x, bomb.y - 1], [bomb.x - 1, bomb.y], [bomb.x, bomb.y + 1], [bomb.x + 1, bomb.y]];
            var damagedSides = [];


            for (var s = 0; s < sides.length; s++) {
                var side = field.map[sides[s][0]][sides[s][1]];
                if ((side === 2) || (side === 3) || (side === 5)) {
                    damagedSides.push(sides[s]);
                }

                for (var e = 0; e < field.enemies.length; e++) {
                    if ((field.enemies[e].x === sides[s][0]) && (field.enemies[e].y === sides[s][1])) {
                        field.enemies[e].remove();
                        field.enemies.splice(e, 1);

                    }
                }
            }

            var exps = []
            for (var i = 0; i < damagedSides.length; i++) {
                field.remove(field.elements[damagedSides[i][0]][damagedSides[i][1]]);
                var exp = new Explosion(damagedSides[i][0], damagedSides[i][1]);
                field.field.appendChild(exp.htmlElement);
                exps.push(exp);
            }
            bomb.remove();
            var exp = new Explosion(bomb.x, bomb.y);
            field.field.appendChild(exp.htmlElement)
            exps.push(exp);

            await sleep(750);
            for (var j = 0; j < exps.length; j++) {
                exps[j].remove();
            }

        }
    }


    function Enemy(x, y) {
        Personage.call(this, x, y);
        this.htmlElement.className = 'enemy';

        this.determineDirection = function (map) {
            var possibleDirections = [];

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

        }

        this.checkBomberman = function (bomberman) {
            if ((this.x === bomberman.x) && (this.y === bomberman.y)) {
                bomberman.die();
            }
        }

        this.remove = function () {
            this.htmlElement.className = 'grass';
        }


    }


    function typeToBlock(type, x, y) {
        if (type === 0) {
            var block = new LeftRigthWall(x, y);
        } else if (type === 1) {
            var block = new TopDownWall(x, y);
        } else if (type === 2) {
            var block = new Grass(x, y);
        } else if (type === 3) {
            var block = new LightBlock(x, y);
        } else if (type === 4) {
            var block = new StrongBlock(x, y);
        } else if (type === 5) {
            var block = new Box(x, y);
        } else if (type === 6) {
            var block = new Bomberman(x, y);
        } else if (type === 7) {
            var block = new Enemy(x, y);
        } else if (type === 8) {
            var block = new Bomb(x, y);
        }

        return block;

    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function Game() {
        var maps = [map1, map2];
        var indx = Math.floor(Math.random() * maps.length);

        var field = new Field(maps[indx], 3);
        field.createField();
        field.addBomberman();
        field.addEnemies();


        document.addEventListener('keydown', event => {
            const key = event.key;
            field.bomberman.move(key, field.map);
        });

        document.addEventListener('keydown', event => {
            const key = event.key;
            if (key === " ")
                field.bomberman.plantBomb(field);
        });

    }

    Game();


})();