"use strict"
{
    let fechaNacimiento = prompt("Introduce tu edad");

    let diaNacimiento = fechaNacimiento.substring(0, 2);
    let mesNacimiento = fechaNacimiento.substring(3, 5);
    let anyoNacimiento = fechaNacimiento.substring(6);

    let edad = 2025 - anyoNacimiento;

    if (mesNacimiento == 10) {
        if (diaNacimiento > 16) {
            edad--;
        }
    }if (mesNacimiento > 10) {
        edad--;
    }

    console.log("Tienes "  + edad + " años")

}