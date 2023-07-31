// Get the checkbox element
var checkbox = document.querySelector('.ant-checkbox-input');

// Get the button element
var button = document.querySelector('.button-sign');

// Add event listener for checkbox click
checkbox.addEventListener('click', function () {
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // Add the new class to the button
    button.classList.add('t-cursor-pointer', 't-text-white', 'registration-submit-btn');
    // Remove the disabled class from the button
    button.classList.remove('disabled');
  } else {
    // Remove the new class from the button
    button.classList.remove('t-cursor-pointer', 't-text-white', 'registration-submit-btn');
    // Add the disabled class to the button
    button.classList.add('disabled');
  }
});

function handleCheckboxChange(checkbox) {
  var checkboxWrapper = checkbox.parentNode;

  if (checkbox.checked) {
    checkboxWrapper.classList.add('ant-checkbox-checked');
  } else {
    checkboxWrapper.classList.remove('ant-checkbox-checked');
  }
}

// Validate //

const formMessage = document.querySelector('.form-message');
const registerButton = document.querySelector('.button-sign');

registerButton.addEventListener('click', function () {

  // Kiểm tra xem button có bị vô hiệu hóa hay không
  if (registerButton.classList.contains('disabled')) {
    alert('Vui lòng đồng ý các điều khoản quy định.');
    return;
  }

  // Kiểm tra xem form-message có hiển thị và có class invalid hay không
  if (formMessage.style.display !== 'none' || formMessage.classList.contains('invalid')) {
    alert('Vui lòng kiểm tra thông tin đăng ký.');
    return;
  }

  // Đăng ký thành công
  alert('Đăng ký thành công!');
});
