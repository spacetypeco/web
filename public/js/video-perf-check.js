document.addEventListener("DOMContentLoaded", function (event) {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      // Pause/Play the animation
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });

  var videos = document.querySelectorAll("video");
  videos.forEach(function (el) {
    observer.observe(el);
  });
});
