// Main  among all blocks, all other inherits properties and methods from it
export function Block(x, y) {

    this.htmlElement = document.createElement('div');

    this.x = x;
    this.y = y;

    //positioning block using "coordinates"s
    this.htmlElement.style.top = this.x * 50 + 'px';
    this.htmlElement.style.left = this.y * 50 + 'px';

    this.remove = function () {
        this.htmlElement.className = 'grass';
    }
}

export function Grass(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'grass';
}

export function LightBlock(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'light-block';
}


export function StrongBlock(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'strong-block';
}

export function Box(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'box';
}

export function LeftRightWall(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'left-wall';
}

export function TopDownWall(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'top-wall';
}
