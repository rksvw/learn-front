"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var pnt = new point_1.Point(1, 2, 3);
console.log(pnt.x); // !Properties
console.log(pnt.y); // !Properites
pnt.x = 25; // !Properties
console.log(pnt.x);
pnt.draw(); // *Methods
