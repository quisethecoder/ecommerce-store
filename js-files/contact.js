const wrapper = document.querySelector(".wrapper");
const trackingButton = document.querySelector(".btn");
const newText = document.querySelector(".new-message");


const handleContact = () => {

    newText.innerHTML = `<p class="text-js">We'll be in touch will you as soon as possible!</p>`;

    wrapper.innerHTML = "";

};


trackingButton.addEventListener("click", handleContact);