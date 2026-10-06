function insert_Row() {
    var table = document.getElementById("sampleTable");
    // Thêm 1 hàng mới vào cuối table
    var newRow = table.insertRow(-1);
    var rowCount = table.rows.length;

    // Thêm 2 ô (cells) cho hàng mới
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Gán giá trị nội dung cho các ô
    cell1.innerHTML = "Row" + rowCount + " cell1";
    cell2.innerHTML = "Row" + rowCount + " cell2";
}
