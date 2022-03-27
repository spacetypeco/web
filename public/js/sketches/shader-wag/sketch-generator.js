ShaderWag = {
  targetBg: "#161616",
  createSketch: function (divId) {
    let sketch = function (p) {
      let ease = new p5.Ease();
      let theShader;

      let timer = 0;
      let frmRate = 30;
      let bgCanvas;
      let canvas;
      let txt = "SPACE  TYPE";
      let font;
      let fontSize;

      let initSize = 1600;

      p.preload = function () {
        fonts = {
          wide: {
            font: p.loadFont(`fonts/SpaceTypeSans-wide.otf`),
            scale: (initSize) => (2 * initSize) / 3,
          },
          regular: {
            font: p.loadFont(`fonts/SpaceTypeSans-Regular.otf`),
            scale: (initSize) => (11 * initSize) / 12,
          },
          narrow: {
            font: p.loadFont(`fonts/SpaceTypeSans-narrow.otf`),
            scale: (initSize) => 1.5 * initSize,
          },
        };

        theShader = p.loadShader(
          "js/sketches/shader-wag/effect.vert",
          "js/sketches/shader-wag/effect.frag"
        );
      };

      function setFont() {
        console.log("setfont");
        let aspect = p.width / p.height;
        if (aspect < 0.8) {
          font = fonts["narrow"].font;
          fontSize = fonts["narrow"].scale(initSize);
        } else if (aspect < 1.2) {
          font = fonts.regular.font;
          fontSize = fonts.regular.scale(initSize);
        } else {
          font = fonts["wide"].font;
          fontSize = fonts["wide"].scale(initSize);
        }
      }

      p.setup = function () {
        let div = document.getElementById(divId);
        canvas = p.createCanvas(div.offsetWidth, div.clientHeight, p.WEBGL);
        SpaceTypeUtils.manageLoopState(p, canvas);
        bgCanvas = p.createGraphics(p.width, p.height);
        p.noStroke();
        p.frameRate(frmRate);
        p.imageMode(p.CENTER);
        refreshCanvas();
      };

      function refreshCanvas() {
        bgCanvas.resizeCanvas(p.width, p.height);
        initSize = Math.min(p.width, p.height);
        setFont();
        bgCanvas.textFont(font);
        bgCanvas.textSize(fontSize);
        bgCanvas.background("#161616");
        bgCanvas.fill("white");
        let bounds = font.textBounds(txt, 0, 0, fontSize);
        bgCanvas.text(
          txt,
          bgCanvas.width / 2 - bounds.w / 2,
          bgCanvas.height / 2 + bounds.h / 2
        );
      }

      p.draw = function () {
        let easeVal = ease.quadraticInOut(p.map(timer, 0, frmRate * 3, 1, 0));
        p.shader(theShader);

        theShader.setUniform("tex", bgCanvas);

        theShader.setUniform("u_resolution", [p.width, p.height]);
        theShader.setUniform("u_frame", easeVal); // we divide millis by 1000 to convert it to seconds
        theShader.setUniform("u_mouse", [
          p.mouseX,
          p.map(p.mouseY, 0, p.height, p.height, 0),
        ]);

        //p.image(bgCanvas, 0, 0);
        p.rect(-p.width / 2, -p.height / 2, p.width, p.height);

        timerCount();
      };

      function timerCount() {
        if (timer == frmRate * 3) {
          flip = true;
        }
        if (timer == 0 && p.frameCount > 0) {
          flip = false;
        }
        if (timer <= frmRate * 3 && flip == false) {
          timer++;
        }
        if (timer <= frmRate * 3 && flip == true) {
          timer--;
        }
      }

      p.windowResized = function () {
        let div = document.getElementById(divId);
        p.resizeCanvas(div.offsetWidth, div.clientHeight);
        refreshCanvas();
        manageLoopState();
      };
    };
    return sketch;
  },
};
