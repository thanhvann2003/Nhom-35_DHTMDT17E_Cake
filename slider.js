const slides = document.querySelectorAll('.slides1');
let currentSlide = 0;
let autoPlayInterval; // Đối tượng để lưu trữ interval cho auto play
let autoPlayActive = true; // Biến cờ để kiểm soát trạng thái của auto play

// Hiển thị slide hiện tại
function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Chuyển đến slide tiếp theo
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// Chuyển đến slide trước đó
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

// Bắt đầu auto play
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (autoPlayActive) {
            nextSlide();
        }
    }, 2500); // Mỗi slide sẽ được hiển thị trong khoảng 2,5 giây
}

// Xác định sự kiện click cho nút Previous và Next
document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    autoPlayActive = true; // Tiếp tục auto play khi người dùng nhấn nút
});

document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    autoPlayActive = true; // Tiếp tục auto play khi người dùng nhấn nút
});

// Hiển thị slide đầu tiên khi trang được tải và bắt đầu auto play
showSlide();
startAutoPlay();
