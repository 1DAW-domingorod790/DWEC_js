"use strict"
{
    function eliminarPatron (cadena, patron) {
        let cadenaFinal = '';
        for (let i = 0; i < cadena.length; i++){
            if (cadena.substring(i, i+patron.length) !== patron) {
                cadenaFinal += cadena.substring(cadena.charAt(i+patron.length+1));
            }
        }
        return cadenaFinal;
    }

    console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
}