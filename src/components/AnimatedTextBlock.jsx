import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export default function AnimatedTextBlock({ children, direction = "right", className = "" }) {
  const initial = direction === "left" ? { opacity: 0, x: -40 } : { opacity: 0, x: 40 };

  return (
    <MotionDiv
      className={`text-lg leading-relaxed ${className}`}
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionDiv>
  );
}
