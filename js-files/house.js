const colorItems = document.querySelectorAll(".color-item");
const productImage = document.getElementById("main-pic");
const numElement = document.querySelector(".num");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");



let cart = [];




function photoGallery(imgs) {
    var expandImg = document.getElementById("main-pic");  
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";

    const addToCartButton = document.querySelector(".btn");
    addToCartButton.setAttribute("data-product-color", imgs.alt);
  }



  var btnContainer = document.getElementById("colors");

var btns = btnContainer.getElementsByClassName("color-item");

for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


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


let products = [
    {
      id: 1,
      color: "Sun",
      name: "Sunset Lamp",
      image: "./images/sunsslphoto.png",
      price: 2999
    },
    {
      id: 2,
      color: "Sunset",
      name: "Sunset Lamp",
      image: "./images/sunsetsslphoto.png",
      price: 2999
    },
    {
      id: 3,
      color: "Sunset Red",
      name: "Sunset Lamp",
      image: "./images/sunsetredsslphoto.png",
      price: 2999
    },
    {
      id: 4,
      color: "Rainbow",
      name: "Sunset Lamp",
      image: "./images/rainbowsslphoto.png",
      price: 2999
    },
  ];
  let listCards = [];
  

  let selectedQuantity = 1;

let selectedColor;
  

  colorItems.forEach((colorItem) => {
    colorItem.addEventListener("click", () => {
        selectedColor = colorItem.getAttribute("data-product-color");
        const selectedProduct = products.find((product) => product.color === selectedColor);

        productImage.src = selectedProduct.image;

        selectedQuantity = parseInt(colorItem.getAttribute("data-product-quantity"));

        numElement.innerText = selectedQuantity;

        addToCart(selectedColor);

    });
  });

  plusButton.addEventListener("click", () => {
    selectedQuantity++;

    numElement.innerText = selectedQuantity;
  });

  minusButton.addEventListener("click", () => {
    if (selectedQuantity > 1){
        selectedQuantity--;

        numElement.innerText = selectedQuantity;
    }
  })

//  The problem is the parseint isnt retrieving the proper information needed to update the button
 
  function addToCart(productColor){
    const productIndex = products.findIndex((product) => product.id === productColor);
    // const productColor = selectedColor 
    const productQuantity = selectedQuantity;

        const product = {
            index: productIndex,
            color: productColor,
            quantity: productQuantity,
        };
        
            cart.push(product);
        
        console.log("Added to cart:", product);

   

 };
 
 



