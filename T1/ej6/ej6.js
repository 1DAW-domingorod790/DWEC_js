"use strict" 
{
    let n1 = prompt("Intoduce el numero1: ");
    let n2 = prompt("Intoduce el numero2: ");

    if (n2 - n1 > 0) {
        if (n2 - n1 > 1){
            for (let i = 0; i < n2 - n1 - 1; i++){
                if((n2- (i + 1)) % 2 != 0) {
                    console.log(n2 - (i+1));
                }
            }
        }else{
            console.log("No hay números en medio");
        }
    } else if (n2 - n1 < 0) {
        if (n1 - n2 > 1){
            for (let i = 0; i < n1 - n2 - 1; i++){
                if((n1 - (i + 1)) % 2 != 0) {
                    console.log(n1 - (i+1));
                }
            }
        }else{
            console.log("No hay números en medio");
        }
    } else {
        console.log("No hay números en medio");
    }
}