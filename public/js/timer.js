let sketches = [Blobs, ShaderWag, ParticleFill, PathTweaker];

document.addEventListener("DOMContentLoaded", function (event) {
  let sketch1 = sketches[0].createSketch("canvas");
  new p5(sketch1, "canvas");
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  );

  if (!isMobile) {
    let sketch2 = sketches[1].createSketch("canvas2");
    new p5(sketch2, "canvas2");
    let sketch3 = sketches[2].createSketch("canvas3");
    new p5(sketch3, "canvas3");
    let sketch4 = sketches[3].createSketch("canvas4");
    new p5(sketch4, "canvas4");
  } else {
    for (let elemName of ["canvas2", "canvas3", "canvas4"]) {
      let elem = document.getElementById(elemName);
      elem.style.display = "none";
    }

    document.querySelector("#canvas > a").style.display = "none";
  }

  document.querySelectorAll(".ct-btn-scroll").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("dest")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
