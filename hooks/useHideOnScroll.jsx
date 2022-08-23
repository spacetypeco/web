import { useEffect, useState } from "react";

import { debounce } from "../util/debounce";

export default function useHideOnScroll() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return visible;
}