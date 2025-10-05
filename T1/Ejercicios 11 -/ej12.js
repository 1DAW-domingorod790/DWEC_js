"use strict"
{
    function convertirGrados (temperatura, unidadMedidaAConvertir) {
        switch (unidadMedidaAConvertir) {
            case 'C':
                return (temperatura + 32) + 'ºF';
            case 'F':
                return (temperatura - 32) + 'ºC';
        }
    }

    console.log(convertirGrados(23, 'C'));
    console.log(convertirGrados(23, 'F'));
}