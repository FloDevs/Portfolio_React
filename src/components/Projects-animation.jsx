// components/ProjectStack3D.jsx
// -----------------------------------------------------------------------------
// 3‑D stacked project cards with Framer‑Motion.
// Handles desktop hover + mobile tap interaction without blocking the “Voir le
// projet” link.
// -----------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------
// Utility: conditional classNames (tiny clone of clsx)
// -----------------------------------------------------------------------------
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MotionDiv = motion.div;

// -----------------------------------------------------------------------------
// ProjectCard — one card in the stack
// -----------------------------------------------------------------------------
function ProjectCard({
  project,
  index,
  isHovered,
  isMobile,
  isFront,
  frontCardIndex,
  onClick,
  width,
  height,
  spacing,
}) {
  // Collapse/expand logic. Do *not* collapse if the click originates on <a>.
  const handleCardClick = (e) => {
    if (e.target.closest("a")) return; // ignore genuine link clicks
    onClick(index);
  };

  return (
    <MotionDiv
      className={cn(
        "absolute overflow-hidden rounded-xl shadow-lg cursor-pointer",
        isFront && "z-20"
      )}
      style={{
        width,
        height,
        transformStyle: "preserve-3d",
        transformOrigin: isMobile ? "top center" : "left center",
        zIndex: isFront ? 20 : 10 - index, // always above the overlay (z-0)
        filter: isFront || frontCardIndex === null ? "none" : "blur(5px)",
        backgroundColor: project.color,
      }}
      initial={{
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
      animate={
        isFront
          ? {
              scale: 1.2,
              rotateY: 0,
              x: isMobile ? 100 : 200,
              y: isMobile ? 0 : -50,
              z: 50,
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.5)",
            }
          : isHovered
          ? {
              rotateY: isMobile ? 0 : -10,
              x: index * (spacing.x ?? 50),
              y: 0,
              z: 0,
              scale: 1.05,
              boxShadow: `10px 20px 30px rgba(0, 0, 0, ${0.2 + index * 0.05})`,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 50,
                delay: index * 0.1,
              },
            }
          : {
              rotateY: 0,
              x: isMobile ? index * (spacing.x ?? 30) : 0,
              y: 0,
              z: 0,
              scale: 1,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: (4 - index) * 0.1,
              },
            }
      }
      onClick={handleCardClick}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background image + gradient overlay                                */}
      {/* ------------------------------------------------------------------ */}
      {project.imageSrc && (
        <div className="absolute inset-0">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Logo + title (always visible)                                      */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-4 right-4 flex flex-col items-center z-10">
        <div className="bg-white rounded-full p-2 mb-2 flex items-center justify-center w-9 h-9">
          {project.icon}
        </div>
        <h3 className="text-lg font-bold text-white text-center max-w-[8rem]">
          {project.title}
        </h3>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Description + CTA (only on the card in front)                      */}
      {/* ------------------------------------------------------------------ */}
      {isFront && (
        <div className="absolute left-4 right-4 bottom-4 z-10">
          <p className="text-white text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="text-right">
            {project.internal ? (
              <Link
                to={project.url}
                onClick={(e) => e.stopPropagation()}
                className="inline-block px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                Voir les détails du projet
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                Voir le repository
              </a>
            )}
          </div>
        </div>
      )}
    </MotionDiv>
  );
}

// -----------------------------------------------------------------------------
// ProjectStack3D — wrapper component exposing the 3‑D stack
// -----------------------------------------------------------------------------
export function ProjectStack3D({
  projects,
  className,
  cardWidth = 320,
  cardHeight = 500,
  spacing = { x: 30, y: 0 },
  isMobileProp,
}) {
  const [isMobile, setIsMobile] = useState(isMobileProp ?? false);
  const [isHovered, setIsHovered] = useState(false);
  const [frontCardIndex, setFrontCardIndex] = useState(null);

  // Detect mobile / touch unless explicitly forced via prop
  useEffect(() => {
    if (isMobileProp !== undefined) {
      setIsMobile(isMobileProp);
      setIsHovered(isMobileProp);
      return;
    }

    const update = () => {
      const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const smallScreen = window.innerWidth <= 768;
      const mobile = touch || smallScreen;
      setIsMobile(mobile);
      setIsHovered(mobile);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobileProp]);

  // Click outside an expanded card → collapse
  const handleBackgroundClick = () => setFrontCardIndex(null);

  return (
    <div
      className={cn(
        "flex justify-center items-center py-32 relative",
        className
      )}
    >
      {frontCardIndex !== null && (
        <div
          className="fixed inset-0 z-0 cursor-pointer"
          onClick={handleBackgroundClick}
        />
      )}

      <div
        className="relative"
        style={{
          width: cardWidth + (projects.length - 1) * (spacing.x ?? 30),
          height: cardHeight,
          perspective: "1500px",
        }}
        onMouseEnter={() => {
          if (!isMobile && frontCardIndex === null) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!isMobile && frontCardIndex === null) setIsHovered(false);
        }}
        onClick={() => {
          if (isMobile && !isHovered && frontCardIndex === null)
            setIsHovered(true);
        }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id ?? idx}
            project={project}
            index={idx}
            isHovered={frontCardIndex === null ? isHovered : false}
            isMobile={isMobile}
            isFront={frontCardIndex === idx}
            frontCardIndex={frontCardIndex}
            onClick={(i) =>
              setFrontCardIndex((prev) => (prev === i ? null : i))
            }
            width={cardWidth}
            height={cardHeight}
            spacing={spacing}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectStack3D;
