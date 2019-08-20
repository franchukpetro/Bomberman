;
(function () {
    "use strict";

    
    function Block(x, y) {

        this.htmlElement = document.createElement('div');

        this.htmlElement.style.gridColumnStart = y + 1;
        this.htmlElement.style.gridColumnEnd = y + 2;
        this.htmlElement.style.gridRowStart = x + 1;
        this.htmlElement.style.gridRowEnd = x + 2;
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

    function typeToBlock(type, x, y) {
        if (type === 0){
            var block = new LeftRigthWall(x, y);
        }
        else if (type === 1){
            var block = new TopDownWall(x, y);
        }
        else if (type === 2){
            var block = new Grass(x, y);
        }
        else if (type === 3){
            var block = new LightBlock(x, y);
        }
        else if (type === 4){
            var block = new StrongBlock(x, y);
        }
        else if (type === 5){
            var block = new Box(x, y);
        }

        return block;

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
        CreatePlayingField(maps[indx])
    }

    Game(); 

})();