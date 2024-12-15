const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const products = localStorage.getItem('products');
const productsArray = JSON.parse(products); // chuyển đổi string thành array
const product = productsArray.find(product => product.id == id); // tìm kiếm sản phẩm theo id
console.log(product);
document.getElementById('product-name').innerText = product.name;
document.getElementById('product-category').innerText = product.category;
document.getElementById('pen_image').src = product.image;
document.getElementById('pen_price').src = product.img_pricing;
document.getElementById('product-time').innerText = product.production_time;
document.getElementById('product-country').innerText = product.manufacture_country;