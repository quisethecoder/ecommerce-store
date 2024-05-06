document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const checkoutContainer = document.querySelector('.checkout-container');
    const checkoutSummary = document.querySelector('.checkout-summary');

    const shippingCost = 5.00; // Fixed shipping cost

    // Function to calculate the subtotal
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Function to update the order summary
    const updateOrderSummary = () => {
        if (cart.length === 0) {
            // Reset to zero if there are no items
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(1)').textContent = `Subtotal: $0.00`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(2)').textContent = `Shipping: $0.00`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(3)').textContent = `Tax: $0.00`;
            checkoutSummary.querySelector('.sub-money.low').textContent = `Total: $0.00`;
        } else {
            const subtotal = calculateSubtotal(); // Get the subtotal
            const tax = subtotal * 0.06; // 6% tax
            const total = subtotal + shippingCost + tax; // Calculate the total price

            // Update the order summary details
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(1)').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(2)').textContent = `Shipping: $${shippingCost.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.mid:nth-of-type(3)').textContent = `Tax: $${tax.toFixed(2)}`;
            checkoutSummary.querySelector('.sub-money.low').textContent = `Total: $${total.toFixed(2)}`;
        }
    };

    // Function to render the cart items
    const renderCart = () => {
        checkoutContainer.innerHTML = ''; // Clear existing content

        if (cart.length > 0) {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');

                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="Product Image" class="item-image" width="80" height="80">
                    <div class="item-details">
                        <h3 class="item-name">Sunset Lamp</h3>
                        <p class="item-color">Color: ${item.color}</p>
                        <div class="item-quantity">
                            <button class="minus" data-index="${index}">-</button>
                            <span>${item.quantity}</span>
                            <button class="plus" data-index="${index}">+</button>
                        </div>
                        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <span class="delete" data-index="${index}">
                        <span>x</span>
                    </span>
                `;

                checkoutContainer.appendChild(itemDiv);
            });
        } else {
            checkoutContainer.textContent = 'Your cart is empty.';
        }

        // Always update the order summary after rendering the cart
        updateOrderSummary();
    };

    // Function to update the cart
    const updateCart = () => {
        sessionStorage.setItem('cart', JSON.stringify(cart)); // Update sessionStorage
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
                cart.splice(index, 1); // Remove the item if quantity is one
            }
            updateCart(); // Update and re-render the cart
        }

        if (event.target.classList.contains('delete') || event.target.closest('.delete')) {
            cart.splice(index, 1); // Remove the item completely
            updateCart(); // Update and re-render the cart
        }
    });

    renderCart(); // Initial render of the cart
});
