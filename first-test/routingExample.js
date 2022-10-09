const express = require("express");
const app=express();

app.get('/hello',(req,res) => {
    console.log("/ is running ");

    res.send("<h1>well come to jam rock 2</h1>");
});
app.post('/hello',(req,res) => {
    console.log("/ is running ");

    res.send("<h1>well come to jam rock 2</h1>");
});

const port = 3000;
app.listen(port,() => {
    console.log("example listening");
});