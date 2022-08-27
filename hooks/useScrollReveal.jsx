import { useEffect } from "react";

export default function useScrollReveal() {
    const createObserver = (classTrigger, classToAdd, threshold) => {
      return () => {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
              }
            });
          },
    
          { threshold }
        );
    
        document.querySelectorAll(classTrigger).forEach((el) => {
          observer.observe(el);
        });
      }
    };

    useEffect(createObserver(".slide-up-on-scroll-1", "slide-up", 1), []);
    useEffect(createObserver(".slide-up-on-scroll-1-4", "slide-up", 0.25), []);
    useEffect(createObserver(".slide-up-on-scroll-0", "slide-up", 0), []);

    useEffect(createObserver(".wipe-down-on-scroll-1", "wipe-down", 1), []);
    useEffect(createObserver(".wipe-down-on-scroll-1-4", "wipe-down", 0.25), []);
    useEffect(createObserver(".wipe-down-on-scroll-0", "wipe-down", 0), []);
  }