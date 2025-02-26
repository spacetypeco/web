export default function (divId) {
  let sketch = function (p) {
    let updateLoopState;

    let font;
    let mouseOverTime, mouseOutTime;

    p.preload = function () {
      font = p.loadFont(
        "/fonts/TradeGothicDisplay/TradeGothicDisplay1-Base.otf"
      );
    };

    function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    p.setup = function () {
      let div = document.getElementById(divId);
      let canvas = p.createCanvas(div.offsetWidth, div.clientHeight, p.WEBGL);

      canvas.mouseOver(() => (mouseOverTime = p.millis()));
      canvas.mouseOut(() => {
        mouseOverTime = null;
        mouseOutTime = p.millis();
      });

      updateLoopState = SpaceTypeUtils.manageLoopState(p, canvas, {
        scrollContainer: document,
      });

      p.angleMode(p.DEGREES);
      p.textFont(font);
    };

    p.draw = function () {
      p.background("white");
      p.fill("black");
      p.stroke("black");

      const margin = 50;
      let i = 0;
      for (let y = -p.height / 2 + margin; y < p.height / 2 - margin; y += 50) {
        for (let angle = 0; angle < 360; angle += 20) {
          p.push();
          p.translate(0, y, 0);
          p.rotateZ(angle);
          p.rotateY(angle + p.frameCount);
          p.text(
            "SPACE".split("")[i % "SPACE".length],
            0,
            100 +
              25 * Math.sin(0.01 * p.frameCount) +
              10 * Math.sin(10 * y + 0.05 * p.frameCount)
          );
          p.pop();
        }
        i += 1;
      }
    };

    p.windowResized = function () {
      let div = document.getElementById(divId);
      if (!div) {
        // div may have been removed as part of a next.js page transition — return silently.
        return;
      }

      p.resizeCanvas(div.offsetWidth, div.clientHeight);
      updateLoopState();
    };
  };

  return sketch;
}
