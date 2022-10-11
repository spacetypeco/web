export default function (divId) {
  let sketch = function (p) {
    let updateLoopState;

    let layer;
    let font;

    let mouseOverTime = null;
    let mouseOutTime = null;

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
      p.textureMode(p.NORMAL);
      p.textureWrap(p.REPEAT);

      layer = p.createGraphics(512, 512);
      layer.setAttributes({ alpha: true });
      layer.textFont(font);
      layer.pixelDensity(1);
      layer.background("white");
      layer.fill("black");
      layer.textSize(100);
      layer.textAlign(p.CENTER, p.CENTER);
      layer.text("SPACE", layer.width / 2, layer.height / 2);
    };

    p.draw = function () {
      p.clear();
      let left = -p.width / 2;
      let right = p.width / 2;
      let step = 10;

      // p.rotateY(p.mouseX);
      // p.rotateX(20);
      p.noStroke();

      p.texture(layer);

      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = left; x <= right; x = x + step) {
        let z = 10 * Math.sin(0.1 * x + 0.01 * p.frameCount);

        let val = x + 150 + p.frameCount;
        // let u = p.map(val, 0, 256, 0, p.map(p.mouseX, 0, p.width, 1, 2, true));

        let u;
        const minRep = 1.5;
        const maxRep = 3;

        if (mouseOverTime !== null) {
          let easeVal = easeInOutCubic(
            p.map(p.millis(), mouseOverTime, mouseOverTime + 1000, 0, 1, true)
          );

          let time = p.map(easeVal, 0, 1, minRep, maxRep, true);
          u = p.map(val, 0, 256, 0, time);
        } else if (mouseOutTime) {
          let easeVal = easeInOutCubic(
            p.map(p.millis(), mouseOutTime, mouseOutTime + 1000, 0, 1, true)
          );

          let time = p.map(easeVal, 0, 1, maxRep, minRep, true);
          u = p.map(val, 0, 256, 0, time);
        } else {
          u = p.map(val, 0, 256, 0, minRep);
        }

        p.vertex(x, -100, z, u, 0);
        p.vertex(x, 100, z, u, 1);
      }
      p.endShape();
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
