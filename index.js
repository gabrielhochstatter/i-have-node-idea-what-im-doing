const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req,res) => {
    res.send('i have node idea what im doing')
})

app.listen(port, () => console.log(`Up and running on localhost:${port}! 🎉`))