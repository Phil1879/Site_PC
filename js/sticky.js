window.addEventListener("resize", function() {
    if (window.innerWidth <= 768) {
        stickyElement.classList.remove("sticky");
        stickyElement.style.left = "auto";
    }
});

var stickyElement = document.querySelector("#contacts");
var stickyPosition = stickyElement.offsetTop;


function stickyFunction() {
    var stickyLeft = stickyElement.offsetLeft;
    if (window.innerWidth > 1024 && window.pageYOffset > stickyPosition) {
        stickyElement.classList.add("sticky");
        // Сохраняем позицию слева, чтобы он не сдвигался
        stickyElement.style.left = stickyLeft + "px";
    } else {
        stickyElement.classList.remove("sticky");
        // Убираем изменение left
        stickyElement.style.left = "auto";
    }
}
window.addEventListener("scroll", stickyFunction);
