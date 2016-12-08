//var express = require('express');
var mongoose = require('mongoose'),
DB = 'mongodb://localhost/fortuneapp',
DB = mongoose.connect(DB);

/*
mongoose.connect("mongodb://localhost/fortuneapp");
app.set("view engine","jade");
app.use(express.static(public));

app.get("/",function(solisitud,res){
    res.render("index");
});
app.listen(8080);
*/