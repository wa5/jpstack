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


   var sql="INSERT INTO students(name,address) VALUES ('mushab','india')"
   con.query(sql,(err,result)=>{
       if(err)throw err;
       console.log('table inserted')

   })
})