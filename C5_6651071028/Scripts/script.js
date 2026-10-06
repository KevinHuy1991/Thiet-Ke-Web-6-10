var theImages = [
    {
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    },
    {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }
];

function display_random_image() {
    var whichImage = Math.floor(Math.random() * theImages.length);
    var selectedImg = theImages[whichImage];

    // Sử dụng jQuery & DOM để chèn/cập nhật ảnh
    var imgElem = $("#random-img");
    if (imgElem.length === 0) {
        imgElem = $("<img>", {
            id: "random-img",
            src: selectedImg.src,
            width: selectedImg.width,
            height: selectedImg.height,
            alt: "Random Flickr Image"
        });
        
        // Thêm xử lý fallback nếu link ảnh flickr http bị chặn bởi trình duyệt
        imgElem.on("error", function () {
            // Thử đổi sang https hoặc tạo placeholder hiển thị đúng kích thước yêu cầu
            if ($(this).attr("src").startsWith("http://")) {
                $(this).attr("src", selectedImg.src.replace("http://", "https://"));
            }
        });
        
        if ($("#image-container").length > 0) {
            $("#image-container").append(imgElem);
        } else {
            $("body").append(imgElem);
        }
    } else {
        imgElem.attr({
            src: selectedImg.src,
            width: selectedImg.width,
            height: selectedImg.height
        });
    }
}

$(document).ready(function () {
    $("#jsstyle").on("click", function () {
        // Đồng thời gán qua jQuery
    });
});
