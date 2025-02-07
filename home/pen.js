const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const products = localStorage.getItem('products');
const productsArray = JSON.parse(products); // chuyển đổi string thành array
const product = productsArray.find(product => product.id == id); // tìm kiếm sản phẩm theo id
document.getElementById('product-name').innerText = product.name;
document.getElementById('product-category').innerText = product.category;
document.getElementById('pen_image').src = product.image;
document.getElementById('pen_price').src = product.img_pricing;
document.getElementById('product-time').innerText = product.production_time;
document.getElementById('product-country').innerText = product.manufacture_country;

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
        "X-Goog-Api-Key": "AIzaSyChmRc4ti_p-7S2tliFBxm0AiwpnMRZCiE", // API KEY
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
HideChatbox.addEventListener("click", handleHideChatbox);

function handleAddToCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find(item => item.id === product.id);
    if(productInCart){
        productInCart.quantity++;
    }else{
        cart.push({
            ...product,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
   alert("Đã thêm vào giỏ hàng!");
}

const addToCart = document.getElementById("add-to-cart");
addToCart.addEventListener("click", handleAddToCart);




function checkFavorite() {
    const Fav = JSON.parse(localStorage.getItem('Fav')) || [];
    const productInFav = Fav.find(item => item.id === product.id);

    if (productInFav) {

        heart.src = "../img/heart (1).png"; 
    } else {

        heart.src = "../img/heart.png"; 
    }
}


function handleAddToFav() {
    const Fav = JSON.parse(localStorage.getItem('Fav')) || [];
    const productInFav = Fav.find(item => item.id === product.id);

    const heart = document.getElementById("heart"); 

    if (productInFav) {
        const updatedFav = Fav.filter(item => item.id !== product.id); 


        localStorage.setItem('Fav', JSON.stringify(updatedFav));

        heart.src = "../img/heart.png";
    } else {

        Fav.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price
        });


        localStorage.setItem('Fav', JSON.stringify(Fav));
        
        heart.src = "../img/heart (1).png";
    }
}

const addToFav = document.getElementById("heart");
addToFav.addEventListener("click", handleAddToFav);

checkFavorite();
