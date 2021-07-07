import Resource from "../Resource/Resource.js";
import FloatingMessage from "../UI/FloatingMessage.js";
import { collision } from "../Utility/Utilities.js";

function handleResources(ctx, gameContext) {
  let { res, floatingMessages, mouse, frame } = gameContext;

  if (frame % 600 === 0) {
    res.push(new Resource());
  }

  let r = res.length;
  for (let i = 0; i < r; i++) {
    res[i].draw(ctx);
    res[i].update(frame);
    if (mouse.x && mouse.y && collision(res[i], mouse)) {
      floatingMessages.push(
        new FloatingMessage(
          res[i].x,
          res[i].y,
          `+ ${res[i].amount}`,
          30,
          "white"
        )
      );
      floatingMessages.push(
        new FloatingMessage(470, 85, `+ ${res[i].amount}`, 30, "gold")
      );
      gameContext.setResources(res[i].amount);
      res.splice(i, 1);
      i--;
      r--;
    }
  }
}

export default handleResources;
