PathTweaker = {
  targetBg: "#161616",
  createSketch: function (divId) {
    let sketch = function (p) {
      let txt = "SPACETYPE";
      let activeSketchMillis = 0;
      let lastMillis;
      let p5font;
      let fonts;
      let font;
      let path;
      let updateLoopState;

      let historyLayer;
      let drawLayer;
      let uiLayer;
      let startedAt;

      let scale = 1;
      let initSize;
      let fontSize;
      let bounds;
      let lastWindowResize;

      let selectedSegment;

      function setFont() {
        let aspect = p.width / p.height;
        if (aspect < 0.8) {
          font = fonts["narrow"];
          fontSize = fonts["narrow"].scale(initSize);
        } else if (aspect < 1.2) {
          font = fonts.regular;
          fontSize = fonts.regular.scale(initSize);
        } else {
          font = fonts["wide"];
          fontSize = fonts["wide"].scale(initSize);
        }
      }

      // Thanks to Allison Parrish for this outline function that
      // we have mangled for our own nefarious purposes  = )
      function drawPathOutline(cmds, layer, curvesOnly = false) {
        // current pen position
        let cx = 0;
        let cy = 0;

        // start position of current contour
        let startX = 0;
        let startY = 0;

        if (!startedAt) {
          startedAt = p.millis();
          activeSketchMillis = 0;
        }

        let max = Math.round(
          p.map(activeSketchMillis, 0, 4000, 0, cmds.length)
        );

        let i = 0;
        for (let cmd of cmds) {
          i += 1;
          if (i >= max) {
            break;
          }
          switch (cmd.type) {
            case "M":
              startX = cmd.x;
              startY = cmd.y;
              cx = cmd.x;
              cy = cmd.y;
              break;
            case "L":
              if (!curvesOnly) {
                layer.line(cx, cy, cmd.x, cmd.y);
              }
              cx = cmd.x;
              cy = cmd.y;
              break;
            case "C":
              layer.bezier(
                cx,
                cy,
                cmd.x1 + cmd.animx1,
                cmd.y1,
                cmd.x2 - cmd.animx1,
                cmd.y2,
                cmd.x,
                cmd.y
              );
              cx = cmd.x;
              cy = cmd.y;
              break;
            case "Q":
              layer.beginShape();
              layer.vertex(cx, cy);
              layer.quadraticVertex(cmd.x1 + cmd.animx1, cmd.y1, cmd.x, cmd.y);
              layer.endShape();
              cx = cmd.x;
              cy = cmd.y;
              break;
            case "Z":
              // to complete path
              if (!curvesOnly) {
                layer.line(cx, cy, startX, startY);
              }
              break;
          }
        }
      }

      p.preload = function () {
        fonts = {
          wide: {
            p5font: p.loadFont(`fonts/SpaceTypeSans-wide.otf`),
            fontData: p.loadBytes("fonts/SpaceTypeSans-wide.otf"),
            scale: (initSize) => (2 * initSize) / 3,
          },
          regular: {
            p5font: p.loadFont(`fonts/SpaceTypeSans-Regular.otf`),
            fontData: p.loadBytes("fonts/SpaceTypeSans-Regular.otf"),
            scale: (initSize) => initSize,
          },
          narrow: {
            p5font: p.loadFont(`fonts/SpaceTypeSans-narrow.otf`),
            fontData: p.loadBytes("fonts/SpaceTypeSans-narrow.otf"),
            scale: (initSize) => 1.5 * initSize,
          },
        };
      };

      p.setup = function () {
        let div = document.getElementById(divId);
        let canvas = p.createCanvas(div.offsetWidth, div.clientHeight);
        updateLoopState = SpaceTypeUtils.manageLoopState(p, canvas, {
          onLoop: () => (lastMillis = p.millis()),
        });

        drawLayer = p.createGraphics(p.width, p.height);
        historyLayer = p.createGraphics(p.width, p.height);
        uiLayer = p.createGraphics(p.width, p.height);
        refreshCanvas();
      };

      function closestSegment() {
        let closestSegment = null;
        let closestDistance = Infinity;
        let mousePt = {
          x: (p.mouseX - p.width / 2) / scale,
          y: (p.mouseY - p.height / 2) / scale,
        };

        for (let seg of path.commands) {
          if (!seg.x1) {
            continue;
          }
          let handlePt = {
            x: seg.x,
            y: seg.y,
          };

          let d = p.dist(mousePt.x, mousePt.y, handlePt.x, handlePt.y);
          if (d < closestDistance) {
            closestSegment = seg;
            closestDistance = d;
          }
        }

        return closestSegment;
      }

      function moveHandle(segment) {
        if (p.mouseIsPressed) {
          segment.x1 = (p.mouseX - p.width / 2) / scale;
          segment.y1 = (p.mouseY - p.height / 2) / scale;
        }
      }

      function drawSegment(seg, isMousedOver = true) {
        let handleX = seg.x1; // + seg.animx1
        let handleY = seg.y1;
        if (!handleX) {
          return;
        }

        if (isMousedOver) {
          uiLayer.fill("#fce435");
          uiLayer.stroke("#fce435");
          uiLayer.strokeWeight(2);
        } else {
          uiLayer.fill("black");
          let color = p.color("#fce435");
          color.setAlpha(0.75);
          uiLayer.stroke(color);
          uiLayer.strokeWeight(2);
        }

        if (p.mouseIsPressed) {
          uiLayer.line(
            seg.x,
            seg.y,
            (p.mouseX - p.width / 2) / scale,
            (p.mouseY - p.height / 2) / scale
          );
          uiLayer.ellipse(handleX, handleY, 5);
        } else {
          uiLayer.line(seg.x, seg.y, handleX + seg.animx1, handleY);
          uiLayer.ellipse(handleX + seg.animx1, handleY, 5);
        }

        handleX = seg.x2 - seg.animx1;
        handleY = seg.y2;
        if (!handleX) {
          return;
        }

        uiLayer.line(seg.x, seg.y, handleX, handleY);
        uiLayer.ellipse(handleX, handleY, 5);
      }

      function moveSegment(segment) {
        if (!segment.x1) {
          return;
        }
        segment.animx1 =
          100 * Math.sin(segment.offset + segment.speed * p.frameCount);
      }

      p.draw = function () {
        if (lastMillis) {
          activeSketchMillis += p.millis() - lastMillis;
        }

        lastMillis = p.millis();

        if (lastWindowResize && p.millis() - lastWindowResize > 200) {
          refreshCanvas();
          lastWindowResize = null;
        }

        let mouseOverSegment = closestSegment();
        if (!p.mouseIsPressed) {
          selectedSegment = null;
        } else {
          if (!selectedSegment) {
            selectedSegment = mouseOverSegment;
          }

          moveHandle(selectedSegment);
        }

        for (let seg of path.commands) {
          moveSegment(seg);
        }

        p.clear();
        drawLayer.clear();
        drawLayer.noFill();
        drawLayer.stroke(255);
        drawLayer.strokeWeight(2);
        drawLayer.push();
        drawLayer.translate(p.width / 2, p.height / 2);
        drawLayer.scale(scale);
        drawPathOutline(path.commands, drawLayer);
        drawLayer.pop();

        uiLayer.clear();
        uiLayer.push();
        uiLayer.translate(p.width / 2, p.height / 2);
        uiLayer.scale(scale);
        drawSegment(selectedSegment || mouseOverSegment);
        uiLayer.pop();

        p.image(historyLayer, 0, 0);
        p.image(drawLayer, 0, 0);
        p.image(uiLayer, 0, 0);
        historyLayer.noFill();
        historyLayer.stroke("#37f79b");
        historyLayer.push();
        historyLayer.translate(p.width / 2, p.height / 2);
        historyLayer.scale(scale);
        drawPathOutline(path.commands, historyLayer, true);
        historyLayer.pop();
        historyLayer.blendMode(p.REMOVE);
        historyLayer.background("#4545FF11");
        historyLayer.blendMode(p.BLEND);
      };

      p.windowResized = function () {
        let div = document.getElementById(divId);
        if (!div) {
          // div may have been removed as part of a next.js page transition — return silently.
          return;
        }

        p.resizeCanvas(div.offsetWidth, div.clientHeight);
        drawLayer.resizeCanvas(p.width, p.height);
        historyLayer.resizeCanvas(p.width, p.height);
        uiLayer.resizeCanvas(p.width, p.height);
        scale = Math.min(p.width, p.height) / initSize;
        lastWindowResize = p.millis();
        updateLoopState();
      };

      function refreshCanvas() {
        initSize = Math.min(p.width, p.height);
        setFont();
        let bounds = font.p5font.textBounds(txt, 0, 0, fontSize);
        parsedFont = opentype.parse(font.fontData.bytes.buffer);
        path = parsedFont.getPath(txt, -bounds.w / 2, bounds.h / 2, fontSize);
        for (let seg of path.commands) {
          seg.offset = p.random(2 * Math.PI);
          seg.speed = p.random(0.005, 0.05);
        }
      }
    };
    return sketch;
  },
};
