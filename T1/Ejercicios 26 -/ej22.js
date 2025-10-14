"use strict"
{
    function count (cadena, busqueda) {
        let cont = 0;
        for (let i = 0; i < cadena.length; i++){
            if (cadena.substring(i, i+busqueda.length) === busqueda) {
                cont++;
            }
        }
        return cont;
    }

    console.log(count("holamundo mundo adios mundomundo", "mundo"));
    
}