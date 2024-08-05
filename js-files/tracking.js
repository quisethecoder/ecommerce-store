const wrapper = document.querySelector(".wrapper");
const trackingButton = document.querySelector(".btn");
const newText = document.querySelector(".contain");


const handleTracking = () => {

    newText.innerHTML = `<p class="text-js">Your order is on the way!</p>`;

    wrapper.innerHTML = "";

};


trackingButton.addEventListener("click", handleTracking);

let cart = JSON.parse(sessionStorage.getItem("cart")) || []; // Check for cart information

function updateCartBadge() {
    const cartBadge = document.querySelector('.cart-badge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'block' : 'none'; // Display badge if there are items
}

updateCartBadge();


