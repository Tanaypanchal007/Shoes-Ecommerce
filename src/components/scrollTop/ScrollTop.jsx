import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation(); // Correct the variable name

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when pathname changes
  }, [pathname]); // Dependency on pathname to trigger scrolling

  return null; // No UI is rendered
};

export default ScrollTop;
