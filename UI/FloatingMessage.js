class FloatingMessage {
  constructor(x, y, value, size, color) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.size = size;
    this.lifeSpan = 0;
    this.color = color;
    this.opacity = 1;
  }

  draw(ctx) {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.font = `${this.size}px Krona One`;
    ctx.fillText(this.value, this.x, this.y);
    ctx.globalAlpha = 1;
  }

  update() {
    this.y -= 0.3;
    this.lifeSpan += 1;
    if (this.opacity > 0.02) {
      this.opacity -= 0.02;
    }
  }
}

export default FloatingMessage;
