var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Forum", function(err, database){
    if(err){
        console.log("Error: " + err);
    }
    else {
        console.log("Wer'e connected to: MongoDB, Database: " + database.name);
    }
});

var Message = mongoose.model("Message", {
    time: String,
    title: String,
    message: String
});

app.post("/messages", function(request, response){
   var message = new Message(request.body);
   message.time = new Date().toLocaleDateString()+" at: "+new Date().toLocaleTimeString();
   message.save(function(err, info){
       if(err){
           console.log("Error:" + err);
           response.status(500);
           response.send(err);
       }
       else{
           response.status(201);
           response.send(info)
       }
   });
});

app.get("/messages", function(request, response){
    Message.find({}, function(err, messages){
        if(err){
            console.log("Error: "+ err);
            response.status(500)
            response.send(err);
        }
        else{
            response.send(messages);
        }
    });
});

app.listen(3000, function(){
    console.log("listening on http://localhost:3000");
});