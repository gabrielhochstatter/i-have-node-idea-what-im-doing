const express = require('express')
const app = express();
const port = 8000;

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/tell-me-more', (req, res) => {
    res.render('tell-me-more')
})

app.listen(port, () => console.log(`Up and running on localhost:${port}! 🎉`))