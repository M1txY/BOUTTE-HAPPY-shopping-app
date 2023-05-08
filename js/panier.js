let panierItems = JSON.parse(localStorage.getItem('panier')) || [];

const productCtn = document.querySelector('.productctn');

const productList = document.createElement('ul');
productCtn.appendChild(productList);

async function getProductInfo(id) {
    const response = await fetch(`http://localhost:8000/search?q=${id}`);
    const productData = await response.json();
    return productData;
}

function removeFromLocalStorage(id) {
    panierItems = panierItems.filter((product) => product.id !== id);
    localStorage.setItem('panier', JSON.stringify(panierItems));
}

function displayProduct(product, quantity) {
    const productElement = document.createElement('li');
    productElement.classList.add('product');
    productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price} €</p>
    <p>Quantité : ${quantity}</p>
    <span class="remove">✖</span>
  `;
    productList.appendChild(productElement);

    productElement.querySelector('.remove').addEventListener('click', () => {
        removeFromLocalStorage(product.id.toString());
        productElement.remove();
    });
}

async function updatePanierDisplay() {
    productList.innerHTML = '';

    for (const product of panierItems) {
        const productInfo = await getProductInfo(product.id);
        displayProduct(productInfo, product.quantity);
    }

    await updateTotal();
}

window.addEventListener('storage', (event) => {
    if (event.key === 'panier') {
        panierItems = JSON.parse(event.newValue) || [];
        updatePanierDisplay();
    }
});

updatePanierDisplay();

async function updateTotal() {
    let total = 0;
    await Promise.all(panierItems.map(async (product) => {
        const productInfo = await getProductInfo(product.id);
        total += productInfo.price * product.quantity;
    }));
    document.getElementById("total").textContent = ` ${total.toFixed(2)} €`;
}

