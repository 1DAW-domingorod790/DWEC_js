"use strict"
{
    function factorial (n) {
        let acum = 1;
        for (let i = n; i > 0; i--){
            acum *= i;
        }
        return acum;
    }

    console.log(factorial(10));
}