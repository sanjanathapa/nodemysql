const  Sequelize = require('sequelize');
const sequelize = require("../config/db");

const EmployeeDepartment = sequelize.define('empdepartmnt',{
    
    empid:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        references:{
            model:'employedetails',
            key:'empid'
        }
    },
    departmentId:{
        type:Sequelize.INTEGER,
        allowNull:false ,
        primaryKey:true
    },
    Startdate:{
        type:Sequelize.DATE,
        allowNull:false 
    },
    Enddate:{
        type:Sequelize.DATE,
        allowNull:false 
    }
})
module.exports=EmployeeDepartment