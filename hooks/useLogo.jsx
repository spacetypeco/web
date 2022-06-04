import { useEffect } from "react";

export default function useLogo() {
  useEffect(() => {
    const navElement = document.querySelector(".logo-inner");
    navElement.style.transition = `transform 0.5s ease`;
    navElement.style.transform = `translateY(0%)`;
  })
}