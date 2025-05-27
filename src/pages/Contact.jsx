import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";

const MotionSection = motion.section;
const MotionTitle = motion.h1;
const MotionDiv = motion.div;

export default function Contact() {
  const contactData = [
    {
      icon: <Mail />,
      label: "Email",
      content: "flopro93@gmail.com",
      link: "mailto:flopro93@gmail.com",
    },
    {
      icon: <Phone />,
      label: "Téléphone",
      content: "06 59 89 66 92",
      link: "tel:+33659896692",
    },
    {
      icon: <MapPin />,
      label: "Localisation",
      content: "Bretagne (22, 29, 56)",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      content: "linkedin.com/in/monprofil",
      link: "https://linkedin.com/in/monprofil",
    },
    {
      icon: <Github />,
      label: "GitHub",
      content: "github.com/monpseudo",
      link: "https://github.com/monpseudo",
    },
  ];

  return (
    <MotionSection
      className="min-h-screen  px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <MotionTitle
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Me contacter
        </MotionTitle>
        <p className="mb-12">
          Voici les moyens les plus simples pour me joindre.
        </p>

        <div className="space-y-12">
          {contactData.map((item, index) => (
            <ContactItem
              key={index}
              {...item}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ContactItem({ icon, label, content, link, direction }) {
  const isLeft = direction === "left";

  return (
    <MotionDiv
      className={`flex flex-col md:flex-row items-center gap-6 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-indigo-600">{icon}</div>
      <div className={`text-center md:text-left ${!isLeft && "md:text-right"} w-full`}>
        <p className="text-sm font-medium">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block text-lg hover:text-indigo-600 transition relative"
          >
            {content}
            <span className="block h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ) : (
          <p className="text-lg">{content}</p>
        )}
      </div>
    </MotionDiv>
  );
}




