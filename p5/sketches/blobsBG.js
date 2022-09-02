require("../point.js");
require("../text-utils.js");

export default function (divId) {
  let sketch = function (p) {
    let scale = 1;
    let initSize;
    let blobs = [];

    p.setup = function () {
      let div = document.getElementById(divId);
      p.createCanvas(div.offsetWidth, div.clientHeight);
      initSize = Math.min(p.width, p.height);
      addBlobs();
      p.frameRate(25);
    };

    function addBlobs() {
      for (let i = 0; i < 100; i++) {
        blobs.push(
          new Blob(
            p,
            p.random(p.width),
            p.random(p.height),
            p.random(3, initSize / 50)
          )
        );
      }
    }

    class Blob {
      constructor(p, x, y, radius) {
        this.p = p;
        this.pts = [];
        this.radius = radius;
        this.center = {
          x: x,
          y: y,
          vx: p.random(-1, 1),
          vy: p.random(-1, 1),
        };

        let rand = p.random(1);
        if (rand < 0.1) {
          this.color = p.color("#fe2179");
        } else if (rand < 0.2) {
          this.color = p.color("white");
        } else if (rand < 0.3) {
          this.color = p.color("#fce345");
        } else {
          this.color = p.color("#4ecdc4");
        }

        let npoints = 20;
        let angle = (2 * Math.PI) / npoints;
        for (let a = 0; a < 2 * Math.PI; a += angle) {
          let sx = x + Math.cos(a) * radius;
          let sy = y + Math.sin(a) * radius;
          let pt = {
            sx,
            sy,
            frequency: this.p.random(5, 12),
            angle: 0,
          };

          this.pts.push(pt);
        }
      }

      draw() {
        this.p.noStroke();
        let transp = 150;

        if (p.millis() <= 1000) {
          transp = this.p.map(p.millis(), 0, 1000, 0, 150, true);
        }

        this.color.setAlpha(transp);
        this.p.fill(this.color);

        this.p.curveTightness(Math.sin(0.001 * this.p.frameCount));
        this.p.beginShape();

        this.center.x += this.center.vx;
        this.center.y += this.center.vy;

        let npoints = 20;

        let angleStep = (2 * Math.PI) / npoints;
        let angle = 0;
        let firstX, firstY;

        for (let pt of this.pts) {
          let x =
            this.center.x +
            Math.cos(angle) * this.radius +
            Math.sin(this.p.radians(pt.angle)) * this.p.random(1, 1);

          let y =
            this.center.y +
            Math.sin(angle) * this.radius +
            Math.sin(this.p.radians(pt.angle)) * this.p.random(1, 1);
          angle += angleStep;

          this.p.curveVertex(x - this.p.width / 2, y - this.p.height / 2);

          if (!firstX) {
            firstX = x - this.p.width / 2;
            firstY = y - this.p.height / 2;
          }

          pt.angle += pt.frequency;
        }
        this.p.curveVertex(firstX, firstY);
        this.p.endShape();
      }
    }

    p.draw = function () {
      p.clear();
      p.translate(p.width / 2, p.height / 2);
      p.scale(scale);
      for (let blob of blobs) {
        blob.draw();
      }
    };
  };

  return sketch;
}
