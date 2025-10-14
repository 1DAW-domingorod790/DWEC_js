"use strict"
{
    const f1 = (cadena) => {
        let regExp = /[0-9]/g;
        return cadena.match(regExp);
    }

    console.log(f1("23sefsfe 4fsfes f252 awewae"));
}