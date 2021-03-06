const lodash = require('lodash')

const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
];

const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
];

//task 1
const index = lodash.findIndex(data1, item => item.age === 23)


//task 2
const other = lodash.concat(data1, data2)


//task 3
const a = {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
}

const b = lodash.omit(a,'age'); 


//task 4
const a = {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
}

const {age, ...b} = a

console.log(b)