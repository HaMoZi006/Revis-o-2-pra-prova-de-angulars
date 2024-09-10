let cliques: number[] = [1, 2, 2];
let lampadaA: boolean = false
let lampadaB: boolean = false


for(let i: number = 0 ; i < cliques.length ; i++){
   switch (cliques[i]){
       case 1:
           lampadaA = !lampadaA
           break
       case 2:
           lampadaA = !lampadaA
           lampadaB = !lampadaB
           break
   }
}


console.log(lampadaA)
console.log(lampadaB)
