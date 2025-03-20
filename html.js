let pi = Math.PI;
let r = 0;

while (isNaN(r) && r > 0 ){
    let r = parseFloat(prompt("Podaj promien okregu "));
}

function circleArea(r){
    return pi*r;
}

document.write("Pole kola o promieniu" + r + "wynosi: " + circleArea(r))
