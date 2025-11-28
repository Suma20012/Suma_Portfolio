import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-outline hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'transparent' : 'rgba(255, 255, 255, 0.5)'
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
};
