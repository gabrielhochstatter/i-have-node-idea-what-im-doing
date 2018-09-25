const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('index accessed')
    res.render('index')
})

router.get('/tell-me-more', (req, res, next) => {
    res.render('tell-me-more')
})

module.exports = router;