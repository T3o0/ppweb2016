var colors = require("colors");
colors.setTheme(require("../config/config").colorTheme);
var fortune = require("./fortune");


// creando el handler
// getfortune
var crackThecookie = function(req,res){
    console.log(">Cookie crash requested... ");
     //res.end("El exito es la suma del trabajo mas la disiplina");
    fortune.getFortune(function(fortunePaperObj){
        
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        res.end(fortunePaperObj);
        //res.end(JSON.stringify(fortunePaperObj));
    });
};

//objeto manejador creando
var handlear = {};

//registrando menajadores en el objeto manejador 
handlear["/getacookie"] = crackThecookie;

//exportando o
module.exports = handlear;
