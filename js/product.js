const reponstjson = document.querySelector('.reponstjson');
const selectbou_all = document.querySelector('.selectbou_all');
const selectbou_casque = document.querySelector('.selectbou_casque');
const selectbou_telephone = document.querySelector('.selectbou_telephone');
const selectbou_ordinateur = document.querySelector('.selectbou_ordinateur');
const selectbou_accessoire = document.querySelector('.selectbou_accessoire');
baseurl = "http://localhost:8000"


selectbou_casque.addEventListener('click', function () {
    fetch(baseurl + "/casques")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            reponstjson.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
});


selectbou_telephone.addEventListener('click', function () {
    fetch(baseurl + "/smartphones")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            reponstjson.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
});


selectbou_ordinateur.addEventListener('click', function () {
    fetch(baseurl + "/ordinateurs")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            reponstjson.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
});


selectbou_accessoire.addEventListener('click', function () {
    fetch(baseurl + "/accessoires")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            reponstjson.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
});

selectbou_all.addEventListener('click', function () {
    fetch(baseurl + "/smartphones")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            reponstjson.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    fetch(baseurl + "/casques")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    fetch(baseurl + "/ordinateurs")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    fetch(baseurl + "/accessoires")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                reponstjson.innerHTML += `
                <div class="product">
                    <div class="product_img">
                        <img src="${data[i].img_1}" alt="image produit">
                    </div>
                    <div class="product_info">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].price}€</p>
                        <button class="addpanier" title="${data[i].id}">Ajouter au panier</button>
                    </div>
                </div>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
});




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
    }
});


let panier = localStorage.getItem('panier');
let paniercount = document.getElementById("paniercount");

if (panier == null || JSON.parse(panier).length == 0) {
  paniercount.style.display = 'none';
} else {
  paniercount.textContent = JSON.parse(panier).reduce((acc, p) => acc + p.quantity, 0);
  
  paniercount.style.display = 'flex';
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

