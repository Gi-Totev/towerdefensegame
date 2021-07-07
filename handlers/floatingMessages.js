function handleFloatingMessages(ctx, gameContext) {
  const floatingMessages = gameContext.floatingMessages;
  let l = floatingMessages.length;
  for (let i = 0; i < l; i++) {
    floatingMessages[i].update();
    floatingMessages[i].draw(ctx);
    if (floatingMessages[i].lifeSpan >= 50) {
      floatingMessages.splice(i, 1);
      i--;
      l--;
    }
  }
}

export default handleFloatingMessages;
