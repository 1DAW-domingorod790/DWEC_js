"use strict"
{
    //WITH LENGTH
    function contarCaracteres (cadena) {
        return cadena.length;
    }
    //WITHOUT USING LENGHT (CREATING AN OWN LENGTH FUNCTION)
    function countCharacters (string) {
        let index = 0;
        let counter = 0;
        while (string.charAt(index) !== '') { //in js, when goes beyond the end,
            if (string.charAt(index) !== '') { //it returns an empty string (''). 
                counter++;
            }
            index++;
        }
        return counter;
    }

    let cadena = "hola";
    console.log(contarCaracteres(cadena));
    console.log(countCharacters(cadena));
}