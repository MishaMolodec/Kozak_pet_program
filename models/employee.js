var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    fio: String,
    birthdata: String,
    job: String,
	salary: String
});

module.exports = mongoose.model('employee', employeeSchema, 'employees');