// ตรวจสอบการล็อกอิน
if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// ฟังก์ชันสำหรับออกจากระบบ
function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

// แสดงข้อมูลที่เก็บไว้
document.addEventListener('DOMContentLoaded', function() {
    const dataDisplay = document.getElementById('dataDisplay');
    const storedData = JSON.parse(localStorage.getItem('surveyData')) || [];

    if (storedData.length === 0) {
        dataDisplay.innerHTML = '<tr><td colspan="5">ไม่มีข้อมูลการประเมิน</td></tr>';
    } else {
        const rows = storedData.map(data => {
            return `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.gender}</td>
                    <td>${data.score}</td>
                    <td>${data.timestamp}</td>
                </tr>
            `;
        }).join('');
        dataDisplay.innerHTML = rows;
    }
});
