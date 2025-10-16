"use strict"
{
    function eliminarPatron (cadena, patron) {
        return cadena.replaceAll(patron,"");
    }

    console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
}