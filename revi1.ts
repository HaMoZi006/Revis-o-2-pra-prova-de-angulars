let num1:number = 0
let num2:number = 1
let resul:number = 0


for(let i = 0; i<11; i++){
    console.log(resul)
    resul = num1 + num2
    num2=num1
    num1=resul
   
}
