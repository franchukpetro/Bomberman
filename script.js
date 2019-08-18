;
(function () {
    "use strict";

    
    function Block(x, y) {

        this.htmlElement = document.createElement('div');

        this.htmlElement.style.gridColumnStart = x + 1;
        this.htmlElement.style.gridColumnEnd = x + 2;
        this.htmlElement.style.gridRowStart = y + 1;
        this.htmlElement.style.gridRowEnd = y + 2;
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


    function CreateField() {
        var field = document.getElementsByClassName('playing-field')[0];

        for (var i=0; i < 12; i++){
            for (var j=0; j<12; j++){

                if (i === 0 || i === 11){
                    if (j !== 11){
                        var element = new LeftRigthWall(i, j);

                    }
                    else {
                        var element = new TopDownWall(i, j);
                    }
                }

                else if ((j === 0  || j === 11) && (i > 0 && i < 11)){
                    var element = new TopDownWall(i, j);
                }

                else{
                    var element = new Grass(i, j);
                }

                field.appendChild(element.htmlElement);
            }
        }

    }

    CreateField();
    
})();