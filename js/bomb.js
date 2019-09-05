// Bomb that can be planted by Bomberman
function Bomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'bomb';

    this.remove = function () {
        this.htmlElement.className = 'grass'
    }
}

// Bomb that can be picked up by Bomberman
function NewBomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'new-bomb';
}

// Explosion, which appears after bomb was planted by Bomberman
function Explosion(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'explosion';
}
