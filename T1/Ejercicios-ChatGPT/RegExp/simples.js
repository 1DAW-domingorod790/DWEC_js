"use strict"
{
    // ===============================
    // 📁 Ejercicios RegExp en JavaScript
    // ===============================

    // 1️⃣ Validar fecha en formato DD/MM/AAAA
    // Crea una función que valide si una cadena representa una fecha en formato dd/mm/aaaa.
    // Ejemplo: miFuncion("25/12/2025") → true
    function validarFecha(fecha) {
    const regExp = /^\d{2}[/]\d{2}[/]\d{4}$/;
        return regExp.test(fecha);
    }

    //console.log(validarFecha("04/07/2005"))

    // 2️⃣ Extraer todos los números de una cadena
    // Devuelve un array con todos los números encontrados.
    // Ejemplo: miFuncion("Tengo 2 perros y 14 gatos") → [2, 14]
    function extraerNumeros(texto) {
        const regExp = /\d+/g;
        return texto.match(regExp);
    }

    //console.log(extraerNumeros("Tengo 2 perros y 14 gatos"));

    // 3️⃣ Validar número de teléfono español
    // - Empieza por 6,7,8 o 9
    // - Tiene 9 dígitos en total
    // Ejemplo: miFuncion("612345678") → true
    function validarTelefono(numero) {
        const regExp = /^[6-9]\d{8}$/;
        return regExp.test(numero);
    }
    //console.log(validarTelefono("712345678"));

    // 4️⃣ Validar nombre de usuario
    // - Empieza con una letra
    // - Puede tener letras, números y guiones bajos
    // - Longitud entre 3 y 16 caracteres
    // Ejemplo: miFuncion("javi_23") → true
    function validarUsuario(usuario) {
        const regExp = /^[a-z][a-z0-9_]{2,15}$/i;
        return regExp.test(usuario);
    }
    //console.log(validarUsuario("j1234567891234567"));


    // 5️⃣ Eliminar etiquetas HTML
    // Recibe un texto con etiquetas HTML y devuelve el texto sin etiquetas.
    // Ejemplo: miFuncion("<h1>Hola</h1> <p>Mundo</p>") → "Hola Mundo"
    function eliminarEtiquetasHTML(texto) {
        const regExp = /<[/]*[a-z0-9]+>/g;
        return texto.replace(regExp, '');
    }
    //console.log(eliminarEtiquetasHTML("<h1>Hola</h1> <p>Mundo</p>"));

    // 6️⃣ Validar URL (simplificada)
    // - Empieza por http:// o https://
    // - Debe tener un dominio y opcionalmente una ruta
    // Ejemplo: miFuncion("https://www.google.com") → true
    function validarURL(url) {
        const regExp = /^https?:\/\/(www\.)?[a-z]+\.[a-z]{2,}$/;
        return regExp.test(url);
    }
    //console.log(validarURL("http://www.google.com"));

    // 7️⃣ Encontrar palabras que empiecen por mayúscula
    // Devuelve un array con las palabras que empiecen por letra mayúscula.
    // Ejemplo: miFuncion("Hola Soy Javier y vivo en Madrid") → ["Hola", "Soy", "Javier", "Madrid"]
    function palabrasMayusculas(texto) {
        const regExp = /\b[A-Z][a-z]*\b/g;
        return texto.match(regExp);
    }
    //console.log(palabrasMayusculas("Hola Soy Javier y vivo en Madrid"))

    // 8️⃣ Validar contraseña segura
    // Requisitos:
    // - Al menos 8 caracteres
    // - Al menos una mayúscula
    // - Al menos una minúscula
    // - Al menos un número
    // - Al menos un símbolo especial (!@#$%^&*, etc.)
    // Ejemplo: miFuncion("Hola123!") → true
    function validarPassword(password) {
        const regExp = /^([A-Z]]+[a-z]+[0-9]+[!@#$%^&*]+){8,}$/;
        return regExp.test(password);
    }
    //console.log(validarPassword("Hola123!"))

    // 9️⃣ Detectar palabras repetidas consecutivas
    // Detecta si hay palabras repetidas seguidas (sin distinguir mayúsculas/minúsculas).
    // Ejemplo: miFuncion("Hola hola mundo") → true
    // function detectarRepetidas(texto) {
    //     const regExp = // escribe aquí tu RegExp;
    //     return regExp.test(texto);
    // }

    // 🔟 Validar número de tarjeta (formato simple)
    // - 16 dígitos continuos o 4 grupos de 4 separados por espacios o guiones
    // Ejemplo: miFuncion("1234-5678-9012-3456") → true
    function validarTarjeta(numero) {
        const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        return regExp.test(numero);
    }
    //console.log(validarTarjeta("1234-5678-9012-3456"));

    // 11️⃣ Programa una función que valide si una cadena contiene solo letras (mayúsculas o minúsculas).
    // Ejemplo: miFuncion("HolaMundo") → true
    // No deben aceptarse números, espacios ni símbolos.
    let regExp = /^[a-z]+$/gi;
    //console.log(regExp.test("HolaMundo"));

    // 12️⃣ Programa una función que valide si una cadena es una fecha en formato DD/MM/AAAA.
    // Ejemplo: miFuncion("25/12/2024") → true
    // Solo se valida el formato (no los valores reales del calendario).
    regExp = /^\d{2}\/\d{2}\/\d{4}$/;
    //console.log(regExp.test("12/04/0001"));

    // 13️⃣ Programa una función que valide si un texto representa una hora en formato 24 horas (HH:MM).
    // Ejemplo: miFuncion("23:45") → true
    // Horas de 00 a 23 y minutos de 00 a 59.
    regExp = 

    // 14️⃣ Programa una función que valide si una cadena contiene un número entero o decimal positivo.
    // Ejemplo: miFuncion("123") → true, miFuncion("45.67") → true
    // No se aceptan signos negativos ni otros caracteres.

    // 15️⃣ Programa una función que valide si un texto es un código postal de 5 dígitos.
    // Ejemplo: miFuncion("28013") → true
    // Solo se aceptan exactamente 5 números.

}