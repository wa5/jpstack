var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"vinode33"
});
con.connect((err)=>{
    if(err)throw err;
    console.log("connected")
   var sql="CREATE TABLE Students(name VARCHAR(255),address VARCHAR(255))"
   con.query(sql,(err,result)=>{
       if(err)throw err;
       console.log('table created')

   })
})