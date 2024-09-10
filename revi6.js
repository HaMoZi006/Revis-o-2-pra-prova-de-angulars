var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var somalinha = [0, 0, 0];
var somacoluna = [0, 0, 0];
var somadp = 0;
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
        somalinha[i] += matriz[i][j];
        somacoluna[j] += matriz[i][j];
        if (i === j) {
            somadp += matriz[i][j];
        }
    }
}
console.log(matriz);
console.log("A soma da linha, respectivamente, \u00E9: ".concat(somalinha));
console.log("A soma da coluna, respectivamente, \u00E9: ".concat(somacoluna));
console.log("A soma da diagonal principal, respectivamente, \u00E9: ".concat(somadp));
