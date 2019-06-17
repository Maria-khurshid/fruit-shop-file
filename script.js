var chooseApple = 0;
var chooseOrange = 0;
var chooseBanana = 0;
var totalPrice = 27;
var myMoney = 28;


// function of addition


function addApples() {
    let fruitPrice = document.querySelector("#ApplesNumb");
    fruitPrice.value = chooseApple;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseApple++;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

let money = document.querySelector("#myMoney");




function addOranges() {
    let fruitPrice = document.querySelector("#OrangesNumb");
    fruitPrice.value = chooseOrange;
    totalPrice = chooseOrange * 15 + chooseApple * 10 + chooseBanana * 7;
    chooseOrange++;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}


function addBananas() {
    let fruitPrice = document.querySelector("#BananasNumb");
    fruitPrice.value = chooseBanana;
    totalPrice = chooseBanana * 7 + chooseApple * 10 + chooseOrange * 15;
    chooseBanana++;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

// function of subtraction

function removeApple() {
    let fruitPrice = document.querySelector("#ApplesNumb");
    fruitPrice.value = chooseApple;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseApple--;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

function removeOrange() {
    let fruitPrice = document.querySelector("#OrangesNumb");
    fruitPrice.value = chooseOrange;
    totalPrice = chooseOrange * 15 + chooseApple * 10 + chooseBanana * 7;
    chooseOrange--;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}


function removeBanana() {
    let fruitPrice = document.querySelector("#BananasNumb");
    fruitPrice.value = chooseBanana;
    totalPrice = chooseBanana * 7 + chooseApple * 10 + chooseOrange * 15;
    chooseBanana--;

}

// function myPrice() {
//     var x = document.querySelector("#ApplesNumb").value;
//     document.querySelector("#price").innerHTML = + x;
// }
