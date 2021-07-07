const setupMouse = function (canvas, mouse) {
  canvas.addEventListener("mousedown", () => {
    mouse.setClicked(true);
  });
  canvas.addEventListener("mouseup", () => {
    mouse.setClicked(false);
  });
  let canvasPosition = canvas.getBoundingClientRect();

  function setupEventListeners() {
    canvas.addEventListener("mousemove", (e) => {
      mouse.setMouse(e.x - canvasPosition.left, e.y - canvasPosition.top);
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.setMouse(undefined, undefined);
    });
  }

  setupEventListeners();

  window.addEventListener("resize", () => {
    canvasPosition = canvas.getBoundingClientRect();
    setupEventListeners(canvas, mouse);
  });
};

export default setupMouse;
