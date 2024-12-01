document.getElementById("button-login").addEventListener('click', function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;



    if (!localStorage.getItem('users')) {
        alert("Đăng nhập thất bại!")
    }
    let users = JSON.parse(localStorage.getItem('users'));
    let dem = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            alert("Đăng nhập thành công!");
            window.location.href = "../home/home.html";
        } else {
            dem = dem + 1;
        }
    }
    if (dem == users.length) {
        alert("Đăng nhập thất bại!")
    }
})
document.getElementById("eye-hide").addEventListener('click', function () {
    document.getElementById("eye-hide").style.display = "none";
    document.getElementById("eye-show").style.display = "block";
    document.getElementById("password").type = "password";
});

document.getElementById("eye-show").addEventListener('click', function () {
    document.getElementById("eye-hide").style.display = "block";
    document.getElementById("eye-show").style.display = "none";
    document.getElementById("password").type = "text";
});