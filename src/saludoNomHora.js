function saludar(nombre) {

    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let saludo = "";

    if (horaActual >= 6 && horaActual < 12) {        
        saludo += "Buenos dias, ";                   
    } else if (horaActual >= 12 && horaActual < 19) {
        saludo += "Buenas tardes, ";                 
    } else {
        saludo += "Buenas noches, ";                 
    }

    return saludo + nombre;
}

export default saludar;