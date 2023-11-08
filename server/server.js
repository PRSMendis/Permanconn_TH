
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   console.log('authHeader: ', authHeader);
//   const token = authHeader && authHeader.split(' ')[1];
//   console.log('token: ', token);

//   if (token == null) return res.sendStatus(401);

//   console.log('process.env.ACCESS_TOKEN_SECRET: ', process.env.ACCESS_TOKEN_SECRET);
// //   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     jwt.verify('test', 'test', (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// Define routes here

app.use(cors());
app.use(express.json());
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

// app.post('/login', (req, res) => {
//     //Authenticate Uesrs
//     const username = req.body.username
//     const user = { name: username}
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     res.json({ accessToken: accessToken })
// })

app.post('/login', (req, res) => {
    // Authenticate User
  
    const username = req.body.username
    const user = { name: username }
  
    const accessToken = generateAccessToken(user)
    res.json({ accessToken: accessToken})
  })

function generateAccessToken(user) {
return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
    }

const posts = [
    {
      username: 'Rayhan',
      title: 'Post 1'
    },
    {
      username: 'Jim',
      title: 'Post 2'
    }
  ]

  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
  
  app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
  })



app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit || 3;
        const response = await fetch(`https://dummyjson.com/products/?limit=${limit}`);
        const products = await response.json();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/products', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const newProduct = await response.json();
        res.send(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding product');
    }
});

app.put('/products/:id', async (req, res) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${req.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const updatedProduct = await response.json();
        res.send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product');
    }
});




