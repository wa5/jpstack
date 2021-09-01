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


   var sql="DELETE FROM students WHERE name='akshita'"
   con.query(sql,(err,result)=>{
       if(err)throw err;
       console.log(result.affectedRows)

   })
})