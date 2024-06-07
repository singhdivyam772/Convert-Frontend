import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderAdjustment = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=' mb-[4rem]'></div>
  )
}

export default HeaderAdjustment