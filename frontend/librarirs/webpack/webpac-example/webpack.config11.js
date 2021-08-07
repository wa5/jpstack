const path=require("path")
module.exports={

    mode:"production",
    entry:"./src/engin.js",
    output:{
        path:path.join(__dirname,'itly'),
        filename:"[chunkhash].akshita.js"
    }
}