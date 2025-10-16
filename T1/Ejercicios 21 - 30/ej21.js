"use strict"
{
    function reverse (cadena) {
        let cadenaInversa = '';
        for (let i = cadena.length; i >= 0; i--){
            cadenaInversa += cadena.charAt(i);
        }
        return cadenaInversa;
    }

    console.log(reverse("Hola mundo"));
}