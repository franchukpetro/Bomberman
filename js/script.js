;
(function () {
    "use strict";


    function Field(map, enemiesAmount, bomberman) {
        this.field = document.getElementsByClassName('playing-field')[0];
        this.map = map;
        this.elements = [];

        this.bomberman = bomberman;

        this.enemiesAmount = enemiesAmount;
        this.enemies = [];
        this.powerUps = [];

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


    function typeToBlock(type, x, y) {
        if (type === 0) {
            var block = new LeftRightWall(x, y);
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


    function Game(level) {
        var maps = [map1, map2];
        var indx = Math.floor(Math.random() * maps.length);

        var bombs_num = 5 - (level - 1);
        var enemies_num = 2 + (level - 1);

        var bomberman = new Bomberman(1, 1, bombs_num);



        var field = new Field(maps[indx], enemies_num, bomberman);
        field.createField();
        field.addBomberman();
        field.addEnemies();


        var bombs_num = document.createElement("div");
        bombs_num.innerHTML = "Bombs number: " + field.bomberman.bombs_number;
        bombs_num.className = "bombs_number";
        var score_bar = document.getElementsByClassName("score_bar")[0];
        score_bar.appendChild(bombs_num);



        document.addEventListener('keydown', event => {
            const key = event.key;
            if (!field.bomberman.alive){
                lose();
            }

            if (field.enemies.length === 0){
                win();
            }

            field.bomberman.move(key, field.map);

            for (var p=0; p < field.powerUps.length; p++){
                if (field.bomberman.x === field.powerUps[p].x && field.bomberman.y === field.powerUps[p].y){
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
                bombs_num.innerHTML = "Bombs number: " + field.bomberman.bombs_number;
        });

    }



    function lose(){
        alert("GAME OVER :(");
        document.location.reload();
    }

    function win() {
        alert("YOU WIN");
        document.location.reload();
    }
    
    function MainGame(level) {

        var button = document.createElement("button");
        button.innerHTML = "New Game";
        button.className = "button";
        var wrapper = document.getElementsByClassName("wrapper")[0];
        wrapper.appendChild(button);

        button.addEventListener ("click", function() {
            button.remove();

            var level_bar = document.createElement("div");
            level_bar.innerHTML = "Level: " + level;
            level_bar.className = "level";
            var score_bar = document.getElementsByClassName("score_bar")[0];
            score_bar.appendChild(level_bar);

            Game(level);

        });
    }

    MainGame(1);



})();