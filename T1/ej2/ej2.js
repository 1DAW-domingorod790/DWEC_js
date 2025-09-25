"use strict"
{
    let num1, num2;

    do {
    num1 = parseInt(prompt("Introduce el primer número (mayor que 0):"));
    num2 = parseInt(prompt("Introduce el segundo número (mayor que 0):"));
    } while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

    if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
    console.log(num1 + " es menor que " + num2);
    } else {
    console.log("Ambos números son iguales");
    }
    
}