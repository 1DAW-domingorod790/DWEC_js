"use strict"
{
    function esParOImpar (n){
        if (n % 2 == 0){
            return "Par";
        }else{
            return "Impar";
        }
    }

    console.log(esParOImpar(29));
    console.log(esParOImpar(28));
}