import { ProjectStack3D } from "../components/Projects-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MotionTitle = motion.h1;

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mon repository",
      description: "Retrouvez tout mes projets ici",
      icon: (
        <img
          src={`${import.meta.env.BASE_URL}logos/github-logo.png`}
          alt="Logo de Github"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      color: "rgba(111, 66, 193, 0.9)",
      url: "https://github.com/FloDevs",
      imageSrc: `${import.meta.env.BASE_URL}logos/github-logo.png`,
      internal: false,
    },
    {
      id: 2, // Notez que j'ai corrigé les IDs pour qu'ils soient uniques
      title: "Node.js",
      description: "Conception d'une plateforme e-learning et e-commerce.",
      icon: (
        <img
          src={`${import.meta.env.BASE_URL}logos/node-logo.png`}
          alt="Logo de Node.js "
          style={{ width: "24px", height: "24px" }}
        />
      ),
      color: "rgba(60, 135, 58, 0.9)",
      url: "/projects/nodejs",
      imageSrc: `${import.meta.env.BASE_URL}logos/node-logo.png`,
      internal: true,
    },
    {
      id: 3,
      title: "Vue.js",
      description: "Découvrez mon premier portfolio.",
      icon: (
        <img
          src={`${import.meta.env.BASE_URL}logos/vue-logo.png`}
          alt="Logo du framework Vue"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      color: "rgba(65, 184, 131, 0.9)",
      url: "/projects/vue",
      imageSrc: `${import.meta.env.BASE_URL}logos/vue-logo.png`,
      internal: true,
    },
    {
      id: 4,
      title: "Django",
      description: "Gestion d'une médiatheque.",
      icon: (
        <img
          src={`${import.meta.env.BASE_URL}logos/django-logo.png`}
          alt="Logo du framework Django"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      color: "rgba(44, 78, 66, 0.9)",
      url: "/projects/django",
      imageSrc: `${import.meta.env.BASE_URL}logos/django-logo.png`,
      internal: true,
    },
    {
      id: 5,
      title: "Symfony",
      description: "Gestion d'un site ecommerce.",
      icon: (
        <img
          src={`${import.meta.env.BASE_URL}logos/symfony-logo.png`}
          alt="Logo du framework Symfony"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      color: "rgba(35, 35, 35, 1)",
      url: "/projects/symfony",
      imageSrc: `${import.meta.env.BASE_URL}logos/symfony-logo.png`,
      internal: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <MotionTitle
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        r
        transition={{ duration: 0.5 }}
      >
      Mes projets
      </MotionTitle>

      <ProjectStack3D
        projects={projects}
        cardWidth={isMobile ? 150 : 300}
        cardHeight={isMobile ? 500 : 600}
        spacing={{ x: isMobile ? 70 : 150, y: isMobile ? 50 : 150 }}
      />
    </div>
  );
};

export default Projects;
