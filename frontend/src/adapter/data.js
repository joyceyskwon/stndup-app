import faker from 'faker';

const getRandomIdNumber = (min, max) => Math.random() * (max - min) + min; //min inclusive, max exclusive

const notesData = [
  {
    id: 1,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 22, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 2,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 22, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 3,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 23, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 4,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 23, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 5,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 23, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 6,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 24, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother'],
  },
  {
    id: 7,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 25, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother', 'take a bunch of poloroids'],
  },
  {
    id: 8,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 26, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother'],
  },
  {
    id: 9,
    user_id: getRandomIdNumber(1,5),
    date_created: 'December 27, 2021',
    incomplete: ['make mockup', 'call marketing team', 'do the dishes', 'create portfolio', 'create a new years resolution', 'start an online store'],
    complete: ['call grandmother'],
  },

]

const userData = [
  {
    id: 1,
    firstName: 'Joyce',
    lastName: 'Kwon',
    email: 'joyceyskwon@gmail.com',
    occupation: 'software engineer',
  },
  {
    id: 2,
    firstName: 'Michelle',
    lastName: 'Shin',
    email: 'michshin@gmail.com',
    occupation: 'designer',
  },
  {
    id: 3,
    firstName: 'Gina',
    lastName: 'Rey',
    email: 'ginrey@gmail.com',
    occupation: 'data engineer',
  },
  {
    id: 4,
    firstName: 'Amy',
    lastName: 'Kim',
    email: 'amyk@gmail.com',
    occupation: 'marketing manager',
  },
]

export default { notesData, userData } 