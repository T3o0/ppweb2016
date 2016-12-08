var mime = require("mime"); //exportar mime y bawer si es que no existe.
var fs = require("fs");
//exportando la funcinalidad del servidor
//astatico
exports.server = function(url, res){
    //generar la ruta real del archivo solicitado.
    // averiguar el Mine Type que se va a servir.
    var archivoPath = './static'+ url;
    console.log(`>se servira archivo >${archivoPath}`.data);
    // Seleccionar el MImE Type
    var mimeType = mime.lookup(archivoPath);

    fs.readFile(archivoPath, 
    function (err, content) 
    {
            if (err) {//hubo error
                res.writeHead(500, 
                {
                    'Content-Type': "text/html"

                });
                console.log('>error en la lectura de'.error +
                    ' un archivo: ln20 server.js'.error);
                res.end("<h1>Error Interno</h1>");

            } else {//no hubo error
                res.writeHead(200, 
                {
                    'Content-Type': mimeType
                });
                console.log(`>Sirviendo: ${archivoPath}`.data);
                res.end(content);
            }
        });
};