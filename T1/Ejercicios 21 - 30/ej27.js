"use strict"
{
    function esPrimo (n) {
        if (n == 2 || n == 3){
            return true;
        }else {
            if (n % 2 != 0 && n % 3 != 0){
                return true;
            }
        }
    }

    let numeros = [0,1,-2,3,4,5,6,7,-8,9,-10];

    console.log("Número de elementos: " + numeros.length);

    let contPares = 0;
    let pares = [];
    let contImpares = 0; 
    let impares = [];
    let acumNegativos = 0;
    let multPositivos = 1;
    let contPrimos = 0;
    let primos = [];
    let numsPosicionesPares = [];
    let mayor = 0;
    let menor = 0;
    let acumGeneral = 0;

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0) {
            contPares++;
            pares.push(numeros[i]);
        }else{
            contImpares++;
            impares.push(numeros[i]);
        }

        if (numeros[i] > 0){
            multPositivos *= numeros[i];
        } else {
            acumNegativos += numeros[i];
        }

        if (esPrimo(numeros[i])) {
            contPrimos++;
            primos.push(numeros[i]);
        }

        if (i % 2 == 0) {
            numsPosicionesPares.push(numeros[i]);
        }

        if (i > mayor) {
            mayor = i;
        }

        if (i < menor) {
            menor = i;
        }

        acumGeneral += numeros[i];
    }

    let media = acumGeneral / numeros.length;

    let numerosPorEncimaMedia = [];
    let numerosPorDebajoMedia = [];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > media) {
            numerosPorEncimaMedia.push(numeros[i]);
        }else{
            numerosPorDebajoMedia.push(numeros[i]);
        }
    }

    let numerosMayorMenor = [...numeros];
    numerosMayorMenor.sort((a, b) => b-a);

    let numerosMenorMayor = [...numeros];
    numerosMenorMayor.sort((a, b) => a-b);

    console.log("Pares: " + pares + " total: " + contPares);
    console.log("Impares: " + impares + " total: " + contImpares);
    console.log("Suma de los negativos: " + acumNegativos);
    console.log("Producto de los positivos: " + multPositivos);
    console.log("Primos: " + primos + " total: " + contPrimos);
    console.log("Numeros en las posiciones pares: " + numsPosicionesPares);
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
    console.log("Media: " + media);
    console.log("Por encima de la media: " + numerosPorEncimaMedia);
    console.log("Por debajo de la media: " + numerosPorDebajoMedia);
    console.log("De mayor a menor: " + numerosMayorMenor);
    console.log("De menor a mayor: " + numerosMenorMayor);
    let num = prompt("Buscar número: ");
    
    let i = 0;
    let existe = false;
    do {
        if (numeros[i] == num){
            existe = true;
        }
        i++;
    }while (!existe && i < numeros.length)

    console.log(existe?"Existe":"No existe");

}