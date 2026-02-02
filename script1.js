const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Ánh'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();

    if (userInput === secretCode) {
        // Trường hợp đúng: Hiện thông báo đẹp + Icon thành công
        Swal.fire({
            title: 'Baby!',
            text: 'Chuẩn luôn, đợi xíu nha...',
            icon: 'success',           // Icon dấu tích xanh
            confirmButtonText: 'Đi thôi'
        }).then((result) => {
            // Code trong này chỉ chạy sau khi người dùng bấm nút
            if (result.isConfirmed) {
                window.location.href = nextPageUrl; 
            }
        });

    } else {
        // Trường hợp sai: Hiện thông báo lỗi + Icon X đỏ
        Swal.fire({
            title: 'Opps!',
            text: 'Nah ah, you are not my baby',
            icon: 'error',             // Icon dấu X đỏ
            confirmButtonText: 'Retry'
        });
    }
});