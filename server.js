const express = require('express');

const middleware = require('./api/mware')

const apiRouter = require('./api/apiRouter');


const server = express();

middleware(server)

server.use ('/api', apiRouter)



module.exports = server

