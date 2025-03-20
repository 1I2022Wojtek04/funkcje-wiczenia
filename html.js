// Obliczanie pola

let pi = Math.PI;

let r = parseFloat(prompt("Podaj promien okregu: "));

while (isNaN(r) || r <= 0 ){
    r = parseFloat(prompt("Podaj promien okregu: "));
}

function circleArea(r){
    return pi * r **2;
}

document.write("<p>Pole kola o promieniu " + r + " wynosi: " + circleArea(r) + "</p>")

document.write("<p>==============================================</p>")
// Obliczanie pola prostokąta z wartościami domyślnymi

let a = parseFloat(prompt("Podaj pierwszy bok prostokata: "));
if (isNaN(a) || a <= 0){
    a = 1;
}

let b = parseFloat(prompt("Podaj drugi bok prostokata: "));
while (isNaN(b) || b <= 0){
    b = 1;
}

function rectangleArea(a, b){
    return a * b;
}

document.write("<p>Pole prostokata o bokach: " + a + " i " + b + " wynosi: " + rectangleArea(a, b) + "</p>")

document.write("<p>==============================================</p>")
// Przyjmowanie losowych wartosci i sprawdzanie czy polowa jest wieksza od 10

let tablica = [];
c = 0;

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (i = 0; i < 10; i++){
    x = getRandom(1, 20)
    tablica.push(x)
    if(x > 10){
        c++
    }
}
document.write("<p>Tablica: " + tablica) + "</p>";

if(c > 5){
    document.write("<p>Jest ich: " + c + " udalo sie!!! :3</p>");
}

if(c <=5){
    document.write("<p>Jest ich: " + c + " zobacz konsole >:3</p>");
    console.log("niestety nie");
}



