ShaderWag = {
  targetBg: "#161616",
  createSketch: function (divId) {
    let sketch = function (p) {
      let ease = new p5.Ease();

      // the shader variable
      let theShader;

      let img;
      let timer = 0;
      let frmRate = 30;
      let bgCanvas;
      let txt = "SPACE  TYPE";
      let font;
      let fontSize;

      let scale;
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
        let canvas = p.createCanvas(div.offsetWidth, div.clientHeight, p.WEBGL);
        bgCanvas = p.createGraphics(p.width, p.height);
        // bgCanvas.pixelDensity(2)
        // pixelDensity(2);
        p.noStroke();
        p.frameRate(frmRate);
        // bgCanvas.textAlign(p.CENTER);
        // img.resize(width, height)
        p.imageMode(p.CENTER);

        // textLayer = p.createGraphics(p.width, p.height);
        // initSize = p.min(p.width, p.height);
        // initX = p.width;
        // initY = p.height;

        initSize = Math.min(p.width, p.height);
        setFont();
        bgCanvas.textFont(font);
        bgCanvas.textSize(fontSize);
        bgCanvas.background(0);
        bgCanvas.fill("white");
        let bounds = font.textBounds(txt, 0, 0, fontSize);
        // bgCanvas.textAlign(p.CENTER, p.CENTER);
        bgCanvas.text(
          txt,
          bgCanvas.width / 2 - bounds.w / 2,
          bgCanvas.height / 2 + bounds.h / 2
        );
        // bgCanvas.fill(255, 0, 0, 100);
        // bgCanvas.rect(
        //   bounds.x - p.width / 4,
        //   bounds.y + p.height / 4,
        //   bounds.w,
        //   bounds.h
        // );
      };

      p.draw = function () {
        let easeVal = ease.quadraticInOut(p.map(timer, 0, frmRate * 2, 1, 0));
        p.shader(theShader);

        theShader.setUniform("tex", bgCanvas);

        theShader.setUniform("u_resolution", [p.width, p.height]);
        theShader.setUniform("u_frame", easeVal); // we divide millis by 1000 to convert it to seconds
        theShader.setUniform("u_mouse", [
          p.mouseX,
          p.map(p.mouseY, 0, p.height, p.height, 0),
        ]);

        // rect gives us some geometry on the screen
        //p.image(bgCanvas, 0, 0);
        p.rect(-p.width / 2, -p.height / 2, p.width, p.height);

        timerCount();
      };

      function timerCount() {
        if (timer == frmRate * 2) {
          flip = true;
        }
        if (timer == 0 && p.frameCount > 0) {
          flip = false;
        }
        if (timer <= frmRate * 2 && flip == false) {
          timer++;
        }
        if (timer <= frmRate * 2 && flip == true) {
          timer--;
        }
      }

      p.windowResized = function () {
        let div = document.getElementById(divId);
        p.resizeCanvas(div.offsetWidth, div.clientHeight);
        scale = Math.min(p.width, p.height) / initSize;
      };
    };
    return sketch;
  },
};
