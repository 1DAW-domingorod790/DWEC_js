"use strict" 
{
    let n;
    let acum = 0;
    let mult = 1;
    let cont = 0;

    do {
        n = parseInt(prompt("Introduce un número positivo: "));
        if (n > 0) {
            acum += n;
            mult *= n;
            cont++;
        }
    } while (n >= 0);

    console.log("Suma: " + acum);
    console.log("Producto: " + mult);
    console.log("Media: " + (acum / cont));

}