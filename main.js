function get_cart_quantity() {
    var current_cart = JSON.parse(localStorage.getItem("nadia_shopping_cart") || "[]");
    return current_cart.length;
}

function update_cart_display() {
    document.querySelector("#cart-item-count").innerHTML = get_cart_quantity();
}

window.addEventListener("load", function () {
    update_cart_display();
});
