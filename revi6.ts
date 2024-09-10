let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let somalinha: number[] = [0, 0, 0]  
let somacoluna: number[] = [0, 0, 0]  
let somadp: number = 0  



for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        somalinha[i] += matriz[i][j] 
        somacoluna[j] += matriz[i][j]  

    if (i === j) {
        somadp += matriz[i][j];

        }
    }
}


console.log(matriz)
console.log(`A soma da linha, respectivamente, é: ${somalinha}`)
console.log(`A soma da coluna, respectivamente, é: ${somacoluna}`)
console.log(`A soma da diagonal principal é: ${somadp}`)