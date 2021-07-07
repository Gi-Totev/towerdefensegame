const amounts = [20, 30, 40];
const resImg = new Image();
resImg.src = "resources.png";

class Resource {
  constructor(xy = 100) {
    this.x = Math.random() * canvas.width - xy;
    this.y = ~~(Math.random() * 5) + 1 * xy + 25;
    this.width = xy * 0.6;
    this.height = xy * 0.6;
    this.amount = amounts[~~(Math.random() * amounts.length)];
    this.frame = 0;
    this.frameX = 0;
    this.maxFrame = 8;
    this.spriteWidth = 128;
    this.spriteHeight = 128;
  }

  draw(ctx) {
    ctx.drawImage(
      resImg,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    ctx.fillStyle = "white";
    ctx.font = `20px Krona One`;
    ctx.fillText(
      this.amount,
      this.x + ~~(this.width / 2),
      this.y + ~~(this.height / 2)
    );
  }

  update(delta) {
    this.frame += delta;
    if (this.frame > 56) {
      this.frame -= 56;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    }
  }
}

export default Resource;
