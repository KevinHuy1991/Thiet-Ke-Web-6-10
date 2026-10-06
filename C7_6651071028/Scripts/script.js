$(document).ready(function () {
    $("#linkForm").on("submit", function (e) {
        e.preventDefault();
        
        // Lấy giá trị link từ input bằng jQuery và DOM
        var link = $("#linkInput").val().trim();
        
        if (!link) {
            alert("Vui lòng nhập đường link!");
            return false;
        }
        
        // Hiển thị dialog Windows xác nhận
        var confirmAction = confirm("Bạn có muốn chuyển đến liên kết: " + link + " không?");
        
        if (confirmAction) {
            // Nếu người dùng chọn OK: Chuyển hướng đến đường link
            var targetUrl = link;
            if (!/^https?:\/\//i.test(targetUrl)) {
                targetUrl = "https://" + targetUrl;
            }
            window.location.href = targetUrl;
        } else {
            // Nếu Cancel thì không thực hiện gì cả
            console.log("Người dùng đã hủy chuyển hướng.");
        }
        
        return false;
    });
});
