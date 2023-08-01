async function loadAddRegister() {
    try {
        const res = await axios.get('http://localhost:3000/user');
        let data = res.data;
        let lastId = data[data.length - 1].id;
        let register = `
        <div class="t-text-3xl t-mb-[15px] t-text-[#333] t-font-medium" data-v-a49a629a="">
        Đăng ký dịch vụ </div>
    <div id="form-1" class="middle-right-registration" data-v-a49a629a="">
    <div class="registration-acc t-w-full t-mb-[24px] registration-acc"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="id" type="text" name="name" value="${lastId + 1}" disabled>
            </div>
        </div>

        <div class="registration-acc t-w-full t-mb-[24px] registration-acc"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="usn" type="text" name="name" placeholder="Tên cửa hàng/Shop">
                <span class="form-message"></span>
            </div>
        </div>
        <div class="registration-tel t-w-full t-mb-[24px] registration-tel"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="phone" type="number" name="phone"
                    placeholder="Điện thoại liên hệ">
                <span class="form-message"></span>
            </div>
        </div>
        <div class="registration-address t-w-full t-mb-[24px] registration-address"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="address" type="text" name="address"
                    placeholder="Địa chỉ">
                <span class="form-message"></span>
            </div>
        </div>
        <div class="registration-pass t-w-full t-mb-[24px] registration-pass"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="password" type="password" name="password"
                    placeholder="Mật khẩu">
                <span class="form-message"></span>
            </div>
        </div>
        <div class="registration-confirm-pass t-w-full t-mb-[24px] registration-confirm-pass"
            data-v-a49a629a="">
            <div class="g-input__wrapper" data-v-71ebfa04="" data-v-a49a629a="">
                <input id="password-confirmation" type="password" name="password-confirmation"
                    placeholder="Xác nhận mật khẩu">
                <span class="form-message"></span>
            </div>
            <div class="g-red-text t-text-sm t-pt-1" data-v-a49a629a=""></div>
        </div>
        <div class="registration-policy t-font-bold t-text-sm t-mt-8"
            data-v-a49a629a=""><!----><label
                class="ant-checkbox-wrapper g-checkbox size-undefined"
                data-v-a49a629a=""><span class="ant-checkbox"><input type="checkbox"
                        class="ant-checkbox-input"
                        onchange="handleCheckboxChange(this)"><span
                        class="ant-checkbox-inner"></span></span><!----></label><label
                class="t-pl-1 t-text-[#333]" data-v-a49a629a=""><span class="t-mr-[3px]"
                    data-v-a49a629a="">Tôi đã đọc và đồng ý với</span><a
                    href="https://khachhang.giaohangtietkiem.vn/web/dieu_khoan_quy_dinh.pdf"
                    data-v-a49a629a=""> Điều khoản &amp; Quy định</a> và <a
                    href="https://giaohangtietkiem.vn/chinh-sach-bao-mat-ghtk"
                    data-v-a49a629a=""> Chính sách bảo mật thông tin</a></label>
        </div>
        <div onclick="registerUser()" class="button-sign t-h-[44px] t-w-full t-text-center t-text-base t-font-medium t-mt-4 t-rounded disabled"
            data-v-a49a629a=""> ĐĂNG KÍ NGAY 
        </div>
    </div>
        `

        document.getElementById(`register`).innerHTML = register;

    } catch (error) {
        console.error(error);
    }
}

async function registerUser() {
    let data = {
        id: document.getElementById('id').value,
        username: document.getElementById('usn').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        password: document.getElementById('password').value,
    };
    console.log(data);

    try {
        const res = await axios.post('http://localhost:3000/user/register', data);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

function handleCheckboxChange(checkbox) {
    var checkboxWrapper = checkbox.parentNode;
    var registerButton = document.querySelector('.button-sign');

    if (checkbox.checked) {
        checkboxWrapper.classList.add('ant-checkbox-checked');
        registerButton.classList.add('registration-submit-btn', 't-cursor-pointer', 't-text-white');
        registerButton.classList.remove('disabled');
    } else {
        checkboxWrapper.classList.remove('ant-checkbox-checked');
        registerButton.classList.remove('registration-submit-btn', 't-cursor-pointer', 't-text-white');
        registerButton.classList.add('disabled');
    }
}


