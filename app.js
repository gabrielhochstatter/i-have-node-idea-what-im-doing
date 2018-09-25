const express = require('express')
const app = express();
const port = 8000;

const routes = require('./routes')

app.set('view engine', 'pug');

app.use('/', routes);

app.use((req, res, next) => {
    const error = new Error('Someone tried to access a route that does not exist!');
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error)
    res.sendStatus(error.status)
})

module.exports = app;