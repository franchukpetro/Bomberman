/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/blocks.js":
/*!**********************!*\
  !*** ./js/blocks.js ***!
  \**********************/
/*! exports provided: Block, Grass, LightBlock, StrongBlock, Box, LeftRightWall, TopDownWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Block\", function() { return Block; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grass\", function() { return Grass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightBlock\", function() { return LightBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StrongBlock\", function() { return StrongBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftRightWall\", function() { return LeftRightWall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TopDownWall\", function() { return TopDownWall; });\n// Main  among all blocks, all other inherits properties and methods from it\nfunction Block(x, y) {\n\n    this.htmlElement = document.createElement('div');\n\n    this.x = x;\n    this.y = y;\n\n    //positioning block using \"coordinates\"s\n    this.htmlElement.style.top = this.x * 50 + 'px';\n    this.htmlElement.style.left = this.y * 50 + 'px';\n\n    this.remove = function () {\n        this.htmlElement.className = 'grass';\n    }\n}\n\nfunction Grass(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'grass';\n}\n\nfunction LightBlock(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'light-block';\n}\n\n\nfunction StrongBlock(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'strong-block';\n}\n\nfunction Box(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'box';\n}\n\nfunction LeftRightWall(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'left-wall';\n}\n\nfunction TopDownWall(x, y) {\n    Block.call(this, x, y);\n    this.htmlElement.className = 'top-wall';\n}\n\n\n//# sourceURL=webpack:///./js/blocks.js?");

/***/ }),

/***/ "./js/bomb.js":
/*!********************!*\
  !*** ./js/bomb.js ***!
  \********************/
/*! exports provided: Bomb, NewBomb, Explosion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bomb\", function() { return Bomb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewBomb\", function() { return NewBomb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Explosion\", function() { return Explosion; });\n/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ \"./js/blocks.js\");\n// Bomb that can be planted by Bomberman\n\n\n\nfunction Bomb(x, y) {\n    _blocks__WEBPACK_IMPORTED_MODULE_0__[\"Block\"].call(this, x, y);\n    this.htmlElement.className = 'bomb';\n\n    this.remove = function () {\n        this.htmlElement.className = 'grass'\n    }\n}\n\n// Bomb that can be picked up by Bomberman\nfunction NewBomb(x, y) {\n    _blocks__WEBPACK_IMPORTED_MODULE_0__[\"Block\"].call(this, x, y);\n    this.htmlElement.className = 'new-bomb';\n}\n\n// Explosion, which appears after bomb was planted by Bomberman\nfunction Explosion(x, y) {\n    _blocks__WEBPACK_IMPORTED_MODULE_0__[\"Block\"].call(this, x, y);\n    this.htmlElement.className = 'explosion';\n}\n\n\n//# sourceURL=webpack:///./js/bomb.js?");

/***/ }),

/***/ "./js/characters.js":
/*!**************************!*\
  !*** ./js/characters.js ***!
  \**************************/
/*! exports provided: Personage, Bomberman, Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Personage\", function() { return Personage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bomberman\", function() { return Bomberman; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\n/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bomb */ \"./js/bomb.js\");\n// Basic class for characters\n\n\nfunction Personage(x, y) {\n    this.htmlElement = document.createElement('div');\n\n    this.x = x;\n    this.y = y;\n\n    this.htmlElement.style.left = (50 * y) + 'px';\n    this.htmlElement.style.top = (50 * x) + 'px';\n\n    this.moveLeft = function () {\n        this.htmlElement.style.left = Number(this.htmlElement.style.left.slice(0, -2)) - 50 + \"px\"\n    };\n\n    this.moveUp = function () {\n        this.htmlElement.style.top = Number(this.htmlElement.style.top.slice(0, -2)) - 50 + \"px\"\n    };\n\n    this.moveRight = function () {\n        this.htmlElement.style.left = Number(this.htmlElement.style.left.slice(0, -2)) + 50 + \"px\"\n    };\n\n    this.moveDown = function () {\n        this.htmlElement.style.top = Number(this.htmlElement.style.top.slice(0, -2)) + 50 + \"px\"\n    };\n    // according to the key, which was pressed, character will move in one of 4 directions\n    this.move = function (key, map) {\n        if (key === \"ArrowLeft\" || key === \"a\") {\n            if ((this.y > 1) && (map[this.x][this.y - 1] === 2)) {\n                this.moveLeft();\n                this.y -= 1;\n            }\n        } else if (key === \"ArrowUp\" || key === \"w\") {\n            if ((this.x > 1) && (map[this.x - 1][this.y] === 2)) {\n                this.moveUp();\n                this.x -= 1;\n            }\n        } else if (key === \"ArrowRight\" || key === \"d\") {\n            if ((this.y < 11) && (map[this.x][this.y + 1] === 2)) {\n                this.moveRight();\n                this.y += 1;\n            }\n        } else if (key === \"ArrowDown\" || key === \"s\") {\n            if ((this.x < 11) && (map[this.x + 1][this.y] === 2)) {\n                this.moveDown();\n                this.x += 1;\n            }\n        }\n    }\n\n}\n\n\nfunction Bomberman(x, y, bombs_number) {\n    Personage.call(this, x, y);\n    this.htmlElement.className = 'bomberman';\n    this.bombs_number = bombs_number;\n    this.alive = true;\n\n    this.die = function () {\n        this.alive = false;\n    };\n\n\n    this.plantBomb = async function (field) {\n        // blocks planting when number of bombs is zero\n        if (this.bombs_number < 1) {\n            return 0;\n        }\n\n        this.bombs_number -= 1;\n        let bomb = new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"Bomb\"](this.x, this.y);\n        field.field.appendChild(bomb.htmlElement);\n        // time before explosion\n        await sleep(2000);\n\n        // possibly damaged sides\n        let sides = [[bomb.x, bomb.y - 1], [bomb.x - 1, bomb.y], [bomb.x, bomb.y + 1], [bomb.x + 1, bomb.y]];\n        let damagedSides = [];\n\n\n        for (let s = 0; s < sides.length; s++) {\n            let side = field.map[sides[s][0]][sides[s][1]];\n            if ((side === 2) || (side === 3) || (side === 5)) {\n                damagedSides.push(sides[s]);\n            }\n\n            for (let e = 0; e < field.enemies.length; e++) {\n                if ((field.enemies[e].x === sides[s][0]) && (field.enemies[e].y === sides[s][1])) {\n                    // \"kills\" enemy if it was in damaged side\n                    field.enemies[e].remove();\n                    field.enemies.splice(e, 1);\n\n                }\n            }\n        }\n\n        let exps = [];\n        for (let i = 0; i < damagedSides.length; i++) {\n            // kills Bomberman if it was in damaged side\n            if ((damagedSides[i][0] === this.x) && (damagedSides[i][1] === this.y)) {\n                this.die();\n            }\n\n            if (field.map[damagedSides[i][0]][damagedSides[i][1]] === 5) {\n                // append explosions to the field\n                field.remove(field.elements[damagedSides[i][0]][damagedSides[i][1]]);\n                let exp = new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"Explosion\"](damagedSides[i][0], damagedSides[i][1]);\n                field.field.appendChild(exp.htmlElement);\n                exps.push(exp);\n\n                // appends bomb instead of destroyed box\n                let b = new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"NewBomb\"](damagedSides[i][0], damagedSides[i][1]);\n                field.field.appendChild(b.htmlElement);\n                field.powerUps.push(b);\n\n\n            } else {\n                field.remove(field.elements[damagedSides[i][0]][damagedSides[i][1]]);\n                let exp = new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"Explosion\"](damagedSides[i][0], damagedSides[i][1]);\n                field.field.appendChild(exp.htmlElement);\n                exps.push(exp);\n            }\n\n        }\n\n        if ((bomb.x === this.x) && (bomb.y === this.y)) {\n            this.die();\n        }\n\n        bomb.remove();\n        let exp = new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"Explosion\"](bomb.x, bomb.y);\n        field.field.appendChild(exp.htmlElement);\n        exps.push(exp);\n\n        // wait some time  for explosions to disappear\n        await sleep(750);\n        for (let j = 0; j < exps.length; j++) {\n            exps[j].remove();\n        }\n\n    }\n}\n\n\nfunction Enemy(x, y) {\n    Personage.call(this, x, y);\n    this.htmlElement.className = 'enemy';\n\n    // determines possible ways to move in next step\n    this.determineDirection = function (map) {\n        let possibleDirections = [];\n\n        if ((this.y > 1) && (map[this.x][this.y - 1] === 2)) {\n            possibleDirections.push(\"a\");\n        }\n\n        if ((this.x > 1) && (map[this.x - 1][this.y] === 2)) {\n            possibleDirections.push(\"w\");\n        }\n\n        if ((this.y < 10) && (map[this.x][this.y + 1] === 2)) {\n            possibleDirections.push(\"d\");\n        }\n\n        if ((this.x < 10) && (map[this.x + 1][this.y] === 2)) {\n            possibleDirections.push(\"s\");\n        }\n\n        return possibleDirections[Math.floor(Math.random() * possibleDirections.length)]\n\n    };\n\n    // kills Bomberman with touching him\n    this.checkBomberman = function (bomberman) {\n        if ((this.x === bomberman.x) && (this.y === bomberman.y)) {\n            bomberman.die();\n        }\n    };\n\n    this.remove = function () {\n        this.htmlElement.className = 'grass';\n    }\n\n\n}\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\n\n\n\n//# sourceURL=webpack:///./js/characters.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps */ \"./js/maps.js\");\n/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters */ \"./js/characters.js\");\n/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ \"./js/blocks.js\");\n// Class of playing field\n\n\n\n\nfunction Field(map, enemiesAmount, bomberman) {\n    this.field = document.getElementsByClassName('playing-field')[0];\n    // array with numbers\n    this.map = map;\n    // objects\n    this.elements = [];\n\n    this.bomberman = bomberman;\n\n    this.enemiesAmount = enemiesAmount;\n    // array of enemies objects\n    this.enemies = [];\n    // array of additional bombs objects\n    this.powerUps = [];\n\n    // determines start spawns for enemies\n    this.placeEnemies = function () {\n        let spawns = [];\n        // divide all field on lines of same size, in each lines can be just 1 enemy\n        // did it for balance of enemies on the field\n        let range = Math.floor(10 / this.enemiesAmount);\n        // for each line determines all cells with grass, and then choose randomly one of them\n        for (let x = 1; x < 10; x += range) {\n\n            let possibleSpawns = [];\n\n            for (let i = x; i < x + range; i++) {\n                for (let j = 1; j < 10; j++) {\n                    if (this.map[i][j] === 2) {\n                        possibleSpawns.push([i, j]);\n                    }\n                }\n            }\n            spawns.push(possibleSpawns[Math.floor(Math.random() * possibleSpawns.length)]);\n        }\n        return spawns;\n\n    };\n\n    // add enemies on the filed and make them to move\n    this.addEnemies = async function () {\n\n        let spawns = this.placeEnemies();\n        for (let i = 0; i < spawns.length; i++) {\n            let spawn = spawns[i];\n            let enemy = new _characters__WEBPACK_IMPORTED_MODULE_1__[\"Enemy\"](spawn[0], spawn[1]);\n            this.field.appendChild(enemy.htmlElement);\n            this.enemies.push(enemy);\n        }\n\n        while (this.enemies.length) {\n            for (let i = 0; i < this.enemies.length; i++) {\n                // in each move check whether there are Bomberman in that position\n                this.enemies[i].checkBomberman(this.bomberman);\n                this.enemies[i].move(this.enemies[i].determineDirection(this.map), this.map);\n            }\n            await sleep(500);\n        }\n    };\n\n    this.addBomberman = function () {\n        this.field.appendChild(this.bomberman.htmlElement);\n    };\n\n\n    this.createField = function () {\n        for (let i = 0; i < this.map.length; i++) {\n            let row = [];\n            for (let j = 0; j < this.map[i].length; j++) {\n                let element = typeToBlock(this.map[i][j], i, j);\n                this.field.appendChild(element.htmlElement);\n                row.push(element);\n            }\n            this.elements.push(row);\n        }\n    };\n\n    this.remove = function (block) {\n        block.remove();\n        this.map[block.x][block.y] = 2;\n    }\n\n}\n\n// maps integer type of block to its class\nfunction typeToBlock(type, x, y) {\n    if (type === 0) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"LeftRightWall\"](x, y);\n    } else if (type === 1) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"TopDownWall\"](x, y);\n    } else if (type === 2) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"Grass\"](x, y);\n    } else if (type === 3) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"LightBlock\"](x, y);\n    } else if (type === 4) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"StrongBlock\"](x, y);\n    } else if (type === 5) {\n        return new _blocks__WEBPACK_IMPORTED_MODULE_2__[\"Box\"](x, y);\n    }\n\n}\n\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\n\nfunction Game(level) {\n    let maps = [_maps__WEBPACK_IMPORTED_MODULE_0__[\"map1\"], _maps__WEBPACK_IMPORTED_MODULE_0__[\"map2\"], _maps__WEBPACK_IMPORTED_MODULE_0__[\"map3\"], _maps__WEBPACK_IMPORTED_MODULE_0__[\"map4\"]];\n    let indx = Math.floor(Math.random() * maps.length);\n\n    let bombs_num = 5 - (level - 1);\n    let enemies_num = 2 + (level - 1);\n\n    let bomberman = new _characters__WEBPACK_IMPORTED_MODULE_1__[\"Bomberman\"](1, 1, bombs_num);\n\n\n    let field = new Field(maps[indx], enemies_num, bomberman);\n    field.createField();\n    field.addBomberman();\n    field.addEnemies();\n\n\n    let bombs_score = document.createElement(\"div\");\n    bombs_score.innerHTML = \"Bombs number: \" + field.bomberman.bombs_number;\n    bombs_score.className = \"bombs_number\";\n    let score_bar = document.getElementsByClassName(\"score_bar\")[0];\n    score_bar.appendChild(bombs_score);\n\n\n    document.addEventListener('keydown', event => {\n        const key = event.key;\n        if (!field.bomberman.alive) {\n            lose();\n        }\n\n        if (field.enemies.length === 0) {\n            win();\n        }\n\n        field.bomberman.move(key, field.map);\n\n        for (let p = 0; p < field.powerUps.length; p++) {\n            if (field.bomberman.x === field.powerUps[p].x && field.bomberman.y === field.powerUps[p].y) {\n                field.powerUps[p].remove();\n                field.powerUps.splice(p, 1);\n                field.bomberman.bombs_number += 1;\n            }\n        }\n\n    });\n\n    document.addEventListener('keydown', event => {\n        const key = event.key;\n        if (key === \" \")\n            field.bomberman.plantBomb(field);\n        bombs_score.innerHTML = \"Bombs number: \" + field.bomberman.bombs_number;\n    });\n\n}\n\n\nfunction lose() {\n    alert(\"GAME OVER :(\");\n    document.location.reload();\n}\n\nfunction win() {\n    alert(\"YOU WIN\");\n    document.location.reload();\n}\n\nfunction MainGame(level) {\n\n    let button = document.createElement(\"button\");\n    button.innerHTML = \"New Game\";\n    button.className = \"button\";\n    let wrapper = document.getElementsByClassName(\"wrapper\")[0];\n    wrapper.appendChild(button);\n\n    button.addEventListener(\"click\", function () {\n        button.remove();\n\n        let level_bar = document.createElement(\"div\");\n        level_bar.innerHTML = \"Level: \" + level;\n        level_bar.className = \"level\";\n        let score_bar = document.getElementsByClassName(\"score_bar\")[0];\n        score_bar.appendChild(level_bar);\n\n        Game(level);\n\n    });\n}\n\nMainGame(1);\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/maps.js":
/*!********************!*\
  !*** ./js/maps.js ***!
  \********************/
/*! exports provided: map1, map2, map3, map4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map1\", function() { return map1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map2\", function() { return map2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map3\", function() { return map3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map4\", function() { return map4; });\n//Each array represents playing field - each number here is block of some type:\n// 0 - left wall\n// 1 - wall\n// 2 - grass\n// 3 - l block\n// 4 - s block\n// 5 - box\n\n\nconst map1 = [\n    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n    [0, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0],\n    [0, 2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 2, 0],\n    [0, 2, 2, 3, 5, 4, 2, 4, 2, 2, 2, 2, 0],\n    [0, 4, 2, 4, 4, 4, 2, 3, 2, 2, 2, 2, 0],\n    [0, 4, 3, 4, 2, 2, 2, 4, 2, 2, 2, 2, 0],\n    [0, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 3, 0],\n    [0, 2, 2, 4, 2, 2, 2, 4, 2, 2, 4, 5, 0],\n    [0, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 0],\n    [0, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 0],\n    [0, 4, 4, 2, 4, 3, 2, 2, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 2, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\n\nconst map2 = [\n    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n    [0, 2, 2, 2, 2, 2, 3, 2, 2, 4, 2, 2, 0],\n    [0, 2, 4, 2, 4, 2, 2, 4, 2, 2, 2, 3, 0],\n    [0, 2, 4, 2, 4, 4, 4, 4, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 4, 5, 2, 3, 2, 4, 3, 4, 0],\n    [0, 4, 4, 3, 4, 4, 4, 4, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 4, 2, 5, 4, 2, 2, 2, 4, 0],\n    [0, 2, 4, 4, 4, 4, 3, 4, 2, 4, 4, 2, 0],\n    [0, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 3, 4, 2, 4, 0],\n    [0, 4, 4, 3, 2, 2, 2, 2, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 4, 2, 4, 4, 2, 2, 4, 2, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\nconst map3 = [\n    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0],\n    [0, 2, 3, 2, 2, 3, 5, 3, 2, 2, 3, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0],\n    [0, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0],\n    [0, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0],\n    [0, 2, 3, 2, 2, 3, 5, 3, 2, 2, 3, 2, 0],\n    [0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\nconst map4 = [\n    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n    [0, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 5, 0],\n    [0, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 3, 0],\n    [0, 2, 4, 4, 4, 3, 4, 2, 4, 4, 4, 2, 0],\n    [0, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 2, 4, 4, 4, 2, 3, 2, 2, 0],\n    [0, 2, 2, 4, 2, 3, 5, 3, 2, 4, 2, 2, 0],\n    [0, 2, 2, 3, 2, 4, 4, 4, 2, 2, 2, 2, 0],\n    [0, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 0],\n    [0, 3, 4, 4, 4, 3, 4, 2, 4, 4, 4, 2, 0],\n    [0, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 0],\n    [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\n\n\n\n\n//# sourceURL=webpack:///./js/maps.js?");

/***/ })

/******/ });