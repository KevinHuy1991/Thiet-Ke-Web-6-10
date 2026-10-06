$(document).ready(function () {
    // Hàm hiển thị lỗi cho từng trường
    function showError(fieldId, errorId, message) {
        $(fieldId).addClass("error");
        $(errorId).text(message).show();
    }

    // Hàm xóa lỗi của từng trường
    function clearError(fieldId, errorId) {
        $(fieldId).removeClass("error");
        $(errorId).text("").hide();
    }

    // Hàm xóa toàn bộ dữ liệu khi nhấn Clear
    $("#btnClear").on("click", function () {
        $("#registrationForm")[0].reset();
        $(".form-input, .form-select").removeClass("error");
        $(".error-text").text("").hide();
        $("#successAlert").hide();
    });

    // Hàm kiểm tra khi người dùng nhấn Finish
    $("#btnFinish").on("click", function (e) {
        e.preventDefault();
        var isValid = true;
        var errorMessages = [];

        // Ẩn thông báo thành công cũ
        $("#successAlert").hide();

        // 1. Kiểm tra Name (bắt buộc, không được để trống)
        var name = $("#name").val().trim();
        if (name === "") {
            showError("#name", "#nameError", "Tên không được để trống.");
            errorMessages.push("Tên không được để trống.");
            isValid = false;
        } else {
            clearError("#name", "#nameError");
        }

        // 2. Kiểm tra Sex (bắt buộc phải chọn)
        var sex = $("input[name='sex']:checked").val();
        if (!sex) {
            $("#sexError").text("Vui lòng chọn giới tính.").show();
            errorMessages.push("Vui lòng chọn giới tính.");
            isValid = false;
        } else {
            $("#sexError").text("").hide();
        }

        // 3. Kiểm tra Email:
        // Phải có 1 dấu @. Phía trước dấu @ là tên account, có nhiều nhất 1 dấu chấm.
        // Phía sau dấu @ là domain, phải có ít nhất 1 dấu chấm.
        var email = $("#email").val().trim();
        if (email === "") {
            showError("#email", "#emailError", "Email không được để trống.");
            errorMessages.push("Email không được để trống.");
            isValid = false;
        } else {
            var emailParts = email.split("@");
            if (emailParts.length !== 2) {
                showError("#email", "#emailError", "Email phải chứa đúng 1 ký tự '@'.");
                errorMessages.push("Email phải chứa đúng 1 ký tự '@'.");
                isValid = false;
            } else {
                var account = emailParts[0];
                var domain = emailParts[1];

                var accountDots = (account.match(/\./g) || []).length;
                var domainDots = (domain.match(/\./g) || []).length;

                if (account === "") {
                    showError("#email", "#emailError", "Tên tài khoản trước '@' không được rỗng.");
                    errorMessages.push("Tên tài khoản email trước '@' không được rỗng.");
                    isValid = false;
                } else if (accountDots > 1) {
                    showError("#email", "#emailError", "Phía trước '@' chỉ được có nhiều nhất 1 dấu chấm.");
                    errorMessages.push("Phía trước '@' chỉ được có nhiều nhất 1 dấu chấm.");
                    isValid = false;
                } else if (domain === "" || domainDots < 1 || domain.startsWith(".") || domain.endsWith(".")) {
                    showError("#email", "#emailError", "Phía sau '@' là tên miền và phải có ít nhất 1 dấu chấm hợp lệ.");
                    errorMessages.push("Phía sau '@' là tên miền và phải có ít nhất 1 dấu chấm hợp lệ.");
                    isValid = false;
                } else {
                    clearError("#email", "#emailError");
                }
            }
        }

        // 4. Kiểm tra Birthday:
        // Dạng mm/dd/yyyy hoặc mm-dd-yyyy. Tháng từ 1-12, năm nhỏ hơn năm hiện tại.
        var birthday = $("#birthday").val().trim();
        if (birthday === "") {
            showError("#birthday", "#birthdayError", "Ngày sinh không được để trống.");
            errorMessages.push("Ngày sinh không được để trống.");
            isValid = false;
        } else {
            var dateRegex = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/;
            var dateMatch = birthday.match(dateRegex);

            if (!dateMatch) {
                showError("#birthday", "#birthdayError", "Ngày sinh phải theo định dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
                errorMessages.push("Ngày sinh phải theo định dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
                isValid = false;
            } else {
                var month = parseInt(dateMatch[1], 10);
                var day = parseInt(dateMatch[2], 10);
                var year = parseInt(dateMatch[3], 10);
                var currentYear = new Date().getFullYear();

                if (month < 1 || month > 12) {
                    showError("#birthday", "#birthdayError", "Tháng sinh phải từ 1 đến 12.");
                    errorMessages.push("Tháng sinh phải từ 1 đến 12.");
                    isValid = false;
                } else if (year >= currentYear) {
                    showError("#birthday", "#birthdayError", "Năm sinh phải nhỏ hơn năm hiện tại (" + currentYear + ").");
                    errorMessages.push("Năm sinh phải nhỏ hơn năm hiện tại (" + currentYear + ").");
                    isValid = false;
                } else {
                    // Kiểm tra tính hợp lệ của ngày trong tháng
                    var daysInMonth = new Date(year, month, 0).getDate();
                    if (day < 1 || day > daysInMonth) {
                        showError("#birthday", "#birthdayError", "Ngày sinh không hợp lệ trong tháng " + month + " (1-" + daysInMonth + ").");
                        errorMessages.push("Ngày sinh không hợp lệ trong tháng " + month + ".");
                        isValid = false;
                    } else {
                        clearError("#birthday", "#birthdayError");
                    }
                }
            }
        }

        // 5. Kiểm tra Street Address (không được để trống)
        var street = $("#street").val().trim();
        if (street === "") {
            showError("#street", "#streetError", "Địa chỉ đường không được để trống.");
            errorMessages.push("Địa chỉ đường không được để trống.");
            isValid = false;
        } else {
            clearError("#street", "#streetError");
        }

        // 6. Kiểm tra City (không được để trống)
        var city = $("#city").val().trim();
        if (city === "") {
            showError("#city", "#cityError", "Thành phố không được để trống.");
            errorMessages.push("Thành phố không được để trống.");
            isValid = false;
        } else {
            clearError("#city", "#cityError");
        }

        // 7. Kiểm tra Region (bắt buộc phải chọn)
        var region = $("#region").val();
        if (!region || region === "") {
            showError("#region", "#regionError", "Vui lòng chọn vùng/khu vực.");
            errorMessages.push("Vui lòng chọn vùng/khu vực.");
            isValid = false;
        } else {
            clearError("#region", "#regionError");
        }

        // 8. Kiểm tra ZIP Code: đúng 5 chữ số
        var zip = $("#zip").val().trim();
        if (zip === "") {
            showError("#zip", "#zipError", "ZIP code không được để trống.");
            errorMessages.push("ZIP code không được để trống.");
            isValid = false;
        } else if (!/^\d{5}$/.test(zip)) {
            showError("#zip", "#zipError", "ZIP code phải có đúng 5 chữ số.");
            errorMessages.push("ZIP code phải có đúng 5 chữ số.");
            isValid = false;
        } else {
            clearError("#zip", "#zipError");
        }

        // Kết luận
        if (!isValid) {
            alert("Vui lòng sửa các lỗi sau:\n- " + errorMessages.join("\n- "));
        } else {
            $("#successAlert").text("Chúc mừng! Tất cả dữ liệu nhập vào đều hợp lệ và form đã hoàn tất.").show();
            alert("Dữ liệu nhập vào hợp lệ! Form đã hoàn tất.");
        }
    });
});
