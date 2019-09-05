function Block(x, y) {

    this.htmlElement = document.createElement('div');

    this.x = x;
    this.y = y;

    this.htmlElement.style.top = this.x * 50 + 'px';
    this.htmlElement.style.left = this.y * 50 + 'px';

    this.remove = function () {
        this.htmlElement.className = 'grass';
    }
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

function LeftRightWall(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'left-wall';
}

function TopDownWall(x, y) {
    Block.call(this, x, y);
    this.htmlElement.className = 'top-wall';
}
