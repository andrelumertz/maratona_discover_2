const express = require('express'); // esta chamando o pacote express
const routes = express.Router() // express é um tipo de função e ele esta sendo executado


const profile = {  //objeto profile
  name: 'André',
  avatar: "https://avatars.githubusercontent.com/u/69599938?v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
}


const views = __dirname + '/views/'

//request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))


module.exports = routes;
