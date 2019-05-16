'use strict'

// I don't need a database, because my content is mere static.

const skills = [
  {
    title: 'javascript',
    percentage: 90
  },
  {
    title: 'python',
    percentage: 65
  },
  {
    title: 'react',
    percentage: 95
  },
  {
    title: 'react native',
    percentage: 65
  },
  {
    title: 'angular',
    percentage: 55
  },
  {
    title: 'redux',
    percentage: 90
  },
  {
    title: 'nodejs',
    percentage: 75
  },
  {
    title: 'Docker',
    percentage: 80
  },
  {
    title: 'Graphql',
    percentage: 85
  },
  {
    title: 'mysql',
    percentage: 70
  },
  {
    title: 'sequelize',
    percentage: 85
  },
  {
    title: 'Chatbots',
    percentage: 80
  },
  {
    title: 'webpack',
    percentage: 70
  },
  {
    title: 'cms',
    percentage: 50
  }
]

const projects = [
  {
    name: 'Upinion',
    src: './assets/upinion.png',
    description:
      'Upinion can help you reach your target audience for qualitative, quantitative or hybrid research.',
    position:
      `At Upinion I did a full-stack development and with a fast-growing team in which we used scrum technologies as a communication medium. 
      - Front-end: Applications that were built with React, redux(-saga) and are fully testable. 
      - Back-end: Mainly NodeJS. Automated micro-services(docker). Worked extensively on building chatbots for several platforms(Facebook, sms and WhatsApp).`,
    url: 'https://www.upinion.com'
  },
  {
    name: 'Dathuis',
    src: './assets/dathuis.PNG',
    description:
      'DatHuis was established to provide insight into the quality and services of brokers.',
    position:
      'I have worked an amazing 6 months as a front/back-end dev. We used ReactJs and Redux in the front-end and for the back-end NodeJS and MongoDB.',
    url: 'https://www.dathuis.nl'
  },
  {
    name: 'Hyfer',
    src: './assets/hyfer.png',
    description:
      'Hyfer is a timeline for the modules that are given at hackyourfuture. Hackyourfuture is an organization that teaches regugees coding, and find them jobs.',
    position:
      'I built it along with two other colleuges of mine. I did both the back and front end. AngularJs and material design used on the front-end, NodeJS was the back-end and mySql was in the database. <a target="_blank" href="https://github.com/HackYourFuture/hyfer-client">HYFER</a>',
    url: 'https://hyfer.herokuapp.com/about'
  },
  {
    name: 'Crossarx',
    src: '',
    description:
      'The CrossmarX Application Platform enables you and your customers to grow your business.',
    position:
      'I have done an intrenship with Crossmarx for 3 months, and worked on several projects using velocity which is a Java-based template engine along with pure css.',
    url: 'https://www.crossmarx.nl/web/home.vm'
  },
  {
    name: 'Chat App',
    src: './assets/chatApp.png',
    description:
      'This is my first experience with React Native. I wanted to make a simple app to try RN out, but now I am using it with my friends(instead of WhatsApp :) ).',
    position:
      'I have built it with the great server provider Firebase. It has many features; like authentication, local storage, and a smooth navigation flow. Check: <a target="_blank" href="https://expo.io/@hasan-sh/chatApp">Hier</a>',
    url: 'https://github.com/hasanshahoud/Chatting_RN'
  },
  {
    name: 'Search Engine',
    src: './assets/searchEngine.png',
    description:
      'This is a nice search engine that gives you the top 10 people from a huge set of data!!',
    position:
      'I have built it with React&Express. With two branches: master and withHash. The latter is really fast!!',
    url: 'https://gitlab.com/hasanshahoud/search-feature'
  },
  {
    name: 'Tic-tac-toe',
    src: '',
    description: 'The nice game tic-tac-toe',
    position:
      'I have built it with the a feature drag and drop with React. <a target="_blank" href="https://github.com/hasan-sh/tic-tac-toe-dnd">Code</a>',
    url: 'https://hasan-sh.github.io/tic-tac-toe-dnd/'
  },
  {
    name: 'See my other repositories.',
    src: './assets/repos.PNG',
    description: 'Visit my repositories and other projects I am involved in.',
    position: 'owner',
    url: 'https://github.com/hasanshahoud'
  }
]
