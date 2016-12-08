
var mongodb = require ("mongodb");

//Extrayendo el cliente que tare el paquete mongodb
var mongoClient = mongodb.MongoClient;
 var connectionUrl = 'mongodb://localhost/fortuneapp';

mongoClient.connect(connectionUrl, function(err, db){
    if(err){
        console.log(">no se puede conectar a al base de datos ...")
        throw err;
    }
    var papers = db.collection('fortunepaper');
var $;
    var mensaje = $.post('form1');
    
    for(var i = 2; i < process.argv.length; i++){
       mensaje += (process.argv[i]+ " ");
        }
    console.log(`> Mensaje rescatado ${mensaje}`);
    
    //insertando en la coleccion
    papers.insert({
        "paper" : mensaje
    },function(err, res){
        if(err){
            console.log("<No se puede insertar el documento");
            db.close();
            throw err;
            
         } 
        //si llega aqui si pudo insertar
        console.log
        (`>Resultado de la insercion: ${JSON.stringify(res)}`);
            db.close();
    }); 
    
 });
    

