// Hàm tách array thành 4 sản phẩm thành 1 array
function splitArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
const productsChunks = splitArray(products, 4);

const productsDiv = document.getElementById('products');
let elementChildProducts = "";
for (let i = 0; i < productsChunks.length; i++) {
  let elementChildDiv = "";
  for (let j = 0; j < productsChunks[i].length; j++) {
    elementChildDiv += `
    <div class="pen-div">
      <img src="${productsChunks[i][j].image}" class="penstock pen${i+1}" alt="">
      <a href="./pen.html?id=${productsChunks[i][j].id}" class="pen1-link">${productsChunks[i][j].name}</a>
      <p>${productsChunks[i][j].price}</p>
    </div>`;
  }
  elementChildProducts += `<div class="featured-products">${elementChildDiv}</div>`;
}
productsDiv.innerHTML = elementChildProducts;