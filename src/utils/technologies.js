// Add a link to github projects

import reactImage from '../images/tech/React.png'
import typeScriptImage from '../images/tech/TypeScript.png'
import nodeJSImage from '../images/tech/Node.png'
import mongoDB from '../images/tech/MongoDB.png'
import sql from '../images/tech/SQL.png'
import rails from '../images/tech/RoR.png'
import python from '../images/tech/Python.png'
import html from '../images/tech/HTML.png'
import css from '../images/tech/CSS.png'

export const technologies = [
  {
    title: 'React',
    image: reactImage,
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
      "- utilisation des variables d'environnement"
    ]
  },
  {
    title: 'TypeScript',
    image: typeScriptImage,
    skills: [
      '- mise en place d’un environnement TypeScript via NPM',
      '- configuration du fichier tsconfig.json',
      '- gestion des erreurs dans Visual Code',
      '- déclaration de variables avec un type',
      '- création d’interfaces pour modéliser les types des variables',
      '- ajout de types au sein de fonctions',
      '- initialisation de composants React en .tsx'
    ]
  },
  {
    title: 'Node.js',
    image: nodeJSImage,
    skills: [
      '- configuration du package.json',
      '- installation des dépendances externes',
      '- connection avec la base de données (SQL, MongoDB)',
      '- modèles de données et schémas de vérification',
      '- mise en place d’une API REST',
      '- authentification et gestion des utilisateurs',
      '- routes avec Express',
      '- fonctions de middlewares',
      '- implémentation de JWT',
      '- tests avec Mocha et Chai (routes, controlleurs et requêtes)',
      '- configuration des CORS',
      '- déploiement',
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
    ]
  },
  {
    title: 'Python',
    image: python,
    skills: ['1', '2', '3', '4']
  },
  {
    title: 'HTML',
    image: html,
    skills: ['1', '2', '3', '4']
  },
  {
    title: 'CSS',
    image: css,
    skills: ['1', '2', '3', '4']
  }
]