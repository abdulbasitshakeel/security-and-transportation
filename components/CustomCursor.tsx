"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Track mouse movement
 useEffect(() => {
  const moveCursor = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const hideCursor = () => setIsVisible(false);
  const showCursor = () => setIsVisible(true);

  // Track movement and visibility
  window.addEventListener("mousemove", moveCursor);
  document.body.addEventListener("mouseleave", hideCursor);
  document.body.addEventListener("mouseenter", showCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    document.body.removeEventListener("mouseleave", hideCursor);
    document.body.removeEventListener("mouseenter", showCursor);
  };
}, []);


  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: position.x - 12, y: position.y - 12, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <img src="/images/cursor2.png" className="w-8 h-8" />
    </motion.div>
  );
};

export default CustomCursor;
