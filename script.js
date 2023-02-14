function order() {
    p_hotdog = 4.00;
    p_fries = 3.50;
    p_drink = 1.75;
    discount = "0.00";

    n_hotdogs = prompt ("How many hotdogs would you like?", "");
    n_fries = prompt ("How many french fries would you like?", "");
    n_drinks = prompt ("How many drinks would you like?", "");

    if (n_hotdogs == "" ) {
        n_hotdogs = 0;
    }
    if (n_fries == "" ) {
        n_fries = 0;
    }
    if (n_drinks == "" ) {
        n_drinks = 0;
    }

    hotdogs = p_hotdog * n_hotdogs;
    fries = p_fries * n_fries;
    drinks = p_drink * n_drinks;

    subtotal = (hotdogs) + (fries) + (drinks);
    subtotal = parseInt(subtotal * 100) / 100;
    s_subtotal = displayCents(subtotal);
    document.getElementById("n_hotdogs").innerHTML = n_hotdogs;
    document.getElementById("n_fries").innerHTML = n_fries;
    document.getElementById("n_drinks").innerHTML = n_drinks;
    document.getElementById("subtotal").innerHTML = s_subtotal;

    total = subtotal;
    s_discount = "0.00";
    if (subtotal >= 20) {
        discount = subtotal * 0.1;
        total = subtotal - discount;
        discount = parseInt(discount * 100) / 100;
        s_discount = displayCents(discount);
    }

    tax = (total * 0.0625);
    tax = parseInt(tax * 100) / 100;
    s_tax = displayCents(tax);
    total = (total + tax);
    total = parseInt(total * 100) / 100;
    s_total = displayCents(total);

    document.getElementById("discount").innerHTML = s_discount;
    document.getElementById("tax").innerHTML = s_tax;
    document.getElementById("total").innerHTML = s_total;
}

function displayCents(price) {
    if (price == parseInt(price)) {
        return price + ".00";
    }
    
    to_string = price.toString();
    for (i = 0; i < to_string.length; i++) {
        if (to_string[i] == ".") {
            if ((to_string.length - (i + 1)) == 1) {
                return price + "0";
            }
        }
    }

    return price;

}
