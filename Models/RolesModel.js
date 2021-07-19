const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Roles = sequelize.define('role',{
    Role_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    RoleName:{
        type:Sequelize.STRING,
        allowNull:false
    }
    //timeStamps:false

})

module.exports=Roles