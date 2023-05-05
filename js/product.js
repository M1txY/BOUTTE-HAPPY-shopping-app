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

// bouton select telephone

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

// bouton select ordinateur

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

// bouton select accessoire

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

