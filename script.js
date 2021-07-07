import { collision, setupMouse } from "./Utility/index.js";
import Defender from "./Defenders/Defender.js";
import Board from "./Board/Board.js";
import Mouse from "./Mouse/Mouse.js";
import FloatingMessage from "./UI/FloatingMessage.js";
import {
  handleProjectiles,
  handleResources,
  handleEnemies,
  handleFloatingMessages,
  handleGameStatus,
  handleDefenders,
} from "./handlers/index.js";
import GameContext from "./GameContext/GameContext.js";
import drawBackground from "./background/background.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 600;

// Global Variables
const xy = 100;
let gameOver = false;

// Mouse

const mouse = new Mouse();
setupMouse(canvas, mouse);

// Game Board

const gameBoard = new Board();
gameBoard.createGrid(canvas, mouse);

let gameContext = new GameContext(gameBoard, mouse);

drawBackground(gameContext);

const controlsBar = {
  width: canvas.width,
  height: xy,
};

// Towers

const card1 = {
  x: 10,
  y: 5,
  width: 70,
  height: 85,
};
const card2 = {
  x: 90,
  y: 5,
  width: 70,
  height: 85,
};

const def1 = new Image();
def1.src = "bluedefender.png";
const def2 = new Image();
def2.src = "pinkdefender.png";

function chooseDefender(gameContext) {
  let card1Stroke = "black";
  let card2Stroke = "black";
  const { chosenDefender, mouse } = gameContext;
  if (collision(mouse, card1) && mouse.clicked) {
    gameContext.setChosenDefender(1);
  } else if (collision(mouse, card2) && mouse.clicked) {
    gameContext.setChosenDefender(2);
  }

  switch (chosenDefender) {
    case 1:
      card1Stroke = "blue";
      card2Stroke = "black";
      break;
    case 2:
      card1Stroke = "black";
      card2Stroke = "blue";
      break;
    default:
      card1Stroke = "black";
      card2Stroke = "black";
      break;
  }

  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.strokeStyle = card1Stroke;
  ctx.fillRect(card1.x, card1.y, card1.width, card1.height);
  ctx.strokeRect(card1.x, card1.y, card1.width, card1.height);
  ctx.drawImage(def1, 0, 0, 194, 194, 0, 5, 194 / 2, 194 / 2);
  ctx.strokeStyle = card2Stroke;
  ctx.fillRect(card2.x, card2.y, card2.width, card2.height);
  ctx.strokeRect(card2.x, card2.y, card2.width, card2.height);
  ctx.drawImage(def2, 0, 0, 194, 194, 75, 5, 194 / 2, 194 / 2);
}

// Utilities

canvas.addEventListener("click", () => {
  const gridPositionX = mouse.x - (mouse.x % xy);
  const gridPositionY = mouse.y - (mouse.y % xy);
  if (gridPositionY < xy) return;
  const defenders = gameContext.defenders;
  for (let i = 0, def = defenders.length; i < def; i++) {
    if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) {
      return;
    }
  }
  const resources = gameContext.resources;
  const projectiles = gameContext.projectiles;
  const floatingMessages = gameContext.floatingMessages;
  let defenderCost = 100;
  if (resources >= defenderCost) {
    gameContext.setResources(-defenderCost);
    defenders.push(
      new Defender({
        x: gridPositionX,
        y: gridPositionY,
        type: gameContext.chosenDefender,
        projectiles,
      })
    );
  } else {
    floatingMessages.push(
      new FloatingMessage(mouse.x, mouse.y, "Not enough resources", 15, "blue")
    );
  }
});

let old = 0;
let delta = 0;

function animate(time) {
  delta = time - old;
  old = time;
  gameContext.update();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
  gameBoard.draw(ctx);
  handleDefenders(delta, gameContext, ctx);
  handleProjectiles(ctx, gameContext);
  handleEnemies(delta, gameContext, ctx);
  chooseDefender(gameContext);
  handleResources(ctx, gameContext);
  handleGameStatus(gameContext, ctx);
  handleFloatingMessages(ctx, gameContext);

  if (!gameContext.gameOver) {
    requestAnimationFrame(animate);
  }
}

animate();
