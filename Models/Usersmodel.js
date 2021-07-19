const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const users = sequelize.define('users',{
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    UserID:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    Role_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'roles',
            key:'Role_id'
        }
    },
    

})
module.exports=users;