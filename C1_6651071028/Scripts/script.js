function js_style() {
    // Áp dụng DOM và jQuery để thay đổi fontSize, fontFamily, color của đoạn văn bản #text
    $('#text').css({
        'font-size': '26px',
        'font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        'color': '#d9534f'
    });
}

$(document).ready(function () {
    $('#jsstyle').on('click', function (e) {
        // Đảm bảo sự kiện được xử lý bằng cả jQuery
        js_style();
    });
});
