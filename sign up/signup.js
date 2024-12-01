document.getElementById("button-signup").addEventListener('click', function () {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cfpassword = document.getElementById("cfpassword").value;


if(cfpassword == password) {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', '[]');
    }
    let users = JSON.parse(localStorage.getItem('users'));
    let check = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].username == username || users[i].email == email) {
            check = true;
        }
    }
    if (check == false) {
        users.push({
            fullname: fullname,
            username: username,
            password: password,
            email: email,
        });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Đăng ký tài khoản thành công!");
        window.location.href = "../log in/login.html";
    } else {
        alert("Tài khoản đã được đăng kí!");
    }
} else {
    alert("Mật khẩu không khớp!")
}

});
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


document.getElementById("eye-hide-c").addEventListener('click', function () {
    document.getElementById("eye-hide-c").style.display = "none";
    document.getElementById("eye-show-c").style.display = "block";
    document.getElementById("cfpassword").type = "password";
});

document.getElementById("eye-show-c").addEventListener('click', function () {
    document.getElementById("eye-hide-c").style.display = "block";
    document.getElementById("eye-show-c").style.display = "none";
    document.getElementById("cfpassword").type = "text";
});