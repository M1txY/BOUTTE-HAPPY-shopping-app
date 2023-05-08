const productctn = document.querySelector('.productctn');

fetch('http://localhost:8000/produits')
    .then(function (response) {
        return response.json();
    }
    )
    // grace a cette base de donnée on peut afficher les produits grace au id pour connaitre le produit et l'affichier dans le panier qui est dans le local storage
    .then(function (data) {
        let html = "";
        data.forEach(function (product) {
            html += getProductHtml(product);
        });
        productctn.innerHTML = html;
        addColorChoiceListeners();
    }
    )

    .catch(function (error) {
        console.log(error);
    }
    );
