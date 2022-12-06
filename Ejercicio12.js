class Ejercicio12 {
    constructor() {

    }

    mostrar(files) {
        var narchivos = files.length;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            //El navegador soporta el API File
            $("main").text("");
            for (var i = 0; i < narchivos; i++) {
    
    
                this.archivo = files[i];
    
                $("main").append("<p>Nombre del archivo: " + this.archivo.name + "</p>");
                $("main").append("<p>Tamaño del archivo:    " + this.archivo.size + " bytes</p>");
                $("main").append("<p>Tipo del archivo: " + this.archivo.type + "</p>");
                this.leer(this.archivo);
    
    
            }
        }
        else document.write("<p>El navegador no soporta el API File, el programa no funcionará correctamente.</p>");
        
    }

    leer(archivo) {
        var tipoTexto = /text.*/;
        var tipoJson = /application.json/;
        var tipoXml = /text.xml/
        if (this.archivo.type.match(tipoTexto) || this.archivo.type.match(tipoJson) || this.archivo.type.match(tipoXml)) {
            let reader = new FileReader();

            reader.onload = function (evento) {
                $("main").append("<p>Contenido de: " + archivo.name + "</p>");
                $("main").append("<pre></pre>");
                $("pre").last().text(reader.result)

            };

            reader.readAsText(this.archivo);

        }
    }
}
var ej12 = new Ejercicio12();