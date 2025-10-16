"use strict"
{
    function cambiarBase(num, base){
        let nuevoNumero=0;
        if (base==2){
            console.log(num+" en base binaria: "+num.toString(2));
        }else if(base==10){
            console.log(num+" en base decimal: "+num.toString(10));
        }
    }

    cambiarBase(1010, 10);

}