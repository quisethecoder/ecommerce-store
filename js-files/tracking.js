const wrapper = document.querySelector(".wrapper");
const trackingButton = document.querySelector(".btn");
const newText = document.querySelector(".contain");


const handleTracking = () => {

    newText.innerHTML = `<p class="text-js">Your order is on the way!</p>`;

    wrapper.innerHTML = "";

};


trackingButton.addEventListener("click", handleTracking);