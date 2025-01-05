let favData = JSON.parse(localStorage.getItem('Fav')) || [];
const favContainer = document.getElementById('favContainer')

function renderFav() {
    favContainer.innerHTML = "";
    if (favData.length === 0) {
        favContainer.innerHTML = '<h1 class="card-title">Chưa có sản phẩm nào trong mục yêu thích</h1>';
    } else {

        favData.forEach(item => {
            const productElements = document.createElement('div');
            productElements.classList.add('cart-item');
            productElements.innerHTML = `
              <img src="${item.image}" class="cartitem">
              <a href="../home/pen.html?id=${item.id}" class="itemName">${item.name}</a>
              <p>Price: $${item.price}</p>
              <input type="image" src="../img/close.png" class="remove" onclick="removeFromFav(${item.id})">
            `;
            favContainer.appendChild(productElements);
        });
    }
}

function removeFromFav(PId) {

    favData = favData.filter(item => item.id !== PId); 


    localStorage.setItem('Fav', JSON.stringify(favData));


    renderFav(); 
}


renderFav();
