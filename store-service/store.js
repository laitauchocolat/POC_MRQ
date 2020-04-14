const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());


const items = [{
        id: 1,
        price: 9.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1],
        count: 0
    },
    {
        id: 2,
        price: 19.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1],
        count: 0
    },
    {
        id: 3,
        price: 29.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1],
        count: 0
    },
    {
        id: 4,
        price: 19.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1],
        count: 0
    },
    {
        id: 5,
        price: 9.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1],
        count: 0
    },
    {
        id: 6,
        price: 49.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1, 1],
        count: 0
    },
    {
        id: 7,
        price: 59.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1],
        count: 0
    },
    {
        id: 8,
        price: 89.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1],
        count: 0
    },
    {
        id: 9,
        price: 19.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1, 1],
        count: 0
    },
    {
        id: 10,
        price: 39.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1, 1, 1],
        count: 0
    },
    {
        id: 11,
        price: 49.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1, 1, 1],
        count: 0
    },
    {
        id: 12,
        price: 9.99,
        title: "Canard",
        url: "http://localhost:" + port + "/img/duck.png",
        stars: [1],
        count: 0
    }
];

app.get('/items', (req, res) => {
    res.send(items);
});

app.use('/img', express.static(__dirname + '/img'));
app.listen(port);