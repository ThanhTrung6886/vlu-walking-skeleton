/**
 * login.js - Logic đăng nhập của Walking Skeleton.
 * - Chạy trong trình duyệt: gắn vào form trong index.html.
 * - Chạy trong Node.js: được Jest import để kiểm thử (module.exports).
 */

// Tài khoản hợp lệ duy nhất của hệ thống mẫu
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '123456';

/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username
 * @param {string} password
 * @returns {{success: boolean, message: string}}
 */
function login(username, password) {
  if (typeof username !== 'string' || username.trim() === '') {
    return { success: false, message: 'Vui lòng nhập tên đăng nhập' };
  }
  if (typeof password !== 'string' || password === '') {
    return { success: false, message: 'Vui lòng nhập mật khẩu' };
  }
  if (username.trim() === VALID_USERNAME && password === VALID_PASSWORD) {
    return { success: true, message: 'Đăng nhập thành công' };
  }
  return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu' };
}

// ----- Phần giao diện (chỉ chạy khi có DOM, tức là trong trình duyệt) -----
if (typeof document !== 'undefined') {
  const form = document.getElementById('login-form');
  const messageEl = document.getElementById('message');

  if (form && messageEl) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const result = login(username, password);
      messageEl.textContent = result.message;
      messageEl.className = result.success ? 'success' : 'error';
    });
  }
}

// ----- Xuất module cho Jest (Node.js) -----
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
