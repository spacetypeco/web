function manageLoopState(p, canvas, options) {
  let looping = true;
  let updateState = () => {
    let bounds = canvas.elt.getBoundingClientRect();
    if (
      bounds.bottom - bounds.height / 2 > 0 &&
      bounds.top + bounds.height / 2 <= p.windowHeight
    ) {
      if (looping) {
        return;
      }

      if (options && options.onLoop) {
        options.onLoop();
      }

      p.loop();
      looping = true;
    } else if (looping) {
      p.noLoop();
      looping = false;
    }
  };

  if (options && options.scrollContainer) {
    options.scrollContainer.addEventListener("scroll", updateState);
  } else {
    document
      .getElementById("sketches-container")
      .addEventListener("scroll", updateState);
  }

  updateState();
  return updateState;
}

SpaceTypeUtils = {
  manageLoopState,
};
