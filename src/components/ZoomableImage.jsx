import { motion } from "framer-motion";

const MotionImg = motion.img;

export default function ZoomableImage({ src, alt, index, onClick }) {
  return (
    <div className="w-full md:w-1/3 overflow-visible">
      <MotionImg
        src={src}
        alt={alt}
        className="rounded-xl object-cover shadow-lg cursor-pointer"
        onClick={() => onClick(index)}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
          },
        }}
      />
    </div>
  );
}
