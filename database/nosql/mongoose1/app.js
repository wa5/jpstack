require('./config/db.config')

const Students=require('./src/models/Students.schema')


const  vinodth=new Students({name:'vinode',class:'mern',age:20})

//vinodth.save()
//const  akshita=new Students({name:'akshita',class:'mern',age:20})

const pravalika=new Students({name:'pravalika',class:'mern',age:20})

//pravalika.save()


// Students.findOne({name:'pravalika'},(err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })

// Students.findOneAndUpdate({name:'pravalika'},{name:'madagoni pravali'},
// {overwrite:false,new:true},

// (err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })

Students.findOneAndDelete({name:'vinode'},
(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})