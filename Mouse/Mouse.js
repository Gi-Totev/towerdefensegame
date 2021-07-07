class Mouse {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.width = 0.1;
    this.height = 0.1;
    this.clicked = false;
  }

  setClicked(clicked) {
    this.clicked = clicked;
  }

  setMouse(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Mouse;
