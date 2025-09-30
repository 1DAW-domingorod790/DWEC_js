"use strict"
{
    function pintarDienteSierra (caracter, nCaracteres) {
        for(let i = 0; i < nCaracteres; i++) {
            let lineaAPintar = '';
            for(let j = (nCaracteres - i); j > 0; j--) {
                lineaAPintar += caracter;
            }
            console.log(lineaAPintar);
        }
    }
    
    console.log(pintarDienteSierra('A', 5));
}