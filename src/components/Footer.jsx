// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Colonnes principales du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Colonne Navigation */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Portfolio
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 ">
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-5 h-5 text-primary dark:text-primaryDark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <a
                  href="mailto:flopro93@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  flopro93@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-5 h-5 text-primary dark:text-primaryDark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Bretagne, France
                </span>
              </li>
              <li className="flex items-center space-x-3 mt-4 ml-8">
                <a
                  href="https://github.com/FloDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  <img
                    src="/logos/github-logo.png"
                    alt="React"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/florian-bouteiller-32a8a2310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  <img
                    src="/logos/linkedin-logo.png"
                    alt="React"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="mailto:flopro93@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark"
                >
                  <img
                    src="/logos/mail-logo.png"
                    alt="React"
                    className="w-5 h-5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section copyright et technologies */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Florian Bouteiller
          </p>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Créé avec
            </span>
            <div className="flex space-x-2">
              <img
                src="/logos/react-logo.png"
                alt="React"
                className="w-5 h-5"
              />
              <img src="/logos/vite-logo.png" alt="Vite" className="w-5 h-5" />
              <img
                src="/logos/tailwind-logo.png"
                alt="Tailwind CSS"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
