import { collision } from "../Utility/index.js";

function handleDefenders(delta, gameContext, ctx) {
  const { defenders, gameBoard, xy } = gameContext;
  let g = defenders.length;
  let e = gameBoard.enemies.length;
  for (let i = 0; i < g; i++) {
    defenders[i].draw(ctx);
    defenders[i].update(delta);

    if (gameBoard.enemyPositions[defenders[i].y / xy - 1] > 0) {
      defenders[i].shooting = true;
    } else {
      defenders[i].shooting = false;
    }

    loop2: for (let j = 0; j < e; j++) {
      if (collision(defenders[i], gameBoard.enemies[j])) {
        gameBoard.enemies[j].movement = 0;
        defenders[i].health -= 0.2;

        if (defenders[i].health <= 0) {
          defenders.splice(i, 1);
          i--;
          g = defenders.length;
          gameBoard.enemies[j].movement = gameBoard.enemies[j].speed;
          break loop2;
        }
      }
    }
  }
}

export default handleDefenders;
