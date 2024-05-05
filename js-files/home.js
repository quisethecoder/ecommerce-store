// Get relevant elements
const colorItems = document.querySelectorAll('.color-item');
const quantityDisplay = document.querySelector('.num');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const addToCartButton = document.querySelector('.btn');



const checkoutLink = document.querySelector(".c");


// Photo Gallery Section start

function photoGallery(imgs) {
  var expandImg = document.getElementById("main-pic");
 
  expandImg.src = imgs.src;
 
  expandImg.parentElement.style.display = "block";
}

// Photo Gallery Section end


// Color Selector Section start

var btnContainer = document.getElementById("colors");

var btns = btnContainer.getElementsByClassName("color-item");

for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Color Selector Section end

// Quantity Button Section start

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1

plus.addEventListener("click", ()=> {
  a++;

  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    
    num.innerText = a;
  }
});

// Quantity Button Section end

// Checkout/add to cart section start


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

