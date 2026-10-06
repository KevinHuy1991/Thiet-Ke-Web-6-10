function getOptions() {
    // Áp dụng DOM và jQuery để đếm và hiển thị các mục trong dropdownlist trong cửa sổ cảnh báo
    var options = $("#mySelect option");
    var total = options.length;
    var message = "No. of items : " + total + "\n";
    
    options.each(function () {
        message += $(this).text() + "\n";
    });
    
    alert(message);
}

$(document).ready(function () {
    $("input[value='Count and Output all items']").on("click", function () {
        // Đồng thời gán qua jQuery
    });
});
