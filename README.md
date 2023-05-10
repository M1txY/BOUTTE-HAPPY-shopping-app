# Répartition des tâches

Ce projet a été réalisé par deux personnes : Joel et Matthieu. Voici les tâches qui ont été attribuées à chacun d'entre eux :

## Matthieu

- Conception de la partie Front-end du projet, en utilisant HTML, CSS et JavaScript.
- Mise en place de l'API du projet.
- Création de la base de données du projet.
- Création de la page d'accueil du site web et details des produits.

## Joel

- Collaboration avec Matthieu sur la conception de la partie Front-end du projet, en utilisant HTML et CSS.
- Conception du footer de la page web.
- Ajout de fonctionnalités à la base de données.
- Recherche et intégration d'images dans le projet.
- Animation du panier et la pastille du panier en JS.


<br>

# Documentation de l'API

Cette API fournit des informations sur différents types de produits électroniques tels que les smartphones, les casques, les ordinateurs et les accessoires. Elle est basée sur Express.js et utilise les paquets cors, helmet et express-rate-limit pour améliorer la sécurité et la limitation des taux.

## Endpoints

### GET /smartphones

Retourne tous les smartphones disponibles.

### GET /casques

Retourne tous les casques disponibles.

### GET /ordinateurs

Retourne tous les ordinateurs disponibles.

### GET /accessoires

Retourne tous les accessoires disponibles.

### GET /produits

Retourne tous les produits disponibles.

### GET /search?q={query}

Cherche un produit par nom ou ID. La requête doit contenir un paramètre "q" pour spécifier la recherche. Si le paramètre "q" est un nombre, la recherche sera effectuée par ID. Sinon, elle sera effectuée par nom. La recherche est insensible à la casse.


## Exemple d'utilisation

```bash
curl http://localhost:8000/smartphones
```


## Limitation de taux
L'API est limitée à 100 requêtes toutes les 15 minutes pour chaque adresse IP.

## Installation

Cloner le dépôt GitHub

```bash
git clone https://github.com/M1txY/BOUTTE-HAPPY-shopping-app.git
```

## Installer les dépendances

```bash
npm install
```

## Lancer le serveur

```bash
npm start
```

Le serveur est maintenant accessible à l'adresse http://localhost:8000.

## Conclusion

Cette API fournit une interface simple et facile à utiliser pour récupérer des informations sur des produits électroniques. Elle est facile à installer et à utiliser et est limitée pour éviter les abus.