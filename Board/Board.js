import Cell from "./Cell.js";
class Board {
  constructor() {
    this.grid = [];
    this.enemies = [];
    this.enemyPositions = [0, 0, 0, 0, 0];
    this.xy = 100;
  }

  createGrid(canvas, mouse) {
    let h = canvas.height;
    let w = canvas.width;

    for (let i = this.xy; i < h; i += this.xy) {
      for (let j = 0; j < w; j += this.xy) {
        this.grid.push(new Cell(j, i, this.xy, mouse));
      }
    }
  }

  draw(ctx) {
    let g = this.grid.length;
    for (let i = 0; i < g; i++) {
      this.grid[i].draw(ctx);
    }
  }
}

export default Board;
