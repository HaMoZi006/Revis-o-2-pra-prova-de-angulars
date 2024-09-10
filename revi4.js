var cliques = [1, 2, 2];
var lampadaA = false;
var lampadaB = false;
for (var i = 0; i < cliques.length; i++) {
    switch (cliques[i]) {
        case 1:
            lampadaA = !lampadaA;
            break;
        case 2:
            lampadaA = !lampadaA;
            lampadaB = !lampadaB;
            break;
    }
}
console.log(lampadaA);
console.log(lampadaB);
