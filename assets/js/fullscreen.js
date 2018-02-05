var modal = $("#fullscreen");
var img = $(".menu-img");
var fullscreenImg = $("#fullscreen-img");

var navContainer = $(".nav-container");
var menu = $("#menu");
var footer = $("#bottom");

function toggleHTML() {
    navContainer.toggle();
    menu.toggle();
    footer.toggle();
}

function openModal(source) {
    toggleHTML();
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
    toggleHTML();
});