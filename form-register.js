function handleRegistration(event) {
  event.preventDefault();

  var modal = document.getElementById('myModal');
  modal.classList.remove('fadeOut'); // Xóa animation fadeOut trước khi hiển thị modal
  modal.style.display = 'block'; // Hiển thị modal

  // Kích hoạt animation hiển thị
  setTimeout(function () {
    modal.classList.add('fadeIn');
  }, 100);
}

// Lấy phần tử close
var closeBtn = document.getElementsByClassName('close')[0];

// Khi người dùng nhấn vào nút close, đóng modal
closeBtn.onclick = function () {
  var modal = document.getElementById('myModal');
  modal.classList.remove('fadeIn'); // Xóa animation fadeIn trước khi ẩn modal

  // Kích hoạt animation ẩn
  modal.classList.add('fadeOut');

  // Ẩn modal sau khi animation hoàn thành
  setTimeout(function () {
    modal.style.display = 'none';
  }, 300);
}
// Khi người dùng click ngoài modal, đóng modal
window.onclick = function (event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
}