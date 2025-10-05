"use strict"
{
    //A DNI is valid when it contains exactly 8 numbers (0-9)
    //and one letter (9 characters).

    function validarDNI (dni) {
        if (dni.length == 9) {
            const char = dni.charAt(dni.length-1).toUpperCase();
            if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91){
                let esNum = true;
                let index = 0;
                while (index <= dni.length - 2 && esNum === true) {
                    if (dni.charCodeAt(index) < 47 || dni.charCodeAt(index) > 58){
                        esNum = false;
                    }
                    index++;
                }
                if(esNum === true) {
                    return 'Valid DNI.';                
                } else {
                    return 'Invalid DNI. It must contain 8 numbers';
                }
            }else{
                return 'Invalid DNI. It must have a letter at the end';
            }
        }else{
            return 'invalid DNI. It must have 9 characters';
        }
    }

    let dniPrueba1 = '12345678A';
    let dniPrueba2 = '1234567aA';
    let dniPrueba3 = '12345678';
    let dniPrueba4 = '12345678-';
    
    console.log(validarDNI(dniPrueba1));
    console.log(validarDNI(dniPrueba2));
    console.log(validarDNI(dniPrueba3));
    console.log(validarDNI(dniPrueba4));



}