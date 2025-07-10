export function setToken(token) {
    localStorage.setItem('token', token);
}

export function getToken() {
    return localStorage.getItem('token');
}

export function removeToken() {
    localStorage.removeItem('token');
}

//localStorage là một API có sẵn trong trình duyệt (browser)
// dùng để lưu trữ dữ liệu tạm thời ở phía client 
