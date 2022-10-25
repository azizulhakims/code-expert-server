const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Course Api Running');
})

app.listen(port, () => {
    console.log('Course Server running on port', port);
})