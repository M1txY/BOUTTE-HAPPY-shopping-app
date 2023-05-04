const express = require('express');
const app = express();
const port = 8000;

const data = require('./data.json')

var smartphones = data.smartphones;
var casques = data.casques;
var ordinateurs = data.ordinateurs;
var accessoires = data.accessoires;

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



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

