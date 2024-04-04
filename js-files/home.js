// Get relevant elements
const colorItems = document.querySelectorAll('.color-item');
const quantityDisplay = document.querySelector('.num');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const addToCartButton = document.querySelector('.btn');

// Initialize selected color and quantity
let selectedColor = colorItems[0].innerText; // Default to the first color
let quantity = parseInt(quantityDisplay.innerText);

// Add event listeners for color selection
colorItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all items
        colorItems.forEach(item => {
            item.classList.remove('active');
        });
        // Add 'active' class to the clicked item
        item.classList.add('active');
        // Update selected color
        selectedColor = item.innerText;
    });
});

// Add event listeners for quantity buttons
minusButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.innerText = quantity;
    }
});

plusButton.addEventListener('click', () => {
    quantity++;
    quantityDisplay.innerText = quantity;
});

// Add event listener for 'Add to cart' button
addToCartButton.addEventListener('click', () => {
    // Create an object to store selected product information
    const productInfo = {
        color: selectedColor,
        quantity: quantity,
    };
    // Store product information in sessionStorage
    sessionStorage.setItem('cartProduct', JSON.stringify(productInfo));
    // Redirect to checkout page
    window.location.href = 'checkout.html';
});

// Find the back the wont allow you to select the photo