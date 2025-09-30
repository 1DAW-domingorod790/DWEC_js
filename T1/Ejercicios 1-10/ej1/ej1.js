"use strict"
{
    let n1 = parseInt(prompt("Dame un número"));
    let n2 = parseInt(prompt("Dame otro número"));

    if(n1 > n2) {
        console.log(n1 + " es mayor que " +n2)
    } else if (n2 > n1) {
        console.log(n2 + " es mayor que " +n1)
    } else{
        console.log(" son iguales ")
    }



}