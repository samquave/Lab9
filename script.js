var inputSquareSide = document.getElementById('square-side-box');
var inputRectHeight = document.getElementById('rect-height-box');
var inputRectWidth = document.getElementById('rect-length-box');
var inputTriHeight = document.getElementById('tri-height-box');
var inputCircleRadius = document.getElementById('cir-radius-box');
var shapeName = document.getElementById('shape-name-detail');
var widthDetail = document.getElementById('width-detail');
var heightDetail = document.getElementById('height-detail');
var radiusDetail = document.getElementById('radius-detail');
var areaDetail = document.getElementById('area-detail');
var perimeterDetail = document.getElementById('perimeter-detail');
var canvas = document.getElementById('canvas');
var Shape = /** @class */ (function () {
    function Shape(width, height) {
        this.width = width;
        this.height = height;
    }
    Shape.prototype.draw = function () {
        this.div = document.createElement('div');
        this.div.className = 'shape ' + this.cssClass;
        var x = Math.floor(Math.random() * (600 - this.width));
        var y = Math.floor(Math.random() * (600 - this.height));
        this.div.style.top = y + 'px';
        this.div.style.left = x + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', function () {
            this.div.remove();
        }.bind(this));
        canvas.appendChild(this.div);
    };
    return Shape;
}());
