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
      '- intégration de Google Maps'
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
    skills: ['1', '2', '3', '4']
  },
  {
    title: 'MongoDB',
    image: mongoDB,
    skills: ['1', '2', '3', '4']
  },
  {
    title: 'SQL',
    image: sql,
    skills: ['1', '2', '3', '4']
  },
  {
    title: 'Ruby on Rails',
    image: rails,
    skills: ['1', '2', '3', '4']
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