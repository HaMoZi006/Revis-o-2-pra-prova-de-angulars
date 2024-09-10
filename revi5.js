var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var soma = 0;
var resultado = 0;
//Escolha o teu número:
var numero = 1;
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz.length; j++) {
        soma += matriz[i][j];
    }
}
var encontrado = false;
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === numero) {
            matriz[i][j] = soma;
            encontrado = true;
        }
    }
}
if (encontrado) {
    for (var i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}
else {
    console.log(-1);
}
