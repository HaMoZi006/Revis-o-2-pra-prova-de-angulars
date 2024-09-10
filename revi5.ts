let matriz: number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma:number=0
let resultado:number=0
//Escolha o teu número:
let numero:number=1

for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz.length;j++){
        soma += matriz[i][j]
    }
}

let encontrado: boolean = false;  
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === numero) {
            matriz[i][j] = soma 
            encontrado = true
        }
    }
}
if (encontrado) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "))
    }
} else {
    console.log(-1)
}