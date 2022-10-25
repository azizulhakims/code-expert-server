const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');


app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Course Server running on port', port);
})

