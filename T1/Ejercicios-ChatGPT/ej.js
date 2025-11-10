"use strict"
{
    function fn (cadena) {
        let valores = cadena.split('');
        let valoresUnicos = [];
        let valorCount = [];
        valores.forEach(valor => {            
            if (!valoresUnicos.includes(valor)){
                let count = 0;
                valores.forEach(valor2 => {
                    if (valor2 === valor){
                        count++;
                    }
                });
                valoresUnicos.push(valor);
                valorCount.push(count);
            }
        })
        let output = ''; 
        for (let i = 0; i < valoresUnicos.length; i++){
            output += valorCount[i] + valoresUnicos[i];
        }
        return output;
    }

    console.log(fn("aaaabbbbccccaaasdsd"));

    let vector = [7,10,45,3,7,23];
    console.log(vector.sort((a,b) => a-b));


    function fn2 (cadena, patron) {
        const regExp = new RegExp(`${patron}`, 'g');
        return cadena.match(regExp);
    }

    console.log(fn2("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
}