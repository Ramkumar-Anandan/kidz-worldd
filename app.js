function cart() {
    document.getElementById("checkout").style.display = "inherit";

}

function back() {
    document.getElementById("checkout").style.display = "none";

}

// Issue facing currently when "Add" button is clicked the number is not getting increased, instead numbers are considered as string. example when add button is clicked 2 times it shows 11.
function book1() {
    document.getElementById("book1").style.display = "inherit";
    // document.getElementById("button1").style.display = "none";
    // console.log("cart-value");
    document.getElementById("cart-value").innerHTML += 1;

}

function book2() {
    document.getElementById("book2").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function book3() {
    document.getElementById("book3").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function book4() {
    document.getElementById("book4").style.display = "inherit";
}

function book6() {
    document.getElementById("book6").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function game1() {
    document.getElementById("game1").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function game2() {
    document.getElementById("game2").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function game3() {
    document.getElementById("game3").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function game4() {
    document.getElementById("game4").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function craft1() {
    document.getElementById("craft1").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function craft2() {
    document.getElementById("craft2").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function craft3() {
    document.getElementById("craft3").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}

function craft4() {
    document.getElementById("craft4").style.display = "inherit";
    document.getElementById("cart-value").innerHTML += 1;
}



function removebook1() {
    document.getElementById("book1").style.display = "none";

}

function removebook2() {
    document.getElementById("book2").style.display = "none";
}

function removebook3() {
    document.getElementById("book3").style.display = "none";
}

function removebook4() {
    document.getElementById("book4").style.display = "none";
}

function removebook5() {
    document.getElementById("book5").style.display = "none";
}

function removebook6() {
    document.getElementById("book6").style.display = "none";
}

function removegame1() {
    document.getElementById("game1").style.display = "none";
}

function removegame2() {
    document.getElementById("game2").style.display = "none";
}

function removegame3() {
    document.getElementById("game3").style.display = "none";
}

function removegame4() {
    document.getElementById("game4").style.display = "none";
}

function removecraft1() {
    document.getElementById("craft1").style.display = "none";
}

function removecraft2() {
    document.getElementById("craft2").style.display = "none";
}

function removecraft3() {
    document.getElementById("craft3").style.display = "none";
}

function removecraft4() {
    document.getElementById("craft4").style.display = "none";
}

//1. When items are added to the cart the total value should be changed accordingly
//2. when + button is clicked the quaantity should be increased and when - button is clicked value should be reduced.
//3. when a item is added to the cart the totalvalue should be changed accordingly
//4. when the user clicks on buynow the entire order summary shuld be copied and the same should be shared in a whatsapp message. Already I have given the link to my whatsapp number, but was not able to include the order summary.
function addb1() {
    document.getElementById("quantityb1").innerHTML += 1;
}