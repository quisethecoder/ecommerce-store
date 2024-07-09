document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const checkoutContainer = document.querySelector('.checkout-container');
    const checkoutSummary = document.querySelector('.checkout-summary');
    const checkoutButton = checkoutSummary.querySelector('.btn'); // The checkout button

    const shippingCost = 5.00; // Fixed shipping cost

    // Function to generate a random order number
    const generateOrderNumber = () => {
        const randomDigits = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
        return `SL${randomDigits}`; // Prefix with "SL" for Sunset Lamp
    };

    // Function to calculate the subtotal
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Function to update the order summary
    const updateOrderSummary = () => {
        if (cart.length === 0) { // Reset to zero if there are no items
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(1)').textContent = `Subtotal: $0.00`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(2)').textContent = `Shipping: $0.00`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(3)').textContent = `Tax: $0.00`;
            checkoutSummary.querySelector('.sub-money.low').textContent = `Total: $0.00`;
        } else { // Calculate and update the summary if there are items
            const subtotal = calculateSubtotal();
            const tax = subtotal * 0.06; // 6% tax
            const total = subtotal + shippingCost + tax;

            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(1)').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(2)').textContent = `Shipping: $${shippingCost.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(3)').textContent = `Tax: $${tax.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.low').textContent = `Total: $${total.toFixed(2)}`;
        }
    };

    // Function to render the cart
    const renderCart = () => {
        checkoutContainer.innerHTML = ''; // Clear existing content

        if (cart.length > 0) {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');

                itemDiv.innerHTML = `
                <div class="checkout-js">
                    <img src="${item.image}" alt="Product Image" class="item-image" width="169" height="197">
                    
                    <div class="item-details">
                    <h3 class="item-name">Sunset Lamp</h3>
                        <p class="item-color">Color: ${item.color}</p>
                        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                        <div class="item-quantity">
                            <span class="minus" data-index="${index}">-</span>
                            <span>${item.quantity}</span>
                            <span class="plus" data-index="${index}">+</span>
                        </div>  
                    </div>
                    <span class="delete" data-index="${index}">x</span>

                    </div>
                `;

                checkoutContainer.appendChild(itemDiv);
            });

            // Update the order summary with the current values
            updateOrderSummary();
        } else {
            checkoutContainer.textContent = 'Your cart is empty.';
            updateOrderSummary(); // Reset order summary when the cart is empty
        }
    };

    // Function to update the cart and re-render
    const updateCart = () => {
        sessionStorage.setItem('cart', JSON.stringify(cart)); // Store the cart in sessionStorage
        renderCart(); // Re-render the cart
    };

    // Event listeners for plus, minus, and delete buttons
    checkoutContainer.addEventListener('click', function (event) {
        const index = parseInt(event.target.getAttribute('data-index'));

        if (event.target.classList.contains('plus')) {
            cart[index].quantity++; // Increase the quantity
            updateCart(); // Update and re-render the cart
        }

        if (event.target.classList.contains('minus')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--; // Decrease the quantity
            } else {
                cart.splice(index, 1); // Remove item if quantity is 1
            }
            updateCart(); // Update and re-render the cart
        }

        if (event.target.classList.contains('delete') || event.target.closest('.delete')) {
            cart.splice(index, 1); // Remove the item
            updateCart(); // Update and re-render the cart
        }
    });

    // Function to handle the checkout process
    const handleCheckout = () => {
        const orderNumber = generateOrderNumber();

        sessionStorage.removeItem('cart'); // Clear the cart
        checkoutContainer.innerHTML = `
            <p class="checkout-text">Thank you for shopping with us! Your order number is ${orderNumber}. You can use your order number to track your package on the track package page. We hope you enjoy!</p>
        `;
        checkoutSummary.style.display = 'none'; // Hide the checkout summary
    };

    // Add event listener for the checkout button
    checkoutButton.addEventListener('click', handleCheckout);

    renderCart(); // Initial render of the cart
});
