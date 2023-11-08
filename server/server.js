
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Define routes here

app.use(cors());
// shouldn't apply middleware to every layer atm
// app.use(authenticateToken);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the API home!');
});

app.get('/auth', (req, res) => {
    const user = { name: 'example' };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.send({ accessToken: accessToken });
});

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is the first product',
        price: 10.99
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is the second product',
        price: 19.99
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the third product',
        price: 5.99
    }
];

// Dynamically import node-fetch
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.get('/products', authenticateToken, async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/products/?limit=3');
        const products = await response.json();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});


