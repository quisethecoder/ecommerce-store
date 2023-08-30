const urlParams = new URLSearchParams(window.location.search);
const cartData = urlParams.get("cart");

const cart =JSON.parse(decodeURIComponent(cartData));
console.log("Card Data", cart);
