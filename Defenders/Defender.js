import Projectile from "../Projectile/Projectile.js";

const def1 = new Image();
def1.src = "bluedefender.png";
const def2 = new Image();
def2.src = "pinkdefender.png";

class Defender {
  constructor({ x, y, type, projectiles }) {
    this.xy = 100;
    this.x = x;
    this.y = y;
    this.width = this.xy - 3 * 2;
    this.height = this.xy - 3 * 2;
    this.shooting = false;
    this.shootNow = 0;
    this.health = 100;
    this.projectiles = [];
    this.frameX = 0;
    this.frameY = 0;
    this.spriteWidth = 194;
    this.spriteHeight = 194;
    this.frame = 0;
    this.minFrame = 0;
    this.maxFrame = 16;
    this.defType = type;
    this.imgSrc = this.defType === 1 ? def1 : def2;
    this.projectiles = projectiles;
  }

  draw(ctx) {
    ctx.drawImage(
      this.imgSrc,
      Math.floor(this.frameX) * this.spriteWidth,
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
    ctx.fillText(~~this.health, this.x + 30, this.y + 30);
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
      if (this.frameX === 15) {
        this.shootNow = true;
      }
    }

    if (this.defType === 1) {
      if (this.shooting) {
        this.minFrame = 0;
        this.maxFrame = 15;
      } else {
        this.minFrame = 17;
        this.maxFrame = 23;
      }
    } else {
      if (this.shooting) {
        this.minFrame = 13;
        this.maxFrame = 28;
      } else {
        this.minFrame = 0;
        this.maxFrame = 12;
      }
    }

    if (this.shooting && this.shootNow) {
      this.projectiles.push(new Projectile(this.x + 70, this.y + 35));
      this.shootNow = false;
    }
  }
}

export default Defender;
