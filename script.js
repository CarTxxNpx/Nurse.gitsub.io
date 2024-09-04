function calculateScore() {
    const form = document.getElementById('quizForm');
    let score = 0;
    let allAnswered = true;

    // ดึงค่าที่กรอกจากฟอร์ม
    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;

    // ตรวจสอบว่าทุกคำถามมีการเลือกตัวเลือก
    const questions = form.querySelectorAll('.question');
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            score += parseInt(selectedOption.value);
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert('กรุณาตอบทุกคำถามก่อนส่งคำตอบ');
        return;
    }

    // แสดงคะแนนที่ได้รับและข้อมูลที่กรอกโดยใช้ alert
    alert(`คุณได้คะแนน ${score} คะแนน\nชื่อ: ${name}\nอายุ: ${age} ปี\nเพศ: ${gender}`);

    // เก็บข้อมูลการประเมินลงใน localStorage
    const surveyData = {
        name: name,
        age: age,
        gender: gender,
        score: score,
        timestamp: new Date().toLocaleString() // วันที่และเวลา
    };

    let existingData = JSON.parse(localStorage.getItem('surveyData')) || [];
    existingData.push(surveyData);
    localStorage.setItem('surveyData', JSON.stringify(existingData));
}
