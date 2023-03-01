"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(name, color, width, height) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.color = color;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(color, name, radius) {
        this.radius = radius;
        this.color = color;
        this.name = name;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var rec1 = new Rectangle('rec', 'blue', 10, 3);
console.log(rec1);
console.log(rec1.area());
var circle1 = new Circle('red', 'circle', 1.3);
console.log(circle1);
console.log(circle1.area());
