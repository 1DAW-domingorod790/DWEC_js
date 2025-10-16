"use strict"
{
    function esCapicua (n) {
        n = n.toString();
        let cadenaInversa = '';
        for (let i = n.length; i >= 0; i--){
            cadenaInversa += n.charAt(i);
        }
        return cadenaInversa === n;
    }

    console.log(esCapicua(23232));
}