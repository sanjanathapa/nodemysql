const sequelize = require("../config/db");
const User = require("../Models/Usersmodel");
const Roles = require("../Models/RolesModel");
const empdetails = require("../Models/empdetails");
const empdepartment = require("../Models/empdepartmodel");


exports.user=((req,res)=>{
    const user={                     //create user
        username:req.body.username,
        UserID:req.body.UserID,
        Role_id:req.body.Role_id,
    };
    User.create(user).then((data)=>{      //save user in the db.
        res.send(data)
    })
    .catch((err)=>{
        res.status(401).send({
        message:err.message
        })
    })
})

exports.roles=((req,res)=>{
    const role={
        Role_id:req.body.Role_ID,
        RoleName:req.body.RoleName
    };
    Roles.create(role).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(401).send({
         message:err.message   
        })
    })
})

//retrieve a single object
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    user.findByPk(id).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        })
      })
  }

  //Update an object
//Update user identified by the id in the request:

exports.updated = (req, res) => {
  //const id = req.params.id;
  User.update(req.body, { where: { UserID: req.params.id }
  })
    .then((data)=>{
        res.send(data)     
    })
    .catch(err => {
      res.status(401).send({
        message: "Error updating user with id=" + id
      })
    })
}

exports.empdetail=((req, res)=>{
    const empdetail={
        UserID:req.body.UserID,
        empid:req.body.empid,
        country:req.body.country,
        state:req.body.state,
        Department:req.body.Department
    }
    empdetails.create(empdetail).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(401).send({
            message:err.message
        })
    })
})

exports.empdepart=(req,res)=>{
    const empdepart={
        empid:req.body.empid,
        departmentId:req.body.departmentId,
        Startdate:req.body.start_date,
        Enddate:req.body.end_date
    }
    empdepartment.create(empdepart)
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send('Error in Creating Employee Department',err)
    })
}