class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.power = 20;
    this.speed = 10;
  }

  draw(ctx) {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.speed;
  }
}

export default Projectile;
