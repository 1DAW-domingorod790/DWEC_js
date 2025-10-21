"use strict"
{
    function validarNombre (nombre) {
        let regExp = /^[a-z\s]+$/i;

        return regExp.test(nombre);
    }

    console.log(validarNombre("Carmelo 12 ANthony"))
}