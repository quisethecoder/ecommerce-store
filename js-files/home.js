let cart = [];

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








// Checkout/add to cart section end
