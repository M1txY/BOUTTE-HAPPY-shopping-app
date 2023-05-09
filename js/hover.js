document.addEventListener('DOMContentLoaded', function () {
    // Au survol de .product, modifie l'image à la place de .product_img img
    document.body.addEventListener('mouseover', function (event) {
        // Modifie le src de l'image en ajoutant un 2 à la fin
        if (event.target.matches('.product_img img')) {
            const productElement = event.target.closest('.product');
            const imagePreview = productElement.querySelector('.product_img img');
            const imageSrc = imagePreview.getAttribute('src');
            const imageSrcParts = imageSrc.split('.');
            const imageSrcPartsLength = imageSrcParts.length;
            const imageSrcExtension = imageSrcParts[imageSrcPartsLength - 1];
            const imageSrcWithoutExtension = imageSrcParts.slice(0, imageSrcPartsLength - 1).join('.');
            const newImageSrc = `${imageSrcWithoutExtension}2.${imageSrcExtension}`;
            imagePreview.setAttribute('src', newImageSrc);
        }
    });
    document.body.addEventListener('mouseout', function (event) {
        // Modifie le src de l'image en enlevant le 2 à la fin
        if (event.target.matches('.product_img img')) {
            const productElement = event.target.closest('.product');
            const imagePreview = productElement.querySelector('.product_img img');
            const imageSrc = imagePreview.getAttribute('src');
            const imageSrcParts = imageSrc.split('.');
            const imageSrcPartsLength = imageSrcParts.length;
            const imageSrcExtension = imageSrcParts[imageSrcPartsLength - 1];
            const imageSrcWithoutExtension = imageSrcParts.slice(0, imageSrcPartsLength - 1).join('.');
            const originalImageSrc = imageSrcWithoutExtension.slice(0, -1) + `.${imageSrcExtension}`;
            imagePreview.setAttribute('src', originalImageSrc);
        }
    });
});
