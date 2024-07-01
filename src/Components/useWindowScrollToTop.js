import React from 'react'
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const useWindowScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the component whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);
}


export default useWindowScrollToTop;