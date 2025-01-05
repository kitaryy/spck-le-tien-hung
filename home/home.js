const listProduct = [
  {
      "id": 1,
      "name": "FriXion® Ball Clicker Retractable Erasable Gel Ink Pen",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 2.93,
      "image": "../img/pen/pen1.jpg",
      "category": "#FriXion IFXC",
      "img_pricing": "../img/pricing/pen1.png"
  },
  {
      "id": 2,
      "name": "G2® Premium Gel Roller Pen (0.7mm)",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 2.26,
      "image": "../img/pen/pen2.jpg",
      "category": "#G2 IG2-7",
      "img_pricing": "../img/pricing/pen2.png"
  },
  {
      "id": 3,
      "name": "FriXion® Light Erasable Highlighter",
      "production_time": "10 working days",
      "manufacture_country": "Japan",
      "price": 1.72,
      "image": "../img/pen/pen3.jpg",
      "category": "#FriXion IFXL",
      "img_pricing": "../img/pricing/pen3.png"
  },
  {
      "id": 4,
      "name": "FriXion Point Synergy Clicker",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 2.93,
      "image": "../img/pen/pen4.jpg",
      "category": "#FriXion Energy IFXY",
      "img_pricing": "../img/pricing/pen4.png"
  },
  {
      "id": 5,
      "name": "MR Retro Pop Collection Gel Roller Pen",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 26.44,
      "image": "../img/pen/pen5.jpg",
      "category": "#MR Retro Pop Collection IMPRB",
      "img_pricing": "../img/pricing/pen5.png"
  },
  {
      "id": 6,
      "name": "B2P Colors Gel Roller Pen - 4 Color Label",
      "production_time": "17 working days",
      "manufacture_country": "Japan",
      "price": 2.76,
      "image": "../img/pen/pen6.jpg",
      "category": "#B2P Colors IB2C",
      "img_pricing": "../img/pricing/pen6.png"
  },
  {
      "id": 7,
      "name": "Precise® V5 Premium Rolling Ball Pen with Cap Imprint",
      "production_time": "10 working days",
      "manufacture_country": "Japan",
      "price": 2.30,
      "image": "../img/pen/pen7.jpg",
      "category": "#Precise V5 Cap Imprint IPV5C",
      "img_pricing": "../img/pricing/pen7.png"
  },
  {
      "id": 8,
      "name": "G2® Premium Gel Roller Pen - 72 Count Tub",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 150.08,
      "image": "../img/pen/pen8.jpg",
      "category": "#G2 Tubs I5609",
      "img_pricing": "../img/pricing/pen8.png"
  },
  {
      "id": 9,
      "name": "G2® Pen Stylus",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 4.62,
      "image": "../img/pen/pen9.jpg",
      "category": "#G2 PenStylus ITG2",
      "img_pricing": "../img/pricing/pen9.png"
  },
  {
      "id": 10,
      "name": "G2® Mechanical Pencil",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 2.26,
      "image": "../img/pen/pen10.jpg",
      "category": "#G2 Mechanical Pencil IHG7",
      "img_pricing": "../img/pricing/pen10.png"
  },
  {
      "id": 11,
      "name": "B2P Bottle 2 Pen Gel Roller Pen - 4 Color Label",
      "production_time": "17 working days",
      "manufacture_country": "Japan",
      "price": 2.76,
      "image": "../img/pen/pen11.jpg",
      "category": "#B2P Gel IB2P",
      "img_pricing": "../img/pricing/pen11.png"
  },
  {
      "id": 12,
      "name": "Precise® V7 Premium Rolling Ball Pen (0.7mm)",
      "production_time": "7 working days",
      "manufacture_country": "Japan",
      "price": 2.30,
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

const chatboxDiv = document.getElementById("chatbox");
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendButtonEl = document.getElementById("send-button");
const deleteButton = document.getElementById("delete");

if (deleteButton) {
    deleteButton.addEventListener("click", () => {
        const boxMessage = document.getElementById("messages");
        boxMessage.innerHTML = "";
        localStorage.setItem('liorion_ai', "[]");
        alert("Đã xóa hết dữ liệu!");
    });
}

var data_mess = [];
if (localStorage.getItem('liorion_ai')) {
    data_mess = JSON.parse(localStorage.getItem('liorion_ai'));
    data_mess.map((mess) => {
        addMessage(mess.parts[0].text, mess.role);
    });
    messagesEl.scrollTop = messagesEl.scrollHeight;
} else {
    localStorage.setItem("liorion_ai", "[]");
}

sendButtonEl.addEventListener("click", () => {
    const url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:streamGenerateContent";

    const content = inputEl.value;
    if (!content) return;

    data_mess.push({
        role: "user",
        parts: [{ text: content }]
    });

    const data = {
        contents: data_mess
    };

    const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyCU2n-SdwOsyoXeUw4hgXbwnuAZAEO6PcI",
        "Connection": "keep-alive"
    };

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`Error: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {
            let message = "";
            data.map((mess) => {
                message = `${message}${mess.candidates[0].content.parts[0].text}`;
            });
            data_mess.push({
                role: "model",
                parts: [{ text: message }]
            });
            localStorage.setItem('liorion_ai', JSON.stringify(data_mess));
            addMessage(message, "model");
        })
        .catch(error => {
            data_mess.pop();
            addMessage("Lỗi", "model");
            console.error(error);
        });
    addMessage(content, "user");
    messagesEl.scrollTop = messagesEl.scrollHeight;
    inputEl.value = "";
});

function addMessage(message, role) {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message", role);

    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;

    messageEl.appendChild(messageSpan);
    messagesEl.appendChild(messageEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

const chatbox = document.getElementById("chatbox");
function handleShowChatbox(){
chatbox.style.display = "block";
}
const ShowChatbox = document.getElementById("FanId");
ShowChatbox.addEventListener("click", handleShowChatbox);

function handleHideChatbox(){
  chatbox.style.display = "none";
}
const HideChatbox = document.getElementById("menu");
HideChatbox.addEventListener("click", handleHideChatbox)
