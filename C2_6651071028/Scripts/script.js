function getFormvalue(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    
    // Áp dụng DOM và jQuery để lấy giá trị First name và Last name
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    
    // Fallback qua DOM thuần nếu cần
    if (fname === undefined) {
        var form = document.getElementById("form1");
        fname = form.elements["fname"].value;
        lname = form.elements["lname"].value;
    }
    
    // Hiển thị thông báo qua alert
    alert(fname + " " + lname);
    
    // Đồng thời hiển thị trên trang giao diện
    if ($("#result").length > 0) {
        $("#result").html("<strong>Họ và tên:</strong> " + fname + " " + lname).show();
    }
    
    return false;
}

$(document).ready(function () {
    $("#form1").on("submit", function (e) {
        e.preventDefault();
        getFormvalue(e);
        return false;
    });
});
