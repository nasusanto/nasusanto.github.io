window.onload = function () {
    var current_path = window.location.pathname.split("/").pop();
    var all_links = document.querySelectorAll(".links a");
    for (var link of all_links) {
        if (link.href.endsWith(current_path)) {
            link.classList.add("current-link");
        }
    }
}