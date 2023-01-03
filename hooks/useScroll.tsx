import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const isScroll = scrollPosition >= 1;

  return {
    isScroll,
  };
}
