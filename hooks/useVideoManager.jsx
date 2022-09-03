import { useEffect } from "react";

export default function useVideoManager() {
    useEffect(() => {
      const observer = new IntersectionObserver(function (entries, observer) {
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
        const videos = document.querySelectorAll("video");
        videos.forEach(function (el) {
            observer.observe(el);
        });
    }, [])
  }