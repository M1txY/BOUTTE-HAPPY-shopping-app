const paniercount = document.getElementById("paniercount");


number = 8; // le nombre de produits dans le panier

if (number > 0)  {
    paniercount.textContent = number; 
}else {
    paniercount.textContent = 0;
    paniercount.style.display = "none";
}""