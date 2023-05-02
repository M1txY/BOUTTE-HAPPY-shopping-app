const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('/index.html');
    
});


const paniercount = document.getElementById("paniercount");


paniercount.innerHTML = 0; // 0 =  display none dans le css

if (paniercount.innerHTML == 0) {
    paniercount.innerHTML = 0;
    paniercount.style.display = "none";
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})