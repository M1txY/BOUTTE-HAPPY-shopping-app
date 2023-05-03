const paniercount = document.getElementById("paniercount");


number = 100; // le nombre de produits dans le panier

if (number > 0)  {
    paniercount.textContent = number; 
}if (number > 9) {
    paniercount.textContent = "9+";
}else {
    paniercount.textContent = 0;
    paniercount.style.display = "none";
}