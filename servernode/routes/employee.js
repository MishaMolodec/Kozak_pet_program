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





router.get('/employees', async function(req, res, next){
    console.log('Get request for all employees', req.query);
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    let query = {};

    const filter = req.query.filter;
    if(filter){
      query = query.select = {fio : filter.fio, birthdata: filter.birthdata, job: filter.job, salary:filter.salary};
      console.log("query="+query);
    }
    try{
    const data = await Employee.find(query,{},{skip,limit});
    const total = await Employee.count({});

    res.json({total, data});

    }catch(err){
        console.log(err);
      res.status(500).send("Error ");
        }
    // .exec(function(err, employees){
    //     if(err){
    //         console.log(err)
    //         res.status(500).send("Error retrieving employees");
    //     }else{
    //         res.json(employees);
    //     }
    // })

});

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

router.post('/employees', function(req, res, next){
    console.log('Post a employee');
    var newEmployee = new Employee(req.body);
	console.log(req.body, 'empl')
    newEmployee.save(function(err, insertedEmployee){
        if(err){
            res.send("Error saving employee");
        }else{
            res.json(insertedEmployee);
        }
    });
})

router.put('/employees/:id', function(req, res, next){
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

router.delete('/employees/:id', function(req, res, next){
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
