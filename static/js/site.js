
var $;
var swal;
    function saludar(){
    //
    //$ sigon de dolar es nuestra variable
    //realizando una peticion asincrona con jquery
    $.get("./getacookie","",function(cookie, status){ //actualizar en heanlers en la ruta por getacookie
        //Contenido del callback
        console.log("> status: "+ status);
        //Presentando el mensaje 
        swal(cookie.paper);
    },'json');
}

