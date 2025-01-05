function updateAccountActive(username) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            localStorage.setItem('accountActive', JSON.stringify(users[i]));
        };
    }
}