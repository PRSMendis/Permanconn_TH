
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(express.json());

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

// Dynamically import node-fetch
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

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
        const limit = req.query.limit || process.env.PRODUCTS_LIMIT || 5;
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
    const { id, ...content } = req.body;

    try {
        const response = await fetch(`https://dummyjson.com/products/${req.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        });
        const updatedProduct = await response.json();
        res.send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product');
    }
});




