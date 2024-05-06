// Ensure event listeners are only added once
document.addEventListener('DOMContentLoaded', function () {
  // Ensure cart is initialized only once
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Variables for color selection and quantity
  let selectedColor = 'Sun'; // Default to first color
  let quantity = 1;

  // Add event listeners for color selection
  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach(item => {
      item.addEventListener('click', function() {
          colorItems.forEach(i => i.classList.remove('active')); // Remove 'active' from all
          this.classList.add('active'); // Add 'active' to clicked item
          selectedColor = this.innerText; // Set selected color
      });
  });

  // Function to handle changing the main product picture
  const thumbnailImgs = document.querySelectorAll('.prod-pic');
  thumbnailImgs.forEach(thumbnailImg => {
      thumbnailImg.addEventListener('click', function() {
          const mainPic = document.getElementById('main-pic');
          mainPic.src = this.src; // Change the main picture
      });
  });

  // Function to update the cart badge
  function updateCartBadge() {
      const cartBadge = document.querySelector('.cart-badge');
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items
      cartBadge.textContent = totalItems;
      cartBadge.style.display = totalItems > 0 ? 'block' : 'none'; // Display badge if there are items
  }

  // Function to add item to cart
  function addToCart() {
      const existingItem = cart.find(item => item.color === selectedColor);

      if (existingItem) {
          existingItem.quantity += quantity; // Increment the quantity if item already exists
      } else {
          const imageMapping = {
              'Sun': './images/sunsslphoto.png',
              'Sunset': './images/sunsetsslphoto.png',
              'Sunset Red': './images/sunsetredsslphoto.png',
              'Rainbow': './images/rainbowsslphoto.png'
          };

          const newItem = {
              color: selectedColor,
              quantity: quantity,
              price: 29.99, // Fixed price
              image: imageMapping[selectedColor] || './images/sunsslphoto.png', // Get the corresponding image
          };

          cart.push(newItem); // Add the new item to the cart
      }

      sessionStorage.setItem('cart', JSON.stringify(cart)); // Store the cart in sessionStorage
      updateCartBadge(); // Update the badge with the new count
  }

  // Event listeners for plus and minus buttons
  const minusButton = document.getElementById('minus');
  const plusButton = document.querySelector('.plus');

  minusButton.addEventListener('click', function() {
      if (quantity > 1) {
          quantity--;
          document.querySelector('.num').textContent = quantity; // Update displayed quantity
      }
  });

  plusButton.addEventListener('click', function() {
      quantity++;
      document.querySelector('.num').textContent = quantity; // Update displayed quantity
  });

  // Add the "Add to Cart" event listener
  const addToCartButton = document.querySelector('.btn');
  addToCartButton.addEventListener('click', addToCart); // Only add the listener once

  // Initialize cart badge on page load
  updateCartBadge();
});
