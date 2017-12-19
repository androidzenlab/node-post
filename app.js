// // ./app.js
// const express = require('express')
// const mountRoutes = require('./routes')

// const app = express()
// mountRoutes(app)

const app = require('express')();
const routes = require('./routes');

const db = require('./db')

//  Connect all our routes to our application
app.use('/', routes);
  

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});


