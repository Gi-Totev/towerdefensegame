const roundNumber = function () {
  return (this + 0.5) << 0;
};

const collision = function (r1, r2) {
  if (
    !(
      r1.x > r2.x + r2.width ||
      r1.x + r1.width < r2.x ||
      r1.y > r2.y + r2.height ||
      r1.y + r1.height < r2.y
    )
  ) {
    return true;
  }
  return false;
};

export { roundNumber, collision };
