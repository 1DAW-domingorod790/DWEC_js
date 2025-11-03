"use strict"
{
    function anosPasados(comprobar) {
        let actual = new Date();

        let anos = actual - comprobar;
        return (anos.getFullYear);
    }

    console.log(anosPasados(new Date(2024,11,27)));
}