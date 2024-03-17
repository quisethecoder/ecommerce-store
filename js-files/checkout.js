// // Assume you have an empty <ul> element with the id "cart-list" on your checkout page.
// const cartList = document.getElementById("cart-list");

// function populateCheckoutPage() {
//   // Clear any existing items in the cart list.
//   cartList.innerHTML = "";

//   // Iterate through the items in the cart and create list items for each.
//   cart.forEach((item, index) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//       Product: ${products[item.index].name}<br>
//       Color: ${item.color}<br>
//       Quantity: ${item.quantity}<br>
//       Price: $${(products[item.index].price * item.quantity).toFixed(2)}
//     `;
//     cartList.appendChild(listItem);
//   });
// }

// // Call the function to populate the checkout page when the page loads.
// populateCheckoutPage();

// Try local storage