document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.target.matches('.color-choice')) {
            const colorSrc = event.target.getAttribute('data-color-src');
            console.log('Color Src:', colorSrc);

            const productElement = event.target.closest('.product');
            console.log('Product Element:', productElement);

            const imagePreview = productElement.querySelector('.product_img img');
            console.log('Image Preview:', imagePreview);

            imagePreview.setAttribute('src', colorSrc);
            
            const otherColorButtons = productElement.querySelectorAll('.color-choice');
            otherColorButtons.forEach(button => {
                button.classList.remove('selected');
            });
            
            event.target.classList.add('selected');
        }
    });
});




