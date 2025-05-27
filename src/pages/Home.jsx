// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const phrase = "Développeur Web Junior";

  useEffect(() => {
    if (typedText.length < phrase.length && !isTypingComplete) {
      const timeoutId = setTimeout(() => {
        setTypedText(phrase.substring(0, typedText.length + 1));
      }, 100); // Vitesse de frappe en millisecondes
      
      return () => clearTimeout(timeoutId);
    } else if (typedText.length === phrase.length && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [typedText, phrase, isTypingComplete]);

  return (
    // Conteneur principal avec overflow-x: hidden pour empêcher tout décalage horizontal
    <div className="relative overflow-x-hidden">
      {/* Cercles décoratifs en arrière-plan - en position fixe au lieu d'absolue */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-purple-300/10 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300/10 dark:bg-yellow-900/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Hero section avec conteneur à largeur fixe pour éviter les redimensionnements */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center w-full">
          {/* Avatar/Photo */}
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg">
            <img 
              src="/my-picture.jpg" 
              alt="Photo de Florian Bouteiller, jeune homme avec des cheveux châtain avec des yeux bleues et un peu de barbe" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Salutation */}
          <p className="text-lg md:text-xl text-primary dark:text-primaryDark font-medium mb-2">
            Bonjour, je suis
          </p>
          
          {/* Nom */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Florian Bouteiller
          </h1>
          
          {/* Animation de texte (une seule phrase) */}
          <div className="h-8 md:h-10 mb-6">
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              <span>{typedText}</span>
              <span className={isTypingComplete ? "hidden" : "animate-blink"}>|</span>
            </h2>
          </div>
          
          {/* Description courte */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Passionné par l'informatique en général, polyvalent et curieux, je m'adapte à divers langages et technologies, tout en ayant une affinité particulière pour les écosystèmes JavaScript et le développement backend.
          </p>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Voir mes projets
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Me contacter
            </Link>
          </div>
          
          {/* Réseaux sociaux/liens */}
          <div className="flex justify-center space-x-5">
            <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primaryDark transition-colors duration-300">
              <img src="/logos/github-logo.png" alt="Tailwind CSS" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primaryDark transition-colors duration-300">
              <img src="/logos/linkedin-logo.png" alt="Tailwind CSS" className="w-10 h-10" />
            </a>
            <a href="mailto:flopro93@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primaryDark transition-colors duration-300">
              <img src="/logos/mail-logo.png" alt="Tailwind CSS" className="w-10 h-10" />
            </a>
          </div>
        </div>
        
        
      </section>
    </div>
  );
};

export default Home;