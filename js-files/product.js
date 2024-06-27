const galleryPhotos = document.querySelectorAll(".gallery-pic");
const colorItems = document.querySelectorAll(".color-item");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const addToCartButton = document.querySelector(".btn");
const infoParaOne = document.getElementById("info-paragraph-one");
const infoParaTwo = document.getElementById("info-paragraph-two");
const infoParaThree = document.getElementById("info-paragraph-three");

document.addEventListener("DOMContentLoaded", function (){

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

let selectedColor = "Sun";
let quantity = 1;

galleryPhotos.forEach(galleryPhoto => {
    galleryPhoto.addEventListener('click', function(){
        const mainPhoto = document.getElementById("main-pic");
        mainPhoto.src = this.src;
    });
});

colorItems.forEach(item => {
    item.addEventListener('click', function() {
        colorItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        selectedColor = this.innerText;
    });
});


minusButton.addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        document.querySelector('.number').textContent = quantity;
    }
});

plusButton.addEventListener('click', function() {
    quantity++;
    document.querySelector('.number').textContent = quantity; 
});

function updateCartBadge(){
    const cartBadge = document.querySelector(".cart-badge");
    const totalItems = cart.reduce((acc, item) => acc + item.quantity,0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "block" : "none";
}

function addToCart() {
    const existingItem = cart.find(item => item.color === selectedColor);

    if(existingItem){
        existingItem.quantity += quantity;
    } else{
        const imageMapping = {
            "Sun": "./images/sunsslphoto.png",
            "Sunset": "./images/sunsetsslphoto.png",
            "Sunset Red": "./images/sunsetredsslphoto.png",
            "Rainbow": "./images/rainbowsslphoto.png"
        };

        const newItem = {
            color: selectedColor,
            quantity: quantity,
            price: 29.99,
            image: imageMapping[selectedColor] || ".images/sunsslphoto.png",
        };

        cart.push(newItem);
    };

    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
};

addToCartButton.addEventListener("click", addToCart);
updateCartBadge();

});


function hide(){  
    var hidePara = infoParaOne.style.display = "none";
    document.getElementById("showMe").style.display = "block";
    document.getElementById("hideMe").style.display = "none";
 
 }
 
 function show(){
     var showPara= infoParaOne.style.display = "block";
     document.getElementById("hideMe").style.display = "block";
     document.getElementById("showMe").style.display = "none";
 };

 function hideOne(){
    var hidePara = infoParaTwo.style.display = "none";
    document.getElementById("showMeOne").style.display = "block";
    document.getElementById("hideMeOne").style.display = "none";
 };

 function showOne(){
    var showPara = infoParaTwo.style.display = "block"
    document.getElementById("hideMeOne").style.display = "block";
    document.getElementById("showMeOne").style.display = "none";
 };


 function hideTwo(){
    var hidePara = infoParaThree.style.display = "none";
    document.getElementById("showMeTwo").style.display = "block";
    document.getElementById("hideMeTwo").style.display = "none";
 };

 function showTwo(){
    var showPara = infoParaThree.style.display = "block"
    document.getElementById("hideMeTwo").style.display = "block";
    document.getElementById("showMeTwo").style.display = "none";
 };