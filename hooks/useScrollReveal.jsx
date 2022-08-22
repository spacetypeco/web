import { useEffect } from "react";

export default function useScrollReveal() {
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },

      { threshold: 1 }
    );

    document.querySelectorAll(".slide-up-on-scroll-1").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },

      { threshold: 0.25 }
    );

    document.querySelectorAll(".slide-up-on-scroll-1-4").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },

      { threshold: 0 }
    );

    document.querySelectorAll(".slide-up-on-scroll-0").forEach((el) => {
      observer.observe(el);
    });
  }, []);
}