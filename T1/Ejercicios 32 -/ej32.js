"use strict"
{
    function contarVocalesyConsonantes (cadena) {
        cadena = cadena.replace(' ', '');
        let regExp = /[aeiou]/gi;
        let vocales = cadena.match(regExp);
        let contConsonantes = cadena.length - vocales.length;
        return 'Vocales: ' + vocales.length + ' Consonantes: ' + contConsonantes;
    }

    console.log(contarVocalesyConsonantes('Hola Mundo'));
}