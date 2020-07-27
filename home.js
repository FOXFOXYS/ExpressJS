const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const host = "localhost";
const port = 8000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.get('/', (req, res) => {
    res.render('home.twig');
});

app.get('/blogs', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
        let posts = resp.data;
        console.log(posts);
        res.render('blogs.twig', { posts });
    })
});

app.get('/blogs/:id', (req, res) => {
    let id = req.params.id;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(resp => {
        let post = resp.data;
        console.log(post);
        res.render('blog.twig', post);
    })
});

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})