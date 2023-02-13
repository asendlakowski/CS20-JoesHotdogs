function order() {
    p_hotdog = 4.00;
    p_fries = 3.50;
    p_drink = 1.75;
    discount = 0;

    n_hotdogs = prompt ("How many hotdogs would you like?", "");
    n_fries = prompt ("How many french fries would you like?", "");
    n_drinks = prompt ("How many drinks would you like?", "");

    hotdogs = p_hotdog * n_hotdogs;
    fries = p_fries * n_fries;
    drinks = p_drink * n_drinks;

    subtotal = (hotdogs) + (fries) + (drinks);
    subtotal = parseInt(subtotal * 100) / 100;
    document.getElementById("n_hotdogs").innerHTML = n_hotdogs;
    document.getElementById("n_fries").innerHTML = n_fries;
    document.getElementById("n_drinks").innerHTML = n_drinks;
    document.getElementById("subtotal").innerHTML = subtotal;

    total = subtotal;

    if (subtotal >= 20) {
        discount = subtotal * 0.1;
        total = subtotal - discount;
        discount = parseInt(discount * 100) / 100;
    }

    tax = (total * 0.0625);
    tax = parseInt(tax * 100) / 100;
    total = (total + tax);
    total = parseInt(total * 100) / 100;

    document.getElementById("discount").innerHTML = discount;
    document.getElementById("tax").innerHTML = tax;
    document.getElementById("total").innerHTML = total;
    

}

// var globalScope = 0;
            
// x = "hello"; y = " there";
// z = x + y; // z is "hello there"
// //if concatenate string with a number it's now a string (if put parentheses around then will actually add)

// //input from user is always a string, so if want to convert can use parseInt or parseFloat
// hotdogs = prompt ("How many hotdogs would you like?", "");
// fries = prompt ("How many french fries would you like?", "");
// drinks = prompt ("How many drinks would you like?", "");
// document.write ("hotdogs" + (parseInt(hotdogs)) + "<br>");
// document.write ("fries" + (parseInt(fries)) + "<br>");
// document.write ("drinks" + (parseInt(drinks)) + "<br>");

//checkAmount = prompt("check amount", "20");
//tip = checkAmount * .17;
//document.write("tip is" + parseFloat(tip));