"use strict"
{
    function esPrimo (n) {
        if(n == 2 || n == 3) {
            return true;
        }else{
            return (n%2 && n%3) != 0;
        }
    }

    console.log(esPrimo());
}