const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const empdetails = sequelize.define('employedetail', {
    UserID:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'users',
            key:'UserID'
        }
    },
    empid:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },
    state:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Department:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=empdetails