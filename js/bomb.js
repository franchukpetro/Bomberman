function Bomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'bomb';

    this.remove = function () {
        this.htmlElement.className = 'grass'
    }
}

function NewBomb(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'new-bomb';
}

function Explosion(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'explosion';
}
