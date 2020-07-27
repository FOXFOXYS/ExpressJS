const express = require("express");
const path = require("path");

const app = express();
const host = "localhost";
const port = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.get('/', (req, res) => {
    res.render('index.twig');
})

app.get('/services/:id', (req, res) => {
    console.log(req.params.id);
    res.send('<html><body>Mes services</body></html>');
})

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})
