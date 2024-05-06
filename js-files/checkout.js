document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the stored product information from sessionStorage
    const storedProduct = sessionStorage.getItem('cartProduct');

    if (storedProduct) {
        const productInfo = JSON.parse(storedProduct); // Parse stored product data

        // Display product details on the checkout page
        const colorDisplay = document.getElementById('color-display');
        const quantityDisplay = document.getElementById('quantity-display');
        const priceDisplay = document.getElementById('price-display');
        const productImage = document.getElementById('product-image'); // Element to display product image

        colorDisplay.textContent = productInfo.color; // Display color
        quantityDisplay.textContent = productInfo.quantity; // Display quantity
        priceDisplay.textContent = `$${(productInfo.price * productInfo.quantity).toFixed(2)}`; // Display total price
        productImage.src = productInfo.image; // Set the image source to the correct product image
    }
});
