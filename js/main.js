// for (let i = 0; i < 10; i++) {
//     if(i == 7){
//         continue;
//     }
//     console.log(i);
    
// }




let rndArr = generateRndArr(100, -30, 40);

console.log(rndArr);

let rndArr2 = generateRndArr(4, 116, 130);
console.log(rndArr2);

/**
 * 
 * @param {*} length - masyvo ilgis
 * @param {*} min - minimali reiksme
 * @param {*} max - maksimali reiksme
 * @returns 
 */
function generateRndArr(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = (min) + Math.round(Math.random() * (max - (min) )).toFixed(2);
    }

    return arr;
}


sayHi();
sayHiTo("Jonas");
sayHiTo("Petras");

let vardas = "Jokubas";
sayHiTo(vardas);
sayHiToFull(vardas, "Jokubaitis");

let smallPI = demoPI();
console.log("funkcija grazino pi reisme: " + smallPI);

let result = sum(16,30);
console.log(result);

function sayHi() {
    console.log("hi!");
}

function sayHiTo(name) {
    console.log("hi " + name + "!");
}

function sayHiToFull(name, surname) {
    console.log("hi " + name + " " +surname + "!");
}

function demoPI() {
    return 3.14;
}

function sum(a, b) {
    return a + b;
}







let rndNum = document.getElementById("rndNum");


rndNum.addEventListener("click",function(){
    
    document.getElementById("rndNum").innerText = Math.round(Math.random() * 10);

});