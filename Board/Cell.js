import { collision } from "../Utility/Utilities.js";

class Cell {
  constructor(x, y, xy = 100, mouse) {
    this.x = x;
    this.y = y;
    this.width = xy;
    this.height = xy;
    this.mouse = mouse;
  }

  draw(ctx) {
    if (this.mouse.x && this.mouse.y && collision(this, this.mouse)) {
      ctx.strokeStyle = "green";
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}

export default Cell;
