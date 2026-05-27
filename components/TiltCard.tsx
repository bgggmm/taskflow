"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 20 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left - width / 2) / intensity);
    y.set((clientY - top - height / 2) / intensity);
  }

  function onMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-intensity, intensity], [intensity, -intensity]);
  const rotateY = useTransform(mouseX, [-intensity, intensity], [-intensity, intensity]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-transform duration-200 ${className}`}
    >
      <motion.div
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
