import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import ZoomableImage from '../components/ZoomableImage';
import AnimatedTextBlock from '../components/AnimatedTextBlock';

export default function About() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: 'about/python.png', title: 'Formation Python sur Udemy' },
    { src: 'about/reconversion.jpg', title: 'Reconversion professionnelle' },
    { src: 'about/qualiopi.webp', title: 'Formation certifiante' },
    { src: 'about/ctf.jpg', title: 'Passion cybersécurité' },
    { src: 'logos/next-logo.avif', title: 'Logo de next.js' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
      <h1 className="text-4xl font-bold text-center">À propos de moi</h1>

      {/* Bloc 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <ZoomableImage
          src={images[0].src}
          alt={images[0].title}
          index={0}
          onClick={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
        <AnimatedTextBlock direction="right" className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">Mes débuts</h2>
          <p>
            Tout a commencé avec une <strong>formation complète de Python sur Udemy</strong>. C’est là que j’ai découvert
            le plaisir de programmer, de résoudre des problèmes et d’automatiser des tâches.
          </p>
        </AnimatedTextBlock>
      </div>

      {/* Bloc 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <AnimatedTextBlock direction="left" className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">Reconversion professionnelle</h2>
          <p>
            Ma passion pour le code m’a poussé à entamer une <strong>reconversion professionnelle</strong>.
            J’étais auparavant dans le domaine de l'énergie thermique, en effectuant de la maintenance et du dépannage.
            Ce choix m’a permis de me consacrer pleinement à cette nouvelle passion.
          </p>
        </AnimatedTextBlock>
        <ZoomableImage
          src={images[1].src}
          alt={images[1].title}
          index={1}
          onClick={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
      </div>

      {/* Bloc 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <ZoomableImage
          src={images[2].src}
          alt={images[2].title}
          index={2}
          onClick={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
        <AnimatedTextBlock direction="right" className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">Formation Bac+2</h2>
          <p>
            J’ai rejoint le <strong>CEF</strong> pour suivre une formation Bac+2 en développement web.
            J’y ai appris et pratiqué quasiment toutes les technologies modernes dans ce domaine.
            Toute cette pratique m'a amené à développer un certain attrait pour JavaScript et son écosystème.
            Mais je ne suis évidemment pas fermé à travailler sur d'autres technologies.
          </p>

        </AnimatedTextBlock>
      </div>

      {/* Bloc 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <AnimatedTextBlock direction="left" className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">Curiosité & cybersécurité</h2>
          <p>
            En parallèle, je m’intéresse de près à la <strong>cybersécurité</strong>. Je participe à des
            <strong> CTF</strong> (Capture The Flag), qui me permettent de repousser mes limites en logique, reverse engineering et réseau.
          </p>
        </AnimatedTextBlock>
        <ZoomableImage
          src={images[3].src}
          alt={images[3].title}
          index={3}
          onClick={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <ZoomableImage
          src={images[4].src}
          alt={images[4].title}
          index={2}
          onClick={(i) => {
            setIndex(i);
            setOpen(true);
          }}
        />
        <AnimatedTextBlock direction="right" className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">En ce moment</h2>
          <p>
            Actuellement en préparation de mon diplôme, je travaille sur un dossier professionnel et un projet technique que je présenterai à l’oral devant un jury.
          </p>

        </AnimatedTextBlock>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
        plugins={[Zoom]}
      />
    </div>
  );
}



