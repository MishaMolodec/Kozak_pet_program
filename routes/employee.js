var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/employee');

var db = "mongodb://odmen:odmen@ds231749.mlab.com:31749/employee";
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
            console.log(err)
            res.status(500).send("Error retrieving employees");
        }else{
            res.json(employees);
        }
    })

})

router.get('/employees/:id', function(req, res, next){
    console.log('Get request for a single employee');
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
    var newEmployee = new Employee(req.body);
	
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