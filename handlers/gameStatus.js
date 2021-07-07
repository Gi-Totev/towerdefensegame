function handleGameStatus(gameContext, ctx) {
  const { resources, score, gameOver } = gameContext;
  ctx.fillStyle = "#000";
  ctx.font = `20px Krona One`;
  ctx.fillText(`Resources: ${resources}`, 180, 55);
  ctx.fillText(`Score: ${score}`, 180, 80);

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = `90px Krona One`;
    ctx.fillText("GAME OVER", 185, 330);
  }
}

export default handleGameStatus;
