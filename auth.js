function login(username, password) {
    // Tai khoan dung
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
