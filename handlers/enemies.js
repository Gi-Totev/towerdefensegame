import Enemy from "../Enemy/Enemy.js";

function handleEnemies(delta, gameContext, ctx) {
  const { gameBoard, enemyInterval, frame, xy } = gameContext;
  const { enemies, enemyPositions } = gameBoard;

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update(delta);
    enemies[i].draw(ctx);
    if (enemies[i].x < 0) {
      gameContext.gameOver = true;
    }
  }

  if (frame % enemyInterval === 0) {
    let verticalPosition = ~~(Math.random() * 5) + 1;
    enemyPositions[verticalPosition - 1] =
      enemyPositions[verticalPosition - 1] + 1;

    enemies.push(new Enemy(verticalPosition * xy));
    gameContext.setEnemyInterval();
  }
}

export default handleEnemies;
