const listProduct = [
    {
        "id": 1,
        "name": "FriXion® Ball Clicker Retractable Erasable Gel Ink Pen",
        "brand": "FriXion",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$2.93",
        "image": "../img/pen/pen1.jpg",
        "category": "IFXC"
    },
    {
        "id": 2,
        "name": "G2® Premium Gel Roller Pen (0.7mm)",
        "brand": "G2",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$2.26",
        "image": "../img/pen/pen2.jpg",
        "category": "IG2-7"
    },
    {
        "id": 3,
        "name": "FriXion® Light Erasable Highlighter",
        "brand": "FriXion",
        "production_time": "10 working days",
        "manufacture_country": "Japan",
        "price": "$1.72",
        "image": "../img/pen/pen3.jpg",
        "category": "IFXL"
    },
    {
        "id": 4,
        "name": "FriXion® Ball Clicker Retractable Erasable Gel Ink Pen",
        "brand": "FriXion",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$2.93",
        "image": "../img/pen/pen4.jpg",
        "category": "IFXC"
    },
    {
        "id": 5,
        "name": "MR Retro Pop Collection Gel Roller Pen",
        "brand": "MR Retro Pop Collection",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$26.44",
        "image": "../img/pen/pen5.jpg",
        "category": "IMPRB"
    },
    {
        "id": 6,
        "name": "B2P Colors Gel Roller Pen - 4 Color Label",
        "brand": "B2P Colors",
        "production_time": "17 working days",
        "manufacture_country": "Japan",
        "price": "$2.76",
        "image": "../img/pen/pen6.jpg",
        "category": "IB2C"
    },
    {
        "id": 7,
        "name": "Precise® V5 Premium Rolling Ball Pen with Cap Imprint",
        "brand": "Precise V5 Cap Imprint",
        "production_time": "10 working days",
        "manufacture_country": "Japan",
        "price": "$2.30",
        "image": "../img/pen/pen7.jpg",
        "category": "IPV5C"
    },
    {
        "id": 8,
        "name": "G2® Premium Gel Roller Pen - 72 Count Tub",
        "brand": "G2 Tubs",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$150.08",
        "image": "../img/pen/pen8.jpg",
        "category": "I5609"
    },
    {
        "id": 9,
        "name": "G2® Pen Stylus",
        "brand": "G2 PenStylus",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$4.62",
        "image": "../img/pen/pen9.jpg",
        "category": "ITG2"
    },
    {
        "id": 10,
        "name": "G2® Mechanical Pencil",
        "brand": "G2 Mechanical Pencil",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$2.26",
        "image": "../img/pen/pen10.jpg",
        "category": "IHG7"
    },
    {
        "id": 11,
        "name": "B2P Bottle 2 Pen Gel Roller Pen - 4 Color Label",
        "brand": "B2P Gel",
        "production_time": "17 working days",
        "manufacture_country": "Japan",
        "price": "$2.76",
        "image": "../img/pen/pen11.jpg",
        "category": "IB2P"
    },
    {
        "id": 12,
        "name": "Precise® V7 Premium Rolling Ball Pen (0.7mm)",
        "brand": "Precise",
        "production_time": "7 working days",
        "manufacture_country": "Japan",
        "price": "$2.30",
        "image": "../img/pen/pen6.jpg",
        "category": "IPV7"
    },
];

let products = localStorage.getItem('products');
if (products) {
  products = JSON.parse(products); // ép kiểu chuỗi thành json
} else {
  products = listProduct;
  localStorage.setItem('products', JSON.stringify(products));
}

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