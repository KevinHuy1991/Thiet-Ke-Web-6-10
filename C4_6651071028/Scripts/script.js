function removecolor() {
    // Áp dụng DOM và jQuery để xóa phần tử đang được chọn khỏi dropdown list
    var selectedOption = $("#colorSelect option:selected");
    
    if (selectedOption.length > 0 && selectedOption.val() !== undefined) {
        selectedOption.remove();
    } else {
        // Fallback sử dụng DOM thuần nếu cần
        var selectElem = document.getElementById("colorSelect");
        if (selectElem && selectElem.selectedIndex !== -1) {
            selectElem.remove(selectElem.selectedIndex);
        }
    }
}

$(document).ready(function () {
    $("input[value='Select and Remove']").on("click", function () {
        // Đồng thời hỗ trợ jQuery event listener
    });
});
