const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/vinode',{
useNewUrlParser:true,
useUnifiedTopology:true
},(err,res)=>{
    if(err){
        console.log("error",err)
    }else
    console.log("db connected")
})