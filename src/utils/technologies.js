// Add a link to github projects

import react from '../images/tech/React.png'
import typeScript from '../images/tech/TypeScript.png'
import nodeJS from '../images/tech/Node.png'
import mongoDB from '../images/tech/MongoDB.png'
import sql from '../images/tech/SQL.png'
import rails from '../images/tech/RoR.png'
import python from '../images/tech/Python.png'
import html from '../images/tech/HTML.png'
import css from '../images/tech/CSS.png'

export const technologies = [
  {
    title: 'React',
    image: react,
    skills: [
      '- initialisation de projets React avec create-react-app via NPM', 
      '- installation de dépendances externes',
      '- création de composants (fonctions et classes)',
      '- transmission de données via les props',
      '- suivi de l’état et du cycle de vie des composants (useState, useEffect, useContext)',
      '- gestion des évènements',
      '- formulaires et validation des champs (Formik et Yup)',
      '- requêtes HTTP avec Axios et interactions avec un serveur ou une API',
      '- opérations asynchrones via async/await et try/catch',
      '- SPA et redirections avec react-router',
      '- tests de composant via Jest',
      '- utilisation de TypeScript dans React',
      '- design avec Style Components et Antd',
      '- intégration de Google Maps',
      "- utilisation des variables d'environnement",
      '- optimisation de la performance avec le Lazy Loading et les composants Suspense'
    ],
    github: [
      {
        title: "Formulaire d'inscription",
        link: 'https://github.com/Tybrax/Love-Help/blob/master/src/components/homepage/SignUp.js'
      },
      {
        title: 'Google Map',
        link: 'https://github.com/Tybrax/Love-Help/blob/master/src/components/request/Map.js'
      },
      {
        title: 'Cycle de vie des composants',
        link: 'https://github.com/Tybrax/Love-Help/blob/master/src/components/homepage/Count.js'
      },
      {
        title: 'Service de messagerie instantanée',
        link: 'https://github.com/Tybrax/Love-Help/tree/master/src/components/chat'
      },
    ]
  },
  {
    title: 'TypeScript',
    image: typeScript,
    skills: [
      '- mise en place d’un environnement TypeScript via NPM',
      '- configuration du fichier tsconfig.json',
      '- gestion des erreurs dans Visual Code',
      '- déclaration de variables avec un type',
      '- création d’interfaces pour modéliser les types des variables',
      '- import et export de modules dédiés au types',
      '- ajout de types au sein de fonctions',
      '- initialisation de composants React en .tsx'
    ],
    github: [
      {
        title: "Création d'un interface pour passer des props",
        link: 'https://github.com/Tybrax/portfolio/tree/master/src/components/body/TechDesk/TechCard.tsx'
      }
    ]
  },
  {
    title: 'Node.js',
    image: nodeJS,
    skills: [
      '- configuration du package.json',
      '- installation des dépendances externes',
      '- connection avec la base de données (SQL, MongoDB)',
      '- modèles de données et schémas de vérification',
      '- mise en place d’une API REST',
      '- authentification et gestion des utilisateurs',
      '- routes avec Express',
      '- fonctions de middlewares',
      '- implémentation de JSON Web Token',
      '- tests avec Mocha et Chai (routes, controlleurs et requêtes)',
      '- configuration des CORS',
      '- déploiement',
    ],
    github: [
      {
        title: "Configuration du serveur",
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/index.js'
      },
      {
        title: 'Modèles de données pour utilisateurs',
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/models/User.js'
      },
      {
        title: 'Routes et contrôlleurs',
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/routes/users.js'
      },
      {
        title: 'Implémentation de JWT',
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/routes/auth.js'
      },
      {
        title: "Tests de l'authentification",
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/tests/index.js'
      }
    ]
  },
  {
    title: 'MongoDB',
    image: mongoDB,
    skills: [
      '- logique du NoSQL',
      '- connection avec un serveur',
      "- configuration d'un cluster via AWS, Google Cloud Platform ou Microsoft Azure",
      '- restriction des accès de la base de données (compte utilisateurs et IP)',
      '- création de modèles avec mongoose',
      '- implémentation de vérification des données avec @hapi/joi'
    ],
    github: [
      {
        title: 'Connection avec une API Node.JS',
        link: 'https://github.com/Tybrax/NodeJS-API/blob/main/index.js'
      }
    ]
  },
  {
    title: 'SQL',
    image: sql,
    skills: [
      '- logique des bases de données relationnelles',
      '- architecture de base de données dans le respect du cahier des charges',
      '- modalisation de la base',
      '- conception des tables et des clés',
      '- normalisation des données',
      '- conception de diagrammes UML et ERD',
      '- création et gestion de la base de données',
      '- connection avec un serveur'
    ],
    github: [
      {
        title: 'UML pour une application de livraison',
        link: 'https://ibb.co/xh4PTbf'
      }
    ]
  },
  {
    title: 'Ruby on Rails',
    image: rails,
    skills: [
      '- architecture MVC',
      '- connection avec des bases de données',
      '- import de données via CSV',
      '- configuration du gemfile.rb et des CORS',
      '- routes et modèle de données',
      '- création de vues HTML avec ERB',
      '- intégration de JavaScript',
      '- tests avec Rspec',
      '- création de REST API',
      '- crypter les données sensibles avec bcrypt',
      '- authentification et gestion des droits utilisateurs avec Devise et Cancancan',
      '- authentification de l’API avec JSON Web Token',
      '- déploiement'
    ],
    github: [
      {
        title: "Architecture de la base de données PostgreSQL",
        link: 'https://github.com/Tybrax/authentication/tree/master/db/migrate'
      },
      {
        title: 'Contrôlleurs pour la table des utilisateurs',
        link: 'https://github.com/Tybrax/authentication/blob/master/app/controllers/users_controller.rb'
      },
      {
        title: 'Vérifications des données entrantes',
        link: 'https://github.com/Tybrax/authentication/blob/master/app/models/request.rb'
      },
      {
        title: "Tests unitaires et d'intégrations",
        link: 'https://github.com/Tybrax/authentication/tree/master/test'
      }
    ]
  },
  {
    title: 'Python',
    image: python,
    skills: [
      '- POO',
      '- web scraping avec BeautifulSoup',
      '- opérations matricielles via Numpy',
      '- manipulation de données avec Pandas',
      '- création d’outils de visualisation de données (Matplotlib et Seaborn)',
      '- régression linéaire et prédiction en TensorFlow',
      '- modèles basiques de Machine Learning',
    ],
    github: [
      {
        title: 'Web scrapping des actions du CAC40',
        link: 'https://github.com/Tybrax/data_scrapping/blob/master/stocks.py'
      },
      {
        title: 'Etudes des structures de données',
        link: 'https://github.com/Tybrax/Python/tree/master/codecademy'
      }
    ]
  },
  {
    title: 'HTML',
    image: html,
    skills: [
      '- mise en forme du texte d’une page',
      '- inclusion d’images et vidéos',
      '- placement des éléments statiques ou dynamiques',
      '- ajout de liens hypertextes',
      '- création de tableaux',
      '- intégration de maquettes',
      '- sémantique HTML optimisée pour le SEO',
      '- ajout de métadonnées'
    ]
  },
  {
    title: 'CSS',
    image: css,
    skills: [
      '- préprocesseur CSS (Sass)',
      '- librairie externe (Bootstrap 4)',
      '- flex box',
      '- grid',
      '- animations',
      '- positionnement d’éléments',
      '- media query et responsive web design'
    ]
  }
]