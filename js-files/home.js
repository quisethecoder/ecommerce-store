// Photo Gallery Section

function photoGallery(imgs) {
  var expandImg = document.getElementById("main-pic");
 
  expandImg.src = imgs.src;
 
  expandImg.parentElement.style.display = "block";
}

// Quantity Button Section

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1

plus.addEventListener("click", ()=> {
  a++;

  a = (a < 10) ? a : a;

  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    a = (a<10) ? a : a;
    num.innerText = a;
  }
});