"use strict"
{
    //A DNI is valid when it contains exactly 8 numbers (0-9)
    //and one letter (9 characters).

    function validarDNI (dni) {
        console.log(dni.length);
        if (dni.lenght === 9) {
            if (dni.charAt(dni.lenght-1) > 40 && dni.charAt(dni.lenght-1) < 60){
                let esNum = true;
                let index = 0;
                while (index < dni.lenght - 2 && esNum === true) {
                    if (!isNaN(parseInt(dni.charAt(index)))){
                        esNum = false;
                    }
                    console.log(dni.charAt(index)); 
                    index++;
                }
                if(esNum === true) {
                    return 'DNI válido';                
                } else {
                    return 'DNI inválido 1';
                }
            }else{
                return 'DNI inválido 2';
            }
        }else{
            return 'DNI inválido 3';
        }
    }

    let dni = '12345678A';
    
    console.log(validarDNI('12345678A'));


}