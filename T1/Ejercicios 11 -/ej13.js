"use strict"
{
    //NORMAL FUNCTION
    function factorial (n) {
        let acum = 1;
        for (let i = n; i > 0; i--){
            acum *= i;
        }
        return acum;
    }

    //RECURSIVE FUNCTION
    function factorial2 (n) {
        if(n == 1) {
            return n;
        } else {
            return n *= factorial2(n-1);
        }
    }

    console.log(factorial(10));
    console.log(factorial2(5));

}