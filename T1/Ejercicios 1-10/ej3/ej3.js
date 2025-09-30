"use strict"
{
    let horas = parseInt(prompt("Introduce la hora"));
    let minutos = parseInt(prompt("Introduce los minutos"));
    let segundos = parseInt(prompt("Introduce los segundos"));

    if (segundos == 59) {
        segundos = 0;
        if (minutos == 59) {
            minutos = 0;
            if (horas == 23) {
                horas = 0;
            }else{
                horas++;
            }
        }else{
            minutos++;
        }
    }else{
        segundos++;
    }
    
    console.log("Pasado 1 segundos: " + horas + ":" + minutos + ":" + segundos);
}