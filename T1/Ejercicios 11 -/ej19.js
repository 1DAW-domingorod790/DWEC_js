"use strict"
{
    function cadenaToArray (cadena, separator) {
        cadena = cadena.trim();
        return cadena.split(separator);
    }

    console.log(cadenaToArray("     hola que tal     ", ' '));
}