"use strict"
{
    //A DNI is valid when it contains exactly 8 numbers (0-9)
    //and one letter (9 characters).

    function validDNI (dni) {
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

    function validarDniRegExp (dni) {
        let regExp = /^\d{8}[A-Z]$/i;
        return regExp.test(dni);
    }

    let dniPrueba1 = '12345678a';
    let dniPrueba2 = '1234567aA';
    let dniPrueba3 = '12345678';
    let dniPrueba4 = '12345678-';
    
    console.log(validarDniRegExp(dniPrueba1));
    console.log(validarDniRegExp(dniPrueba2));
    console.log(validDNI(dniPrueba3));
    console.log(validDNI(dniPrueba4));
}