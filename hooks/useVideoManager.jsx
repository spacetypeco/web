import { useEffect } from "react";

export default function useVideoManager() {
    useEffect(() => {
      var observer = new IntersectionObserver(function (entries, observer) {
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
        var videos = document.querySelectorAll("video");
        videos.forEach(function (el) {
            observer.observe(el);
        });
    }, [])
  }