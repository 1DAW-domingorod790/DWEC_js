"use strict"
{
    function cuadrado (vector) {
        return vector.map(element => element*element);
    }

    console.log(cuadrado([1, 4, 5]));
}