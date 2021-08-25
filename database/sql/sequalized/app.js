const express=require('express')
const app=express();

require('../sequalized/config/db.config')
app.get('/home',(req,res)=>{
res.send("hello world")
});

app.post('/home',(req,res)=>{
    res.send("hello world")
    });

    app.delete('/home',(req,res)=>{
        res.send("hello world")
        });
    

app.listen(8001,()=>{
    console.log("server started")
})