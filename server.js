var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');

//Importando el objeto configurador desde otro archivo javascript "config".
var config = require('./config/config');

//estableciendo tema de colores
colors.setTheme(config.colorTheme);

//importando configuraciones 
var IP = config.IP;
var PORT = config.PORT;

//_______________________________________________________________________________
var server = http.createServer(function (req, res) {
    
    var url =req.url;
    if (req.url === "/") {
        url = '/index.html'
    }
    //generar la ruta real del archivo solicitado.
    // averiguar el Mine Type que se va a servir.

    console.log(`>Recurso solicitado >${url}`.data);
    var archivoPath = './static'+ url;
    console.log(`>se servira archivo >${archivoPath}`.data);
    // Seleccionar el MImE Type
    var mimeType = mime.lookup(archivoPath);

    fs.readFile(archivoPath, 
    function (err, content) {
            if (err) {//hubo error
                res.writeHead(500, {
                    'Content-Type': "text/html"

                });
                console.log('>error en la lectura de'.error +
                    ' un archivo: ln20 server.js'.error);
                res.end("<h1>Error Interno</h1>");

            } else {//no hubo error
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                console.log(`>Sirviendo: ${archivoPath}`.data);
                res.end(content);
            }
        });
});

server.listen(PORT, IP, function () {
    console.log(`>server corriendo en http://${IP}:${PORT}...`.info);
});


// Me falta el MImE