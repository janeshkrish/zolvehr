import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldRestore = sessionStorage.getItem('restoreScroll');
    if (shouldRestore === 'true') {
      const scrollY = sessionStorage.getItem('scrollY');
      if (scrollY) window.scrollTo(0, parseInt(scrollY));
      sessionStorage.removeItem('restoreScroll');
      sessionStorage.removeItem('scrollY');
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};
