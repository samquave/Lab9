let inputSquareSide = document.getElementById('square-side-box');
let inputRectHeight = document.getElementById('rect-height-box');
let inputRectWidth = document.getElementById('rect-length-box');
let inputTriHeight = document.getElementById('tri-height-box');
let inputCircleRadius = document.getElementById('cir-radius-box');

let shapeName = document.getElementById('shape-name-detail');
let widthDetail = document.getElementById('width-detail');
let heightDetail = document.getElementById('height-detail');
let radiusDetail = document.getElementById('radius-detail');
let areaDetail = document.getElementById('area-detail');
let perimeterDetail = document.getElementById('perimeter-detail');
let canvas = document.getElementById('canvas');


class Shape {
    constructor(width: string, height: string) {
        this.width = width;
        this.height = height;
    }
    draw() {
        this.div = document.createElement('div');
        this.div.className = 'shape ' + this.cssClass;
        var x = Math.floor(Math.random()*(600-this.width));
        var y = Math.floor(Math.random()*(600-this.height));
        this.div.style.top = y +'px';
        this.div.style.left = x + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
    
        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', function() {
            this.div.remove();
        }.bind(this));
        canvas.appendChild(this.div);
    }
}

