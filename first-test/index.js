/* var express = require('express'); */

const express = require("express");
/* var app = express(); */
const app=express();

/* app.get('/', function(req, res){
   res.send("Hello world 2!");
}); */
app.get('/',(req,res) => {
    console.log("/ is running ");

    res.send("<h1>well come to jam rock 2</h1>");
});
const port = 3000;
app.listen(port,() => {
    console.log("example listening");
});
/* app.listen(3000); */


/* const express = require("express");




app.get("/",(req,res) => {
    console.log("/ is running ");

    res.send("<h1>well come to jam rock</h1>");
}); */