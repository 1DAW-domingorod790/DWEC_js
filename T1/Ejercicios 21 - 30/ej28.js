"use strict"
{
    let x = ["hola", "adios", "mañana", "domingo", "carmelo", "buenos dias", "ballena"];

    let cadenaMasCorta = x[0];
    let cadenaMasLarga = x[0];
    let cadenaConMasA = x[0];
    let comprobarA = 0;
    let contA = 0;
    let contB = 0;
    let cadenasConB = [];

    for (let i = 0; i < x.length; i++){
        if (x[i].length < cadenaMasCorta.length) {
            cadenaMasCorta = x[i];
        }

        if (x[i].length > cadenaMasLarga.length) {
            cadenaMasLarga = x[i];
        }

        if (contA > comprobarA) {
            comprobarA = contA;
            cadenaConMasA = x[i];
        }

        if (x[i].includes('b')){
            contB++;
            cadenasConB.push(x[i]);
        }

        for (let j = 0; j < x[i].length; j++) {
            if (x[i].charAt(j) === 'a') {
                contA++;
            }
        }
    }

    console.log("Cadena mas corta: " + cadenaMasCorta);
    console.log("Cadena mas larga: " + cadenaMasLarga);
    console.log("Cadena con mas A: " + cadenaConMasA);
    console.log("Cadenas con B: " + cadenasConB + " total: " + contB);

}