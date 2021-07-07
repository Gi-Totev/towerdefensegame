const enemyTypes = [];
const enemy1 = new Image();
enemy1.src = "alien5.png";
enemyTypes.push(enemy1);
const enemy2 = new Image();
enemy2.src = "alien15.png";
enemyTypes.push(enemy2);

class Enemy {
  constructor(verticalPosition) {
    this.x = canvas.width;
    this.y = verticalPosition;
    this.width = 97;
    this.height = 97;
    this.speed = Math.random() * 0.2 + 0.4;
    this.movement = this.speed;
    this.health = 250;
    this.maxHealth = this.health;
    this.enemyType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
    this.frameX = 0;
    this.frameY = 0;
    this.minFrame = 0;
    this.maxFrame = 4;
    this.spriteWidth = 256;
    this.spriteHeight = 256;
    this.frame = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.font = `20px Krona One`;
    ctx.fillText(Math.floor(this.health), this.x + 30, this.y + 30);
    ctx.drawImage(
      this.enemyType,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(delta) {
    this.x -= this.movement;
    this.frame += delta / 2;
    if (this.frame > 56) {
      this.frame -= 56;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = this.minFrame;
      }
    }
  }
}

export default Enemy;
