var array = [5, 4, 4, 1, 2, 17, 40, -17, -112];
function bubbleSort(array) {
    var troca;
    var n = array.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                troca = array[j];
                array[j] = array[j + 1];
                array[j + 1] = troca;
            }
        }
    }
    return array;
}
var arrayOrdenado = bubbleSort(array);
arrayOrdenado.unshift(arrayOrdenado[0] - 1);
arrayOrdenado.push(array[array.length - 1] + 1);
console.log(arrayOrdenado);
