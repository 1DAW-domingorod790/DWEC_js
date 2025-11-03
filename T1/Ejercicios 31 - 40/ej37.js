"use strict"
{

    function encontrarParesEimpares (vector) {
        let pares = [];
        let impares = [];

        vector.forEach(element => {
            if (element % 2 == 0){
                pares.push(element);
            } else {
                impares.push(element);
            }
        });

        return `pares: ${pares}, impares: ${impares}`;
    }

    console.log(encontrarParesEimpares([1,2,3,4,5,6,7,8,9,0]))

}