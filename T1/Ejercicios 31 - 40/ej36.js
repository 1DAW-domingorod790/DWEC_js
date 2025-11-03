"use strict"
{
    function encontrarMaximosYminimos (vector) {
        let max = 0;
        let min = 1000;

        vector.forEach(element => {
            if (element > max){
                max = element;
            }
            if (element < min){
                min = element;
            }
        });

        return [max, min];
    }

    console.log(encontrarMaximosYminimos([1,4,34,99,-2]));
}