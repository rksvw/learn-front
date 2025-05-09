// ?File having a same name and class with export method makes its modules

export class Point {
  // private x: number; // ! Fields OR Properties
  // private y: number;

  constructor(private _x: number, private _y: number, private _z: number) {
    // * ? indicated optional variable
  }

  draw() {
    // ...
    console.log("X: ", this._x + " , Y: " + this._y + " , Z: " + this._z);
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  set x(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be less than 0.");
    }
    this._x = value;
  }
}
