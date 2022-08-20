import { useEffect } from "react";

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

export default function useVideoManager() {
    useEffect(() => {
        var videos = document.querySelectorAll("video");
        videos.forEach(function (el) {
            observer.observe(el);
        });
    }, [])
  }