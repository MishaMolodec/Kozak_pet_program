var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/employee');

var db = "mongodb://uservishwas:pwvishwas@ds113678.mlab.com:13678/videoplayer";
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/employees', function(req, res, next){
    console.log('Get request for all employees');
    Employee.find({})
    .exec(function(err, employees){
        if(err){
            res.send("Error retrieving employees");
        }else{
            res.json(employees);
        }
    })
})

router.get('/employees/:id', function(req, res, next){
    console.log('Get request for a single video');
    Employee.findById(req.params.id)
    .exec(function(err, employees){
        if(err){
            res.send("Error retrieving employees");
        }else{
            res.json(employees);
        }
    })
})

router.post('/employee', function(req, res, next){
    console.log('Post a employee');
    var newEmployee = new Employee();
    newEmployee.fio = req.body.fio;
    newEmployee.birthdata = req.body.birthdata;
    newEmployee.job = req.body.job;
	newEmployee.salary = req.body.salary;
	
    newEmployee.save(function(err, insertedEmployee){
        if(err){
            res.send("Error saving employee");
        }else{
            res.json(insertedEmployee);
        }
    });
})

router.put('/employee/:id', function(req, res, next){
    console.log('Update an employee');
    Employee.findByIdAndUpdate(req.params.id,
    {
        $set: {fio: req.body.fio, birthdata: req.body.birthdata, job: req.body.job, salary: req.body.salary}
    },
    {
        new: true
    },
    function(err, updatedEmployee){
        if(err){
            res.send("Error updating employee");
        }else{
            res.json(updatedEmployee);
        }
    }
    )
})

router.delete('/employee/:id', function(req, res, next){
    console.log('Deleting an employee');
    Employee.findByIdAndRemove(req.params.id, function(err, deletedEmployee){
        if(err){
            res.send("Error deleting employee");
        }else{
            res.json(deletedEmployee);
        }
    })
})

module.exports = router;