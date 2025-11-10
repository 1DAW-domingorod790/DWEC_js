"use strict"
{
    function reverse (cadena) {
        let cadenaInversa = '';
        for (let i = cadena.length; i >= 0; i--){
            cadenaInversa += cadena.charAt(i);
        }
        return cadenaInversa;
    }

    function reverse2 (cadena) {
        return cadena.reverse();
    }

    console.log(reverse("Hola mundo"));
    console.log(reverse2("Hola mundo"));
}