const express=require('express')
const app=express();

require('../sequalized/config/db.config')

const classes=require('../sequalized/src/models/classes.models')

app.get('/home',async(req,res)=>{
    const user= await classes.findone({
        where:{
            id:0
        }
    }).catch((err)=>{
    console.log(err)
    })
res.send("hello world",user)
});



app.listen(8001,()=>{
    console.log("server started")
})