//basic reguired imports in Node
var express = require("express");
//var bodyParser = require("body-parser");
//var cors = require("cors");
//used for easy parsing of user-agent for response
var userAgent = require("express-useragent");
//Create an instance of express and instantiate
var app = module.exports = express();
//app.use(bodyParser.json());
//app.use(cors());
app.use(userAgent.express());
//API url
var api = '/api/whozat';
app.get(api, function(req, res, next){
    var lanGuage = req.acceptsLanguages();
    //could not capitalize.userAgent..
    var softWare = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
//  var softWare = req.get('User-Agent');    
//  var softWare = req.headers['user-agent']; maybe deprecated?!
    var ipAdress = req.ip;
 console.log('101');
 res.json({'upAddress': ipAdress, 'Longuage': lanGuage, 'SoftWare': softWare});
});


//app listening
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("omg");
})