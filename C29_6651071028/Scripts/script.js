function getFormvalue() {
    var form = document.getElementById("form1");
    // Áp dụng DOM để lấy ra giá trị Họ và tên từ hai input form
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;

    console.log("First name: " + fname);
    console.log("Last name: " + lname);
    alert("Họ và tên: " + fname + " " + lname);

    var resultElem = document.getElementById("result");
    if (resultElem) {
        resultElem.innerHTML = "<strong>Kết quả lấy được từ DOM:</strong><br>First name: " + fname + "<br>Last name: " + lname;
    }

    return false; // Ngăn trình duyệt reload trang
}
