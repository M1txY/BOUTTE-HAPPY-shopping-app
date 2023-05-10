document.addEventListener('DOMContentLoaded', function () {
    var params = {};
    window.location.search.slice(1).split('&').forEach(function (param) {
        var parts = param.split('=');
        params[parts[0]] = parts[1];
    });

    console.log(params);
    fetch('http://localhost:8000/search?q=' + params.id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const img = document.querySelector('.img_ctn-image');

            img.src = data.black[0];
            console.log(img.src);

            const basePath = data.black[0].slice(0, -4);
            const totalImages = 3;
            let position = 0;

            function updateImage() {
                imgdetail.src = basePath + (position === 0 ? '' : position + 1) + '.png';
                console.log(imgdetail.src);
            }

            img_preview.addEventListener('click', function () {
                position = (position - 1 + totalImages) % totalImages;
                updateImage();
            });

            img_next.addEventListener('click', function () {
                position = (position + 1) % totalImages;
                updateImage();
            });

            updateImage();

            name.innerHTML = data.name;
            price.innerHTML = data.price + '€';
            description.innerHTML = data.description;
            data.colors.forEach(function (color) {
                
                const button = document.createElement('button');
                button.classList.add('color-choice');
                button.dataset.colorSrc = data[color] ? data[color][0] : '';
                button.style.backgroundColor = color;
                button.style.border = '1px solid black';
                colorDiv.appendChild(button);
            });

            const colorButtons = document.querySelectorAll('.color-choice');
            colorButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    img.src = button.dataset.colorSrc;
                    
                });
            }
            );


        })

    const imgdetail = document.querySelector('.img_ctn-image');
    const img_preview = document.getElementById('img_ctn-prev');
    const img_next = document.getElementById('img_ctn-next');

    const name = document.querySelector('.name');
    const price = document.querySelector('.price');
    const description = document.querySelector('.description');
    const colorDiv = document.querySelector('.color');

    



});
