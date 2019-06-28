var chooseApple = 0;
var chooseOrange = 0;
var chooseBanana = 0;
var totalPrice = 0;
var myMoney = document.querySelector("#haveMoney").value;




// function of addition


function addApples() {
    let fruitPrice = document.querySelector("#ApplesNumb");
    fruitPrice.value = chooseApple;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseApple++;
    document.querySelector('#total-input').innerHTML = + totalPrice;

}

// let money = document.querySelector("#myMoney");
// totalPrice.innerHTML = + money;



function addOranges() {
    let fruitPrice = document.querySelector("#OrangesNumb");
    fruitPrice.value = chooseOrange;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseOrange++;
    document.querySelector('#total-input').innerHTML = + totalPrice;

}


function addBananas() {
    let fruitPrice = document.querySelector("#BananasNumb");
    fruitPrice.value = chooseBanana;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseBanana++;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

// function of subtraction

function removeApple() {
    chooseApple < 1 ? chooseApple = 1 : '';
    let fruitPrice = document.querySelector("#ApplesNumb");
    fruitPrice.value = chooseOrange;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseApple--;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

function removeOrange() {
    chooseOrange < 0 ? chooseOrange = 0 : '';
    let fruitPrice = document.querySelector("#OrangesNumb");
    fruitPrice.value = chooseOrange;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseOrange--;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}


function removeBanana() {
    chooseBanana < 1 ? chooseBanana = 1 : '';
    let fruitPrice = document.querySelector("#BananasNumb");
    fruitPrice.value = chooseBanana;
    totalPrice = chooseApple * 10 + chooseOrange * 15 + chooseBanana * 7;
    chooseBanana--;
    document.querySelector('#total-input').innerHTML = + totalPrice;
}

// function myPrice() {
//     var x = document.querySelector("#ApplesNumb").value;
//     document.querySelector("#price").innerHTML = + x;
// }
