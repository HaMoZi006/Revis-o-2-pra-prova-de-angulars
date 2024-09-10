var num1 = 0;
var num2 = 1;
var resul = 0;
for (var i = 0; i < 11; i++) {
    console.log(resul);
    resul = num1 + num2;
    num2 = num1;
    num1 = resul;
}
