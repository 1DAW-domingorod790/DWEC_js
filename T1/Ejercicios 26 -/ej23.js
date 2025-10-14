"use strict"
{
    function esPalindromo (cadena) {
        let regExp = new RegExp (`${cadena}`, "i");

        let cadenaInversa = '';
        for (let i = cadena.length; i >= 0; i--){
            cadenaInversa += cadena.charAt(i);
        }
        return regExp.test(cadenaInversa);
    }

    console.log(esPalindromo("ojo"));
}