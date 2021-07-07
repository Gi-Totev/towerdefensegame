import FloatingMessage from "../UI/FloatingMessage.js";
import { collision } from "../Utility/index.js";

function handleProjectiles(ctx, gameContext) {
  let { gameBoard, projectiles, floatingMessages, resources, xy } = gameContext;
  let p = projectiles.length;
  let e = gameBoard.enemies.length;

  for (let i = 0; i < p; i++) {
    projectiles[i].update();
    projectiles[i].draw(ctx);

    inner: for (let j = 0; j < e; j++) {
      const { enemies, enemyPositions } = gameBoard;
      if (collision(projectiles[i], enemies[j])) {
        enemies[j].health -= projectiles[i].power;
        if (enemies[j].health <= 0) {
          gameContext.score += enemies[j].maxHealth;

          let amount = enemies[j].maxHealth / 10;
          gameContext.setResources(amount);

          floatingMessages.push(
            new FloatingMessage(
              enemies[j].x,
              enemies[j].y,
              `+ ${amount}`,
              30,
              "white"
            )
          );

          floatingMessages.push(
            new FloatingMessage(470, 85, `+ ${amount}`, 30, "gold")
          );

          let index = enemies[j].y / xy;

          enemyPositions[index - 1] = enemyPositions[index - 1] - 1;
          enemies.splice(j, 1);
          j--;
          e--;
        }
        projectiles.splice(i, 1);
        i--;
        p--;
        break inner;
      }
    }

    if (projectiles[i]?.x > canvas.width - xy) {
      projectiles.splice(i, 1);
      i--;
      p--;
    }
  }
}

export default handleProjectiles;
