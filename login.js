// ตัวอย่างข้อมูลล็อกอิน (สำหรับทดสอบ)
const validCredentials = {
    username: 'admin',
    password: 'password123'
};

function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        // เก็บข้อมูลเข้าสู่ระบบและเปลี่ยนเส้นทางไปยังหน้าแอดมิน
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}
