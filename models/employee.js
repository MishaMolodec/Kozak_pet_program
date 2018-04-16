var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    fio: String,
    birthdata: Date,
    job: String,
	salary: Number
});

module.exports = mongoose.model('employee', employeeSchema, 'employees');