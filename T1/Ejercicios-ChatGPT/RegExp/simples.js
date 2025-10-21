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

    // // 3️⃣ Validar número de teléfono español
    // // - Empieza por 6,7,8 o 9
    // // - Tiene 9 dígitos en total
    // // Ejemplo: miFuncion("612345678") → true
    // function validarTelefono(numero) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(numero);
    // }

    // // 4️⃣ Validar nombre de usuario
    // // - Empieza con una letra
    // // - Puede tener letras, números y guiones bajos
    // // - Longitud entre 3 y 16 caracteres
    // // Ejemplo: miFuncion("javi_23") → true
    // function validarUsuario(usuario) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(usuario);
    // }

    // // 5️⃣ Eliminar etiquetas HTML
    // // Recibe un texto con etiquetas HTML y devuelve el texto sin etiquetas.
    // // Ejemplo: miFuncion("<h1>Hola</h1> <p>Mundo</p>") → "Hola Mundo"
    // function eliminarEtiquetasHTML(texto) {
    // const regExp = // escribe aquí tu RegExp;
    // return texto.replace(regExp, '');
    // }

    // // 6️⃣ Validar URL (simplificada)
    // // - Empieza por http:// o https://
    // // - Debe tener un dominio y opcionalmente una ruta
    // // Ejemplo: miFuncion("https://www.google.com") → true
    // function validarURL(url) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(url);
    // }

    // // 7️⃣ Encontrar palabras que empiecen por mayúscula
    // // Devuelve un array con las palabras que empiecen por letra mayúscula.
    // // Ejemplo: miFuncion("Hola Soy Javier y vivo en Madrid") → ["Hola", "Soy", "Javier", "Madrid"]
    // function palabrasMayusculas(texto) {
    // const regExp = // escribe aquí tu RegExp;
    // return texto.match(regExp);
    // }

    // // 8️⃣ Validar contraseña segura
    // // Requisitos:
    // // - Al menos 8 caracteres
    // // - Al menos una mayúscula
    // // - Al menos una minúscula
    // // - Al menos un número
    // // - Al menos un símbolo especial (!@#$%^&*, etc.)
    // // Ejemplo: miFuncion("Hola123!") → true
    // function validarPassword(password) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(password);
    // }

    // // 9️⃣ Detectar palabras repetidas consecutivas
    // // Detecta si hay palabras repetidas seguidas (sin distinguir mayúsculas/minúsculas).
    // // Ejemplo: miFuncion("Hola hola mundo") → true
    // function detectarRepetidas(texto) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(texto);
    // }

    // // 🔟 Validar número de tarjeta (formato simple)
    // // - 16 dígitos continuos o 4 grupos de 4 separados por espacios o guiones
    // // Ejemplo: miFuncion("1234-5678-9012-3456") → true
    // function validarTarjeta(numero) {
    // const regExp = // escribe aquí tu RegExp;
    // return regExp.test(numero);
    // }
}