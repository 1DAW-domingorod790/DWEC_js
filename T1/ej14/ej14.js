"use strict"
{
    function aplicarDescuento (precioInicial, descuento) {
        return precioInicial * ((100-descuento)*0.01);
    }

    console.log(aplicarDescuento(1000, 20));
}