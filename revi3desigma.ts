let numeros:number[] = [8, 6, 6, 4, 25, 9]

numeros.sort((a, b) => a - b)

numeros.unshift(numeros[0] - 1)

numeros.push(numeros[numeros.length] + 1)

console.log(numeros)
