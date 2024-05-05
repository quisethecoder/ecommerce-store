document.addEventListener('DOMContentLoaded', function () {
    // Get the stored product information from sessionStorage
    const storedProduct = sessionStorage.getItem('cartProduct');

    // Check if there's any stored product information
    if (storedProduct) {
        // Parse the stored JSON string to get the product object
        const productInfo = JSON.parse(storedProduct);

        // Display the product information on the checkout page
        const colorDisplay = document.getElementById('color-display');
        const quantityDisplay = document.getElementById('quantity-display');
        const priceDisplay = document.getElementById("price-display");

        // Update the HTML content with the retrieved product information
        colorDisplay.textContent = productInfo.color;
        quantityDisplay.textContent = productInfo.quantity;
    } 
});
