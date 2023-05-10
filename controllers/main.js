const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 8000;

const data = require('./data.json')

var smartphones = data.smartphones;
var casques = data.casques;
var ordinateurs = data.ordinateurs;
var accessoires = data.accessoires;


app.use(helmet());
app.use(cors());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});



app.get('/', (req, res) => {
  res.send(`
    <h1>API</h1>
    <a href="/produits">Tous les produits</a>
    <a href="/smartphones">smartphones</a>
    <a href="/casques">casques</a>
    <a href="/ordinateurs">ordinateurs</a>
    <a href="/accessoires">accessoires</a>
    `);
})

app.get('/smartphones', (req, res) => {
  res.send(smartphones);
});

app.get('/casques', (req, res) => {
  res.send(casques);
});

app.get('/ordinateurs', (req, res) => {
  res.send(ordinateurs);
});

app.get('/accessoires', (req, res) => {
  res.send(accessoires);
});

app.get('/produits', (req, res) => {
  res.send(data);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  const id = parseInt(query, 10);
  
  const allProducts = smartphones.concat(casques, ordinateurs, accessoires);

  let result;
  if (!isNaN(id)) {
    result = searchProduct(allProducts, id);
  } else {
    result = searchProduct(allProducts, query);
  }

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: 'Produit introuvable.' });
  }
});

function searchProduct(data, query) {
  let result = null;
  
  if (typeof query === 'number') {
    result = data.find(item => item.id === query);
  }

  if (typeof query === 'string') {
    result = data.find(item => item.name.toLowerCase() === query.toLowerCase());
  }

  return result;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
