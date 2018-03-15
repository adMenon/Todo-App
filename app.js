var express = require('express');
var todoController = require('./controller/todoController');


var app = express();

//template engine
app.set('view engine','ejs');

//static files
app.use(express.static('public'));

//fire controllers
todoController(app);

//listen to a port
app.listen(8000);
console.log('listening to port 8000');
