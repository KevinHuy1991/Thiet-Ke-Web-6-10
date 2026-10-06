function removecolor() {
    var select = document.getElementById("colorSelect");
    // Áp dụng DOM để xóa phần tử được chọn khỏi dropdown list
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    } else {
        alert("Không còn mục nào trong danh sách để xóa!");
    }
}
