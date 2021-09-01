const mongoose=require('mongoose')
const {Schema}= mongoose


const studentSchema=new Schema({
    name:String,
    class:String,
    age:Number
})

module.exports=mongoose.model('students2',studentSchema)


