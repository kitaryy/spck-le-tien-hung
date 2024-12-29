const cartItems = document.getElementById("cart-items");
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let htmlCart = "";
for (let i = 0; i < cart.length; i++) {
    htmlCart += `
    <div class="cart-item">
            <img src="${cart[i].image}" alt="">
            <h2>${cart[i].name}</h2>
            <p>Quantity: ${cart[i].quantity}</p>
            <p>Price: ${cart[i].price}</p>
        </div>
        `;
}
cartItems.innerHTML = htmlCart;