class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Animal {class Square extends Rectangle {
  constructor(side) {
    // Call the super constructor with side as both width and height
    super(side, side);
  }

  // Method to calculate and return the perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
