// for the button on hover show a pic of the lamp that it would be I save an example from amazon

function photoGallery(imgs) {
  var expandImg = document.getElementById("main-pic");
 
  expandImg.src = imgs.src;
 
  expandImg.parentElement.style.display = "block";
}