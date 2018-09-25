const express = require('express');
const app = require('./app');

const port = 8000;



app.listen(port, () => console.log(`Up and running on localhost:${port}! 🎉`))