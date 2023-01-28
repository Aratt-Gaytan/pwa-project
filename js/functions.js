class Rectangulo{
    constructor(_alto, _ancho){

        this.alto = _alto;
        this.ancho = _ancho;
    }

    calcularArea(){
        return this.alto * this.ancho;
    }
}


function saludar(){
    alert("buenos dias");
}


function area(){
    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("alto").value;
    let rectangulo1 = new Rectangulo(alto, ancho);
    //alert(rectangulo1.calcularArea()); 
    alert("Hola mundo");
}
