const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('News API Running');
})


app.get('/course-categories', (req, res) => {
    res.send(categories);
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    } else {
        const categoryCourses = courses.filter(n => n.category_id === id);
        res.send(categoryCourses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse);
    // console.log(req.params.id);
})




app.listen(port, () => {
    console.log('Course Server running on port', port);
})

