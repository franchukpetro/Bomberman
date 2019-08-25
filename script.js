;
(function () {
    "use strict";


    function Block(x, y) {

        this.htmlElement = document.createElement('div');

        this.htmlElement.style.top = x * 50 + 'px';
        this.htmlElement.style.left = y * 50 + 'px';

    }

    function Grass(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'grass';
    }

    function LightBlock(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'light-block';
    }


    function StrongBlock(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'strong-block';
    }

    function Box(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'box';
    }

    function LeftRigthWall(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'left-wall';
    }

    function TopDownWall(x, y) {
        Block.call(this, x, y);
        this.htmlElement.className = 'top-wall';
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
        }

        return block;

    }


    function placeEnemies(map, amount) {
        var respawns = [];
        var range = Math.floor(10 / amount);
        for (var x = 1; x < 10; x += range) {

            var possibleRespawns = [];

            for (var i = x; i < x + range; i++) {
                for (var j = 1; j < 10; j++) {
                    if (map[i][j] === 2) {
                        possibleRespawns.push([i, j]);
                    }
                }
            }
            respawns.push(possibleRespawns[Math.floor(Math.random() * possibleRespawns.length)]);
        }
        return respawns;

    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function addEnemies(map, field, amount) {

        var respawns = placeEnemies(map, amount);
        var enemies = [];
        for (var i = 0; i < respawns.length; i++) {
            var spawn = respawns[i];
            var enemy = typeToBlock(7, spawn[0], spawn[1]);
            field.appendChild(enemy.htmlElement);
            enemies.push(enemy);
        }

        while (true) {
            for (i = 0; i < enemies.length; i++) {
                enemies[i].move(enemies[i].determineDirection(map), map);
            }
            await sleep(500);
        }
    }


    function CreatePlayingField(playingMap) {
        var field = document.getElementsByClassName('playing-field')[0];
        for (var i = 0; i < playingMap.length; i++) {
            for (var j = 0; j < playingMap[i].length; j++) {
                var element = typeToBlock(playingMap[i][j], i, j);
                field.appendChild(element.htmlElement);
            }
        }
    }


    function Game() {
        var maps = [map1, map2];
        var indx = Math.floor(Math.random() * maps.length);
        CreatePlayingField(maps[indx]);

        var field = document.getElementsByClassName('playing-field')[0];

        var bomberman = typeToBlock(6, 1, 1);
        field.appendChild(bomberman.htmlElement);

        addEnemies(maps[indx], field, 3);


        document.addEventListener('keydown', event => {
            const key = event.key;
            bomberman.move(key, maps[indx]);
        });

    }

    Game();

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }


})();