"use strict"
{
    function validarEmail (email) {
        let regExp = /^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,}$/;
        return regExp.test(email);
    }

    console.log(validarEmail("12@gmail.com"));
}