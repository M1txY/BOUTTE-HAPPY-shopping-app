const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuration de bodyParser pour pouvoir récupérer le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('API pour trier des JSON par catégorie');
});

// Route pour trier les JSON par catégorie
app.get('/json/:category', (req, res) => {
  const category = req.params.category;
  const data = require('./data.json');

  // Filtrer les données par catégorie
  const filteredData = data.filter(item => item.category === category);

  // Renvoyer les données filtrées en tant que réponse
  res.json(filteredData);
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
