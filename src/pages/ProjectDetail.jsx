import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const MotionSection = motion.section;

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <MotionSection
      className="max-w-4xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Titre */}
      <h1 className="text-4xl font-bold text-center mb-10">{project.title}</h1>

      {/* Image principale */}
      {project.images[0] && (
        <div className="mb-10">
          <img
            src={project.images[0]}
            alt="Image principale"
            onClick={() => {
              setStartIndex(0);
              setLightboxOpen(true);
            }}
            className="cursor-pointer mx-auto max-w-full h-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {project.tech?.length > 0 && (
      <div className="mt-8 flex flex-wrap gap-3 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    )}

      {/* Description */}
      <ul className="space-y-4 text-lg  mb-10 leading-relaxed">
        {project.description.map((text, i) => (
          <li key={i} className="flex items-start gap-2">
        
            <p>{text}</p>
          </li>
        ))}
      </ul>

      

      {/* Images secondaires (2 & 3) */}
      {(project.images[1] || project.images[2]) && (
        <div
          className={`grid gap-6 ${
            project.images[1] && project.images[2] ? 'sm:grid-cols-2' : ''
          }`}
        >
          {project.images[1] && (
            <img
              src={project.images[1]}
              alt="Image secondaire"
              onClick={() => {
                setStartIndex(1);
                setLightboxOpen(true);
              }}
              className="cursor-pointer mx-auto max-w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          )}
          {project.images[2] && (
            <img
              src={project.images[2]}
              alt="Image tertiaire"
              onClick={() => {
                setStartIndex(2);
                setLightboxOpen(true);
              }}
              className="cursor-pointer mx-auto max-w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={project.images.map((src) => ({ src }))}
          index={startIndex}
          plugins={[Zoom]}
        />
      )}

      {/* Bouton retour */}
      <div className="text-center mt-16">
        <Link to="/projects" className="text-indigo-600 hover:underline text-sm">
          ← Retour aux projets
        </Link>
      </div>
    </MotionSection>
  );
}
