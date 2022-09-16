import useResize from "./useResize";

export default function useVideoSizer() {
  const sizeVideo = (videoEl, observer) => {
    const sourceEl = videoEl.children[0];
    const baseUrl = sourceEl.getAttribute("data-src");

    if (baseUrl) {
      const px = videoEl.clientWidth * window.devicePixelRatio;

      let postfix = "";
      if (px >= 1500) {
        postfix = "-2000w";
      } else if (px >= 1000) {
        postfix = "-1500w";
      } else if (px >= 500) {
        postfix = "-1000w";
      } else {
        postfix = "-500w";
      }

      sourceEl.src = `${baseUrl}${postfix}.m4v`;
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
              entry.target.load();
              entry.target.play();
            } catch (e) {
              console.error(e);
            }
          } else {
            try {
              entry.target.pause();
            } catch (e) {
              console.error(e);
            }
          }
        });
      });
    }

    const videos = document.querySelectorAll("video");

    videos.forEach(function (el) {
      sizeVideo(el, observer);
    });
  };

  useResize(500, updateVideos);
}
