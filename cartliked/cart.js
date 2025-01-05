const cartData = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cartContainer');
const totalPriceContainer = document.getElementById('totalPrice')
const taxInclContainer = document.getElementById('taxincl')
const checkoutContainer = document.getElementById('checkoutBtn')
if (cartData.length === 0) {
    cartContainer.innerHTML = '<h1 class="card-title">Chưa có sản phẩm nào trong giỏ hàng</h1>';
} else {
    // Tạo danh sách sản phẩm
    cartData.forEach(item => {
        // Tạo một thẻ HTML cho mỗi sản phẩm
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
        <img src="${item.image}" class="cartitem">
        <p>${item.name}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price}</p>
        <input type="image" src="../img/close.png" class="remove" onclick="removeFromCart(${item.id})">

    `;
        // Chèn sản phẩm vào container
        cartContainer.appendChild(productElement);
    });
    calculateTotalPrice();
}

function removeFromCart(productId) {
    cartData = cartData.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cartData));
    renderCart();
}

function calculateTotalPrice() {
    const totalPrice = cartData.reduce((total, item) => total + item.price, 0);
    const taxIncl = totalPrice + 2

    totalPriceContainer.innerHTML = `
        <p class="card-type">Subtotal</p>
        <p class="card-type">$${totalPrice}</p>
    `
    taxInclContainer.innerHTML = `
        <p class="card-type">Total (Tax included)</p> 
        <p class="card-type">$${taxIncl}</p>
    `
    checkoutContainer.innerHTML = `
        <p class="checkout-text">$${taxIncl}</p>
        <p class="checkout-text">Checkout →</p>
    `
}

renderCart();