const Sequelized=require('sequelize')


const db=new Sequelized('vinod','root','',{
    host:'localhost',
    dialect:'mysql',
pool:{max:5,min:0,idle:1000000}
    
})
db.authenticate().then((con)=>{
    console.log("connected to db",con)
}).catch((err)=>{
    console.log("connected to db",err)
})