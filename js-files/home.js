// Function to handle changing the main product picture when a thumbnail is clicked
function photoGallery(clickedImg) {
  const mainPic = document.getElementById('main-pic');
  mainPic.src = clickedImg.src; // Set the main picture source to the clicked thumbnail
}

// Add event listeners for thumbnail images
const thumbnailImgs = document.querySelectorAll('.prod-pic');
thumbnailImgs.forEach(thumbnailImg => {
  thumbnailImg.addEventListener('click', function() {
      photoGallery(this); // Call the function when clicked
  });
});

// Variables for color selection and quantity
let selectedColor = 'Sun'; // Default to the first color
let quantity = 1;

// Add event listeners for color selection
const colorItems = document.querySelectorAll('.color-item');
colorItems.forEach(item => {
  item.addEventListener('click', function() {
      colorItems.forEach(i => i.classList.remove('active')); // Remove active class
      this.classList.add('active'); // Add active class to clicked item
      selectedColor = this.innerText; // Update selected color
  });
});

// Manage quantity with minus and plus buttons
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const quantityDisplay = document.querySelector('.num');

minusButton.addEventListener('click', function() {
  if (quantity > 1) {
      quantity--;
      quantityDisplay.innerText = quantity; // Update displayed quantity
  }
});

plusButton.addEventListener('click', function() {
  quantity++;
  quantityDisplay.innerText = quantity; // Update displayed quantity
});

// Function to determine image based on selected color
function getImageUrlForColor(color) {
  const imageMapping = {
      'Sun': './images/sunsslphoto.png', 
      'Sunset': './images/sunsetsslphoto.png',
      'Sunset Red': './images/sunsetredsslphoto.png',
      'Rainbow': './images/rainbowsslphoto.png'
  };

  return imageMapping[color] || './images/default.jpg'; // Default if not found
}

// Add to cart function
function addToCart() {
  const image = getImageUrlForColor(selectedColor); // Get the image URL based on color

  const cartProduct = {
      color: selectedColor,
      quantity: quantity,
      price: 29.99, // Fixed price
      image: image, // Include the image URL
  };

  sessionStorage.setItem('cartProduct', JSON.stringify(cartProduct)); // Store in sessionStorage
}

// Add event listener for the "Add to cart" button
const addToCartButton = document.querySelector('.btn');
addToCartButton.addEventListener('click', addToCart);
