const wrapper = document.querySelector(".wrapper");
const trackingButton = document.querySelector(".btn");
const newText = document.querySelector(".new-message");


const handleContact = () => {

    newText.innerHTML = `<p class="text-js">We'll be in touch will you as soon as possible!</p>`;

    wrapper.innerHTML = "";

};


trackingButton.addEventListener("click", handleContact);



    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    function updateCartBadge() {
        const cartBadge = document.querySelector('.cart-badge');
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'block' : 'none'; // Display badge if there are items
    }
    
    updateCartBadge();
    




