const reponstjson = document.querySelector('.reponstjson');
const selectbou_all = document.querySelector('.selectbou_all');
const selectbou_casque = document.querySelector('.selectbou_casque');
const selectbou_telephone = document.querySelector('.selectbou_telephone');
const selectbou_ordinateur = document.querySelector('.selectbou_ordinateur');
const selectbou_accessoire = document.querySelector('.selectbou_accessoire');
baseurl = "http://localhost:8000"


window.onload = function () {
    selectbou_all.click();
}

selectbou_casque.addEventListener('click', function () {
    displayProducts(baseurl + "/casques");
});

selectbou_telephone.addEventListener('click', function () {
    displayProducts(baseurl + "/smartphones");
});

selectbou_ordinateur.addEventListener('click', function () {
    displayProducts(baseurl + "/ordinateurs");
});

selectbou_accessoire.addEventListener('click', function () {
    displayProducts(baseurl + "/accessoires");
});

selectbou_all.addEventListener('click', function () {
    fetchAllProducts().then(function (products) {
        let html = "";
        products.forEach(function (data) {
            data.forEach(function (product) {
                html += getProductHtml(product);
            });
        });
        reponstjson.innerHTML = html;
    });
});





function displayProducts(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(function (product) {
                html += getProductHtml(product);
            });
            reponstjson.innerHTML = html;

        })
        .catch(function (error) {
            console.log(error);
        });
}



function displayFilteredProducts(couleur) {
    fetchAllProducts().then(function (products) {
        let html = "";
        products.forEach(function (data) {
            data.forEach(function (product) {
                if (couleur === 'all' || product.colors.includes(couleur)) {
                    html += getProductHtml(product);
                }
            });
        });
        reponstjson.innerHTML = html;
    });
}

const select_couleur = document.querySelector('.select_couleur');

select_couleur.addEventListener('change', function () {
    const couleur = select_couleur.value;
    displayFilteredProducts(couleur);
});


function fetchAllProducts() {
    return Promise.all([
        fetch(baseurl + "/smartphones"),
        fetch(baseurl + "/casques"),
        fetch(baseurl + "/ordinateurs"),
        fetch(baseurl + "/accessoires"),
        // Ajoutez d'autres catégories si nécessaire
    ])
        .then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        });
}



function getProductHtml(product) {
    let colorsHtml = "";
    let imageAttributes = "";

    product.colors.forEach(function (color, index) {
        let colorSrc = product[color] ? product[color][0] : "";
        colorsHtml += `<button class="color-choice" data-color-src="${colorSrc}" style="background-color: ${color};"></button>`;
        imageAttributes += ` data-${color}-src="${colorSrc}"`;
    });

    return `
        <div class="product">
            <div class="product_img">
                <img src="${product[product.colors[0]][0]}" class="product_img" alt="image produit"${imageAttributes}>
            </div>
            <div class="product_info">
                <h3>${product.name}</h3>
                <p>${product.price}€</p>
                <div class="colors">
                    ${colorsHtml}
                </div>
                <button class="addpanier" title="${product.id}">Ajouter au panier</button>
                <a href="detail.html?id=${product.id}">Voir le produit</a>
            </div>
        </div>
    `;
}


reponstjson.addEventListener('click', function (e) {
    if (e.target.classList.contains('addpanier')) {
        let id = e.target.getAttribute('title');
        let panier = localStorage.getItem('panier');
        if (panier == null) {
            panier = [];
        } else {
            panier = JSON.parse(panier);
        }
        let productIndex = panier.findIndex(p => p.id === id);
        if (productIndex === -1) {
            panier.push({ id: id, quantity: 1 });

        } else {
            panier[productIndex].quantity++;


        }
        localStorage.setItem('panier', JSON.stringify(panier));
        let paniercount = document.getElementById("paniercount");
        paniercount.textContent = panier.reduce((acc, p) => acc + p.quantity, 0);
        updatePanierDisplay();
    }
});


updatePanierDisplay();

function updatePanierDisplay() {
    let panier = localStorage.getItem('panier');
    let paniercount = document.getElementById("paniercount");
    if (panier == null || JSON.parse(panier).length == 0) {
        paniercount.style.display = 'none';
    } else {
        paniercount.textContent = JSON.parse(panier).reduce((acc, p) => acc + p.quantity, 0);
        paniercount.style.display = 'flex';
    }
}


const panierctn = document.querySelector('.panierctn');
const panierbtn = document.querySelector('.panierbtn');
const icon = document.querySelector('.changeicon');
let panierOuvert = false;

panierbtn.addEventListener('click', function () {
    if (panierOuvert) {
        panierctn.style.transform = "translateX(100%)";
        icon.src = "img/sac-de-courses.png";
        paniercount.style.display = 'flex';
    } else {
        panierctn.style.transform = "translateX(0%)";
        icon.src = "img/cross.png";
        paniercount.style.display = 'none'
    }
    panierOuvert = !panierOuvert;
}
);

function viderPanier() {
    panierItems = [];
    localStorage.setItem('panier', JSON.stringify(panierItems));
    updatePanierDisplay();
}


const btnclear = document.querySelector('.btn-clear');
btnclear.addEventListener('click', function () {
    viderPanier();
}
);

const btnTriCroissant = document.querySelector('.btn-tri-croissant');
const btnTriDecroissant = document.querySelector('.btn-tri-decroissant');


btnTriCroissant.addEventListener('click', function () {
    trierProduits('croissant');
});

btnTriDecroissant.addEventListener('click', function () {
    trierProduits('decroissant');
});

function trierProduits(ordre) {
    fetchAllProducts().then(function (products) {
        let allProducts = [];
        products.forEach(function (data) {
            data.forEach(function (product) {
                allProducts.push(product);
            });
        });
        if (ordre === 'croissant') {
            allProducts.sort(function (a, b) {
                return a.price - b.price;
            });
        } else if (ordre === 'decroissant') {
            allProducts.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        let html = "";
        allProducts.forEach(function (product) {
            html += getProductHtml(product);
        });
        reponstjson.innerHTML = html;
    });
}






