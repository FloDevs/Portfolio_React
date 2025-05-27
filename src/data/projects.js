export const projects = [
  {
    slug: "nodejs",
    title: "Knowledge learning avec Node.js",
    tech: ["Node.js", "EJS", "MongoDB", "Stripe"],
    images: [
      `${import.meta.env.BASE_URL}screens/node.png`,
      `${import.meta.env.BASE_URL}screens/node1.png`,
      `${import.meta.env.BASE_URL}screens/node2.png`,
    ]
,
    description: [
      "Achat de cursus ou de leçons individuelles avec paiement sécurisé via Stripe.",
      "Système de gestion des leçons : accès restreint selon les achats, verrouillage/déverrouillage automatique.",
      "Suivi de progression des utilisateurs et génération de certificats.",
      "Dashboard administrateur pour gérer les utilisateurs, cursus, leçons et commandes.",
      "Authentification sécurisée avec vérification email et gestion des rôles (utilisateur/admin).",
      "Base de données MongoDB avec Mongoose pour gérer les relations entre thèmes, cursus, leçons et utilisateurs."

    ],
  },
  {
    slug: "vue",
    title: "Premier Portfolio avec Vue.js",
    tech: ["Vue.js", "Vite"],
    images: [
      `${import.meta.env.BASE_URL}screens/vue1.png`,
      `${import.meta.env.BASE_URL}screens/vue.png`,
    ],
    description: [
      "Présentation dynamique de projets avec effets d’animation et navigation fluide.",
      "Design responsive et adaptatif, optimisé pour mobiles et ordinateurs.",
      "Composants réutilisables, gestion de l’état des cartes projet, filtres dynamiques.",
    ],
  },
  {
    slug: "django",
    title: "Médiathèque avec Django",
    tech: ["Django","Python", "SQLite"],
    images: [
      `${import.meta.env.BASE_URL}screens/django.png`,
      `${import.meta.env.BASE_URL}screens/django1.png`,
    ],
    description: [
      "Les bibliothécaires peuvent gérer les membres, les médias et les emprunts depuis un back-office sécurisé.",
      "Des règles métier strictes contrôlent le nombre d’emprunts, la durée, et les retards.",
      "La connexion est personnalisée pour les membres, avec blocage automatique en cas de retard.",
      "Projet axé sur le backend, avec une interface utilisateur fonctionnelle mais sans mise en forme graphique avancée."
    ],
  },
  {
    slug: "symfony",
    title: "E-commerce avec Symfony",
    tech: ["PHP", "Symfony", "MySQL", "Stripe", "Twig"],
    images: [
      `${import.meta.env.BASE_URL}screens/symf.png`,
      `${import.meta.env.BASE_URL}screens/symf1.png`,
    ],
    description: [
      "Un système de panier permet d’ajouter et de retirer des articles avant de passer commande.",
      "Le paiement est intégré via Stripe pour sécuriser les transactions.",
      "Un espace administrateur permet de gérer les produits, les stocks, les commandes et les utilisateurs.",
    ],
  },
];
