const Sequalize=require('sequelize')

const db=require('../../config/db.config')

module.exports=db.define('classes',{
    id:{
        type:Sequalize.INTEGER(11),
        allowNull:false,
        autoIncreament:true
    },
    classname:{
        type:Sequalize.STRING(255),
        allowNull:false,
        unique:false
    },
    timing:{
        type:Sequalize.DATE
    },
    collage:{
        type:Sequalize.STRING(255),
        allowNull:false,
        unique:false
    }
},{timestamps:false})