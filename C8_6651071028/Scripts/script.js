$(document).ready(function () {
    var selectedOperator = "-"; // Mặc định như hình bài tập (12 - 14 = -2)

    function calculate() {
        var num1Str = $("#num1").val().trim();
        var num2Str = $("#num2").val().trim();

        if (num1Str === "" || num2Str === "") {
            $("#result").val("");
            return;
        }

        var n1 = parseFloat(num1Str);
        var n2 = parseFloat(num2Str);

        if (isNaN(n1) || isNaN(n2)) {
            $("#result").val("Lỗi");
            return;
        }

        var res = 0;
        switch (selectedOperator) {
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
            case "x":
                res = n1 * n2;
                break;
            case "/":
                if (n2 === 0) {
                    $("#result").val("Không thể chia 0");
                    return;
                }
                res = n1 / n2;
                // Làm tròn nếu có số thập phân dài
                res = Math.round(res * 100000) / 100000;
                break;
            default:
                res = n1 + n2;
        }

        $("#result").val(res);
    }

    // Xử lý khi nhấn các nút phép toán +, -, x, /
    $(".op-btn").on("click", function () {
        $(".op-btn").removeClass("active");
        $(this).addClass("active");
        selectedOperator = $(this).data("op");
        calculate();
    });

    // Xử lý khi nhấn nút hoặc biểu tượng bằng =
    $("#btn-equal, .equals-sign").on("click", function () {
        calculate();
    });

    // Tự động tính khi người dùng nhập số
    $("#num1, #num2").on("input", function () {
        calculate();
    });

    // Khởi tạo tính toán ban đầu theo giá trị mẫu (12 - 14 = -2)
    calculate();
});
