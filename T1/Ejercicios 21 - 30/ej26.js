"use strict"
{
    //FUNCION DE CADENA.
    function comprobarCadena1 (cadena) {
        cadena = cadena.toLowerCase();
        if ((cadena.charAt(0) === 'm' || cadena.charAt(0) === 'd') && (cadena.charAt(cadena.length - 1) === 'a' || cadena.charAt(cadena.length - 1) === 'o')){
            return true;
        }else{
            return false;
        }
    }

    //EXPRESION REGULAR
    function comprobarCadena2 (cadena) {
        let regExp = /^(m|d).*(a|o)$/i;
        return regExp.test(cadena);
    }

    console.log(comprobarCadena1("Holp"));
    console.log(comprobarCadena1("Hola"));
    console.log(comprobarCadena1("Holo"));
    console.log(comprobarCadena1("Moll"));
    console.log(comprobarCadena1("Doll"));
    console.log(comprobarCadena1("Dolo"));

    console.log(comprobarCadena2("Holp"));
    console.log(comprobarCadena2("Hola"));
    console.log(comprobarCadena2("Holo"));
    console.log(comprobarCadena2("Moll"));
    console.log(comprobarCadena2("Doll"));
    console.log(comprobarCadena2("Dolo"));


}