import { isElementInViewport } from "../util/layout";
import useResize from "./useResize";

export default function useVideoSizer() {
  const loaded = {};

  const tryLoad = (el, src) => {
    try {
      if (!loaded[src]) {
        loaded[src] = 1;
        el.load();
      }
      el.play();
    } catch (e) {
      console.error(e);
    }
  };

  const observe = function (entries, observer) {
    entries.forEach(function (entry) {
      // Pause/Play the animation
      const src = entry.target.children[0].src;
      if (!src) {
        return;
      }

      if (entry.isIntersecting) {
        tryLoad(entry.target);
      } else {
        try {
          if (loaded[src]) {
            entry.target.pause();
          }
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

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
    const videos = document.querySelectorAll("video");

    if (firstTime) {
      firstTime = false;
      observer = new IntersectionObserver(observe);

      videos.forEach(function (el) {
        sizeVideo(el, observer);

        if (isElementInViewport(el)) {
          tryLoad(el);
        }
      });
    
    } else {
      videos.forEach(function (el) {
        sizeVideo(el, observer);
      });
    }
  };

  useResize(500, updateVideos);
}
