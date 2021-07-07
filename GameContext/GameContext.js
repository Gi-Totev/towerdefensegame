class GameContext {
  constructor(gameBoard, mouse) {
    this.xy = 100;
    this.defenders = [];
    this.res = [];
    this.projectiles = [];
    this.floatingMessages = [];
    this.gameBoard = gameBoard;
    this.score = 0;
    this.resources = 300;
    this.mouse = mouse;
    this.frame = 0;
    this.enemyInterval = 600;
    this.gameOver = false;
    this.chosenDefender = 1;
  }

  setEnemyInterval() {
    if (this.enemyInterval > 100) {
      this.enemyInterval -= 25;
    }
  }

  setChosenDefender(def) {
    this.chosenDefender = def;
  }

  setResources(amount) {
    this.resources += amount;
  }

  update() {
    this.frame++;
  }
}

export default GameContext;
