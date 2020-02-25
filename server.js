const express = require('express');
const session = require('express-session');

const middleware = require('./api/mware')

const apiRouter = require('./api/apiRouter');

const server = express();

server.use(
  session({
    name: process.env.SESSION_NAME ||'CoolLoginApp',
    secret: process.env.SESSION_SECRET || '$2y$08$4RFEtq2KMkGFMD.BFpj17uHr9Tmb1Jl5eYLURaUQHfqWyhlvbCcSi',
    cookie: {
      maxAge: 1000 * 60 * 30,
      secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
  })
);
middleware(server)

server.use ('/api', apiRouter)



module.exports = server

