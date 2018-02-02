var modal = $("#fullscreen");
var img = $(".menu-img");
var fullscreenImg = $("#fullscreen-img")

function openModal(source) {
    modal.css("display", "block");
    fullscreenImg.attr("src", source)
}

img.each(function() {
    $(this).click(function() {
        openModal($(this).attr("src"));
    })
});

modal.find(".close").click(function() {
    modal.css("display", "none");
});