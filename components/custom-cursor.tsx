"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappier spring for the cursor position
  const springConfig = { damping: 35, stiffness: 600, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Track velocity to scale the cursor based on speed
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  // Calculate the magnitude of the velocity vector
  const speed = useTransform([velocityX, velocityY], ([vx, vy]) => {
    return Math.sqrt(Math.pow(vx as number, 2) + Math.pow(vy as number, 2));
  });

  // Map speed to a scale factor (1.0 at rest, up to 2.0 at high speed)
  const velocityScale = useTransform(speed, [0, 3000], [1, 2]);
  const smoothVelocityScale = useSpring(velocityScale, {
    damping: 20,
    stiffness: 150,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-difference bg-white hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: smoothVelocityScale,
      }}
      animate={{
        width: isHovering ? 80 : 32,
        height: isHovering ? 80 : 32,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    />
  );
};
