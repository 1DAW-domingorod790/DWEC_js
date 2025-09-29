"use strict" 
{
    let n = parseInt(prompt("Introduce un número: "))

    for (let i = 1; i <= n; i++){
        if(n % i == 0) {
            console.log('Divisor: ' + i);
        }
    }

}