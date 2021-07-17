const express=require('express')
const app=express()

app.get("/",(req,resp)=>{
    resp.send("hello world")
})
app.get("/about",(req,resp)=>{
    resp.send("hello world about")
})
app.get("/contact",(req,resp)=>{
    resp.send("hello world contact")
})
app.listen(8000,()=>{
    console.log("im working")
})