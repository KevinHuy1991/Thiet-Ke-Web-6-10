function insert_Row() {
    // Áp dụng DOM và jQuery để đếm số hàng và thêm hàng mới
    var rowCount = $("#sampleTable tr").length + 1;
    var newRow = "<tr><td>Row" + rowCount + " cell1</td><td>Row" + rowCount + " cell2</td></tr>";
    
    // Thêm vào bảng bằng jQuery
    $("#sampleTable").append(newRow);
}

$(document).ready(function () {
    $("input[value='Insert row']").on("click", function () {
        // Đồng thời hỗ trợ sự kiện qua jQuery handler nếu không dùng onclick trực tiếp
    });
});
