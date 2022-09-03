import useResize from "./useResize";

export default function useVideoSizer() {
  const sizeVideo = (videoEl, observer) => {
    const sourceEl = videoEl.children[0];
    const baseUrl = sourceEl.getAttribute("data-src");
    
    if (baseUrl) {
      const px = videoEl.clientWidth * window.devicePixelRatio;

      let postfix = "";
      if (px >= 1500) {
        postfix = "-2kw";
      } else if (px >= 1000) {
        postfix = "-1500w";
      } else if (px >= 500) {
        postfix = "-1kw";
      } else {
        postfix = "-500kw";
      }

      sourceEl.src = `${baseUrl}${postfix}.m4v`;
      videoEl.load();
    }

    if (observer) {
      observer.observe(videoEl);
    }
  };

  let firstTime = true;
  const updateVideos = () => {
    let observer;
    
    if (firstTime) {
      firstTime = true;
      observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          // Pause/Play the animation
          if (entry.isIntersecting) {
            try {
              entry.target.play();
            } catch (e) {
              
            }
          } else {
            entry.target.pause();
          }
        });
      });
    }

    const videos = document.querySelectorAll("video");

    videos.forEach(function (el) {
      sizeVideo(el, observer);
    });
  }

  useResize(500, updateVideos);
}
