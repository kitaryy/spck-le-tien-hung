let cartData = JSON.parse(localStorage.getItem('cart')) || []; 

const cartContainer = document.getElementById('cartContainer');
const totalPriceContainer = document.getElementById('totalPrice');
const taxInclContainer = document.getElementById('taxincl');
const checkoutContainer = document.getElementById('checkoutBtn');
const shipContainer = document.getElementById('ship');


function renderCart() {
    cartContainer.innerHTML = ""; 
    calculateTotalPrice();

    if (cartData.length === 0) {
        cartContainer.innerHTML = '<h1 class="card-title">Chưa có sản phẩm nào trong giỏ hàng</h1>';
        totalPriceContainer.innerHTML = `
            <p class="card-type">Subtotal</p>
            <p class="card-type">$0</p>
        `;
        taxInclContainer.innerHTML = `
            <p class="card-type">Total (Tax included)</p>
            <p class="card-type">$0</p>
        `;
        checkoutContainer.innerHTML = `
            <p class="checkout-text">$0</p>
            <p class="checkout-text">Checkout →</p>
        `;
        shipContainer.innerHTML = `
            <p class="card-type">Shipping</p>
            <p class="card-type">$0</p>
        `;
    } else {

        cartData.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <img src="${item.image}" class="cartitem">
                <a href="../home/pen.html?id=${item.id}" class="itemName">${item.name}</a>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
                <input type="image" src="../img/close.png" class="remove" onclick="removeFromCart(${item.id})">
            `;
            cartContainer.appendChild(productElement);
        });
        calculateTotalPrice();
    }
}


function removeFromCart(productId) {

    cartData = cartData.filter(item => item.id !== productId); 


    localStorage.setItem('cart', JSON.stringify(cartData));


    renderCart(); 
}


function calculateTotalPrice() {
    const totalPrice = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    const roundedPrice = totalPrice.toFixed(2);
    const taxIncl = (totalPrice + 2).toFixed(2);

    totalPriceContainer.innerHTML = `
        <p class="card-type">Subtotal</p>
        <p class="card-type">$${roundedPrice}</p>
    `;
    taxInclContainer.innerHTML = `
        <p class="card-type">Total (Tax included)</p>
        <p class="card-type">$${taxIncl}</p>
    `;
    checkoutContainer.innerHTML = `
        <p class="checkout-text">$${taxIncl}</p>
        <p class="checkout-text">Checkout →</p>
    `;
    shipContainer.innerHTML = `
        <p class="card-type">Shipping</p>
        <p class="card-type">$2</p>
    `;
}


renderCart();