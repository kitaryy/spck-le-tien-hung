const listProduct = [
  {
      "id": 1,
      "name": "FriXion® Ball Clicker Retractable Erasable Gel Ink Pen",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$2.93",
      "image": "../img/pen/pen1.jpg",
      "category": "#FriXion IFXC",
      "img_pricing": "../img/pricing/pen1.png"
  },
  {
      "id": 2,
      "name": "G2® Premium Gel Roller Pen (0.7mm)",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$2.26",
      "image": "../img/pen/pen2.jpg",
      "category": "#G2 IG2-7",
      "img_pricing": "../img/pricing/pen2.png"
  },
  {
      "id": 3,
      "name": "FriXion® Light Erasable Highlighter",
      "production_time": "10 working days",
      "manufacture_country": "Japan",
      "price": "$1.72",
      "image": "../img/pen/pen3.jpg",
      "category": "#FriXion IFXL",
      "img_pricing": "../img/pricing/pen3.png"
  },
  {
      "id": 4,
      "name": "FriXion® Ball Clicker Retractable Erasable Gel Ink Pen",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$2.93",
      "image": "../img/pen/pen4.jpg",
      "category": "#FriXion IFXC",
      "img_pricing": "../img/pricing/pen4.png"
  },
  {
      "id": 5,
      "name": "MR Retro Pop Collection Gel Roller Pen",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$26.44",
      "image": "../img/pen/pen5.jpg",
      "category": "#MR Retro Pop Collection IMPRB",
      "img_pricing": "../img/pricing/pen5.png"
  },
  {
      "id": 6,
      "name": "B2P Colors Gel Roller Pen - 4 Color Label",
      "production_time": "17 working days",
      "manufacture_country": "Japan",
      "price": "$2.76",
      "image": "../img/pen/pen6.jpg",
      "category": "#B2P Colors IB2C",
      "img_pricing": "../img/pricing/pen6.png"
  },
  {
      "id": 7,
      "name": "Precise® V5 Premium Rolling Ball Pen with Cap Imprint",
      "production_time": "10 working days",
      "manufacture_country": "Japan",
      "price": "$2.30",
      "image": "../img/pen/pen7.jpg",
      "category": "#Precise V5 Cap Imprint IPV5C",
      "img_pricing": "../img/pricing/pen7.png"
  },
  {
      "id": 8,
      "name": "G2® Premium Gel Roller Pen - 72 Count Tub",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$150.08",
      "image": "../img/pen/pen8.jpg",
      "category": "#G2 Tubs I5609",
      "img_pricing": "../img/pricing/pen8.png"
  },
  {
      "id": 9,
      "name": "G2® Pen Stylus",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$4.62",
      "image": "../img/pen/pen9.jpg",
      "category": "#G2 PenStylus ITG2",
      "img_pricing": "../img/pricing/pen9.png"
  },
  {
      "id": 10,
      "name": "G2® Mechanical Pencil",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$2.26",
      "image": "../img/pen/pen10.jpg",
      "category": "#G2 Mechanical Pencil IHG7",
      "img_pricing": "../img/pricing/pen10.png"
  },
  {
      "id": 11,
      "name": "B2P Bottle 2 Pen Gel Roller Pen - 4 Color Label",
      "production_time": "17 working days",
      "manufacture_country": "Japan",
      "price": "$2.76",
      "image": "../img/pen/pen11.jpg",
      "category": "#B2P Gel IB2P",
      "img_pricing": "../img/pricing/pen11.png"
  },
  {
      "id": 12,
      "name": "Precise® V7 Premium Rolling Ball Pen (0.7mm)",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": "$2.30",
      "image": "../img/pen/pen6.jpg",
      "category": "#Precise IPV7",
      "img_pricing": "../img/pricing/pen12.png"
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

// document.getElementById('search-box').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form submission
//   const query = document.getElementById('searchInput').value.trim();
//   if (query) {
//       alert(`Searching for: ${query}`);
//       // Implement your search logic here
//   } else {
//       alert('Please enter a search term.');
//   }
// });