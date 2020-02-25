const express = require('express');
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session)

const middleware = require('./api/mware')

const apiRouter = require('./api/apiRouter');

const knex = require('./data/dbconfig')

const server = express();

server.use(
  session({
    name: process.env.SESSION_NAME ||'CoolLoginApp',
    secret: process.env.SESSION_SECRET || '$2y$08$4RFEtq2KMkGFMD.BFpj17uHr9Tmb1Jl5eYLURaUQHfqWyhlvbCcSi',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 30,
      secure: false,
      httpOnly: true,
    },
    store: new KnexStore({
      knex,
      tablename: "sessionStore",
      createTable: true,
      sidfieldname: "sidID",
      clearInterval: 1000 * 60 * 45,
    }),
  })
);
middleware(server)

server.use ('/api', apiRouter)



module.exports = server

