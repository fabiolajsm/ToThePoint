const express = require("express");
const routes = require('./routes/routes.js');
const cors = require("cors");
require('./db.js'); 


const server = express();

server.name = 'API';
server.use(cors())


server.use('/', routes);
// Error catching endware.
server.use((err, _req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;