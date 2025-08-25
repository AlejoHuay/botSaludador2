function saludar(nombre, gen, edad, idioma) {

    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let saludo = "";
    let trato = "";

    if(idioma === "es"){
        if (horaActual >= 6 && horaActual < 12) {        
            saludo = "Buenos dias, ";                   
        } else if (horaActual >= 12 && horaActual < 19) {
            saludo = "Buenas tardes, ";                 
        } else {
            saludo = "Buenas noches, ";                 
        }

        trato = gen === "M" ? "mi estimado " : "mi estimada ";

        if(edad > 30){
            trato += gen === "M" ? "señor " : "señora ";
        }
    }else{
        if (horaActual >= 6 && horaActual < 12) {        
            saludo = "Good morning, ";                   
        } else if (horaActual >= 12 && horaActual < 19) {
            saludo = "Good afternoon, ";                 
        } else {
            saludo = "Good evening, ";                 
        }

        trato = "dear ";

        if(edad > 30){
            trato += gen === "M" ? "Mr " : "Ms ";
        }
    }
    
    return saludo + trato + nombre;
}

export default saludar;