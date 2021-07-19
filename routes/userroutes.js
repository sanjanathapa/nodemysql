const express= require("express");
var approute = express.Router();

var myctrl = require("../controllers/usercontrollers");

approute.post('/adduser', myctrl.user);
approute.post('/role', myctrl.roles);
approute.post('/empdata', myctrl.empdetail);
approute.post('/empdepart', myctrl.empdepart);
approute.put('/update/:id', myctrl.updated);

module.exports=approute; 