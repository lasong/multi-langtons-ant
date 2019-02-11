const DIRECTIONS = [
  {x: 1, y: 0},
  {x: 0, y: 1},
  {x: -1, y: 0},
  {x: 0, y: -1}
];

class Ant {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  turnLeft() {
    this.orientation--;
    this.orientation += DIRECTIONS.length;
    this.orientation %= DIRECTIONS.length;
  }

  turnRight() {
    this.orientation++;
    this.orientation %= DIRECTIONS.length;
  }

  move() {
    this.x += DIRECTIONS[this.orientation].x;
    this.y += DIRECTIONS[this.orientation].y;
  }

  adjustX(startX) {
    return this.x - startX;
  }

  adjustY(startY) {
    return this.y - startY;
  }
};

module.exports = Ant;
