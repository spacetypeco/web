import { isElementInViewport } from "../util/layout";
import useResize from "./useResize";

export default function useVideoSizer() {
  const loaded = {};
  console.log("create new load obj"); 
  console.log(loaded);

  const tryLoad = (el, src) => {
    try {
      if (!loaded[src]) {
        console.log("attempting load: " + src);
        loaded[src] = 1;
        el.load();

        console.log("loaded: "+ src);
      } else {
        console.log("tried to load, but already loaded: " + src);
      }

      console.log("playing: " + src);
      el.play();
      console.log("finished play: " + src);
    } catch (e) {
      console.error(e);
    }
  };

  const observe = function (entries) {
    console.log("observing now");
    console.log(loaded);
    entries.forEach(function (entry) {
      // Pause/Play the animation
      const src = entry.target.children[0].src;
      if (!src) {
        console.log("missing src");
        sizeVideo(entry.target)
      } else {
        console.log("observing: " + src);
      }

      if (entry.isIntersecting) {
        console.log("isIntersecting: " + src);
        tryLoad(entry.target, src);
      } else {
        try {
          console.log("is not intersecting: " + src);
          if (loaded[src]) {
            entry.target.pause();
          } else {
            console.log("not loaded: "+ src);
          }
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  const sizeVideo = (videoEl) => {
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
  };

  let firstTime = true;

  const updateVideos = () => {
    let observer;
    const videos = document.querySelectorAll("video");

    if (firstTime) {
      firstTime = false;
      observer = new IntersectionObserver(observe);

      videos.forEach(function (el) {
        observer.observe(el);

        if (isElementInViewport(el)) {
          setTimeout(() => {
          tryLoad(el, el.children[0].src);
          }, 100);
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
