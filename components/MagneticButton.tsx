"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const ButtonContent = (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      className={`relative group ${className}`}
      onClick={onClick}
    >
      <motion.div
        style={{
          translateX: mouseX.get(),
          translateY: mouseY.get(),
        }}
        className="absolute inset-0 bg-linear-to-r from-sky-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
      />
      <motion.div
        style={{
          translateX: mouseX.get() * 0.3,
          translateY: mouseY.get() * 0.3,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{ButtonContent}</a>;
  }

  return <button type="button">{ButtonContent}</button>;
}
