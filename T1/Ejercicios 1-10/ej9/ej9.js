"use strict"
{
    let n1; 
    do{
        n1 = parseInt(prompt("Introduce un número"));
    }while(isNaN(n1));
    
    let n2;
    do{
        n2 = parseInt(prompt("Introduce un número"));
    }while(isNaN(n2));

    let operacion = '';
    do{
        operacion = prompt("Introduce la operación");
        if (operacion != '+' && operacion != '-' && operacion != '*' && operacion != '/'){
            alert("Operación inválida.");
        }

    } while (operacion != '+' && operacion != '-' && operacion != '*' && operacion != '/');
    
    switch (operacion) {
        case '+': 
            console.log(n1 + n2);
            break;
        case '-':
            console.log(n1 - n2);
            break;
        case '/':
            console.log(n1 / n2);
            break;
        case '*':
            console.log(n1*n2);
            break;
        
    }

}