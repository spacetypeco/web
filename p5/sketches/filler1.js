const Matter = require("../lib/matter-0_14_2.min.js");

export default function (divId) {
  let sketch = function (p) {
    let updateLoopState;

    let engine, world;
    let font;

    let letters = [];
    let constraints = [];
    let constraintStiffness = 0.05;

    let mouseOverTime = null;
    let mouseOutTime = null;
    let startingVal = null;
    let mouseMode = null;

    function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    p.preload = function () {
      font = p.loadFont(
        "/fonts/TradeGothicDisplay/TradeGothicDisplay1-Base.otf"
      );
    };

    class Letter {
      constructor(world, txt, x, y) {
        this.txt = txt;
        this.ptSize = 100;
        this.originalColor = "black";
        this.color = "black";
        this.fill = null;

        let bounds = font.textBounds(this.txt, 0, 0, this.ptSize);
        this.body = Matter.Bodies.rectangle(x, y, bounds.w, bounds.h, {
          restitution: 0.8,
          height: bounds.h,
        });

        Matter.Body.setAngle(this.body, p.random(-1, 1));
        Matter.World.add(world, this.body);

        this.ghost = null;
      }

      draw(p, rot) {
        if (this.ghost) {
          const pos = this.ghost.position;
          const angle = this.ghost.angle;
          p.push();
          p.translate(pos.x, pos.y);
          p.rotate(angle);

          p.fill("#fe2179");
          p.noStroke();
          p.textSize(this.ptSize);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(this.txt, 0, -this.body.height / 2);
          p.pop();
        }

        const pos = this.body.position;
        const angle = this.body.angle;

        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle + rot);

        const clr = p.color(this.color);
        if (this.fill) {
          p.fill(this.fill);
          p.noStroke();
        } else {
          p.fill(this.color);
          p.stroke(this.color);
          p.strokeWeight(1);
        }
        p.textSize(this.ptSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(this.txt, 0, -this.body.height / 2);
        p.pop();

        this.ghost = {
          position: { x: this.body.position.x, y: this.body.position.y },
          angle: this.body.angle,
        };
      }
    }

    p.setup = function () {
      let div = document.getElementById(divId);
      let canvas = p.createCanvas(div.offsetWidth, div.clientHeight);
      updateLoopState = SpaceTypeUtils.manageLoopState(p, canvas, {
        scrollContainer: document,
      });

      engine = Matter.Engine.create();
      world = engine.world;

      let yOffset = 100;
      let prev = {};

      prev.body = Matter.Bodies.rectangle(
        p.width / 2 + p.random(-p.width / 4, p.width / 4),
        0,
        1,
        1,
        {
          restitution: 0.8,
          isStatic: true,
        }
      );

      Matter.World.add(world, prev.body);

      for (let ch of "PARTY".split("")) {
        const letter = new Letter(world, ch, p.width / 2, yOffset);
        letters.push(letter);
        yOffset += 100;

        if (prev) {
          const options = {
            bodyA: letter.body,
            bodyB: prev.body,
            length: 100,
            stiffness: constraintStiffness,
          };
          const constraint = Matter.Constraint.create(options);
          Matter.World.add(world, constraint);

          constraints.push(constraint);
        }

        prev = letter;
      }

      let bottomStrap = Matter.Bodies.rectangle(
        p.width / 2 + p.random(-p.width / 4, p.width / 4),
        p.height,
        1,
        1,
        {
          restitution: 0.8,
          isStatic: true,
        }
      );

      Matter.World.add(world, bottomStrap);
      const options = {
        bodyA: prev.body,
        bodyB: bottomStrap,
        length: 100,
        stiffness: constraintStiffness,
      };
      const constraint = Matter.Constraint.create(options);
      Matter.World.add(world, constraint);

      constraints.push(constraint);

      canvas.mouseOver(() => {
        if (mouseOutTime) {
          startingVal =
            1 -
            easeInOutCubic(
              p.map(
                p.millis(),
                mouseOutTime,
                mouseOutTime + 1000,
                startingVal == null ? 0 : 1 - startingVal,
                1,
                true
              )
            );
        }

        mouseOverTime = p.millis();
        mouseMode = "OVER";
      });
      canvas.mouseOut(() => {
        if (mouseOverTime) {
          startingVal = easeInOutCubic(
            p.map(
              p.millis(),
              mouseOverTime,
              mouseOverTime + 1000,
              startingVal == null ? 0 : startingVal,
              1,
              true
            )
          );
        }
        mouseOutTime = p.millis();
        mouseMode = "OUT";
      });
    };

    p.draw = function () {
      p.clear();
      Matter.Engine.update(engine);
      p.textFont(font);

      let rot = 0;
      if (mouseMode === "OVER") {
        let easeVal = easeInOutCubic(
          p.map(
            p.millis(),
            mouseOverTime,
            mouseOverTime + 1000,
            startingVal == null ? 0 : startingVal,
            1,
            true
          )
        );

        rot = p.map(easeVal, 0, 1, 0, 3.14, true);
      } else if (mouseMode === "OUT") {
        let easeVal = easeInOutCubic(
          p.map(
            p.millis(),
            mouseOutTime,
            mouseOutTime + 1000,
            startingVal == null ? 0 : 1 - startingVal,
            1,
            true
          )
        );

        rot = p.map(easeVal, 0, 1, 3.14, 0, true);
      }

      for (let letter of letters) {
        letter.draw(p, rot);
      }

      world.gravity.x = p.map(p.mouseX, 0, p.width, -0.4, 0.4, true);
      world.gravity.y = p.map(p.mouseY, 0, p.height, -1, 1, true);

      //   p.clear();
      //   const clr = p.color("#fe2179");
      //   p.stroke("#fe2179");
      //   p.strokeWeight(strokeW);
      //   p.noFill();

      //   const shiftX = p.map(p.mouseX, 0, p.width, -0.8, 0.8, true);
      //   const shiftY = p.map(p.mouseY, 0, p.height, -0.8, 0.5, true);

      //   for (let i = 0; p.width - 2 * strokeW - 2 * i * gap > 0; i++) {
      //     const opacity = p.map(
      //       p.width - 2 * strokeW - 2 * i * gap,
      //       p.width - 2 * strokeW,
      //       0,
      //       255,
      //       0.0
      //     );
      //     clr.setAlpha(opacity);
      //     p.stroke(clr);
      //     p.rect(
      //       strokeW + i * gap + i * gap * shiftX,
      //       strokeW + i * gap + i * gap * shiftY,
      //       p.width - 2 * strokeW - 2 * i * gap,
      //       p.height - 2 * strokeW - 2 * i * gap,
      //       20
      //     );
      //   }
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
