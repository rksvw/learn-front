import { Point } from "./point";

let pnt = new Point(1, 2, 3);
console.log(pnt.x); // !Properties
console.log(pnt.y); // !Properites
pnt.x = 25; // !Properties
console.log(pnt.x)
pnt.draw(); // *Methods
