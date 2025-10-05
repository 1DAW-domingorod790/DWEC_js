"use strict"
{
    //NORMAL FUNCTION
    function esParOImpar (n){
        if (n % 2 == 0){
            return "Par";
        }else{
            return "Impar";
        }
    }

    //RECURSIVE FUNCTION
    function esParOImpar2(n){
        if(n===0){
            return 'par';
        }else if (n === 1){
            return 'impar';
        }else{
            return esParOImpar(n-2);
        }
    }

    console.log(esParOImpar(29));
    console.log(esParOImpar(28));

    console.log(esParOImpar2(29));
    console.log(esParOImpar2(28));

}