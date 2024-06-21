const galleryPhotos = document.querySelectorAll(".gallery-pic");
const colorItems = document.querySelectorAll(".color-item");
const minusButton = document.getElementById("minus");
const plusButton = document.querySelector(".plus");

let selectedColor = "Sun";
let quantity = "1";

galleryPhotos.forEach(galleryPhoto => {
    galleryPhoto.addEventListener('click', function(){
        const mainPhoto = document.getElementById("main-pic");
        mainPhoto.src = this.src;
    });
});

// colorItems.forEach(item => {
//     item.addEventListener('click', function(){
//         colorItems.forEach(i => i.classList.remove('.active'));
//         this.classList.add('active');
//         selectedColor = this.innerText;
//     });
// });

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
