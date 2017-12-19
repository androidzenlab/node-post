const routes = require('express').Router();
const db = require('../db')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});



routes.get('/test', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM consumer_complaints')
    rows[0].test = 'test'
    res.send(rows[0])
  })

module.exports = routes;