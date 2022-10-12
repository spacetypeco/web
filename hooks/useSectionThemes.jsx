import { useEffect } from "react";

/**
 * This hook manages theming based on sections.
 * 
 * Each section must have a data-theme attribute.
 */
export default function useSectionThemes() {
  const changeBackground = () => {
    const sections = document.getElementsByTagName("section");

    const currSection = sections[0];
    const currTop = currSection.getBoundingClientRect().top;

    for (let i = 1; i < sections.length; i++) {
      const nextSection = sections[i];
      const nextTop = nextSection.getBoundingClientRect().top;

      if (nextTop <= window.innerHeight * 0.5) {
        currSection = nextSection;
        currTop = nextTop;
      } else {
        break;
      }
    }

    const classList = document.getElementById("component-container").classList;

    const theme = currSection.dataset.theme;
    if (theme == "theme-light") {
      classList.add("theme-light");
    } else {
      classList.remove("theme-light");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
}
