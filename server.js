// importando dependecias.
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');
var staticServer = require("./internals/static-server");

//Coneccion con la bade de datos.
//var DB = require("./connection/db");

//Importando el objeto configurador desde otro archivo javascript "config".
var config = require('./config/config');
//importandos manejadores
var handlears = require("./internals/hanslear");

//estableciendo tema de colores
colors.setTheme(config.colorTheme);

//importando configuraciones 
var IP = config.IP;
var PORT = config.PORT;

//_______________________________________________________________________________
var server = http.createServer(function (req, res) {
    
    var url =req.url;
    console.log(`>Recurso solicitado >${url}`.data);
    if (req.url === "/") {
        url = '/index.html'
    }
    //verifiando si la url esta solicitando a una accion
    // que puede hacer el server
    if(typeof(handlears[url]) === "function"){
        // Si exite una funcion en handlers llamdo como el conetenido como el contenido de la url
        handlears[url](req, res);
    }else{
        //no se encontro manejador un manejador para url
        //solicitando por el usuario se intentara servir de manera estatica
        staticServer.server(url,res);
    }
});

server.listen(PORT, IP, function () {
    console.log(`>server corriendo en http://${IP}:${PORT}...`.info);
});