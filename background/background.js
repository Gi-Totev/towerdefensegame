const top1 = new Image();
top1.src = "top1.png";
const top2 = new Image();
top2.src = "top2.png";
const center1 = new Image();
center1.src = "center1.png";
const center2 = new Image();
center2.src = "center2.png";

function drawBackground(gameContext) {
  const grid = gameContext.gameBoard.grid;
  const backgroundCanvas = document.getElementById("background");
  backgroundCanvas.width = 900;
  backgroundCanvas.height = 600;
  const context = backgroundCanvas.getContext("2d");

  const draw = () => {
    for (const cell of grid) {
      context.drawImage(
        center[0],
        0,
        0,
        128,
        128,
        cell.x,
        cell.y,
        cell.width,
        cell.height
      );
    }
  };

  const center1 = new Image();
  center1.src = "center1.png";
  center1.onload = draw;
  const top = [top1, top2];
  const center = [center1, center2];
  context.drawImage(center[0], 0, 0, 128, 128, 0, 0, 100, 100);

  context.drawImage(center[0], 0, 0, 128, 128, 100, 100, 100, 100);
}

export default drawBackground;
