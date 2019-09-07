// Bomb that can be planted by Bomberman

import {Block} from "./blocks";

export function Bomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'bomb';

    this.remove = function () {
        this.htmlElement.className = 'grass'
    }
}

// Bomb that can be picked up by Bomberman
export function NewBomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'new-bomb';
}

// Explosion, which appears after bomb was planted by Bomberman
export function Explosion(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'explosion';
}
