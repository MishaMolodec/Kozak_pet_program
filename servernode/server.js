var express = require('express');
var bodyParser = require('body-parser');

var http = require('http');
const cors = require('cors');

//var index = require('./routes/index');
var employee = require('./routes/employee');

var port = 3000;
var app = express();



app.use(cors({origin: '*'}))

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use('/', index);
app.use('/api', employee);

app.use('*',function (req, res) {
    res.redirect('/');
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})